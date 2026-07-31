import { createContext, useState, useEffect, useContext } from 'react';

export const themes = {
    modernBlue: {
        id: 'modernBlue',
        name: 'Modern Blue',
        colors: {
            '--theme-sidebar-bg': '#2c3e50',
            '--theme-sidebar-text': '#ecf0f1',
            '--theme-sidebar-border': '#34495e',
            '--theme-content-bg': '#ffffff',
            '--theme-text-primary': '#2c3e50',
            '--theme-text-secondary': '#7f8c8d',
            '--theme-text-light': '#95a5a6',
            '--theme-text-dark': '#444444',
            '--theme-accent': '#3498db',
            '--theme-divider': '#ecf0f1',
        },
        swatch: '#3498db'
    },
    professionalBlack: {
        id: 'professionalBlack',
        name: 'Professional Black',
        colors: {
            '--theme-sidebar-bg': '#222222',
            '--theme-sidebar-text': '#e0e0e0',
            '--theme-sidebar-border': '#444444',
            '--theme-content-bg': '#ffffff',
            '--theme-text-primary': '#111111',
            '--theme-text-secondary': '#666666',
            '--theme-text-light': '#999999',
            '--theme-text-dark': '#333333',
            '--theme-accent': '#555555',
            '--theme-divider': '#eeeeee',
        },
        swatch: '#222222'
    },
    emeraldGreen: {
        id: 'emeraldGreen',
        name: 'Emerald Green',
        colors: {
            '--theme-sidebar-bg': '#1e392a',
            '--theme-sidebar-text': '#e8f5e9',
            '--theme-sidebar-border': '#2d5a43',
            '--theme-content-bg': '#ffffff',
            '--theme-text-primary': '#1e392a',
            '--theme-text-secondary': '#5d6d7e',
            '--theme-text-light': '#8a9ca8',
            '--theme-text-dark': '#33403a',
            '--theme-accent': '#27ae60',
            '--theme-divider': '#e8ecef',
        },
        swatch: '#27ae60'
    },
    purple: {
        id: 'purple',
        name: 'Purple',
        colors: {
            '--theme-sidebar-bg': '#4a235a',
            '--theme-sidebar-text': '#f4ecf7',
            '--theme-sidebar-border': '#6c3483',
            '--theme-content-bg': '#ffffff',
            '--theme-text-primary': '#4a235a',
            '--theme-text-secondary': '#7f8c8d',
            '--theme-text-light': '#95a5a6',
            '--theme-text-dark': '#333333',
            '--theme-accent': '#8e44ad',
            '--theme-divider': '#f4ecf7',
        },
        swatch: '#8e44ad'
    },
    darkMode: {
        id: 'darkMode',
        name: 'Dark Mode',
        colors: {
            '--theme-sidebar-bg': '#121212',
            '--theme-sidebar-text': '#cccccc',
            '--theme-sidebar-border': '#333333',
            '--theme-content-bg': '#1e1e1e',
            '--theme-text-primary': '#ffffff',
            '--theme-text-secondary': '#aaaaaa',
            '--theme-text-light': '#777777',
            '--theme-text-dark': '#eeeeee',
            '--theme-accent': '#3498db',
            '--theme-divider': '#333333',
        },
        swatch: '#1e1e1e'
    }
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [currentThemeId, setCurrentThemeId] = useState(() => {
        return localStorage.getItem('resume-theme') || 'modernBlue';
    });

    useEffect(() => {
        localStorage.setItem('resume-theme', currentThemeId);
        const theme = themes[currentThemeId];
        const root = document.documentElement;
        
        // Apply CSS variables to the root element so they are globally available
        Object.entries(theme.colors).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    }, [currentThemeId]);

    const value = {
        currentThemeId,
        setTheme: setCurrentThemeId,
        currentTheme: themes[currentThemeId],
        availableThemes: Object.values(themes)
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
