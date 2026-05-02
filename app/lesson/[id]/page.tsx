'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  Play,
  Pause,
  Volume2,
  Maximize,
  Settings,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  FileText,
  Download,
  X,
  Menu
} from "lucide-react";
import { useState } from "react";

export default function LessonPage() {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [currentTime, setCurrentTime] = useState(245); // 4:05
  const totalTime = 900; // 15:00
  
  const progress = (currentTime / totalTime) * 100;

  const lessons = [
    { id: 1, title: "Introdução à Liderança 4.0", duration: "15min", completed: true },
    { id: 2, title: "O Papel do Líder na Era Digital", duration: "20min", completed: true },
    { id: 3, title: "Estilos de Liderança Contemporâneos", duration: "25min", completed: true },
    { id: 4, title: "Autoconhecimento e Inteligência Emocional", duration: "30min", completed: false, current: true },
    { id: 5, title: "Comunicação Assertiva", duration: "20min", completed: false },
    { id: 6, title: "Técnicas de Persuasão", duration: "25min", completed: false },
  ];

  const materials = [
    { name: "Slides da Aula.pdf", size: "2.5 MB" },
    { name: "Exercícios Práticos.pdf", size: "1.2 MB" },
    { name: "Material Complementar.pdf", size: "3.8 MB" },
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Top Bar */}
      <header className="bg-black/80 backdrop-blur-xl border-b border-white/5 px-4 md:px-6 py-3 flex items-center justify-between z-50">
        <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
          <Link href="/course/1" className="text-white/60 hover:text-white transition-all flex-shrink-0">
            <X className="w-5 md:w-6 h-5 md:h-6" />
          </Link>
          <div className="min-w-0">
            <h1 className="text-white font-semibold text-sm md:text-lg truncate">Autoconhecimento e Inteligência Emocional</h1>
            <p className="text-white/60 text-xs md:text-sm truncate">Liderança Estratégica 4.0 • Módulo 1</p>
          </div>
        </div>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-white/60 hover:text-white transition-all flex-shrink-0"
        >
          <Menu className="w-5 md:w-6 h-5 md:h-6" />
        </button>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col bg-black">
          {/* Video Player */}
          <div className="flex-1 flex items-center justify-center relative group">
            {/* Video Thumbnail/Player */}
            <div className="relative w-full h-full max-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-[#050505] to-[#0a0a0a]">
              <img 
                src="https://images.unsplash.com/photo-1770240366266-57290c83cd5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwZGV2ZWxvcG1lbnQlMjBtZW50b3IlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NzQyMzQ0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Video"
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center hover:scale-110 transition-all group"
                  >
                    <Play className="w-10 h-10 text-white ml-1" />
                  </button>
                </div>
              )}

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer hover:h-2 transition-all">
                    <div 
                      className="h-full bg-gradient-to-r from-[#63E3FF] to-[#7A2CFF]"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      )}
                    </button>
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-5 h-5 text-white" />
                      <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white w-3/4"></div>
                      </div>
                    </div>
                    <span className="text-white text-sm">
                      {formatTime(currentTime)} / {formatTime(totalTime)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all">
                      <Settings className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all">
                      <Maximize className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="bg-[#050505] border-t border-white/5 px-4 md:px-8 py-4 md:py-6">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-3 md:gap-0">
              <button className="w-full md:w-auto px-4 md:px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                <ChevronLeft className="w-4 md:w-5 h-4 md:h-5" />
                <span className="hidden sm:inline">Aula Anterior</span>
                <span className="sm:hidden">Anterior</span>
              </button>
              
              <button className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#63E3FF]/20 hover:shadow-[#63E3FF]/40 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                style={{
                  background: 'linear-gradient(135deg, #63E3FF 0%, #2FA7FF 30%, #7A2CFF 65%, #E548FF 100%)',
                }}
              >
                <CheckCircle2 className="w-4 md:w-5 h-4 md:h-5" />
                <span className="hidden sm:inline">Marcar como Concluída</span>
                <span className="sm:hidden">Concluir</span>
              </button>

              <button className="w-full md:w-auto px-4 md:px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                <span className="hidden sm:inline">Próxima Aula</span>
                <span className="sm:hidden">Próxima</span>
                <ChevronRight className="w-4 md:w-5 h-4 md:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - Mobile Overlay */}
        {showSidebar && (
          <>
            {/* Mobile backdrop */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setShowSidebar(false)}
            ></div>
            
            <aside className="fixed md:relative right-0 top-0 bottom-0 w-full max-w-sm md:max-w-none md:w-96 bg-[#050505] border-l border-white/5 flex flex-col overflow-hidden z-50">
              {/* Gradient separator - smooth transition from main content */}
              <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-l from-transparent to-black/50 pointer-events-none z-10"></div>
              
              {/* Close button for mobile */}
              <button
                onClick={() => setShowSidebar(false)}
                className="md:hidden absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Tabs */}
              <div className="flex border-b border-white/10">
                <button className="flex-1 px-6 py-4 text-white bg-white/5 border-b-2 border-[#63E3FF] font-medium">
                  Conteúdo
                </button>
                <button className="flex-1 px-6 py-4 text-white/60 hover:text-white hover:bg-white/5 transition-all">
                  Materiais
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 overflow-y-auto">
                {/* Course Progress */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/60 text-sm">Progresso do Curso</span>
                    <span className="text-[#63E3FF] text-sm font-semibold">65%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#63E3FF] to-[#7A2CFF]"
                      style={{ width: '65%' }}
                    ></div>
                  </div>
                  <p className="text-white/60 text-xs mt-2">3 de 16 aulas concluídas</p>
                </div>

                {/* Lessons List */}
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-4 px-2">Módulo 1: Fundamentos da Liderança Moderna</h3>
                  <div className="space-y-1">
                    {lessons.map((lesson) => (
                      <Link key={lesson.id} href={`/lesson/${lesson.id}`}>
                        <div className={`flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${
                          lesson.current 
                            ? 'bg-gradient-to-r from-[#63E3FF]/20 to-[#7A2CFF]/20 border border-[#63E3FF]/30' 
                            : 'hover:bg-white/5'
                        }`}>
                          {lesson.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                          ) : (
                            <Circle className={`w-5 h-5 flex-shrink-0 ${lesson.current ? 'text-[#63E3FF]' : 'text-white/40'}`} />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm line-clamp-2 ${lesson.current ? 'text-white font-medium' : 'text-white/80'}`}>
                              {lesson.title}
                            </p>
                            <p className="text-white/40 text-xs mt-0.5">{lesson.duration}</p>
                          </div>
                          {lesson.current && (
                            <Play className="w-4 h-4 text-[#63E3FF] flex-shrink-0" />
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Materials Section */}
                <div className="p-6 border-t border-white/10 mt-4">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#63E3FF]" />
                    Materiais de Apoio
                  </h3>
                  <div className="space-y-3">
                    {materials.map((material, index) => (
                      <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all group cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#63E3FF] to-[#7A2CFF] flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 text-white" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-white text-sm font-medium truncate">{material.name}</p>
                              <p className="text-white/40 text-xs">{material.size}</p>
                            </div>
                          </div>
                          <Download className="w-5 h-5 text-white/60 group-hover:text-[#63E3FF] transition-all flex-shrink-0 ml-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </>
        )}
      </div>
    </div>
  );
}