import useReveal from './useReveal';

const STEPS = [
  {
    n: '01',
    title: 'Опишите бизнес',
    desc: 'Расскажите ИИ-помощнику о сфере, стадии и целях в свободной форме — как в переписке с человеком.',
  },
  {
    n: '02',
    title: 'ИИ анализирует базу',
    desc: 'Система сверяет ваш запрос с 450+ актуальными программами и отсеивает то, что вам не подходит.',
  },
  {
    n: '03',
    title: 'Получаете подборку',
    desc: 'Список мер с суммами, условиями и прямыми ссылками на подачу заявки — можно уточнять и сужать в диалоге.',
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal();

  return (
    <section className="how" id="how" ref={ref}>
      <div className={`container ${visible ? 'is-visible' : ''}`}>
        <span className="eyebrow eyebrow--center">Как это работает</span>
        <h2 className="how__title">Три шага до подходящей меры поддержки</h2>

        <ol className="how__steps">
          {STEPS.map((step) => (
            <li key={step.n}>
              <span className="how__num">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
