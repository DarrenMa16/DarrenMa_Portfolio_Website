/* 
Darren Ma
Final Portfolio JS
Clean, defensive, site-wide script
*/

document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const btn = document.getElementById("backToTop");
    const images = document.querySelectorAll(".container img, .photo-grid img, .featured-grid img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeBtn");
    const themeBtn = document.getElementById("themeToggle");
    const dayBox = document.getElementById("dayBox");

    // Dark Mode Togle
    if (themeBtn) {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeBtn.textContent = "Switch to Light Mode ☀️";
        } else {
            themeBtn.textContent = "Switch to Dark Mode 🌙";
        }

        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");

            themeBtn.textContent = isDark
                ? "Switch to Light Mode ☀️"
                : "Switch to Dark Mode 🌙";
        });
    }

    // Back to Top Button
    if (btn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                btn.classList.add("show");
            } else {
                btn.classList.remove("show");
            }
        });

        btn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            btn.classList.remove("show");
        });
    }

    // Lightbox
    if (lightbox && lightboxImg && closeBtn && images.length > 0) {

        images.forEach(img => {
            img.addEventListener("click", () => {
                lightbox.classList.add("show");
                lightboxImg.src = img.src;
            });
        });

        closeBtn.addEventListener("click", () => {
            lightbox.classList.remove("show");
        });

        lightbox.addEventListener("click", (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove("show");
            }
        });
    }

    // Day Box Hover Effect
    if (dayBox) {
        dayBox.addEventListener("mouseover", () => {
            dayBox.style.transform = "scale(1.05)";
            dayBox.style.transition = "0.3s ease";
            dayBox.style.cursor = "pointer";
        });

        dayBox.addEventListener("mouseout", () => {
            dayBox.style.transform = "scale(1)";
        });
    }

});