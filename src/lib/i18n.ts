export interface Translation {
  // Navigation
  navigation: {
    gettingStarted: string;
    features: string;
    installation: string;
    examples: string;
    github: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    getStarted: string;
    viewGithub: string;
    features: {
      modular: string;
      modularDesc: string;
      performance: string;
      performanceDesc: string;
      security: string;
    };
  };
  
  // Features
  features: {
    title: string;
    subtitle: string;
    httpRequests: string;
    httpRequestsDesc: string;
    websockets: string;
    websocketsDesc: string;
    authentication: string;
    authenticationDesc: string;
  };
  
  // Getting Started
  gettingStarted: {
    title: string;
    configureDataModel: string;
    configurePaths: string;
    defineModels: string;
    createRequest: string;
    swiftuiIntegration: string;
  };
  
  // Installation
  installation: {
    title: string;
    swiftPackageManager: string;
    cocoapods: string;
  };
  
  // Advanced Features
  advanced: {
    title: string;
    interceptors: string;
    authorization: string;
    mtlsCertificate: string;
    fullExample: string;
    sockets: string;
    pendingRequests: string;
    pagination: string;
    queryString: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    navigation: {
      gettingStarted: "Getting Started",
      features: "Features",
      installation: "Installation",
      examples: "Examples",
      github: "GitHub",
    },
    hero: {
      title: "DataStack",
      subtitle: "Swift CoreData Framework",
      description: "A modular Swift CoreData framework designed for flexibility, speed, and ease of integration. Built with modern Swift practices and comprehensive feature set.",
      getStarted: "Get Started",
      viewGithub: "View on GitHub",
      features: {
        modular: "Modular Design",
        modularDesc: "Built with modularity in mind for maximum flexibility",
        performance: "High Performance",
        performanceDesc: "Optimized for speed and efficient resource usage",
        security: "Enterprise Security",
      },
    },
    features: {
      title: "Powerful Features",
      subtitle: "Everything you need for Swift CoreData",
      httpRequests: "Dados criptografados",
      httpRequestsDesc: "Os dados são criptogrados em base64 para maior segurança",
      websockets: "Integração com codable",
      websocketsDesc: "OS modelos se baseam em uma estrutura compativel com codable",
      authentication: "Sincronização",
      authenticationDesc: "Mais facil de gerenciar",
    },
    gettingStarted: {
      title: "Getting Started",
      configureDataModel: "1. Create a data model",
      configurePaths: "2. Create a model that inherits from Codable, and 'UNION' your model class",
      defineModels: "3. Now you need to create 3 classes, they are PersistenceController, CoreDataConfiguration and an extension of CDManagedObjectProtocol.",
      createRequest: "4. With everything set up we can now create our class that does the magic",
      swiftuiIntegration: "5. Now use it like this in your ViewModel",
    },
    installation: {
      title: "Installation",
      swiftPackageManager: "Swift Package Manager",
      cocoapods: "CocoaPods",
    },
    advanced: {
      title: "Advanced Features",
      interceptors: "Request Interceptors",
      authorization: "Authorization",
      mtlsCertificate: "MTLS Certificate Support",
      fullExample: "Full Example with Authentication, Interceptor, and MTLS",
      sockets: "WebSocket Support",
      pendingRequests: "Pending Requests Configuration",
      pagination: "Pagination",
      queryString: "Query String and Params",
    },
  },
  pt: {
    navigation: {
      gettingStarted: "Começar",
      features: "Recursos",
      installation: "Instalação",
      examples: "Exemplos",
      github: "GitHub",
    },
    hero: {
      title: "DataStack",
      subtitle: "Framework de Rede Swift",
      description: "Um framework de rede Swift modular projetado para flexibilidade, velocidade e facilidade de integração. Construído com práticas modernas do Swift e conjunto abrangente de recursos.",
      getStarted: "Começar",
      viewGithub: "Ver no GitHub",
      features: {
        modular: "Design Modular",
        modularDesc: "Construído com modularidade em mente para máxima flexibilidade",
        performance: "Alta Performance",
        performanceDesc: "Otimizado para velocidade e uso eficiente de recursos",
        security: "Segurança Empresarial",
      },
    },
    features: {
      title: "Recursos Poderosos",
      subtitle: "Tudo que você precisa para redes Swift modernas",
      httpRequests: "Requisições HTTP",
      httpRequestsDesc: "Cliente HTTP simples e poderoso com suporte async/await",
      websockets: "WebSockets",
      websocketsDesc: "Comunicação em tempo real com gerenciamento de socket integrado",
      authentication: "Autenticação JWT",
      authenticationDesc: "Autenticação segura com atualização automática de token",
    },
    gettingStarted: {
      title: "Começando",
      configureDataModel: "1. Crie um data model",
      configurePaths: "2. Configure os Caminhos da API",
      defineModels: "3. Defina os Modelos de Requisição e Resposta",
      createRequest: "4. Crie uma Requisição",
      swiftuiIntegration: "5. Agora um exemplo de como usar na sua ViewModel",
    },
    installation: {
      title: "Instalação",
      swiftPackageManager: "Swift Package Manager",
      cocoapods: "CocoaPods",
    },
    advanced: {
      title: "Recursos Avançados",
      interceptors: "Interceptadores de Requisição",
      authorization: "Autorização",
      mtlsCertificate: "Suporte a Certificado MTLS",
      fullExample: "Exemplo Completo com Autenticação, Interceptador e MTLS",
      sockets: "Suporte WebSocket",
      pendingRequests: "Configuração de Requisições Pendentes",
      pagination: "Paginação",
      queryString: "Query String e Parâmetros",
    },
  },
  es: {
    navigation: {
      gettingStarted: "Comenzar",
      features: "Características",
      installation: "Instalación",
      examples: "Ejemplos",
      github: "GitHub",
    },
    hero: {
      title: "DataStack",
      subtitle: "Framework de Red Swift",
      description: "Un framework de red Swift modular diseñado para flexibilidad, velocidad y facilidad de integración. Construido con prácticas modernas de Swift y conjunto completo de características.",
      getStarted: "Comenzar",
      viewGithub: "Ver en GitHub",
      features: {
        modular: "Diseño Modular",
        modularDesc: "Construido con modularidad en mente para máxima flexibilidad",
        performance: "Alto Rendimiento",
        performanceDesc: "Optimizado para velocidad y uso eficiente de recursos",
        security: "Seguridad Empresarial",
      },
    },
    features: {
      title: "Características Poderosas",
      subtitle: "Todo lo que necesitas para redes Swift modernas",
      httpRequests: "Solicitudes HTTP",
      httpRequestsDesc: "Cliente HTTP simple y poderoso con soporte async/await",
      websockets: "WebSockets",
      websocketsDesc: "Comunicación en tiempo real con gestión de socket integrada",
      authentication: "Autenticación JWT",
      authenticationDesc: "Autenticación segura con actualización automática de token",
    },
    gettingStarted: {
      title: "Comenzando",
      configureDataModel: "1. Crear un modelo de datos",
      configurePaths: "2. Configurar las Rutas de la API",
      defineModels: "3. Definir Modelos de Solicitud y Respuesta",
      createRequest: "4. Crear una Solicitud",
      swiftuiIntegration: "5. Integración SwiftUI",
    },
    installation: {
      title: "Instalación",
      swiftPackageManager: "Swift Package Manager",
      cocoapods: "CocoaPods",
    },
    advanced: {
      title: "Características Avanzadas",
      interceptors: "Interceptores de Solicitud",
      authorization: "Autorización",
      mtlsCertificate: "Soporte de Certificado MTLS",
      fullExample: "Ejemplo Completo con Autenticación, Interceptor y MTLS",
      sockets: "Soporte WebSocket",
      pendingRequests: "Configuración de Solicitudes Pendientes",
      pagination: "Paginación",
      queryString: "Query String y Parámetros",
    },
  },
};