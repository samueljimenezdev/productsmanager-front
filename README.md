# 🛍️ Frontend - Gestión de Productos

Este proyecto es un frontend en React para la gestión de productos, que se conecta a un backend en Spring Boot corriendo en `http://localhost:8080`.

## 📦 Requisitos

- Node.js >= 16.x
- npm o yarn
- Backend corriendo en `localhost:8080` (con CORS habilitado)

## 🚀 Instalación

1. Clona el repositorio (si aplica) o navega al directorio del frontend:

```bash
cd productsmanager-front
````

2. Instala las dependencias:

```bash
npm install
# o si usas yarn
# yarn install
```
3. Crea el .env basándote en el .env.example

Es necesario definir la ruta base en el .env, un ejemplo es el .env.example, puedes renombrarlo a .env para que funcione. 

4. Inicia el proyecto en modo desarrollo:

```bash
npm start
# o
# yarn start
```

Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

## ⚙️ Configuración

Asegúrate de que el backend esté corriendo en `http://localhost:8080` y que tenga habilitado CORS para `http://localhost:3000`.

Si necesitas modificar la URL del backend, revisa el .env


## 📝 Notas

* Se realizó una implementación básica por limitaciones de tiempo, validaciones muy cortas, mensajes de error genéricos. 
* Se uso bootstrap para agilizar el desarrollo. 
* Documentación creada con IA.
* En general se puede mejorar mucho más la separación de componentes para la reutilización, como es el caso del formulario. 

