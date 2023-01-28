const btnDarkMode = document.querySelector(".dark-mode-btn");
// 1 На уровне сис настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}
//2 Проверка темной темі в ЛокалСторадж

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
 }

//Првоерка темной темы на уровне системной настройки

// Смена темы под сис настройки
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : 'Light';
 
    if (newColorScheme === 'dark') {
         btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
    } else {
         btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
    }
})
//Включение ночного режима
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');
    
    if (isDark) {
        localStorage.setItem("darkMode",'dark')
    } else {
        localStorage.setItem("darkMode",'light')
    }
}