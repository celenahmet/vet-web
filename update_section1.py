import re

with open('src/pages/Features.tsx', 'r') as f:
    content = f.read()

# We need to replace the section starting at `{/* =========================================`
# and ending at `</section>` around line 835.

pattern = re.compile(r'\{\/\*\s*=========================================\s*2\. SAĞLIK GEÇMİŞİ \(Bento Grid\).*?<\/section>', re.DOTALL)

replacement = """{/* =========================================
            1. BÖLÜM: Merkezi Dashboard
            ========================================= */}
      <section className="min-h-[100dvh] h-auto snap-start py-24 flex flex-col items-center justify-center bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          
          {/* Üst Kısım: Başlık ve Açıklama */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-emerald-600 dark:text-emerald-400 text-sm font-bold shadow-sm border border-slate-100 dark:border-transparent">
              <Activity size={16} /> {'Sağlık Yönetimi'}
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">{t('feat_new_s1_title')}</h2>
            <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
              {t('feat_new_s1_desc')}
            </p>
          </div>

          {/* Orta Kısım: Yatay Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-white dark:bg-zinc-900/50 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-zinc-800 p-8 mb-16 flex flex-col md:flex-row items-center gap-8"
          >
            {/* Profil Alanı */}
            <div className="flex flex-col items-center md:items-start md:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 dark:border-zinc-800 pb-8 md:pb-0 md:pr-8">
              <div className="w-24 h-24 rounded-3xl overflow-hidden mb-4 shadow-sm border-2 border-emerald-50 dark:border-zinc-800">
                <img src="/duman.jpg" alt="Pet Profile" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Duman</h3>
              <p className="text-slate-500 text-sm font-medium mt-1">British Shorthair • 2 Yaş</p>
              <div className="mt-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
                <ShieldCheck size={14} /> Tüm Aşıları Tam
              </div>
            </div>

            {/* Sağlık Özeti (Grafik/Bar) */}
            <div className="flex-1 w-full space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Kilo Takibi</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">4.2 kg</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-zinc-800/80 rounded-full h-3">
                  <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Aktivite Seviyesi</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Yüksek</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-zinc-800/80 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              {/* Mikroçip No */}
              <div className="mt-4 p-4 bg-slate-50 dark:bg-zinc-800/40 rounded-xl flex items-center justify-between border border-slate-100 dark:border-zinc-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-700 flex items-center justify-center text-slate-500 shadow-sm">
                    <Eye size={14} />
                  </div>
                  <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Mikroçip Numarası</span>
                </div>
                <span className="font-mono text-sm font-bold text-slate-800 dark:text-white tracking-widest">9810 **** **** 234</span>
              </div>
            </div>
          </motion.div>

          {/* Alt Kısım: 3 Madde Vurgusu */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Activity size={24} />, text: t('feat_new_s1_li1'), color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
              { icon: <Heart size={24} />, text: t('feat_new_s1_li2'), color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
              { icon: <ShieldCheck size={24} />, text: t('feat_new_s1_li3'), color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-900/50 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 hover:-translate-y-1 transition-transform"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-[var(--text-main)] text-[15px] leading-tight">{item.text}</h4>
              </motion.div>
            ))}
          </div>

        </div>
      </section>"""

new_content = re.sub(pattern, replacement, content)

if new_content == content:
    print("No changes made. Regex might not have matched.")
else:
    with open('src/pages/Features.tsx', 'w') as f:
        f.write(new_content)
    print("Section 1 successfully updated!")
