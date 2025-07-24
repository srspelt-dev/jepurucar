# Configuración de Cloudinary

## Instalación Completada ✅

Cloudinary ya está instalado en tu proyecto Next.js.

## Configuración de Variables de Entorno

Crea un archivo `.env.local` en la raíz de tu proyecto con las siguientes variables:

```env
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

## Obtener Credenciales de Cloudinary

1. Ve a [cloudinary.com](https://cloudinary.com) y crea una cuenta gratuita
2. Una vez registrado, ve a tu Dashboard
3. Encuentra tu "Cloud Name", "API Key" y "API Secret"
4. Copia estos valores a tu archivo `.env.local`

## Uso Básico

### Importar las funciones
```typescript
import { uploadImage, getOptimizedImageUrl, deleteImage } from '@/lib/cloudinary';
```

### Subir una imagen
```typescript
const result = await uploadImage('ruta/a/tu/imagen.jpg', {
  folder: 'jepuru/vehiculos',
  transformation: [
    { width: 800, height: 600, crop: 'fill' }
  ]
});
```

### Obtener URL optimizada
```typescript
const optimizedUrl = getOptimizedImageUrl('jepuru/vehiculos/imagen', {
  width: 400,
  height: 300,
  crop: 'fill'
});
```

### Eliminar imagen
```typescript
await deleteImage('jepuru/vehiculos/imagen');
```

## Características Incluidas

- ✅ Subida de imágenes con optimización automática
- ✅ Transformaciones automáticas (formato, calidad)
- ✅ Organización en carpetas
- ✅ Eliminación de imágenes
- ✅ URLs optimizadas para diferentes dispositivos

## Próximos Pasos

1. Configura las variables de entorno
2. Prueba subiendo una imagen de prueba
3. Integra Cloudinary en tus componentes existentes
4. Optimiza las imágenes de tu flota de vehículos 