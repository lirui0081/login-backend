webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(4);
	
	$(function () {
	  $('.select-item .name').click(function () {
	    $(this).parent().find('ul').slideToggle(100);
	    return false;
	  });
	  $('.select-item ul li').click(function () {
	    $(this).parent().slideUp(100);
	    $(this).parent().parent().find('.name').text($(this).text());
	    $(this).parent().parent().find('#shop-input').val($(this).attr('value'));
	    return false;
	  });
	  $(document).click(function () {
	    $('.select-item ul').slideUp(100);
	  });
	
	  var roleArrs = [];
	  $('.role-box .check-box .check-item').click(function () {
	    if ($(this).hasClass('checked')) {
	      return false;
	    }
	    $(this).addClass('checked');
	
	    var role = $(this).text();
	    var value = $(this).attr('value');
	
	    roleArrs.push({ role: role, value: value });
	
	    $(".role-checked-box").html($(".role-checked-box").html() + '<div class="checked-item">' + '<span class="cont">' + role + '</span>' + '<span class="item-delete" value="' + value + '">+</span>' + '</div>');
	
	    $(".role-box").append('<input type="hidden" value="' + value + '" name="roles" class="role-ipt-' + value + '" >');
	  });
	  $(".role-box .role-checked-box").on('click', '.item-delete', function () {
	
	    var value = $(this).attr('value');
	
	    $(this).parent().remove();
	    $('.role-box .role-ipt-' + value).remove();
	
	    $('.role-box .check-box .check-item' + '[value="' + value + '"]').removeClass('checked');
	  });
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

/***/ 67:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "templates/group-admin.html";

/***/ }

});
//# sourceMappingURL=group-admin.js.map