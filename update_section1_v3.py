import re

with open('src/pages/Features.tsx', 'r') as f:
    content = f.read()

pattern = re.compile(r'\{\/\*\s*=========================================\s*1\. BÖLÜM: Sol Metin, Sağ Dashboard.*?<\/section>', re.DOTALL)

replacement = """{/* =========================================
            1. BÖLÜM: Sol Metin, Sağ Dashboard
            ========================================= */}
      <section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start py-20 lg:py-0 flex items-center bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Sol Kısım: Metinler ve Maddeler */}
            <div className="flex-1 space-y-8 w-full">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                  <Activity size={16} /> {'Sağlık Yönetimi'}
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight tracking-tight">
                  {t('feat_new_s1_title')}
                </h2>
                <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                  {t('feat_new_s1_desc')}
                </p>
              </div>

              <div className="space-y-6 pt-4">
                {/* Madde 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0">
                    <Activity size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s1_li1')}
                  </div>
                </div>
                {/* Madde 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0">
                    <Heart size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s1_li2')}
                  </div>
                </div>
                {/* Madde 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s1_li3')}
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Kısım: Kare Dashboard (Masonry Layout) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-[60%] shrink-0"
            >
              <div className="bg-[#FAF9F6] dark:bg-zinc-900/50 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/60 dark:border-zinc-800 flex flex-col md:flex-row gap-5 relative overflow-hidden">
                
                {/* Sütun 1: Sağlık Özeti + Dijital Sağlık Kartı */}
                <div className="flex-1 flex flex-col gap-5">
                  
                  {/* 1. Sağlık Özeti */}
                  <div className="bg-white dark:bg-zinc-800/80 rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">
                    <h3 className="font-bold text-slate-800 dark:text-white text-[15px] mb-4">Sağlık Özeti</h3>
                    <div className="grid grid-cols-3 gap-2 divide-x divide-slate-100 dark:divide-zinc-700 mb-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-emerald-600 dark:text-emerald-400 mb-1"><Activity size={18} strokeWidth={2.5} /></div>
                        <div className="font-bold text-slate-800 dark:text-white text-[15px]">2.3 kg</div>
                        <div className="text-[10px] text-slate-400 font-medium mt-0.5">Kilo</div>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-rose-500 mb-1"><AlertTriangle size={18} strokeWidth={2.5} /></div>
                        <div className="font-bold text-rose-500 text-[15px]">1</div>
                        <div className="text-[10px] text-slate-400 font-medium mt-0.5">Geciken</div>
                      </div>
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="text-emerald-600 dark:text-emerald-400 mb-1"><CalendarDays size={18} strokeWidth={2.5} /></div>
                        <div className="font-bold text-slate-800 dark:text-white text-[13px] leading-tight mt-0.5">07.09<br/>2026</div>
                        <div className="text-[10px] text-slate-400 font-medium mt-1">Sonraki</div>
                      </div>
                    </div>
                    <div className="bg-slate-50 dark:bg-zinc-900/50 rounded-xl p-3 flex items-center gap-2">
                       <ShieldCheck size={16} className="text-slate-400" />
                       <span className="text-[12px] font-medium text-slate-600 dark:text-slate-300">Henüz aşı kaydı yok</span>
                    </div>
                  </div>

                  {/* 2. Dijital Sağlık Kartı */}
                  <div className="bg-white dark:bg-zinc-800/80 rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50">
                    <h3 className="font-bold text-slate-800 dark:text-white text-[15px] mb-3">Dijital Sağlık Kartı</h3>
                    <div className="flex flex-col divide-y divide-slate-50 dark:divide-zinc-700/50 text-[12px]">
                      <div className="flex justify-between items-center py-2"><span className="text-slate-500">Tür</span><span className="font-bold text-slate-800 dark:text-white">Kedi</span></div>
                      <div className="flex justify-between items-center py-2"><span className="text-slate-500">Irk</span><span className="font-bold text-slate-800 dark:text-white">Tekir</span></div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-500">Yaş</span>
                        <div className="text-right leading-tight"><div className="font-bold text-slate-800 dark:text-white">8 aylık</div><div className="text-[9px] text-slate-400">12.12.2025</div></div>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-500">Kilo</span>
                        <div className="text-right leading-tight"><div className="font-bold text-slate-800 dark:text-white">2.3 kg</div><div className="text-[9px] text-slate-400">Son ölçüm: 25.08.2026</div></div>
                      </div>
                      <div className="flex justify-between items-center py-2"><span className="text-slate-500">Kısırlaştırma</span><span className="font-bold text-slate-800 dark:text-white">Kısırlaştırıldı</span></div>
                      <div className="flex justify-between items-center pt-2"><span className="text-slate-500">Mikroçip No</span><span className="font-bold text-slate-800 dark:text-white">-</span></div>
                    </div>
                  </div>

                </div>

                {/* Sütun 2: Acil Sağlık Kartı (Tam Boy) */}
                <div className="flex-1 flex flex-col gap-5">
                  <div className="bg-white dark:bg-zinc-800/80 rounded-[1.5rem] p-5 shadow-sm border border-slate-100 dark:border-zinc-700/50 h-full flex flex-col gap-3.5">
                    
                    {/* Profil */}
                    <h3 className="font-bold text-slate-800 dark:text-white text-[15px] flex items-center gap-2">Acil Sağlık Kartı</h3>
                    <div className="flex items-center gap-3 bg-slate-50 dark:bg-zinc-900/50 p-2.5 rounded-xl border border-slate-100 dark:border-zinc-700/50">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                        <img src="/duman.jpg" alt="Pet Profile" className="w-full h-full object-cover" />
                      </div>
                      <div className="leading-tight">
                        <h4 className="text-[15px] font-bold text-slate-800 dark:text-white mb-0.5">Procyon</h4>
                        <p className="text-[10px] text-slate-500 font-medium">Kedi • 8 aylık • Dişi<br/>2.3 kg • 25.08.2026</p>
                      </div>
                    </div>
                    
                    {/* Alerjiler */}
                    <div className="border border-rose-200 dark:border-rose-900/30 bg-rose-50/50 dark:bg-rose-900/10 rounded-xl p-3 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-400"></div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <AlertTriangle size={14} className="text-rose-500" />
                        <span className="font-bold text-slate-800 dark:text-white text-[12px]">Alerjiler ve İlaç Reaksiyonları</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
                          <div className="w-1 h-1 rounded-full bg-rose-500"></div>
                          Tavuk protein alerjisi
                        </div>
                        <span className="text-[9px] font-bold text-rose-500">Orta</span>
                      </div>
                    </div>

                    {/* Kronik Durumlar */}
                    <div className="border border-slate-100 dark:border-zinc-700/50 rounded-xl p-2.5">
                       <div className="flex items-center gap-1.5 mb-0.5">
                         <Activity size={14} className="text-slate-400" />
                         <span className="font-bold text-slate-800 dark:text-white text-[12px]">Kronik Durumlar</span>
                       </div>
                       <span className="text-[10px] text-slate-500 pl-5">Kayıt girilmemiş</span>
                    </div>
                    
                    {/* Aşı */}
                    <div className="border border-slate-100 dark:border-zinc-700/50 rounded-xl p-2.5 flex items-center gap-2">
                       <ShieldCheck size={14} className="text-slate-400" />
                       <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300">Aşı kaydı girilmemiş</span>
                    </div>

                    {/* Sahibi */}
                    <div className="border border-slate-100 dark:border-zinc-700/50 rounded-xl p-2.5">
                       <div className="font-bold text-slate-800 dark:text-white text-[12px] mb-0.5">Sahibi</div>
                       <div className="text-[11px] text-slate-600 dark:text-slate-300">Rümeysa Büyük</div>
                       <div className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">+90 5** *** ** **</div>
                    </div>

                    {/* Mikroçip No */}
                    <div className="border border-slate-100 dark:border-zinc-700/50 rounded-xl p-3 mt-auto bg-white dark:bg-zinc-800">
                      <h4 className="font-bold text-slate-800 dark:text-white text-[12px] mb-1">Mikroçip No</h4>
                      <div className="font-mono text-[14px] font-bold text-slate-800 dark:text-white tracking-widest mb-1">
                        9810 **** **** 234
                      </div>
                      <p className="text-[8px] text-slate-400 font-medium">
                        Numara varsayılan olarak gizli; göstermek için dokun.
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>"""

new_content = re.sub(pattern, replacement, content)

if new_content == content:
    print("No changes made. Regex might not have matched.")
else:
    with open('src/pages/Features.tsx', 'w') as f:
        f.write(new_content)
    print("Section 1 successfully updated with the Masonry layout!")
