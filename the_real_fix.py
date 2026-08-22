import re

with open('src/pages/Clinics_bad.tsx', 'r') as f:
    content = f.read()

content = content.replace('{{{', '{{').replace('}}}', '}}')

# 1. Profile UI (add ONE </div>)
profile_old = """                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            3. SCHEDULING (Akıllı Ajanda)"""
            
profile_new = """                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            3. SCHEDULING (Akıllı Ajanda)"""
            
content = content.replace(profile_old, profile_new)


# 2. Records UI (add ONE </div>)
records_old = """                  </div>
              </motion.div>
            </div>
          </div>
        </section>



        
        {/* =========================================
            5. FEATURE HIGHLIGHTS (Neden Veterito)"""
            
records_new = """                  </div>
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
