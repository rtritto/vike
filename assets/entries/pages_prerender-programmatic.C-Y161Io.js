import{j as e,o as s,i as t}from"../chunks/chunk-DyoRqzik.js";import{L as r}from"../chunks/chunk-Db1tBso6.js";/* empty css                      */import{W as a}from"../chunks/chunk-92YaMW_7.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B0bomZhE.js";/* empty css                      */const o=[{pageSectionId:"pagecontextinit",pageSectionLevel:2,pageSectionTitle:"`pageContextInit`"},{pageSectionId:"viteconfig",pageSectionLevel:2,pageSectionTitle:"`viteConfig`"},{pageSectionId:"onpageprerender",pageSectionLevel:2,pageSectionTitle:"`onPagePrerender()`"},{pageSectionId:"more-settings",pageSectionLevel:2,pageSectionTitle:"More settings"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function l(i){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["You can programmatically trigger ",e.jsx(r,{href:"/pre-rendering",children:"pre-rendering"}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// my-build-script.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { prerender } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/prerender'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Without options"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"prerender"}),e.jsx(n.span,{style:{color:"#24292E"},children:"()"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// All options are optional"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"prerender"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContextInit,"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  viteConfig,"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  onPagePrerender"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"})"})})]})})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Use ",e.jsx(r,{href:"/prerender#disableautorun"})," to avoid pre-rendering to be run twice."]}),`
`]}),`
`,e.jsx("h2",{id:"pagecontextinit",children:e.jsx("code",{children:"pageContextInit"})}),`
`,e.jsxs(n.p,{children:["The initial value of each page's ",e.jsx(n.code,{children:"pageContext"})," object."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"prerender"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContextInit: {"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"    someData: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"42"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // ..."})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"})"})})]})})}),`
`,e.jsx("h2",{id:"viteconfig",children:e.jsx("code",{children:"viteConfig"})}),`
`,e.jsx(n.p,{children:"The Vite config."}),`
`,e.jsxs(n.p,{children:["It's optional: if omitted, Vite automatically loads ",e.jsx(n.code,{children:"vite.config.js"}),"."]}),`
`,e.jsxs(n.p,{children:["We recommend to either omit this option or set it to ",e.jsx(n.code,{children:"prerender({ viteConfig: { root }})"}),": the ",e.jsx(n.code,{children:"vite.config.js"})," file living at ",e.jsx(n.code,{children:"root"})," will be loaded."]}),`
`,e.jsx(n.p,{children:"Alternatively you can:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Set:",`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"prerender"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  viteConfig: {"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"    configFile: require."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"resolve"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'./path/to/vite.config.js'"}),e.jsx(n.span,{style:{color:"#24292E"},children:")"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"})"})})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:["Not load any ",e.jsx(n.code,{children:"vite.config.js"})," file and, instead, use ",e.jsx(n.code,{children:"prerender({ viteConfig: { configFile: false, ...myViteConfig }})"})," to programmatically define the entire Vite config."]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can also load a ",e.jsx(n.code,{children:"vite.config.js"})," file while overriding parts of the Vite config."]}),`
`,e.jsxs(n.p,{children:["See ",e.jsxs(n.a,{href:"https://vitejs.dev/guide/api-javascript.html#inlineconfig",children:["Vite > JavaScript API > ",e.jsx(n.code,{children:"InlineConfig"})]}),"."]}),`
`,e.jsx("h2",{id:"onpageprerender",children:e.jsx("code",{children:"onPagePrerender()"})}),`
`,e.jsx(a,{children:"Don't use this option without having contacted a Vike maintainer: this functionality may be changed/removed at any time if you don't."}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"onPagePrerender"})," option allows you to control where/how HTML files are written."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"prerender"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // If onPagePrerender() is set, then Vike won't write the HTML files to the filesystem"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  onPagePrerender"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // Write the HTML to the filesystem"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"    // ..."})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"})"})})]})})}),`
`,e.jsx("h2",{id:"more-settings",children:"More settings"}),`
`,e.jsxs(n.p,{children:["For more settings, see ",e.jsx(r,{href:"/prerender"}),"."]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"/command-prerender"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"/prerender#disableautorun"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"/pre-rendering"}),`
`]}),`
`]})]})}function d(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}const c=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:o},Symbol.toStringTag,{value:"Module"})),S={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:t}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/prerender-programmatic/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{S as configValuesSerialized};
