"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2334],{2334:(e,n,t)=>{t.d(n,{Zp:()=>Rn});var r=t(8058),o=t(8894),i=0;const u=function(e){var n=++i;return(0,o.A)(e)+n};var s=t(9142),a=t(4098),d=t(4722),c=Math.ceil,h=Math.max;const f=function(e,n,t,r){for(var o=-1,i=h(c((n-e)/(t||1)),0),u=Array(i);i--;)u[r?i:++o]=e,e+=t;return u};var g=t(6832),l=t(4342);const v=function(e){return function(n,t,r){return r&&"number"!=typeof r&&(0,g.A)(n,t,r)&&(t=r=void 0),n=(0,l.A)(n),void 0===t?(t=n,n=0):t=(0,l.A)(t),r=void 0===r?n<t?1:-1:(0,l.A)(r),f(n,t,r,e)}}();var p=t(697);class A{constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,n=e._prev;if(n!==e)return w(n),n}enqueue(e){var n=this._sentinel;e._prev&&e._next&&w(e),e._next=n._next,n._next._prev=e,n._next=e,e._prev=n}toString(){for(var e=[],n=this._sentinel,t=n._prev;t!==n;)e.push(JSON.stringify(t,b)),t=t._prev;return"["+e.join(", ")+"]"}}function w(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function b(e,n){if("_next"!==e&&"_prev"!==e)return n}var m=s.A(1);function y(e,n){if(e.nodeCount()<=1)return[];var t=function(e,n){var t=new p.T,o=0,i=0;r.A(e.nodes(),(function(e){t.setNode(e,{v:e,in:0,out:0})})),r.A(e.edges(),(function(e){var r=t.edge(e.v,e.w)||0,u=n(e),s=r+u;t.setEdge(e.v,e.w,s),i=Math.max(i,t.node(e.v).out+=u),o=Math.max(o,t.node(e.w).in+=u)}));var u=v(i+o+3).map((function(){return new A})),s=o+1;return r.A(t.nodes(),(function(e){E(u,s,t.node(e))})),{graph:t,buckets:u,zeroIdx:s}}(e,n||m),o=function(e,n,t){var r,o=[],i=n[n.length-1],u=n[0];for(;e.nodeCount();){for(;r=u.dequeue();)_(e,n,t,r);for(;r=i.dequeue();)_(e,n,t,r);if(e.nodeCount())for(var s=n.length-2;s>0;--s)if(r=n[s].dequeue()){o=o.concat(_(e,n,t,r,!0));break}}return o}(t.graph,t.buckets,t.zeroIdx);return a.A(d.A(o,(function(n){return e.outEdges(n.v,n.w)})))}function _(e,n,t,o,i){var u=i?[]:void 0;return r.A(e.inEdges(o.v),(function(r){var o=e.edge(r),s=e.node(r.v);i&&u.push({v:r.v,w:r.w}),s.out-=o,E(n,t,s)})),r.A(e.outEdges(o.v),(function(r){var o=e.edge(r),i=r.w,u=e.node(i);u.in-=o,E(n,t,u)})),e.removeNode(o.v),u}function E(e,n,t){t.out?t.in?e[t.out-t.in+n].enqueue(t):e[e.length-1].enqueue(t):e[0].enqueue(t)}function x(e){var n="greedy"===e.graph().acyclicer?y(e,function(e){return function(n){return e.edge(n).weight}}(e)):function(e){var n=[],t={},o={};function i(u){Object.prototype.hasOwnProperty.call(o,u)||(o[u]=!0,t[u]=!0,r.A(e.outEdges(u),(function(e){Object.prototype.hasOwnProperty.call(t,e.w)?n.push(e):i(e.w)})),delete t[u])}return r.A(e.nodes(),i),n}(e);r.A(n,(function(n){var t=e.edge(n);e.removeEdge(n),t.forwardName=n.name,t.reversed=!0,e.setEdge(n.w,n.v,t,u("rev"))}))}var k=t(2837),N=t(9354),O=t(9188);const P=function(e,n){return(0,N.A)(e,n,(function(n,t){return(0,O.A)(e,t)}))};var C=t(6875),j=t(7525);const L=function(e){return(0,j.A)((0,C.A)(e,void 0,a.A),e+"")}((function(e,n){return null==e?{}:P(e,n)}));var I=t(3068),T=t(2559);const M=function(e,n){return e>n};var R=t(9008);const F=function(e){return e&&e.length?(0,T.A)(e,R.A,M):void 0};var D=t(6666),S=t(147),G=t(9841),V=t(3958);const B=function(e,n){var t={};return n=(0,V.A)(n,3),(0,G.A)(e,(function(e,r,o){(0,S.A)(t,r,n(e,r,o))})),t};var q=t(9592),Y=t(6452),z=t(8585),J=t(1917);const Z=function(){return J.A.Date.now()};function H(e,n,t,r){var o;do{o=u(r)}while(e.hasNode(o));return t.dummy=n,e.setNode(o,t),o}function K(e){var n=new p.T({multigraph:e.isMultigraph()}).setGraph(e.graph());return r.A(e.nodes(),(function(t){e.children(t).length||n.setNode(t,e.node(t))})),r.A(e.edges(),(function(t){n.setEdge(t,e.edge(t))})),n}function Q(e,n){var t,r,o=e.x,i=e.y,u=n.x-o,s=n.y-i,a=e.width/2,d=e.height/2;if(!u&&!s)throw new Error("Not possible to find intersection inside of the rectangle");return Math.abs(s)*a>Math.abs(u)*d?(s<0&&(d=-d),t=d*u/s,r=d):(u<0&&(a=-a),t=a,r=a*s/u),{x:o+t,y:i+r}}function U(e){var n=d.A(v(X(e)+1),(function(){return[]}));return r.A(e.nodes(),(function(t){var r=e.node(t),o=r.rank;q.A(o)||(n[o][r.order]=t)})),n}function W(e,n,t,r){var o={width:0,height:0};return arguments.length>=4&&(o.rank=t,o.order=r),H(e,"border",o,n)}function X(e){return F(d.A(e.nodes(),(function(n){var t=e.node(n).rank;if(!q.A(t))return t})))}function $(e,n){var t=Z();try{return n()}finally{console.log(e+" time: "+(Z()-t)+"ms")}}function ee(e,n){return n()}function ne(e,n,t,r,o,i){var u={width:0,height:0,rank:i,borderType:n},s=o[n][i-1],a=H(e,"border",u,t);o[n][i]=a,e.setParent(a,r),s&&e.setEdge(s,a,{weight:1})}function te(e){var n=e.graph().rankdir.toLowerCase();"bt"!==n&&"rl"!==n||function(e){r.A(e.nodes(),(function(n){ie(e.node(n))})),r.A(e.edges(),(function(n){var t=e.edge(n);r.A(t.points,ie),Object.prototype.hasOwnProperty.call(t,"y")&&ie(t)}))}(e),"lr"!==n&&"rl"!==n||(!function(e){r.A(e.nodes(),(function(n){ue(e.node(n))})),r.A(e.edges(),(function(n){var t=e.edge(n);r.A(t.points,ue),Object.prototype.hasOwnProperty.call(t,"x")&&ue(t)}))}(e),re(e))}function re(e){r.A(e.nodes(),(function(n){oe(e.node(n))})),r.A(e.edges(),(function(n){oe(e.edge(n))}))}function oe(e){var n=e.width;e.width=e.height,e.height=n}function ie(e){e.y=-e.y}function ue(e){var n=e.x;e.x=e.y,e.y=n}function se(e){e.graph().dummyChains=[],r.A(e.edges(),(function(n){!function(e,n){var t=n.v,r=e.node(t).rank,o=n.w,i=e.node(o).rank,u=n.name,s=e.edge(n),a=s.labelRank;if(i===r+1)return;e.removeEdge(n);var d,c,h=void 0;for(c=0,++r;r<i;++c,++r)s.points=[],d=H(e,"edge",h={width:0,height:0,edgeLabel:s,edgeObj:n,rank:r},"_d"),r===a&&(h.width=s.width,h.height=s.height,h.dummy="edge-label",h.labelpos=s.labelpos),e.setEdge(t,d,{weight:s.weight},u),0===c&&e.graph().dummyChains.push(d),t=d;e.setEdge(t,o,{weight:s.weight},u)}(e,n)}))}var ae=t(6224);const de=function(e,n){return e&&e.length?(0,T.A)(e,(0,V.A)(n,2),ae.A):void 0};function ce(e){var n={};r.A(e.sources(),(function t(r){var o=e.node(r);if(Object.prototype.hasOwnProperty.call(n,r))return o.rank;n[r]=!0;var i=Y.A(d.A(e.outEdges(r),(function(n){return t(n.w)-e.edge(n).minlen})));return i!==Number.POSITIVE_INFINITY&&null!=i||(i=0),o.rank=i}))}function he(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function fe(e){var n,t,r=new p.T({directed:!1}),o=e.nodes()[0],i=e.nodeCount();for(r.setNode(o,{});ge(r,e)<i;)n=le(r,e),t=r.hasNode(n.v)?he(e,n):-he(e,n),ve(r,e,t);return r}function ge(e,n){return r.A(e.nodes(),(function t(o){r.A(n.nodeEdges(o),(function(r){var i=r.v,u=o===i?r.w:i;e.hasNode(u)||he(n,r)||(e.setNode(u,{}),e.setEdge(o,u,{}),t(u))}))})),e.nodeCount()}function le(e,n){return de(n.edges(),(function(t){if(e.hasNode(t.v)!==e.hasNode(t.w))return he(n,t)}))}function ve(e,n,t){r.A(e.nodes(),(function(e){n.node(e).rank+=t}))}var pe=t(6145),Ae=t(4092);s.A(1);s.A(1);t(1852),t(9779),t(8446),t(9703);(0,t(805).A)("length");RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var we="\\ud800-\\udfff",be="["+we+"]",me="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",ye="\\ud83c[\\udffb-\\udfff]",_e="[^"+we+"]",Ee="(?:\\ud83c[\\udde6-\\uddff]){2}",xe="[\\ud800-\\udbff][\\udc00-\\udfff]",ke="(?:"+me+"|"+ye+")"+"?",Ne="[\\ufe0e\\ufe0f]?",Oe=Ne+ke+("(?:\\u200d(?:"+[_e,Ee,xe].join("|")+")"+Ne+ke+")*"),Pe="(?:"+[_e+me+"?",me,Ee,xe,be].join("|")+")";RegExp(ye+"(?="+ye+")|"+Pe+Oe,"g");function Ce(){}Ce.prototype=new Error;var je=t(2049);function Le(e,n,t){je.A(n)||(n=[n]);var o=(e.isDirected()?e.successors:e.neighbors).bind(e),i=[],u={};return r.A(n,(function(n){if(!e.hasNode(n))throw new Error("Graph does not have node: "+n);Ie(e,n,"post"===t,u,o,i)})),i}function Ie(e,n,t,o,i,u){Object.prototype.hasOwnProperty.call(o,n)||(o[n]=!0,t||u.push(n),r.A(i(n),(function(n){Ie(e,n,t,o,i,u)})),t&&u.push(n))}t(7981);function Te(e){e=function(e){var n=(new p.T).setGraph(e.graph());return r.A(e.nodes(),(function(t){n.setNode(t,e.node(t))})),r.A(e.edges(),(function(t){var r=n.edge(t.v,t.w)||{weight:0,minlen:1},o=e.edge(t);n.setEdge(t.v,t.w,{weight:r.weight+o.weight,minlen:Math.max(r.minlen,o.minlen)})})),n}(e),ce(e);var n,t=fe(e);for(Fe(t),Me(t,e);n=Se(t);)Ve(t,e,n,Ge(t,e,n))}function Me(e,n){var t=function(e,n){return Le(e,n,"post")}(e,e.nodes());t=t.slice(0,t.length-1),r.A(t,(function(t){!function(e,n,t){var r=e.node(t),o=r.parent;e.edge(t,o).cutvalue=Re(e,n,t)}(e,n,t)}))}function Re(e,n,t){var o=e.node(t).parent,i=!0,u=n.edge(t,o),s=0;return u||(i=!1,u=n.edge(o,t)),s=u.weight,r.A(n.nodeEdges(t),(function(r){var u,a,d=r.v===t,c=d?r.w:r.v;if(c!==o){var h=d===i,f=n.edge(r).weight;if(s+=h?f:-f,u=t,a=c,e.hasEdge(u,a)){var g=e.edge(t,c).cutvalue;s+=h?-g:g}}})),s}function Fe(e,n){arguments.length<2&&(n=e.nodes()[0]),De(e,{},1,n)}function De(e,n,t,o,i){var u=t,s=e.node(o);return n[o]=!0,r.A(e.neighbors(o),(function(r){Object.prototype.hasOwnProperty.call(n,r)||(t=De(e,n,t,r,o))})),s.low=u,s.lim=t++,i?s.parent=i:delete s.parent,t}function Se(e){return pe.A(e.edges(),(function(n){return e.edge(n).cutvalue<0}))}function Ge(e,n,t){var r=t.v,o=t.w;n.hasEdge(r,o)||(r=t.w,o=t.v);var i=e.node(r),u=e.node(o),s=i,a=!1;i.lim>u.lim&&(s=u,a=!0);var d=Ae.A(n.edges(),(function(n){return a===Be(e,e.node(n.v),s)&&a!==Be(e,e.node(n.w),s)}));return de(d,(function(e){return he(n,e)}))}function Ve(e,n,t,o){var i=t.v,u=t.w;e.removeEdge(i,u),e.setEdge(o.v,o.w,{}),Fe(e),Me(e,n),function(e,n){var t=pe.A(e.nodes(),(function(e){return!n.node(e).parent})),o=function(e,n){return Le(e,n,"pre")}(e,t);o=o.slice(1),r.A(o,(function(t){var r=e.node(t).parent,o=n.edge(t,r),i=!1;o||(o=n.edge(r,t),i=!0),n.node(t).rank=n.node(r).rank+(i?o.minlen:-o.minlen)}))}(e,n)}function Be(e,n,t){return t.low<=n.lim&&n.lim<=t.lim}function qe(e){switch(e.graph().ranker){case"network-simplex":default:ze(e);break;case"tight-tree":!function(e){ce(e),fe(e)}(e);break;case"longest-path":Ye(e)}}Te.initLowLimValues=Fe,Te.initCutValues=Me,Te.calcCutValue=Re,Te.leaveEdge=Se,Te.enterEdge=Ge,Te.exchangeEdges=Ve;var Ye=ce;function ze(e){Te(e)}var Je=t(8207),Ze=t(9463);function He(e){var n=H(e,"root",{},"_root"),t=function(e){var n={};function t(o,i){var u=e.children(o);u&&u.length&&r.A(u,(function(e){t(e,i+1)})),n[o]=i}return r.A(e.children(),(function(e){t(e,1)})),n}(e),o=F(Je.A(t))-1,i=2*o+1;e.graph().nestingRoot=n,r.A(e.edges(),(function(n){e.edge(n).minlen*=i}));var u=function(e){return Ze.A(e.edges(),(function(n,t){return n+e.edge(t).weight}),0)}(e)+1;r.A(e.children(),(function(r){Ke(e,n,i,u,o,t,r)})),e.graph().nodeRankFactor=i}function Ke(e,n,t,o,i,u,s){var a=e.children(s);if(a.length){var d=W(e,"_bt"),c=W(e,"_bb"),h=e.node(s);e.setParent(d,s),h.borderTop=d,e.setParent(c,s),h.borderBottom=c,r.A(a,(function(r){Ke(e,n,t,o,i,u,r);var a=e.node(r),h=a.borderTop?a.borderTop:r,f=a.borderBottom?a.borderBottom:r,g=a.borderTop?o:2*o,l=h!==f?1:i-u[s]+1;e.setEdge(d,h,{weight:g,minlen:l,nestingEdge:!0}),e.setEdge(f,c,{weight:g,minlen:l,nestingEdge:!0})})),e.parent(s)||e.setEdge(n,d,{weight:0,minlen:i+u[s]})}else s!==n&&e.setEdge(n,s,{weight:0,minlen:t})}var Qe=t(8675);const Ue=function(e){return(0,Qe.A)(e,5)};function We(e,n,t){var o=function(e){var n;for(;e.hasNode(n=u("_root")););return n}(e),i=new p.T({compound:!0}).setGraph({root:o}).setDefaultNodeLabel((function(n){return e.node(n)}));return r.A(e.nodes(),(function(u){var s=e.node(u),a=e.parent(u);(s.rank===n||s.minRank<=n&&n<=s.maxRank)&&(i.setNode(u),i.setParent(u,a||o),r.A(e[t](u),(function(n){var t=n.v===u?n.w:n.v,r=i.edge(t,u),o=q.A(r)?0:r.weight;i.setEdge(t,u,{weight:e.edge(n).weight+o})})),Object.prototype.hasOwnProperty.call(s,"minRank")&&i.setNode(u,{borderLeft:s.borderLeft[n],borderRight:s.borderRight[n]}))})),i}var Xe=t(2851);const $e=function(e,n,t){for(var r=-1,o=e.length,i=n.length,u={};++r<o;){var s=r<i?n[r]:void 0;t(u,e[r],s)}return u};const en=function(e,n){return $e(e||[],n||[],Xe.A)};var nn=t(3588),tn=t(5572),rn=t(6318),on=t(2568);const un=function(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e};var sn=t(2789),an=t(1882);const dn=function(e,n){if(e!==n){var t=void 0!==e,r=null===e,o=e==e,i=(0,an.A)(e),u=void 0!==n,s=null===n,a=n==n,d=(0,an.A)(n);if(!s&&!d&&!i&&e>n||i&&u&&a&&!s&&!d||r&&u&&a||!t&&a||!o)return 1;if(!r&&!i&&!d&&e<n||d&&t&&o&&!r&&!i||s&&t&&o||!u&&o||!a)return-1}return 0};const cn=function(e,n,t){for(var r=-1,o=e.criteria,i=n.criteria,u=o.length,s=t.length;++r<u;){var a=dn(o[r],i[r]);if(a)return r>=s?a:a*("desc"==t[r]?-1:1)}return e.index-n.index};const hn=function(e,n,t){n=n.length?(0,tn.A)(n,(function(e){return(0,je.A)(e)?function(n){return(0,rn.A)(n,1===e.length?e[0]:e)}:e})):[R.A];var r=-1;n=(0,tn.A)(n,(0,sn.A)(V.A));var o=(0,on.A)(e,(function(e,t,o){return{criteria:(0,tn.A)(n,(function(n){return n(e)})),index:++r,value:e}}));return un(o,(function(e,n){return cn(e,n,t)}))};const fn=(0,t(4326).A)((function(e,n){if(null==e)return[];var t=n.length;return t>1&&(0,g.A)(e,n[0],n[1])?n=[]:t>2&&(0,g.A)(n[0],n[1],n[2])&&(n=[n[0]]),hn(e,(0,nn.A)(n,1),[])}));function gn(e,n){for(var t=0,r=1;r<n.length;++r)t+=ln(e,n[r-1],n[r]);return t}function ln(e,n,t){for(var o=en(t,d.A(t,(function(e,n){return n}))),i=a.A(d.A(n,(function(n){return fn(d.A(e.outEdges(n),(function(n){return{pos:o[n.w],weight:e.edge(n).weight}})),"pos")}))),u=1;u<t.length;)u<<=1;var s=2*u-1;u-=1;var c=d.A(new Array(s),(function(){return 0})),h=0;return r.A(i.forEach((function(e){var n=e.pos+u;c[n]+=e.weight;for(var t=0;n>0;)n%2&&(t+=c[n+1]),c[n=n-1>>1]+=e.weight;h+=e.weight*t}))),h}function vn(e,n){var t={};return r.A(e,(function(e,n){var r=t[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:n};q.A(e.barycenter)||(r.barycenter=e.barycenter,r.weight=e.weight)})),r.A(n.edges(),(function(e){var n=t[e.v],r=t[e.w];q.A(n)||q.A(r)||(r.indegree++,n.out.push(t[e.w]))})),function(e){var n=[];function t(e){return function(n){n.merged||(q.A(n.barycenter)||q.A(e.barycenter)||n.barycenter>=e.barycenter)&&function(e,n){var t=0,r=0;e.weight&&(t+=e.barycenter*e.weight,r+=e.weight);n.weight&&(t+=n.barycenter*n.weight,r+=n.weight);e.vs=n.vs.concat(e.vs),e.barycenter=t/r,e.weight=r,e.i=Math.min(n.i,e.i),n.merged=!0}(e,n)}}function o(n){return function(t){t.in.push(n),0==--t.indegree&&e.push(t)}}for(;e.length;){var i=e.pop();n.push(i),r.A(i.in.reverse(),t(i)),r.A(i.out,o(i))}return d.A(Ae.A(n,(function(e){return!e.merged})),(function(e){return L(e,["vs","i","barycenter","weight"])}))}(Ae.A(t,(function(e){return!e.indegree})))}function pn(e,n){var t,o=function(e,n){var t={lhs:[],rhs:[]};return r.A(e,(function(e){n(e)?t.lhs.push(e):t.rhs.push(e)})),t}(e,(function(e){return Object.prototype.hasOwnProperty.call(e,"barycenter")})),i=o.lhs,u=fn(o.rhs,(function(e){return-e.i})),s=[],d=0,c=0,h=0;i.sort((t=!!n,function(e,n){return e.barycenter<n.barycenter?-1:e.barycenter>n.barycenter?1:t?n.i-e.i:e.i-n.i})),h=An(s,u,h),r.A(i,(function(e){h+=e.vs.length,s.push(e.vs),d+=e.barycenter*e.weight,c+=e.weight,h=An(s,u,h)}));var f={vs:a.A(s)};return c&&(f.barycenter=d/c,f.weight=c),f}function An(e,n,t){for(var r;n.length&&(r=D.A(n)).i<=t;)n.pop(),e.push(r.vs),t++;return t}function wn(e,n,t,o){var i=e.children(n),u=e.node(n),s=u?u.borderLeft:void 0,c=u?u.borderRight:void 0,h={};s&&(i=Ae.A(i,(function(e){return e!==s&&e!==c})));var f=function(e,n){return d.A(n,(function(n){var t=e.inEdges(n);if(t.length){var r=Ze.A(t,(function(n,t){var r=e.edge(t),o=e.node(t.v);return{sum:n.sum+r.weight*o.order,weight:n.weight+r.weight}}),{sum:0,weight:0});return{v:n,barycenter:r.sum/r.weight,weight:r.weight}}return{v:n}}))}(e,i);r.A(f,(function(n){if(e.children(n.v).length){var r=wn(e,n.v,t,o);h[n.v]=r,Object.prototype.hasOwnProperty.call(r,"barycenter")&&(i=n,u=r,q.A(i.barycenter)?(i.barycenter=u.barycenter,i.weight=u.weight):(i.barycenter=(i.barycenter*i.weight+u.barycenter*u.weight)/(i.weight+u.weight),i.weight+=u.weight))}var i,u}));var g=vn(f,t);!function(e,n){r.A(e,(function(e){e.vs=a.A(e.vs.map((function(e){return n[e]?n[e].vs:e})))}))}(g,h);var l=pn(g,o);if(s&&(l.vs=a.A([s,l.vs,c]),e.predecessors(s).length)){var v=e.node(e.predecessors(s)[0]),p=e.node(e.predecessors(c)[0]);Object.prototype.hasOwnProperty.call(l,"barycenter")||(l.barycenter=0,l.weight=0),l.barycenter=(l.barycenter*l.weight+v.order+p.order)/(l.weight+2),l.weight+=2}return l}function bn(e){var n=X(e),t=mn(e,v(1,n+1),"inEdges"),o=mn(e,v(n-1,-1,-1),"outEdges"),i=function(e){var n={},t=Ae.A(e.nodes(),(function(n){return!e.children(n).length})),o=F(d.A(t,(function(n){return e.node(n).rank}))),i=d.A(v(o+1),(function(){return[]})),u=fn(t,(function(n){return e.node(n).rank}));return r.A(u,(function t(o){if(!z.A(n,o)){n[o]=!0;var u=e.node(o);i[u.rank].push(o),r.A(e.successors(o),t)}})),i}(e);_n(e,i);for(var u,s=Number.POSITIVE_INFINITY,a=0,c=0;c<4;++a,++c){yn(a%2?t:o,a%4>=2);var h=gn(e,i=U(e));h<s&&(c=0,u=Ue(i),s=h)}_n(e,u)}function mn(e,n,t){return d.A(n,(function(n){return We(e,n,t)}))}function yn(e,n){var t=new p.T;r.A(e,(function(e){var o=e.graph().root,i=wn(e,o,t,n);r.A(i.vs,(function(n,t){e.node(n).order=t})),function(e,n,t){var o,i={};r.A(t,(function(t){for(var r,u,s=e.parent(t);s;){if((r=e.parent(s))?(u=i[r],i[r]=s):(u=o,o=s),u&&u!==s)return void n.setEdge(u,s);s=r}}))}(e,t,i.vs)}))}function _n(e,n){r.A(n,(function(n){r.A(n,(function(n,t){e.node(n).order=t}))}))}function En(e){var n=function(e){var n={},t=0;function o(i){var u=t;r.A(e.children(i),o),n[i]={low:u,lim:t++}}return r.A(e.children(),o),n}(e);r.A(e.graph().dummyChains,(function(t){for(var r=e.node(t),o=r.edgeObj,i=function(e,n,t,r){var o,i,u=[],s=[],a=Math.min(n[t].low,n[r].low),d=Math.max(n[t].lim,n[r].lim);o=t;do{o=e.parent(o),u.push(o)}while(o&&(n[o].low>a||d>n[o].lim));i=o,o=r;for(;(o=e.parent(o))!==i;)s.push(o);return{path:u.concat(s.reverse()),lca:i}}(e,n,o.v,o.w),u=i.path,s=i.lca,a=0,d=u[a],c=!0;t!==o.w;){if(r=e.node(t),c){for(;(d=u[a])!==s&&e.node(d).maxRank<r.rank;)a++;d===s&&(c=!1)}if(!c){for(;a<u.length-1&&e.node(d=u[a+1]).minRank<=r.rank;)a++;d=u[a]}e.setParent(t,d),t=e.successors(t)[0]}}))}var xn=t(9922);const kn=function(e,n){return e&&(0,G.A)(e,(0,xn.A)(n))};var Nn=t(4574),On=t(5615);const Pn=function(e,n){return null==e?e:(0,Nn.A)(e,(0,xn.A)(n),On.A)};function Cn(e,n){var t={};return Ze.A(n,(function(n,o){var i=0,u=0,s=n.length,a=D.A(o);return r.A(o,(function(n,d){var c=function(e,n){if(e.node(n).dummy)return pe.A(e.predecessors(n),(function(n){return e.node(n).dummy}))}(e,n),h=c?e.node(c).order:s;(c||n===a)&&(r.A(o.slice(u,d+1),(function(n){r.A(e.predecessors(n),(function(r){var o=e.node(r),u=o.order;!(u<i||h<u)||o.dummy&&e.node(n).dummy||jn(t,r,n)}))})),u=d+1,i=h)})),o})),t}function jn(e,n,t){if(n>t){var r=n;n=t,t=r}var o=e[n];o||(e[n]=o={}),o[t]=!0}function Ln(e,n,t){if(n>t){var r=n;n=t,t=r}return!!e[n]&&Object.prototype.hasOwnProperty.call(e[n],t)}function In(e,n,t,o,i){var u={},s=function(e,n,t,o){var i=new p.T,u=e.graph(),s=function(e,n,t){return function(r,o,i){var u,s=r.node(o),a=r.node(i),d=0;if(d+=s.width/2,Object.prototype.hasOwnProperty.call(s,"labelpos"))switch(s.labelpos.toLowerCase()){case"l":u=-s.width/2;break;case"r":u=s.width/2}if(u&&(d+=t?u:-u),u=0,d+=(s.dummy?n:e)/2,d+=(a.dummy?n:e)/2,d+=a.width/2,Object.prototype.hasOwnProperty.call(a,"labelpos"))switch(a.labelpos.toLowerCase()){case"l":u=a.width/2;break;case"r":u=-a.width/2}return u&&(d+=t?u:-u),u=0,d}}(u.nodesep,u.edgesep,o);return r.A(n,(function(n){var o;r.A(n,(function(n){var r=t[n];if(i.setNode(r),o){var u=t[o],a=i.edge(u,r);i.setEdge(u,r,Math.max(s(e,n,o),a||0))}o=n}))})),i}(e,n,t,i),a=i?"borderLeft":"borderRight";function d(e,n){for(var t=s.nodes(),r=t.pop(),o={};r;)o[r]?e(r):(o[r]=!0,t.push(r),t=t.concat(n(r))),r=t.pop()}return d((function(e){u[e]=s.inEdges(e).reduce((function(e,n){return Math.max(e,u[n.v]+s.edge(n))}),0)}),s.predecessors.bind(s)),d((function(n){var t=s.outEdges(n).reduce((function(e,n){return Math.min(e,u[n.w]-s.edge(n))}),Number.POSITIVE_INFINITY),r=e.node(n);t!==Number.POSITIVE_INFINITY&&r.borderType!==a&&(u[n]=Math.max(u[n],t))}),s.successors.bind(s)),r.A(o,(function(e){u[e]=u[t[e]]})),u}function Tn(e){var n,t=U(e),o=k.A(Cn(e,t),function(e,n){var t={};function o(n,o,i,u,s){var a;r.A(v(o,i),(function(o){a=n[o],e.node(a).dummy&&r.A(e.predecessors(a),(function(n){var r=e.node(n);r.dummy&&(r.order<u||r.order>s)&&jn(t,n,a)}))}))}return Ze.A(n,(function(n,t){var i,u=-1,s=0;return r.A(t,(function(r,a){if("border"===e.node(r).dummy){var d=e.predecessors(r);d.length&&(i=e.node(d[0]).order,o(t,s,a,u,i),s=a,u=i)}o(t,s,t.length,i,n.length)})),t})),t}(e,t)),i={};r.A(["u","d"],(function(u){n="u"===u?t:Je.A(t).reverse(),r.A(["l","r"],(function(t){"r"===t&&(n=d.A(n,(function(e){return Je.A(e).reverse()})));var s=("u"===u?e.predecessors:e.successors).bind(e),a=function(e,n,t,o){var i={},u={},s={};return r.A(n,(function(e){r.A(e,(function(e,n){i[e]=e,u[e]=e,s[e]=n}))})),r.A(n,(function(e){var n=-1;r.A(e,(function(e){var r=o(e);if(r.length){r=fn(r,(function(e){return s[e]}));for(var a=(r.length-1)/2,d=Math.floor(a),c=Math.ceil(a);d<=c;++d){var h=r[d];u[e]===e&&n<s[h]&&!Ln(t,e,h)&&(u[h]=e,u[e]=i[e]=i[h],n=s[h])}}}))})),{root:i,align:u}}(0,n,o,s),c=In(e,n,a.root,a.align,"r"===t);"r"===t&&(c=B(c,(function(e){return-e}))),i[u+t]=c}))}));var u=function(e,n){return de(Je.A(n),(function(n){var t=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;return Pn(n,(function(n,o){var i=function(e,n){return e.node(n).width}(e,o)/2;t=Math.max(n+i,t),r=Math.min(n-i,r)})),t-r}))}(e,i);return function(e,n){var t=Je.A(n),o=Y.A(t),i=F(t);r.A(["u","d"],(function(t){r.A(["l","r"],(function(r){var u,s=t+r,a=e[s];if(a!==n){var d=Je.A(a);(u="l"===r?o-Y.A(d):i-F(d))&&(e[s]=B(a,(function(e){return e+u})))}}))}))}(i,u),function(e,n){return B(e.ul,(function(t,r){if(n)return e[n.toLowerCase()][r];var o=fn(d.A(e,r));return(o[1]+o[2])/2}))}(i,e.graph().align)}function Mn(e){(function(e){var n=U(e),t=e.graph().ranksep,o=0;r.A(n,(function(n){var i=F(d.A(n,(function(n){return e.node(n).height})));r.A(n,(function(n){e.node(n).y=o+i/2})),o+=i+t}))})(e=K(e)),kn(Tn(e),(function(n,t){e.node(t).x=n}))}function Rn(e,n){var t=n&&n.debugTiming?$:ee;t("layout",(()=>{var n=t("  buildLayoutGraph",(()=>function(e){var n=new p.T({multigraph:!0,compound:!0}),t=Jn(e.graph());return n.setGraph(k.A({},Dn,zn(t,Fn),L(t,Sn))),r.A(e.nodes(),(function(t){var r=Jn(e.node(t));n.setNode(t,I.A(zn(r,Gn),Vn)),n.setParent(t,e.parent(t))})),r.A(e.edges(),(function(t){var r=Jn(e.edge(t));n.setEdge(t,k.A({},qn,zn(r,Bn),L(r,Yn)))})),n}(e)));t("  runLayout",(()=>function(e,n){n("    makeSpaceForEdgeLabels",(()=>function(e){var n=e.graph();n.ranksep/=2,r.A(e.edges(),(function(t){var r=e.edge(t);r.minlen*=2,"c"!==r.labelpos.toLowerCase()&&("TB"===n.rankdir||"BT"===n.rankdir?r.width+=r.labeloffset:r.height+=r.labeloffset)}))}(e))),n("    removeSelfEdges",(()=>function(e){r.A(e.edges(),(function(n){if(n.v===n.w){var t=e.node(n.v);t.selfEdges||(t.selfEdges=[]),t.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}}))}(e))),n("    acyclic",(()=>x(e))),n("    nestingGraph.run",(()=>He(e))),n("    rank",(()=>qe(K(e)))),n("    injectEdgeLabelProxies",(()=>function(e){r.A(e.edges(),(function(n){var t=e.edge(n);if(t.width&&t.height){var r=e.node(n.v),o={rank:(e.node(n.w).rank-r.rank)/2+r.rank,e:n};H(e,"edge-proxy",o,"_ep")}}))}(e))),n("    removeEmptyRanks",(()=>function(e){var n=Y.A(d.A(e.nodes(),(function(n){return e.node(n).rank}))),t=[];r.A(e.nodes(),(function(r){var o=e.node(r).rank-n;t[o]||(t[o]=[]),t[o].push(r)}));var o=0,i=e.graph().nodeRankFactor;r.A(t,(function(n,t){q.A(n)&&t%i!=0?--o:o&&r.A(n,(function(n){e.node(n).rank+=o}))}))}(e))),n("    nestingGraph.cleanup",(()=>function(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,r.A(e.edges(),(function(n){e.edge(n).nestingEdge&&e.removeEdge(n)}))}(e))),n("    normalizeRanks",(()=>function(e){var n=Y.A(d.A(e.nodes(),(function(n){return e.node(n).rank})));r.A(e.nodes(),(function(t){var r=e.node(t);z.A(r,"rank")&&(r.rank-=n)}))}(e))),n("    assignRankMinMax",(()=>function(e){var n=0;r.A(e.nodes(),(function(t){var r=e.node(t);r.borderTop&&(r.minRank=e.node(r.borderTop).rank,r.maxRank=e.node(r.borderBottom).rank,n=F(n,r.maxRank))})),e.graph().maxRank=n}(e))),n("    removeEdgeLabelProxies",(()=>function(e){r.A(e.nodes(),(function(n){var t=e.node(n);"edge-proxy"===t.dummy&&(e.edge(t.e).labelRank=t.rank,e.removeNode(n))}))}(e))),n("    normalize.run",(()=>se(e))),n("    parentDummyChains",(()=>En(e))),n("    addBorderSegments",(()=>function(e){r.A(e.children(),(function n(t){var o=e.children(t),i=e.node(t);if(o.length&&r.A(o,n),Object.prototype.hasOwnProperty.call(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var u=i.minRank,s=i.maxRank+1;u<s;++u)ne(e,"borderLeft","_bl",t,i,u),ne(e,"borderRight","_br",t,i,u)}}))}(e))),n("    order",(()=>bn(e))),n("    insertSelfEdges",(()=>function(e){var n=U(e);r.A(n,(function(n){var t=0;r.A(n,(function(n,o){var i=e.node(n);i.order=o+t,r.A(i.selfEdges,(function(n){H(e,"selfedge",{width:n.label.width,height:n.label.height,rank:i.rank,order:o+ ++t,e:n.e,label:n.label},"_se")})),delete i.selfEdges}))}))}(e))),n("    adjustCoordinateSystem",(()=>function(e){var n=e.graph().rankdir.toLowerCase();"lr"!==n&&"rl"!==n||re(e)}(e))),n("    position",(()=>Mn(e))),n("    positionSelfEdges",(()=>function(e){r.A(e.nodes(),(function(n){var t=e.node(n);if("selfedge"===t.dummy){var r=e.node(t.e.v),o=r.x+r.width/2,i=r.y,u=t.x-o,s=r.height/2;e.setEdge(t.e,t.label),e.removeNode(n),t.label.points=[{x:o+2*u/3,y:i-s},{x:o+5*u/6,y:i-s},{x:o+u,y:i},{x:o+5*u/6,y:i+s},{x:o+2*u/3,y:i+s}],t.label.x=t.x,t.label.y=t.y}}))}(e))),n("    removeBorderNodes",(()=>function(e){r.A(e.nodes(),(function(n){if(e.children(n).length){var t=e.node(n),r=e.node(t.borderTop),o=e.node(t.borderBottom),i=e.node(D.A(t.borderLeft)),u=e.node(D.A(t.borderRight));t.width=Math.abs(u.x-i.x),t.height=Math.abs(o.y-r.y),t.x=i.x+t.width/2,t.y=r.y+t.height/2}})),r.A(e.nodes(),(function(n){"border"===e.node(n).dummy&&e.removeNode(n)}))}(e))),n("    normalize.undo",(()=>function(e){r.A(e.graph().dummyChains,(function(n){var t,r=e.node(n),o=r.edgeLabel;for(e.setEdge(r.edgeObj,o);r.dummy;)t=e.successors(n)[0],e.removeNode(n),o.points.push({x:r.x,y:r.y}),"edge-label"===r.dummy&&(o.x=r.x,o.y=r.y,o.width=r.width,o.height=r.height),n=t,r=e.node(n)}))}(e))),n("    fixupEdgeLabelCoords",(()=>function(e){r.A(e.edges(),(function(n){var t=e.edge(n);if(Object.prototype.hasOwnProperty.call(t,"x"))switch("l"!==t.labelpos&&"r"!==t.labelpos||(t.width-=t.labeloffset),t.labelpos){case"l":t.x-=t.width/2+t.labeloffset;break;case"r":t.x+=t.width/2+t.labeloffset}}))}(e))),n("    undoCoordinateSystem",(()=>te(e))),n("    translateGraph",(()=>function(e){var n=Number.POSITIVE_INFINITY,t=0,o=Number.POSITIVE_INFINITY,i=0,u=e.graph(),s=u.marginx||0,a=u.marginy||0;function d(e){var r=e.x,u=e.y,s=e.width,a=e.height;n=Math.min(n,r-s/2),t=Math.max(t,r+s/2),o=Math.min(o,u-a/2),i=Math.max(i,u+a/2)}r.A(e.nodes(),(function(n){d(e.node(n))})),r.A(e.edges(),(function(n){var t=e.edge(n);Object.prototype.hasOwnProperty.call(t,"x")&&d(t)})),n-=s,o-=a,r.A(e.nodes(),(function(t){var r=e.node(t);r.x-=n,r.y-=o})),r.A(e.edges(),(function(t){var i=e.edge(t);r.A(i.points,(function(e){e.x-=n,e.y-=o})),Object.prototype.hasOwnProperty.call(i,"x")&&(i.x-=n),Object.prototype.hasOwnProperty.call(i,"y")&&(i.y-=o)})),u.width=t-n+s,u.height=i-o+a}(e))),n("    assignNodeIntersects",(()=>function(e){r.A(e.edges(),(function(n){var t,r,o=e.edge(n),i=e.node(n.v),u=e.node(n.w);o.points?(t=o.points[0],r=o.points[o.points.length-1]):(o.points=[],t=u,r=i),o.points.unshift(Q(i,t)),o.points.push(Q(u,r))}))}(e))),n("    reversePoints",(()=>function(e){r.A(e.edges(),(function(n){var t=e.edge(n);t.reversed&&t.points.reverse()}))}(e))),n("    acyclic.undo",(()=>function(e){r.A(e.edges(),(function(n){var t=e.edge(n);if(t.reversed){e.removeEdge(n);var r=t.forwardName;delete t.reversed,delete t.forwardName,e.setEdge(n.w,n.v,t,r)}}))}(e)))}(n,t))),t("  updateInputGraph",(()=>function(e,n){r.A(e.nodes(),(function(t){var r=e.node(t),o=n.node(t);r&&(r.x=o.x,r.y=o.y,n.children(t).length&&(r.width=o.width,r.height=o.height))})),r.A(e.edges(),(function(t){var r=e.edge(t),o=n.edge(t);r.points=o.points,Object.prototype.hasOwnProperty.call(o,"x")&&(r.x=o.x,r.y=o.y)})),e.graph().width=n.graph().width,e.graph().height=n.graph().height}(e,n)))}))}var Fn=["nodesep","edgesep","ranksep","marginx","marginy"],Dn={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},Sn=["acyclicer","ranker","rankdir","align"],Gn=["width","height"],Vn={width:0,height:0},Bn=["minlen","weight","width","height","labeloffset"],qn={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},Yn=["labelpos"];function zn(e,n){return B(L(e,n),Number)}function Jn(e){var n={};return r.A(e,(function(e,t){n[t.toLowerCase()]=e})),n}},7981:(e,n,t)=>{t.d(n,{T:()=>w});var r=t(9142),o=t(9610),i=t(7422),u=t(4092),s=t(6401),a=t(8058),d=t(9592),c=t(3588),h=t(4326),f=t(9902),g=t(3533);const l=(0,h.A)((function(e){return(0,f.A)((0,c.A)(e,1,g.A,!0))}));var v=t(8207),p=t(9463),A="\0";class w{constructor(e={}){this._isDirected=!Object.prototype.hasOwnProperty.call(e,"directed")||e.directed,this._isMultigraph=!!Object.prototype.hasOwnProperty.call(e,"multigraph")&&e.multigraph,this._isCompound=!!Object.prototype.hasOwnProperty.call(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=r.A(void 0),this._defaultEdgeLabelFn=r.A(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[A]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return o.A(e)||(e=r.A(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return i.A(this._nodes)}sources(){var e=this;return u.A(this.nodes(),(function(n){return s.A(e._in[n])}))}sinks(){var e=this;return u.A(this.nodes(),(function(n){return s.A(e._out[n])}))}setNodes(e,n){var t=arguments,r=this;return a.A(e,(function(e){t.length>1?r.setNode(e,n):r.setNode(e)})),this}setNode(e,n){return Object.prototype.hasOwnProperty.call(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=n),this):(this._nodes[e]=arguments.length>1?n:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=A,this._children[e]={},this._children[A][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return Object.prototype.hasOwnProperty.call(this._nodes,e)}removeNode(e){if(Object.prototype.hasOwnProperty.call(this._nodes,e)){var n=e=>this.removeEdge(this._edgeObjs[e]);delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],a.A(this.children(e),(e=>{this.setParent(e)})),delete this._children[e]),a.A(i.A(this._in[e]),n),delete this._in[e],delete this._preds[e],a.A(i.A(this._out[e]),n),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,n){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(d.A(n))n=A;else{for(var t=n+="";!d.A(t);t=this.parent(t))if(t===e)throw new Error("Setting "+n+" as parent of "+e+" would create a cycle");this.setNode(n)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=n,this._children[n][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var n=this._parent[e];if(n!==A)return n}}children(e){if(d.A(e)&&(e=A),this._isCompound){var n=this._children[e];if(n)return i.A(n)}else{if(e===A)return this.nodes();if(this.hasNode(e))return[]}}predecessors(e){var n=this._preds[e];if(n)return i.A(n)}successors(e){var n=this._sucs[e];if(n)return i.A(n)}neighbors(e){var n=this.predecessors(e);if(n)return l(n,this.successors(e))}isLeaf(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length}filterNodes(e){var n=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});n.setGraph(this.graph());var t=this;a.A(this._nodes,(function(t,r){e(r)&&n.setNode(r,t)})),a.A(this._edgeObjs,(function(e){n.hasNode(e.v)&&n.hasNode(e.w)&&n.setEdge(e,t.edge(e))}));var r={};function o(e){var i=t.parent(e);return void 0===i||n.hasNode(i)?(r[e]=i,i):i in r?r[i]:o(i)}return this._isCompound&&a.A(n.nodes(),(function(e){n.setParent(e,o(e))})),n}setDefaultEdgeLabel(e){return o.A(e)||(e=r.A(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return v.A(this._edgeObjs)}setPath(e,n){var t=this,r=arguments;return p.A(e,(function(e,o){return r.length>1?t.setEdge(e,o,n):t.setEdge(e,o),o})),this}setEdge(){var e,n,t,r,o=!1,i=arguments[0];"object"==typeof i&&null!==i&&"v"in i?(e=i.v,n=i.w,t=i.name,2===arguments.length&&(r=arguments[1],o=!0)):(e=i,n=arguments[1],t=arguments[3],arguments.length>2&&(r=arguments[2],o=!0)),e=""+e,n=""+n,d.A(t)||(t=""+t);var u=y(this._isDirected,e,n,t);if(Object.prototype.hasOwnProperty.call(this._edgeLabels,u))return o&&(this._edgeLabels[u]=r),this;if(!d.A(t)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(n),this._edgeLabels[u]=o?r:this._defaultEdgeLabelFn(e,n,t);var s=function(e,n,t,r){var o=""+n,i=""+t;if(!e&&o>i){var u=o;o=i,i=u}var s={v:o,w:i};r&&(s.name=r);return s}(this._isDirected,e,n,t);return e=s.v,n=s.w,Object.freeze(s),this._edgeObjs[u]=s,b(this._preds[n],e),b(this._sucs[e],n),this._in[n][u]=s,this._out[e][u]=s,this._edgeCount++,this}edge(e,n,t){var r=1===arguments.length?_(this._isDirected,arguments[0]):y(this._isDirected,e,n,t);return this._edgeLabels[r]}hasEdge(e,n,t){var r=1===arguments.length?_(this._isDirected,arguments[0]):y(this._isDirected,e,n,t);return Object.prototype.hasOwnProperty.call(this._edgeLabels,r)}removeEdge(e,n,t){var r=1===arguments.length?_(this._isDirected,arguments[0]):y(this._isDirected,e,n,t),o=this._edgeObjs[r];return o&&(e=o.v,n=o.w,delete this._edgeLabels[r],delete this._edgeObjs[r],m(this._preds[n],e),m(this._sucs[e],n),delete this._in[n][r],delete this._out[e][r],this._edgeCount--),this}inEdges(e,n){var t=this._in[e];if(t){var r=v.A(t);return n?u.A(r,(function(e){return e.v===n})):r}}outEdges(e,n){var t=this._out[e];if(t){var r=v.A(t);return n?u.A(r,(function(e){return e.w===n})):r}}nodeEdges(e,n){var t=this.inEdges(e,n);if(t)return t.concat(this.outEdges(e,n))}}function b(e,n){e[n]?e[n]++:e[n]=1}function m(e,n){--e[n]||delete e[n]}function y(e,n,t,r){var o=""+n,i=""+t;if(!e&&o>i){var u=o;o=i,i=u}return o+"\x01"+i+"\x01"+(d.A(r)?"\0":r)}function _(e,n){return y(e,n.v,n.w,n.name)}w.prototype._nodeCount=0,w.prototype._edgeCount=0},697:(e,n,t)=>{t.d(n,{T:()=>r.T});var r=t(7981)}}]);