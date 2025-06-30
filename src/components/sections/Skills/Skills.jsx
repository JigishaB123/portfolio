import React, { useState } from 'react';
import { User } from 'lucide-react';
import { skills } from '../../../data/skills';
import SkillBadge from '../../ui/SkillBadge/SkillBadge';
import './Skills.scss';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaAws,
  FaLinux,
  FaCertificate,
  FaStar,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiJavascript,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiGooglecloud,
  SiTerraform,
  SiElasticsearch,
  SiPostman,
  SiWebpack,
  SiJunit5,
  SiJest,
  SiExpress,
  SiGithubactions,
  SiD3Dotjs,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import './Skills.scss';

const Skills = ({ isVisible }) => {
    // const [activeTab, setActiveTab] = useState('frontend');

    const iconMap = {
        // Frontend
        React: { icon: FaReact, color: '#61DAFB' },
        'Next.js': { icon: SiNextdotjs, color: '#000000' },
        Redux: { icon: SiRedux, color: '#764ABC' },
        JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
        TypeScript: { icon: SiTypescript, color: '#3178C6' },
        HTML5: { icon: FaHtml5, color: '#E34F26' },
        CSS3: { icon: FaCss3Alt, color: '#1572B6' },
        Bootstrap: { icon: FaBootstrap, color: '#7952B3' },
        'D3.js': { icon: SiD3Dotjs, color: '#F68E56' },
    
        // Backend
        Java: { icon: FaJava, color: '#007396' },
        Python: { icon: FaPython, color: '#3776AB' },
        'Node.js': { icon: FaNodeJs, color: '#339933' },
        'Express.js': { icon: SiExpress, color: '#000000' },
        'Spring Boot': { icon: SiSpringboot, color: '#6DB33F' },
        'Shell Scripting': { icon: FaLinux, color: '#4EAA25' },
        'REST API': { icon: SiPostman, color: '#FF6C37' },
        Microservices: { icon: DiJava, color: '#007396' },
    
        // Databases
        MySQL: { icon: SiMysql, color: '#4479A1' },
        Oracle: { icon: SiOracle, color: '#F80000' },
        MongoDB: { icon: SiMongodb, color: '#47A248' },
        PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
        JSON: { icon: SiJavascript, color: '#F7DF1E' },
        XML: { icon: SiPostman, color: '#FF6C37' },
    
        // Cloud
        'AWS(EC2, S3, RDS, CloudWatch, AMI, Auto Scaling)': { icon: FaAws, color: '#FF9900' },
        GCP: { icon: SiGooglecloud, color: '#4285F4' },
        'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
        Terraform: { icon: SiTerraform, color: '#7B42BC' },
        Packer: { icon: FaAws, color: '#FF9900' },
    
        // Tools
        GitHub: { icon: FaGithub, color: '#181717' },
        ElasticSearch: { icon: SiElasticsearch, color: '#005571' },
        'Message Queues': { icon: SiRedux, color: '#764ABC' },
        'IBM MQ': { icon: SiRedux, color: '#054ADA' },
        Postman: { icon: SiPostman, color: '#FF6C37' },
        Webpack: { icon: SiWebpack, color: '#8DD6F9' },
        Linux: { icon: FaLinux, color: '#FCC624' },
        'Object Oriented Design(OOD)': { icon: DiJava, color: '#007396' },
        'Design Patterns': { icon: DiJava, color: '#007396' },
        'Data Structures': { icon: DiJava, color: '#007396' },
    
        // Testing
        JUnit: { icon: SiJunit5, color: '#25A162' },
        Mockito: { icon: DiJava, color: '#007396' },
        Jest: { icon: SiJest, color: '#C21325' },
        'Azure AZ-900 Fundamentals': {icon: FaStar, color: '#FFD700'},
        'NPTEL Elite Database Management System': {icon: FaStar, color: '#FFD700'},
        'NPM-cards-key-point-indicator': {icon: FaStar, color: '#FFD700'},
      };

      // Category titles
    const categoryTitles = {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        databases: 'Databases',
        cloud: 'Cloud & DevOps',
        tools: 'Tools & Technologies',
        certifications: 'Achievements',
    };

      // Default icon for skills without specific icons
  const DefaultIcon = ({ skill }) => (
    <div className="skills-row__skill-default-icon">
      {skill.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
    </div>
  );
  
    // const tabData = [
    //   {
    //     id: 'frontend',
    //     label: 'Frontend tech',
    //     skills: skills.frontend,
    //     variant: 'primary'
    //   },
    //   {
    //     id: 'backend',
    //     label: 'Backend & DB',
    //     skills: [...skills.backend, ...skills.databases],
    //     variant: 'secondary'
    //   },
    //   {
    //     id: 'cloud',
    //     label: 'Cloud & Tools',
    //     skills: [...skills.cloud, ...skills.tools],
    //     variant: 'tertiary'
    //   },
    //   {
    //     id: 'testing',
    //     label: 'Testing Tools',
    //     skills: skills.testing,
    //     variant: 'primary'
    //   }
    // ];
  
    return (
        <section id="skills" className="skills-row">
          <div className="skills-row__container">
            <div className={`skills-row__content ${isVisible? 'skills-row__content--visible' : 'skills-row__content--hidden'}`}>
              <div className="skills-row__categories">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="skills-row__category">
                    <h3 className="skills-row__category-title">
                      {categoryTitles[category] || category}
                    </h3>
                    <div className="skills-row__skills">
                      {skillList.map((skill) => {
                        const skillConfig = iconMap[skill];
                        const IconComponent = skillConfig?.icon || DefaultIcon;
    
                        return (
                          <div key={skill} className="skills-row__skill-item">
                            <div
                              className="skills-row__skill-icon"
                              style={{
                                color: skillConfig?.color || '#6B7280',
                              }}
                            >
                              {skillConfig ? (
                                <IconComponent />
                              ) : (
                                <DefaultIcon skill={skill} />
                              )}
                            </div>
                            <span className="skills-row__skill-name">{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );

  };
  
  export default Skills;