class FacetFiltersForm extends HTMLElement {
  constructor() {
    super();
    this.onActiveFilterClick = this.onActiveFilterClick.bind(this);

    this.debouncedOnSubmit = debounce((event) => {
      this.onSubmitHandler(event);
    }, 500);

    const facetForm = this.querySelector("form");
    facetForm.addEventListener("input", this.debouncedOnSubmit.bind(this));

    const facetWrapper = this.querySelector("#FacetsWrapperDesktop");
    if (facetWrapper) facetWrapper.addEventListener("keyup", onKeyUpEscape);
  }

  static setListeners() {
    const onHistoryChange = (event) => {
      const searchParams = event.state ? event.state.searchParams : FacetFiltersForm.searchParamsInitial;
      if (searchParams === FacetFiltersForm.searchParamsPrev) return;
      FacetFiltersForm.renderPage(searchParams, null, false);
    };
    window.addEventListener("popstate", onHistoryChange);
  }

  static toggleActiveFacets(disable = true) {
    document.querySelectorAll(".js-facet-remove").forEach((element) => {
      element.classList.toggle("disabled", disable);
    });
  }

  static paginationListeners() {
    const paginationWrapper = document.querySelector(".pagination-wrapper");
    paginationWrapper.querySelectorAll("a").forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        const url = element.href.indexOf("?") == -1 ? "" : element.href.slice(element.href.indexOf("?") + 1);
        FacetFiltersForm.renderPage(url);
      });
    });
  }

  // filter collections
  static filterCollectionsListeners() {
    const filterCollectionsWrapper = document.querySelector(".facets__d-collections-desktop");
    const filterCollectionsWrapperMobile = document.querySelector(".facets__d-collections-mobile");

    // desktop
    filterCollectionsWrapper.querySelectorAll("a").forEach((element) => {
      let currentPathname = window.location.pathname;
      let elementHrefPathname = new URL(element.href).pathname;
      if (currentPathname == elementHrefPathname) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
      element.addEventListener("click", (event) => {
        event.preventDefault();
        const location_params = window.location.search;
        const searchParams = location_params.indexOf("?") == -1 ? "" : location_params.slice(location_params.indexOf("?") + 1);
        const url = element.href;
        FacetFiltersForm.renderPageForCollection(url, searchParams);
      });
    });

    // mobile
    filterCollectionsWrapperMobile.querySelectorAll("a").forEach((element) => {
      let currentPathname = window.location.pathname;
      let elementHrefPathname = new URL(element.href).pathname;
      if (currentPathname == elementHrefPathname) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
      element.addEventListener("click", (event) => {
        event.preventDefault();
        const location_params = window.location.search;
        const searchParams = location_params.indexOf("?") == -1 ? "" : location_params.slice(location_params.indexOf("?") + 1);
        const url = element.href;
        FacetFiltersForm.renderPageForCollection(url, searchParams);
      });
    });
  }

  static renderPageForCollection(newUrl, searchParams, event, updateURLHash = true) {
    // 去掉页数参数
    // find "?page=1 or ?page=2" using regex and replace it to "?page=1"
    const searchParamsWithoutPage = searchParams ? searchParams.replace(/page=\d+/, "page=1") : "";

    FacetFiltersForm.searchParamsPrev = searchParamsWithoutPage;
    const sections = FacetFiltersForm.getSections();
    const countContainer = document.getElementById("ProductCount");
    const countContainerDesktop = document.getElementById("ProductCountDesktop");
    const loadingSpinners = document.querySelectorAll(".facets-container .loading__spinner, facet-filters-form .loading__spinner");
    loadingSpinners.forEach((spinner) => spinner.classList.remove("hidden"));
    document.getElementById("ProductGridContainer").querySelector(".collection").classList.add("loading");
    if (countContainer) {
      countContainer.classList.add("loading");
    }
    if (countContainerDesktop) {
      countContainerDesktop.classList.add("loading");
    }

    sections.forEach((section) => {
      const url = `${newUrl}?section_id=${section.section}&${searchParamsWithoutPage}`;
      // const urlFull = `${newUrl}?${searchParams}`;
      const urlFull = `${newUrl}?${searchParamsWithoutPage}`;
      const filterDataUrl = (element) => element.url === url;

      FacetFiltersForm.filterData.some(filterDataUrl)
        ? FacetFiltersForm.renderSectionFromFetchForCollection(urlFull, url, event)
        : FacetFiltersForm.renderSectionFromFetchForCollection(urlFull, url, event);
    });

    if (updateURLHash) FacetFiltersForm.updateURLHashFull(newUrl, searchParamsWithoutPage);
  }

  static updateURLHashFull(newUrl, searchParams) {
    // newUrl to pathname
    const url = newUrl ? newUrl : window.location.href;
    const newPathname = new URL(url).pathname;
    history.pushState({ searchParams }, "", `${newPathname}${searchParams && "?".concat(searchParams)}`);
  }

  static renderPage(searchParams, event, updateURLHash = true) {
    FacetFiltersForm.searchParamsPrev = searchParams;
    const sections = FacetFiltersForm.getSections();
    const countContainer = document.getElementById("ProductCount");
    const countContainerDesktop = document.getElementById("ProductCountDesktop");
    const loadingSpinners = document.querySelectorAll(".facets-container .loading__spinner, facet-filters-form .loading__spinner");
    loadingSpinners.forEach((spinner) => spinner.classList.remove("hidden"));
    document.getElementById("ProductGridContainer").querySelector(".collection").classList.add("loading");
    if (countContainer) {
      countContainer.classList.add("loading");
    }
    if (countContainerDesktop) {
      countContainerDesktop.classList.add("loading");
    }

    sections.forEach((section) => {
      const url = `${window.location.pathname}?section_id=${section.section}&${searchParams}`;
      const filterDataUrl = (element) => element.url === url;

      FacetFiltersForm.filterData.some(filterDataUrl) ? FacetFiltersForm.renderSectionFromCache(filterDataUrl, event) : FacetFiltersForm.renderSectionFromFetch(url, event);
    });

    if (updateURLHash) FacetFiltersForm.updateURLHash(searchParams);
  }

  static renderSectionFromFetch(url, event) {
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        const html = responseText;
        FacetFiltersForm.filterData = [...FacetFiltersForm.filterData, { html, url }];
        FacetFiltersForm.renderFilters(html, event);
        FacetFiltersForm.renderProductGridContainer(html);
        FacetFiltersForm.renderProductCount(html);
        if (typeof initializeScrollAnimationTrigger === "function") initializeScrollAnimationTrigger(html.innerHTML);
      });
  }

  static renderSectionFromFetchForCollection(urlFull, url, event) {
    fetch(urlFull)
      .then((response) => response.text())
      .then((responseText) => {
        const html = responseText;
        FacetFiltersForm.filterData = [...FacetFiltersForm.filterData, { html, url }];
        FacetFiltersForm.renderFilters(html, event);
        FacetFiltersForm.renderProductGridContainer(html);
        FacetFiltersForm.renderProductCount(html);
        if (typeof initializeScrollAnimationTrigger === "function") initializeScrollAnimationTrigger(html.innerHTML);
      });
  }

  static renderSectionFromCache(filterDataUrl, event) {
    const html = FacetFiltersForm.filterData.find(filterDataUrl).html;
    FacetFiltersForm.renderFilters(html, event);
    FacetFiltersForm.renderProductGridContainer(html);
    FacetFiltersForm.renderProductCount(html);
    if (typeof initializeScrollAnimationTrigger === "function") initializeScrollAnimationTrigger(html.innerHTML);
  }

  // 动态渲染产品列表 Render Product Grid Wrapper
  static renderProductGridContainer(html) {
    // document.getElementById("ProductGridContainer").innerHTML = new DOMParser().parseFromString(html, "text/html").getElementById("ProductGridContainer").innerHTML;

    // render product list
    if (
      document.querySelector("#ProductGridContainer .alp-product-list") &&
      new DOMParser().parseFromString(html, "text/html").querySelector("#ProductGridContainer .alp-product-list")
    ) {
      document.querySelector("#ProductGridContainer .alp-product-list").innerHTML = new DOMParser()
        .parseFromString(html, "text/html")
        .querySelector("#ProductGridContainer .alp-product-list").innerHTML;
    } else if (document.querySelector("#ProductGridContainer .alp-product-grid")) {
      document.querySelector("#ProductGridContainer .alp-product-list").innerHTML = "";
    }
    // render product grid
    if (
      document.querySelector("#ProductGridContainer .alp-product-grid") &&
      new DOMParser().parseFromString(html, "text/html").querySelector("#ProductGridContainer .alp-product-list")
    ) {
      document.querySelector("#ProductGridContainer .alp-product-grid").innerHTML = new DOMParser()
        .parseFromString(html, "text/html")
        .querySelector("#ProductGridContainer .alp-product-grid").innerHTML;
    } else if (document.querySelector("#ProductGridContainer .alp-product-grid")) {
      document.querySelector("#ProductGridContainer .alp-product-grid").innerHTML = "";
    }

    // render pagination
    if (
      document.querySelector("#ProductGridContainer .pagination-wrapper") &&
      new DOMParser().parseFromString(html, "text/html").querySelector("#ProductGridContainer .pagination-wrapper")
    ) {
      document.querySelector("#ProductGridContainer .pagination-wrapper").innerHTML = new DOMParser()
        .parseFromString(html, "text/html")
        .querySelector("#ProductGridContainer .pagination-wrapper").innerHTML;
      FacetFiltersForm.paginationListeners();
    } else if (document.querySelector("#ProductGridContainer .pagination-wrapper")) {
      document.querySelector("#ProductGridContainer .pagination-wrapper").innerHTML = "";
    }

    // filter collections
    if (document.querySelector(".facets__display-collections")) {
      FacetFiltersForm.filterCollectionsListeners();
      console.log("filter collections refresh");
      // rerender collection banner
      if (
        document.querySelector(".alp-section.alp-hero-banner-wrapper") &&
        new DOMParser().parseFromString(html, "text/html").querySelector(".alp-section.alp-hero-banner-wrapper")
      ) {
        document.querySelector(".alp-section.alp-hero-banner-wrapper").innerHTML = new DOMParser()
          .parseFromString(html, "text/html")
          .querySelector(".alp-section.alp-hero-banner-wrapper").innerHTML;
      }
    }

    //
    document
      .getElementById("ProductGridContainer")
      .querySelectorAll(".scroll-trigger")
      .forEach((element) => {
        element.classList.add("scroll-trigger--cancel");
      });
    // update lazyload
    lazyLoadInstance.update();
    // reload function
    AlpFn.ColorSwatchSwitch(".alp-colors-swatch-i", "[data-swatch-wrapper]", "[data-options]");
    AlpFn.QuickProductAddCart();
    AlpFn.EventDispatch("CompareTrigger");
    // affirm refresh
    if (typeof affirm !== "undefined" && typeof affirm.ui !== "undefined" && affirm.ui.ready()) {
      affirm.ui.refresh();
    }
    // scorll to #ProductGridContainer element top
    let ProductGridContainer_top = document.querySelector(".alp-product-list").offsetTop - 100;
    window.scrollTo({ top: ProductGridContainer_top, behavior: "smooth" });
    // remove class
    document.getElementById("ProductGridContainer").querySelector(".collection").classList.remove("loading");
    // reload function
    $(".filter-sub-close").removeClass("filter-sub-close");
    $(".alp-mobile-facets__summary").on("click", function () {
      $(this).parent().find(".alp-mobile-facets__submenu").toggleClass("filter-sub-close").stop().slideToggle(300);
      $(this).parent().toggleClass("filter-sub-close");
    });
    // reload star rating
    if (typeof StampedFn !== "undefined") {
      StampedFn.loadBadges();
    }
    // reload compare
    if (typeof ComparederReInit !== "undefined") {
      setTimeout(function () {
        if (document.querySelectorAll(".coder-compare-checkbox").length < 1) {
          ComparederReInit();
        }
      }, 1500);
    }
    console.log("Product Grid Container Rendered");
  }

  static renderProductCount(html) {
    const count = new DOMParser().parseFromString(html, "text/html").getElementById("ProductCount").innerHTML;
    const container = document.getElementById("ProductCount");
    const containerDesktop = document.getElementById("ProductCountDesktop");
    container.innerHTML = count;
    container.classList.remove("loading");
    if (containerDesktop) {
      containerDesktop.innerHTML = count;
      containerDesktop.classList.remove("loading");
    }
    const loadingSpinners = document.querySelectorAll(".facets-container .loading__spinner, facet-filters-form .loading__spinner");
    loadingSpinners.forEach((spinner) => spinner.classList.add("hidden"));
  }

  static renderFilters(html, event) {
    const parsedHTML = new DOMParser().parseFromString(html, "text/html");

    const facetDetailsElements = parsedHTML.querySelectorAll("#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter, #FacetFiltersPillsForm .js-filter");
    const matchesIndex = (element) => {
      const jsFilter = event ? event.target.closest(".js-filter") : undefined;
      return jsFilter ? element.dataset.index === jsFilter.dataset.index : false;
    };
    const facetsToRender = Array.from(facetDetailsElements).filter((element) => !matchesIndex(element));
    const countsToRender = Array.from(facetDetailsElements).find(matchesIndex);

    facetsToRender.forEach((element) => {
      document.querySelector(`.js-filter[data-index="${element.dataset.index}"]`).innerHTML = element.innerHTML;
    });

    FacetFiltersForm.renderActiveFacets(parsedHTML);
    FacetFiltersForm.renderAdditionalElements(parsedHTML);

    if (countsToRender) {
      const closestJSFilterID = event.target.closest(".js-filter").id;

      if (closestJSFilterID) {
        FacetFiltersForm.renderCounts(countsToRender, event.target.closest(".js-filter"));
        FacetFiltersForm.renderMobileCounts(countsToRender, document.getElementById(closestJSFilterID));

        const newElementSelector = document.getElementById(closestJSFilterID).classList.contains("mobile-facets__details")
          ? `#${closestJSFilterID} .mobile-facets__close-button`
          : `#${closestJSFilterID} .facets__summary`;
        const newElementToActivate = document.querySelector(newElementSelector);
        if (newElementToActivate) newElementToActivate.focus();
      }
    }
  }

  static renderActiveFacets(html) {
    const activeFacetElementSelectors = [".active-facets-mobile", ".active-facets-desktop"];

    activeFacetElementSelectors.forEach((selector) => {
      const activeFacetsElement = html.querySelector(selector);
      if (!activeFacetsElement) return;
      document.querySelector(selector).innerHTML = activeFacetsElement.innerHTML;
    });

    FacetFiltersForm.toggleActiveFacets(false);
  }

  static renderAdditionalElements(html) {
    const mobileElementSelectors = [".mobile-facets__open", ".mobile-facets__count", ".sorting"];

    mobileElementSelectors.forEach((selector) => {
      if (!html.querySelector(selector)) return;
      document.querySelector(selector).innerHTML = html.querySelector(selector).innerHTML;
    });

    document.getElementById("FacetFiltersFormMobile").closest("menu-drawer").bindEvents();
  }

  static renderCounts(source, target) {
    const targetSummary = target.querySelector(".facets__summary");
    const sourceSummary = source.querySelector(".facets__summary");

    if (sourceSummary && targetSummary) {
      targetSummary.outerHTML = sourceSummary.outerHTML;
    }

    const targetHeaderElement = target.querySelector(".facets__header");
    const sourceHeaderElement = source.querySelector(".facets__header");

    if (sourceHeaderElement && targetHeaderElement) {
      targetHeaderElement.outerHTML = sourceHeaderElement.outerHTML;
    }

    const targetWrapElement = target.querySelector(".facets-wrap");
    const sourceWrapElement = source.querySelector(".facets-wrap");

    if (sourceWrapElement && targetWrapElement) {
      const isShowingMore = Boolean(target.querySelector("show-more-button .label-show-more.hidden"));
      if (isShowingMore) {
        sourceWrapElement.querySelectorAll(".facets__item.hidden").forEach((hiddenItem) => hiddenItem.classList.replace("hidden", "show-more-item"));
      }

      targetWrapElement.outerHTML = sourceWrapElement.outerHTML;
    }
  }

  static renderMobileCounts(source, target) {
    const targetFacetsList = target.querySelector(".mobile-facets__list");
    const sourceFacetsList = source.querySelector(".mobile-facets__list");

    if (sourceFacetsList && targetFacetsList) {
      targetFacetsList.outerHTML = sourceFacetsList.outerHTML;
    }
  }

  static updateURLHash(searchParams) {
    history.pushState({ searchParams }, "", `${window.location.pathname}${searchParams && "?".concat(searchParams)}`);
  }

  static getSections() {
    return [
      {
        section: document.getElementById("product-list-container").dataset.id,
      },
    ];
  }

  createSearchParams(form) {
    const formData = new FormData(form);
    return new URLSearchParams(formData).toString();
  }

  onSubmitForm(searchParams, event) {
    FacetFiltersForm.renderPage(searchParams, event);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const sortFilterForms = document.querySelectorAll("facet-filters-form form");
    if (event.srcElement.className == "mobile-facets__checkbox") {
      const searchParams = this.createSearchParams(event.target.closest("form"));
      this.onSubmitForm(searchParams, event);
    } else {
      const forms = [];
      const isMobile = event.target.closest("form").id === "FacetFiltersFormMobile";

      sortFilterForms.forEach((form) => {
        if (!isMobile) {
          if (form.id === "FacetSortForm" || form.id === "FacetFiltersForm" || form.id === "FacetSortDrawerForm") {
            const noJsElements = document.querySelectorAll(".no-js-list");
            noJsElements.forEach((el) => el.remove());
            forms.push(this.createSearchParams(form));
          }
        } else if (form.id === "FacetFiltersFormMobile") {
          forms.push(this.createSearchParams(form));
        }
      });
      this.onSubmitForm(forms.join("&"), event);
    }
  }

  onActiveFilterClick(event) {
    event.preventDefault();
    FacetFiltersForm.toggleActiveFacets();
    const url = event.currentTarget.href.indexOf("?") == -1 ? "" : event.currentTarget.href.slice(event.currentTarget.href.indexOf("?") + 1);
    FacetFiltersForm.renderPage(url);
  }
}

FacetFiltersForm.filterData = [];
FacetFiltersForm.searchParamsInitial = window.location.search.slice(1);
FacetFiltersForm.searchParamsPrev = window.location.search.slice(1);
customElements.define("facet-filters-form", FacetFiltersForm);
FacetFiltersForm.setListeners();
if (document.querySelector("#ProductGridContainer .pagination-wrapper")) {
  FacetFiltersForm.paginationListeners();
}
if (document.querySelector(".facets__display-collections")) {
  FacetFiltersForm.filterCollectionsListeners();
}

class PriceRange extends HTMLElement {
  constructor() {
    super();
    this.querySelectorAll("input").forEach((element) => element.addEventListener("change", this.onRangeChange.bind(this)));
    this.setMinAndMaxValues();
  }

  onRangeChange(event) {
    this.adjustToValidValues(event.currentTarget);
    this.setMinAndMaxValues();
  }

  setMinAndMaxValues() {
    const inputs = this.querySelectorAll("input");
    const minInput = inputs[0];
    const maxInput = inputs[1];
    if (maxInput.value) minInput.setAttribute("max", maxInput.value);
    if (minInput.value) maxInput.setAttribute("min", minInput.value);
    if (minInput.value === "") maxInput.setAttribute("min", 0);
    if (maxInput.value === "") minInput.setAttribute("max", maxInput.getAttribute("max"));
  }

  adjustToValidValues(input) {
    const value = Number(input.value);
    const min = Number(input.getAttribute("min"));
    const max = Number(input.getAttribute("max"));

    if (value < min) input.value = min;
    if (value > max) input.value = max;
  }
}

customElements.define("price-range", PriceRange);

class FacetRemove extends HTMLElement {
  constructor() {
    super();
    const facetLink = this.querySelector("a");
    facetLink.setAttribute("role", "button");
    facetLink.addEventListener("click", this.closeFilter.bind(this));
    facetLink.addEventListener("keyup", (event) => {
      event.preventDefault();
      if (event.code.toUpperCase() === "SPACE") this.closeFilter(event);
    });
  }

  closeFilter(event) {
    event.preventDefault();
    const form = this.closest("facet-filters-form") || document.querySelector("facet-filters-form");
    form.onActiveFilterClick(event);
  }
}

customElements.define("facet-remove", FacetRemove);
