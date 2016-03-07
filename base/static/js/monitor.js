webpackJsonp([11],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(4);
	
	window.onload = function () {
	
	  var address = 'ws://localhost:' + 9998 + '/';
	  var ws = new WebSocket(address);
	  ws.addEventListener('open', function () {
	    console.log('Connected');
	  });
	  ws.addEventListener('close', function () {
	    console.log('Connection lost');
	  });
	  ws.addEventListener('message', function (e) {
	
	    // 接收消息
	
	    console.log(e.data);
	  });
	  console.log(ws);
	};

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

/***/ 81:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "templates/monitor.html";

/***/ }

});
//# sourceMappingURL=monitor.js.map