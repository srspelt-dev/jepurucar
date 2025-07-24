#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Imágenes que DEBEN mantenerse (aún se usan localmente)
const keepImages = [
  'jepurucar.png',           // Logo principal
  'pattern.png',             // Patrón de fondo
  'flags/br.png',            // Bandera Brasil
  'flags/ar.png',            // Bandera Argentina
  'flags/unnamed.png'        // Bandera adicional
];

// Directorios que pueden eliminarse completamente (ya migrados)
const dirsToRemove = [
  'public/images/vehiculos',
  'public/images/Equipo'
];

// Función para verificar si un archivo debe mantenerse
function shouldKeep(filePath) {
  const relativePath = filePath.replace('public/images/', '');
  return keepImages.includes(relativePath);
}

// Función para obtener el tamaño de un directorio
function getDirSize(dirPath) {
  let totalSize = 0;
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file.name);
    if (file.isDirectory()) {
      totalSize += getDirSize(fullPath);
    } else {
      totalSize += fs.statSync(fullPath).size;
    }
  }
  
  return totalSize;
}

// Función para formatear bytes
function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}

// Función principal
export function cleanupImages() {
  console.log('🧹 Iniciando limpieza de imágenes migradas a Cloudinary...\n');
  
  let totalSpaceSaved = 0;
  let filesRemoved = 0;
  
  // Eliminar directorios completos
  for (const dir of dirsToRemove) {
    if (fs.existsSync(dir)) {
      const dirSize = getDirSize(dir);
      const files = fs.readdirSync(dir, { recursive: true });
      
      console.log(`📁 Eliminando directorio: ${dir}`);
      console.log(`   📊 Archivos: ${files.length}`);
      console.log(`   💾 Tamaño: ${formatBytes(dirSize)}`);
      
      fs.rmSync(dir, { recursive: true, force: true });
      
      totalSpaceSaved += dirSize;
      filesRemoved += files.length;
      
      console.log(`   ✅ Eliminado exitosamente\n`);
    }
  }
  
  // Revisar otros archivos individualmente
  const imagesDir = 'public/images';
  if (fs.existsSync(imagesDir)) {
    const walk = (dir) => {
      const files = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const file of files) {
        const fullPath = path.join(dir, file.name);
        
        if (file.isDirectory()) {
          walk(fullPath);
          // Intentar eliminar directorio vacío
          try {
            if (fs.readdirSync(fullPath).length === 0) {
              fs.rmdirSync(fullPath);
              console.log(`📁 Directorio vacío eliminado: ${fullPath}`);
            }
          } catch {
            // Directorio no vacío, está bien
          }
        } else {
          const isImageFile = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file.name);
          
          if (isImageFile && !shouldKeep(fullPath)) {
            const fileSize = fs.statSync(fullPath).size;
            fs.unlinkSync(fullPath);
            
            totalSpaceSaved += fileSize;
            filesRemoved++;
            
            console.log(`🗑️  Eliminado: ${fullPath} (${formatBytes(fileSize)})`);
          }
        }
      }
    };
    
    walk(imagesDir);
  }
  
  console.log('\n🎉 Limpieza completada!');
  console.log(`📊 Archivos eliminados: ${filesRemoved}`);
  console.log(`💾 Espacio liberado: ${formatBytes(totalSpaceSaved)}`);
  
  console.log('\n📋 Imágenes mantenidas:');
  keepImages.forEach(img => {
    const fullPath = path.join('public/images', img);
    if (fs.existsSync(fullPath)) {
      console.log(`   ✅ ${img}`);
    }
  });
}

// Ejecutar si es llamado directamente
if (process.argv[1] === new URL(import.meta.url).pathname) {
  cleanupImages();
} 