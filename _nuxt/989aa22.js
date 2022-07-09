(window.webpackJsonp=window.webpackJsonp||[]).push([[31,25],{456:function(e,t,o){var content=o(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(65).default)("6b1e35cb",content,!0,{sourceMap:!1})},508:function(e,t,o){"use strict";o.r(t);var n=o(839),r=o(855),l=o(514),c=o(433),d=o(836),m=o(857),h=o(854),f=o(834),v=o(833),w=o(755),y=o(837),C=o(708),_=(o(27),{data:function(){return{dialog:!1,showPassword:!1,showConfirmPassword:!1,fname:"",lname:"",email:"",rUsername:"",rPassword:"",confPassword:"",maritalStatus:"",gender:"",yearlyIncome:"",totalChildren:null,numberChildrenAtHome:null,education:"",occupation:"",houseOwnerFlag:null,numberCarsOwned:null,addressLine2:"",addressLine1:"",dateFirstPurchase:"",commuteDistance:"",birthDate:"",country:"",state:"",city:"",postcode:"",testItems:[],country_list:["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],state_list:["New South Wales","Victoria","Queensland","Tasmania","South Australia","Western Australia","Northern Territory","Australian Capital Territory"]}},computed:{},methods:{validateDateFields:function(input){return/^[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(input)},register:function(){this.rUsername&&this.rPassword&&this.confPassword&&this.email&&this.birthDate&&this.fname&&this.lname?this.rPassword!==this.confPassword?alert("Confirm password does not match!"):this.validateDateFields(this.birthDate)?this.$store.dispatch("auth/register",{username:this.rUsername,password:this.rPassword,password2:this.confPassword,email:this.email,first_name:this.fname,last_name:this.lname,birthdate:this.birthDate,maritalstatus:this.maritalStatus,gender:this.gender,geographykey:null,yearlyincome:this.yearlyIncome,totalchildren:this.totalChildren,numberchildrenathome:this.numberChildrenAtHome,englisheducation:this.education,englishoccupation:this.occupation,houseownerflag:this.houseOwnerFlag,numbercarsowned:this.houseOwnerFlag,addressline1:this.addressLine1,addressline2:this.addressLine2,datefirstpurchase:null,commutedistance:this.commuteDistance}):alert("Please fill in date fields following YYYY-MM-DD format!"):alert("Required fields cannot be empty!")}}}),x=(o(515),o(45)),component=Object(x.a)(_,(function(){var e=this,t=e._self._c;return t("div",[t(w.a,{attrs:{justify:"center"}},[t(h.a,{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(o){var n=o.on,l=o.attrs;return[t(r.a,e._g(e._b({staticStyle:{"background-color":"var(--backgroundColor)","border-radius":"10px","text-transform":"none",width:"100%",padding:"0 2rem"},attrs:{plain:""}},"v-btn",l,!1),n),[e._v("\n          Create Account\n        ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(l.a,{staticStyle:{"background-color":"var(--backgroundColor)"}},[t(c.c,[t("div",{attrs:{id:"popupTitle"}},[e._v("Create New User")])]),e._v(" "),t(c.b,[t(m.a,[t(w.a,[t(d.a,{attrs:{cols:"12"}},[t(C.a,{attrs:{label:"Username*",color:"#54595f",hint:"Username will be used to login",required:""},model:{value:e.rUsername,callback:function(t){e.rUsername=t},expression:"rUsername"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(C.a,{attrs:{label:"Email*",color:"#54595f"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(C.a,{attrs:{"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password",label:"Password*",required:"",color:"#54595f"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.rPassword,callback:function(t){e.rPassword=t},expression:"rPassword"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(C.a,{attrs:{"append-icon":e.showConfirmPassword?"mdi-eye":"mdi-eye-off",type:e.showConfirmPassword?"text":"password",label:"Confirm Password*",required:"",color:"#54595f"},on:{"click:append":function(t){e.showConfirmPassword=!e.showConfirmPassword}},model:{value:e.confPassword,callback:function(t){e.confPassword=t},expression:"confPassword"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(C.a,{attrs:{label:"First Name*",color:"#54595f"},model:{value:e.fname,callback:function(t){e.fname=t},expression:"fname"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(C.a,{attrs:{color:"#54595f",label:"Last Name*"},model:{value:e.lname,callback:function(t){e.lname=t},expression:"lname"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(C.a,{attrs:{color:"#54595f",label:"Date of birth*",hint:"yyyy-mm-dd"},model:{value:e.birthDate,callback:function(t){e.birthDate=t},expression:"birthDate"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t("p",[e._v("Marital Status:")]),e._v(" "),t(v.a,{attrs:{row:""},model:{value:e.maritalStatus,callback:function(t){e.maritalStatus=t},expression:"maritalStatus"}},[t(f.a,{attrs:{label:"Single",value:"S"}}),e._v(" "),t(f.a,{attrs:{label:"Married",value:"M"}})],1)],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t("p",[e._v("Gender:")]),e._v(" "),t(v.a,{attrs:{row:""},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}},[t(f.a,{attrs:{label:"Male",value:"M"}}),e._v(" "),t(f.a,{attrs:{label:"Female",value:"F"}}),e._v(" "),t(f.a,{attrs:{label:"I prefer not to say",value:""}})],1)],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(C.a,{attrs:{color:"#54595f",label:"Yearly Income"},model:{value:e.yearlyIncome,callback:function(t){e.yearlyIncome=t},expression:"yearlyIncome"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(C.a,{attrs:{color:"#54595f",label:"Total Children",type:"number",min:"0"},model:{value:e.totalChildren,callback:function(t){e.totalChildren=t},expression:"totalChildren"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(C.a,{attrs:{color:"#54595f",label:"Number Children At Home",type:"number",min:"0"},model:{value:e.numberChildrenAtHome,callback:function(t){e.numberChildrenAtHome=t},expression:"numberChildrenAtHome"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(C.a,{attrs:{color:"#54595f",label:"Education"},model:{value:e.education,callback:function(t){e.education=t},expression:"education"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(C.a,{attrs:{color:"#54595f",label:"Occupation"},model:{value:e.occupation,callback:function(t){e.occupation=t},expression:"occupation"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(C.a,{attrs:{color:"#54595f",label:"House Owner Flag",type:"number",min:"0"},model:{value:e.houseOwnerFlag,callback:function(t){e.houseOwnerFlag=t},expression:"houseOwnerFlag"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6"}},[t(C.a,{attrs:{color:"#54595f",label:"Number Cars Owned",type:"number",min:"0"},model:{value:e.numberCarsOwned,callback:function(t){e.numberCarsOwned=t},expression:"numberCarsOwned"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(C.a,{attrs:{color:"#54595f",label:"Address Line 1"},model:{value:e.addressLine1,callback:function(t){e.addressLine1=t},expression:"addressLine1"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(C.a,{attrs:{color:"#54595f",label:"Address Line 2"},model:{value:e.addressLine2,callback:function(t){e.addressLine2=t},expression:"addressLine2"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(C.a,{attrs:{color:"#54595f",label:"Commute Distance",hint:"E.g. 1-2 Miles"},model:{value:e.commuteDistance,callback:function(t){e.commuteDistance=t},expression:"commuteDistance"}})],1),e._v(" "),t(d.a,{attrs:{cols:"3"}},[t(n.a,{attrs:{items:e.country_list,label:"Country"},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),e._v(" "),t(d.a,{attrs:{cols:"3"}},[t(n.a,{attrs:{items:e.state_list,label:"State",autocomplete:"off"},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}})],1),e._v(" "),t(d.a,{attrs:{cols:"3"}},[t(C.a,{attrs:{color:"#54595f",label:"City"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),e._v(" "),t(d.a,{attrs:{cols:"3"}},[t(C.a,{attrs:{color:"#54595f",label:"Postcode"},model:{value:e.postcode,callback:function(t){e.postcode=t},expression:"postcode"}})],1)],1),e._v(" "),t("small",[e._v("*indicates required fields")])],1)],1),e._v(" "),t(c.a,[t(r.a,{staticStyle:{color:"orangered"},attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n            Close\n          ")]),e._v(" "),t(y.a),e._v(" "),t(r.a,{staticStyle:{color:"#f9a825"},attrs:{text:""},on:{click:e.register}},[e._v("\n            Register\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},515:function(e,t,o){"use strict";o(456)},516:function(e,t,o){var n=o(64)(!1);n.push([e.i,".v-text-field{margin:0;padding:0}#popupTitle{text-align:center;margin:8px auto 16px;font-size:1.2em}.v-text-field label{transform-origin:top left;font-size:.9em}",""]),e.exports=n},645:function(e,t,o){var content=o(787);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(65).default)("6dfb3362",content,!0,{sourceMap:!1})},786:function(e,t,o){"use strict";o(645)},787:function(e,t,o){var n=o(64),r=o(788),l=o(789),c=n(!1),d=r(l);c.push([e.i,"body{background:url("+d+");background-size:cover;background-repeat:no-repeat;padding:0}body .login{height:100vh}body .login .loginContent{background-color:#000;opacity:.8;border-radius:1.5rem;text-align:center;color:var(--UskuYellow);width:100vw;padding:1rem}@media(min-width:768px){body .login .loginContent{width:40%}}body .login .loginContent input{color:#ff4500;padding:5px;border-bottom:1px solid #54595f;margin-left:10px}body .login .loginContent-img{width:20%}@media(min-width:768px){body .login .loginContent-img{width:15%}}body .login .loginContent-02 #button{width:40%;padding:.8rem;background-color:var(--UskuYellow);border-radius:10px;text-align:center;text-transform:uppercase;cursor:pointer;font-weight:700;color:#000}body .login .loginContent-02 #button:hover{background-color:#ff4500;transition:.5s}body .login .loginContent-02 #messageBox{color:#ff4500}body .login .loginContent-02 .register{color:var(--UskuYellow);width:25%;margin:20px auto}@media(max-width:768px){body .login .loginContent-02 .register{width:35%}}body .login .loginContent-02 input:focus{outline:none}",""]),e.exports=c},788:function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},789:function(e,t,o){e.exports=o.p+"img/backgroundLogin.c0bea6f.jpg"},848:function(e,t,o){"use strict";o.r(t);var n={components:{RegisterPopup:o(508).default},middleware:["loginPageMw"],head:function(){return{title:"USKU Analytics || Login"}},layout:function(){return"loginLayout"},data:function(){return{username:"",password:""}},computed:{},methods:{login:function(){this.username&&this.password&&this.$store.dispatch("auth/login",{username:this.username,password:this.password})}}},r=(o(786),o(45)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"container",staticStyle:{"padding-bottom":"0"},attrs:{"data-app":""}},[t("div",{staticClass:"login position-relative"},[t("div",{staticClass:"loginContent position-absolute top-50 start-50 translate-middle"},[t("img",{staticClass:"loginContent-img",attrs:{src:o(283)}}),e._v(" "),t("div",{staticClass:"loginContent-01 mt-3 mb-3"},[t("h1",{staticClass:"header"},[e._v("Login to your account")]),e._v(" "),t("br"),e._v(" "),t("form",{staticClass:"loginContent-02"},[t("p",[t("label",[e._v("Username")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),t("p",[t("label",[e._v("Password")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),e._m(0),e._v(" "),t("button",{attrs:{id:"button",type:"button"},on:{click:e.login}},[e._v("\n              Login\n            ")]),e._v(" "),t("div",{staticClass:"register"},[t("RegisterPopup")],1)])])])])])])}),[function(){var e=this._self._c;return e("p",{attrs:{id:"messageBox"}},[e("br")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{RegisterPopup:o(508).default})}}]);