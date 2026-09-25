import { useTranslation } from 'react-i18next';
import { 
  Activity, AlertTriangle, Bell, Calendar, CheckCircle2, ChevronDown, 
  ChevronRight, ChevronUp, ChevronsUpDown, LayoutDashboard, LogOut, 
  MessageCircle, MoreHorizontal, PawPrint, Users 
} from 'lucide-react';

export default function DashboardMockup() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-row">
            {/* Sidebar */}
            <div className="w-[220px] bg-[#0E3D35] text-white shrink-0 flex flex-col hidden lg:flex rounded-tl-2xl rounded-bl-2xl">
              <div className="p-4 pb-4 flex items-center">
                <img src="/vet-logo-full.webp" alt="Veterito Logo" className="h-8 w-auto object-contain" />
              </div>

              <div className="px-4 mb-2">
                <div className="border border-white/10 rounded-lg p-3 bg-white/5">
                  <div className="text-[10px] text-emerald-200/80 font-bold mb-1 uppercase tracking-wider">{t('feat_s5_db_sidebar_clinic')}</div>
                  <div className="bg-gradient-to-b from-white/20 to-white/5 shadow-inner rounded-lg p-2.5 flex items-center justify-between cursor-pointer border border-white/10 hover:bg-white/20 transition-colors">
                    <span className="text-sm font-bold truncate pr-2">{t('feat_s5_db_clinic_name')}</span>
                    <ChevronsUpDown size={14} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="flex-1 px-4 space-y-6 text-sm font-bold">
                <div>
                  <div className="flex items-center justify-between text-[10px] text-emerald-100 font-extrabold mb-2 uppercase px-3 tracking-wider">
                    <span>{t('feat_s5_db_sidebar_daily')}</span>
                    <ChevronUp size={14} className="text-emerald-100/70" />
                  </div>
                  <div className="flex items-center gap-3 bg-[#1B5749] text-white px-4 py-2 rounded-lg cursor-pointer shadow-sm">
                    <LayoutDashboard size={16} /> {t('feat_s5_db_overview')}
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors mt-1">
                    <Calendar size={16} className="text-emerald-100/70" /> {t('feat_s5_db_appointments')}
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors mt-1">
                    <Users size={16} className="text-emerald-100/70" /> {t('feat_s5_db_customers')}
                  </div>
                  <div className="flex items-center gap-3 text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors mt-1">
                    <PawPrint size={16} className="text-emerald-100/70" /> {t('feat_s5_db_patients')}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">{t('feat_s5_db_clinic_care')}</span> <ChevronDown size={14} className="text-emerald-100/70" />
                  </div>
                  <div className="flex items-center justify-between text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">{t('feat_s5_db_operation')}</span> <ChevronDown size={14} className="text-emerald-100/70" />
                  </div>
                  <div className="flex items-center justify-between text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">{t('feat_s5_db_communication')}</span> <ChevronDown size={14} className="text-emerald-100/70" />
                  </div>
                  <div className="flex items-center justify-between text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">{t('feat_s5_db_clinic_management')}</span> <ChevronDown size={14} className="text-emerald-100/70" />
                  </div>
                  <div className="flex items-center justify-between text-emerald-50 hover:bg-white/5 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">{t('feat_s5_db_management')}</span> <ChevronDown size={14} className="text-emerald-100/70" />
                  </div>
                </div>
              </div>

              <div className="p-3 mt-auto flex flex-col gap-2">
                <div className="bg-white/5 rounded-lg p-3 text-[9px] text-emerald-100/70 font-medium leading-relaxed">
                  {t('feat_s5_db_mobile_warning')}
                </div>
                <div className="flex items-center gap-2 text-white hover:bg-white/10 cursor-pointer transition-colors text-[11px] font-bold border border-white/10 px-3 py-2 rounded-lg">
                  <LogOut size={14} className="text-emerald-100/70" /> {t('feat_s5_db_logout')}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col bg-slate-50/50 dark:bg-zinc-900 min-w-0">
              {/* Topbar */}
              <div className="h-[60px] shrink-0 flex items-center justify-between px-6 bg-white dark:bg-zinc-800 border-b border-slate-200 dark:border-zinc-700 shadow-sm">
                <div>
                  <h1 className="text-base font-extrabold text-slate-800 dark:text-white leading-tight">{t('feat_s5_db_overview')}</h1>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5">{t('feat_s5_db_clinic_name')}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative cursor-pointer hover:bg-slate-100 dark:hover:bg-zinc-700 p-2 rounded-full transition-colors">
                    <Bell size={16} className="text-slate-500" />
                    <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-rose-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center shadow-sm">31</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer bg-white dark:bg-zinc-700 py-1 px-2 rounded-full border border-slate-200 dark:border-zinc-600 shadow-sm hover:shadow transition-shadow">
                    <div className="w-7 h-7 bg-[#0f3e36] text-white rounded-full flex items-center justify-center font-bold text-[11px]">Y</div>
                    <div className="hidden sm:block text-left pr-1">
                      <div className="text-[10px] font-bold text-slate-800 dark:text-white leading-none mb-0.5">info@yildizlarvet.com</div>
                      <div className="text-[9px] text-slate-500 font-medium leading-none">{t('feat_s5_db_user_role')}</div>
                    </div>
                    <ChevronRight size={14} className="text-slate-400 rotate-90 hidden sm:block mr-0.5" />
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-5 space-y-5">

                {/* Stats Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { icon: <Calendar size={14} className="text-emerald-600" />, count: '18', title: t('feat_s5_db_stat1_title'), desc: t('feat_s5_db_stat1_desc') },
                    { icon: <div className="w-5 h-5 bg-amber-100 text-amber-600 rounded-md flex items-center justify-center font-bold text-[11px] shadow-sm">5</div>, count: '5', title: t('feat_s5_db_stat2_title'), desc: t('feat_s5_db_stat2_desc') },
                    { icon: <PawPrint size={14} className="text-emerald-600" />, count: '2.840', title: t('feat_s5_db_stat3_title'), desc: t('feat_s5_db_stat3_desc') },
                    { icon: <div className="w-5 h-5 bg-amber-100 text-amber-600 rounded-md flex items-center justify-center shadow-sm"><Activity size={12} /></div>, count: '34', title: t('feat_s5_db_stat4_title'), desc: t('feat_s5_db_stat4_desc') }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white dark:bg-zinc-800 p-3 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex items-start gap-2.5 hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-zinc-700 flex items-center justify-center shrink-0 border border-slate-100 dark:border-zinc-600 shadow-sm">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-600 dark:text-slate-300 mb-0.5">{stat.title}</div>
                        <div className="text-[15px] font-black text-slate-800 dark:text-white leading-tight mb-0.5">{stat.count}</div>
                        <div className="text-[9px] text-slate-400 font-medium">{stat.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Warning Banner */}
                <div className="bg-[#fcf1df] text-[#8a6b32] dark:bg-amber-900/30 dark:text-amber-500 px-3 py-2 rounded-lg border border-[#ebd6af] dark:border-amber-700/50 flex items-center gap-2.5 text-[11px] font-bold shadow-sm">
                  <AlertTriangle size={14} className="shrink-0" />
                  {t('feat_s5_db_warning')}
                </div>

                {/* Main Row: Appointments & Agenda */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  {/* Upcoming Appointments */}
                  <div className="lg:col-span-2 bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex justify-between items-center bg-slate-50/50 dark:bg-zinc-800/50">
                      <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-white text-[11px]">
                        <Calendar size={14} className="text-emerald-600" /> {t('feat_s5_db_upcoming_apps')}
                      </div>
                      <button className="text-[10px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-slate-50 dark:hover:bg-zinc-600 shadow-sm transition-colors">
                        {t('feat_s5_db_all_apps')} <ChevronRight size={14} />
                      </button>
                    </div>
                    <div className="overflow-x-auto flex-1">
                      <table className="w-full text-left text-[11px] whitespace-nowrap">
                        <thead className="text-[9px] text-slate-400 bg-slate-50 dark:bg-zinc-800/80 uppercase font-bold tracking-wider border-b border-slate-100 dark:border-zinc-700">
                          <tr>
                            <th className="px-3 py-2">{t('feat_s5_db_col_time')}</th>
                            <th className="px-3 py-2">{t('feat_s5_db_col_patient')}</th>
                            <th className="px-3 py-2">{t('feat_s5_db_col_owner')}</th>
                            <th className="px-3 py-2">{t('feat_s5_db_col_service')}</th>
                            <th className="px-3 py-2">{t('feat_s5_db_col_status')}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-zinc-700/50">
                          <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors">
                            <td className="px-3 py-2">
                              <div className="font-bold text-slate-800 dark:text-white text-[11px]">10:30</div>
                              <div className="text-[9px] font-medium text-slate-500">{t('feat_s5_db_august_26')}</div>
                            </td>
                            <td className="px-3 py-2 text-slate-700 dark:text-slate-300 font-medium">Tarçın</td>
                            <td className="px-3 py-2 font-bold text-slate-800 dark:text-white">Ahmet Yılmaz</td>
                            <td className="px-3 py-2 text-slate-700 dark:text-slate-300 font-medium">{t('feat_s5_db_reason_rabies')}</td>
                            <td className="px-3 py-2">
                              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 px-2 py-1 rounded-full text-[9px] font-bold shadow-sm">
                                {t('feat_s5_db_status_approved')}
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors">
                            <td className="px-3 py-2">
                              <div className="font-bold text-slate-800 dark:text-white text-[11px]">14:15</div>
                              <div className="text-[9px] font-medium text-slate-500">{t('feat_s5_db_august_26')}</div>
                            </td>
                            <td className="px-3 py-2 text-slate-700 dark:text-slate-300 font-medium">Senorita</td>
                            <td className="px-3 py-2 font-bold text-slate-800 dark:text-white">Melis Karaca</td>
                            <td className="px-3 py-2 text-slate-700 dark:text-slate-300 font-medium">{t('feat_s5_db_reason_routine')}</td>
                            <td className="px-3 py-2">
                              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 px-2 py-1 rounded-full text-[9px] font-bold shadow-sm">
                                {t('feat_s5_db_status_approved')}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="p-2 border-t border-slate-100 dark:border-zinc-700 text-center bg-slate-50/30 dark:bg-zinc-800/30">
                      <button className="text-emerald-600 dark:text-emerald-400 text-[11px] font-bold flex items-center justify-center gap-1 w-full hover:bg-emerald-50 dark:hover:bg-emerald-900/20 py-2 rounded-lg transition-colors">
                        {t('feat_s5_db_view_all')} <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Agenda */}
                  <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex items-center gap-2 font-bold text-slate-800 dark:text-white text-[11px] bg-slate-50/50 dark:bg-zinc-800/50">
                      <Calendar size={14} className="text-emerald-600" /> {t('feat_s5_db_agenda')}
                    </div>
                    <div className="p-3 flex-1 flex flex-col gap-2 justify-center">
                      <div className="bg-slate-50 dark:bg-zinc-700/30 p-2.5 rounded-lg border border-slate-100 dark:border-zinc-700 flex justify-between items-center">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s5_db_agenda_i1_time')}</div>
                          <div className="text-[9px] text-slate-500 font-medium mt-0.5">{t('feat_s5_db_agenda_i1_desc')}</div>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm"><CheckCircle2 size={10} strokeWidth={3} /></div>
                      </div>
                      <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-100 dark:border-zinc-700 flex justify-between items-center shadow-sm ring-1 ring-emerald-500/20">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s5_db_agenda_i2_time')}</div>
                          <div className="text-[9px] text-emerald-600 font-medium mt-0.5">{t('feat_s5_db_agenda_i2_desc')}</div>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shadow-sm"><Activity size={10} strokeWidth={3} /></div>
                      </div>
                      <div className="bg-slate-50 dark:bg-zinc-700/30 p-2.5 rounded-lg border border-slate-100 dark:border-zinc-700 flex justify-between items-center">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight">{t('feat_s5_db_agenda_i3_time')}</div>
                          <div className="text-[9px] text-slate-500 font-medium mt-0.5">{t('feat_s5_db_agenda_i3_desc')}</div>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-zinc-600 text-slate-500 flex items-center justify-center shadow-sm"><MoreHorizontal size={10} strokeWidth={3} /></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
                  {/* Recent Patients */}
                  <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex justify-between items-start bg-slate-50/50 dark:bg-zinc-800/50">
                      <div className="flex gap-2 font-bold text-slate-800 dark:text-white text-[11px]">
                        <PawPrint size={14} className="text-emerald-600 shrink-0 mt-0.5" /> {t('feat_s5_db_recent_patients')}
                      </div>
                      <button className="text-[9px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-2 py-1 rounded-lg flex items-center hover:bg-slate-50 dark:hover:bg-zinc-600 shadow-sm transition-colors">
                        {t('feat_s5_db_all_patients')} <ChevronRight size={12} />
                      </button>
                    </div>
                    <div className="p-3 space-y-2">
                      {[
                        { name: 'Senorita', species: t('feat_s5_db_species_cat'), owner: 'Melis Karaca' },
                        { name: 'Tarçın', species: t('feat_s5_db_species_dog'), owner: 'Ahmet Yılmaz' },
                        { name: 'Karamel', species: t('feat_s5_db_species_dog'), owner: 'Berk Tekin' }
                      ].map((pet, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-2 hover:bg-slate-50 dark:hover:bg-zinc-700/50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-slate-100 dark:hover:border-zinc-600">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-800/50">
                            <PawPrint size={14} />
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-800 dark:text-white leading-tight mb-0.5">{pet.name}</div>
                            <div className="text-[9px] font-medium text-slate-500">{pet.species} • {pet.owner}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Vaccines */}
                  <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex items-start bg-slate-50/50 dark:bg-zinc-800/50">
                      <div className="flex gap-2 font-bold text-slate-800 dark:text-white text-[11px]">
                        <div className="w-4 h-4 bg-emerald-100 text-emerald-600 rounded-md flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><Activity size={10} /></div>
                        {t('feat_s5_db_upcoming_vacs')}
                      </div>
                    </div>
                    <div className="p-3 space-y-2.5 flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-center border-b border-slate-50 dark:border-zinc-700/50 pb-2.5">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight mb-0.5">{t('feat_s5_db_vac1_title')}</div>
                          <div className="text-[9px] text-slate-500 font-medium">{t('feat_s5_db_vac1_pet')}</div>
                        </div>
                        <div className="text-[9px] font-bold text-rose-500 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 px-2.5 py-1 rounded-md shadow-sm border border-rose-100 dark:border-rose-500/20">{t('feat_s5_db_vac1_date')}</div>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-50 dark:border-zinc-700/50 pb-2.5">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight mb-0.5">{t('feat_s5_db_vac2_title')}</div>
                          <div className="text-[9px] text-slate-500 font-medium">{t('feat_s5_db_vac2_pet')}</div>
                        </div>
                        <div className="text-[9px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 px-2.5 py-1 rounded-md shadow-sm border border-emerald-100 dark:border-emerald-500/20">{t('feat_s5_db_vac2_date')}</div>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-50 dark:border-zinc-700/50 pb-2.5">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight mb-0.5">{t('feat_s5_db_vac3_title')}</div>
                          <div className="text-[9px] text-slate-500 font-medium">{t('feat_s5_db_vac3_pet')}</div>
                        </div>
                        <div className="text-[9px] font-bold text-amber-600 bg-amber-50 dark:bg-amber-500/10 dark:text-amber-400 px-2.5 py-1 rounded-md shadow-sm border border-amber-100 dark:border-amber-500/20">{t('feat_s5_db_vac3_date')}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800 dark:text-white leading-tight mb-0.5">{t('feat_s5_db_vac4_title')}</div>
                          <div className="text-[9px] text-slate-500 font-medium">{t('feat_s5_db_vac4_pet')}</div>
                        </div>
                        <div className="text-[9px] font-bold text-slate-600 bg-slate-100 dark:bg-zinc-700 dark:text-slate-300 px-2.5 py-1 rounded-md shadow-sm border border-slate-200 dark:border-zinc-600">{t('feat_s5_db_vac4_date')}</div>
                      </div>
                    </div>
                  </div>

                  {/* Clinic Summary */}
                  <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex justify-between items-start bg-slate-50/50 dark:bg-zinc-800/50">
                      <div className="flex gap-2 font-bold text-slate-800 dark:text-white text-[11px]">
                        <Users size={14} className="text-emerald-600 shrink-0 mt-0.5" /> {t('feat_s5_db_clinic_summary')}
                      </div>
                      <button className="text-[9px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-2 py-1 rounded-lg flex items-center hover:bg-slate-50 dark:hover:bg-zinc-600 shadow-sm transition-colors">
                        {t('feat_s5_db_reports')} <ChevronRight size={12} />
                      </button>
                    </div>
                    <div className="p-3 flex flex-col flex-1">
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-center bg-slate-50/50 dark:bg-zinc-800/30">
                          <div className="text-[14px] font-black text-slate-800 dark:text-white leading-none mb-1">14</div>
                          <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">{t('feat_s5_db_team_member')}</div>
                        </div>
                        <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-center bg-slate-50/50 dark:bg-zinc-800/30">
                          <div className="text-[14px] font-black text-slate-800 dark:text-white leading-none mb-1">2</div>
                          <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">{t('feat_s5_db_clinic_owner')}</div>
                        </div>
                        <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-center bg-slate-50/50 dark:bg-zinc-800/30">
                          <div className="text-[14px] font-black text-slate-800 dark:text-white leading-none mb-1">2.145</div>
                          <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">{t('feat_s5_db_customer')}</div>
                        </div>
                        <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-2 text-center bg-slate-50/50 dark:bg-zinc-800/30">
                          <div className="text-[14px] font-black text-slate-800 dark:text-white leading-none mb-1">34</div>
                          <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">{t('feat_s5_db_service')}</div>
                        </div>
                      </div>
                      <div className="text-[10px] font-medium text-slate-500 leading-relaxed mb-2">
                        {t('feat_s5_db_summary_text')}
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mt-auto pt-2 border-t border-slate-100 dark:border-zinc-700">
                        {t('feat_s5_db_occupancy')}
                        <span className="bg-slate-100 dark:bg-zinc-700 px-2 py-0.5 rounded-md text-slate-600 dark:text-slate-300 shadow-sm border border-slate-200/50 dark:border-zinc-600">{t('feat_s5_db_soon')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-zinc-700 flex justify-between items-start bg-slate-50/50 dark:bg-zinc-800/50">
                      <div className="flex gap-2 font-bold text-slate-800 dark:text-white text-[11px]">
                        <MessageCircle size={14} className="text-emerald-600 shrink-0 mt-0.5" /> {t('feat_s5_db_messages')}
                      </div>
                      <button className="text-[9px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-zinc-600 bg-white dark:bg-zinc-700 px-2 py-1 rounded-lg flex items-center hover:bg-slate-50 dark:hover:bg-zinc-600 shadow-sm transition-colors whitespace-nowrap">
                        {t('feat_s5_db_open_inbox')} <ChevronRight size={12} />
                      </button>
                    </div>
                    <div className="p-0 flex flex-col flex-1 divide-y divide-slate-100 dark:divide-zinc-700/50">
                      {[
                        { name: 'Melis Karaca', msg: t('feat_s5_db_msg1_text'), time: '10:42', unread: 1 },
                        { name: 'Ahmet Yılmaz', msg: t('feat_s5_db_msg2_text'), time: t('feat_s5_db_msg_time_yesterday'), unread: 2 },
                        { name: 'Berk Tekin', msg: t('feat_s5_db_msg3_text'), time: t('feat_s5_db_msg_time_monday'), unread: 1 },
                      ].map((chat, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-zinc-700/50 cursor-pointer transition-colors">
                          <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-zinc-600 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 font-bold text-[10px]">
                            {chat.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                              <div className="text-[11px] font-bold text-slate-800 dark:text-white truncate pr-2">{chat.name}</div>
                              <div className={`text-[9px] ${chat.unread ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-400'}`}>{chat.time}</div>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className={`text-[10px] truncate pr-2 ${chat.unread ? 'text-slate-800 dark:text-slate-200 font-medium' : 'text-slate-500'}`}>
                                {chat.msg}
                              </div>
                              {chat.unread > 0 && (
                                <div className="w-4 h-4 bg-emerald-500 text-white rounded-full flex items-center justify-center text-[8px] font-bold shrink-0">
                                  {chat.unread}
                                </div>
                              )}
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
}
