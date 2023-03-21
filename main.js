async function requestInfo() {
    console.log("Cargando Informacion...");
    const data = await fetch("data.json");
    const json = await data.json();
    let html = "";
    for (let i = 0; i <json.posts.length; i++){
        const post = json.posts[i];
    }
}
async function downloaderImage(url){
    console.log(`Descargando ${url}...`);
    const response = await fetch(`http://localhost:5500/img/${url}`);
}