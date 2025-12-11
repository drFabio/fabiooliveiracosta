export const themes = ['light', 'dark'] as const
export type Theme = typeof themes[number]

export type Preferences = {
    theme?: Theme
}