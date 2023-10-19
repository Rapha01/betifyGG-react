(this["webpackJsonpberry-material-react"]=this["webpackJsonpberry-material-react"]||[]).push([[17],{339:function(e,t,r){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure "+e)}r.d(t,"a",(function(){return n}))},343:function(e,t,r){"use strict";var n=r(6),a=Object(n.a)("div")((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?t.palette.background.default:t.palette.primary.light,minHeight:"100vh"}}));t.a=a},344:function(e,t,r){"use strict";var n=r(3),a=r(90),c=r(5),s=(r(0),r(251)),i=r(160),o=r(1),l=["children"],u=Object(s.a)((function(e){var t;return{card:(t={maxWidth:"475px","& > *":{flexGrow:1,flexBasis:"50%"}},Object(c.a)(t,e.breakpoints.down("sm"),{margin:"20px"}),Object(c.a)(t,e.breakpoints.down("lg"),{maxWidth:"400px"}),t),content:Object(c.a)({padding:e.spacing(5)+" !important"},e.breakpoints.down("lg"),{padding:e.spacing(3)+" !important"})}}));t.a=function(e){var t=e.children,r=Object(a.a)(e,l),c=u();return Object(o.jsx)(i.a,Object(n.a)(Object(n.a)({className:c.card,contentClass:c.content},r),{},{children:t}))}},346:function(e,t,r){"use strict";r(0);var n=r(388),a=r(1);t.a=function(){return Object(a.jsx)(n.a,{direction:"row",justifyContent:"space-between"})}},356:function(e,t,r){"use strict";var n=r(50),a=r(4),c=r(2),s=r(0),i=r(10),o=r(292),l=r(101),u=r(7),d=r(11),b=r(6),j=r(248),O=r(293);function h(e){return Object(j.a)("MuiCircularProgress",e)}Object(O.a)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p,m,v,f,x,g,y,k,w=r(1),P=44,S=Object(l.c)(x||(x=p||(p=Object(n.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),C=Object(l.c)(g||(g=m||(m=Object(n.a)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),R=Object(b.a)("span",{},{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var r=e.styleProps;return Object(c.a)({},t.root,t[r.variant],t["color".concat(Object(u.a)(r.color))])}})((function(e){var t=e.styleProps,r=e.theme;return Object(c.a)({display:"inline-block"},"determinate"===t.variant&&{transition:r.transitions.create("transform")},"inherit"!==t.color&&{color:r.palette[t.color].main})}),(function(e){return"indeterminate"===e.styleProps.variant&&Object(l.b)(y||(y=v||(v=Object(n.a)(["\n      animation: "," 1.4s linear infinite;\n    "]))),S)})),D=Object(b.a)("svg",{},{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),I=Object(b.a)("circle",{},{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var r=e.styleProps;return Object(c.a)({},t.circle,t["circle".concat(Object(u.a)(r.variant))],r.disableShrink&&t.circleDisableShrink)}})((function(e){var t=e.styleProps,r=e.theme;return Object(c.a)({stroke:"currentColor"},"determinate"===t.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.styleProps;return"indeterminate"===t.variant&&!t.disableShrink&&Object(l.b)(k||(k=f||(f=Object(n.a)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),C)})),M=s.forwardRef((function(e,t){var r=Object(d.a)({props:e,name:"MuiCircularProgress"}),n=r.className,s=r.color,l=void 0===s?"primary":s,b=r.disableShrink,j=void 0!==b&&b,O=r.size,p=void 0===O?40:O,m=r.style,v=r.thickness,f=void 0===v?3.6:v,x=r.value,g=void 0===x?0:x,y=r.variant,k=void 0===y?"indeterminate":y,S=Object(a.a)(r,["className","color","disableShrink","size","style","thickness","value","variant"]),C=Object(c.a)({},r,{color:l,disableShrink:j,size:p,thickness:f,value:g,variant:k}),M=function(e){var t=e.classes,r=e.variant,n=e.color,a=e.disableShrink,c={root:["root",r,"color".concat(Object(u.a)(n))],svg:["svg"],circle:["circle","circle".concat(Object(u.a)(r)),a&&"circleDisableShrink"]};return Object(o.a)(c,h,t)}(C),N={},B={},F={};if("determinate"===k){var z=2*Math.PI*((P-f)/2);N.strokeDasharray=z.toFixed(3),F["aria-valuenow"]=Math.round(g),N.strokeDashoffset="".concat(((100-g)/100*z).toFixed(3),"px"),B.transform="rotate(-90deg)"}return Object(w.jsx)(R,Object(c.a)({className:Object(i.a)(M.root,n),style:Object(c.a)({width:p,height:p},B,m),styleProps:C,ref:t,role:"progressbar"},F,S,{children:Object(w.jsx)(D,{className:M.svg,styleProps:C,viewBox:"".concat(22," ").concat(22," ").concat(P," ").concat(P),children:Object(w.jsx)(I,{className:M.circle,style:N,styleProps:C,cx:P,cy:P,r:(P-f)/2,fill:"none",strokeWidth:f})})}))}));t.a=M},388:function(e,t,r){"use strict";var n=r(5),a=r(4),c=r(2),s=r(0),i=r(52),o=r(61),l=r(252),u=r(190),d=r(6),b=r(11),j=r(1);function O(e,t){var r=s.Children.toArray(e).filter(Boolean);return r.reduce((function(e,n,a){return e.push(n),a<r.length-1&&e.push(s.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}function h(e){var t,r=e.values,n=e.base,a=Object.keys(n);return 0===a.length?r:a.reduce((function(e,n){return e[n]="object"===typeof r?null!=r[n]?r[n]:r[t]:r,t=n,e}),{})}var p=Object(d.a)("div",{},{name:"Stack"})((function(e){var t=e.styleProps,r=e.theme,a=Object(c.a)({display:"flex"},Object(i.b)({theme:r},t.direction,(function(e){return{flexDirection:e}})));if(t.spacing){var s=Object(o.a)(r),l=Object.keys(r.breakpoints.values).reduce((function(e,r){return null==t.spacing[r]&&null==t.direction[r]||(e[r]=!0),e}),{}),d=h({values:t.direction,base:l}),b=h({values:t.spacing,base:l});a=Object(u.a)(a,Object(i.b)({theme:r},b,(function(e,r){return{"& > :not(style) + :not(style)":Object(n.a)({margin:0},"margin".concat((a=r?d[r]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),Object(o.d)(s,e))};var a})))}return a})),m=s.forwardRef((function(e,t){var r=Object(b.a)({props:e,name:"MuiStack"}),n=Object(l.a)(r),s=n.component,i=void 0===s?"div":s,o=n.direction,u=void 0===o?"column":o,d=n.spacing,h=void 0===d?0:d,m=n.divider,v=n.children,f=Object(a.a)(n,["component","direction","spacing","divider","children"]),x={direction:u,spacing:h};return Object(j.jsx)(p,Object(c.a)({as:i,styleProps:x,ref:t},f,{children:m?O(v,m):v}))}));t.a=m},640:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(30),s=r(303),i=r(315),o=r(388),l=r(156),u=r(343),d=r(344),b=r(162),j=r(14),O=r(23),h=r(15),p=r(339),m=r(27),v=r(356),f=r(20),x=r(48),g=r(16),y=r(1),k=function(e){Object.assign({},(Object(p.a)(e),e));var t=a.a.useState(""),r=Object(h.a)(t,2),c=r[0],s=r[1],o=a.a.useState(!1),u=Object(h.a)(o,2),d=u[0],b=u[1],k=a.a.useState(!1),w=Object(h.a)(k,2),P=w[0],S=w[1],C=Object(m.b)(),R=new URLSearchParams(window.location.search),D=function(){var e=Object(O.a)(Object(j.a)().mark((function e(t,r){return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,x.a.post(f.a.apiHost+"/v1/auth/reset-password",{userId:t,code:r});case 4:b(!1),S(!0),e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(1),b(!1),s("Error resetting password."),e.abrupt("return",C({type:g.r,open:!0,message:e.t0.response?e.t0.response.data.message:e.t0.toString(),variant:"alert",alertSeverity:"error",close:!0}));case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){R.has("userId")&&R.has("code")?D(R.get("userId"),R.get("code")):s("No userId and code found in url parameters.")}),[]),Object(y.jsxs)(y.Fragment,{children:[d?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)(i.a,{item:!0,xs:12,lg:12,style:{textAlign:"center"},children:Object(y.jsx)(v.a,{color:"secondary",size:"10em"})})]}):"",Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),!d&&P?Object(y.jsx)(l.a,{align:"center",color:"secondary",variant:"h3",children:"Successfully sent you a new password."}):"",d||""===c?"":Object(y.jsx)(l.a,{align:"center",color:"error",variant:"h3",children:c}),Object(y.jsx)("br",{})]})},w=r(346),P=r(109);t.default=function(){var e=Object(c.a)(),t=Object(s.a)(e.breakpoints.down("sm"));return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P.a,{children:Object(y.jsx)("title",{children:"Reset Password"})}),Object(y.jsx)(u.a,{children:Object(y.jsxs)(i.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(y.jsx)(i.a,{item:!0,xs:12,children:Object(y.jsx)(i.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(y.jsx)(i.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(y.jsx)(d.a,{children:Object(y.jsxs)(i.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(y.jsx)(i.a,{item:!0,sx:{mb:3},children:Object(y.jsx)(b.a,{})}),Object(y.jsx)(i.a,{item:!0,xs:12,children:Object(y.jsx)(o.a,{alignItems:"center",justifyContent:"center",spacing:1,children:Object(y.jsx)(l.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Reset password"})})}),Object(y.jsx)(i.a,{item:!0,xs:12,children:Object(y.jsx)(k,{})})]})})})})}),Object(y.jsx)(i.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(y.jsx)(w.a,{})})]})})]})}}}]);
//# sourceMappingURL=17.7c1e3bef.chunk.js.map