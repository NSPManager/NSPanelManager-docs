"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5264],{3308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"advanced/architecture","title":"Architecture","description":"Software components","source":"@site/docs/advanced/architecture.md","sourceDirName":"advanced","slug":"/advanced/architecture","permalink":"/docs/advanced/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/NSPManager/NSPanelManager-docs/edit/main/docs/advanced/architecture.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Architecture","sidebar_position":7},"sidebar":"mainSidebar","previous":{"title":"Logs","permalink":"/docs/advanced/logs"},"next":{"title":"MQTT Topics","permalink":"/docs/advanced/mqtt-topics"}}');var o=t(4848),s=t(8453),r=t(143);const i={title:"Architecture",sidebar_position:7},l="Architecture",c={},d=[{value:"Software components",id:"software-components",level:2},{value:"Data flow",id:"data-flow",level:2},{value:"Home Assistant and/or OpenHAB to/from NSPanel Manager container",id:"home-assistant-andor-openhab-tofrom-nspanel-manager-container",level:3},{value:"NSPanel Manager container to/from MQTT",id:"nspanel-manager-container-tofrom-mqtt",level:3},{value:"Home Assistant and/or OpenHAB to/from MQTT",id:"home-assistant-andor-openhab-tofrom-mqtt",level:3},{value:"NSPanel Manager container to/from NSPanels",id:"nspanel-manager-container-tofrom-nspanels",level:3},{value:"MQTT to/from NSPanels",id:"mqtt-tofrom-nspanels",level:3}];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,o.jsx)(n.h2,{id:"software-components",children:"Software components"}),"\n",(0,o.jsx)(n.p,{children:"There are 3 software components written for the NSPanel Manager project:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Web interface"}),": The web interface that you interact with is built on top of the Django framework. This software gives\nthe user an interface to interact and configure the project with. This software also manages the database with settings."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"MQTT Manager"}),': There is a second software running in the background on the NSPanel Manager container that\nhosts the web interface. This component is named "MQTTManager". The MQTTManager handles all things with\nMQTT. It loads the config from the web interface via the API and then processes all commands from panels, state\nupdates from Home Assistant and OpenHAB and so on. It\u2019s basically the glue that makes the panel\u2019s actions affect\nHome Assistant and OpenHAB. The MQTTManager is also the software that send state updates from Home Assistant\nand OpenHAB to the panels when changes occur.']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"The NSPanel firmware"}),": The firmware written for the NSPanel has been specifically designed to be as response\nand easy to use as possible. The firmware handles all communication with the TFT (Nextion) display and with\nMQTTManager via MQTT."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"data-flow",children:"Data flow"}),"\n",(0,o.jsx)(r.A,{children:(0,o.jsx)(n.mermaid,{value:"flowchart TD\n    HAS(Home Assistant/OpenHAB)\n    NSPM(NSPanel Manager container)\n    MQTT(MQTT Server)\n    NSP1(NSPanel 1)\n    NSP2(NSPanel 2)\n    HAS <--\x3e NSPM\n    NSPM <--\x3e NSP1\n    NSPM <--\x3e NSP2\n    MQTT <--\x3e HAS\n    MQTT <--\x3e NSPM\n    MQTT <--\x3e NSP1\n    MQTT <--\x3e NSP2"})}),"\n",(0,o.jsx)(n.p,{children:"The data flow within NSPanel Manager might look intimidating but it\u2019s not that bad. Below is an explanation of all the\narrows above."}),"\n",(0,o.jsx)(n.h3,{id:"home-assistant-andor-openhab-tofrom-nspanel-manager-container",children:"Home Assistant and/or OpenHAB to/from NSPanel Manager container"}),"\n",(0,o.jsx)(n.p,{children:"There is two types of traffic flowing between these nodes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Websocket"}),": A websocket connection is setup in order for the NSPanel Manager container to receive entity updates\nfrom Home Assistant and/or OpenHAB but also to sent entity commands (E.. turn light X on to 20%). A websocket\nis used to speed up the communication and also to not have to poll the home automation software for information."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"HTTP GET API"}),': The usual HTTP GET API is also used. This is used when adding entities to a room, as an\nexample. When pressing the "Add new light" button, the NSPanel Manager container will make an HTTP GET request\nto gather all available entities and then send them back to the client (browser) so that the user may choose what\nentity to add to the room.']}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"nspanel-manager-container-tofrom-mqtt",children:"NSPanel Manager container to/from MQTT"}),"\n",(0,o.jsx)(n.p,{children:"MQTT is used to send updated entity states received from the home automation software out to all NSPanels and also\nreceive states and commands from NSPanels."}),"\n",(0,o.jsx)(n.h3,{id:"home-assistant-andor-openhab-tofrom-mqtt",children:"Home Assistant and/or OpenHAB to/from MQTT"}),"\n",(0,o.jsx)(n.p,{children:'Home Assistant and OpenHAB can leverage the MQTT integration through "Home Assistant MQTT Auto-discovery" (which\nOpenHAB can also use) to auto-discover NSPanels and automatically register entities for panel temperature reading, panel\nrelays, screen state and so on.'}),"\n",(0,o.jsx)(n.h3,{id:"nspanel-manager-container-tofrom-nspanels",children:"NSPanel Manager container to/from NSPanels"}),"\n",(0,o.jsx)(n.p,{children:"The configuration of lights, scenes and so on does not reside on each panel. The panel only has locally the bare minimum\nconfiguration for setup. When the panel starts and has connected to WiFi it will do a HTTP GET request to the NSPanel\nManager container in order to receive all configuration of entities, screen brightness and really, all settings\navailable in the NSPanel Manager web interface."}),"\n",(0,o.jsx)(n.h3,{id:"mqtt-tofrom-nspanels",children:"MQTT to/from NSPanels"}),"\n",(0,o.jsx)(n.p,{children:"Each NSPanel send states (E.g. temperature) and commands (E.g. turning on a light) over MQTT for the NSPanel Manager\ncontainer to pickup."}),"\n",(0,o.jsx)(n.p,{children:"The panel also receives commands, E.g. turn on relay 1, turn on screen and so on."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The complete list of MQTT topics is documented ",(0,o.jsx)(n.a,{href:"./mqtt-topics",children:"here"}),"."]})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},143:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);const a="centeredContent_P47O";var o=t(4848);const s=e=>{let{children:n}=e;return(0,o.jsx)("div",{className:a,children:n})}}}]);