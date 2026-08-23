import os

def remove_from_import(filepath, items_to_remove):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for item in items_to_remove:
        # Match the item in the import list, handling commas
        import re
        content = re.sub(r'\b' + item + r'\s*,?\s*', '', content)
        # Fix empty curly braces if any
        content = re.sub(r'{\s*}', '{}', content)
        # Fix trailing commas before closing brace
        content = re.sub(r',\s*}', ' }', content)
        # Fix starting commas after opening brace
        content = re.sub(r'{\s*,', '{ ', content)
    
    with open(filepath, 'w') as f:
        f.write(content)

# Specific manual replacements to be extremely safe
def manual_fix(filepath, old, new):
    with open(filepath, 'r') as f:
        content = f.read()
    content = content.replace(old, new)
    with open(filepath, 'w') as f:
        f.write(content)

# About.tsx
manual_fix('src/pages/About.tsx', "import React from 'react';", "")
manual_fix('src/pages/About.tsx', "import { Heart, Activity, Globe, Users, Target, ShieldCheck, HeartPulse } from 'lucide-react';", "import { Heart, Globe, Users, Target, ShieldCheck, HeartPulse } from 'lucide-react';")
manual_fix('src/pages/About.tsx', "const { t } = useTranslation();", "")
manual_fix('src/pages/About.tsx', "import { useTranslation } from 'react-i18next';", "")

# Blog.tsx
manual_fix('src/pages/Blog.tsx', "import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';", "import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';")

# Clinics.tsx
manual_fix('src/pages/Clinics.tsx', "import React from 'react';", "")
manual_fix('src/pages/Clinics.tsx', "import { Link } from 'react-router-dom';", "")
manual_fix('src/pages/Clinics.tsx', """import { 
  Building2, Calendar, Archive, Megaphone, Stethoscope, MapPin, 
  Award, ArrowRight, Grid, Heart, ShieldCheck, FileText, Activity, 
  CheckCircle, Bell, Clock, MoreVertical, LayoutGrid, AlertCircle, 
  Phone, Search, MessageCircle, ChevronRight, Play, Check
} from 'lucide-react';""", """import { 
  Building2, Calendar, Archive, Megaphone, Stethoscope, MapPin, 
  Award, ArrowRight, Grid, Heart, FileText, Activity, 
  CheckCircle, Bell, LayoutGrid, 
  Phone, Search, MessageCircle, ChevronRight
} from 'lucide-react';""")

# Features.tsx
manual_fix('src/pages/Features.tsx', "import { Heart, Calendar, Shield, Activity, Share2, Users, Bell, Sparkles, Clock, Globe, Search, ArrowRight, CheckCircle2 } from 'lucide-react';", "import { Heart, Calendar, Shield, Activity, Share2, Users, Bell, Sparkles, Clock, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';")
manual_fix('src/pages/Features.tsx', "import { Link } from 'react-router-dom';", "")

# Home.tsx
manual_fix('src/pages/Home.tsx', "import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';", "import { motion, useScroll, useTransform } from 'framer-motion';")
manual_fix('src/pages/Home.tsx', "import React, { useState, useEffect, useRef } from 'react';", "import React, { useEffect, useRef } from 'react';")
manual_fix('src/pages/Home.tsx', "import { Heart, Calendar, Shield, Activity, ChevronRight, Play, Clock, MapPin, Search, ArrowRight, Sparkles, Star, Users, CheckCircle2, ShieldCheck, Stethoscope, Syringe, PhoneCall, Gift, Quote, QrCode } from 'lucide-react';", "import { Heart, Calendar, Shield, Activity, ChevronRight, Play, Clock, MapPin, Search, ArrowRight, Sparkles, Star, Users, CheckCircle2, ShieldCheck, Stethoscope, Syringe, Gift, Quote, QrCode } from 'lucide-react';")

print("Fixed imports")
