import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = {
    name: string;
    primary: string;
    background: string;
    text: string;
};

const themes: Theme[] = [
    {
        name: "Default",
        primary: "#0070f3",
        background: "#FFE7E7",
        text: "#201A1C",
    },
    {
        name: "Dark",
        primary: "#0070f3",
        background: "#1a1a1a",
        text: "#ffffff",
    },
    {
        name: "Ocean",
        primary: "#0891b2",
        background: "#f0f9ff",
        text: "#0c4a6e",
    },
    {
        name: "Forest",
        primary: "#16a34a",
        background: "#f0fdf4",
        text: "#14532d",
    },
    {
        name: "Sunset",
        primary: "#ea580c",
        background: "#fff7ed",
        text: "#7c2d12",
    },
];

const ColorPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

    useEffect(() => {
        const savedTheme = localStorage.getItem("colorTheme");
        if (savedTheme) {
            const theme = themes.find(t => t.name === savedTheme);
            if (theme) {
                setCurrentTheme(theme);
                applyTheme(theme);
            }
        }
    }, []);

    const applyTheme = (theme: Theme) => {
        document.documentElement.style.setProperty("--color-primary", theme.primary);
        document.documentElement.style.setProperty("--color-background", theme.background);
        document.documentElement.style.setProperty("--color-text", theme.text);
        localStorage.setItem("colorTheme", theme.name);
    };

    const handleThemeChange = (theme: Theme) => {
        setCurrentTheme(theme);
        applyTheme(theme);
        setIsOpen(false);
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all border border-neutral-200 dark:border-neutral-700"
                aria-label="Color palette">
                <Palette className="w-5 h-5" style={{ color: currentTheme.primary }} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                    {themes.map((theme) => (
                        <button
                            key={theme.name}
                            onClick={() => handleThemeChange(theme)}
                            className="w-full px-4 py-2 text-left hover:bg-neutral-100 dark:hover:bg-neutral-700 flex items-center gap-2"
                            style={{ color: theme.text }}>
                            <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: theme.primary }}
                            />
                            {theme.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ColorPalette; 