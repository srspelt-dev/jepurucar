require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadVideo() {
  try {
    console.log('📤 Subiendo video jepuru.mp4...');
    
    const result = await cloudinary.uploader.upload('public/videos/jepuru.mp4', {
      folder: 'jepuru/videos',
      public_id: 'jepuru',
      resource_type: 'video',
      eager: [
        { width: 1280, height: 720, crop: 'scale', quality: 'auto' },
        { width: 854, height: 480, crop: 'scale', quality: 'auto' }
      ],
      eager_async: true,
      eager_notification_url: 'https://webhook.site/your-webhook-url', // Opcional
      overwrite: true
    });
    
    console.log('✅ Video subido exitosamente!');
    console.log('URL del video:', result.secure_url);
    console.log('Public ID:', result.public_id);
    console.log('Estado:', result.status);
    
    // Verificar el estado del procesamiento
    if (result.eager) {
      console.log('\n📹 Versiones optimizadas:');
      result.eager.forEach((version, index) => {
        console.log(`  ${index + 1}. ${version.width}x${version.height}: ${version.url}`);
      });
    }
    
    return result;
    
  } catch (error) {
    console.error('❌ Error subiendo video:', error.message);
    
    if (error.message.includes('too large')) {
      console.log('\n💡 Sugerencias:');
      console.log('1. El video es muy grande para procesamiento síncrono');
      console.log('2. Usa eager_async=true para procesamiento asíncrono');
      console.log('3. Considera comprimir el video antes de subirlo');
    }
  }
}

uploadVideo(); 