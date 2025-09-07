export type ThemeProviderValueType={
    theme:string,
    toggleTheme:()=>void,
    setLightTheme?:()=>void,
    setDarkTheme?:()=>void,
    isDark?:boolean
}