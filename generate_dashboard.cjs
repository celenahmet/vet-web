const fs = require('fs');

const imports = `import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Activity, AlertTriangle, Bell, Calendar, CheckCircle2, ChevronDown, 
  ChevronRight, ChevronUp, ChevronsUpDown, LayoutDashboard, LogOut, 
  MessageCircle, MoreHorizontal, PawPrint, Users 
} from 'lucide-react';

export default function DashboardMockup() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-row">
`;

const content = fs.readFileSync('src/components/DashboardMockupCode.txt', 'utf8');

const footer = `
    </div>
  );
}
`;

fs.writeFileSync('src/components/DashboardMockup.tsx', imports + content + footer);
