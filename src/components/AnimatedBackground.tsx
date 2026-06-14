import logoImage from "../assets/d3fb022417f356c7ca48d8ab4a07b126226cc9b4.png";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <svg className="w-full h-full animate-grid-move" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-cyan"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-20px',
            background: i % 3 === 0 ? '#00D9FF' : i % 3 === 1 ? '#00FF88' : '#A855F7',
            opacity: 0.4,
            animation: `particle-float ${15 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Floating Geometric Shapes */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-brand-cyan/20 rounded-full animate-float"
        style={{ animationDelay: '0s', animationDuration: '10s' }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-brand-green/20 animate-float"
        style={{ animationDelay: '2s', animationDuration: '12s', transform: 'rotate(45deg)' }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-20 h-20 border-2 border-brand-purple/20 rounded-lg animate-float"
        style={{ animationDelay: '1s', animationDuration: '8s' }}
      />
      <div
        className="absolute top-2/3 right-1/3 w-16 h-16 border-2 border-brand-cyan/20 animate-float"
        style={{ animationDelay: '3s', animationDuration: '14s', transform: 'rotate(60deg)' }}
      />

      {/* Glowing Orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-cyan/5 dark:bg-brand-cyan/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 right-1/2 w-56 h-56 bg-brand-purple/5 dark:bg-brand-purple/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '1s' }}
      />

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00D9FF', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#00FF88', stopOpacity: 0.2 }} />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#A855F7', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#00D9FF', stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="90%" y2="30%" stroke="url(#lineGradient1)" strokeWidth="1">
          <animate attributeName="x1" values="10%;15%;10%" dur="10s" repeatCount="indefinite" />
          <animate attributeName="y1" values="20%;25%;20%" dur="10s" repeatCount="indefinite" />
        </line>
        <line x1="20%" y1="80%" x2="80%" y2="20%" stroke="url(#lineGradient2)" strokeWidth="1">
          <animate attributeName="x2" values="80%;85%;80%" dur="12s" repeatCount="indefinite" />
          <animate attributeName="y2" values="20%;15%;20%" dur="12s" repeatCount="indefinite" />
        </line>
        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.5">
          <animate attributeName="y1" values="10%;5%;10%" dur="8s" repeatCount="indefinite" />
        </line>
      </svg>

      {/* Magic Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] opacity-[0.03] dark:opacity-[0.05] animate-pulse-glow">
          <img 
            src={logoImage} 
            alt="" 
            className="w-full h-full object-contain animate-slow-spin filter blur-[2px]"
          />
          {/* Magic Ring */}
          <div className="absolute inset-0 border-2 border-brand-cyan/20 rounded-full animate-portal-swirl scale-110" />
          <div className="absolute inset-0 border border-brand-purple/10 rounded-full animate-reverse-spin scale-125" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.03; filter: blur(2px); }
          50% { transform: scale(1.05); opacity: 0.08; filter: blur(4px); }
        }
        .animate-slow-spin { animation: slow-spin 60s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 40s linear infinite; }
        .animate-pulse-glow { animation: pulse-glow 10s ease-in-out infinite; }
      `}} />

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute h-px w-full bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-30 animate-scan"
        />
      </div>
    </div>
  );
}