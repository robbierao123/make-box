(this["webpackJsonpinput-box"]=this["webpackJsonpinput-box"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),l=n(4),c=n.n(l),o=(n(13),n(5)),r=n(6),s=n(2),h=n(8),b=n(7),j=(n(14),n(0)),d=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={color:"red",size:"20",makebox:!1},i.boxstyle={color:i.state.color},i.handleChangeSize=i.handleChangeSize.bind(Object(s.a)(i)),i.handleChangeColor=i.handleChangeColor.bind(Object(s.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(s.a)(i)),i}return Object(r.a)(n,[{key:"handleChangeSize",value:function(e){this.setState({size:e.target.value})}},{key:"handleChangeColor",value:function(e){this.setState({color:e.target.value})}},{key:"handleSubmit",value:function(e){alert(this.state.color),this.setState({size:e.target.value}),e.preventDefault()}},{key:"render",value:function(){return Object(j.jsx)(i.Fragment,{children:Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsx)("h1",{children:"Create a Box !"}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("div",{className:"from-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Size"}),Object(j.jsx)("input",{type:"text",placeholder:"enter size in number, default 20",size:this.state.size,onChange:this.handleChangeSize,required:!0})]}),Object(j.jsxs)("div",{className:"from-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Color"}),Object(j.jsxs)("select",{color:this.state.color,onChange:this.handleChangeColor,children:[Object(j.jsx)("option",{value:"red",children:"RED"}),Object(j.jsx)("option",{value:"blue",children:"BLUE"}),Object(j.jsx)("option",{value:"yellow",children:"YELLOW"}),Object(j.jsx)("option",{value:"pink",children:"PINK"}),Object(j.jsx)("option",{value:"black",children:"BLACK"}),Object(j.jsx)("option",{value:"white",children:"WHITE"}),Object(j.jsx)("option",{value:"grey",children:"GREY"}),Object(j.jsx)("option",{value:"green",children:"GREEN"})]})]})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{style:{backgroundColor:this.state.color,height:this.state.size+"px",width:this.state.size+"px"},children:"im a box"})]})})}}]),n}(i.Component);c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.916afdb5.chunk.js.map