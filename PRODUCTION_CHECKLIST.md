# 🚀 Checklist para Producción - Jepuru Car

## 📋 **Resumen**
Tu aplicación está **99% lista para producción**. Solo necesitas configurar las variables de entorno y hacer el build.

## ✅ **Lo que YA está listo:**
- ✅ **Imágenes optimizadas** con Cloudinary
- ✅ **Video arreglado** sin cortar cabezas
- ✅ **Componentes optimizados** y responsive
- ✅ **Código limpio** sin archivos innecesarios
- ✅ **Performance mejorado** (62MB menos de archivos)

## 🔧 **Variables de Entorno para Producción**

### 1. Crear archivo `.env.production`
```bash
# === CONFIGURACIÓN DE PRODUCCIÓN ===

# Google Places API
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=AIzaSyAi93Or1u3Pk753jx5TuiURPCK_5BHYMkA

# Cloudinary (CRÍTICO - sin esto las imágenes no cargan)
CLOUDINARY_CLOUD_NAME=doblti2c5
CLOUDINARY_API_KEY=726789867682892
CLOUDINARY_API_SECRET=r62VFE2VOCGP2tsmCz2SqsiNjE0

# Configuración del sitio
NEXT_PUBLIC_SITE_URL=https://www.jepurucar.com.py
NODE_ENV=production

# Optimizaciones de rendimiento
NEXT_TELEMETRY_DISABLED=1
```

### 2. Variables de entorno del hosting
Si usas **Vercel, Netlify, o similar**, agregar estas variables:

**En el panel de tu hosting:**
```
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY = AIzaSyAi93Or1u3Pk753jx5TuiURPCK_5BHYMkA
CLOUDINARY_CLOUD_NAME = doblti2c5
CLOUDINARY_API_KEY = 726789867682892
CLOUDINARY_API_SECRET = r62VFE2VOCGP2tsmCz2SqsiNjE0
NEXT_PUBLIC_SITE_URL = https://www.jepurucar.com.py
NODE_ENV = production
NEXT_TELEMETRY_DISABLED = 1
```

## 🛠️ **Comandos para Build de Producción**

### Paso 1: Limpiar cachés
```bash
npm run clean
```

### Paso 2: Build optimizado
```bash
npm run build
```

### Paso 3: Probar en local (opcional)
```bash
npm run start
```

### Paso 4: Deploy
```bash
# Si usas Vercel
vercel --prod

# Si usas Netlify
netlify deploy --prod

# Si usas otro hosting
# Subir la carpeta .next y archivos del proyecto
```

## ⚠️ **CRÍTICO: Sin estos elementos NO funcionará**

### 1. **Variables de Cloudinary** 
Sin estas variables, las imágenes no cargarán:
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY` 
- `CLOUDINARY_API_SECRET`

### 2. **URLs correctas en producción**
Verificar que `next.config.js` tenga el dominio correcto en:
```javascript
// Actualizar esta línea si es necesario
"image": "https://www.jepurucar.com.py/images/jepurucar.png"
```

## 🌐 **Configuración de Dominio**

### 1. DNS Records necesarios
```
Type: A
Name: @
Value: [IP de tu hosting]

Type: CNAME  
Name: www
Value: [dominio de hosting]
```

### 2. SSL Certificate
- ✅ La mayoría de hostings (Vercel, Netlify) incluyen SSL automático

## 🔍 **Testing en Producción**

### Verificar que funcionen:
- ✅ **Página principal** con video
- ✅ **Galería de vehículos** con imágenes de Cloudinary
- ✅ **Página About** con fotos del equipo
- ✅ **Formularios de contacto**
- ✅ **WhatsApp button**
- ✅ **Responsive design** en móvil
- ✅ **SEO meta tags**

### URLs de prueba:
```
https://tudominio.com/
https://tudominio.com/vehicles
https://tudominio.com/about
https://tudominio.com/contact
https://tudominio.com/services
```

## 📱 **Optimizaciones Extra (Opcionales)**

### 1. PWA (Progressive Web App)
```bash
npm install next-pwa
```

### 2. Analytics
```javascript
// Google Analytics en layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
```

### 3. Sitemap automático
```javascript
// next.config.js
experimental: {
  sitemap: true
}
```

## 🎯 **Rendimiento Esperado**

### Métricas objetivo:
- **Lighthouse Score**: 90+ en todas las categorías
- **Tiempo de carga**: < 3 segundos
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## 🔧 **Comandos de Mantenimiento**

```bash
# Limpiar cachés
npm run clean

# Análisis de bundle
npm run build:analyze

# Linter
npm run lint

# Limpieza de imágenes (ya ejecutado)
npm run cleanup-images
```

## 📋 **Checklist Final**

- [ ] Variables de entorno configuradas
- [ ] Build exitoso (`npm run build`)
- [ ] Imágenes de Cloudinary funcionando
- [ ] Video reproduciéndose correctamente
- [ ] Formularios de contacto activos
- [ ] SSL certificado configurado
- [ ] DNS apuntando correctamente
- [ ] Testing en dispositivos móviles
- [ ] Performance check con Lighthouse

## 🚨 **Troubleshooting**

### Si las imágenes no cargan:
1. Verificar variables `CLOUDINARY_*` en el hosting
2. Verificar que las URLs tengan `res.cloudinary.com`
3. Comprobar CORS en Cloudinary

### Si el video no se reproduce:
1. Verificar URLs de Cloudinary del video
2. Comprobar que el formato sea MP4
3. Verificar autoplay policies del navegador

### Si hay errores de build:
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🎉 **¡Listo para Producción!**

Tu aplicación Jepuru Car está optimizada y lista. Solo necesitas:
1. ✅ **Configurar variables de entorno**
2. ✅ **Hacer el build**
3. ✅ **Deployar**

**Todo lo demás ya está perfecto!** 🚀 