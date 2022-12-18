/* ----------------------------- All JavaScript ----------------------------- */

$(document).ready(function () {
  // --------- Vertical Click and Drag Scrolling
  // Catatan : Dopake di page portfolios agar tetap bisa scroll saat drag
  // Sumber : https://codepen.io/JTParrett/pen/uzGvy

  // ON when the sreen size is less than 768px (Mobile & Tablet)
  function triggerClickScroll(x) {
    if (x.matches) {
      // If media query matches

      // Only for Check
      // document.body.style.backgroundColor = "yellow";

      // The Script
      function enableCliskScroll() {
        var curDown = false,
          curYPos = 0,
          curXPos = 0;
        $(window).mousemove(function (m) {
          if (curDown === true) {
            $(window).scrollTop($(window).scrollTop() + (curYPos - m.pageY));
            $(window).scrollLeft($(window).scrollLeft() + (curXPos - m.pageX));
          }
        });

        $(window).mousedown(function (m) {
          curDown = true;
          curYPos = m.pageY;
          curXPos = m.pageX;
        });

        $(window).mouseup(function () {
          curDown = false;
        });
      }
      enableCliskScroll($('#root-portfolios')); // ON/OFF in Here
    } else {
      // Only for Check
      // document.body.style.backgroundColor = "pink";
    }
  }

  var x = window.matchMedia('(max-width: 768px)');
  triggerClickScroll(x);
  x.addListener(triggerClickScroll);

  //---------- jQuery Flip Js

  $('#card1').flip({
    // Optional
    // trigger: 'manual', // Disable only for Soon card
    trigger: 'click',
    autoSize: true,
  });

  $('#card2').flip({
    // Optional
    trigger: 'click',
    autoSize: true,
  });

  $('#card3').flip({
    // Optional
    trigger: 'click',
    autoSize: true,
  });

  $('#card4').flip({
    // Optional
    trigger: 'click',
    autoSize: true,
  });

  $('#card5').flip({
    // Optional
    trigger: 'click',
    autoSize: true,
  });

  $('#card6').flip({
    // Optional
    trigger: 'click',
    autoSize: true,
  });

  $('#card7').flip({
    // Optional
    trigger: 'click',
    autoSize: true,
  });

  $('#card8').flip({
    // Optional
    trigger: 'click',
    autoSize: true,
  });

  $('#card9').flip({
    // Optional
    trigger: 'click',
    autoSize: true,
  });

  $('#card10').flip({
    // Optional
    trigger: 'click',
    autoSize: true,
  });

  $('#card11').flip({
    // Optional
    trigger: 'click',
    autoSize: true,
  });

  $('#card12').flip({
    // Optional
    trigger: 'click',
    autoSize: true,
  });

  //---------- Slick JS

  $('.slick-js').slick({
    dots: false,
    arrows: false,
    draggable: true,

    // Auto-geser (A Little Legacy)
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1700,
    responsive: [{
        breakpoint: 995,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 771,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 531,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
    ],
  });

  //---------- Sweet Alert Js

  $('.alert-show').click(function () {
    Swal.fire({
      // icon: 'info',
      title: '👋 Hello my friend!',
      text: 'To get examples of works, you can contact me 😊👌',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: 'Okay',
    });
  });

  $('.alert-show-2a').click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚙️ Frontend Dev.',
      text: 'HTML5 & CSS3 for describing and styling the structure of web pages.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: 'Okay',
    });
  });

  $('.alert-show-2b').click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚙️ Frontend Dev.',
      text: 'SASS & Bootstrap for CSS preprocessors and frameworks.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: 'Okay',
    });
  });

  $('.alert-show-2c').click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚙️ Frontend Dev.',
      text: 'JavaScript for web interaction with users. jQuery & Vue.js for main javascript library and frameworks.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: 'Okay',
    });
  });

  $('.alert-show-2d').click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚙️ Frontend Dev.',
      text: 'Responsive Website for provide optimal viewing on variety devices (mobile, tablet, desktop)',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: 'Okay',
    });
  });

  $('.alert-show-3a').click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚔️ Tools',
      text: 'Taskade for task management. Whimsical for collaborative flowcharts, wireframes, sticky notes and mind maps.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: 'Okay',
    });
  });

  $('.alert-show-3b').click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚔️ Tools',
      text: 'Balsamiq, Adobe XD & Figma for vector-based design tools plus prototyping (visual design, UX, UI, illustration, logo)',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: 'Okay',
    });
  });

  $('.alert-show-3c').click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚔️ Tools',
      text: 'Adobe Photoshop for image manipulation, Gravit Designer for vector-based design and Draw.io for diagramming tools.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: 'Okay',
    });
  });

  $('.alert-show-3d').click(function () {
    Swal.fire({
      // icon: 'info',
      title: '⚔️ Tools',
      text: 'Visual Studio Code for text editor, Git for versioning and GitHub for project management.',

      imageUrl: 'assets/logo2.svg',
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: 'Custom image',

      width: 510,
      padding: '3em',
      background: '#F7F9F9 url()',
      backdrop: `
        rgba(13, 13, 13, 0.92)
        url("assets/image-4CND.gif")
        top
        no-repeat
      `,

      confirmButtonText: 'Okay',
    });
  });

  // --------- IMPORTANT : DRAG ON/OFF FORCE

  // Destroy drag for all items.
  // grid.getItems().forEach(item => {
  //   if (!item._drag) return;
  //   item._drag.destroy();
  //   item._drag = null;
  // });

  // Enable drag for all items.
  // grid.getItems().forEach(item => {
  //   if (item._drag) return;
  //   item._drag = new Muuri.ItemDrag(item);
  // });

  //---------- Web Animation & Hummber & Muuri Js

  var grid = null,
    wrapper = document.querySelector('.grid-wrapper'),
    searchField = wrapper.querySelector('.search-field'),
    filterField = wrapper.querySelector('.filter-field'),
    sortField = wrapper.querySelector('.sort-field'),
    gridElem = wrapper.querySelector('.grid'),
    searchAttr = 'data-title',
    filterAttr = 'data-color',
    searchFieldValue,
    filterFieldValue,
    sortFieldValue,
    dragOrder = [];

  // Init the grid layout
  grid = new Muuri(gridElem, {
    // MENYALAKAN/MEMATIKAN DRAG & DROP UNTUK DIV IMAGE
    dragEnabled: false,
  });

  // Set inital search query, active filter, active sort value and active layout.
  searchFieldValue = searchField.value.toLowerCase();
  filterFieldValue = filterField.value;
  sortFieldValue = sortField.value;

  // Search field event binding
  searchField.addEventListener('keyup', function () {
    var newSearch = searchField.value.toLowerCase();
    if (searchFieldValue !== newSearch) {
      searchFieldValue = newSearch;
      filter();
    }
  });

  // Filter field event binding
  filterField.addEventListener('change', filter);

  // Sort field event binding
  sortField.addEventListener('change', sort);

  // Filtering
  function filter() {
    filterFieldValue = filterField.value;
    grid.filter(function (item) {
      var element = item.getElement(),
        isSearchMatch = !searchFieldValue ?
        true :
        (element.getAttribute(searchAttr) || '')
        .toLowerCase()
        .indexOf(searchFieldValue) > -1,
        isFilterMatch = !filterFieldValue ?
        true :
        (element.getAttribute(filterAttr) || '') === filterFieldValue;
      return isSearchMatch && isFilterMatch;
    });
  }

  // Sorting
  function sort() {
    // Do nothing if sort value did not change.
    var currentSort = sortField.value;
    if (sortFieldValue === currentSort) {
      return;
    }

    // If we are changing from "order" sorting to something else
    // let's store the drag order.
    if (sortFieldValue === 'order') {
      dragOrder = grid.getItems();
    }

    // Sort the items.
    grid.sort(
      currentSort === 'title' ?
      compareItemTitle :
      currentSort === 'color' ?
      compareItemColor :
      dragOrder
    );
    sortFieldValue = currentSort;
  }

  // Compare data-title
  function compareItemTitle(a, b) {
    var aVal = a.getElement().getAttribute(searchAttr) || '';
    var bVal = b.getElement().getAttribute(searchAttr) || '';
    return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
  }

  // Compare data-color
  function compareItemColor(a, b) {
    var aVal = a.getElement().getAttribute(filterAttr) || '';
    var bVal = b.getElement().getAttribute(filterAttr) || '';
    return aVal < bVal ? -1 : aVal > bVal ? 1 : compareItemTitle(a, b);
  }

  //---------- Muuri Js for Imag Dragger

  var grid = new Muuri({
    container: document.getElementsByClassName('grid')[0],
    items: [].slice.call(document.getElementsByClassName('item')),
    // MENYALAKAN/MEMATIKAN DRAG & DROP UNTUK DIV IMAGE
    dragEnabled: false,
  });

  // Prevent native image drag for images inside items.
  var images = document.querySelectorAll('.item img');
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener(
      'dragstart',
      function (e) {
        e.preventDefault();
      },
      false
    );
  }

  // Refresh item dimensions and do layout after all images have loaded.
  window.addEventListener('load', function () {
    grid.refresh();
    grid.layout();
  });
});