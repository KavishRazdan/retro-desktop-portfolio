export const projects = [
  {
    id: 'sprintdesk',
    title: 'SprintDesk',
    description: 'Enterprise-grade Sprint Management SaaS dashboard with React 19, TypeScript, auth, Kanban board, and analytics.',
    extendedDescription: 'Engineered an enterprise-grade Sprint Management SaaS dashboard with React 19, TypeScript (strict mode), and Vite, featuring authentication, Kanban board, and analytics modules. Built a drag-and-drop Kanban board using dnd-kit with 4-column workflow, action-history stack, and full undo/redo support for task state changes.',
    techStack: ['React 19', 'TypeScript', 'Zustand', 'TanStack Query', 'Tailwind CSS', 'Vite', 'dnd-kit'],
    github: 'https://github.com/KavishRazdan/SprintDesk',
    demo: 'https://sprintdesk-kavish.netlify.app/login',
    features: [
      'Engineered an enterprise-grade Sprint Management SaaS dashboard with React 19, TypeScript (strict mode), and Vite',
      'Features robust authentication, interactive Kanban board, and real-time sprint analytics modules',
      'Built a drag-and-drop Kanban board using dnd-kit with 4-column workflow, action-history stack, and full undo/redo support for task state changes'
    ],
    status: 'Production / Live',
    color: '#EDE9FE'
  },
  {
    id: 'vectorshift',
    title: 'VectorShift Pipeline Editor',
    description: 'Built a client-side visual pipeline editor using ReactFlow, enabling drag-and-drop workflow creation.',
    extendedDescription: 'Built a client-side visual pipeline editor using ReactFlow, enabling drag-and-drop workflow creation. Implemented DAG validation with DFS to prevent cycles and ensure reliable pipeline execution.',
    techStack: ['React.js', 'ReactFlow', 'JavaScript', 'CSS'],
    github: 'https://github.com/KavishRazdan/vectorshift',
    demo: 'https://vectorshiftpipeline.netlify.app/',
    features: [
      'Built a client-side visual pipeline editor using ReactFlow, enabling drag-and-drop workflow creation',
      'Implemented DAG validation with DFS to prevent cycles and ensure reliable pipeline execution',
      'Supported 9 node types, reducing workflow setup time by 40% through reusable modular components'
    ],
    status: 'Stable / Live',
    color: '#E0EEFF'
  },
  {
    id: 'csvplotstudio',
    title: 'CSV Plot Studio',
    description: 'Browser-based CSV data visualization tool supporting 8 chart types with 100% client-side data privacy.',
    extendedDescription: 'Built a browser-based CSV data visualization tool supporting 8 chart types (Scatter, Line, Bar, Histogram, Box, Violin, 3D Scatter/Surface) with 100% client-side data privacy. Implemented multi-threaded CSV parsing with Web Workers (PapaParse) to handle files up to 50MB and 1M+ rows without blocking the UI thread.',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Zustand', 'Web Workers', 'PapaParse'],
    github: 'https://github.com/KavishRazdan/CSV-Plot-Studio',
    demo: 'https://csv-plot.netlify.app/',
    features: [
      'Built a browser-based CSV data visualization tool supporting 8 chart types (Scatter, Line, Bar, Histogram, Box, Violin, 3D Scatter/Surface)',
      '100% client-side data privacy with local processing and zero telemetry',
      'Implemented multi-threaded CSV parsing with Web Workers (PapaParse) to handle files up to 50MB and 1M+ rows without blocking UI'
    ],
    status: 'Production / Live',
    color: '#E0F7FA'
  },
  {
    id: 'idr',
    title: 'IDR Website',
    description: 'Designed and built a responsive homepage with structured UI, improving usability and accessibility.',
    extendedDescription: 'Designed and built a responsive homepage with structured UI, improving usability and accessibility. Implemented modular UI components, reducing development effort for future pages by 25%.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/KavishRazdan/idr-website',
    demo: 'https://idr-kavish.netlify.app/',
    features: [
      'Designed and built a responsive homepage with structured UI, improving usability and accessibility',
      'Implemented modular UI components, reducing development effort for future pages by 25%',
      'Enhanced visual hierarchy and layout consistency for improved user flow'
    ],
    status: 'Stable / Live',
    color: '#FFE2E2'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Website',
    description: 'Built dynamic product listing and cart system handling multiple user interactions efficiently.',
    extendedDescription: 'Built dynamic product listing and cart system handling multiple user interactions efficiently. Improved responsiveness and accessibility across mobile and desktop devices.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/KavishRazdan/lakshya-ply.git',
    demo: 'https://kavishrazdan.github.io/lakshya-ply/',
    features: [
      'Built dynamic product listing and cart system handling multiple user interactions efficiently',
      'Improved responsiveness and accessibility across mobile and desktop devices',
      'Implemented real-time UI updates, reducing user friction during product interactions'
    ],
    status: 'Production-ready',
    color: '#E8FFE0'
  },
  {
    id: 'spotify',
    title: 'Spotify Clone',
    description: 'Engineered a music streaming UI with interactive playback controls and modern interface design.',
    extendedDescription: 'Engineered a music streaming UI with interactive playback controls and modern interface design. Implemented audio control system supporting play, pause, and track navigation across multiple tracks.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/KavishRazdan/spotify-clone-master',
    demo: 'https://spotify-kavish.netlify.app/',
    features: [
      'Engineered a music streaming UI with interactive playback controls and modern interface design',
      'Implemented audio control system supporting play, pause, and track navigation across multiple tracks',
      'Optimized responsive layout for seamless performance across devices'
    ],
    status: 'Stable / Live',
    color: '#F4FFF4'
  }
];

export default projects;
