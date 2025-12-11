import type { Preferences } from "./common";
import { getUserPreferences } from "./getUserPreferences";

export function setUserPreferences(newPreferences: Partial<Preferences>) {
    const oldPreferences = getUserPreferences()
    window.localStorage.setItem('preferences', JSON.stringify({ ...oldPreferences, ...newPreferences }))

}