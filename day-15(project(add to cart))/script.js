

const products = [
      {id:1 , img:"https://s.alicdn.com/@sc04/kf/H7b26b67c65394e37ade08917526f6b4c2.jpg_720x720q50.jpg" , name: "Smartphone X12", category: "Electronics", price: "₹49,999" },
      {id:2 , img:"https://redtape.com/cdn/shop/files/RSO3783_8_jpg_d419433a-ce38-4b05-9ece-9a442af3767d.jpg?v=1750068001" , name: "Running Shoes", category: "Sports", price: "₹2,999" },
      {id:3 , img:"https://www.glidinggearcompany.com/cdn/shop/files/IMG_3164.jpg?v=1682422929" , name: "Leather Wallet", category: "Fashion", price: "₹999" },
      {id:4 , img:"https://bergnerhome.in/cdn/shop/files/BGIN-1395-8_3382e15b-b836-4fff-b298-2ae1d678166b.jpg?v=1739191566&width=1080" , name: "Cookware Set", category: "Home", price: "₹3,499" },
      {id:5 , img:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721992677/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/308673_jxaozj.png?tr=w-600" , name: "Bluetooth Headphones", category: "Electronics", price: "₹1,999" },
      {id:6 , img:"" , name: "Sci-Fi Novel", category: "Books", price: "₹499" },
      {id:7,  img:"" ,name: "Face Cream", category: "Beauty", price: "₹799" },
      {id:8 ,  img:"" ,name: "Cricket Bat", category: "Sports", price: "₹1,499" },
      {id:9 ,  img:"" ,name: "Teddy Bear", category: "Toys", price: "₹699" },
      {id:10 , img:"" , name: "Organic Rice", category: "Grocery", price: "₹1,199" }
    ];
    // array.forEach(element,index => {
    //      let car = localStorage.setItem("element",JSON.stringify(products))
    //      car.innerHTML = ``
    // });
 

   

      
      
    

    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = products.map((product, index) => `
      <div class="card" id="${product.id}">
        <img src="${product.img}" alt="Product">
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <p class="price">${product.price}</p>
          <div class="buttons">
            <button class="buy-btn">Buy Now</button>
            <button class="cart-btn" onclick="addToCart(${product.id},${product.img},${product.price},${product.category})">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('');

    function addToCart() {
       let Count = 0;
  //     let cartcount = document.getElementById('cartCount')
      
  //   let maincard = document.getElementById('maincard')
  //   console.log(maincard)
  //     maincard.innerHTML += `<div class="card" id="${box}">
  //   <img src="${photo}" alt="Product Image">
  //   <div class="price" data-price="999">${kimat}</div>
  //   <div class="category">${various}</div>
  //   <div class="quantity">
  //     <button onclick="decrease(0)">-</button>
  //     <span id="qty0">1</span>
  //     <button onclick="increase(0)">+</button>
  //   </div>
  // </div>`
cartcount.innerText = Count
 Count++;
}





    
