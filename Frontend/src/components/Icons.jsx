// Небольшой набор inline SVG-иконок, чтобы не тянуть внешние иконочные библиотеки.
// Каждая иконка принимает size и color через пропсы для гибкости.

export const IconChat = ({ size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H9l-4 3.5v-3.5H5.5C4.67 16.5 4 15.83 4 15V5.5Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconCheck = ({ size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8.5" stroke={color} strokeWidth="1.6" />
    <path d="M8.5 12.3l2.2 2.2 4.8-5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconBolt = ({ size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12.5 3 5 13.5h5.5L11 21l7.5-10.5H13L12.5 3Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const IconGrant = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" />
    <path d="M8 12.5l2.5 2.5L16 9" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconExport = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4 20 20 4M20 4h-6M20 4v6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconCredit = ({ size = 20, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3v2M12 19v2M17.5 6.5A5.5 5.5 0 0 0 12 3a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 5.5 5.5 0 0 1-5.5-3.5"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const IconBuilding = ({ size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="4" y="3" width="10" height="18" rx="1" stroke={color} strokeWidth="1.6" />
    <rect x="14" y="9" width="6" height="12" rx="1" stroke={color} strokeWidth="1.6" />
    <path d="M7 7h1M10 7h1M7 11h1M10 11h1M7 15h1M10 15h1" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const IconFree = ({ size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M6 4v16l3-2 3 2 3-2 3 2V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 9h6M9 12.5h4" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const IconLock = ({ size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="5" y="10.5" width="14" height="9.5" rx="1.5" stroke={color} strokeWidth="1.6" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke={color} strokeWidth="1.6" />
  </svg>
);

export const IconStar = ({ size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L12 3Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconSend = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4 20 20.5 12 4 4l2.2 7L4 20Zm2.2-7H12" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconRefresh = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M4 12a8 8 0 0 1 13.7-5.7L20 8M20 12a8 8 0 0 1-13.7 5.7L4 16M20 4v4h-4M4 20v-4h4"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconDots = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="5" cy="12" r="1.3" fill={color} />
    <circle cx="12" cy="12" r="1.3" fill={color} />
    <circle cx="19" cy="12" r="1.3" fill={color} />
  </svg>
);

export const IconChevron = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="m9 6 6 6-6 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconBot = ({ size = 20, color = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="4" y="7" width="16" height="12" rx="3" stroke={color} strokeWidth="1.6" />
    <circle cx="9" cy="13" r="1.3" fill={color} />
    <circle cx="15" cy="13" r="1.3" fill={color} />
    <path d="M12 7V4M9.5 4h5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
