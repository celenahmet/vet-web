with open('src/pages/Clinics.tsx', 'r') as f:
    content = f.read()

# Fix Calendar UI (remove the extra </div> we just added)
old_calendar = """                  </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""

new_calendar = """                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""

content = content.replace(old_calendar, new_calendar)

# Fix Records UI (it was missing a </div>, and we added 1, let's see if we need to add another or what)
# Let's check where Records UI fails:
# src/pages/Clinics.tsx:463 "w-full max-w-[800px] bg-[var(--bg-main)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden flex h-[350px]"
# Wait, line 463 is Records UI! Let's just add one more </div> to Records UI.

old_records = """                  </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""

new_records = """                  </div>
                  </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""

content = content.replace(old_records, new_records)

with open('src/pages/Clinics.tsx', 'w') as f:
    f.write(content)

