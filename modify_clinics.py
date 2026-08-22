import re

with open('src/pages/Clinics.tsx', 'r') as f:
    content = f.read()

# Make sure imports and state are present
if "useState" not in content:
    content = content.replace("import { useEffect } from 'react';", "import { useEffect, useState } from 'react';")
if "AnimatePresence" not in content:
    content = content.replace("import { motion } from 'framer-motion';", "import { motion, AnimatePresence } from 'framer-motion';")

state_declaration = """
  // Uygulama sayfa yüklendiğinde global html etiketine snap özelliklerini ekler
  const [activeTab, setActiveTab] = useState('profile');
"""
if "const [activeTab, setActiveTab]" not in content:
    content = content.replace("  // Uygulama sayfa yüklendiğinde global html etiketine snap özelliklerini ekler", state_declaration)

# Extract the UIs
profile_ui_match = re.search(r'\{/\* Abstract UI: Digital Clinic Profile \*/\}(.*?)\</div>\s*</div>\s*</div>\s*</section>', content, re.DOTALL)
calendar_ui_match = re.search(r'\{/\* Abstract UI: Calendar \*/\}(.*?)\</div>\s*</div>\s*</section>', content, re.DOTALL)
records_ui_match = re.search(r'\{/\* Abstract UI: Patient Record \*/\}(.*?)\</div>\s*</div>\s*</section>', content, re.DOTALL)

if not profile_ui_match or not calendar_ui_match or not records_ui_match:
    print("Failed to find UI blocks")
    exit(1)

profile_ui_content = "{/* Abstract UI: Digital Clinic Profile */}" + profile_ui_match.group(1).rstrip()
calendar_ui_content = "{/* Abstract UI: Calendar */}" + calendar_ui_match.group(1).rstrip()
records_ui_content = "{/* Abstract UI: Patient Record */}" + records_ui_match.group(1).rstrip()

tabbed_section = f"""
        {{/* =========================================
            2. INTERACTIVE CLINIC SHOWCASE (Snap Section 2)
            ========================================= */}}
        <section className="h-[100dvh] w-full snap-start snap-always relative z-10 bg-[var(--bg-surface)] flex flex-col justify-center pt-24 pb-8 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-20px_40px_rgba(0,0,0,0.3)]">
          <div className="container mx-auto px-6 max-w-7xl flex flex-col justify-center h-full">
            <div className="text-center mb-6 transform translate-y-4 lg:translate-y-8 relative z-20">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-6 py-1 leading-tight">
                Her İhtiyacınıza <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-800 dark:from-indigo-400 dark:to-indigo-300">Özel Çözümler</span>
              </h2>
              
              {{/* Tab Navigation */}}
              <div className="inline-flex flex-wrap justify-center gap-2 bg-slate-200 dark:bg-slate-800 p-1.5 rounded-3xl">
                <button 
                  onClick={{() => setActiveTab('profile')}} 
                  className={{`px-4 py-2 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${{activeTab === 'profile' ? 'bg-white dark:bg-slate-700 text-teal-600 dark:text-teal-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}}`}}
                >
                  <Building2 size={{16}} /> Klinik Profili
                </button>
                <button 
                  onClick={{() => setActiveTab('calendar')}} 
                  className={{`px-4 py-2 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${{activeTab === 'calendar' ? 'bg-white dark:bg-slate-700 text-indigo-500 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}}`}}
                >
                  <CalendarDays size={{16}} /> Ajanda
                </button>
                <button 
                  onClick={{() => setActiveTab('records')}} 
                  className={{`px-4 py-2 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${{activeTab === 'records' ? 'bg-white dark:bg-slate-700 text-emerald-500 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}}`}}
                >
                  <FileText size={{16}} /> Hasta Dosyaları
                </button>
              </div>
            </div>

            <div className="relative w-full flex items-start justify-center flex-1">
              <AnimatePresence mode="wait">
                
                {{/* TAB 1: PROFILE */}}
                {{activeTab === 'profile' && (
                  <motion.div key="profile" initial={{{{{{opacity:0, y:10}}}}}} animate={{{{{{opacity:1, y:0}}}}}} exit={{{{{{opacity:0, y:-10}}}}}} transition={{{{{{duration:0.2}}}}}} className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-6xl mx-auto mt-6 lg:mt-8">
                    {{/* Left Column (Text) */}}
                    <div className="w-full lg:w-[45%] flex flex-col space-y-4 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mb-2">Dijital Klinik Profili</h2>
                        <p className="text-base text-[var(--text-muted)] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                          Kliniğinizi Veterito ekosistemindeki on binlerce bilinçli evcil hayvan sahibine profesyonel bir marka olarak sunun:
                        </p>
                        <ul className="flex flex-col gap-4 text-left">
                          <li className="flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-sky-200 dark:border-sky-900/50 shadow-sm">
                            <Stethoscope className="text-sky-500 flex-shrink-0 mt-1" size={{20}} />
                            <span className="text-[var(--text-main)] font-medium text-sm leading-relaxed">Uzmanlık alanlarınızı ve kadronuzu sergileyin.</span>
                          </li>
                          <li className="flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-rose-200 dark:border-rose-900/50 shadow-sm">
                            <MapPin className="text-rose-500 flex-shrink-0 mt-1" size={{20}} />
                            <span className="text-[var(--text-main)] font-medium text-sm leading-relaxed">Tek tıkla yol tarifi ve randevu oluşturma imkanı.</span>
                          </li>
                          <li className="flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-900/50 shadow-sm">
                            <Award className="text-purple-500 flex-shrink-0 mt-1" size={{20}} />
                            <span className="text-[var(--text-main)] font-medium text-sm leading-relaxed">Doktor profil kartları ile yüksek standartları gösterin.</span>
                          </li>
                        </ul>
                    </div>
                    {{/* Right Column (Abstract UI) */}}
                    <div className="w-full lg:w-[55%] flex justify-end origin-right scale-[0.85] md:scale-[0.9] lg:scale-100">
{profile_ui_content}
                    </div>
                  </motion.div>
                )}}
                
                {{/* TAB 2: CALENDAR */}}
                {{activeTab === 'calendar' && (
                  <motion.div key="calendar" initial={{{{{{opacity:0, y:10}}}}}} animate={{{{{{opacity:1, y:0}}}}}} exit={{{{{{opacity:0, y:-10}}}}}} transition={{{{{{duration:0.2}}}}}} className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-6xl mx-auto mt-6 lg:mt-8">
                    {{/* Left Column (Text) */}}
                    <div className="w-full lg:w-[45%] flex flex-col space-y-4 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mb-2">Akıllı Ajanda Yönetimi</h2>
                        <p className="text-base text-[var(--text-muted)] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                          Geleneksel ajandaların yarattığı karmaşaya son verin ve tüm hekimlerinizin programını tek ekrandan yönetin:
                        </p>
                        <ul className="flex flex-col gap-4 text-left">
                          <li className="flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/50 shadow-sm">
                            <CalendarDays className="text-indigo-500 flex-shrink-0 mt-1" size={{20}} />
                            <span className="text-[var(--text-main)] font-medium text-sm leading-relaxed">Sürükle-bırak takvimle tüm programı kolayca koordine edin.</span>
                          </li>
                          <li className="flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-teal-200 dark:border-teal-900/50 shadow-sm">
                            <LayoutDashboard className="text-teal-500 flex-shrink-0 mt-1" size={{20}} />
                            <span className="text-[var(--text-main)] font-medium text-sm leading-relaxed">İşlemleri renk kodlarıyla kategorize edip akışı görselleştirin.</span>
                          </li>
                          <li className="flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-amber-200 dark:border-amber-900/50 shadow-sm">
                            <Bell className="text-amber-500 flex-shrink-0 mt-1" size={{20}} />
                            <span className="text-[var(--text-main)] font-medium text-sm leading-relaxed">Otomatik hatırlatmalar ile "gelmeyen hasta" oranını indirin.</span>
                          </li>
                        </ul>
                    </div>
                    {{/* Right Column (Abstract UI) */}}
                    <div className="w-full lg:w-[55%] flex justify-end origin-right scale-[0.85] md:scale-[0.9] lg:scale-100">
{calendar_ui_content}
                    </div>
                  </motion.div>
                )}}

                {{/* TAB 3: RECORDS */}}
                {{activeTab === 'records' && (
                  <motion.div key="records" initial={{{{{{opacity:0, y:10}}}}}} animate={{{{{{opacity:1, y:0}}}}}} exit={{{{{{opacity:0, y:-10}}}}}} transition={{{{{{duration:0.2}}}}}} className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-6xl mx-auto mt-6 lg:mt-8">
                    {{/* Left Column (Text) */}}
                    <div className="w-full lg:w-[45%] flex flex-col space-y-4 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-[var(--text-main)] mb-2">Elektronik Hasta Dosyaları</h2>
                        <p className="text-base text-[var(--text-muted)] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                          Fiziksel karnelere ve eksik bilgi aktarımlarına veda edin, tüm verileri güvenli bulutta saklayın:
                        </p>
                        <ul className="flex flex-col gap-4 text-left">
                          <li className="flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-teal-200 dark:border-teal-900/50 shadow-sm">
                            <FileText className="text-teal-500 flex-shrink-0 mt-1" size={{20}} />
                            <span className="text-[var(--text-main)] font-medium text-sm leading-relaxed">Hastanın ırk, yaş, kilo ve alerji gibi kritik bilgilerine tek tıkla erişin.</span>
                          </li>
                          <li className="flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-emerald-200 dark:border-emerald-900/50 shadow-sm">
                            <Activity className="text-emerald-500 flex-shrink-0 mt-1" size={{20}} />
                            <span className="text-[var(--text-main)] font-medium text-sm leading-relaxed">Tüm aşıları ve operasyonları timeline üzerinde kronolojik görün.</span>
                          </li>
                          <li className="flex gap-3 items-start bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/50 shadow-sm">
                            <CheckCircle2 className="text-indigo-500 flex-shrink-0 mt-1" size={{20}} />
                            <span className="text-[var(--text-main)] font-medium text-sm leading-relaxed">Hekimler arası bilgi akışı ile daha doğru teşhisler koyun.</span>
                          </li>
                        </ul>
                    </div>
                    {{/* Right Column (Abstract UI) */}}
                    <div className="w-full lg:w-[55%] flex justify-end origin-right scale-[0.85] md:scale-[0.9] lg:scale-100">
{records_ui_content}
                    </div>
                  </motion.div>
                )}}

              </AnimatePresence>
            </div>
          </div>
        </section>
"""

# Find the start of Section 2 and start of Section 5
start_match = re.search(r'\{/\* =========================================\n\s*2\. SHOWCASE \(Dijital Klinik Profili\).*?</section>', content, re.DOTALL)
end_match = re.search(r'\{/\* =========================================\n\s*4\. PATIENT RECORDS \(Hasta Kayıt\).*?</section>', content, re.DOTALL)

if start_match and end_match:
    start_idx = content.find(start_match.group(0))
    end_idx = content.find(end_match.group(0)) + len(end_match.group(0))
    content = content[:start_idx] + tabbed_section + content[end_idx:]
else:
    print("Could not find replacement boundaries")
    exit(1)

with open('src/pages/Clinics.tsx', 'w') as f:
    f.write(content)
