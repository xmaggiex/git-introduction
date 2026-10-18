const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  const isDark = body.getAttribute("data-theme") === "dark";

  if (isDark) {
    body.removeAttribute("data-theme");
    themeToggle.textContent = "Toggle dark mode";
  } else {
    body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "Toggle light mode";
  }
});
