import type { Theme } from "./common";
import { setUserPreferences } from "./setUserPreferences";

export function setTheme(shouldBeDark: boolean = true) {

    const currentTheme: Theme = shouldBeDark ? 'dark' : 'light'
    const oldTheme: Theme = shouldBeDark ? 'light' : 'dark'
    document.documentElement.classList.remove(oldTheme);
    document.documentElement.classList.add(currentTheme);

    setUserPreferences({ theme: currentTheme })
}