export const experience = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Ribbon Communications",
      period: "Sep 2025 - Dec 2025",
      location: "USA",
      responsibilities: [
        "Architected a serverless AWS pipeline (Lambda, SNS/SQS, S3) ingesting 10,000+ daily events across distributed microservices, automating ETL and reducing manual processing by 80%",
        "Built a multi-agent SRE system using CrewAI with detection, diagnosis, and mitigation agents, handling 10–20 fault scenarios in live cloud environments",
        "Implemented an NL2Kubectl layer with Llama 3:8B for Kubernetes remediation with guardrails, achieving 70–85% SRE mitigation success rate"
      ],
      tech: ["Python", "Amazon Web Services(Lambda, ECS, Step Functions, S3)", "CloudFormation", "CI/CD"]
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Finastra",
      period: "Aug 2023 - Feb 2024",
      location: "India",
      responsibilities: [
        "Developed end-to-end Java/Spring Boot payment workflows with MQ-based routing, processing 5M+ daily transactions at sub-millisecond latency",
        "Migrated a legacy batch payment processor to an event-driven Kafka microservices architecture, eliminating end-of-day batch delays",
        "Built full-stack liquidity dashboards in Angular and Spring Boot with role-based access control for real-time fund position visibility",
        "Optimized SQL stored procedures via query restructuring and partitioning, reducing execution time by 80% and unblocking a high-priority client delivery"
      ],
      tech: ["Java", "SpringBoot", "Microservices", "Kafka", "IBM MQ", "JUnit", "SQL"]
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      company: "Xoriant Solutions Pvt Ltd",
      period: "Aug 2020 - Aug 2023",
      location: "India",
      responsibilities: [
        "Optimized Spring Boot microservices and Oracle SQL across 25M+ records, reducing response time by 45% via index restructuring and service-level caching",
        "Led root cause analysis on production incidents across distributed services, reducing recurring defects by 40% and cutting on-call escalation volume",
        "Automated CI/CD pipelines with Jenkins and Git, enabling zero-downtime deployments across multiple client environments",
      ],
      tech: ["Java", "SpringBoot", "Angular", "SQL"]
    }
  ];