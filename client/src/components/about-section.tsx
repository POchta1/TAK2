export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl text-primary mb-4">Обо мне</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Меня зовут Анна Петрова, и я помогаю ученикам полюбить математику и достигать высоких результатов на экзаменах
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Анна Петрова во время урока" 
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-graduation-cap text-3xl text-primary mr-4"></i>
                <h3 className="font-bold text-xl">Образование</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• МГУ им. М.В. Ломоносова, механико-математический факультет</li>
                <li>• Диплом с отличием по специальности "Математика"</li>
                <li>• Курсы повышения квалификации по современным методикам преподавания</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-briefcase text-3xl text-primary mr-4"></i>
                <h3 className="font-bold text-xl">Опыт работы</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• 8 лет частного репетиторства</li>
                <li>• 5 лет работы в ведущих образовательных центрах</li>
                <li>• Подготовил более 150 учеников к ЕГЭ и ОГЭ</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-lightbulb text-3xl text-primary mr-4"></i>
                <h3 className="font-bold text-xl">Методика</h3>
              </div>
              <p className="text-gray-600">
                Использую индивидуальный подход к каждому ученику, современные интерактивные методы 
                и проверенные методики, которые делают изучение математики увлекательным и эффективным.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
