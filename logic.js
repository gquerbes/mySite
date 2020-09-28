//add date to banner
document.getElementById("banner").innerHTML += `<p id=DateEntry class=Custom> Today is ${new Date().toLocaleDateString()}</p>`


//loop through items and add icon on screen
Array.prototype.forEach.call(getItems(), item=>{addItemsToGrid(item)})


function getItems(){
    var datbox = {name:"Datbox", url:"https://microsoftlike.com:62222", imgUrl: "https://user-images.githubusercontent.com/3851902/67696212-c4041500-f9a6-11e9-9937-89e2950d0eab.png"}
    var homeAssistant ={name:"HomeAssistant",url:"http://10.42.0.20:8123", imgUrl:"https://www.home-assistant.io/images/favicon-192x192-full.png"}
    var piHole ={name:"piHole", url:"http://10.42.0.21/admin", imgUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Pi-hole_vector_logo.svg/1200px-Pi-hole_vector_logo.svg.png"}
    return [       
       datbox, 
       homeAssistant,
       piHole
    ]
}

function addItemsToGrid(value, index, array){
    var div = document.createElement('div');
    div.className = "tableItem";
    div.appendChild(getImageForItem(value));
    div.innerHTML += `<h4>${value.name}</h4>`;
    document.getElementById("itemTable").appendChild(div);
}

function getImageForItem(value){
    var link = document.createElement('a');
    var image = document.createElement('img')
    image.src = value.imgUrl;
    image.style="height:70px;";
    link.href = value.url;
    link.appendChild(image);
    return link;
}