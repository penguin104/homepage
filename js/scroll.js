function handleScroll(){
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const fadePoint = 200;
    const LogoYello = document.querySelector(".slideInPenguinAtelier");
    const LogoBlue = document.querySelector(".slideInPenguinAtelier_blue");
    if(scrollTop > fadePoint){
        LogoYello.classList.add("scrollToHead");
        LogoBlue.classList.add("scrollToHead");
        console.log("ScrollDone");
        // console.log(LogoBlue);
        // console.log(LogoYello);
    }
    
}

window.addEventListener('scroll',handleScroll);
