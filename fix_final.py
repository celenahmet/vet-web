with open('src/pages/Clinics.tsx', 'r') as f:
    content = f.read()

# Fix Calendar UI: remove one </div> from the end of Calendar UI
old_calendar = """                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""

new_calendar = """                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. PATIENT RECORDS (Hasta Kayıt)"""

content = content.replace(old_calendar, new_calendar)

# Fix Records UI: add two </div> to the end of Records UI
old_records = """                  </div>
                  </div>
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
