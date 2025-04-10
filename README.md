# 🐯 Fieras Fitness Web Simple

Una tienda online que muestra planes de ejercicios y alimentación, diseñada para ayudar a mejorar el rendimiento físico a través de hábitos saludables asi facilitando el filtrado de cliente por plan que quiera adquirir el cliente.
Incluye secciones de presentación como **Quiénes somos** y un **Home** con información destacada.

## 🌐 Demo

Diseño en Figma:  
![Demo Figma](https://fieras-fitness.onrender.com/)  

## 🚀 🧱  Tecnologías Utilizadas

- JavaScript
- Node.js
- Express
- HTML/CSS (en frontend)


## 📂 Estructura del Proyecto (simplificada)

├── node_modeles

├── public/ # Archivos estáticos (CSS, imágenes)

├── src
 
    ├── controllers/ # Rutas de controladores 
    
        ├──index.js
        
    ├── database/ # Ruta de base de datos
        ├──index.js
        ├──planesFitnes.json  
    ├── routes/ # Rutas Express
        ├──index.js 
    ├── views/ # Vistas/render (EJS, Pug o HTML si aplica)
        ├──partials
            ├──acordionDetailPlan.ejs
            ├──cardPlanes.ejs
            ├──footer.ejs
            ├──head.ejs
            ├──header.ejs
            ├──preguntaFrecuentes.ejs
        ├──detailPlan.ejs
        ├──index.ejs
    ├── app.js # Configuración principal del servidor
├── package-lock.json
├── package.json
├── .gitignore

## 🧰 Tecnologías utilizadas

- JavaScript
- Node.js
- Express.js
- HTML/CSS
- Figma (para diseño)

1. Clona el repositorio
```bash
git clone https://github.com/Maxgg21/Fieras--Fitness
cd WEBFIERASFITNESS

2 Instala las dependencias

bash

npm install

npm start

4 El sitio estará disponible en http://localhost:8080

✨ Funcionalidades
    Página principal con descripción de planes.
    Pagina de Quiénes somos con información de la marca.
    Pagina de Planes destacados de ejercicios y alimentación.
    Diseño responsive inspirado en el rendimiento deportivo.
