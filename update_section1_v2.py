import re

with open('src/pages/Features.tsx', 'r') as f:
    content = f.read()

# Pattern to find the current Section 1 (Merkezi Dashboard or similar)
# We know it starts with `{/* =========================================` and `1. BÖLÜM: Merkezi Dashboard`
# and ends with `</section>` around line 835.

pattern = re.compile(r'\{\/\*\s*=========================================\s*1\. BÖLÜM: Merkezi Dashboard.*?<\/section>', re.DOTALL)

replacement = """{/* =========================================
            1. BÖLÜM: Sol Metin, Sağ Dashboard
            ========================================= */}
      <section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start py-20 lg:py-0 flex items-center bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
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

            {/* Sağ Kısım: Kare Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full max-w-lg lg:max-w-xl shrink-0"
            >
              <div className="bg-[#FAF9F6] dark:bg-zinc-900 rounded-[2.5rem] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-200/60 dark:border-zinc-800 flex flex-col gap-6 relative overflow-hidden">
                
                {/* 1. Kısım: Hızlı Sağlık Özeti (Grafik) */}
                <div className="w-full h-40 flex items-end justify-between gap-3 px-2">
                  {[
                    { h: 30, label: '+0.2', isDrop: false, month: 'Şub' },
                    { h: 55, label: '+0.5', isDrop: false, month: 'Mar' },
                    { h: 25, label: '-0.2', isDrop: true, month: 'Nis' },
                    { h: 85, label: '+0.8', isDrop: false, month: 'May' },
                    { h: 75, label: '+0.7', isDrop: false, month: 'Haz' },
                    { h: 55, label: '+0.5', isDrop: false, month: 'Tem' },
                    { h: 45, label: '+0.4', isDrop: false, isLatest: true, month: 'Ağu' },
                  ].map((item, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                      <div className={`text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap mb-2 ${item.isDrop ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'} ${item.isLatest ? 'bg-emerald-500 text-white' : ''}`}>
                        {item.label}
                      </div>
                      <div className="w-full flex-1 flex items-end px-1 sm:px-2">
                        <div 
                          className={`w-full rounded-t-xl ${item.isLatest ? 'bg-emerald-500' : (item.isDrop ? 'bg-rose-200' : 'bg-emerald-100/80')}`}
                          style={{ height: `${item.h}%` }}
                        ></div>
                      </div>
                      <div className="text-[11px] font-bold text-slate-400 mt-3">
                        {item.month}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 2. Kısım: Acil Sağlık Kartı */}
                <div className="bg-white dark:bg-zinc-800 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700">
                  {/* Profil */}
                  <div className="flex items-center gap-5 mb-5">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                      <img src="/duman.jpg" alt="Pet Profile" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Procyon</h3>
                      <p className="text-[13px] text-slate-500 font-medium leading-relaxed">Kedi • 8 aylık • Dişi<br/>2.3 kg • 25.08.2026</p>
                    </div>
                  </div>
                  
                  {/* Alerjiler */}
                  <div className="border border-rose-200 dark:border-rose-900/30 bg-rose-50/50 dark:bg-rose-900/10 rounded-2xl p-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-400"></div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle size={18} className="text-rose-500" />
                      <span className="font-bold text-slate-800 dark:text-white text-[15px]">Alerjiler ve İlaç Reaksiyonları</span>
                    </div>
                    <div className="flex items-center justify-between text-[13px]">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                        Tavuk protein alerjisi
                      </div>
                      <span className="text-xs font-bold text-rose-500">Orta</span>
                    </div>
                  </div>
                </div>

                {/* 3. Kısım: Mikroçip Alanı */}
                <div className="bg-white dark:bg-zinc-800 rounded-3xl p-5 shadow-sm border border-slate-100 dark:border-zinc-700">
                  <h4 className="font-bold text-slate-800 dark:text-white text-[15px] mb-2">Mikroçip No</h4>
                  <div className="font-mono text-lg font-bold text-slate-800 dark:text-white tracking-widest mb-1.5">
                    9810 **** **** 234
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Numara varsayılan olarak gizli; göstermek için dokun.
                  </p>
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
    print("Section 1 successfully updated to new Left-Right layout!")
