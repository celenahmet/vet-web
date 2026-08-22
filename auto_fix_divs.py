import re

with open('src/pages/Clinics.tsx', 'r') as f:
    content = f.read()

# We will just parse the file linearly, and balance divs inside each motion.div
# Wait, let's just add one more </div> to Calendar and Records.

# Calendar UI
old_str_calendar = """                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""

new_str_calendar = """                  </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""

if old_str_calendar in content:
    content = content.replace(old_str_calendar, new_str_calendar)


# Records UI
old_str_records = """                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""

new_str_records = """                  </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""
            
if old_str_records in content:
    content = content.replace(old_str_records, new_str_records)

with open('src/pages/Clinics.tsx', 'w') as f:
    f.write(content)
