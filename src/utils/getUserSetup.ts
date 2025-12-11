export function getUserSetup() {
    if (typeof window === 'undefined') {
        return { theme: 'dark' };
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
        return { theme: savedTheme };
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return { theme: prefersDark ? 'dark' : 'light' };
}