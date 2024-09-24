import{j as e,o as r,i}from"../chunks/chunk-QQHFLgus.js";import{L as s}from"../chunks/chunk-DJTIoNMK.js";/* empty css                      */import{U as d}from"../chunks/chunk-cioQ90Sa.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-7E_FEcaS.js";/* empty css                      */const t=[{pageSectionId:"basic",pageSectionLevel:2,pageSectionTitle:"Basic"},{pageSectionId:"domain-driven",pageSectionLevel:2,pageSectionTitle:"Domain-driven"},{pageSectionId:"src-pages",pageSectionLevel:2,pageSectionTitle:"`src/pages/`"},{pageSectionId:"renderer",pageSectionLevel:2,pageSectionTitle:"`renderer/`"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function l(a){const n={blockquote:"blockquote",code:"code",em:"em",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...a.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["For advanced apps we recommend a domain-driven file structure using multiple ",e.jsx(n.code,{children:"pages/"})," directories."]}),`
`,e.jsxs(n.p,{children:["For basic apps we recommend using a single ",e.jsx(n.code,{children:"pages/"})," directory."]}),`
`,e.jsx("h2",{id:"basic",children:"Basic"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Landing page"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/pages/index/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/pages/index/SomeComponentForLandingPage.js"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/pages/index/**/*"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # More files specific to the landing page"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# About page"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/pages/about/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/pages/about/SomeComponentForAboutPage.js"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/pages/about/**/*"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # More files specific to the about page"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Other pages"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/pages/**/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Error page"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/pages/_error/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Components shared by several pages"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/components/"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Server code (Express.js/Fastify/...)"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/server/"})})]})})}),`
`,e.jsx("h2",{id:"domain-driven",children:"Domain-driven"}),`
`,e.jsxs(n.p,{children:["You can have what we call a ",e.jsx(n.em,{children:"domain-driven file structure"}),"."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# ==========================="})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# ======= Marketing ========="})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# ==========================="})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Pages"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"(marketing)/pages/index/+Page.js"}),e.jsx(n.span,{style:{color:"#6A737D"},children:"      # URL: /"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"(marketing)/pages/about/+Page.js"}),e.jsx(n.span,{style:{color:"#6A737D"},children:"      # URL: /about"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Configs"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"(marketing)/pages/+Layout.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"(marketing)/pages/+prerender.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Components"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"(marketing)/components/ContactUs.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# ==========================="})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# ===== Authentication ======"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# ==========================="})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Pages"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"auth/pages/signup/+Page.js"}),e.jsx(n.span,{style:{color:"#6A737D"},children:"            # URL: /auth/signup"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"auth/pages/login/+Page.js"}),e.jsx(n.span,{style:{color:"#6A737D"},children:"             # URL: /auth/login"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Configs"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"auth/pages/+Layout.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Components"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"auth/components/UserInfo.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Database"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"auth/database/fetchUser.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# ==========================="})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# ===== Product pages ======="})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# ==========================="})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Pages"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"products/pages/index/+Page.js"}),e.jsx(n.span,{style:{color:"#6A737D"},children:"         # URL: /products"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"products/pages/product/+Page.js"}),e.jsx(n.span,{style:{color:"#6A737D"},children:"       # URL: /product/@id"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"products/pages/product/+route.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Configs"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"products/pages/+Layout.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"products/pages/+ssr.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Database"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"products/database/fetchProduct.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"products/database/fetchProductList.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Shared across all domains"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"components/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"server/"})})]})})}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /products/pages/product/+route.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#032F62"},children:" '/product/@id'"})]})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The directory ",e.jsx(n.code,{children:"(marketing)/"})," is used for ",e.jsx(s,{href:"/routing#groups",children:"grouping"})," and is ignored by ",e.jsx(s,{href:"/filesystem-routing",children:"Filesystem Routing"}),"."]}),`
`,e.jsxs(n.p,{children:["Alternatively, you can have ",e.jsx(n.code,{children:"marketing/"})," (without parentheses) and ",e.jsxs(s,{href:"/filesystemRoutingRoot",children:["set ",e.jsx(n.code,{children:"marketing/+filesystemRoutingRoot.js"})]})," to change the Filesystem Routing URL from ",e.jsx(n.code,{children:"/marketing"})," to ",e.jsx(n.code,{children:"/"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["See ",e.jsx(s,{href:"/config#inheritance"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Example: ",e.jsx(s,{href:"/examples/file-structure-domain-driven/"}),"."]}),`
`,e.jsx("h2",{id:"src-pages",children:e.jsx("code",{children:"src/pages/"})}),`
`,e.jsxs(n.p,{children:["You can embed ",e.jsx(n.code,{children:"pages/"})," in ",e.jsx(n.code,{children:"src/"}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/src/pages/index/+Page.js"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # => URL /"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/src/pages/about/+Page.js"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # => URL /about"})]})]})})}),`
`,e.jsx("h2",{id:"renderer",children:e.jsx("code",{children:"renderer/"})}),`
`,e.jsxs(n.p,{children:["If you don't use a ",e.jsx(d,{})," then we recommend placing your UI framework integration in a ",e.jsx(n.code,{children:"renderer/"})," directory."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Same as above"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/pages/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/components/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/server/"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Code that specifies how pages are rendered"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/+onRenderHtml.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/+onRenderClient.js"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Layout.{jsx,vue}"}),e.jsx(n.span,{style:{color:"#6A737D"},children:"  # React/Vue/... component that wraps the `Page` component"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Layout.css"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Header.{jsx,vue}"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # Website header used for every page"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Footer.{jsx,vue}"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # Website footer used for every page"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/logo.svg"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # Website logo (favicon and used by <Header>)"})]})]})})}),`
`,e.jsxs(n.p,{children:["The hooks ",e.jsx(n.code,{children:"/renderer/+onRender{Html,Client}.js"})," apply as default to all pages ",e.jsx(n.code,{children:"/pages/**/+Page.js"}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"renderer/"})," directory doesn't add any functionality: defining the hooks ",e.jsx(n.code,{children:"+onRender{Html,Client}.js"})," at ",e.jsx(n.code,{children:"/renderer/"})," is equivalent to defining them at ",e.jsx(n.code,{children:"/pages/"})," or ",e.jsx(n.code,{children:"/"}),". It's just an optional convenience for moving rendering logic outside of ",e.jsx(n.code,{children:"pages/"}),": in order to avoid cluttering the ",e.jsx(n.code,{children:"pages/"})," directory and to organize and put all rendering code in one place."]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/routing"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/filesystem-routing"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/config#inheritance"}),`
`]}),`
`]})]})}function o(a={}){const{wrapper:n}=a.components||{};return n?e.jsx(n,{...a,children:e.jsx(l,{...a})}):l(a)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:o,pageSectionsExport:t},Symbol.toStringTag,{value:"Module"})),b={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/file-structure/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{b as configValuesSerialized};
