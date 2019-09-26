(window.webpackJsonpclashjs=window.webpackJsonpclashjs||[]).push([[0],[,,,,,,,,function(t,e){var n=["north","east","south","west"],i=["north","east","south","west","shoot"],a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];switch(i){case n[0]:return t[1]===e[1]&&t[0]>e[0];case n[1]:return t[0]===e[0]&&t[1]<e[1];case n[2]:return t[1]===e[1]&&t[0]<e[0];case n[3]:return t[0]===e[0]&&t[1]>e[1]}};t.exports={randomMove:function(){return Math.random()>.33?"move":i[Math.floor(Math.random()*i.length)]},getDirection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t=t||[],e=e||[];var n=Math.abs(t[0]-e[0]),i=Math.abs(t[1]-e[1]);return n>i?t[0]-e[0]>0?"north":"south":t[1]-e[1]>0?"west":"east"},isVisible:a,canKill:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.some((function(e){return e.isAlive&&a(t.position,e.position,t.direction)}))},safeRandomMove:function(){return Math.random()>.33?"move":n[Math.floor(Math.random()*n.length)]},fastGetDirection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Math.abs(t[0]-e[0]);return n?t[0]-e[0]>0?"north":"south":t[1]-e[1]>0?"west":"east"},turn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,i=n.indexOf(t);return n[(i+e)%4]},getDistance:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Math.abs(t[0]-e[0]),i=Math.abs(t[1]-e[1]);return i+n}}},,,function(t,e){t.exports.lasers={laser0:{play:function(){}},laser1:{play:function(){}},laser2:{play:function(){}},laser3:{play:function(){}},laser4:{play:function(){}},laser5:{play:function(){}},laser6:{play:function(){}},laser7:{play:function(){}},laser8:{play:function(){}}},t.exports.explosions={explode0:{play:function(){}},explode1:{play:function(){}},explode2:{play:function(){}}},t.exports.streak={firstBlood:{play:function(){}},doubleKill:{play:function(){}},tripleKill:{play:function(){}},monsterKill:{play:function(){}},killingSpree:{play:function(){}},dominating:{play:function(){}},rampage:{play:function(){}},godLike:{play:function(){}},ownage:{play:function(){}}},t.exports.music={theme0:{play:function(){}}}},,,function(t,e,n){t.exports=n(15)},function(t,e,n){var i=n(5),a=n(17);n(21);var o=n(22);a.render(i.createElement(o,null),document.getElementById("root"))},,,,,,function(t,e,n){},function(t,e,n){var i=n(5);n(23);var a=n(24);t.exports=function(){return i.createElement("div",{className:"App"},i.createElement(a,null))}},function(t,e,n){},function(t,e,n){"use strict";n.r(e),function(t){var e=n(12),i=n(0),a=n(1),o=n(4),r=n(2),s=n(3),l=n(5),c=n(7),u=n(11),h=n(27),m=n(28),p=n(29),f=n(30),d=n(31),v=n(32),y=n(33),g=n(37),k=c.shuffle(c.map(g,(function(t){return t}))),b=[];window.ClashInstance=new y(k,{});var _=100,w=function(t){function n(t){var e;return Object(i.a)(this,n),e=Object(o.a)(this,Object(r.a)(n).call(this,t)),window.ClashInstance.target.addEventListener("DATA",(function(t){e.handleEvent(t.detail.name,t.detail.data)})),e.state={clashjs:window.ClashInstance.getState(),shoots:[],speed:_,kills:[],currentGameIndex:1,finished:!1},e}return Object(s.a)(n,t),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.nextTurn()}},{key:"handleClick",value:function(){this.setState({speed:Math.floor(.9*this.state.speed)})}},{key:"newGame",value:function(){var t=this;b=[],this.nextTurnTimeout&&clearTimeout(this.nextTurnTimeout),window.ClashInstance.setupGame(),this.setState((function(t){return{clashjs:window.ClashInstance.getState(),speed:_,kills:[],currentGameIndex:t.currentGameIndex+1}}),(function(){t.nextTurnTimeout&&clearTimeout(t.nextTurnTimeout),window.setTimeout((function(){t.nextTurn()}),50)}))}},{key:"nextTurn",value:function(){var t=this;if(!this.state.finished){var e=this.state.currentGameIndex;this.nextTurnTimeout&&clearTimeout(this.nextTurnTimeout),this.nextTurnTimeout=window.setTimeout((function(){if(t.state.currentGameIndex===e){if(window.ClashInstance.getState().playerStates.reduce((function(t,e){return e.isAlive?t+1:t}),0)<2)return window.ClashInstance.nextPly(),void t.nextTurn();window.ClashInstance.nextPly(),t.setState({clashjs:window.ClashInstance.getState(),speed:t.state.speed>50?parseInt(.99*t.state.speed,10):50},t.nextTurn)}}),this.state.speed)}}},{key:"handleEvent",value:function(t,e){if("SHOOT"===t){var n=this.state.shoots;n.push({direction:e.direction,origin:e.origin.slice(),time:(new Date).getTime()}),this.setState({shoots:n})}return"WIN"===t?this.newGame():"DRAW"===t?this.newGame():"KILL"===t?this._handleKill(e):"END"===t?this.endGame():void 0}},{key:"_handleKill",value:function(t){var e=this,n=window.ClashInstance.getState().playerInstances,i=this.state.kills,a=n[t.killer],o=c.map(t.killed,(function(e){return b.push(t.killer),a.kills++,n[e].deaths++,n[e]})),r=[a.getName(),"killed",c.map(o,(function(t){return t.getName()})).join(",")].join(" ");i.push({date:new Date,text:r}),this.setState({kills:i}),setTimeout((function(){return e.handleStreak(t.killer,a,o)}),100)}},{key:"endGame",value:function(){this.setState({clashjs:window.ClashInstance.getState(),shoots:[],speed:0,kills:[],finished:!0})}},{key:"handleStreak",value:function(t,e,n){var i=c.filter(b,(function(e){return e===t})).length,a="",o="",r=this.state.kills;switch(1===b.length&&setTimeout(u.streak.firstBlood.play(),50),n.length){case 2:setTimeout(u.streak.doubleKill.play(),100),a=e.getName()+" got a double kill!";break;case 3:setTimeout(u.streak.tripleKill.play(),100),a=e.getName()+" got a Triple Kill!";break;case 4:setTimeout(u.streak.monsterKill.play(),100),a=e.getName()+" is a MONSTER KILLER!"}switch(r.push({date:new Date,text:a}),i){case 3:setTimeout(u.streak.killingSpree.play(),300),o=e.getName()+" is on a killing spree!";break;case 4:setTimeout(u.streak.dominating.play(),300),o=e.getName()+" is dominating!";break;case 5:setTimeout(u.streak.rampage.play(),300),o=e.getName()+" is on a rampage of kills!";break;case 6:setTimeout(u.streak.godLike.play(),300),o=e.getName()+" is Godlike!";break;default:o="Somebody stop "+e.getName(),setTimeout(u.streak.ownage.play(),300)}r.push({date:new Date,text:o}),this.setState({kills:r})}},{key:"render",value:function(){var t=this.state,n=t.clashjs,i=t.shoots,a=t.kills,o=t.finished,r=n.gameEnvironment,s=n.gameStats,u=n.playerStates,y=n.playerInstances,g=n.rounds,k=n.totalRounds;r=r||{gridSize:13},c.forEach(y,(function(t,e){s[t.getId()].isAlive=u[e].isAlive}));var b=Object(e.a)(a);if(o){var _=c.sortBy(s,(function(t){return-1*t.wins}))[0];b.push({date:new Date,text:l.createElement("b",{style:{color:"#0e0",fontWeight:700}},"Congrats ",_.name,"!")}),b.push({date:new Date,text:"Refresh the page to start again"})}return l.createElement("div",{className:"clash",onClick:this.handleClick.bind(this)},l.createElement(h,{gridSize:r.gridSize}),l.createElement(d,{shoots:i.slice(),gridSize:r.gridSize}),l.createElement(m,{gridSize:r.gridSize,ammoPosition:r.ammoPosition}),l.createElement(p,{gridSize:r.gridSize,playerInstances:y,playerStates:u}),l.createElement(v,{kills:b}),l.createElement(f,{rounds:g,total:k,playerStates:u,stats:s}),!1)}}]),n}(l.Component);t.exports=w}.call(this,n(6)(t))},,,function(t,e,n){"use strict";n.r(e),function(t){var e=n(0),i=n(1),a=n(4),o=n(2),r=n(3),s=n(5),l=function(t){function n(){return Object(e.a)(this,n),Object(a.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(r.a)(n,t),Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var t,e=this.props.gridSize,n=100/e,i=[];for(t=0;t<e*e;t++)i.push(s.createElement("div",{style:{height:n+"vmin",width:n+"vmin"},className:"clash-tile",key:t}));return s.createElement("div",null,i)}}]),n}(s.Component);t.exports=l}.call(this,n(6)(t))},function(t,e,n){"use strict";n.r(e),function(t){var e=n(0),i=n(1),a=n(4),o=n(2),r=n(3),s=n(5),l=n(7),c=function(t){function n(){return Object(e.a)(this,n),Object(a.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(r.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.gridSize,n=t.ammoPosition,i=100/e,a=l.map(n,(function(t,e){return s.createElement("div",{key:e,className:"clash-ammo",style:{top:i*t[0]+"vmin",left:i*t[1]+"vmin",width:i+"vmin",height:i+"vmin"}})}));return s.createElement("div",{className:"clash-layer animation-glow"},a)}}]),n}(s.Component);t.exports=c}.call(this,n(6)(t))},function(t,e,n){"use strict";n.r(e),function(t){var e=n(0),i=n(1),a=n(4),o=n(2),r=n(3),s=n(5),l=n(7),c=["north","east","south","west"],u=function(t){function n(t){var i;return Object(e.a)(this,n),(i=Object(a.a)(this,Object(o.a)(n).call(this,t))).state={playerDirections:t.playerStates.map((function(t){return c.indexOf(t.direction)}))},i}return Object(r.a)(n,t),Object(i.a)(n,[{key:"componentWillReceiveProps",value:function(t){var e=this.state.playerDirections,n=t.playerStates.map((function(t){return c.indexOf(t.direction)}));this.setState({playerDirections:n.map((function(t,n){var i=(t+4)%4-(e[n]+4)%4;return 3===i&&(i=-1),-3===i&&(i=1),e[n]+i}))})}},{key:"render",value:function(){var t=this.state.playerDirections,e=this.props,n=e.gridSize,i=e.playerStates,a=e.playerInstances,o=100/n,r=l.map(i,(function(e,n){if(!e.isAlive)return null;var i=a[n].getInfo();return s.createElement("div",{key:n,className:"clash-player-container",style:{width:o+"vmin",height:o+"vmin",transform:"translateY("+o*e.position[0]+"vmin) translateX("+o*e.position[1]+"vmin)"}},s.createElement("div",{className:"clash-player",style:{width:o+"vmin",height:o+"vmin",backgroundImage:"url(static/rockets/rocket"+(e.style||0)+".png)",transform:"scale(1.25) rotate("+90*t[n]+"deg) "}}),s.createElement("div",{className:"clash-player-name"},i.name))}));return s.createElement("div",{className:"clash-layer"},r)}}]),n}(s.Component);t.exports=u}.call(this,n(6)(t))},function(t,e,n){"use strict";n.r(e),function(t){var e=n(0),i=n(1),a=n(4),o=n(2),r=n(3),s=n(5),l=n(7),c=function(t){function n(){return Object(e.a)(this,n),Object(a.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(r.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.stats,n=t.rounds,i=t.total;return e=l.map(e,(function(t){return t})),e=l.sortBy(e,(function(t){return-1*t.wins})),s.createElement("div",{className:"stats"},s.createElement("div",{className:"stats-title"},"Round ",n," of ",i),s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null),s.createElement("th",null),s.createElement("th",null,"Wins"))),s.createElement("tbody",null,l.map(e,(function(t,e){return s.createElement("tr",{key:e,className:t.isAlive?"":"player-dead"},s.createElement("td",null,t.isAlive?"":"\ud83d\udc80"),s.createElement("td",{className:"player-name"},t.name),s.createElement("td",{className:"stats-results"},t.wins))})))))}}]),n}(s.Component);t.exports=c}.call(this,n(6)(t))},function(t,e,n){"use strict";n.r(e),function(t){var e=n(0),i=n(1),a=n(4),o=n(2),r=n(3),s=n(5),l=["north","east","south","west"],c=n(7),u=function(t){function n(){return Object(e.a)(this,n),Object(a.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(r.a)(n,t),Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(t){return t.shoots.length!==this.props.shoots.length}},{key:"render",value:function(){var t=this.props,e=t.shoots,n=100/t.gridSize,i=c.map(e,(function(t,e){return s.createElement("div",{key:e,className:"clash-shoot animation-shot",style:{top:n*t.origin[0]+"vmin",left:n*t.origin[1]+"vmin",transform:"translatex("+n/2+"vmin) translatey("+n/2+"vmin) rotate("+90*(l.indexOf(t.direction)-1)+"deg) "}})}));return s.createElement("div",{className:"clash-layer"},i)}}]),n}(s.Component);t.exports=u}.call(this,n(6)(t))},function(t,e,n){"use strict";n.r(e),function(t){var e=n(0),i=n(1),a=n(4),o=n(2),r=n(3),s=n(5),l=n(7),c=function(t){function n(){return Object(e.a)(this,n),Object(a.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(r.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){var t=this.props.kills,e=new Date;return l.remove(t,(function(t){return e-t.date>3e3})),t=l.sortBy(t,(function(t){return t.date.valueOf})),s.createElement("div",{className:"notifications"},l.map(t,(function(t,e){return s.createElement("p",{key:e},t.text)})))}}]),n}(s.Component);t.exports=c}.call(this,n(6)(t))},function(t,e,n){"use strict";n.r(e),function(t){var e=n(4),i=n(2),a=n(3),o=n(13),r=n(0),s=n(1),l=n(7),c=n(34),u=n(36),h=["north","east","south","west"],m=function(){function t(n,s){var l=this;Object(r.a)(this,t);var u=function(t){function n(){return Object(r.a)(this,n),Object(e.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(a.a)(n,t),n}(Object(o.a)(EventTarget));this.target=new u,this._totalRounds=2*n.length+8,this._rounds=0,this._gameStats=s||{},this._evtCallback=function(t,e){l.target.dispatchEvent(new CustomEvent("DATA",{detail:{name:t,data:e}}))},this._alivePlayerCount=0,this._suddenDeathCount=0,this._playerInstances=n.map((function(t){var e=new c(t);return l._gameStats[e.getId()]={name:e.getName(),deaths:0,kills:0,kdr:0,wins:0,winrate:0},e})),this.setupGame()}return Object(s.a)(t,[{key:"_getAlivePlayerCount",value:function(){return this._playerStates.reduce((function(t,e){return e.isAlive?t+1:t}),0)}},{key:"setupGame",value:function(){var t=this;this._gameEnvironment={gridSize:13,ammoPosition:[]},this._rounds++,this._suddenDeathCount=0,this._playerInstances=l.shuffle(this._playerInstances),this._alivePlayerCount=this._playerInstances.length,this._playerStates=this._playerInstances.map((function(e){var n=t._gameEnvironment.gridSize;return{style:e.getInfo().style,position:[Math.floor(Math.random()*n),Math.floor(Math.random()*n)],direction:h[Math.floor(4*Math.random())],ammo:0,isAlive:!0}})),this._currentPlayer=0,this._createAmmo()}},{key:"_createAmmo",value:function(){var t=[Math.floor(Math.random()*this._gameEnvironment.gridSize),Math.floor(Math.random()*this._gameEnvironment.gridSize)];this._gameEnvironment.ammoPosition.some((function(e){return e[0]===t[0]&&e[1]===t[1]}))?this._createAmmo():this._gameEnvironment.ammoPosition.push(t)}},{key:"getState",value:function(){return{gameEnvironment:this._gameEnvironment,gameStats:this._gameStats,rounds:this._rounds,totalRounds:this._totalRounds,playerStates:this._playerStates,playerInstances:this._playerInstances}}},{key:"nextPly",value:function(){var t=this;this._suddenDeathCount>60*this._getAlivePlayerCount()&&(this._evtCallback("DRAW"),this._handleCoreAction("DRAW"));var e=l.cloneDeep(this._playerStates,!0);this._getAlivePlayerCount()<2&&(this._suddenDeathCount+=10),this._getAlivePlayerCount()<3&&this._suddenDeathCount++;var n=e.filter((function(e,n){return n!==t._currentPlayer&&e.isAlive}));return this._playerStates[this._currentPlayer].isAlive&&this._savePlayerAction(this._currentPlayer,this._playerInstances[this._currentPlayer].execute(e[this._currentPlayer],n,l.cloneDeep(this._gameEnvironment,!0))),this._currentPlayer=(this._currentPlayer+1)%this._playerInstances.length,this._gameEnvironment.ammoPosition.length<this._playerStates.length/1.2&&Math.random()>.92&&this._createAmmo(),Math.random()>.99&&this._createAmmo(),this.getState()}},{key:"_handleCoreAction",value:function(t,e){var n=this;if("KILL"===t){var i=e.killer,a=e.killed;this._gameStats[i.getId()].kills++,l.forEach(this._playerInstances,(function(t){var e=n._gameStats[t.getId()];a.indexOf(t)>-1&&(n._alivePlayerCount--,e.deaths++),e.deaths?e.kdr=e.kills/e.deaths:e.kdr=e.kills})),this._suddenDeathCount=0}return"WIN"===t&&(this._gameStats[e.winner.getId()].wins++,l.forEach(this._gameStats,(function(t,e){var i=t.wins;t.winrate;t.winrate=Math.round(100*i/n._rounds)})),this._rounds>=this._totalRounds)?this._evtCallback("END"):"DRAW"===t&&(l.forEach(this._gameStats,(function(t,e){var i=t.wins;t.winrate;t.winrate=Math.round(100*i/n._rounds)})),this._rounds>=this._totalRounds)?this._evtCallback("END"):void 0}},{key:"_savePlayerAction",value:function(t,e){this._playerStates=u({playerIndex:t,playerAction:e,playerStates:this._playerStates,playerInstances:this._playerInstances,gameEnvironment:this._gameEnvironment,evtCallback:this._evtCallback,coreCallback:this._handleCoreAction.bind(this)})}}]),t}();t.exports=m}.call(this,n(6)(t))},function(t,e,n){"use strict";n.r(e),function(t){var e=n(0),i=n(1),a=n(11),o=n(35).generateBase32String,r=function(){function t(n){Object(e.a)(this,t),this._id=o(8),this._playerInfo=n.info,this._playerAI=n.ai}return Object(i.a)(t,[{key:"getId",value:function(){return this._id}},{key:"getInfo",value:function(){return this._playerInfo}},{key:"getName",value:function(){return this._playerInfo.name}},{key:"playExplosion",value:function(){var t=Math.round(10*Math.random())%3;a.explosions["explode"+t].play()}},{key:"execute",value:function(t,e,n){try{return this._playerAI(t,e,n)}catch(i){console.error("!",i)}}}]),t}();t.exports=r}.call(this,n(6)(t))},function(t,e){var n,i,a,o,r="0123456789",s="abcdefghijklmnoprstuvxuyz",l=s.toUpperCase(),c="+/";t.exports=e={},n=function(){return[r,s,l,c].join("")},i=function(){return[r,s,l].join("")},a=function(){return[l,r].join("")},o=function(t,e){var n,i="";for(n=0;n<e;n+=1)i+=t[Math.ceil(100*Math.random()%t.length||1)-1];return i},e.generateBase64String=function(t){return o(n(),t)},e.generateBase62String=function(t){return o(i(),t)},e.generateBase32String=function(t){return o(a(),t)},e.generateBase10String=function(t){return o(r,t)}},function(t,e,n){var i=n(7),a=n(8),o=["north","east","south","west"],r=function(t,e){return t<0?0:t>e-1?e-1:t};t.exports=function(t){var e=t.playerIndex,n=t.playerAction,s=t.playerStates,l=t.playerInstances,c=t.gameEnvironment,u=t.evtCallback,h=t.coreCallback,m=s[e];if(-1!==o.indexOf(n))return m.direction=n,s;if("move"===n){switch(m.direction){case o[0]:m.position[0]--;break;case o[1]:m.position[1]++;break;case o[2]:m.position[0]++;break;case o[3]:m.position[1]--}m.position[0]=r(m.position[0],c.gridSize),m.position[1]=r(m.position[1],c.gridSize),c.ammoPosition.forEach((function(t,e){t[0]===m.position[0]&&t[1]===m.position[1]&&(c.ammoPosition.splice(e,1),m.ammo+=1)}))}if("shoot"===n&&m.ammo>0){m.ammo-=1;var p=[],f=[];u("SHOOT",{shooter:e,origin:m.position,direction:m.direction}),s.forEach((function(t,e){t.isAlive&&a.isVisible(m.position,t.position,m.direction)&&(p.push(e),t.isAlive=!1)})),p.length&&(f=i.filter(s,(function(t){return t.isAlive})),h("KILL",{killer:l[e],killed:i.map(p,(function(t){return l[t]}))}),u("KILL",{killer:e,killed:p}),f.length||(h("DRAW"),u("DRAW")),1===f.length&&(h("WIN",{winner:l[e]}),u("WIN",{winner:l[e]})))}return s}},function(t,e,n){t.exports={manuelmhtr:n(38),siegfried:n(39),horror:n(40),elperron:n(41),xmontoya:n(42),margeux:n(43)}},function(t,e,n){var i=n(8),a={north:"vertical",east:"horizontal",south:"vertical",west:"horizontal"},o={info:{name:"Manuelmhtr",style:3},ai:function(t,e,n){var o=[],r={vulnerabilityLevel:null,canKill:null,nearestAmmo:null,nearestEnemy:null,canMove:null};function s(t){var e=0;if(o.forEach((function(n){i.isVisible(n.position,t,n.direction)&&n.ammo>0?e=Math.max(e,1):l(n.position,t)&&(n.ammo>0||1===n.nearestAmmoDistance)&&(e=Math.max(e,.5))})),0===e){var n=[t[0]+1,t[1]+1],a=[t[0]-1,t[1]-1];o.forEach((function(t){t.ammo>0&&(l(t.position,n)||l(t.position,a))&&(e=Math.max(e,.25))}))}return e}function l(t,e){var n=!1;return n=(n=(n=(n=n||t[1]===e[1]&&t[0]>e[0])||t[0]===e[0]&&t[1]<e[1])||t[1]===e[1]&&t[0]<e[0])||t[0]===e[0]&&t[1]>e[1]}function c(t,e){var n=Math.abs(t[0]-e.position[0]),i=Math.abs(t[1]-e.position[1]);return Math.min(i,n)}function u(){var e=t.direction,i=r.vulnerabilityLevel,a=0;return[{direction:"north",position:[t.position[0]-1,t.position[1]]},{direction:"east",position:[t.position[0],t.position[1]+1]},{direction:"south",position:[t.position[0]+1,t.position[1]]},{direction:"west",position:[t.position[0],t.position[1]-1]}].forEach((function(o){o.vulnerability=s(o.position),o.distanceLeft=function(e){if("north"===e)return t.position[0];if("east"===e)return n.gridSize-t.position[1];if("south"===e)return n.gridSize-t.position[0];if("west"===e)return t.position[1]}(o.direction),o.canMove=h(t.position,o.direction);var r=o.vulnerability<i||o.vulnerability===i&&o.distanceLeft>a;o.canMove&&r&&(e=o.direction,i=o.vulnerability,a=o.distanceLeft)})),e===t.direction?p():e}function h(t,e){return"north"===e?t[0]>0:"east"===e?t[1]<n.gridSize:"south"===e?t[0]<n.gridSize:"west"===e?t[1]>0:void 0}function m(e){if(i.isVisible(t.position,e.position,t.direction))return"shoot";var n=function(){var n=l(t.position,e.position),o=a[e.direction];return n?i.fastGetDirection(t.position,e.position):"vertical"===o?e.position[1]>t.position[1]?"east":"west":e.position[0]>t.position[0]?"south":"north"}(),o=c(t.position,e);return n===t.direction&&(o>1||0===e.ammo)?"move":n}function p(){var e;return"north"===t.direction?e=[t.position[0]-1,t.position[1]]:"east"===t.direction?e=[t.position[0],t.position[1]+1]:"south"===t.direction?e=[t.position[0]+1,t.position[1]]:"west"===t.direction&&(e=[t.position[0],t.position[1]-1]),1===s(e)?null:"move"}function f(e){var n=i.fastGetDirection(t.position,e);return n===t.direction?p():n}return e.forEach((function(t){!0===t.isAlive&&(t.nearestAmmoDistance=function(t){var e=null;return n.ammoPosition.forEach((function(n){var a=i.getDistance(t,n);(null===e||a<e)&&(e=a)})),e}(t.position),o.push(t))})),r.vulnerabilityLevel=s(t.position),r.canKill=t.ammo>0&&i.canKill(t,e),r.nearestAmmo=function(t){var e=null,a=null;return n.ammoPosition.forEach((function(n){var o=i.getDistance(t,n);(null===a||o<a)&&(e={position:n,distance:a=o})})),e}(t.position),r.nearestEnemy=function(t){var e=null,n=null;return o.forEach((function(i){var a=c(t,i);(null===n||a<n)&&(e={instance:i,distance:n=a})})),e}(t.position),r.canMove=h(t.position,t.direction),1===r.vulnerabilityLevel||r.vulnerabilityLevel>=.5&&!0!==r.canKill?function(){if(1===r.vulnerabilityLevel){var e,n=r.canMove;return o.forEach((function(n){n.ammo>0&&i.isVisible(n.position,t.position,n.direction)&&(e=n)})),e&&a[e.direction]===a[t.direction]&&(n=!1),n?"move":e&&t.ammo>0?m(e):u()}return u()}():!0===r.canKill?"shoot":0===t.ammo&&r.nearestAmmo?f(r.nearestAmmo.position):t.ammo>0&&r.nearestEnemy?r.nearestAmmo&&r.nearestAmmo.distance<r.nearestEnemy.distance?f(r.nearestAmmo.position):m(r.nearestEnemy.instance):u()}};t.exports=o},function(t,e,n){var i=n(8),a={info:{name:"Siegfried",style:4},ai:function(t,e,n){var a;return i.canKill(t,e)&&t.ammo?"shoot":n.ammoPosition.length?(a=i.getDirection(t.position,n.ammoPosition[0]))!==t.direction?a:"move":i.randomMove()}};t.exports=a},function(t,e,n){var i=n(8),a={info:{name:"Horror",style:10},ai:function(t,e,n){var a;return i.canKill(t,e)&&t.ammo?"shoot":n.ammoPosition.length?(a=i.fastGetDirection(t.position,n.ammoPosition[0]))!==t.direction?a:"move":i.safeRandomMove()}};t.exports=a},function(t,e,n){var i=n(8),a=0,o=null,r={1:"north",2:"east",3:"south",4:"west"},s=0,l={info:{name:"ElPerron",style:7},ai:function(t,e,n){var l,c;if(i.canKill(t,e)&&t.ammo)return"shoot";if(0==t.ammo||1==s){var u=function(){var e=t.position,i=22,a=null;for(var o in n.ammoPosition){var r=n.ammoPosition[o],s=Math.abs(e[1]-r[1])+Math.abs(e[0]-r[0]);s<i&&(i=s,a=r)}return a}();return l=i.getDirection(t.position,u),null!=(c=o)&&c[0]==t.position[0]&&c[1]==t.position[1]&&(s=0),o=u,l!==t.direction?l:"move"}return++a>4&&(a=1,s++),r[a]}};t.exports=l},function(t,e,n){var i=n(8),a={info:{name:"Xmontoya89",style:1},ai:function(t,e,n){var a;return i.canKill(t,e)&&t.ammo?"shoot":n.ammoPosition.length?(a=i.fastGetDirection(t.position,n.ammoPosition[0]))!==t.direction?a:i.safeRandomMove():"move"}};t.exports=a},function(t,e,n){var i=n(8),a=!0,o={info:{name:"margeux",style:5},ai:function(t,e,n){var o,r;return t.ammo>0&&(a=!1),0==t.ammo&&(a=!0),n.ammoPosition.length&&a?(o=i.fastGetDirection(t.position,n.ammoPosition[0]))!==t.direction?o:"move":a?i.canKill(t,e)&&t.ammo?"shoot":n.ammoPosition.length?(o=i.fastGetDirection(t.position,n.ammoPosition[0]))!==t.direction?o:"move":i.safeRandomMove():(r=i.fastGetDirection(t.position,e[0].position))!==t.direction?i.fastGetDirection(e[0].position,t.position)!==e[0].position?r:i.safeRandomMove():i.canKill(t,e)&&t.ammo?"shoot":i.safeRandomMove()}};t.exports=o}],[[14,1,2]]]);
//# sourceMappingURL=main.019682d9.chunk.js.map