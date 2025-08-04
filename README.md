# Escuela de Equitación Yolanda

![Escuela de Equitación Yolanda Logo](public/logo.png)

## Descripción del Proyecto

Sitio web oficial de la Escuela de Equitación Yolanda, una institución dedicada a la enseñanza y práctica de la equitación. Este proyecto está desarrollado con Next.js para ofrecer una experiencia de usuario óptima y un rendimiento excepcional.

## Características

- Presentación de servicios y programas de equitación
- Galería de imágenes de las instalaciones y eventos
- Información sobre instructores y personal
- Formulario de contacto para consultas y reservas
- Blog con artículos sobre equitación y eventos

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - Framework de React para aplicaciones web
- [React](https://reactjs.org/) - Biblioteca JavaScript para interfaces de usuario
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [CSS Modules](https://github.com/css-modules/css-modules) - Estilos modulares para componentes

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/yourusername/escuela-equitacion-yolanda.git
   cd escuela-equitacion-yolanda
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver el resultado.

## Estructura del Proyecto

```
├── components/       # Componentes React reutilizables
├── pages/            # Páginas de la aplicación
│   ├── api/          # Rutas de API
│   └── ...           # Otras páginas
├── public/           # Archivos estáticos
├── styles/           # Archivos CSS y estilos
├── lib/              # Utilidades y funciones auxiliares
└── ...               # Otros archivos de configuración
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta el linter para verificar el código

## Despliegue

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions. Cada vez que se realiza un push a la rama principal, se ejecuta el flujo de trabajo de despliegue definido en `.github/workflows/deploy.yml`.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, siga estos pasos para contribuir:

1. Fork del repositorio
2. Crear una rama para su característica (`git checkout -b feature/amazing-feature`)
3. Commit de sus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENSE](LICENSE) para más detalles.

