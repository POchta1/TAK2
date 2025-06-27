import { smoothScrollTo } from "@/lib/utils";

export default function FloatingNav() {
  const navItems = [
    { id: "hero", icon: "fas fa-home", title: "Главная" },
    { id: "about", icon: "fas fa-user", title: "Обо мне" },
    { id: "services", icon: "fas fa-graduation-cap", title: "Услуги" },
    { id: "results", icon: "fas fa-chart-line", title: "Результаты" },
    { id: "contact", icon: "fas fa-envelope", title: "Контакты" },
  ];

  return (
    <nav className="floating-nav">
      <div className="bg-white rounded-full shadow-lg p-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => smoothScrollTo(item.id)}
            className="block p-3 rounded-full hover:bg-primary-light transition-colors"
            title={item.title}
          >
            <i className={`${item.icon} text-primary`}></i>
          </button>
        ))}
      </div>
    </nav>
  );
}
