import { getUserPreferences } from './getUserPreferences'
import { setTheme } from './setTheme';
import { themes, type Theme } from './common'


function toogleTheme(_e: PointerEvent) {
    const currentTheme = Array.from(document.documentElement.classList).filter((theme: string) => themes.includes(theme as Theme))?.[0] ?? 'dark';
    setTheme(currentTheme !== 'dark');
}
function setup() {
    const { theme } = getUserPreferences()
    setTheme(theme === 'dark');
    document.getElementById('theme-toggle')?.addEventListener("click", toogleTheme)
}


setup()