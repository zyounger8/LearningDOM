const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "#4a4e4d";

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add('flex-around')

menuLinks.forEach((linkObj) => {
    const a = document.createElement('a')
    a.setAttribute('href', linkObj.href)
    a.textContent = linkObj.text
    topMenuEl.appendChild(a)
    console.log(a)
})