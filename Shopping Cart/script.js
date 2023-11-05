const itemList = [
  {
    id: 1,
    product: "Item - 1",
    price: 100,
  },
  {
    id: 2,
    product: "Item - 2",
    price: 200,
  },
  {
    id: 3,
    product: "Item - 3",
    price: 300,
  },
  {
    id: 4,
    product: "Item - 4",
    price: 400,
  },
  {
    id: 5,
    product: "Item - 5",
    price: 500,
  },
];

const populateItems = () => {
  const PRODUCTS = document.getElementById("products");

  let items = "";
  itemList.forEach((item) => {
    const str = `<div class="products">
    <div class="productName">${item.product}</div>
    <div class="price">${item.price}</div>
    <div class="quentity-box">
    <div class="decrese">
        <button class="decerseBtn">-</button>
      </div>
      <div class="quantity">0</div>
      <div class="increse">
        <button class="increseBtn">+</button>
      </div>
    </div>
  </div>`;
    items += str;
  });
  PRODUCTS.innerHTML = items;
};
populateItems();

const decerseBtn = document.getElementsByClassName("decerseBtn");
const TOTAL = document.getElementById("total");
const cartItems = document.getElementById("cartItems");
const increseBtn = document.getElementsByClassName("increseBtn");

const totalCartItemsArr = [];

const isCartEmpty = () => {
  if (totalCartItemsArr.length === 0) {
    cartItems.innerHTML = `<div class="cartEmpty">
    No Product added to the cart </div>`;
    return true;
  }
  return false;
};
isCartEmpty();

const updateCart = () => {
  cartItems.innerHTML = "";
  totalCartItemsArr.forEach((item) => {
    // console.log(item);
    cartItems.innerHTML += `<div class="cart">
    <div class="productName">${item.product}</div>
    <div class="cart-Quantity">
      <p>${item.count}</p>
      <span>X</span>
      <p>${item.price}</p>
    </div>
  </div>`;
  });
};

const isItemExist = (id) => totalCartItemsArr.find((item) => item.id === id);

const totalPrice = () => {
  let total = 0;
  totalCartItemsArr.forEach((item) => {
    total += item.price * item.count;
  });
  TOTAL.innerHTML = `${total} &#8377;`;
};

Array.from(decerseBtn).forEach((item, i, arr) => {
  item.addEventListener("click", (e) => {
    let count = arr[i].parentElement.parentElement.children[1].innerHTML;
    count--;
    if (count < 0) {
      return;
    }
    arr[i].parentElement.parentElement.children[1].innerHTML = count;

    const indx = totalCartItemsArr.findIndex(
      (item) => item.id === itemList[i].id
    );

    totalCartItemsArr[indx].count -= 1;
    if (totalCartItemsArr[indx].count <= 0) {
      totalCartItemsArr.splice(indx, 1);
    }

    updateCart();
    totalPrice();
    isCartEmpty();
  });
});

Array.from(increseBtn).forEach((item, i, arr) => {
  item.addEventListener("click", (e) => {
    let count = arr[i].parentElement.parentElement.children[1].innerHTML;
    count++;
    arr[i].parentElement.parentElement.children[1].innerHTML = count;

    if (isItemExist(itemList[i].id)) {
      const indx = totalCartItemsArr.findIndex(
        (item) => item.id === itemList[i].id
      );

      totalCartItemsArr[indx].count += 1;
    } else {
      totalCartItemsArr.push({ ...itemList[i], count: 1 });
    }

    updateCart();
    totalPrice();
  });
});
