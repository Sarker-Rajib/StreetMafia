document.getElementById("statTrigger").addEventListener('click', () => {
    const navMenu = document.getElementById("navMenu");
    if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show')
    }
    document.getElementById("stats").classList.add('show');
});


document.getElementById("statCloser").addEventListener('click', () => {
    document.getElementById("stats").classList.remove('show')
})


document.getElementById("dropMenutrigger").addEventListener('click', () => {
    const statmenu = document.getElementById("stats");
    if (statmenu.classList.contains('show')) {
        statmenu.classList.remove('show')
    }
    document.getElementById("navMenu").classList.add('show')
})

document.getElementById("dropMenuCloser").addEventListener('click', () => {
    document.getElementById("navMenu").classList.remove('show')
})

const navPills = document.querySelectorAll(".nav-pill");
navPills.forEach((navPill, i) => {
    navPill.addEventListener("click", function () {
        navPills.forEach(pill => {
            pill.classList.add("collapsed");
        });
        this.classList.remove("collapsed");
    });
});
