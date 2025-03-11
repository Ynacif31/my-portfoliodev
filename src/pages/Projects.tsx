import SCR from '../assets/SCR-20250311-mwzf.png'
import PD from '../assets/SCR-20250311-mytp.png'
import SF from '../assets/SCR-20250311-mzlg.png'
import Email from '../assets/SCR-20250311-nboq.png'
import Nutrition from '../assets/SCR-20250311-nfgw.png'

const projects = [
  {
    title: 'Products Catalog',
    description: 'Sistema de gerenciamento de catálogo com Java, Spring Boot e OAuth2/JWT.',
    image: PD,
    technologies: ['Spring Boot', 'Spring Security', 'JPA', 'H2', 'Docker'],
    demoUrl: 'https://github.com/Ynacif31/productsCatalog',
    githubUrl: 'https://github.com/Ynacif31/productsCatalog',
  },
  {
    title: 'BehealthyNutrition (Em Desenvolvimento)',
    description: 'Microserviço de controle de uma clinica de nutrição com Java e Spring Boot.',
    image: Nutrition,
    technologies: ['Spring Boot', 'Docker', 'Kubernetes', 'RabbitMQ', 'MySQL', 'API Gateway'],
    demoUrl: 'https://github.com/Ynacif31/BehealthyNutrition-ms',
    githubUrl: 'https://github.com/Ynacif31/BehealthyNutrition-ms',
  },
  {
    title: 'Secret Friend',
    description: 'Sistema de sorteio de Amigo Secreto com Java e Spring Boot.',
    image: SF,
    technologies: ['Spring Boot', 'Maven', 'Lombok'],
    demoUrl: 'https://github.com/Ynacif31/SecretFriend',
    githubUrl: 'https://github.com/Ynacif31/SecretFriend',
  },
  {
    title: 'Microservice Bank',
    description: 'Microserviço bancário com suporte a cartões de crédito e empréstimos.',
    image: SCR,
    technologies: ['Spring Boot', 'Docker', 'Kubernetes', 'RabbitMQ', 'MySQL', 'API Gateway'],
    demoUrl: 'https://github.com/Ynacif31/Microservices-bank',
    githubUrl: 'https://github.com/Ynacif31/Microservices-bank',
  },
  {
    title: 'Envio de E-mail Microserviço com RabbitMQ',
    description: 'Microserviço para envio assíncrono de e-mails com RabbitMQ.',
    image: Email,
    technologies: ['Java', 'Spring Boot', 'RabbitMQ', 'Spring Boot Starter AMQP', 'Spring Boot Starter Mail'],
    demoUrl: 'https://github.com/Ynacif31/EnvioDeEmail-ms-rabbitMQ',
    githubUrl: 'https://github.com/Ynacif31/EnvioDeEmail-ms-rabbitMQ',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          Meus Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Ver no GitHub
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Repositório
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
