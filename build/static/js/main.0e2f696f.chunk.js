(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n.n(s),a=n(25),o=n.n(a),r=(n(61),n(13)),l="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("43d833186893418dac16c9b6c09725f2","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"),j=n(34),u=n.n(j);n(62),n(63);var d=function(){return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(c.jsx)("a",{href:l,children:"LOGIN WITH SPOTIFY"})]})};n(64),n(65),n(66);var b=function(e){var t=e.title,n=e.Icon;return Object(c.jsxs)("div",{className:"sidebarOption",children:[n&&Object(c.jsx)(n,{className:"sidebarOption_icon"}),n?Object(c.jsx)("h4",{children:t}):Object(c.jsx)("p",{children:t})]})},O=Object(s.createContext)(),p=function(e){var t=e.initialState,n=e.reducer,i=e.children;return Object(c.jsx)(O.Provider,{value:Object(s.useReducer)(n,t),children:i})},f=function(){return Object(s.useContext)(O)},y=n(35),h=n.n(y),m=n(28),x=n.n(m),v=n(40),g=n.n(v);var _=function(){var e,t=f(),n=Object(r.a)(t,2),s=n[0].playlists;return n[1],Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("img",{className:"sidebar_logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),Object(c.jsx)(b,{title:"Home",Icon:h.a}),Object(c.jsx)(b,{title:"Search",Icon:x.a}),Object(c.jsx)(b,{title:"Your Library",Icon:g.a}),Object(c.jsx)("br",{}),Object(c.jsx)("strong",{className:"sidebar_title",children:"PLAYLISTS"}),Object(c.jsx)("hr",{}),null===s||void 0===s||null===(e=s.items)||void 0===e?void 0:e.map((function(e){return Object(c.jsx)(b,{title:e.name})}))]})},S=(n(72),n(73),n(91));var T=function(){var e,t=f(),n=Object(r.a)(t,2),s=n[0].user;return n[1],console.log(s),Object(c.jsxs)("div",{className:"header",children:[Object(c.jsxs)("div",{className:"header_left",children:[Object(c.jsx)(x.a,{}),Object(c.jsx)("input",{type:"text",placeholder:"Search for Artists, Songs, or Albums"})]}),Object(c.jsxs)("div",{className:"header_right",children:[Object(c.jsx)(S.a,{src:null===s||void 0===s||null===(e=s.images[0])||void 0===e?void 0:e.url,alt:null===s||void 0===s?void 0:s.display_name}),Object(c.jsx)("h4",{children:null===s||void 0===s?void 0:s.display_name})]})]})};n(74);var N=function(e){var t=e.track,n=e.playSong;return Object(c.jsxs)("div",{className:"songRow",onClick:function(){return n(t.id)},children:[Object(c.jsx)("img",{className:"songRow_album",src:t.album.images[0].url,alt:""}),Object(c.jsxs)("div",{className:"songRow_info",children:[Object(c.jsx)("h1",{children:t.name}),Object(c.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})},E=n(41),k=n.n(E),I=n(42),P=n.n(I),L=n(43),w=n.n(L);var C=function(e){var t=e.spotify,n=f(),s=Object(r.a)(n,2),i=s[0].discover_weekly,a=s[1],o=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){a({type:"SET_ITEM",item:e.item}),a({type:"SET_PLAYING",playing:!0})}))}))};return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)(T,{spotify:t}),Object(c.jsxs)("div",{className:"body_info",children:[Object(c.jsx)("img",{src:null===i||void 0===i?void 0:i.images[0].url,alt:""}),Object(c.jsxs)("div",{className:"body_infoText",children:[Object(c.jsx)("strong",{children:"PLAYLIST"}),Object(c.jsx)("h2",{children:"Discover Weekly"}),Object(c.jsx)("p",{children:null===i||void 0===i?void 0:i.description})]})]}),Object(c.jsxs)("div",{className:"body_songs",children:[Object(c.jsxs)("div",{className:"body_icons",children:[Object(c.jsx)(k.a,{className:"body_shuffle",onClick:function(e){t.play({context_uri:"spotify:playlist:37i9dQZEVXcU5UcwgMkFeE"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){a({type:"SET_ITEM",item:e.item}),a({type:"SET_PLAYING",playing:!0})}))}))}}),Object(c.jsx)(P.a,{fontSize:"large"}),Object(c.jsx)(w.a,{})]}),null===i||void 0===i?void 0:i.tracks.items.map((function(e){return Object(c.jsx)(N,{playSong:o,track:e.track})}))]})]})},Y=(n(75),n(47)),A=n.n(Y),M=n(46),F=n.n(M),G=n(45),R=n.n(G),U=n(48),z=n.n(U),D=n(44),K=n.n(D),V=n(49),W=n.n(V),B=n(50),H=n.n(B),J=n(51),Q=n.n(J),X=n(89),Z=n(90);var q=function(e){var t=e.spotify,n=f(),i=Object(r.a)(n,2),a=i[0],o=(a.token,a.item),l=a.playing,j=i[1];Object(s.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){j({type:"SET_PLAYING",playing:e.is_playing}),j({type:"SET_ITEM",item:e.item})}))}),[t,j]);var u=function(){l?(t.pause(),j({type:"SET_PLAYING",playing:!1})):(t.play(),j({type:"SET_PLAYING",playing:!0}))};return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsxs)("div",{className:"footer_left",children:[Object(c.jsx)("img",{className:"footer_albumLogo",src:null===o||void 0===o?void 0:o.album.images[0].url,alt:null===o||void 0===o?void 0:o.name}),o?Object(c.jsxs)("div",{className:"footer_songInfo",children:[Object(c.jsx)("h4",{children:o.name}),Object(c.jsx)("p",{children:o.artists.map((function(e){return e.name})).join(", ")})]}):Object(c.jsxs)("div",{className:"footer_songInfo",children:[Object(c.jsx)("h4",{children:"No Song Playing"}),Object(c.jsx)("p",{children:"..."})]})]}),Object(c.jsxs)("div",{className:"footer_center",children:[Object(c.jsx)(K.a,{className:"footer_green"}),Object(c.jsx)(R.a,{onClick:function(){t.skipToPrevious().then((function(e){t.getMyCurrentPlayingTrack().then((function(e){j({type:"SET_ITEM",item:e.item}),j({type:"SET_PLAYING",playing:!0})}))}))},className:"footer_icon"}),l?Object(c.jsx)(F.a,{onClick:u,fontSize:"large",className:"footer_icon"}):Object(c.jsx)(A.a,{onClick:u,fontSize:"large",className:"footer_icon"}),Object(c.jsx)(z.a,{onClick:function(){t.skipToNext().then((function(e){t.getMyCurrentPlayingTrack().then((function(e){j({type:"SET_ITEM",item:e.item}),j({type:"SET_PLAYING",playing:!0})}))}))},className:"footer_icon"}),Object(c.jsx)(W.a,{className:"footer_green"})]}),Object(c.jsx)("div",{className:"footer_right",children:Object(c.jsxs)(X.a,{container:!0,spacing:2,children:[Object(c.jsx)(X.a,{item:!0,children:Object(c.jsx)(H.a,{className:"footer_icon"})}),Object(c.jsx)(X.a,{item:!0,children:Object(c.jsx)(Q.a,{className:"footer_icon"})}),Object(c.jsx)(X.a,{item:!0,xs:!0,children:Object(c.jsx)(Z.a,{})})]})})]})};var $=function(e){var t=e.spotify;return Object(c.jsxs)("div",{className:"player",children:[Object(c.jsxs)("div",{className:"player_body",children:[Object(c.jsx)(_,{}),Object(c.jsx)(C,{spotify:t})]}),Object(c.jsx)(q,{spotify:t})]})},ee=new u.a;var te=function(){var e=f(),t=Object(r.a)(e,2),n=t[0].token,i=t[1];return Object(s.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(ee.setAccessToken(t),i({type:"SET_TOKEN",token:t}),ee.getPlaylist("37i9dQZEVXcU5UcwgMkFeE").then((function(e){return i({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),i({type:"SET_SPOTIFY",spotify:ee}),ee.getMe().then((function(e){i({type:"SET_USER",user:e})})),ee.getUserPlaylists().then((function(e){i({type:"SET_PLAYLISTS",playlists:e})})))}),[n,i]),Object(c.jsx)("div",{className:"app",children:n?Object(c.jsx)($,{spotify:ee}):Object(c.jsx)(d,{})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))},ce=n(4),se=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(ce.a)(Object(ce.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object(ce.a)(Object(ce.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(ce.a)(Object(ce.a)({},e),{},{item:t.item});case"SET_TOKEN":return Object(ce.a)(Object(ce.a)({},e),{},{token:t.token});case"SET_SPOTIFY":return Object(ce.a)(Object(ce.a)({},e),{},{spotify:t.spotify});case"SET_PLAYLISTS":return Object(ce.a)(Object(ce.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(ce.a)(Object(ce.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{initialState:{user:null,playlists:[],playing:!1,item:null,discover_weekly:null,spotify:null,token:null},reducer:se,children:Object(c.jsx)(te,{})})}),document.getElementById("root")),ne()}},[[76,1,2]]]);
//# sourceMappingURL=main.0e2f696f.chunk.js.map