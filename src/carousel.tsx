import { useState, useEffect } from 'react';

const carouselItems = [
  {
    image: "src/img/estores1.jpg",
    title: "Reparação de EstoresReparação de Estores",
    description: "Serviço profissional e rápido para seu conforto"
  },
  {
    image: "src/img/estores2.jpg",
    title: "Manutenção Preventiva",
    description: "Evite problemas futuros com manutenção regular"
  },
  {
    image: "src/img/estores1.jpg",
    title: "Estores Elétricos",
    description: "Instalação e reparação de sistemas automatizados"
  },
  {
    image: "src/img/estores2.jpg",
    title: "Peças Originais",
    description: "Trabalhamos apenas com materiais de qualidade"
  }
];

const Carousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (!isHovered) {
      interval = setInterval(handleNextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const visibleItems = [
    carouselItems[currentIndex],
    carouselItems[(currentIndex + 1) % carouselItems.length],
    carouselItems[(currentIndex + 2) % carouselItems.length],
  ];

  return (
    <div 
      className="flex items-center justify-center overflow-hidden py-8 gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {visibleItems.map((item, index) => (
        <div 
          key={index} 
          className={`shadow-lg rounded-lg pt-4 pb-4 transition-all duration-700 ease-in-out transform
            ${index === 1 ? 'w-2/5 scale-110 z-10' : 'w-1/4 scale-90 opacity-70'}
            ${index === 2 ? 'cursor-pointer' : ''}
          `}
          onClick={() => index === 2 && handleNextSlide()}
        >
          <div className={`relative ${index === 1 ? 'h-80' : 'h-64'} group`}>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
              style={{ 
                backgroundImage: `url(${item.image})`,
              }}
            />
            <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                {item.title}
              </h3>
            </div>
          </div>
          <p className={`mt-4 text-center text-gray-600 transition-all duration-700 
            ${index === 1 ? 'text-lg font-medium mt-7 mx-4' : 'text-sm'}`}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;