export const projects = [
    {
      id: 1,
      title: "CloudFileVault: Cloud Native Application",
      image: "/images/cloudfilevault.png",
      description: [
        "CloudFileVault is a secure, cloud-native file storage application built with Node.js, RESTful APIs, Sequelize ORM, and MySQL. It allows users to upload and manage files through encrypted HTTPS endpoints, with backend services deployed on AWS EC2, RDS, and S3. The app also supports custom domain integration and ensures secure access through SSL.",
        "The infrastructure is fully automated using Terraform, provisioning IAM roles, VPCs, KMS encryption, and AMIs for scalable deployments. A CI/CD pipeline built with GitHub Actions automates testing and deployment, while AWS CloudWatch integration enables real-time monitoring and log analysis, enhancing observability and operational efficiency.",
      ],
      tech: ["AWS", "Node.js", "REST API", "Sequelize", "MySQL", "Terraform"],
      github: "https://github.com/orgs/CloudnativeOrg/repositories",
      // demo: "https://ecommerce-demo.com",
      year: "2025"
    },
    {
      id: 2,
      title: "BudgetBuddy",
      image: "/images/budgetbuddy.png",
      description: [
        "BudgetBuddy is a full-stack group expense tracking application built with React.js, Material UI, Node.js, and MongoDB. It enables users to manage shared expenses, split bills, and automate expense entry through receipt uploads using the OpenAI API. The responsive frontend ensures a smooth user experience, while the backend follows the MVC architecture to maintain scalability and code clarity.",
        "The app features secure user authentication using password encryption and JWT-based session management, ensuring data privacy. With its intelligent automation, clean design, and robust backend, BudgetBuddy simplifies financial collaboration among groups.",
      ],
      tech: ["React", "Material UI", "Node.js", "Express", "Chart.js", "MongoDB"],
      github: "https://github.com/yourusername/task-manager",
      // demo: "https://taskmanager-demo.com",
      year: "2024"
    },
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description: "Interactive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    //   tech: ["React", "OpenWeather API", "Chart.js", "CSS Grid"],
    //   github: "https://github.com/yourusername/weather-dashboard",
    //   demo: "https://weather-demo.com",
    //   year: "2022"
    // }
  ];