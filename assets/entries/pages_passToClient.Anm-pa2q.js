import{j as e,o as r,i as o}from"../chunks/chunk-DyoRqzik.js";import{L as l}from"../chunks/chunk-Db1tBso6.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-B0bomZhE.js";/* empty css                      */const i=[{pageSectionId:"error",pageSectionLevel:2,pageSectionTitle:"Error"},{pageSectionId:"default",pageSectionLevel:2,pageSectionTitle:"Default"},{pageSectionId:"serialization",pageSectionLevel:2,pageSectionTitle:"Serialization"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function a(s){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["Most ",e.jsx(l,{href:"/pageContext",children:e.jsx(n.code,{children:"pageContext"})})," values are available only on the server-side, but you can use ",e.jsx(n.code,{children:"passToClient"})," to make values available on the client-side."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/+config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Environment: config"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  passToClient: ["})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"    'user'"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  ]"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/+onHydrationEnd.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Environment: client"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { onHydrationEnd }"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"async"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onHydrationEnd"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // pageContext.user is available here thanks to passToClient"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  console."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"log"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(pageContext.user)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // ..."})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(n.p,{children:["Some values, such as ",e.jsx(n.code,{children:"pageContext.data"}),", are already passed to the client-side by ",e.jsx(l,{href:"#default",children:"default"}),"."]}),`
`,e.jsx("h2",{id:"error",children:"Error"}),`
`,e.jsxs(n.p,{children:["If you try to access a ",e.jsx(n.code,{children:"pageContext"})," value that isn't defined on the client-side then Vike throws an error:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`[Vike][Wrong Usage] pageContext.someProp isn't defined on the client-side
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You can look at the stack trace to find the ",e.jsx(n.code,{children:"pageContext.someProp"})," occurrence in your code that triggers the error."]}),`
`]}),`
`,e.jsx(n.p,{children:"To avoid the error:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["add ",e.jsx(n.code,{children:"'someProp'"})," to ",e.jsx(n.code,{children:"passToClient"})," (see above), or"]}),`
`,e.jsxs(n.li,{children:["replace ",e.jsx(n.code,{children:"pageContext.someProp"})," with ",e.jsx(n.code,{children:"'someProp' in pageContext && pageContext.someProp"}),".",`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{className:"diff remove","data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// ❌ Vike throws an error if pageContext.someProp isn't defined"})}),`
`,e.jsxs(n.span,{className:"diff remove","data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" val"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext.someProp "})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{className:"diff add","data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// ✅ Vike doesn't throw an error if pageContext.someProp isn't defined"})}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" val"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'someProp'"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" in"}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"&&"}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext.someProp "})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{className:"diff add","data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// ✅ Alternative"})}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" val"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'someProp'"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" in"}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"?"}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext.someProp "}),e.jsx(n.span,{style:{color:"#D73A49"},children:":"}),e.jsx(n.span,{style:{color:"#24292E"},children:" someDefaultValue "})]})]})})}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"default",children:"Default"}),`
`,e.jsxs(n.p,{children:["When using ",e.jsx(l,{href:"/client-routing",noBreadcrumb:!0}),", the following are also available on the client-side by default:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.Page"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.data"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.config"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.isHydration"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.isBackwardNavigation"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.routeParams"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.urlOriginal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.urlPathname"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.urlParsed"})}),`
`]}),`
`,e.jsxs(n.p,{children:["When using ",e.jsx(l,{href:"/server-routing",noBreadcrumb:!0}),", the following are also available on the client-side by default:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.Page"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.data"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.config"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pageContext.routeParams"})}),`
`]}),`
`,e.jsx("h2",{id:"serialization",children:"Serialization"}),`
`,e.jsxs(n.p,{children:["Serialization is done with ",e.jsx(n.a,{href:"https://github.com/brillout/json-serializer",children:e.jsx(n.code,{children:"@brillout/json-serializer"})}),"."]}),`
`,e.jsx(n.p,{children:"User-defined classes are lost during serialization:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"class"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" MyClass"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#E36209"},children:"  prop"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#005CC5"},children:" 42"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// On the server-side:"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" obj"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" new"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" MyClass"}),e.jsx(n.span,{style:{color:"#24292E"},children:"()"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"console."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"log"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(obj) "}),e.jsx(n.span,{style:{color:"#6A737D"},children:"// MyClass { prop: 42 }"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"console."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"log"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(obj "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"instanceof"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" MyClass"}),e.jsx(n.span,{style:{color:"#24292E"},children:") "}),e.jsx(n.span,{style:{color:"#6A737D"},children:"// true"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// On the browser-side, after `obj` was (de)serialized:"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"console."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"log"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(obj) "}),e.jsx(n.span,{style:{color:"#6A737D"},children:"// { prop: 42 }"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"console."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"log"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(obj "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"instanceof"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" MyClass"}),e.jsx(n.span,{style:{color:"#24292E"},children:") "}),e.jsx(n.span,{style:{color:"#6A737D"},children:"// false"})]})]})})}),`
`,e.jsxs(n.p,{children:["See ",e.jsxs(n.a,{href:"https://github.com/brillout/json-serializer/issues/3",children:["GitHub > ",e.jsx(n.code,{children:"brillout/json-serializer"})," > #3 Support user-defined classes"]}),"."]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/pageContext"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/usePageContext"}),`
`]}),`
`]})]})}function t(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:t,pageSectionsExport:i},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:o}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/passToClient/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{C as configValuesSerialized};
