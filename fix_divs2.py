with open('src/pages/Clinics.tsx', 'r') as f:
    lines = f.readlines()

# find </motion.div> that belongs to the right column of Calendar UI.
# Calendar UI ends before "4. PATIENT RECORDS"
for i in range(len(lines)):
    if "4. PATIENT RECORDS" in lines[i]:
        # Walk backwards to find </motion.div>
        for j in range(i, -1, -1):
            if "</motion.div>" in lines[j]:
                # Insert </div> before this line
                lines.insert(j, "                  </div>\n")
                break
        break

# Records UI ends before "5. FEATURE HIGHLIGHTS"
for i in range(len(lines)):
    if "5. FEATURE HIGHLIGHTS" in lines[i]:
        # Walk backwards to find </motion.div>
        for j in range(i, -1, -1):
            if "</motion.div>" in lines[j]:
                # Insert </div> before this line
                lines.insert(j, "                  </div>\n")
                break
        break

with open('src/pages/Clinics.tsx', 'w') as f:
    f.writelines(lines)
