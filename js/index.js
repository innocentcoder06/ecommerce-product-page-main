/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', () => {
  var ham_btn = document.getElementById('ham_btn');
  var ham_menu = document.getElementById('ham_menu');
  var ham_close = document.getElementById('ham_close');
  var cart_div = document.getElementById('cart_div');
  var cart_wrapper_div = document.getElementById('cart_wrapper_div');
  var carousel_div = document.getElementById('carousel_div');
  var carousel_prev = document.getElementById('carousel_prev');
  var carousel_next = document.getElementById('carousel_next');
  var img_changeable = document.getElementById('img_changeable');
  var popup_changeable = document.getElementById('popup_changeable');
  var root_div = document.getElementById('root_div');
  var minus_item = document.getElementById('minus_item');
  var plus_item = document.getElementById('plus_item');
  var item_cnt = document.getElementById('item_cnt');
  var add_btn = document.getElementById('add_btn');
  var popup_gal = document.getElementById('popup_gal');
  var popup_close = document.getElementById('popup_close');
  var popup_root_div = document.getElementById('popup_root_div');
  var popup_prev = document.getElementById('popup_prev');
  var popup_next = document.getElementById('popup_next');
  var cart_card_div = document.getElementById('cart_card_div');
  var itr = 0;
  
  cart_wrapper_div.addEventListener('click', () => {
    if (cart_wrapper_div.classList.contains('has-before')) {
      cart_card_div.classList.add('disp-none');
      cart_wrapper_div.classList.remove('has-before');
      return;
    }
    cart_card_div.classList.remove('disp-none');
    cart_wrapper_div.classList.add('has-before');
  });

  window.addEventListener('scroll', () => {
    cart_card_div.classList.add('disp-none');
    cart_wrapper_div.classList.remove('has-before');
  });

  popup_prev.addEventListener('click', () => {
    if (itr === 0) {
      return;
    } else {
      itr--;
      activeChild(itr);
    }
  });

  popup_next.addEventListener('click', () => {
    if (itr === 3) {
      return;
    } else {
      itr++;
      activeChild(itr);
    }
  });

  function activeChild(itr) {
    popup_changeable.src = `./images/image-product-${itr + 1}.jpg`;
    popup_changeable.alt = `img${itr + 1}`;  
    popup_child.forEach((child, key) => {
      if (itr !== key && child.classList.contains('active')) {
        child.classList.remove('active');
      } else if (itr !== key) {
        child.classList.remove('active');
      } else {
        child.classList.add('active');
      }
    }); 
  }

  var children = root_div.querySelectorAll('div');
  var popup_child = popup_root_div.querySelectorAll('div');
  
  img_changeable.addEventListener('click', () => {
    popup_gal.classList.remove('disp-none');
    itr = 0;
    activeChild(itr);
  });

  popup_close.addEventListener('click', () => {
    popup_gal.classList.add('disp-none');
  });

  add_btn.addEventListener('click', () => {
    cart_wrapper_div.querySelectorAll('div').forEach((child) => {
      if (child.classList.contains('cart-item-count')) {
        cart_wrapper_div.removeChild(child);
      }
    });
    if (parseInt(item_cnt.textContent) < 1) {
      cart_wrapper_div.querySelectorAll('div').forEach((child) => {
        if (child.classList.contains('cart-item-count')) {
          cart_wrapper_div.removeChild(child);
        }
      });
      cart_div.innerHTML = 'Your cart is empty.';
      return;
    }
    cart_div.innerHTML = '';
    var item_cnt_div = document.createElement('div');
    item_cnt_div.classList.add('cart-item-count');
    var ispan = document.createElement('span');
    ispan.textContent = item_cnt.textContent;
    item_cnt_div.appendChild(ispan);
    cart_wrapper_div.appendChild(item_cnt_div);
    var card_item = document.createElement('div');
    card_item.classList.add('card-item');
    var card_img = document.createElement('img');
    card_img.src = `./images/image-product-1-thumbnail.jpg`;
    card_img.alt = `img1`;
    card_item.appendChild(card_img);
    var prod_details = document.createElement('div');
    prod_details.classList.add('prod-details');
    var prod_span = document.createElement('span');
    prod_span.innerText = 'Fall Limited Edition Sneakers';
    prod_details.appendChild(prod_span);
    var prod_price = document.createElement('div');
    var price_span = document.createElement('span');
    price_span.innerText = `$125.00 x ${item_cnt.innerText}`;
    prod_price.appendChild(price_span);
    var total_span = document.createElement('span');
    total_span.innerText = `$${parseInt(item_cnt.innerText) * 125}.00`;
    prod_price.appendChild(total_span);
    prod_details.appendChild(prod_price);
    var del_div = document.createElement('div');
    var del_img = document.createElement('img');
    del_img.src = `./images/icon-delete.svg`;
    del_img.svg = 'delete';
    del_div.appendChild(del_img);
    del_div.classList.add('prod-delete');

    del_div.addEventListener('click', () => {
      cart_wrapper_div.querySelectorAll('div').forEach((child) => {
        if (child.classList.contains('cart-item-count')) {
          cart_wrapper_div.removeChild(child);
        }
      });
      cart_div.innerHTML = 'Your cart is empty.';
    });

    var check_btn = document.createElement('button');
    check_btn.innerText = 'Checkout';
    card_item.appendChild(prod_details);
    card_item.appendChild(del_div);
    cart_div.appendChild(card_item);
    cart_div.appendChild(check_btn);
  });

  minus_item.addEventListener('click', () => {
    if (parseInt(item_cnt.innerText) === 0) {
      return;
    } else {
      item_cnt.innerText = parseInt(item_cnt.innerText) - 1;
    }
  });

  plus_item.addEventListener('click', () => {
    item_cnt.innerText = parseInt(item_cnt.innerText) + 1;
  });

  children.forEach((child, key) => {
    child.addEventListener('click', () => {
      img_changeable.src = `./images/image-product-${key + 1}.jpg`;
      img_changeable.alt = `img${key + 1}`;
      children.forEach((child2) => {
        if (child2.classList.contains('active')) {
          child2.classList.remove('active');
        }
      }); 
      child.classList.add('active');
    });
  });

  popup_child.forEach((child, key) => {
    child.addEventListener('click', () => {
      popup_changeable.src = `./images/image-product-${key + 1}.jpg`;
      popup_changeable.alt = `img${key + 1}`;
      popup_child.forEach((child2) => {
        if (child2.classList.contains('active')) {
          child2.classList.remove('active');
        }
      });
      child.classList.add('active');
    });
  });

  carousel_next.addEventListener('click', () => {
    console.log(carousel_div.scrollWidth, carousel_div.scrollLeft, carousel_div.offsetWidth);
    if (carousel_div.scrollLeft + carousel_div.offsetWidth >= carousel_div.scrollWidth) {
      carousel_div.scrollLeft = 0;
    } else {
      carousel_div.scrollLeft += carousel_div.offsetWidth;
    }
  });

  carousel_prev.addEventListener('click', () => {
    if (carousel_div.scrollLeft === 0) {
      carousel_div.scrollLeft = carousel_div.scrollWidth - carousel_div.offsetWidth;
    } else {
      carousel_div.scrollLeft = carousel_div.scrollLeft - carousel_div.offsetWidth;
    }
  });

  ham_btn.addEventListener('click', () => {
    ham_btn.classList.add('pressed');
    ham_menu.classList.add('expand');
  });

  ham_close.addEventListener('click', () => {
    ham_menu.classList.add('collapse');
    setTimeout(() => {
      ham_menu.classList.remove('expand');
      ham_menu.classList.remove('collapse');
      ham_btn.classList.remove('pressed');
    }, 310);
  });

  window.addEventListener('resize', () => {
    carousel_div.scrollLeft = 0;
  });


});

