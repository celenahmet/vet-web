import re

with open('src/pages/Clinics_bad.tsx', 'r') as f:
    content = f.read()

# 1. Fix JSX syntax error
content = content.replace('{{{', '{{').replace('}}}', '}}')

# 2. Fix Calendar UI (remove one </div>)
# We find the exact section where Calendar UI ends
calendar_end = """                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""

calendar_end_fixed = """                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""

if calendar_end in content:
    content = content.replace(calendar_end, calendar_end_fixed)

# 3. Fix Records UI (add two </div>)
records_end = """                  </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""

records_end_fixed = """                  </div>
                  </div>
                  </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""

if records_end in content:
    content = content.replace(records_end, records_end_fixed)

with open('src/pages/Clinics.tsx', 'w') as f:
    f.write(content)
