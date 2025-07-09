import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ResultsSection from "@/components/results-section";
import ContactSection from "@/components/contact-section";
import FloatingNav from "@/components/floating-nav";
import BookingModal from "@/components/booking-modal";
import { useState } from "react";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <FloatingNav />
      <HeroSection onBookingClick={() => setIsBookingModalOpen(true)} />
      <AboutSection />
      <ServicesSection onBookingClick={() => setIsBookingModalOpen(true)} />
      <ResultsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 text-white">Елена Смирнова</h3>
              <p className="text-red-200 mb-4">Частный репетитор по английскому языку</p>
              <p className="text-red-200 text-sm">
                Помогаю ученикам полюбить английский язык и достигать высоких результатов на экзаменах
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Услуги</h4>
              <ul className="space-y-2 text-red-200">
                <li>Подготовка к ЕГЭ</li>
                <li>Подготовка к IELTS</li>
                <li>Подготовка к TOEFL</li>
                <li>Разговорная практика</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Контакты</h4>
              <div className="space-y-2 text-red-200">
                <p className="text-red-200">+7 (999) 123-45-67</p>
                <p className="text-red-200">elena.smirnova.english@email.com</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-2xl hover:text-yellow-300 transition-colors text-red-200">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" className="text-2xl hover:text-yellow-300 transition-colors text-red-200">
                    <i className="fab fa-telegram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-red-700 mt-8 pt-8 text-center text-red-200">
            <p>&copy; 2024 Елена Смирнова. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}
