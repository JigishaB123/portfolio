export const projects = [
    {
      id: 1,
      title: "CloudFileVault: Cloud Native Application",
      image: "/images/CloudFileVault-1.png",
      description: [
        "Developed a secure Node.js file storage app on AWS (EC2, RDS, S3, CloudWatch) with encrypted access",
        "Automated infrastructure and deployments with Terraform and GitHub Actions, including IAM, KMS, AMI and AutoScaling setup",
      ],
      tech: ["AWS", "Node.js", "REST API", "Sequelize", "Jest", "MySQL", "Terraform"],
      github: "https://github.com/orgs/CloudnativeOrg/repositories",
      year: "2025"
    },
    {
      id: 2,
      title: "BudgetBuddy",
      image: "/images/tracker.png",
      description: [
        "Built a React.js and Material UI group expense app with Node.js/Express REST APIs (MVC) for user and expense management",
        "Integrated OpenAI APIs for automated receipt extraction and secured backend services using JWT authentication",
      ],
      tech: ["React", "Material UI", "Node.js", "OpenAPI", "Express", "Chart.js", "MongoDB"],
      year: "2024"
    },
    {
      id: 3,
      title: "Finance Management System",
      image: "/images/finance.jpg",
      description: [
        "Built a modular finance management application using Java and JavaFX, supporting budgeting, transaction tracking, and financial analysis",
        "Applied OOP and design patterns (MVC, Factory) to create scalable components with interactive data visualizations"
      ],
      tech: ["Java", "JavaFX", "Design Patterns", "MySQL"],
      year: "2024"
    }
  ];