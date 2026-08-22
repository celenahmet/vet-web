with open('src/pages/Clinics.tsx', 'r') as f:
    content = f.read()

records_old = """                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""

records_new = """                  </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""

content = content.replace(records_old, records_new)

with open('src/pages/Clinics.tsx', 'w') as f:
    f.write(content)
