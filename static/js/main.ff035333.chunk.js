(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(10),s=c.n(n),i=c(2),r=c(4),o=c.n(r),l=c(5),d=c(3),j=(c(7),c(0));function u(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],s=c[1];function r(){return(r=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.openweathermap.org/geo/1.0/direct?q=".concat(n,"&appid=89e0b7e8dbbac9434ed75176dac7f8a3"));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,h(c),u(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var u=function(t){e.onChange(t)},h=function(e){console.log(e),(0,Object(d.useIndexedDB)("cities").add)({cityName:n,lat:e[0].lat,lon:e[0].lon}).then((function(e){console.log("ID Generated: ",e)}),(function(e){console.log(e)}))};return Object(j.jsxs)("div",{className:"searchBox",children:[Object(j.jsx)("input",{className:"inputbox",placeholder:"Search a City",value:n,name:"searchValue",type:"text",onChange:function(e){var t=e.target,c=t.value;"searchValue"===t.name&&s(c)}}),Object(j.jsx)("button",{onClick:function(){return r.apply(this,arguments)},className:"searchBtn",children:"Search"})]})}c(8);var h=c(11),m=c.n(h),b=c.p+"static/media/802.e7dd3721.svg",x=c.p+"static/media/800.41c6c635.svg",O=c.p+"static/media/803.e6537cfd.svg",p=c.p+"static/media/601.80108998.svg",g=c.p+"static/media/501.200911b6.svg";function v(e){var t=e.fiveDay.splice(1,5);console.log(t);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"five",children:"Five Day Forecast "}),t.map((function(e){return Object(j.jsxs)("div",{className:"fiveBoxes",children:[Object(j.jsx)("p",{className:"date",children:(c=e.dt,c*=1e3,m()(c).format("MMMM Do YYYY"))}),Object(j.jsx)("div",{className:"centerImg",children:(t=e.weather[0].id,console.log(t),301===t||500===t||501===t?(console.log("500 or 501"),Object(j.jsx)("img",{className:"smallerImg",src:g,alt:"cloud with light rain"})):600===t||601===t||616===t?(console.log("600 or 601"),Object(j.jsx)("img",{className:"smallerImg",src:p,alt:"cloud with snow"})):800===t?(console.log("800"),Object(j.jsx)("img",{className:"smallerImg",src:x,alt:"Sunny weather"})):801===t||802===t||803===t?(console.log("801 or 802 or 804"),Object(j.jsx)("img",{className:"smallerImg",src:b,alt:"Cloudy weather"})):804===t?(console.log("804"),Object(j.jsx)("img",{className:"smallerImg",src:O,alt:"Few Clouds"})):void 0)}),Object(j.jsx)("p",{className:"dailytext",children:e.weather[0].description}),Object(j.jsxs)("p",{className:"dailytext",children:["Temp: ",Math.floor(e.temp.day)]}),Object(j.jsxs)("p",{className:"dailytext",children:["Humidity: ",Math.floor(e.humidity)]})]},e.dt);var t,c}))]})}c(9);var f=c.p+"static/media/302.69228fb0.svg";function y(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),n=c[0],s=c[1];function r(){return(r=Object(l.a)(o.a.mark((function t(){var c,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.cityData.lat),t.prev=1,t.next=4,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.cityData.lat,"&lon=").concat(e.cityData.lon,"&exclude=minutely,hourly,alerts&units=metric&appid=89e0b7e8dbbac9434ed75176dac7f8a3"));case 4:return c=t.sent,t.next=7,c.json();case 7:a=t.sent,console.log(a),s(a),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}Object(a.useEffect)((function(){!0===e.cityData.hasData&&function(){r.apply(this,arguments)}()}),[e]);return Object(j.jsx)("div",{children:n?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"forecast",children:[Object(j.jsxs)("h2",{className:"bodyHeader",children:[function(){var t=e.cityData.cityName;return t[0].toUpperCase()+t.substring(1)}()," Current Forecast"]}),Object(j.jsxs)("div",{className:"dataBox",children:[Object(j.jsxs)("div",{className:"data",children:[Object(j.jsxs)("h3",{children:["Temp: ",Math.floor(n.current.temp)]}),Object(j.jsxs)("h3",{children:["Humidity: ",Math.round(n.current.humidity)]}),Object(j.jsxs)("h3",{children:["Wind Speed: ",Math.round(n.current.wind_speed)]}),Object(j.jsx)("div",{children:n.current.uvi<3?(console.log("UV is Low"),Object(j.jsxs)("h3",{className:" uv low",children:["UV Index: ",n.current.uvi]})):n.current.uvi<4&&n.current.uvi>7?(console.log("UV is Mid"),Object(j.jsxs)("h3",{className:" uv mid",children:["UV Index: ",n.current.uvi]})):n.current.uvi>8?(console.log("UV is High"),Object(j.jsxs)("h3",{className:" uv high",children:["UV Index: ",n.current.uvi]})):void 0})]}),Object(j.jsxs)("div",{className:"weatherImg",children:[function(){var e=n.current.weather[0].id;return 302===e?Object(j.jsx)("img",{src:f,alt:"cloud with light rain"}):301===e||500===e||501===e?(console.log("500 or 501"),Object(j.jsx)("img",{src:g,alt:"cloud with light rain"})):600===e||601===e||616===e?(console.log("600 or 601"),Object(j.jsx)("img",{src:p,alt:"cloud with snow"})):800===e?(console.log("800"),Object(j.jsx)("img",{src:x,alt:"Sunny weather"})):801===e||802===e||803===e?(console.log("801 or 802 or 804"),Object(j.jsx)("img",{src:b,alt:"Cloudy weather"})):804===e?(console.log("804"),Object(j.jsx)("img",{src:O,alt:"Few Clouds"})):void 0}(),Object(j.jsx)("p",{children:n.current.weather[0].description})]})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(v,{fiveDay:n.daily})})]}):Object(j.jsx)("h2",{children:"Waiting for data..."})})}function N(e){var t=Object(d.useIndexedDB)("cities").getAll,c=Object(a.useState)(""),n=Object(i.a)(c,2),s=n[0],r=n[1];Object(a.useEffect)((function(){t().then((function(e){r(e)}))}),[]);var o=function(t){e.onChange(t)};return Object(j.jsx)("div",{children:s?Object(j.jsx)("div",{children:s.map((function(e){return Object(j.jsx)("button",{className:"historyBtns",onClick:function(){return function(e){o(e)}(e)},children:e.cityName},e.id)}))}):Object(j.jsx)("div",{children:Object(j.jsx)("h4",{children:" waiting... "})})})}c(19);var w=c.p+"static/media/background.3b5a2f62.jpg";function D(){var e=Object(a.useState)({cityName:"",lat:"",lon:"",hasData:!1}),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(j.jsxs)("div",{style:{backgroundImage:"url(".concat(w,")")},children:[Object(j.jsx)("h1",{className:"header",children:"Weather Dashboard"}),Object(j.jsx)("div",{className:"bg",children:Object(j.jsxs)("section",{className:"container",children:[Object(j.jsxs)("div",{className:"oneThrid",children:[Object(j.jsx)(u,{cityData:c,onChange:function(e){n({cityName:e[0].name,lat:e[0].lat,lon:e[0].lon,hasData:!0})}}),Object(j.jsx)(N,{cityData:c,onChange:function(e){n({cityName:e.cityName,lat:e.lat,lon:e.lon,hasData:!0})}})]}),Object(j.jsx)("div",{className:"twoThrids",children:!0===c.hasData?Object(j.jsx)(y,{cityData:c}):Object(j.jsx)("h3",{children:"No data yet"})})]})})]})}function I(){return Object(j.jsx)("div",{children:Object(j.jsx)(D,{})})}Object(d.initDB)({name:"citiesDB",version:1,objectStoresMeta:[{store:"cities",storeConfig:{keyPath:"id",autoIncrement:!0},storeSchema:[{name:"cityName",keyPath:"cityName",option:{unique:!0}},{name:"lat",keyPath:"lat",option:{unique:!0}},{name:"lon",keyPath:"lon",option:{unique:!0}}]}]}),s.a.render(Object(j.jsx)(I,{}),document.getElementById("root"))},7:function(e,t,c){},8:function(e,t,c){},9:function(e,t,c){}},[[20,1,2]]]);
//# sourceMappingURL=main.ff035333.chunk.js.map