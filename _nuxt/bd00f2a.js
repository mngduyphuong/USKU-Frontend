(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{523:function(e,t,r){var content=r(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(65).default)("18ddc068",content,!0,{sourceMap:!1})},591:function(e,t,r){"use strict";r(523)},592:function(e,t,r){var o=r(64)(!1);o.push([e.i,".chart[data-v-7f9a8423]{height:500px;width:100%}",""]),e.exports=o},698:function(e,t,r){"use strict";r.r(t);var o=r(460),n=r(856),l=r(843),c=r(829),f=r(838),d=r(844),x=r(841),v=r(425);r(475);Object(o.a)([n.a,l.a,c.a,f.a,d.a,x.a]);var h={name:"HelloWorld",components:{VChart:v.a},data:function(){return{option:{color:["#ffba00","#FF5349"],tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},title:{text:"Users vs Profit",left:"center"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0}}},legend:{data:["Users","Profit"],top:"10%"},grid:{top:"30%",containLabel:!0},xAxis:[{type:"category",data:["2010","2011","2012","2013"]}],yAxis:[{type:"value",name:"Number of users",min:0,max:2e4,interval:5e3,axisLabel:{formatter:"{value} users"}},{type:"value",name:"Total revenue",min:0,max:2,interval:.5,axisLabel:{formatter:"{value}$M"}}],series:[{name:"Users",type:"bar",data:[14,2216,3225,12523]},{name:"Profit",type:"line",yAxisIndex:1,data:[.1,.5,.8,1.3]}]}}}},m=(r(591),r(45)),component=Object(m.a)(h,(function(){var e=this._self._c;return e("div",[e("v-chart",{staticClass:"chart",attrs:{option:this.option,autoresize:""}})],1)}),[],!1,null,"7f9a8423",null);t.default=component.exports}}]);