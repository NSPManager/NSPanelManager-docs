"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9501],{1713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"getting-started/install/installation-guide-unraid","title":"UNRAID App","description":"In order to have access to the NSPanel Manager UNRAID App","source":"@site/docs/getting-started/install/installation-guide-unraid.md","sourceDirName":"getting-started/install","slug":"/getting-started/install/installation-guide-unraid","permalink":"/docs/getting-started/install/installation-guide-unraid","draft":false,"unlisted":false,"editUrl":"https://github.com/NSPManager/NSPanelManager-docs/edit/main/docs/getting-started/install/installation-guide-unraid.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"UNRAID App","sidebar_position":2},"sidebar":"mainSidebar","previous":{"title":"Docker standalone","permalink":"/docs/getting-started/install/installation-guide-docker"},"next":{"title":"Configure NSPanel Manager","permalink":"/docs/getting-started/configuration"}}');var r=n(4848),i=n(8453),l=n(9915);n(5537),n(9329);const s={title:"UNRAID App",sidebar_position:2},o="UNRAID App",u={},c=[{value:"Installation",id:"installation",level:2},{value:"After installation is complete",id:"after-installation-is-complete",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"unraid-app",children:"UNRAID App"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["In order to have access to the NSPanel Manager UNRAID App\nyou first have to ",(0,r.jsx)(t.a,{href:"https://unraid.net/community/apps",children:"install the Community Apps plugin"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(t.p,{children:["Like for any other UNRAID App, simply login to your UNRAID user interface and click on ",(0,r.jsx)(t.strong,{children:"APPS"})," link."]}),"\n",(0,r.jsx)(t.p,{children:"Search for NSPanelManager in Home Automation category and you will find:"}),"\n",(0,r.jsx)(l.A,{src:"/images/doc/unraid/unraid-app-preview.png",alt:"NSPanel Manager UNRAID App preview",figureNumber:1}),"\n",(0,r.jsxs)(t.p,{children:["Then click on ",(0,r.jsx)(t.strong,{children:"Actions"})," and select  ",(0,r.jsx)(t.strong,{children:"Install"}),":"]}),"\n",(0,r.jsx)(l.A,{src:"/images/doc/unraid/unraid-app-install-context-menu.png",alt:"Context menu",figureNumber:2}),"\n",(0,r.jsx)(t.p,{children:"Then configure your app as desired (port and data directory)"}),"\n",(0,r.jsx)(t.h2,{id:"after-installation-is-complete",children:"After installation is complete"}),"\n",(0,r.jsxs)(t.p,{children:["You can now ",(0,r.jsx)(t.a,{href:"./../configuration",children:"configure NSPanelManager"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var i=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>I});var a=n(6540),r=n(4164),i=n(5627),l=n(6347),s=n(372),o=n(604),u=n(1861),c=n(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,d]=f({queryString:n,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=u??g;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function A(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=s[n].value;r!==a&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(A,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function I(e){const t=(0,m.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}}}]);