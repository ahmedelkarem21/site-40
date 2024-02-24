var shoes = [],
  shoes_data = document.getElementById("shoesData");

console.log(shoes_data);

var loadingSign = document.getElementsByClassName("loading");
console.log(loadingSign);

function loader() {
    if (shoes.length < 1) {
        shoes_data.innerHTML = `<div class="col-10">LOADING..</div>;`
    }
//   shoes_data.classList.add("loading");
// shoes_data.innerHTML = `<div class="col-10">LOADING..</div>;`
}



fetch("https://dummyjson.com/products/category/mens-shoes")
    .then((res) => res.json())
    .then((res) => (shoes = res.products))
// .then(() => loader())
    .then(() => displayShoes())
//   .then(() => console.log(shoes));

function displayShoes() {
     for (let index = 0; index < shoes.length; index++) {
     const shoe = shoes[index];
     shoes_data.innerHTML += `
         <div class="bg-white col-md-4 col-sm-12 text-center x">
         <h6 class="text-dark my-4">${shoe.title}</h6>
         <div class="my-5">
                 <img class="w-50" src="${shoe.thumbnail}" alt="this is an image">
             </div>
             <div class="my-4">
                 <span class="text-warning mx-2">
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                 </span>
                 <span>$ <span class="text-danger"> ${shoe.price}</span></span>
             </div>
         </div>
             `;
     }
    
}

// if ( shoes.length < 1 ){ shoes_data.innerHTML = `<div class="col-4">LOADING..</div>;`;}