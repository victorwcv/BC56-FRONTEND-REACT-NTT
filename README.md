# Fase 3: TypeScript

En esta fase del proyecto **My Market**, hemos migrado el código original de JavaScript a TypeScript. Esta migración permite un mejor control de los tipos de datos, evitando errores en tiempo de ejecución y mejorando la legibilidad del código. Se ha realizado con **Vite** como builder.

## Cambios Realizados

- **Tipado**: La lógica ha sido tipada completamente, evitando el uso de `any` en todo el proyecto. Se ha utilizado el sistema de tipos de TypeScript para asegurar que las funciones y datos tengan un tipado claro y explícito. En muchos casos, TypeScript es capaz de inferir correctamente el tipo de cada elemento, lo que mejora la robustez del código y reduce la necesidad de declarar tipos de forma redundante.

- **Gestión de Productos**: Los productos disponibles se manejan ahora con interfaces y tipos definidos, lo que hace que la manipulación de los datos sea más precisa. Esto asegura que cada producto siga un esquema estandarizado en todas las operaciones.

- **Patrón Mappers**: Se ha implementado el patrón **Mapper** para transformar los datos entre las diferentes capas del proyecto, especialmente en la comunicación entre la API y la lógica interna de la aplicación. Este patrón permite mapear los objetos que se reciben de la API en estructuras internas más manejables (y tipadas) dentro de la aplicación, asegurando que los datos estén siempre en el formato adecuado para su uso en los componentes y servicios.

- **Estructura de carpetas**: La estructura del proyecto se ha organizado para seguir las mejores prácticas de separación de responsabilidades. Cada componente, interfaz y lógica de negocio está ubicado en su respectiva carpeta, facilitando la escalabilidad y el mantenimiento del código. Además, las carpetas están estructuradas para reflejar las diferentes capas de la aplicación, como componentes, servicios y utilidades, lo que asegura una arquitectura clara y modular.

## Probar proyecto localmente

Requisito : Tener instalado Node.js v20 LTS

1. **Clonar el repositorio**:

   ```bash
      git clone https://github.com/tu-usuario/BC56-FRONTEND-REACT-NTT.git
   ```

2. **Navegar a la carpeta del proyecto**:

   ```bash
      cd BC56-FRONTEND-REACT-NTT
   ```

3. **Instalar dependencias** (Vite necesita dependencias minimas):

   ```bash
      npm install
   ```

4. **Correr el proyecto** con Vite:

   ```bash
      npm run dev
   ```

5. **Abrir el proyecto**

   Acceder a la URL proporcionada por Vite (generalmente http://localhost:5173).

## Estructura de Carpetas:

Se creó la carpeta `src/` y se hicieron algunas modificaciones respecto a la versión Javascript.
A continuación se detalla cada subcarpeta de `src/`.

- `src/components/`: Contiene todos los componentes modulares de la aplicación, escritos en TypeScript.
- `src/mappers/`: Implementa el patrón Mapper para transformar datos entre la API y la lógica interna de la aplicación, asegurando que los datos estén en el formato adecuado.
- `src/services/`: La lógica que interactúa con APIs se centraliza en esta carpeta.
- `src/types/`: Aquí se definen las interfaces y tipos usados en toda la aplicación, lo que permite un tipado claro y explícito.
- `src/utils/`: Funciones de ayuda que no están directamente ligadas a un componente específico, facilitando tareas repetitivas o comunes en el proyecto.
- Aún se conservan las carpetas `css` y `html` de la version JavaScript, la carpeta `assets` fue reemplazada por la carpeta `public` proporcionada por **Vite**.


