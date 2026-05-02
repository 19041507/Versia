'use client';

import Link from 'next/link';
import { VersiaLoginLogo } from '../../components/VersiaLoginLogo';

export default function LoginDesktopPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex">

      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#63E3FF]/20 via-[#7A2CFF]/20 to-[#E548FF]/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(99, 227, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(229, 72, 255, 0.15) 0%, transparent 50%)',
        }}></div>

        {/* Gradient separator - smooth transition to right side */}
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-[#050505] z-10"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center p-16 w-full">
          <div>
            <VersiaLoginLogo size="lg" />

            <div className="mt-12 max-w-md">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Transforme o aprendizado da sua empresa
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Plataforma com experiência imersiva e foco em retenção de conhecimento.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-12 flex justify-center">
            <VersiaLoginLogo size="md" />
          </div>

          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white mb-3">Bem-vindo de volta</h2>
            <p className="text-white/60">Entre na sua conta para continuar aprendendo</p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#63E3FF]/50 focus:border-[#63E3FF] transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                Email corporativo
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu.email@empresa.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#63E3FF]/50 focus:border-[#63E3FF] transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#63E3FF]/50 focus:border-[#63E3FF] transition-all"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 rounded bg-white/5 border-white/20 text-[#63E3FF] focus:ring-[#63E3FF]/50"
              />
              <label htmlFor="terms" className="text-sm text-white/60">
                Aceito os{" "}
                <a href="#" className="text-[#63E3FF] hover:underline">
                  termos de uso
                </a>{" "}
                e{" "}
                <a href="#" className="text-[#63E3FF] hover:underline">
                  política de privacidade
                </a>
              </label>
            </div>

            <div className="space-y-3 pt-2">
              <Link href="/dashboard">
                <button
                  type="button"
                  className="w-full px-6 py-4 rounded-xl font-semibold text-white transition-all shadow-lg shadow-[#63E3FF]/20 hover:shadow-[#63E3FF]/40 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, #63E3FF 0%, #2FA7FF 30%, #7A2CFF 65%, #E548FF 100%)',
                  }}
                >
                  Entrar na plataforma
                </button>
              </Link>

            </div>
          </form>

          <div className="mt-8 text-center">
            <a href="#" className="text-sm text-[#63E3FF] hover:underline">
              Esqueceu sua senha?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
