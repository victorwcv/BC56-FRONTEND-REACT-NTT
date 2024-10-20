# Fase 4: React Fundamentos

Esta fase esta enfocada en integrar React para construir la interfaz de usuario. React nos permite crear componentes reutilizables y gestionar el estado de manera eficiente. El proyecto sigue utilizando TypeScript para un desarrollo más robusto y seguro.

## Cambios Realizados

- **Integración de React**: He migrado la interfaz de usuario a React, aprovechando su capacidad para crear componentes modulares y gestionar el estado de la aplicación de manera más eficiente.

- **Componentes Reutilizables**: Todos los componentes visuales han sido refactorizados como componentes funcionales de React, utilizando TypeScript para definir las props y el estado de cada componente de manera clara y explícita.

- **CSS Modules para Estilos**: Los estilos de los componentes se manejan mediante **CSS Modules**, lo que asegura que los estilos sean locales a cada componente. Esto evita conflictos de nombres de clases a nivel global y facilita el mantenimiento y escalabilidad del proyecto.

- **Estado Global**: Utilizamos el contexto de React y hooks como `useState` y `useEffect` para manejar el estado global de la aplicación de manera eficiente, asegurando que los datos se actualicen correctamente en toda la interfaz de usuario.

## Probar proyecto localmente

Requisito : Tener instalado Node.js v20 LTS

1. **Clonar el repositorio**:

   ```bash
      git clone https://github.com/victorwcv/BC56-FRONTEND-REACT-NTT.git
   ```

2. **Navegar a la carpeta del proyecto**:

   ```bash
      cd BC56-FRONTEND-REACT-NTT
   ```

3. **Cambiar de Rama**:

   ```bash
      git checkout feature/react-foundations
   ```

4. **Instalar dependencias** (Vite necesita dependencias minimas):

   ```bash
      npm install
   ```

5. **Correr el proyecto** con Vite:

   ```bash
      npm run dev
   ```

6. **Abrir el proyecto**

   Acceder a la URL proporcionada por Vite (generalmente http://localhost:5173).

## Estructura de Carpetas:

La estructura del proyecto ha sido organizada para optimizar el desarrollo con React y TypeScript, siguiendo buenas prácticas de separación de responsabilidades:

- `src/components/`: Contiene todos los componentes visuales reutilizables a nivel global de la aplicación.
- `src/context/`: Maneja los contextos globales de la aplicación.
- `src/css/`: Archivos CSS globales que aplican a toda la aplicación.
- `src/mappers/`: Implementa el patrón Mapper para transformar datos entre la API y la lógica interna.
- `src/pages/`: Contiene las diferentes páginas de la aplicación, organizadas por módulos.
  - `src/pages/.../components/`: Componentes específicos de cada página.
  - `src/pages/.../css/`: Estilos CSS específicos de cada página.
- `src/services/`: La lógica que interactúa con APIs y servicios externos.
- `src/types/`: Define las estructuras y tipos usados en la aplicación.
  - `src/types/enums/`: Contiene enumeraciones utilizadas en la aplicación.
  - `src/types/interfaces/`: Define las interfaces usadas en el tipado de TypeScript.
- `src/utils/`: Funciones de utilidad que facilitan tareas comunes en el proyecto.

