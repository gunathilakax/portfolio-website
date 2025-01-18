// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to create the typewriter effect
function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#E1E1E1']; // Default text color
    let visible = true;
    let con = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);

    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function () {
                let usedColor = colors.shift();
                colors.push(usedColor);
                let usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000); // Delay before starting the next word
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 2000); // Delay before deleting the word
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120); // Typing speed (milliseconds per character)

    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden';
            visible = false;
        } else {
            con.className = 'console-underscore';
            visible = true;
        }
    }, 400); // Cursor blink speed
}

// Initialize the typewriter effect
consoleText(["I'm Sithija Shehara"], 'text', ['#E1E1E1']);



// Filter Projects
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            // Show/hide projects based on the filter
            projectCards.forEach(card => {
                const categories = card.getAttribute("data-category").split(" ");
                if (filter === "all" || categories.includes(filter)) {
                    card.style.display = "block"; // Show the project
                } else {
                    card.style.display = "none"; // Hide the project
                }
            });
        });
    });


    // Open project in a new window when clicked
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            window.open('#', '_blank'); // Replace '#' with the project link
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active")); // Remove active class from all links
            this.classList.add("active"); // Add active class to the clicked link
        });
    });
});
