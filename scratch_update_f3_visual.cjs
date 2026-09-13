const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/components/DigitalGrowthSection.tsx', 'utf8');

const oldMockup = `                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between border border-slate-200/60 dark:border-zinc-800 rounded-xl p-3 bg-white dark:bg-zinc-800">
                        <div className="flex items-center gap-3">
                          <div className={\`w-8 h-8 rounded-full flex items-center justify-center shrink-0 \${i === 1 ? 'bg-[#e6f4ea] dark:bg-green-900/30 text-green-700' : 'bg-slate-100 dark:bg-zinc-700 text-slate-400'}\`}>
                            <FileText size={14} />
                          </div>
                          <div>
                            <div className="font-bold text-[12px] text-slate-800 dark:text-slate-200">
                              {i === 1 ? 'İletişim İzni (SMS)' : \`Aydınlatma Metni \${i}\`}
                            </div>
                            <div className="text-[10px] text-slate-500">
                              {i === 1 ? 'Onaylandı: 12.10.2023' : 'Bekliyor'}
                            </div>
                          </div>
                        </div>
                        {i === 1 && (
                          <div className="px-2 py-0.5 bg-[#e6f4ea] dark:bg-green-900/20 text-green-700 dark:text-green-400 text-[9px] font-bold rounded-full">
                            ONAYLI
                          </div>
                        )}
                      </div>
                    ))}`;

const newMockup = `                    {/* Item 1: KVKK */}
                    <div className="flex items-center justify-between border border-slate-200/60 dark:border-zinc-800 rounded-xl p-3 bg-white dark:bg-zinc-800">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-[#e6f4ea] dark:bg-green-900/30 text-green-700">
                          <FileText size={14} />
                        </div>
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 dark:text-slate-200">
                            KVKK Aydınlatma Metni
                          </div>
                          <div className="text-[10px] text-slate-500">
                            IP Log: 192.168.1.42
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-0.5 bg-[#e6f4ea] dark:bg-green-900/20 text-green-700 dark:text-green-400 text-[9px] font-bold rounded-full">
                        ARŞİVLENDİ
                      </div>
                    </div>

                    {/* Item 2: Iletisim */}
                    <div className="flex items-center justify-between border border-slate-200/60 dark:border-zinc-800 rounded-xl p-3 bg-white dark:bg-zinc-800">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-[#e6f4ea] dark:bg-green-900/30 text-green-700">
                          <FileText size={14} />
                        </div>
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 dark:text-slate-200">
                            Dijital İletişim İzni
                          </div>
                          <div className="text-[10px] text-slate-500">
                            SMS & WhatsApp (Onaylı)
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-0.5 bg-[#e6f4ea] dark:bg-green-900/20 text-green-700 dark:text-green-400 text-[9px] font-bold rounded-full">
                        ONAYLI
                      </div>
                    </div>

                    {/* Item 3: Bekleyen */}
                    <div className="flex items-center justify-between border border-slate-200/60 dark:border-zinc-800 rounded-xl p-3 bg-white dark:bg-zinc-800">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-orange-50 dark:bg-orange-900/20 text-orange-500">
                          <FileText size={14} />
                        </div>
                        <div>
                          <div className="font-bold text-[12px] text-slate-800 dark:text-slate-200">
                            Operasyon Muvafakatnamesi
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Bekliyor... SMS Gönderildi
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-0.5 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-[9px] font-bold rounded-full">
                        BEKLİYOR
                      </div>
                    </div>`;

code = code.replace(oldMockup, newMockup);
fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/components/DigitalGrowthSection.tsx', code);
console.log('F3 visual updated.');
