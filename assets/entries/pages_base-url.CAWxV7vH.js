import{a,j as s,b as n,o as c,i as t}from"../chunks/chunk-QQHFLgus.js";import"../chunks/chunk-7E_FEcaS.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */function r({prop:l}){a(!l.startsWith("import")),a(!l.startsWith("."));const e="import.meta."+l;return s.jsx("code",{children:e})}const i=[{pageSectionId:"base",pageSectionLevel:2,pageSectionTitle:"`base`"},{pageSectionId:"baseassets",pageSectionLevel:2,pageSectionTitle:"`baseAssets`"},{pageSectionId:"baseserver",pageSectionLevel:2,pageSectionTitle:"`baseServer`"}];function o(l){const e={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"What is the Base URL?"}),` The Base URL (aka Public Path) configures the URL root of your website.
For example, instead of serving your website at `,s.jsx(e.code,{children:"https://example.org/*"})," (the Base URL is ",s.jsx(e.code,{children:"/"}),"), you can serve your website at ",s.jsx(e.code,{children:"https://example.org/some-base/*"})," by setting the Base URL to ",s.jsx(e.code,{children:"/some-base/"}),"."]}),`
`]}),`
`,s.jsx("h2",{id:"base",children:s.jsx("code",{children:"base"})}),`
`,s.jsx(e.p,{children:"To change the Base URL:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:["Set ",s.jsx(e.a,{href:"https://vitejs.dev/config/shared-options.html#base",children:s.jsx(e.code,{children:"vite.config.js#base"})}),".",`
`,s.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(e.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:s.jsxs(e.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"// vite.config.js"})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"export"}),s.jsx(e.span,{style:{color:"#D73A49"},children:" default"}),s.jsx(e.span,{style:{color:"#24292E"},children:" {"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"  base: "}),s.jsx(e.span,{style:{color:"#032F62"},children:"'/some-base/'"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:["Use ",s.jsx(e.a,{href:"https://vitejs.dev/guide/build.html#public-base-path",children:s.jsx(r,{prop:"env.BASE_URL"})})," to implement a ",s.jsx(e.code,{children:"<Link>"})," component that prepends the Base URL. Example: ",s.jsx(n,{path:"/examples/base-url/components/Link.jsx"}),"."]}),`
`,s.jsxs(e.li,{children:["Use ",s.jsx(r,{prop:"env.BASE_URL"})," for referencing static assets living in ",s.jsx(e.a,{href:"/static-directory#public",children:s.jsx(e.code,{children:"public/"})}),". Example: ",s.jsx(n,{path:"/examples/base-url/renderer/+onRenderHtml.jsx"}),"."]}),`
`]}),`
`,s.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(e.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"html","data-theme":"github-light",children:s.jsxs(e.code,{"data-language":"html","data-theme":"github-light",style:{display:"grid"},children:[s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"<!-- view-source:https://my-website.com/some-base/ -->"})}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"<!-- Note how the website is served at https://my-website.com/some-base/ and"})}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"     how the asset URLs are prepended with the Base URL /some-base/ -->"})}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"<"}),s.jsx(e.span,{style:{color:"#22863A"},children:"html"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"  <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"head"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"link"}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"/some-base/logo.svg"'}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" rel"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"icon"'}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"link"}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"/some-base/style.css"'}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" rel"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"stylesheet"'}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" type"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"text/css"'}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"  </"}),s.jsx(e.span,{style:{color:"#22863A"},children:"head"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"  <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"body"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"nav"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"      <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"/some-base/"'}),s.jsx(e.span,{style:{color:"#24292E"},children:">Landing Page</"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"      <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"/some-base/about"'}),s.jsx(e.span,{style:{color:"#24292E"},children:">About Page</"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    </"}),s.jsx(e.span,{style:{color:"#22863A"},children:"nav"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"script"}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" src"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"/some-base/script.js"'}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" type"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"module"'}),s.jsx(e.span,{style:{color:"#24292E"},children:"></"}),s.jsx(e.span,{style:{color:"#22863A"},children:"script"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"  </"}),s.jsx(e.span,{style:{color:"#22863A"},children:"body"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"</"}),s.jsx(e.span,{style:{color:"#22863A"},children:"html"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]})]})})}),`
`,s.jsx(e.p,{children:"Example:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(n,{path:"/examples/base-url/"}),`
`]}),`
`]}),`
`,s.jsx("h2",{id:"baseassets",children:s.jsx("code",{children:"baseAssets"})}),`
`,s.jsxs(e.p,{children:["You can change the Base URL only for your assets by using the ",s.jsx(e.code,{children:"baseAssets"})," setting. The Base URL of the URL of your pages is left unchanged."]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:["The most common use case for using ",s.jsx(e.code,{children:"baseAssets"})," is when deploying assets to a CDN."]}),`
`]}),`
`,s.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(e.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:s.jsxs(e.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"// vite.config.js"})}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E"},children:" vike "}),s.jsx(e.span,{style:{color:"#D73A49"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62"},children:" 'vike/plugin'"})]}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"export"}),s.jsx(e.span,{style:{color:"#D73A49"},children:" default"}),s.jsx(e.span,{style:{color:"#24292E"},children:" {"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"  plugins: ["})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"    vike"}),s.jsx(e.span,{style:{color:"#24292E"},children:"({"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"      baseAssets: "}),s.jsx(e.span,{style:{color:"#032F62"},children:"'https://cdn.example.org/my-website-assets/'"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"    })"})}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"  ]"})}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,s.jsxs(e.p,{children:["Note how the Base URL of the URL of your pages isn't changed: your website is still served at ",s.jsx(e.code,{children:"https://my-website.com/*"})," (the Base URL is still ",s.jsx(e.code,{children:"/"}),")."]}),`
`,s.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(e.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"html","data-theme":"github-light",children:s.jsxs(e.code,{"data-language":"html","data-theme":"github-light",style:{display:"grid"},children:[s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"<!-- view-source:https://my-website.com/ -->"})}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"<"}),s.jsx(e.span,{style:{color:"#22863A"},children:"html"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"  <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"head"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"    <!-- Note how the Base URL is 'https://cdn.example.org/my-website-assets/' -->"})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"link"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"      href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/logo.svg"'})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"      rel"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"icon"'})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"    >"})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"link"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"      href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/style.css"'})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"      rel"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"stylesheet"'})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"      type"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"text/css"'})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"    >"})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"  </"}),s.jsx(e.span,{style:{color:"#22863A"},children:"head"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"  <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"body"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"nav"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"      <!-- Note how the Base URL is '/' -->"})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"      <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"/"'}),s.jsx(e.span,{style:{color:"#24292E"},children:">Landing Page</"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"      <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"/about"'}),s.jsx(e.span,{style:{color:"#24292E"},children:">About Page</"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    </"}),s.jsx(e.span,{style:{color:"#22863A"},children:"nav"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"    <!-- Note how the Base URL is 'https://cdn.example.org/my-website-assets/' -->"})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"script"}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" src"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/script.js"'}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" type"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"module"'}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"  </"}),s.jsx(e.span,{style:{color:"#24292E"},children:"body"}),s.jsx(e.span,{style:{color:"#D73A49"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"</"}),s.jsx(e.span,{style:{color:"#24292E"},children:"html"}),s.jsx(e.span,{style:{color:"#D73A49"},children:">"})]})]})})}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:["You can use ",s.jsx(e.code,{children:"process.env.BASE_ASSETS"})," and ",s.jsx(r,{prop:"env.BASE_ASSETS"})," to access the ",s.jsx(e.code,{children:"baseAssets"})," value in your code."]}),`
`]}),`
`,s.jsx(e.p,{children:"Example:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(n,{path:"/examples/base-url-cdn/"}),`
`]}),`
`]}),`
`,s.jsxs(e.p,{children:["By default, the ",s.jsx(e.code,{children:"baseAssets"})," setting applies to both development and production. You can apply it only to production by using ",s.jsx(e.code,{children:"process.env.NODE_ENV"}),":"]}),`
`,s.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(e.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:s.jsxs(e.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"// vite.config.js"})}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E"},children:" vike "}),s.jsx(e.span,{style:{color:"#D73A49"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62"},children:" 'vike/plugin'"})]}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5"},children:" isProduction"}),s.jsx(e.span,{style:{color:"#D73A49"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E"},children:" process.env."}),s.jsx(e.span,{style:{color:"#005CC5"},children:"NODE_ENV"}),s.jsx(e.span,{style:{color:"#D73A49"},children:" ==="}),s.jsx(e.span,{style:{color:"#032F62"},children:" 'production'"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"const"}),s.jsx(e.span,{style:{color:"#005CC5"},children:" baseAssets"}),s.jsx(e.span,{style:{color:"#D73A49"},children:" ="}),s.jsx(e.span,{style:{color:"#24292E"},children:" isProduction "}),s.jsx(e.span,{style:{color:"#D73A49"},children:"?"}),s.jsx(e.span,{style:{color:"#032F62"},children:" 'https://cdn.example.org/my-website-assets/'"}),s.jsx(e.span,{style:{color:"#D73A49"},children:" :"}),s.jsx(e.span,{style:{color:"#005CC5"},children:" undefined"})]}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"export"}),s.jsx(e.span,{style:{color:"#D73A49"},children:" default"}),s.jsx(e.span,{style:{color:"#24292E"},children:" {"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"  plugins: ["})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"    vike"}),s.jsx(e.span,{style:{color:"#24292E"},children:"({ baseAssets })"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"  ]"})}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:["There is ",s.jsx(e.a,{href:"https://github.com/vikejs/vike/issues/1794",children:"work-in-progress to apply it only in production by default"}),"."]}),`
`]}),`
`,s.jsx("h2",{id:"baseserver",children:s.jsx("code",{children:"baseServer"})}),`
`,s.jsx(e.p,{children:"You can do both:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Deploy your static assets to a CDN using the ",s.jsx(e.code,{children:"baseAssets"})," setting."]}),`
`,s.jsxs(e.li,{children:["Change the Base URL of your server using the ",s.jsx(e.code,{children:"baseServer"})," setting."]}),`
`]}),`
`,s.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(e.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:s.jsxs(e.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"// vite.config.js"})}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"import"}),s.jsx(e.span,{style:{color:"#24292E"},children:" vike "}),s.jsx(e.span,{style:{color:"#D73A49"},children:"from"}),s.jsx(e.span,{style:{color:"#032F62"},children:" 'vike/plugin'"})]}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"export"}),s.jsx(e.span,{style:{color:"#D73A49"},children:" default"}),s.jsx(e.span,{style:{color:"#24292E"},children:" {"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"  plugins: ["})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"    vike"}),s.jsx(e.span,{style:{color:"#24292E"},children:"({"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"      baseAssets: "}),s.jsx(e.span,{style:{color:"#032F62"},children:"'https://cdn.example.org/my-website-assets/'"}),s.jsx(e.span,{style:{color:"#24292E"},children:","})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"      baseServer: "}),s.jsx(e.span,{style:{color:"#032F62"},children:"'/some-base/'"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"    })"})}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"  ]"})}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,s.jsx(e.figure,{"data-rehype-pretty-code-figure":"",children:s.jsx(e.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"html","data-theme":"github-light",children:s.jsxs(e.code,{"data-language":"html","data-theme":"github-light",style:{display:"grid"},children:[s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"<!-- view-source:https://my-website.com/ -->"})}),`
`,s.jsx(e.span,{"data-line":"",children:" "}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"<"}),s.jsx(e.span,{style:{color:"#22863A"},children:"html"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"  <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"head"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"    <!-- Note how the Base URL is 'https://cdn.example.org/my-website-assets/' -->"})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"link"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"      href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/logo.svg"'})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"      rel"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"icon"'})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"    >"})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"link"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"      href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/style.css"'})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"      rel"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"stylesheet"'})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#6F42C1"},children:"      type"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"text/css"'})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#24292E"},children:"    >"})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"  </"}),s.jsx(e.span,{style:{color:"#22863A"},children:"head"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"  <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"body"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"nav"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"      <!-- Note how the Base URL is '/some-base/' -->"})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"      <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"/some-base/"'}),s.jsx(e.span,{style:{color:"#24292E"},children:">Landing Page</"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"      <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" href"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"/some-base/about"'}),s.jsx(e.span,{style:{color:"#24292E"},children:">About Page</"}),s.jsx(e.span,{style:{color:"#22863A"},children:"a"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    </"}),s.jsx(e.span,{style:{color:"#22863A"},children:"nav"}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsx(e.span,{"data-line":"",children:s.jsx(e.span,{style:{color:"#6A737D"},children:"    <!-- Note how the Base URL is 'https://cdn.example.org/my-website-assets/' -->"})}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#24292E"},children:"    <"}),s.jsx(e.span,{style:{color:"#22863A"},children:"script"}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" src"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"https://cdn.example.org/my-website-assets/script.js"'}),s.jsx(e.span,{style:{color:"#6F42C1"},children:" type"}),s.jsx(e.span,{style:{color:"#24292E"},children:"="}),s.jsx(e.span,{style:{color:"#032F62"},children:'"module"'}),s.jsx(e.span,{style:{color:"#24292E"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"  </"}),s.jsx(e.span,{style:{color:"#24292E"},children:"body"}),s.jsx(e.span,{style:{color:"#D73A49"},children:">"})]}),`
`,s.jsxs(e.span,{"data-line":"",children:[s.jsx(e.span,{style:{color:"#D73A49"},children:"</"}),s.jsx(e.span,{style:{color:"#24292E"},children:"html"}),s.jsx(e.span,{style:{color:"#D73A49"},children:">"})]})]})})}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:["You can use ",s.jsx(e.code,{children:"process.env.BASE_SERVER"})," and ",s.jsx(r,{prop:"env.BASE_SERVER"})," to access the ",s.jsx(e.code,{children:"baseServer"})," value in your code."]}),`
`]}),`
`,s.jsx(e.p,{children:"Example:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(n,{path:"/examples/base-url-server/"}),`
`]}),`
`]})]})}function d(l={}){const{wrapper:e}=l.components||{};return e?s.jsx(e,{...l,children:s.jsx(o,{...l})}):o(l)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:i},Symbol.toStringTag,{value:"Module"})),m={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:c}},NavHeader:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+NavHeader.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:t}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/base-url/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}}};export{m as configValuesSerialized};
