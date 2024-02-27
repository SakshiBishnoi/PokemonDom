const container  = document.querySelector("#container");
const baseUrl = 'https://img.freepik.com/free-vector/hand-drawn-kawaii-food-illustration_52683-84840.jpg?w=1380&t=st=1709031245~exp=1709031845~hmac=483ada493c16e51b3430af1ea658ac0145977baffc57ed84feb7637acd9445b1'

for(let i=0; i<100; i++){ 
    const div  = document.createElement("div");
    div.classList.add("div");
    const span = document.createElement("span");
    span.innerText = `#${i}`;

    const newImg = document.createElement( "img" );
    newImg.src = `${baseUrl}${i}.jpg`;
    newImg.style.width = "200px"; // Adjust the width as desired
    newImg.style.height = "150px"; // Adjust the height as desire

    
    div.appendChild(newImg);
    div.appendChild(span)

    container.appendChild(div);
}


