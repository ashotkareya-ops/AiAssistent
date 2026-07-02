import { IconBuilding, IconFree, IconLock, IconStar } from './Icons';

const BENEFITS = [
  {
    icon: IconBuilding,
    title: 'Для любого бизнеса',
    desc: 'Меры поддержки доступны для компаний любого размера и сферы деятельности',
  },
  {
    icon: IconFree,
    title: 'Бесплатно',
    desc: 'Сервис предоставляется бесплатно и не требует регистрации',
  },
  {
    icon: IconLock,
    title: 'Конфиденциально',
    desc: 'Ваши данные защищены и не передаются третьим лицам',
  },
  {
    icon: IconStar,
    title: 'Экспертно',
    desc: 'Информация предоставляется экспертами и официальными источниками',
  },
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container benefits__grid">
        {BENEFITS.map((b) => (
          <div className="benefits__item" key={b.title}>
            <span className="benefits__icon">
              <b.icon />
            </span>
            <div>
              <strong>{b.title}</strong>
              <p>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
