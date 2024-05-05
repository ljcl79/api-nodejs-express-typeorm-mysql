# API Rest con NodeJS + ExpressJS + Typescript + TypeORM

https://youtu.be/RwkvTRXAqZU

Configuración del Proyecto:
* Inicialización del proyecto con npm.
* Instalación de TypeScript como dependencia de desarrollo.
* Configuración del archivo tsconfig.json para opciones de compilación.

Express.js y Rutas:
* Creación de una instancia de Express.
* Configuración para manejar solicitudes JSON.
* Definición de rutas para las operaciones CRUD (crear, leer, actualizar, eliminar) de estudiantes, profesores y cursos.

TypeORM y Base de Datos:
* Instalación de TypeORM y configuración de la conexión a la base de datos (usaremos PostgreSQL en este ejemplo).
* Creación de entidades (modelos) para estudiantes, profesores y cursos.
* Relaciones entre las entidades (uno a muchos y muchos a muchos).
* Implementación de consultas utilizando TypeORM.

Beneficios de usar ORMs:
* Abstracción de la capa de base de datos.
* Facilita la creación, consulta y manipulación de datos.
* Evita la escritura manual de consultas SQL.
* Mejora la seguridad y previene ataques de inyección de SQL.

Ventajas de TypeScript:
* Tipado estático para reducir errores en tiempo de desarrollo.
* Autocompletado y sugerencias en el código.
* Mayor legibilidad y mantenibilidad.
