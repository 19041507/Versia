import Link from "next/link";
import { VersiaLoginLogo } from "../../components/VersiaLoginLogo";

export default function LoginMobilePage() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col overflow-hidden">

      {/* Header with Branding */}
      <div className="relative overflow-hidden px-6 pt-16 pb-4">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#63E3FF]/20 via-[#7A2CFF]/20 to-[#E548FF]/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(99, 227, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(229, 72, 255, 0.2) 0%, transparent 50%)',
        }}></div>

        {/* Gradient separator - smooth transition to form section */}
        <div className="absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-[#050505] z-10"></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <VersiaLoginLogo size="md" />
          </div>

          <div className="text-center max-w-sm mx-auto">
            <h1 className="text-xl font-bold text-white leading-tight">
              Transforme o aprendizado
            </h1>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-2 overflow-y-auto">
        <div className="max-w-sm mx-auto">
          <div className="mb-3">
            <h2 className="text-xl font-bold text-white mb-1">Bem-vindo de volta</h2>
            <p className="text-white/60 text-sm">Entre na sua conta para continuar</p>
          </div>

          <form className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-white/80 mb-1.5">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#63E3FF]/50 focus:border-[#63E3FF] transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-white/80 mb-1.5">
                Email corporativo
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu.email@empresa.com"
                className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#63E3FF]/50 focus:border-[#63E3FF] transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-medium text-white/80 mb-1.5">
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#63E3FF]/50 focus:border-[#63E3FF] transition-all"
              />
            </div>

            <div className="flex items-start gap-2 py-1">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 mt-0.5 rounded bg-white/5 border-white/20 text-[#63E3FF] focus:ring-[#63E3FF]/50"
              />
              <label htmlFor="terms" className="text-xs text-white/60 leading-tight">
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

            <div className="space-y-2.5 pt-2">
              <Link href="/dashboard">
                <button
                  type="button"
                  className="w-full px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all shadow-lg shadow-[#63E3FF]/20 hover:shadow-[#63E3FF]/40 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #63E3FF 0%, #2FA7FF 30%, #7A2CFF 65%, #E548FF 100%)',
                  }}
                >
                  Entrar na plataforma
                </button>
              </Link>

            </div>
          </form>

          <div className="mt-4 mb-4 text-center">
            <a href="#" className="text-sm text-[#63E3FF] hover:underline">
              Esqueceu sua senha?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}