(this["webpackJsonp12-days-of-data"]=this["webpackJsonp12-days-of-data"]||[]).push([[0],{12:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),i=a.n(r),c=(a(12),a(1));a(2);function s(e){var t=Object(n.useState)("noPeekingWindow hide"),a=Object(c.a)(t,2),r=a[0],i=a[1];function s(){i("noPeekingWindow hide"),setTimeout((function(){e.setError({exists:!1})}),500)}return Object(n.useEffect)((function(){i("noPeekingWindow")}),[]),o.a.createElement("div",{className:"noPeeking",onClick:s},o.a.createElement("div",{className:r},o.a.createElement("div",null,o.a.createElement("h4",null,e.error.message.title),o.a.createElement("i",{className:"material-icons close",tabIndex:"0",onClick:s},"close")),o.a.createElement("p",null,e.error.message.text)))}var l=a(3);var d=function(e){var t=l["day_".concat(e.day)];function a(){return Date.now()>=new Date(t.unlocks_at)}return o.a.createElement("div",{className:"flap","data-day":e.day,onClick:function(n){a()?(console.log("Opening Day ",n.target.getAttribute("data-day")),e.setDayToOpen(e.day),e.openContent(!0)):e.setError({exists:!0,message:t.error_message})},tabIndex:"1"},o.a.createElement("p",null,e.day),o.a.createElement("i",{className:"material-icons lock"},a()?"lock_open":"lock"))},u=a(6);function m(e){var t=l["day_".concat(e.day)];return t?o.a.createElement("div",{className:e.contentIsOpen?"content open":"content"},o.a.createElement("button",{className:"closeButton material-icons close",onClick:function(){return e.openContent(!1)},tabIndex:"0"},"close"),o.a.createElement("div",{className:"contentContainer"},o.a.createElement("h2",null,t.title),o.a.createElement("p",null,t.text),o.a.createElement(u.ReactTinyLink,{cardSize:"small",showGraphic:!0,maxLine:2,minLine:1,url:t.link}))):null}var h=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),l=Object(c.a)(i,2),u=l[0],h=l[1],y=Object(n.useState)({exists:!1}),k=Object(c.a)(y,2),b=k[0],g=k[1],w=Array.from({length:12},(function(e,t){return t+1}));return o.a.createElement(o.a.Fragment,null,b.exists?o.a.createElement(s,{error:b,setError:g}):null,o.a.createElement("div",{className:"calendar"},w.map((function(e){return o.a.createElement(d,{key:e,day:e,openContent:h,setError:g,setDayToOpen:r})})),o.a.createElement(m,{contentIsOpen:u,openContent:h,day:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},2:function(e,t,a){},3:function(e){e.exports=JSON.parse('{"day_1":{"unlocks_at":"December 5, 2019","error_message":{"title":"No Peeking!","text":"Come back on December 5th to view this content"},"title":"Where does public sector data come from?","text":"Around the world, 2.5 quintillion bytes (2.5 x 1018 bytes) of data are created every day, with 90 per cent of the data in the world generated in the last two years alone (IBM, 2016). The Government of Canada generates and holds a vast amount and diverse array of data, including spatial data, operational data, transactional service data, and data collected from or about citizens and businesses.\\n\\nThrough the power of data, public servants can fundamentally transform governments by changing the way they operate, make decisions and deliver services. To learn more about how the Government is using data check out the GC Data Strategy found here:","link":"https://www.canada.ca/en/privy-council/corporate/clerk/publications/data-strategy.html "},"day_2":{"unlocks_at":"December 6, 2019","error_message":{"title":"Nice try","text":"A good way of saying \u201cCome back on December 6th to view this content.\u201d"},"title":"Day 2 Title","text":"According to the Information and Communications Technology Council (ICTC) \u2018With the increasing use and relevance of technology across all sectors of the economy, Digital+Data has evolved into a thriving, almost self-contained economy of its own. Just a few years ago, a major headline dubbed \u201cdata [as] the new oil\u201d, effectively identifying it as a virtual, endlessly renewable natural resource.\u2019 To read highlights of ICTC\u2019s perspectives on a data economy strategy click here:","link":"https://www.ictc-ctic.ca/wp-content/uploads/2018/11/ICTC_Whitepaper_Perspective-Data-Econ-Strat.pdf"},"day_3":{"unlocks_at":"December 9, 2019","error_message":{"title":"Now just wait a minute\u2026","text":"You thought you could take a peek? Get back to work and come back on December 9th to see this content!"},"title":"Open Data","text":"Did you know?\\n\\nYou can search open data that is relevant to Canadians, learn how to work with datasets, and see what people have done with open data across the country","link":"https://open.canada.ca/en/open-data"},"day_4":{"unlocks_at":"December 10, 2019","error_message":{"title":"Patience is a virtue","text":"\u201cPatience is not the ability to wait, but the ability to keep a good attitude while waiting\u201d - An author with more patience than you\\n\\nCome back on December 10th to view this content."},"title":"","text":"","link":""},"day_5":{"unlocks_at":"December 11, 2019","error_message":{"title":"This is a test","text":"We tested your patience\u2026 Looks like you failed!\\n\\nCome back on December 11th to view this content."},"title":"","text":"","link":""},"day_6":{"unlocks_at":"December 12, 2019","error_message":{"title":"Absolutely no peeking!","text":"Come back on December 12th and you might have more luck!"},"title":"","text":"","link":""},"day_7":{"unlocks_at":"December 13, 2019","error_message":{"title":"Admit it\u2026","text":"You thought you could look at the content before others? Looks like you were wrong! Come back on December 13th to see what we have waiting for you."},"title":"","text":"","link":""},"day_8":{"unlocks_at":"December 16, 2019","error_message":{"title":"Don\u2019t give up!","text":"Never give up on something you really want. It\u2019s difficult to wait but come back on December 16th to see the content."},"title":"","text":"","link":""},"day_9":{"unlocks_at":"December 17, 2019","error_message":{"title":"Patience:","text":"What you don\u2019t have!\\n\\nCome back on December 17thto see this content."},"title":"","text":"","link":""},"day_10":{"unlocks_at":"December 18, 2019","error_message":{"title":"They say\u2026","text":"The longer you wait, the better the content. Come back on December 18th to see if it\u2019s true!"},"title":"","text":"","link":""},"day_11":{"unlocks_at":"December 19, 2019","error_message":{"title":"Looks like you\u2019re having trouble waiting\u2026 here\u2019s a data joke to hold you off!","text":"Question: What\u2019s the difference between an introverted data analyst & an extroverted one?\\n\\nAnswer: the extrovert stares at YOUR shoes.\\n\\nCome back on December 19th to see this content."},"title":"","text":"","link":""},"day_12":{"unlocks_at":"December 20, 2019","error_message":{"title":"It\u2019s worth the wait!","text":"Stay strong\u2026 it\u2019s coming soon!"},"title":"","text":"","link":""}}')},7:function(e,t,a){e.exports=a(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.d53d64f6.chunk.js.map