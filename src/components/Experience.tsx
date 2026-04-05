import { GraduationCap, MapPin, Calendar, CheckCircle2, CircleDot, Circle, Award } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const semesters = [
  { id: "S1", title: "Semester 1", status: "completed" },
  { id: "S2", title: "Semester 2", status: "completed" },
  { id: "S3", title: "Semester 3", status: "current" },
  { id: "S4", title: "Semester 4", status: "upcoming" },
  { id: "S5", title: "Semester 5", status: "upcoming" }
];

const certifications = [
  {
    name: "HTML, CSS, and JavaScript: Building the Web",
    issuer: "LinkedIn Learning",
    date: "Verified",
    link: "https://www.linkedin.com/learning/certificates/3b41ca9b0435a31580169af54681977e7d1af7da57a1a4d96a00c445bf765e88"
  },
  {
    name: "Learning MySQL Development",
    issuer: "LinkedIn Learning",
    date: "Verified",
    link: "https://www.linkedin.com/learning/certificates/7f150883e1d99aa386785bad36f8de9b9292331a73d5f231910d6060bf423391"
  },
  {
    name: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "Verified",
    link: "https://www.freecodecamp.org/certification/benachi2005/python-v9"
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Verified",
    link: "https://www.freecodecamp.org/certification/benachi2005/responsive-web-design-v9"
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Verified",
    link: "https://www.freecodecamp.org/certification/benachi2005/javascript-v9"
  }
];

export function Experience() {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-brand-darker dark:to-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <h2 className="mb-4 text-4xl md:text-6xl font-black bg-gradient-to-r from-brand-cyan via-brand-green to-brand-purple bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500">
              Education & Certification
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-cyan via-brand-green to-brand-purple mx-auto mb-6 rounded-full animate-pulse"></div>
          </div>
          
          <div 
            className="bg-white dark:bg-brand-dark/40 backdrop-blur-xl rounded-[2rem] shadow-2xl hover:shadow-[0_0_50px_-12px_rgba(0,163,224,0.3)] transition-all duration-700 overflow-visible border border-white/20 dark:border-brand-cyan/20 animate-in zoom-in-95 duration-700 fade-in relative"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            {/* Ambient Background animations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none animate-[pulse_4s_ease-in-out_infinite] "></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>
            
            <div className="p-8 md:p-14 relative group h-full z-10">
              <div className="flex flex-col items-center text-center gap-8">
                <div className="transform hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-800 dark:text-white tracking-tight">
                    BTS Certification of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-green">Web and Mobile</span> Development
                  </h3>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4 text-gray-700 dark:text-gray-300 md:text-xl font-medium">
                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-brand-dark px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow hover:scale-105 duration-300 cursor-default border border-gray-100 dark:border-gray-800">
                      <GraduationCap className="h-6 w-6 text-brand-cyan group-hover:rotate-12 transition-transform duration-300" />
                      <span>Ahmed Mahdi Institut</span>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-brand-dark px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow hover:scale-105 duration-300 cursor-default border border-gray-100 dark:border-gray-800">
                      <MapPin className="h-5 w-5 text-brand-purple group-hover:-rotate-12 transition-transform duration-300" />
                      <span>Oulad Fayet</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-brand-green font-bold bg-brand-green/10 px-6 py-2 rounded-full border border-brand-green/20 shadow-[0_0_15px_rgba(74,222,128,0.2)] hover:shadow-[0_0_25px_rgba(74,222,128,0.4)] transition-all hover:scale-110 duration-300 cursor-default">
                      <Calendar className="h-5 w-5 animate-bounce-slow" />
                      <span>2025 - 2027</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Timeline View */}
              <div className="mt-20 mb-12 relative animate-in slide-in-from-bottom-12 duration-1000 fade-in" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
                <h4 className="text-xl font-bold text-gray-400 dark:text-gray-500 mb-16 text-center tracking-[0.2em] uppercase">Academic Progress Route</h4>
                
                {/* Visual Progress Bar Container */}
                <div className="relative max-w-4xl mx-auto px-4 sm:px-12">
                  <div className="absolute top-1/2 left-4 right-4 sm:left-12 sm:right-12 h-3 bg-gray-100 dark:bg-brand-dark -translate-y-1/2 rounded-full shadow-inner border border-gray-200 dark:border-gray-800"></div>
                  
                  {/* CSS animation for growing progress line */}
                  <style>
                    {`
                      @keyframes growWidth {
                        0% { width: 0%; opacity: 0; }
                        100% { width: calc(50% - 3rem); opacity: 1; }
                      }
                      .animate-grow {
                        animation: growWidth 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                        animation-delay: 0.5s;
                      }
                    `}
                  </style>
                  
                  <div className="absolute top-1/2 left-4 sm:left-12 h-3 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-green -translate-y-1/2 rounded-full shadow-[0_0_20px_rgba(0,163,224,0.6)] animate-grow w-0"></div>

                  <div className="relative flex justify-between items-center z-10 w-full">
                    {semesters.map((sem, index) => {
                      const isCompleted = sem.status === "completed";
                      const isCurrent = sem.status === "current";
                      const isUpcoming = sem.status === "upcoming";
                      const delay = index * 200 + 400; // Stagger drops
                      
                      return (
                        <div 
                          key={sem.id} 
                          className="flex flex-col items-center group/node relative w-10 animate-in zoom-in slide-in-from-top-4 duration-500 fade-in cursor-default"
                          style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
                        >
                          <div className={`mb-5 text-sm font-black absolute -top-12 transition-all duration-300 w-max
                            ${isCurrent ? 'text-brand-purple scale-125 -translate-y-2 drop-shadow-[0_0_8px_rgba(153,51,255,0.8)]' : 'text-gray-400 dark:text-gray-500 group-hover/node:-translate-y-1'}
                          `}>
                            {sem.id}
                          </div>
                          
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl z-20 bg-white dark:bg-brand-dark
                            ${isCompleted ? 'border-[3px] border-brand-cyan text-brand-cyan bg-brand-cyan/10 hover:scale-125 hover:bg-brand-cyan/20 hover:shadow-[0_0_30px_rgba(0,163,224,0.5)]' : ''}
                            ${isCurrent ? 'border-4 border-brand-purple text-brand-purple scale-125 ring-8 ring-brand-purple/20 bg-brand-purple/20 animate-pulse-glow hover:scale-150 hover:shadow-[0_0_40px_rgba(153,51,255,0.7)]' : ''}
                            ${isUpcoming ? 'border-[3px] border-gray-200 dark:border-gray-700 text-gray-300 dark:text-gray-600 hover:border-brand-green/50 hover:text-brand-green hover:scale-110' : ''}
                          `}>
                            {isCompleted && <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-md" />}
                            {isCurrent && <div className="absolute inset-0 rounded-full border-2 border-brand-purple animate-ping opacity-50"></div>}
                            {isCurrent && <CircleDot className="w-6 h-6 sm:w-8 sm:h-8 animate-spin-slow relative z-10" />}
                            {isUpcoming && <Circle className="w-5 h-5 sm:w-6 sm:h-6 opacity-30 group-hover/node:opacity-100 transition-opacity" />}
                          </div>
                          
                          <div className={`mt-5 text-xs sm:text-sm font-bold absolute -bottom-10 whitespace-nowrap transition-all duration-300 w-max
                            ${isCompleted ? 'text-brand-cyan group-hover/node:translate-y-1' : ''}
                            ${isCurrent ? 'text-brand-purple drop-shadow-md translate-y-1 scale-110' : ''}
                            ${isUpcoming ? 'text-gray-400 dark:text-gray-600 group-hover/node:translate-y-1' : ''}
                          `}>
                            {sem.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="mt-24 relative z-10 max-w-3xl mx-auto transform hover:scale-[1.02] transition-transform duration-500">
                 <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-cyan/5 via-transparent to-brand-purple/5 border border-brand-cyan/20 shadow-lg relative overflow-hidden group/box">
                   <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 translate-x-[-100%] group-hover/box:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                   <p className="text-center text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed font-medium relative z-10">
                     Currently pursuing comprehensive training in modern Web and Mobile development technologies, actively engaged inside <span className="font-extrabold text-brand-purple drop-shadow-[0_0_5px_rgba(153,51,255,0.3)] px-2">Semester 3</span> coursework out of the full 5 semesters.
                   </p>
                 </div>
              </div>
            </div>
          </div>

          <div className="mt-32">
            <div className="text-center mb-16 animate-in slide-in-from-bottom-8 duration-700 fade-in" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
              <h3 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent mb-6 inline-block hover:scale-105 transition-transform duration-300">
                Professional Credentials
              </h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-brand-cyan via-brand-green to-brand-purple mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, idx) => {
                const animDelay = `${600 + idx * 150}ms`;
                return (
                  <a 
                    key={idx} 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-brand-dark/60 backdrop-blur-md p-8 rounded-[2rem] shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(0,163,224,0.3)] transition-all hover:-translate-y-4 border border-brand-cyan/10 hover:border-brand-cyan/40 group flex flex-col items-center text-center h-full animate-in zoom-in-90 slide-in-from-bottom-8 duration-500 fade-in relative overflow-hidden"
                    style={{ animationDelay: animDelay, animationFillMode: "both" }}
                  >
                    {/* Corner glow on hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 dark:from-brand-cyan/20 dark:to-brand-purple/20 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-md border border-brand-cyan/30 relative z-10 group-hover:shadow-[0_0_20px_rgba(0,163,224,0.4)]">
                      <Award className="w-10 h-10 text-brand-cyan group-hover:text-brand-purple transition-colors duration-500" />
                    </div>
                    <h4 className="text-xl font-extrabold text-gray-800 dark:text-gray-100 mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-brand-purple transition-all duration-300 relative z-10">
                      {cert.name}
                    </h4>
                    <p className="text-brand-green font-bold text-sm md:text-base mb-3 relative z-10 bg-brand-green/10 px-4 py-1.5 rounded-full border border-brand-green/20">
                      {cert.issuer}
                    </p>
                    <div className="mt-auto pt-8 w-full border-t border-gray-100 dark:border-gray-800 relative z-10 flex items-center justify-center gap-2">
                       <CheckCircle2 className="w-4 h-4 text-gray-400 group-hover:text-brand-cyan transition-colors" />
                       <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">{cert.date}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}