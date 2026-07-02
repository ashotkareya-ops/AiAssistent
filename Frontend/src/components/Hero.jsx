import ChatWidget from './ChatWidget';
import { IconChat, IconCheck, IconBolt } from './Icons';

const POINTS = [
  {
    icon: IconChat,
    title: 'Умный подбор',
    desc: 'ИИ анализирует вашу ситуацию и находит подходящие меры поддержки',
  },
  {
    icon: IconCheck,
    title: 'Актуальная информация',
    desc: 'Только проверенные и актуальные меры поддержки от государства и партнёров',
  },
  {
    icon: IconBolt,
    title: 'Экономия времени',
    desc: 'Получите персональные рекомендации за считанные минуты',
  },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__row">
        <div className="hero__copy">
          <h1>
            Найдите меры поддержки для вашего бизнеса с&nbsp;помощью ИИ
          </h1>
          <p className="hero__lead">
            Опишите свою ситуацию, а наша интеллектуальная система подберёт актуальные меры поддержки именно для вас.
          </p>

          <ul className="points">
            {POINTS.map((p) => (
              <li key={p.title}>
                <span className="points__icon">
                  <p.icon />
                </span>
                <span>
                  <strong>{p.title}</strong>
                  <span>{p.desc}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__chat">
          <ChatWidget />
        </div>
      </div>

      <div className="hero__skyline" aria-hidden="true" />
    </section>
  );
}
