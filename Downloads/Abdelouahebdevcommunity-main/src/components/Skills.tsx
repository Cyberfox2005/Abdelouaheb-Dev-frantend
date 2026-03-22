import { useLanguage } from "./LanguageProvider";
import { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from "recharts";

const skillPaths = [
  {
    name: "General Overview",
    color: "from-brand-purple to-brand-cyan",
    chartColor: "#8B5CF6",
    skills: [
      { name: "Frontend Core", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 92 },
      { name: "Backend Systems", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 85 },
      { name: "Mobile & Apps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", level: 78 },
      { name: "Game Development", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", level: 73 },
      { name: "Databases", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 82 },
      { name: "Cloud & DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 80 }
    ]
  },
  {
    name: "Frontend Development",
    color: "from-brand-cyan to-brand-green",
    chartColor: "#00A3E0",
    skills: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 88 },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 85 },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 92 },
      { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 88 }
    ]
  },
  {
    name: "Backend PHP",
    color: "from-[#777BB4] to-[#FF2D20]",
    chartColor: "#777BB4",
    skills: [
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", level: 90 },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 85 },
      { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", level: 87 }
    ]
  },
  {
    name: "Backend Python",
    color: "from-[#3776AB] to-[#092E20]",
    chartColor: "#3776AB",
    skills: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 88 },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 85 },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", level: 80 },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", level: 82 }
    ]
  },
  {
    name: "Backend Node.js",
    color: "from-[#F7DF1E] to-[#339933]",
    chartColor: "#339933",
    skills: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 88 },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 83 },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 85 }
    ]
  },
  {
    name: "Mobile - React Native",
    color: "from-brand-cyan to-brand-purple",
    chartColor: "#00A3E0",
    skills: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 88 },
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 80 }
    ]
  },
  {
    name: "Mobile - Flutter",
    color: "from-[#0175C2] to-[#02569B]",
    chartColor: "#0175C2",
    skills: [
      { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", level: 78 },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", level: 75 }
    ]
  },
  {
    name: "Mobile - iOS",
    color: "from-[#F05138] to-brand-purple",
    chartColor: "#F05138",
    skills: [
      { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", level: 72 }
    ]
  },
  {
    name: "Mobile - Android",
    color: "from-[#3DDC84] to-[#7F52FF]",
    chartColor: "#3DDC84",
    skills: [
      { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", level: 70 }
    ]
  },
  {
    name: "System Programming",
    color: "from-[#A8B9CC] to-[#00599C]",
    chartColor: "#00599C",
    skills: [
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: 75 },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: 73 }
    ]
  },
  {
    name: "Enterprise Development",
    color: "from-[#007396] to-brand-green",
    chartColor: "#007396",
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 82 },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 85 },
      { name: "Java EE", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 78 },
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", level: 80 }
    ]
  },
  {
    name: "Apps Development",
    color: "from-[#239120] to-[#178600]",
    chartColor: "#239120",
    skills: [
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", level: 76 },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: 73 },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 82 },
      { name: "JavaFX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 70 },
      { name: "XML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg", level: 80 }
    ]
  },
  {
    name: "Game Development",
    color: "from-[#FF0066] to-[#9933FF]",
    chartColor: "#9933FF",
    skills: [
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", level: 76 },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", level: 73 },
      { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", level: 68 }
    ]
  },
  {
    name: "Databases",
    color: "from-[#4479A1] to-[#47A248]",
    chartColor: "#4479A1",
    skills: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 85 },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 80 },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 78 },
      { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", level: 75 }
    ]
  },
  {
    name: "Server Architecture",
    color: "from-[#2496ED] to-[#FF9900]",
    chartColor: "#2496ED",
    skills: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 82 },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", level: 70 },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", level: 72 },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", level: 85 }
    ]
  },
  {
    name: "Automation",
    color: "from-[#43B02A] to-[#D22128]",
    chartColor: "#43B02A",
    skills: [
      { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", level: 85 },
      { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", level: 80 },
      { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg", level: 82 },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 88 }
    ]
  }
];

export function Skills() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % skillPaths.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + skillPaths.length) % skillPaths.length);
  };

  const currentSkillPath = skillPaths[currentIndex];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-brand-dark dark:via-brand-darker dark:to-brand-dark relative overflow-hidden py-32">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-purple/5 dark:bg-brand-purple/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16 animate-in slide-in-from-bottom-8 duration-700 fade-in">
          <h2 className="mb-4 text-4xl md:text-5xl font-black bg-gradient-to-r from-brand-cyan via-brand-green to-brand-purple bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-500">
            {t('skillsTitle')}
          </h2>
          <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-brand-cyan via-brand-green to-brand-purple rounded-full animate-pulse mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:text-lg">
            {t('skillsDescription')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative animate-in zoom-in-95 duration-700 fade-in w-full">
          {/* Navigation Buttons for Large Screens */}
          <Button
            onClick={prevSlide}
            size="lg"
            variant="outline"
            className="absolute -left-5 md:-left-20 top-1/2 -translate-y-1/2 rounded-full w-14 h-14 p-0 border-brand-cyan/30 bg-white/50 dark:bg-brand-dark/50 backdrop-blur-md hover:bg-brand-cyan/10 hover:border-brand-cyan hover:scale-110 transition-all shadow-lg z-20 hidden md:flex"
          >
            <ChevronLeft className="h-6 w-6 text-brand-cyan" />
          </Button>

          <Button
            onClick={nextSlide}
            size="lg"
            variant="outline"
            className="absolute -right-5 md:-right-20 top-1/2 -translate-y-1/2 rounded-full w-14 h-14 p-0 border-brand-cyan/30 bg-white/50 dark:bg-brand-dark/50 backdrop-blur-md hover:bg-brand-cyan/10 hover:border-brand-cyan hover:scale-110 transition-all shadow-lg z-20 hidden md:flex"
          >
            <ChevronRight className="h-6 w-6 text-brand-cyan" />
          </Button>

          {/* Main Content Card */}
          <div className="bg-white/80 dark:bg-brand-dark/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-gray-200 dark:border-brand-cyan/20 overflow-hidden min-h-[600px] w-full relative">
            
            {/* Top glowing gradient line */}
            <div className={`h-2 bg-gradient-to-r ${currentSkillPath.color} transition-all duration-700`}></div>

            <div className="p-8 md:p-14">
              
              {/* Card Header */}
              <div className="text-center mb-12">
                <h3 className={`text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r ${currentSkillPath.color} bg-clip-text text-transparent transition-all duration-500`}>
                  {currentSkillPath.name}
                </h3>
                <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-brand-darker inline-flex px-4 py-1.5 rounded-full shadow-inner text-sm font-semibold border border-gray-200 dark:border-gray-800">
                  <TrendingUp className="h-4 w-4" />
                  <span>Category {currentIndex + 1} of {skillPaths.length}</span>
                </div>
              </div>

              {/* Two-Column Grid: Progress Bars & Radar Chart */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
                
                {/* Visual Progress Bar List */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 order-2 lg:order-1">
                  {currentSkillPath.skills.map((skill, index) => (
                    <div 
                      key={`${currentIndex}-${index}`} // Reset animation on slide change
                      className="group"
                      style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                    >
                      <div className="flex items-center gap-5">
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${currentSkillPath.color} p-3.5 shadow-lg group-hover:scale-110 transition-all duration-300 drop-shadow-md`}>
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-full h-full object-contain filter brightness-0 invert"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-800 dark:text-gray-200 font-bold tracking-tight">{skill.name}</span>
                            <span className={`text-sm font-black bg-gradient-to-r ${currentSkillPath.color} bg-clip-text text-transparent`}>
                              {skill.level}%
                            </span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2.5 bg-gray-100 dark:bg-brand-darker shadow-inner rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Radar Chart */}
                <div 
                  key={`chart-${currentIndex}`} // Force re-animation when slide changes
                  className="h-[350px] md:h-[450px] w-full bg-gray-50/50 dark:bg-brand-dark/30 rounded-3xl border border-gray-100 dark:border-gray-800 p-2 shadow-inner order-1 lg:order-2 flex flex-col justify-center animate-in zoom-in slide-in-from-right-8 duration-700 fade-in"
                >
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={currentSkillPath.skills}>
                        <PolarGrid stroke="currentColor" className="text-gray-300 dark:text-gray-700" />
                        <PolarAngleAxis 
                          dataKey="name" 
                          tick={{ fill: 'currentColor', fontSize: 12, fontWeight: 700 }} 
                          className="text-gray-600 dark:text-gray-400"
                        />
                        <Radar 
                          name="Proficiency" 
                          dataKey="level" 
                          stroke={currentSkillPath.chartColor} 
                          fill={currentSkillPath.chartColor} 
                          fillOpacity={0.4} 
                          strokeWidth={3}
                          className="drop-shadow-lg"
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(15, 23, 42, 0.95)', 
                            border: `1px solid ${currentSkillPath.chartColor}`, 
                            borderRadius: '16px', 
                            color: '#fff',
                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
                          }}
                          itemStyle={{ color: currentSkillPath.chartColor, fontWeight: 'bold' }}
                          cursor={{ strokeWidth: 2, stroke: currentSkillPath.chartColor, strokeOpacity: 0.5 }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                </div>

              </div>

              {/* Overall Statistics */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-brand-cyan/20">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-cyan/5 to-transparent border border-brand-cyan/10 hover:border-brand-cyan/30 transition-colors shadow-sm">
                     <div className="text-3xl font-black bg-gradient-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent mb-1 drop-shadow-sm">
                       {currentSkillPath.skills.length}
                     </div>
                     <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Technologies</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-green/5 to-transparent border border-brand-green/10 hover:border-brand-green/30 transition-colors shadow-sm">
                     <div className="text-3xl font-black bg-gradient-to-r from-brand-green to-brand-purple bg-clip-text text-transparent mb-1 drop-shadow-sm">
                       {Math.round(currentSkillPath.skills.reduce((acc, s) => acc + s.level, 0) / currentSkillPath.skills.length)}%
                     </div>
                     <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Avg. Score</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-purple/5 to-transparent border border-brand-purple/10 hover:border-brand-purple/30 transition-colors shadow-sm">
                     <div className="text-3xl font-black bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent mb-1 drop-shadow-sm">
                       {Math.max(...currentSkillPath.skills.map(s => s.level))}%
                     </div>
                     <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Peak Level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between w-full mt-10 md:hidden px-4">
             <Button
                onClick={prevSlide}
                size="lg"
                variant="outline"
                className="rounded-full w-14 h-14 p-0 border-brand-cyan/50 bg-white dark:bg-brand-dark/80"
              >
                <ChevronLeft className="h-6 w-6 text-brand-cyan" />
              </Button>
              <div className="flex justify-center gap-2">
                {skillPaths.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? `w-10 bg-gradient-to-r ${skillPaths[currentIndex].color} shadow-sm` 
                        : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-brand-cyan/50'
                    }`}
                  />
                ))}
              </div>
              <Button
                onClick={nextSlide}
                size="lg"
                variant="outline"
                className="rounded-full w-14 h-14 p-0 border-brand-cyan/50 bg-white dark:bg-brand-dark/80"
              >
                <ChevronRight className="h-6 w-6 text-brand-cyan" />
              </Button>
          </div>

          {/* Dots Navigation for Desktop */}
          <div className="hidden md:flex justify-center gap-3 mt-10">
            {skillPaths.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-500 shadow-sm ${
                  index === currentIndex 
                    ? `w-12 bg-gradient-to-r ${skillPaths[currentIndex].color}` 
                    : 'w-3 bg-gray-300 dark:bg-gray-700 hover:bg-brand-cyan/50 hover:w-6'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
