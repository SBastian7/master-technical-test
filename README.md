# EJECUTAR EL PROYECTO:
# npx ts-node index.ts

# PRUEBA TÉCNICA MASTER - BACKEND
# Sebastián Molina

# 1. Consumo de APIs.
## Se realizó la implementación en el archivo index.ts usando express para levantar el servidor y axios para realizar peticiones GitHub API 

# 2. Nomenclatura
## function sinOfProduct(sum1, sum2, multiplier) {
##    let sum = sum1 + sum2;
##    let product = sum * multiplier;
##    let sin = Math.sin(product);
##    return sin;
## } 
## Se cambio el nombre de la función según el return de la misma
## Las variables de acuerdo a su uso dentro de la función: sum1 y sum2 que representan sumandos y el multiplicador
## sin de acuerdo a la función de Math que se usa

# 3. Pensamiento lógico
## Se realizó el ejercicio en el archivo index.ts, función getOddNumbersUpTo(n)

# 4. Modelado de bases de datos
## Se crearon consultas tipo SQL para proponer la estructura de tablas en el archivo db.sql
## Para cada tabla se definieron sus respectivas claves primarias, las foráneas con su relación a otras tablas
## Así como las restricciones 

# 5. Arquitectura del backend
## Para implementar una solución Ecommerce garantizando su calidad, desempeño y mantenibilidad, es recomendable
## usar una arquitectura escalable, que facilite su mantenimiento y la implementación de nuevos features. 
##
## -Tecnologías:
## 1. Node.js: para construir una API RESTful para interactuar con otros servicios
## 2. PostgreSQL: Base de datos SQL relacional 
## 3. Redis: Almacenamiento en caché
## 4. JWT/OAuth: para procesos de autenticación interna y mediante terceros
## 5. GitHub: Versionamiento y DevOps, que garantice la integridad del repositorio así como la integración y entrega continua
## 6. Docker: Contenedores y microservicios
## 7. AWS: Infraestructura en la nube para hostear nuestros servicios, manejo de bases de datos, servidores, gateways, firewall, y en general lo relacionado con infraestructura y seguridad
## 8. Mocha: Simple pero eficiente herramienta de testing para node.js
## 9. Stripe: Integración para pagos en USD
## 10. ePayCo: Integración para pagos en COP
#
## -Estructura de carpetas:
## En la raíz del proyecto deben ubicarse los archivos generales y de configuracón, tales como variables de entorno para desarrollo, archivos docker, .yml, .gitignore etc
## En la raíz del proyecto debe estar la carpeta 'src' que contendrá los archivos .js o .ts que garanticen el funcionamiento del backend
## Dentro de la carpeta 'src' deben ir las carpetas según los patrones de diseño usados (controllers, models, repository, routes, services, middlewares, utils)
## En la raíz del proyecto debe ubicarse la carpeta 'tests' para la realización de pruebas unitarias
#
## -Patrones de diseño:
## Modelo-Vista-Controlador para manejar la lógica de la aplicación (controllers, modelsm routes)
## Patrón repositorio para abstraer la capa de acceso a datos y de lógica de negocio para facilitar el mantenimiento y testeabilidad de la aplicación (repository)
## Patrón capa de servicios para la lógica de negocio (services)
# 
## Según las necesidades específicas del producto a desarrollar, se pueden incluir otros patrones como singleton o factory, o prescindir de alguno de los previamente mencionados, se debe garantizar el uso de buenas prácticas de desarrollo durante todo el ciclo de vida de desarrollo de software.

# 6. Nomenclatura
#
## POLÍTICAS DE NOMENCLATURA

## En todos los casos de deben usar nombres claros y y descriptivos, que reflejen la naturaleza u objetivo del objeto que definen.

## Bases de datos: Se deben utilizar nombres en minúscula y separados por guiones bajos en caso de ser necesario. (ecommerce_db)
## Tablas: Se debe utilizar un nombre que describa el contenido o función de la tabla, este debe ser en singular  (user, product, etc...)
## Variables:  seguir convención camelCase (totalPrice, userPhone, etc...)
## Funciones: Utilizar verbos que describan el objetivo de la función (getProductById(), getUsers(), etc..)
## Clases: Capitalizar los nombres siguiendo la convención PascalCase (Product, AuthMiddleware, etc...)
## Objetos: Iniciar con minúscula siguiendo convención camelCase
## Ramas Git: definir el tipo de cambio seguido de nombre descriptivo (feature/reset-password, fix/item-ordering, etc...)
## Commits Git: Describir los commits de manera clara y concisa, dejar varios mensajes de commit si es necesario
## Dentro del código se deben incluir comentarios al inicio de los fragmentos que faciliten la comprensión del mismo