import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";

export type Language = 'en' | 'hi' | 'kn';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  hi: { name: 'हिंदी', flag: '🇮🇳' },
  kn: { name: 'ಕನ್ನಡ', flag: '🇮🇳' }
};

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <Select value={currentLanguage} onValueChange={onLanguageChange}>
      <SelectTrigger className="w-40">
        <Globe className="h-4 w-4 mr-2" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([code, lang]) => (
          <SelectItem key={code} value={code}>
            <span className="flex items-center gap-2">
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;