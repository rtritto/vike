import{j as e,o as s,i}from"../chunks/chunk-QQHFLgus.js";import{L as o}from"../chunks/chunk-DJTIoNMK.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-7E_FEcaS.js";/* empty css                      */const a=[{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function r(n){const t={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.p,{children:["By design Vike doesn't include built-in support for ",e.jsx(t.a,{href:"https://nextjs.org/docs/api-routes/introduction",children:"API routes"}),"."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"We believe API tools should be developed independently of the frontend framework."}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["See ",e.jsx(o,{href:"/data-fetching"})," for a general introduction about fetching data with Vike."]}),`
`]}),`
`,e.jsxs(t.p,{children:["We generally recommend using ",e.jsx(t.a,{href:"https://telefunc.com",children:"Telefunc"})," (or another RPC tool) instead of API routes, see ",e.jsx(o,{href:"/RPC"}),"."]}),`
`,e.jsx(t.p,{children:"That said, creating API routes can make sense:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"For specific needs where Telefunc doesn't fit, most notably file upload."}),`
`,e.jsx(t.li,{children:"If you only need a handful of endpoints, creating a couple of API routes can be simpler than using Telefunc and thus adding yet another tool to your stack."}),`
`]}),`
`,e.jsxs(t.p,{children:["To create API routes, we recommend to simply use your server (such as ",e.jsx(t.a,{href:"https://expressjs.com",children:"Express.js"})," or ",e.jsx(t.a,{href:"https://hono.dev",children:"Hono"}),") to create new HTTP ",e.jsx(t.code,{children:"GET"}),"/",e.jsx(t.code,{children:"POST"})," endpoints."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Make sure Vike's middleware is your last middleware. (Otherwise ",e.jsx(o,{href:"/renderPage",children:"Vike's middleware"}),", being a catch-all middleware, overrides your API routes.)"]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["You may need to manually restart your server for changes to take effect, see ",e.jsx(t.a,{href:"https://github.com/vikejs/vike/issues/562",children:"#562"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(o,{href:"/RPC"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(o,{href:"/data-fetching"}),`
`]}),`
`]})]})}function l(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:l,pageSectionsExport:a},Symbol.toStringTag,{value:"Module"})),g={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/api-routes/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{g as configValuesSerialized};
