;
//$(function() {
//	$('#search_input').bind('keyup', function() {
//	
//		var searchText = $('#search_input').val();
//		$.get('http://api.bing.com/qsonhs.aspx?q=' + searchText, function(d) {
//			var d = d.AS.Results[0].Suggests;
//			var html = '';
//			for(var i = 0; i < d.length; i++) {
//				html += '<li>' + d[i].Txt + '</li>';
//			}
//			$('#search_result').html(html);
//			$('#search_suggest').show().css({
//				top: $('#search_form').offset().top + $('#search_form').height() + 10,
//				left: $('#search_form').offset().left,
//				position: 'absolute'
//			});
//		}, 'json');
//	});
//	$(document).bind('click', function() {
//		$('#search_suggest').hide();
//	});
//	$(document).delegate('li','click',function(){
//		var keyword=$(this).text();
//		location.href='http://cn.bing.com/searcgh?q='+keyword;
//	});
//})

//$(function() {
//	$('#search_input').bind('keyup', function() {
//	$('#search_suggest').show().css({
//				top: $('#search_form').offset().top + $('#search_form').height() + 10,
//				left: $('#search_form').offset().left,
//				position: 'absolute'
//			});
//			})
//	$(document).bind('click', function() {
//		$('#search_suggest').hide();
//	});
//})

var getDOM = function(id) {
	return document.getElementById(id);
}
var addEvent = function(id, event, fn) {
	var el = getDOM(id) || document;
	if(el.addEventListener) {
		el.addEventListener(event, fn, false);
	} else if(el.attachEvent) {
		el.addEventListener('on' + event, fn);
	}
}
var getElementLeft = function(element) {
	var actualLeft = element.offsetLeft;
	var current = element.offsetParent;
	while(current != +null) {
		actualLeft += current.offsetLeft;
		current = current.offsetParent;
	}
	return actualLeft;
}
var getElementTop = function(element) {
	var actualTop = element.offsetTop;
	var current = element.offsetParent;
	while(current != +null) {
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	return actualTop;
}
var ajaxGet = function(url, callback) {
	var _xhr = null;
	if(window.XMLHttpRequest) {
		_xhr = new wisndow.XMLHttpRequest();
	} else if(window.ActiveXObject) {
		_xhr = new ActiveXObject("Msxml2.XMLHTTP");
	}
	_xhr.onreadystatechange = function() {
		if(_xhr.readyState = 4 && _xhr.status == 200) {
			callback(JSON.parse(_xhr.responseText));
		}
	}
	_xhr.open('get', url, false);
	_xhr.send(null);
}
var delegateEvent=function(target,event,fn){
	addEvent(document,event,function(e){
		if(e.target.nodeName==target.toUpperCase()){
			fn.call(e.target);
		}
	});
}
addEvent('search_input', 'keyup', function() {
	var searchText = getDOM('search_input').value;
	ajaxGet('http://api.bing.com/qsonhs.aspx?q=' + searchText, function(d) {
		var d = d.AS.Results[0].Suggests;
		var html = '';
		for(var i = 0; i < d.length; i++) {
			html += '<li>' + d[i].Txt + '</li>';
		}
		var _dom=getDOM('search_suggest');
		getDOM('search_result').innerHTML=html;
		 _dom.style.top = getElementTop(getDOM('search_form')) + 38 + 'px';
		 _dom.style.left = getElementTop(getDOM('search_form')) + 'px';
		 _dom.style.position = 'absolute';
		 _dom.style.display = 'block';
	})
})
delegateEvent('li','click',function(){
	var keyword=this.innerHTML;
	location.href='http://cn.bing.com/search?q='+keyword;
});
//$(document).ready(function(){	 
//})