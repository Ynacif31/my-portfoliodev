import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1" data-aos="fade-right">
          <h1 className="text-5xl font-bold mb-6">
            Olá, eu sou <span className="text-blue-600">Ygor Nacif De Oliveira</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Desenvolvedor Backend especializado em Java, Spring Boot e Microsserviços.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Veja Meu Trabalho
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
        
        <div className="flex-1" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Developer"
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
