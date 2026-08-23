interface LogoProps {
  className?: string;
}

export const TechLogos = {
  React: ({ className }: LogoProps) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),

  ReactNative: ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="22" fill="#0d1117" />
      <circle cx="50" cy="50" r="8" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="3.5" fill="none">
        <ellipse cx="50" cy="50" rx="38" ry="14"/>
        <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(120 50 50)"/>
      </g>
    </svg>
  ),

  Flutter: ({ className }: LogoProps) => (
    <svg viewBox="0 0 166.42 215.1" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M166.42,107.55,110.15,51.28,0,161.42l56.27,53.68,110.15-107.55Z" fill="#40d1fb"/>
      <path d="M166.42,215.1l-56.27-56.27L53.88,215.1h112.54Z" fill="#03589b"/>
      <path d="M110.15,158.83l-56.27-56.27L0,158.83l56.27,56.27,53.88-56.27Z" fill="#16b9fd"/>
      <path d="M110.15,0,0,110.15l53.88,53.88L166.42,56.27,110.15,0Z" fill="#40d1fb"/>
    </svg>
  ),

  TailwindCSS: ({ className }: LogoProps) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M25 45c3.33-13.33 11.67-20 25-20 16.67 0 21.67 11.67 31.67 15 6.66 2.22 13.33.55 20-5-3.34 13.33-11.67 20-25 20-16.67 0-21.67-11.67-31.67-15-6.67-2.22-13.33-.55-20 5zm-25 25c3.33-13.33 11.67-20 25-20 16.67 0 21.67 11.67 31.67 15 6.66 2.22 13.33.55 20-5-3.34 13.33-11.67 20-25 20-16.67 0-21.67-11.67-31.67-15-6.67-2.22-13.33-.55-20 5z"
        fill="#38BDF8"
      />
    </svg>
  ),

  Kotlin: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="kt-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00AFEC"/>
          <stop offset="50%" stopColor="#7F52FF"/>
          <stop offset="100%" stopColor="#C711E1"/>
        </linearGradient>
      </defs>
      <path d="M256 256H0V0h256L128 128z" fill="url(#kt-grad)"/>
    </svg>
  ),

  SpringBoot: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128 128-57.31 128-128S198.69 0 128 0z" fill="#6DB33F"/>
      <path d="M128 35.84l79.8 46.08v92.16L128 220.16l-79.8-46.08V81.92L128 35.84z" fill="#5FA334"/>
      <path d="M124.6 62.4c-34.8 1.4-62.8 30.2-61.9 65.5.9 33.7 27.6 61.3 61.3 63.5 35.3 2.3 65.7-24.8 67.2-59.8h-23.7c-1.4 22.8-21 40.7-44.1 39.4-21.7-1.2-39.2-18.7-40.4-40.4-1.3-23.1 16.6-42.7 39.7-44.1v40.3l37.2-21.5L124.6 62.4z" fill="#FFFFFF"/>
    </svg>
  ),

  Django: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="256" height="256" rx="48" fill="#092E20"/>
      <path d="M106.6 60h26.7v101.4c-9.5 1.5-17.7 2.2-24.7 2.2-24.1 0-37.4-12.2-37.4-34.1 0-21.2 13.9-35.3 35.4-35.3 4.2 0 8.2.6 12 1.8V60zm0 57.7c-3.1-1-6.4-1.5-9.7-1.5-9.3 0-15.1 6.3-15.1 16.5 0 9.8 5.4 15.8 14.5 15.8 3.3 0 6.6-.5 10.3-1.6v-30.7zM148.8 60h26.7v72.3c0 23.8-7.8 37.1-23.7 40.4l-6.8-21.5c7.4-2.1 10.5-8.5 10.5-19.6V60zM148.8 40h26.7v16.7h-26.7V40z" fill="#44B78B"/>
    </svg>
  ),

  Laravel: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="256" height="256" rx="48" fill="#18181B" />
      <path d="M128 32l96 55.4v110.8L128 253.6 32 198.2V87.4L128 32z" fill="#FF2D20"/>
      <path d="M128 32l96 55.4-96 55.4-96-55.4L128 32z" fill="#FF4D42"/>
      <path d="M128 142.8l96-55.4v110.8l-96-55.4V142.8z" fill="#E01C10"/>
      <path d="M32 87.4l96 55.4v88.3L32 175.7V87.4z" fill="#C7150C"/>
      <path d="M102 96l52 30-52 30V96z" fill="#FFFFFF"/>
    </svg>
  ),

  Python: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="py-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387EB8"/>
          <stop offset="100%" stopColor="#366994"/>
        </linearGradient>
        <linearGradient id="py-y" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE873"/>
          <stop offset="100%" stopColor="#FFD43B"/>
        </linearGradient>
      </defs>
      <path d="M126.9 8.2c-55 0-51.5 23.8-51.5 23.8l.1 24.7h52.5v7.4H53.6S16.1 60 16.1 115.3c0 55.2 32.7 53.3 32.7 53.3h19.5v-27.4s-1.1-32.7 32.2-32.7h50.5s31.1.5 31.1-30.2V38.4s4.6-30.2-55.2-30.2zm-28.7 16.5c5.3 0 9.6 4.3 9.6 9.6s-4.3 9.6-9.6 9.6-9.6-4.3-9.6-9.6 4.3-9.6 9.6-9.6z" fill="url(#py-b)"/>
      <path d="M129.1 247.8c55 0 51.5-23.8 51.5-23.8l-.1-24.7H128v-7.4h74.4s37.5 4.1 37.5-51.2c0-55.2-32.7-53.3-32.7-53.3h-19.5v27.4s1.1 32.7-32.2 32.7H105s-31.1-.5-31.1 30.2v39.9s-4.6 30.2 55.2 30.2zm28.7-16.5c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6z" fill="url(#py-y)"/>
    </svg>
  ),

  Cpp: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M128 16l104 60v120l-104 60L24 196V76L128 16z" fill="#00599C"/>
      <path d="M128 35l87.5 50.5v101L128 237 40.5 186.5v-101L128 35z" fill="#004482"/>
      <path d="M128 58l67.5 39v78L128 214l-67.5-39V97L128 58z" fill="#659AD2"/>
      <text x="70" y="152" fill="#FFFFFF" fontSize="68" fontWeight="900" fontFamily="sans-serif">C++</text>
    </svg>
  ),

  Java: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M88.7 197.8c-23.7 4.2-38.3 8.3-38.3 15.6 0 10.3 29 18.6 78.4 18.6s78.4-8.3 78.4-18.6c0-7.3-14.6-11.4-38.3-15.6 13.5 10.4-10.4 13.5-40.1 13.5s-53.6-3.1-40.1-13.5z" fill="#5382A1"/>
      <path d="M68.9 164.5c-27.1 5.2-43.8 11.5-43.8 21.9 0 14.6 44.8 26.1 103.7 26.1s103.7-11.5 103.7-26.1c0-10.4-16.7-16.7-43.8-21.9 22.9 8.3 3.1 15.6-59.9 15.6s-82.8-7.3-59.9-15.6z" fill="#E76F00"/>
      <path d="M136.3 32.3c-25 28.1 15.6 46.9 0 78.1-12.5-21.9-21.9-34.4-6.3-59.4 12.5-20.3-6.3-31.2 6.3-48.4 0 9.4 0 18.8 0 29.7z" fill="#5382A1"/>
      <path d="M165.5 58.3c-21.9 25 18.8 37.5 3.1 65.6-9.4-18.8-15.6-28.1-3.1-46.9 9.4-15.6-6.3-25 0-37.5 0 6.3 0 12.5 0 18.8z" fill="#E76F00"/>
      <path d="M108.2 92.7c-15.6 18.8 9.4 31.2 0 53.1-6.3-12.5-9.4-21.9 0-34.4 6.3-9.4-3.1-18.8 0-25 0 3.1 0 6.3 0 6.3z" fill="#5382A1"/>
    </svg>
  ),

  Linux: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="128" cy="140" rx="70" ry="85" fill="#FFE082"/>
      <ellipse cx="128" cy="140" rx="55" ry="75" fill="#FFFFFF"/>
      <ellipse cx="128" cy="140" rx="72" ry="85" fill="#263238" fillOpacity="0.9"/>
      <ellipse cx="128" cy="145" rx="45" ry="65" fill="#FFFFFF"/>
      {/* Head */}
      <circle cx="128" cy="65" r="45" fill="#263238"/>
      {/* Eyes */}
      <ellipse cx="112" cy="55" rx="8" ry="12" fill="#FFFFFF"/>
      <circle cx="114" cy="57" r="4.5" fill="#000000"/>
      <ellipse cx="144" cy="55" rx="8" ry="12" fill="#FFFFFF"/>
      <circle cx="142" cy="57" r="4.5" fill="#000000"/>
      {/* Beak */}
      <polygon points="115,70 141,70 128,92" fill="#FFA000"/>
      {/* Feet */}
      <ellipse cx="85" cy="225" rx="35" ry="15" fill="#FFA000"/>
      <ellipse cx="171" cy="225" rx="35" ry="15" fill="#FFA000"/>
    </svg>
  ),

  Docker: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 211" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M256,104.7v5.3c0,35.4-23.3,64.2-56.7,64.2H31.1c-16.1,0-31.1-6.7-31.1-18.7V83.3c0-12,15-18.7,31.1-18.7h4.4v-4.4h22.2v4.4h26.7v-4.4H106.7v4.4h26.7v-4.4h22.2v4.4H182.2c33.4,0,56.7,28.8,56.7,64.2h17.1c8.4,0,11.1-8.5,11.1-11.1v-5.3H256Z" fill="#2496ED"/>
      {/* Containers */}
      <rect x="74" y="32" width="22" height="20" rx="3" fill="#FFFFFF" fillOpacity="0.9"/>
      <rect x="102" y="32" width="22" height="20" rx="3" fill="#FFFFFF" fillOpacity="0.9"/>
      <rect x="130" y="32" width="22" height="20" rx="3" fill="#FFFFFF" fillOpacity="0.9"/>
      <rect x="46" y="58" width="22" height="20" rx="3" fill="#FFFFFF" fillOpacity="0.9"/>
      <rect x="74" y="58" width="22" height="20" rx="3" fill="#FFFFFF" fillOpacity="0.9"/>
      <rect x="102" y="58" width="22" height="20" rx="3" fill="#FFFFFF" fillOpacity="0.9"/>
      <rect x="130" y="58" width="22" height="20" rx="3" fill="#FFFFFF" fillOpacity="0.9"/>
      <rect x="158" y="58" width="22" height="20" rx="3" fill="#FFFFFF" fillOpacity="0.9"/>
    </svg>
  ),

  Git: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="256" height="256" rx="48" fill="#F05032" />
      <g transform="translate(48,48) scale(0.625)" fill="#FFFFFF">
        <path d="M246.7 109.3L146.7 9.3c-12.4-12.4-32.6-12.4-45.1 0L9.3 111.6c-12.4 12.4-12.4 32.6 0 45.1l100 100c12.4 12.4 32.6 12.4 45.1 0l92.3-92.3c12.4-12.4 12.4-32.6 0-45.1zM140 188.7v-25.5c-28.7 0-44.4-16.7-52.6-32.1 6.5-2.2 13-3.6 19.3-3.6 16.5 0 28.7 8.5 33.3 12.2v-44.5c-7.9-3.7-13.3-11.8-13.3-21.2 0-12.9 10.4-23.3 23.3-23.3s23.3 10.4 23.3 23.3c0 9.4-5.4 17.5-13.3 21.2v67.9c7.9 3.7 13.3 11.8 13.3 21.2 0 12.9-10.4 23.3-23.3 23.3s-23.3-10.4-23.3-23.3c0-6.1 2.3-11.6 6.1-15.8z"/>
      </g>
    </svg>
  ),

  Firebase: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M38.8 185.3L69.6 24.5c.8-4.2 5.5-6.2 9-3.8l38.2 26.5L38.8 185.3z" fill="#FFA000"/>
      <path d="M154.2 110.4l-37.4-63.2-78 138.1 115.4-74.9z" fill="#F57C00"/>
      <path d="M217.2 185.3L189.3 54.1c-.9-4.2-6.1-5.7-9.1-2.6l-141.4 133.8 79.2 44.5c6 3.4 13.4 3.4 19.4 0l79.8-44.5z" fill="#FFCA28"/>
    </svg>
  ),

  TypeScript: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="256" height="256" rx="48" fill="#3178C6"/>
      <path d="M137.6 157.9c4.2 4.6 9.4 7.7 15.6 9.4 6.2 1.6 12.4 2.5 18.6 2.5 7.6 0 13.6-1.5 18-4.5 4.4-3 6.6-7.3 6.6-12.8 0-3.8-1.2-7-3.7-9.6-2.5-2.6-6-4.8-10.6-6.7-4.6-1.8-10.6-3.7-18-5.7-10.4-2.8-18.7-5.9-25-9.3-6.3-3.4-11-7.7-14.2-12.9-3.2-5.2-4.8-11.5-4.8-18.8 0-7.8 2.2-14.8 6.7-21 4.5-6.2 10.8-11 18.9-14.4 8.1-3.4 17.5-5.1 28.2-5.1 10.2 0 19.4 1.7 27.5 5.1 8.1 3.4 14.5 8.1 19.2 14.1l-18.6 15c-3.4-4-7.4-6.8-12-8.5-4.6-1.7-9.7-2.5-15.3-2.5-6.5 0-11.7 1.3-15.6 3.9-3.9 2.6-5.8 6.2-5.8 10.9 0 3.7 1.3 6.7 3.9 9.1 2.6 2.4 6.4 4.5 11.4 6.2 5 1.7 11.2 3.6 18.6 5.6 10.5 2.8 19 6 25.4 9.6 6.4 3.6 11.2 8.1 14.3 13.5 3.1 5.4 4.7 11.9 4.7 19.5 0 8.3-2.4 15.7-7.1 22.2-4.7 6.5-11.4 11.6-20.1 15.3-8.7 3.7-18.9 5.5-30.6 5.5-13.4 0-25.2-2.4-35.4-7.2-10.2-4.8-18.1-11.7-23.7-20.7l20.4-14.4zM40 76.8h78.4V98H86.2v108H58.8V98H40V76.8z" fill="#FFFFFF"/>
    </svg>
  ),

  JavaScript: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="256" height="256" rx="48" fill="#F7DF1E"/>
      <path d="M67.3 214c13.7 8 29.4 12.6 45 12.6 31.8 0 52-16.8 52-47.6v-81h-28.5v81.3c0 14.8-8.4 22.8-23.5 22.8-7.9 0-15.6-2.6-21.7-6.8l-23.3 18.7zm110.5-2.2c16 9.4 35.3 14.8 54.3 14.8 30.6 0 49.2-15.4 49.2-39.6 0-22.6-13.7-33.8-38.6-44.5l-9.8-4.2c-15.4-6.6-22.3-12.8-22.3-22.6 0-9.8 7.9-17 21.7-17 11.6 0 21.7 3.7 29.9 9.3l12.7-21.2c-12.2-8.2-27.5-12.4-43.1-12.4-30.6 0-48.4 16.7-48.4 38.6 0 22.2 14.3 33.8 39.4 44.5l9.8 4.2c16.4 7.1 23 13.5 23 23.8 0 11.4-9.3 18.5-24.3 18.5-14.8 0-27.2-5.3-37.3-12.7l-16.5 20.7z" fill="#000000"/>
    </svg>
  ),

  Android: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="256" height="256" rx="48" fill="#18181B"/>
      <path d="M64 120h128v72c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-72z" fill="#3DDC84"/>
      <path d="M128 48c-35.3 0-64 28.7-64 64h128c0-35.3-28.7-64-64-64z" fill="#3DDC84"/>
      <line x1="88" y1="48" x2="72" y2="24" stroke="#3DDC84" strokeWidth="8" strokeLinecap="round"/>
      <line x1="168" y1="48" x2="184" y2="24" stroke="#3DDC84" strokeWidth="8" strokeLinecap="round"/>
      <circle cx="96" cy="84" r="7" fill="#FFFFFF"/>
      <circle cx="160" cy="84" r="7" fill="#FFFFFF"/>
      <rect x="36" y="120" width="16" height="60" rx="8" fill="#3DDC84"/>
      <rect x="204" y="120" width="16" height="60" rx="8" fill="#3DDC84"/>
      <rect x="88" y="208" width="16" height="32" rx="8" fill="#3DDC84"/>
      <rect x="152" y="208" width="16" height="32" rx="8" fill="#3DDC84"/>
    </svg>
  ),

  NodeJS: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M128 16l100 57.7v115.5L128 247 28 189.2V73.7L128 16z" fill="#339933"/>
      <path d="M128 32l86 49.7v99.4L128 230.8 42 181.1V81.7L128 32z" fill="#5FA04E"/>
      <path d="M128 85c-23.7 0-38.5 13.8-38.5 32.5 0 29.8 42.5 24.2 42.5 40.5 0 6.5-5.8 11-14.5 11-12.8 0-25.2-6.5-31.5-12.8l-8.5 15.5c9.5 8.5 24.8 14.5 40 14.5 24.5 0 41-13.8 41-33 0-31.5-42.5-25.5-42.5-41 0-5.8 5-9.8 13.5-9.8 10.8 0 21.2 5 27.5 10l8-14.5C156.5 90 143.5 85 128 85z" fill="#FFFFFF"/>
    </svg>
  ),

  PostgreSQL: ({ className }: LogoProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="256" height="256" rx="48" fill="#336791"/>
      <ellipse cx="128" cy="120" rx="65" ry="60" fill="#FFFFFF" fillOpacity="0.95"/>
      <ellipse cx="128" cy="125" rx="50" ry="45" fill="#336791"/>
      <circle cx="108" cy="115" r="7" fill="#FFFFFF"/>
      <circle cx="148" cy="115" r="7" fill="#FFFFFF"/>
      <path d="M118 135c0 10 10 15 10 15s10-5 10-15" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round"/>
    </svg>
  )
};

