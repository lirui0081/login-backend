webpackJsonp([15],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(4);
	
	$(function () {
	
	  var chartReportAll = echarts.init(document.getElementById('chart-report-all'));
	  var chartReportAllOption = {
	    title: {
	      text: '总报表'
	    },
	    tooltip: {},
	    legend: {
	      data: ['销量']
	    },
	    xAxis: {
	      data: ['贵州六盘水', '西安测试店', '贵州六盘水', '西安测试店', '贵州六盘水']
	    },
	    yAxis: {},
	    series: [{
	      name: '销量',
	      type: 'bar',
	      data: [1700, 1100, 1350, 500, 700]
	    }],
	    color: ['#87c5e6']
	  };
	  chartReportAll.setOption(chartReportAllOption);
	
	  var chartReportShop1 = echarts.init(document.getElementById('chart-report-shop-1'));
	  var chartReportShopOption1 = {
	    tooltip: {
	      trigger: 'item',
	      formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	      orient: 'vertical',
	      x: 'right',
	      data: ['黄金', '铂金']
	    },
	    series: [{
	      name: '访问来源',
	      type: 'pie',
	      radius: ['50%', '70%'],
	      avoidLabelOverlap: false,
	      label: {
	        normal: {
	          show: false,
	          position: 'center'
	        },
	        emphasis: {
	          show: true,
	          textStyle: {
	            fontSize: '30',
	            fontWeight: 'bold'
	          }
	        }
	      },
	      labelLine: {
	        normal: {
	          show: false
	        }
	      },
	      data: [{ value: 335, name: '黄金' }, { value: 310, name: '铂金' }]
	    }],
	    color: ['#64c1ff', '#fbaa51']
	  };
	  chartReportShop1.setOption(chartReportShopOption1);
	
	  var chartReportShop2 = echarts.init(document.getElementById('chart-report-shop-2'));
	  var chartReportShopOption2 = {
	    tooltip: {
	      trigger: 'item',
	      formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	      orient: 'vertical',
	      x: 'right',
	      data: ['戒指', '手镯', '耳环', '项链']
	    },
	    series: [{
	      name: '访问来源',
	      type: 'pie',
	      radius: ['50%', '70%'],
	      avoidLabelOverlap: false,
	      label: {
	        normal: {
	          show: false,
	          position: 'center'
	        },
	        emphasis: {
	          show: true,
	          textStyle: {
	            fontSize: '30',
	            fontWeight: 'bold'
	          }
	        }
	      },
	      labelLine: {
	        normal: {
	          show: false
	        }
	      },
	      data: [{ value: 335, name: '戒指' }, { value: 310, name: '手镯' }, { value: 310, name: '耳环' }, { value: 310, name: '项链' }]
	    }],
	    color: ['#64c1ff', '#fbaa51', '#ab6b48', '#6bab48']
	  };
	  chartReportShop2.setOption(chartReportShopOption2);
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

/***/ 100:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "templates/report-manage.html";

/***/ }

});
//# sourceMappingURL=report-manage.js.map