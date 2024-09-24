import{j as e,o as r,i}from"../chunks/chunk-QQHFLgus.js";import{L as s}from"../chunks/chunk-DJTIoNMK.js";/* empty css                      */import{I as o}from"../chunks/chunk-Dwu5OdUZ.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-7E_FEcaS.js";/* empty css                      */import"../chunks/chunk-cioQ90Sa.js";/* empty css                      */const a=[{pageSectionId:"use-cases",pageSectionLevel:2,pageSectionTitle:"Use cases"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function l(t){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Environment: server."}),`
`,e.jsx(o,{by:e.jsx(s,{href:"/vike-vue",children:e.jsx(n.code,{children:"vike-vue"})}),noCustomGuide:!0,children:e.jsx(n.code,{children:"onBeforeRenderHtml()"})}),`
`,e.jsxs(n.p,{children:["Hook called right before rendering ",e.jsxs(s,{href:"/Page",children:["the ",e.jsx(n.code,{children:"+Page"})," component"]})," to HTML."]}),`
`,e.jsx(n.p,{children:"It's called upon rendering the first page."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["It's called regardless of whether ",e.jsx(s,{href:"/ssr",children:"SSR"})," is disabled. (The first page the user visits is always rendered to HTML: when SSR is disabled then the HTML is just an HTML shell that doesn't contain the content of the page.)"]}),`
`,e.jsx(n.li,{children:"It isn't called upon page navigation. (Pages aren't rendered to HTML upon page navigation.)"}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If you want to perform an action only upon SSR then check whether ",e.jsx(s,{href:"/pageContext#:~:text=pageContext.Page,-%3A",children:e.jsx(n.code,{children:"pageContext.Page"})})," is set:"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// +onBeforeRenderHtml.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onBeforeRenderHtml"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" isSSR"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" !!"}),e.jsx(n.span,{style:{color:"#24292E"},children:"pageContext.Page"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  if"}),e.jsx(n.span,{style:{color:"#24292E"},children:" (isSSR) {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // ..."})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`]}),`
`,e.jsx("h2",{id:"use-cases",children:"Use cases"}),`
`,e.jsx(n.p,{children:"It's usually used for integrating tools, such as collecting the page's CSS defined by a CSS-in-JS library."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/vikejs/vike-vue/issues/141",children:"#141 - CSS-in-JS with SSR"})}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/onAfterRenderHtml"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/onRenderHtml"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/onRenderClient"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/hooks"}),`
`]}),`
`]})]})}function d(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:a},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/onBeforeRenderHtml/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{C as configValuesSerialized};
