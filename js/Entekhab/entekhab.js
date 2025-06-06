async function entekhab(){
    let entekhab=""
    let data = await fetch("https://faeze-kahani.github.io/dbjson/db.json")
    let res = await data.json()
    entekhab=res.entekhab.map((elem)=>{
        return `<div class="special">${elem.title}</div>`
    });
    document.querySelector("#rightSearch").insertAdjacentHTML("afterbegin",special.join(" "));
}

async function view(){
    let view=""
    let data = await fetch("https://faeze-kahani.github.io/dbjson/db.json")
    let res = await data.json()
    view=res.view.map((elem)=>{
        return`<div class="view-all" id="leftSearch">${elem.title}</div>`
    });
    document.querySelector("#leftSearch").insertAdjacentHTML("afterbegin",view.join(" "));

}
export{entekhab , view}