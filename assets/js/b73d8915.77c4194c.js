"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5392],{1733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"getting-started/flash-nspanel","title":"Flash Sonoff NSPanel","description":"Video guide through","source":"@site/docs/getting-started/flash-nspanel.md","sourceDirName":"getting-started","slug":"/getting-started/flash-nspanel","permalink":"/docs/getting-started/flash-nspanel","draft":false,"unlisted":false,"editUrl":"https://github.com/NSPManager/NSPanelManager-docs/edit/main/docs/getting-started/flash-nspanel.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Flash Sonoff NSPanel","sidebar_position":4},"sidebar":"mainSidebar","previous":{"title":"Supported devices","permalink":"/docs/getting-started/supported-devices"},"next":{"title":"Home Assistant Add-on","permalink":"/docs/getting-started/install/installation-guide-home-assistant"}}');var s=n(4848),i=n(8453),l=n(655),a=n(3228),o=n(1470),c=n(9365);const d={title:"Flash Sonoff NSPanel",sidebar_position:4},h="Flash Sonoff NSPanel",u={},p=[{value:"Video guide through",id:"video-guide-through",level:2},{value:"Detailed guide",id:"detailed-guide",level:2},{value:"NSPanel disassembly",id:"nspanel-disassembly",level:3},{value:"Detach the Power block",id:"detach-the-power-block",level:4},{value:"Remove plastic cover from Screen enclosure",id:"remove-plastic-cover-from-screen-enclosure",level:4},{value:"Now you have two choices, the Lazy way or the Complicated way:",id:"now-you-have-two-choices-the-lazy-way-or-the-complicated-way",level:4},{value:"Prepare for flashing",id:"prepare-for-flashing",level:4},{value:"Connect your USB to UART (TTL) converter",id:"connect-your-usb-to-uart-ttl-converter",level:3},{value:"Flash NSPanel with NSPanelManager custom firmware",id:"flash-nspanel-with-nspanelmanager-custom-firmware",level:3}];function f(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"flash-sonoff-nspanel",children:"Flash Sonoff NSPanel"})}),"\n",(0,s.jsx)(t.h2,{id:"video-guide-through",children:"Video guide through"}),"\n",(0,s.jsx)(l.A,{videoId:"VvbQcUzaS94",author:"Cables & Coffee",description:"Flash Sonoff NSPanel with our custom firmware"}),"\n",(0,s.jsx)(t.h2,{id:"detailed-guide",children:"Detailed guide"}),"\n",(0,s.jsx)(t.h3,{id:"nspanel-disassembly",children:"NSPanel disassembly"}),"\n",(0,s.jsx)(t.h4,{id:"detach-the-power-block",children:"Detach the Power block"}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"Make sure to orient the NSPanel the same way as on the picture\nIt has to be oriented so you can read the text naturally. Doing it this way reduce the risk to hurt the bottom diode."})}),"\n",(0,s.jsx)(a.A,{src:"/images/doc/flash/step1.png",alt:"Detach power block",figureNumber:"1"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Place flat screw driver behind this little metal part and lift it up"}),"\n",(0,s.jsx)(t.li,{children:"Same as previously"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Do it softly until you are able to separate the Power block from the rest of the NSPanel."}),"\n",(0,s.jsx)(t.p,{children:"You should end up with two parts:"}),"\n",(0,s.jsx)(a.A,{src:"/images/doc/flash/step1-output.png",alt:"The detached Power block from the Screen enclosure",figureNumber:"2"}),"\n",(0,s.jsx)(t.h4,{id:"remove-plastic-cover-from-screen-enclosure",children:"Remove plastic cover from Screen enclosure"}),"\n",(0,s.jsx)(a.A,{src:"/images/doc/flash/step2.png",alt:"The plastic cover attached to the case",figureNumber:"3"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Unscrew it with a cross screwdriver"}),"\n",(0,s.jsx)(t.li,{children:"Unscrew it with a cross screwdriver"}),"\n",(0,s.jsx)(t.li,{children:"After that you can detach the plastic cover from the PCB"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"now-you-have-two-choices-the-lazy-way-or-the-complicated-way",children:"Now you have two choices, the Lazy way or the Complicated way:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"1. Lazy way:"})}),"\n",(0,s.jsx)(t.p,{children:"You can flash straight away without detaching the screen from the PCB and remove PCB completely from housing.\nImportant is that you insert the cables and tilt them abit (like in GIF below) so the pins does not come in contact with the metall behind the PCB (risk of short circuiting the USB to TTL). Hold tilted during entire flashing."}),"\n",(0,s.jsx)(a.A,{src:"/images/doc/flash/tiltpanel.gif",alt:"Tilting the PCB to prevent short circuit",figureNumber:"4"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"2. Complicated way (detaching screen from PCB and removing PCB from housing):"})}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"This operation has to be done very smoothly."})}),"\n",(0,s.jsx)(a.A,{src:"/images/doc/flash/step3.png",alt:"The PCB connected to the screen via FFC cable",figureNumber:"5"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Push slightly from left to right the black part of the connector (2mm)"}),"\n",(0,s.jsx)(t.li,{children:"same as point 1."}),"\n",(0,s.jsx)(t.li,{children:"Point 1 and 2 unlocked the FFC cable, it can now be slowly taken out from the connector."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"The black part of the FFC cable do not contains any electronic nor conductive feature, you can catch it with tweezers without fear to damage it."})}),"\n",(0,s.jsx)(t.h4,{id:"prepare-for-flashing",children:"Prepare for flashing"}),"\n",(0,s.jsxs)(t.p,{children:["In order to get the ESP32 enter in flash mode, ",(0,s.jsx)(t.code,{children:"GPIO0"}),", noted ",(0,s.jsx)(t.code,{children:"IO0"})," on the PCB has to be connected to ",(0,s.jsx)(t.code,{children:"GND"}),".\nEither connect a cable between ",(0,s.jsx)(t.code,{children:"IO0"})," and ",(0,s.jsx)(t.code,{children:"GND"})," (2) as in picture below:"]}),"\n",(0,s.jsx)(a.A,{src:"/images/doc/flash/step4.png",alt:"The PCB connected to the screen via FFC cable",figureNumber:"6"}),"\n",(0,s.jsx)(t.p,{children:"or add an extra cable to Ground pin on USB to TTL as in picture below (white cable):"}),"\n",(0,s.jsx)(a.A,{src:"/images/doc/flash/extraground.JPG",alt:"Extra ground cable",figureNumber:"7"}),"\n",(0,s.jsx)(t.h3,{id:"connect-your-usb-to-uart-ttl-converter",children:"Connect your USB to UART (TTL) converter"}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsx)(t.p,{children:"Make sure to use the 3v3 (not 5V), this can generally be configured with a Jumper up on the USB to UART converter."})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Connect the USB to UART convert to the PCB:"}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"USB-UART PIN"}),(0,s.jsx)(t.th,{children:"NSPanel PCB PIN"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"VCC"}),(0,s.jsx)(t.td,{children:"VCC (Symbolized by a square on the PCB)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RX"}),(0,s.jsx)(t.td,{children:"TX"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"TX"}),(0,s.jsx)(t.td,{children:"RX"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GND"}),(0,s.jsx)(t.td,{children:"GND"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Notice that RX and TX pins have to be inverted between the devices: it is not TX -> TX, RX -> RX (See upper table)."})}),"\n",(0,s.jsx)(t.h3,{id:"flash-nspanel-with-nspanelmanager-custom-firmware",children:"Flash NSPanel with NSPanelManager custom firmware"}),"\n",(0,s.jsxs)(t.p,{children:["First, download the latest firmware ",(0,s.jsx)(t.code,{children:"merged-flash.bin"})," from ",(0,s.jsx)(t.a,{href:"https://github.com/NSPManager/NSPanelManager/raw/refs/heads/main/firmware/NSPanelManagerFirmware/merged-flash.bin",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Then, flash the firmware with your tool of choice:"}),"\n",(0,s.jsxs)(o.A,{groupId:"flashing-tool",queryString:!0,children:[(0,s.jsxs)(c.A,{value:"ESPHOMEWEB",label:"ESP Home Web (Chrome or Edge)",children:[(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Go to ",(0,s.jsx)(t.a,{href:"https://web.esphome.io/",children:"https://web.esphome.io/"})," (not supported in Firefox)"]}),"\n",(0,s.jsx)(t.li,{children:"Connect USB to TTL to computer"}),"\n",(0,s.jsx)(t.li,{children:"Press Connect (choose correct USB device)"}),"\n",(0,s.jsx)(t.li,{children:"Press Install"}),"\n",(0,s.jsx)(t.li,{children:"Press Choose file..."}),"\n",(0,s.jsx)(t.li,{children:"Choose .bin file to flash"}),"\n",(0,s.jsx)(t.li,{children:"Press Install"}),"\n",(0,s.jsx)(t.li,{children:"Wait for flashing to complete"}),"\n"]}),(0,s.jsx)(a.A,{src:"/images/doc/flash/esphomeweb.jpg"})]}),(0,s.jsx)(c.A,{value:"Espressif",label:"Espressif tool (Windows)",children:(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Download Espressif tool from here: ",(0,s.jsx)(t.a,{href:"https://www.espressif.com/en/support/download/other-tools",children:"https://www.espressif.com/en/support/download/other-tools"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Open the tool and choose to flash an ",(0,s.jsx)(t.code,{children:"ESP32 chip"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click on the ",(0,s.jsx)(t.code,{children:"..."})," button and select the firmware you downloaded at step 1 called ",(0,s.jsx)(t.code,{children:"merged-flash.bin"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["enter ",(0,s.jsx)(t.code,{children:"0x0"})," as the upload address."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Check the first checkbox next to the firmware file"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click the ",(0,s.jsx)(t.code,{children:"START"})," button and wait until it writes ",(0,s.jsx)(t.code,{children:"FINISH"}),"."]}),"\n",(0,s.jsx)(a.A,{src:"/images//doc/esp_flash_download_tool.png"}),"\n"]}),"\n"]})}),(0,s.jsxs)(c.A,{value:"esptool",label:"ESPtool",children:[(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Open a terminal."}),"\n",(0,s.jsxs)(t.li,{children:["Navigate to the directory where you saved the ",(0,s.jsx)(t.code,{children:"merged_flash.bin"}),"-file."]}),"\n",(0,s.jsxs)(t.li,{children:["To determine if you have selected the right port, run ",(0,s.jsx)(t.code,{children:"esptool.py flash_id --port <port>"}),".\nYou will have to replace ",(0,s.jsx)(t.code,{children:"<port>"})," with the actual port connected to the NSPanel.\nThis will do a check and see if the tool can communicate with the NSPanel."]}),"\n",(0,s.jsxs)(t.li,{children:["Run ",(0,s.jsx)(t.code,{children:"esptool.py --baud 921600 --port /dev/ttyUSB0 write_flash 0x0 merged_flash.bin"}),".\nYou will have to replace ",(0,s.jsx)(t.code,{children:"/dev/ttyUSB0"})," with the actual port connected to the NSPanel."]}),"\n"]}),(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["On Windows it might be just ",(0,s.jsx)(t.code,{children:"esptool"})," without the ",(0,s.jsx)(t.code,{children:".py"})," at the end."]})}),(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["On Windows ",(0,s.jsx)(t.code,{children:"/dev/ttyUSB0"})," will have to be replaced by something like ",(0,s.jsx)(t.code,{children:"COM4"}),". If using MacOS or Linux the\nport will be something similar to ",(0,s.jsx)(t.code,{children:"/dev/ttyUSB0"}),"."]})})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"After the flash of the firmware, you will not see any visible change on the NSPanel display this is normal at this stage."})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var i=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(6540),s=n(4164),i=n(3104),l=n(6347),a=n(205),o=n(7485),c=n(1682),d=n(679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,h]=f({queryString:n,groupId:s}),[m,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),g=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),s=a[n].value;s!==r&&(c(t),l(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:i}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,j.jsx)(b,{...t,...e}),(0,j.jsx)(w,{...t,...e})]})}function y(e){const t=(0,x.A)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(t))}},3228:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);const r="centeredImageContainer_LZL8",s="caption_TNGg";var i=n(4848);const l=e=>{let{src:t,alt:n,width:l="auto",height:a="auto",figureNumber:o}=e;return(0,i.jsxs)("figure",{className:r,children:[(0,i.jsx)("img",{src:t,alt:n,style:{width:l,height:a}}),o&&(0,i.jsxs)("figcaption",{className:s,children:["Figure ",o,": ",n]})]})}},655:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4848);const s=e=>{let{videoId:t,author:n,description:s,aspectRatio:i="56.25%"}=e;return(0,r.jsxs)("div",{style:{margin:"20px 0"},children:[(0,r.jsx)("div",{style:{position:"relative",paddingBottom:i,height:0},children:(0,r.jsx)("iframe",{src:`https://www.youtube.com/embed/${t}`,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),(0,r.jsxs)("div",{style:{textAlign:"center",marginTop:"10px",fontSize:"0.9rem"},children:[n&&(0,r.jsxs)("p",{style:{fontStyle:"italic",margin:"5px 0"},children:["By: ",n]}),s&&(0,r.jsx)("p",{style:{margin:"5px 0",color:"#555"},children:s})]})]})}}}]);