const data = [
    {
        id: 1,
        name: "Invicta Men's Pro Diver",
        img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
        price: 14,
        cat: "Dress",
    },
    {
        id: 11,
        name: "Waterproof with Alarm Stopwatch Watch",
        img: "https://images-na.ssl-images-amazon.com/images/I/71rT69t8GVL._AC_SX679_.jpg",
        price: 15,
        cat: "Dress",
    },
    {
        id: 2,
        name: "Timex Men's Expedition Scout ",
        img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
        price: 16,
        cat: "Sport",
    },
    {
        id: 3,
        name: "Breitling Superocean Heritage",
        img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
        price: 17,
        cat: "Luxury",
    },
    {
        id: 4,
        name: "Casio Classic Resin Strap ",
        img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
        price: 16,
        cat: "Sport",
    },
    {
        id: 5,
        name: "U-Boat Watch Chimera 46 Sideview ",
        img: "http://cdn.shopify.com/s/files/1/0125/7792/products/ub-805-u-boat-chimera-46-sideview-7224.jpg?v=1420797749",
        price: 18,
        cat: "Casual",
    },
    {
        id: 27,
        name: "montre apple watch ",
        img: "http://img.igen.fr/2015/3/macgpic-1426442314-36544098780277-op.jpg",
        price: 15,
        cat: "Casual",
    },
    {
        id: 19,
        name: "Smartwatch ",
        img: "https://images-na.ssl-images-amazon.com/images/I/71XuesoTuiL._AC_SX679_.jpg",
        price: 16,
        cat: "Casual",
    },
    {
        id: 21,
        name: "Apple Watch Series 3 ",
        img: "https://www.afrugalchick.com/wp-content/uploads/2020/09/apple-watch-3-868x1024.jpg",
        price: 11,
        cat: "Casual",
    },
    {
        id: 50,
        name: "Beeasy Mens Digital Watch",
        img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2017/EDITORIAL/RESORT/MEN/WATCHES/MAIN/RES1_W_men_VD_timex._V520554600_.jpg",
        price: 10,
        cat: "Casual",
    },
    {
        id: 15,
        name: "Garmin Venu Smartwatch ",
        img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
        price: 14,
        cat: "Casual",
    },
];

const conversionRate = 80; // 1 USD = 80 INR

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
        .map(
            (product) =>
                `
         <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">₹${(product.price * conversionRate).toFixed(2)}</span>
          </div>
      `
        )
        .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
        displayProducts(
            data.filter((item) => item.name.toLowerCase().includes(value))
        );
    } else {
        displayProducts(data);
    }
});

const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
        "All",
        ...allCats.filter((item, i) => {
            return allCats.indexOf(item) === i;
        }),
    ];

    categoriesContainer.innerHTML = categories
        .map(
            (cat) =>
                `
        <span class="cat">${cat}</span>
      `
        )
        .join("");

    categoriesContainer.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;

        selectedCat === "All"
            ? displayProducts(data)
            : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
};

const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "₹" + (maxPrice * conversionRate).toFixed(2);

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "₹" + (e.target.value * conversionRate).toFixed(2);
        displayProducts(data.filter((item) => item.price <= e.target.value));
    });
};

setCategories();
setPrices();
