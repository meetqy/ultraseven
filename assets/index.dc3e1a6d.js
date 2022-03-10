var te=Object.defineProperty,ne=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var O=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))ue.call(t,n)&&O(e,n,t[n]);if(z)for(var n of z(t))re.call(t,n)&&O(e,n,t[n]);return e},A=(e,t)=>ne(e,se(t));import{d as w,c as f,a,u as d,R as D,o as h,b as l,e as oe,f as j,r as g,g as m,h as K,i as M,F as L,j as R,n as $,p as ae,k as le,t as b,l as V,w as G,v as J,m as ie,q as N,s as q,x as W,y as ce,z as de,A as pe,B as me,C as he,D as fe}from"./vendor.d9d65b03.js";const ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerpolicy&&(u.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?u.credentials="include":s.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(s){if(s.ep)return;s.ep=!0;const u=n(s);fetch(s.href,u)}};ve();const ge={id:"ultraseven",class:"w-screen flex relative"},we=w({setup(e){return(t,n)=>(h(),f("div",ge,[a(d(D),{name:"SideBar"}),a(d(D)),a(d(D),{name:"MenuBar"}),a(d(D),{name:"ComponentPreview"})]))}});let Q;const xe=e=>{Q=e};var T=(e=>(e[e.menu=0]="menu",e[e.component=1]="component",e[e.editorToSide=2]="editorToSide",e[e.sideToEditor=3]="sideToEditor",e))(T||{});function I(e){var t;return(t=Q.contentWindow)==null?void 0:t.postMessage(e)}function Ee(e,t){return e.parent.postMessage(t)}const _={component:e=>{I({type:1,data:e})},editorToSide:(e,t)=>{Ee(e,{type:2,data:t})},sideToEditor:e=>{I({type:3,data:e})},on:(e,t)=>{window.addEventListener("message",n=>{n.data.type===e&&t(n.data.data)})}},_e={class:"w-full max-w-screen-xl m-auto overflow-hidden flex-1 pb-10",style:{"max-height":"92vh"}},Fe={class:"bg-white w-full flex overflow-hidden rounded-xl shadow flex-col h-full"},Ce=oe('<div class="h-12 w-full px-4 flex justify-between items-center bg-gray-50 flex-shrink-0 border-b relative z-10"><div class="flex h-full items-center w-14 justify-between"><div class="w-3 h-3 bg-red-500 rounded-full"></div><div class="w-3 h-3 bg-orange-400 rounded-full"></div><div class="w-3 h-3 bg-green-600 rounded-full"></div></div><div class="bg-white w-96 h-8 flex items-center justify-center rounded"><span class="text-blue-500 cursor-pointer underline underline-offset-2">\u79FB\u52A8\u7AEF\u4F18\u5148</span><span class="mx-4 text-gray-200">|</span><span class="cursor-pointer text-gray-500">PC\u7AEF\u4F18\u5148</span></div><div class="flex w-24 justify-between"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></div></div>',1),be={class:"w-full h-full bg-white flex-1 rounded-b-xl"},Be=["src"],ke=w({setup(e){const t="/ultraseven/";return console.log(t),(n,r)=>(h(),f("div",_e,[l("div",Fe,[Ce,l("div",be,[l("iframe",{ref:"iframe",id:"iframe-editor",class:"w-full h-full",frameborder:"0",title:"edit page",src:`${d(t)}iframe`},null,8,Be)])])]))}}),ye={class:"swap swap-rotate text-primary cursor-pointer"},Ae=["checked"],De=l("svg",{class:"swap-on fill-current w-10 h-10",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[l("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"})],-1),$e=l("svg",{class:"swap-off fill-current w-10 h-10",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[l("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"})],-1),Ne=w({props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e){return(t,n)=>(h(),f("label",ye,[l("input",{type:"checkbox",checked:e.modelValue,onInput:n[0]||(n[0]=r=>t.$emit("update:modelValue",r.target.checked))},null,40,Ae),De,$e]))}}),Te={class:"flex-1 bg-gray-100 px-4 h-screen flex flex-col"},Se={class:"w-full flex p-5 flex-shrink-0"},Me=w({setup(e){j(()=>{const n=document.getElementById("iframe-editor");xe(n)});const t=g(!1);return(n,r)=>(h(),f("main",Te,[l("div",Se,[a(Ne,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=s=>t.value=s)},null,8,["modelValue"])]),a(ke)]))}}),je={jsx:a("article",{class:"prose"},[a("h1",null,[m("\u6587\u672C\u5BB9\u5668 article")]),a("h2",null,[m("\u6587\u672C\u5BB9\u5668 article")]),a("h3",null,[m("\u6587\u672C\u5BB9\u5668 article")]),a("h4",null,[m("\u6587\u672C\u5BB9\u5668 article")]),a("p",null,[m("\u6587\u672C\u5BB9\u5668 article - \u8FD9\u662F\u4E00\u6BB5\u6587\u672C\u3002By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.")])]),str:` <article class="prose">
  <h1>\u6587\u672C\u5BB9\u5668 article</h1>
  <h2>\u6587\u672C\u5BB9\u5668 article</h2>
  <h3>\u6587\u672C\u5BB9\u5668 article</h3>
  <h3>\u6587\u672C\u5BB9\u5668 article</h3>
  <p>
    \u6587\u672C\u5BB9\u5668 article - \u8FD9\u662F\u4E00\u6BB5\u6587\u672C\u3002By default, Tailwind removes all of the
    default browser styling from paragraphs, headings, lists and more. This
    ends up being really useful for building application UIs because you
    spend less time undoing user-agent styles, but when you really are just
    trying to style some content that came from a rich-text editor in a CMS
    or a markdown file, it can be surprising and unintuitive.
  </p>
</article>`},Le={jsx:a("h1",{class:"text-center"},[m("\u8FD9\u662F\u6807\u98981")]),str:'<h1 class="text-center">\u8FD9\u662F\u6807\u98981</h1>'},Ve={jsx:a("h2",null,[m("\u8FD9\u662F\u6807\u98982")]),str:"<h2>\u8FD9\u662F\u6807\u98982</h2>"},He={jsx:a("h3",null,[m("\u8FD9\u662F\u6807\u98983")]),str:"<h3>\u8FD9\u662F\u6807\u98983</h3>"},Pe={jsx:a("h4",null,[m("\u8FD9\u662F\u6807\u98984")]),str:"<h4>\u8FD9\u662F\u6807\u98984</h4>"},Ze={jsx:a("h5",null,[m("\u8FD9\u662F\u6807\u98985")]),str:"<h5>\u8FD9\u662F\u6807\u98985</h5>"},Ue={jsx:a("h6",null,[m(" \u8FD9\u662F\u6807\u98986")]),str:"<h6> \u8FD9\u662F\u6807\u98986</h6>"},ze={jsx:a("p",null,[m("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CTailwind \u4F7F\u7528\u79FB\u52A8\u4F18\u5148\u7684\u65AD\u70B9\u7CFB\u7EDF\uFF0C\u7C7B\u4F3C\u4E8E Bootstrap \u8FD9\u4E9B\u5176\u5B83\u6846\u67B6\u4E2D\u7684\u7528\u6CD5\u3002 \u8FD9\u610F\u5473\u7740\u672A\u52A0\u524D\u7F00\u7684\u529F\u80FD\u7C7B (\u50CF uppercase) \u5728\u6240\u6709\u7684\u5C4F\u5E55\u4E0A\u90FD\u6709\u6548\uFF0C\u800C\u52A0\u4E86\u524D\u7F00\u7684\u529F\u80FD\u7C7B\uFF08\u5982 md:uppercase\uFF09\u4EC5\u5728\u6307\u5B9A\u65AD\u70B9\u53CA\u4EE5\u4E0A\u7684\u5C4F\u5E55\u4E0A\u751F\u6548\u3002")]),str:`<p>
  \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CTailwind \u4F7F\u7528\u79FB\u52A8\u4F18\u5148\u7684\u65AD\u70B9\u7CFB\u7EDF\uFF0C\u7C7B\u4F3C\u4E8E Bootstrap
  \u8FD9\u4E9B\u5176\u5B83\u6846\u67B6\u4E2D\u7684\u7528\u6CD5\u3002 \u8FD9\u610F\u5473\u7740\u672A\u52A0\u524D\u7F00\u7684\u529F\u80FD\u7C7B (\u50CF uppercase)
  \u5728\u6240\u6709\u7684\u5C4F\u5E55\u4E0A\u90FD\u6709\u6548\uFF0C\u800C\u52A0\u4E86\u524D\u7F00\u7684\u529F\u80FD\u7C7B\uFF08\u5982
  md:uppercase\uFF09\u4EC5\u5728\u6307\u5B9A\u65AD\u70B9\u53CA\u4EE5\u4E0A\u7684\u5C4F\u5E55\u4E0A\u751F\u6548\u3002
</p>`},Oe={jsx:a("span",null,[m("\u300A\u5965\u7279\u8D5B\u6587\u300B\uFF08\u65E5\u8BED\uFF1A\u30A6\u30EB\u30C8\u30E9\u30BB\u30D6\u30F3\uFF0C\u82F1\u8BED\uFF1AUltra seven\uFF09\u662F\u5706\u8C37\u5236\u4F5C\u6240\u5236\u4F5C\u7684\u7279\u6444\u7535\u89C6\u5267\uFF0C\u4E3A1967\u5E7410\u67081\u65E5\u81F31968\u5E749\u67088\u65E5\u5728\u65E5\u672CTBS\u7535\u89C6\u7F51\u6BCE\u5468\u65E519\uFF1A00\uFF5E19\uFF1A30\u64AD\u6620\uFF0C\u516849\u96C6\u3002 \u672C\u7247\u5728\u9999\u6E2F\u66FE\u7531\u4F73\u827A\u7535\u89C6\u8D2D\u5165\uFF0C\u4EE5\u300A\u4E03\u661F\u4FE0\u300B\u8BD1\u540D\u4E8E1976\u5E74\u64AD\u51FA\uFF08\u4F46\u4ECD\u672A\u5305\u62EC\u7B2C12\u96C6\uFF09\u3002\u9999\u6E2FTVB\u57282010\u5E74\u64AD\u6620\u8BBE\u5B9A\u4E0A\u4E0E\u672C\u4F5C\u6709\u5173\u8FDE\u7684\u300A\u68A6\u6BD4\u4F18\u65AF\xB7\u5965\u7279\u66FC\u300B\u7B2C46\u96C6\u65F6\uFF0C\u6B63\u5F0F\u5C06\u672C\u4F5C\u767B\u573A\u5965\u7279\u66FC\u201C\u30A6\u30EB\u30C8\u30E9\u30BB\u30D6\u30F3\u201D\u7684\u6E2F\u8BD1\u540D\u79F0\u6539\u4E3A\u201C\u8D85\u4EBASeven\u201D\u3002")]),str:`<span>
  \u300A\u5965\u7279\u8D5B\u6587\u300B\uFF08\u65E5\u8BED\uFF1A\u30A6\u30EB\u30C8\u30E9\u30BB\u30D6\u30F3\uFF0C\u82F1\u8BED\uFF1AUltra
  seven\uFF09\u662F\u5706\u8C37\u5236\u4F5C\u6240\u5236\u4F5C\u7684\u7279\u6444\u7535\u89C6\u5267\uFF0C\u4E3A1967\u5E7410\u67081\u65E5\u81F31968\u5E749\u67088\u65E5\u5728\u65E5\u672CTBS\u7535\u89C6\u7F51\u6BCE\u5468\u65E519\uFF1A00\uFF5E19\uFF1A30\u64AD\u6620\uFF0C\u516849\u96C6\u3002
  \u672C\u7247\u5728\u9999\u6E2F\u66FE\u7531\u4F73\u827A\u7535\u89C6\u8D2D\u5165\uFF0C\u4EE5\u300A\u4E03\u661F\u4FE0\u300B\u8BD1\u540D\u4E8E1976\u5E74\u64AD\u51FA\uFF08\u4F46\u4ECD\u672A\u5305\u62EC\u7B2C12\u96C6\uFF09\u3002\u9999\u6E2FTVB\u57282010\u5E74\u64AD\u6620\u8BBE\u5B9A\u4E0A\u4E0E\u672C\u4F5C\u6709\u5173\u8FDE\u7684\u300A\u68A6\u6BD4\u4F18\u65AF\xB7\u5965\u7279\u66FC\u300B\u7B2C46\u96C6\u65F6\uFF0C\u6B63\u5F0F\u5C06\u672C\u4F5C\u767B\u573A\u5965\u7279\u66FC\u201C\u30A6\u30EB\u30C8\u30E9\u30BB\u30D6\u30F3\u201D\u7684\u6E2F\u8BD1\u540D\u79F0\u6539\u4E3A\u201C\u8D85\u4EBASeven\u201D\u3002
</span>`},qe=[je,Le,Ve,He,Pe,Ze,Ue,ze,Oe],B=K({id:"base",state:()=>({current:"",component:-1,checkedElement:null,menu:[{id:"1",text:"\u6587\u672C",wrapClass:["prose"],components:qe}]}),getters:{curItem:e=>e.current?e.menu.filter(t=>t.id===e.current)[0]:null},actions:{setCurrent(e){this.current=e,this.component=-1},setComponent(e){var n;const t=(n=this.curItem)==null?void 0:n.components[e].str;this.component!=e&&t&&(_.component(t),this.component=e)},initCheckedElement(e){this.checkedElement=e,_.sideToEditor(e)},updateCheckedElement(e){this.checkedElement&&(this.checkedElement.className=e.className,this.checkedElement.innerText=e.innerText,this.checkedElement.tagName=e.tagName,_.sideToEditor({tagName:this.checkedElement.tagName,className:this.checkedElement.className,innerText:this.checkedElement.innerText}))}}});var We=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n};const Ie=e=>(ae("data-v-c8b7e7d4"),e=e(),le(),e),Ke={class:"p-4"},Re=Ie(()=>l("h2",{class:"font-semibold text-lg py-2 text-slate-700"},"\u57FA\u7840",-1)),Ge=["id"],Je=w({setup(e){const t=B(),n=g();return M(n,"mousemove",r=>{const s=r.target.id;s&&t.setCurrent(s)}),(r,s)=>(h(),f("aside",{ref_key:"element",ref:n,class:$(["h-screen w-72 bg-white flex-shrink-0 shadow relative z-20",{hidden:d(t).checkedElement}])},[l("div",Ke,[Re,l("ul",null,[(h(!0),f(L,null,R(d(t).menu,u=>(h(),f("li",{class:$(["nav-item",d(t).current===u.id&&"bg-slate-100"]),key:u.id,id:u.id},b(u.text),11,Ge))),128))])])],2))}});var Qe=We(Je,[["__scopeId","data-v-c8b7e7d4"]]);const Xe={class:"px-4"},Ye={class:"flex justify-between items-center"},et=l("span",{class:"text-base"},"ClassName",-1),tt={class:"badge badge-outline badge-secondary"},nt={class:"mt-4"},st=["onKeyup"],ut=["onClick"],rt=l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),ot=[rt],at=w({props:{element:null},setup(e){const t=e,n=V(()=>{var v;const p=(v=t.element)==null?void 0:v.className;return p?p.split(" "):[]}),r=B(),s=g(),u=()=>{if(!s.value)return;const p=[...n.value,s.value].join(" ");t.element&&r.updateCheckedElement(A(y({},t.element),{className:p})),s.value=void 0},i=p=>{n.value.splice(p,1),t.element&&r.updateCheckedElement(A(y({},t.element),{className:n.value.join(" ")}))};return(p,v)=>{var E;return h(),f("div",Xe,[l("p",Ye,[et,l("span",tt,b((E=d(n))==null?void 0:E.length),1)]),l("div",nt,[G(l("input",{type:"text",placeholder:"\u6DFB\u52A0className",class:"input input-bordered input-primary w-full max-w-xs input-sm mb-2","onUpdate:modelValue":v[0]||(v[0]=F=>s.value=F),onKeyup:ie(u,["enter"])},null,40,st),[[J,s.value]]),(h(!0),f(L,null,R(d(n),(F,k)=>(h(),f("div",{class:"badge gap-1 mr-2 mt-2",key:F},[(h(),f("svg",{onClick:S=>i(k),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"inline-block w-4 h-4 stroke-current cursor-pointer"},ot,8,ut)),m(" "+b(F),1)]))),128))])])}}}),X=new Set(["H1","H2","H3","H4","H5","H6","P","SPAN"]),lt=l("p",{class:"flex justify-between items-center"},[l("span",{class:"text-base"}," Text ")],-1),it={class:"mt-4"},ct=w({props:{element:null},setup(e){const t=e,n=B(),r=g();return N(t,s=>{var u;r.value=(u=s.element)==null?void 0:u.innerText}),N(r,s=>{var u;t.element&&((u=t.element)==null?void 0:u.innerText)!=s&&n.updateCheckedElement(A(y({},t.element),{innerText:s||""}))}),(s,u)=>{var i;return h(),f("div",{class:$(["px-4",d(X).has(((i=t.element)==null?void 0:i.tagName)||"")?"block":"hidden"])},[lt,l("div",it,[G(l("input",{type:"text",placeholder:"\u8F93\u5165\u6587\u672C",class:"input input-bordered input-primary w-full max-w-xs input-sm mb-2","onUpdate:modelValue":u[0]||(u[0]=p=>r.value=p)},null,512),[[J,r.value]])])],2)}}}),dt={class:"flex justify-between px-4 pt-5"},pt={class:"font-semibold"},mt={class:"lowercase"},ht=l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),ft=[ht],vt=l("div",{class:"divider"},null,-1),gt=w({setup(e){const t=B();j(()=>{_.on(T.editorToSide,s=>{t.initCheckedElement(s)})});const n=()=>{t.initCheckedElement(null)},r=V(()=>t.checkedElement);return(s,u)=>{var i,p;return h(),f("aside",{id:"side-bar",class:$(["h-screen w-72 bg-white flex-shrink-0 shadow",{hidden:!d(r)}])},[l("header",dt,[l("span",pt,[m(b((i=d(r))==null?void 0:i.tagName)+" ",1),l("span",mt,"("+b((p=d(r))==null?void 0:p.tagName)+")",1)]),l("button",{class:"btn btn-xs btn-square btn-outline text-base-300",onClick:n},ft)]),vt,d(r)?(h(),q(at,{key:0,element:d(r)},null,8,["element"])):W("",!0),d(r)?(h(),q(ct,{key:1,element:d(r)},null,8,["element"])):W("",!0)],2)}}});var wt=w({setup(){const e=B(),t=V(()=>e.component===-1&&e.current),n=g();M(n,"mousemove",s=>{s.target.id==="mask"&&e.setCurrent("")}),M(n,"transitionend",s=>{const u=s.target;e.current&&e.component===-1?u.classList.remove("hidden"):u.classList.add("hidden")});const r=s=>{const u=+s.target.id.split("_")[1];u!==e.component&&e.setComponent(u)};return()=>{var s,u,i;return a("div",{ref:n,class:`w-full h-full absolute transition-opacity ${t.value?"opacity-100":"opacity-0 hidden"}`},[a("div",{class:"mask mask-show",id:"mask"},null),a("div",{class:`component-preview scrollbar ${t.value?"left-72":"-left-96"}`},[a("h2",{class:"text-2xl font-medium text-gray-900 my-4"},[(s=e.curItem)==null?void 0:s.text]),a("ul",{class:(u=e.curItem)==null?void 0:u.wrapClass.join(" ")},[(i=e.curItem)==null?void 0:i.components.map((p,v)=>{var E;return a("li",{key:v,id:`component-${(E=e.curItem)==null?void 0:E.id}_${v}`,draggable:!0,onDrag:r,class:"translate-x-0 translate-y-0 card cursor-pointer p-4 mb-5 bg-base-100 shadow-sm border-2 border-transparent hover:border-primary"},[p.jsx])})])])])}}});const xt=e=>{const t=document.createElement("div");t.innerHTML=e.trim();const n=t.querySelector("*");return n&&Y(n),n},Y=e=>{e.setAttribute("data-uuid",ce());const t=[...e.children];t.length>0&&t.forEach(n=>{Y(n)})},Et=K({id:"editor",state:()=>({wrapElement:null}),actions:{updateElement(e,t){var r;const n=(r=this.wrapElement)==null?void 0:r.querySelector(`[data-uuid="${e}"]`);n&&(n.className=t.className,X.has(n.tagName)&&(n.innerText=t.innerText))},init(e){this.wrapElement=e},addNode(e,t){var r,s;const n=xt(e);if(!!n)if(t&&t.id!="iframe-main"){const u=t.parentNode,i=(r=this.wrapElement)==null?void 0:r.querySelector(`[data-uuid="${t.getAttribute("data-uuid")}"]`);i&&(u==null||u.insertBefore(n,i.nextSibling))}else(s=this.wrapElement)==null||s.append(n)}}});var _t=w({setup(){const e=Et(),t=g(),n=g(),r=g(),s=g();let u="";N(n,o=>{if(o==null?void 0:o.tagName){const c={className:(o==null?void 0:o.className)||"",tagName:o.tagName,innerText:(o==null?void 0:o.innerText)||""};_.editorToSide(window,c)}});const i=g(!1),p=o=>{o.preventDefault(),o.stopPropagation(),i.value=!1,u&&e.addNode(u,s.value),s.value=void 0,console.log(o,"drop")},v=o=>{o.preventDefault(),o.stopPropagation()},E=o=>{var x;o.preventDefault(),o.stopPropagation();const c=o.target;((x=e.wrapElement)==null?void 0:x.children.length)||(i.value=!0),s.value=c},F=()=>{i.value=!1};function k(o){const c=o.target;c.id!=="iframe-main"&&(r.value=c)}function S(o){r.value=void 0}function P(o){const c=o.target;c.id!=="iframe-main"&&(n.value=c,r.value=void 0)}return j(()=>{var o,c,x;_.on(T.component,C=>{u=C}),_.on(T.sideToEditor,C=>{var U;if(console.log(C,n.value),!C)return n.value=null;const ee=C,Z=(U=n.value)==null?void 0:U.getAttribute("data-uuid");Z&&e.updateElement(Z,ee)}),(o=t.value)==null||o.addEventListener("mouseover",k),(c=t.value)==null||c.addEventListener("mouseleave",S),(x=t.value)==null||x.addEventListener("click",P),t.value&&e.init(t.value)}),de(()=>{var o,c,x;(o=t.value)==null||o.removeEventListener("mouseover",k),(c=t.value)==null||c.removeEventListener("mouseleave",S),(x=t.value)==null||x.removeEventListener("click",P)}),N(e,o=>{const c=o.wrapElement;t.value&&(t.value.innerHTML=(c==null?void 0:c.innerHTML)||"")}),()=>a(L,null,[a("main",{ref:t,onDrop:p,onDragenter:E,onDragleave:F,onDragover:v,id:"iframe-main",class:`w-screen h-screen border-primary rounded-b-xl cursor-default relative z-10 ${i.value?"border-2":"border-0"}`},null),Ct(r.value),n.value?bt(n.value):null,Ft(s.value)])}});const Ft=e=>!e||e.id==="iframe-main"?null:a("div",{class:"drag-enter_element",style:{left:e.offsetLeft+"px",width:e.clientWidth+"px",top:e.offsetTop+"px",height:e.clientHeight+"px"}},null),Ct=e=>e&&a("div",{class:"over-element",style:{left:e.offsetLeft+"px",width:e.clientWidth+"px",top:e.offsetTop+"px",height:e.clientHeight+"px"}},null),bt=e=>e&&a("div",{class:"checked-element",style:{left:e.offsetLeft+"px",width:e.clientWidth+"px",top:e.offsetTop+"px",height:e.clientHeight+"px"}},null),Bt=pe({history:me("/ultraseven/"),routes:[{path:"/",components:{default:Me,SideBar:Qe,MenuBar:gt,ComponentPreview:wt}},{path:"/iframe",component:_t}]});const H=he(we);H.use(fe());H.use(Bt);H.mount("#app");
