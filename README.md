# 🛡️ Web Oficial de Términos y Condiciones P2P — MANTEQUILLA TEAM (Venezuela 🇻🇪)

Plataforma web de **Términos y Condiciones Anti-Estafas** para operaciones de Compra y Venta en **Binance P2P Venezuela (Bolívares / VES)** del grupo de comerciantes **MANTEQUILLA TEAM**.

## 🚀 Cómo Desplegar en Render.com (Paso a Paso)

El proyecto ya está configurado para funcionar tanto como **Static Site** (recomendado, 100% gratis y **nunca se duerme**) como **Web Service** en Render:

### Opción A: Static Site en Render (Recomendado — Carga Instantánea 24/7)
1. Sube este repositorio a tu cuenta de GitHub (`mantequillaterminos`).
2. Entra a [dashboard.render.com](https://dashboard.render.com/) -> **New +** -> **Static Site**.
3. Conecta tu repositorio `mantequillaterminos`.
4. Configura estos dos campos:
   - **Build Command:** *(déjalo vacío)*
   - **Publish Directory:** `.` *(escribe solo un punto)*
5. Haz clic en **Create Static Site**. En menos de 30 segundos tendrás tu enlace `https://mantequillaterminos.onrender.com`.

### Opción B: Web Service en Render (Con Node.js incluido)
Si eliges **New +** -> **Web Service**, Render detectará automáticamente `package.json` y `server.js`:
- **Build Command:** `npm install` (o vacío)
- **Start Command:** `npm start`
