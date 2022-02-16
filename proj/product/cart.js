let parent = document.getElementById("container");

  // ===================================
  // order summary div
  // ===================================

  let order_summary = document.createElement("div");
  order_summary.id = "order_summary";

  let order_heading = document.createElement("p");

  order_heading.innerHTML = "Order Summary";

  let order_value = document.createElement("p");

  let odr_val_span1 = document.createElement("span");
  odr_val_span1.innerText = "Order Value";

  let odr_val_span2 = document.createElement("span");
  odr_val_span2.id = "total-price"
//   odr_val_span2.innerText = ".";

  order_value.append(odr_val_span1, odr_val_span2);

  let shipping = document.createElement("p");

  let shipping_span1 = document.createElement("span");
  shipping_span1.innerText = "Shipping";

  let shipping_span2 = document.createElement("span");
  shipping_span2.id = "ship-price";
  shipping_span2.innerText = "Free";

  shipping.append(shipping_span1, shipping_span2);

  let hr1 = document.createElement("hr");

  let order_total = document.createElement("p");

  let odr_totl_span1 = document.createElement("span");
  odr_totl_span1.innerText = "ORDER TOTAL";

  let odr_totl_span2 = document.createElement("span");
  odr_totl_span2.id = "discount-price";
  odr_totl_span2.innerText = ".";

  order_total.append(odr_totl_span1, odr_totl_span2);

  let cpn_box = document.createElement("div");
  cpn_box.id = "coupon-box";

  let enter_code_text = document.createElement("p");
  enter_code_text.innerText = "Coupon Code";

  let enter_code = document.createElement("input");
  enter_code.setAttribute("type", "text");
  enter_code.id = "coupon-code";


  cpn_box.append(enter_code_text, enter_code);

  let code_button = document.createElement("button");
  code_button.innerText = "Submit";

  // code_button.onclick= codeSubmit();
  code_button.onclick= function (){
    codeSubmit();
  };

  order_summary.append(order_heading, order_value, shipping, hr1, order_total, cpn_box, code_button );

  // ===================================
  // order detail div
  // ===================================

  let order_detail = document.createElement("div");
  order_detail.id = "order_detail";

  parent.append(order_detail, order_summary);

  // ======================================
  // getting items of cart
  // ======================================

  let cart_items = JSON.parse(localStorage.getItem("cart"));
  // console.log(cart_items.length)

  if (cart_items.length == 0) {
    document.getElementById("empty_cart").style.display = "block";

    document.getElementById("container").style.display = "none";

    document.getElementById("goToPayment").style.display = "none";
  }

  let grand_total = 0;

  let cart_item_displayParent = document.getElementById("order_detail");


  let totalPrice = document.getElementById("total_price");


  function showProduct() {
    cart_items.forEach(function (product) {

      grand_total += Number(product.price);

    //   console.log(grand_total);


      // if (document.getElementById("coupon-code").value == "AEB2G30") {
      //   grand_total = (grand_total * 70) / 100;
      // } else {
      //   grand_total;
      // }

      let div = document.createElement("div");
      div.setAttribute("class", "item-container");

      let img = document.createElement("img");
      img.setAttribute("class", "item-img");
      img.src = product.image;

      let item_name = document.createElement("p");
      item_name.innerText = product.name;

      let price = document.createElement("p");
      price.innerText = product.price;

      let text_div = document.createElement("div");
      text_div.setAttribute("class", "text-container");

    //   let add_to_cart = document.createElement("button");
    //   add_to_cart.innerText = "Add to bag";

    //   add_to_cart.onclick = function () {
    //     addtocart(product);
    //   };

      let img_div = document.createElement("div");
      img_div.setAttribute("class", "img-container");
      img_div.append(img);

      // let btn_div = document.createElement("div");

      // btn_div.append(add_to_cart)

      text_div.append(item_name, price);

      div.append(img_div, text_div);

      cart_item_displayParent.append(div);
    });
  }
  showProduct();

  // console.log(grand_total)

  document.getElementById("total-price").innerText = grand_total;
  

  function codeSubmit(){

    let code_value = document.getElementById("coupon-code").value;
    // console.log(code_value);

    if(code_value === "AEB2G30"){

      grand_total = Math.ceil((grand_total * 70) / 100);

      document.getElementById("total-price").innerText = grand_total;
    }

    else{
      alert("Coupon Code is wrong")
    }
  }