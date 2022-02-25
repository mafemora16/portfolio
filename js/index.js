window.onload = () => {
    const header = document.querySelector('#header');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 40) {
            header.style.backgroundColor = "#F6F9FF";
        } else {
            header.style.backgroundColor = "transparent";
        }
    })
}