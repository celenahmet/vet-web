import re

with open('src/pages/Clinics.tsx', 'r') as f:
    content = f.read()

# We need to find where the Top Contact Bar ends
top_contact_bar_end = """                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">Haritada aç</div>
                      </div>
                    </div>
                  </div>"""

new_content = """                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">Haritada aç</div>
                      </div>
                    </div>
                  </div>

                  {/* Main Profile Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column: Details */}
                    <div className="flex flex-col gap-4">
                      {/* Address Card */}
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                        <h4 className="font-bold text-[var(--text-main)] mb-3">Adres ve ulaşım</h4>
                        <div className="mb-3">
                          <div className="font-bold text-sm text-[var(--text-main)]">Test Mahallesi, Test Caddesi No:1</div>
                          <div className="text-xs text-[var(--text-muted)]">Kadıköy / İstanbul</div>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                          Metro çıkışına 5 dakika yürüme mesafesinde. Klinik önünde ücretsiz otopark mevcut.
                        </p>
                        <button className="w-full bg-[var(--color-vet-primary)] hover:bg-[var(--color-vet-secondary)] text-white text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors">
                          <MapPin size={14} /> Görüntüle
                        </button>
                      </div>

                      {/* About Card */}
                      <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50 flex-1">
                        <h4 className="font-bold text-[var(--text-main)] mb-2">Hakkımızda</h4>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                          Kadıköy'de 2015'ten beri hizmet veren tam donanımlı kliniğiyiz. Dahiliye, cerrahi ve laboratuvar ile yanınızdayız.
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Employees */}
                    <div className="flex flex-col">
                      {/* Tabs */}
                      <div className="flex items-center gap-6 border-b border-[var(--border-color)] mb-4 pb-2">
                        <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-vet-primary)] relative">
                          Çalışanlar <span className="bg-[var(--color-vet-primary)] text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
                          <div className="absolute -bottom-[9px] left-0 right-0 h-0.5 bg-[var(--color-vet-primary)]"></div>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-muted)]">
                          Fotoğraflar <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] px-1.5 py-0.5 rounded-full">6</span>
                        </div>
                      </div>

                      {/* Employee Cards Grid */}
                      <div className="grid grid-cols-2 gap-4 flex-1">
                        {/* Card 1 */}
                        <div className="bg-white dark:bg-slate-800 border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm flex flex-col">
                          <div className="h-16 bg-[var(--color-vet-primary)] relative flex justify-center">
                            {/* Abstract Avatar */}
                            <div className="absolute -bottom-6 w-16 h-16 bg-[#e0f7f3] rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center overflow-hidden">
                              <div className="w-6 h-6 bg-teal-200 rounded-full mb-6"></div>
                              <div className="w-12 h-12 bg-teal-200 rounded-full absolute -bottom-6"></div>
                            </div>
                          </div>
                          <div className="pt-8 pb-3 px-3 text-left flex-1 flex flex-col justify-end">
                            <div className="text-[8px] font-bold text-amber-500 uppercase tracking-wider mb-0.5">KURUCU HEKİM</div>
                            <div className="text-sm font-bold text-[var(--text-main)] truncate">Aylin Demir</div>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white dark:bg-slate-800 border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm flex flex-col">
                          <div className="h-16 bg-[var(--color-vet-primary)] relative flex justify-center">
                            {/* Abstract Avatar */}
                            <div className="absolute -bottom-6 w-16 h-16 bg-[#fff3e0] rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center overflow-hidden">
                              <div className="w-6 h-6 bg-orange-400 rounded-full mb-6"></div>
                              <div className="w-12 h-12 bg-orange-400 rounded-full absolute -bottom-6"></div>
                            </div>
                          </div>
                          <div className="pt-8 pb-3 px-3 text-left flex-1 flex flex-col justify-end">
                            <div className="text-[8px] font-bold text-amber-500 uppercase tracking-wider mb-0.5">DAHİLİYE UZMANI</div>
                            <div className="text-sm font-bold text-[var(--text-main)] truncate">Mert Yılmaz</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>"""

if top_contact_bar_end in content:
    content = content.replace(top_contact_bar_end, new_content)
    with open('src/pages/Clinics.tsx', 'w') as f:
        f.write(content)
    print("Successfully added the missing sections back to Profile UI!")
else:
    print("Could not find top_contact_bar_end in the file!")

