import re

with open('src/pages/Clinics.tsx', 'r') as f:
    content = f.read()

# Remove state and imports
content = content.replace("import { useEffect, useState } from 'react';", "import { useEffect } from 'react';")
content = content.replace("import { motion, AnimatePresence } from 'framer-motion';", "import { motion } from 'framer-motion';")
content = re.sub(r'  // Uygulama sayfa yüklendiğinde global html etiketine snap özelliklerini ekler\n\s*const \[activeTab, setActiveTab\] = useState\([^)]+\);\n', '  // Uygulama sayfa yüklendiğinde global html etiketine snap özelliklerini ekler\n', content)

# Extract UI components from the current tabbed section
profile_ui_match = re.search(r'\{/\* Abstract UI: Digital Clinic Profile \*/\}(.*?)\</div>\s*</div>\s*</div>\s*</div>', content, re.DOTALL)
calendar_ui_match = re.search(r'\{/\* Abstract UI: Calendar \*/\}(.*?)\</div>\s*</div>\s*</div>\s*</div>', content, re.DOTALL)
records_ui_match = re.search(r'\{/\* Abstract UI: Patient Record \*/\}(.*?)\</div>\s*</div>\s*</div>\s*</div>', content, re.DOTALL)

profile_ui_content = "{/* Abstract UI: Digital Clinic Profile */}" + profile_ui_match.group(1).rstrip() + "\n              </div>\n            </div>\n          </div>\n        </div>"
calendar_ui_content = "{/* Abstract UI: Calendar */}" + calendar_ui_match.group(1).rstrip() + "\n              </div>\n            </div>\n          </div>\n        </div>"
records_ui_content = "{/* Abstract UI: Patient Record */}" + records_ui_match.group(1).rstrip() + "\n              </div>\n            </div>\n          </div>\n        </div>"


# We will manually create the 3 sections based on the content we had before, 
# but utilizing the colored borders that are currently in the text.
new_sections = f"""
        {{/* =========================================
            2. SHOWCASE (Dijital Klinik Profili)
            ========================================= */}}
        <section className="min-h-[100dvh] w-full snap-start snap-always relative z-10 bg-[var(--bg-main)] flex flex-col justify-center pt-16 pb-8 border-b border-[var(--border-color)]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
              {{/* Left Text */}}
              <motion.div initial={{{{{{ opacity: 0, x: -30 }}}}}} whileInView={{{{{{ opacity: 1, x: 0 }}}}}} viewport={{{{{{ once: true }}}}}} transition={{{{{{ duration: 0.5 }}}}}} className="w-full lg:w-[45%] flex flex-col space-y-6 text-center lg:text-left mt-8 lg:mt-0">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-2">Dijital Klinik Profili</h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                  Kliniğinizi Veterito ekosistemindeki on binlerce bilinçli evcil hayvan sahibine profesyonel bir marka olarak sunun:
                </p>
                <ul className="flex flex-col gap-5 text-left">
                  <li className="flex gap-4 items-start bg-white dark:bg-slate-800 p-5 rounded-2xl border-2 border-sky-200 dark:border-sky-900/50 shadow-sm transition-transform hover:-translate-y-1">
                    <Stethoscope className="text-sky-500 flex-shrink-0 mt-1" size={{24}} />
                    <span className="text-[var(--text-main)] font-semibold text-base leading-relaxed">Uzmanlık alanlarınızı ve kadronuzu sergileyin.</span>
                  </li>
                  <li className="flex gap-4 items-start bg-white dark:bg-slate-800 p-5 rounded-2xl border-2 border-rose-200 dark:border-rose-900/50 shadow-sm transition-transform hover:-translate-y-1">
                    <MapPin className="text-rose-500 flex-shrink-0 mt-1" size={{24}} />
                    <span className="text-[var(--text-main)] font-semibold text-base leading-relaxed">Tek tıkla yol tarifi ve randevu oluşturma imkanı.</span>
                  </li>
                  <li className="flex gap-4 items-start bg-white dark:bg-slate-800 p-5 rounded-2xl border-2 border-purple-200 dark:border-purple-900/50 shadow-sm transition-transform hover:-translate-y-1">
                    <Award className="text-purple-500 flex-shrink-0 mt-1" size={{24}} />
                    <span className="text-[var(--text-main)] font-semibold text-base leading-relaxed">Doktor profil kartları ile yüksek standartları gösterin.</span>
                  </li>
                </ul>
              </motion.div>
              
              {{/* Right UI */}}
              <motion.div initial={{{{{{ opacity: 0, x: 30 }}}}}} whileInView={{{{{{ opacity: 1, x: 0 }}}}}} viewport={{{{{{ once: true }}}}}} transition={{{{{{ duration: 0.5, delay: 0.2 }}}}}} className="w-full lg:w-[55%] flex justify-end origin-right scale-[0.85] md:scale-[0.9] lg:scale-100">
{profile_ui_content}
              </motion.div>
            </div>
          </div>
        </section>

        {{/* =========================================
            3. SCHEDULING (Akıllı Ajanda)
            ========================================= */}}
        <section className="min-h-[100dvh] w-full snap-start snap-always relative z-10 bg-[var(--bg-surface)] flex flex-col justify-center pt-16 pb-8 border-b border-[var(--border-color)]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-8">
              {{/* Left Text (Reversed to Right) */}}
              <motion.div initial={{{{{{ opacity: 0, x: 30 }}}}}} whileInView={{{{{{ opacity: 1, x: 0 }}}}}} viewport={{{{{{ once: true }}}}}} transition={{{{{{ duration: 0.5 }}}}}} className="w-full lg:w-[45%] flex flex-col space-y-6 text-center lg:text-left mt-8 lg:mt-0 lg:pl-12">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-2">Akıllı Ajanda Yönetimi</h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                  Geleneksel ajandaların yarattığı karmaşaya son verin ve tüm hekimlerinizin programını tek ekrandan yönetin:
                </p>
                <ul className="flex flex-col gap-5 text-left">
                  <li className="flex gap-4 items-start bg-white dark:bg-slate-800 p-5 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/50 shadow-sm transition-transform hover:-translate-y-1">
                    <CalendarDays className="text-indigo-500 flex-shrink-0 mt-1" size={{24}} />
                    <span className="text-[var(--text-main)] font-semibold text-base leading-relaxed">Sürükle-bırak takvimle tüm programı kolayca koordine edin.</span>
                  </li>
                  <li className="flex gap-4 items-start bg-white dark:bg-slate-800 p-5 rounded-2xl border-2 border-teal-200 dark:border-teal-900/50 shadow-sm transition-transform hover:-translate-y-1">
                    <LayoutDashboard className="text-teal-500 flex-shrink-0 mt-1" size={{24}} />
                    <span className="text-[var(--text-main)] font-semibold text-base leading-relaxed">İşlemleri renk kodlarıyla kategorize edip akışı görselleştirin.</span>
                  </li>
                  <li className="flex gap-4 items-start bg-white dark:bg-slate-800 p-5 rounded-2xl border-2 border-amber-200 dark:border-amber-900/50 shadow-sm transition-transform hover:-translate-y-1">
                    <Bell className="text-amber-500 flex-shrink-0 mt-1" size={{24}} />
                    <span className="text-[var(--text-main)] font-semibold text-base leading-relaxed">Otomatik hatırlatmalar ile "gelmeyen hasta" oranını indirin.</span>
                  </li>
                </ul>
              </motion.div>
              
              {{/* Right UI (Reversed to Left) */}}
              <motion.div initial={{{{{{ opacity: 0, x: -30 }}}}}} whileInView={{{{{{ opacity: 1, x: 0 }}}}}} viewport={{{{{{ once: true }}}}}} transition={{{{{{ duration: 0.5, delay: 0.2 }}}}}} className="w-full lg:w-[55%] flex justify-start origin-left scale-[0.85] md:scale-[0.9] lg:scale-100">
{calendar_ui_content}
              </motion.div>
            </div>
          </div>
        </section>

        {{/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)
            ========================================= */}}
        <section className="min-h-[100dvh] w-full snap-start snap-always relative z-10 bg-[var(--bg-main)] flex flex-col justify-center pt-16 pb-8 border-b border-[var(--border-color)]">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
              {{/* Left Text */}}
              <motion.div initial={{{{{{ opacity: 0, x: -30 }}}}}} whileInView={{{{{{ opacity: 1, x: 0 }}}}}} viewport={{{{{{ once: true }}}}}} transition={{{{{{ duration: 0.5 }}}}}} className="w-full lg:w-[45%] flex flex-col space-y-6 text-center lg:text-left mt-8 lg:mt-0">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] mb-2">Elektronik Hasta Dosyaları</h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                  Fiziksel karnelere ve eksik bilgi aktarımlarına veda edin, tüm verileri güvenli bulutta saklayın:
                </p>
                <ul className="flex flex-col gap-5 text-left">
                  <li className="flex gap-4 items-start bg-white dark:bg-slate-800 p-5 rounded-2xl border-2 border-teal-200 dark:border-teal-900/50 shadow-sm transition-transform hover:-translate-y-1">
                    <FileText className="text-teal-500 flex-shrink-0 mt-1" size={{24}} />
                    <span className="text-[var(--text-main)] font-semibold text-base leading-relaxed">Hastanın ırk, yaş, kilo ve alerji gibi kritik bilgilerine tek tıkla erişin.</span>
                  </li>
                  <li className="flex gap-4 items-start bg-white dark:bg-slate-800 p-5 rounded-2xl border-2 border-emerald-200 dark:border-emerald-900/50 shadow-sm transition-transform hover:-translate-y-1">
                    <Activity className="text-emerald-500 flex-shrink-0 mt-1" size={{24}} />
                    <span className="text-[var(--text-main)] font-semibold text-base leading-relaxed">Tüm aşıları ve operasyonları timeline üzerinde kronolojik görün.</span>
                  </li>
                  <li className="flex gap-4 items-start bg-white dark:bg-slate-800 p-5 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/50 shadow-sm transition-transform hover:-translate-y-1">
                    <CheckCircle2 className="text-indigo-500 flex-shrink-0 mt-1" size={{24}} />
                    <span className="text-[var(--text-main)] font-semibold text-base leading-relaxed">Hekimler arası bilgi akışı ile daha doğru teşhisler koyun.</span>
                  </li>
                </ul>
              </motion.div>
              
              {{/* Right UI */}}
              <motion.div initial={{{{{{ opacity: 0, x: 30 }}}}}} whileInView={{{{{{ opacity: 1, x: 0 }}}}}} viewport={{{{{{ once: true }}}}}} transition={{{{{{ duration: 0.5, delay: 0.2 }}}}}} className="w-full lg:w-[55%] flex justify-end origin-right scale-[0.85] md:scale-[0.9] lg:scale-100">
{records_ui_content}
              </motion.div>
            </div>
          </div>
        </section>
"""

# Replace the tabbed section with the new sections
tabbed_match = re.search(r'\{\/\* =========================================\n\s*2\. INTERACTIVE CLINIC SHOWCASE \(Snap Section 2\).*?</section>', content, re.DOTALL)
if tabbed_match:
    content = content.replace(tabbed_match.group(0), new_sections)
else:
    print("Could not find tabbed section")
    exit(1)

with open('src/pages/Clinics.tsx', 'w') as f:
    f.write(content)
