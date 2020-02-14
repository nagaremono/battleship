!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n,a=function(){var e,t=(e={},["A","B","C","D","E","F","G","H","I","J"].forEach((function(t){for(var r=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},t,{}),n=0;n<10;n++)r[t][n]=null;Object.assign(e,r)})),{grid:e}),r={placeShip:function(e,t,r){var n=function(e){var t={length:e};return Object.assign({},t,{placesHit:[]},{isSunk:function(){return!(this.placesHit.length<this.length)}},{hit:function(e){e<this.length&&(this.placesHit.find((function(t){if(t===e)return t}))||this.placesHit.push(e))}})}(t);if(n.location=e,n.direction=r,"vertical"===r)for(var a=0;a<t;a++)this.grid[e[0]][e[1]+a]=n;else if("horizontal"===r)for(var i=0;i<t;i++){var o=e[0].charCodeAt(0)+i;o=String.fromCharCode(o),this.grid[o][e[1]]=n}}};return Object.assign({},t,{receiveAttack:function(e,t){if("x"===this.grid[e][t])return!1;if(this.grid[e][t]){var r=this.grid[e][t].location,n=[e,t],a=0;a="vertical"===this.grid[e][t].direction?n[1]-r[1]:n[0].charCodeAt(0)-r[0].charCodeAt(0),this.grid[e][t].hit(a)}else this.missedAttacks.push([e,t]),this.grid[e][t]="x"}},r,{missedAttacks:[]},{isAllSunk:function(){for(var e in this.grid)for(var t in this.grid[e])if(this.grid[e][t]&&"x"!==this.grid[e][t]){if(!0===this.grid[e][t].isSunk())continue;return!1}return!0}})},i=function(){var e=document.querySelector(".player"),t=document.querySelector(".computer"),r=["A","B","C","D","E","F","G","H","I","J"];[e,t].forEach((function(e){for(var t=document.createElement("table"),n=document.createElement("tr"),a=-1;a<10;a++){var i=document.createElement("td");-1!==a?(i.textContent=r[a],n.appendChild(i)):n.appendChild(i)}t.appendChild(n);for(var o=0;o<10;o++){var l=document.createElement("tr"),c=document.createElement("td");c.textContent=o,l.appendChild(c);for(var d=0;d<10;d++){var h=document.createElement("td");h.dataset.horizontal=r[d],h.dataset.vertical=o,l.appendChild(h)}t.appendChild(l)}e.appendChild(t)}));function n(e,t,r,n){e.childNodes.forEach((function(e){e.childNodes.forEach((function(e){e.dataset.horizontal===t&&e.dataset.vertical===r&&(e.appendChild(n),e.childNodes.length>1&&e.removeChild(e.childNodes[0]))}))}))}return{renderBoard:function(r,a){var i="human"===r?e.childNodes[0]:t.childNodes[0];if("human"===r)for(var o in a){var l=function(e){var t=document.createElement("div");if(t.style.width="100%",t.style.height="100%",null===a[o][e])return"continue";if("x"===a[o][e])t.textContent="X",t.style.fontSize="25px",t.style.textAlign="center",t.style.lineHeight="100%",t.style.color="#1e1e1e",n(i,o,e,t);else if(a[o][e]){t.style.backgroundColor="#c4c4c4";var r=a[o][e].location,l=a[o][e].direction,c=a[o][e].placesHit,d=0;"vertical"===l?d=e-r[1]+1:"horizontal"===l&&(d=o.charCodeAt(0)-r[0].charCodeAt(0)+1),c.forEach((function(e){e===d&&(t.textContent="X",t.style.fontSize="25px",t.style.textAlign="center",t.style.lineHeight="100%",t.style.color="#1e1e1e")})),n(i,o,e,t)}};for(var c in a[o])l(c)}else if("computer"===r){var d=function(e){var t=function(t){var r=document.createElement("div");if(r.style.width="100%",r.style.height="100%",null===a[e][t])return"continue";if("x"===a[e][t])r.textContent="X",r.style.fontSize="25px",r.style.textAlign="center",r.style.lineHeight="100%",r.style.color="#1e1e1e",n(i,e,t,r);else if(a[e][t]){r.style.backgroundColor="#c4c4c4";var o=a[e][t].location,l=a[e][t].direction,c=a[e][t].placesHit,d=0;"vertical"===l?d=t-o[1]+1:"horizontal"===l&&(d=e.charCodeAt(0)-o[0].charCodeAt(0)+1),c.forEach((function(a){a===d&&(r.textContent="X",r.style.fontSize="25px",r.style.textAlign="center",r.style.lineHeight="100%",r.style.color="#1e1e1e",n(i,e,t,r))}))}};for(var r in a[e])t(r)};for(var h in a)d(h)}}}}();(n={},{},{startGame:function(){var e;e=a(),n=Object.assign({},{playerGameboard:e},{attack:function(e,t){e.playerGameboard.receiveAttack(t[0],t[1])}}),function(){var e=a();!function(){o(5),o(4);for(var e=0;e<2;e++)o(3);for(var t=0;t<3;t++)o(2);for(var r=0;r<4;r++)o(1)}();var t=[],r={attack:function(e){var r=0,n="",a=[];do{var i=Math.ceil(0),o=Math.floor(9);n="ABCDEFGHIJ".charAt(Math.floor(Math.random()*(o-i+1))+i),r=Math.floor(Math.random()*(o-i+1))+i,a=[n,r]}while(t.find((function(e){return e===a})));e.playerGameboard.receiveAttack(n,r),t.push(a)}};function n(){var e=Math.ceil(0),t=Math.floor(1);return 0===Math.floor(Math.random()*(t-e+1))+e?"horizontal":"vertical"}function i(t,r,n){if("vertical"===n){for(var a=0;a<r;a++)if(e.grid[t[0]][t[1]+a])return!0;return!1}if("horizontal"===n){for(var i=0;i<r;i++){var o=t[0].charCodeAt(0)+i;try{e.grid[String.fromCharCode(o)][t[1]]}catch(e){return!0}if(e.grid[String.fromCharCode(o)][t[1]])return!0}return!1}}function o(t){var r,a,o=[],l="";do{r=void 0,a=void 0,r=Math.ceil(0),a=Math.floor(9),o=["ABCDEFGHIJ".charAt(Math.floor(Math.random()*(a-r+1))+r),Math.floor(Math.random()*(a-r+1))+r],l=n()}while(i(o,t,l));e.placeShip(o,t,l)}return Object.assign({},{playerGameboard:e},r)}(),n.playerGameboard.placeShip(["A",0],5,"horizontal"),n.playerGameboard.placeShip(["A",1],4,"horizontal"),n.playerGameboard.placeShip(["F",0],3,"horizontal"),n.playerGameboard.placeShip(["F",1],3,"vertical"),n.playerGameboard.placeShip(["B",7],2,"horizontal"),n.playerGameboard.placeShip(["B",8],2,"horizontal"),n.playerGameboard.placeShip(["B",9],2,"horizontal"),n.playerGameboard.placeShip(["G",9],1,"horizontal"),n.playerGameboard.placeShip(["H",9],1,"horizontal"),n.playerGameboard.placeShip(["I",9],1,"horizontal"),n.playerGameboard.placeShip(["J",9],1,"horizontal"),i.renderBoard("human",n.playerGameboard.grid)}}).startGame()}]);
//# sourceMappingURL=main.js.map