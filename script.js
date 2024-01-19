// final Data has to be displayed in the Bootstrap Cards
var container = document.createElement("div");
container.className="container";
var row1 =document.createElement("div");
row1.className="main";
row1.innerHTML="RANDOM FOX IMAGES";
var row2 =document.createElement("div");
row2.className="row"

async function get_data() {
    try {
        for(var i =0;i<9;i++){
            var res = await fetch("https://randomfox.ca/floof/");
        var result = await res.json(); 
        console.log(result)     
            var col=document.createElement("div");
            col.className="col-md-4";
            col.innerHTML=`<img class="img-thumbnail" alt="fox-image" src="${result.image}">`
            row2.append(col);
        }
      
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
get_data();
container.append(row1);
container.append(row2);
document.body.append(container);