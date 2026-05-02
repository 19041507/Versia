'use client';

import Link from "next/link";
import { VersiaLogo } from "../../components/VersiaLogo";
import { PremiumBadge } from "../../components/PremiumBadge";
import { 
  Home, 
  BookOpen, 
  Award, 
  Settings, 
  Search, 
  Bell, 
  User,
  Play,
  Clock,
  ChevronRight,
  TrendingUp,
  Target,
  Zap,
  Menu,
  X,
  Crown,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isPremium, setIsPremium] = useState(false); // Simula status de assinatura
  
  const courses = [
    {
      id: 1,
      title: "Liderança Estratégica 4.0",
      instructor: "Ana Silva",
      progress: 65,
      duration: "8h",
      thumbnail: "https://images.unsplash.com/photo-1770240366266-57290c83cd5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwZGV2ZWxvcG1lbnQlMjBtZW50b3IlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NzQyMzQ0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Liderança",
      isPremium: false,
    },
    {
      id: 2,
      title: "Data Analytics Avançado",
      instructor: "Carlos Mendes",
      progress: 30,
      duration: "12h",
      thumbnail: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQxNzc3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Tecnologia",
      isPremium: true,
    },
    {
      id: 3,
      title: "Cibersegurança Corporativa",
      instructor: "Roberto Costa",
      progress: 0,
      duration: "10h",
      thumbnail: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGlnaXRhbCUyMG5ldHdvcmslMjBzZWN1cml0eXxlbnwxfHx8fDE3NzQyMzQ0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Segurança",
      isPremium: true,
    },
  ];

  const mandatory = [
    {
      id: 4,
      title: "Compliance e Ética Empresarial",
      instructor: "Juliana Oliveira",
      progress: 100,
      duration: "4h",
      thumbnail: "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHRyYWluaW5nJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc3NDIzNDQ4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Compliance",
    },
    {
      id: 5,
      title: "Trabalho em Equipe e Colaboração",
      instructor: "Marcos Santos",
      progress: 45,
      duration: "6h",
      thumbnail: "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NzQyMDI4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Soft Skills",
    },
  ];

  const newCourses = [
    {
      id: 6,
      title: "Inteligência Artificial para Negócios",
      instructor: "Patricia Lima",
      progress: 0,
      duration: "15h",
      thumbnail: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3NDE2NDEyMXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "IA",
      badge: "Novo",
    },
    {
      id: 7,
      title: "Desenvolvimento Full Stack",
      instructor: "Fernando Rocha",
      progress: 0,
      duration: "20h",
      thumbnail: "https://images.unsplash.com/photo-1672385277648-85eddc237a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzc0MjM0NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Tecnologia",
      badge: "Novo",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="fixed top-4 left-4 z-50 lg:hidden w-12 h-12 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white"
      >
        {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col z-50 transform transition-transform duration-300 lg:transform-none ${showMobileMenu ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Gradient transition to main content */}
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-[#050505]/50 pointer-events-none"></div>
        
        <VersiaLogo size="md" />
        
        <nav className="mt-12 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#63E3FF]/20 to-[#7A2CFF]/20 text-white mb-2">
            <Home className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/courses" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 mb-2 transition-all">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Meus Cursos</span>
          </Link>
          <Link href="/certificate" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 mb-2 transition-all">
            <Award className="w-5 h-5" />
            <span className="font-medium">Certificados</span>
          </Link>
          <Link href="/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 mb-2 transition-all">
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

      {/* Mobile Overlay */}
      {showMobileMenu && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setShowMobileMenu(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-4 relative">
          {/* Gradient transition to content below */}
          <div className="absolute left-0 right-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-[#050505]/30 pointer-events-none"></div>
          
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Buscar cursos..."
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#63E3FF]/50 focus:border-[#63E3FF] transition-all text-sm md:text-base"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-4 md:px-8 py-6 md:py-8">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl h-64 md:h-96 group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1764025130362-0162c3dd2035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwd29ya3NwYWNlJTIwZGlnaXRhbCUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDIzNDQ4NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Featured Course"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="relative h-full flex flex-col justify-end p-6 md:p-12">
              <div className="inline-flex items-center gap-2 bg-[#E548FF]/20 backdrop-blur-sm border border-[#E548FF]/30 rounded-full px-3 md:px-4 py-2 mb-3 md:mb-4 w-fit">
                <Zap className="w-4 h-4 text-[#E548FF]" />
                <span className="text-xs md:text-sm font-semibold text-white">Destaque do Mês</span>
              </div>
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 max-w-2xl leading-tight">
                Transformação Digital na Era da IA
              </h2>
              <p className="text-sm md:text-xl text-white/80 mb-4 md:mb-6 max-w-xl">
                Aprenda como a inteligência artificial está revolucionando os negócios e prepare sua empresa para o futuro.
              </p>
              <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 md:w-5 h-4 md:h-5 text-white/60" />
                  <span className="text-white/80">15 horas</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 md:w-5 h-4 md:h-5 text-white/60" />
                  <span className="text-white/80">Patricia Lima</span>
                </div>
              </div>
              <Link href="/course/1">
                <button className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-white flex items-center gap-2 w-fit shadow-lg shadow-[#63E3FF]/20 hover:shadow-[#63E3FF]/40 hover:scale-105 transition-all text-sm md:text-base"
                  style={{
                    background: 'linear-gradient(135deg, #63E3FF 0%, #2FA7FF 30%, #7A2CFF 65%, #E548FF 100%)',
                  }}
                >
                  <Play className="w-4 md:w-5 h-4 md:h-5" />
                  Começar agora
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Premium Upgrade Banner (only if not premium) */}
        {!isPremium && (
          <section className="px-4 md:px-8 py-6">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0a0a0a] via-[#1a1510] to-[#0a0a0a] border border-[#FFD700]/30 p-6 md:p-10">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-4 left-4 w-24 md:w-40 h-24 md:h-40 border-2 border-[#FFD700] rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-32 md:w-48 h-32 md:h-48 border-2 border-[#FF8C00] rounded-full"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 via-transparent to-[#FF8C00]/5 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#FFD700] to-[#FF8C00] flex items-center justify-center">
                    <Crown className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <PremiumBadge variant="medium" />
                    <Sparkles className="w-5 h-5 text-[#FFD700]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Desbloqueie todo o potencial da Versia
                  </h3>
                  <p className="text-white/70 text-sm md:text-base mb-1">
                    Acesso ilimitado • Mentorias 1:1 • Certificados premium • Downloads sem limite
                  </p>
                  <p className="text-[#FFD700] font-semibold text-lg md:text-xl">
                    Apenas R$ 24,90/mês
                  </p>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-auto">
                  <Link href="/subscription" className="block">
                    <button 
                      className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base text-white shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                      style={{
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                      }}
                    >
                      <Crown className="w-5 h-5" />
                      Assinar Premium
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                  <p className="text-white/60 text-xs text-center mt-2">
                    🎁 7 dias grátis para testar
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Continue Studying */}
        <section className="px-4 md:px-8 py-6 md:py-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-white">Continuar estudando</h3>
            <Link href="/courses" className="text-[#63E3FF] hover:underline flex items-center gap-1 text-sm md:text-base">
              Ver todos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {courses.map((course) => (
              <Link key={course.id} href={`/lesson/${course.id}`}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl overflow-hidden hover:bg-white/10 transition-all group cursor-pointer">
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className="bg-[#7A2CFF]/80 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs font-semibold text-white">
                        {course.category}
                      </span>
                    </div>
                    {course.isPremium && (
                      <div className="absolute top-3 right-3 md:top-4 md:right-4">
                        <PremiumBadge variant="small" />
                      </div>
                    )}
                  </div>
                  <div className="p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{course.title}</h4>
                    <p className="text-white/60 text-xs md:text-sm mb-3 md:mb-4">{course.instructor}</p>
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <span className="text-white/60 text-xs md:text-sm flex items-center gap-1">
                        <Clock className="w-3 md:w-4 h-3 md:h-4" />
                        {course.duration}
                      </span>
                      <span className="text-[#63E3FF] text-xs md:text-sm font-semibold">{course.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#63E3FF] to-[#7A2CFF]"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Mandatory */}
        <section className="px-4 md:px-8 py-6 md:py-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-white">Obrigatórios da sua área</h3>
            <Link href="/courses" className="text-[#63E3FF] hover:underline flex items-center gap-1 text-sm md:text-base">
              Ver todos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {mandatory.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group cursor-pointer flex flex-col md:flex-row">
                  <div className="relative w-full md:w-48 h-48 md:h-32 overflow-hidden flex-shrink-0">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1">
                    <span className="bg-[#E548FF]/20 text-[#E548FF] px-2 py-1 rounded-md text-xs font-semibold mb-2 inline-block">
                      {course.category}
                    </span>
                    <h4 className="text-base font-semibold text-white mb-2">{course.title}</h4>
                    <p className="text-white/60 text-sm mb-3">{course.instructor}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-white/60 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                      {course.progress === 100 && (
                        <span className="text-green-400 text-sm flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          Concluído
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* New Courses */}
        <section className="px-4 md:px-8 py-6 md:py-8 pb-12 md:pb-16">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-white">Novidades da Versia</h3>
            <Link href="/courses" className="text-[#63E3FF] hover:underline flex items-center gap-1 text-sm md:text-base">
              Ver todos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
            {newCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl overflow-hidden hover:bg-white/10 transition-all group cursor-pointer">
                  <div className="relative h-44 md:h-56 overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                    <div className="absolute top-3 right-3 md:top-4 md:right-4">
                      <span className="bg-[#63E3FF] px-2 md:px-3 py-1 rounded-full text-xs font-bold text-black">
                        {course.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <span className="bg-[#2FA7FF]/20 text-[#63E3FF] px-2 py-1 rounded-md text-xs font-semibold mb-2 inline-block">
                      {course.category}
                    </span>
                    <h4 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{course.title}</h4>
                    <p className="text-white/60 text-xs md:text-sm mb-3 md:mb-4">{course.instructor}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-white/60 text-xs md:text-sm flex items-center gap-1">
                        <Clock className="w-3 md:w-4 h-3 md:h-4" />
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}