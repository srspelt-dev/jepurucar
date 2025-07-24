import { v2 as cloudinary } from 'cloudinary';

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// Función para subir imagen
export const uploadImage = async (file: string, options = {}) => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: 'jepuru',
      ...options,
    });
    return result;
  } catch (error) {
    console.error('Error al subir imagen:', error);
    throw error;
  }
};

// Función para obtener URL optimizada
export const getOptimizedImageUrl = (publicId: string, options = {}) => {
  return cloudinary.url(publicId, {
    quality: 'auto',
    fetch_format: 'auto',
    ...options,
  });
};

// Función para eliminar imagen
export const deleteImage = async (publicId: string) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error('Error al eliminar imagen:', error);
    throw error;
  }
}; 