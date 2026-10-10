let ProductsSec = document.getElementById("featuredProducts-products");
let categoriesSec = document.querySelector(".categories-menu");
let productsSec = document.querySelector(".products");

fetch("https://fakestoreapi.com/products?limit=8")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    document.getElementById("btn").addEventListener("click", () => {
      const searchValue = document
        .getElementById("SearchInput")
        .value.toLowerCase();
      const filterProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue);
      });
      ProductsSec.innerHTML = filterProducts
        .map((filterproduct) => {
          return `
            <div class="Featuredproduct">
            <img src="${filterproduct.image}" alt="" width="200px">
            <div class="content">
              <h2>${filterproduct.title}</h2>
              <h1>$${filterproduct.price}</h1>
              <button>Add To Cart</button>
            </div>
          </div>
          `;
        })
        .join("");
    });
    ProductsSec.innerHTML = products
      .map((product) => {
        return `
          <div class="Featuredproduct">
            <img src="${product.image}" alt="" width="200px">
            <div class="content">
              <h2>${product.title}</h2>
              <h1>$${product.price}</h1>
              <button>Add To Cart</button>
            </div>
          </div>
          `;
      })
      .join("");
  });

let clicked = false;

document.getElementById("bars").addEventListener("click", () => {
  if (!clicked) {
    document.querySelector(".nav-links").style.transform = "translateX(0%)";
    clicked = true;
  } else {
    document.querySelector(".nav-links").style.transform = "translateX(-300%)";
    clicked = false;
  }
});

fetch("https://fakestoreapi.com/products/categories")
  .then((response) => {
    return response.json();
  })
  .then((categories) => {
    categoriesSec.innerHTML += categories
      .map((category) => {
        return `<p class="categoriesname" category="${category}">${category}</p>`;
      })
      .join("");

    const categoriesName = document.querySelectorAll(".categoriesname");

    categoriesName.forEach((categoryName) => {
      categoryName.addEventListener("click", () => {
        categoriesName.forEach((Button) => {
          Button.classList.remove("active");
        });
        categoryName.classList.add("active");
        fetch("https://fakestoreapi.com/products?limit:1")
          .then((response) => {
            return response.json();
          })
          .then((products) => {
            let filterdCategoryProducts = products.filter((product) => {
              return (
                product.category.toLowerCase() ===
                categoryName.getAttribute("category").toLowerCase()
              );
            });
            if (categoryName.getAttribute("category") === "all") {
              productsSec.innerHTML = products
                .map((product) => {
                  return `<div class="product">
            <div class="image">
              <img
                src="${product.image}"
                alt=""
                width="200px"
              />
            </div>
            <div class="content">
              <p>${product.category}</p>
              <h2>${product.title}</h2>
              <div class="part">
                <h1>$${product.price}</h1>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>`;
                })
                .join("");
            } else {
              productsSec.innerHTML = filterdCategoryProducts
                .map((filterdCategoryProduct) => {
                  return `<div class="product">
            <div class="image">
              <img
              src="${filterdCategoryProduct.image}"
              alt=""
                width="200px"
                />
                </div>
                <div class="content">
              <p>${filterdCategoryProduct.category}</p>
              <h2>${filterdCategoryProduct.title}</h2>
              <div class="part">
              <h1>$${filterdCategoryProduct.price}</h1>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
            </div>`;
                })
                .join("");
            } 
            
          });
      });
    });
  });

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    productsSec.innerHTML = products
      .map((product) => {
        return `<div class="product">
            <div class="image">
              <img
                src="${product.image}"
                alt=""
                width="200px"
              />
            </div>
            <div class="content">
              <p>${product.category}</p>
              <h2>${product.title}</h2>
              <div class="part">
                <h1>$${product.price}</h1>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>`;
      })
      .join("");
  });
