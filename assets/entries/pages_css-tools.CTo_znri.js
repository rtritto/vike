import{j as e,o as t,i as o}from"../chunks/chunk-QQHFLgus.js";import{L as n}from"../chunks/chunk-DJTIoNMK.js";/* empty css                      */import{U as i}from"../chunks/chunk-cioQ90Sa.js";import{I as a}from"../chunks/chunk-Bweo2Rcm.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-7E_FEcaS.js";/* empty css                      */const c=[{pageSectionId:"collect-styles-upon-ssr",pageSectionLevel:2,pageSectionTitle:"Collect styles upon SSR"},{pageSectionId:"with-vike-react-vue-solid",pageSectionLevel:3,pageSectionTitle:"With `vike-{react,vue,solid}`"},{pageSectionId:"without-vike-react-vue-solid",pageSectionLevel:3,pageSectionTitle:"Without `vike-{react,vue,solid}`"}];function r(l){const s={a:"a",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"In principle, you can use Vike with any CSS/styling tool. For example:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/tailwind-css"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/daisyui"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/compiled"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/vuetify"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/styled-components"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/styled-jsx"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/mui"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/primereact"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/nextui"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/bootstrap"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/grommet"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/mantine"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/sass"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/panda-css",children:"Integration > Panda CSS"}),`
`]}),`
`]}),`
`,e.jsx(a,{}),`
`,e.jsx("h2",{id:"collect-styles-upon-ssr",children:"Collect styles upon SSR"}),`
`,e.jsxs(s.p,{children:["If you use a CSS-in-JS tool, then you need to make sure to avoid ",e.jsxs(s.a,{href:"https://en.wikipedia.org/wiki/Flash_of_unstyled_content",children:["FOUC (",e.jsx(s.strong,{children:"f"}),"lash ",e.jsx(s.strong,{children:"o"}),"f ",e.jsx(s.strong,{children:"u"}),"nstyled ",e.jsx(s.strong,{children:"c"}),"ontent)"]}),"."]}),`
`,e.jsx(s.p,{children:"You avoid FOUC by collecting the page's styles upon SSR and add the collected styles to the HTML. (So that the browser loads the styles early.)"}),`
`,e.jsxs("h3",{id:"with-vike-react-vue-solid",children:["With ",e.jsx("code",{children:"vike-{react,vue,solid}"})]}),`
`,e.jsxs(s.p,{children:["You cannot (yet) collect and inject styles when using ",e.jsx(i,{name:!0}),". Adding support for this is work-in-progress, see ",e.jsx(s.a,{href:"https://github.com/vikejs/vike-vue/issues/141",children:"#141 - CSS-in-JS with SSR"}),"."]}),`
`,e.jsxs("h3",{id:"without-vike-react-vue-solid",children:["Without ",e.jsx("code",{children:"vike-{react,vue,solid}"})]}),`
`,e.jsxs(s.p,{children:["You can collect and inject the page's styles inside your ",e.jsxs(n,{href:"/onRenderHtml",children:[e.jsx(s.code,{children:"onRenderHtml()"})," hook"]}),"."]}),`
`,e.jsx(s.p,{children:"React example:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"jsx","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"jsx","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /renderer/+onRenderHtml.jsx"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" ReactDOMServer "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'react-dom/server'"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" React "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'react'"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { escapeInject, dangerouslySkipEscape } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'vike/server'"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { CssCollector } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" 'some-css-in-js-tool'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { onRenderHtml }"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"async"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" onRenderHtml"}),e.jsx(s.span,{style:{color:"#24292E"},children:"("}),e.jsx(s.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(s.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { "}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Page"}),e.jsx(s.span,{style:{color:"#24292E"},children:" } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#24292E"},children:" pageContext"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" page"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E"},children:" <"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Page"}),e.jsx(s.span,{style:{color:"#24292E"},children:" />"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" collect"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49"},children:" new"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" CssCollector"}),e.jsx(s.span,{style:{color:"#24292E"},children:"()"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" pageHtml"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E"},children:" ReactDOMServer."}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"renderToString"}),e.jsx(s.span,{style:{color:"#24292E"},children:"("}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"collect"}),e.jsx(s.span,{style:{color:"#24292E"},children:"(page))"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  return"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" escapeInject"}),e.jsx(s.span,{style:{color:"#032F62"},children:"`<!DOCTYPE html>"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"    <html>"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"      <head>"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"        <style>${"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"dangerouslySkipEscape"}),e.jsx(s.span,{style:{color:"#032F62"},children:"("}),e.jsx(s.span,{style:{color:"#24292E"},children:"collect"}),e.jsx(s.span,{style:{color:"#032F62"},children:"."}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"getCSS"}),e.jsx(s.span,{style:{color:"#032F62"},children:"())"}),e.jsx(s.span,{style:{color:"#032F62"},children:"}</style>"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"      </head>"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"      <body>"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:'        <div id="page-view">${'}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"dangerouslySkipEscape"}),e.jsx(s.span,{style:{color:"#032F62"},children:"("}),e.jsx(s.span,{style:{color:"#24292E"},children:"pageHtml"}),e.jsx(s.span,{style:{color:"#032F62"},children:")"}),e.jsx(s.span,{style:{color:"#032F62"},children:"}</div>"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"      </body>"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"    </html>`"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(s.p,{children:"Examples:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/styled-components"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/grommet"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/styled-jsx"}),`
`]}),`
`]})]})}function d(l={}){const{wrapper:s}=l.components||{};return s?e.jsx(s,{...l,children:e.jsx(r,{...l})}):r(l)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:c},Symbol.toStringTag,{value:"Module"})),E={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:t}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:o}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/css-tools/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}}};export{E as configValuesSerialized};
