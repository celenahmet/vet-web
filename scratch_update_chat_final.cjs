const fs = require('fs');

let code = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/components/DigitalGrowthSection.tsx', 'utf8');

const oldMockups = `                    {/* Incoming SMS - Lab */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 p-2 rounded-xl rounded-tl-sm shadow-sm max-w-[85%]"
                    >
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-1">
                        <Smartphone size={10} /> Laboratuvar Sonucu (SMS)
                      </div>
                      <p className="text-[11px] leading-tight text-slate-700 dark:text-slate-300">
                        Leo'nun kan tahlili sonuçları çıkmıştır. Hekiminiz bilgi verecektir.
                      </p>
                    </motion.div>
                    
                    {/* WhatsApp - Vaccine */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="bg-[#e6f4ea] dark:bg-[#132c1e] border border-[#c4e3d0] dark:border-green-800/30 p-2 rounded-xl rounded-tl-sm shadow-sm max-w-[85%] relative left-4"
                    >
                      <div className="flex items-center gap-1.5 text-[10px] text-green-600/80 dark:text-green-400/70 mb-1">
                        Veterito Klinik <CheckCircle2 size={10} />
                      </div>
                      <p className="text-[11px] leading-tight text-green-900 dark:text-green-300">
                        Mia'nın yıllık karma aşısı gelmiştir, randevu alabilirsiniz. 💉
                      </p>
                    </motion.div>

                    {/* WhatsApp - Appointment */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="bg-[#e6f4ea] dark:bg-[#132c1e] border border-[#c4e3d0] dark:border-green-800/30 p-2 rounded-xl rounded-tr-sm shadow-sm max-w-[85%] ml-auto"
                    >
                      <div className="flex justify-end items-center gap-1.5 text-[10px] text-green-600/80 dark:text-green-400/70 mb-1">
                        Veterito Klinik <CheckCircle2 size={10} />
                      </div>
                      <p className="text-[11px] leading-tight text-green-900 dark:text-green-300">
                        Yarın saat 14:00'teki muayene randevunuzu hatırlatmak isteriz. 🐾
                      </p>
                    </motion.div>`;

const newMockups = `                    {/* WhatsApp - Outgoing (Clinic) */}
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="bg-[#e6f4ea] dark:bg-[#132c1e] border border-[#c4e3d0] dark:border-green-800/30 p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[90%] ml-auto"
                    >
                      <div className="flex justify-end items-center gap-1.5 text-[10px] text-green-600/80 dark:text-green-400/70 mb-1.5 font-medium">
                        Klinik <CheckCircle2 size={12} className="text-green-500" />
                      </div>
                      <p className="text-[12px] leading-snug text-green-900 dark:text-green-300">
                        Sayın hasta sahibimiz, Leo'nun laboratuvar sonuçları temiz çıkmıştır. Yarınki karma aşı randevusunda görüşmek üzere! 🐾
                      </p>
                    </motion.div>

                    {/* WhatsApp - Incoming (Customer) */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%] mt-3"
                    >
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-1.5 font-medium">
                        Hasta Sahibi (Leo)
                      </div>
                      <p className="text-[12px] leading-snug text-slate-700 dark:text-slate-300">
                        Harika haber! Çok sevindik, yarın 14:00'te oradayız. Teşekkürler 😊
                      </p>
                    </motion.div>`;

code = code.replace(oldMockups, newMockups);

fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/components/DigitalGrowthSection.tsx', code);
console.log('Chat mockups finalized.');
