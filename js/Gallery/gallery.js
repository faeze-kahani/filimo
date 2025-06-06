async function gallery() {
    let gallerys = ""
    let data = await fetch("https://faeze-kahani.github.io/dbjson/db.json");
    let res = await data.json();
    gallerys= res.gallerys.map((elem) => {
        return `<img src=${elem.src} alt=${elem.alt}>`
    });
    document.querySelector("#gallerys").insertAdjacentHTML("afterbegin",gallerys.join(" "))
}
export default gallery