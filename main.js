async function requestInfo() {
    console.log("Cargando Informacion...");
    const data = await fetch("data.json");
    const json = await data.json();
    let html = "";
    for (let i = 0; i <json.posts.length; i++){
        const post = json.posts[i];
        const [profileURL, phototURL] = await Promise.all([

            downloaderImage(post.profile.photo),
            downloaderImage(post.content.photo),
        ]);
        html += `
        <div class="card-container">
        <div class="card-header">
            <img src="${profileURL}" alt="" class="fadeIn">
            <h3 class="fadeIn">${post.profile.name}</h3>
        </div>

        <div class="card-content">
            <div class="card-text">
                <p class="fadeIn">${post.content.text}</p>
            </div>

            <div class="card-image">
                <img src="${phototURL}" alt="" class="fadeIn">
            </div>
        </div>
    </div>
    ` ;
    }
    console.log("adjuntando contenido")
    document.querySelector("#container").innerHTML = html;
}
async function downloaderImage(url){
    console.log(`Descargando ${url}...`);
    const response = await fetch(`http://localhost:5500/img/${url}`);
    const blob = await response.blob();
    const imgURL = URL.createObjectURL(blob);
    console.log(`Descarga completa de ${url}`);
    return imgURL;
}
requestInfo()