import useReveal from './useReveal';

const STATS = [
  { value: '450+', label: 'мер поддержки в базе' },
  { value: '89', label: 'региона России' },
  { value: '24/7', label: 'доступность ИИ-помощника' },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`container about__row ${visible ? 'is-visible' : ''}`}>
        <div className="about__text">
          <span className="eyebrow">О проекте</span>
          <h2>Собрали все меры поддержки бизнеса в одном месте</h2>
          <p>
            Государственные субсидии, гранты, льготные кредиты и акселераторы разбросаны по десяткам сайтов
            министерств, фондов и корпораций. Мы свели их в единую базу и научили ИИ-помощника подбирать
            подходящие программы по описанию вашего бизнеса — без анкет на двадцать страниц и звонков в
            десять инстанций.
          </p>
          <p>
            Базу еженедельно проверяют эксперты, поэтому вы не наткнётесь на устаревшую программу или
            меру, приём заявок на которую уже закрыт.
          </p>
        </div>

        <dl className="about__stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
