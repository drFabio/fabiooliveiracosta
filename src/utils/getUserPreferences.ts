import type { Preferences } from "./common";

export function getUserPreferences() {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const serialized = localStorage.getItem('preferences')
    const savedPreferences: Preferences = JSON.parse(serialized || `{}`)

    return { theme: prefersDark ? 'dark' : 'light', ...savedPreferences };
}