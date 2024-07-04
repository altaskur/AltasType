# AltasType

AltasType es una librería que permite generar automáticamente interfaces de TypeScript a partir de un archivo .swagger. Esta herramienta está diseñada para facilitar la integración de APIs en proyectos TypeScript, proporcionando tipos precisos y actualizados basados en la especificación Swagger.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts Disponibles](#scripts-disponibles)
- [Contribuyendo](#contribuyendo)
- [Licencia](#licencia)

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

## Contribuyendo

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la librería o has encontrado un error, por favor abre un issue en el repositorio o envía un pull request.

1. Fork el repositorio
1. Crea una rama para tu característica (git checkout -b feature/nueva-caracteristica)
1. Haz commit de tus cambios (git commit -m 'Añadir nueva característica')
1. Push a la rama (git push origin feature/nueva-caracteristica)
1. Abre un pull request

## Licencia

Este proyecto está bajo la Licencia GPL-3.0. Para más detalles, revisa el archivo (LICENSE)[LICENSE].

## Información Adicional

* Repositorio: [AltasType](https://github.com/altaskur/AltasType)
* Autor: [altaskur](https://github.com/altaskur)
* URL de Issues: [Reportar un Issue](https://github.com/altaskur/AltasType/issues)
* Página de Inicio: [AltasType](https://github.com/altaskur/AltasType)
