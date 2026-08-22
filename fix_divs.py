with open('src/pages/Clinics_bad.tsx', 'r') as f:
    content = f.read()

# Fix the JSX syntax error if present
content = content.replace('{{{', '{{').replace('}}}', '}}')

# Add missing </div> before </motion.div> closing the right side UI for each section
# Profile UI end
old_str_profile = """                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            3. SCHEDULING (Akıllı Ajanda)"""
            
new_str_profile = """                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            3. SCHEDULING (Akıllı Ajanda)"""

if old_str_profile in content:
    content = content.replace(old_str_profile, new_str_profile)

# Calendar UI end
old_str_calendar = """                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""

new_str_calendar = """                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""

if old_str_calendar in content:
    content = content.replace(old_str_calendar, new_str_calendar)

# Records UI end
old_str_records = """                  </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""

new_str_records = """                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""
            
if old_str_records in content:
    content = content.replace(old_str_records, new_str_records)


# Write to Clinics.tsx
with open('src/pages/Clinics.tsx', 'w') as f:
    f.write(content)
