require('dotenv').config({ path: '.env.local' });
const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Archivos específicos para migrar
const FILES_TO_MIGRATE = [
  {
    localPath: 'public/images/jepurucar.png',
    cloudinaryFolder: 'jepuru/brand',
    publicId: 'logo'
  },
  {
    localPath: 'public/images/flags/ar.png',
    cloudinaryFolder: 'jepuru/flags',
    publicId: 'argentina'
  },
  {
    localPath: 'public/images/flags/br.png',
    cloudinaryFolder: 'jepuru/flags',
    publicId: 'brasil'
  },
  {
    localPath: 'public/images/flags/unnamed.png',
    cloudinaryFolder: 'jepuru/flags',
    publicId: 'paraguay'
  }
];

async function uploadFile(fileConfig) {
  try {
    const { localPath, cloudinaryFolder, publicId } = fileConfig;
    
    if (!fs.existsSync(localPath)) {
      console.log(`⚠️  Archivo no encontrado: ${localPath}`);
      return null;
    }

    console.log(`📤 Subiendo: ${path.basename(localPath)} → ${cloudinaryFolder}/${publicId}`);
    
    const result = await cloudinary.uploader.upload(localPath, {
      folder: cloudinaryFolder,
      public_id: publicId,
      resource_type: 'image',
      overwrite: true,
      quality: 'auto',
      fetch_format: 'auto',
      transformation: [
        { width: 400, height: 300, crop: 'limit' }
      ]
    });
    
    console.log(`✅ Subido exitosamente: ${result.secure_url}`);
    return {
      originalPath: localPath,
      cloudinaryUrl: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
      format: result.format,
      size: result.bytes
    };
    
  } catch (error) {
    console.error(`❌ Error subiendo ${fileConfig.localPath}:`, error.message);
    return null;
  }
}

async function migrateRemainingFiles() {
  console.log('🚀 Migrando archivos restantes a Cloudinary...\n');
  
  const results = {
    successful: [],
    failed: [],
    totalFiles: FILES_TO_MIGRATE.length,
    totalSize: 0
  };
  
  for (const fileConfig of FILES_TO_MIGRATE) {
    const result = await uploadFile(fileConfig);
    
    if (result) {
      results.successful.push(result);
      results.totalSize += result.size || 0;
    } else {
      results.failed.push(fileConfig.localPath);
    }
    
    // Pausa pequeña para no sobrecargar la API
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Generar reporte
  console.log('\n📊 REPORTE DE MIGRACIÓN FINAL');
  console.log('='.repeat(50));
  console.log(`Total de archivos procesados: ${results.totalFiles}`);
  console.log(`✅ Subidos exitosamente: ${results.successful.length}`);
  console.log(`❌ Fallidos: ${results.failed.length}`);
  console.log(`📦 Tamaño total subido: ${(results.totalSize / 1024).toFixed(2)} KB`);
  
  // Mostrar URLs generadas
  if (results.successful.length > 0) {
    console.log('\n🔗 URLs generadas:');
    results.successful.forEach(item => {
      console.log(`   ${path.basename(item.originalPath)}: ${item.cloudinaryUrl}`);
    });
    
    console.log('\n📝 URLs para usar en el código:');
    results.successful.forEach(item => {
      const fileName = path.basename(item.originalPath, path.extname(item.originalPath));
      const optimizedUrl = item.cloudinaryUrl.replace('/upload/', '/upload/w_auto,q_auto,f_auto/');
      console.log(`   ${fileName}: ${optimizedUrl}`);
    });
  }
  
  return results;
}

if (require.main === module) {
  migrateRemainingFiles()
    .then(() => {
      console.log('\n🎉 ¡Migración completada!');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Error en la migración:', error);
      process.exit(1);
    });
}

module.exports = { migrateRemainingFiles }; 