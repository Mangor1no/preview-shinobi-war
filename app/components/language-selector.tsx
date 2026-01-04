"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "kr", name: "Korean", nativeName: "한국어" },
  { code: "th", name: "Thai", nativeName: "ไทย" },
  { code: "km", name: "Khmer", nativeName: "ខ្មែរ" },
  { code: "cn", name: "Chinese", nativeName: "中文" },
];

interface LanguageSelectorProps {
  onLanguageChange?: () => void;
}

export function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Extract current language from pathname (e.g., /en/... or /ja/...)
  const currentLang = pathname.split("/")[1] || "en";
  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    // Replace the language segment in the pathname
    const segments = pathname.split("/");
    segments[1] = langCode;
    const newPath = segments.join("/");
    router.replace(newPath);
    onLanguageChange?.();
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 text-white hover:text-red-400 transition-colors uppercase text-xs lg:text-sm font-semibold tracking-wider focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
          aria-label="Select language"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {currentLanguage.code.toUpperCase()}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-black border-white/20 text-white min-w-[180px]"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`cursor-pointer hover:bg-red-500/20 hover:text-red-400 focus:bg-red-500/20 focus:text-red-400 ${
              currentLang === lang.code ? "bg-red-500/10 text-red-400" : ""
            }`}
          >
            <div className="flex flex-col">
              <span className="font-medium">{lang.nativeName}</span>
              <span className="text-xs text-white/60">{lang.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
