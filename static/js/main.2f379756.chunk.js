(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){e.exports=n.p+"static/media/cancel.41125cd8.svg"},31:function(e,t,n){e.exports=n.p+"static/media/plus.c2d47e3b.svg"},37:function(e,t,n){e.exports=n(65)},65:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(12),r=n.n(l),s=n(6),o=n.n(s),u=n(7),c=n.n(u),d=n(13),h=n.n(d),m=n(14),g=n.n(m),f=n(15),p=n.n(f),v=n(69),y=n(68),k=n(3),E=n.n(k),V=n(9),b=n.n(V),x=n(10),C=n(21);n(57);C.initializeApp({apiKey:"AIzaSyAtRzAx-NHymA2yLuu5287nbNb-FfF4UOE",authDomain:"reconapp-c629a.firebaseapp.com",databaseURL:"https://reconapp-c629a.firebaseio.com",projectId:"reconapp-c629a",storageBucket:"reconapp-c629a.appspot.com",messagingSenderId:"298910673843"});var U=C.firestore();U.settings({timestampsInSnapshots:!0});var S=U.collection("ReconDB"),w=function(){function e(){o()(this,e)}return c()(e,null,[{key:"addUser",value:function(e){S.add(e).then(function(t){ie.addUser({login:e.login,email:e.email,userRef:t.id})})}},{key:"editUser",value:function(e,t){S.doc(e).update(t).then(function(){ie.editUser({login:t.login,email:t.email,userRef:e})})}},{key:"deleteUser",value:function(e){S.doc(e).delete().then(function(){ie.deleteUser(e)})}}]),e}(),A=n(67),R=(n(29),n(30)),N=n.n(R),L=n(31),z=n.n(L),B=n(19);function D(){var e=b()(["\n\n    width: 400px;\n    border: 1px solid silver;\n    box-shadow: 3px 3px 20px 2px;\n    margin: 100px;\n\n"]);return D=function(){return e},e}var I=x.a.form(D());function O(){var e=b()(['\n\n    text-align: center;\n    font-family: "Arial Black", Gadget, sans-serif;\n    font-style: italic;\n    \n']);return O=function(){return e},e}var Z,j=x.a.h1(O());function M(){var e=b()(["\n\n    padding: 0;\n    margin: 0;\n\n"]);return M=function(){return e},e}function F(){var e=b()(["\n\n    list-style: none;\n    list-style-position: inside;\n    border: 2px solid silver;\n    border-radius: 10px;\n    padding: 2px 8px;\n    margin: 2px 2%;\n    width: 90%;\n\n"]);return F=function(){return e},e}var J,$=x.a.li(F()),G=x.a.ul(M()),H=Object(B.b)(Z=function(e){function t(e){var n;return o()(this,t),(n=h()(this,g()(t).call(this,e))).state={users:ie.users},n.i=0,S.get().then(function(e){e.forEach(function(e){var t={login:e.data().login,email:e.data().email,userRef:e.id};console.log(t),n.state.users.push(t)})}),n.deleteUser=n.deleteUser.bind(E()(E()(n))),n}return p()(t,e),c()(t,[{key:"deleteUser",value:function(e){return w.deleteUser(e),function(e){e.preventDefault()}}},{key:"editUser",value:function(e){return J=e,function(e){e.preventDefault()}}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(I,{className:"left"},i.a.createElement(j,null,"My Address Book"),i.a.createElement(G,{className:"table"},this.state.users.map(function(t){return e.i++,i.a.createElement($,{className:e.i%2==0?"secondChild":null,key:t.userRef},i.a.createElement("div",{style:{width:"100%"}},i.a.createElement(A.a,{to:"",onClick:function(){return e.deleteUser(t.userRef)},style:{float:"right",width:"30px"}},i.a.createElement("img",{src:N.a,width:"30px"})),i.a.createElement(A.a,{to:"/Edit",onClick:function(){return e.editUser(t.userRef)}},i.a.createElement("p",{id:"login"},t.login),i.a.createElement("p",{id:"email"},t.email))))})),i.a.createElement(A.a,{style:{display:"block",textAlign:"center",backgroundColor:"silver"},to:"/New"},i.a.createElement("img",{src:z.a,style:{width:"20px",marginTop:"5px"}}))))}}]),t}(i.a.Component))||Z;function K(){var e=b()(["\n\n    width: 90%;\n    margin: 10px auto;\n    padding: 5px 5px;\n    display: block;\n    border: 2px solid ",";\n    border-radius: 10px;\n    outline: none;\n    box-shadow: 1px 1px 3px 1px;\n    \n"]);return K=function(){return e},e}function T(){var e=b()(["\n\n    border-radius: 5px;\n    background-color: ",";  \n    float: ","\n    margin: 7px 10px;\n    outline: none;\n    font-style: italic;\n    \n"]);return T=function(){return e},e}var q,P,Q=x.a.button(T(),function(e){return e.color},function(e){return e.delete?"left":"right"}),W=x.a.input(K(),function(e){return e.validity?"green":"silver"}),X=function(e){function t(e){var n;return o()(this,t),(n=h()(this,g()(t).call(this,e))).state={login:"",email:"",loginValid:!1,emailValid:!1},n.handleSubmit=n.handleSubmit.bind(E()(E()(n))),n.emailValueChanged=n.emailValueChanged.bind(E()(E()(n))),n.loginValueChanged=n.loginValueChanged.bind(E()(E()(n))),n.checkLoginValidity=n.checkLoginValidity.bind(E()(E()(n))),n.checkEmailValidity=n.checkEmailValidity.bind(E()(E()(n))),n.deleteUser=n.deleteUser.bind(E()(E()(n))),n.editUser=n.editUser.bind(E()(E()(n))),n}return p()(t,e),c()(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"checkLoginValidity",value:function(){this.state.login.length>4?this.setState({loginValid:!0}):this.setState({loginValid:!1})}},{key:"checkEmailValidity",value:function(){this.state.email;this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?this.setState({emailValid:!0}):this.setState({emailValid:!1})}},{key:"emailValueChanged",value:function(e){var t=e.target.value;this.setState({email:t}),this.checkEmailValidity()}},{key:"loginValueChanged",value:function(e){var t=e.target.value;this.setState({login:t}),this.checkLoginValidity()}},{key:"editUser",value:function(){if(this.state.emailValid&&this.state.loginValid){var e=this.state.login,t=this.state.email;w.editUser(J,{login:e,email:t})}else alert("Invalid login or e-mail, try again.")}},{key:"deleteUser",value:function(){w.deleteUser(J)}},{key:"render",value:function(){return i.a.createElement(I,{className:"right",onSubmit:this.handleSubmit},i.a.createElement(j,null,"My Address Book/Edit Contact"),i.a.createElement(W,{value:this.state.login,validity:this.state.loginValid,onChange:this.loginValueChanged,placeholder:"Name"}),i.a.createElement(W,{value:this.state.email,validity:this.state.emailValid,onChange:this.emailValueChanged,placeholder:"E-mail"}),i.a.createElement(Q,{onClick:this.deleteUser,delete:!0,color:"red"},i.a.createElement(A.a,{to:"/"},"Delete")),i.a.createElement(Q,{color:"white"},i.a.createElement(A.a,{to:"/"},"Cancel")),i.a.createElement(Q,{onClick:this.editUser,color:"green"},i.a.createElement(A.a,{to:"/"},"Ok")))}}]),t}(i.a.Component),Y=function(e){function t(e){var n;return o()(this,t),(n=h()(this,g()(t).call(this,e))).state={login:"",email:"",loginValid:!1,emailValid:!1},n.handleSubmit=n.handleSubmit.bind(E()(E()(n))),n.emailValueChanged=n.emailValueChanged.bind(E()(E()(n))),n.loginValueChanged=n.loginValueChanged.bind(E()(E()(n))),n.checkLoginValidity=n.checkLoginValidity.bind(E()(E()(n))),n.checkEmailValidity=n.checkEmailValidity.bind(E()(E()(n))),n.addUser=n.addUser.bind(E()(E()(n))),n}return p()(t,e),c()(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"checkLoginValidity",value:function(){this.state.login.length>4?this.setState({loginValid:!0}):this.setState({loginValid:!1})}},{key:"checkEmailValidity",value:function(){this.state.email;this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?this.setState({emailValid:!0}):this.setState({emailValid:!1})}},{key:"emailValueChanged",value:function(e){var t=e.target.value;this.setState({email:t}),this.checkEmailValidity()}},{key:"loginValueChanged",value:function(e){var t=e.target.value;this.setState({login:t}),this.checkLoginValidity()}},{key:"addUser",value:function(){if(this.state.emailValid&&this.state.loginValid){var e=this.state.email,t=this.state.login;w.addUser({login:t,email:e})}else alert("Invalid login or e-mail, try again.")}},{key:"render",value:function(){return i.a.createElement(I,{className:"right",onSubmit:this.handleSubmit},i.a.createElement(j,null,"My Address Book/Edit Contact"),i.a.createElement(W,{value:this.state.login,validity:this.state.loginValid,onChange:this.loginValueChanged,placeholder:"Name"}),i.a.createElement(W,{value:this.state.email,validity:this.state.emailValid,onChange:this.emailValueChanged,placeholder:"E-mail"}),i.a.createElement(Q,{color:"white"},i.a.createElement(A.a,{to:"/"},"Cancel")),i.a.createElement(Q,{onClick:this.addUser,color:"green"},i.a.createElement(A.a,{to:"/"},"Ok")))}}]),t}(i.a.Component),_=n(33),ee=n.n(_),te=n(34),ne=n.n(te),ae=(n(63),n(5)),ie=new(q=function(){function e(){o()(this,e),ee()(this,"users",P,this)}return c()(e,[{key:"addUser",value:function(e){this.users.push(e)}},{key:"editUser",value:function(e){for(var t=0;t<this.users.length;t++)if(this.users[t].userRef==e.userRef)return void(this.users[t]=e)}},{key:"deleteUser",value:function(e){for(var t=0;t<this.users.length;t++)if(this.users[t].userRef==e)return void this.users.splice(t,1)}}]),e}(),P=ne()(q.prototype,"users",[ae.j],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),q),le=function(e){function t(){return o()(this,t),h()(this,g()(t).apply(this,arguments))}return p()(t,e),c()(t,[{key:"render",value:function(){return i.a.createElement(B.a,{store:ie,worker:w},i.a.createElement(v.a,null,i.a.createElement("div",null,i.a.createElement(y.a,{path:"/",component:H}),i.a.createElement(y.a,{exact:!0,path:"/New",component:Y}),i.a.createElement(y.a,{exact:!0,path:"/Edit",component:X}))))}}]),t}(i.a.Component);r.a.render(i.a.createElement(le,null),document.getElementById("root"))}},[[37,2,1]]]);
//# sourceMappingURL=main.2f379756.chunk.js.map