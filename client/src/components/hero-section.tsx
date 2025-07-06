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
              Private{" "}
              <span className="text-yellow-300 block lg:inline">English Tutor</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-red-100 max-w-2xl">
              Expert English learning with personalized approach for every student
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm text-center transform hover:scale-105 transition-transform">
                <div className="stat-counter text-white text-3xl lg:text-4xl font-bold mb-2">{successRate}%</div>
                <p className="text-red-100 text-sm">successful students</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm text-center transform hover:scale-105 transition-transform">
                <div className="stat-counter text-white text-3xl lg:text-4xl font-bold mb-2">{experience}</div>
                <p className="text-red-100 text-sm">years of experience</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm text-center transform hover:scale-105 transition-transform">
                <div className="stat-counter text-white text-3xl lg:text-4xl font-bold mb-2">{students}+</div>
                <p className="text-red-100 text-sm">happy students</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onBookingClick}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-primary font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <i className="fas fa-calendar-plus mr-2"></i>
                Free Trial Lesson
              </button>
              <button 
                onClick={() => smoothScrollTo("about")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                <i className="fas fa-arrow-down mr-2"></i>
                Learn More
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=600" 
                alt="Sarah Johnson - English Tutor" 
                className="rounded-2xl shadow-2xl w-80 h-96 lg:w-96 lg:h-[500px] object-cover border-4 border-white transform hover:scale-105 transition-transform duration-300"
              />
              {/* Floating achievements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                TOP Tutor
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Cambridge Certified
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* English language elements background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Row 1 */}
        <div className="absolute top-12 left-12 text-white text-2xl opacity-15 animate-pulse" style={{animationDelay: '0s'}}>A, B, C</div>
        <div className="absolute top-16 right-20 text-white text-xl opacity-10 animate-pulse" style={{animationDelay: '0.5s'}}>grammar</div>
        <div className="absolute top-32 left-1/4 text-white text-lg opacity-20 animate-pulse" style={{animationDelay: '1s'}}>TOEFL</div>
        <div className="absolute top-48 right-1/3 text-white text-xl opacity-15 animate-pulse" style={{animationDelay: '1.5s'}}>speaking</div>
        
        {/* Row 2 */}
        <div className="absolute top-64 left-8 text-white text-lg opacity-10 animate-pulse" style={{animationDelay: '2s'}}>vocabulary</div>
        <div className="absolute top-80 right-12 text-white text-2xl opacity-20 animate-pulse" style={{animationDelay: '2.5s'}}>X, Y, Z</div>
        <div className="absolute top-96 left-1/3 text-white text-xl opacity-15 animate-pulse" style={{animationDelay: '3s'}}>IELTS</div>
        <div className="absolute top-72 right-1/4 text-white text-lg opacity-10 animate-pulse" style={{animationDelay: '3.5s'}}>fluency</div>
        
        {/* Row 3 - Middle */}
        <div className="absolute top-1/2 left-12 text-white text-xl opacity-15 animate-pulse" style={{animationDelay: '4s'}}>глагол</div>
        <div className="absolute top-1/2 right-16 text-white text-lg opacity-20 animate-pulse" style={{animationDelay: '4.5s'}}>синтаксис</div>
        <div className="absolute top-1/2 left-1/2 text-white text-2xl opacity-10 animate-pulse" style={{animationDelay: '5s'}}>Ч, Ш, Щ</div>
        <div className="absolute top-60 left-1/2 text-white text-xl opacity-15 animate-pulse" style={{animationDelay: '5.5s'}}>предлог</div>
        
        {/* Row 4 */}
        <div className="absolute bottom-48 left-16 text-white text-lg opacity-20 animate-pulse" style={{animationDelay: '6s'}}>частица</div>
        <div className="absolute bottom-64 right-20 text-white text-xl opacity-15 animate-pulse" style={{animationDelay: '6.5s'}}>морфология</div>
        <div className="absolute bottom-80 left-1/4 text-white text-2xl opacity-10 animate-pulse" style={{animationDelay: '7s'}}>И, Й</div>
        <div className="absolute bottom-32 right-1/3 text-white text-lg opacity-20 animate-pulse" style={{animationDelay: '7.5s'}}>деепричастие</div>
        
        {/* Row 5 - Bottom */}
        <div className="absolute bottom-16 left-8 text-white text-xl opacity-15 animate-pulse" style={{animationDelay: '8s'}}>прилагательное</div>
        <div className="absolute bottom-24 right-12 text-white text-lg opacity-10 animate-pulse" style={{animationDelay: '8.5s'}}>местоимение</div>
        <div className="absolute bottom-40 left-1/3 text-white text-2xl opacity-20 animate-pulse" style={{animationDelay: '9s'}}>Ж, З</div>
        <div className="absolute bottom-12 right-1/4 text-white text-xl opacity-15 animate-pulse" style={{animationDelay: '9.5s'}}>существительное</div>
      </div>
      
      {/* Floating circles for visual appeal */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
    </section>
  );
}
