import re

with open('src/pages/Clinics.tsx', 'r') as f:
    content = f.read()

# Fix {{{ and }}}
content = content.replace('{{{', '{{').replace('}}}', '}}')

# Fix Calendar UI: it has 1 extra </div>
old_calendar = """                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""

new_calendar = """              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""
content = content.replace(old_calendar, new_calendar)

# Fix Records UI: it needs 2 extra </div>
old_records = """                  </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""

new_records = """                  </div>
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
