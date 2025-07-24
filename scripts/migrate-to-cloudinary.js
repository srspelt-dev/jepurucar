const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configuración de carpetas
const FOLDERS_TO_MIGRATE = [
  'public/images/vehiculos',
  'public/images/Equipo',
  'public/videos'
];

// Mapeo de carpetas locales a carpetas de Cloudinary
const FOLDER_MAPPING = {
  'public/images/vehiculos': 'jepuru/vehiculos',
  'public/images/Equipo': 'jepuru/equipo',
  'public/videos': 'jepuru/videos'
};

// Extensiones de archivos soportados
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
const VIDEO_EXTENSIONS = ['.mp4', '.mov', '.avi', '.webm'];

async function uploadFile(filePath, cloudinaryFolder) {
  try {
    const fileName = path.basename(filePath, path.extname(filePath));
    const fileExtension = path.extname(filePath).toLowerCase();
    
    // Determinar el tipo de recurso
    const resourceType = VIDEO_EXTENSIONS.includes(fileExtension) ? 'video' : 'image';
    
    console.log(`📤 Subiendo: ${fileName}${fileExtension} a ${cloudinaryFolder}`);
    
    const result = await cloudinary.uploader.upload(filePath, {
      folder: cloudinaryFolder,
      public_id: fileName,
      resource_type: resourceType,
      overwrite: true,
      // Optimizaciones para imágenes
      ...(resourceType === 'image' && {
        quality: 'auto',
        fetch_format: 'auto',
        transformation: [
          { width: 1200, height: 800, crop: 'limit' }
        ]
      }),
      // Optimizaciones para videos
      ...(resourceType === 'video' && {
        quality: 'auto',
        fetch_format: 'auto'
      })
    });
    
    console.log(`✅ Subido exitosamente: ${result.secure_url}`);
    return {
      originalPath: filePath,
      cloudinaryUrl: result.secure_url,
      publicId: result.public_id,
      resourceType: resourceType,
      width: result.width,
      height: result.height,
      format: result.format,
      size: result.bytes
    };
    
  } catch (error) {
    console.error(`❌ Error subiendo ${filePath}:`, error.message);
    return null;
  }
}

async function scanDirectory(dirPath) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Recursivamente escanear subdirectorios
        const subFiles = await scanDirectory(fullPath);
        files.push(...subFiles);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if ([...IMAGE_EXTENSIONS, ...VIDEO_EXTENSIONS].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error escaneando ${dirPath}:`, error.message);
  }
  
  return files;
}

async function migrateToCloudinary() {
  console.log('🚀 Iniciando migración a Cloudinary...\n');
  
  const results = {
    successful: [],
    failed: [],
    totalFiles: 0,
    totalSize: 0
  };
  
  for (const localFolder of FOLDERS_TO_MIGRATE) {
    if (!fs.existsSync(localFolder)) {
      console.log(`⚠️  Carpeta no encontrada: ${localFolder}`);
      continue;
    }
    
    console.log(`📁 Escaneando: ${localFolder}`);
    const files = await scanDirectory(localFolder);
    console.log(`   Encontrados ${files.length} archivos multimedia\n`);
    
    const cloudinaryFolder = FOLDER_MAPPING[localFolder];
    
    for (const file of files) {
      results.totalFiles++;
      const result = await uploadFile(file, cloudinaryFolder);
      
      if (result) {
        results.successful.push(result);
        results.totalSize += result.size || 0;
      } else {
        results.failed.push(file);
      }
      
      // Pausa pequeña para no sobrecargar la API
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }
  
  // Generar reporte
  console.log('\n📊 REPORTE DE MIGRACIÓN');
  console.log('='.repeat(50));
  console.log(`Total de archivos procesados: ${results.totalFiles}`);
  console.log(`✅ Subidos exitosamente: ${results.successful.length}`);
  console.log(`❌ Fallidos: ${results.failed.length}`);
  console.log(`📦 Tamaño total subido: ${(results.totalSize / 1024 / 1024).toFixed(2)} MB`);
  
  // Guardar resultados en un archivo JSON
  const reportPath = 'cloudinary-migration-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Reporte guardado en: ${reportPath}`);
  
  // Mostrar URLs de ejemplo
  if (results.successful.length > 0) {
    console.log('\n🔗 URLs de ejemplo:');
    results.successful.slice(0, 5).forEach(item => {
      console.log(`   ${path.basename(item.originalPath)}: ${item.cloudinaryUrl}`);
    });
  }
  
  return results;
}

// Ejecutar migración
migrateToCloudinary().catch(console.error); 