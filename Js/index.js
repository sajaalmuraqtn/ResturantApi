window.addEventListener('scroll', () => {
    const navElement = document.getElementById('nav');
    const startPontElement = document.getElementById('startPoint');
    
    if (window.scrollY >startPontElement?.offsetTop) {
        navElement.style.backgroundColor = 'rgb(0,0,0,0.5)';
        navElement.style.transition='1s';
         
    } else {
        navElement.style.background='none';
    }
});