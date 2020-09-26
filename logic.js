//add date to banner
document.getElementById("banner").innerHTML += `<p id=DateEntry class=Custom> Today is ${new Date().toLocaleDateString()}</p>`


//loop through items and add icon on screen
getItems().forEach(element => {
    document.getElementById("itemTable").innerHTML += `<div class="tableItem"><p>item: ${element} </p><div>`
});



function getItems(){
    var items = ["first", "second", "third"];
    return items;
}