"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[93],{3093:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var a=n(9434),r=n(2791),s=n(9439),c=n(2561),o="ContactForm_form__dhl+T",i="ContactForm_label__-cVXI",l="ContactForm_input__Bl93P",u="ContactForm_btn__wll+u",m=n(8174),h=function(t){return t.contacts.items},_=function(t){return t.contacts.isLoading},f=function(t){return t.contacts.error},d=n(3329),p=function(){var t=(0,r.useState)(""),e=(0,s.Z)(t,2),n=e[0],_=e[1],f=(0,r.useState)(""),p=(0,s.Z)(f,2),b=p[0],x=p[1],j=(0,a.I0)(),v=(0,a.v9)(h),C=function(t){t.preventDefault(),v.some((function(t){return t.name===n}))?m.Am.error("".concat(n," is already in contacts.")):j((0,c.uK)({id:(0,m.Am)(),name:n,number:b})),N()},N=function(){_(""),x("")};return(0,d.jsxs)("form",{className:o,onSubmit:C,children:[(0,d.jsxs)("label",{className:i,children:["Name",(0,d.jsx)("input",{className:l,type:"text",name:"name",value:n,onChange:function(t){"text"===t.target.type&&_(t.target.value)},placeholder:"Enter a name"})]}),(0,d.jsxs)("label",{className:i,children:["Number",(0,d.jsx)("input",{className:l,type:"tel",name:"number",value:b,onChange:function(t){"tel"===t.target.type&&x(t.target.value)},placeholder:"Enter a number"})]}),(0,d.jsx)("button",{className:u,type:"submit",onSubmit:C,children:"Add contact"})]})},b={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO",btn:"ContactList_btn__6Piat"},x=function(){var t=(0,a.I0)(),e=(0,a.v9)(h),n=(0,a.v9)((function(t){return t.filter.filter})).toLowerCase(),r=function(e){t((0,c.GK)(e.target.id))};return(0,d.jsx)("ul",{className:b.list,children:e.filter((function(t){return t.name.toLowerCase().includes(n)})).map((function(t){var e=t.id,n=t.name,a=t.number;return(0,d.jsxs)("li",{className:b.item,children:[(0,d.jsxs)("p",{className:b.info,children:[(0,d.jsxs)("span",{children:[n," :"]}),a]}),(0,d.jsx)("button",{className:b.btn,type:"button",id:e,onClick:r,children:"Delete"})]},e)}))})},j="Filter_label__vEd1E",v="Filter_input__N7T3z",C=n(1620),N=function(){var t=(0,a.I0)();return(0,d.jsx)("label",{className:j,children:(0,d.jsx)("input",{placeholder:"Enter name for Search",className:v,type:"text",name:"filter",onChange:function(e){t((0,C.Tv)(e.target.value))}})})},g=function(){var t=(0,a.I0)(),e=(0,a.v9)(_),n=(0,a.v9)(f),s=(0,a.v9)(h);return(0,r.useEffect)((function(){t((0,c.yF)())}),[t]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{children:"Phonebook"}),(0,d.jsx)(p,{}),(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(N,{}),e&&!n&&(0,d.jsx)("p",{children:"Please wait..."}),s.length>0?(0,d.jsx)(x,{}):(0,d.jsx)("p",{children:"Your phonebook is empty. Please add contact."})]})}}}]);
//# sourceMappingURL=93.ff9c2c15.chunk.js.map