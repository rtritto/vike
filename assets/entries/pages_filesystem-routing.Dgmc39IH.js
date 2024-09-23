import{j as e,o as t,i as l}from"../chunks/chunk-DyoRqzik.js";import{L as n}from"../chunks/chunk-Db1tBso6.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B0bomZhE.js";/* empty css                      */const a=[{pageSectionId:"parameterized-routes",pageSectionLevel:2,pageSectionTitle:"Parameterized routes"},{pageSectionId:"case-sensitive",pageSectionLevel:2,pageSectionTitle:"Case sensitive"},{pageSectionId:"ignored-directories",pageSectionLevel:2,pageSectionTitle:"Ignored directories"},{pageSectionId:"crawl",pageSectionLevel:2,pageSectionTitle:"Crawl"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function r(i){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.p,{children:["Vike supports ",e.jsx(s.em,{children:"Filesystem Routing"}),": the URL of a page is determined by where the page is located on your filesystem."]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"FILESYSTEM"}),e.jsx(s.span,{style:{color:"#032F62"},children:"                     URL"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"====================           "}),e.jsx(s.span,{style:{color:"#032F62"},children:"======"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"pages/about/+Page.js"}),e.jsx(s.span,{style:{color:"#032F62"},children:"           /about"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"pages/faq/+Page.js"}),e.jsx(s.span,{style:{color:"#032F62"},children:"             /faq"})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["You can use a ",e.jsx(s.a,{href:"/route-string",children:"Route String"})," or ",e.jsx(s.a,{href:"route-function",children:"Route Function"})," to override the route of a page determined by Filesystem Routing."]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"+"})," files are explained at ",e.jsx(n,{href:"/config#files",doNotInferSectionTitle:!0}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"parameterized-routes",children:"Parameterized routes"}),`
`,e.jsx(s.p,{children:"You can define parameterized routes:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"FILESYSTEM"}),e.jsx(s.span,{style:{color:"#032F62"},children:"                     URL"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"========================       "}),e.jsx(s.span,{style:{color:"#032F62"},children:"==========================="})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"pages/movie/@id/+Page.js"}),e.jsx(s.span,{style:{color:"#032F62"},children:"       /movie/123,"}),e.jsx(s.span,{style:{color:"#032F62"},children:" /movie/abc,"}),e.jsx(s.span,{style:{color:"#032F62"},children:" ..."})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The parameter ",e.jsx(s.code,{children:"id"})," is available at ",e.jsx(n,{href:"/pageContext",children:e.jsx(s.code,{children:"pageContext.routeParams.id"})}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"case-sensitive",children:"Case sensitive"}),`
`,e.jsx(s.p,{children:"Filesystem Routing is case sensitive:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"FILESYSTEM"}),e.jsx(s.span,{style:{color:"#032F62"},children:"                     URL"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"========================       "}),e.jsx(s.span,{style:{color:"#032F62"},children:"======"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#6F42C1"},children:"pages/HELLO/+Page.js"}),e.jsx(s.span,{style:{color:"#032F62"},children:"           /HELLO"})]})]})})}),`
`,e.jsx("h2",{id:"ignored-directories",children:"Ignored directories"}),`
`,e.jsx(s.p,{children:"Following directories are ignored:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"index/"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"pages/"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"src/"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"(someDir)/"})," (any directory wrapped with parentheses)"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`FILESYSTEM                                                     URL
=========================================================      ========
pages/index/+Page.js                                           /
(marketing)/src/pages/jobs/+Page.js                            /jobs
(some)/(path)/src/pages/jobs/+Page.js                          /jobs
contact/+Page.js                                               /contact
pages/pages/src/(some-dir)/src/index/pages/about/+Page.js      /about
`})}),`
`,e.jsxs(s.p,{children:["This enables you to set up a domain-driven file structure: ",e.jsx(n,{href:"/file-structure#domain-driven"}),"."]}),`
`,e.jsxs(s.p,{children:["Instead of ",e.jsx(s.code,{children:"(someDir)"})," you can also use the ",e.jsxs(n,{href:"/filesystemRoutingRoot",children:[e.jsx(s.code,{children:"filesystemRoutingRoot"})," setting"]}),"."]}),`
`,e.jsx("h2",{id:"crawl",children:"Crawl"}),`
`,e.jsxs(s.p,{children:["Vike crawls files inside ",e.jsxs(s.a,{href:"https://vitejs.dev/config/shared-options.html#root",children:["Vite's ",e.jsx(s.code,{children:"root"})," directory"]}),". Consequently, all your ",e.jsxs(n,{href:"/config#files",children:[e.jsx(s.code,{children:"+"})," files"]})," need to live inside ",e.jsx(s.code,{children:"root"}),"."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["You can use symlinks (e.g. ",e.jsx(s.code,{children:"$ ln -s"}),") to make a directory outside of ",e.jsx(s.code,{children:"root"})," crawlable."]}),`
`]}),`
`,e.jsxs(s.p,{children:["If you use Git then Vike skips ",e.jsx(s.code,{children:".gitignore"})," files."]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/config#files",doNotInferSectionTitle:!0}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/routing"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/file-structure"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/filesystemRoutingRoot"}),`
`]}),`
`]})]})}function o(i={}){const{wrapper:s}=i.components||{};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:o,pageSectionsExport:a},Symbol.toStringTag,{value:"Module"})),m={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:t}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:l}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/filesystem-routing/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{m as configValuesSerialized};
