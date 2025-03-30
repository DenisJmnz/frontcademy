# Estructura del Proyecto Frontend

Este proyecto sigue una arquitectura limpia (Clean Architecture) y los principios SOLID.

## Estructura de Carpetas

```
src/
├── core/                    # Capa de núcleo de la aplicación
│   ├── domain/             # Entidades y reglas de negocio
│   │   ├── entities/       # Entidades del dominio
│   │   ├── repositories/   # Interfaces de repositorios
│   │   └── value-objects/  # Objetos de valor
│   ├── application/        # Casos de uso y servicios de aplicación
│   │   ├── use-cases/     # Casos de uso específicos
│   │   └── services/      # Servicios de aplicación
│   └── infrastructure/     # Implementaciones de infraestructura
│       ├── api/           # Clientes de API
│       ├── storage/       # Implementaciones de almacenamiento
│       └── services/      # Servicios externos
├── presentation/          # Capa de presentación
│   ├── components/        # Componentes reutilizables
│   │   ├── common/       # Componentes genéricos
│   │   └── features/     # Componentes específicos de características
│   ├── pages/            # Páginas/Views
│   ├── layouts/          # Layouts reutilizables
│   └── styles/           # Estilos globales y temas
└── shared/               # Código compartido
    ├── types/            # Tipos y interfaces TypeScript
    ├── utils/            # Utilidades y helpers
    └── constants/        # Constantes y configuraciones
```

## Principios y Patrones

### SOLID
- **Single Responsibility**: Cada clase/componente tiene una única responsabilidad
- **Open/Closed**: Las entidades están abiertas para extensión pero cerradas para modificación
- **Liskov Substitution**: Las clases derivadas pueden sustituir a sus clases base
- **Interface Segregation**: Las interfaces son específicas para cada caso de uso
- **Dependency Inversion**: Las dependencias se inyectan y dependen de abstracciones

### Patrones de Diseño
- **Repository Pattern**: Para el acceso a datos
- **Factory Pattern**: Para la creación de objetos
- **Strategy Pattern**: Para algoritmos intercambiables
- **Observer Pattern**: Para la comunicación entre componentes
- **HOC Pattern**: Para la composición de componentes

### Clean Architecture
- **Independencia de Frameworks**: La lógica de negocio no depende de frameworks
- **Testabilidad**: Cada capa es fácilmente testeable
- **Independencia de UI**: La UI puede cambiar sin afectar la lógica de negocio
- **Independencia de Base de Datos**: La lógica de negocio no depende de la base de datos
- **Independencia de Agentes Externos**: La lógica de negocio no conoce el mundo exterior

## Convenciones de Código

1. **Nombrado**:
   - Componentes: PascalCase (ej: `UserProfile`)
   - Hooks: camelCase con prefijo 'use' (ej: `useAuth`)
   - Utilidades: camelCase (ej: `formatDate`)
   - Tipos/Interfaces: PascalCase (ej: `UserType`)

2. **Organización**:
   - Un componente por archivo
   - Un hook por archivo
   - Un caso de uso por archivo
   - Un servicio por archivo

3. **Importaciones**:
   - Importaciones absolutas desde la raíz del proyecto
   - Agrupación de importaciones por tipo (React, componentes, hooks, etc.)

4. **Testing**:
   - Tests unitarios para lógica de negocio
   - Tests de integración para casos de uso
   - Tests de componentes para UI 