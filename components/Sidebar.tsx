import Link from "next/link";
import { VersiaLogo } from "./VersiaLogo";
import { Home, BookOpen, Award, Settings, User } from "lucide-react";

interface SidebarProps {
  currentPage: "dashboard" | "courses" | "certificate" | "lesson";
  showMobile: boolean;
}

export function Sidebar({ currentPage, showMobile }: SidebarProps) {
  return (
    <aside className={`fixed left-0 top-0 h-full w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col z-50 transform transition-transform duration-300 lg:transform-none ${showMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      {/* Gradient transition to main content */}
      <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-[#050505]/50 pointer-events-none"></div>
      
      <VersiaLogo size="md" />
      
      <nav className="mt-12 flex-1">
        <Link 
          href="/dashboard" 
          className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
            currentPage === "dashboard" 
              ? "bg-gradient-to-r from-[#63E3FF]/20 to-[#7A2CFF]/20 text-white" 
              : "text-white/60 hover:text-white hover:bg-white/5"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link 
          href="/courses" 
          className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
            currentPage === "courses" || currentPage === "lesson"
              ? "bg-gradient-to-r from-[#63E3FF]/20 to-[#7A2CFF]/20 text-white" 
              : "text-white/60 hover:text-white hover:bg-white/5"
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="font-medium">Meus Cursos</span>
        </Link>
        <Link 
          href="/certificate" 
          className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
            currentPage === "certificate" 
              ? "bg-gradient-to-r from-[#63E3FF]/20 to-[#7A2CFF]/20 text-white" 
              : "text-white/60 hover:text-white hover:bg-white/5"
          }`}
        >
          <Award className="w-5 h-5" />
          <span className="font-medium">Certificados</span>
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
  );
}