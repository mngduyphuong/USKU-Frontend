(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{840:function(t,e,o){"use strict";o.d(e,"a",(function(){return Lt}));var n=o(417),r=o(443),l=o(439),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(n.a)(e,t),e.type="grid",e.dependencies=["xAxis","yAxis"],e.layoutMode="box",e.defaultOption={show:!1,z:0,left:"10%",top:60,right:"10%",bottom:70,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"},e}(l.a),h=c,d=o(619),f=o(416),x=function(){function t(){}return t.prototype.getNeedCrossZero=function(){return!this.option.scale},t.prototype.getCoordSysModel=function(){},t}(),y=o(418),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.getCoordSysModel=function(){return this.getReferringComponents("grid",y.b).models[0]},e.type="cartesian2dAxis",e}(l.a);f.H(v,x);var m={show:!0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#6E7079",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#E0E6F1"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.2)","rgba(210,219,238,0.2)"]}}},M=f.G({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},m),O=f.G({boundaryGap:[0,0],axisLine:{show:"auto"},axisTick:{show:"auto"},splitNumber:5,minorTick:{show:!1,splitNumber:5,length:3,lineStyle:{}},minorSplitLine:{show:!1,lineStyle:{color:"#F4F7FD",width:1}}},m),A={category:M,value:O,time:f.G({splitNumber:6,axisLabel:{showMinLabel:!1,showMaxLabel:!1,rich:{primary:{fontWeight:"bold"}}},splitLine:{show:!1}},O),log:f.i({logBase:10},O)},j=o(441),C=o(683),L={value:1,category:1,time:1,log:1};function k(t,e,o,r){Object(f.k)(L,(function(l,c){var h=Object(f.G)(Object(f.G)({},A[c],!0),r,!0),d=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.type=e+"Axis."+c,o}return Object(n.a)(o,t),o.prototype.mergeDefaultAndTheme=function(option,t){var e=Object(j.b)(this),o=e?Object(j.c)(option):{},n=t.getTheme();Object(f.G)(option,n.get(c+"Axis")),Object(f.G)(option,this.getDefaultOption()),option.type=_(option),e&&Object(j.e)(option,o,e)},o.prototype.optionUpdated=function(){"category"===this.option.type&&(this.__ordinalMeta=C.a.createByAxisModel(this))},o.prototype.getCategories=function(t){var option=this.option;if("category"===option.type)return t?option.data:this.__ordinalMeta.categories},o.prototype.getOrdinalMeta=function(){return this.__ordinalMeta},o.type=e+"Axis."+c,o.defaultOption=h,o}(o);t.registerComponentModel(d)})),t.registerSubTypeDefaulter(e+"Axis",_)}function _(option){return option.type||(option.data?"category":"value")}o(56),o(32);var w=o(461),T=o(432),S=function(){function t(t){this.type="cartesian",this._dimList=[],this._axes={},this.name=t||""}return t.prototype.getAxis=function(t){return this._axes[t]},t.prototype.getAxes=function(){return f.F(this._dimList,(function(t){return this._axes[t]}),this)},t.prototype.getAxesByScale=function(t){return t=t.toLowerCase(),f.n(this.getAxes(),(function(e){return e.scale.type===t}))},t.prototype.addAxis=function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},t}(),E=o(457),I=o(437),G=["x","y"];function P(t){return"interval"===t.type||"time"===t.type}var B=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="cartesian2d",e.dimensions=G,e}return Object(n.a)(e,t),e.prototype.calcAffineTransform=function(){this._transform=this._invTransform=null;var t=this.getAxis("x").scale,e=this.getAxis("y").scale;if(P(t)&&P(e)){var o=t.getExtent(),n=e.getExtent(),r=this.dataToPoint([o[0],n[0]]),l=this.dataToPoint([o[1],n[1]]),c=o[1]-o[0],h=n[1]-n[0];if(c&&h){var d=(l[0]-r[0])/c,f=(l[1]-r[1])/h,x=r[0]-o[0]*d,y=r[1]-n[0]*f,v=this._transform=[d,0,0,f,x,y];this._invTransform=Object(E.d)([],v)}}},e.prototype.getBaseAxis=function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},e.prototype.containPoint=function(t){var e=this.getAxis("x"),o=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&o.contain(o.toLocalCoord(t[1]))},e.prototype.containData=function(data){return this.getAxis("x").containData(data[0])&&this.getAxis("y").containData(data[1])},e.prototype.containZone=function(t,e){var o=this.dataToPoint(t),n=this.dataToPoint(e),area=this.getArea(),r=new T.a(o[0],o[1],n[0]-o[0],n[1]-o[1]);return area.intersect(r)},e.prototype.dataToPoint=function(data,t,e){e=e||[];var o=data[0],n=data[1];if(this._transform&&null!=o&&isFinite(o)&&null!=n&&isFinite(n))return Object(I.b)(e,data,this._transform);var r=this.getAxis("x"),l=this.getAxis("y");return e[0]=r.toGlobalCoord(r.dataToCoord(o,t)),e[1]=l.toGlobalCoord(l.dataToCoord(n,t)),e},e.prototype.clampData=function(data,t){var e=this.getAxis("x").scale,o=this.getAxis("y").scale,n=e.getExtent(),r=o.getExtent(),l=e.parse(data[0]),c=o.parse(data[1]);return(t=t||[])[0]=Math.min(Math.max(Math.min(n[0],n[1]),l),Math.max(n[0],n[1])),t[1]=Math.min(Math.max(Math.min(r[0],r[1]),c),Math.max(r[0],r[1])),t},e.prototype.pointToData=function(t,e){var o=[];if(this._invTransform)return Object(I.b)(o,t,this._invTransform);var n=this.getAxis("x"),r=this.getAxis("y");return o[0]=n.coordToData(n.toLocalCoord(t[0]),e),o[1]=r.coordToData(r.toLocalCoord(t[1]),e),o},e.prototype.getOtherAxis=function(t){return this.getAxis("x"===t.dim?"y":"x")},e.prototype.getArea=function(){var t=this.getAxis("x").getGlobalExtent(),e=this.getAxis("y").getGlobalExtent(),o=Math.min(t[0],t[1]),n=Math.min(e[0],e[1]),r=Math.max(t[0],t[1])-o,l=Math.max(e[0],e[1])-n;return new T.a(o,n,r,l)},e}(S),D=B,z=o(420),F=o(438),V=Object(y.m)();function R(t){return"category"===t.type?function(t){var e=t.getLabelModel(),o=H(t,e);return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:o.labelCategoryInterval}:o}(t):function(t){var e=t.scale.getTicks(),o=Object(w.h)(t);return{labels:f.F(e,(function(e,n){return{level:e.level,formattedLabel:o(e,n),rawLabel:t.scale.getLabel(e),tickValue:e.value}}))}}(t)}function N(t,e){return"category"===t.type?function(t,e){var o,n,r=W(t,"ticks"),l=Object(w.e)(e),c=Z(r,l);if(c)return c;e.get("show")&&!t.scale.isBlank()||(o=[]);if(f.v(l))o=K(t,l,!0);else if("auto"===l){var h=H(t,t.getLabelModel());n=h.labelCategoryInterval,o=f.F(h.labels,(function(t){return t.tickValue}))}else o=U(t,n=l,!0);return J(r,l,{ticks:o,tickCategoryInterval:n})}(t,e):{ticks:f.F(t.scale.getTicks(),(function(t){return t.value}))}}function H(t,e){var o,n,r=W(t,"labels"),l=Object(w.e)(e),c=Z(r,l);return c||(f.v(l)?o=K(t,l):(n="auto"===l?function(t){var e=V(t).autoInterval;return null!=e?e:V(t).autoInterval=t.calculateCategoryInterval()}(t):l,o=U(t,n)),J(r,l,{labels:o,labelCategoryInterval:n}))}function W(t,e){return V(t)[e]||(V(t)[e]=[])}function Z(t,e){for(var i=0;i<t.length;i++)if(t[i].key===e)return t[i].value}function J(t,e,o){return t.push({key:e,value:o}),o}function U(t,e,o){var n=Object(w.h)(t),r=t.scale,l=r.getExtent(),c=t.getLabelModel(),h=[],d=Math.max((e||0)+1,1),f=l[0],x=r.count();0!==f&&d>1&&x/d>2&&(f=Math.round(Math.ceil(f/d)*d));var y=Object(w.j)(t),v=c.get("showMinLabel")||y,m=c.get("showMaxLabel")||y;v&&f!==l[0]&&O(l[0]);for(var M=f;M<=l[1];M+=d)O(M);function O(t){var e={value:t};h.push(o?t:{formattedLabel:n(e),rawLabel:r.getLabel(e),tickValue:t})}return m&&M-d!==l[1]&&O(l[1]),h}function K(t,e,o){var n=t.scale,r=Object(w.h)(t),l=[];return f.k(n.getTicks(),(function(t){var c=n.getLabel(t),h=t.value;e(t.value,c)&&l.push(o?h:{formattedLabel:r(t),rawLabel:c,tickValue:h})})),l}var Q=[0,1];function X(t,e){var o=(t[1]-t[0])/e/2;t[0]+=o,t[1]-=o}var Y=function(t){function e(e,o,n,r,l){var c=t.call(this,e,o,n)||this;return c.index=0,c.type=r||"value",c.position=l||"bottom",c}return Object(n.a)(e,t),e.prototype.isHorizontal=function(){var t=this.position;return"top"===t||"bottom"===t},e.prototype.getGlobalExtent=function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},e.prototype.pointToData=function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},e.prototype.setCategorySortInfo=function(t){if("category"!==this.type)return!1;this.model.option.categorySortInfo=t,this.scale.setSortInfo(t)},e}(function(){function t(t,e,o){this.onBand=!1,this.inverse=!1,this.dim=t,this.scale=e,this._extent=o||[0,0]}return t.prototype.contain=function(t){var e=this._extent,o=Math.min(e[0],e[1]),n=Math.max(e[0],e[1]);return t>=o&&t<=n},t.prototype.containData=function(data){return this.scale.contain(data)},t.prototype.getExtent=function(){return this._extent.slice()},t.prototype.getPixelPrecision=function(t){return Object(z.e)(t||this.scale.getExtent(),this._extent)},t.prototype.setExtent=function(t,e){var o=this._extent;o[0]=t,o[1]=e},t.prototype.dataToCoord=function(data,t){var e=this._extent,o=this.scale;return data=o.normalize(data),this.onBand&&"ordinal"===o.type&&X(e=e.slice(),o.count()),Object(z.j)(data,Q,e,t)},t.prototype.coordToData=function(t,e){var o=this._extent,n=this.scale;this.onBand&&"ordinal"===n.type&&X(o=o.slice(),n.count());var r=Object(z.j)(t,o,Q,e);return this.scale.scale(r)},t.prototype.pointToData=function(t,e){},t.prototype.getTicksCoords=function(t){var e=(t=t||{}).tickModel||this.getTickModel(),o=N(this,e).ticks,n=Object(f.F)(o,(function(t){return{coord:this.dataToCoord("ordinal"===this.scale.type?this.scale.getRawOrdinalNumber(t):t),tickValue:t}}),this);return function(t,e,o,n){var r=e.length;if(!t.onBand||o||!r)return;var l,c,h=t.getExtent();if(1===r)e[0].coord=h[0],l=e[1]={coord:h[0]};else{var d=e[r-1].tickValue-e[0].tickValue,x=(e[r-1].coord-e[0].coord)/d;Object(f.k)(e,(function(t){t.coord-=x/2})),c=1+t.scale.getExtent()[1]-e[r-1].tickValue,l={coord:e[r-1].coord+x*c},e.push(l)}var y=h[0]>h[1];v(e[0].coord,h[0])&&(n?e[0].coord=h[0]:e.shift());n&&v(h[0],e[0].coord)&&e.unshift({coord:h[0]});v(h[1],l.coord)&&(n?l.coord=h[1]:e.pop());n&&v(l.coord,h[1])&&e.push({coord:h[1]});function v(a,b){return a=Object(z.r)(a),b=Object(z.r)(b),y?a>b:a<b}}(this,n,e.get("alignWithLabel"),t.clamp),n},t.prototype.getMinorTicksCoords=function(){if("ordinal"===this.scale.type)return[];var t=this.model.getModel("minorTick").get("splitNumber");t>0&&t<100||(t=5);var e=this.scale.getMinorTicks(t);return Object(f.F)(e,(function(t){return Object(f.F)(t,(function(t){return{coord:this.dataToCoord(t),tickValue:t}}),this)}),this)},t.prototype.getViewLabels=function(){return R(this).labels},t.prototype.getLabelModel=function(){return this.model.getModel("axisLabel")},t.prototype.getTickModel=function(){return this.model.getModel("axisTick")},t.prototype.getBandWidth=function(){var t=this._extent,e=this.scale.getExtent(),o=e[1]-e[0]+(this.onBand?1:0);0===o&&(o=1);var n=Math.abs(t[1]-t[0]);return Math.abs(n)/o},t.prototype.calculateCategoryInterval=function(){return function(t){var e=function(t){var e=t.getLabelModel();return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}(t),o=Object(w.h)(t),n=(e.axisRotate-e.labelRotate)/180*Math.PI,r=t.scale,l=r.getExtent(),c=r.count();if(l[1]-l[0]<1)return 0;var h=1;c>40&&(h=Math.max(1,Math.floor(c/40)));for(var d=l[0],f=t.dataToCoord(d+1)-t.dataToCoord(d),x=Math.abs(f*Math.cos(n)),y=Math.abs(f*Math.sin(n)),v=0,m=0;d<=l[1];d+=h){var M,O,rect=F.d(o({value:d}),e.font,"center","top");M=1.3*rect.width,O=1.3*rect.height,v=Math.max(v,M,7),m=Math.max(m,O,7)}var A=v/x,j=m/y;isNaN(A)&&(A=1/0),isNaN(j)&&(j=1/0);var C=Math.max(0,Math.floor(Math.min(A,j))),L=V(t.model),k=t.getExtent(),_=L.lastAutoInterval,T=L.lastTickCount;return null!=_&&null!=T&&Math.abs(_-C)<=1&&Math.abs(T-c)<=1&&_>C&&L.axisExtent0===k[0]&&L.axisExtent1===k[1]?C=_:(L.lastTickCount=c,L.lastAutoInterval=C,L.axisExtent0=k[0],L.axisExtent1=k[1]),C}(this)},t}()),$=o(584),tt=o(474),et=o(548),ot=Math.log;function it(t,e){return t.getCoordSysModel()===e}function nt(t,e,o,n){o.getAxesOnZeroOf=function(){return r?[r]:[]};var r,l=t[e],c=o.model,h=c.get(["axisLine","onZero"]),d=c.get(["axisLine","onZeroAxisIndex"]);if(h){if(null!=d)at(l[d])&&(r=l[d]);else for(var f in l)if(l.hasOwnProperty(f)&&at(l[f])&&!n[x(l[f])]){r=l[f];break}r&&(n[x(r)]=!0)}function x(t){return t.dim+"_"+t.index}}function at(t){return t&&"category"!==t.type&&"time"!==t.type&&Object(w.g)(t)}var st=function(){function t(t,e,o){this.type="grid",this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this.axisPointerEnabled=!0,this.dimensions=G,this._initCartesian(t,e,o),this.model=t}return t.prototype.getRect=function(){return this._rect},t.prototype.update=function(t,e){var o=this._axesMap;function n(t){var e,o=Object(f.D)(t),n=o.length;if(n){for(var r=[],i=n-1;i>=0;i--){var l=t[+o[i]],c=l.model,h=l.scale;Object(tt.e)(h)&&c.get("alignTicks")&&null==c.get("interval")?r.push(l):(Object(w.i)(h,c),Object(tt.e)(h)&&(e=l))}r.length&&(e||(e=r.pop(),Object(w.i)(e.scale,e.model)),Object(f.k)(r,(function(t){!function(t,e,o){var n=et.a.prototype,r=n.getTicks.call(o),l=n.getTicks.call(o,!0),c=r.length-1,h=n.getInterval.call(o),d=Object(w.f)(t,e),f=d.extent,x=d.fixMin,y=d.fixMax;if("log"===t.type){var v=ot(t.base);f=[ot(f[0])/v,ot(f[1])/v]}t.setExtent(f[0],f[1]),t.calcNiceExtent({splitNumber:c,fixMin:x,fixMax:y});var m=n.getExtent.call(t);x&&(f[0]=m[0]),y&&(f[1]=m[1]);var M=n.getInterval.call(t),O=f[0],A=f[1];if(x&&y)M=(A-O)/c;else if(x)for(A=f[0]+M*c;A<f[1]&&isFinite(A)&&isFinite(f[1]);)M=Object(tt.c)(M),A=f[0]+M*c;else if(y)for(O=f[1]-M*c;O>f[0]&&isFinite(O)&&isFinite(f[0]);)M=Object(tt.c)(M),O=f[1]-M*c;else{t.getTicks().length-1>c&&(M=Object(tt.c)(M));var j=M*c;A=Math.ceil(f[1]/M)*M,(O=Object(z.r)(A-j))<0&&f[0]>=0?(O=0,A=Object(z.r)(j)):A>0&&f[1]<=0&&(A=0,O=-Object(z.r)(j))}var C=(r[0].value-l[0].value)/h,L=(r[c].value-l[c].value)/h;n.setExtent.call(t,O+M*C,A+M*L),n.setInterval.call(t,M),(C||L)&&n.setNiceExtent.call(t,O+M,A-M)}(t.scale,t.model,e.scale)})))}}this._updateScale(t,this.model),n(o.x),n(o.y);var r={};Object(f.k)(o.x,(function(t){nt(o,"y",t,r)})),Object(f.k)(o.y,(function(t){nt(o,"x",t,r)})),this.resize(this.model,e)},t.prototype.resize=function(t,e,o){var n=t.getBoxLayoutParams(),r=!o&&t.get("containLabel"),l=Object(j.d)(n,{width:e.getWidth(),height:e.getHeight()});this._rect=l;var c=this._axesList;function h(){Object(f.k)(c,(function(t){var e=t.isHorizontal(),o=e?[0,l.width]:[0,l.height],n=t.inverse?1:0;t.setExtent(o[n],o[1-n]),function(t,e){var o=t.getExtent(),n=o[0]+o[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return n-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return n-t+e}}(t,e?l.x:l.y)}))}h(),r&&(Object(f.k)(c,(function(t){if(!t.model.get(["axisLabel","inside"])){var e=Object(w.b)(t);if(e){var o=t.isHorizontal()?"height":"width",n=t.model.get(["axisLabel","margin"]);l[o]-=e[o]+n,"top"===t.position?l.y+=e.height+n:"left"===t.position&&(l.x+=e.width+n)}}})),h()),Object(f.k)(this._coordsList,(function(t){t.calcAffineTransform()}))},t.prototype.getAxis=function(t,e){var o=this._axesMap[t];if(null!=o)return o[e||0]},t.prototype.getAxes=function(){return this._axesList.slice()},t.prototype.getCartesian=function(t,e){if(null!=t&&null!=e){var o="x"+t+"y"+e;return this._coordsMap[o]}Object(f.z)(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var i=0,n=this._coordsList;i<n.length;i++)if(n[i].getAxis("x").index===t||n[i].getAxis("y").index===e)return n[i]},t.prototype.getCartesians=function(){return this._coordsList.slice()},t.prototype.convertToPixel=function(t,e,o){var n=this._findConvertTarget(e);return n.cartesian?n.cartesian.dataToPoint(o):n.axis?n.axis.toGlobalCoord(n.axis.dataToCoord(o)):null},t.prototype.convertFromPixel=function(t,e,o){var n=this._findConvertTarget(e);return n.cartesian?n.cartesian.pointToData(o):n.axis?n.axis.coordToData(n.axis.toLocalCoord(o)):null},t.prototype._findConvertTarget=function(t){var e,o,n=t.seriesModel,r=t.xAxisModel||n&&n.getReferringComponents("xAxis",y.b).models[0],l=t.yAxisModel||n&&n.getReferringComponents("yAxis",y.b).models[0],c=t.gridModel,h=this._coordsList;if(n)e=n.coordinateSystem,Object(f.q)(h,e)<0&&(e=null);else if(r&&l)e=this.getCartesian(r.componentIndex,l.componentIndex);else if(r)o=this.getAxis("x",r.componentIndex);else if(l)o=this.getAxis("y",l.componentIndex);else if(c){c.coordinateSystem===this&&(e=this._coordsList[0])}return{cartesian:e,axis:o}},t.prototype.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},t.prototype._initCartesian=function(t,e,o){var n=this,r=this,l={left:!1,right:!1,top:!1,bottom:!1},c={x:{},y:{}},h={x:0,y:0};if(e.eachComponent("xAxis",d("x"),this),e.eachComponent("yAxis",d("y"),this),!h.x||!h.y)return this._axesMap={},void(this._axesList=[]);function d(e){return function(o,n){if(it(o,t)){var d=o.get("position");"x"===e?"top"!==d&&"bottom"!==d&&(d=l.bottom?"top":"bottom"):"left"!==d&&"right"!==d&&(d=l.left?"right":"left"),l[d]=!0;var f=new Y(e,Object(w.a)(o),[0,0],o.get("type"),d),x="category"===f.type;f.onBand=x&&o.get("boundaryGap"),f.inverse=o.get("inverse"),o.axis=f,f.model=o,f.grid=r,f.index=n,r._axesList.push(f),c[e][n]=f,h[e]++}}}this._axesMap=c,Object(f.k)(c.x,(function(e,o){Object(f.k)(c.y,(function(r,l){var c="x"+o+"y"+l,h=new D(c);h.master=n,h.model=t,n._coordsMap[c]=h,n._coordsList.push(h),h.addAxis(e),h.addAxis(r)}))}))},t.prototype._updateScale=function(t,e){function o(data,t){Object(f.k)(Object(w.d)(data,t.dim),(function(e){t.scale.unionExtentFromData(data,e)}))}Object(f.k)(this._axesList,(function(t){if(t.scale.setExtent(1/0,-1/0),"category"===t.type){var e=t.model.get("categorySortInfo");t.scale.setSortInfo(e)}})),t.eachSeries((function(t){if(Object($.b)(t)){var n=Object($.a)(t),r=n.xAxisModel,l=n.yAxisModel;if(!it(r,e)||!it(l,e))return;var c=this.getCartesian(r.componentIndex,l.componentIndex),data=t.getData(),h=c.getAxis("x"),d=c.getAxis("y");o(data,h),o(data,d)}}),this)},t.prototype.getTooltipAxes=function(t){var e=[],o=[];return Object(f.k)(this.getCartesians(),(function(n){var r=null!=t&&"auto"!==t?n.getAxis(t):n.getBaseAxis(),l=n.getOtherAxis(r);Object(f.q)(e,r)<0&&e.push(r),Object(f.q)(o,l)<0&&o.push(l)})),{baseAxes:e,otherAxes:o}},t.create=function(e,o){var n=[];return e.eachComponent("grid",(function(r,l){var c=new t(r,e,o);c.name="grid_"+l,c.resize(r,o,!0),r.coordinateSystem=c,n.push(c)})),e.eachSeries((function(t){if(Object($.b)(t)){var e=Object($.a)(t),o=e.xAxisModel,n=e.yAxisModel;0;var r=o.getCoordSysModel().coordinateSystem;t.coordinateSystem=r.getCartesian(o.componentIndex,n.componentIndex)}})),n},t.dimensions=G,t}(),lt=o(480),ct=o(419),ut=o(669),ht=o(684),pt=o(681),ft=Object(y.m)();var xt=["axisLine","axisTickLabel","axisName"],gt=["splitArea","splitLine","minorSplitLine"],yt=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.type=e.type,o.axisPointerClass="CartesianAxisPointer",o}return Object(n.a)(e,t),e.prototype.render=function(e,o,n,r){this.group.removeAll();var l=this._axisGroup;if(this._axisGroup=new lt.a,this.group.add(this._axisGroup),e.get("show")){var c=e.getCoordSysModel(),h=$.c(c,e),d=new ht.a(e,f.m({handleAutoShown:function(t){for(var o=c.coordinateSystem.getCartesians(),i=0;i<o.length;i++)if(Object(tt.e)(o[i].getOtherAxis(e.axis).scale))return!0;return!1}},h));f.k(xt,d.add,d),this._axisGroup.add(d.getGroup()),f.k(gt,(function(t){e.get([t,"show"])&&vt[t](this,this._axisGroup,e,c)}),this),r&&"changeAxisOrder"===r.type&&r.isInitSort||ct.groupTransition(l,this._axisGroup,e),t.prototype.render.call(this,e,o,n,r)}},e.prototype.remove=function(){ft(this).splitAreaColors=null},e.type="cartesianAxis",e}(pt.a),vt={splitLine:function(t,e,o,n){var r=o.axis;if(!r.scale.isBlank()){var l=o.getModel("splitLine"),c=l.getModel("lineStyle"),h=c.get("color");h=f.s(h)?h:[h];for(var d=n.coordinateSystem.getRect(),x=r.isHorizontal(),y=0,v=r.getTicksCoords({tickModel:l}),m=[],M=[],O=c.getLineStyle(),i=0;i<v.length;i++){var A=r.toGlobalCoord(v[i].coord);x?(m[0]=A,m[1]=d.y,M[0]=A,M[1]=d.y+d.height):(m[0]=d.x,m[1]=A,M[0]=d.x+d.width,M[1]=A);var j=y++%h.length,C=v[i].tickValue;e.add(new ut.a({anid:null!=C?"line_"+v[i].tickValue:null,subPixelOptimize:!0,autoBatch:!0,shape:{x1:m[0],y1:m[1],x2:M[0],y2:M[1]},style:f.i({stroke:h[j]},O),silent:!0}))}}},minorSplitLine:function(t,e,o,n){var r=o.axis,l=o.getModel("minorSplitLine").getModel("lineStyle"),c=n.coordinateSystem.getRect(),h=r.isHorizontal(),d=r.getMinorTicksCoords();if(d.length)for(var f=[],x=[],y=l.getLineStyle(),i=0;i<d.length;i++)for(var v=0;v<d[i].length;v++){var m=r.toGlobalCoord(d[i][v].coord);h?(f[0]=m,f[1]=c.y,x[0]=m,x[1]=c.y+c.height):(f[0]=c.x,f[1]=m,x[0]=c.x+c.width,x[1]=m),e.add(new ut.a({anid:"minor_line_"+d[i][v].tickValue,subPixelOptimize:!0,autoBatch:!0,shape:{x1:f[0],y1:f[1],x2:x[0],y2:x[1]},style:y,silent:!0}))}},splitArea:function(t,e,o,n){!function(t,e,o,n){var r=o.axis;if(!r.scale.isBlank()){var l=o.getModel("splitArea"),c=l.getModel("areaStyle"),h=c.get("color"),x=n.coordinateSystem.getRect(),y=r.getTicksCoords({tickModel:l,clamp:!0});if(y.length){var v=h.length,m=ft(t).splitAreaColors,M=f.f(),O=0;if(m)for(var i=0;i<y.length;i++){var A=m.get(y[i].tickValue);if(null!=A){O=(A+(v-1)*i)%v;break}}var j=r.toGlobalCoord(y[0].coord),C=c.getAreaStyle();for(h=f.s(h)?h:[h],i=1;i<y.length;i++){var L=r.toGlobalCoord(y[i].coord),k=void 0,_=void 0,w=void 0,T=void 0;r.isHorizontal()?(k=j,_=x.y,w=L-k,T=x.height,j=k+w):(k=x.x,_=j,w=x.width,j=_+(T=L-_));var S=y[i-1].tickValue;null!=S&&M.set(S,O),e.add(new d.a({anid:null!=S?"area_"+S:null,shape:{x:k,y:_,width:w,height:T},style:f.i({fill:h[O]},C),autoBatch:!0,silent:!0})),O=(O+1)%v}ft(t).splitAreaColors=M}}}(t,e,o,n)}},bt=function(t){function e(){var o=null!==t&&t.apply(this,arguments)||this;return o.type=e.type,o}return Object(n.a)(e,t),e.type="xAxis",e}(yt),mt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=bt.type,e}return Object(n.a)(e,t),e.type="yAxis",e}(yt),Mt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="grid",e}return Object(n.a)(e,t),e.prototype.render=function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new d.a({shape:t.coordinateSystem.getRect(),style:Object(f.i)({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))},e.type="grid",e}(r.a),Ot={offset:0};function At(t){t.registerComponentView(Mt),t.registerComponentModel(h),t.registerCoordinateSystem("cartesian2d",st),k(t,"x",v,Ot),k(t,"y",v,Ot),t.registerComponentView(bt),t.registerComponentView(mt),t.registerPreprocessor((function(option){option.xAxis&&option.yAxis&&!option.grid&&(option.grid={})}))}var jt=o(695),Ct=o(460);function Lt(t){Object(Ct.a)(At),Object(Ct.a)(jt.a)}}}]);