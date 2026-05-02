'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    // Detecta se é dispositivo mobile baseado na largura da tela e user agent
    const isMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      const isMobileUserAgent = mobileKeywords.some(keyword => userAgent.includes(keyword));
      const isMobileWidth = window.innerWidth < 768;

      return isMobileUserAgent || isMobileWidth;
    };

    // Redireciona para a tela de login apropriada
    if (isMobile()) {
      router.replace('/login-mobile');
    } else {
      router.replace('/login-desktop');
    }
  }, [router]);

  // Tela de loading enquanto detecta e redireciona
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#63E3FF]/20 border-t-[#63E3FF] rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/60">Carregando Versia...</p>
      </div>
    </div>
  );
}
