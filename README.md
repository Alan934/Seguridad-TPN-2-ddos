<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## 🛠️ Tecnologías utilizadas

<div align="center">
  <h3>Back-End</h3>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" height="30"/>
  <img src="https://img.shields.io/badge/TypeScript-2596be.svg?style=for-the-badge&logo=TypeScript&logoColor=white" height="30"/>
  <img src="https://help.wnpower.com/hc/article_attachments/24770768872077" width="66" height="30"/>
  <img src="https://res.cloudinary.com/dbqxzetyp/image/upload/v1728021653/logos/vatz66wyxkcjy6plsvyj.png" width="auto" height="30" />
  <img src="https://res.cloudinary.com/dbqxzetyp/image/upload/v1728021207/logos/oybqiwgnrp3ehkvl6iru.png" width="66" height="30"/>
</div>
<br>

<div align="center">
  <h3>DevOps</h3>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  <img src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
</div>
<br>

<div align="center">
  <h3>Organización</h3>
  <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"/>
</div>

## 🧭 Guia rapida para ejecutar el proyecto en local

<div align="center">
  <a href="https://docs.nestjs.com/">Haz clic aquí para ver la documentacion con mas detalle</a>
</div>
<br>
Paso 1: Instalar Node.js y npm

1. Descargar Node.js:

   - Ve a la página oficial de Node.js en https://nodejs.org/.
   - Descarga la versión recomendada (LTS) para tu sistema operativo.

2. Instalar Node.js:

   - Ejecuta el instalador descargado y sigue las instrucciones para completar la instalación.

3. Verificar la instalación:

   - Abre una terminal (o línea de comandos) y ejecuta los comandos node -v y npm -v para verificar que Node.js y npm se han instalado correctamente. Deberías ver la versión de Node.js y npm respectivamente.

 Paso 2: Instalar NestJS CLI

 1. Instalar el CLI de NestJS:

    - Ejecuta el siguiente comando en tu terminal para instalar el CLI de NestJS globalmente: npm install -g @nestjs/cli

Paso 3: Configurar tu proyecto de Node.js

1.  Clonar o copiar el proyecto:

    - Si estás clonando un repositorio, usa el comando git clone "URL-del-repositorio".
    - Si ya tienes el proyecto en tu máquina, navega a la carpeta del proyecto usando el comando cd.

2. Instalar las dependencias:

   - Dentro de la carpeta del proyecto, ejecuta el comando npm install para instalar todas las dependencias necesarias que están listadas en el archivo package.json.

Paso 4: Ejecutar el proyecto

1.  Ejecutar el proyecto:

    - Abre una nueva consola y simplemente ejecuta "npm run dev".
    - Este comando ejecutará el script definido bajo el nombre dev en el archivo package.json.

Nota Adicional

1.  Variables de entorno:

    - Asegúrate de que todas las variables de entorno necesarias estén configuradas. Algunas aplicaciones requieren un archivo .env con configuraciones específicas. Verifica si hay un archivo .env.example o documentación sobre cómo configurar las variables de entorno.
¡Y eso es todo! Con estos pasos, deberías poder ejecutar tu proyecto de Node.js en tu entorno local. 

## Endpoints

- `GET /users`: Obtener todos los registros.
- `GET /users/:id`: Obtener un registro específico.
- `POST /users`: Crear un nuevo registro.
- `PUT /users/:id`: Actualizar un registro.
- `DELETE /users/:id`: Eliminar un registro.

## Documentacion y Mejores Practicas

  1. Documentacion del proceso de gestion de secretos
  
    - Variables de entorno: Usa un archivo .env para almacenar secretos. Este archivo nunca debe ser comprometido ni subido al control de versiones.
    - Protección del archivo .env: Añadirlo el archivo al .gitignore para evitar que se suba al repositorio.
    - Uso en código: Para acceder a las variables de entorno en NestJS, puedes usar el módulo @nestjs/config.
    - Almacenamiento seguro: Para entornos de producción, se recomienda usar servicios como AWS Secrets Manager, HashiCorp Vault o similares para gestionar las credenciales de forma más segura.
  
  2. Mejores practicas de seguridad

    - Autenticación y Autorización:
      . Implementa autenticación con JWT u OAuth para proteger los endpoints.
      . Define roles y permisos para diferentes acciones (getone, getall, create, delete, update).
  
    - Validación y Sanitización de Datos:
      . Usa class-validator y class-transformer para validar y sanear la entrada de datos en los DTOs.
      . CORS: Configura el CORS para restringir los dominios que pueden acceder a la API.
  
    - Tasas de Petición (Rate Limiting):
      . Usa la librería @nestjs/throttler para evitar ataques de fuerza bruta limitando la cantidad de solicitudes.
      . Uso de HTTPS: Asegúrate de que el servidor esté configurado para utilizar HTTPS en entornos de producción.
      . Helmet: Usa @nestjs/helmet para establecer encabezados HTTP que mejoren la seguridad.
      . Control de Errores: No expongas detalles de errores en entornos de producción para evitar que información sensible sea filtrada.

## 👨‍💻 Equipo ( GRUPO DDoS )

<table align="center">
  <tr>
    <td>
      <div align="center">
        <a href="https://github.com/GabrielAvalos77" target="_blank" rel="author">
          <img width="120" height="170" src="https://res.cloudinary.com/dbqxzetyp/image/upload/v1728020220/Fotos%20Perfil/pzlnl3oweluhfoxw8thi.jpg"/>
        </a>
          <h5 style="margin-top: 1rem;">Gabriel Avalos</h5>
        <a href="https://github.com/GabrielAvalos77" target="_blank">
          <img src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
      </div>
    </td>
    <td>
      <div align="center">
        <a href="https://github.com/franlugea" target="_blank" rel="author">
          <img width="120" height="170" src="https://res.cloudinary.com/dbqxzetyp/image/upload/v1728020221/Fotos%20Perfil/i38tf0ez5cfjath1h9qs.jpg"/>
        </a>
          <h5 style="margin-top: 1rem;">Francisco Lugea</h5>
        <a href="https://github.com/franlugea" target="_blank">
          <img src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
      </div>
    </td>
    <td>
      <div align="center">
        <a href="https://github.com/Kenchu293" target="_blank" rel="author">
          <img width="120" height="170" src="https://res.cloudinary.com/dbqxzetyp/image/upload/v1728020221/Fotos%20Perfil/ln1y84fyveyakzndd2v8.jpg"/>
        </a>
          <h5 style="margin-top: 1rem;">Jesus Infante</h5>
        <a href="https://github.com/Kenchu293" target="_blank">
          <img src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
      </div>
    </td>
    <td>
      <div align="center" >
        <a href="https://github.com/Alan934" target="_blank" rel="author">
          <img width="120" height="170" src="https://res.cloudinary.com/de9ojxknm/image/upload/v1723058043/Fotos%20Equipo/nj1z7yvlhuktqwabkjmi.jpg"/>
        </a>
          <h5 style="margin-top: 1rem;">Alan Sanjurjo</h5>
        <a href="https://github.com/Alan934" target="_blank">
          <img src="https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=172B4D&logo=GitHub&logoColor=FFFFFF&label="/>
        </a>
      </div>
    </td>
  </tr>
</table>