import os

with open('src/pages/Clinics_bad.tsx', 'r') as f:
    content = f.read()

# Fix {{{ and }}} syntax errors
content = content.replace('{{{', '{{').replace('}}}', '}}')

# Profile UI ends around line 260 with Haritada aç.
# I will match the exact text at the end of Profile UI.
profile_end = """                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">Haritada aç</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </motion.div>
            </div>
          </div>
        </section>"""

# Add one more </div> inside the structure
profile_end_fixed = """                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">Haritada aç</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
              </motion.div>
            </div>
          </div>
        </section>"""
content = content.replace(profile_end, profile_end_fixed)

# Records UI ends around line 459 with Barkod e-karneye okutuldu.
records_end = """                          <div className="text-xs text-slate-500">Uygulandı: Nobivac Tricat Trio. Barkod e-karneye okutuldu.</div>
                        </div>
                      </div>
                    </div>
                  </div>
              </motion.div>
            </div>
          </div>
        </section>"""

# Add one more </div> inside the structure
records_end_fixed = """                          <div className="text-xs text-slate-500">Uygulandı: Nobivac Tricat Trio. Barkod e-karneye okutuldu.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </motion.div>
            </div>
          </div>
        </section>"""
content = content.replace(records_end, records_end_fixed)

with open('src/pages/Clinics.tsx', 'w') as f:
    f.write(content)
