(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{522:function(t,e,r){var content=r(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("54b81f90",content,!0,{sourceMap:!1})},588:function(t,e,r){"use strict";r(522)},589:function(t,e,r){var o=r(64)(!1);o.push([t.i,".chart[data-v-af2f44c8]{height:400px;width:100%}",""]),t.exports=o},697:function(t,e,r){"use strict";r.r(e);r(36),r(30),r(37),r(10),r(43),r(31),r(44);var o=r(15),n=r(460),c=r(856),l=r(828),f=r(838),d=r(844),h=r(841),O=r(425),m=r(81);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}Object(n.a)([c.a,l.a,f.a,d.a,h.a]);var y={name:"HelloWorld",components:{VChart:O.a},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.b)({getChart1Data:"dashboard/getSalesByCountryData"})),data:function(){return{chart1Data:{},option:{title:{text:"Total orders by geography",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",bottom:"bottom"},series:[{name:"Number of orders",type:"pie",radius:"70%",center:["50%","50%"],data:[{value:132,name:"New South Wales"},{value:67,name:"Queensland"},{value:95,name:"South Australia"},{value:48,name:"Tasmania"},{value:41,name:"Victoria"},{value:200,name:"International"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}}},w=y,j=(r(588),r(45)),component=Object(j.a)(w,(function(){var t=this._self._c;return t("div",[t("v-chart",{staticClass:"chart",attrs:{option:this.option}})],1)}),[],!1,null,"af2f44c8",null);e.default=component.exports}}]);