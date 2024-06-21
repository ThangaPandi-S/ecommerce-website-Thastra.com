/* var productContainer = document.getElementById("products");
var searchingProduct = document.getElementById("search");

var productList = productContainer.querySelectorAll("div");
searchingProduct.addEventListener("keyup", function(event) { // Add 'event' as an argument
    var enteredValue = event.target.value.toUpperCase();
    for (count = 0; count < productList.length; count += 1) {
        var productName = productList[count].querySelector("p").textContent;
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
}); */





















var products = document.getElementById("products");
var elements = products.querySelectorAll(".product-box");

function check(){
    searchingProduct = event.target.value.toUpperCase();
    for(i=0;i<elements.length;i++){
        if(elements[i].textContent.toUpperCase().indexOf(searchingProduct)<0){
            elements[i].style.display="none";
        }
        else{
            elements[i].style.display="block"
        }
    }
}