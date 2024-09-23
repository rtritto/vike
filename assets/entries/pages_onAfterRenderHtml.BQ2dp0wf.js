import{j as e,o as r,i as a}from"../chunks/chunk-DyoRqzik.js";import{L as t}from"../chunks/chunk-Db1tBso6.js";/* empty css                      */import{U as i}from"../chunks/chunk-C0oTDXmY.js";import{I as o}from"../chunks/chunk-E-vosnFH.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B0bomZhE.js";/* empty css                      *//* empty css                      */const d=[{pageSectionId:"conditionally",pageSectionLevel:2,pageSectionTitle:"Conditionally"},{pageSectionId:"pagecontext",pageSectionLevel:2,pageSectionTitle:"`pageContext`"}];function s(l){const n={code:"code",figure:"figure",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Environment: server."}),`
`,e.jsx(o,{by:e.jsx(i,{name:!0,list:["vike-react","vike-vue"]}),noCustomGuide:!0,children:e.jsx(n.code,{children:"onAfterRenderHtml()"})}),`
`,e.jsxs(n.p,{children:["Hook called right after rendering ",e.jsxs(t,{href:"/Page",children:["the ",e.jsx(n.code,{children:"+Page"})," component"]})," to HTML."]}),`
`,e.jsx(n.p,{children:"It's called upon rendering the first page."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["It's called regardless of whether ",e.jsx(t,{href:"/ssr",children:"SSR"})," is disabled. (The first page the user visits is always rendered to HTML: when SSR is disabled then the HTML is just an HTML shell that doesn't contain the content of the page.)"]}),`
`,e.jsx(n.li,{children:"It isn't called upon page navigation. (Pages aren't rendered to HTML upon page navigation.)"}),`
`]}),`
`,e.jsx("h2",{id:"conditionally",children:"Conditionally"}),`
`,e.jsxs(n.p,{children:["If you want to apply ",e.jsx(n.code,{children:"onAfterRenderHtml()"})," only for SSR then check whether ",e.jsx(t,{href:"/pageContext#:~:text=pageContext.Page,-%3A",children:e.jsx(n.code,{children:"pageContext.Page"})})," is set:"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// pages/+onAfterRenderHtml.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" async"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onAfterRenderHtml"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" isSSR"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" !!"}),e.jsx(n.span,{style:{color:"#24292E"},children:"pageContext.Page"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  if"}),e.jsx(n.span,{style:{color:"#24292E"},children:" (isSSR) {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // ..."})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h2",{id:"pagecontext",children:e.jsx("code",{children:"pageContext"})}),`
`,e.jsxs(n.p,{children:["Commonly used ",e.jsx(t,{href:"/pageContext",children:e.jsx(n.code,{children:"pageContext"})})," properties inside ",e.jsx(n.code,{children:"onAfterRenderHtml()"}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// pages/+onAfterRenderHtml.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onAfterRenderHtml"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:" // The +Page.vue component rendered to the HTML string"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext.pageHtmlString"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:" // The +Page.vue component rendered to an HTML stream"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext.pageHtmlStream"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(n.h2,{children:"Use cases"}),`
`,e.jsx(n.p,{children:"It's usually used for integrating tools, such as dehydrating state management libraries."}),`
`,e.jsx(n.h2,{children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/onBeforeRenderHtml"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/onRenderHtml"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/onRenderClient"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(t,{href:"/hooks"}),`
`]}),`
`]})]})}function c(l={}){const{wrapper:n}=l.components||{};return n?e.jsx(n,{...l,children:e.jsx(s,{...l})}):s(l)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:a}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/onAfterRenderHtml/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{T as configValuesSerialized};
