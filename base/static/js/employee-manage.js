webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(4);
	
	$(function () {
	
	  // $(".switch-box .checkbox").click(function() {
	  //   $(this).hasClass('disabled') ? $(this).removeClass('disabled').attr('data-text', "在职") : $(this).addClass('disabled').attr('data-text', "离职");
	  //
	  //   // ajax
	  //
	  // });
	
	  $(".select-search .name").click(function () {
	    $(".select-search ul").slideToggle(100);
	  });
	  $(".select-search ul li").click(function () {
	    $(".select-search .name").text($(this).text());
	    $(".select-search ul").slideToggle(100);
	    $(".search-input").attr('name', $(this).attr('codename'));
	  });
	  $(".select-search .name").text($(".select-search ul li:eq(0)").text());
	  $(".search-input").attr('name', $(".select-search ul li:eq(0)").attr('codename'));
	});

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

/***/ 61:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "templates/employee-manage.html";

/***/ }

});
//# sourceMappingURL=employee-manage.js.map