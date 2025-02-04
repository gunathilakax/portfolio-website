// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect
function consoleText(words, id, colors = ['#E1E1E1']) {
    let visible = true;
    let con = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);

    window.setInterval(() => {
        if (letterCount === 0 && !waiting) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            setTimeout(() => {
                let usedColor = colors.shift();
                colors.push(usedColor);
                let usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && !waiting) {
            waiting = true;
            setTimeout(() => {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 2000);
        } else if (!waiting) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120);

    window.setInterval(() => {
        con.className = visible ? 'console-underscore hidden' : 'console-underscore';
        visible = !visible;
    }, 400);
}

consoleText(["I'm Sithija Shehara"], 'text');

// Filter Projects
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const categories = card.getAttribute("data-category").split(" ");
                card.style.display = (filter === "all" || categories.includes(filter)) ? "block" : "none";
            });
        });
    });

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            window.open('#', '_blank');
        });
    });

    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const header = document.querySelector('header');

    hamburger.addEventListener('click', () => {
        fullscreenMenu.classList.toggle('active');
        header.classList.toggle('active'); // Add this line to toggle the header background
    });

    // Close fullscreen menu when a link is clicked
    fullscreenMenu.querySelectorAll('ul li a').forEach(link => {
        link.addEventListener('click', () => {
            fullscreenMenu.classList.remove('active');
            header.classList.remove('active'); // Add this line to remove the header background
        });
    });
});