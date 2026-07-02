const NAV = [
  { label: 'О проекте', href: '#about' },
  { label: 'Как это работает', href: '#how' },
  { label: 'Вопросы и ответы', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

const LINKS = [
  { label: 'Каталог мер поддержки', href: '#' },
  { label: 'Новости и обновления', href: '#' },
  { label: 'Истории успеха', href: '#' },
  { label: 'Обратная связь', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="logo logo--light">
            <span className="logo__mark" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2 3 6.5v6c0 5 3.8 8.7 9 9.5 5.2-.8 9-4.5 9-9.5v-6L12 2Z" fill="#2563EB" />
                <path d="M8.5 12.2l2.3 2.3L16 9.3" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="logo__text">
              Меры поддержки
              <br />
              бизнеса
            </span>
          </div>
          <p>Ваш надёжный помощник в поиске мер поддержки для развития бизнеса</p>
          <div className="footer__social" aria-label="Социальные сети">
            <a href="#" aria-label="ВКонтакте">
              VK
            </a>
            <a href="#" aria-label="Telegram">
              TG
            </a>
            <a href="#" aria-label="YouTube">
              YT
            </a>
          </div>
        </div>

        <div>
          <h3>Навигация</h3>
          <ul>
            {NAV.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Полезные ссылки</h3>
          <ul>
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Контакты</h3>
          <ul className="footer__contacts">
            <li>8 800 123-45-67</li>
            <li>support@business-support.ru</li>
            <li>Пн–Пт: 9:00–18:00</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Меры поддержки бизнеса. Все права защищены.</span>
        <div className="footer__legal">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Пользовательское соглашение</a>
        </div>
      </div>
    </footer>
  );
}
