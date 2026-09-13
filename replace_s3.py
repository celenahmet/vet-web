import re

with open('src/pages/Features.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# First let's extract the block to replace.
# The block starts at:
# <section className="min-h-[100dvh] h-auto lg:min-h-[100dvh] lg:h-auto snap-start py-20 snap-always flex items-center bg-[var(--bg-main)] border-b border-[var(--border-color)]">
# And ends at the exact line before Section 4:
# <section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start py-20 lg:py-0 snap-always flex items-center justify-center bg-[var(--bg-main)] border-b border-[var(--border-color)] overflow-hidden">

section_start_marker = '<section className="min-h-[100dvh] h-auto lg:min-h-[100dvh] lg:h-auto snap-start py-20 snap-always flex items-center bg-[var(--bg-main)] border-b border-[var(--border-color)]">'
section_end_marker = '<section className="min-h-[100dvh] h-auto lg:h-[100dvh] snap-start py-20 lg:py-0 snap-always flex items-center justify-center bg-[var(--bg-main)] border-b border-[var(--border-color)] overflow-hidden">'

start_idx = content.find(section_start_marker)
end_idx = content.find(section_end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find section boundaries")
    exit(1)

old_section = content[start_idx:end_idx]

new_section = """<section className="min-h-[100dvh] h-auto lg:min-h-[100dvh] lg:h-auto snap-start py-20 snap-always flex items-center bg-[var(--bg-main)] border-b border-[var(--border-color)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: Text */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-transparent text-indigo-600 dark:text-indigo-400 text-sm font-bold shadow-md shadow-slate-200/50 dark:shadow-black/20 border border-slate-100/50 dark:border-transparent">
                <Search size={16} /> {t('feat_new_s3_title')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] leading-tight">{t('feat_new_s3_title')}</h2>
              <p className="text-lg text-[var(--text-muted)] font-medium leading-relaxed">
                {t('feat_new_s3_desc')}
              </p>
              
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0">
                    <Search size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s3_li1')}
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s3_li2')}
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center shrink-0">
                    <Send size={24} />
                  </div>
                  <div className="mt-3 text-base font-bold text-slate-800 dark:text-white">
                    {t('feat_new_s3_li3')}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full flex justify-center lg:justify-end relative"
            >
              <div className="w-full max-w-lg relative h-[500px] lg:h-[600px] flex items-center justify-center">

                {/* Main Card: Clinic List */}
                <div className="absolute right-0 top-0 w-full lg:w-[90%] max-w-[380px] bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2.5rem] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-zinc-800 z-10 flex flex-col gap-4">
                  
                  {/* Search Header */}
                  <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-white mb-2 ml-2">
                    <ArrowLeft size={20} /> Veteriner Klinikleri
                  </div>

                  {/* Dropdowns */}
                  <div className="flex gap-3">
                    <div className="flex-1 bg-white dark:bg-zinc-800 rounded-2xl p-3 border border-slate-100 dark:border-zinc-700">
                      <div className="text-[10px] text-slate-400 mb-0.5">İl</div>
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-200 flex justify-between">{t('feat_s3_ui_city')} <ChevronDown size={14}/></div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-zinc-800 rounded-2xl p-3 border border-slate-100 dark:border-zinc-700">
                      <div className="text-[10px] text-slate-400 mb-0.5">İlçe</div>
                      <div className="text-xs font-bold text-slate-400 flex justify-between">{t('feat_s3_ui_district')} <ChevronDown size={14}/></div>
                    </div>
                  </div>

                  {/* Search Input */}
                  <div className="bg-white dark:bg-zinc-800 rounded-full py-3 px-4 border border-slate-200 dark:border-zinc-700 flex items-center gap-2">
                    <MapPin size={16} className="text-slate-400"/>
                    <span className="text-xs text-slate-400 font-medium flex-1">{t('feat_s3_ui_search')}</span>
                    <Search size={16} className="text-teal-600"/>
                  </div>

                  {/* Clinics */}
                  <div className="flex flex-col gap-3 mt-1">
                    {/* Clinic 1 */}
                    <div className="bg-white dark:bg-zinc-800 rounded-[2rem] p-4 flex flex-col gap-3 shadow-sm border border-slate-100 dark:border-zinc-700 relative overflow-hidden group">
                      <div className="flex gap-3 items-start">
                        <div className="w-12 h-12 bg-teal-100/50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center shrink-0 text-teal-700 dark:text-teal-400">
                          <Building2 size={22}/>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-slate-800 dark:text-white leading-tight pr-5">{t('feat_s3_ui_clinic1')}</div>
                          <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">{t('feat_s3_ui_clinic1_addr')}</div>
                        </div>
                        <CheckCircle2 size={16} className="text-amber-500 fill-amber-100 dark:fill-amber-900/30 absolute top-4 right-4" />
                      </div>
                      <div className="flex gap-2 items-center justify-between">
                        <div className="flex items-center gap-1.5 text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-full text-[11px] font-bold">
                          <Phone size={12}/> +90 312 000 0003
                        </div>
                        <div className="text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800 px-4 py-1.5 rounded-full text-xs font-bold bg-white dark:bg-zinc-800 flex gap-1">
                          + {t('feat_s3_ui_follow')}
                        </div>
                      </div>
                    </div>

                    {/* Clinic 2 */}
                    <div className="bg-white dark:bg-zinc-800 rounded-[2rem] p-4 flex flex-col gap-3 shadow-sm border border-slate-100 dark:border-zinc-700 relative overflow-hidden">
                      <div className="flex gap-3 items-start">
                        <div className="w-12 h-12 bg-teal-100/50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center shrink-0 text-teal-700 dark:text-teal-400">
                          <Building2 size={22}/>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-slate-800 dark:text-white leading-tight pr-5">{t('feat_s3_ui_clinic2')}</div>
                          <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">{t('feat_s3_ui_clinic2_addr')}</div>
                        </div>
                        <CheckCircle2 size={16} className="text-amber-500 fill-amber-100 dark:fill-amber-900/30 absolute top-4 right-4" />
                      </div>
                      <div className="flex gap-2 items-center justify-between">
                        <div className="flex items-center gap-1.5 text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-full text-[11px] font-bold">
                          <Phone size={12}/> +90 216 111 2233
                        </div>
                        <div className="text-white bg-teal-700 hover:bg-teal-600 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
                          <CheckCircle2 size={14}/> {t('feat_s3_ui_following')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Chat Bubble (Left/Bottom) */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -left-2 bottom-12 lg:-left-6 lg:bottom-16 w-[280px] bg-[#FAF8F5] dark:bg-zinc-900 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-zinc-800 z-30 hidden sm:block"
                >
                   {/* Header */}
                   <div className="flex items-center justify-between p-4 pb-2 border-b border-slate-200 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                        <ArrowLeft size={18} className="text-slate-800 dark:text-white"/>
                        <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                          <User size={16}/>
                        </div>
                        <div className="font-bold text-sm text-slate-800 dark:text-white">{t('feat_s3_ui_msg_name')}</div>
                      </div>
                   </div>
                   {/* Chat Body */}
                   <div className="p-4 flex flex-col gap-3">
                      <div className="flex justify-center">
                        <span className="text-[10px] text-slate-400 font-medium px-2 bg-white dark:bg-zinc-800 rounded-full">{t('feat_s3_ui_msg_date')}</span>
                      </div>
                      <div className="bg-white dark:bg-zinc-800 rounded-2xl rounded-tl-sm p-3 shadow-sm border border-slate-100 dark:border-zinc-700">
                        <p className="text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                          {t('feat_s3_ui_msg_content')}
                        </p>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium ml-1">{t('feat_s3_ui_msg_time')}</div>
                      <div className="mt-2 relative">
                        <input type="text" className="w-full bg-white dark:bg-zinc-800 rounded-full py-2.5 pl-10 pr-10 border border-slate-200 dark:border-zinc-700 text-xs outline-none" placeholder="Mesaj yaz..." disabled/>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-400">
                           <Camera size={14}/>
                        </div>
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-slate-300 dark:bg-slate-600 rounded-full flex items-center justify-center text-white">
                           <Send size={12}/>
                        </div>
                      </div>
                   </div>
                </motion.div>

                {/* Floating Rating Card (Right/Bottom) */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute right-0 -bottom-4 lg:-right-12 lg:-bottom-12 w-[280px] bg-white dark:bg-zinc-900 rounded-[2rem] p-5 shadow-2xl border border-slate-100 dark:border-zinc-800 z-20 flex flex-col gap-4 hidden sm:flex"
                >
                   <div className="font-bold text-slate-800 dark:text-white text-[15px]">{t('feat_s3_ui_rating_title')}</div>
                   
                   <div className="flex items-center gap-3">
                     <span className="text-3xl font-black text-slate-800 dark:text-white">5.0</span>
                     <div className="flex flex-col gap-0.5">
                       <div className="flex gap-1 text-amber-500">
                         <Star size={14} className="fill-current"/><Star size={14} className="fill-current"/><Star size={14} className="fill-current"/><Star size={14} className="fill-current"/><Star size={14} className="fill-current"/>
                       </div>
                       <span className="text-[10px] text-slate-400 font-medium">{t('feat_s3_ui_rating_count')}</span>
                     </div>
                   </div>

                   <div className="pt-2 border-t border-slate-100 dark:border-zinc-800">
                     <div className="text-[11px] text-slate-400 font-medium mb-1.5">{t('feat_s3_ui_rating_your')}</div>
                     <div className="flex gap-1.5 text-amber-500 mb-3">
                        <Star size={18} className="fill-current"/><Star size={18} className="fill-current"/><Star size={18} className="fill-current"/><Star size={18} className="fill-current"/><Star size={18} className="fill-current"/>
                     </div>
                     <div className="w-full bg-teal-50 dark:bg-teal-900/20 rounded-xl p-3 text-xs text-slate-500 dark:text-slate-400 font-medium border border-teal-100/50 dark:border-teal-800 mb-3">
                       {t('feat_s3_ui_rating_placeholder')}
                     </div>
                     <div className="flex items-center gap-2">
                       <button className="bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs py-2 px-4 rounded-xl">
                         Güncelle
                       </button>
                       <button className="bg-slate-50 dark:bg-zinc-800 hover:bg-slate-100 text-slate-400 text-xs py-2 px-3 rounded-xl font-medium">
                         Puanımı kaldır
                       </button>
                     </div>
                   </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
"""

content = content.replace(old_section, new_section + "\n")

# Need to ensure all icons we used are imported: 
# ArrowLeft, ChevronDown, MapPin, Phone, User, Camera, Send, Star, Building2, CheckCircle2
icons_to_add = ['ArrowLeft', 'ChevronDown', 'MapPin', 'Phone', 'User', 'Camera', 'Send', 'Star', 'Building2', 'CheckCircle2']
for icon in icons_to_add:
    if icon not in content:
        # Just add it to the import statement of lucide-react
        import_pattern = r'import \{([^}]+)\} from \'lucide-react\';'
        match = re.search(import_pattern, content)
        if match:
            old_import = match.group(0)
            new_import = old_import.replace('}', f', {icon}}}')
            content = content.replace(old_import, new_import)

with open('src/pages/Features.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Features.tsx Section 3 replaced.")
