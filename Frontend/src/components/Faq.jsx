import { useState } from 'react';
import useReveal from './useReveal';
import { IconChevron } from './Icons';

const QUESTIONS = [
  {
    q: 'Сервис действительно бесплатный?',
    a: 'Да, подбор мер поддержки бесплатен и не требует регистрации. Мы зарабатываем на партнёрстве с фондами и корпорациями, а не на комиссии с пользователей.',
  },
  {
    q: 'Откуда берётся информация о мерах поддержки?',
    a: 'Мы собираем данные из официальных источников — сайтов министерств, корпорации МСП, банков-партнёров — и еженедельно сверяем их с экспертами, чтобы не показывать закрытые или устаревшие программы.',
  },
  {
    q: 'ИИ-помощник может ошибиться в рекомендации?',
    a: 'Как и любая ИИ-система, помощник может допускать неточности, поэтому финальные условия каждой меры стоит проверять по ссылке на источник, которую он даёт в ответе.',
  },
  {
    q: 'Мои данные передаются третьим лицам?',
    a: 'Нет. Информация о вашем бизнесе используется только для подбора мер поддержки внутри сервиса и не передаётся партнёрам без вашего отдельного согласия.',
  },
  {
    q: 'Подходит ли сервис для самозанятых и ИП?',
    a: 'Да, база включает меры для самозанятых, ИП, малого, среднего и растущего бизнеса — форму собственности можно указать прямо в диалоге с помощником.',
  },
];

export default function Faq() {
  const { ref, visible } = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="faq" ref={ref}>
      <div className={`container ${visible ? 'is-visible' : ''}`}>
        <span className="eyebrow eyebrow--center">Вопросы и ответы</span>
        <h2 className="faq__title">Частые вопросы о сервисе</h2>

        <div className="faq__list">
          {QUESTIONS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faq__item ${open ? 'is-open' : ''}`} key={item.q}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon">
                    <IconChevron size={18} />
                  </span>
                </button>
                <div className="faq__answer" style={{ maxHeight: open ? '200px' : '0px' }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
