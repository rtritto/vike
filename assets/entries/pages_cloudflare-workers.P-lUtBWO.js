import{j as e,b as n,o as s,i as t}from"../chunks/chunk-QQHFLgus.js";import{L as i}from"../chunks/chunk-DJTIoNMK.js";/* empty css                      */import{E as a}from"../chunks/chunk-DFhVjdo2.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-7E_FEcaS.js";/* empty css                      */const d=[{pageSectionId:"examples",pageSectionLevel:2,pageSectionTitle:"Examples"},{pageSectionId:"wrangler",pageSectionLevel:2,pageSectionTitle:"Wrangler"},{pageSectionId:"vite-plugin-cloudflare",pageSectionLevel:2,pageSectionTitle:"vite-plugin-cloudflare"},{pageSectionId:"extend-1mb-limit",pageSectionLevel:2,pageSectionTitle:"Extend 1MB limit"},{pageSectionId:"cloudflare-pages",pageSectionLevel:2,pageSectionTitle:"Cloudflare Pages"},{pageSectionId:"development",pageSectionLevel:2,pageSectionTitle:"Development"},{pageSectionId:"universal-fetch",pageSectionLevel:2,pageSectionTitle:"Universal `fetch()`"}];function o(l){const r={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsxs(r.p,{children:["You can use Vike with ",e.jsx(r.a,{href:"https://workers.cloudflare.com",children:"Cloudflare Workers"}),"."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["For a much improved DX, instead of directly using Cloudflare Workers, we recommend using ",e.jsx(i,{href:"/cloudflare-pages#full-stack",doNotInferSectionTitle:!0}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"examples",children:"Examples"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["React: ",e.jsx(n,{path:"/examples/cloudflare-workers-react/"})]}),`
`,e.jsxs(r.li,{children:["React + SSR Streaming: ",e.jsx(n,{path:"/examples/cloudflare-workers-react-full/"})]}),`
`,e.jsxs(r.li,{children:["Vue: ",e.jsx(n,{path:"/examples/cloudflare-workers-vue/"})]}),`
`]}),`
`,e.jsx("h2",{id:"wrangler",children:"Wrangler"}),`
`,e.jsx(r.p,{children:"Cloudflare Workers requires our entire worker code to be bundled into a single file."}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:'Cloudflare uses the term "worker code" to denote server code that is run on its edge infrastructure.'}),`
`]}),`
`,e.jsxs(r.p,{children:["We recommend using ",e.jsx(r.a,{href:"https://github.com/cloudflare/wrangler2",children:"Wrangler v2"})," (the v2 uses ",e.jsx(r.a,{href:"https://esbuild.github.io/",children:"esbuild"})," under the hood)."]}),`
`,e.jsx("h2",{id:"vite-plugin-cloudflare",children:"vite-plugin-cloudflare"}),`
`,e.jsxs(r.p,{children:["We can also use ",e.jsx(r.a,{href:"https://github.com/Aslemammad/vite-plugin-cloudflare",children:"vite-plugin-cloudflare"})," which enables us to simply use ",e.jsx(r.code,{children:"$ vite build"})," and ",e.jsx(r.code,{children:"$ vite dev"})," to build and develop our worker code (including HMR support!)."]}),`
`,e.jsxs(r.p,{children:["Example: ",e.jsxs(r.a,{href:"https://github.com/Aslemammad/vite-plugin-cloudflare/tree/main/examples/vite-plugin-ssr",children:["GitHub > ",e.jsx(r.code,{children:"Aslemammad/vite-plugin-cloudflare"})," > ",e.jsx(r.code,{children:"examples/vite-plugin-ssr/"})]}),"."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["vite-plugin-ssr was the ",e.jsx(r.a,{href:"https://vite-plugin-ssr.com/vike",children:"previous name of Vike"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"extend-1mb-limit",children:"Extend 1MB limit"}),`
`,e.jsx(r.p,{children:"The bundle size of our worker should not exceed 1MB, but we can request sizes of up to 100MB and beyond:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://www.cloudflare.com/larger-scripts-on-workers-early-access/",children:"Cloudflare Workers > Larger Scripts"})}),`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://developers.cloudflare.com/workers/platform/limits/#worker-size",children:"Cloudflare Workers > Limits > Worker Size"})}),`
`]}),`
`,e.jsx("h2",{id:"cloudflare-pages",children:"Cloudflare Pages"}),`
`,e.jsxs(r.p,{children:["We can also use ",e.jsx(r.a,{href:"https://developers.cloudflare.com/pages/",children:"Cloudflare Pages"})," to deploy our Vike app."]}),`
`,e.jsxs(r.p,{children:["To deploy our SSR worker, we use a ",e.jsx(r.a,{href:"https://developers.cloudflare.com/pages/platform/functions/",children:"Cloudflare Pages Function"}),"."]}),`
`,e.jsx(r.p,{children:"Example:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx(a,{timestamp:"2022.04",repo:"Immortalin/vite-plugin-ssr-cloudflare-pages-demo"}),`
`]}),`
`]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["vite-plugin-ssr was the ",e.jsx(r.a,{href:"https://vite-plugin-ssr.com/vike",children:"previous name of Vike"}),"."]}),`
`]}),`
`,e.jsx(r.p,{children:"See also:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:e.jsx(r.a,{href:"https://blog.cloudflare.com/wrangler-v2-beta/",children:"Wrangler 2.0 — a new developer experience for Cloudflare Workers"})}),`
`]}),`
`,e.jsx("h2",{id:"development",children:"Development"}),`
`,e.jsx(r.p,{children:"For a significantly faster development experience, we recommend, whenever possible, using Vite's development server instead of wrangler (or an Express.js server)."}),`
`,e.jsx(r.p,{children:"This means:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["We skip ",e.jsx(r.code,{children:"wrangler"})," / Cloudflare Workers altogether while developing our app."]}),`
`,e.jsxs(r.li,{children:["We use ",e.jsx(r.code,{children:"wrangler dev"})," to preview our worker."]}),`
`,e.jsxs(r.li,{children:["We use ",e.jsx(r.code,{children:"wrangler publish"})," to deploy our worker to Cloudflare Workers."]}),`
`]}),`
`,e.jsxs(r.p,{children:["See the setup of the ",e.jsx(r.a,{href:"#examples",children:"examples"}),"."]}),`
`,e.jsxs("h2",{id:"universal-fetch",children:["Universal ",e.jsx("code",{children:"fetch()"})]}),`
`,e.jsxs(r.p,{children:["When using Node.js for development and Cloudflare Workers for production, we may need a ",e.jsx(r.code,{children:"fetch()"})," function that works in both environments."]}),`
`,e.jsxs(r.p,{children:["But libraries such as ",e.jsx(r.code,{children:"node-fetch"})," or ",e.jsx(r.code,{children:"cross-fetch"})," usually don't work with Cloudflare Workers."]}),`
`,e.jsxs(r.p,{children:["What we can do is to define a fetch function at ",e.jsx(r.code,{children:"pageContext.fetch"}),` that works in all environments.
The trick is to add a different `,e.jsx(r.code,{children:"fetch()"})," implementation to ",e.jsx(r.code,{children:"pageContextInit"})," at ",e.jsx(i,{text:e.jsx(r.code,{children:"renderPage(pageContextInit)"}),href:"/renderPage"}),"."]}),`
`,e.jsxs(r.p,{children:["Example: ",e.jsx(n,{path:"/examples/cloudflare-workers-react-full#universal-fetch"}),"."]})]})}function c(l={}){const{wrapper:r}=l.components||{};return r?e.jsx(r,{...l,children:e.jsx(o,{...l})}):o(l)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),b={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:t}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/cloudflare-workers/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{b as configValuesSerialized};
