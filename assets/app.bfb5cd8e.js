import{d as p,o as l,c as d,R as _,_ as f,u as c,a2 as r,K as i,a3 as m,p as v,k as h,a4 as g,a5 as y,a6 as A,a7 as b,a8 as C,a9 as P,aa as w,ab as E,ac as R,ad as V,ae as x,af as D,ag as L}from"./chunks/framework.c8e53cde.js";import{t as o}from"./chunks/theme.d4322ac6.js";const M={class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=caiwenglong.CRM",onerror:"this.style.display='none'"},T=p({__name:"MNavVisitor",setup(e){return _("DEV"),(a,t)=>(l(),d("img",M))}});const j=f(T,[["__scopeId","data-v-1c430a0b"]]);const N={extends:o,Layout(){var a;const{frontmatter:e}=c();return(a=e.value)!=null&&a.layoutClass&&e.value.layoutClass,r(o.Layout,null,{"nav-bar-title-after":()=>r(j)})},async enhanceApp(e){var a,t;(t=(a=o).enhanceApp)==null||t.call(a,e),e.app.provide("DEV",!1)}};function u(e){if(e.extends){const a=u(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=u(N),O=p({name:"VitePressApp",setup(){const{site:e}=c();return v(()=>{h(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),g(),y(),A(),n.setup&&n.setup(),()=>r(n.Layout)}});async function S(){const e=B(),a=k();a.provide(b,e);const t=C(e.route);return a.provide(P,t),a.component("Content",w),a.component("ClientOnly",E),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:R}),{app:a,router:e,data:t}}function k(){return V(O)}function B(){let e=i,a;return x(t=>{let s=D(t);return e&&(a=s),(e||a===s)&&(s=s.replace(/\.js$/,".lean.js")),i&&(e=!1),L(()=>import(s),[])},n.NotFound)}i&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{m(a.route,t.site),e.mount("#app")})});export{S as createApp};