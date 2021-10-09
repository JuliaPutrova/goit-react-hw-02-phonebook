(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{21:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a,r,i,c=n(0),o=n.n(c),s=n(10),l=n.n(s),d=(n(21),n(14)),u=n(5),b=n(6),p=n(8),m=n(7),h=n(11),j=n.n(h),f=n(2),x=n(3),g=x.a.h2(a||(a=Object(f.a)(["\nmargin-top: 30px;\n"]))),O=n(15),v=x.a.p(r||(r=Object(f.a)(["\nfont-size: 40px;\nfont-weight: 900;\nmargin: 20px 0px 30px 10px;\ndisplay: inline-flex;\n\n"]))),C=x.a.div(i||(i=Object(f.a)(["\nmargin-left: 20px;\n"]))),y=n(1);function S(t){var e=t.title,n=t.children;return Object(y.jsxs)(C,{children:[Object(y.jsx)(O.a,{size:30}),Object(y.jsx)(v,{children:e}),n]})}S.defaultProps={children:[]};var w,k,A,z,F,D,N=S,I=n(13),J=x.a.label(w||(w=Object(f.a)(["\ndisplay: block;\nmargin-right: 20px;\nmargin-bottom: 10px;\n"]))),L=x.a.input(k||(k=Object(f.a)(["\ndisplay: block;\nmargin-top: 10px;\n"]))),M=x.a.button(A||(A=Object(f.a)(["\nfont-size: 10px;\nfont-weight: 700;\nbackground-color: #fff;\nborder: 2px solid grey;\nmargin-top: 10px;\nmargin-bottom: 30px;\nwidth: 130px;\ncursor: pointer;\n\npadding: 5px 15px;\ntext-align: center;\n&:hover {\n    color: blue;\n}\n"]))),Z=x.a.form(z||(z=Object(f.a)(["\nborder: 2px solid grey;\n  width: 300px;\n  height: 150px;\n  padding: 10px;\n\n"]))),q=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(I.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.addNewContact(t.state),t.reset()},t.reset=function(){t.setState({id:"",name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(Z,{onSubmit:this.handleSubmit,children:[Object(y.jsxs)(J,{children:[" ","Name",Object(y.jsx)(L,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(y.jsxs)(J,{children:["Number",Object(y.jsx)(L,{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(y.jsx)(M,{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),B=q,E=x.a.li(F||(F=Object(f.a)(["\nfont-size: 15px;\ndisplay: flex;\nmargin: 20px 20px;\n\n"]))),P=x.a.button(D||(D=Object(f.a)(["\nmargin-left: 10px;\ncursor: pointer;\nbackground-color: #fff;\nborder: 1px solid grey;\n"])));var V,H,K=function(t){t.title;var e=t.contacts,n=t.deleteContact;return Object(y.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(y.jsxs)(E,{children:[Object(y.jsxs)("p",{children:[e,": ",a]}),Object(y.jsx)(P,{type:"button",onClick:function(){return n(r)},children:"Delete"})]},r)}))})},R=x.a.label(V||(V=Object(f.a)(["\ndisplay: inline-block;\nmargin-right: 20px;\nmargin-top: 20px;\n"]))),T=x.a.input(H||(H=Object(f.a)(["\ndisplay: flex;\nmargin-right: 20px;\nmargin-top: 10px;\n"])));var U=function(t){var e=t.value,n=t.filteredValue;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("form",{children:Object(y.jsxs)(R,{children:[" ","Find contacts by name",Object(y.jsx)(T,{type:"text",name:"filter",value:e,onChange:n})]})})})},$=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],G=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:"",name:"",number:""},t.handleSubmitForm=function(e){var n=e.name,a=e.number,r={id:j.a.generate(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[r].concat(Object(d.a)(t.contacts))}}))},t.componentDidUpdate=function(e,n){localStorage.setItem("contacts",JSON.stringify(t.state.contacts))},t.componentDidMount=function(){var e=JSON.parse(localStorage.getItem("contacts"));t.setState({contacts:null!==e&&void 0!==e?e:$})},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilteredInput=function(e){t.setState({filter:e.target.value})},t.onFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase().trim();return a.filter((function(t){return t.name.toLowerCase().trim().includes(r)}))},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(y.jsxs)(N,{title:"Phonebook",children:[Object(y.jsx)(B,{addNewContact:this.handleSubmitForm}),Object(y.jsx)(g,{children:"Contacts"}),Object(y.jsx)(U,{value:t,filteredValue:this.handleFilteredInput}),Object(y.jsx)(K,{title:"Contacts",deleteContact:this.onDeleteContact,contacts:this.onFilteredContacts()})]})}}]),n}(c.Component),Q=G;l.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(Q,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.782a25e2.chunk.js.map