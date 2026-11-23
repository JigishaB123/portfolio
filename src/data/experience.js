export const experience = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Ribbon Communications",
      focus: "AWS · AI agents", // short label for the Trajectory timeline
      period: "Sep 2025 - Dec 2025",
      location: "USA",
      responsibilities: [
        "Built a serverless AWS pipeline using Lambda, SNS/SQS, Glue, and S3 Parquet to ingest 10,000+ daily events from distributed multi tenant microservices, automating ETL and reducing manual processing by 80%",
        "Developed a multi agent SRE system in CrewAI with specialized agents for fault localization, log analysis, root cause analysis, and remediation planning, coordinated through a state machine orchestration layer, cutting incident resolution time by about 40%",
        "Applied context engineering by filtering and summarizing raw logs before passing them to agents and scoping each agent’s context to its task, improving reasoning accuracy and reducing token usage",
        "Built an LLM as judge evaluation loop with fault injection scenarios to benchmark agent outputs, iterating on prompts and orchestration logic to improve fault detection, localization, and mitigation accuracy"
      ],
      tech: ["Python", "Amazon Web Services(Lambda, ECS, Step Functions, S3)", "CloudFormation", "CI/CD"]
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Finastra",
      focus: "Java · Sping Boot · Kafka · Payments", // short label for the Trajectory timeline
      period: "Aug 2023 - Feb 2024",
      location: "India",
      responsibilities: [
        "Designed and developed end-to-end payment workflows in Java and Spring Boot with business-rule execution, message transformation, and MQ-based routing at sub-1ms latency, processing 5M+ daily transactions",
        "Migrated a legacy batch payment processor to an event-driven architecture using Kafka and Spring Boot microservices, enabling continuous processing and eliminating end-of-day batch delays",
        "Built full-stack liquidity dashboards using Angular and Spring Boot exposing transaction and account services through APIs with role-based access control for real-time fund-position visibility",
        "Redesigned SQL stored procedures via query restructuring and table partitioning, reducing execution time from hours to minutes (80% improvement) and unblocking a high-priority client delivery"
      ],
      tech: ["Java", "SpringBoot", "Microservices", "Kafka", "IBM MQ", "JUnit", "SQL"]
    },
    {
      id: 3,
      title: "Senior Software Engineer",
      company: "Xoriant Solutions Pvt Ltd",
      focus: "Java · Spring Boot · Angular", // short label for the Trajectory timeline
      period: "Aug 2020 - Aug 2023",
      location: "India",
      responsibilities: [
        "Maintained and enhanced a payment processing platform for banking clients, building features across payment validation, enrichment, and using Java, Spring Boot microservices, and Hibernate ORM with Oracle",
        "Built Elasticsearch indexes for payment transaction data, enabling operations and support teams to search payments by reference number, account, status, and date range in near real time",
        "Led root cause analysis on production incidents using application logs and database traces, delivering permanent fixes that reduced recurring defects by 40% and lowered on call escalations",
        "Configured Jenkins pipelines for build, unit test, Selenium regression, and deployment stages across development and QA, supporting zero downtime releases within Agile Scrum sprints"
      ],
      tech: ["Java", "SpringBoot", "Angular", "SQL"]
    }
  ];