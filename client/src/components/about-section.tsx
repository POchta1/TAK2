export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-red-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-primary mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm <span className="font-semibold text-primary">Sarah Johnson</span>, and I help students 
            fall in love with English and achieve excellent results on exams
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400" 
                alt="Sarah Johnson during a lesson" 
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-xl text-gray-800">Education</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-university text-primary mr-3 mt-1"></i>
                  <span>University of Cambridge, English Literature</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-medal text-yellow-500 mr-3 mt-1"></i>
                  <span>Bachelor's degree with honors in English Language and Literature</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-certificate text-green-500 mr-3 mt-1"></i>
                  <span>Cambridge CELTA certification and ongoing professional development</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-accent">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-briefcase text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-xl text-gray-800">Work Experience</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <i className="fas fa-user-graduate text-primary mr-3 mt-1"></i>
                  <span>8 years of private tutoring experience</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-school text-accent mr-3 mt-1"></i>
                  <span>5 years working at leading educational centers</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chart-line text-green-500 mr-3 mt-1"></i>
                  <span>Successfully prepared over 150 students for IELTS, TOEFL, and SAT</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-2xl shadow-lg text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-lightbulb text-white text-xl"></i>
                </div>
                <h3 className="font-bold text-xl">My Teaching Method</h3>
              </div>
              <p className="text-red-100 leading-relaxed">
                I use a <span className="font-semibold">personalized approach</span> for each student, 
                modern interactive methods and proven techniques that make learning 
                English <span className="font-semibold">engaging and effective</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
