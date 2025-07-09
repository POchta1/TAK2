import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useEffect, useState } from "react";
import { smoothScrollTo } from "@/lib/utils";

interface HeroSectionProps {
  onBookingClick: () => void;
}

export default function HeroSection({ onBookingClick }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const successRate = 98;
  const experience = 7;
  const students = 600;

  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <h1 className="font-bold text-4xl lg:text-6xl mb-6 leading-tight text-shadow">
              Частный репетитор по{" "}
              <span className="text-yellow-300 block lg:inline">английскому языку</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-red-100 max-w-2xl">
              Качественная подготовка к ЕГЭ и международным экзаменам с индивидуальным подходом к каждому ученику
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm text-center transform hover:scale-105 transition-transform">
                <div className="stat-counter text-white text-3xl lg:text-4xl font-bold mb-2">{successRate}%</div>
                <p className="text-red-100 text-sm">успешных учеников</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm text-center transform hover:scale-105 transition-transform">
                <div className="stat-counter text-white text-3xl lg:text-4xl font-bold mb-2">{experience}</div>
                <p className="text-red-100 text-sm">лет опыта</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm text-center transform hover:scale-105 transition-transform">
                <div className="stat-counter text-white text-3xl lg:text-4xl font-bold mb-2">{students}+</div>
                <p className="text-red-100 text-sm">довольных учеников</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onBookingClick}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-primary font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-calendar-plus mr-2"></i>
                Пробный урок бесплатно
              </button>
              <button 
                onClick={() => smoothScrollTo("about")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                <i className="fas fa-arrow-down mr-2"></i>
                Узнать больше
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=600" 
                alt="Елена Смирнова - репетитор по английскому языку" 
                className="rounded-2xl shadow-2xl w-80 h-96 lg:w-96 lg:h-[500px] object-cover border-4 border-white transform hover:scale-105 transition-transform duration-300"
              />
              {/* Floating achievements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                ТОП репетитор
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Cambridge сертификат
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* English tenses background - static with rotation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Row 1 - English tenses */}
        <div className="absolute top-12 left-12 text-white text-2xl opacity-15 transform rotate-3">Present Simple</div>
        <div className="absolute top-16 right-20 text-white text-xl opacity-10 transform -rotate-2">Past Perfect</div>
        <div className="absolute top-32 left-1/4 text-white text-lg opacity-20 transform rotate-1">Future Continuous</div>
        <div className="absolute top-48 right-1/3 text-white text-xl opacity-15 transform -rotate-3">Present Progressive</div>
        
        {/* Row 2 - English tenses */}
        <div className="absolute top-64 left-8 text-white text-lg opacity-10 transform rotate-2">Past Simple</div>
        <div className="absolute top-80 right-12 text-white text-2xl opacity-20 transform -rotate-1">Future Perfect</div>
        <div className="absolute top-96 left-1/3 text-white text-xl opacity-15 transform rotate-3">Present Perfect</div>
        <div className="absolute top-72 right-1/4 text-white text-lg opacity-10 transform -rotate-2">Past Continuous</div>
        
        {/* Row 3 - Middle */}
        <div className="absolute top-1/2 left-12 text-white text-xl opacity-15 transform rotate-1">Future Simple</div>
        <div className="absolute top-1/2 right-16 text-white text-lg opacity-20 transform -rotate-3">Past Perfect Continuous</div>
        <div className="absolute top-1/2 left-1/2 text-white text-2xl opacity-10 transform rotate-2">Conditional</div>
        <div className="absolute top-60 left-1/2 text-white text-xl opacity-15 transform -rotate-1">Present Perfect Continuous</div>
        
        {/* Row 4 */}
        <div className="absolute bottom-48 left-16 text-white text-lg opacity-20 transform rotate-3">Future Perfect Continuous</div>
        <div className="absolute bottom-64 right-20 text-white text-xl opacity-15 transform -rotate-2">Subjunctive</div>
        <div className="absolute bottom-80 left-1/4 text-white text-2xl opacity-10 transform rotate-1">Imperative</div>
        <div className="absolute bottom-32 right-1/3 text-white text-lg opacity-20 transform -rotate-3">Infinitive</div>
        
        {/* Row 5 - Bottom */}
        <div className="absolute bottom-16 left-8 text-white text-xl opacity-15 transform rotate-2">Gerund</div>
        <div className="absolute bottom-24 right-12 text-white text-lg opacity-10 transform -rotate-1">Participle</div>
        <div className="absolute bottom-40 left-1/3 text-white text-2xl opacity-20 transform rotate-3">Passive Voice</div>
        <div className="absolute bottom-12 right-1/4 text-white text-xl opacity-15 transform -rotate-2">Modal Verbs</div>
      </div>
      
      {/* Floating circles for visual appeal */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
    </section>
  );
}
