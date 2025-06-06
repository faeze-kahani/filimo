async function menu() {
  let menu = "";
  let data = await fetch("https://faeze-kahani.github.io/dbjson/db.json");
  let res = await data.json();
  menu = res.menu.map((elem) => {
    return `<li>
        <a href=${elem.href}>${elem.title}</a>
           </li>`;
  });
  document
    .querySelector("#rightMenu>ul")
    .insertAdjacentHTML("afterbegin", menu.join(" "));
}

async function menuBtns() {
  let menuBtns = ""
  let data = await fetch("https://faeze-kahani.github.io/dbjson/db.json");
  let res = await data.json();
  menuBtns=res.menuBtns.map((elem) => {
    return `<button class=${elem.id===1 || elem.id==="1" ? "sub" : "login"}>${elem.title}</button>`;
  });
  document
    .querySelector("#leftMenu")
    .insertAdjacentHTML("afterbegin", menuBtns.join(" "));
}

export {menu , menuBtns};
