import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-float-medium" />
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] animate-float-fast" />
        <div className="absolute top-[60%] left-[50%] w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[80px] animate-pulse-glow" />
      </div>

      <nav className="glass-strong sticky top-0 z-50 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Icon name="MessageCircle" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">TalkFlow</h1>
              <p className="text-xs text-white/50 hidden sm:block">Общайся свободно</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
              <Icon name="Info" size={16} className="mr-2" />
              О проекте
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl text-sm font-medium shadow-lg shadow-purple-500/25">
              Открыть приложение
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-white/60 hover:text-white hover:bg-white/10 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <Icon name="X" size={20} /> : <Icon name="Menu" size={20} />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10 justify-start">
                <Icon name="Info" size={16} className="mr-2" />
                О проекте
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl text-sm font-medium">
                Открыть приложение
              </Button>
            </div>
          </div>
        )}
      </nav>

      <div className="flex min-h-screen relative z-10">
        <div className="hidden lg:flex w-[72px] glass-sidebar flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer shadow-lg shadow-purple-500/30">
            <Icon name="MessageCircle" size={24} className="text-white" />
          </div>
          <div className="w-8 h-[2px] bg-white/10 rounded-full" />
          {[
            { icon: "Users", label: "Друзья" },
            { icon: "Phone", label: "Звонки" },
            { icon: "Star", label: "Избранное" },
            { icon: "Settings", label: "Настройки" },
          ].map((item, i) => (
            <div
              key={i}
              className="w-12 h-12 glass rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-blue-500/30 hover:to-purple-500/30 group"
              title={item.label}
            >
              <Icon name={item.icon} size={20} className="text-white/50 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col lg:flex-row">
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 glass-sidebar flex flex-col`}
          >
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">Чаты</h2>
              <div className="flex items-center gap-2">
                <button className="text-white/40 hover:text-white transition-colors">
                  <Icon name="Search" size={16} />
                </button>
                <button className="text-white/40 hover:text-white transition-colors">
                  <Icon name="PenSquare" size={16} />
                </button>
                <Button
                  variant="ghost"
                  className="lg:hidden text-white/60 hover:text-white hover:bg-white/10 p-1"
                  onClick={() => setMobileSidebarOpen(false)}
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-white/40 text-xs font-semibold uppercase tracking-wide">
                  <Icon name="ChevronDown" size={12} />
                  <span>Личные сообщения</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {[
                    { name: "Аня", msg: "Отлично, созвонимся!", online: true },
                    { name: "Макс", msg: "Скинул фотки", online: true },
                    { name: "Катя", msg: "Когда будешь?", online: false },
                    { name: "Дима", msg: "Голосовые работают!", online: true },
                  ].map((chat) => (
                    <div
                      key={chat.name}
                      className="flex items-center gap-2 px-2 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500/50 to-purple-500/50 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-white">{chat.name[0]}</span>
                        </div>
                        {chat.online && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#0a0a1a] rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">{chat.name}</div>
                        <div className="text-xs text-white/30 truncate">{chat.msg}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-white/40 text-xs font-semibold uppercase tracking-wide">
                  <Icon name="ChevronDown" size={12} />
                  <span>Групповые чаты</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Команда дизайна", "Друзья 💫"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-2 px-2 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                    >
                      <div className="w-8 h-8 glass rounded-full flex items-center justify-center">
                        <Icon name="Users" size={14} className="text-white/50" />
                      </div>
                      <span className="text-sm truncate">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-2 glass flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">А</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Алексей</div>
                <div className="text-emerald-400 text-xs truncate flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  В сети
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-white/10">
                  <Icon name="Mic" size={16} className="text-white/40" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-white/10">
                  <Icon name="Settings" size={16} className="text-white/40" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="h-12 glass-strong flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-white/40 hover:text-white hover:bg-white/10 p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Icon name="Menu" size={20} />
              </Button>
              <div className="w-7 h-7 bg-gradient-to-br from-blue-500/50 to-purple-500/50 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">А</span>
              </div>
              <span className="text-white font-semibold text-sm">Аня</span>
              <div className="flex items-center gap-1 ml-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-emerald-400 text-xs hidden sm:inline">в сети</span>
              </div>
              <div className="ml-auto flex items-center gap-2 sm:gap-3">
                <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Icon name="Phone" size={18} className="text-white/50 hover:text-blue-400" />
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Icon name="Video" size={18} className="text-white/50 hover:text-purple-400" />
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Icon name="Search" size={18} className="text-white/50" />
                </button>
              </div>
            </div>

            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                  <Icon name="MessageCircle" size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">TalkFlow</span>
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-1.5 py-0.5 rounded-md">БОТ</span>
                    <span className="text-white/30 text-xs hidden sm:inline">Сегодня в 12:00</span>
                  </div>
                  <div className="text-white/80 text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      <strong className="text-white">Добро пожаловать в TalkFlow!</strong> Общайся с друзьями, звони в один клик — всё просто и без лагов.
                    </p>
                    <div className="glass rounded-xl p-3 sm:p-4 border-l-4 border-blue-500">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что умеет TalkFlow:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-white/60">
                        <li className="flex items-center gap-2"><Icon name="MessageSquare" size={14} className="text-blue-400 flex-shrink-0" /> Мгновенные сообщения без задержек</li>
                        <li className="flex items-center gap-2"><Icon name="Phone" size={14} className="text-purple-400 flex-shrink-0" /> Голосовые звонки в HD-качестве</li>
                        <li className="flex items-center gap-2"><Icon name="Video" size={14} className="text-blue-400 flex-shrink-0" /> Видеозвонки с друзьями и группами</li>
                        <li className="flex items-center gap-2"><Icon name="Shield" size={14} className="text-purple-400 flex-shrink-0" /> Полная приватность — данные зашифрованы</li>
                        <li className="flex items-center gap-2"><Icon name="Smartphone" size={14} className="text-blue-400 flex-shrink-0" /> Работает на всех устройствах</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">А</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Аня</span>
                    <span className="text-white/30 text-xs hidden sm:inline">Сегодня в 12:05</span>
                  </div>
                  <div className="text-white/80 mb-3 text-sm sm:text-base">
                    Привет! Давай созвонимся сегодня? Хочу обсудить планы на выходные 🎉
                  </div>

                  <div className="glass rounded-xl overflow-hidden w-full max-w-sm">
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-blue-600 to-purple-600 relative">
                      <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#0a0a1a]/50 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                            <span className="text-lg sm:text-2xl font-bold text-white">А</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-400 border-4 border-[#0a0a1a]/50 rounded-full" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 sm:pt-6 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Аня</h3>
                        <div className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                          <span>@anya_talks</span>
                          <span className="text-emerald-400 flex items-center gap-1">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            В сети
                          </span>
                        </div>
                      </div>

                      <div className="mb-3 sm:mb-4">
                        <div className="glass rounded-lg p-2 sm:p-3">
                          <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                            <span>✨</span>
                            <span>Люблю общаться в TalkFlow!</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex border-b border-white/10 mb-3 sm:mb-4">
                        <button className="px-3 sm:px-4 py-2 text-white/40 text-xs sm:text-sm font-medium hover:text-white/70">
                          Профиль
                        </button>
                        <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-blue-500">
                          Активность
                        </button>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                          <Icon name="Phone" size={12} />
                          <span>В звонке</span>
                        </div>

                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 glass rounded-lg">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                            <Icon name="Phone" size={24} className="text-white" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-xs sm:text-sm mb-1">Голосовой звонок</div>
                            <div className="text-white/70 text-xs sm:text-sm mb-1">Групповой — 3 участника</div>
                            <div className="text-white/50 text-xs sm:text-sm mb-2">HD качество</div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                              <span className="text-emerald-400 text-xs font-medium">12:37 длительность</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">М</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Макс</span>
                    <span className="text-white/30 text-xs hidden sm:inline">Сегодня в 12:08</span>
                  </div>
                  <div className="text-white/80 text-sm sm:text-base">
                    Звонки реально без задержек, качество супер! 🔥 TalkFlow — лучший мессенджер
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 sm:p-6 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icon name="Rocket" size={24} className="text-blue-400" />
                  Начни общаться в TalkFlow
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-500/25">
                      <span className="text-white font-bold text-sm sm:text-base">1</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Скачай приложение</h3>
                    <p className="text-white/50 text-xs sm:text-sm">Доступно для iOS, Android, Windows и macOS</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-500/25">
                      <span className="text-white font-bold text-sm sm:text-base">2</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Добавь друзей</h3>
                    <p className="text-white/50 text-xs sm:text-sm">Найди друзей по никнейму или QR-коду</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-500/25">
                      <span className="text-white font-bold text-sm sm:text-base">3</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Общайся и звони</h3>
                    <p className="text-white/50 text-xs sm:text-sm">Пиши, звони, делись — всё в одном месте</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-sm font-medium shadow-lg shadow-purple-500/25">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать TalkFlow
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30 hover:text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-sm font-medium bg-transparent"
                  >
                    <Icon name="Globe" size={16} className="mr-2" />
                    Открыть в браузере
                  </Button>
                </div>
              </div>

              <div className="glass rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему TalkFlow?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: "Zap",
                      title: "Мгновенная доставка",
                      desc: "Сообщения приходят за миллисекунды",
                      color: "text-blue-400",
                    },
                    {
                      icon: "PhoneCall",
                      title: "HD-звонки",
                      desc: "Кристально чистый звук и видео",
                      color: "text-purple-400",
                    },
                    {
                      icon: "Clock",
                      title: "Работает без лагов",
                      desc: "Оптимизирован для любых устройств",
                      color: "text-blue-400",
                    },
                    {
                      icon: "Shield",
                      title: "Полная приватность",
                      desc: "Сквозное шифрование по умолчанию",
                      color: "text-purple-400",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className={`${feature.color} mt-0.5`}>
                        <Icon name={feature.icon} size={20} />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-white/50 text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-4">
              <div className="glass rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                <button className="text-white/30 hover:text-white/60 transition-colors">
                  <Icon name="Plus" size={20} />
                </button>
                <div className="text-white/30 text-xs sm:text-sm flex-1">Написать сообщение...</div>
                <div className="flex items-center gap-2">
                  <button className="text-white/30 hover:text-white/60 transition-colors">
                    <Icon name="Smile" size={18} />
                  </button>
                  <button className="text-white/30 hover:text-white/60 transition-colors">
                    <Icon name="Mic" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:block w-60 glass-sidebar p-4">
            <div className="mb-4">
              <h3 className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-2">В сети — 3</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Аня",
                    status: "В звонке",
                    avatar: "А",
                    color: "from-pink-500 to-purple-500",
                    statusIcon: "Phone",
                  },
                  {
                    name: "Макс",
                    status: "Печатает...",
                    avatar: "М",
                    color: "from-green-500 to-blue-500",
                    statusIcon: "MessageSquare",
                  },
                  {
                    name: "Катя",
                    status: "Слушает музыку",
                    avatar: "К",
                    color: "from-blue-500 to-purple-500",
                    statusIcon: "Music",
                  },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}
                    >
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#0a0a1a] rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-white/40 text-xs truncate flex items-center gap-1">
                        <Icon name={user.statusIcon} size={10} />
                        {user.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;