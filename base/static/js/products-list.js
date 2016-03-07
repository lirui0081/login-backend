webpackJsonp([13],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(4);
	
	__webpack_require__(95);

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(5);
	
	// 加载公共资源
	__webpack_require__(6);
	__webpack_require__(9);
	__webpack_require__(11);
	__webpack_require__(13);
	__webpack_require__(18);
	
	__webpack_require__(20);
	
	__webpack_require__(23);
	__webpack_require__(28);
	__webpack_require__(55);

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "templates/base.html";

/***/ },

/***/ 93:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "templates/products-list.html";

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(96);
	__webpack_require__(97);
	
	$(function () {
	  var listShowType = 'show-list'; // 列表显示形式
	  $(".products-box .show-pic-btn").click(function () {
	    if (listShowType == 'show-pic') {
	      return false;
	    } else {
	      $(".products-box .show-btn").removeClass('active');
	      $(this).addClass('active');
	      $(".products-box .products-items-box").removeClass('show-list').addClass('show-pic');
	      listShowType = 'show-pic';
	    }
	  });
	  $(".products-box .show-list-btn").click(function () {
	    if (listShowType == 'show-list') {
	      return false;
	    } else {
	      $(".products-box .show-btn").removeClass('active');
	      $(this).addClass('active');
	      $(".products-box .products-items-box").removeClass('show-pic').addClass('show-list');
	      listShowType = 'show-list';
	    }
	  });
	});

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "templates/products-box.html";

/***/ },

/***/ 97:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=products-list.js.map