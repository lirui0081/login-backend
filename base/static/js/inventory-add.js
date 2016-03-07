webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	
	$(function () {
	  console.log('lalal');
	  console.log($("#type"));
	  $(".type-daili").click(function () {
	    $(this).parent().find('.type-select').slideToggle(100);
	  });
	  $('.type-select li').click(function () {
	    $(".type-select").slideUp(100);
	    $(".type-daili").text($(this).text());
	    $(".type").val($(this).attr('data'));
	  });
	});

/***/ },

/***/ 69:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "templates/inventory-add.html";

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(72);
	__webpack_require__(20);
	
	// 加载公共资源
	__webpack_require__(6);
	__webpack_require__(9);
	__webpack_require__(11);
	__webpack_require__(13);
	__webpack_require__(18);
	
	__webpack_require__(23);
	__webpack_require__(28);
	__webpack_require__(55);

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "templates/base-without-sidebar.html";

/***/ }

});
//# sourceMappingURL=inventory-add.js.map