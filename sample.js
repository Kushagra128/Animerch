// script.js
let products = [
  {
    id: 1,
    name: "Men's Black Graphic Printed Oversized Half Sleeve T-Shirt ",
    price: 600,
    image: 'assets/anime/t1/t1.jpg',
    description: 'This is a description for product 1',
  },
  {
    id: 2,
    name: 'Demon Slayer Tanjiro Kamado Anime Oversized T-Shirt',
    price: 400,
    image: 'assets/anime/t3/t1.jpg',
    description: 'This is a description for product 2',
  },
  {
    id: 3,
    name: 'Jujutsu Kaisen Ora Ora Gojo SatoruUnisex Anime Hoodie',
    price: 700,
    image: 'assets/anime/h1/h1.jpg',
    description: 'This is a description for product 3',
  },
  {
    id: 4,
    name: 'Naruto Short Sleeve Anime Graphic Printed Shirt',
    price: 500,
    image: 'assets/anime/s1/s1.jpg',
    description: 'This is a description for product 4',
  },
  {
    id: 5,
    name: 'YORIICHI Gojo Satoru Casual Shirt for Men & Women ',
    price: 700,
    image: 'assets/anime/s2/s1.jpg',
    description: 'This is a description for product 5',
  },
  {
    id: 6,
    name: 'Tokyo Revengers Tokyo Manji Uniform Unisex Anime Hoodie',
    price: 1000,
    image: 'assets/anime/h2/h1.jpg',
    description: 'This is a description for product 6',
  },
];

const priceRangeInput = document.getElementById('price-range');
const priceValueLabel = document.getElementById('price-value');
const productList = document.getElementById('product-list');

priceRangeInput.addEventListener('input', () => {
  const currentValue = priceRangeInput.value;
  priceValueLabel.textContent = `₹${currentValue}`;

  const filteredProducts = products.filter((product) => {
    return product.price >= 100 && product.price <= currentValue;
  });

  generateProductList(filteredProducts);
});

function generateProductList(products) {
  productList.innerHTML = '';
  let rowHTML = '';
  let columnIndex = 0;

  products.forEach((product) => {
    if (columnIndex % 3 === 0) {
      rowHTML += '<div class="row">';
    }

    const productHTML = `
      <div class="col-md-4 col-12">
        <div class="single_product shadow text-center p-1">
          <div class="product_img">
            <a href="product_detail.html?id=${product.id}"><img src="${product.image}" class="img img-fluid" alt=""></a>
          </div>
          <div class="product-caption my-3">
            <div class="product-r atting">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <h5><a href="product_detail.html?id=${product.id}">${product.name}</a></h5>
            <div class="price">
              <b><span class="mr-1">₹</span><span>${product.price}</span></b>
            </div>
          </div>
        </div>
      </div>
    `;

    rowHTML += productHTML;

    columnIndex++;

    if (columnIndex % 3 === 0 || columnIndex === products.length) {
      rowHTML +=
        '</div>';
      productList.innerHTML += rowHTML;
      rowHTML = '';
    }
  });
}