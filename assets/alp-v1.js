// 全局函数
const Shopify_Url = window.Shopify.routes.root;
const AlpFn = {
  // setCookie
  setCookie: function (name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  },
  // getCookies
  getCookie: function (name) {
    const cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split("=");
      if (name == cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  },
  // 更新购物车数量显示
  UpdateCartCount: async function () {
    let $response = await axios.get(Shopify_Url + "cart.js");
    let count = $response.data.item_count;
    $(".cart-count").each(function () {
      $(this).html(count);
    });
    return count;
  },
  // 添加购物车，接收字符串"1,2,3"
  AddToCartOne: async function (variants, quantity) {
    // variants should be string like "1,2,3"
    let $quantity = quantity ? quantity : 1;
    let $variants = variants;
    let idStrings = $variants.split(",").filter(Boolean);
    if (idStrings.length < 1) {
      return false;
    }
    let resultArray = idStrings.map((id) => ({
      id: Number(id),
      quantity: $quantity,
    }));
    let formData = {
      items: resultArray,
    };
    let formDataString = JSON.stringify(formData);
    let response = await fetch(Shopify_Url + "cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formDataString,
    });
    this.UpdateCartCount();
    return response;
  },
  // 更新购物车，接收数组[{id: 1, quantity: 2}, {id: 2, quantity: 3}]
  UpdateCartQuantity: async function (data) {
    // data is json like [{id: 1, quantity: 2}, {id: 2, quantity: 3}]
    // transform data to strings like "updates[794864053]=2&updates[794864233]=3"
    let $data = data;
    let $data_to_Array = $data.map((item) => `updates[${item.id}]=${item.quantity}`);
    let $data_to_String = $data_to_Array.join("&");
    let response = await fetch(Shopify_Url + "cart/update.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: $data_to_String,
    });
    this.UpdateCartCount();
    return response;
  },
  // 获取高度
  GetTheHeight: function (el, className) {
    let $element = $(el);
    let $className = className ? className : "element";
    let $elementHeight = $element.height();
    $("body").css(`--${$className}-height`, $elementHeight);
  },
  // 设置sticky
  SetSticky: function (el) {
    let $element = $(el);
    $element.each(function () {
      let $this = $(this);
      if ($this.hasClass("sticky")) {
        $this.parents(".shopify-section").addClass("sticky-el");
      }
    });
  },
  // 颜色选择
  ColorSwatchSwitch: function (el, wrapper, target) {
    let $element = $(el);
    let $wrapper = wrapper;
    let $target = target;
    $element.on("click", function (e) {
      let $this = $(this);
      $this.addClass("active").siblings().removeClass("active");
      let $value = $this.attr("data-value");
      $this
        .parents($wrapper)
        .find($target)
        .each(function () {
          let $this = $(this);
          let $this_values = $this.attr("data-options");
          if ($this_values.includes($value)) {
            $this.addClass("active").siblings().removeClass("active");
          }
        });
    });
  },
  // 选项卡
  TabSwitch: function (el, wrapper, target) {
    let $element = $(el);
    let $wrapper = wrapper;
    let $target = target;
    $element.on("click", function (e) {
      let $this = $(this);
      $this.addClass("active").siblings().removeClass("active");
      let $value = $this.attr("data-trigger-index");
      $this
        .parents($wrapper)
        .find($target)
        .each(function () {
          let $this = $(this);
          let $this_values = $this.attr("data-target-index");
          if ($this_values == $value) {
            $this.addClass("active").siblings().removeClass("active");
          } else if ($value == "all") {
            $this.addClass("active");
          } else {
            $this.removeClass("active");
          }
        });
    });
  },
  // 刷新购物车HTML
  refreshCart: async function (el) {
    let $fn = this;
    const $CartWrapperEl = el;
    const $CartWrapperSelecter = document.querySelector($CartWrapperEl);
    $CartWrapperSelecter.classList.add("loading");
    let $count = await $fn.UpdateCartCount();
    // use fetch
    await fetch("/")
      .then((response) => response.text())
      .then((responseHtml) => {
        let parser = new DOMParser();
        let responseDoc = parser.parseFromString(responseHtml, "text/html");
        let $cartLineItemsContainer = responseDoc.querySelector(`${$CartWrapperEl} .alp-cart-items-wrapper`);
        let $cartSubTotalContainer = responseDoc.querySelector(`${$CartWrapperEl} .alp-cart-subtotal`);
        // replace target wrapper html
        let $cartLineItemsWrapper = document.querySelector(`${$CartWrapperEl} .alp-cart-items-wrapper`);
        if ($cartLineItemsContainer) {
          $cartLineItemsWrapper.innerHTML = $cartLineItemsContainer.innerHTML;
        } else {
          $cartLineItemsWrapper.innerHTML = "";
        }
        let $cartSubtotalWrapper = document.querySelector(`${$CartWrapperEl} .alp-cart-subtotal`);
        if ($cartSubTotalContainer) {
          $cartSubtotalWrapper.innerHTML = $cartSubTotalContainer.innerHTML;
        }
        console.log("Cart Content Refreshed");
        $CartWrapperSelecter.classList.remove("loading");
      });
    if ($count < 1) {
      $CartWrapperSelecter.classList.add("is-empty");
    } else {
      $CartWrapperSelecter.classList.remove("is-empty");
    }
    $fn.listenCartChange($CartWrapperEl);
    $fn.SlideToggle(".cart-additional-options-trigger", ".cart-additional-options-container");
    // For Extend Protection App
    $fn.EventDispatch("refreshAjaxCart");
    // Calc The Additional Products
    $fn.AdditionalProductCartCalc();
    $fn.LineProductCartPriceCalc();
    $fn.CartRecommendProductsCheck();
  },
  // 更新购物车，更新单个商品
  queryUpdateCart: async function (id, quantity, el) {
    let $fn = this;
    const $CartWrapperEl = el;
    const $CartWrapperSelecter = document.querySelector($CartWrapperEl);
    $CartWrapperSelecter.classList.add("loading");
    let data = [
      {
        id: id,
        quantity: quantity,
      },
    ];
    // console.log(data);
    let $response = await $fn.UpdateCartQuantity(data);
    console.log(`Ajax Cart Updated`);
    $fn.refreshCart($CartWrapperEl);
  },
  // 监听购物车
  listenCartChange: function (el) {
    let $fn = this;
    const $CartWrapperEl = el;
    const $CartWrapperSelecter = document.querySelector($CartWrapperEl);
    let $quantity_input = $CartWrapperSelecter.querySelectorAll(".alp_quantity__input[type=number]");
    let $quantity_plus = $CartWrapperSelecter.querySelectorAll('.alp_quantity__button[name="plus"]');
    let $quantity_minus = $CartWrapperSelecter.querySelectorAll('.alp_quantity__button[name="minus"]');
    let $line_item_remove = $CartWrapperSelecter.querySelectorAll(".alp-line-item-remove a");
    let $line_item_class = ".alp-cart-line-item.line-item";

    $quantity_input.forEach((input) => {
      input.addEventListener("change", (e) => {
        let $this = e.target;
        let $id = $this.getAttribute("data-quantity-variant-id");
        let $val = $this.value;
        $fn.queryUpdateCart($id, $val, $CartWrapperEl);
      });
    });

    // 延迟触发
    let delay = 500;
    let timeoutId;

    $quantity_plus.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        let $this = e.target;
        let $parent = $this.closest($line_item_class);
        let $quantity = $parent.querySelector(".alp_quantity__input[type=number]");
        $quantity.value = parseInt($quantity.value) + 1;
        // let $id = $quantity.getAttribute("data-quantity-variant-id");
        let $id = $parent.getAttribute("data-line-item-id");
        let $val = $quantity.value;
        // 延迟触发
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          $fn.queryUpdateCart($id, $val, $CartWrapperEl);
        }, delay);
      });
    });

    $quantity_minus.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        let $this = e.target;
        let $parent = $this.closest($line_item_class);
        let $quantity = $parent.querySelector(".alp_quantity__input[type=number]");
        if ($quantity.value > 1) {
          $quantity.value = parseInt($quantity.value) - 1;
        } else {
          return;
        }
        // let $id = $quantity.getAttribute("data-quantity-variant-id");
        let $id = $parent.getAttribute("data-line-item-id");
        let $val = $quantity.value;
        // 延迟触发
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          $fn.queryUpdateCart($id, $val, $CartWrapperEl);
        }, delay);
      });
    });

    $line_item_remove.forEach((link) => {
      link.addEventListener("click", async (e) => {
        e.preventDefault();
        let $this = e.target;
        let $parent = $this.closest($line_item_class);
        let $quantity = $parent.querySelector(".alp_quantity__input[type=number]");
        // let $id = $quantity.getAttribute("data-quantity-variant-id");
        let $id = $parent.getAttribute("data-line-item-id");
        await $fn.LineProductCartRemove($id);
        await $fn.queryUpdateCart($id, 0, $CartWrapperEl);
      });
    });
  },
  // 购物车滑出与关闭
  ToggleCartDrawer: function (el) {
    const $CartWrapperEl = el;
    const $CartWrapperSelecter = document.querySelector($CartWrapperEl);
    document.querySelector(".alp-icon-cart").addEventListener("click", () => {
      if (window.location.pathname == "/cart") {
        return;
      }
      $CartWrapperSelecter.classList.toggle("open");
    });
    document.querySelectorAll(".alp-cart-close, .alp-cart-overlay").forEach((element) => {
      element.addEventListener("click", () => {
        $CartWrapperSelecter.classList.remove("open");
      });
    });
  },
  // 接管产品加入购物车按钮
  TriggerAddToCart: function (el, parent, cart_el) {
    let $fn = this;
    let $el = $(el);
    let $cartEl = cart_el ? cart_el : "[data-ajax-cart]";
    let $parent = parent ? parent : "form";
    $el.on("click", async function (e) {
      e.preventDefault();
      let $this = $(this).parents($parent);
      $this.addClass("ajaxForm loading");

      let addToCartForm = $this[0];
      let formData = new FormData(addToCartForm);
      await $fn.AdditionalProductsAddCart();
      let $response = await fetch(Shopify_Url + "cart/add.js", {
        method: "POST",
        body: formData,
      });
      if ($response.status == 200) {
        console.log(`Product Added To Cart`);
        await $fn.refreshCart($cartEl);
        $this.removeClass("loading");
        $($cartEl).addClass("open");
      }
    });
  },
  // 附加产品加入购物车
  AdditionalProductsAddCart: async function () {
    let $fn = this;
    let $variants = "";
    $(`[data-addional-product].selected`).each(function () {
      $variants += $(this).find(`select`).val() + ",";
    });
    $(`[data-promotion-pack].selected`).each(function () {
      $variants += $(this).attr(`data-pack-variant`) + ",";
    });
    $(`[data-compatible-product].selected`).each(function () {
      $variants += $(this).attr(`data-compatible-variant`) + ",";
    });
    // console.log($variants);
    if ($variants == "") {
      return;
    }
    let $quantity = $(`form[action="/cart/add"] .quantity__input[type=number]`).val();
    await $fn.AddToCartOne($variants, $quantity);
    console.log("Additional Products Added To Cart");
  },

  // 购物车推荐产品状态
  CartRecommendProductsCheck: function () {
    $(`[data-recommend-product-variant]`).each(function () {
      let variant_id = $(this).attr("data-recommend-product-variant");
      let line_item_el = $(`.line-item[data-line-variant-id="${variant_id}"]`);
      if (line_item_el.length > 0) {
        $(this).stop().slideUp();
      } else {
        $(this).stop().slideDown();
      }
    });
  },

  // 购物车推荐产品加购
  CartRecommendProductsAddCart: async function () {
    let $fn = this;
    let $variants = "";
    let $cartEl = "[data-ajax-cart]";
    $fn.CartRecommendProductsCheck();
    $(`[data-recommend-product-variant] .recommend-cart-add`).click(async function () {
      $variants = "";
      $variants += $(this).parents(`[data-recommend-product-variant]`).attr("data-recommend-product-variant") + ",";
      // console.log($variants);
      if ($variants == "") {
        return;
      }
      $(this).addClass("adding");
      let $quantity = 1;
      await $fn.AddToCartOne($variants, $quantity);
      await $fn.refreshCart($cartEl);
      console.log("Recommend Products Added To Cart");
      $(this).removeClass("adding");
    });
  },

  // 手动触发事件
  EventDispatch: function (event) {
    // 创建自定义事件
    let $event = new Event(event);
    // 触发事件
    window.dispatchEvent($event);
  },

  // 附加产品选择状态
  AdditionalProductTrigger: function (el) {
    let $fn = this;
    let $el = $(el);
    $el.find("select").on("change", function (e) {
      let $this = $(this);
      let $option = $this.find("option:selected");
      let $value = $this.val();
      let $price_raw = Number($option.attr("data-variant-price"));
      let $price = Number($option.attr("data-variant-price")) / 100;
      let $title = $option.attr("data-variant-title");
      if ($value !== "") {
        $this.parents(el).addClass("selected");
        $this
          .parents(el)
          .find(`[data-select-price]`)
          .html(`$${$price.toFixed(2)}`);
        $this.parents(el).find(`input.the-properties`).val($title);
        $this.parents(el).find(`input.the-properties-id`).val(`${$value}|${$price_raw}`);
      } else {
        $this.parents(el).removeClass("selected");
        $this.parents(el).find(`[data-select-price]`).html(``);
        $this.parents(el).find(`input.the-properties`).val("");
        $this.parents(el).find(`input.the-properties-id`).val("");
      }
    });
  },
  // 计算附加产品在购物车的数量，与购物车主产品的数量不一致时，更新购物车
  AdditionalProductCartCalc: async function () {
    let $fn = this;
    let $update_cart_data = [];
    $(".alp-cart-line-item.line-item").each(function () {
      let $this = $(this);
      let $variant_id = $this.attr("data-line-variant-id");
      let $quantity = $this.attr("data-line-quantity");
      let $quantity_to_calc = 0;
      $(`.alp-cart-items-container [data-additionalvariant-id="${$variant_id}"]`).each(function () {
        let $this_quantity = $(this).attr("data-additionalvariant-quantity");
        $quantity_to_calc += Number($this_quantity);
        if ($variant_id == $(this).attr("data-additionalvariant-id")) {
          $this.addClass("is-additional hidden");
        }
      });
      if ($quantity_to_calc !== Number($quantity) && $quantity_to_calc !== 0) {
        // console.log($quantity_to_calc, $quantity);
        $update_cart_data.push({
          id: $variant_id,
          quantity: $quantity_to_calc,
        });
      }
    });
    // console.log($update_cart_data);
    if ($update_cart_data.length === 0) {
      return;
    }
    await $fn.UpdateCartQuantity($update_cart_data);
    console.log(`Additional Products In Cart Updated`);
    $fn.refreshCart("[data-ajax-cart]");
  },
  // 计算附加产品在购物车的价格,加到单品总价上
  LineProductCartPriceCalc: async function () {
    // 暂时弃用，用Liquid计算替代
    return;
    $(".alp-cart-line-item.line-item").each(function () {
      let $this = $(this);
      let $usd = "$";
      let $final_price = $this.attr("data-final-price");
      let $compare_price = $this.attr("data-compare-price");
      if ($compare_price == "") {
        $compare_price = $this.attr("data-original-price");
      }
      let $quantity = $this.attr("data-line-quantity");
      let $additional_price = 0;
      $this.find(`[data-additionalvariant-id]`).each(function () {
        let $i_price = Number($(this).attr("data-additionalvariant-price")) * Number($(this).attr("data-additionalvariant-quantity"));
        $additional_price += $i_price;
      });
      $final_price = (Number($final_price) * Number($quantity) + Number($additional_price)) / 100;
      $compare_price = (Number($compare_price) * Number($quantity) + Number($additional_price)) / 100;
      $this.find(".price--final").html(`${$usd}${$final_price.toFixed(2)}`);
      $this.find("s.cart-item__old-price").html(`${$usd}${$compare_price.toFixed(2)}`);
    });
  },
  // 主产品删除时删除附加产品
  LineProductCartRemove: async function (id) {
    let $fn = this;
    let $id = id;
    let $update_cart_data = [];
    $(`.alp-cart-items-container [data-line-item-id="${$id}"] [data-additionalvariant-id]`).each(function () {
      let $this = $(this);
      let $variant_id = $this.attr("data-additionalvariant-id");
      $update_cart_data.push({
        id: $variant_id,
        quantity: 0,
      });
    });
    if ($update_cart_data.length === 0) {
      return;
    }
    await $fn.UpdateCartQuantity($update_cart_data);
    console.log(`Additional Products In Cart Updated`);
    // $fn.refreshCart("[data-ajax-cart]");
  },
  // 礼品包产品选择状态
  PromotionPackTrigger: function (el) {
    let $fn = this;
    let $el = $(el);
    $el.find(".button__select").on("click", function (e) {
      let $this = $(this);
      let $parent = $this.parents(el);
      if ($parent.hasClass("selected")) {
        $parent.removeClass("selected");
      } else {
        $parent.addClass("selected");
      }
    });
  },
  // 可选产品选择状态
  CompatibleProductTrigger: function (el) {
    let $fn = this;
    let $el = $(el);
    let $container = $el.parents(".compatible-products-list-inner");
    let $wrapper = $el.parents(".compatible-products-list");
    let $parent = $el.parents(".compatible-products-wrapper");
    let $min_number = $parent.attr("data-min-number");
    let $disount_value = $parent.attr("data-disount");
    //
    function calcPrice() {
      let $price = 0;
      let $price_discount = 0;
      let $number = 0;
      let $output_number = $min_number;
      $el.each(function () {
        let $this = $(this);
        if ($this.hasClass("selected")) {
          $price += Number($this.attr("data-compatible-price"));
          $number += 1;
        }
      });
      // if $number < $min_number
      if ($number < $min_number) {
        $output_number = $min_number - $number;
        $parent.find(".c-discount-info-number").html($output_number);
        $parent.find(".c-discount-info-1, .c-discount-info-number, .c-discount-info-2").removeClass("hidden");
        $parent.find(".c-discount-info-ff").removeClass("show");
      }
      // else
      else {
        $price_discount = ($price / 100) * (1 - $disount_value);
        $parent.find(".c-discount-info-ff span").html(`$${$price_discount.toFixed(2)}`);
        $parent.find(".c-discount-info-ff").addClass("show");
        $parent.find(".c-discount-info-1, .c-discount-info-number, .c-discount-info-2").addClass("hidden");
      }
    }
    //
    function setWrapperHeight(num) {
      let $container_height = $container.height();
      $wrapper.css("--w-height", $container_height);
      let $slide_hegiht = 0;
      $container
        .children()
        .slice(0, num)
        .each(function () {
          let $this = $(this);
          $slide_hegiht += $this.outerHeight();
        });
      $wrapper.css("--s-height", $slide_hegiht);
    }
    //
    $(".compatible-show-more").on("click", function (e) {
      let $this = $(this);
      $parent.toggleClass("show-all");
    });
    //
    $el.find(".select-trigger").on("click", function (e) {
      let $this = $(this);
      let $parent = $this.parents(el);
      if ($parent.hasClass("selected")) {
        $parent.removeClass("selected");
      } else {
        $parent.addClass("selected");
      }
      calcPrice();
    });
    setWrapperHeight(3);
    $(window).resize(function () {
      setWrapperHeight(3);
    });
  },
  // 展开切换
  SlideToggle: function (el, target, wrapper) {
    let $element = $(el ? el : "[data-slide-toggle-trigger]");
    let $target = target ? target : "[data-slide-toggle-target]";
    let $wrapper = wrapper ? wrapper : "[data-slide-toggle-wrapper]";
    $element.on("click", function (e) {
      let $this = $(this);
      let $target_el = $this.parents($wrapper).find($target).eq(0);
      if ($target_el.length === 0) {
        return;
      }
      if ($target_el.hasClass("active")) {
        $target_el.removeClass("active");
        $this.removeClass("active");
        gsap.to($target_el, { height: "0px", duration: 0.3 });
      } else {
        let $target_el_height = $target_el.children().height();
        $target_el.addClass("active");
        $this.addClass("active");
        gsap.to($target_el, { height: "auto", duration: 0.3 });
      }
    });
  },
  // Countdown Script
  CountDown: function (blockId, setting_date, setting_hours) {
    let $blockId = blockId;
    let in_hours = parseFloat(setting_hours);
    let $blockIdNum = $blockId.replace(/\D/g, "");
    const countdownInterval = setInterval(() => {
      // us time
      const now_us = new Date();
      const options_us = {
        timeZone: "America/Los_Angeles",
      };
      const currentTime_us = now_us.toLocaleString("en-US", options_us);
      const now_us_date = new Date(currentTime_us);
      const countdownDate_us = new Date(setting_date);
      // Calculate the remaining time in seconds
      const remainingTime_us = countdownDate_us - now_us_date;
      // Calculate the hours, minutes, and seconds remaining
      const days = Math.floor(remainingTime_us / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
      const hours = Math.floor((remainingTime_us % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
      const hours_all = Math.floor(remainingTime_us / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((remainingTime_us % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor((remainingTime_us % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");
      // Wrap each digit in <b> tags
      const wrappedDays = days
        .split("")
        .map((digit) => `<b>${digit}</b>`)
        .join("");
      const wrappedHours = hours
        .split("")
        .map((digit) => `<b>${digit}</b>`)
        .join("");
      const wrappedHours_all = hours_all
        .split("")
        .map((digit) => `<b>${digit}</b>`)
        .join("");
      const wrappedMinutes = minutes
        .split("")
        .map((digit) => `<b>${digit}</b>`)
        .join("");
      const wrappedSeconds = seconds
        .split("")
        .map((digit) => `<b>${digit}</b>`)
        .join("");
      // Display the countdown in the HTML element with ID "countdown"
      // console.log(seconds);
      // 默认48小时内才显示倒计时
      if (hours_all < in_hours) {
        document.querySelector(
          `.alp-t-countdown-time[data-blockId="${$blockId}"]`
        ).innerHTML = `<span>${wrappedDays}</span>:<span>${wrappedHours}</span>:<span>${wrappedMinutes}</span>:<span>${wrappedSeconds}</span>`;
      }
      // Stop the countdown if the countdown date has passed
      if (remainingTime_us < 0) {
        clearInterval(countdownInterval);
        document.querySelector(`.alp-t-countdown-time[data-blockId="${$blockId}"]`).innerHTML = "";
      }
    }, 1000);
  },
};

// LazyLoad
var lazyLoadInstance = new LazyLoad({});

// HeadroomJs
var headroom = new Headroom(document.querySelector("body"));
headroom.init();

// OverlayScrollbarsGlobal
var { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin } = OverlayScrollbarsGlobal;
if (document.querySelector(".alp-cart-drawer .alp-cart-container") != null) {
  const osInstance = OverlayScrollbars(document.querySelector(".alp-cart-drawer .alp-cart-container"), {});
}

//
document.addEventListener("DOMContentLoaded", () => {
  //
  $("body").addClass("loaded");
  AlpFn.ColorSwatchSwitch(".alp-colors-swatch-i", "[data-swatch-wrapper]", "[data-options]");
  AlpFn.TabSwitch(".alp-category-list-items [data-trigger-index]", "[data-switch-wrapper]", ".alp-products-swiper-wrapper");
  AlpFn.TabSwitch(".alp-pug-group-list-titles.sub-titles > div", "[data-switch-wrapper]", ".alp-product-upgrades-group");
  AlpFn.TabSwitch(".alp-pug-group-list-titles.group-titles > div", "[data-switch-wrapper]", ".alp-pug-group-wrapper");
  AlpFn.TabSwitch(".product-grid-and-list > div", "[data-switch-wrapper]", "[data-target-index]");
  AlpFn.ToggleCartDrawer("[data-ajax-cart]");
  AlpFn.listenCartChange("[data-ajax-cart]");
  AlpFn.TriggerAddToCart(`.alp-submit-button [type="submit"]`);
  AlpFn.AdditionalProductTrigger(`.alp-addional-product-item`);
  AlpFn.AdditionalProductCartCalc();
  AlpFn.LineProductCartPriceCalc();
  AlpFn.PromotionPackTrigger(`[data-promotion-pack]`);
  AlpFn.CompatibleProductTrigger(`[data-compatible-product]`);
  AlpFn.SlideToggle(".cart-additional-options-trigger", ".cart-additional-options-container");
  AlpFn.SlideToggle(".slide-sub-menu-title", ".sub-slide-wrapper", ".sub-menu-level-2");
  AlpFn.SlideToggle(".alp-footer-menu-heading", "ul.alp-footer-block-links");
  AlpFn.CartRecommendProductsAddCart();
});
