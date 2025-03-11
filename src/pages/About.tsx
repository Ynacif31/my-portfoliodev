export default function About() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">Sobre Mim</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8" data-aos="fade-up">
          <p className="text-lg text-gray-700 mb-6">
            Sou um desenvolvedor backend apaixonado por construir soluções escaláveis e eficientes.
            Minha jornada na tecnologia começou com a curiosidade de entender como sistemas funcionam,
            evoluindo para um profundo conhecimento em arquitetura de microsserviços e boas práticas de desenvolvimento.
          </p>
          
          <p className="text-lg text-gray-700">
            Especializado em Java e Spring Boot, tenho experiência em bancos de dados SQL e NoSQL,
            testes automatizados e conteinerização com Docker. Busco sempre melhorar minha
            capacidade de escrita de código limpo e eficiente, seguindo princípios como SOLID e Design Patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-right">
            <h3 className="text-xl font-bold mb-4">Educação</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Tecnologia em Análise e Desenvolvimento de Sistemas</h4>
                <p className="text-gray-600">Centro Universitário Internacional UNINTER</p>
                <p className="text-gray-500">2024 - 2027</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-left">
            <h3 className="text-xl font-bold mb-4">Experiência</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Desenvolvedor Backend (Voluntário)</h4>
                <p className="text-gray-600">Remotinho dos Sonhos</p>
                <p className="text-gray-500">Set-2024 - Atualmente</p>
              </li>
              <li>
                <h4 className="font-semibold">Moderador e Mentor</h4>
                <p className="text-gray-600">Comunidade Devs Java Brasil</p>
                <p className="text-gray-500">Jun-2024 - Atualmente</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}