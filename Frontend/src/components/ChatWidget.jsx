import { useEffect, useRef, useState } from 'react';
import { IconBot, IconRefresh, IconDots, IconSend, IconGrant, IconExport, IconCredit, IconChevron } from './Icons';

const INITIAL_MESSAGES = [
  {
    id: 'm1',
    from: 'bot',
    time: '10:30',
    text: 'Здравствуйте! Я ИИ-помощник по мерам поддержки бизнеса. Расскажите о вашем бизнесе, и я подберу для вас доступные программы и меры поддержки.',
  },
  {
    id: 'm2',
    from: 'user',
    time: '10:32',
    text: 'Мы IT-компания на стадии роста, разрабатываем SaaS-продукт. Ищем поддержку для масштабирования и выхода на новые рынки.',
  },
  {
    id: 'm3',
    from: 'bot',
    time: '10:33',
    text: 'На основе вашей информации я нашёл несколько подходящих мер поддержки:',
    cards: [
      {
        icon: IconGrant,
        tint: 'green',
        title: 'Гранты на разработку и внедрение ПО',
        desc: 'До 20 млн ₽ на создание и развитие отечественного ПО',
      },
      {
        icon: IconExport,
        tint: 'purple',
        title: 'Экспортный акселератор',
        desc: 'Поддержка выхода на зарубежные рынки и поиск партнёров',
      },
      {
        icon: IconCredit,
        tint: 'orange',
        title: 'Льготные кредиты для IT-компаний',
        desc: 'Ставка от 1 до 5% годовых на развитие и масштабирование',
      },
    ],
  },
];

const REPLIES = [
  'Спасибо, уточню детали и подберу ещё несколько подходящих программ поддержки для вашей ситуации.',
  'Учту это. Могу также показать меры поддержки по вашему региону — уточните, пожалуйста, город регистрации бизнеса.',
  'Хорошо, добавлю это в подборку. Хотите, я расставлю меры по приоритету — от простых к более сложным в оформлении?',
];

function formatTime() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [value, setValue] = useState('');
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleSend = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;

    const userMsg = { id: `u-${Date.now()}`, from: 'user', time: formatTime(), text };
    setMessages((prev) => [...prev, userMsg]);
    setValue('');
    setTyping(true);

    window.setTimeout(() => {
      const reply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
      setMessages((prev) => [...prev, { id: `b-${Date.now()}`, from: 'bot', time: formatTime(), text: reply }]);
      setTyping(false);
    }, 1100);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setValue('');
    setTyping(false);
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__who">
          <span className="chat__avatar">
            <IconBot size={20} />
          </span>
          <div>
            <div className="chat__name">ИИ-помощник</div>
            <div className="chat__status">
              <span className="dot" /> Онлайн
            </div>
          </div>
        </div>
        <div className="chat__tools">
          <button type="button" aria-label="Начать заново" onClick={handleReset}>
            <IconRefresh />
          </button>
          <button type="button" aria-label="Ещё">
            <IconDots />
          </button>
        </div>
      </div>

      <div className="chat__body" ref={bodyRef}>
        {messages.map((m) => (
          <div key={m.id} className={`bubble bubble--${m.from}`}>
            {m.from === 'bot' && (
              <span className="bubble__avatar">
                <IconBot size={16} />
              </span>
            )}
            <div className="bubble__content">
              <p>{m.text}</p>

              {m.cards && (
                <div className="cards">
                  {m.cards.map((card) => (
                    <button type="button" className={`card card--${card.tint}`} key={card.title}>
                      <span className="card__icon">
                        <card.icon size={18} />
                      </span>
                      <span className="card__text">
                        <span className="card__title">{card.title}</span>
                        <span className="card__desc">{card.desc}</span>
                      </span>
                      <IconChevron size={16} color="#94A3B8" />
                    </button>
                  ))}
                </div>
              )}

              <span className="bubble__time">
                {m.time}
                {m.from === 'user' && ' ✓✓'}
              </span>
            </div>
          </div>
        ))}

        {typing && (
          <div className="bubble bubble--bot">
            <span className="bubble__avatar">
              <IconBot size={16} />
            </span>
            <div className="bubble__content">
              <span className="typing">
                <i />
                <i />
                <i />
              </span>
            </div>
          </div>
        )}
      </div>

      <form className="chat__input" onSubmit={handleSend}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Опишите ваш бизнес или задайте вопрос..."
          aria-label="Сообщение ИИ-помощнику"
        />
        <button type="submit" aria-label="Отправить" disabled={!value.trim()}>
          <IconSend />
        </button>
      </form>
      <p className="chat__disclaimer">ИИ может допускать неточности. Рекомендуем проверять информацию.</p>
    </div>
  );
}
