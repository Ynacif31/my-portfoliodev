const skills = [
  {
    category: 'Desenvolvimento Backend',
    items: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring Security', level: 80 },
      { name: 'APIs REST', level: 85 },
      { name: 'Node.js', level: 60 },
    ],
  },
  {
    category: 'Desenvolvimento Frontend',
    items: [
      { name: 'JavaScript', level: 60 },
      { name: 'TypeScript', level: 45 },
      { name: 'HTML & CSS', level: 85 },
      { name: 'React.js', level: 55 },
    ],
  },
  {
    category: 'Banco de Dados',
    items: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Oracle DB', level: 70 },
    ],
  },
  {
    category: 'Testes Automatizados',
    items: [
      { name: 'JUnit', level: 80 },
      { name: 'Mockito', level: 75 },
    ],
  },
  {
    category: 'Ferramentas & DevOps',
    items: [
      { name: 'Docker', level: 80 },
      { name: 'Docker Compose', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'Kubernetes', level: 60 },
    ],
  },
  {
    category: 'Metodologias & Boas Práticas',
    items: [
      { name: 'Scrum', level: 65 },
      { name: 'Kanban', level: 50 },
      { name: 'Clean Code', level: 90 },
      { name: 'SOLID', level: 85 },
      { name: 'DDD', level: 75 },
      { name: 'Design Patterns', level: 80 },
    ],
  },
  {
    category: 'Habilidades Gerais',
    items: [
      { name: 'Comunicação clara e objetiva', level: 90 },
      { name: 'Trabalho em equipe e colaboração', level: 85 },
      { name: 'Organização e análise de dados', level: 80 },
      { name: 'Redação de documentação técnica', level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          Skills & Expertise
        </h2>

        <div className="space-y-12">
          {skills.map((category, index) => (
            <div
              key={category.category}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white rounded-lg shadow-lg p-6"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
