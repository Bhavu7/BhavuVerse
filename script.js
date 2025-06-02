document.addEventListener("DOMContentLoaded", () => {
  // Add hover effect to cards
  const cards = document.querySelectorAll(".link-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // Add ripple effect to cards
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("span");
      ripple.classList.add("ripple-effect");
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      card.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 800);
    });
  });

  // Add subtle parallax effect to profile section
  const profileSection = document.querySelector(".group");
  if (profileSection) {
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      profileSection.style.transform = `perspective(1000px) rotateY(${
        x * 5
      }deg) rotateX(${y * 5}deg)`;
    });

    profileSection.addEventListener("mouseleave", () => {
      profileSection.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    });
  }
});
