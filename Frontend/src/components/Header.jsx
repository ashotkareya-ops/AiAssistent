import { useState } from 'react';

const NAV_LINKS = [
  { label: 'О проекте', href: '#about' },
  { label: 'Как это работает', href: '#how' },
  { label: 'Вопросы и ответы', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__row">
        <a className="logo" href="#top">
          <span className="logo__mark" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2 3 6.5v6c0 5 3.8 8.7 9 9.5 5.2-.8 9-4.5 9-9.5v-6L12 2Z"
                fill="#2563EB"
              />
              <path d="M8.5 12.2l2.3 2.3L16 9.3" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="logo__text">
            Меры поддержки
            <br />
            бизнеса
          </span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button className="btn btn--primary" type="button">
            Войти
          </button>
          <button
            className="burger"
            type="button"
            aria-label="Открыть меню"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
