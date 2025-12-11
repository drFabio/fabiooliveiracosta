export function setTheme(shouldBeDark: boolean = true) {
    if (shouldBeDark) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");

    }
}