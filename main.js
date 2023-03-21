async function requestInfo() {
    console.log("Cargando Informacion...");
    const data = await fetch("data.json");
    const json = await data.json();
    let html = "";
    for (let i = 0; i <json.posts.length; i++){
        const post = json.posts[i];
        const [profileURL, postURL] = await Promise.all([

            downloaderImage(post.profile.photo),
            downloaderImage(post.content.photo),
        ])
    }
}
async function downloaderImage(url){
    console.log(`Descargando ${url}...`);
    const response = await fetch(`http://localhost:5500/img/${url}`);
    const blob = await response.blob();
    const imgURL = URL.createObjectURL(blob);
    console.log(`Descarga completa de ${url}`);
    return imgURL;
}