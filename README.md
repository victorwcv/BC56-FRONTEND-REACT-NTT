# Fase 3: TypeScript

En esta rama **feat/typescript**, se realiza la migración de todo el proyecto de **JavaScript** a **TypeScript**. Este cambio mejora la robustez del código al añadir tipado estático, lo que permite detectar errores en tiempo de compilación y facilita el mantenimiento a largo plazo. Se utiliza el builder **vite** para este proposito.

## Objetivos de esta Fase

- Migrar el código existente de **JavaScript** a **TypeScript**.
- Usar **interfaces** y **types** para definir estructuras de datos claras y coherentes.
- Implementar el **patrón Mapper** para transformar y mapear datos de manera controlada.
- Organizar el proyecto creando carpetas que separen la lógica de negocio de las estructuras definidas (interfaces y types).
- Evitar el uso de `any` en todo el código para preservar los beneficios del tipado estático.
- Usar `unknown` cuando sea necesario para manejar tipos dinámicos con mayor seguridad.

## Características Clave

### Migración de JavaScript a TypeScript

Se ha reemplazado el código **JavaScript** por **TypeScript**, lo que implica agregar archivos con extensión `.ts` en lugar de `.js`. Además, se han adaptado las funciones para incluir tipados explícitos, eliminando cualquier ambigüedad en el manejo de datos.

### Uso de Interfaces y Types

Se utilizan **interfaces** y **types** para garantizar la claridad y la consistencia en la definición de objetos y tipos complejos. Estas estructuras permiten:

- Definir contratos claros para objetos.
- Asegurar que las funciones reciban y devuelvan valores con tipos esperados.
- Facilitar la reutilización de tipos en todo el proyecto.

### Implementación del Patrón Mapper

El **patrón Mapper** se ha implementado para transformar y mapear datos entre diferentes capas del proyecto, asegurando que los datos recibidos de la API o de otras fuentes se adapten a las estructuras definidas del sistema.

### Separación de la Lógica de Negocio y las Definiciones

Se ha establecido una estructura de carpetas que separa claramente la lógica de negocio de las definiciones de **interfaces** y **types**. Esta separación asegura una mayor claridad en el código y facilita su escalabilidad y mantenibilidad.

### Restricción en el Uso de `any`

No se utiliza el tipo `any` para evitar perder las ventajas del tipado fuerte de TypeScript. Esto obliga a definir tipos precisos para cada valor, lo que a su vez mejora la calidad del código.

### Uso de `unknown` como Alternativa
En los casos donde el tipo de una variable no puede determinarse de inmediato, se usa `unknown` en lugar de `any`. Esto permite manejar tipos dinámicos con mayor control, ya que es necesario realizar una verificación de tipo antes de utilizar el valor.

## Tecnologías y Herramientas Utilizadas

- **TypeScript**: Tipado estático que mejora la robustez y mantenibilidad del proyecto.
- **Mapper** Pattern: Para mapear datos y asegurar integridad entre las diferentes capas.
- **Estructura Modular**: Separación entre lógica de negocio y definiciones (types/interfaces).

