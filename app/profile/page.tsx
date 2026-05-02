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
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Camera,
  Target,
  Clock,
  TrendingUp,
  Trophy,
  Zap,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const userStats = [
    { label: "Cursos em Andamento", value: "8", icon: Target, change: "+2 este mês", color: "from-[#63E3FF] to-[#2FA7FF]" },
    { label: "Certificados Obtidos", value: "12", icon: Award, change: "+3 este mês", color: "from-[#7A2CFF] to-[#E548FF]" },
    { label: "Horas de Aprendizado", value: "156h", icon: Clock, change: "+24h este mês", color: "from-[#2FA7FF] to-[#7A2CFF]" },
    { label: "Sequência Atual", value: "15 dias", icon: Zap, change: "Novo recorde!", color: "from-[#E548FF] to-[#63E3FF]" },
  ];

  const achievements = [
    { name: "Primeira Conquista", description: "Complete seu primeiro curso", earned: true },
    { name: "Estudante Dedicado", description: "5 cursos concluídos", earned: true },
    { name: "Maratonista", description: "10 horas em uma semana", earned: true },
    { name: "Líder em Formação", description: "Complete trilha de Liderança", earned: false },
  ];

  const recentActivity = [
    { date: "15 Mar", event: "Concluiu curso", title: "Compliance e Ética Empresarial" },
    { date: "10 Mar", event: "Iniciou curso", title: "Liderança Estratégica 4.0" },
    { date: "28 Fev", event: "Obteve certificado", title: "Gestão de Projetos Ágeis" },
    { date: "20 Fev", event: "Badge conquistada", title: "Estudante Dedicado" },
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
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-[#050505]/50 pointer-events-none"></div>

        <VersiaLogo size="md" />

        <nav className="mt-12 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 mb-2 transition-all">
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
          <Link href="/profile" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#63E3FF]/20 to-[#7A2CFF]/20 text-white mb-2">
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
          <div className="absolute left-0 right-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-[#050505]/30 pointer-events-none"></div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">Meu Perfil</h1>
              <p className="text-white/60 text-xs md:text-sm mt-1">Gerencie suas informações e acompanhe seu progresso</p>
            </div>
            <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Profile Header Card */}
        <section className="px-4 md:px-8 py-6 md:py-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            {/* Cover Image */}
            <div className="relative h-32 md:h-48 bg-gradient-to-br from-[#63E3FF]/20 via-[#7A2CFF]/20 to-[#E548FF]/20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(99, 227, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(229, 72, 255, 0.15) 0%, transparent 50%)',
              }}></div>
              <button className="absolute top-4 right-4 px-3 py-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/20 text-white text-sm flex items-center gap-2 hover:bg-black/60 transition-all">
                <Camera className="w-4 h-4" />
                <span className="hidden md:inline">Alterar capa</span>
              </button>
            </div>

            {/* Profile Info */}
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-4 -mt-12 md:-mt-16">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-[#63E3FF] to-[#7A2CFF] flex items-center justify-center border-4 border-[#050505]">
                    <User className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#63E3FF] flex items-center justify-center hover:bg-[#2FA7FF] transition-all">
                    <Camera className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </button>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">João Silva</h2>
                  <p className="text-white/70 text-sm md:text-base mb-3">Analista de Dados • Versia Learning Platform</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 text-xs md:text-sm text-white/60">
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-4 h-4" />
                      <span>joao.silva@empresa.com</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>Membro desde Jan 2025</span>
                    </div>
                  </div>
                </div>

                <button className="px-4 md:px-6 py-2 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center gap-2">
                  <Edit className="w-4 h-4" />
                  <span className="text-sm md:text-base">Editar Perfil</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="px-4 md:px-8 py-4">
          <h3 className="text-lg md:text-xl font-bold text-white mb-4">Estatísticas de Aprendizado</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {userStats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all group">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                </div>
                <p className="text-white/60 text-xs md:text-sm mb-1">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{stat.value}</p>
                <p className="text-xs text-green-400">{stat.change}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="px-4 md:px-8 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Informações Pessoais</h3>
                <button className="text-[#63E3FF] hover:underline text-sm flex items-center gap-1">
                  <Edit className="w-4 h-4" />
                  Editar
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Nome Completo</label>
                  <p className="text-white font-medium">João Silva</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Email</label>
                  <p className="text-white font-medium">joao.silva@empresa.com</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Telefone</label>
                  <p className="text-white font-medium">+55 11 99999-9999</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Cargo</label>
                  <p className="text-white font-medium">Analista de Dados</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Departamento</label>
                  <p className="text-white font-medium">Tecnologia da Informação</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Localização</label>
                  <p className="text-white font-medium">São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Atividade Recente</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#63E3FF] to-[#7A2CFF] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium mb-1">{activity.event}</p>
                      <p className="text-white/60 text-sm">{activity.title}</p>
                      <p className="text-white/40 text-xs mt-1">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Conquistas</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border transition-all ${
                      achievement.earned
                        ? 'bg-white/5 border-white/10 hover:bg-white/10'
                        : 'bg-white/5 border-white/10 opacity-40'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FFD700] to-[#FF8C00] flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      {achievement.earned && (
                        <CheckCircle2 className="w-5 h-5 text-green-400 ml-auto" />
                      )}
                    </div>
                    <h4 className="text-white font-semibold mb-1">{achievement.name}</h4>
                    <p className="text-white/60 text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Preferences */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Preferências de Aprendizado</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Áreas de Interesse</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#63E3FF]/20 text-[#63E3FF] text-sm">Liderança</span>
                    <span className="px-3 py-1 rounded-full bg-[#7A2CFF]/20 text-[#7A2CFF] text-sm">Tecnologia</span>
                    <span className="px-3 py-1 rounded-full bg-[#E548FF]/20 text-[#E548FF] text-sm">Data Science</span>
                  </div>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Meta de Estudo Semanal</label>
                  <p className="text-white font-medium">10 horas/semana</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-2 block">Formato Preferido</label>
                  <p className="text-white font-medium">Vídeo-aulas e exercícios práticos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
