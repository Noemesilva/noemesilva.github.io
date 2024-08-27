const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark"
    ? rootHtml.setAttribute("data-theme", "light")
    : rootHtml.setAttribute("data-theme", "dark");

  toggleTheme.classList.toggle("bi-moon-stars");
  toggleTheme.classList.toggle("bi-sun");
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive
      ? accordionItem.classList.remove("active")
      : accordionItem.classList.add("active");
  });
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  const newTheme = currentTheme === "dark" ? "light" : "dark";
  rootHtml.setAttribute("data-theme", newTheme);

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");

  /* Salvar o tema no localStorage*/
  localStorage.setItem("theme", newTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    rootHtml.setAttribute("data-theme", savedTheme);
    if (savedTheme === "light") {
      toggleTheme.classList.remove("bi-sun");
      toggleTheme.classList.add("bi-moon-stars");
    } else {
      toggleTheme.classList.remove("bi-moon-stars");
      toggleTheme.classList.add("bi-sun");
    }
  }
});
