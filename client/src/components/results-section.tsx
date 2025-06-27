import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useEffect, useRef, useState } from "react";

export default function ResultsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const avgScore = useCounterAnimation(78, 2000, isVisible);
  const successRate = useCounterAnimation(92, 2000, isVisible);
  const improvement = useCounterAnimation(35, 2000, isVisible);
  const satisfaction = useCounterAnimation(98, 2000, isVisible);

  const testimonials = [
    {
      name: "Елена Смирнова",
      role: "Мама ученика",
      text: "Анна Александровна — настоящий профессионал! Мой сын повысил балл с 45 до 78 за полгода подготовки. Занятия проходили интересно, сын с удовольствием делал домашние задания."
    },
    {
      name: "Михаил Петров",
      role: "Ученик 11 класса",
      text: "Благодаря занятиям с Анной Александровной сдал ЕГЭ на 85 баллов и поступил в МГУ! Объясняет очень понятно, всегда поддерживает и верит в успех."
    },
    {
      name: "Анастасия Иванова",
      role: "Выпускница",
      text: "Математика была моим слабым местом, но после года занятий сдала ЕГЭ на 82 балла! Анна Александровна умеет найти подход и объяснить самые сложные темы простым языком."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      id="results" 
      className="py-20 bg-gradient-to-r from-primary to-accent text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl mb-4">Результаты учеников</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Моя главная цель — помочь каждому ученику раскрыть свой потенциал и достичь высоких результатов
          </p>
        </div>
        
        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{avgScore}</div>
            <p className="text-blue-200">Средний балл ЕГЭ</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{successRate}</div>
            <p className="text-blue-200">% поступивших в ВУЗы</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{improvement}</div>
            <p className="text-blue-200">Улучшение на баллов</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{satisfaction}</div>
            <p className="text-blue-200">% довольных родителей</p>
          </div>
        </div>
        
        {/* Testimonials Slider */}
        <div className="relative">
          <h3 className="font-bold text-2xl text-center mb-8">Отзывы учеников и родителей</h3>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card text-gray-800 mx-4 min-w-full md:min-w-96">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-user text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Navigation */}
          <button 
            onClick={previousTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-3 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all"
          >
            <i className="fas fa-chevron-left text-white"></i>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-3 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all"
          >
            <i className="fas fa-chevron-right text-white"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
