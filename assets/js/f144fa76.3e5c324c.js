"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3164],{814:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"getting-started/install/installation-guide-docker","title":"Docker standalone","description":"NSPanelManager docker images are hosted on Docker HUB//hub.docker.com/u/nspanelmanager","source":"@site/docs/getting-started/install/installation-guide-docker.md","sourceDirName":"getting-started/install","slug":"/getting-started/install/installation-guide-docker","permalink":"/docs/getting-started/install/installation-guide-docker","draft":false,"unlisted":false,"editUrl":"https://github.com/NSPManager/NSPanelManager-docs/edit/main/docs/getting-started/install/installation-guide-docker.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Docker standalone","sidebar_position":2},"sidebar":"mainSidebar","previous":{"title":"Home Assistant Add-on","permalink":"/docs/getting-started/install/installation-guide-home-assistant"},"next":{"title":"Configure NSPanel Manager","permalink":"/docs/getting-started/configuration"}}');var r=n(4848),s=n(8453);n(9915),n(5537),n(9329);const l={title:"Docker standalone",sidebar_position:2},i="Docker (standalone)",o={},c=[{value:"Run docker image",id:"run-docker-image",level:2},{value:"Backup",id:"backup",level:2},{value:"Update",id:"update",level:2}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"docker-standalone",children:"Docker (standalone)"})}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsxs)(a.p,{children:["NSPanelManager docker images are hosted on Docker HUB: ",(0,r.jsx)(a.a,{href:"https://hub.docker.com/u/nspanelmanager",children:"https://hub.docker.com/u/nspanelmanager"})]})}),"\n",(0,r.jsx)(a.h2,{id:"run-docker-image",children:"Run docker image"}),"\n",(0,r.jsx)(a.p,{children:"Standard scenario for running the docker image:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'docker run --name nspanelmanager \\\n  -e TZ=Europe/Stockholm \\\n  -v "/nspmdata/":"/data/" \\\n  -p 8000:8000 \\\n  -d nspanelmanager/nspanelmanager-amd64:latest\n'})}),"\n",(0,r.jsxs)(a.admonition,{type:"note",children:[(0,r.jsxs)(a.p,{children:["This example is for an ",(0,r.jsx)(a.code,{children:"x86_64"})," machine placed in the ",(0,r.jsx)(a.code,{children:"Europe/Stockholm"})," timezone. Replace image name and timezone as needed."]}),(0,r.jsx)(a.p,{children:"Following CPU architectures are currently supported:"}),(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"armhf"}),"\n",(0,r.jsx)(a.li,{children:"armv7"}),"\n",(0,r.jsx)(a.li,{children:"aarch64"}),"\n",(0,r.jsx)(a.li,{children:"i386"}),"\n",(0,r.jsx)(a.li,{children:"amd64"}),"\n"]})]}),"\n",(0,r.jsxs)(a.p,{children:["After you executed the command, you can access the NSPanelManager management UI at the IP of the docker host followed by ",(0,r.jsx)(a.code,{children:":8000"}),". (i.e: ",(0,r.jsx)(a.a,{href:"http://localhost:8000",children:"http://localhost:8000"}),")"]}),"\n",(0,r.jsxs)(a.p,{children:["You can now ",(0,r.jsx)(a.a,{href:"./../configuration",children:"configure NSPanelManager"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"backup",children:"Backup"}),"\n",(0,r.jsxs)(a.p,{children:["All NSPanelManager's data are stored within ",(0,r.jsx)(a.code,{children:"/data"})," directory in the docker image. So if you are using the example presented earlier,\nsimply copy ",(0,r.jsx)(a.code,{children:"/nspmdata"})," and you have a backup."]}),"\n",(0,r.jsx)(a.h2,{id:"update",children:"Update"}),"\n",(0,r.jsx)(a.p,{children:"As always, it is recommended to perform a backup of the data before upgrading the docker image."})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9329:(e,a,n)=>{n.d(a,{A:()=>l});n(6540);var t=n(4164);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:a,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:n,children:a})}},5537:(e,a,n)=>{n.d(a,{A:()=>y});var t=n(6540),r=n(4164),s=n(5627),l=n(6347),i=n(372),o=n(604),c=n(1861),u=n(8749);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const r=(0,l.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function g(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,s=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:s}))),[c,d]=m({queryString:n,groupId:r}),[g,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,u.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),b=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:a,block:n,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const a=e.currentTarget,n=o.indexOf(a),r=i[n].value;r!==t&&(c(a),l(r))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function k(e){let{lazy:a,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function j(e){const a=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...a,...e}),(0,x.jsx)(k,{...a,...e})]})}function y(e){const a=(0,f.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(a))}},9915:(e,a,n)=>{n.d(a,{A:()=>l});n(6540);const t="centeredImageContainer_LZL8",r="caption_TNGg";var s=n(4848);const l=e=>{let{src:a,alt:n,width:l="auto",height:i="auto",figureNumber:o}=e;return(0,s.jsxs)("figure",{className:t,children:[(0,s.jsx)("img",{src:a,alt:n,style:{width:l,height:i}}),o&&(0,s.jsxs)("figcaption",{className:r,children:["Figure ",o,": ",n]})]})}}}]);