// Layers of the 3D architecture stack in the hero, listed bottom -> top.
export const architecture = [
  { id: 'L0', label: 'Infra',     name: 'Cloud & Infra',     color: '#818cf8', tags: ['AWS', 'Terraform', 'Kubernetes', 'Docker'] },
  { id: 'L1', label: 'Data',      name: 'Data',              color: '#7dd3fc', tags: ['PostgreSQL', 'Oracle', 'MongoDB', 'S3'] },
  { id: 'L2', label: 'Messaging', name: 'Event Streams',     color: '#5eead4', tags: ['Kafka', 'SQS/SNS', 'IBM MQ'] },
  { id: 'L3', label: 'Services',  name: 'Services & Agents', color: '#6ee7b7', tags: ['Spring Boot', 'Node.js', 'FastAPI', 'CrewAI'] },
  { id: 'L4', label: 'Client',    name: 'Interfaces',        color: '#a5b4fc', tags: ['React', 'Angular', 'React Native'] }
];
