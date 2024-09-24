import{j as e,o as n,i as r}from"../chunks/chunk-QQHFLgus.js";import{L as o}from"../chunks/chunk-DJTIoNMK.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-7E_FEcaS.js";/* empty css                      */const l=[];function s(t){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",ol:"ol",p:"p",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(i.p,{children:["We can use Vike as well with ",e.jsx(i.a,{href:"https://hapi.dev/",children:"hapi"}),"."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["hapi is an ",e.jsx(i.a,{href:"https://expressjs.com/",children:"Express.js"})," alternative."]}),`
`]}),`
`,e.jsx(i.p,{children:"We recommend the following setup."}),`
`,e.jsxs(i.p,{children:["In development, we use ",e.jsx(i.em,{children:"two"})," servers:"]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:["We use Vite's development server (",e.jsx(i.code,{children:"$ vite"}),"). (It automatically includes Vike)."]}),`
`,e.jsxs(i.li,{children:["We use our hapi server ",e.jsx(i.em,{children:"without"})," Vite nor Vike."]}),`
`]}),`
`,e.jsx(i.p,{children:"This means that in development, Vite is responsible for serving the entire frontend, while our hapi server is responsible only for serving the backend."}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:"When using Express.js we usually integrate the Vite development middleware to Express.js but we cannot do that with hapi, because hapi doesn't support connect middlewares (the Vite development middleware is a connect middleware). See"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/hapijs/hapi/issues/4369",children:"GitHub > hapi > Support Vite (#4369)"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/hapijs/hapi/issues/80",children:"GitHub > hapi > Express/Connect middleware support (#80)"})}),`
`]}),`
`]}),`
`,e.jsxs(i.p,{children:["In production, we use only ",e.jsx(i.em,{children:"one"})," server:"]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:["Our hapi server that serves the backend ",e.jsx(i.em,{children:"as well"})," as the frontend: it serves the static files living at ",e.jsx(i.code,{children:"dist/client/"})," and does server-side rendering by using Vike's ",e.jsx(o,{text:e.jsx(i.code,{children:"renderPage()"}),href:"/renderPage"}),"."]}),`
`]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["See ",e.jsxs(i.a,{href:"https://github.com/vikejs/vike/issues/366#issuecomment-1189144446",children:["GitHub > ",e.jsx(i.code,{children:"vikejs/vike"})," > hapi (#366)"]}),"."]}),`
`]})]})}function a(t={}){const{wrapper:i}=t.components||{};return i?e.jsx(i,{...t,children:e.jsx(s,{...t})}):s(t)}const d=Object.freeze(Object.defineProperty({__proto__:null,default:a,pageSectionsExport:l},Symbol.toStringTag,{value:"Module"})),w={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:n}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:r}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/hapi/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}}};export{w as configValuesSerialized};
