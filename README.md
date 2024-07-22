# AltasType

## Tabla de Contenidos

- [AltasType](#altastype)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Sobre el Proyecto](#sobre-el-proyecto)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Scripts Disponibles](#scripts-disponibles)
  - [Seguimiento del Proyecto](#seguimiento-del-proyecto)
  - [Contribuyendo](#contribuyendo)
  - [Licencia](#licencia)
  - [Información Adicional](#información-adicional)

## Sobre el Proyecto

AltasType es una librería de código abierto que permite generar interfaces de TypeScript a partir de archivos .swagger. La librería utiliza la especificación Swagger para extraer información sobre los endpoints, parámetros y respuestas de una API y generar automáticamente las interfaces correspondientes en TypeScript.

## Instalación

No es necesario instalar AltasType globalmente. Puedes usar `npx` para ejecutar la librería directamente.

## Uso

Para utilizar AltasType, simplemente pasa tu archivo .swagger y la librería generará las interfaces de TypeScript correspondientes.

```bash
npx altastype path/to/your/swagger/file
```

## Scripts Disponibles

En el proyecto, se han definido varios scripts útiles para el desarrollo y mantenimiento:

`dev`: Inicia el modo de desarrollo con nodemon.

`lint`: Ejecuta ESLint para analizar el código y encontrar problemas.

`test`: Ejecuta las pruebas utilizando Jest.

`prepare`: Instala los hooks de Husky para mejorar el flujo de trabajo con Git.

## Seguimiento del Proyecto

El proyecto se encuentra en constante desarrollo y mantenimiento. Si deseas seguir el progreso del proyecto, puedes hacerlo a través de la página de inicio del repositorio. Además puedes ver el estado del proyecto en la sección de Proyecto de GitHub [Proyecto](https://github.com/users/altaskur/projects/7).

Si deseas contribuir al proyecto, puedes revisar la sección de Issues para encontrar tareas pendientes o problemas que necesiten ser resueltos. Puedes ver los Issues [Issues](https://github.com/altaskur/AltasType/issues).

## Contribuyendo

¡Las contribuciones son bienvenidas!
Si tienes ideas para mejorar la librería o has encontrado un error, por favor abre un issue en el repositorio o envía un pull request.

1. Fork el repositorio
2. Selecciona la rama de desarrollo (git checkout develop)
3. Crea una rama para tu característica (git checkout -b feature/nueva-caracteristica)
4. Haz commit de tus cambios (git commit -m 'Añadir nueva característica')
5. Push a la rama (git push origin feature/nueva-caracteristica)
6. Abre un pull request

## Licencia

Este proyecto está bajo la Licencia GPL-3.0. Para más detalles, revisa el archivo [LICENSE](LICENSE).

## Información Adicional

- Repositorio: [AltasType](https://github.com/altaskur/AltasType)
- Autor: [altaskur](https://github.com/altaskur)
- URL de Issues: [Reportar un Issue](https://github.com/altaskur/AltasType/issues)
- Página de Inicio: [AltasType](https://github.com/altaskur/AltasType)
