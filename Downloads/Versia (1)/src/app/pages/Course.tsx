import { Link, useParams } from "../lib/router";
import { VersiaLogo } from "../components/VersiaLogo";
import {
  Home,
  BookOpen,
  Award,
  Settings,
  Search,
  Bell,
  User,
  Clock,
  Play,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Star,
  Users,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export function Course() {
  const { id } = useParams();
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleModule = (index: number) => {
    setExpandedModules(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const courseData = {
    title: "Liderança Estratégica 4.0",
    instructor: {
      name: "Ana Silva",
      role: "Especialista em Liderança Corporativa",
      avatar: "https://images.unsplash.com/photo-1573497491306-c8a68afac6f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc3NDIzNDQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    thumbnail: "https://images.unsplash.com/photo-1770240366266-57290c83cd5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwZGV2ZWxvcG1lbnQlMjBtZW50b3IlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NzQyMzQ0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Desenvolva habilidades de liderança moderna e estratégica para liderar equipes de alto desempenho na era digital. Este curso aborda técnicas avançadas de gestão, comunicação efetiva e tomada de decisão estratégica.",
    progress: 65,
    duration: "8h",
    students: 1240,
    rating: 4.8,
    reviews: 342,
    modules: [
      {
        title: "Fundamentos da Liderança Moderna",
        duration: "2h",
        lessons: [
          { id: 1, title: "Introdução à Liderança 4.0", duration: "15min", completed: true },
          { id: 2, title: "O Papel do Líder na Era Digital", duration: "20min", completed: true },
          { id: 3, title: "Estilos de Liderança Contemporâneos", duration: "25min", completed: true },
          { id: 4, title: "Autoconhecimento e Inteligência Emocional", duration: "30min", completed: false },
        ],
      },
      {
        title: "Comunicação e Influência",
        duration: "2.5h",
        lessons: [
          { id: 5, title: "Comunicação Assertiva", duration: "20min", completed: false },
          { id: 6, title: "Técnicas de Persuasão", duration: "25min", completed: false },
          { id: 7, title: "Feedback Construtivo", duration: "30min", completed: false },
          { id: 8, title: "Gestão de Conflitos", duration: "35min", completed: false },
        ],
      },
      {
        title: "Gestão de Equipes de Alto Desempenho",
        duration: "2h",
        lessons: [
          { id: 9, title: "Construindo Equipes Eficazes", duration: "25min", completed: false },
          { id: 10, title: "Motivação e Engajamento", duration: "30min", completed: false },
          { id: 11, title: "Delegação Estratégica", duration: "20min", completed: false },
          { id: 12, title: "Cultura Organizacional", duration: "25min", completed: false },
        ],
      },
      {
        title: "Tomada de Decisão Estratégica",
        duration: "1.5h",
        lessons: [
          { id: 13, title: "Análise e Resolução de Problemas", duration: "30min", completed: false },
          { id: 14, title: "Pensamento Estratégico", duration: "25min", completed: false },
          { id: 15, title: "Gestão de Riscos", duration: "20min", completed: false },
          { id: 16, title: "Projeto Final", duration: "15min", completed: false },
        ],
      },
    ],
  };

  const totalLessons = courseData.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessons = courseData.modules.reduce(
    (acc, module) => acc + module.lessons.filter(l => l.completed).length, 
    0
  );

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Mobile Menu Backdrop */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setShowMobileMenu(false)}
        ></div>
      )}

      {/* Sidebar - Hidden on mobile, slides in with menu */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col z-50 transition-transform duration-300 ${
        showMobileMenu ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Gradient transition to main content */}
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-[#050505]/50 pointer-events-none"></div>

        {/* Close button for mobile */}
        <button
          onClick={() => setShowMobileMenu(false)}
          className="md:hidden absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <VersiaLogo size="sm" />

        <nav className="mt-12 flex-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 mb-2 transition-all">
            <Home className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link to="/courses" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#63E3FF]/20 to-[#7A2CFF]/20 text-white mb-2">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Meus Cursos</span>
          </Link>
          <Link to="/certificate" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 mb-2 transition-all">
            <Award className="w-5 h-5" />
            <span className="font-medium">Certificados</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 mb-2 transition-all">
            <User className="w-5 h-5" />
            <span className="font-medium">Perfil</span>
          </Link>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 mb-2 transition-all w-full">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Configurações</span>
          </button>
        </nav>

        <div className="border-t border-white/5 pt-4">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#63E3FF] to-[#7A2CFF] flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">João Silva</p>
              <p className="text-white/40 text-xs">joao.silva@empresa.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-4 relative">
          {/* Gradient transition to content below */}
          <div className="absolute left-0 right-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-[#050505]/30 pointer-events-none"></div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(true)}
                className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
              >
                <Menu className="w-5 h-5" />
              </button>

              <Link to="/courses" className="flex items-center gap-2 text-white/60 hover:text-white transition-all">
                <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />
                <span className="text-sm md:text-base hidden sm:inline">Voltar para cursos</span>
                <span className="text-sm md:text-base sm:hidden">Voltar</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-4 md:px-8 py-6 md:py-8">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl h-[300px] md:h-[400px]">
            <img
              src={courseData.thumbnail}
              alt={courseData.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="relative h-full flex flex-col justify-end p-6 md:p-12">
              <div className="inline-flex items-center gap-2 bg-[#7A2CFF]/20 backdrop-blur-sm border border-[#7A2CFF]/30 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-3 md:mb-4 w-fit">
                <BookOpen className="w-3 md:w-4 h-3 md:h-4 text-[#7A2CFF]" />
                <span className="text-xs md:text-sm font-semibold text-white">Liderança</span>
              </div>
              <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4">{courseData.title}</h1>
              <p className="text-sm md:text-xl text-white/80 mb-4 md:mb-6 max-w-3xl line-clamp-2 md:line-clamp-none">
                {courseData.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 md:gap-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 md:w-5 h-4 md:h-5 text-white/60" />
                  <span className="text-sm md:text-base text-white/80">{courseData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 md:w-5 h-4 md:h-5 text-white/60" />
                  <span className="text-sm md:text-base text-white/80">{courseData.students} alunos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 md:w-5 h-4 md:h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm md:text-base text-white/80">{courseData.rating} ({courseData.reviews})</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 md:px-8 py-6 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Course Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Progress Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Seu Progresso</h3>
                  <p className="text-white/60 text-xs md:text-sm">{completedLessons} de {totalLessons} aulas concluídas</p>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white">{courseData.progress}%</div>
              </div>
              <div className="w-full h-2 md:h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#63E3FF] via-[#2FA7FF] to-[#7A2CFF] transition-all duration-500"
                  style={{ width: `${courseData.progress}%` }}
                ></div>
              </div>
              <Link to="/lesson/1">
                <button className="mt-4 md:mt-6 w-full px-5 md:px-6 py-3 md:py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-[#63E3FF]/20 hover:shadow-[#63E3FF]/40 hover:scale-105 transition-all text-sm md:text-base"
                  style={{
                    background: 'linear-gradient(135deg, #63E3FF 0%, #2FA7FF 30%, #7A2CFF 65%, #E548FF 100%)',
                  }}
                >
                  <Play className="w-4 md:w-5 h-4 md:h-5" />
                  Continuar Curso
                </button>
              </Link>
            </div>

            {/* Course Modules */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Conteúdo do Curso</h3>
              <div className="space-y-3 md:space-y-4">
                {courseData.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="border border-white/10 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleModule(moduleIndex)}
                      className="w-full flex items-center justify-between p-3 md:p-5 bg-white/5 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#63E3FF] to-[#7A2CFF] flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm md:text-base">{moduleIndex + 1}</span>
                        </div>
                        <div className="text-left min-w-0">
                          <h4 className="text-white font-semibold text-sm md:text-base truncate">{module.title}</h4>
                          <p className="text-white/60 text-xs md:text-sm">{module.lessons.length} aulas • {module.duration}</p>
                        </div>
                      </div>
                      {expandedModules.includes(moduleIndex) ? (
                        <ChevronUp className="w-4 md:w-5 h-4 md:h-5 text-white/60 flex-shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 md:w-5 h-4 md:h-5 text-white/60 flex-shrink-0 ml-2" />
                      )}
                    </button>

                    {expandedModules.includes(moduleIndex) && (
                      <div className="bg-black/20 p-1 md:p-2">
                        {module.lessons.map((lesson) => (
                          <Link key={lesson.id} to={`/lesson/${lesson.id}`}>
                            <div className="flex items-center justify-between p-3 md:p-4 hover:bg-white/5 rounded-lg transition-all cursor-pointer group">
                              <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                                {lesson.completed ? (
                                  <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-green-400 flex-shrink-0" />
                                ) : (
                                  <Circle className="w-4 md:w-5 h-4 md:h-5 text-white/40 group-hover:text-white/60 flex-shrink-0" />
                                )}
                                <span className={`${lesson.completed ? 'text-white/80' : 'text-white'} group-hover:text-white transition-all text-sm md:text-base truncate`}>
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-white/60 text-xs md:text-sm flex-shrink-0 ml-2">{lesson.duration}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Instructor & Info */}
          <div className="space-y-4 md:space-y-6">
            {/* Instructor Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Instrutor</h3>
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <img
                  src={courseData.instructor.avatar}
                  alt={courseData.instructor.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#63E3FF]"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">{courseData.instructor.name}</h4>
                  <p className="text-white/60 text-xs md:text-sm">{courseData.instructor.role}</p>
                </div>
              </div>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                Especialista em desenvolvimento de liderança com mais de 15 anos de experiência em coaching executivo e consultoria organizacional.
              </p>
            </div>

            {/* Course Info */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Informações do Curso</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-between pb-2 md:pb-3 border-b border-white/10">
                  <span className="text-white/60 text-xs md:text-sm">Duração Total</span>
                  <span className="text-white font-medium text-xs md:text-sm">{courseData.duration}</span>
                </div>
                <div className="flex items-center justify-between pb-2 md:pb-3 border-b border-white/10">
                  <span className="text-white/60 text-xs md:text-sm">Aulas</span>
                  <span className="text-white font-medium text-xs md:text-sm">{totalLessons} aulas</span>
                </div>
                <div className="flex items-center justify-between pb-2 md:pb-3 border-b border-white/10">
                  <span className="text-white/60 text-xs md:text-sm">Alunos</span>
                  <span className="text-white font-medium text-xs md:text-sm">{courseData.students}</span>
                </div>
                <div className="flex items-center justify-between pb-2 md:pb-3 border-b border-white/10">
                  <span className="text-white/60 text-xs md:text-sm">Nível</span>
                  <span className="text-white font-medium text-xs md:text-sm">Avançado</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-xs md:text-sm">Certificado</span>
                  <span className="text-green-400 font-medium flex items-center gap-1 text-xs md:text-sm">
                    <Award className="w-3 md:w-4 h-3 md:h-4" />
                    Incluído
                  </span>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">O que você vai aprender</h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-[#63E3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-xs md:text-sm">Desenvolver estilos de liderança eficazes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-[#63E3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-xs md:text-sm">Técnicas avançadas de comunicação</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-[#63E3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-xs md:text-sm">Gestão de equipes de alto desempenho</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-[#63E3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-xs md:text-sm">Tomada de decisão estratégica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5 text-[#63E3FF] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-xs md:text-sm">Inteligência emocional aplicada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}