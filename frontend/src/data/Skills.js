const skills = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript, React and build modern websites.",
    topics: [
      {
        title: "HTML",
        description: "Learn the structure of webpages.",
        content:
          "HTML (HyperText Markup Language) is used to create the structure of webpages. It defines headings, paragraphs, images, links, buttons and other elements.",
        example: "<h1>Hello World</h1>",
      },
      {
        title: "CSS",
        description: "Learn how to style webpages.",
        content:
          "CSS (Cascading Style Sheets) controls how HTML elements look. You can use CSS to change colors, spacing, fonts, layouts and animations.",
        example: `h1 {
  color: blue;
}`,
      },
      {
        title: "JavaScript",
        description: "Learn programming for the web.",
        content:
          "JavaScript makes webpages interactive. It can respond to clicks, change content, handle forms and communicate with servers.",
        example: 'console.log("Hello World");',
      },
      {
        title: "React",
        description: "Build modern user interfaces.",
        content:
          "React is a JavaScript library for building user interfaces using reusable components and state.",
        example: `function App() {
  return <h1>Hello React</h1>;
}`,
      },
    ],
  },

  {
    icon: "🧠",
    title: "Data Structures",
    description:
      "Master arrays, trees, graphs, algorithms and problem solving.",
    topics: [
      {
        title: "Arrays",
        description: "Store and access collections of data.",
        content:
          "An array stores multiple values in a single structure. Elements can be accessed using their index.",
        example: "int numbers[] = {10, 20, 30};",
      },
      {
        title: "Linked Lists",
        description: "Learn dynamic data structures.",
        content:
          "A linked list consists of nodes where each node stores data and a reference to another node.",
        example: "Node → Node → Node",
      },
      {
        title: "Trees",
        description: "Understand hierarchical data.",
        content:
          "A tree is a hierarchical data structure consisting of nodes connected by edges.",
        example: `       10
      /  \\
     5   15`,
      },
      {
        title: "Graphs",
        description: "Represent relationships between objects.",
        content:
          "Graphs consist of vertices and edges and can represent networks, maps and relationships.",
        example: "A → B → C",
      },
      {
        title: "Algorithms",
        description: "Solve problems efficiently.",
        content:
          "Algorithms are step-by-step procedures used to solve computational problems efficiently.",
        example: "Input → Process → Output",
      },
    ],
  },

  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Explore Python, machine learning and artificial intelligence.",
    topics: [
      {
        title: "Python",
        description: "Learn Python fundamentals.",
        content:
          "Python is a popular programming language widely used in AI, data science and automation.",
        example: 'print("Hello AI")',
      },
      {
        title: "NumPy",
        description: "Work with numerical data.",
        content:
          "NumPy provides powerful tools for numerical computing and working with arrays in Python.",
        example: "import numpy as np",
      },
      {
        title: "Machine Learning",
        description: "Teach computers to learn from data.",
        content:
          "Machine learning allows computers to learn patterns from data and make predictions or decisions.",
        example: "Data → Model → Prediction",
      },
      {
        title: "Deep Learning",
        description: "Explore neural networks.",
        content:
          "Deep learning uses neural networks with multiple layers to learn complex patterns.",
        example: "Input → Neural Network → Output",
      },
    ],
  },

  {
    icon: "🔐",
    title: "Cybersecurity",
    description:
      "Learn about networks, security, ethical hacking and protecting systems.",
    topics: [
      {
        title: "Networking",
        description: "Understand computer networks.",
        content:
          "Networking is the process of connecting computers and devices so they can communicate and share resources.",
        example: "Computer → Router → Internet",
      },
      {
        title: "Linux",
        description: "Learn the Linux operating system.",
        content:
          "Linux is an open-source operating system widely used in servers, cybersecurity and development.",
        example: `ls
cd folder
pwd`,
      },
      {
        title: "Web Security",
        description: "Protect web applications.",
        content:
          "Web security focuses on protecting websites and applications from vulnerabilities and unauthorized access.",
        example: "Input → Validation → Secure Application",
      },
      {
        title: "Ethical Hacking",
        description: "Learn authorized security testing.",
        content:
          "Ethical hacking involves testing systems with permission to identify and fix security weaknesses.",
        example: "Find vulnerability → Report → Fix",
      },
    ],
  },

  {
    icon: "📱",
    title: "App Development",
    description:
      "Learn how to create useful and beautiful mobile applications.",
    topics: [
      {
        title: "Flutter",
        description: "Build cross-platform applications.",
        content:
          "Flutter is a framework for building applications for multiple platforms using Dart.",
        example: "Widget → Screen → App",
      },
      {
        title: "React Native",
        description: "Build mobile apps using React.",
        content:
          "React Native allows developers to build mobile applications using JavaScript and React.",
        example: `<View>
  <Text>Hello</Text>
</View>`,
      },
      {
        title: "Android",
        description: "Develop Android applications.",
        content:
          "Android development involves building applications for devices running the Android operating system.",
        example: "Activity → Layout → User",
      },
      {
        title: "APIs",
        description: "Connect applications with services.",
        content:
          "APIs allow different software systems to communicate and exchange data.",
        example: "App → API → Server",
      },
    ],
  },

  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Design attractive, simple and user-friendly digital experiences.",
    topics: [
      {
        title: "Figma",
        description: "Create digital designs.",
        content:
          "Figma is a collaborative design tool used to create interfaces, prototypes and design systems.",
        example: "Design → Prototype → Test",
      },
      {
        title: "Wireframes",
        description: "Plan interface layouts.",
        content:
          "Wireframes are simple visual representations of a webpage or application's structure.",
        example: "Header → Content → Footer",
      },
      {
        title: "Prototyping",
        description: "Create interactive designs.",
        content:
          "Prototypes simulate how an interface will behave before it is fully developed.",
        example: "Screen A → Button → Screen B",
      },
      {
        title: "User Research",
        description: "Understand your users.",
        content:
          "User research helps designers understand users' needs, problems and behaviors.",
        example: "Research → Design → Test → Improve",
      },
    ],
  },
];

export default skills;