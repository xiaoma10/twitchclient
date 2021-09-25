(this.webpackJsonptwitchfrontend=this.webpackJsonptwitchfrontend||[]).push([[0],{151:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),i=n.n(c),s=(n(151),n(41)),o=n(43),l=n(42),u=n(244),d=n(143),h=n(73),j=n(39),f=n(56),m=n(250),b=n(248),O=n(246),p=n(247),g=n(252),x=n(253),y="",v="".concat(y,"/login"),C=function(e){return fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){if(200!==e.status)throw Error("Fail to log in");return e.json()}))},S="".concat(y,"/register"),w=function(e){return fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(200!==e.status)throw Error("Fail to register")}))},I="".concat(y,"/logout"),F=function(){return fetch(I,{method:"POST",credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to log out")}))},P="".concat(y,"/game"),k=function(){return fetch(P).then((function(e){if(200!==e.status)throw Error("Fail to get top games");return e.json()}))},E="".concat(y,"/game?game_name="),M="".concat(y,"/search?game_id="),T=function(e){return fetch("".concat(M).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))},_=function(e){return function(e){return fetch("".concat(E).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))}(e).then((function(e){if(e&&e.id)return T(e.id);throw Error("Fail to find the game")}))},R="".concat(y,"/favorite"),D=function(){return fetch(R,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get favorite item");return e.json()}))},L="".concat(y,"/recommendation"),A=function(){return fetch(L,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get recommended item");return e.json()}))},G=n(6),V=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signinOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){C(t).then((function(t){e.setState({displayModal:!1}),d.b.success("Welcome back, ".concat(t.name)),e.props.onSuccess()})).catch((function(e){d.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(f.a,{shape:"round",onClick:e.signinOnClick,style:{marginRight:"20px"},children:"Login"}),Object(G.jsx)(b.a,{title:"Log in",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(G.jsxs)(O.a,{name:"normal_login",onFinish:e.onFinish,preserve:!1,children:[Object(G.jsx)(O.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(G.jsx)(p.a,{prefix:Object(G.jsx)(g.a,{}),placeholder:"Username"})}),Object(G.jsx)(O.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(G.jsx)(p.a,{prefix:Object(G.jsx)(x.a,{}),placeholder:"Password"})}),Object(G.jsx)(O.a.Item,{children:Object(G.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Login"})})]})})]})},e}return n}(a.a.Component),q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.signupOnClick=function(){e.setState({displayModal:!0})},e.onFinish=function(t){w(t).then((function(){e.setState({displayModal:!1}),d.b.success("Successfully signed up")})).catch((function(e){d.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(f.a,{shape:"round",type:"primary",onClick:e.signupOnClick,children:"Register"}),Object(G.jsx)(b.a,{title:"Register",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,destroyOnClose:!0,children:Object(G.jsxs)(O.a,{name:"normal_register",initialValues:{remember:!0},onFinish:e.onFinish,preserve:!1,children:[Object(G.jsx)(O.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(G.jsx)(p.a,{prefix:Object(G.jsx)(g.a,{}),placeholder:"Username"})}),Object(G.jsx)(O.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(G.jsx)(p.a,{prefix:Object(G.jsx)(x.a,{}),placeholder:"Password"})}),Object(G.jsx)(O.a.Item,{name:"first_name",rules:[{required:!0,message:"Please input your Firstname!"}],children:Object(G.jsx)(p.a,{placeholder:"firstname"})}),Object(G.jsx)(O.a.Item,{name:"last_name",rules:[{required:!0,message:"Please input your Lastname!"}],children:Object(G.jsx)(p.a,{placeholder:"lastname"})}),Object(G.jsx)(O.a.Item,{children:Object(G.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Register"})})]})})]})},e}return n}(a.a.Component),N=n(249),J=n(254),U=n(146),B=n(255),K=n(256),H=m.a.SubMenu,W="streams",z="videos",Q="clips",X=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayDrawer:!1},e.onDrawerClose=function(){e.setState({displayDrawer:!1})},e.onFavoriteClick=function(){e.setState({displayDrawer:!0})},e.render=function(){var t=e.props.data,n=t.VIDEO,r=t.STREAM,a=t.CLIP;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(f.a,{type:"primary",shape:"round",onClick:e.onFavoriteClick,icon:Object(G.jsx)(J.a,{}),children:"My Favorites"}),Object(G.jsx)(N.a,{title:"My Favorites",placement:"right",width:720,visible:e.state.displayDrawer,onClose:e.onDrawerClose,children:Object(G.jsxs)(m.a,{mode:"inline",defaultOpenKeys:[W],style:{height:"100%",borderRight:0},selectable:!1,children:[Object(G.jsx)(H,{icon:Object(G.jsx)(U.a,{}),title:"Streams",children:r.map((function(e){return Object(G.jsx)(m.a.Item,{children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},W),Object(G.jsx)(H,{icon:Object(G.jsx)(B.a,{}),title:"Videos",children:n.map((function(e){return Object(G.jsx)(m.a.Item,{children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},z),Object(G.jsx)(H,{icon:Object(G.jsx)(K.a,{}),title:"Clips",children:a.map((function(e){return Object(G.jsx)(m.a.Item,{children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},Q)]})})]})},e}return n}(a.a.Component),Y=n(258),Z=n(259),$=n(112),ee=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.searchOnClick=function(){e.setState({displayModal:!0})},e.onSubmit=function(e){_(e.game_name).then((function(e){console.log(e)})).catch((function(e){d.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(f.a,{shape:"round",onClick:e.searchOnClick,icon:Object(G.jsx)($.a,{}),style:{marginLeft:"20px",marginTop:"20px"},children:"Custom Search"}),Object(G.jsx)(b.a,{title:"Custom Search",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,children:Object(G.jsxs)(O.a,{name:"custom_search",onFinish:e.onSubmit,children:[Object(G.jsx)(O.a.Item,{name:"game_name",rules:[{required:!0,message:"Please enter a game name"}],children:Object(G.jsx)(p.a,{placeholder:"Game name"})}),Object(G.jsx)(O.a.Item,{children:Object(G.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Search"})})]})})]})},e}return n}(a.a.Component),te=n(139),ne=n.n(te),re=n(119),ae=n(105),ce=n(245),ie=n(251),se=n(257),oe=re.a.TabPane,le="stream",ue="videos",de="clips",he=function(e,t,n,r){var a="".concat(e.broadcaster_name," - ").concat(e.title),c=n.find((function(t){return t.id===e.id}));return Object(G.jsxs)(G.Fragment,{children:[t&&Object(G.jsx)(ae.a,{title:c?"Remove from favorite list":"Add to favorite list",children:Object(G.jsx)(f.a,{shape:"circle",icon:c?Object(G.jsx)(J.a,{}):Object(G.jsx)(se.a,{}),onClick:function(){var t;c?(t=e,fetch(R,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:t})}).then((function(e){if(200!==e.status)throw Error("Fail to delete favorite item")}))).then((function(){r()})).catch((function(e){d.b.error(e.message)})):function(e){return fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:e})}).then((function(e){if(200!==e.status)throw Error("Fail to add favorite item")}))}(e).then((function(){r()})).catch((function(e){d.b.error(e.message)}))}})}),Object(G.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",width:450},children:Object(G.jsx)(ae.a,{title:a,children:Object(G.jsx)("span",{children:a})})})]})},je=function(e,t,n,r){return Object(G.jsx)(ce.b,{grid:{xs:1,sm:2,md:4,lg:4,xl:6},dataSource:e,renderItem:function(e){return Object(G.jsx)(ce.b.Item,{style:{marginRight:"20px"},children:Object(G.jsx)(ie.a,{title:he(e,t,n,r),children:Object(G.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(G.jsx)("img",{alt:"Placeholder",src:(a=e.thumbnail_url,a.replace("%{height}","252").replace("%{width}","480").replace("{height}","252").replace("{width}","480"))})})})});var a}})},fe=function(e){var t=e.resources,n=e.loggedIn,r=e.favoriteItems,a=e.favoriteOnChange,c=t.VIDEO,i=t.STREAM,s=t.CLIP,o=r.VIDEO,l=r.STREAM,u=r.CLIP;return Object(G.jsxs)(re.a,{defaultActiveKey:le,children:[Object(G.jsx)(oe,{tab:"Streams",style:{height:"680px",overflow:"auto"},forceRender:!0,children:je(i,n,l,a)},le),Object(G.jsx)(oe,{tab:"Videos",style:{height:"680px",overflow:"auto"},forceRender:!0,children:je(c,n,o,a)},ue),Object(G.jsx)(oe,{tab:"Clips",style:{height:"680px",overflow:"auto"},forceRender:!0,children:je(s,n,u,a)},de)]})},me=u.a.Header,be=u.a.Content,Oe=u.a.Sider,pe=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={loggedIn:!1,topGames:[],resources:{VIDEO:[],STREAM:[],CLIP:[]},favoriteItems:{VIDEO:[],STREAM:[],CLIP:[]}},e.favoriteOnChange=function(){D().then((function(t){e.setState({favoriteItems:t,loggedIn:!0})})).catch((function(e){d.b.error(e.message)}))},e.onGameSelect=function(t){var n=t.key;"Recommendation"!==n?T(n).then((function(t){e.setState({resources:t})})):A().then((function(t){e.setState({resources:t})}))},e.customSearchOnSuccess=function(t){e.setState({resources:t})},e.signinOnSuccess=function(){D().then((function(t){e.setState({favoriteItems:t,loggedIn:!0})})).catch((function(e){d.b.error(e.message)}))},e.signoutOnClick=function(){F().then((function(){e.setState({loggedIn:!1}),d.b.success("Successfull signed out")})).catch((function(e){d.b.error(e.message)}))},e.componentDidMount=function(){k().then((function(t){e.setState({topGames:t})})).catch((function(e){d.b.error(e.message)}))},e.render=function(){return Object(G.jsxs)(u.a,{children:[Object(G.jsx)(me,{children:Object(G.jsxs)(h.a,{justify:"space-between",children:[Object(G.jsx)(j.a,{children:e.state.loggedIn&&Object(G.jsx)(X,{data:e.state.favoriteItems})}),Object(G.jsx)(j.a,{children:e.state.loggedIn?Object(G.jsx)(f.a,{shape:"round",onClick:e.signoutOnClick,children:"Logout"}):Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(V,{onSuccess:e.signinOnSuccess}),Object(G.jsx)(q,{})]})})]})}),Object(G.jsxs)(u.a,{children:[Object(G.jsxs)(Oe,{width:300,className:"site-layout-background",children:[Object(G.jsx)(ee,{onSuccess:e.customSearchOnSuccess}),Object(G.jsxs)(m.a,{mode:"inline",onSelect:e.onGameSelect,style:{marginTop:"10px"},children:[Object(G.jsx)(m.a.Item,{icon:Object(G.jsx)(Y.a,{}),children:"Recommend for you!"},"Recommendation"),Object(G.jsx)(ne.a,{icon:Object(G.jsx)(Z.a,{}),title:"Popular Games",className:"site-top-game-list",children:e.state.topGames.map((function(e){return Object(G.jsxs)(m.a.Item,{style:{height:"50px"},children:[Object(G.jsx)("img",{alt:"Placeholder",src:e.box_art_url.replace("{height}","40").replace("{width}","40"),style:{borderRadius:"50%",marginRight:"20px"}}),Object(G.jsx)("span",{children:e.name})]},e.id)}))},"Popular Games")]})]}),Object(G.jsx)(u.a,{style:{padding:"24px"},children:Object(G.jsx)(be,{className:"site-layout-background",style:{padding:24,margin:0,height:800,overflow:"auto"},children:Object(G.jsx)(fe,{resources:e.state.resources,loggedIn:e.state.loggedIn,favoriteItems:e.state.favoriteItems,favoriteOnChange:e.favoriteOnChange})})})]})]})},e}return n}(a.a.Component),ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,260)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(pe,{})}),document.getElementById("root")),ge()}},[[242,1,2]]]);
//# sourceMappingURL=main.89805da7.chunk.js.map