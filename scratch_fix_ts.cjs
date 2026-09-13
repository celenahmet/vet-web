const fs = require('fs');

function replaceInFile(path, oldText, newText) {
  let code = fs.readFileSync(path, 'utf8');
  code = code.replace(oldText, newText);
  fs.writeFileSync(path, code);
}

// 1. ClinicsCTASection.tsx
replaceInFile(
  '/Users/rumeysabuyuk/Desktop/vetweb/src/components/ClinicsCTASection.tsx',
  "import React, { useState } from 'react';",
  "import { useState } from 'react';"
);
replaceInFile(
  '/Users/rumeysabuyuk/Desktop/vetweb/src/components/ClinicsCTASection.tsx',
  "import { ArrowRight, Sparkles } from 'lucide-react';",
  "import { Sparkles } from 'lucide-react';"
);

// 2. DigitalGrowthSection.tsx
replaceInFile(
  '/Users/rumeysabuyuk/Desktop/vetweb/src/components/DigitalGrowthSection.tsx',
  "import { Globe, MessageCircle, Search, ShieldCheck, ArrowRight, Smartphone, Link as LinkIcon, FileText, CheckCircle2 } from 'lucide-react';",
  "import { Globe, MessageCircle, Search, ShieldCheck, ArrowRight, Link as LinkIcon, FileText, CheckCircle2 } from 'lucide-react';"
);
replaceInFile(
  '/Users/rumeysabuyuk/Desktop/vetweb/src/components/DigitalGrowthSection.tsx',
  `  const sections = [
    { id: 'f1', title: t('clinics_s6_f1_title'), icon: <Globe size={18} /> },
    { id: 'f2', title: t('clinics_s6_f2_title'), icon: <MessageCircle size={18} /> },
    { id: 'f3', title: t('clinics_s6_f3_title'), icon: <ShieldCheck size={18} /> }
  ];`,
  ""
);

// 3. LabInnovationMockup.tsx
replaceInFile(
  '/Users/rumeysabuyuk/Desktop/vetweb/src/components/LabInnovationMockup.tsx',
  "import AnimatedBorder from './AnimatedBorder';",
  ""
);

// 4. PatientMgmtMockup.tsx
replaceInFile(
  '/Users/rumeysabuyuk/Desktop/vetweb/src/components/PatientMgmtMockup.tsx',
  "import AnimatedBorder from './AnimatedBorder';",
  ""
);

// 5. About.tsx
let aboutCode = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/About.tsx', 'utf8');
aboutCode = aboutCode.replace("import React, { useState } from 'react';", "import { useState } from 'react';");
aboutCode = aboutCode.replace("import { Target, Users, Zap, ShieldCheck, Heart, Award, ArrowRight, CheckCircle2, Globe, Sparkles, Activity, Search, BookOpen, Smartphone, Shield, Building2 } from 'lucide-react';", "import { Target, Users, Zap, ShieldCheck, Heart, Award, ArrowRight, CheckCircle2, Globe, Sparkles, Activity, Search, BookOpen, Shield } from 'lucide-react';");
aboutCode = aboutCode.replace("const [activeCard, setActiveCard] = useState<number | null>(null);", "");
fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/About.tsx', aboutCode);

// 6. Clinics.tsx
let clinicsCode = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Clinics.tsx', 'utf8');
clinicsCode = clinicsCode.replace("import { Search, MapPin, Calendar, Clock, Star, Phone, MessageCircle, Globe, Shield, Activity, Users, Settings, Filter, ArrowRight, ChevronRight, Share2, Heart, Camera, Video, FileText } from 'lucide-react';", "import { Search, MapPin, Calendar, Clock, Star, Phone, MessageCircle, Globe, Shield, Activity, Users, Settings, Filter, ArrowRight, ChevronRight, Share2, Heart, Camera, Video } from 'lucide-react';");
clinicsCode = clinicsCode.replace("import { CheckCircle, ShieldCheck, Zap, LineChart } from 'lucide-react';", "import { ShieldCheck, Zap, LineChart } from 'lucide-react';");
clinicsCode = clinicsCode.replace("import AnimatedBorder from '../components/AnimatedBorder';", "");
fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Clinics.tsx', clinicsCode);

// 7. Download.tsx
let downloadCode = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Download.tsx', 'utf8');
downloadCode = downloadCode.replace("import AnimatedBorder from '../components/AnimatedBorder';", "");
fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Download.tsx', downloadCode);

// 8. Pricing.tsx
let pricingCode = fs.readFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', 'utf8');
pricingCode = pricingCode.replace("import { Check, X, Shield, Users, Activity, Settings, Zap, ArrowRight, CheckCircle2, Globe, Database, HelpCircle } from 'lucide-react';", "import { Check, X, Shield, Users, Activity, Settings, Zap, ArrowRight, CheckCircle2, Globe, HelpCircle } from 'lucide-react';");
pricingCode = pricingCode.replace("import { Search, Calendar, MessageCircle, FileText, Smartphone, CreditCard, Star } from 'lucide-react';", "import { Search, Calendar, MessageCircle, FileText, Smartphone, Star } from 'lucide-react';");
pricingCode = pricingCode.replace("import { Bell, Clock, Building, Heart, PlusCircle, UserPlus, PieChart, HeartPulse } from 'lucide-react';", "import { Bell, Clock, Building, Heart, PlusCircle, UserPlus } from 'lucide-react';");
pricingCode = pricingCode.replace("import { Puzzle, PenTool, Layout, Palette, Code, Terminal } from 'lucide-react';", "import { PenTool, Layout, Palette, Terminal } from 'lucide-react';");
fs.writeFileSync('/Users/rumeysabuyuk/Desktop/vetweb/src/pages/Pricing.tsx', pricingCode);

console.log('TS errors fixed.');
