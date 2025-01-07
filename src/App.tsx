import { Phone, Star, Clock, CheckCircle } from 'lucide-react';
import Carousel from "./carousel";

function App() {
  const handleContactClick = () => {
    window.location.href = "https://wa.me/351XXXXXXXXX";
  };

  return (
    <div className="font-opensans max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <section className="py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="font-roboto text-4xl font-bold text-[#61BB46] mb-6">
              Procurando Reparação de Estores em Lisboa?
            </h1>
            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-[#61BB46]" /> Serviço Rápido
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#61BB46]" /> Técnicos Especializados
              </span>
              <span className="flex items-center gap-2">
                <Star size={16} className="text-[#61BB46]" /> Orçamento Gratuito
              </span>
            </div>
            <div className="space-y-3 mb-8">
              <p className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#61BB46]" /> 
                Conserto de estores elétricos e manuais
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#61BB46]" /> 
                Troca de peças, lâminas, motores e fitas
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle size={20} className="text-[#61BB46]" /> 
                Atendimento em toda a Grande Lisboa
              </p>
            </div>
            <button 
              onClick={handleContactClick}
              className="bg-[#61BB46] text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-[#61BB46]/90 transition-colors duration-300 mb-4"
            >
              Solicitar orçamento
            </button>
            <p className="text-sm">Atendemos Lisboa e Região Metropolitana</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">Solicitar orçamento</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nome"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input 
                type="tel" 
                placeholder="Telefone"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <textarea 
                placeholder="Mensagem"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-[#61BB46] text-white font-bold py-3 rounded"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <h2 className="font-roboto text-3xl font-bold text-center text-[#61BB46] mb-8">
          Por que escolher nossos serviços de reparação de estores?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="border-2 border-transparent shadow-lg  rounded-lg p-4 flex hover:border-solid hover:border-[#61BB46] hover:shadow-lg transition-all duration-300">
            <i className="fas fa-bolt text-[#61BB46] text-3xl mr-4"></i>
            <div>
              <h3 className="font-bold mb-2">Atendimento Rápido</h3>
              <p className="text-sm">Técnicos disponíveis para urgências</p>
            </div>
          </div>
          <div className="border-2 border-transparent shadow-lg  rounded-lg p-4 flex hover:border-solid hover:border-[#61BB46] hover:shadow-lg transition-all duration-300">
            <i className="fas fa-medal text-[#61BB46] text-3xl mr-4"></i>
            <div>
              <h3 className="font-bold mb-2">Garantia de Qualidade</h3>
              <p className="text-sm">Trabalhamos com peças originais</p>
            </div>
          </div>
          <div className="border-2 border-transparent shadow-lg  rounded-lg p-4 flex hover:border-solid hover:border-[#61BB46] hover:shadow-lg transition-all duration-300">
            <i className="fas fa-calculator text-[#61BB46] text-3xl mr-4"></i>
            <div>
              <h3 className="font-bold mb-2">Orçamento Grátis</h3>
              <p className="text-sm">Sem compromisso, com transparência total</p>
            </div>
            </div>
            <div className="border-2 border-transparent shadow-lg  rounded-lg p-4 flex hover:border-solid hover:border-[#61BB46] hover:shadow-lg transition-all duration-300">
            <i className="fas fa-clock text-[#61BB46] text-3xl mr-4"></i>
            <div>
              <h3 className="font-bold mb-2">Mais de 20 Anos de Experiência</h3>
              <p className="text-sm">Profissionais certificados</p>
            </div>
          </div>
          <div className="border-2 border-transparent shadow-lg  rounded-lg p-4 flex hover:border-solid hover:border-[#61BB46] hover:shadow-lg transition-all duration-300">
            <i className="fas fa-check-circle text-[#61BB46] text-3xl mr-4"></i>
            <div>
              <h3 className="font-bold mb-2 ">Serviço Completo </h3>
              <p className="text-sm">Reparamos estores elétricos, de rolo, manuais e motorizados</p>
            </div>
          </div>

          <div className="bg-gray-500 border-2 border-transparent shadow-lg rounded-lg p-4 flex hover:border-solid hover:border-[#61BB46] hover:shadow-lg  transition-all duration-300">
            <button 
              onClick={handleContactClick}
              className="flex"
            >
              <i className="fas fa-phone  text-[#61BB46] text-3xl mr-4"></i>
              <div className="flex flex-col items-start">
                <h3 className="font-bold mb-2 text-[#ffff]">Solicitar orçamento</h3>
                <p className="text-sm text-[#ffff]">Ligue-nos para um atendimento personalizado</p>
              </div>
            </button>
          </div>

        </div>
        
      </section>

      {/* Banner Section */}
      <div className="relative bg-gradient-to-br from-gray-500 to-gray-300 bg-opacity-100 p-4 rounded-lg h-[400px] w-full bg-cover bg-bottom" style={{backgroundImage: "url('src/img/reparacoes-de-estores.jpg')"}}>
        <div className="absolute rounded-lg inset-0 bg-gradient-to-br from-gray-500 to-gray-800 opacity-70"></div>
        
      </div>


      {/* Services Offered */}
      <section className="py-12">
        <h2 className="font-roboto text-3xl font-bold text-[#61BB46] text-center mb-8">
        Serviços Oferecidos
        </h2>
        <p className="mb-8 text-center">Oferecemos reparação para todos os tipos de estores:</p>
        <Carousel />
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <h2 className="font-roboto text-3xl font-bold text-[#61BB46] text-center mb-8">
          O que nossos clientes dizem?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { text: "Serviço excelente! Rápido e eficiente, meus estores ficaram como novos.", name: "Carlos M.", location: "Lisboa" },
            { text: "Equipe profissional e preço justo. Recomendo a todos!", name: "Ana P.", location: "Sintra" },
            { text: "Atendimento rápido e confiável. Meus estores elétricos voltaram a funcionar perfeitamente.", name: "Pedro S.", location: "Cascais" }
          ].map((testimonial, index) => (
            <div key={index} className="border-2 border-transparent shadow-lg  rounded-lg p-6 hover:border-solid hover:border-[#61BB46] hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 text-[#dac20d] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 text-sm">"{testimonial.text}"</p>
              <p className="font-bold text-sm">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.location}</p>
            </div>
          ))}
        </div>
        <div className="text-center bg-gradient-to-br from-gray-500 to-gray-300 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Mais de 500 clientes satisfeitos em Lisboa e região!</h3>
          <button 
            onClick={handleContactClick}
            className="bg-[#61BB46] text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-[#61BB46]/90 transition-colors duration-300"
          >
            Pedir Orçamento Grátis
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12">
        <h2 className="font-roboto text-3xl font-bold text-[#61BB46] text-center mb-6">
          Não Fique com Estores Danificados!
        </h2>
        <p className="text-center mb-8">Solução rápida, econômica e eficiente para o seu problema.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="flex items-center gap-2">
              <Clock size={20} className="text-[#61BB46]" />
              Atendimento imediato! Ligue agora e resolva seu problema hoje mesmo!
            </p>
            <p className="flex items-center gap-2">
              <CheckCircle size={20} className="text-[#61BB46]" />
              Lisboa e Grande Lisboa - Técnicos disponíveis!
            </p>
            <button 
              onClick={handleContactClick}
              className="w-full bg-[#61BB46] text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-[#61BB46]/90 transition-colors duration-300"
            >
              Solicitar orçamento Agora!
            </button>
            <div className="flex justify-center items-center gap-2 text-xl font-bold">
              <Phone size={24} className="text-[#61BB46]" />
              <span>Ligue Agora: +351 968 657 974</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nome"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input 
                type="tel" 
                placeholder="Telefone"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded"
              />
              <textarea 
                placeholder="Mensagem"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-[#61BB46] text-white font-bold py-3 rounded"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}export default App;