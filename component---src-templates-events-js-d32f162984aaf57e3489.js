(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{G28V:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),n=a("Wbzz");var s=function(e){var t=e.children;return r.a.createElement("div",{className:"has-tooltip"},r.a.createElement("span",{className:"tooltip tooltip-text rounded shadow-lg px-3 py-2 bg-base-light text-white text-sm font-normal -mt-10"},"Copy to clipboard"),t)},m=function(e){var t=e.eventUrl;return r.a.createElement("div",{className:"flex my-3 justify-start sm:justify-end font-bold text-white"},r.a.createElement(s,null,r.a.createElement("div",{className:"flex hover:text-gray-400"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-5 w-5 mr-2"},r.a.createElement("path",{strokeLinecap:"round",strokeLlinejoin:"round",strokeWidth:"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})),r.a.createElement("button",{id:"share-button",className:"font-bold focus:outline-none foucs-within:outline-none",onClick:function(){!function(e){var t=document.querySelector(".tooltip-text");navigator.clipboard.writeText(e),t.innerHTML="Copied",setTimeout((function(){t.innerHTML="Copy to clipborad"}),3e3)}(t)}},"Share"))))},c=function(e){var t=e.dAndT,a=e.eventTitle,l=e.desc,s=e.rules,c=e.certificatePolicy,o=e.prizes,i=e.pUrl;return r.a.createElement("section",{id:"events-page"},r.a.createElement("div",{className:"container md:max-w-4/5 xl:max-w-7/10 mx-auto py-28"},r.a.createElement("div",{className:"flex my-5 text-white"},r.a.createElement(n.Link,{to:"/",className:"flex"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-6 w-6 mr-2"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"})),"Go Back")),r.a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 justify-between mb-5 sm:mb-8"},r.a.createElement("div",{className:"text-xl my-2 text-gray-400"},t),r.a.createElement(m,{eventUrl:"https://www.google.com/"})),r.a.createElement("div",{className:"mb-6"},r.a.createElement("h1",{className:"text-4xl sm:text-6xl py-3 font-bold bg-gradient-to-br from-red-500 to-indigo-400 social-bg"},a),r.a.createElement("p",{className:"text-gray-400 text-lg py-3"},l),r.a.createElement("p",{className:"text-white font-bold text-lg sm:text-xl lg:text-2xl mb-5 py-3"},"Prize: ",o)),r.a.createElement("div",{className:"my-10"},r.a.createElement("hr",{className:"border-t border-base-light"}),r.a.createElement("img",{src:i,alt:"",className:"w-full max-w-2xl my-5 mx-auto"}),r.a.createElement("hr",{className:"border-t border-base-light"})),r.a.createElement("p",{className:"text-primary font-bold text-lg sm:text-xl lg:text-2xl py-3"},"Rules:"," "),r.a.createElement("div",{className:"text-white mb-8",dangerouslySetInnerHTML:{__html:s}}),r.a.createElement("p",{className:"text-primary font-bold text-lg sm:text-xl lg:text-2xl py-3"},"Certificate Policy:"," "),r.a.createElement("div",{className:"text-white",dangerouslySetInnerHTML:{__html:c}})))},o=function(e){var t=e.dAndT,a=e.eventTitle,l=e.desc,s=e.speaker,c=e.desig,o=e.sImg,i=e.pUrl;return r.a.createElement("section",{id:"events-page"},r.a.createElement("div",{className:"container md:max-w-4/5 xl:max-w-7/10 mx-auto py-28"},r.a.createElement("div",{className:"flex my-5 text-white"},r.a.createElement(n.Link,{to:"/",className:"flex"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-6 w-6 mr-2"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"})),"Go Back")),r.a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 justify-between mb-5 sm:mb-8"},r.a.createElement("div",{className:"text-xl my-2 text-gray-400"},t),r.a.createElement(m,{eventUrl:"https://www.google.com/"})),r.a.createElement("div",{className:"mb-6"},r.a.createElement("h1",{className:"text-4xl sm:text-6xl py-3 font-bold bg-gradient-to-br from-red-500 to-indigo-400 social-bg"},a),r.a.createElement("p",{className:"text-gray-400 text-lg py-3"},l)),r.a.createElement("div",{className:"flex align-middle"},r.a.createElement("div",{className:"rounded-full w-40 mr-5"},r.a.createElement("img",{src:o,alt:"",className:"rounded-full"})),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-white text-lg font-bold"},s),r.a.createElement("br",null),r.a.createElement("span",{className:"text-lg text-white"},c)))),r.a.createElement("div",{className:"my-10"},r.a.createElement("hr",{className:"border-t border-base-light"}),r.a.createElement("img",{src:i,alt:"",className:"w-full max-w-2xl my-5 mx-auto"}),r.a.createElement("hr",{className:"border-t border-base-light"}))))},i=a("NSxh"),d=a("Rb52"),x=a("EYWl");t.default=function(e){var t=e.data.eventsDataJson,a="workshop"===t.type?r.a.createElement(o,{dAndT:t.dateAndTime,eventTitle:t.eventName,desc:t.description,speaker:t.speakerName,desig:t.designation,sImg:t.speakerImg,pUrl:t.posterUrl}):r.a.createElement(c,{dAndT:t.dateAndTime,eventTitle:t.eventName,desc:t.description,rules:t.rules,certificatePolicy:t.certificatePolicy,prizes:t.prizes,pUrl:t.posterUrl});return r.a.createElement("div",null,r.a.createElement(x.a,null),r.a.createElement("div",{className:"base px-3 md:px-5 lg:px-10 bg-base"},a,r.a.createElement(i.a,null),r.a.createElement(d.a,null)))}}}]);
//# sourceMappingURL=component---src-templates-events-js-d32f162984aaf57e3489.js.map