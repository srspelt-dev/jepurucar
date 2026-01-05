# 🔒 Medidas de Seguridad Implementadas

Este documento describe todas las medidas de seguridad implementadas para proteger la aplicación y especialmente el contenedor Docker contra ataques.

## 🛡️ Protección de /tmp

### Dockerfile
- **tmpfs con flags de seguridad**: `/tmp` y `/var/tmp` están montados como tmpfs con:
  - `noexec`: Previene la ejecución de binarios desde /tmp
  - `nosuid`: Previene el uso de SUID en /tmp
  - `nodev`: Previene el uso de dispositivos en /tmp
  - `size=100m`: Limita el tamaño a 100MB para /tmp
  - `mode=1777`: Permisos seguros (sticky bit)

### docker-compose.yml
```yaml
tmpfs:
  - /tmp:noexec,nosuid,nodev,size=100m,mode=1777
  - /var/tmp:noexec,nosuid,nodev,size=50m,mode=1777
```

## 🔐 Seguridad del Contenedor Docker

### 1. Usuario No-Root
- El contenedor se ejecuta como usuario `nextjs` (UID 1001) en lugar de root
- Previene escalación de privilegios

### 2. Capacidades Limitadas
```yaml
cap_drop:
  - ALL
cap_add:
  - CHOWN
  - SETGID
  - SETUID
```
- Se eliminan todas las capacidades por defecto
- Solo se agregan las mínimas necesarias

### 3. Prevención de Escalación de Privilegios
```yaml
security_opt:
  - no-new-privileges:true
  - apparmor:docker-default
```
- `no-new-privileges`: Previene que el proceso obtenga nuevos privilegios
- `apparmor`: Perfil de seguridad adicional

### 4. Límites de Recursos
```yaml
deploy:
  resources:
    limits:
      cpus: '2.0'
      memory: 1G
    reservations:
      cpus: '0.5'
      memory: 256M
```
- Previene ataques de DoS (Denial of Service)
- Limita el uso de CPU y memoria

### 5. Health Check
```yaml
healthcheck:
  test: ["CMD-SHELL", "node -e \"require('http').get('http://localhost:3010/', (r) => process.exit(r.statusCode === 200 ? 0 : 1))\" || exit 1"]
  interval: 30s
  timeout: 10s
  retries: 3
```
- Monitorea el estado del contenedor
- Permite reinicio automático si falla

### 6. Logging Limitado
```yaml
logging:
  driver: "json-file"
  options:
    max-size: "10m"
    max-file: "3"
```
- Previene que los logs llenen el disco
- Limita el tamaño y número de archivos de log

## 🌐 Rate Limiting

### Middleware de Seguridad (`middleware.ts`)
- **Rate limiting por IP**: 
  - Rutas generales: 100 requests/minuto
  - APIs: 20 requests/minuto
- **Limpieza automática**: Elimina entradas antiguas cada 5 minutos
- **Headers informativos**: Incluye información de rate limit en las respuestas

### Protección contra:
- Ataques de fuerza bruta
- DDoS (Distributed Denial of Service)
- Abuso de APIs

## 🔒 Headers de Seguridad

### Implementados en `next.config.js` y `middleware.ts`:

1. **X-Content-Type-Options: nosniff**
   - Previene MIME type sniffing

2. **X-Frame-Options: DENY**
   - Previene clickjacking
   - No permite que la página se cargue en iframes

3. **X-XSS-Protection: 1; mode=block**
   - Habilita protección XSS en navegadores antiguos

4. **Referrer-Policy: strict-origin-when-cross-origin**
   - Controla qué información del referrer se envía

5. **Permissions-Policy**
   - Desactiva cámaras, micrófonos y geolocalización

6. **Strict-Transport-Security (HSTS)**
   - Fuerza conexiones HTTPS
   - `max-age=31536000; includeSubDomains; preload`

7. **Content-Security-Policy (CSP)**
   - Política estricta de contenido
   - Solo permite scripts y recursos de dominios confiables

## 🚨 Respuestas a Ataques

### Rate Limit Excedido (429)
```json
{
  "error": "Demasiadas solicitudes. Por favor, intenta más tarde."
}
```
- Incluye header `Retry-After: 60`
- Headers informativos de rate limit

## 📋 Checklist de Seguridad

- ✅ `/tmp` protegido con tmpfs (noexec, nosuid, nodev)
- ✅ Usuario no-root en el contenedor
- ✅ Capacidades limitadas
- ✅ Prevención de escalación de privilegios
- ✅ Límites de recursos (CPU, memoria)
- ✅ Rate limiting implementado
- ✅ Headers de seguridad configurados
- ✅ Health check configurado
- ✅ Logging limitado
- ✅ CSP (Content Security Policy) configurado

## 🔍 Monitoreo Recomendado

1. **Revisar logs regularmente**:
   ```bash
   docker logs jepuru-car --tail 100
   ```

2. **Monitorear rate limits**:
   - Revisar headers `X-RateLimit-Remaining` en las respuestas
   - Alertar si se alcanzan límites frecuentemente

3. **Verificar salud del contenedor**:
   ```bash
   docker ps --format "table {{.Names}}\t{{.Status}}"
   ```

4. **Auditar recursos**:
   ```bash
   docker stats jepuru-car
   ```

## 🚀 Próximos Pasos Recomendados

1. **Implementar WAF (Web Application Firewall)**: Considera usar Cloudflare o similar
2. **Rate Limiting con Redis**: Para entornos distribuidos, migrar a Redis en lugar de memoria
3. **Monitoreo de seguridad**: Implementar herramientas como Fail2ban o similar
4. **Backup automático**: Configurar backups regulares de datos importantes
5. **Actualizaciones regulares**: Mantener Next.js y dependencias actualizadas
6. **SSL/TLS**: Asegurar que todas las conexiones usen HTTPS
7. **Firewall del servidor**: Configurar reglas de firewall a nivel de servidor

## 📚 Referencias

- [Docker Security Best Practices](https://docs.docker.com/engine/security/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Headers](https://nextjs.org/docs/app/api-reference/next-config-js/headers)
- [Rate Limiting Strategies](https://cloud.google.com/architecture/rate-limiting-strategies-techniques)

