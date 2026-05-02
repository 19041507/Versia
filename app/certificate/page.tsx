'use client';

import Link from "next/link";
import { VersiaLogo } from "../../components/VersiaLogo";
import { 
  Home, 
  BookOpen, 
  Award, 
  Settings, 
  Bell, 
  User,
  Download,
  Share2,
  Trophy,
  Target,
  Zap,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function CertificatePage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const certificates = [
    {
      id: 1,
      course: "Compliance e Ética Empresarial",
      date: "15 de Março, 2026",
      instructor: "Juliana Oliveira",
      hours: "4h",
    },
    {
      id: 2,
      course: "Gestão de Projetos Ágeis",
      date: "28 de Fevereiro, 2026",
      instructor: "Beatriz Alves",
      hours: "9h",
    },
    {
      id: 3,
      course: "Data Analytics Fundamentals",
      date: "10 de Janeiro, 2026",
      instructor: "Carlos Mendes",
      hours: "8h",
    },
  ];

  const badges = [
    {
      name: "Primeira Conquista",
      description: "Complete seu primeiro curso",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      earned: true,
    },
    {
      name: "Estudante Dedicado",
      description: "5 cursos concluídos",
      icon: Target,
      color: "from-[#63E3FF] to-[#2FA7FF]",
      earned: true,
    },
    {
      name: "Maratonista",
      description: "10 horas em uma semana",
      icon: Zap,
      color: "from-[#7A2CFF] to-[#E548FF]",
      earned: true,
    },
    {
      name: "Líder em Formação",
      description: "Complete trilha de Liderança",
      icon: Award,
      color: "from-purple-400 to-pink-500",
      earned: false,
    },
  ];

  const stats = [
    { label: "Total de Certificados", value: "12", icon: Award, change: "+3 este mês" },
    { label: "Horas de Estudo", value: "156h", icon: Target, change: "+24h este mês" },
    { label: "Cursos Concluídos", value: "12", icon: Trophy, change: "83% concluídos" },
    { label: "Sequência Atual", value: "15 dias", icon: Zap, change: "Novo recorde!" },
  ];

  const timeline = [
    { date: "15 Mar", event: "Certificado obtido", course: "Compliance e Ética", type: "certificate" },
    { date: "10 Mar", event: "Curso iniciado", course: "Liderança Estratégica 4.0", type: "started" },
    { date: "28 Fev", event: "Certificado obtido", course: "Gestão de Projetos Ágeis", type: "certificate" },
    { date: "20 Fev", event: "Badge conquistada", course: "Estudante Dedicado", type: "badge" },
    { date: "10 Jan", event: "Certificado obtido", course: "Data Analytics", type: "certificate" },
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
        
<div className="flex justify-center">
  <div className="scale-155 origin-center">
    <VersiaLogo size="sm" />
  </div>
</div>
        
        <nav className="mt-12 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 mb-2 transition-all">
            <Home className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/courses" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 mb-2 transition-all">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Meus Cursos</span>
          </Link>
          <Link href="/certificate" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#63E3FF]/20 to-[#7A2CFF]/20 text-white mb-2">
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
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">Conquistas e Certificados</h1>
              <p className="text-white/60 text-xs md:text-sm mt-1">Acompanhe seu progresso e celebre suas conquistas</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="px-4 md:px-8 py-4 md:py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-6 hover:bg-white/10 transition-all group">
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-[#63E3FF] to-[#7A2CFF] flex items-center justify-center">
                    <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <TrendingUp className="w-3 h-3 md:w-5 md:h-5 text-green-400" />
                </div>
                <p className="text-white/60 text-[10px] md:text-sm mb-0.5 md:mb-1 leading-tight">{stat.label}</p>
                <p className="text-xl md:text-3xl font-bold text-white mb-0.5 md:mb-2">{stat.value}</p>
                <p className="text-[10px] md:text-xs text-green-400">{stat.change}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="px-4 md:px-8 pb-8 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Certificates */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Main Certificate Display */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="relative bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505] p-6 md:p-12">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-4 md:top-8 left-4 md:left-8 w-20 md:w-32 h-20 md:h-32 border-2 border-[#63E3FF] rounded-full"></div>
                  <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-24 md:w-40 h-24 md:h-40 border-2 border-[#E548FF] rounded-full"></div>
                </div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="grid grid-cols-3 items-center mb-6 md:mb-8">
  <div></div>

<div className="flex justify-center">
  <div className="scale-200 origin-center">
    <VersiaLogo size="sm" />
  </div>
</div>

  <div className="text-right">
    <p className="text-white/60 text-xs md:text-sm">Certificado ID</p>
    <p className="text-white font-mono text-xs md:text-base">#VRS-2026-001</p>
  </div>
</div>

                  {/* Title */}
                  <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Certificado de Conclusão</h2>
                    <p className="text-sm md:text-base text-white/60">Versia Corporate Learning Platform</p>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6 md:mb-8">
                    <p className="text-white/60 mb-3 md:mb-4 text-sm md:text-base">Este documento certifica que</p>
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#63E3FF] via-[#2FA7FF] to-[#7A2CFF] bg-clip-text text-transparent mb-3 md:mb-4">
                      João Silva
                    </h3>
                    <p className="text-white/60 mb-2 text-sm md:text-base">concluiu com sucesso o curso</p>
                    <h4 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6">Compliance e Ética Empresarial</h4>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs md:text-sm">
                      <div>
                        <p className="text-white/60 mb-1">Instrutor</p>
                        <p className="text-white">Juliana Oliveira</p>
                      </div>
                      <div className="hidden md:block w-px h-12 bg-white/10"></div>
                      <div>
                        <p className="text-white/60 mb-1">Carga Horária</p>
                        <p className="text-white">4 horas</p>
                      </div>
                      <div className="hidden md:block w-px h-12 bg-white/10"></div>
                      <div>
                        <p className="text-white/60 mb-1">Data de Conclusão</p>
                        <p className="text-white">15 de Março, 2026</p>
                      </div>
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="border-t border-white/10 pt-4 md:pt-6 flex justify-center">
                    <div className="text-center">
                      <div className="w-32 md:w-48 border-b-2 border-white/20 mb-2"></div>
                      <p className="text-white/60 text-xs md:text-sm">Assinatura Digital Verificada</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-black/40 p-3 md:p-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3">
                <p className="text-white/60 text-xs md:text-sm">Emitido em 15 de Março, 2026</p>
                <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
                  <button className="flex-1 md:flex-none px-3 md:px-4 py-2 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center justify-center gap-1.5 md:gap-2 text-xs md:text-sm">
                    <Share2 className="w-3 md:w-4 h-3 md:h-4" />
                    <span>Compartilhar</span>
                  </button>
                  <button className="flex-1 md:flex-none px-3 md:px-4 py-2 rounded-lg md:rounded-xl font-semibold text-white shadow-lg transition-all flex items-center justify-center gap-1.5 md:gap-2 text-xs md:text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #63E3FF 0%, #2FA7FF 30%, #7A2CFF 65%, #E548FF 100%)',
                    }}
                  >
                    <Download className="w-3 md:w-4 h-3 md:h-4" />
                    <span>Baixar PDF</span>
                  </button>
                </div>
              </div>
            </div>

            {/* All Certificates */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Todos os Certificados</h3>
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div key={cert.id} className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-all group cursor-pointer">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#63E3FF] to-[#7A2CFF] flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-semibold mb-1 text-sm md:text-base truncate">{cert.course}</h4>
                          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-white/60">
                            <span className="truncate">{cert.instructor}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{cert.hours}</span>
                            <span className="hidden md:inline">•</span>
                            <span className="hidden md:inline">{cert.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                          <Download className="w-3 h-3 md:w-4 md:h-4" />
                        </button>
                        <button className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
                          <Share2 className="w-3 h-3 md:w-4 md:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Badges & Timeline */}
          <div className="space-y-6 md:space-y-8">
            {/* Badges */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-6">Badges Conquistadas</h3>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`relative p-2.5 md:p-4 rounded-lg md:rounded-xl border transition-all ${
                      badge.earned
                        ? 'bg-white/5 border-white/10 hover:bg-white/10'
                        : 'bg-white/5 border-white/10 opacity-40'
                    }`}
                  >
                    <div className={`w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center mb-1.5 md:mb-3`}>
                      <badge.icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <h4 className="text-white text-[11px] md:text-sm font-semibold mb-0.5 md:mb-1 leading-tight">{badge.name}</h4>
                    <p className="text-white/60 text-[10px] md:text-xs leading-tight md:leading-relaxed">{badge.description}</p>
                    {badge.earned && (
                      <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2">
                        <CheckCircle2 className="w-3 h-3 md:w-5 md:h-5 text-green-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-6">Histórico Recente</h3>
              <div className="space-y-3 md:space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-2 md:gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.type === 'certificate'
                          ? 'bg-gradient-to-br from-[#63E3FF] to-[#2FA7FF]'
                          : item.type === 'badge'
                          ? 'bg-gradient-to-br from-[#7A2CFF] to-[#E548FF]'
                          : 'bg-white/10'
                      }`}>
                        {item.type === 'certificate' ? (
                          <Award className="w-3 h-3 md:w-5 md:h-5 text-white" />
                        ) : item.type === 'badge' ? (
                          <Trophy className="w-3 h-3 md:w-5 md:h-5 text-white" />
                        ) : (
                          <BookOpen className="w-3 h-3 md:w-5 md:h-5 text-white" />
                        )}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-px h-full bg-white/10 mt-1.5 md:mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-3 md:pb-6">
                      <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-white/40" />
                        <span className="text-white/40 text-[10px] md:text-xs">{item.date}</span>
                      </div>
                      <p className="text-white font-medium mb-0.5 md:mb-1 text-xs md:text-base">{item.event}</p>
                      <p className="text-white/60 text-[11px] md:text-sm">{item.course}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}