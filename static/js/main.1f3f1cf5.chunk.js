(this["webpackJsonpinput-box"]=this["webpackJsonpinput-box"]||[]).push([[0],{196:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(71),o=r.n(s),i=(r(85),r(72)),c=r(73),l=r(14),h=r(80),b=r(79),j=(r(86),r(78)),d=r(3),u=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).handleChangeComplete=function(e){a.setState({color:e.hex})},a.state={color:"red",size:"20",error:!1,errorMsg:""},a.boxstyle={color:a.state.color},a.handleChangeSize=a.handleChangeSize.bind(Object(l.a)(a)),a.handleChangeColor=a.handleChangeColor.bind(Object(l.a)(a)),a}return Object(c.a)(r,[{key:"handleChangeSize",value:function(e){e.target.value>300||e.target.value<20?this.setState({error:!0,errorMsg:"Please Enter a number in range 20-300"}):/^[0-9\b]+$/.test(e.target.value)?this.setState({size:e.target.value,error:!1,errorMsg:""}):this.setState({error:!0,errorMsg:"Please Dont Enter letter, Enter a number in range 20-300"})}},{key:"handleChangeColor",value:function(e){this.setState({color:e.target.value})}},{key:"render",value:function(){return Object(d.jsx)(a.Fragment,{children:Object(d.jsxs)("div",{className:"form-container",children:[Object(d.jsx)("h1",{children:"Create a Box !"}),Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"from-group",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Size"}),Object(d.jsx)("input",{type:"text",placeholder:"enter size in number, default 20",size:this.state.size,onChange:this.handleChangeSize,required:!0})]}),Object(d.jsxs)("div",{className:"from-group",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Color"}),Object(d.jsx)(j.a,{color:this.state.color,onChangeComplete:this.handleChangeComplete})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),this.state.error?Object(d.jsx)("h1",{style:{color:"red"},children:this.state.errorMsg}):Object(d.jsx)("div",{style:{backgroundColor:this.state.color,height:this.state.size+"px",width:this.state.size+"px"},children:"im a box"})]})})}}]),r}(a.Component);o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))},85:function(e,t,r){},86:function(e,t,r){}},[[196,1,2]]]);
//# sourceMappingURL=main.1f3f1cf5.chunk.js.map