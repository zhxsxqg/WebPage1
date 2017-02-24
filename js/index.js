//获取元素
// var getElem=function(element){
// 	return document.querySelector(element);
// }
// var getAllElem=function(element){
// 	return document.querySelector(element);
// }
// 添加样式
var addCls=function(element,cls){
	var getelement=document.getElementsByClassName(element)[0];
	var baseCls=getelement.getAttribute('class');
	if(baseCls.indexOf(cls)===-1){//判断
		getelement.setAttribute('class',baseCls+' '+cls);
	}
}
//删除样式
var delCls=function(element,cls){
	var getelement=document.getElementsByClassName(element)[0];
	var baseCls=getelement.getAttribute('class');
	if(baseCls.indexOf(cls)!=-1){//判断
		getelement.setAttribute('class',baseCls.replace(cls,' '));
	}
}
var animationElement = {
	'.section-2':['.section-2_title','.section-2_line','.section-2_subtitle','.section-2_bg2','.section-2_bg3'],
	'.section-3':['.section-3_title','.section-3_line','.section-3_subtitle','.section-3_bg','.section-3_classfiy'],
	'.section-4':['.section-4_title','.section-4_line','.section-4_subtitle','.section-4_trait-item1',
				  '.section-4_trait-item2','.section-4_trait-item3','.section-4_trait-item4'],
	'.section-5':['.section-5_title','.section-5_line','.section-5_subtitle','.section-5_bg'],
}
// 设置多样式
var setAnimation=function(sectionName){
	var animationElements=animationElement[sectionName];
	for (var i = 0; i < animationElements.length; i++) {
		var element=document.querySelector(animationElements[i]);
		var baseCls=element.getAttribute('class');
		if(baseCls.indexOf('_done')===-1){
			element.setAttribute('class',baseCls+' '+animationElements[i].substr(1)+'_done')
		}
	}
}
//点击跳转
var navElem=document.getElementsByClassName('header_nav-item');
var oulineElem=document.getElementsByClassName('outline-item');
var eJump=function(idx,ele){
	ele[idx].onclick=function(){
		document.body.scrollTop=640*idx-60;
	}
}
for (var i = 0; i < navElem.length; i++) {
	eJump(i,navElem);
}
for (var m = 0; m < oulineElem.length; m++) {
	eJump(m,oulineElem);
}
//颜色滑动
var navcolor=function(idx){
	for (var i = 0; i < navElem.length; i++) {
		navElem[i].setAttribute('class','header_nav-item');
	}
	navElem[idx].setAttribute('class','header_nav-item header_nav-item_active');
}
var linecolor=function(idx){
	for (var i = 0; i < oulineElem.length; i++) {
		oulineElem[i].setAttribute('class','outline-item');
	}
	oulineElem[idx].setAttribute('class','outline-item outline-item_active');
}
//滑动门
var tip=document.getElementsByClassName('header_nav-item_tip')[0];
var navTip=function(idx){
	navElem[idx].onmouseover=function(){
		tip.style.left=109*idx+22+'px';
	}
	var active=0;
	navElem[idx].onmouseout=function(){
		for (var i = 0; i < navElem.length; i++) {
			if((navElem[i].getAttribute('class')).indexOf('header_nav-item_active')!= -1){
				active=i;
				break;
			}
		}
		tip.style.left=109*active+22+'px';
	}
}
for (var f = 0; f < navElem.length; f++) {
	navTip(f);
}
// 滚动条
window.onscroll = function(){
	var num=document.body.scrollTop;
	if(num>120){
		addCls('header','header_animation');
		addCls('outline','outline_animation');
	}else{
		delCls('header','header_animation');
		delCls('outline','outline_animation');
	}
	if(num>=0){
		navcolor(0);
		linecolor(0);
		tip.style.left=22+'px';
	}
	if(num>640-240){
		 setAnimation('.section-2');
		 navcolor(1);
		 linecolor(1);
		 tip.style.left=129+'px';
	}
	if(num>640*2-240){
		 setAnimation('.section-3');
		 navcolor(2);
		 linecolor(2);
		 tip.style.left=238+'px';
	}
	if(num>640*3-240){
		 setAnimation('.section-4');
		 navcolor(3);
		 linecolor(3);
		 tip.style.left=347+'px';
	}
	if(num>640*4-240){
		 setAnimation('.section-5');
		 navcolor(4);
		 linecolor(4);
		 tip.style.left=456+'px';
	}
}	























