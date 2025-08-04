function L(E,B){for(var t=0;t<B.length;t++){const c=B[t];if(typeof c!="string"&&!Array.isArray(c)){for(const l in c)if(l!=="default"&&!(l in E)){const A=Object.getOwnPropertyDescriptor(c,l);A&&Object.defineProperty(E,l,A.get?A:{enumerable:!0,get:()=>c[l]})}}}return Object.freeze(Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}))}function z(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var j={},k;function Y(){return k||(k=1,(()=>{var E={52:(c,l,A)=>{function y(d){let h=document.createElement("div");return h.innerHTML=d,h.childNodes[0]}function g(d,h,f){var v=new Date;v.setTime(v.getTime()+24*f*60*60*1e3);var w="expires="+v.toGMTString();document.cookie=d+"="+escape(h)+"; "+w}function i(d){return d instanceof Element&&d.nodeType===Node.ELEMENT_NODE}A.d(l,{DR:()=>g,a8:()=>y,vq:()=>i})},176:(c,l,A)=>{A.d(l,{A:()=>u});var y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},g=window.device,i={},d=[];window.device=i;var h=window.document.documentElement,f=window.navigator.userAgent.toLowerCase(),v=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","pov_tv","hbbtv","ce-html"];function w(p,M){return p.indexOf(M)!==-1}function x(p){return w(f,p)}function m(p){return h.className.match(new RegExp(p,"i"))}function n(p){var M=null;m(p)||(M=h.className.replace(/^\s+|\s+$/g,""),h.className=M+" "+p)}function b(p){m(p)&&(h.className=h.className.replace(" "+p,""))}function e(){i.landscape()?(b("portrait"),n("landscape"),a("landscape")):(b("landscape"),n("portrait"),a("portrait")),r()}function a(p){for(var M=0;M<d.length;M++)d[M](p)}i.macos=function(){return x("mac")},i.ios=function(){return i.iphone()||i.ipod()||i.ipad()},i.iphone=function(){return!i.windows()&&x("iphone")},i.ipod=function(){return x("ipod")},i.ipad=function(){var p=navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return x("ipad")||p},i.android=function(){return!i.windows()&&x("android")},i.androidPhone=function(){return i.android()&&x("mobile")},i.androidTablet=function(){return i.android()&&!x("mobile")},i.blackberry=function(){return x("blackberry")||x("bb10")},i.blackberryPhone=function(){return i.blackberry()&&!x("tablet")},i.blackberryTablet=function(){return i.blackberry()&&x("tablet")},i.windows=function(){return x("windows")},i.windowsPhone=function(){return i.windows()&&x("phone")},i.windowsTablet=function(){return i.windows()&&x("touch")&&!i.windowsPhone()},i.fxos=function(){return(x("(mobile")||x("(tablet"))&&x(" rv:")},i.fxosPhone=function(){return i.fxos()&&x("mobile")},i.fxosTablet=function(){return i.fxos()&&x("tablet")},i.meego=function(){return x("meego")},i.cordova=function(){return window.cordova&&location.protocol==="file:"},i.nodeWebkit=function(){return y(window.process)==="object"},i.mobile=function(){return i.androidPhone()||i.iphone()||i.ipod()||i.windowsPhone()||i.blackberryPhone()||i.fxosPhone()||i.meego()},i.tablet=function(){return i.ipad()||i.androidTablet()||i.blackberryTablet()||i.windowsTablet()||i.fxosTablet()},i.desktop=function(){return!i.tablet()&&!i.mobile()},i.television=function(){for(var p=0;p<v.length;){if(x(v[p]))return!0;p++}return!1},i.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?w(screen.orientation.type,"portrait"):i.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)!==90:window.innerHeight/window.innerWidth>1},i.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?w(screen.orientation.type,"landscape"):i.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)===90:window.innerHeight/window.innerWidth<1},i.noConflict=function(){return window.device=g,this},i.ios()?i.ipad()?n("ios ipad tablet"):i.iphone()?n("ios iphone mobile"):i.ipod()&&n("ios ipod mobile"):i.macos()?n("macos desktop"):i.android()?i.androidTablet()?n("android tablet"):n("android mobile"):i.blackberry()?i.blackberryTablet()?n("blackberry tablet"):n("blackberry mobile"):i.windows()?i.windowsTablet()?n("windows tablet"):i.windowsPhone()?n("windows mobile"):n("windows desktop"):i.fxos()?i.fxosTablet()?n("fxos tablet"):n("fxos mobile"):i.meego()?n("meego mobile"):i.nodeWebkit()?n("node-webkit"):i.television()?n("television"):i.desktop()&&n("desktop"),i.cordova()&&n("cordova"),i.onChangeOrientation=function(p){typeof p=="function"&&d.push(p)};var s="resize";function o(p){for(var M=0;M<p.length;M++)if(i[p[M]]())return p[M];return"unknown"}function r(){i.orientation=o(["portrait","landscape"])}Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(s="orientationchange"),window.addEventListener?window.addEventListener(s,e,!1):window.attachEvent?window.attachEvent(s,e):window[s]=e,e(),i.type=o(["mobile","tablet","desktop"]),i.os=o(["ios","iphone","ipad","ipod","android","blackberry","macos","windows","fxos","meego","television"]),r();const u=i},396:c=>{c.exports="data:application/x-font-woff;charset=utf-8;base64,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"},540:c=>{c.exports=function(l){var A=document.createElement("style");return l.setAttributes(A,l.attributes),l.insert(A,l.options),A}},631:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.aliplayer-danmuku{position:absolute;top:0;left:0;width:100%;height:100%}.aliplayer-danmuku.abp{position:absolute}.aliplayer-danmuku.abp .container{z-index:0}.aliplayer-danmuku .danmu{position:absolute;width:100%;height:100%}.ali-danmuku-control{float:right;color:#fff;margin-right:5px;position:relative;display:table-cell;margin-top:8px}.ali-danmuku-control .iconfont{font-size:35px;cursor:pointer;vertical-align:middle;user-select:none;line-height:initial}.ali-danmuku-control .iconfont.icon-danmu-close{display:inline-block}.ali-danmuku-control .player-tooltip.close,.ali-danmuku-control .player-tooltip.open{right:-12px}@media (min-width: 768px){.ali-danmuku-control .icon-danmu-close:hover+.player-tooltip{display:block}.ali-danmuku-control .icon-danmu-open:hover+.player-tooltip{display:block}}.ali-danmuku-control .ali-danmu-input-wrap{width:200px;display:none}.ali-danmu-input{position:relative;width:100%;display:inline-block}.ali-danmu-input input{display:inline-block;width:100%;padding-right:40px;box-sizing:border-box;padding:5px 40px 5px 5px;background-color:rgba(130,132,138,0.4);border:1px solid #c0c4cc;font-size:14px;color:#fff;border-radius:3px}.ali-danmu-input input:focus{outline:none;border-color:#0f84fd}.ali-danmu-input .danmu-input-enter{position:absolute;right:0;top:0;border:1px solid;color:#fff;background-color:#0f84fd;border-color:#0f84fd;font-size:12px;padding:6px 7px;display:inline-block;height:28px;border-radius:0 3px 3px 0;cursor:pointer}.ali-danmu-input .danmu-input-enter:focus{outline:none}.ali-danmu-input .danmu-input-enter:hover{background-color:#288df5;border-color:#288df5}
`,""]);const h=d},807:(c,l,A)=>{A.d(l,{A:()=>r});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i),h=A(4417),f=A.n(h),v=new URL(A(5029),A.b),w=new URL(A(396),A.b),x=new URL(A(4427),A.b),m=new URL(A(7214),A.b),n=d()(g()),b=f()(v),e=f()(v,{hash:"#iefix"}),a=f()(w),s=f()(x),o=f()(m,{hash:"#iconfont"});n.push([c.id,`@font-face{font-family:"iconfont";src:url(${b});src:url(${e}) format("embedded-opentype"),url(${a}) format("woff"),url(${s}) format("truetype"),url(${o}) format("svg")}.iconfont{font-family:"iconfont" !important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-list:before{content:"\\e643"}.icon-skipnext:before{content:"\\ea9e"}.icon-skip-previous:before{content:"\\e6d3"}.icon-close:before{content:"\\e616"}.icon-player-rotate-left:before{content:"\\e658"}.icon-player-rotate-right:before{content:"\\e659"}.icon-player-switch:before{content:"\\e781"}.icon-danmu-close:before{content:"\\e696"}.icon-danmu-open:before{content:"\\e697"}.icon-player-play:before{content:"\\e641"}body{font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif}.vip-join{color:#00c1de}.vip_limit_content{display:flex;width:100%;height:100%;flex-wrap:wrap;justify-content:center;align-items:center}.vip_limit_content .title{font-size:18px;line-height:36px;color:#fff;text-align:center;width:100%}.vip_limit_button_box{text-align:center;white-space:nowrap;overflow:hidden;width:100%}.vip_limit_btn{display:inline-block;min-width:100px;position:relative;background:#f60;padding:0 35px;margin:0px 5px 20px 5px;border-radius:38px;font-size:18px;line-height:38px;color:#623A0C;text-align:center;background-image:linear-gradient(-135deg, #FBE8A8 0%, #F8E7AC 15%, #E2C078 100%);cursor:pointer}.vip_limit_close{text-align:center}.vip_limit_close span{display:inline-block;width:40px;height:40px;line-height:36px;background:rgba(165,165,165,0.54);border-radius:50%;font-size:24px;cursor:pointer}
`,""]);const r=n},1113:c=>{c.exports=function(l,A){if(A.styleSheet)A.styleSheet.cssText=l;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(l))}}},1209:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.player-hidden{display:none !important}.caption-components{float:right;color:#fff;height:35px;position:relative;box-sizing:border-box;margin-top:5px}.current-caption{display:flex;height:100%;align-items:center;justify-content:center;width:100px;cursor:pointer}.caption-list{position:absolute;bottom:46px;display:none;padding:0;margin:0;list-style:none;height:150px;width:100px;overflow-y:scroll}.caption-list li{text-align:center;width:100px;line-height:30px;background-color:rgba(0,0,0,0.6);cursor:pointer}.caption-list li.current{color:#00c1de}.caption-list li+li{border-top:1px solid rgba(78,78,78,0.3)}.caption-list li:hover{background-color:rgba(0,0,0,0.5)}@media (max-width: 768px){.current-caption{width:40px}.caption-list li{width:43px}}.prism-player .prism-info-display .switchimg{color:#fff}
`,""]);const h=d},1601:c=>{c.exports=function(l){return l[1]}},1961:c=>{c.exports="data:application/vnd.ms-fontobject;base64,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"},2008:(c,l,A)=>{A.d(l,{A:()=>p});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i),h=A(4417),f=A.n(h),v=new URL(A(1961),A.b),w=new URL(A(9099),A.b),x=new URL(A(3655),A.b),m=new URL(A(6999),A.b),n=new URL(A(2322),A.b),b=d()(g()),e=f()(v),a=f()(v,{hash:"#iefix"}),s=f()(w),o=f()(x),r=f()(m),u=f()(n,{hash:"#iconfont"});b.push([c.id,`@font-face{font-family:"iconfont";src:url(${e});src:url(${a}) format("embedded-opentype"),url(${s}) format("woff2"),url(${o}) format("woff"),url(${r}) format("truetype"),url(${u}) format("svg")}.iconfont{font-family:"iconfont" !important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-play:before{content:"\\e726"}.icon-arrowdown:before{content:"\\e623"}.clearfix:before,.clearfix:after{content:"";display:table;line-height:0}.clearfix:after{clear:both}.clearfix{*zoom:1}.progress-component{padding:8px;background-color:rgba(0,0,0,0.35);position:absolute;display:none;box-sizing:border-box;bottom:55px;font-size:12px;color:#fff;height:74px;z-index:10}.progress-component .progress-content{height:100%;position:relative;padding-right:45px}.progress-component .img-wrap{float:left;width:100px;text-align:center;border:1px solid rgba(0,0,0,0.6);height:100%}.progress-component .img-wrap img{vertical-align:top;max-width:100%;max-height:100%;object-fit:contain}.progress-component .info{float:left;padding-left:10px;width:150px}.progress-component .info .describe{line-height:18px;margin-top:8px;height:36px;overflow:hidden}.progress-component .pregress-play-btn{display:inline-block;position:absolute;right:6px;bottom:0px;font-size:28px;color:#ca7838;cursor:pointer}.progress-component .icon-arrowdown{left:-2px;position:absolute;font-size:31px;color:rgba(0,0,0,0.35);line-height:6px;top:100%}
`,""]);const p=b},2049:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.bullet-screen{position:absolute;white-space:nowrap;animation:bullet 10s linear infinite}@keyframes bullet{from{left:100%}to{left:0%;transform:translateX(-100%)}}
`,""]);const h=d},2190:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.pause-ad{width:60%;height:50%;background:#000;top:50%;left:50%;transform:translate(-50%, -50%);position:absolute;display:none}.pause-ad .btn-close{position:absolute;top:5px;right:5px;background-color:#333;width:2px;height:15px;padding:2px 8px;cursor:pointer}.pause-ad .btn-close i{background-color:#fff;width:2px;height:15px;position:absolute}.pause-ad .btn-close .split-left{transform:rotate(-45deg)}.pause-ad .btn-close .split-right{transform:rotate(45deg)}.pause-ad .ad-text{position:absolute;left:5px;top:5px;background-color:#333;color:#fff;padding:3px 5px;font-size:14px}.pause-ad .ad-content{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.pause-ad .ad-content img{max-width:100%;max-height:100%}
`,""]);const h=d},2322:c=>{c.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPCEtLQoyMDEzLTktMzA6IENyZWF0ZWQuCi0tPgo8c3ZnPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgaWNvbmZvbnQKPC9tZXRhZGF0YT4KPGRlZnM+Cgo8Zm9udCBpZD0iaWNvbmZvbnQiIGhvcml6LWFkdi14PSIxMDI0IiA+CiAgPGZvbnQtZmFjZQogICAgZm9udC1mYW1pbHk9Imljb25mb250IgogICAgZm9udC13ZWlnaHQ9IjUwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSIxMDI0IgogICAgYXNjZW50PSI4OTYiCiAgICBkZXNjZW50PSItMTI4IgogIC8+CiAgICA8bWlzc2luZy1nbHlwaCAvPgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3dkb3duLWNvcHkiIHVuaWNvZGU9IiYjNTg5MTU7IiBkPSJNNzI2LjY1MyA0NjYuNjk0aC00MjkuMzA2bDIxNC44NDYtMjA4Ljg1MXoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4KCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJwbGF5IiB1bmljb2RlPSImIzU5MTc0OyIgZD0iTTUxMiA4NTMuMzMyOTkyQzI1NC43MzMzMTIgODUzLjMzMjk5MiA0Mi42NjU5ODQgNjQxLjI2MzYxNiA0Mi42NjU5ODQgMzg0czIxMi4wNjczMjgtNDY5LjMzMTk2OCA0NjkuMzMxOTY4LTQ2OS4zMzE5NjhjMjU3LjI2NDY0IDAgNDY5LjMzNDAxNiAyMTIuMDY3MzI4IDQ2OS4zMzQwMTYgNDY5LjMzMTk2OCAwIDI1Ny4yNjQ2NC0yMTIuMDY5Mzc2IDQ2OS4zMzQwMTYtNDY5LjMzNDAxNiA0NjkuMzM0MDE2TTUxMi0xMjhDMjI4LjY5Mjk5Mi0xMjggMCAxMDAuNjkyOTkyIDAgMzg0IDAgNjY3LjMwNzAwOCAyMjguNjkyOTkyIDg5NiA1MTIgODk2YzI4My4zMDcwMDggMCA1MTItMjI4LjY5Mjk5MiA1MTItNTEyIDAtMjgzLjMwNzAwOC0yMjguNjkyOTkyLTUxMi01MTItNTEyTTYzMS44ODM3NzYgMzk5Ljg5NzZjMTAuNjE4ODgtNy45NDkzMTIgMTAuNjE4ODgtMjMuODQ2OTEyIDAtMzEuNzk1Mkw0MDUuMjM3NzYgMjE3LjA2NzUyQzM5NC42MTg4OCAyMDkuMTE5MjMyIDM4NCAyMTQuNDE3NDA4IDM4NCAyMjcuNjY1OTJWNTQwLjMzMjAzMmMwIDEzLjI0OTUzNiAxMC42MTk5MDQgMTguNTQ4NzM2IDIxLjIzNzc2IDEwLjYwMDQ0OGwyMjYuNjQ2MDE2LTE1MS4wMzQ4OHoiICBob3Jpei1hZHYteD0iMTAyNSIgLz4KCiAgICAKCgogIDwvZm9udD4KPC9kZWZzPjwvc3ZnPgo="},2484:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.start-ad{width:100%;height:100%;box-sizing:border-box;background-color:#000;position:absolute;z-index:9999}.start-ad .tip{position:absolute;right:5px;top:5px;background-color:#333;color:#fff;font-size:14px;text-align:center;padding:3px 7px}.start-ad .tip i{font-style:normal}.start-ad a{width:100%;height:100%;display:inline-block;text-align:center;display:flex;align-items:center;justify-content:center}.start-ad a img{max-width:100%;max-height:100%}
`,""]);const h=d},3525:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.abp{position:relative}.abp .container{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);position:absolute;display:block;overflow:hidden;margin:0;border:0;top:0;left:0;bottom:0;right:0;z-index:9999;touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.abp .container .cmt{-webkit-transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transform:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);-webkit-transform-origin:0% 0%;-ms-transform-origin:0% 0%;transform-origin:0% 0%;position:absolute;padding:3px 0 0 0;margin:0;color:#fff;font-family:SimHei, SimSun, Heiti, "MS Mincho", "Meiryo", "Microsoft YaHei", monospace;font-size:25px;text-decoration:none;text-shadow:-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;line-height:100%;letter-spacing:0;word-break:keep-all;white-space:pre}.abp .container .cmt.noshadow{text-shadow:none}.abp .container .cmt.rshadow{text-shadow:-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white}@font-face{font-family:"\\9ED1\\4F53";src:local("SimHei")}@font-face{font-family:"\\5B8B\\4F53";src:local("SimSun")}@font-face{font-family:"\\534E\\6587\\6977\\4F53";src:local("SimKai")}@font-face{font-family:"\\5E7C\\5706";src:local("YouYuan")}@font-face{font-family:"\\5FAE\\8F6F\\96C5\\9ED1";src:local("Microsoft YaHei")}
`,""]);const h=d},3655:c=>{c.exports="data:font/woff;base64,d09GRgABAAAAAARoAAsAAAAABswAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8mUkYY21hcAAAAYAAAABWAAABhmkn0RRnbHlmAAAB2AAAAJEAAACsoFCg7WhlYWQAAAJsAAAALwAAADYU+6wjaGhlYQAAApwAAAAeAAAAJAfeA4VobXR4AAACvAAAAAwAAAAMDAEAAGxvY2EAAALIAAAACAAAAAgADgBWbWF4cAAAAtAAAAAeAAAAIAEQADBuYW1lAAAC8AAAAUUAAAJtPlT+fXBvc3QAAAQ4AAAALgAAAD/D5yXjeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeKT9XY27438AQw9zA0AAUZgTJAQDi6gwteJztkMENgDAMAy9p6QOxBRLiwUC8GJ+OUdwUtsDSxYqTl4EJSOIQGezC6DqVWuSJOfIcP0Vu+L3WrTX4XDLdSrhrFH4tMfd3897WoDdbtwH+ADzlDm4AAHicTYu7DcIwGITvt/FDjiIEQnFtRTItBQTmQGIBJskWbOQeUURykyI7pEKGP12uuu8eILDEQB8IgIIXQ7kzvZdYAr9+A9mjgkfLvYZp4DtcI2TEkQ2jhmwOW9Lxsjt3XiCVWSlyKZFTqswpl5E55EyBeXxaO9m6tvKxlKvx97RaZX6JyuzNSxtHN2c0/rNfLF8AAAB4nGNgZGBgAGLxnctexvPbfGXgZmEAgRvvTIQR9P8GFgbmBiCXg4EJJAoAMOgKOgB4nGNgZGBgbvjfwBDDAmQxMLAwMIBpJMAMAEciAm0AAAQAAAAEAAAABAEAAAAAAAAADgBWeJxjYGRgYGBmUAFiEGACYi4gZGD4D+YzAAAMZAFBAAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICZkYmRmZGFgS+xqCi/PCW/PE83Ob+gkqUgJ7GSgQEAYa8HrwAA"},4078:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.memory-play-wrap{position:absolute;right:10px;bottom:55px}.memory-play-wrap .memory-play{padding:13px 20px;background-color:#191919;background-color:rgba(25,25,25,0.88);border-radius:4px;color:#fff;font-size:14px;user-select:none}.memory-play-wrap .memory-play .icon-close{transition:color .3s;font-size:14px;cursor:pointer}@media (min-width: 768px){.memory-play-wrap .memory-play .icon-close:hover{color:#00c1de}}.memory-play-wrap .memory-play .play-jump{color:#00c1de;padding:5px;border-radius:3px;cursor:pointer}@media (min-width: 768px){.memory-play-wrap .memory-play .play-jump:hover{background-color:rgba(255,255,255,0.2)}}
`,""]);const h=d},4200:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.player-hidden{display:none !important}.quality-components{float:right;color:#fff;height:35px;position:relative;box-sizing:border-box;margin-top:4px}.current-quality{display:flex;height:100%;align-items:center;justify-content:center;width:70px;cursor:pointer}.quality-list{position:absolute;bottom:46px;display:none;padding:0;margin:0;list-style:none;width:70px}.quality-list li{text-align:center;width:100%;line-height:30px;background-color:rgba(0,0,0,0.6);cursor:pointer}.quality-list li.current{color:#00c1de}.quality-list li+li{border-top:1px solid rgba(78,78,78,0.3)}.quality-list li:hover{background-color:rgba(0,0,0,0.5)}.quality-modal{position:absolute;bottom:20%;left:5%;background-color:rgba(0,0,0,0.6);border-radius:5px;color:#fff;padding:10px 15px;font-size:14px;display:none}.quality-modal span.current-quality-tag{color:#00c1de}@media (max-width: 768px){.current-quality{width:40px}.quality-list li{width:45px}}
`,""]);const h=d},4417:c=>{c.exports=function(l,A){return A||(A={}),l&&(l=String(l.__esModule?l.default:l),/^['"].*['"]$/.test(l)&&(l=l.slice(1,-1)),A.hash&&(l+=A.hash),/["'() \t\n]|(%20)/.test(l)||A.needQuotes?'"'.concat(l.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):l)}},4427:c=>{c.exports="data:font/ttf;base64,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Ly8vRS8vL0YuLi6jAmNKSmMCAmNKSmP+0wFJNjZJAQFJNjZJtQcHUjEHDhIIQQcHYgcSAAACAAD/0wOqAzQAIQBDAAA3IT4BNzU0NjIWHQEOAQchFxYUBiIvAS4BNTQ/ATYyFhQHASEOAQcVFAYiJj0BPgE3IScmNDYyHwEeARUUDwEGIiY0N8YCGio1AREeEQJZRf3NdgoUGQqcBQUKnAoZFAoCJ/2WKjUBER4RAllFAlNdCRMZCp0FBQqdChkTCcABNSpgDxERD2BFWQJ2ChkUCp0FDAUOCJ0KFBkKAUoBNSpgDxERD2BFWQJdChkTCaAFDQUNCZ0KFBkKAAAAEgDeAAEAAAAAAAAAFQAAAAEAAAAAAAEACAAVAAEAAAAAAAIABwAdAAEAAAAAAAMACAAkAAEAAAAAAAQACAAsAAEAAAAAAAUACwA0AAEAAAAAAAYACAA/AAEAAAAAAAoAKwBHAAEAAAAAAAsAEwByAAMAAQQJAAAAKgCFAAMAAQQJAAEAEACvAAMAAQQJAAIADgC/AAMAAQQJAAMAEADNAAMAAQQJAAQAEADdAAMAAQQJAAUAFgDtAAMAAQQJAAYAEAEDAAMAAQQJAAoAVgETAAMAAQQJAAsAJgFpCkNyZWF0ZWQgYnkgaWNvbmZvbnQKaWNvbmZvbnRSZWd1bGFyaWNvbmZvbnRpY29uZm9udFZlcnNpb24gMS4waWNvbmZvbnRHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQAKAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQACgBpAGMAbwBuAGYAbwBuAHQAUgBlAGcAdQBsAGEAcgBpAGMAbwBuAGYAbwBuAHQAaQBjAG8AbgBmAG8AbgB0AFYAZQByAHMAaQBvAG4AIAAxAC4AMABpAGMAbwBuAGYAbwBuAHQARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQABeAUxbXVsdQhza2lwbmV4dAVjbG9zZQRwbGF5DXNraXAtcHJldmlvdXMRYXJyb3ctcm90YXRlLWxlZnQSYXJyb3ctcm90YXRlLXJpZ2h0EmJvZmFuZ3FpLWRhbm11Z3VhbhFib2ZhbmdxaS1kYW5tdWthaQ5uZWlyb25ncWllaHVhbgAA"},4843:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.playlist-component{color:#fff;float:left;height:35px;margin-top:5px;display:flex;align-items:center;position:relative}.playlist-component i{color:#fff;display:inline-block;font-size:22px;display:block;margin-top:7px;cursor:pointer}.playlist-component i+i{margin-left:3px}@media (min-width: 768px){.playlist-component i:hover+.player-tooltip{display:block}}.playlist-component .player-tooltip.prev{left:-10px}.playlist-component .player-tooltip.list{left:5px}.playlist-component .player-tooltip.next{right:-12px}.playlist-content{position:absolute;right:0;width:0px;padding-bottom:48px;box-sizing:border-box;height:100%;transition:all .38s ease-in-out;overflow:hidden}.playlist-content .list{background-color:#000;background-color:rgba(0,0,0,0.3);height:100%;overflow:auto}.playlist-content .list .video-item{color:#fff;padding:0px 10px;line-height:35px;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.playlist-content .list .video-item.active{background-color:#000;color:#00ddff}@media (min-width: 768px){.playlist-content .list .video-item:hover{background-color:#000;color:#00ddff}}.player-tooltip{position:absolute;display:none;font-size:12px;color:#fff;line-height:28px;letter-spacing:0;text-align:center;background:#3c3c3c;box-shadow:0 0 5px 0 rgba(0,0,0,0.1);height:28px;top:-48px;padding:0 5px;white-space:nowrap}.playlist-skip-tip{padding:5px 15px;position:absolute;top:50%;left:50%;z-index:30;line-height:30px;font-size:14px;border-radius:4px;background:rgba(255,255,255,0.8);color:#000;text-align:center;transform:translate(-50%, -50%)}
`,""]);const h=d},5029:c=>{c.exports="data:application/vnd.ms-fontobject;base64,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"},5056:(c,l,A)=>{c.exports=function(y){var g=A.nc;g&&y.setAttribute("nonce",g)}},5072:c=>{var l=[];function A(i){for(var d=-1,h=0;h<l.length;h++)if(l[h].identifier===i){d=h;break}return d}function y(i,d){for(var h={},f=[],v=0;v<i.length;v++){var w=i[v],x=d.base?w[0]+d.base:w[0],m=h[x]||0,n="".concat(x," ").concat(m);h[x]=m+1;var b=A(n),e={css:w[1],media:w[2],sourceMap:w[3],supports:w[4],layer:w[5]};if(b!==-1)l[b].references++,l[b].updater(e);else{var a=g(e,d);d.byIndex=v,l.splice(v,0,{identifier:n,updater:a,references:1})}f.push(n)}return f}function g(i,d){var h=d.domAPI(d);return h.update(i),function(f){if(f){if(f.css===i.css&&f.media===i.media&&f.sourceMap===i.sourceMap&&f.supports===i.supports&&f.layer===i.layer)return;h.update(i=f)}else h.remove()}}c.exports=function(i,d){var h=y(i=i||[],d=d||{});return function(f){f=f||[];for(var v=0;v<h.length;v++){var w=A(h[v]);l[w].references--}for(var x=y(f,d),m=0;m<h.length;m++){var n=A(h[m]);l[n].references===0&&(l[n].updater(),l.splice(n,1))}h=x}}},5570:(c,l,A)=>{A.d(l,{A:()=>m});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i),h=A(4417),f=A.n(h),v=new URL(A(9379),A.b),w=d()(g()),x=f()(v);w.push([c.id,`.player-olympic-player-next{width:32px;height:32px;background:url(${x}) center no-repeat;background-size:contain;float:left;margin-left:10px;margin-top:8px;cursor:pointer;position:relative}.player-olympic-player-next-tip{position:absolute;top:-45px;display:none;font-size:12px;color:#ffffff;line-height:28px;letter-spacing:0;text-align:center;background:#3c3c3c;box-shadow:0 0 5px 0 rgba(0,0,0,0.1);width:58px;height:28px}.player-olympic-player-next:hover .player-olympic-player-next-tip{display:block}
`,""]);const m=w},6175:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.player-hidden{display:none !important}.rate-components{float:right;color:#fff;height:35px;position:relative;box-sizing:border-box;margin-top:5px}.current-rate{display:flex;height:100%;align-items:center;justify-content:center;width:70px;cursor:pointer}.rate-list{position:absolute;bottom:46px;display:none;padding:0;margin:0;list-style:none}.rate-list li{text-align:center;width:70px;line-height:30px;background-color:rgba(0,0,0,0.6);cursor:pointer}.rate-list li.current{color:#00c1de}.rate-list li+li{border-top:1px solid rgba(78,78,78,0.3)}.rate-list li:hover{background-color:rgba(0,0,0,0.5)}@media (max-width: 768px){.current-rate{width:40px}.rate-list li{width:43px}}
`,""]);const h=d},6314:c=>{c.exports=function(l){var A=[];return A.toString=function(){return this.map(function(y){var g="",i=y[5]!==void 0;return y[4]&&(g+="@supports (".concat(y[4],") {")),y[2]&&(g+="@media ".concat(y[2]," {")),i&&(g+="@layer".concat(y[5].length>0?" ".concat(y[5]):""," {")),g+=l(y),i&&(g+="}"),y[2]&&(g+="}"),y[4]&&(g+="}"),g}).join("")},A.i=function(y,g,i,d,h){typeof y=="string"&&(y=[[null,y,void 0]]);var f={};if(i)for(var v=0;v<this.length;v++){var w=this[v][0];w!=null&&(f[w]=!0)}for(var x=0;x<y.length;x++){var m=[].concat(y[x]);i&&f[m[0]]||(h!==void 0&&(m[5]===void 0||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=h),g&&(m[2]&&(m[1]="@media ".concat(m[2]," {").concat(m[1],"}")),m[2]=g),d&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=d):m[4]="".concat(d)),A.push(m))}},A}},6481:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.aliplayer-rotate-mirror{float:right;color:#fff;display:flex;align-items:center;height:35px;position:relative;margin-top:5px}.aliplayer-rotate-mirror i{color:#fff;display:inline-block;font-size:22px;display:block;margin-top:7px;cursor:pointer;margin-right:10px}.aliplayer-rotate-mirror i.icon-player-switch{font-size:24px;font-weight:bold}@media (min-width: 768px){.aliplayer-rotate-mirror i:hover+.player-tooltip{display:block}}.aliplayer-rotate-mirror .mirror-option{position:absolute;background-color:#3c3c3c;top:0;transform:translateY(-103%);right:-20px}.aliplayer-rotate-mirror .mirror-option .mirror-item{font-size:14px;color:#ebecec;line-height:30px;white-space:nowrap;padding:0 15px;cursor:pointer;user-select:none}.aliplayer-rotate-mirror .mirror-option .mirror-item[data-id="counterclockwise"]{display:none}.aliplayer-rotate-mirror .mirror-option .mirror-item[data-id="clockwise"]{display:none}.aliplayer-rotate-mirror .mirror-option .mirror-item.active{background-color:rgba(216,216,216,0.1);color:#00c1de}.aliplayer-rotate-mirror .player-tooltip.counterclockwise{left:-35px}.aliplayer-rotate-mirror .player-tooltip.clockwise{left:-5px}.aliplayer-rotate-mirror .player-tooltip.switch{right:7px}@media (max-width: 768px){.aliplayer-rotate-mirror .mirror-option .mirror-item[data-id="counterclockwise"]{display:block}.aliplayer-rotate-mirror .mirror-option .mirror-item[data-id="clockwise"]{display:block}}
`,""]);const h=d},6613:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.video-ad-component{width:100%;height:100%;position:absolute;top:0;left:0;z-index:2147483647;background-color:#000;font-size:12px}.video-ad-component #video-ad-content{width:100%;height:100%}.video-ad-component .video-ad-link{width:100%;height:100%;display:block;position:absolute;top:0;left:0}.video-ad-component .video-ad-close{background-color:rgba(59,59,59,0.85);position:absolute;top:15px;right:20px;color:#fff;line-height:26px;padding:0 10px;user-select:none}.video-ad-component .video-ad-close #video-ad-duration{color:#00c1de;vertical-align:top;font-size:14px;position:relative;display:inline-block;text-align:right}.video-ad-component .video-ad-close #video-ad-duration::after{background-color:#fff;position:absolute;content:'';right:-7px;top:8px;bottom:8px;width:1px}.video-ad-component .video-ad-close label{cursor:pointer;display:inline-block}.video-ad-component .video-ad-close .icon-close{font-size:12px;vertical-align:top}@media (min-width: 768px){.video-ad-component .video-ad-close .icon-close:hover{color:#00c1de}}.video-ad-component .video-ad-close .video-ad-close-text{padding:0 5px 0 10px}.video-ad-component .video-ad-detail{position:absolute;right:35px;bottom:30px;background-color:rgba(0,222,255,0.85);color:#fff;padding:8px 12px;user-select:none;cursor:pointer;transition:background-color .15s}@media (min-width: 768px){.video-ad-component .video-ad-detail:hover{background-color:#00deff}}.video-ad-component .autoplay-video-ad{position:absolute;color:#fff;top:50%;left:50%;text-align:center;padding:10px;border-radius:5px;background-color:rgba(144,147,153,0.85);transform:translate(-50%, -50%);display:none}.video-ad-component .autoplay-video-ad i{font-size:42px;margin-bottom:7px;display:inline-block;cursor:pointer}.video-ad-component .autoplay-video-ad i+span{margin-bottom:5px}.video-ad-component .autoplay-video-ad span{display:block}.controlbar-element-hidden{display:none !important}
`,""]);const h=d},6730:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.many-video-ad-component{width:100%;height:100%;position:absolute;top:0;left:0;z-index:2147483647;background-color:#000;font-size:12px}.many-video-ad-component #many-video-ad-content{width:100%;height:100%}.many-video-ad-component .many-video-ad-link{width:100%;height:100%;display:block;position:absolute;top:0;left:0}.many-video-ad-component .many-video-ad-close{background-color:rgba(59,59,59,0.85);position:absolute;top:15px;right:20px;color:#fff;line-height:26px;padding:0 10px;user-select:none}.many-video-ad-component .many-video-ad-close #many-video-ad-duration{color:#00c1de;vertical-align:top;font-size:14px;position:relative;display:inline-block;text-align:right}.many-video-ad-component .many-video-ad-close #many-video-ad-duration::after{background-color:#fff;position:absolute;content:'';right:-7px;top:8px;bottom:8px;width:1px}.many-video-ad-component .many-video-ad-close label{cursor:pointer;display:inline-block}.many-video-ad-component .many-video-ad-close .icon-close{font-size:12px;vertical-align:top}@media (min-width: 768px){.many-video-ad-component .many-video-ad-close .icon-close:hover{color:#00c1de}}.many-video-ad-component .many-video-ad-close .many-video-ad-close-text{padding:0 5px 0 10px}.many-video-ad-component .many-video-ad-detail{position:absolute;right:35px;bottom:30px;background-color:rgba(0,222,255,0.85);color:#fff;padding:8px 12px;user-select:none;cursor:pointer;transition:background-color .15s}@media (min-width: 768px){.many-video-ad-component .many-video-ad-detail:hover{background-color:#00deff}}.many-video-ad-component .autoplay-many-video-ad{position:absolute;color:#fff;top:50%;left:50%;text-align:center;padding:10px;border-radius:5px;background-color:rgba(144,147,153,0.85);transform:translate(-50%, -50%);display:none}.many-video-ad-component .autoplay-many-video-ad i{font-size:42px;margin-bottom:7px;display:inline-block;cursor:pointer}.many-video-ad-component .autoplay-many-video-ad i+span{margin-bottom:5px}.many-video-ad-component .autoplay-many-video-ad span{display:block}.controlbar-element-hidden{display:none !important}
`,""]);const h=d},6999:c=>{c.exports="data:font/ttf;base64,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"},7214:c=>{c.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPCEtLQoyMDEzLTktMzA6IENyZWF0ZWQuCi0tPgo8c3ZnPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgaWNvbmZvbnQKPC9tZXRhZGF0YT4KPGRlZnM+Cgo8Zm9udCBpZD0iaWNvbmZvbnQiIGhvcml6LWFkdi14PSIxMDI0IiA+CiAgPGZvbnQtZmFjZQogICAgZm9udC1mYW1pbHk9Imljb25mb250IgogICAgZm9udC13ZWlnaHQ9IjUwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSIxMDI0IgogICAgYXNjZW50PSI4OTYiCiAgICBkZXNjZW50PSItMTI4IgogIC8+CiAgICA8bWlzc2luZy1nbHlwaCAvPgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieCIgdW5pY29kZT0ieCIgaG9yaXotYWR2LXg9IjEwMDEiCmQ9Ik0yODEgNTQzcS0yNyAtMSAtNTMgLTFoLTgzcS0xOCAwIC0zNi41IC02dC0zMi41IC0xOC41dC0yMyAtMzJ0LTkgLTQ1LjV2LTc2aDkxMnY0MXEwIDE2IC0wLjUgMzB0LTAuNSAxOHEwIDEzIC01IDI5dC0xNyAyOS41dC0zMS41IDIyLjV0LTQ5LjUgOWgtMTMzdi05N2gtNDM4djk3ek05NTUgMzEwdi01MnEwIC0yMyAwLjUgLTUydDAuNSAtNTh0LTEwLjUgLTQ3LjV0LTI2IC0zMHQtMzMgLTE2dC0zMS41IC00LjVxLTE0IC0xIC0yOS41IC0wLjUKdC0yOS41IDAuNWgtMzJsLTQ1IDEyOGgtNDM5bC00NCAtMTI4aC0yOWgtMzRxLTIwIDAgLTQ1IDFxLTI1IDAgLTQxIDkuNXQtMjUuNSAyM3QtMTMuNSAyOS41dC00IDMwdjE2N2g5MTF6TTE2MyAyNDdxLTEyIDAgLTIxIC04LjV0LTkgLTIxLjV0OSAtMjEuNXQyMSAtOC41cTEzIDAgMjIgOC41dDkgMjEuNXQtOSAyMS41dC0yMiA4LjV6TTMxNiAxMjNxLTggLTI2IC0xNCAtNDhxLTUgLTE5IC0xMC41IC0zN3QtNy41IC0yNXQtMyAtMTV0MSAtMTQuNQp0OS41IC0xMC41dDIxLjUgLTRoMzdoNjdoODFoODBoNjRoMzZxMjMgMCAzNCAxMnQyIDM4cS01IDEzIC05LjUgMzAuNXQtOS41IDM0LjVxLTUgMTkgLTExIDM5aC0zNjh6TTMzNiA0OTh2MjI4cTAgMTEgMi41IDIzdDEwIDIxLjV0MjAuNSAxNS41dDM0IDZoMTg4cTMxIDAgNTEuNSAtMTQuNXQyMC41IC01Mi41di0yMjdoLTMyN3oiIC8+CiAgICAKCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSIxbXVsdSIgdW5pY29kZT0iJiM1ODk0NzsiIGQ9Ik0xMDcuMiA2ODMuMm0tNjcuMiAwYTQuMiA0LjIgMCAxIDAgMTM0LjQgMCA0LjIgNC4yIDAgMSAwLTEzNC40IDBaTTk4MC44IDc1MC40IDI5Ny42IDc1MC40Yy05LjYgMC0xNi04LTE2LTE2bDAtMTAyLjRjMC05LjYgOC0xNiAxNi0xNmw2ODMuMiAwYzkuNiAwIDE2IDggMTYgMTZsMCAxMDIuNEM5OTYuOCA3NDQgOTg4LjggNzUwLjQgOTgwLjggNzUwLjR6TTk2IDM5OC40bS02Ny4yIDBhNC4yIDQuMiAwIDEgMCAxMzQuNCAwIDQuMiA0LjIgMCAxIDAtMTM0LjQgMFpNOTY4IDQ2NS42IDI4NC44IDQ2NS42Yy05LjYgMC0xNi04LTE2LTE2bDAtMTAyLjRjMC05LjYgOC0xNiAxNi0xNmw2ODMuMiAwYzkuNiAwIDE2IDggMTYgMTZsMCAxMDIuNEM5ODQgNDU3LjYgOTc3LjYgNDY1LjYgOTY4IDQ2NS42ek05NiAxMDAuOG0tNjcuMiAwYTQuMiA0LjIgMCAxIDAgMTM0LjQgMCA0LjIgNC4yIDAgMSAwLTEzNC40IDBaTTk2OCAxNjggMjg0LjggMTY4Yy05LjYgMC0xNi04LTE2LTE2bDAtMTAyLjRjMC05LjYgOC0xNiAxNi0xNmw2ODMuMiAwYzkuNiAwIDE2IDggMTYgMTZsMCAxMDIuNEM5ODQgMTYwIDk3Ny42IDE2OCA5NjggMTY4eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9InNraXBuZXh0IiB1bmljb2RlPSImIzYwMDYyOyIgZD0iTTY4Mi42NjY2NjcgMTIyLjAyNjY2NyA3NjggMTIyLjAyNjY2NyA3NjggNjM0LjAyNjY2NyA2ODIuNjY2NjY3IDYzNC4wMjY2NjdNMjU2IDEyMi4wMjY2NjcgNjE4LjY2NjY2NyAzNzguMDI2NjY3IDI1NiA2MzQuMDI2NjY3IDI1NiAxMjIuMDI2NjY3WiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9ImNsb3NlIiB1bmljb2RlPSImIzU4OTAyOyIgZD0iTTg3Ny4yMTYgNDA0LjE5Mk01NzUuMzI4IDM4NS41MDQgOTQ2Ljc4NCA3NTUuMzI4YzE3LjU2OCAxNy41MDQgMTcuNjY0IDQ1LjgyNCAwLjE5MiA2My40MjQtMTcuNTA0IDE3LjYzMi00NS43OTIgMTcuNjY0LTYzLjM2IDAuMTkyTDUxMi4wMzIgNDQ5LjA1NiAxNDMuNzEyIDgxOC43ODRDMTI2LjMwNCA4MzYuMjg4IDk3LjkyIDgzNi4zNTIgODAuMzg0IDgxOC44OCA2Mi44NDggODAxLjM3NiA2Mi44MTYgNzcyLjk5MiA4MC4yODggNzU1LjQyNGwzNjguMjI0LTM2OS42MzJMNzcuMjE2IDE2LjE5MmMtMTcuNTY4LTE3LjUwNC0xNy42NjQtNDUuODI0LTAuMTkyLTYzLjQyNCA4LjczNi04LjggMjAuMjU2LTEzLjIxNiAzMS43NzYtMTMuMjE2IDExLjQyNCAwIDIyLjg0OCA0LjM1MiAzMS41ODQgMTMuMDU2bDM3MS4zNiAzNjkuNjk2IDM3MS42OC0zNzMuMDg4Qzg5Mi4xOTItNTkuNjE2IDkwMy42OC02NCA5MTUuMTY4LTY0YzExLjQ1NiAwIDIyLjkxMiA0LjM4NCAzMS42NDggMTMuMDg4IDE3LjUwNCAxNy41MDQgMTcuNTY4IDQ1LjgyNCAwLjA5NiA2My4zOTJMNTc1LjMyOCAzODUuNTA0IDU3NS4zMjggMzg1LjUwNHpNNTc1LjMyOCAzODUuNTA0IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icGxheSIgdW5pY29kZT0iJiM1ODk0NTsiIGQ9Ik01MTIgODkzLjk4NHEtMTM5LjAwOCAwLTI1Ni41MTItNjguNTEyVDY5LjQ3MiA2MzkuNDU2IDAuOTYgMzgyLjk0NHQ2OC41MTItMjU2LjUxMiAxODYuMDE2LTE4Ni4wMTZUNTEyLTEyOC4wOTZ0MjU2LjUxMiA2OC41MTIgMTg2LjAxNiAxODYuMDE2IDY4LjUxMiAyNTYuNTEyLTY4LjUxMiAyNTYuNTEyLTE4Ni4wMTYgMTg2LjAxNlQ1MTIgODkzLjk4NHogbTIwMC01MjQuOTkybC0yOTEuMDA4LTI0Ny4wMDhxLTYuMDE2LTYuMDE2LTE1LjAwOC02LjAxNi04IDAtMTQuNDk2IDUuNTA0dC02LjQ5NiAxNC40OTZWNjMwLjk3NnEwIDggNi40OTYgMTMuNTA0dDE1LjAwOCA1LjUwNCAxNC40OTYtNi4wMTZsMjkxLjAwOC0yNDcuMDA4cTYuMDE2LTYuMDE2IDYuMDE2LTE0LjAxNnQtNi4wMTYtMTQuMDE2eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9InNraXAtcHJldmlvdXMiIHVuaWNvZGU9IiYjNTkwOTE7IiBkPSJNMjU2IDY0MGg4NS4zMzMzMzN2LTUxMkgyNTZ6TTQwNS4zMzMzMzMgMzg0bDM2Mi42NjY2NjctMjU2VjY0MHoiICBob3Jpei1hZHYteD0iMTAyNCIgLz4KCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yb3RhdGUtbGVmdCIgdW5pY29kZT0iJiM1ODk2ODsiIGQ9Ik05Ni40IDc3OS4xbDgwLjYtODAuNmM4MC43IDgxLjMgMTkyLjUgMTMxLjggMzE2LjEgMTMyIDI0Ni4yIDAuNSA0NDcuMy0xOTkuNyA0NDcuNy00NDUuOUM5NDEuMiAxMzcuNSA3NDEtNjMgNDk0LTYzYy0xMzEuOSAwLTI1MC40IDU3LjEtMzMyLjIgMTQ4LTM3LjIgNDEuNC03LjkgMTA3LjQgNDcuOCAxMDcuOSAxOC41IDAuMiAzNi4yLTcuNSA0OC41LTIxLjIgNTguMS02NC41IDE0Mi4zLTEwNS4xIDIzNS45LTEwNS4xIDE3Ni4xIDAgMzE4LjggMTQzLjUgMzE3LjMgMzIwLTEuNSAxNzYuMi0xNDUuMSAzMTYuNi0zMjEuNCAzMTQuNC04Ni42LTEuMS0xNjQuOC0zNi45LTIyMS40LTk0LjFsNzkuNi03OS42YzExLjgtMTEuOCAzLjQtMzEuOS0xMy4yLTMxLjlIODMuMmMtMTAuMyAwLTE4LjcgOC4zLTE4LjcgMTguN1Y3NjUuOWMwIDE2LjYgMjAuMSAyNSAzMS45IDEzLjJ6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctcm90YXRlLXJpZ2h0IiB1bmljb2RlPSImIzU4OTY5OyIgZD0iTTk0MC44IDc2NS45di0yNTEuOGMwLTEwLjQtOC40LTE4LjctMTguNy0xOC43SDY3MC40Yy0xNi42IDAtMjUgMjAuMS0xMy4yIDMxLjlsNzkuNiA3OS42Yy01Ni42IDU3LjItMTM0LjggOTMtMjIxLjQgOTQuMS0xNzYuMyAyLjItMzE5LjktMTM4LjItMzIxLjQtMzE0LjQtMS41LTE3Ni41IDE0MS4yLTMyMCAzMTcuMy0zMjAgOTMuNiAwIDE3Ny44IDQwLjYgMjM1LjkgMTA1LjEgMTIuMyAxMy43IDMwIDIxLjQgNDguNSAyMS4yIDU1LjctMC41IDg1LTY2LjUgNDcuOC0xMDcuOS04MS44LTkwLjktMjAwLjMtMTQ4LTMzMi4yLTE0OC0yNDcgMC00NDcuMiAyMDAuNS00NDYuOCA0NDcuNkM2NC45IDYzMC44IDI2NiA4MzEgNTEyLjIgODMwLjVjMTIzLjYtMC4yIDIzNS40LTUwLjcgMzE2LjEtMTMybDgwLjYgODAuNmMxMS44IDExLjggMzEuOSAzLjQgMzEuOS0xMy4yeiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9ImJvZmFuZ3FpLWRhbm11Z3VhbiIgdW5pY29kZT0iJiM1OTAzMDsiIGQ9Ik01NTguNTQ1NDU1IDE3NC41NDU0NTVIMTU1LjkyNzI3M0MxMjMuMzQ1NDU1IDE3NC41NDU0NTUgOTMuMDkwOTA5IDIwNC44IDkzLjA5MDkwOSAyMzcuMzgxODE4VjU3Ny4xNjM2MzZDOTMuMDkwOTA5IDYwOS43NDU0NTUgMTIzLjM0NTQ1NSA2NDAgMTU1LjkyNzI3MyA2NDBoNTcyLjUwOTA5MWMzMi41ODE4MTggMCA2Mi44MzYzNjQtMzAuMjU0NTQ1IDYyLjgzNjM2My02Mi44MzYzNjRWNTQ2LjkwOTA5MWMwLTEzLjk2MzYzNiA5LjMwOTA5MS0yMy4yNzI3MjcgMjMuMjcyNzI4LTIzLjI3MjcyN3MyMy4yNzI3MjcgOS4zMDkwOTEgMjMuMjcyNzI3IDIzLjI3MjcyN3YzMC4yNTQ1NDVjMCA1OC4xODE4MTgtNTEuMiAxMDkuMzgxODE4LTEwOS4zODE4MTggMTA5LjM4MTgxOUgxNTUuOTI3MjczQzk3Ljc0NTQ1NSA2ODYuNTQ1NDU1IDQ2LjU0NTQ1NSA2MzUuMzQ1NDU1IDQ2LjU0NTQ1NSA1NzcuMTYzNjM2di0zMzkuNzgxODE4QzQ2LjU0NTQ1NSAxNzkuMiA5Ny43NDU0NTUgMTI4IDE1NS45MjcyNzMgMTI4SDU1OC41NDU0NTVjMTMuOTYzNjM2IDAgMjMuMjcyNzI3IDkuMzA5MDkxIDIzLjI3MjcyNyAyMy4yNzI3MjdzLTkuMzA5MDkxIDIzLjI3MjcyNy0yMy4yNzI3MjcgMjMuMjcyNzI4ek0zMjUuODE4MTgyIDU0Ni45MDkwOTFoNDYuNTQ1NDU0di00Ni41NDU0NTVoLTQ2LjU0NTQ1NHpNNDE4LjkwOTA5MSA1NDYuOTA5MDkxaDE4Ni4xODE4MTh2LTQ2LjU0NTQ1NWgtMTg2LjE4MTgxOHpNMTg2LjE4MTgxOCA0MzAuNTQ1NDU1aDQ2LjU0NTQ1NXYtNDYuNTQ1NDU1SDE4Ni4xODE4MTh6TTI3OS4yNzI3MjcgNDMwLjU0NTQ1NWgxODYuMTgxODE4di00Ni41NDU0NTVoLTE4Ni4xODE4MTh6TTI3OS4yNzI3MjcgMzE0LjE4MTgxOGg0Ni41NDU0NTV2LTQ2LjU0NTQ1NGgtNDYuNTQ1NDU1ek0zNzIuMzYzNjM2IDMxNC4xODE4MThoMTg2LjE4MTgxOXYtNDYuNTQ1NDU0aC0xODYuMTgxODE5ek04MDIuOTA5MDkxIDQzMC41NDU0NTVjLTk1LjQxODE4MiAwLTE3NC41NDU0NTUtNzkuMTI3MjczLTE3NC41NDU0NTUtMTc0LjU0NTQ1NXM3OS4xMjcyNzMtMTc0LjU0NTQ1NSAxNzQuNTQ1NDU1LTE3NC41NDU0NTUgMTc0LjU0NTQ1NSA3OS4xMjcyNzMgMTc0LjU0NTQ1NCAxNzQuNTQ1NDU1LTc5LjEyNzI3MyAxNzQuNTQ1NDU1LTE3NC41NDU0NTQgMTc0LjU0NTQ1NXogbTAtMzAyLjU0NTQ1NWMtNjkuODE4MTgyIDAtMTI4IDU4LjE4MTgxOC0xMjggMTI4IDAgMjMuMjcyNzI3IDYuOTgxODE4IDQ0LjIxODE4MiAxNi4yOTA5MDkgNjIuODM2MzY0bDE3NC41NDU0NTUtMTc0LjU0NTQ1NWMtMTguNjE4MTgyLTkuMzA5MDkxLTM5LjU2MzYzNi0xNi4yOTA5MDktNjIuODM2MzY0LTE2LjI5MDkwOXogbTk3Ljc0NTQ1NCA0Ni41NDU0NTVMNzIxLjQ1NDU0NSAzNTMuNzQ1NDU1YzIzLjI3MjcyNyAxOC42MTgxODIgNTEuMiAzMC4yNTQ1NDUgODEuNDU0NTQ2IDMwLjI1NDU0NSA2OS44MTgxODIgMCAxMjgtNTguMTgxODE4IDEyOC0xMjggMC0zMC4yNTQ1NDUtMTEuNjM2MzY0LTYwLjUwOTA5MS0zMC4yNTQ1NDYtODEuNDU0NTQ1eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAogICAgPGdseXBoIGdseXBoLW5hbWU9ImJvZmFuZ3FpLWRhbm11a2FpIiB1bmljb2RlPSImIzU5MDMxOyIgZD0iTTU1OC41NDU0NTUgMTc0LjU0NTQ1NUgxNTUuOTI3MjczQzEyMy4zNDU0NTUgMTc0LjU0NTQ1NSA5My4wOTA5MDkgMjA0LjggOTMuMDkwOTA5IDIzNy4zODE4MThWNTc3LjE2MzYzNkM5My4wOTA5MDkgNjA5Ljc0NTQ1NSAxMjMuMzQ1NDU1IDY0MCAxNTUuOTI3MjczIDY0MGg1NzIuNTA5MDkxYzMyLjU4MTgxOCAwIDYyLjgzNjM2NC0zMC4yNTQ1NDUgNjIuODM2MzYzLTYyLjgzNjM2NFY1NDYuOTA5MDkxYzAtMTMuOTYzNjM2IDkuMzA5MDkxLTIzLjI3MjcyNyAyMy4yNzI3MjgtMjMuMjcyNzI3czIzLjI3MjcyNyA5LjMwOTA5MSAyMy4yNzI3MjcgMjMuMjcyNzI3djMwLjI1NDU0NWMwIDU4LjE4MTgxOC01MS4yIDEwOS4zODE4MTgtMTA5LjM4MTgxOCAxMDkuMzgxODE5SDE1NS45MjcyNzNDOTcuNzQ1NDU1IDY4Ni41NDU0NTUgNDYuNTQ1NDU1IDYzNS4zNDU0NTUgNDYuNTQ1NDU1IDU3Ny4xNjM2MzZ2LTMzOS43ODE4MThDNDYuNTQ1NDU1IDE3OS4yIDk3Ljc0NTQ1NSAxMjggMTU1LjkyNzI3MyAxMjhINTU4LjU0NTQ1NWMxMy45NjM2MzYgMCAyMy4yNzI3MjcgOS4zMDkwOTEgMjMuMjcyNzI3IDIzLjI3MjcyN3MtOS4zMDkwOTEgMjMuMjcyNzI3LTIzLjI3MjcyNyAyMy4yNzI3Mjh6TTMyNS44MTgxODIgNTQ2LjkwOTA5MWg0Ni41NDU0NTR2LTQ2LjU0NTQ1NWgtNDYuNTQ1NDU0ek00MTguOTA5MDkxIDU0Ni45MDkwOTFoMTg2LjE4MTgxOHYtNDYuNTQ1NDU1aC0xODYuMTgxODE4ek0xODYuMTgxODE4IDQzMC41NDU0NTVoNDYuNTQ1NDU1di00Ni41NDU0NTVIMTg2LjE4MTgxOHpNMjc5LjI3MjcyNyA0MzAuNTQ1NDU1aDE4Ni4xODE4MTh2LTQ2LjU0NTQ1NWgtMTg2LjE4MTgxOHpNMzcyLjM2MzYzNiAzMTQuMTgxODE4aDE4Ni4xODE4MTl2LTQ2LjU0NTQ1NGgtMTg2LjE4MTgxOXpNMjc5LjI3MjcyNyAzMTQuMTgxODE4aDQ2LjU0NTQ1NXYtNDYuNTQ1NDU0aC00Ni41NDU0NTV6TTgwMi45MDkwOTEgNDMwLjU0NTQ1NWMtOTUuNDE4MTgyIDAtMTc0LjU0NTQ1NS03OS4xMjcyNzMtMTc0LjU0NTQ1NS0xNzQuNTQ1NDU1czc5LjEyNzI3My0xNzQuNTQ1NDU1IDE3NC41NDU0NTUtMTc0LjU0NTQ1NSAxNzQuNTQ1NDU1IDc5LjEyNzI3MyAxNzQuNTQ1NDU0IDE3NC41NDU0NTUtNzkuMTI3MjczIDE3NC41NDU0NTUtMTc0LjU0NTQ1NCAxNzQuNTQ1NDU1eiBtMC0zMDIuNTQ1NDU1Yy02OS44MTgxODIgMC0xMjggNTguMTgxODE4LTEyOCAxMjhzNTguMTgxODE4IDEyOCAxMjggMTI4IDEyOC01OC4xODE4MTggMTI4LTEyOC01OC4xODE4MTgtMTI4LTEyOC0xMjh6TTkwMC42NTQ1NDUgMzA5LjUyNzI3M2MtOS4zMDkwOTEgOS4zMDkwOTEtMjMuMjcyNzI3IDkuMzA5MDkxLTMyLjU4MTgxOCAwbC04MS40NTQ1NDUtODEuNDU0NTQ2LTQ4Ljg3MjcyNyA0OC44NzI3MjhjLTkuMzA5MDkxIDkuMzA5MDkxLTIzLjI3MjcyNyA5LjMwOTA5MS0zMi41ODE4MTkgMC05LjMwOTA5MS05LjMwOTA5MS05LjMwOTA5MS0yMy4yNzI3MjcgMC0zMi41ODE4MTlsNjUuMTYzNjM3LTY1LjE2MzYzNmM5LjMwOTA5MS05LjMwOTA5MSAyMy4yNzI3MjctOS4zMDkwOTEgMzIuNTgxODE4IDBsOTcuNzQ1NDU0IDk3Ljc0NTQ1NWM5LjMwOTA5MSA5LjMwOTA5MSA5LjMwOTA5MSAyMy4yNzI3MjcgMCAzMi41ODE4MTh6IiAgaG9yaXotYWR2LXg9IjEwMjQiIC8+CgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibmVpcm9uZ3FpZWh1YW4iIHVuaWNvZGU9IiYjNTkyNjU7IiBkPSJNMTk4LjQgMTkyaDUzNy42YzU0LjQgMCA5NiA0MS42IDk2IDk2djk2YzAgMTkuMiAxMi44IDMyIDMyIDMyczMyLTEyLjggMzItMzJ2LTk2YzAtODkuNi03MC40LTE2MC0xNjAtMTYwaC01NjMuMmwxMTguNC0xMTguNGMxMi44LTEyLjggMTIuOC0zMiAwLTQ0LjgtMTIuOC0xMi44LTMyLTEyLjgtNDQuOCAwbC0xNTYuOCAxNTYuOGMtNi40IDYuNC05LjYgMTYtOS42IDIyLjQgMCA5LjYgMy4yIDE2IDkuNiAyMi40bDE1Ni44IDE1Ni44YzEyLjggMTIuOCAzMiAxMi44IDQ0LjggMCAxMi44LTEyLjggMTIuOC0zMiAwLTQ0LjhsLTkyLjgtODYuNHogbTY0My4yIDQxNmgtNjE3LjZjLTU0LjQgMC05Ni00MS42LTk2LTk2di05NmMwLTE5LjItMTIuOC0zMi0zMi0zMnMtMzIgMTIuOC0zMiAzMnY5NmMwIDg5LjYgNzAuNCAxNjAgMTYwIDE2MGg1OTUuMmwtOTIuOCA5Mi44Yy0xMi44IDEyLjgtMTIuOCAzMiAwIDQ0LjggMTIuOCAxMi44IDMyIDEyLjggNDQuOCAwbDE1Ni44LTE2MGM2LjQtNi40IDkuNi0xNiA5LjYtMjIuNCAwLTkuNi0zLjItMTYtOS42LTIyLjRsLTE1Ni44LTE1Ni44Yy0xMi44LTEyLjgtMzItMTIuOC00NC44IDAtMTIuOCAxMi44LTEyLjggMzIgMCA0NC44bDExNS4yIDExNS4yeiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAoKCiAgPC9mb250Pgo8L2RlZnM+PC9zdmc+Cg=="},7659:c=>{var l={};c.exports=function(A,y){var g=function(i){if(l[i]===void 0){var d=document.querySelector(i);if(window.HTMLIFrameElement&&d instanceof window.HTMLIFrameElement)try{d=d.contentDocument.head}catch{d=null}l[i]=d}return l[i]}(A);if(!g)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");g.appendChild(y)}},7825:c=>{c.exports=function(l){if(typeof document>"u")return{update:function(){},remove:function(){}};var A=l.insertStyleElement(l);return{update:function(y){(function(g,i,d){var h="";d.supports&&(h+="@supports (".concat(d.supports,") {")),d.media&&(h+="@media ".concat(d.media," {"));var f=d.layer!==void 0;f&&(h+="@layer".concat(d.layer.length>0?" ".concat(d.layer):""," {")),h+=d.css,f&&(h+="}"),d.media&&(h+="}"),d.supports&&(h+="}");var v=d.sourceMap;v&&typeof btoa<"u"&&(h+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(v))))," */")),i.styleTagTransform(h,g,i.options)})(A,l,y)},remove:function(){(function(y){if(y.parentNode===null)return!1;y.parentNode.removeChild(y)})(A)}}}},9099:c=>{c.exports="data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALoAAsAAAAABswAAAKZAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBLIEoATYCJAMMCwgABCAFhG0HPxv3BciemjwJBBawWJiKrz0ASDwe/hv7dt/MfNW2KmnPdtG6CbVE49AhkkRLp5FIhAwheQn/z+kv/1pWQYEwj7X+Uuyl/nTcdSTtTi8NcwkH30gwCtRYSyHREE3ufj9P1OLQShNpd5+4d/rneReO/SzLZW3rorEmfwww7rwLcKxFEQ2RQLxh7AKXcJhA07wmodOhiRQqVFijAvHU1GVUmAsrCsvVhWrNwiLeqKinV+kQr8Pvx397KSSpZNbEyyeDGur5VflDWJ2tols+IUKAyyvI2IUU4k5t+hpBML6gaRfbS6uKkOaK/T+hXndWd/rHS0SVVd0Gm9CWbsrgqgh+00EB8vtVFGxALmYoJOTctiY+K0kvXH6mrr7SNz/Z6+9Zx5qJtFlNxSWTO6vj1HYuhJefJ9ftXh9abHpfLGqU77bG13rmtKH98PROBBAh724RzHCxLE2XTr/nplZqkQ6eox7Wz9KPuBAIal+/fLw7HX+FxQX8PFYXDpmtiii/QP1UnuDXdSohKNxkuXJR7VqrA9nqbYxMaGpihrB/6Hm8c9K7mlA3SZHUzCGrWyULu4uKln1U1R2gacfw8pYRRhClgW1bAKFvD0nXN2R9R2Rhn1Ax9YuqfgQ0XYmyDVvWY0r9DMsca6DMgalSjzhuLkW1CaxPOTLLmkJpBrPAjEEsHC3mhrGH2RxTgmk9zjkBwqgLQ+A47DgUfEYtrPKwwbnfFomQuheFVeoiyQkGk3GYBijmAJOK8hC/NSeVPp+A6aY4ZKyFU1PPwJiA2T2ICYv2IIftXi/OvTwTmKaL4zgCEAzlAkOgH+ZwUMCv72fBVFyYMSLpaxOxm5G+9vD6Tvf7tkGTNSlHihxF9z5jdEZzenvNKvXnRN+R5xACAAAA"},9218:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.player-hidden{display:none !important}.track-components{float:right;color:#fff;height:35px;position:relative;box-sizing:border-box;margin-top:5px}.current-track{display:flex;height:100%;align-items:center;justify-content:center;width:100px;cursor:pointer}.track-list{position:absolute;bottom:46px;display:none;padding:0;margin:0;list-style:none;height:auto;width:100px;overflow-y:scroll}.track-list li{text-align:center;width:100px;line-height:30px;background-color:rgba(0,0,0,0.6);cursor:pointer}.track-list li.current{color:#00c1de}.track-list li+li{border-top:1px solid rgba(78,78,78,0.3)}.track-list li:hover{background-color:rgba(0,0,0,0.5)}@media (max-width: 768px){.current-track{width:40px}.track-list li{width:43px}}.prism-player .prism-info-display .switchimg{color:#fff}
`,""]);const h=d},9379:c=>{c.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAApJJREFUeAHt2T9OwzAUBvAatTC1lZIwsTJzAC7ACTgBLEhdOjGWDSYWVsQB6AVgR2wsCAkhsTI1ttQyIP4I87nCkpEiVJU0fkEfQ506afv847n2axoN/lGAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUmFVAzXpheF2e5z2l1EuSJGdobXgu5vEozwtjWc2yucbpxrI0z4CsUtmntafamCtjzMY871GX18wF5Adnrd0E1M1I6+ORtW3f/5/aPwE5CCA18dBXxtxrrbf/E44by5+BPAig1pBN57nWF+PxeN33170tDchDAGrr7f39Dtk0wPGK769rWzrQN8QKsukA2eSgtuqK4+JeFJA3WQfUBaDOsTVY8511ahcNNLXAVHNf3u5LvI/jJoEKBLCDayObjnNjbgC1WXCJyK5KMujHyK3dANYV9k6nk8kk/XFO4JPqgYCAaabwsIPV7gHZtDN9LhDHhRQFyFsAJsW0E12yRAUKoMSWLCKAHNR0dRNYsogBCrJJVMkiDiiAElGyiAX6hopeskgH8gkVrZW+7X9tKHWUJckhftp9jaEkFgggl61ms9ftdh9jwPjPFAcEmCf8wt5P03Tog4zZigECzAdqtBObJINMqeeYKOFniwACzvWSUnu4jXQbBifhOCoQYDSm0760+2vhPyYKEGAsptPZcqu13+l0dBiQtOPqgZS6RdbsZWl6LQ2jKJ7KgIDyjMwZYDqdoP0oCkZiXyVAABm6m4tYup8kIvwW06KBHrE69QBz+VsQks8tCih6iVAWeulAmE4iSgRxQIARVSKIAXIrksQSQQQQcMSWCFGBsA/OgbMruUQoC4jvQwEKUIACFKAABShAAQpQgAIUoAAFKEABClBgdoEvgRgNiNlEUbkAAAAASUVORK5CYII="},9918:(c,l,A)=>{A.d(l,{A:()=>h});var y=A(1601),g=A.n(y),i=A(6314),d=A.n(i)()(g());d.push([c.id,`.preview-hide{display:none !important}.preview-vod-component{display:none}.preview-vod-component .preview-component-layer{position:absolute;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,0.8);z-index:9998;box-sizing:border-box;padding:20px 20px 70px;display:none}.preview-vod-component .preview-component-layer .preview-close{position:absolute;right:18px;top:15px;border-radius:50%;color:#000;background:#fff;width:20px;height:20px;text-align:center;line-height:18px;vertical-align:top;color:#333;box-shadow:0 0 5px rgba(0,0,0,0.3);cursor:pointer;z-index:9998}.preview-vod-component .preview-component-layer .preview-custom{width:100%;height:100%;position:relative}.preview-vod-component .preview-component-layer .preview-custom .preview-default{font-size:14px;color:#fff;text-align:center;position:absolute;top:50%;transform:translateY(-50%);width:100%}.preview-vod-component .preview-custom{color:#fff;font-size:14px}.preview-vod-component .preview-component-tip{position:absolute;bottom:50px;left:25px;border-radius:15px;background-color:#333;color:#fff;line-height:26px;font-size:14px;padding:0 12px;z-index:9998}.preview-vod-component .preview-vod-close{font-size:18px;cursor:pointer;padding:0 5px;font-family:PingFangSC-Regular, sans-serif;font-weight:200}.preview-vod-component .preview-vod-close:hover{color:#00c1de}
`,""]);const h=d}},B={};function t(c){var l=B[c];if(l!==void 0)return l.exports;var A=B[c]={id:c,exports:{}};return E[c](A,A.exports,t),A.exports}t.m=E,t.n=c=>{var l=c&&c.__esModule?()=>c.default:()=>c;return t.d(l,{a:l}),l},t.d=(c,l)=>{for(var A in l)t.o(l,A)&&!t.o(c,A)&&Object.defineProperty(c,A,{enumerable:!0,get:l[A]})},t.o=(c,l)=>Object.prototype.hasOwnProperty.call(c,l),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(631),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(3525),e={};e.styleTagTransform=x(),e.setAttributes=h(),e.insert=i().bind(null,"head"),e.domAPI=y(),e.insertStyleElement=v(),l()(b.A,e),b.A&&b.A.locals&&b.A.locals;var a=t(52);(0,eval)(`/**
 * Binary Search Stubs for JS Arrays
 * @license MIT
 * @author Jim Chen
 */
var BinArray = (function(){
	var BinArray = {};
	BinArray.bsearch = function(arr, what, how){
		if(arr.length === 0) {
			return 0;
		}
		if(how(what,arr[0]) < 0) {
			return 0;
		}
		if(how(what,arr[arr.length - 1]) >=0) {
			return arr.length;
		}
		var low =0;
		var i = 0;
		var count = 0;
		var high = arr.length - 1;
		while(low<=high){
			i = Math.floor((high + low + 1)/2);
			count++;
			if(how(what,arr[i-1])>=0 && how(what,arr[i])<0){
				return i;
			}
			if(how(what,arr[i-1])<0){
				high = i-1;
			}else if(how(what,arr[i])>=0){
				low = i;
			}else {
				console.error('Program Error');
			}
			if(count > 1500) { console.error('Too many run cycles.'); }
		}
		return -1; // Never actually run
	};
	BinArray.binsert = function(arr, what, how){
		var index = BinArray.bsearch(arr,what,how);
		arr.splice(index,0,what);
		return index;
	};
	return BinArray;
})();

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommentSpaceAllocator = (function () {
    function CommentSpaceAllocator(width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this._pools = [
            []
        ];
        this.avoid = 1;
        this._width = width;
        this._height = height;
    }
    CommentSpaceAllocator.prototype.willCollide = function (existing, check) {
        return existing.stime + existing.ttl >= check.stime + check.ttl / 2;
    };
    CommentSpaceAllocator.prototype.pathCheck = function (y, comment, pool) {
        var bottom = y + comment.height;
        var right = comment.right;
        for (var i = 0; i < pool.length; i++) {
            if (pool[i].y > bottom || pool[i].bottom < y) {
                continue;
            }
            else if (pool[i].right < comment.x || pool[i].x > right) {
                if (this.willCollide(pool[i], comment)) {
                    return false;
                }
                else {
                    continue;
                }
            }
            else {
                return false;
            }
        }
        return true;
    };
    CommentSpaceAllocator.prototype.assign = function (comment, cindex) {
        while (this._pools.length <= cindex) {
            this._pools.push([]);
        }
        var pool = this._pools[cindex];
        if (pool.length === 0) {
            comment.cindex = cindex;
            return 0;
        }
        else if (this.pathCheck(0, comment, pool)) {
            comment.cindex = cindex;
            return 0;
        }
        var y = 0;
        for (var k = 0; k < pool.length; k++) {
            y = pool[k].bottom + this.avoid;
            if (y + comment.height > this._height) {
                break;
            }
            if (this.pathCheck(y, comment, pool)) {
                comment.cindex = cindex;
                return y;
            }
        }
        return this.assign(comment, cindex + 1);
    };
    CommentSpaceAllocator.prototype.add = function (comment) {
        if (comment.height > this._height) {
            comment.cindex = -2;
            comment.y = 0;
        }
        else {
            comment.y = this.assign(comment, 0);
            BinArray.binsert(this._pools[comment.cindex], comment, function (a, b) {
                if (a.bottom < b.bottom) {
                    return -1;
                }
                else if (a.bottom > b.bottom) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
    };
    CommentSpaceAllocator.prototype.remove = function (comment) {
        if (comment.cindex < 0) {
            return;
        }
        if (comment.cindex >= this._pools.length) {
            throw new Error("cindex out of bounds");
        }
        var index = this._pools[comment.cindex].indexOf(comment);
        if (index < 0)
            return;
        this._pools[comment.cindex].splice(index, 1);
    };
    CommentSpaceAllocator.prototype.setBounds = function (width, height) {
        this._width = width;
        this._height = height;
    };
    return CommentSpaceAllocator;
}());
var AnchorCommentSpaceAllocator = (function (_super) {
    __extends(AnchorCommentSpaceAllocator, _super);
    function AnchorCommentSpaceAllocator() {
        _super.apply(this, arguments);
    }
    AnchorCommentSpaceAllocator.prototype.add = function (comment) {
        _super.prototype.add.call(this, comment);
        comment.x = (this._width - comment.width) / 2;
    };
    AnchorCommentSpaceAllocator.prototype.willCollide = function (a, b) {
        return true;
    };
    AnchorCommentSpaceAllocator.prototype.pathCheck = function (y, comment, pool) {
        var bottom = y + comment.height;
        for (var i = 0; i < pool.length; i++) {
            if (pool[i].y > bottom || pool[i].bottom < y) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    };
    return AnchorCommentSpaceAllocator;
}(CommentSpaceAllocator));
//# sourceMappingURL=CommentSpaceAllocator.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CoreComment = (function () {
    function CoreComment(parent, init) {
        if (init === void 0) { init = {}; }
        this.mode = 1;
        this.stime = 0;
        this.text = "";
        this.ttl = 4000;
        this.dur = 4000;
        this.cindex = -1;
        this.motion = [];
        this.movable = true;
        this._alphaMotion = null;
        this.absolute = true;
        this.align = 0;
        this._alpha = 1;
        this._size = 25;
        this._color = 0xffffff;
        this._border = false;
        this._shadow = true;
        this._font = "";
        if (!parent) {
            throw new Error("Comment not bound to comment manager.");
        }
        else {
            this.parent = parent;
        }
        if (init.hasOwnProperty("stime")) {
            this.stime = init["stime"];
        }
        if (init.hasOwnProperty("mode")) {
            this.mode = init["mode"];
        }
        else {
            this.mode = 1;
        }
        if (init.hasOwnProperty("dur")) {
            this.dur = init["dur"];
            this.ttl = this.dur;
        }
        this.dur *= this.parent.options.global.scale;
        this.ttl *= this.parent.options.global.scale;
        if (init.hasOwnProperty("text")) {
            this.text = init["text"];
        }
        if (init.hasOwnProperty("motion")) {
            this._motionStart = [];
            this._motionEnd = [];
            this.motion = init["motion"];
            var head = 0;
            for (var i = 0; i < init["motion"].length; i++) {
                this._motionStart.push(head);
                var maxDur = 0;
                for (var k in init["motion"][i]) {
                    var m = init["motion"][i][k];
                    maxDur = Math.max(m.dur, maxDur);
                    if (m.easing === null || m.easing === undefined) {
                        init["motion"][i][k]["easing"] = CoreComment.LINEAR;
                    }
                }
                head += maxDur;
                this._motionEnd.push(head);
            }
            this._curMotion = 0;
        }
        if (init.hasOwnProperty("color")) {
            this._color = init["color"];
        }
        if (init.hasOwnProperty("size")) {
            this._size = init["size"];
        }
        if (init.hasOwnProperty("border")) {
            this._border = init["border"];
        }
        if (init.hasOwnProperty("opacity")) {
            this._alpha = init["opacity"];
        }
        if (init.hasOwnProperty("alpha")) {
            this._alphaMotion = init["alpha"];
        }
        if (init.hasOwnProperty("font")) {
            this._font = init["font"];
        }
        if (init.hasOwnProperty("x")) {
            this._x = init["x"];
        }
        if (init.hasOwnProperty("y")) {
            this._y = init["y"];
        }
        if (init.hasOwnProperty("shadow")) {
            this._shadow = init["shadow"];
        }
        if (init.hasOwnProperty("position")) {
            if (init["position"] === "relative") {
                this.absolute = false;
                if (this.mode < 7) {
                    console.warn("Using relative position for CSA comment.");
                }
            }
        }
    }
    CoreComment.prototype.init = function (recycle) {
        if (recycle === void 0) { recycle = null; }
        if (recycle !== null) {
            this.dom = recycle.dom;
        }
        else {
            this.dom = document.createElement("div");
        }
        this.dom.className = this.parent.options.global.className;
        this.dom.appendChild(document.createTextNode(this.text));
        this.dom.textContent = this.text;
        this.dom.innerText = this.text;
        this.size = this._size;
        if (this._color != 0xffffff) {
            this.color = this._color;
        }
        this.shadow = this._shadow;
        if (this._border) {
            this.border = this._border;
        }
        if (this._font !== "") {
            this.font = this._font;
        }
        if (this._x !== undefined) {
            this.x = this._x;
        }
        if (this._y !== undefined) {
            this.y = this._y;
        }
        if (this._alpha !== 1 || this.parent.options.global.opacity < 1) {
            this.alpha = this._alpha;
        }
        if (this.motion.length > 0) {
            this.animate();
        }
    };
    Object.defineProperty(CoreComment.prototype, "x", {
        get: function () {
            if (this._x === null || this._x === undefined) {
                if (this.align % 2 === 0) {
                    this._x = this.dom.offsetLeft;
                }
                else {
                    this._x = this.parent.width - this.dom.offsetLeft - this.width;
                }
            }
            if (!this.absolute) {
                return this._x / this.parent.width;
            }
            return this._x;
        },
        set: function (x) {
            this._x = x;
            if (!this.absolute) {
                this._x *= this.parent.width;
            }
            if (this.align % 2 === 0) {
                this.dom.style.left = this._x + "px";
            }
            else {
                this.dom.style.right = this._x + "px";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComment.prototype, "y", {
        get: function () {
            if (this._y === null || this._y === undefined) {
                if (this.align < 2) {
                    this._y = this.dom.offsetTop;
                }
                else {
                    this._y = this.parent.height - this.dom.offsetTop - this.height;
                }
            }
            if (!this.absolute) {
                return this._y / this.parent.height;
            }
            return this._y;
        },
        set: function (y) {
            this._y = y;
            if (!this.absolute) {
                this._y *= this.parent.height;
            }
            if (this.align < 2) {
                this.dom.style.top = this._y + "px";
            }
            else {
                this.dom.style.bottom = this._y + "px";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComment.prototype, "bottom", {
        get: function () {
            return this.y + this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComment.prototype, "right", {
        get: function () {
            return this.x + this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComment.prototype, "width", {
        get: function () {
            if (this._width === null || this._width === undefined) {
                this._width = this.dom.offsetWidth;
            }
            return this._width;
        },
        set: function (w) {
            this._width = w;
            this.dom.style.width = this._width + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComment.prototype, "height", {
        get: function () {
            if (this._height === null || this._height === undefined) {
                this._height = this.dom.offsetHeight;
            }
            return this._height;
        },
        set: function (h) {
            this._height = h;
            this.dom.style.height = this._height + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComment.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (s) {
            this._size = s;
            this.dom.style.fontSize = this._size + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComment.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (c) {
            this._color = c;
            var color = c.toString(16);
            color = color.length >= 6 ? color : new Array(6 - color.length + 1).join("0") + color;
            this.dom.style.color = "#" + color;
            if (this._color === 0) {
                this.dom.className = this.parent.options.global.className + " rshadow";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComment.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (a) {
            this._alpha = a;
            this.dom.style.opacity = Math.min(this._alpha, this.parent.options.global.opacity) + "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComment.prototype, "border", {
        get: function () {
            return this._border;
        },
        set: function (b) {
            this._border = b;
            if (this._border) {
                this.dom.style.border = "1px solid #00ffff";
            }
            else {
                this.dom.style.border = "none";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComment.prototype, "shadow", {
        get: function () {
            return this._shadow;
        },
        set: function (s) {
            this._shadow = s;
            if (!this._shadow) {
                this.dom.className = this.parent.options.global.className + " noshadow";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoreComment.prototype, "font", {
        get: function () {
            return this._font;
        },
        set: function (f) {
            this._font = f;
            if (this._font.length > 0) {
                this.dom.style.fontFamily = this._font;
            }
            else {
                this.dom.style.fontFamily = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    CoreComment.prototype.time = function (time) {
        this.ttl -= time;
        if (this.ttl < 0) {
            this.ttl = 0;
        }
        if (this.movable) {
            this.update();
        }
        if (this.ttl <= 0) {
            this.finish();
        }
    };
    CoreComment.prototype.update = function () {
        this.animate();
    };
    CoreComment.prototype.invalidate = function () {
        this._x = null;
        this._y = null;
        this._width = null;
        this._height = null;
    };
    CoreComment.prototype._execMotion = function (currentMotion, time) {
        for (var prop in currentMotion) {
            if (currentMotion.hasOwnProperty(prop)) {
                var m = currentMotion[prop];
                this[prop] = m.easing(Math.min(Math.max(time - m.delay, 0), m.dur), m.from, m.to - m.from, m.dur);
            }
        }
    };
    CoreComment.prototype.animate = function () {
        if (this._alphaMotion) {
            this.alpha = (this.dur - this.ttl) * (this._alphaMotion["to"] - this._alphaMotion["from"]) / this.dur + this._alphaMotion["from"];
        }
        if (this.motion.length === 0) {
            return;
        }
        var ttl = Math.max(this.ttl, 0);
        var time = (this.dur - ttl) - this._motionStart[this._curMotion];
        this._execMotion(this.motion[this._curMotion], time);
        if (this.dur - ttl > this._motionEnd[this._curMotion]) {
            this._curMotion++;
            if (this._curMotion >= this.motion.length) {
                this._curMotion = this.motion.length - 1;
            }
            return;
        }
    };
    CoreComment.prototype.finish = function () {
        this.parent.finish(this);
    };
    CoreComment.prototype.toString = function () {
        return ["[", this.stime, "|", this.ttl, "/", this.dur, "]", "(", this.mode, ")", this.text].join("");
    };
    CoreComment.LINEAR = function (t, b, c, d) {
        return t * c / d + b;
    };
    return CoreComment;
}());
var ScrollComment = (function (_super) {
    __extends(ScrollComment, _super);
    function ScrollComment(parent, data) {
        _super.call(this, parent, data);
        this.dur *= this.parent.options.scroll.scale;
        this.ttl *= this.parent.options.scroll.scale;
    }
    Object.defineProperty(ScrollComment.prototype, "alpha", {
        set: function (a) {
            this._alpha = a;
            this.dom.style.opacity = Math.min(Math.min(this._alpha, this.parent.options.global.opacity), this.parent.options.scroll.opacity) + "";
        },
        enumerable: true,
        configurable: true
    });
    ScrollComment.prototype.init = function (recycle) {
        if (recycle === void 0) { recycle = null; }
        _super.prototype.init.call(this, recycle);
        this.x = this.parent.width;
        if (this.parent.options.scroll.opacity < 1) {
            this.alpha = this._alpha;
        }
        this.absolute = true;
    };
    ScrollComment.prototype.update = function () {
        this.x = (this.ttl / this.dur) * (this.parent.width + this.width) - this.width;
    };
    return ScrollComment;
}(CoreComment));
//# sourceMappingURL=Comment.js.map
/** 
 * Comment Filters Module Simplified (only supports modifiers & types)
 * @license MIT
 * @author Jim Chen
 */
function CommentFilter(){
	this.modifiers = [];
	this.runtime = null;
	this.allowTypes = {
		"1":true,
		"4":true,
		"5":true,
		"6":true,
		"7":true,
		"8":true,
		"17":true
	};
	this.doModify = function(cmt){
		for(var k=0;k<this.modifiers.length;k++){
			cmt = this.modifiers[k](cmt);
		}
		return cmt;
	};
	this.beforeSend = function(cmt){
		return cmt;
	}
	this.doValidate = function(cmtData){
		if(!this.allowTypes[cmtData.mode])
			return false;
		return true;
	};
	this.addRule = function(rule){
		
	};
	this.addModifier = function(f){
		this.modifiers.push(f);
	};
	this.runtimeFilter = function(cmt){
		if(this.runtime == null)
			return cmt;
		return this.runtime(cmt);
	};
	this.setRuntimeFilter = function(f){
		this.runtime = f;
	}
}

/*!
 * Comment Core Library CommentManager
 * @license MIT
 * @author Jim Chen
 *
 * Copyright (c) 2014 Jim Chen
 */
var CommentManager = (function() {
	var getRotMatrix = function(yrot, zrot) {
		// Courtesy of @StarBrilliant, re-adapted to look better
		var DEG2RAD = Math.PI/180;
		var yr = yrot * DEG2RAD;
		var zr = zrot * DEG2RAD;
		var COS = Math.cos;
		var SIN = Math.sin;
		var matrix = [
			COS(yr) * COS(zr)    , COS(yr) * SIN(zr)     , SIN(yr)  , 0,
			(-SIN(zr))           , COS(zr)               , 0        , 0,
			(-SIN(yr) * COS(zr)) , (-SIN(yr) * SIN(zr))  , COS(yr)  , 0,
			0                    , 0                     , 0        , 1
		];
		// CSS does not recognize scientific notation (e.g. 1e-6), truncating it.
		for(var i = 0; i < matrix.length;i++){
			if(Math.abs(matrix[i]) < 0.000001){
				matrix[i] = 0;
			}
		}
		return "matrix3d(" + matrix.join(",") + ")";
	};

	function CommentManager(stageObject){
		var __timer = 0;
		
		this._listeners = {};
		this._lastPosition = 0;
		
		this.stage = stageObject;
		this.options = {
			global:{
				opacity:1,
				scale:1,
				className:"cmt"
			},
			scroll:{
				opacity:1,
				scale:1
			},
			limit: 0
		};
		this.timeline = [];
		this.runline = [];
		this.position = 0;
		this.limiter = 0;
		this.filter = null;
		this.csa = {
			scroll: new CommentSpaceAllocator(0,0),
			top:new AnchorCommentSpaceAllocator(0,0),
			bottom:new AnchorCommentSpaceAllocator(0,0),
			reverse:new CommentSpaceAllocator(0,0),
			scrollbtm:new CommentSpaceAllocator(0,0)
		};
		
		/** Precompute the offset width **/
		this.width = this.stage.offsetWidth;
		this.height = this.stage.offsetHeight;
		this.startTimer = function(){
			if(__timer > 0)
				return;
			var lastTPos = new Date().getTime();
			var cmMgr = this;
			__timer = window.setInterval(function(){
				var elapsed = new Date().getTime() - lastTPos;
				lastTPos = new Date().getTime();
				cmMgr.onTimerEvent(elapsed,cmMgr);
			},10);
		};
		this.stopTimer = function(){
			window.clearInterval(__timer);
			__timer = 0;
		};
	}

	/** Public **/
	CommentManager.prototype.stop = function(){
		this.stopTimer();
	};

	CommentManager.prototype.start = function(){
		this.startTimer();
	};

	CommentManager.prototype.seek = function(time){
		this.position = BinArray.bsearch(this.timeline, time, function(a,b){
			if(a < b.stime) return -1
			else if(a > b.stime) return 1;
			else return 0;
		});
	};

	CommentManager.prototype.validate = function(cmt){
		if(cmt == null)
			return false;
		return this.filter.doValidate(cmt);
	};

	CommentManager.prototype.load = function(a){
		this.timeline = a;
		this.timeline.sort(function(a,b){
			if(a.stime > b.stime) return 2;
			else if(a.stime < b.stime) return -2;
			else{
				if(a.date > b.date) return 1;
				else if(a.date < b.date) return -1;
				else if(a.dbid != null && b.dbid != null){
					if(a.dbid > b.dbid) return 1;
					else if(a.dbid < b.dbid) return -1;
					return 0;
				}else
					return 0;
			}
		});
		this.dispatchEvent("load");
	};

	CommentManager.prototype.insert = function(c){
		var index = BinArray.binsert(this.timeline, c, function(a,b){
			if(a.stime > b.stime) return 2;
			else if(a.stime < b.stime) return -2;
			else{
				if(a.date > b.date) return 1;
				else if(a.date < b.date) return -1;
				else if(a.dbid != null && b.dbid != null){
					if(a.dbid > b.dbid) return 1;
					else if(a.dbid < b.dbid) return -1;
					return 0;
				}else
					return 0;
			}
		});
		if(index <= this.position){
			this.position++;
		}
		this.dispatchEvent("insert");
	};

	CommentManager.prototype.clear = function(){
		while(this.runline.length > 0){
			this.runline[0].finish();
		}
		this.dispatchEvent("clear");
	};

	CommentManager.prototype.setBounds = function(){
		this.width = this.stage.offsetWidth;
		this.height= this.stage.offsetHeight;
		this.dispatchEvent("resize");
		for(var comAlloc in this.csa){
			this.csa[comAlloc].setBounds(this.width,this.height);
		}
		// Update 3d perspective
		this.stage.style.perspective = this.width * Math.tan(40 * Math.PI/180) / 2 + "px";
		this.stage.style.webkitPerspective = this.width * Math.tan(40 * Math.PI/180) / 2 + "px";
	};
	CommentManager.prototype.init = function(){
		this.setBounds();
		if(this.filter == null) {
			this.filter = new CommentFilter(); //Only create a filter if none exist
		}
	};
	CommentManager.prototype.time = function(time){
		time = time - 1;
		if(this.position >= this.timeline.length || Math.abs(this._lastPosition - time) >= 2000){
			this.seek(time);
			this._lastPosition = time;
			if(this.timeline.length <= this.position) {
				return;
			}
		}else{
			this._lastPosition = time;
		}
		for(;this.position < this.timeline.length;this.position++){
			if(this.timeline[this.position]['stime']<=time){
				if(this.options.limit > 0 && this.runline.length > this.limiter) {
					continue; // Skip comments but still move the position pointer
				} else if(this.validate(this.timeline[this.position])){
					this.send(this.timeline[this.position]);
				}
			}else{
				break;
			}
		}
	};
	CommentManager.prototype.rescale = function(){
		
	};
	CommentManager.prototype.send = function(data){
		if(data.mode === 8){
			console.log(data);
			if(this.scripting){
				console.log(this.scripting.eval(data.code));
			}
			return;
		}
		if(this.filter != null){
			data = this.filter.doModify(data);
			if(data == null) return;
		}
		if(data.mode === 1 || data.mode === 2 || data.mode === 6){
			var cmt = new ScrollComment(this, data);
		}else{
			var cmt = new CoreComment(this, data);
		}
		switch(cmt.mode){
			case 1:cmt.align = 0;break;
			case 2:cmt.align = 2;break;
			case 4:cmt.align = 2;break;
			case 5:cmt.align = 0;break;
			case 6:cmt.align = 1;break;
		}
		cmt.init();
		this.stage.appendChild(cmt.dom);
		switch(cmt.mode){
			default:
			case 1:{this.csa.scroll.add(cmt);}break;
			case 2:{this.csa.scrollbtm.add(cmt);}break;
			case 4:{this.csa.bottom.add(cmt);}break;
			case 5:{this.csa.top.add(cmt);}break;
			case 6:{this.csa.reverse.add(cmt);}break;
			case 17:
			case 7:{
				if(data.rY !== 0 || data.rZ !== 0){
					/** TODO: revise when browser manufacturers make up their mind on Transform APIs **/
					cmt.dom.style.transform = getRotMatrix(data.rY, data.rZ);
					cmt.dom.style.webkitTransform = getRotMatrix(data.rY, data.rZ);
					cmt.dom.style.OTransform = getRotMatrix(data.rY, data.rZ);
					cmt.dom.style.MozTransform = getRotMatrix(data.rY, data.rZ);
					cmt.dom.style.MSTransform = getRotMatrix(data.rY, data.rZ);
				}
			}break;
		}
		cmt.y = cmt.y;
		this.dispatchEvent("enterComment", cmt);
		this.runline.push(cmt);
	};
	CommentManager.prototype.sendComment = function(data){
		console.log("CommentManager.sendComment is deprecated. Please use send instead");
		this.send(data); // Wrapper for Backwards Compatible APIs
	};
	CommentManager.prototype.finish = function(cmt){
		this.dispatchEvent("exitComment", cmt);
		this.stage.removeChild(cmt.dom);
		var index = this.runline.indexOf(cmt);
		if(index >= 0){
			this.runline.splice(index, 1);
		}
		switch(cmt.mode){
			default:
			case 1:{this.csa.scroll.remove(cmt);}break;
			case 2:{this.csa.scrollbtm.remove(cmt);}break;
			case 4:{this.csa.bottom.remove(cmt);}break;
			case 5:{this.csa.top.remove(cmt);}break;
			case 6:{this.csa.reverse.remove(cmt);}break;
			case 7:break;
		}
	};
	CommentManager.prototype.addEventListener = function(event, listener){
		if(typeof this._listeners[event] !== "undefined"){
			this._listeners[event].push(listener);
		}else{
			this._listeners[event] = [listener];
		}
	};
	CommentManager.prototype.dispatchEvent = function(event, data){
		if(typeof this._listeners[event] !== "undefined"){
			for(var i = 0; i < this._listeners[event].length; i++){
				try{
					this._listeners[event][i](data);
				}catch(e){
					console.err(e.stack);
				}
			}
		}
	};
	/** Static Functions **/
	CommentManager.prototype.onTimerEvent = function(timePassed,cmObj){
		for(var i= 0;i < cmObj.runline.length; i++){
			var cmt = cmObj.runline[i];
			if(cmt.hold){
				continue;
			}
			cmt.time(timePassed);
		}
	};
	return CommentManager;
})();

/** 
 * AcFun Format Parser
 * @license MIT License
 * An alternative format comment parser
 */
function AcfunParser(jsond){
	var list = [];
	try{
		var jsondt = JSON.parse(jsond);
	}catch(e){
		console.log('Error: Could not parse json list!');
		return [];
	}
	for(var i=0;i<jsondt.length;i++){
		//Read each comment and generate a correct comment object
		var data = {};
		var xc = jsondt[i]['c'].split(',');
		if(xc.length > 0){
			data.stime = parseFloat(xc[0]) * 1000;
			data.color = parseInt(xc[1])
			data.mode = parseInt(xc[2]);
			data.size = parseInt(xc[3]);
			data.hash = xc[4];
			data.date = parseInt(xc[5]);
			data.position = "absolute";
			if(data.mode != 7){
				data.text = jsondt[i].m.replace(/(\\/n|\\\\n|\\n|\\r\\n|\\\\r)/g,"\\n");
				data.text = data.text.replace(/\\r/g,"\\n");
				data.text = data.text.replace(/\\s/g,"\\u00a0");
			}else{
				data.text = jsondt[i].m;
			}
			if(data.mode == 7){
				//High level positioned dm
				try{
					var x = JSON.parse(data.text);
				}catch(e){
					console.log('[Err] Error parsing internal data for comment');
					console.log('[Dbg] ' + data.text);
					continue;
				}
				data.position = "relative";
				data.text = x.n; /*.replace(/\\r/g,"\\n");*/
				data.text = data.text.replace(/\\ /g,"\\u00a0");
				if(x.a != null){
					data.opacity = x.a;
				}else{
					data.opacity = 1;
				}
				if(x.p != null){
					data.x = x.p.x / 1000; // relative position
					data.y = x.p.y / 1000;
				}else{
					data.x = 0;
					data.y = 0;
				}
				data.shadow = x.b;
				data.dur = 4000;
				if(x.l != null)
					data.moveDelay = x.l * 1000;
				if(x.z != null && x.z.length > 0){
					data.movable = true;
					data.motion = [];
					var moveDuration = 0;
					var last = {x:data.x, y:data.y, alpha:data.opacity, color:data.color};
					for(var m = 0; m < x.z.length; m++){
						var dur = x.z[m].l != null ? (x.z[m].l * 1000) : 500;
						moveDuration += dur;
						var motion = {
							x:{from:last.x, to:x.z[m].x/1000, dur: dur, delay: 0},
							y:{from:last.y, to:x.z[m].y/1000, dur: dur, delay: 0}
						};
						last.x = motion.x.to;
						last.y = motion.y.to;
						if(x.z[m].t !== last.alpha){
							motion.alpha = {from:last.alpha, to:x.z[m].t, dur: dur, delay: 0};
							last.alpha = motion.alpha.to;
						}
						if(x.z[m].c != null && x.z[m].c !== last.color){
							motion.color = {from:last.color, to:x.z[m].c, dur: dur, delay: 0};
							last.color = motion.color.to;
						}
						data.motion.push(motion);
					}
					data.dur = moveDuration + (data.moveDelay ? data.moveDelay : 0);
				}
				if(x.r != null && x.k != null){
					data.rX = x.r;
					data.rY = x.k;
				}
				
			}
			list.push(data);
		}
	}
	return list;
}

/** 
 * Bilibili Format Parser
 * @license MIT License
 * Takes in an XMLDoc/LooseXMLDoc and parses that into a Generic Comment List
 **/
function BilibiliParser(xmlDoc, text, warn){	
	function format(string){
		// Format the comment text to be JSON Valid.
		return string.replace(/\\t/,"\\\\t");	
	}
	
	if(xmlDoc !== null){
		var elems = xmlDoc.getElementsByTagName('d');
	}else{
		if(!document || !document.createElement){
			// Maybe we are in a restricted context? Bail.
			return [];
		}
		if(warn){
			if(!confirm("XML Parse Error. \\n Allow tag soup parsing?\\n[WARNING: This is unsafe.]")){
				return [];
			}
		}else{
			// TODO: Make this safer in the future
			text = text.replace(new RegExp("</([^d])","g"), "</disabled $1");
			text = text.replace(new RegExp("</(\\S{2,})","g"), "</disabled $1");
			text = text.replace(new RegExp("<([^d/]\\W*?)","g"), "<disabled $1");
			text = text.replace(new RegExp("<([^/ ]{2,}\\W*?)","g"), "<disabled $1");
		}
		var tmp = document.createElement("div");
		tmp.innerHTML = text;
		var elems = tmp.getElementsByTagName('d');
	}
	
	var tlist = [];
	for(var i=0;i < elems.length;i++){
		if(elems[i].getAttribute('p') != null){
			var opt = elems[i].getAttribute('p').split(',');
			if(!elems[i].childNodes[0])
			  continue;
			var text = elems[i].childNodes[0].nodeValue;
			var obj = {};
			obj.stime = Math.round(parseFloat(opt[0])*1000);
			obj.size = parseInt(opt[2]);
			obj.color = parseInt(opt[3]);
			obj.mode = parseInt(opt[1]);
			obj.date = parseInt(opt[4]);
			obj.pool = parseInt(opt[5]);
			obj.position = "absolute";
			if(opt[7] != null)
				obj.dbid = parseInt(opt[7]);
			obj.hash = opt[6];
			obj.border = false;
			if(obj.mode < 7){
				obj.text = text.replace(/(\\/n|\\\\n|\\n|\\r\\n)/g, "\\n");
			}else{
				if(obj.mode == 7){
					try{
						adv = JSON.parse(format(text));
						obj.shadow = true;
						obj.x = parseFloat(adv[0]);
						obj.y = parseFloat(adv[1]);
						if(Math.floor(obj.x) < obj.x || Math.floor(obj.y) < obj.y){
							obj.position = "relative";
						}
						obj.text = adv[4].replace(/(\\/n|\\\\n|\\n|\\r\\n)/g, "\\n");
						obj.rZ = 0;
						obj.rY = 0;
						if(adv.length >= 7){
							obj.rZ = parseInt(adv[5], 10);
							obj.rY = parseInt(adv[6], 10);
						}
						obj.motion = [];
						obj.movable = false;
						if(adv.length >= 11){
							obj.movable = true;
							var singleStepDur = 500;
							var motion = {
								x:{from: obj.x, to:parseFloat(adv[7]), dur:singleStepDur, delay:0},
								y:{from: obj.y, to:parseFloat(adv[8]), dur:singleStepDur, delay:0},
							};
							if(adv[9] !== ''){
								singleStepDur = parseInt(adv[9], 10);
								motion.x.dur = singleStepDur;
								motion.y.dur = singleStepDur;
							}
							if(adv[10] !== ''){
								motion.x.delay = parseInt(adv[10], 10);
								motion.y.delay = parseInt(adv[10], 10);
							}
							if(adv.length > 11){
								obj.shadow = adv[11];
								if(obj.shadow === "true"){
									obj.shadow = true;
								}
								if(obj.shadow === "false"){
									obj.shadow = false;
								}
								if(adv[12] != null){
									obj.font = adv[12];
								}
								if(adv.length > 14){
									// Support for Bilibili Advanced Paths
									if(obj.position === "relative"){
										console.log("Cannot mix relative and absolute positioning");
										obj.position = "absolute";
									}
									var path = adv[14];
									var lastPoint = {x:motion.x.from, y:motion.y.from};
									var pathMotion = [];
									var regex = new RegExp("([a-zA-Z])\\\\s*(\\\\d+)[, ](\\\\d+)","g");
									var counts = path.split(/[a-zA-Z]/).length - 1;
									var m = regex.exec(path);
									while(m !== null){
										switch(m[1]){
											case "M":{
												lastPoint.x = parseInt(m[2],10);
												lastPoint.y = parseInt(m[3],10);
											}break;
											case "L":{
												pathMotion.push({
													"x":{"from":lastPoint.x, "to":parseInt(m[2],10), "dur": singleStepDur / counts, "delay": 0},
													"y":{"from":lastPoint.y, "to":parseInt(m[3],10), "dur": singleStepDur / counts, "delay": 0}
												});
												lastPoint.x = parseInt(m[2],10);
												lastPoint.y = parseInt(m[3],10);
											}break;
										}
										m = regex.exec(path);
									}
									motion = null;
									obj.motion = pathMotion;
								}
							}
							if(motion !== null){
								obj.motion.push(motion);
							}
						}
						obj.dur = 2500;
						if(adv[3] < 12){
							obj.dur = adv[3] * 1000;
						}
						var tmp = adv[2].split('-');
						if(tmp != null && tmp.length>1){
							var alphaFrom = parseFloat(tmp[0]);
							var alphaTo = parseFloat(tmp[1]);
							obj.opacity = alphaFrom;
							if(alphaFrom !== alphaTo){
								obj.alpha = {from:alphaFrom, to:alphaTo}
							}
						}
					}catch(e){
						console.log('[Err] Error occurred in JSON parsing');
						console.log('[Dbg] ' + text);
					}
				}else if(obj.mode == 8){
					obj.code = text; //Code comments are special
				}
			}
			if(obj.text != null)
				obj.text = obj.text.replace(/\\u25a0/g,"\\u2588");
			tlist.push(obj);
		}
	}
	return tlist;
}
`),window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.AliplayerDanmuComponent=class{constructor(s,o="controlbar"){this.sendEl=o,this.danmukuList=s,this.html=(0,a.a8)('<div class="aliplayer-danmuku abp"> <div class="danmu container"></div> </div>'),this.danmuControlHtml=(0,a.a8)('<div class="ali-danmuku-control"> <div class="ali-danmu-input-wrap"></div> <i class="iconfont icon-danmu-close"></i> <div class="player-tooltip close"></div> <i class="iconfont icon-danmu-open" style="display:none"></i> <div class="player-tooltip open"></div> </div>'),this.sendEl=o,this.danmuInput=o===null?null:(0,a.a8)('<div class="ali-danmu-input"> <input type="text" placeholder=""> <button class="danmu-input-enter"></button> </div>'),this.CM=null,this.userDanmuOpen=!0}createEl(s,o){const r=o._options&&o._options.language;if(this.isEn=r&&r==="en-us",this.danmuInput!==null&&(this.danmuInput.querySelector(".danmu-input-enter").innerText=this.isEn?"Enter":"发送",this.danmuInput.querySelector("input").setAttribute("placeholder",this.isEn?"Input danmu":"输入弹幕")),this.danmuControlHtml.querySelector(".player-tooltip.close").innerText=this.isEn?"Close Bullect":"关闭弹幕",this.danmuControlHtml.querySelector(".player-tooltip.open").innerText=this.isEn?"Open Bullect":"打开弹幕",this.sendEl==="controlbar"){let I=this.danmuControlHtml.querySelector(".ali-danmu-input-wrap");I.style.display="inline-block",I.appendChild(this.danmuInput)}else if(this.sendEl!==null)if((0,a.vq)(this.sendEl))this.sendEl.appendChild(this.danmuInput);else{if(typeof this.sendEl!="string")throw new Error("sendEl must be an element or selector string");{let I=document.querySelector(this.sendEl);if(!(0,a.vq)(I))throw new Error("sendEl must be an element or selector string");I.appendChild(this.danmuInput)}}s.querySelector(".prism-controlbar").appendChild(this.danmuControlHtml);let u=s.querySelector("video").nextElementSibling;u?s.insertBefore(this.html,u):s.appendChild(this.html),this.CM=new CommentManager(this.html.querySelector(".danmu")),this.CM.init(),this.CM.load(this.danmukuList),s.querySelector("video").ontimeupdate=()=>{s.querySelector("video")!==null&&this.CM.time(1e3*s.querySelector("video").currentTime)};let p=this.danmuControlHtml.querySelector(".icon-danmu-close"),M=this.danmuControlHtml.querySelector(".icon-danmu-open");if(p.onclick=()=>{this.userDanmuOpen=!1,p.style.display="none",M.style.display="inline-block",this.CM.clear(),this.CM.stop()},M.onclick=()=>{M.style.display="none",p.style.display="inline-block",this.userDanmuOpen=!0,this.CM.start()},this.danmuInput!==null){let I=this.danmuInput.querySelector(".ali-danmu-input input");this.danmuInput.querySelector(".danmu-input-enter").onclick=this.sendDanmuHandle.bind(this),I.onkeydown=N=>{N.keyCode===13&&this.sendDanmuHandle.call(this)}}}sendDanmuHandle(){let s=this.danmuInput.querySelector(".ali-danmu-input input"),o=s.value;o!==""&&(this.send({mode:1,text:o,stime:1e3,size:[16,18,25,36,45][this.randomIndex(5)],color:[16777215,255,13369344,16738047,16777011][this.randomIndex(5)]}),s.value="",s.focus())}randomIndex(s){return Math.floor(Math.random()*s)}play(s,o){this.userDanmuOpen&&this.CM.start()}pause(s,o){this.userDanmuOpen&&this.CM.stop()}send(s){this.CM.send(s)}insert(s){this.CM&&this.CM.insert(s)}dispose(){this.danmuInput!==null&&this.danmuInput.parentNode&&this.danmuInput.parentNode.removeChild(this.danmuInput)}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(2049),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52);window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.BulletScreenComponent=class{constructor(e,a,s="random"){this.text=e,this.style=a||{fontSize:"14px",color:"#fff"},this.html=(0,b.a8)('<div class="bullet-screen paused"></div>'),this.bulletPosition=s}createEl(e,a){this.html.innerText=this.text,e.appendChild(this.html),e.style.overflow="hidden"}ready(e,a){console.log(e.getOptions()),e.getOptions().autoplay===!1&&(this.html.style.animationPlayState="paused"),Object.keys(this.style).forEach(r=>this.html.style[r]=this.style[r]);var s=this.html.offsetHeight,o=parseInt(getComputedStyle(e.tag).height.replace("px",""))-s;if(this.bulletPosition==="bottom")this.html.style.bottom=0;else{let r=this.bulletPosition==="top"?0:this.randomTop(o);this.html.style.top=r}this.bulletPosition==="random"&&this.html.addEventListener("animationiteration",()=>{this.html.style.top=this.randomTop(o)})}playing(e,a){console.log("playering"),this.html.style.animationPlayState="running"}timeupdate(e,a){let s=e.el(),o=s.querySelector(".bullet-screen");if(o){o.className!=="bullet-screen"&&(o.className="bullet-screen");let r=getComputedStyle(o),u=r.getPropertyValue("display"),p=r.getPropertyValue("opacity"),M=r.getPropertyValue("visibility"),I=this.text,N=o.innerText;u==="none"&&o.style.setProperty("display","block"),p!=="1"&&o.style.setProperty("opacity","1"),M==="hidden"&&o.style.setProperty("visibility","visible"),I!=N&&(o.innerText=I)}else s.appendChild(this.html)}pause(e,a){console.log("pause"),this.html.style.animationPlayState="paused"}randomTop(e){return Math.floor(Math.random()*e)+"px"}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(1209),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52);window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.CaptionComponent=class{constructor(){this.captionList=null,this.html=(0,b.a8)('<div class="caption-components"> <div class="current-caption" data-ref=""></div> <ul class="caption-list"> </ul> </div>'),this.modalHtml=(0,b.a8)('<div class="caption-modal prism-info-display prism-info-left-bottom"> <span class="switchimg"></span> <span class="current-caption-tag"></span> </div>'),this.hasCreated=!1,this.definition=""}createEl(e,a){const s=a._options&&a._options.language;this.isEn=s&&s==="en-us",this.modalHtml.querySelector(".switchimg").innerText=this.isEn?"Switching to you for":"字幕切换到",this.modalHtml.querySelector(".switchimg").style.display="none",e.querySelector(".prism-controlbar").appendChild(this.html),e.appendChild(this.modalHtml),a.on("textTrackReady",({paramData:p})=>{this.captionList=p;let M=p.map(I=>`<li data-def="${I.value}">${I.text}</li>`);this.html.querySelector(".caption-list").innerHTML='<li style="background:rgba(88,87,86,.5);color:#fff">字幕</li>'+M.join("")});let o=this.html.querySelector(".current-caption"),r=this.html.querySelector(".caption-list");this.hasCreated==0&&this.definition&&(r.querySelector(`li[data-def="${this.definition}"]`).className="current"),this.hasCreated=!0;let u=null;o.onclick=()=>{r.style.display="block"},o.onmouseleave=()=>{u=setTimeout(()=>{r.style.display="none"},100)},r.onmouseenter=()=>{clearTimeout(u)},r.onmouseleave=()=>{r.style.display="none",this.modalHtml.style.display="none"},r.onclick=({target:p})=>{let M=p.dataset.def;if(M&&p.className!=="current"){let T=(I=this.captionList,N=C=>C.value===M,Array.isArray(I)?I.filter(N)[0]:I.find(N));a._ccService.switch(T.value),this.setCurrentCaption(T.text,T.value),this.modalHtml.style.display="block",this.modalHtml.querySelector(".switchimg").style.display="block",this.modalHtml.querySelector("span.current-caption-tag").innerText=T.text}var I,N}}setCurrentCaption(e,a){let s=this.html.querySelector(".current-caption");s.innerText=e,s.dataset.def=a,this.definition=a;let o=this.html.querySelector(".caption-list"),r=o.querySelector(".current");r&&(r.className="");let u=o.querySelectorAll("li");u.forEach(p=>{p.innerText===e&&(p.className="current")}),u&&(u.className="current")}created(e){}ready(e){this.modalHtml.style.display="none";let a=document.querySelector(".prism-setting-item.prism-setting-cc");a&&a.classList.add("player-hidden")}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(6730),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52),e=t(176);let a=class{constructor(o,r,u="关闭广告"){this.adVideoSource=o,this.html=(0,b.a8)('<div class="many-video-ad-component"> <div class="videos"> </div> <a class="many-video-ad-link" target="_blank"></a> <div class="many-video-ad-close"> <span id="many-video-ad-duration"></span> <label> <span class="many-video-ad-close-text"></span> <i class="iconfont icon-close"></i> </label> </div> <a class="many-video-ad-detail" target="_blank">查看详情</a> <div class="autoplay-many-video-ad"> <i class="iconfont icon-player-play"></i> <span class="limit"></span> <span class="manual"></span> </div> </div>'),this.adInterval=null,this.adCloseFunction=r,this.html.querySelector(".many-video-ad-close-text").innerText=u,this.adDuration=null,this.player=null,this.indexVideo=1}createEl(o,r){const u=r._options&&r._options.language;this.isEn=u&&u==="en-us",this.html.querySelector(".many-video-ad-detail").innerText=this.isEn?"For more information":"查看广告详情",this.html.querySelector(".limit").innerText=this.isEn?"Your browser limits autoplay":"您的浏览器限制",this.html.querySelector(".manual").innerText=this.isEn?"Please Click":"自动播放请点击",o.appendChild(this.html)}created(o){let r=this.adVideoSource.map((D,Q)=>`<video id="many-video-ad-content${Q+1}" style="${Q===0?"display: block":"display:none"};width:100%;height:100%" x5-video-player-type="h5" x5-video-player-fullscreen="false" src="${D.adVideo}"></video>`);this.html.querySelector(".videos").innerHTML=r.join(" "),this.indexVideo=Number(this.indexVideo);let u=this.indexVideo,p=this.adVideoSource,M=this.html.querySelector("#many-video-ad-content"+this.indexVideo),I=this.html.querySelector(".many-video-ad-detail"),N=this.html.querySelector("#many-video-ad-duration"),T=this;var C=M.play();C!==void 0&&C.then(()=>{M.play()}).catch(D=>{document.querySelector(".autoplay-many-video-ad").style.display="block",M.oncanplay=()=>{let Q=Math.ceil(M.duration);document.querySelector("#many-video-ad-duration").innerText=Q}}),M.addEventListener("canplay",function D(){M.removeEventListener("canplay",D),I.href=p[u-1].adVideoLink,M.play().then(()=>{let Q=Math.ceil(M.duration);N.innerText=Q,T.setAdInterval()}).catch(Q=>{T.html.querySelector(".autoplay-many-video-ad").style.display="block",T.html.querySelector(".icon-player-play").onclick=()=>{T.playManyVideoAd(),T.html.querySelector(".autoplay-many-video-ad").style.display="none"}})})}ready(o,r){this.indexVideo=Number(this.indexVideo);let u=this.html.querySelector("#many-video-ad-content"+this.indexVideo),p=this;u.addEventListener("ended",function(M){p.playNext(p)=="-1"&&o.play()}),this.html.querySelector(".many-video-ad-close label").onclick=()=>{typeof this.adCloseFunction=="function"?this.adCloseFunction(this):this.closeManyVideoAd()}}setAdInterval(o){let r=this.html.querySelector("#many-video-ad-duration"),u=this.html.querySelector("#many-video-ad-content"+this.indexVideo);this.adInterval=setInterval(()=>{let p=Math.ceil(u.duration)-Math.ceil(u.currentTime);r.innerText=p,p==1&&clearInterval(this.adInterval)},1e3)}pauseManyVideoAd(){this.clearAdInterval(),this.html.querySelector("#many-video-ad-content"+this.indexVideo).pause()}playManyVideoAd(){this.setAdInterval(),this.html.querySelector("#many-video-ad-content"+this.indexVideo).play()}clearAdInterval(){this.adInterval!==null&&clearInterval(this.adInterval),this.adInterval=null}playNext(o){if(o.indexVideo>=o.adVideoSource.length)return o.html.parentNode.removeChild(o.html),-1;this.indexVideo=Number(this.indexVideo),document.getElementById("many-video-ad-content"+this.indexVideo)!=null&&document.getElementById("many-video-ad-content"+this.indexVideo).remove();let r=this.indexVideo+1;o.html.querySelector(".many-video-ad-detail").href=o.adVideoSource[o.indexVideo].adVideoLink;let u=this.html.querySelector("#many-video-ad-content"+r),p=this.html.querySelector("#many-video-ad-duration");u.style.display="block",this.adVideoSource.length>=this.indexVideo&&(this.indexVideo=this.indexVideo+1);let M=Math.ceil(u.duration);p.innerText=M,o.setAdInterval(),u.play(),u.addEventListener("ended",function(I){o.playNext(o)=="-1"&&document.getElementById(player._options.id).getElementsByTagName("video")[0].play()})}closeManyVideoAd(){this.clearAdInterval(),this.html.parentNode.removeChild(this.html),this.html=null,document.getElementById(player._options.id).getElementsByTagName("video")[0].play()}};e.A.mobile()&&(a=class{constructor(o,r,u="关闭广告"){this.adVideoSource=o,this.html=(0,b.a8)('<div class="many-video-ad-component" style="background-color:transparent"> <div class="videosmb"></div> <a class="many-video-ad-link" target="_blank"></a> <div class="many-video-ad-close"> <span id="many-video-ad-duration"></span> <label> <span class="many-video-ad-close-text"></span> <i class="iconfont icon-close"></i> </label> </div> <a class="many-video-ad-detail" target="_blank"></a> <div class="autoplay-many-video-ad" style="display:block"> <i class="iconfont icon-player-play"></i> <span class="limit"></span> <span class="manual"></span> </div> </div>'),this.adInterval=null,this.adCloseFunction=r,this.html.querySelector(".many-video-ad-close-text").innerText=u,this.adDuration=null,this.player=null,this.indexVideo=1}createEl(o,r){const u=r._options&&r._options.language;this.isEn=u&&u==="en-us",this.html.querySelector(".many-video-ad-detail").innerText=this.isEn?"For more information":"查看广告详情",this.html.querySelector(".limit").innerText=this.isEn?"Your browser limits autoplay":"您的浏览器限制",this.html.querySelector(".manual").innerText=this.isEn?"Please Click":"自动播放请点击",o.appendChild(this.html),o.querySelector(".videosmb"),o.querySelector(".videosmb").setAttribute("preload","load");let p=o.querySelector(".prism-controlbar");p.className=p.className+" controlbar-element-hidden",this.html.querySelector(".icon-player-play").onclick=()=>{this.playManyVideoAd(),this.html.querySelector(".autoplay-many-video-ad").style.display="none"}}created(o){let r=this.adVideoSource.map((T,C)=>`<video id="many-video-ad-content${C+1}" style="${C===0?"display: block":"display:none"};width:100%;height:100%" x5-video-player-type="h5" x5-video-player-fullscreen="false" src="${T.adVideo}"></video>`);this.html.querySelector(".videosmb").innerHTML=r.join(" "),this.indexVideo=Number(this.indexVideo);let u=this.indexVideo,p=this.adVideoSource,M=this.html.querySelector("#many-video-ad-content"+this.indexVideo),I=this.html.querySelector(".many-video-ad-detail"),N=this;M.addEventListener("canplay",function T(){M.removeEventListener("canplay",T),I.href=p[u-1].adVideoLink,N.html.querySelector("#many-video-ad-duration").innerText=Math.ceil(M.duration)})}ready(o){this.indexVideo=Number(this.indexVideo);let r=this.html.querySelector("#many-video-ad-content"+this.indexVideo),u=this;r.addEventListener("ended",function(p){if(u.playNext(u)=="-1"){o.play();let M=document.querySelector(".prism-controlbar");M.className=M.className.replace(" controlbar-element-hidden","")}}),this.html.querySelector(".many-video-ad-close label").onclick=()=>{typeof this.adCloseFunction=="function"?this.adCloseFunction(this):this.closeManyVideoAd()}}setAdInterval(){let o=this.html.querySelector("#many-video-ad-duration"),r=this.html.querySelector("#many-video-ad-content"+this.indexVideo);this.adInterval=setInterval(()=>{let u=Math.ceil(r.duration)-Math.ceil(r.currentTime);o.innerText=u,u==1&&clearInterval(this.adInterval)},1e3)}closeManyVideoAd(){this.clearAdInterval();let o=this.html.parentNode.querySelector(".prism-controlbar");o.className=o.className.replace(" controlbar-element-hidden",""),this.html.parentNode.removeChild(this.html),this.html=null,document.getElementById(player._options.id).getElementsByTagName("video")[0].play()}clearAdInterval(){this.adInterval!==null&&clearInterval(this.adInterval),this.adInterval=null}playManyVideoAd(){this.setAdInterval(),this.html.querySelector("#many-video-ad-content"+this.indexVideo).play()}pauseManyVideoAd(){this.clearAdInterval(),this.html.querySelector("#many-video-ad-content"+this.indexVideo).pause()}playNext(o){if(o.indexVideo>=o.adVideoSource.length)return o.html.parentNode.removeChild(o.html),-1;this.indexVideo=Number(this.indexVideo),document.getElementById("many-video-ad-content"+this.indexVideo)!=null&&document.getElementById("many-video-ad-content"+this.indexVideo).remove();let r=this.indexVideo+1;o.html.querySelector(".many-video-ad-detail").href=o.adVideoSource[o.indexVideo].adVideoLink;let u=this.html.querySelector("#many-video-ad-content"+r),p=this.html.querySelector("#many-video-ad-duration");u.style.display="block",this.adVideoSource.length>=this.indexVideo&&(this.indexVideo=this.indexVideo+1);let M=Math.ceil(u.duration);p.innerText=M,o.setAdInterval(),u.play(),u.addEventListener("ended",function(I){if(o.playNext(o)=="-1"){document.getElementById(player._options.id).getElementsByTagName("video")[0].play();let N=document.querySelector(".prism-controlbar");N.className=N.className.replace(" controlbar-element-hidden","")}})}});const s=a;window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.ManyVideoADComponent=s})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(4078),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52);window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.MemoryPlayComponent=class{constructor(e=!1,a,s){this.html=(0,b.a8)('<div class="memory-play-wrap"></div>'),this.autoPlay=e,this.getTime=a||this._getTime,this.saveTimeFunction=s||this._saveTime,this.hasMemoryDisplay=!1}createEl(e){e.appendChild(this.html)}ready(e,a){let s=e.getOptions(),o=s.vid||s.source.replace(/\?.*$/,""),r=this.getTime(o);if(r=r?parseInt(r):0,r!==null&&r!==0&&!this.hasMemoryDisplay)if(this.hasMemoryDisplay=!0,this.autoPlay)e.seek(r),e.getStatus()!=="playing"&&e.play();else{let u=this.getVideoTime(r);if(r!==parseInt(e._duration)){let p=`<div class="memory-play">
          <i class="iconfont icon-close"></i>
          <span>上次看到</span>
          <span>${u}</span>
          <span class="play-jump">跳转播放</span>
          </div>`;this.html.innerHTML=p;let M=setTimeout(()=>{this.html.innerHTML=""},15e3);this.html.querySelector(".icon-close").onclick=()=>{this.html.innerHTML="",clearTimeout(M)},this.html.querySelector(".play-jump").onclick=()=>{e.seek(r),e.getStatus()!=="playing"&&e.play(),this.html.innerHTML="",clearTimeout(M)}}}document.onvisibilitychange=()=>{document.visibilityState==="hidden"&&e.getCurrentTime()!==0&&this.saveTimeFunction(o,e.getCurrentTime())},window.onbeforeunload=()=>{e.getCurrentTime()!==0&&this.saveTimeFunction(o,e.getCurrentTime())}}error(e,a){this.setMemory(e)}dispose(e,a){this.setMemory(e)}setMemory(e){let a=e.getOptions(),s=a.vid||a.source.replace(/\?.*$/,"");this.saveTimeFunction(s,e.getCurrentTime())}getVideoTime(e){let a=Math.round(e),s=Math.floor(a/3600),o=Math.floor((a-3600*s)/60),r=a-3600*s-60*o;return o<10&&(o="0"+o),r<10&&(r="0"+r),s===0?o+":"+r:s+":"+o+":"+r}_getTime(e){return localStorage.getItem(e)}_saveTime(e,a){localStorage.setItem(e,a)}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(2190),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52);window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.PauseADComponent=class{constructor(e,a){this.coverUrl=e,this.adUrl=a,this.html=(0,b.a8)('<div class="pause-ad"> <a class="btn-close"> <i class="split-left"></i> <i class="split-right"></i> <a> <span class="ad-text"></span> <a class="ad-content" target="_blank"> <img/> </a> </a></a></div>')}createEl(e,a){const s=a._options&&a._options.language;this.isEn=s&&s==="en-us",this.html.querySelector(".ad-text").innerText=this.isEn?"Ad":"广告";let o=this.html.querySelector(".ad-content"),r=o.querySelector("img");o.setAttribute("href",this.adUrl),r.setAttribute("src",this.coverUrl),this.html.querySelector(".btn-close").onclick=()=>{this.html.style.display="none"},e.appendChild(this.html)}play(e,a){this.html.style.display="none"}pause(e,a){this.html.style.display="block"}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(4843),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52);window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.PlaylistComponent=class{constructor(e){this.controlHtml=(0,b.a8)('<div class="playlist-component"> <i class="iconfont icon-skip-previous"></i> <div class="player-tooltip prev">上一个</div> <i class="iconfont icon-list"></i> <div class="player-tooltip list">播放列表</div> <i class="iconfont icon-skipnext"></i> <div class="player-tooltip next">下一个</div> </div>'),this.listHtml=(0,b.a8)('<div class="playlist-content"> <div class="list"></div> </div>'),this.playlist=e,this.playingVideoIndex=0,this.listHideTimeout=null}createEl(e,a){const s=a._options&&a._options.language;this.isEn=s&&s==="en-us",this.controlHtml.querySelector(".player-tooltip.prev").innerText=this.isEn?"Previous":"上一个",this.controlHtml.querySelector(".player-tooltip.list").innerText=this.isEn?"Playlist":"播放列表",this.controlHtml.querySelector(".player-tooltip.next").innerText=this.isEn?"Next":"下一个";let o=e.querySelector(".prism-controlbar"),r=o.querySelector(".prism-time-display");o.insertBefore(this.controlHtml,r),this.listHtml.onmouseleave=()=>{this.listHtml.style.width=0},this.listHtml.onmouseenter=this.clearHideListTimeout.bind(this),this.controlHtml.querySelector(".icon-list").onclick=this.tooglePlaylist.bind(this),this.listHtml.querySelector(".list").innerHTML=this.computedListDom(this.playlist);let u=a.getOptions()&&a.getOptions().source,p=0;u&&(p=this.playlist.findIndex(M=>M.source===u),p=p>-1?p:0,this.playingVideoIndex=p>-1?p:0),this.listHtml.querySelector(".list").childNodes[0].className="video-item active",e.appendChild(this.listHtml)}ready(e,a){this.controlHtml.querySelector(".icon-skip-previous").onclick=()=>{e&&e.trigger("plugin-playlist-click-prev",{currentIndex:Math.max(this.playingVideoIndex-1,0)}),this.playingVideoIndex!==0?this.playVideo(e,this.playingVideoIndex-1):this.playlistTip(this.isEn?"Already the first one~":"已经是第一个了~",e._el)},this.controlHtml.querySelector(".icon-skipnext").onclick=()=>{e&&e.trigger("plugin-playlist-click-next",{currentIndex:Math.min(this.playingVideoIndex+1,this.playlist.length-1)}),this.playingVideoIndex!==this.playlist.length-1?this.playVideo(e,this.playingVideoIndex+1):this.playlistTip(this.isEn?"Already the last one~":"已经是最后一个了~",e._el)},this.listHtml.querySelector(".list").onclick=s=>{let o=s.target,r=parseInt(o.getAttribute("data-index"));e&&e.trigger("plugin-playlist-click-video",{currentIndex:this.playingVideoIndex,clickedIndex:r}),o.className==="video-item"&&this.playVideo(e,r)}}clearHideListTimeout(){this.listHideTimeout!==null&&(clearTimeout(this.listHideTimeout),this.listHideTimeout=null)}playVideo(e,a){this.playingVideoIndex!==a&&(e&&e.trigger("plugin-playlist-change",{currentIndex:a}),this.playingVideoIndex=parseInt(a),e.loadByUrl(this.playlist[a].source),this.listHtml.querySelector(".video-item.active").className="video-item",this.listHtml.querySelector(".list").childNodes[a].className="video-item active")}tooglePlaylist(){this.clearHideListTimeout(),this.listHtml.style.width==="30%"?this.listHtml.style.width=0:(this.listHtml.style.width="30%",this.listHideTimeout=setTimeout(()=>{this.listHtml.style.width=0},5e3))}playlistTip(e,a){let s=document.createElement("div");s.className="playlist-skip-tip",s.innerText=e,a.appendChild(s),setTimeout(function(){a.removeChild(s)},3e3)}computedListDom(e){return e.map((a,s)=>`<div class="video-item" data-index="${s}" title="${a.name}">${a.name}</div>`).join("")}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(9918),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52);window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.PreviewVodComponent=class{constructor(e,a=null,s=null){this.previewDuration=e,this.html=(0,b.a8)('<div class="preview-vod-component"> <div class="preview-component-layer"> <div class="preview-custom"> <p class="preview-default"></p> </div> </div> <div class="preview-component-tip"> <span class="can-preview"></span><span class="preview-time"></span>， <span class="preview-custom-bar">Become VIP Watch Full Version </span> <span class="preview-vod-close">x</span> </div> </div>'),a!==null&&this.insertHTtml(a,"previewEndHtml"),s!==null&&this.insertHTtml(s,"previewBarHtml")}play(e){this.previewEnd&&(e._el.querySelector(".center").classList.remove("preview-hide"),e.seek(0),this.previewEnd=!1)}insertHTtml(e,a){let s=a==="previewEndHtml"?".preview-custom":".preview-custom-bar",o=this.html.querySelector(s);if(typeof e=="string")if(e[0]==="#"){let r=document.querySelector(e);r?o.innerHTML=r.innerHTML:console.warn(`[aliplayer components warn]: Invalid parameter ${a}, can't find element by this id`)}else o.innerHTML=e;else console.warn(`[aliplayer components warn]: Invalid parameter ${a}, ${a} must be a string type`)}ready(e){let a=parseInt(e.getDuration());this.videoDuration=a,!this.invalidPreview&&this.previewDuration>=a&&(this.invalidPreview=!0,console.warn("[aliplayer components warn]: Invalid parameter previewDuration, previewDuration must be less than the video duration!")),this.previewDuration!==0&&this.previewDuration<a&&(this.html.style.display="block")}createEl(e,a){const s=a._options&&a._options.language;this.isEn=s&&s==="en-us",console.log(this.html.querySelector(".preview-default"));let o=this.html.querySelector(".preview-default");o&&(o.innerText=this.isEn?"Preview is over":"试看已结束"),this.html.querySelector(".can-preview").innerText=this.isEn?"Try":"可试看";let r=this.previewDuration;r===0&&(this.html.style.display="none");let u=r/60,p=u.toString().split(".")[1];u=p&&p.length>1?" "+r+(this.isEn?" senconds":" 秒"):" "+u+(this.isEn?" minutes":" 分钟"),r<60&&(u=" "+r+(this.isEn?" senconds":" 秒")),this.html.querySelector(".preview-time").innerText=u;let M=e.querySelector("video").nextElementSibling;M?e.insertBefore(this.html,M):e.appendChild(this.html),this.html.querySelector(".preview-vod-close").addEventListener("click",()=>{this.html.querySelector(".preview-component-tip").style.display="none"}),a.setPreviewTime(Number(this.previewDuration))}closePreviewLayer(){this.previewEnd=!1,this.html.querySelector(".preview-component-layer").style.display="none"}timeupdate(e){if(!this.previewEnd&&this.previewDuration!==0&&this.previewDuration<this.videoDuration){let a=e.getPreviewTime(),s=e.getCurrentTime();Math.floor(a)<s&&(this.previewEnd=!0,e._el.querySelector(".center")&&e._el.querySelector(".center").classList.add("preview-hide"),e.seek(a),e.pause(),this.html.querySelector(".preview-component-layer").style.display="block")}}ended(e,a){e.isPreview()&&(this.html.querySelector(".preview-component-layer").style.display="block")}}})(),(()=>{var c=t(52),l=t(5072),A=t.n(l),y=t(7825),g=t.n(y),i=t(7659),d=t.n(i),h=t(5056),f=t.n(h),v=t(540),w=t.n(v),x=t(1113),m=t.n(x),n=t(2008),b={};b.styleTagTransform=m(),b.setAttributes=f(),b.insert=d().bind(null,"head"),b.domAPI=g(),b.insertStyleElement=w(),A()(n.A,b),n.A&&n.A.locals&&n.A.locals,window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.ProgressComponent=class{constructor(){this.html=(0,c.a8)('<div class="progress-component"> <div class="progress-content clearfix"> <div class="img-wrap"><img/></div> <div class="info"> <div class="time"></div> <div class="describe"></div> </div> <i href="" target="_blank" class="iconfont icon-play pregress-play-btn"></i> </div> <i class="iconfont icon-arrowdown"></i> </div>'),this.imgEle=this.html.querySelector(".img-wrap img"),this.timeEle=this.html.querySelector(".time"),this.playBtnEle=this.html.querySelector(".pregress-play-btn"),this.describeEle=this.html.querySelector(".describe"),this.timer=null,this.currentOffset=null}createEl(e,a){e.appendChild(this.html),this.html.onmouseenter=()=>{this.timer!==null&&(clearTimeout(this.timer),this.timer=null)},this.html.onmouseleave=()=>{this.html.style.display="none"},this.html.onclick=()=>{this.html.style.display="none"},this.html.querySelector(".pregress-play-btn").addEventListener("click",()=>{a.seek(this.currentOffset)})}markerDotOver(e,a){let s=e._el.clientWidth,o=`calc(${100*a.left}% - 10px)`;s*a.left+323>s?(o=s-330+"px",this.html.querySelector(".icon-arrowdown").style.left=s*a.left-s+317+"px"):this.html.querySelector(".icon-arrowdown").style.left="-2px";let{coverUrl:r,title:u,describe:p,offset:M}=a.progressMarker;this.currentOffset=M,this.html.style.left=o,this.imgEle.src=r,this.timeEle.innerText=u,this.describeEle.innerText=p,this.html.style.display="block"}markerDotOut(e,a){this.timer=setTimeout(()=>{this.html.style.display="none"},100)}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(4200),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52);window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.QualityComponent=class{constructor(e){this.html=(0,b.a8)('<div class="quality-components"> <div class="current-quality" data-ref=""></div> <ul class="quality-list"> </ul> </div>'),this.modalHtml=(0,b.a8)('<div class="quality-modal"> <span class="switchimg"></span> <span class="current-quality-tag"></span> , <span class="wait"></span> </div>'),this.hasCreated=!1,this.definition="",this.getQuality=e,this._levels=[]}createEl(e,a){const s=a._options&&a._options.language;this.isEn=s&&s==="en-us",this.html.querySelector(".current-quality").innerText=this.isEn?"Resolution":"清晰度",this.modalHtml.querySelector(".switchimg").innerText=this.isEn?"Switching to you for":"正在为您切换到",this.modalHtml.querySelector(".wait").innerText=this.isEn?"Please wait...":"请稍候...",e.querySelector(".prism-controlbar").appendChild(this.html),e.appendChild(this.modalHtml)}setCurrentQuality(e,a){let s=this.html.querySelector(".current-quality");s.innerText=e||"",s.dataset.def=a,this.definition=a;let o=this.html.querySelector(".quality-list"),r=o.querySelector(".current");r&&(r.className="");let u=o.querySelector(`li[data-def="${a}"]`);u&&(u.className="current")}created(e){this._urls=e._urls;let a=this.html.querySelector(".current-quality"),s=this.html.querySelector(".quality-list");s.style.display="none",e.on("settingListHide",()=>{s.style.display="none"}),e.on("selectorUpdateList",u=>{if(u.paramData.type!=="quality"||!e.getOptions().isVBR)return;let p=e._qualityService.levels;this._levels=(p||[]).map(C=>({...C,definition:C.bitrate||"AUTO"}));let M=this._levels.map(C=>`<li data-def="${C.definition}">${C.desc}</li>`);s.innerHTML=M.join(""),a.style.width="100px",s.style.width="100px";const I=(N=this._levels,T=C=>C.definition===this.definition,Array.isArray(N)?N.filter(T)[0]:N.find(T))?.desc;var N,T;this.setCurrentQuality(I,this.definition)});let o=this._urls.map(u=>`<li data-def="${u.definition}">${u.desc}</li>`);s.innerHTML=o.join(""),this.hasCreated==0&&this.definition&&(s.querySelector(`li[data-def="${this.definition}"]`).className="current"),this.hasCreated=!0;let r=null;a.onclick=()=>{const u=s.style.display!=="none";s.style.display=u?"none":"block"},a.onmouseleave=()=>{r&&clearTimeout(r),r=setTimeout(()=>{s.style.display="none"},150)},s.onmouseenter=()=>{clearTimeout(r)},s.onmouseleave=()=>{r&&clearTimeout(r),r=setTimeout(()=>{s.style.display="none"},150)},s.onclick=({target:u})=>{let p=u.dataset.def,M=u.innerText;if(p&&u.className!=="current"){let T=(I=this._levels?.length>0?this._levels:this._urls,N=C=>String(C.definition)===p,Array.isArray(I)?I.filter(N)[0]:I.find(N));if(T){if((0,b.DR)("selectedStreamLevel",T.definition,365),e._switchLevel&&!e._options.isLive&&e._options.isVBR){let C=function(D,Q){return Array.isArray(D)?D.filter(Q)[0]:D.find(Q)}(this._levels,D=>Number(D.bitrate)===Number(p));e._switchLevel(T.Url,C)}else e._loadByUrlInner(T.Url,e.getCurrentTime(),!0);this.setCurrentQuality(T.desc,T.definition),this.modalHtml.style.display="block",this.modalHtml.querySelector("span.current-quality-tag").innerText=T.desc,setTimeout(()=>{this.modalHtml.style.display="none"},2e3)}}var I,N;typeof this.getQuality=="function"&&this.getQuality(p,M)}}ready(e){this.modalHtml.style.display="none";let a=document.querySelector(".prism-setting-item.prism-setting-quality");a&&a.classList.add("player-hidden")}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(6175),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52);window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.RateComponent=class{constructor(){this.html=(0,b.a8)('<div class="rate-components"> <div class="current-rate">1.0x</div> <ul class="rate-list"> <li data-rate="2.0">2.0x</li> <li data-rate="1.5">1.5x</li> <li data-rate="1.25">1.25x</li> <li data-rate="1.0" class="current">1.0x</li> <li data-rate="0.5">0.5x</li> </ul> </div>')}createEl(e){e.querySelector(".prism-controlbar").appendChild(this.html)}ready(e,a){let s=this.html.querySelector(".current-rate"),o=this.html.querySelector(".rate-list"),r=null,u=document.querySelector(".prism-setting-item.prism-setting-speed");u&&u.classList.add("player-hidden"),s.onclick=()=>{o.style.display="block"},s.onmouseleave=()=>{r=setTimeout(()=>{o.style.display="none"},100)},o.onmouseenter=()=>{clearTimeout(r)},o.onmouseleave=()=>{o.style.display="none"},o.onclick=({target:p})=>{let M=p.dataset.rate;if(M){if(e.setSpeed(M),p.className!=="current"){let I=o.querySelector(".current");I&&(I.className=""),p.className="current"}o.style.display="none",s.innerText=M+"x"}}}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(6481),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52);window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.RotateMirrorComponent=class{constructor(){this.html=(0,b.a8)('<div class="aliplayer-rotate-mirror"> <i class="iconfont icon-player-rotate-left"></i> <div class="player-tooltip counterclockwise"></div> <i class="iconfont icon-player-rotate-right"></i> <div class="player-tooltip clockwise"></div> <i class="iconfont icon-player-switch"></i> <div class="player-tooltip switch"></div> <div class="mirror-option" style="display:none"> <div class="mirror-item" data-id="vertical"></div> <div class="mirror-item" data-id="horizon"></div> <div class="mirror-item" data-id="counterclockwise"></div> <div class="mirror-item" data-id="clockwise"></div> </div> </div>')}createEl(e,a){const s=a._options&&a._options.language;this.isEn=s&&s==="en-us",this.html.querySelector(".player-tooltip.counterclockwise").innerText=this.isEn?"Rotate 45 degrees counterclockwise":"逆时针旋转45度",this.html.querySelector('.mirror-item[data-id="counterclockwise"]').innerText=this.isEn?"Rotate left 45 ̊":"左旋转45˚",this.html.querySelector(".player-tooltip.clockwise").innerText=this.isEn?"Rotate 45 degrees clockwise":"顺时针旋转45度",this.html.querySelector('.mirror-item[data-id="clockwise"]').innerText=this.isEn?"Rotate right 45 ̊":"右旋转45˚",this.html.querySelector(".player-tooltip.switch").innerText=this.isEn?"Mirror":"镜像",this.html.querySelector(".mirror-item[data-id=vertical]").innerText=this.isEn?"Vertical mirroring":"垂直镜像",this.html.querySelector(".mirror-item[data-id=horizon]").innerText=this.isEn?"Horizontal mirroring":"水平镜像",e.querySelector(".prism-controlbar").appendChild(this.html)}ready(e,a){this.html.querySelector(".icon-player-rotate-left").onclick=function(){let o=e.getRotate();e.setRotate(o-45)},this.html.querySelector(".icon-player-rotate-right").onclick=function(){let o=e.getRotate();e.setRotate(o+45)};let s=this.html.querySelector(".mirror-option");this.html.querySelector(".icon-player-switch").onclick=()=>{let o=s.style.display;s.style.display=o==="none"?"block":"none"},s.onmouseleave=function(){this.style.display="none"},s.onclick=function(o){let r=o.target;if(r.dataset.id==="counterclockwise"){let u=e.getRotate();return void e.setRotate(u-45)}if(r.dataset.id==="clockwise"){let u=e.getRotate();return void e.setRotate(u+45)}if(r.className.match("active"))e.cancelImage(),r.className="mirror-item";else{let u=r.dataset.id==="horizon"?r.previousElementSibling:r.nextElementSibling;u.className.match("active")&&(u.className="mirror-item",e.cancelImage());let p=r.getAttribute("data-id");e.setImage(p),r.className="mirror-item active"}}}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(2484),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52);window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.StartADComponent=class{constructor(e,a,s){if(this.coverUrl=e,this.adUrl=a,this.adDuration=s,s<=0)throw Error("adDuration must must be greater than 0");this.html=(0,b.a8)('<div class="start-ad"> <span class="tip"><span class="ad-name">广告</span>: <i></i><span class="second">秒</span></span> <a class="ad-content" target="_blank"> <img/> </a> </div>')}createEl(e,a){const s=a._options&&a._options.language;this.isEn=s&&s==="en-us",this.html.querySelector(".ad-name").innerText=this.isEn?"Ad":"广告",this.html.querySelector(".second").innerText=this.isEn?"s":"秒";let o=this.html.querySelector(".ad-content");if(o.setAttribute("href",this.adUrl),o.querySelector("img").setAttribute("src",this.coverUrl),this.html.querySelector(".tip i").innerText=this.adDuration,e.appendChild(this.html),this.html!==null){a.getStatus()!=="init"&&a.pause();let r=this.adDuration,u=this.html.querySelector(".tip i"),p=setInterval(()=>{if(r-=1,u.innerText=r,r===0){if(clearInterval(p),a.__disposed==1)return;this.removeComponent();let N=a.getOptions(),T=N.vid||N.source.replace(/\?.*$/,""),C=localStorage.getItem(T)||0;C&&(C=parseInt(C));let D=(M=a.getOptions()&&a.getOptions().components,I=Q=>Q.type.name==="MemoryPlayComponent",Array.isArray(M)?M.filter(I)[0]:M.find(I));(!D||!D.args[0]||a.getCurrentTime()>=C)&&a.play()}var M,I},1e3)}}removeComponent(){this.html.parentNode?.removeChild(this.html),this.html=null}ready(e){this.html!==null&&e.pause()}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(9218),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52);window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.TrackComponent=class{constructor(){this.trackList=null,this.html=(0,b.a8)('<div class="track-components"> <div class="current-track"></div> <ul class="track-list"> </ul> </div>'),this.modalHtml=(0,b.a8)('<div class="track-modal prism-info-display prism-info-left-bottom"> <span class="switchimg"></span> <span class="current-track-tag"></span> </div>'),this.hasCreated=!1,this.definition=""}createEl(e,a){const s=a._options&&a._options.language;this.isEn=s&&s==="en-us",this.modalHtml.querySelector(".switchimg").innerText=this.isEn?"Track to you for":"音轨切换到",this.modalHtml.querySelector(".switchimg").style.display="none",e.querySelector(".prism-controlbar").appendChild(this.html),e.appendChild(this.modalHtml),a.on("audioTrackReady",({paramData:p})=>{this.trackList=p;let M=p.map(N=>`<li data-def="${N.value}">${N.text}</li>`);this.html.querySelector(".track-list").innerHTML='<li style="background:rgba(88,87,86,.5);color:#fff">音轨</li>'+M.join("");let I=a._audioTrackService._defaultTrack;I||(I=this.trackList[0]),this.setCurrentTrack(I.text,I.value)});let o=this.html.querySelector(".current-track"),r=this.html.querySelector(".track-list");this.hasCreated==0&&this.definition&&(r.querySelector(`li[data-def="${this.definition}"]`).className="current"),this.hasCreated=!0;let u=null;o.onclick=()=>{r.style.display="block"},o.onmouseleave=()=>{u=setTimeout(()=>{r.style.display="none"},100)},r.onmouseenter=()=>{clearTimeout(u)},r.onmouseleave=()=>{r.style.display="none",this.modalHtml.style.display="none"},r.onclick=({target:p})=>{let M=p.dataset.def;if(M&&p.className!=="current"){let T=(I=this.trackList,N=C=>C.value.toString()===M,Array.isArray(I)?I.filter(N)[0]:I.find(N));a._audioTrackService.switch(T.value),this.setCurrentTrack(T.text,T.value),this.modalHtml.style.display="block",this.modalHtml.querySelector(".switchimg").style.display="block",this.modalHtml.querySelector("span.current-track-tag").innerText=T.text}var I,N}}setCurrentTrack(e,a){let s=this.html.querySelector(".current-track");s.innerText=e,s.dataset.def=a,this.definition=a;let o=this.html.querySelector(".track-list"),r=o.querySelector(".current");r&&(r.className="");let u=o.querySelectorAll("li");u.forEach(p=>{p.innerText===e&&(p.className="current")}),u&&(u.className="current")}created(e){}ready(e){this.modalHtml.style.display="none";let a=document.querySelector(".prism-setting-item.prism-setting-audio");a&&a.classList.add("player-hidden")}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(6613),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals;var b=t(52),e=t(176);let a=class{constructor(o,r,u,p="关闭广告"){this.adVideoSource=o,this.adLink=r,this.html=(0,b.a8)('<div class="video-ad-component"> <video id="video-ad-content" x5-video-player-type="h5" x5-video-player-fullscreen="false"></video> <a class="video-ad-link" target="_blank"></a> <div class="video-ad-close"> <span id="video-ad-duration"></span> <label> <span class="video-ad-close-text"></span> <i class="iconfont icon-close"></i> </label> </div> <a class="video-ad-detail" target="_blank"></a> <div class="autoplay-video-ad"> <i class="iconfont icon-player-play"></i> <span class="limit"></span> <span class="manual"></span> </div> <div id="loadflag" class="prism-loading loading-center"> <div class="circle"></div> <div class="circle1"></div> </div> </div>'),this.adInterval=null,this.adCloseFunction=u,this.html.querySelector(".video-ad-close-text").innerText=p,this.adDuration=null,this.player=null}createEl(o,r){this.player=r;const u=r._options&&r._options.language;this.isEn=u&&u==="en-us",this.html.querySelector(".video-ad-detail").innerText=this.isEn?"For more information":"查看广告详情",this.html.querySelector(".limit").innerText=this.isEn?"Your browser limits autoplay":"您的浏览器限制",this.html.querySelector(".manual").innerText=this.isEn?"Please Click":"自动播放请点击";let p=this.html.querySelector("#video-ad-content");p.setAttribute("src",this.adVideoSource);let M=this;this.html.querySelector(".icon-player-play").onclick=()=>{this.playVideoAd(),this.html.querySelector(".autoplay-video-ad").style.display="none"},p.addEventListener("canplay",function T(){p.removeEventListener("canplay",T),document.getElementById("loadflag").style.display="none",M.adDuration=Math.ceil(p.duration),M.html.querySelector("#video-ad-duration").innerText=M.adDuration,p.play().then(()=>{M.setAdInterval()}).catch(C=>{M.html.querySelector(".autoplay-video-ad").style.display="block"})});let I=this.html.querySelector(".video-ad-link"),N=this.html.querySelector(".video-ad-detail");I.setAttribute("href",this.adLink),N.setAttribute("href",this.adLink),o.appendChild(this.html),this.html.querySelector(".video-ad-close label").onclick=()=>{typeof this.adCloseFunction=="function"?this.adCloseFunction(this):this.closeVideoAd()}}ready(o,r){this.html!==null&&(o.pause(),this.player=o)}pauseVideoAd(){this.clearAdInterval(),this.html.querySelector("#video-ad-content").pause()}playVideoAd(){this.setAdInterval(),this.html.querySelector("#video-ad-content").play()}clearAdInterval(){this.adInterval!==null&&clearInterval(this.adInterval),this.adInterval=null}setAdInterval(){let o=this.html.querySelector("#video-ad-duration");this.adInterval=setInterval(()=>{this.adDuration-=1,this.adDuration<=0?this.closeVideoAd():o.innerText=this.adDuration},1e3)}closeVideoAd(){this.clearAdInterval(),this.html.parentNode.removeChild(this.html),this.html=null,this.player&&this.player.getOptions().autoplay&&this.player.play()}};e.A.mobile()&&(a=class{constructor(o,r,u,p="关闭广告"){this.adVideoSource=o,this.adLink=r,this.html=(0,b.a8)('<div class="video-ad-component" style="background-color:transparent"> <a class="video-ad-link" target="_blank"></a> <div class="video-ad-close"> <span id="video-ad-duration"></span> <label> <span class="video-ad-close-text"></span> <i class="iconfont icon-close"></i> </label> </div> <a class="video-ad-detail" target="_blank"></a> <div class="autoplay-video-ad" style="display:block"> <i class="iconfont icon-player-play"></i> <span class="limit"></span> <span class="manual"></span> </div> </div>'),this.adInterval=null,this.adCloseFunction=u,this.html.querySelector(".video-ad-close-text").innerText=p,this.html.querySelector(".video-ad-link").setAttribute("href",this.adLink),this.html.querySelector(".video-ad-detail").setAttribute("href",this.adLink),this.adDuration=null}createEl(o,r){const u=r._options&&r._options.language;this.isEn=u&&u==="en-us",this.html.querySelector(".video-ad-detail").innerText=this.isEn?"For more information":"查看广告详情",this.html.querySelector(".limit").innerText=this.isEn?"Your browser limits autoplay":"您的浏览器限制",this.html.querySelector(".manual").innerText=this.isEn?"Please Click":"自动播放请点击",o.appendChild(this.html),o.querySelector("video"),o.querySelector("video").setAttribute("preload","load");let p=o.querySelector(".prism-controlbar");p.className=p.className+" controlbar-element-hidden";let M=o.querySelector(".prism-big-play-btn");M.className=M.className+" controlbar-element-hidden"}created(o){if(this.player=o,this.vdSource=o.getOptions().source,o.loadByUrl(this.adVideoSource),this.html.querySelector(".autoplay-video-ad").onclick=()=>{this.adDuration!==null&&(o.loadByUrl(this.adVideoSource),this.html.parentNode.querySelector(".prism-big-play-btn").click())},this.adDuration===null){let r=function(){let M=u.duration;isNaN(M)||M===0||(u.removeEventListener("timeupdate",r),p.adDuration=Math.ceil(u.duration),p.html.querySelector(".autoplay-video-ad").style.display!=="none"&&(p.html.querySelector(".autoplay-video-ad").style.display="none",o.play()),p.html.querySelector("#video-ad-duration").innerText=p.adDuration,p.setAdInterval())};this.adDuration=void 0;let u=this.html.parentNode.querySelector("video"),p=this;u.addEventListener("timeupdate",r)}}ready(o){this.html.querySelector(".video-ad-close label").onclick=()=>{typeof this.adCloseFunction=="function"?this.adCloseFunction(this):this.closeVideoAd(),document.getElementById(o.id()).getElementsByTagName("video")[0].play()}}setAdInterval(){let o=this.html.querySelector("#video-ad-duration");this.adInterval=setInterval(()=>{this.adDuration-=1,this.adDuration<=0?(this.closeVideoAd(),document.getElementById(this.player.id()).getElementsByTagName("video")[0].play()):o.innerText=this.adDuration},1e3)}closeVideoAd(){this.clearAdInterval(),this.player.loadByUrl(this.vdSource);let o=this.html.parentNode.querySelector(".prism-controlbar");o.className=o.className.replace(" controlbar-element-hidden","");let r=this.html.parentNode.querySelector(".prism-big-play-btn");r.className=r.className.replace(" controlbar-element-hidden",""),this.player.getOptions().autoplay&&this.player.play(),this.html.parentNode.removeChild(this.html)}clearAdInterval(){this.adInterval!==null&&clearInterval(this.adInterval),this.adInterval=null}playVideoAd(){this.setAdInterval(),this.player.play()}pauseVideoAd(){this.clearAdInterval(),this.player.pause()}});const s=a;window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.VideoADComponent=s})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(5570),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals,window.AliPlayerComponent||(window.AliPlayerComponent={}),window.AliPlayerComponent.PlayerNextComponent=class{constructor(b){this.clickHandle=b,this._html=document.createElement("div"),this._html.setAttribute("class","player-olympic-player-next");let e=document.createElement("div");e.setAttribute("class","player-olympic-player-next-tip"),e.textContent="Next",this._html.appendChild(e)}createEl(b){this._html.addEventListener("click",this.clickHandle),b.querySelector(".prism-play-btn").insertAdjacentElement("afterend",this._html)}}})(),(()=>{var c=t(5072),l=t.n(c),A=t(7825),y=t.n(A),g=t(7659),i=t.n(g),d=t(5056),h=t.n(d),f=t(540),v=t.n(f),w=t(1113),x=t.n(w),m=t(807),n={};n.styleTagTransform=x(),n.setAttributes=h(),n.insert=i().bind(null,"head"),n.domAPI=y(),n.insertStyleElement=v(),l()(m.A,n),m.A&&m.A.locals&&m.A.locals})()})()),j}var S=Y();const O=z(S),U=L({__proto__:null,default:O},[S]);export{U as a};
