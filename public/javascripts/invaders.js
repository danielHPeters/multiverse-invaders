!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=28)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.PLAYER="ship",t.ENEMY="enemy",t.ENEMY_BULLET="bulletEnemy",t.PLAYER_BULLET="bullet",t.BACKGROUND="background",t.MAP="map",t.GAME_OVER="gameOver",t.LASER="laser",t.MAIN_THEME="shockWave",t.EXPLOSION_I="explosion1",t.EXPLOSION_II="explosion2",t.BOX="box",t.ARENA="arena"}(e.EntityType||(e.EntityType={}))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.BACKGROUND=0]="BACKGROUND",t[t.MAIN=1]="MAIN",t[t.SHIP=2]="SHIP"}(e.ContextId||(e.ContextId={}))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class s{constructor(t,e){this.x=t,this.y=e}static addVector(t,e){return new s(t.x+e.x,t.y+e.y)}static subtractVector(t,e){return new s(t.x-e.x,t.y-e.y)}static multiply(t,e){return new s(t.x*e,t.y*e)}static divide(t,e){if(0===e)throw new Error('cannot divide vector by scalar with value "0"');return new s(t.x/e,t.y/e)}set x(t){this._x=t}set y(t){this._y=t}get x(){return this._x}get y(){return this._y}set(t,e){this.x=t,this.y=e}setVector(t){this.x=t.x,this.y=t.y}add(t,e){this.x+=t,this.y+=e}addVector(t){this.x+=t.x,this.y+=t.y}subtract(t,e){this.x-=t,this.y-=e}subtractVector(t){this.x-=t.x,this.y-=t.y}multiply(t){this.x*=t,this.y*=t}divide(t){if(0===t)throw new Error('cannot divide vector by "0"');this.x/=t,this.y/=t}mag(){return Math.sqrt(this.x*this.x+this.y*this.y)}negative(){return new s(-this.x,-this.y)}normalize(){let t=this.mag();0!==t&&this.divide(t)}limit(t){Math.floor(this.mag())>t&&(this.normalize(),this.multiply(t))}distanceTo(t){return Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2))}dot(t){return this.x*t.x+this.y*t.y}floor(){this.x=Math.floor(this.x),this.x=Math.floor(this.x)}clone(){return new s(this.x,this.y)}}e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t,e){this.width=t,this.height=e}scale(t){this.width*=t,this.height*=t}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(10);!function(t){t.UP="UP",t.DOWN="DOWN",t.LEFT="LEFT",t.RIGHT="RIGHT",t.SHOOT="SHOOT",t.RESTART="RESTART",t.ROTATE_LEFT="R-LEFT",t.ROTATE_RIGHT="R-RIGHT"}(e.Actions||(e.Actions={}));e.default=class extends s.default{constructor(t){super(),this.inputMap=t.keyBoard,this.init(),this.initializeTouchHandler(),this.touches={start:[],move:[]}}init(){window.addEventListener("keydown",t=>{let e=" "!==t.key?t.key:"space";this.state[this.inputMap[e]]=!0,this.notify()}),window.addEventListener("keyup",t=>{let e=" "!==t.key?t.key:"space";this.state[this.inputMap[e]]=!1,this.notify()})}initializeTouchHandler(){let t=document.getElementById("move"),e=t||window;e.addEventListener("touchstart",function(t){t.preventDefault(),i=t.touches,n=t.touches[0].pageX,o=t.touches[0].pageY},!1),e.addEventListener("touchmove",function(t){r.reset(),t.preventDefault(),s=t.changedTouches,a=t.touches[0].pageX,h=t.touches[0].pageY;for(let e=0;e<t.touches.length;e++)s[e].pageX<i[e].pageX&&(r.state[r.inputMap.a]=!0),s[e].pageX>i[e].pageX&&(r.state[r.inputMap.d]=!0),s[e].pageY<i[e].pageY&&(r.state[r.inputMap.w]=!0),s[e].pageY>i[e].pageY&&(r.state[r.inputMap.s]=!0),r.notify()},!1),e.addEventListener("touchend",function(t){t.preventDefault(),r.reset()},!1),e.addEventListener("contextmenu",t=>(t.preventDefault(),!1));let i=[],s=[],n=0,o=0,a=0,h=0,r=this}shoot(){this.state[this.inputMap.space]=!0}cancelShoot(){this.state[this.inputMap.space]=!1}reset(){this.state[this.inputMap.w]=!1,this.state[this.inputMap.a]=!1,this.state[this.inputMap.s]=!1,this.state[this.inputMap.d]=!1}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t,e,i){this.position=t,this.dimension=e,this.settings=i}init(){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.PLAYER="ship",t.ENEMY="enemy",t.ENEMY_BULLET="bulletEnemy",t.PLAYER_BULLET="bullet",t.BACKGROUND="background",t.MAP="map",t.GAME_OVER="gameOver",t.LASER="laser",t.MAIN_THEME="shockWave",t.EXPLOSION_I="explosion1",t.EXPLOSION_II="explosion2",t.BOX="box",t.ARENA="arena"}(e.AssetId||(e.AssetId={}))},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(27),n=i(26);var o;!function(t){t.SPRITE="SPRITE",t.SPRITE_SHEET="SPRITE_SHEET",t.AUDIO="AUDIO",t.AUDIO_AMB="LOOP"}(o=e.AssetType||(e.AssetType={}));e.default=class{constructor(t){this.cache={sprites:{},spriteSheets:{},audio:{}},this.downloadCount=0,this.queue=[],this.audioManager=t}done(){return this.downloadCount===this.queue.length}queueDownload(t,e,i,s=null){this.queue.push({id:t,path:e,type:i,opts:s})}loadAudio(t,e){n.default.create({method:"GET",url:t.path,responseType:"arraybuffer"},i=>{this.audioManager.decodeAudio(i,t.id,i=>{this.cache.audio[t.id]=i,this.downloadCount+=1,this.done()&&e()})})}loadSprite(t,e){let i=new Image;i.addEventListener("load",()=>{this.downloadCount++,this.done()&&e()}),i.src=t.path,this.cache.sprites[t.id]=i}loadSpriteSheet(t,e){let i=new Image;i.addEventListener("load",()=>{this.cache.spriteSheets[t.id]=new s.default(i,t.opts.frameWidth||0,t.opts.frameHeight||0),this.downloadCount+=1,this.done()&&e()}),i.src=t.path}downloadAll(t){this.queue.forEach(e=>{e.type===o.AUDIO?this.loadAudio(e,t):e.type===o.SPRITE?this.loadSprite(e,t):e.type===o.SPRITE_SHEET&&this.loadSpriteSheet(e,t)})}getSound(t,e){let i=e===o.AUDIO_AMB;return this.audioManager.createSound(this.cache.audio[t],i)}getSprite(t){return this.cache.sprites[t]}getSpriteSheet(t){return this.cache.spriteSheets[t]}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2),n=i(0);e.default=class{constructor(t,e,i,o){this.position=new s.default(t,e),this.width=i,this.height=o,this.colliding=!1,this.collidesWith=[],this.type=n.EntityType.BOX,this.collidesWith.push(n.EntityType.PLAYER)}isCollideAbleWith(t){return this.collidesWith.includes(t.type.toString())}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{static registerOnElement(t,e,i){e.forEach(e=>t.addEventListener(e,i))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this._observers=[],this._state={}}register(t){this._observers.push(t)}unRegister(t){this._observers=this._observers.filter(e=>e!==t)}notify(){this._observers.forEach(t=>{t.update(this._state)})}get observers(){return this._observers}set observers(t){this._observers=t}get state(){return this._state}set state(t){this._state=t}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.scoreElement=document.getElementById("score")}update(t){this.scoreElement.innerHTML=t.toString()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t){this.quadTree=t}detectCollision(){let t=[];this.quadTree.getAllObjects(t);for(let e=0;e<t.length;e++){let i=[];this.quadTree.findObjects(i,t[e]);for(let s=0;s<i.length;s++)t[e].isCollideAbleWith(i[s])&&Math.floor(t[e].position.x)<Math.floor(i[s].position.x)+i[s].dimension.width&&Math.floor(t[e].position.x)+t[e].dimension.width>Math.floor(i[s].position.x)&&Math.floor(t[e].position.y)<Math.floor(i[s].position.y)+i[s].dimension.height&&Math.floor(t[e].position.y)+t[e].dimension.height>Math.floor(i[s].position.y)&&t[e].alive&&i[s].alive&&(console.log(t[e]),t[e].colliding=!0,i[s].colliding=!0)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2),n=i(0),o=i(5),a=i(3),h=i(1);e.default=class extends o.default{constructor(t,e,i,o,r,d,l,u){super(new s.default(0,0),new a.default(t,e),d),this.velocity=new s.default(0,0),this.sprite=i,this.percentFire=.001,this.chance=0,this.alive=!1,this.type=o,this.collidesWith=[],this.collidesWith.push(n.EntityType.PLAYER_BULLET),this.colliding=!1,this.bulletPool=r,this.contextId=h.ContextId.MAIN,this.explosionSound=l,this.game=u}init(){this.position.set(0,0),this.velocity.set(0,0),this.speed=0,this.alive=!1,this.colliding=!1}fire(){this.bulletPool.get(Math.floor(this.position.x+this.dimension.width/2),Math.floor(this.position.y+this.dimension.height),-200)}render(t){this.alive&&t.drawImage(this.sprite,this.position.x,this.position.y)}clear(t){t.clearRect(this.position.x-1,this.position.y,this.dimension.width+1,this.dimension.height)}move(t){this.colliding?(this.game.scorePoints(),this.alive=!1):this.alive&&(this.position.addVector(this.velocity),this.position.x<=this.leftEdge?this.velocity.x=this.speed:this.position.x>=this.rightEdge+this.dimension.width?this.velocity.x=-this.speed:this.position.y>=this.bottomEdge&&(this.speed=1.5,this.velocity.y=0,this.position.y-=5,this.velocity.x=-this.speed),this.chance=Math.floor(101*Math.random()),this.chance/100<this.percentFire&&this.fire())}spawn(t,e,i){this.position.set(t,e),this.velocity.set(0,i),this.speed=i,this.alive=!0,this.leftEdge=this.position.x-180,this.rightEdge=this.position.x+180,this.bottomEdge=this.position.y+280}isCollideAbleWith(t){return this.collidesWith.includes(t.type.toString())}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2),n=i(0),o=i(5),a=i(3),h=i(1);e.default=class extends o.default{constructor(t,e,i,o,r){super(new s.default(0,0),new a.default(t,e),r),this.speed=0,this.sprite=i,this.alive=!1,this.type=o,this.colliding=!1,this.collidesWith=[],this.type===n.EntityType.PLAYER_BULLET?this.collidesWith.push(n.EntityType.ENEMY):this.type===n.EntityType.ENEMY_BULLET&&this.collidesWith.push(n.EntityType.PLAYER),this.settings=r,this.contextId=h.ContextId.MAIN}init(){this.position.set(0,0),this.speed=0,this.alive=!1,this.colliding=!1}spawn(t,e,i){this.position.set(t,e),this.speed=i,this.alive=!0}render(t){this.type===n.EntityType.PLAYER_BULLET&&this.position.y<=0-this.dimension.height||this.type===n.EntityType.ENEMY_BULLET&&this.position.y>=this.settings.gameSize.height?this.alive=!1:t.drawImage(this.sprite,this.position.x,this.position.y)}clear(t){t.clearRect(this.position.x-1,this.position.y-1,this.dimension.width+1,this.dimension.height+1)}move(t){this.type===n.EntityType.PLAYER_BULLET&&this.position.y<=0-this.dimension.height||this.type===n.EntityType.ENEMY_BULLET&&this.position.y>=this.settings.gameSize.height||this.colliding?(this.alive=!1,this.colliding=!1):this.position.y-=Math.floor(this.speed*t)}isCollideAbleWith(t){return this.collidesWith.includes(t.type.toString())}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(7),n=i(14),o=i(13),a=i(0),h=i(6),r=i(1);e.default=class{constructor(t,e,i,s,n,o=null,a=null){this.assetManager=t,this.maxSize=e,this.type=i,this.assetId=s,this.pool=[],this.subPool=o,this.settings=n,this.contextId=r.ContextId.MAIN,this.game=a,this.init()}init(){const t=this.assetManager.getSprite(this.assetId);if(this.type===a.EntityType.ENEMY)for(let e=0;e<this.maxSize;e++)this.pool[e]=new o.default(t.width,t.height,t,this.type,this.subPool,this.settings,this.assetManager.getSound(h.AssetId.EXPLOSION_I,s.AssetType.AUDIO),this.game);else for(let e=0;e<this.maxSize;e++)this.pool[e]=new n.default(t.width,t.height,t,this.type,this.settings)}getPool(){return this.pool.filter(t=>t.alive)}get(t,e,i){const s=this.pool[this.maxSize-1];s.alive||(s.spawn(t,e,i),this.pool.unshift(this.pool.pop()))}getTwo(t,e,i,s,n,o){this.pool[this.maxSize-1].alive||this.pool[this.maxSize-2].alive||(this.get(t,e,i),this.get(s,n,o))}render(t){for(let e=0;e<this.pool.length;e++)this.pool[e].alive?this.pool[e].render(t):(this.pool[e].init(),this.pool.push(this.pool.splice(e,1)[0]))}clear(t){this.pool.forEach(e=>e.clear(t))}move(t){this.pool.forEach(e=>e.move(t))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2),n=i(1),o=i(5),a=i(3);e.default=class extends o.default{constructor(t,e,i,o){super(new s.default(0,0),new a.default(t,e),o),this.speed=1,this.sprite=i,this.contextId=n.ContextId.BACKGROUND}init(){this.position.set(0,0)}render(t){t.drawImage(this.sprite,this.position.x,this.position.y),t.drawImage(this.sprite,this.position.x,this.position.y-this.dimension.height)}move(t){this.position.y+=this.speed,this.position.y>=this.dimension.height&&(this.position.y=0)}clear(){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(2),n=i(0),o=i(4),a=i(7),h=i(6),r=i(5),d=i(3),l=i(1);e.default=class extends r.default{constructor(t,e,i,o,r){super(new s.default(0,0),new d.default(t,e),r),this.startPosition=new s.default(0,0),this.acceleration=new s.default(0,0),this.velocity=new s.default(0,0),this.sprite=i.getSprite(h.AssetId.PLAYER),this.type=n.EntityType.PLAYER,this.bulletPool=o,this.counter=0,this.collidesWith=[],this.collidesWith.push(n.EntityType.ENEMY_BULLET),this.colliding=!1,this.state={},this.settings=r,this.assetManager=i,this.maxTop=Math.floor(this.settings.gameSize.height/4*3),this.laserSound=i.getSound(h.AssetId.LASER,a.AssetType.AUDIO),this.contextId=l.ContextId.SHIP,this.alive=!1}init(){const t=this.settings.gameSize.width/2-this.assetManager.getSprite(h.AssetId.PLAYER).width,e=this.settings.gameSize.height/4*3+2*this.assetManager.getSprite(h.AssetId.PLAYER).height;this.position.setVector(new s.default(t,e)),this.velocity.set(0,0),this.colliding=!1,this.alive=!0}fire(){this.bulletPool.getTwo(Math.floor(this.position.x)+12,Math.floor(this.position.y),200,Math.floor(this.position.x)+66,Math.floor(this.position.y),200),this.laserSound.play()}render(t){this.colliding||t.drawImage(this.sprite,Math.floor(this.position.x),Math.floor(this.position.y))}clear(t){t.clearRect(Math.floor(this.position.x),Math.floor(this.position.y),this.dimension.width,this.dimension.height)}move(t){if(!this.colliding){this.counter++,this.acceleration.set(0,0),this.state[o.Actions.LEFT]&&this.acceleration.add(-this.settings.player.acceleration,0),this.state[o.Actions.RIGHT]&&this.acceleration.add(this.settings.player.acceleration,0),this.state[o.Actions.UP]&&this.acceleration.add(0,-this.settings.player.acceleration),this.state[o.Actions.DOWN]&&this.acceleration.add(0,this.settings.player.acceleration),this.velocity.multiply(this.settings.player.friction),this.velocity.addVector(this.acceleration),this.velocity.limit(this.settings.player.maxVelocity);const e=this.velocity.clone();e.multiply(t),this.position.addVector(e),this.position.x<=0&&(this.position.x=0,this.velocity.x+=-1),this.position.x>=this.settings.gameSize.width-this.dimension.width&&(this.position.x=this.settings.gameSize.width-this.dimension.width),this.position.y<=this.maxTop&&(this.position.y=this.maxTop),this.position.y>=this.settings.gameSize.height-this.dimension.height&&(this.position.y=this.settings.gameSize.height-this.dimension.height),this.state[o.Actions.SHOOT]&&this.counter>=this.settings.player.fireDelay&&(this.fire(),this.counter=0)}}update(t){this.state=t}isCollideAbleWith(t){return this.collidesWith.includes(t.type.toString())}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(8);class n{constructor(t=new s.default(0,0,0,0),e=0){this.level=e,this.maxObjects=10,this.maxLevels=5,this.hitBox=t,this.objects=[],this.nodes=[]}clear(){this.objects=[],this.nodes.forEach(t=>t.clear()),this.nodes=[]}getAllObjects(t){return this.nodes.forEach(e=>e.getAllObjects(t)),this.objects.forEach(e=>t.push(e)),t}findObjects(t,e){if(void 0===e)return void console.log("UNDEFINED OBJECT");let i=this.getIndex(e);return-1!==i&&this.nodes.length&&this.nodes[i].findObjects(t,e),this.objects.forEach(e=>t.push(e)),t}insert(t){if(void 0!==t)if(t instanceof Array)t.forEach(t=>this.insert(t));else{if(this.nodes.length>0){let e=this.getIndex(t);if(-1!==e)return void this.nodes[e].insert(t)}if(this.objects.push(t),this.objects.length>this.maxObjects&&this.level<this.maxLevels){void 0===this.nodes[0]&&this.split();let t=0;for(;t<this.objects.length;){let e=this.getIndex(this.objects[t]);-1!==e?this.nodes[e].insert(this.objects.splice(t,1)[0]):t++}}}}getIndex(t){let e=-1,i=this.hitBox.position.x+this.hitBox.width/2,s=this.hitBox.position.y+this.hitBox.height/2,n=t.position.y<s&&t.position.y+t.height<s,o=t.position.y>s;return t.position.x<i&&t.position.x+t.width<i?n?e=1:o&&(e=2):t.position.x>i&&(n?e=0:o&&(e=3)),e}split(){let t=this.hitBox.width/2|0,e=this.hitBox.height/2|0;this.nodes[0]=new n(new s.default(this.hitBox.position.x+t,this.hitBox.position.y,t,e),this.level+1),this.nodes[1]=new n(new s.default(this.hitBox.position.x,this.hitBox.position.y,t,e),this.level+1),this.nodes[2]=new n(new s.default(this.hitBox.position.x,this.hitBox.position.y+e,t,e),this.level+1),this.nodes[3]=new n(new s.default(this.hitBox.position.x+t,this.hitBox.position.y+e,t,e),this.level+1)}}e.default=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(0),n=i(18),o=i(7),a=i(17),h=i(8),r=i(6),d=i(16),l=i(15),u=i(12),c=i(10);e.default=class extends c.default{constructor(t,e,i){super(),this.assetManager=i,this.quadTree=new n.default(new h.default(0,0,t.gameSize.width,t.gameSize.height)),this.collisionManager=new u.default(this.quadTree),this.running=!1,this.paused=!1,this.playerScore=0;const c=new d.default(t.gameSize.width,t.gameSize.height,i.getSprite(r.AssetId.BACKGROUND),t),p=new l.default(this.assetManager,80,s.EntityType.PLAYER_BULLET,r.AssetId.PLAYER_BULLET,t),m=new a.default(i.getSprite(r.AssetId.PLAYER).width,i.getSprite(r.AssetId.PLAYER).height,i,p,t),g=new l.default(this.assetManager,50,s.EntityType.ENEMY_BULLET,r.AssetId.ENEMY_BULLET,t),y=new l.default(this.assetManager,30,s.EntityType.ENEMY,r.AssetId.ENEMY,t,g,this);this.pools=[],this.entities=[],this.renderables=[],this.collideables=[],this.movables=[],this.pools.push(p),this.pools.push(g),this.pools.push(y),this.entities.push(m),this.entities.push(c),y.pool.forEach(t=>this.entities.push(t)),g.pool.forEach(t=>this.entities.push(t)),p.pool.forEach(t=>this.entities.push(t)),this.collideables.push(m),y.pool.forEach(t=>this.collideables.push(t)),g.pool.forEach(t=>this.collideables.push(t)),p.pool.forEach(t=>this.collideables.push(t)),this.movables.push(m),this.movables.push(c),this.movables.push(y),this.movables.push(p),this.movables.push(g),this.renderables.push(m),this.renderables.push(c),this.renderables.push(p),this.renderables.push(g),this.renderables.push(y),this.backgroundAudio=this.assetManager.getSound(r.AssetId.MAIN_THEME,o.AssetType.AUDIO_AMB),this.gameOverAudio=this.assetManager.getSound(r.AssetId.GAME_OVER,o.AssetType.AUDIO_AMB),e.register(m)}update(t){this.spawnWave(),this.quadTree.clear(),this.quadTree.insert(this.collideables),this.collisionManager.detectCollision(),this.movables.forEach(e=>e.move(t))}spawnWave(){if(0===this.pools[2].getPool().length){const t=this.assetManager.getSprite(r.AssetId.ENEMY).height,e=this.assetManager.getSprite(r.AssetId.ENEMY).width;let i=200,s=-t;const n=1.5*s;for(let t=1;t<=21;t++)this.pools[2].get(i,s,300),i+=e+25,t%7==0&&(i=200,s+=n)}}scorePoints(){this.playerScore+=10,this.state=this.playerScore,this.notify()}gameOver(){this.backgroundAudio.stop(),document.getElementById("game-over").style.display="block",this.gameOverAudio=this.assetManager.getSound(r.AssetId.GAME_OVER,o.AssetType.AUDIO_AMB),this.gameOverAudio.play(!0)}reset(){this.backgroundAudio.stop(),this.gameOverAudio.stop(),document.getElementById("game-over").style.display="none",this.quadTree.clear(),this.entities.forEach(t=>t.init()),this.spawnWave(),this.playerScore=0,this.state=this.playerScore,this.notify(),this.backgroundAudio.play(!0)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4);e.default=class{constructor(t){this.game=t,this.lastTime=null,this.state={}}start(){this.game.init(),this.game.state.running=!0,this.frameId=requestAnimationFrame(t=>this.loop(t))}stop(){this.frameId&&cancelAnimationFrame(this.frameId)}restart(){this.stop(),this.start()}togglePause(){this.game.state.paused=!this.game.state.paused}loop(t){if(this.state[s.Actions.RESTART])this.restart();else if(this.game.state.running){if(this.game.clear(),null!==this.lastTime){const e=t-this.lastTime;this.game.state.paused||this.game.state.update(e/1e3)}this.lastTime=t,this.game.render(),this.frameId=requestAnimationFrame(t=>this.loop(t))}}update(t){this.state=t}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t,e,i){this.audioContext=t,this.masterGain=e,this.buffer=i,this.gainNode=this.audioContext.createGain(),this.gainNode.gain.value=.2,this.gainNode.connect(this.masterGain),this.playing=!1}play(t=!1){this.source=this.audioContext.createBufferSource(),this.source.buffer=this.buffer,this.source.loop=t,this.source.connect(this.gainNode),this.source.start(0)}stop(){this.source&&this.source.stop(0)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(21);e.default=class{constructor(){this.initAudioContext()}initAudioContext(){try{window.AudioContext=window.AudioContext||webkitAudioContext,this.audioContext=new AudioContext,this.masterGain=this.audioContext.createGain(),this.effectsGain=this.audioContext.createGain(),this.ambientGain=this.audioContext.createGain(),this.masterGain.gain.value=1,this.masterGain.connect(this.audioContext.destination),this.effectsGain.connect(this.masterGain),this.ambientGain.connect(this.masterGain),this.ambientGain.gain.value=1,this.effectsGain.gain.value=1}catch(t){console.log("Web Audio API is not supported in this browser")}}decodeAudio(t,e,i){this.audioContext.decodeAudioData(t).then(t=>i(t),t=>{console.log("Error with decoding audio data"+t)})}adjustMasterVolume(t){this.masterGain.gain.value=t}adjustAmbientVolume(t){this.ambientGain.gain.value=t}adjustEffectsVolume(t){this.effectsGain.gain.value=t}createSound(t,e){return new s.default(this.audioContext,e?this.ambientGain:this.effectsGain,t)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4),n=i(9);e.default=class{constructor(t,e,i,s){this.element=t,this.settings=e,this.assetManager=i,this.audioManager=s,this.showing=!1}createMainMenu(){this.mainMenu=document.createElement("div"),this.mainMenu.classList.add("tab"),this.element.appendChild(this.mainMenu)}openTab(t,e){let i,s;i=document.getElementsByClassName("tabContent");for(let t=0;t<i.length;t++)i[t].style.display="none";s=document.getElementsByClassName("tabLink");for(let t=0;t<s.length;t++)s[t].className=s[t].className.replace(" active","");document.getElementById(e).style.display="block",t.currentTarget.className+=" active"}createKeyboardMenu(){let t=document.createElement("button"),e=document.createElement("div"),i=document.createElement("h4"),o=document.createElement("form"),a=document.createElement("input");n.default.registerOnElement(t,["click","touchstart"],t=>this.openTab(t,"keyboardMenu")),t.appendChild(document.createTextNode("Keyboard")),t.classList.add("tabLink"),this.mainMenu.appendChild(t),e.setAttribute("id","keyboardMenu"),e.classList.add("tabContent"),i.appendChild(document.createTextNode("Keyboard")),o.setAttribute("id","keyboardSettings"),o.setAttribute("method","post"),a.setAttribute("type","submit"),a.setAttribute("value","Save"),e.appendChild(i),e.appendChild(o),this.element.appendChild(e),Object.keys(this.settings.keyBoard).forEach(t=>this.addEntry(t,o)),o.appendChild(a),o.addEventListener("submit",t=>{t.preventDefault(),this.settings.setKey(document.getElementById(s.Actions.UP).value,s.Actions.UP),this.settings.setKey(document.getElementById(s.Actions.DOWN).value,s.Actions.DOWN),this.settings.setKey(document.getElementById(s.Actions.LEFT).value,s.Actions.LEFT),this.settings.setKey(document.getElementById(s.Actions.RIGHT).value,s.Actions.RIGHT),this.settings.setKey(document.getElementById(s.Actions.SHOOT).value,s.Actions.SHOOT),this.settings.setKey(document.getElementById(s.Actions.RESTART).value,s.Actions.RESTART),this.clear()})}createPlayerMenu(){let t=document.createElement("button"),e=document.createElement("div"),i=document.createElement("h4"),s=document.createElement("form"),o=document.createElement("input");n.default.registerOnElement(t,["click","touchstart"],t=>this.openTab(t,"playerMenu")),t.appendChild(document.createTextNode("Player")),t.classList.add("tabLink"),this.mainMenu.appendChild(t),e.setAttribute("id","playerMenu"),e.classList.add("tabContent"),i.appendChild(document.createTextNode("Player Settings")),s.setAttribute("id","playerSettings"),s.setAttribute("method","post"),o.setAttribute("type","submit"),o.setAttribute("value","Save"),e.appendChild(i),e.appendChild(s),this.element.appendChild(e),Object.keys(this.settings.player).forEach(t=>this.addPlayerSettingEntry(t,s)),s.appendChild(o),s.addEventListener("submit",t=>{t.preventDefault(),this.settings.player.acceleration=Number(document.getElementById("acceleration").value),this.settings.player.maxVelocity=Number(document.getElementById("maxVelocity").value),this.settings.player.friction=Number(document.getElementById("friction").value),this.settings.player.fireDelay=Number(document.getElementById("fireDelay").value),this.clear()})}createAudioMenu(){let t=document.createElement("button"),e=document.createElement("div"),i=document.createElement("div"),s=document.createElement("h4"),o=document.createElement("label"),a=document.createElement("input");n.default.registerOnElement(t,["click","touchstart"],t=>this.openTab(t,"audioMenu")),t.classList.add("tabLink"),t.appendChild(document.createTextNode("Audio")),this.mainMenu.appendChild(t),e.setAttribute("id","audioMenu"),e.classList.add("tabContent"),i.classList.add("row"),s.appendChild(document.createTextNode("Audio Settings")),o.appendChild(document.createTextNode("Master Volume:")),o.setAttribute("for","masterVolume"),a.setAttribute("id","masterVolume"),a.setAttribute("type","range"),a.setAttribute("min","0"),a.setAttribute("max","1"),a.setAttribute("step","0.1"),a.addEventListener("change",t=>this.audioManager.adjustMasterVolume(Number(a.value))),i.appendChild(s),i.appendChild(o),i.appendChild(a),e.appendChild(i);let h=document.createElement("div"),r=document.createElement("label"),d=document.createElement("input");h.classList.add("row"),r.appendChild(document.createTextNode("Ambient Volume:")),r.setAttribute("for","ambientVolume"),d.setAttribute("id","ambientVolume"),d.setAttribute("type","range"),d.setAttribute("min","0"),d.setAttribute("max","1"),d.setAttribute("step","0.1"),d.addEventListener("change",t=>this.audioManager.adjustAmbientVolume(Number(d.value))),h.appendChild(r),h.appendChild(d),e.appendChild(h);let l=document.createElement("div"),u=document.createElement("label"),c=document.createElement("input");l.classList.add("row"),u.appendChild(document.createTextNode("Effects Volume:")),u.setAttribute("for","effectsVolume"),c.setAttribute("id","effectsVolume"),c.setAttribute("type","range"),c.setAttribute("min","0"),c.setAttribute("max","1"),c.setAttribute("step","0.1"),c.addEventListener("change",t=>this.audioManager.adjustEffectsVolume(Number(c.value))),l.appendChild(u),l.appendChild(c),e.appendChild(l),this.element.appendChild(e)}init(){this.createMainMenu(),this.createKeyboardMenu(),this.createPlayerMenu(),this.createAudioMenu()}clear(){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);this.init()}addPlayerSettingEntry(t,e){let i=document.createElement("label"),s=document.createElement("input"),n=document.createElement("div");i.setAttribute("for",t),i.appendChild(document.createTextNode(t+":")),s.setAttribute("id",t),s.setAttribute("type","number"),s.setAttribute("name",t),s.setAttribute("value",this.settings.player[t]),n.classList.add("row"),n.appendChild(i),n.appendChild(s),e.appendChild(n)}addEntry(t,e){let i=document.createElement("div"),s=document.createElement("label"),n=document.createElement("input");i.classList.add("row"),s.setAttribute("for",this.settings.keyBoard[t]),s.appendChild(document.createTextNode(this.settings.keyBoard[t]+":")),n.setAttribute("id",this.settings.keyBoard[t]),n.setAttribute("type","text"),n.setAttribute("name",this.settings.keyBoard[t]),n.setAttribute("value",t),i.appendChild(s),i.appendChild(n),e.appendChild(i)}toggleShow(){this.showing?(this.element.style.display="none",this.showing=!1):(this.element.style.display="block",this.showing=!0)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(4),n=i(3);e.default=class{constructor(t){this.keyBoard={w:s.Actions.UP,s:s.Actions.DOWN,a:s.Actions.LEFT,d:s.Actions.RIGHT,space:s.Actions.SHOOT,r:s.Actions.RESTART},this.player={maxVelocity:150,fireDelay:15,friction:.9,acceleration:50},this.audio={master:1,ambient:1,effects:1},this.gameSize=new n.default(t.width,t.height)}findKey(t){return Object.keys(this.keyBoard).filter(e=>this.keyBoard[e]===t)[0]}setKey(t,e){let i=this.findKey(e);t!==i&&(console.log("old:"+i," new: "+t+" value: "+e),this.keyBoard[t]=this.keyBoard[i],delete this.keyBoard[i])}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(1);e.default=class{constructor(t,e,i,s,n){this.state=t,this.assetManager=e,this.inputManager=i,this.settings=s,this.canvases=n,this.contexts=new Map,this.init()}init(){this.canvases.background.getContext&&(this.contexts.set(s.ContextId.BACKGROUND,this.canvases.background.getContext("2d")),this.contexts.set(s.ContextId.SHIP,this.canvases.ship.getContext("2d")),this.contexts.set(s.ContextId.MAIN,this.canvases.main.getContext("2d")),this.contexts.forEach(t=>t.clearRect(0,0,this.settings.gameSize.width,this.settings.gameSize.height))),this.state.reset()}clear(){this.state.renderables.forEach(t=>t.clear(this.contexts.get(t.contextId)))}render(){this.state.renderables.forEach(t=>t.render(this.contexts.get(t.contextId)))}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});class s{static create(t,e){let i=new XMLHttpRequest;i.addEventListener("load",()=>{e(i.response)}),i.open(t.method?t.method:s.defaults.method,t.url?t.url:s.defaults.url,t.async?t.async:s.defaults.async),t.hasOwnProperty("contentType")&&i.setRequestHeader("Content-Type",t.contentType?t.contentType:s.defaults.contentType),t.hasOwnProperty("responseType")&&(i.responseType=t.responseType),t.hasOwnProperty("data")&&"object"==typeof t.data&&(t.data=JSON.stringify(t.data)),i.send(t.data?t.data:null)}}s.defaults={url:"",method:"GET",contentType:"text/html",async:!0,data:null},e.default=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t,e,i){this._image=t,this._frameWidth=e,this._frameHeight=i,this._framesPerRow=Math.floor(this._image.width/this._frameWidth)}get image(){return this._image}set image(t){if(!(t instanceof Image))throw new Error("Param tileSetImage must be of type Image!");this._image=t}get frameWidth(){return this._frameWidth}set frameWidth(t){this._frameWidth=t}get frameHeight(){return this._frameHeight}set frameHeight(t){this._frameHeight=t}get framesPerRow(){return this._framesPerRow}set framesPerRow(t){this._framesPerRow=t}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=i(7),n=i(25),o=i(4),a=i(24),h=i(23),r=i(9),d=i(6),l=i(22),u=i(20),c=i(19),p=i(11),m=new l.default,g=new s.default(m),y=new p.default,f={background:document.getElementById("background"),ship:document.getElementById("ship"),main:document.getElementById("main")},E=new a.default(f.background),A=new o.default(E),b=new h.default(document.getElementById("settings-menu"),E,g,m);g.queueDownload(d.AssetId.BACKGROUND,"assets/textures/background.png",s.AssetType.SPRITE),g.queueDownload(d.AssetId.PLAYER,"assets/sprites/ship.png",s.AssetType.SPRITE),g.queueDownload(d.AssetId.PLAYER_BULLET,"assets/sprites/bullet.png",s.AssetType.SPRITE),g.queueDownload(d.AssetId.ENEMY,"assets/sprites/enemy.png",s.AssetType.SPRITE),g.queueDownload(d.AssetId.ENEMY_BULLET,"assets/sprites/bullet_enemy.png",s.AssetType.SPRITE),g.queueDownload(d.AssetId.MAIN_THEME,"assets/audio/kick_shock.wav",s.AssetType.AUDIO),g.queueDownload(d.AssetId.LASER,"assets/audio/laser.wav",s.AssetType.AUDIO),g.queueDownload(d.AssetId.EXPLOSION_I,"assets/audio/explosion.wav",s.AssetType.AUDIO),g.queueDownload(d.AssetId.GAME_OVER,"assets/audio/game_over.wav",s.AssetType.AUDIO),g.downloadAll(()=>{const t=new c.default(E,A,g);t.register(y);const e=new n.default(t,g,A,E,f),i=new u.default(e);A.register(i),b.init();let s=document.getElementById("game-over"),o=document.getElementById("settings"),a=document.getElementById("shoot"),h=["click","touchstart"];a.addEventListener("touchstart",()=>A.shoot()),a.addEventListener("touchend",()=>A.cancelShoot()),a.addEventListener("contextmenu",t=>(t.preventDefault(),!1)),r.default.registerOnElement(s,h,()=>i.restart()),r.default.registerOnElement(o,h,()=>{b.toggleShow(),i.togglePause()}),i.start()})}]);
//# sourceMappingURL=invaders.js.map