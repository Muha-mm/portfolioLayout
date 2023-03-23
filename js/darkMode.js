const darkModeBtn = document.querySelector(".darkModeBtn");

// проверка системных настроек
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    darkModeBtn.classList.add("darkModeBtn--active");
    document.body.classList.add("dark");
}

// // проверка в Local storage
if (localStorage.getItem("darkMode") === "dark") {
  darkModeBtn.classList.add("darkModeBtn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light"){
    darkModeBtn.classList.remove("darkModeBtn--active");
    document.body.classList.remove("dark");
}

// проверка измененний системных настроек
window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e)=>{
    if(newColorScheme === 'dark'){
        darkModeBtn.classList.add("darkModeBtn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark")
    } else{
        darkModeBtn.classList.remove("darkModeBtn--active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light")
    }
})

// включение по кнопке
darkModeBtn.onclick = function () {
  darkModeBtn.classList.toggle("darkModeBtn--active");
  const isDark = document.body.classList.toggle("dark");

  isDark
    ? localStorage.setItem("darkMode", "dark")
    : localStorage.setItem("darkMode", "light");
};
