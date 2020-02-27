# Todo List Back-End

Previamente, antes de correr el servidor es aconsejable instalar y correr la base de datos (Mongo)

Lista de tareas tipo tarjetas con la posibilidad de las siguientes acciones:

- Crear
- Borrar
- Ordenar por: ID, Descripción, Estado

# Detalles técnicos

Back end hecho en Node con MongoDB

Node versión 12.7 

## Instalacción y prueba

Primero debe instalarse y correr MongoDB.

Instalación de MongoDB:

`sudo apt-get install -y mongodb-org`

Verificar que esté creada la carpeta y tenga permisos a usuario

`data/db`

Correr Base de datos:

`mongod`

Clonar proyecto y correr:

`npm install`

Luego correr en modo develop o producción

Develop: 

`npm run dev`

o

`nodemon src/index.ts`

Producción

`npm run start`

o

`npm run build && node dist/index.js`


Por defecto corre en el puerto 4000, si se modifica este puerto, debe indicarse en el envirioment del front-end

