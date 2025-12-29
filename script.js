document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.getElementById('ContactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank You");
});
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.style.background = "#222";
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "#333";
        header.style.boxShadow = "none";
    }
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.Features-item, .Contact, .Hero').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
});
const form = document.getElementById('ContactForm');

form?.addEventListener('submit', (e) => {
    e.preventDefault();

    let msg = document.createElement('p');
    msg.textContent = "✅ Message sent successfully!";
    msg.style.color = "green";
    msg.style.marginTop = "15px";
    msg.style.fontWeight = "bold";

    form.appendChild(msg);
    form.reset();

    setTimeout(() => {
        msg.remove();
    }, 3000);
});
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', e => {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        btn.appendChild(ripple);

        const rect = btn.getBoundingClientRect();
        ripple.style.left = e.clientX - rect.left + "px";
        ripple.style.top = e.clientY - rect.top + "px";

        setTimeout(() => ripple.remove(), 600);
    });
});
/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
