import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useEffect, useState } from "react";
import { smoothScrollTo } from "@/lib/utils";

interface HeroSectionProps {
  onBookingClick: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const successRate = useCounterAnimation(95, 2000, isVisible);
  const experience = useCounterAnimation(8, 2000, isVisible);
  const students = useCounterAnimation(150, 2000, isVisible);

  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-white mb-8 lg:mb-0">
            <h1 className="font-bold text-4xl lg:text-6xl mb-4 leading-tight">
              Частный репетитор по <span className="text-yellow-300">математике</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-6 text-blue-100">
              Качественная подготовка к ЕГЭ и ОГЭ
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <div className="stat-counter text-white text-2xl lg:text-4xl">{successRate}</div>
                <p className="text-blue-100">% успешных учеников</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <div className="stat-counter text-white text-2xl lg:text-4xl">{experience}</div>
                <p className="text-blue-100">лет опыта</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                <div className="stat-counter text-white text-2xl lg:text-4xl">{students}</div>
                <p className="text-blue-100">довольных учеников</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBookingClick}
                className="btn-primary text-lg"
              >
                Записаться на пробный урок
              </button>
              <button 
                onClick={() => smoothScrollTo("about")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg text-center hover:bg-white hover:text-primary transition-all"
              >
                Узнать больше
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=600" 
              alt="Анна Петрова - репетитор по математике" 
              className="rounded-2xl shadow-2xl w-80 h-96 object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <i className="fas fa-square-root-alt text-6xl text-white"></i>
      </div>
      <div className="absolute bottom-20 right-20 opacity-20">
        <i className="fas fa-infinity text-4xl text-white"></i>
      </div>
    </section>
  );
}
