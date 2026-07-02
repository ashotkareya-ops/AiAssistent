const PARTNERS = [
  'Минэкономразвития России',
  'Корпорация МСП',
  'Сбер',
  'ВЭБ.РФ',
  'Мой бизнес',
  'Сколково',
];

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <h2>Наши партнёры</h2>
        <p className="section__lead">
          Мы сотрудничаем с ведущими организациями, чтобы предоставить вам лучшие меры поддержки
        </p>

        <div className="partners__row">
          {PARTNERS.map((name) => (
            <div className="partners__chip" key={name}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
