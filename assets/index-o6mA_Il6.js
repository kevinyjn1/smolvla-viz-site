var yh=Object.defineProperty;var Mh=(i,e,t)=>e in i?yh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ge=(i,e,t)=>Mh(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="170",os={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bh=0,sl=1,Sh=2,Cc=1,wh=2,Vn=3,ui=0,Yt=1,Cn=2,hi=0,ls=1,rl=2,al=3,ol=4,Eh=5,wi=100,Th=101,Ah=102,Rh=103,Ch=104,Ph=200,Lh=201,Dh=202,Uh=203,Ha=204,Ga=205,Ih=206,Nh=207,Fh=208,Oh=209,kh=210,Bh=211,zh=212,Hh=213,Gh=214,Va=0,Wa=1,$a=2,fs=3,Xa=4,qa=5,Ya=6,ja=7,Pc=0,Vh=1,Wh=2,di=0,$h=1,Xh=2,qh=3,Yh=4,jh=5,Zh=6,Kh=7,Lc=300,ps=301,ms=302,Za=303,Ka=304,Xr=306,Ja=1e3,Ti=1001,Qa=1002,jt=1003,Jh=1004,ir=1005,Mn=1006,Jr=1007,$n=1008,Dn=1009,Dc=1010,Uc=1011,Ys=1012,Fo=1013,Ri=1014,Xn=1015,Ks=1016,Oo=1017,ko=1018,_s=1020,Ic=35902,Nc=1021,Fc=1022,cn=1023,Oc=1024,kc=1025,cs=1026,gs=1027,Bc=1028,Bo=1029,zc=1030,zo=1031,Ho=1033,Ir=33776,Nr=33777,Fr=33778,Or=33779,eo=35840,to=35841,no=35842,io=35843,so=36196,ro=37492,ao=37496,oo=37808,lo=37809,co=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,_o=37816,go=37817,vo=37818,xo=37819,yo=37820,Mo=37821,kr=36492,bo=36494,So=36495,Hc=36283,wo=36284,Eo=36285,To=36286,Qh=3200,ed=3201,td=0,nd=1,Pn="",on="srgb",Li="srgb-linear",qr="linear",ct="srgb",Ii=7680,ll=519,id=512,sd=513,rd=514,Gc=515,ad=516,od=517,ld=518,cd=519,Ao=35044,cl="300 es",qn=2e3,Hr=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const $s=Math.PI/180,js=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function Go(i,e){return(i%e+e)%e}function hd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function dd(i,e,t){return i!==e?(t-i)/(e-i):0}function Xs(i,e,t){return(1-t)*i+t*e}function ud(i,e,t,n){return Xs(i,e,1-Math.exp(-t*n))}function fd(i,e=1){return e-Math.abs(Go(i,e*2)-e)}function pd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function md(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _d(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gd(i,e){return i+Math.random()*(e-i)}function vd(i){return i*(.5-Math.random())}function xd(i){i!==void 0&&(hl=i);let e=hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yd(i){return i*$s}function Md(i){return i*js}function bd(i){return(i&i-1)===0&&i!==0}function Sd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ed(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vo={DEG2RAD:$s,RAD2DEG:js,generateUUID:Yn,clamp:Nt,euclideanModulo:Go,mapLinear:hd,inverseLerp:dd,lerp:Xs,damp:ud,pingpong:fd,smoothstep:pd,smootherstep:md,randInt:_d,randFloat:gd,randFloatSpread:vd,seededRandom:xd,degToRad:yd,radToDeg:Md,isPowerOfTwo:bd,ceilPowerOfTwo:Sd,floorPowerOfTwo:wd,setQuaternionFromProperEuler:Ed,normalize:at,denormalize:xn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,r,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],v=s[0],p=s[3],d=s[6],A=s[1],T=s[4],b=s[7],W=s[2],U=s[5],E=s[8];return r[0]=a*v+o*A+l*W,r[3]=a*p+o*T+l*U,r[6]=a*d+o*b+l*E,r[1]=c*v+h*A+u*W,r[4]=c*p+h*T+u*U,r[7]=c*d+h*b+u*E,r[2]=f*v+m*A+g*W,r[5]=f*p+m*T+g*U,r[8]=f*d+m*b+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=t*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Xe;function Vc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Td(){const i=Gr("canvas");return i.style.display="block",i}const dl={};function Vs(i){i in dl||(dl[i]=!0,console.warn(i))}function Ad(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Rd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=hs(i.r),i.g=hs(i.g),i.b=hs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pn?qr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ul=[.64,.33,.3,.6,.15,.06],fl=[.2126,.7152,.0722],pl=[.3127,.329],ml=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Li]:{primaries:ul,whitePoint:pl,transfer:qr,toXYZ:ml,fromXYZ:_l,luminanceCoefficients:fl,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:ul,whitePoint:pl,transfer:ct,toXYZ:ml,fromXYZ:_l,luminanceCoefficients:fl,outputColorSpaceConfig:{drawingBufferColorSpace:on}}});let Ni;class Pd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ni===void 0&&(Ni=Gr("canvas")),Ni.width=e.width,Ni.height=e.height;const n=Ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ld=0;class Wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ea(s[a].image)):r.push(ea(s[a]))}else r=ea(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dd=0;class Bt extends Di{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Ti,s=Ti,r=Mn,a=$n,o=cn,l=Dn,c=Bt.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Yn(),this.name="",this.source=new Wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ja:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ja:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Lc;Bt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(m+1)/2,W=(d+1)/2,U=(h+f)/4,E=(u+v)/4,D=(g+p)/4;return T>b&&T>W?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=U/n,r=E/n):b>W?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=U/s,r=D/s):W<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(W),n=E/r,s=D/r),this.set(n,s,r,t),this}let A=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(u-v)/A,this.z=(f-h)/A,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ud extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Ud{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $c extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Id extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==m||h!==g){let p=1-o;const d=l*f+c*m+h*g+u*v,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const W=Math.sqrt(T),U=Math.atan2(W,d*A);p=Math.sin(p*U)/W,o=Math.sin(o*U)/W}const b=o*A;if(l=l*p+f*b,c=c*p+m*b,h=h*p+g*b,u=u*p+v*b,p===1-o){const W=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=W,c*=W,h*=W,u*=W}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-o*m,e[t+2]=c*g+h*m+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new I,gl=new Pi;class hn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),rr.subVectors(this.max,Es),Fi.subVectors(e.a,Es),Oi.subVectors(e.b,Es),ki.subVectors(e.c,Es),Qn.subVectors(Oi,Fi),ei.subVectors(ki,Oi),pi.subVectors(Fi,ki);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-pi.z,pi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,pi.z,0,-pi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-pi.y,pi.x,0];return!na(t,Fi,Oi,ki,rr)||(t=[1,0,0,0,1,0,0,0,1],!na(t,Fi,Oi,ki,rr))?!1:(ar.crossVectors(Qn,ei),t=[ar.x,ar.y,ar.z],na(t,Fi,Oi,ki,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new I,new I,new I,new I,new I,new I,new I,new I],fn=new I,sr=new hn,Fi=new I,Oi=new I,ki=new I,Qn=new I,ei=new I,pi=new I,Es=new I,rr=new I,ar=new I,mi=new I;function na(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);const o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Nd=new hn,Ts=new I,ia=new I;class ys{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(ia)),this.expandByPoint(Ts.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new I,sa=new I,or=new I,ti=new I,ra=new I,lr=new I,aa=new I;class Yr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sa.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(sa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(or),o=ti.dot(this.direction),l=-ti.dot(or),c=ti.lengthSq(),h=Math.abs(1-a*a);let u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sa).addScaledVector(or,f),m}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){ra.subVectors(t,e),lr.subVectors(n,e),aa.crossVectors(ra,lr);let a=this.direction.dot(aa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,e);const l=o*this.direction.dot(lr.crossVectors(ti,lr));if(l<0)return null;const c=o*this.direction.dot(ra.cross(ti));if(c<0||l+c>a)return null;const h=-o*ti.dot(aa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,s,r,a,o,l,c,h,u,f,m,g,v,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,m,g,v,p)}set(e,t,n,s,r,a,o,l,c,h,u,f,m,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,m=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,Od)}lookAt(e,t,n){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ni.crossVectors(n,Qt),ni.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ni.crossVectors(n,Qt)),ni.normalize(),cr.crossVectors(Qt,ni),s[0]=ni.x,s[4]=cr.x,s[8]=Qt.x,s[1]=ni.y,s[5]=cr.y,s[9]=Qt.y,s[2]=ni.z,s[6]=cr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],d=n[14],A=n[3],T=n[7],b=n[11],W=n[15],U=s[0],E=s[4],D=s[8],S=s[12],x=s[1],C=s[5],G=s[9],$=s[13],te=s[2],ie=s[6],J=s[10],Q=s[14],q=s[3],me=s[7],ve=s[11],be=s[15];return r[0]=a*U+o*x+l*te+c*q,r[4]=a*E+o*C+l*ie+c*me,r[8]=a*D+o*G+l*J+c*ve,r[12]=a*S+o*$+l*Q+c*be,r[1]=h*U+u*x+f*te+m*q,r[5]=h*E+u*C+f*ie+m*me,r[9]=h*D+u*G+f*J+m*ve,r[13]=h*S+u*$+f*Q+m*be,r[2]=g*U+v*x+p*te+d*q,r[6]=g*E+v*C+p*ie+d*me,r[10]=g*D+v*G+p*J+d*ve,r[14]=g*S+v*$+p*Q+d*be,r[3]=A*U+T*x+b*te+W*q,r[7]=A*E+T*C+b*ie+W*me,r[11]=A*D+T*G+b*J+W*ve,r[15]=A*S+T*$+b*Q+W*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*m-n*l*m)+v*(+t*l*m-t*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+t*c*u-t*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],A=u*p*c-v*f*c+v*l*m-o*p*m-u*l*d+o*f*d,T=g*f*c-h*p*c-g*l*m+a*p*m+h*l*d-a*f*d,b=h*v*c-g*u*c+g*o*m-a*v*m-h*o*d+a*u*d,W=g*u*l-h*v*l-g*o*f+a*v*f+h*o*p-a*u*p,U=t*A+n*T+s*b+r*W;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/U;return e[0]=A*E,e[1]=(v*f*r-u*p*r-v*s*m+n*p*m+u*s*d-n*f*d)*E,e[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*d+n*l*d)*E,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*m-n*l*m)*E,e[4]=T*E,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*d+t*f*d)*E,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*d-t*l*d)*E,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*m+t*l*m)*E,e[8]=b*E,e[9]=(g*u*r-h*v*r-g*n*m+t*v*m+h*n*d-t*u*d)*E,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*d+t*o*d)*E,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*m-t*o*m)*E,e[12]=W*E,e[13]=(h*v*s-g*u*s+g*n*f-t*v*f-h*n*p+t*u*p)*E,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*p-t*o*p)*E,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,g=r*u,v=a*h,p=a*u,d=o*u,A=l*c,T=l*h,b=l*u,W=n.x,U=n.y,E=n.z;return s[0]=(1-(v+d))*W,s[1]=(m+b)*W,s[2]=(g-T)*W,s[3]=0,s[4]=(m-b)*U,s[5]=(1-(f+d))*U,s[6]=(p+A)*U,s[7]=0,s[8]=(g+T)*E,s[9]=(p-A)*E,s[10]=(1-(f+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const a=Bi.set(s[4],s[5],s[6]).length(),o=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pn.copy(this);const c=1/r,h=1/a,u=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,t.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=qn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(o===qn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Hr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=qn){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*c,m=(n+s)*h;let g,v;if(o===qn)g=(a+r)*u,v=-2*u;else if(o===Hr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new I,pn=new vt,Fd=new I(0,0,0),Od=new I(1,1,1),ni=new I,cr=new I,Qt=new I,vl=new vt,xl=new Pi;class Zn{constructor(e=0,t=0,n=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kd=0;const yl=new I,zi=new Pi,kn=new vt,hr=new I,As=new I,Bd=new I,zd=new Pi,Ml=new I(1,0,0),bl=new I(0,1,0),Sl=new I(0,0,1),wl={type:"added"},Hd={type:"removed"},Hi={type:"childadded",child:null},oa={type:"childremoved",child:null};class Zt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new I,t=new Zn,n=new Pi,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new Xe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Ml,e)}rotateY(e){return this.rotateOnAxis(bl,e)}rotateZ(e){return this.rotateOnAxis(Sl,e)}translateOnAxis(e,t){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ml,e)}translateY(e){return this.translateOnAxis(bl,e)}translateZ(e){return this.translateOnAxis(Sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(As,hr,this.up):kn.lookAt(hr,As,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(kn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hd),oa.child=e,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,zd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Zt.DEFAULT_UP=new I(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new I,Bn=new I,la=new I,zn=new I,Gi=new I,Vi=new I,El=new I,ca=new I,ha=new I,da=new I,ua=new lt,fa=new lt,pa=new lt;class yn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),Bn.subVectors(n,t),la.subVectors(e,t);const a=mn.dot(mn),o=mn.dot(Bn),l=mn.dot(la),c=Bn.dot(Bn),h=Bn.dot(la),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ua.setScalar(0),fa.setScalar(0),pa.setScalar(0),ua.fromBufferAttribute(e,t),fa.fromBufferAttribute(e,n),pa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ua,r.x),a.addScaledVector(fa,r.y),a.addScaledVector(pa,r.z),a}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),Bn.subVectors(e,t),mn.cross(Bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),mn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Gi.subVectors(s,n),Vi.subVectors(r,n),ca.subVectors(e,n);const l=Gi.dot(ca),c=Vi.dot(ca);if(l<=0&&c<=0)return t.copy(n);ha.subVectors(e,s);const h=Gi.dot(ha),u=Vi.dot(ha);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Gi,a);da.subVectors(e,r);const m=Gi.dot(da),g=Vi.dot(da);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Vi,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return El.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(El,o);const d=1/(p+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},dr={h:0,s:0,l:0};function ma(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Go(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ma(a,r,e+1/3),this.g=ma(a,r,e),this.b=ma(a,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=Xc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Je.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Nt(Ot.r*255,0,255))*65536+Math.round(Nt(Ot.g*255,0,255))*256+Math.round(Nt(Ot.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=on){Je.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,s=Ot.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(dr);const n=Xs(ii.h,dr.h,t),s=Xs(ii.s,dr.s,t),r=Xs(ii.l,dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ze;Ze.NAMES=Xc;let Gd=0;class Js extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Yn(),this.name="",this.blending=ls,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Ga,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qc extends Js{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new I,ur=new Ve;class wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ao,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ao&&(e.usage=this.usage),e}}class Yc extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jc extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class En extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vd=0;const sn=new vt,_a=new Zt,Wi=new I,en=new hn,Rs=new hn,At=new I;class dn extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)?jc:Yc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new En(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(en.min,Rs.min),en.expandByPoint(At),At.addVectors(en.max,Rs.max),en.expandByPoint(At)):(en.expandByPoint(Rs.min),en.expandByPoint(Rs.max))}en.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(e,c),At.add(Wi)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new I,l[D]=new I;const c=new I,h=new I,u=new I,f=new Ve,m=new Ve,g=new Ve,v=new I,p=new I;function d(D,S,x){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,D),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[D].add(v),o[S].add(v),o[x].add(v),l[D].add(p),l[S].add(p),l[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,S=A.length;D<S;++D){const x=A[D],C=x.start,G=x.count;for(let $=C,te=C+G;$<te;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}const T=new I,b=new I,W=new I,U=new I;function E(D){W.fromBufferAttribute(s,D),U.copy(W);const S=o[D];T.copy(S),T.sub(W.multiplyScalar(W.dot(S))).normalize(),b.crossVectors(U,S);const C=b.dot(l[D])<0?-1:1;a.setXYZW(D,T.x,T.y,T.z,C)}for(let D=0,S=A.length;D<S;++D){const x=A[D],C=x.start,G=x.count;for(let $=C,te=C+G;$<te;$+=3)E(e.getX($+0)),E(e.getX($+1)),E(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new wn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new vt,_i=new Yr,fr=new ys,Al=new I,pr=new I,mr=new I,_r=new I,ga=new I,gr=new I,Rl=new I,vr=new I;class bn extends Zt{constructor(e=new dn,t=new qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ga.fromBufferAttribute(u,e),a?gr.addScaledVector(ga,h):gr.addScaledVector(ga.sub(t),h))}t.add(gr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(fr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(fr,Al)===null||_i.origin.distanceToSquared(Al)>(e.far-e.near)**2))&&(Tl.copy(r).invert(),_i.copy(e.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=A,W=T;b<W;b+=3){const U=o.getX(b),E=o.getX(b+1),D=o.getX(b+2);s=xr(this,d,e,n,c,h,u,U,E,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const A=o.getX(p),T=o.getX(p+1),b=o.getX(p+2);s=xr(this,a,e,n,c,h,u,A,T,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=A,W=T;b<W;b+=3){const U=b,E=b+1,D=b+2;s=xr(this,d,e,n,c,h,u,U,E,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const A=p,T=p+1,b=p+2;s=xr(this,a,e,n,c,h,u,A,T,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Wd(i,e,t,n,s,r,a,o){let l;if(e.side===Yt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ui,o),l===null)return null;vr.copy(o),vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vr);return c<t.near||c>t.far?null:{distance:c,point:vr.clone(),object:i}}function xr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,pr),i.getVertexPosition(l,mr),i.getVertexPosition(c,_r);const h=Wd(i,e,t,n,pr,mr,_r,Rl);if(h){const u=new I;yn.getBarycoord(Rl,pr,mr,_r,u),s&&(h.uv=yn.getInterpolatedAttribute(s,o,l,c,u,new Ve)),r&&(h.uv1=yn.getInterpolatedAttribute(r,o,l,c,u,new Ve)),a&&(h.normal=yn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};yn.getNormal(pr,mr,_r,f.normal),h.face=f,h.barycoord=u}return h}class Qs extends dn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(h,3)),this.setAttribute("uv",new En(u,2));function g(v,p,d,A,T,b,W,U,E,D,S){const x=b/E,C=W/D,G=b/2,$=W/2,te=U/2,ie=E+1,J=D+1;let Q=0,q=0;const me=new I;for(let ve=0;ve<J;ve++){const be=ve*C-$;for(let ke=0;ke<ie;ke++){const Ye=ke*x-G;me[v]=Ye*A,me[p]=be*T,me[d]=te,c.push(me.x,me.y,me.z),me[v]=0,me[p]=0,me[d]=U>0?1:-1,h.push(me.x,me.y,me.z),u.push(ke/E),u.push(1-ve/D),Q+=1}}for(let ve=0;ve<D;ve++)for(let be=0;be<E;be++){const ke=f+be+ie*ve,Ye=f+be+ie*(ve+1),ee=f+(be+1)+ie*(ve+1),le=f+(be+1)+ie*ve;l.push(ke,Ye,le),l.push(Ye,ee,le),q+=6}o.addGroup(m,q,S),m+=q,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=vs(i[t]);for(const s in n)e[s]=n[s]}return e}function $d(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const $o={clone:vs,merge:Gt};var Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Js{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=$d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kc extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new I,Cl=new Ve,Pl=new Ve;class ln extends Kc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Cl,Pl),t.subVectors(Pl,Cl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,Xi=1;class Yd extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln($i,Xi,e,t);s.layers=this.layers,this.add(s);const r=new ln($i,Xi,e,t);r.layers=this.layers,this.add(r);const a=new ln($i,Xi,e,t);a.layers=this.layers,this.add(a);const o=new ln($i,Xi,e,t);o.layers=this.layers,this.add(o);const l=new ln($i,Xi,e,t);l.layers=this.layers,this.add(l);const c=new ln($i,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jc extends Bt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jd extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Jc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qs(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:hi});r.uniforms.tEquirect.value=t;const a=new bn(s,r),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=Mn),new Yd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const va=new I,Zd=new I,Kd=new Xe;class ai{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=va.subVectors(n,t).cross(Zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kd.getNormalMatrix(e),s=this.coplanarPoint(va).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new ys,yr=new I;class Qc{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,a=new ai){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],v=s[10],p=s[11],d=s[12],A=s[13],T=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,p-m,b-d).normalize(),n[1].setComponents(l+r,f+c,p+m,b+d).normalize(),n[2].setComponents(l+a,f+h,p+g,b+A).normalize(),n[3].setComponents(l-a,f-h,p-g,b-A).normalize(),n[4].setComponents(l-o,f-u,p-v,b-T).normalize(),t===qn)n[5].setComponents(l+o,f+u,p+v,b+T).normalize();else if(t===Hr)n[5].setComponents(o,u,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(yr.x=s.normal.x>0?e.max.x:e.min.x,yr.y=s.normal.y>0?e.max.y:e.min.y,yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jd(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class er extends dn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,m=[],g=[],v=[],p=[];for(let d=0;d<h;d++){const A=d*f-a;for(let T=0;T<c;T++){const b=T*u-r;g.push(b,-A,0),v.push(0,0,1),p.push(T/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const T=A+c*d,b=A+c*(d+1),W=A+1+c*(d+1),U=A+1+c*d;m.push(T,b,U),m.push(b,W,U)}this.setIndex(m),this.setAttribute("position",new En(g,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,du=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Su=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$u=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ku=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ju=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ff=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Qd,alphahash_pars_fragment:eu,alphamap_fragment:tu,alphamap_pars_fragment:nu,alphatest_fragment:iu,alphatest_pars_fragment:su,aomap_fragment:ru,aomap_pars_fragment:au,batching_pars_vertex:ou,batching_vertex:lu,begin_vertex:cu,beginnormal_vertex:hu,bsdfs:du,iridescence_fragment:uu,bumpmap_pars_fragment:fu,clipping_planes_fragment:pu,clipping_planes_pars_fragment:mu,clipping_planes_pars_vertex:_u,clipping_planes_vertex:gu,color_fragment:vu,color_pars_fragment:xu,color_pars_vertex:yu,color_vertex:Mu,common:bu,cube_uv_reflection_fragment:Su,defaultnormal_vertex:wu,displacementmap_pars_vertex:Eu,displacementmap_vertex:Tu,emissivemap_fragment:Au,emissivemap_pars_fragment:Ru,colorspace_fragment:Cu,colorspace_pars_fragment:Pu,envmap_fragment:Lu,envmap_common_pars_fragment:Du,envmap_pars_fragment:Uu,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:$u,envmap_vertex:Nu,fog_vertex:Fu,fog_pars_vertex:Ou,fog_fragment:ku,fog_pars_fragment:Bu,gradientmap_pars_fragment:zu,lightmap_pars_fragment:Hu,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Vu,lights_pars_begin:Wu,lights_toon_fragment:Xu,lights_toon_pars_fragment:qu,lights_phong_fragment:Yu,lights_phong_pars_fragment:ju,lights_physical_fragment:Zu,lights_physical_pars_fragment:Ku,lights_fragment_begin:Ju,lights_fragment_maps:Qu,lights_fragment_end:ef,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:rf,map_fragment:af,map_pars_fragment:of,map_particle_fragment:lf,map_particle_pars_fragment:cf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:df,morphinstance_vertex:uf,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:_f,normal_fragment_begin:gf,normal_fragment_maps:vf,normal_pars_fragment:xf,normal_pars_vertex:yf,normal_vertex:Mf,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:Sf,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:Tf,opaque_fragment:Af,packing:Rf,premultiplied_alpha_fragment:Cf,project_vertex:Pf,dithering_fragment:Lf,dithering_pars_fragment:Df,roughnessmap_fragment:Uf,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Ff,shadowmap_vertex:Of,shadowmask_pars_fragment:kf,skinbase_vertex:Bf,skinning_pars_vertex:zf,skinning_vertex:Hf,skinnormal_vertex:Gf,specularmap_fragment:Vf,specularmap_pars_fragment:Wf,tonemapping_fragment:$f,tonemapping_pars_fragment:Xf,transmission_fragment:qf,transmission_pars_fragment:Yf,uv_pars_fragment:jf,uv_pars_vertex:Zf,uv_vertex:Kf,worldpos_vertex:Jf,background_vert:Qf,background_frag:ep,backgroundCube_vert:tp,backgroundCube_frag:np,cube_vert:ip,cube_frag:sp,depth_vert:rp,depth_frag:ap,distanceRGBA_vert:op,distanceRGBA_frag:lp,equirect_vert:cp,equirect_frag:hp,linedashed_vert:dp,linedashed_frag:up,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:_p,meshmatcap_vert:gp,meshmatcap_frag:vp,meshnormal_vert:xp,meshnormal_frag:yp,meshphong_vert:Mp,meshphong_frag:bp,meshphysical_vert:Sp,meshphysical_frag:wp,meshtoon_vert:Ep,meshtoon_frag:Tp,points_vert:Ap,points_frag:Rp,shadow_vert:Cp,shadow_frag:Pp,sprite_vert:Lp,sprite_frag:Dp},Me={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},qt={basic:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Gt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Gt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Gt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Gt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Gt([Me.points,Me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Gt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Gt([Me.common,Me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Gt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Gt([Me.sprite,Me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Gt([Me.common,Me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Gt([Me.lights,Me.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};qt.physical={uniforms:Gt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Mr={r:0,b:0,g:0},vi=new Zn,Up=new vt;function Ip(i,e,t,n,s,r,a){const o=new Ze(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?t:e).get(T)),T}function v(A){let T=!1;const b=g(A);b===null?d(o,l):b&&b.isColor&&(d(b,1),T=!0);const W=i.xr.getEnvironmentBlendMode();W==="additive"?n.buffers.color.setClear(0,0,0,1,a):W==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,T){const b=g(T);b&&(b.isCubeTexture||b.mapping===Xr)?(h===void 0&&(h=new bn(new Qs(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:vs(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(W,U,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vi.copy(T.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Up.makeRotationFromEuler(vi)),h.material.toneMapped=Je.getTransfer(b.colorSpace)!==ct,(u!==b||f!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,m=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new bn(new er(2,2),new Un({name:"BackgroundMaterial",uniforms:vs(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Je.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,T){A.getRGB(Mr,Zc(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(A,T=1){o.set(A),l=T,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:v,addToRenderList:p}}function Np(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(x,C,G,$,te){let ie=!1;const J=u($,G,C);r!==J&&(r=J,c(r.object)),ie=m(x,$,G,te),ie&&g(x,$,G,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,b(x,C,G,$),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,C,G){const $=G.wireframe===!0;let te=n[x.id];te===void 0&&(te={},n[x.id]=te);let ie=te[C.id];ie===void 0&&(ie={},te[C.id]=ie);let J=ie[$];return J===void 0&&(J=f(l()),ie[$]=J),J}function f(x){const C=[],G=[],$=[];for(let te=0;te<t;te++)C[te]=0,G[te]=0,$[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:$,object:x,attributes:{},index:null}}function m(x,C,G,$){const te=r.attributes,ie=C.attributes;let J=0;const Q=G.getAttributes();for(const q in Q)if(Q[q].location>=0){const ve=te[q];let be=ie[q];if(be===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(be=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(be=x.instanceColor)),ve===void 0||ve.attribute!==be||be&&ve.data!==be.data)return!0;J++}return r.attributesNum!==J||r.index!==$}function g(x,C,G,$){const te={},ie=C.attributes;let J=0;const Q=G.getAttributes();for(const q in Q)if(Q[q].location>=0){let ve=ie[q];ve===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor));const be={};be.attribute=ve,ve&&ve.data&&(be.data=ve.data),te[q]=be,J++}r.attributes=te,r.attributesNum=J,r.index=$}function v(){const x=r.newAttributes;for(let C=0,G=x.length;C<G;C++)x[C]=0}function p(x){d(x,0)}function d(x,C){const G=r.newAttributes,$=r.enabledAttributes,te=r.attributeDivisors;G[x]=1,$[x]===0&&(i.enableVertexAttribArray(x),$[x]=1),te[x]!==C&&(i.vertexAttribDivisor(x,C),te[x]=C)}function A(){const x=r.newAttributes,C=r.enabledAttributes;for(let G=0,$=C.length;G<$;G++)C[G]!==x[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function T(x,C,G,$,te,ie,J){J===!0?i.vertexAttribIPointer(x,C,G,te,ie):i.vertexAttribPointer(x,C,G,$,te,ie)}function b(x,C,G,$){v();const te=$.attributes,ie=G.getAttributes(),J=C.defaultAttributeValues;for(const Q in ie){const q=ie[Q];if(q.location>=0){let me=te[Q];if(me===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(me=x.instanceColor)),me!==void 0){const ve=me.normalized,be=me.itemSize,ke=e.get(me);if(ke===void 0)continue;const Ye=ke.buffer,ee=ke.type,le=ke.bytesPerElement,Se=ee===i.INT||ee===i.UNSIGNED_INT||me.gpuType===Fo;if(me.isInterleavedBufferAttribute){const xe=me.data,Ue=xe.stride,Oe=me.offset;if(xe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<q.locationSize;Ie++)d(q.location+Ie,xe.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ie=0;Ie<q.locationSize;Ie++)p(q.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Ie=0;Ie<q.locationSize;Ie++)T(q.location+Ie,be/q.locationSize,ee,ve,Ue*le,(Oe+be/q.locationSize*Ie)*le,Se)}else{if(me.isInstancedBufferAttribute){for(let xe=0;xe<q.locationSize;xe++)d(q.location+xe,me.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let xe=0;xe<q.locationSize;xe++)p(q.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let xe=0;xe<q.locationSize;xe++)T(q.location+xe,be/q.locationSize,ee,ve,be*le,be/q.locationSize*xe*le,Se)}}else if(J!==void 0){const ve=J[Q];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(q.location,ve);break;case 3:i.vertexAttrib3fv(q.location,ve);break;case 4:i.vertexAttrib4fv(q.location,ve);break;default:i.vertexAttrib1fv(q.location,ve)}}}}A()}function W(){D();for(const x in n){const C=n[x];for(const G in C){const $=C[G];for(const te in $)h($[te].object),delete $[te];delete C[G]}delete n[x]}}function U(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const G in C){const $=C[G];for(const te in $)h($[te].object),delete $[te];delete C[G]}delete n[x.id]}function E(x){for(const C in n){const G=n[C];if(G[x.id]===void 0)continue;const $=G[x.id];for(const te in $)h($[te].object),delete $[te];delete G[x.id]}}function D(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:W,releaseStatesOfGeometry:U,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:p,disableUnusedAttributes:A}}function Fp(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Op(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==cn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const D=E===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Dn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Xn&&!D)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),W=g>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:W,maxSamples:U}}function kp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ai,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const A=r?0:n,T=A*4;let b=d.clippingState||null;l.value=b,b=h(g,f,T,m);for(let W=0;W!==T;++W)b[W]=t[W];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const d=m+v*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,b=m;T!==v;++T,b+=4)a.copy(u[T]).applyMatrix4(A,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Bp(i){let e=new WeakMap;function t(a,o){return o===Za?a.mapping=ps:o===Ka&&(a.mapping=ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Za||o===Ka)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jd(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class zp extends Kc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ns=4,Ll=[.125,.215,.35,.446,.526,.582],Ei=20,xa=new zp,Dl=new Ze;let ya=null,Ma=0,ba=0,Sa=!1;const Si=(1+Math.sqrt(5))/2,qi=1/Si,Ul=[new I(-Si,qi,0),new I(Si,qi,0),new I(-qi,0,Si),new I(qi,0,Si),new I(0,Si,-qi),new I(0,Si,qi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ya=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,Ma,ba),this._renderer.xr.enabled=Sa,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Ks,format:cn,colorSpace:Li,depthBuffer:!1},s=Nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hp(r)),this._blurMaterial=Gp(r,e,t)}return s}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,n,s){const o=new ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Dl),h.toneMapping=di,h.autoClear=!1;const m=new qc({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new bn(new Qs,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Dl),v=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):A===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const T=this._cubeSize;br(s,A*T,d>2?T:0,T,T),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ps||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new bn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ul[(s-r-1)%Ul.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new bn(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Ei;p>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);const d=[];let A=0;for(let E=0;E<Ei;++E){const D=E/v,S=Math.exp(-D*D/2);d.push(S),E===0?A+=S:E<p&&(A+=2*S)}for(let E=0;E<d.length;E++)d[E]=d[E]/A;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const b=this._sizeLods[s],W=3*b*(s>T-ns?s-T+ns:0),U=4*(this._cubeSize-b);br(t,W,U,3*b,2*b),l.setRenderTarget(t),l.render(u,xa)}}function Hp(i){const e=[],t=[],n=[];let s=i;const r=i-ns+1+Ll.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ns?l=Ll[a-i+ns-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,d=1,A=new Float32Array(v*g*m),T=new Float32Array(p*g*m),b=new Float32Array(d*g*m);for(let U=0;U<m;U++){const E=U%3*2/3-1,D=U>2?0:-1,S=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];A.set(S,v*g*U),T.set(f,p*g*U);const x=[U,U,U,U,U,U];b.set(x,d*g*U)}const W=new dn;W.setAttribute("position",new wn(A,v)),W.setAttribute("uv",new wn(T,p)),W.setAttribute("faceIndex",new wn(b,d)),e.push(W),s>ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nl(i,e,t){const n=new Ci(i,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gp(i,e,t){const n=new Float32Array(Ei),s=new I(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Fl(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ol(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Za||l===Ka,h=l===ps||l===ms;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Il(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Il(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $p(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const v=m[g];for(let p=0,d=v.length;p<d;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const A=m.array;v=m.version;for(let T=0,b=A.length;T<b;T+=3){const W=A[T+0],U=A[T+1],E=A[T+2];f.push(W,U,U,E,E,W)}}else if(g!==void 0){const A=g.array;v=g.version;for(let T=0,b=A.length/3-1;T<b;T+=3){const W=T+0,U=T+1,E=T+2;f.push(W,U,U,E,E,W)}}else return;const p=new(Vc(f)?jc:Yc)(f,1);p.version=v;const d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Xp(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),t.update(m,n,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function u(f,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/a,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,g);let d=0;for(let A=0;A<g;A++)d+=m[A]*v[A];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yp(i,e,t){const n=new WeakMap,s=new lt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let x=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let W=o.attributes.position.count*b,U=1;W>e.maxTextureSize&&(U=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const E=new Float32Array(W*U*4*u),D=new $c(E,W,U,u);D.type=Xn,D.needsUpdate=!0;const S=b*4;for(let C=0;C<u;C++){const G=d[C],$=A[C],te=T[C],ie=W*U*4*C;for(let J=0;J<G.count;J++){const Q=J*S;g===!0&&(s.fromBufferAttribute(G,J),E[ie+Q+0]=s.x,E[ie+Q+1]=s.y,E[ie+Q+2]=s.z,E[ie+Q+3]=0),v===!0&&(s.fromBufferAttribute($,J),E[ie+Q+4]=s.x,E[ie+Q+5]=s.y,E[ie+Q+6]=s.z,E[ie+Q+7]=0),p===!0&&(s.fromBufferAttribute(te,J),E[ie+Q+8]=s.x,E[ie+Q+9]=s.y,E[ie+Q+10]=s.z,E[ie+Q+11]=te.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new Ve(W,U)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function jp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class th extends Bt{constructor(e,t,n,s,r,a,o,l,c,h=cs){if(h!==cs&&h!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cs&&(n=Ri),n===void 0&&h===gs&&(n=_s),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nh=new Bt,kl=new th(1,1),ih=new $c,sh=new Id,rh=new Jc,Bl=[],zl=[],Hl=new Float32Array(16),Gl=new Float32Array(9),Vl=new Float32Array(4);function Ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Bl[s];if(r===void 0&&(r=new Float32Array(s),Bl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jr(i,e){let t=zl[e];t===void 0&&(t=new Int32Array(e),zl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),Tt(t,n)}}function tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Gl.set(n),i.uniformMatrix3fv(this.addr,!1,Gl),Tt(t,n)}}function nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),Tt(t,n)}}function im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function dm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kl.compareFunction=Gc,r=kl):r=nh,t.setTexture2D(e||r,s)}function um(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sh,s)}function fm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rh,s)}function pm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ih,s)}function mm(i){switch(i){case 5126:return Zp;case 35664:return Kp;case 35665:return Jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function _m(i,e){i.uniform1fv(this.addr,e)}function gm(i,e){const t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function vm(i,e){const t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function xm(i,e){const t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function ym(i,e){const t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mm(i,e){const t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bm(i,e){const t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sm(i,e){i.uniform1iv(this.addr,e)}function wm(i,e){i.uniform2iv(this.addr,e)}function Em(i,e){i.uniform3iv(this.addr,e)}function Tm(i,e){i.uniform4iv(this.addr,e)}function Am(i,e){i.uniform1uiv(this.addr,e)}function Rm(i,e){i.uniform2uiv(this.addr,e)}function Cm(i,e){i.uniform3uiv(this.addr,e)}function Pm(i,e){i.uniform4uiv(this.addr,e)}function Lm(i,e,t){const n=this.cache,s=e.length,r=jr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||nh,r[a])}function Dm(i,e,t){const n=this.cache,s=e.length,r=jr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sh,r[a])}function Um(i,e,t){const n=this.cache,s=e.length,r=jr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rh,r[a])}function Im(i,e,t){const n=this.cache,s=e.length,r=jr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ih,r[a])}function Nm(i){switch(i){case 5126:return _m;case 35664:return gm;case 35665:return vm;case 35666:return xm;case 35674:return ym;case 35675:return Mm;case 35676:return bm;case 5124:case 35670:return Sm;case 35667:case 35671:return wm;case 35668:case 35672:return Em;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return Rm;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Im}}class Fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mm(t.type)}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}}class km{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Wl(i,e){i.seq.push(e),i.map[e.id]=e}function Bm(i,e,t){const n=i.name,s=n.length;for(wa.lastIndex=0;;){const r=wa.exec(n),a=wa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wl(t,c===void 0?new Fm(o,i,e):new Om(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new km(o),Wl(t,u)),t=u}}}class Br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Bm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function $l(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zm=37297;let Hm=0;function Gm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Xl=new Xe;function Vm(i){Je._getMatrix(Xl,Je.workingColorSpace,i);const e=`mat3( ${Xl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case qr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ql(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Gm(i.getShaderSource(e),a)}else return s}function Wm(i,e){const t=Vm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $m(i,e){let t;switch(e){case $h:t="Linear";break;case Xh:t="Reinhard";break;case qh:t="Cineon";break;case Yh:t="ACESFilmic";break;case Zh:t="AgX";break;case Kh:t="Neutral";break;case jh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sr=new I;function Xm(){Je.getLuminanceCoefficients(Sr);const i=Sr.x.toFixed(4),e=Sr.y.toFixed(4),t=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function Ym(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ws(i){return i!==""}function Yl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(i){return i.replace(Zm,Jm)}const Km=new Map;function Jm(i,e){let t=qe[e];if(t===void 0){const n=Km.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ro(t)}const Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(i){return i.replace(Qm,e_)}function e_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function n_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function s_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pc:e="ENVMAP_BLENDING_MULTIPLY";break;case Vh:e="ENVMAP_BLENDING_MIX";break;case Wh:e="ENVMAP_BLENDING_ADD";break}return e}function r_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function a_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=t_(t),c=n_(t),h=i_(t),u=s_(t),f=r_(t),m=qm(t),g=Ym(r),v=s.createProgram();let p,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),d.length>0&&(d+=`
`)):(p=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),d=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?qe.tonemapping_pars_fragment:"",t.toneMapping!==di?$m("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),Xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=Ro(a),a=Yl(a,t),a=jl(a,t),o=Ro(o),o=Yl(o,t),o=jl(o,t),a=Zl(a),o=Zl(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=A+p+a,b=A+d+o,W=$l(s,s.VERTEX_SHADER,T),U=$l(s,s.FRAGMENT_SHADER,b);s.attachShader(v,W),s.attachShader(v,U),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(C){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),$=s.getShaderInfoLog(W).trim(),te=s.getShaderInfoLog(U).trim();let ie=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,W,U);else{const Q=ql(s,W,"vertex"),q=ql(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+Q+`
`+q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):($===""||te==="")&&(J=!1);J&&(C.diagnostics={runnable:ie,programLog:G,vertexShader:{log:$,prefix:p},fragmentShader:{log:te,prefix:d}})}s.deleteShader(W),s.deleteShader(U),D=new Br(s,v),S=jm(s,v)}let D;this.getUniforms=function(){return D===void 0&&E(this),D};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,zm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=W,this.fragmentShader=U,this}let o_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new c_(e),t.set(e,n)),n}}class c_{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}}function h_(i,e,t,n,s,r,a){const o=new Wo,l=new l_,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,C,G,$){const te=G.fog,ie=$.geometry,J=S.isMeshStandardMaterial?G.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),q=Q&&Q.mapping===Xr?Q.image.height:null,me=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ve=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,be=ve!==void 0?ve.length:0;let ke=0;ie.morphAttributes.position!==void 0&&(ke=1),ie.morphAttributes.normal!==void 0&&(ke=2),ie.morphAttributes.color!==void 0&&(ke=3);let Ye,ee,le,Se;if(me){const tt=qt[me];Ye=tt.vertexShader,ee=tt.fragmentShader}else Ye=S.vertexShader,ee=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),Se=l.getFragmentShaderID(S);const xe=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),Oe=$.isInstancedMesh===!0,Ie=$.isBatchedMesh===!0,je=!!S.map,We=!!S.matcap,et=!!Q,F=!!S.aoMap,he=!!S.lightMap,se=!!S.bumpMap,ue=!!S.normalMap,_e=!!S.displacementMap,Ne=!!S.emissiveMap,Ee=!!S.metalnessMap,w=!!S.roughnessMap,_=S.anisotropy>0,B=S.clearcoat>0,L=S.dispersion>0,z=S.iridescence>0,N=S.sheen>0,re=S.transmission>0,ne=_&&!!S.anisotropyMap,ae=B&&!!S.clearcoatMap,ce=B&&!!S.clearcoatNormalMap,M=B&&!!S.clearcoatRoughnessMap,R=z&&!!S.iridescenceMap,H=z&&!!S.iridescenceThicknessMap,j=N&&!!S.sheenColorMap,V=N&&!!S.sheenRoughnessMap,pe=!!S.specularMap,Ae=!!S.specularColorMap,Re=!!S.specularIntensityMap,P=re&&!!S.transmissionMap,oe=re&&!!S.thicknessMap,Z=!!S.gradientMap,K=!!S.alphaMap,ge=S.alphaTest>0,ye=!!S.alphaHash,Be=!!S.extensions;let dt=di;S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(dt=i.toneMapping);const St={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:ee,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&$._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&$.instanceColor!==null,instancingMorph:Oe&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Li,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:We,envMap:et,envMapMode:et&&Q.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:he,bumpMap:se,normalMap:ue,displacementMap:f&&_e,emissiveMap:Ne,normalMapObjectSpace:ue&&S.normalMapType===nd,normalMapTangentSpace:ue&&S.normalMapType===td,metalnessMap:Ee,roughnessMap:w,anisotropy:_,anisotropyMap:ne,clearcoat:B,clearcoatMap:ae,clearcoatNormalMap:ce,clearcoatRoughnessMap:M,dispersion:L,iridescence:z,iridescenceMap:R,iridescenceThicknessMap:H,sheen:N,sheenColorMap:j,sheenRoughnessMap:V,specularMap:pe,specularColorMap:Ae,specularIntensityMap:Re,transmission:re,transmissionMap:P,thicknessMap:oe,gradientMap:Z,opaque:S.transparent===!1&&S.blending===ls&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ge,alphaHash:ye,combine:S.combine,mapUv:je&&v(S.map.channel),aoMapUv:F&&v(S.aoMap.channel),lightMapUv:he&&v(S.lightMap.channel),bumpMapUv:se&&v(S.bumpMap.channel),normalMapUv:ue&&v(S.normalMap.channel),displacementMapUv:_e&&v(S.displacementMap.channel),emissiveMapUv:Ne&&v(S.emissiveMap.channel),metalnessMapUv:Ee&&v(S.metalnessMap.channel),roughnessMapUv:w&&v(S.roughnessMap.channel),anisotropyMapUv:ne&&v(S.anisotropyMap.channel),clearcoatMapUv:ae&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:M&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:R&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:H&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:j&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:V&&v(S.sheenRoughnessMap.channel),specularMapUv:pe&&v(S.specularMap.channel),specularColorMapUv:Ae&&v(S.specularColorMap.channel),specularIntensityMapUv:Re&&v(S.specularIntensityMap.channel),transmissionMapUv:P&&v(S.transmissionMap.channel),thicknessMapUv:oe&&v(S.thicknessMap.channel),alphaMapUv:K&&v(S.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(ue||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ie.attributes.uv&&(je||K),fog:!!te,useFog:S.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ue,skinning:$.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ke,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:Ne&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===Yt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function d(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(A(x,S),T(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function A(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const x=g[S.type];let C;if(x){const G=qt[x];C=$o.clone(G.uniforms)}else C=S.uniforms;return C}function W(S,x){let C;for(let G=0,$=h.length;G<$;G++){const te=h[G];if(te.cacheKey===x){C=te,++C.usedTimes;break}}return C===void 0&&(C=new a_(i,x,S,r),h.push(C)),C}function U(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:W,releaseProgram:U,releaseShaderCache:E,programs:h,dispose:D}}function d_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function u_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ql(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,m,g,v,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=p),e++,d}function o(u,f,m,g,v,p){const d=a(u,f,m,g,v,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,f,m,g,v,p){const d=a(u,f,m,g,v,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||u_),n.length>1&&n.sort(f||Jl),s.length>1&&s.sort(f||Jl)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function f_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ql,i.set(n,[a])):s>=r.length?(a=new Ql,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function p_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ze};break;case"SpotLight":t={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function m_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let __=0;function g_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v_(i){const e=new p_,t=m_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new vt,a=new vt;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,v=0,p=0,d=0,A=0,T=0,b=0,W=0,U=0,E=0;c.sort(g_);for(let S=0,x=c.length;S<x;S++){const C=c[S],G=C.color,$=C.intensity,te=C.distance,ie=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=G.r*$,u+=G.g*$,f+=G.b*$;else if(C.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(C.sh.coefficients[J],$);E++}else if(C.isDirectionalLight){const J=e.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,q=t.get(C);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=C.shadow.matrix,A++}n.directional[m]=J,m++}else if(C.isSpotLight){const J=e.get(C);J.position.setFromMatrixPosition(C.matrixWorld),J.color.copy(G).multiplyScalar($),J.distance=te,J.coneCos=Math.cos(C.angle),J.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),J.decay=C.decay,n.spot[v]=J;const Q=C.shadow;if(C.map&&(n.spotLightMap[W]=C.map,W++,Q.updateMatrices(C),C.castShadow&&U++),n.spotLightMatrix[v]=Q.matrix,C.castShadow){const q=t.get(C);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=ie,b++}v++}else if(C.isRectAreaLight){const J=e.get(C);J.color.copy(G).multiplyScalar($),J.halfWidth.set(C.width*.5,0,0),J.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=J,p++}else if(C.isPointLight){const J=e.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),J.distance=C.distance,J.decay=C.decay,C.castShadow){const Q=C.shadow,q=t.get(C);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=ie,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=J,g++}else if(C.isHemisphereLight){const J=e.get(C);J.skyColor.copy(C.color).multiplyScalar($),J.groundColor.copy(C.groundColor).multiplyScalar($),n.hemi[d]=J,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==p||D.hemiLength!==d||D.numDirectionalShadows!==A||D.numPointShadows!==T||D.numSpotShadows!==b||D.numSpotMaps!==W||D.numLightProbes!==E)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=b+W-U,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=E,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=p,D.hemiLength=d,D.numDirectionalShadows=A,D.numPointShadows=T,D.numSpotShadows=b,D.numSpotMaps=W,D.numLightProbes=E,n.version=__++)}function l(c,h){let u=0,f=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const T=c[d];if(T.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(T.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function ec(i){const e=new v_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function x_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ec(i),e.set(s,[o])):r>=a.length?(o=new ec(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class y_ extends Js{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M_ extends Js{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w_(i,e,t){let n=new Qc;const s=new Ve,r=new Ve,a=new lt,o=new y_({depthPacking:ed}),l=new M_,c={},h=t.maxTextureSize,u={[ui]:Yt,[Yt]:ui,[Cn]:Cn},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:b_,fragmentShader:S_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let d=this.type;this.render=function(U,E,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||U.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(hi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const $=d!==Vn&&this.type===Vn,te=d===Vn&&this.type!==Vn;for(let ie=0,J=U.length;ie<J;ie++){const Q=U[ie],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const me=q.getFrameExtents();if(s.multiply(me),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,q.mapSize.y=r.y)),q.map===null||$===!0||te===!0){const be=this.type!==Vn?{minFilter:jt,magFilter:jt}:{};q.map!==null&&q.map.dispose(),q.map=new Ci(s.x,s.y,be),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ve=q.getViewportCount();for(let be=0;be<ve;be++){const ke=q.getViewport(be);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),G.viewport(a),q.updateMatrices(Q,be),n=q.getFrustum(),b(E,D,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===Vn&&A(q,D),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,C)};function A(U,E){const D=e.update(v);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,m.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ci(s.x,s.y)),f.uniforms.shadow_pass.value=U.map.texture,f.uniforms.resolution.value=U.mapSize,f.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(E,null,D,f,v,null),m.uniforms.shadow_pass.value=U.mapPass.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(E,null,D,m,v,null)}function T(U,E,D,S){let x=null;const C=D.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(C!==void 0)x=C;else if(x=D.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const G=x.uuid,$=E.uuid;let te=c[G];te===void 0&&(te={},c[G]=te);let ie=te[$];ie===void 0&&(ie=x.clone(),te[$]=ie,E.addEventListener("dispose",W)),x=ie}if(x.visible=E.visible,x.wireframe=E.wireframe,S===Vn?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:u[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=i.properties.get(x);G.light=D}return x}function b(U,E,D,S,x){if(U.visible===!1)return;if(U.layers.test(E.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&x===Vn)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,U.matrixWorld);const $=e.update(U),te=U.material;if(Array.isArray(te)){const ie=$.groups;for(let J=0,Q=ie.length;J<Q;J++){const q=ie[J],me=te[q.materialIndex];if(me&&me.visible){const ve=T(U,me,S,x);U.onBeforeShadow(i,U,E,D,$,ve,q),i.renderBufferDirect(D,null,$,ve,U,q),U.onAfterShadow(i,U,E,D,$,ve,q)}}}else if(te.visible){const ie=T(U,te,S,x);U.onBeforeShadow(i,U,E,D,$,ie,null),i.renderBufferDirect(D,null,$,ie,U,null),U.onAfterShadow(i,U,E,D,$,ie,null)}}const G=U.children;for(let $=0,te=G.length;$<te;$++)b(G[$],E,D,S,x)}function W(U){U.target.removeEventListener("dispose",W);for(const D in c){const S=c[D],x=U.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const E_={[Va]:Wa,[$a]:Ya,[Xa]:ja,[fs]:qa,[Wa]:Va,[Ya]:$a,[ja]:Xa,[qa]:fs};function T_(i,e){function t(){let P=!1;const oe=new lt;let Z=null;const K=new lt(0,0,0,0);return{setMask:function(ge){Z!==ge&&!P&&(i.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){P=ge},setClear:function(ge,ye,Be,dt,St){St===!0&&(ge*=dt,ye*=dt,Be*=dt),oe.set(ge,ye,Be,dt),K.equals(oe)===!1&&(i.clearColor(ge,ye,Be,dt),K.copy(oe))},reset:function(){P=!1,Z=null,K.set(-1,0,0,0)}}}function n(){let P=!1,oe=!1,Z=null,K=null,ge=null;return{setReversed:function(ye){if(oe!==ye){const Be=e.get("EXT_clip_control");oe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const dt=ge;ge=null,this.setClear(dt)}oe=ye},getReversed:function(){return oe},setTest:function(ye){ye?xe(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(ye){Z!==ye&&!P&&(i.depthMask(ye),Z=ye)},setFunc:function(ye){if(oe&&(ye=E_[ye]),K!==ye){switch(ye){case Va:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ye}},setLocked:function(ye){P=ye},setClear:function(ye){ge!==ye&&(oe&&(ye=1-ye),i.clearDepth(ye),ge=ye)},reset:function(){P=!1,Z=null,K=null,ge=null,oe=!1}}}function s(){let P=!1,oe=null,Z=null,K=null,ge=null,ye=null,Be=null,dt=null,St=null;return{setTest:function(tt){P||(tt?xe(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(tt){oe!==tt&&!P&&(i.stencilMask(tt),oe=tt)},setFunc:function(tt,Mt,In){(Z!==tt||K!==Mt||ge!==In)&&(i.stencilFunc(tt,Mt,In),Z=tt,K=Mt,ge=In)},setOp:function(tt,Mt,In){(ye!==tt||Be!==Mt||dt!==In)&&(i.stencilOp(tt,Mt,In),ye=tt,Be=Mt,dt=In)},setLocked:function(tt){P=tt},setClear:function(tt){St!==tt&&(i.clearStencil(tt),St=tt)},reset:function(){P=!1,oe=null,Z=null,K=null,ge=null,ye=null,Be=null,dt=null,St=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],g=null,v=!1,p=null,d=null,A=null,T=null,b=null,W=null,U=null,E=new Ze(0,0,0),D=0,S=!1,x=null,C=null,G=null,$=null,te=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Q=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=Q>=2);let me=null,ve={};const be=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Ye=new lt().fromArray(be),ee=new lt().fromArray(ke);function le(P,oe,Z,K){const ge=new Uint8Array(4),ye=i.createTexture();i.bindTexture(P,ye),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Z;Be++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(oe+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ye}const Se={};Se[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(i.DEPTH_TEST),a.setFunc(fs),se(!1),ue(sl),xe(i.CULL_FACE),F(hi);function xe(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Ue(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Oe(P,oe){return u[P]!==oe?(i.bindFramebuffer(P,oe),u[P]=oe,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ie(P,oe){let Z=m,K=!1;if(P){Z=f.get(oe),Z===void 0&&(Z=[],f.set(oe,Z));const ge=P.textures;if(Z.length!==ge.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Be=ge.length;ye<Be;ye++)Z[ye]=i.COLOR_ATTACHMENT0+ye;Z.length=ge.length,K=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,K=!0);K&&i.drawBuffers(Z)}function je(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const We={[wi]:i.FUNC_ADD,[Th]:i.FUNC_SUBTRACT,[Ah]:i.FUNC_REVERSE_SUBTRACT};We[Rh]=i.MIN,We[Ch]=i.MAX;const et={[Ph]:i.ZERO,[Lh]:i.ONE,[Dh]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[kh]:i.SRC_ALPHA_SATURATE,[Fh]:i.DST_COLOR,[Ih]:i.DST_ALPHA,[Uh]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[Oh]:i.ONE_MINUS_DST_COLOR,[Nh]:i.ONE_MINUS_DST_ALPHA,[Bh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[Hh]:i.CONSTANT_ALPHA,[Gh]:i.ONE_MINUS_CONSTANT_ALPHA};function F(P,oe,Z,K,ge,ye,Be,dt,St,tt){if(P===hi){v===!0&&(Ue(i.BLEND),v=!1);return}if(v===!1&&(xe(i.BLEND),v=!0),P!==Eh){if(P!==p||tt!==S){if((d!==wi||b!==wi)&&(i.blendEquation(i.FUNC_ADD),d=wi,b=wi),tt)switch(P){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rl:i.blendFunc(i.ONE,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}A=null,T=null,W=null,U=null,E.set(0,0,0),D=0,p=P,S=tt}return}ge=ge||oe,ye=ye||Z,Be=Be||K,(oe!==d||ge!==b)&&(i.blendEquationSeparate(We[oe],We[ge]),d=oe,b=ge),(Z!==A||K!==T||ye!==W||Be!==U)&&(i.blendFuncSeparate(et[Z],et[K],et[ye],et[Be]),A=Z,T=K,W=ye,U=Be),(dt.equals(E)===!1||St!==D)&&(i.blendColor(dt.r,dt.g,dt.b,St),E.copy(dt),D=St),p=P,S=!1}function he(P,oe){P.side===Cn?Ue(i.CULL_FACE):xe(i.CULL_FACE);let Z=P.side===Yt;oe&&(Z=!Z),se(Z),P.blending===ls&&P.transparent===!1?F(hi):F(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const K=P.stencilWrite;o.setTest(K),K&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ne(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(P){x!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),x=P)}function ue(P){P!==bh?(xe(i.CULL_FACE),P!==C&&(P===sl?i.cullFace(i.BACK):P===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),C=P}function _e(P){P!==G&&(J&&i.lineWidth(P),G=P)}function Ne(P,oe,Z){P?(xe(i.POLYGON_OFFSET_FILL),($!==oe||te!==Z)&&(i.polygonOffset(oe,Z),$=oe,te=Z)):Ue(i.POLYGON_OFFSET_FILL)}function Ee(P){P?xe(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function w(P){P===void 0&&(P=i.TEXTURE0+ie-1),me!==P&&(i.activeTexture(P),me=P)}function _(P,oe,Z){Z===void 0&&(me===null?Z=i.TEXTURE0+ie-1:Z=me);let K=ve[Z];K===void 0&&(K={type:void 0,texture:void 0},ve[Z]=K),(K.type!==P||K.texture!==oe)&&(me!==Z&&(i.activeTexture(Z),me=Z),i.bindTexture(P,oe||Se[P]),K.type=P,K.texture=oe)}function B(){const P=ve[me];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function L(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function M(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(P){Ye.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ye.copy(P))}function V(P){ee.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ee.copy(P))}function pe(P,oe){let Z=c.get(oe);Z===void 0&&(Z=new WeakMap,c.set(oe,Z));let K=Z.get(P);K===void 0&&(K=i.getUniformBlockIndex(oe,P.name),Z.set(P,K))}function Ae(P,oe){const K=c.get(oe).get(P);l.get(oe)!==K&&(i.uniformBlockBinding(oe,K,P.__bindingPointIndex),l.set(oe,K))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},me=null,ve={},u={},f=new WeakMap,m=[],g=null,v=!1,p=null,d=null,A=null,T=null,b=null,W=null,U=null,E=new Ze(0,0,0),D=0,S=!1,x=null,C=null,G=null,$=null,te=null,Ye.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:Ue,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:je,setBlending:F,setMaterial:he,setFlipSided:se,setCullFace:ue,setLineWidth:_e,setPolygonOffset:Ne,setScissorTest:Ee,activeTexture:w,bindTexture:_,unbindTexture:B,compressedTexImage2D:L,compressedTexImage3D:z,texImage2D:R,texImage3D:H,updateUBOMapping:pe,uniformBlockBinding:Ae,texStorage2D:ce,texStorage3D:M,texSubImage2D:N,texSubImage3D:re,compressedTexSubImage2D:ne,compressedTexSubImage3D:ae,scissor:j,viewport:V,reset:Re}}function tc(i,e,t,n){const s=A_(n);switch(t){case Nc:return i*e;case Oc:return i*e;case kc:return i*e*2;case Bc:return i*e/s.components*s.byteLength;case Bo:return i*e/s.components*s.byteLength;case zc:return i*e*2/s.components*s.byteLength;case zo:return i*e*2/s.components*s.byteLength;case Fc:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case Ho:return i*e*4/s.components*s.byteLength;case Ir:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(i,16)*Math.max(e,8)/4;case eo:case no:return Math.max(i,8)*Math.max(e,8)/2;case so:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case kr:case bo:case So:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hc:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Eo:case To:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A_(i){switch(i){case Dn:case Dc:return{byteLength:1,components:1};case Ys:case Uc:case Ks:return{byteLength:2,components:1};case Oo:case ko:return{byteLength:2,components:4};case Ri:case Fo:case Xn:return{byteLength:4,components:1};case Ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function R_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return m?new OffscreenCanvas(w,_):Gr("canvas")}function v(w,_,B){let L=1;const z=Ee(w);if((z.width>B||z.height>B)&&(L=B/Math.max(z.width,z.height)),L<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const N=Math.floor(L*z.width),re=Math.floor(L*z.height);u===void 0&&(u=g(N,re));const ne=_?g(N,re):u;return ne.width=N,ne.height=re,ne.getContext("2d").drawImage(w,0,0,N,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+N+"x"+re+")."),ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),w;return w}function p(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,_,B,L,z=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let N=_;if(_===i.RED&&(B===i.FLOAT&&(N=i.R32F),B===i.HALF_FLOAT&&(N=i.R16F),B===i.UNSIGNED_BYTE&&(N=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(N=i.R8UI),B===i.UNSIGNED_SHORT&&(N=i.R16UI),B===i.UNSIGNED_INT&&(N=i.R32UI),B===i.BYTE&&(N=i.R8I),B===i.SHORT&&(N=i.R16I),B===i.INT&&(N=i.R32I)),_===i.RG&&(B===i.FLOAT&&(N=i.RG32F),B===i.HALF_FLOAT&&(N=i.RG16F),B===i.UNSIGNED_BYTE&&(N=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(N=i.RG8UI),B===i.UNSIGNED_SHORT&&(N=i.RG16UI),B===i.UNSIGNED_INT&&(N=i.RG32UI),B===i.BYTE&&(N=i.RG8I),B===i.SHORT&&(N=i.RG16I),B===i.INT&&(N=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(N=i.RGB8UI),B===i.UNSIGNED_SHORT&&(N=i.RGB16UI),B===i.UNSIGNED_INT&&(N=i.RGB32UI),B===i.BYTE&&(N=i.RGB8I),B===i.SHORT&&(N=i.RGB16I),B===i.INT&&(N=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(N=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(N=i.RGBA16UI),B===i.UNSIGNED_INT&&(N=i.RGBA32UI),B===i.BYTE&&(N=i.RGBA8I),B===i.SHORT&&(N=i.RGBA16I),B===i.INT&&(N=i.RGBA32I)),_===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(N=i.RGB9_E5),_===i.RGBA){const re=z?qr:Je.getTransfer(L);B===i.FLOAT&&(N=i.RGBA32F),B===i.HALF_FLOAT&&(N=i.RGBA16F),B===i.UNSIGNED_BYTE&&(N=re===ct?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(N=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(N=i.RGB5_A1)}return(N===i.R16F||N===i.R32F||N===i.RG16F||N===i.RG32F||N===i.RGBA16F||N===i.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function b(w,_){let B;return w?_===null||_===Ri||_===_s?B=i.DEPTH24_STENCIL8:_===Xn?B=i.DEPTH32F_STENCIL8:_===Ys&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ri||_===_s?B=i.DEPTH_COMPONENT24:_===Xn?B=i.DEPTH_COMPONENT32F:_===Ys&&(B=i.DEPTH_COMPONENT16),B}function W(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==jt&&w.minFilter!==Mn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function U(w){const _=w.target;_.removeEventListener("dispose",U),D(_),_.isVideoTexture&&h.delete(_)}function E(w){const _=w.target;_.removeEventListener("dispose",E),x(_)}function D(w){const _=n.get(w);if(_.__webglInit===void 0)return;const B=w.source,L=f.get(B);if(L){const z=L[_.__cacheKey];z.usedTimes--,z.usedTimes===0&&S(w),Object.keys(L).length===0&&f.delete(B)}n.remove(w)}function S(w){const _=n.get(w);i.deleteTexture(_.__webglTexture);const B=w.source,L=f.get(B);delete L[_.__cacheKey],a.memory.textures--}function x(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(_.__webglFramebuffer[L]))for(let z=0;z<_.__webglFramebuffer[L].length;z++)i.deleteFramebuffer(_.__webglFramebuffer[L][z]);else i.deleteFramebuffer(_.__webglFramebuffer[L]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[L])}else{if(Array.isArray(_.__webglFramebuffer))for(let L=0;L<_.__webglFramebuffer.length;L++)i.deleteFramebuffer(_.__webglFramebuffer[L]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let L=0;L<_.__webglColorRenderbuffer.length;L++)_.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[L]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=w.textures;for(let L=0,z=B.length;L<z;L++){const N=n.get(B[L]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(B[L])}n.remove(w)}let C=0;function G(){C=0}function $(){const w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function te(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function ie(w,_){const B=n.get(w);if(w.isVideoTexture&&_e(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const L=w.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(B,w,_);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function J(w,_){const B=n.get(w);if(w.version>0&&B.__version!==w.version){ee(B,w,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function Q(w,_){const B=n.get(w);if(w.version>0&&B.__version!==w.version){ee(B,w,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function q(w,_){const B=n.get(w);if(w.version>0&&B.__version!==w.version){le(B,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const me={[Ja]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},ve={[jt]:i.NEAREST,[Jh]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},be={[id]:i.NEVER,[cd]:i.ALWAYS,[sd]:i.LESS,[Gc]:i.LEQUAL,[rd]:i.EQUAL,[ld]:i.GEQUAL,[ad]:i.GREATER,[od]:i.NOTEQUAL};function ke(w,_){if(_.type===Xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Mn||_.magFilter===Jr||_.magFilter===ir||_.magFilter===$n||_.minFilter===Mn||_.minFilter===Jr||_.minFilter===ir||_.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,me[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,me[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,me[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ve[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===jt||_.minFilter!==ir&&_.minFilter!==$n||_.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ye(w,_){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",U));const L=_.source;let z=f.get(L);z===void 0&&(z={},f.set(L,z));const N=te(_);if(N!==w.__cacheKey){z[N]===void 0&&(z[N]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),z[N].usedTimes++;const re=z[w.__cacheKey];re!==void 0&&(z[w.__cacheKey].usedTimes--,re.usedTimes===0&&S(_)),w.__cacheKey=N,w.__webglTexture=z[N].texture}return B}function ee(w,_,B){let L=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(L=i.TEXTURE_3D);const z=Ye(w,_),N=_.source;t.bindTexture(L,w.__webglTexture,i.TEXTURE0+B);const re=n.get(N);if(N.version!==re.__version||z===!0){t.activeTexture(i.TEXTURE0+B);const ne=Je.getPrimaries(Je.workingColorSpace),ae=_.colorSpace===Pn?null:Je.getPrimaries(_.colorSpace),ce=_.colorSpace===Pn||ne===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let M=v(_.image,!1,s.maxTextureSize);M=Ne(_,M);const R=r.convert(_.format,_.colorSpace),H=r.convert(_.type);let j=T(_.internalFormat,R,H,_.colorSpace,_.isVideoTexture);ke(L,_);let V;const pe=_.mipmaps,Ae=_.isVideoTexture!==!0,Re=re.__version===void 0||z===!0,P=N.dataReady,oe=W(_,M);if(_.isDepthTexture)j=b(_.format===gs,_.type),Re&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,j,M.width,M.height):t.texImage2D(i.TEXTURE_2D,0,j,M.width,M.height,0,R,H,null));else if(_.isDataTexture)if(pe.length>0){Ae&&Re&&t.texStorage2D(i.TEXTURE_2D,oe,j,pe[0].width,pe[0].height);for(let Z=0,K=pe.length;Z<K;Z++)V=pe[Z],Ae?P&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,V.width,V.height,R,H,V.data):t.texImage2D(i.TEXTURE_2D,Z,j,V.width,V.height,0,R,H,V.data);_.generateMipmaps=!1}else Ae?(Re&&t.texStorage2D(i.TEXTURE_2D,oe,j,M.width,M.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,R,H,M.data)):t.texImage2D(i.TEXTURE_2D,0,j,M.width,M.height,0,R,H,M.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ae&&Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,j,pe[0].width,pe[0].height,M.depth);for(let Z=0,K=pe.length;Z<K;Z++)if(V=pe[Z],_.format!==cn)if(R!==null)if(Ae){if(P)if(_.layerUpdates.size>0){const ge=tc(V.width,V.height,_.format,_.type);for(const ye of _.layerUpdates){const Be=V.data.subarray(ye*ge/V.data.BYTES_PER_ELEMENT,(ye+1)*ge/V.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ye,V.width,V.height,1,R,Be)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,V.width,V.height,M.depth,R,V.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,j,V.width,V.height,M.depth,0,V.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,V.width,V.height,M.depth,R,H,V.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,j,V.width,V.height,M.depth,0,R,H,V.data)}else{Ae&&Re&&t.texStorage2D(i.TEXTURE_2D,oe,j,pe[0].width,pe[0].height);for(let Z=0,K=pe.length;Z<K;Z++)V=pe[Z],_.format!==cn?R!==null?Ae?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,V.width,V.height,R,V.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,j,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?P&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,V.width,V.height,R,H,V.data):t.texImage2D(i.TEXTURE_2D,Z,j,V.width,V.height,0,R,H,V.data)}else if(_.isDataArrayTexture)if(Ae){if(Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,j,M.width,M.height,M.depth),P)if(_.layerUpdates.size>0){const Z=tc(M.width,M.height,_.format,_.type);for(const K of _.layerUpdates){const ge=M.data.subarray(K*Z/M.data.BYTES_PER_ELEMENT,(K+1)*Z/M.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,M.width,M.height,1,R,H,ge)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,M.width,M.height,M.depth,R,H,M.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,j,M.width,M.height,M.depth,0,R,H,M.data);else if(_.isData3DTexture)Ae?(Re&&t.texStorage3D(i.TEXTURE_3D,oe,j,M.width,M.height,M.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,M.width,M.height,M.depth,R,H,M.data)):t.texImage3D(i.TEXTURE_3D,0,j,M.width,M.height,M.depth,0,R,H,M.data);else if(_.isFramebufferTexture){if(Re)if(Ae)t.texStorage2D(i.TEXTURE_2D,oe,j,M.width,M.height);else{let Z=M.width,K=M.height;for(let ge=0;ge<oe;ge++)t.texImage2D(i.TEXTURE_2D,ge,j,Z,K,0,R,H,null),Z>>=1,K>>=1}}else if(pe.length>0){if(Ae&&Re){const Z=Ee(pe[0]);t.texStorage2D(i.TEXTURE_2D,oe,j,Z.width,Z.height)}for(let Z=0,K=pe.length;Z<K;Z++)V=pe[Z],Ae?P&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,R,H,V):t.texImage2D(i.TEXTURE_2D,Z,j,R,H,V);_.generateMipmaps=!1}else if(Ae){if(Re){const Z=Ee(M);t.texStorage2D(i.TEXTURE_2D,oe,j,Z.width,Z.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,R,H,M)}else t.texImage2D(i.TEXTURE_2D,0,j,R,H,M);p(_)&&d(L),re.__version=N.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function le(w,_,B){if(_.image.length!==6)return;const L=Ye(w,_),z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const N=n.get(z);if(z.version!==N.__version||L===!0){t.activeTexture(i.TEXTURE0+B);const re=Je.getPrimaries(Je.workingColorSpace),ne=_.colorSpace===Pn?null:Je.getPrimaries(_.colorSpace),ae=_.colorSpace===Pn||re===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ce=_.isCompressedTexture||_.image[0].isCompressedTexture,M=_.image[0]&&_.image[0].isDataTexture,R=[];for(let K=0;K<6;K++)!ce&&!M?R[K]=v(_.image[K],!0,s.maxCubemapSize):R[K]=M?_.image[K].image:_.image[K],R[K]=Ne(_,R[K]);const H=R[0],j=r.convert(_.format,_.colorSpace),V=r.convert(_.type),pe=T(_.internalFormat,j,V,_.colorSpace),Ae=_.isVideoTexture!==!0,Re=N.__version===void 0||L===!0,P=z.dataReady;let oe=W(_,H);ke(i.TEXTURE_CUBE_MAP,_);let Z;if(ce){Ae&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,pe,H.width,H.height);for(let K=0;K<6;K++){Z=R[K].mipmaps;for(let ge=0;ge<Z.length;ge++){const ye=Z[ge];_.format!==cn?j!==null?Ae?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,ye.width,ye.height,j,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,ye.width,ye.height,j,V,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,pe,ye.width,ye.height,0,j,V,ye.data)}}}else{if(Z=_.mipmaps,Ae&&Re){Z.length>0&&oe++;const K=Ee(R[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,pe,K.width,K.height)}for(let K=0;K<6;K++)if(M){Ae?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,R[K].width,R[K].height,j,V,R[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,pe,R[K].width,R[K].height,0,j,V,R[K].data);for(let ge=0;ge<Z.length;ge++){const Be=Z[ge].image[K].image;Ae?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Be.width,Be.height,j,V,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,pe,Be.width,Be.height,0,j,V,Be.data)}}else{Ae?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,j,V,R[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,pe,j,V,R[K]);for(let ge=0;ge<Z.length;ge++){const ye=Z[ge];Ae?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,j,V,ye.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,pe,j,V,ye.image[K])}}}p(_)&&d(i.TEXTURE_CUBE_MAP),N.__version=z.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Se(w,_,B,L,z,N){const re=r.convert(B.format,B.colorSpace),ne=r.convert(B.type),ae=T(B.internalFormat,re,ne,B.colorSpace),ce=n.get(_),M=n.get(B);if(M.__renderTarget=_,!ce.__hasExternalTextures){const R=Math.max(1,_.width>>N),H=Math.max(1,_.height>>N);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?t.texImage3D(z,N,ae,R,H,_.depth,0,re,ne,null):t.texImage2D(z,N,ae,R,H,0,re,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,z,M.__webglTexture,0,se(_)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,z,M.__webglTexture,N),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(w,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const L=_.depthTexture,z=L&&L.isDepthTexture?L.type:null,N=b(_.stencilBuffer,z),re=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=se(_);ue(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,N,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,N,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,N,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,w)}else{const L=_.textures;for(let z=0;z<L.length;z++){const N=L[z],re=r.convert(N.format,N.colorSpace),ne=r.convert(N.type),ae=T(N.internalFormat,re,ne,N.colorSpace),ce=se(_);B&&ue(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ae,_.width,_.height):ue(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,ae,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ae,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=n.get(_.depthTexture);L.__renderTarget=_,(!L.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ie(_.depthTexture,0);const z=L.__webglTexture,N=se(_);if(_.depthTexture.format===cs)ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(_.depthTexture.format===gs)ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Oe(w){const _=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const L=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),L){const z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,L.removeEventListener("dispose",z)};L.addEventListener("dispose",z),_.__depthDisposeCallback=z}_.__boundDepthTexture=L}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ue(_.__webglFramebuffer,w)}else if(B){_.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[L]),_.__webglDepthbuffer[L]===void 0)_.__webglDepthbuffer[L]=i.createRenderbuffer(),xe(_.__webglDepthbuffer[L],w,!1);else{const z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=_.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,N)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),xe(_.__webglDepthbuffer,w,!1);else{const L=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(w,_,B){const L=n.get(w);_!==void 0&&Se(L.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Oe(w)}function je(w){const _=w.texture,B=n.get(w),L=n.get(_);w.addEventListener("dispose",E);const z=w.textures,N=w.isWebGLCubeRenderTarget===!0,re=z.length>1;if(re||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=_.version,a.memory.textures++),N){B.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ne]=[];for(let ae=0;ae<_.mipmaps.length;ae++)B.__webglFramebuffer[ne][ae]=i.createFramebuffer()}else B.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)B.__webglFramebuffer[ne]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(re)for(let ne=0,ae=z.length;ne<ae;ne++){const ce=n.get(z[ne]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ue(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ne=0;ne<z.length;ne++){const ae=z[ne];B.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ne]);const ce=r.convert(ae.format,ae.colorSpace),M=r.convert(ae.type),R=T(ae.internalFormat,ce,M,ae.colorSpace,w.isXRRenderTarget===!0),H=se(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,H,R,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,B.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),ke(i.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Se(B.__webglFramebuffer[ne][ae],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae);else Se(B.__webglFramebuffer[ne],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let ne=0,ae=z.length;ne<ae;ne++){const ce=z[ne],M=n.get(ce);t.bindTexture(i.TEXTURE_2D,M.__webglTexture),ke(i.TEXTURE_2D,ce),Se(B.__webglFramebuffer,w,ce,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),p(ce)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,L.__webglTexture),ke(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Se(B.__webglFramebuffer[ae],w,_,i.COLOR_ATTACHMENT0,ne,ae);else Se(B.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,ne,0);p(_)&&d(ne),t.unbindTexture()}w.depthBuffer&&Oe(w)}function We(w){const _=w.textures;for(let B=0,L=_.length;B<L;B++){const z=_[B];if(p(z)){const N=A(w),re=n.get(z).__webglTexture;t.bindTexture(N,re),d(N),t.unbindTexture()}}}const et=[],F=[];function he(w){if(w.samples>0){if(ue(w)===!1){const _=w.textures,B=w.width,L=w.height;let z=i.COLOR_BUFFER_BIT;const N=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(w),ne=_.length>1;if(ne)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);const ce=n.get(_[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,B,L,0,0,B,L,z,i.NEAREST),l===!0&&(et.length=0,F.length=0,et.push(i.COLOR_ATTACHMENT0+ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(et.push(N),F.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);const ce=n.get(_[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function se(w){return Math.min(s.maxSamples,w.samples)}function ue(w){const _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function _e(w){const _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function Ne(w,_){const B=w.colorSpace,L=w.format,z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Li&&B!==Pn&&(Je.getTransfer(B)===ct?(L!==cn||z!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function Ee(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.setTexture2D=ie,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=Ie,this.setupRenderTarget=je,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ue}function C_(i,e){function t(n,s=Pn){let r;const a=Je.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dc)return i.BYTE;if(n===Uc)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===Fo)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Ks)return i.HALF_FLOAT;if(n===Nc)return i.ALPHA;if(n===Fc)return i.RGB;if(n===cn)return i.RGBA;if(n===Oc)return i.LUMINANCE;if(n===kc)return i.LUMINANCE_ALPHA;if(n===cs)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===zc)return i.RG;if(n===zo)return i.RG_INTEGER;if(n===Ho)return i.RGBA_INTEGER;if(n===Ir||n===Nr||n===Fr||n===Or)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ro||n===ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===so||n===ro)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===_o||n===go||n===vo||n===xo||n===yo||n===Mo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_o)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kr||n===bo||n===So)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===kr)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===wo||n===Eo||n===To)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===kr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class P_ extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class is extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Un({vertexShader:D_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N_ extends Di{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const v=new I_,p=t.getContextAttributes();let d=null,A=null;const T=[],b=[],W=new Ve;let U=null;const E=new ln;E.viewport=new lt;const D=new ln;D.viewport=new lt;const S=[E,D],x=new P_;let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=T[ee];return le===void 0&&(le=new Ea,T[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=T[ee];return le===void 0&&(le=new Ea,T[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=T[ee];return le===void 0&&(le=new Ea,T[ee]=le),le.getHandSpace()};function $(ee){const le=b.indexOf(ee.inputSource);if(le===-1)return;const Se=T[le];Se!==void 0&&(Se.update(ee.inputSource,ee.frame,c||a),Se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function te(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",ie);for(let ee=0;ee<T.length;ee++){const le=b[ee];le!==null&&(b[ee]=null,T[ee].disconnect(le))}C=null,G=null,v.reset(),e.setRenderTarget(d),m=null,f=null,u=null,s=null,A=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",te),s.addEventListener("inputsourceschange",ie),p.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(W),s.renderState.layers===void 0){const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Ci(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,Se=null,xe=null;p.depth&&(xe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?gs:cs,Se=p.stencil?_s:Ri);const Ue={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ue),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Ci(f.textureWidth,f.textureHeight,{format:cn,type:Dn,depthTexture:new th(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ie(ee){for(let le=0;le<ee.removed.length;le++){const Se=ee.removed[le],xe=b.indexOf(Se);xe>=0&&(b[xe]=null,T[xe].disconnect(Se))}for(let le=0;le<ee.added.length;le++){const Se=ee.added[le];let xe=b.indexOf(Se);if(xe===-1){for(let Oe=0;Oe<T.length;Oe++)if(Oe>=b.length){b.push(Se),xe=Oe;break}else if(b[Oe]===null){b[Oe]=Se,xe=Oe;break}if(xe===-1)break}const Ue=T[xe];Ue&&Ue.connect(Se)}}const J=new I,Q=new I;function q(ee,le,Se){J.setFromMatrixPosition(le.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const xe=J.distanceTo(Q),Ue=le.projectionMatrix.elements,Oe=Se.projectionMatrix.elements,Ie=Ue[14]/(Ue[10]-1),je=Ue[14]/(Ue[10]+1),We=(Ue[9]+1)/Ue[5],et=(Ue[9]-1)/Ue[5],F=(Ue[8]-1)/Ue[0],he=(Oe[8]+1)/Oe[0],se=Ie*F,ue=Ie*he,_e=xe/(-F+he),Ne=_e*-F;if(le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ne),ee.translateZ(_e),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ue[10]===-1)ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ee=Ie+_e,w=je+_e,_=se-Ne,B=ue+(xe-Ne),L=We*je/w*Ee,z=et*je/w*Ee;ee.projectionMatrix.makePerspective(_,B,L,z,Ee,w),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function me(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let le=ee.near,Se=ee.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),x.near=D.near=E.near=le,x.far=D.far=E.far=Se,(C!==x.near||G!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,G=x.far),E.layers.mask=ee.layers.mask|2,D.layers.mask=ee.layers.mask|4,x.layers.mask=E.layers.mask|D.layers.mask;const xe=ee.parent,Ue=x.cameras;me(x,xe);for(let Oe=0;Oe<Ue.length;Oe++)me(Ue[Oe],xe);Ue.length===2?q(x,E,D):x.projectionMatrix.copy(E.projectionMatrix),ve(ee,x,xe)};function ve(ee,le,Se){Se===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(Se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=js*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(ee){l=ee,f!==null&&(f.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let be=null;function ke(ee,le){if(h=le.getViewerPose(c||a),g=le,h!==null){const Se=h.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let xe=!1;Se.length!==x.cameras.length&&(x.cameras.length=0,xe=!0);for(let Oe=0;Oe<Se.length;Oe++){const Ie=Se[Oe];let je=null;if(m!==null)je=m.getViewport(Ie);else{const et=u.getViewSubImage(f,Ie);je=et.viewport,Oe===0&&(e.setRenderTargetTextures(A,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(A))}let We=S[Oe];We===void 0&&(We=new ln,We.layers.enable(Oe),We.viewport=new lt,S[Oe]=We),We.matrix.fromArray(Ie.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ie.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(je.x,je.y,je.width,je.height),Oe===0&&(x.matrix.copy(We.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),xe===!0&&x.cameras.push(We)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Oe=u.getDepthInformation(Se[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,s.renderState)}}for(let Se=0;Se<T.length;Se++){const xe=b[Se],Ue=T[Se];xe!==null&&Ue!==void 0&&Ue.update(xe,le,c||a)}be&&be(ee,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const Ye=new eh;Ye.setAnimationLoop(ke),this.setAnimationLoop=function(ee){be=ee},this.dispose=function(){}}}const xi=new Zn,F_=new vt;function O_(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Zc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,A,T,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,A,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Yt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Yt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const A=e.get(d),T=A.envMap,b=A.envMapRotation;T&&(p.envMap.value=T,xi.copy(b),xi.x*=-1,xi.y*=-1,xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),p.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(xi)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,A,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*A,p.scale.value=T*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,A){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const A=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k_(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const b=T.program;n.uniformBlockBinding(A,b)}function c(A,T){let b=s[A.id];b===void 0&&(g(A),b=h(A),s[A.id]=b,A.addEventListener("dispose",p));const W=T.program;n.updateUBOMapping(A,W);const U=e.render.frame;r[A.id]!==U&&(f(A),r[A.id]=U)}function h(A){const T=u();A.__bindingPointIndex=T;const b=i.createBuffer(),W=A.__size,U=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,W,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=s[A.id],b=A.uniforms,W=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let U=0,E=b.length;U<E;U++){const D=Array.isArray(b[U])?b[U]:[b[U]];for(let S=0,x=D.length;S<x;S++){const C=D[S];if(m(C,U,S,W)===!0){const G=C.__offset,$=Array.isArray(C.value)?C.value:[C.value];let te=0;for(let ie=0;ie<$.length;ie++){const J=$[ie],Q=v(J);typeof J=="number"||typeof J=="boolean"?(C.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,G+te,C.__data)):J.isMatrix3?(C.__data[0]=J.elements[0],C.__data[1]=J.elements[1],C.__data[2]=J.elements[2],C.__data[3]=0,C.__data[4]=J.elements[3],C.__data[5]=J.elements[4],C.__data[6]=J.elements[5],C.__data[7]=0,C.__data[8]=J.elements[6],C.__data[9]=J.elements[7],C.__data[10]=J.elements[8],C.__data[11]=0):(J.toArray(C.__data,te),te+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,T,b,W){const U=A.value,E=T+"_"+b;if(W[E]===void 0)return typeof U=="number"||typeof U=="boolean"?W[E]=U:W[E]=U.clone(),!0;{const D=W[E];if(typeof U=="number"||typeof U=="boolean"){if(D!==U)return W[E]=U,!0}else if(D.equals(U)===!1)return D.copy(U),!0}return!1}function g(A){const T=A.uniforms;let b=0;const W=16;for(let E=0,D=T.length;E<D;E++){const S=Array.isArray(T[E])?T[E]:[T[E]];for(let x=0,C=S.length;x<C;x++){const G=S[x],$=Array.isArray(G.value)?G.value:[G.value];for(let te=0,ie=$.length;te<ie;te++){const J=$[te],Q=v(J),q=b%W,me=q%Q.boundary,ve=q+me;b+=me,ve!==0&&W-ve<Q.storage&&(b+=W-ve),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=Q.storage}}}const U=b%W;return U>0&&(b+=W-U),A.__size=b,A.__cache={},this}function v(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class B_{constructor(e={}){const{canvas:t=Td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,d=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=di,this.toneMappingExposure=1;const b=this;let W=!1,U=0,E=0,D=null,S=-1,x=null;const C=new lt,G=new lt;let $=null;const te=new Ze(0);let ie=0,J=t.width,Q=t.height,q=1,me=null,ve=null;const be=new lt(0,0,J,Q),ke=new lt(0,0,J,Q);let Ye=!1;const ee=new Qc;let le=!1,Se=!1;const xe=new vt,Ue=new vt,Oe=new I,Ie=new lt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function et(){return D===null?q:1}let F=n;function he(y,O){return t.getContext(y,O)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${No}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",ye,!1),F===null){const O="webgl2";if(F=he(O,y),F===null)throw he(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let se,ue,_e,Ne,Ee,w,_,B,L,z,N,re,ne,ae,ce,M,R,H,j,V,pe,Ae,Re,P;function oe(){se=new Wp(F),se.init(),Ae=new C_(F,se),ue=new Op(F,se,e,Ae),_e=new T_(F,se),ue.reverseDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),Ne=new qp(F),Ee=new d_,w=new R_(F,se,_e,Ee,ue,Ae,Ne),_=new Bp(b),B=new Vp(b),L=new Jd(F),Re=new Np(F,L),z=new $p(F,L,Ne,Re),N=new jp(F,z,L,Ne),j=new Yp(F,ue,w),M=new kp(Ee),re=new h_(b,_,B,se,ue,Re,M),ne=new O_(b,Ee),ae=new f_,ce=new x_(se),H=new Ip(b,_,B,_e,N,m,l),R=new w_(b,N,ue),P=new k_(F,Ne,ue,_e),V=new Fp(F,se,Ne),pe=new Xp(F,se,Ne),Ne.programs=re.programs,b.capabilities=ue,b.extensions=se,b.properties=Ee,b.renderLists=ae,b.shadowMap=R,b.state=_e,b.info=Ne}oe();const Z=new N_(b,F);this.xr=Z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=se.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=se.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(J,Q,!1))},this.getSize=function(y){return y.set(J,Q)},this.setSize=function(y,O,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,Q=O,t.width=Math.floor(y*q),t.height=Math.floor(O*q),X===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(J*q,Q*q).floor()},this.setDrawingBufferSize=function(y,O,X){J=y,Q=O,q=X,t.width=Math.floor(y*X),t.height=Math.floor(O*X),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(be)},this.setViewport=function(y,O,X,Y){y.isVector4?be.set(y.x,y.y,y.z,y.w):be.set(y,O,X,Y),_e.viewport(C.copy(be).multiplyScalar(q).round())},this.getScissor=function(y){return y.copy(ke)},this.setScissor=function(y,O,X,Y){y.isVector4?ke.set(y.x,y.y,y.z,y.w):ke.set(y,O,X,Y),_e.scissor(G.copy(ke).multiplyScalar(q).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(y){_e.setScissorTest(Ye=y)},this.setOpaqueSort=function(y){me=y},this.setTransparentSort=function(y){ve=y},this.getClearColor=function(y){return y.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(y=!0,O=!0,X=!0){let Y=0;if(y){let k=!1;if(D!==null){const fe=D.texture.format;k=fe===Ho||fe===zo||fe===Bo}if(k){const fe=D.texture.type,Te=fe===Dn||fe===Ri||fe===Ys||fe===_s||fe===Oo||fe===ko,Ce=H.getClearColor(),Pe=H.getClearAlpha(),He=Ce.r,$e=Ce.g,Le=Ce.b;Te?(g[0]=He,g[1]=$e,g[2]=Le,g[3]=Pe,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=He,v[1]=$e,v[2]=Le,v[3]=Pe,F.clearBufferiv(F.COLOR,0,v))}else Y|=F.COLOR_BUFFER_BIT}O&&(Y|=F.DEPTH_BUFFER_BIT),X&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),ae.dispose(),ce.dispose(),Ee.dispose(),_.dispose(),B.dispose(),N.dispose(),Re.dispose(),P.dispose(),re.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Zo),Z.removeEventListener("sessionend",Ko),fi.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const y=Ne.autoReset,O=R.enabled,X=R.autoUpdate,Y=R.needsUpdate,k=R.type;oe(),Ne.autoReset=y,R.enabled=O,R.autoUpdate=X,R.needsUpdate=Y,R.type=k}function ye(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Be(y){const O=y.target;O.removeEventListener("dispose",Be),dt(O)}function dt(y){St(y),Ee.remove(y)}function St(y){const O=Ee.get(y).programs;O!==void 0&&(O.forEach(function(X){re.releaseProgram(X)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,X,Y,k,fe){O===null&&(O=je);const Te=k.isMesh&&k.matrixWorld.determinant()<0,Ce=gh(y,O,X,Y,k);_e.setMaterial(Y,Te);let Pe=X.index,He=1;if(Y.wireframe===!0){if(Pe=z.getWireframeAttribute(X),Pe===void 0)return;He=2}const $e=X.drawRange,Le=X.attributes.position;let Qe=$e.start*He,ut=($e.start+$e.count)*He;fe!==null&&(Qe=Math.max(Qe,fe.start*He),ut=Math.min(ut,(fe.start+fe.count)*He)),Pe!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,Pe.count)):Le!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Le.count));const ft=ut-Qe;if(ft<0||ft===1/0)return;Re.setup(k,Y,Ce,X,Pe);let Vt,it=V;if(Pe!==null&&(Vt=L.get(Pe),it=pe,it.setIndex(Vt)),k.isMesh)Y.wireframe===!0?(_e.setLineWidth(Y.wireframeLinewidth*et()),it.setMode(F.LINES)):it.setMode(F.TRIANGLES);else if(k.isLine){let De=Y.linewidth;De===void 0&&(De=1),_e.setLineWidth(De*et()),k.isLineSegments?it.setMode(F.LINES):k.isLineLoop?it.setMode(F.LINE_LOOP):it.setMode(F.LINE_STRIP)}else k.isPoints?it.setMode(F.POINTS):k.isSprite&&it.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)it.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const De=k._multiDrawStarts,Nn=k._multiDrawCounts,st=k._multiDrawCount,un=Pe?L.get(Pe).bytesPerElement:1,Ui=Ee.get(Y).currentProgram.getUniforms();for(let Jt=0;Jt<st;Jt++)Ui.setValue(F,"_gl_DrawID",Jt),it.render(De[Jt]/un,Nn[Jt])}else if(k.isInstancedMesh)it.renderInstances(Qe,ft,k.count);else if(X.isInstancedBufferGeometry){const De=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Nn=Math.min(X.instanceCount,De);it.renderInstances(Qe,ft,Nn)}else it.render(Qe,ft)};function tt(y,O,X){y.transparent===!0&&y.side===Cn&&y.forceSinglePass===!1?(y.side=Yt,y.needsUpdate=!0,nr(y,O,X),y.side=ui,y.needsUpdate=!0,nr(y,O,X),y.side=Cn):nr(y,O,X)}this.compile=function(y,O,X=null){X===null&&(X=y),d=ce.get(X),d.init(O),T.push(d),X.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),y!==X&&y.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const Y=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const fe=k.material;if(fe)if(Array.isArray(fe))for(let Te=0;Te<fe.length;Te++){const Ce=fe[Te];tt(Ce,X,k),Y.add(Ce)}else tt(fe,X,k),Y.add(fe)}),T.pop(),d=null,Y},this.compileAsync=function(y,O,X=null){const Y=this.compile(y,O,X);return new Promise(k=>{function fe(){if(Y.forEach(function(Te){Ee.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){k(y);return}setTimeout(fe,10)}se.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Mt=null;function In(y){Mt&&Mt(y)}function Zo(){fi.stop()}function Ko(){fi.start()}const fi=new eh;fi.setAnimationLoop(In),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(y){Mt=y,Z.setAnimationLoop(y),y===null?fi.stop():fi.start()},Z.addEventListener("sessionstart",Zo),Z.addEventListener("sessionend",Ko),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,O,D),d=ce.get(y,T.length),d.init(O),T.push(d),Ue.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(Ue),Se=this.localClippingEnabled,le=M.init(this.clippingPlanes,Se),p=ae.get(y,A.length),p.init(),A.push(p),Z.enabled===!0&&Z.isPresenting===!0){const fe=b.xr.getDepthSensingMesh();fe!==null&&Kr(fe,O,-1/0,b.sortObjects)}Kr(y,O,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(me,ve),We=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,We&&H.addToRenderList(p,y),this.info.render.frame++,le===!0&&M.beginShadows();const X=d.state.shadowsArray;R.render(X,y,O),le===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=p.opaque,k=p.transmissive;if(d.setupLights(),O.isArrayCamera){const fe=O.cameras;if(k.length>0)for(let Te=0,Ce=fe.length;Te<Ce;Te++){const Pe=fe[Te];Qo(Y,k,y,Pe)}We&&H.render(y);for(let Te=0,Ce=fe.length;Te<Ce;Te++){const Pe=fe[Te];Jo(p,y,Pe,Pe.viewport)}}else k.length>0&&Qo(Y,k,y,O),We&&H.render(y),Jo(p,y,O);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(b,y,O),Re.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(d=T[T.length-1],le===!0&&M.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function Kr(y,O,X,Y){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ee.intersectsSprite(y)){Y&&Ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ue);const Te=N.update(y),Ce=y.material;Ce.visible&&p.push(y,Te,Ce,X,Ie.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ee.intersectsObject(y))){const Te=N.update(y),Ce=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ie.copy(y.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ie.copy(Te.boundingSphere.center)),Ie.applyMatrix4(y.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ce)){const Pe=Te.groups;for(let He=0,$e=Pe.length;He<$e;He++){const Le=Pe[He],Qe=Ce[Le.materialIndex];Qe&&Qe.visible&&p.push(y,Te,Qe,X,Ie.z,Le)}}else Ce.visible&&p.push(y,Te,Ce,X,Ie.z,null)}}const fe=y.children;for(let Te=0,Ce=fe.length;Te<Ce;Te++)Kr(fe[Te],O,X,Y)}function Jo(y,O,X,Y){const k=y.opaque,fe=y.transmissive,Te=y.transparent;d.setupLightsView(X),le===!0&&M.setGlobalState(b.clippingPlanes,X),Y&&_e.viewport(C.copy(Y)),k.length>0&&tr(k,O,X),fe.length>0&&tr(fe,O,X),Te.length>0&&tr(Te,O,X),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Qo(y,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new Ci(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Ks:Dn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const fe=d.state.transmissionRenderTarget[Y.id],Te=Y.viewport||C;fe.setSize(Te.z,Te.w);const Ce=b.getRenderTarget();b.setRenderTarget(fe),b.getClearColor(te),ie=b.getClearAlpha(),ie<1&&b.setClearColor(16777215,.5),b.clear(),We&&H.render(X);const Pe=b.toneMapping;b.toneMapping=di;const He=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),le===!0&&M.setGlobalState(b.clippingPlanes,Y),tr(y,X,Y),w.updateMultisampleRenderTarget(fe),w.updateRenderTargetMipmap(fe),se.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Le=0,Qe=O.length;Le<Qe;Le++){const ut=O[Le],ft=ut.object,Vt=ut.geometry,it=ut.material,De=ut.group;if(it.side===Cn&&ft.layers.test(Y.layers)){const Nn=it.side;it.side=Yt,it.needsUpdate=!0,el(ft,X,Y,Vt,it,De),it.side=Nn,it.needsUpdate=!0,$e=!0}}$e===!0&&(w.updateMultisampleRenderTarget(fe),w.updateRenderTargetMipmap(fe))}b.setRenderTarget(Ce),b.setClearColor(te,ie),He!==void 0&&(Y.viewport=He),b.toneMapping=Pe}function tr(y,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let k=0,fe=y.length;k<fe;k++){const Te=y[k],Ce=Te.object,Pe=Te.geometry,He=Y===null?Te.material:Y,$e=Te.group;Ce.layers.test(X.layers)&&el(Ce,O,X,Pe,He,$e)}}function el(y,O,X,Y,k,fe){y.onBeforeRender(b,O,X,Y,k,fe),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(b,O,X,Y,y,fe),k.transparent===!0&&k.side===Cn&&k.forceSinglePass===!1?(k.side=Yt,k.needsUpdate=!0,b.renderBufferDirect(X,O,Y,k,y,fe),k.side=ui,k.needsUpdate=!0,b.renderBufferDirect(X,O,Y,k,y,fe),k.side=Cn):b.renderBufferDirect(X,O,Y,k,y,fe),y.onAfterRender(b,O,X,Y,k,fe)}function nr(y,O,X){O.isScene!==!0&&(O=je);const Y=Ee.get(y),k=d.state.lights,fe=d.state.shadowsArray,Te=k.state.version,Ce=re.getParameters(y,k.state,fe,O,X),Pe=re.getProgramCacheKey(Ce);let He=Y.programs;Y.environment=y.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(y.isMeshStandardMaterial?B:_).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,He===void 0&&(y.addEventListener("dispose",Be),He=new Map,Y.programs=He);let $e=He.get(Pe);if($e!==void 0){if(Y.currentProgram===$e&&Y.lightsStateVersion===Te)return nl(y,Ce),$e}else Ce.uniforms=re.getUniforms(y),y.onBeforeCompile(Ce,b),$e=re.acquireProgram(Ce,Pe),He.set(Pe,$e),Y.uniforms=Ce.uniforms;const Le=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=M.uniform),nl(y,Ce),Y.needsLights=xh(y),Y.lightsStateVersion=Te,Y.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=$e,Y.uniformsList=null,$e}function tl(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Br.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function nl(y,O){const X=Ee.get(y);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function gh(y,O,X,Y,k){O.isScene!==!0&&(O=je),w.resetTextureUnits();const fe=O.fog,Te=Y.isMeshStandardMaterial?O.environment:null,Ce=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Li,Pe=(Y.isMeshStandardMaterial?B:_).get(Y.envMap||Te),He=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$e=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,ut=!!X.morphAttributes.color;let ft=di;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ft=b.toneMapping);const Vt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=Vt!==void 0?Vt.length:0,De=Ee.get(Y),Nn=d.state.lights;if(le===!0&&(Se===!0||y!==x)){const nn=y===x&&Y.id===S;M.setState(Y,y,nn)}let st=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Nn.state.version||De.outputColorSpace!==Ce||k.isBatchedMesh&&De.batching===!1||!k.isBatchedMesh&&De.batching===!0||k.isBatchedMesh&&De.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&De.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||k.isInstancedMesh&&De.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&De.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&De.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&De.instancingMorph===!1&&k.morphTexture!==null||De.envMap!==Pe||Y.fog===!0&&De.fog!==fe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==M.numPlanes||De.numIntersection!==M.numIntersection)||De.vertexAlphas!==He||De.vertexTangents!==$e||De.morphTargets!==Le||De.morphNormals!==Qe||De.morphColors!==ut||De.toneMapping!==ft||De.morphTargetsCount!==it)&&(st=!0):(st=!0,De.__version=Y.version);let un=De.currentProgram;st===!0&&(un=nr(Y,O,k));let Ui=!1,Jt=!1,Ss=!1;const pt=un.getUniforms(),Tn=De.uniforms;if(_e.useProgram(un.program)&&(Ui=!0,Jt=!0,Ss=!0),Y.id!==S&&(S=Y.id,Jt=!0),Ui||x!==y){_e.buffers.depth.getReversed()?(xe.copy(y.projectionMatrix),Rd(xe),Cd(xe),pt.setValue(F,"projectionMatrix",xe)):pt.setValue(F,"projectionMatrix",y.projectionMatrix),pt.setValue(F,"viewMatrix",y.matrixWorldInverse);const Kn=pt.map.cameraPosition;Kn!==void 0&&Kn.setValue(F,Oe.setFromMatrixPosition(y.matrixWorld)),ue.logarithmicDepthBuffer&&pt.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pt.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Jt=!0,Ss=!0)}if(k.isSkinnedMesh){pt.setOptional(F,k,"bindMatrix"),pt.setOptional(F,k,"bindMatrixInverse");const nn=k.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),pt.setValue(F,"boneTexture",nn.boneTexture,w))}k.isBatchedMesh&&(pt.setOptional(F,k,"batchingTexture"),pt.setValue(F,"batchingTexture",k._matricesTexture,w),pt.setOptional(F,k,"batchingIdTexture"),pt.setValue(F,"batchingIdTexture",k._indirectTexture,w),pt.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&pt.setValue(F,"batchingColorTexture",k._colorsTexture,w));const ws=X.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&j.update(k,X,un),(Jt||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,pt.setValue(F,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Tn.envMap.value=Pe,Tn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Tn.envMapIntensity.value=O.environmentIntensity),Jt&&(pt.setValue(F,"toneMappingExposure",b.toneMappingExposure),De.needsLights&&vh(Tn,Ss),fe&&Y.fog===!0&&ne.refreshFogUniforms(Tn,fe),ne.refreshMaterialUniforms(Tn,Y,q,Q,d.state.transmissionRenderTarget[y.id]),Br.upload(F,tl(De),Tn,w)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Br.upload(F,tl(De),Tn,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pt.setValue(F,"center",k.center),pt.setValue(F,"modelViewMatrix",k.modelViewMatrix),pt.setValue(F,"normalMatrix",k.normalMatrix),pt.setValue(F,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const nn=Y.uniformsGroups;for(let Kn=0,Jn=nn.length;Kn<Jn;Kn++){const il=nn[Kn];P.update(il,un),P.bind(il,un)}}return un}function vh(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function xh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,O,X){Ee.get(y.texture).__webglTexture=O,Ee.get(y.depthTexture).__webglTexture=X;const Y=Ee.get(y);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,O){const X=Ee.get(y);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,X=0){D=y,U=O,E=X;let Y=!0,k=null,fe=!1,Te=!1;if(y){const Pe=Ee.get(y);if(Pe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(Pe.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(Pe.__hasExternalTextures)w.rebindTextures(y,Ee.get(y.texture).__webglTexture,Ee.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Le=y.depthTexture;if(Pe.__boundDepthTexture!==Le){if(Le!==null&&Ee.has(Le)&&(y.width!==Le.image.width||y.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const He=y.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const $e=Ee.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray($e[O])?k=$e[O][X]:k=$e[O],fe=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?k=Ee.get(y).__webglMultisampledFramebuffer:Array.isArray($e)?k=$e[X]:k=$e,C.copy(y.viewport),G.copy(y.scissor),$=y.scissorTest}else C.copy(be).multiplyScalar(q).floor(),G.copy(ke).multiplyScalar(q).floor(),$=Ye;if(_e.bindFramebuffer(F.FRAMEBUFFER,k)&&Y&&_e.drawBuffers(y,k),_e.viewport(C),_e.scissor(G),_e.setScissorTest($),fe){const Pe=Ee.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pe.__webglTexture,X)}else if(Te){const Pe=Ee.get(y.texture),He=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.__webglTexture,X||0,He)}S=-1},this.readRenderTargetPixels=function(y,O,X,Y,k,fe,Te){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){_e.bindFramebuffer(F.FRAMEBUFFER,Ce);try{const Pe=y.texture,He=Pe.format,$e=Pe.type;if(!ue.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-Y&&X>=0&&X<=y.height-k&&F.readPixels(O,X,Y,k,Ae.convert(He),Ae.convert($e),fe)}finally{const Pe=D!==null?Ee.get(D).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,O,X,Y,k,fe,Te){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){const Pe=y.texture,He=Pe.format,$e=Pe.type;if(!ue.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=y.width-Y&&X>=0&&X<=y.height-k){_e.bindFramebuffer(F.FRAMEBUFFER,Ce);const Le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Le),F.bufferData(F.PIXEL_PACK_BUFFER,fe.byteLength,F.STREAM_READ),F.readPixels(O,X,Y,k,Ae.convert(He),Ae.convert($e),0);const Qe=D!==null?Ee.get(D).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Qe);const ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ad(F,ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,fe),F.deleteBuffer(Le),F.deleteSync(ut),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,O=null,X=0){y.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,y=arguments[1]);const Y=Math.pow(2,-X),k=Math.floor(y.image.width*Y),fe=Math.floor(y.image.height*Y),Te=O!==null?O.x:0,Ce=O!==null?O.y:0;w.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Te,Ce,k,fe),_e.unbindTexture()},this.copyTextureToTexture=function(y,O,X=null,Y=null,k=0){y.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,y=arguments[1],O=arguments[2],k=arguments[3]||0,X=null);let fe,Te,Ce,Pe,He,$e,Le,Qe,ut;const ft=y.isCompressedTexture?y.mipmaps[k]:y.image;X!==null?(fe=X.max.x-X.min.x,Te=X.max.y-X.min.y,Ce=X.isBox3?X.max.z-X.min.z:1,Pe=X.min.x,He=X.min.y,$e=X.isBox3?X.min.z:0):(fe=ft.width,Te=ft.height,Ce=ft.depth||1,Pe=0,He=0,$e=0),Y!==null?(Le=Y.x,Qe=Y.y,ut=Y.z):(Le=0,Qe=0,ut=0);const Vt=Ae.convert(O.format),it=Ae.convert(O.type);let De;O.isData3DTexture?(w.setTexture3D(O,0),De=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),De=F.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),De=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const Nn=F.getParameter(F.UNPACK_ROW_LENGTH),st=F.getParameter(F.UNPACK_IMAGE_HEIGHT),un=F.getParameter(F.UNPACK_SKIP_PIXELS),Ui=F.getParameter(F.UNPACK_SKIP_ROWS),Jt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ft.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),F.pixelStorei(F.UNPACK_SKIP_ROWS,He),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e);const Ss=y.isDataArrayTexture||y.isData3DTexture,pt=O.isDataArrayTexture||O.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Tn=Ee.get(y),ws=Ee.get(O),nn=Ee.get(Tn.__renderTarget),Kn=Ee.get(ws.__renderTarget);_e.bindFramebuffer(F.READ_FRAMEBUFFER,nn.__webglFramebuffer),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Jn=0;Jn<Ce;Jn++)Ss&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ee.get(y).__webglTexture,k,$e+Jn),y.isDepthTexture?(pt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ee.get(O).__webglTexture,k,ut+Jn),F.blitFramebuffer(Pe,He,fe,Te,Le,Qe,fe,Te,F.DEPTH_BUFFER_BIT,F.NEAREST)):pt?F.copyTexSubImage3D(De,k,Le,Qe,ut+Jn,Pe,He,fe,Te):F.copyTexSubImage2D(De,k,Le,Qe,ut+Jn,Pe,He,fe,Te);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else pt?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(De,k,Le,Qe,ut,fe,Te,Ce,Vt,it,ft.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(De,k,Le,Qe,ut,fe,Te,Ce,Vt,ft.data):F.texSubImage3D(De,k,Le,Qe,ut,fe,Te,Ce,Vt,it,ft):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,Le,Qe,fe,Te,Vt,it,ft.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,Le,Qe,ft.width,ft.height,Vt,ft.data):F.texSubImage2D(F.TEXTURE_2D,k,Le,Qe,fe,Te,Vt,it,ft);F.pixelStorei(F.UNPACK_ROW_LENGTH,Nn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),F.pixelStorei(F.UNPACK_SKIP_PIXELS,un),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ui),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Jt),k===0&&O.generateMipmaps&&F.generateMipmap(De),_e.unbindTexture()},this.copyTextureToTexture3D=function(y,O,X=null,Y=null,k=0){return y.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,y=arguments[2],O=arguments[3],k=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,X,Y,k)},this.initRenderTarget=function(y){Ee.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),_e.unbindTexture()},this.resetState=function(){U=0,E=0,D=null,_e.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class z_ extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class H_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ao,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new I;class li{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new li(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class G_ extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=jt,h=jt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo extends Js{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vr=new I,Wr=new I,nc=new vt,Cs=new Yr,wr=new ys,Ta=new I,ic=new I;class ah extends Zt{constructor(e=new dn,t=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vr.fromBufferAttribute(t,s-1),Wr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vr.distanceTo(Wr);e.setAttribute("lineDistance",new En(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(s),wr.radius+=r,e.ray.intersectsSphere(wr)===!1)return;nc.copy(s).invert(),Cs.copy(e.ray).applyMatrix4(nc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){const d=h.getX(v),A=h.getX(v+1),T=Er(this,e,Cs,l,d,A);T&&t.push(T)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(m),d=Er(this,e,Cs,l,v,p);d&&t.push(d)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){const d=Er(this,e,Cs,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=Er(this,e,Cs,l,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Er(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Vr.fromBufferAttribute(a,s),Wr.fromBufferAttribute(a,r),t.distanceSqToSegment(Vr,Wr,Ta,ic)>n)return;Ta.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ta);if(!(l<e.near||l>e.far))return{distance:l,point:ic.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class oh extends ah{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class V_ extends dn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new I,r=new I;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,m=u.count;for(let g=f,v=f+m;g<v;g+=3)for(let p=0;p<3;p++){const d=o.getX(g+p),A=o.getX(g+(p+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,A),sc(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),sc(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new En(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function sc(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class W_ extends dn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Co extends H_{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const rc=new vt;class $_{constructor(e,t,n=0,s=1/0){this.ray=new Yr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rc),this}intersectObject(e,t=!0,n=[]){return Po(e,this,n,t),n.sort(ac),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Po(e[s],this,n,t);return n.sort(ac),n}}function ac(i,e){return i.distance-e.distance}function Po(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Po(r[a],e,t,!0)}}class oc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const lc=new I,Tr=new I;class X_{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){lc.subVectors(e,this.start),Tr.subVectors(this.end,this.start);const n=Tr.dot(Tr);let r=Tr.dot(lc)/n;return t&&(r=Nt(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class q_ extends Di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);const cc={type:"change"},Yo={type:"start"},lh={type:"end"},Ar=new Yr,hc=new ai,Y_=Math.cos(70*Vo.DEG2RAD),wt=new I,Wt=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Aa=1e-6;class j_ extends q_{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Pi,this._lastTargetPosition=new I,this._quat=new Pi().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oc,this._sphericalDelta=new oc,this._scale=1,this._panOffset=new I,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new I,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K_.bind(this),this._onPointerDown=Z_.bind(this),this._onPointerUp=J_.bind(this),this._onContextMenu=rg.bind(this),this._onMouseWheel=tg.bind(this),this._onKeyDown=ng.bind(this),this._onTouchStart=ig.bind(this),this._onTouchMove=sg.bind(this),this._onMouseDown=Q_.bind(this),this._onMouseMove=eg.bind(this),this._interceptControlDown=ag.bind(this),this._interceptControlUp=og.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cc),this.update(),this.state=ht.NONE}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Wt:n>Math.PI&&(n-=Wt),s<-Math.PI?s+=Wt:s>Math.PI&&(s-=Wt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=wt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ar.origin.copy(this.object.position),Ar.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ar.direction))<Y_?this.object.lookAt(this.target):(hc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ar.intersectPlane(hc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Aa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Aa||this._lastTargetPosition.distanceToSquared(this.target)>Aa?(this.dispatchEvent(cc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Wt/60*this.autoRotateSpeed*e:Wt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;wt.copy(s).sub(this.target);let r=wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Z_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function K_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function J_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lh),this.state=ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Q_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ht.DOLLY;break;case os.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ht.ROTATE}break;case os.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Yo)}function eg(i){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function tg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(i.preventDefault(),this.dispatchEvent(Yo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lh))}function ng(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function ig(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ht.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ht.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Yo)}function sg(i){switch(this._trackPointer(i),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ht.NONE}}function rg(i){this.enabled!==!1&&i.preventDefault()}function ag(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function og(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const lg=i=>getComputedStyle(document.documentElement).getPropertyValue(i).trim();function dc(){const i=e=>new Ze(lg(e));return{bg:i("--stage"),neg:i("--neg"),pos:i("--pos"),zero:i("--zero"),grid:i("--cell-line"),empty:i("--empty"),hi:i("--ink"),fill:i("--flow"),frame:i("--frame"),accent:i("--accent")}}class cg{constructor(e,t,n){Ge(this,"renderer");Ge(this,"scene",new z_);Ge(this,"camera",new ln(30,1,1,8e3));Ge(this,"controls");Ge(this,"sheets",[]);Ge(this,"labels",[]);Ge(this,"resized",[]);Ge(this,"themed",[]);Ge(this,"lines",[]);Ge(this,"theme");Ge(this,"onHover",()=>{});Ge(this,"onTick",()=>{});Ge(this,"stage");Ge(this,"labelLayer");Ge(this,"ray",new $_);Ge(this,"pointer",null);Ge(this,"pointerMoved",!1);Ge(this,"dirty",3);Ge(this,"last",performance.now());Ge(this,"fly",null);Ge(this,"framed",null);Ge(this,"userMoved",!1);this.stage=e,this.labelLayer=n,Je.enabled=!1,this.renderer=new B_({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Li,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.theme=dc(),this.scene.background=this.theme.bg.clone(),this.controls=new j_(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.zoomToCursor=!0,this.controls.minDistance=8,this.controls.maxDistance=3200,this.controls.addEventListener("start",()=>{this.fly=null,this.userMoved=!0}),this.controls.addEventListener("change",()=>this.touch()),t.addEventListener("pointermove",s=>this.setPointer(s)),t.addEventListener("pointerdown",s=>this.setPointer(s)),t.addEventListener("pointerleave",()=>{this.pointer=null,this.onHover(null)}),new ResizeObserver(()=>this.resize()).observe(e),this.resize(),requestAnimationFrame(()=>this.loop())}add(e){e.setTheme(this.theme),this.sheets.push(e),this.scene.add(e.group)}addLabel(e,t,n,s=""){const r=document.createElement("div");return r.className=`label ${s}`.trim(),r.innerHTML=e,this.labelLayer.append(r),this.labels.push({el:r,anchor:t,rank:n}),r}addLine(e,t=!1){const n=new qo({color:this.theme.frame});this.lines.push(n);const s=new dn().setFromPoints(e),r=t?new oh(s,n):new ah(s,n);return this.scene.add(r),r}applyTheme(){this.theme=dc(),this.scene.background.copy(this.theme.bg);for(const e of this.sheets)e.setTheme(this.theme);for(const e of this.lines)e.color.copy(this.theme.frame);for(const e of this.themed)e();this.touch()}touch(e=2){this.dirty=Math.max(this.dirty,e)}frame(e,t,n=1.12,s=1.3,r={}){this.framed={box:e.clone(),dir:t.clone().normalize(),pad:n,inset:r},this.userMoved=!1,this.pointerMoved=!0;const[a,o]=this.fit(e,this.framed.dir,n,r);s<=0?(this.camera.position.copy(a),this.controls.target.copy(o),this.fly=null):this.fly={from:[this.camera.position.clone(),this.controls.target.clone()],to:[a,o],t:0,d:s},this.touch()}follow(e,t=.45){this.framed&&!this.userMoved&&this.frame(e,this.framed.dir,this.framed.pad,t,this.framed.inset)}fit(e,t,n,s){const r=e.getCenter(new I),a=new I().crossVectors(new I(0,1,0),t).normalize(),o=new I().crossVectors(t,a).normalize();let l=0,c=0,h=0;for(let U=0;U<8;U++){const E=new I(U&1?e.max.x:e.min.x,U&2?e.max.y:e.min.y,U&4?e.max.z:e.min.z).sub(r);l=Math.max(l,Math.abs(E.dot(a))),c=Math.max(c,Math.abs(E.dot(o))),h=Math.max(h,E.dot(t))}const u=Math.tan(Vo.degToRad(this.camera.fov/2)),f=Math.max(1,this.stage.clientWidth),m=Math.max(1,this.stage.clientHeight),[g,v,p,d]=[s.top??0,s.right??0,s.bottom??0,s.left??0],A=Math.max(.2,1-(d+v)/f),T=Math.max(.2,1-(g+p)/m),b=Math.max(c/(u*T),l/(u*this.camera.aspect*A))*n+h,W=r.clone().addScaledVector(a,(v-d)/f*b*u*this.camera.aspect).addScaledVector(o,(g-p)/m*b*u);return[W.clone().addScaledVector(t,b),W]}setPointer(e){const t=this.renderer.domElement.getBoundingClientRect();this.pointer={x:e.clientX-t.left,y:e.clientY-t.top},this.pointerMoved=!0,this.touch(1)}resize(){const e=Math.max(1,this.stage.clientWidth),t=Math.max(1,this.stage.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();for(const n of this.resized)n(e,t);this.framed&&!this.userMoved&&this.frame(this.framed.box,this.framed.dir,this.framed.pad,this.fly?this.fly.d:0,this.framed.inset),this.touch()}pick(){if(!this.pointer)return;const e=this.stage.clientWidth,t=this.stage.clientHeight;this.ray.setFromCamera(new Ve(this.pointer.x/e*2-1,-(this.pointer.y/t)*2+1),this.camera);const n=this.sheets.filter(s=>s.shown&&s.reveal>.99).map(s=>s.mesh);for(const s of this.ray.intersectObjects(n,!1)){const r=s.object.userData.sheet,a=s.uv?r.cellAt(s.uv):null;if(a){this.onHover({sheet:r,...a,x:this.pointer.x,y:this.pointer.y});return}}this.onHover(null)}placeLabels(){const e=this.stage.clientWidth,t=this.stage.clientHeight,n=new I,s=this.labels.map(a=>({l:a,rank:a.rank()})).sort((a,o)=>(a.rank??1e9)-(o.rank??1e9)),r=[];for(const{l:a,rank:o}of s){n.copy(a.anchor).project(this.camera);let l=o!==null&&n.z>-1&&n.z<1&&Math.abs(n.x)<1.1&&Math.abs(n.y)<1.1;if(l){const c=Math.round((n.x*.5+.5)*e),h=Math.round((-n.y*.5+.5)*t),u=a.el.classList,[f,m]=u.contains("left")?[-1,-.5]:u.contains("side")?[0,-.5]:u.contains("under")?[-.5,0]:[0,-1],g=a.el.offsetWidth,v=a.el.offsetHeight,p=f===0&&m===-1?Math.max(Math.min(c,e-g-4),Math.min(c,4)):c,d=[p+f*g,h+m*v,p+(f+1)*g,h+(m+1)*v],[A,T]=u.contains("axis")?[2,1]:[6,2];l=!r.some(b=>d[0]<b[2]+A&&d[2]>b[0]-A&&d[1]<b[3]+T&&d[3]>b[1]-T),l&&(r.push(d),a.el.style.transform=`translate(${p}px, ${h}px) translate(${f*100}%, ${m*100}%)`)}a.el.classList.toggle("on",l)}}loop(){requestAnimationFrame(()=>this.loop());const e=performance.now(),t=Math.min(.05,(e-this.last)/1e3);if(this.last=e,this.fly){this.fly.t=Math.min(1,this.fly.t+t/this.fly.d);const s=this.fly.t<.5?4*this.fly.t**3:1-(-2*this.fly.t+2)**3/2;this.camera.position.lerpVectors(this.fly.from[0],this.fly.to[0],s),this.controls.target.lerpVectors(this.fly.from[1],this.fly.to[1],s),this.fly.t>=1&&(this.fly=null),this.touch()}this.onTick(t);let n=!1;for(const s of this.sheets)n=s.tick(t)||n;n&&this.touch(),!(this.dirty<=0)&&(this.dirty--,this.controls.update(),(this.pointerMoved||n||this.fly)&&(this.pointerMoved=!1,this.pick()),this.placeLabels(),this.renderer.render(this.scene,this.camera))}}const hg={signed:0,image:1,mask:2,unit:3},$r=4,dg=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ug=`
uniform sampler2D uTex, uHeat;
uniform vec2 uDims;
uniform int uKind;
uniform float uBits, uMin, uMax;
uniform vec4 uPartEnd, uPartScale;
uniform vec2 uBorders, uDividers;
uniform vec3 uNeg, uPos, uZero, uGrid, uEmpty, uBg, uHi, uFill;
uniform float uReveal, uFade, uGap, uSelDim, uHeatOn;
uniform vec4 uSel[${$r}];
uniform int uSelN;
varying vec2 vUv;

float partScale(float col) {
  return col < uPartEnd.x ? uPartScale.x : col < uPartEnd.y ? uPartScale.y : col < uPartEnd.z ? uPartScale.z : uPartScale.w;
}

void main() {
  vec2 cf = vec2(vUv.x, 1.0 - vUv.y) * uDims;       // position in cells, first row on top
  vec2 cell = min(floor(cf), uDims - 1.0);
  vec2 f = cf - cell;
  vec2 px = 1.0 / max(fwidth(cf), vec2(1e-6));      // pixels per cell

  // gap: every cell's content shrinks toward its center (the mesh is scaled up by the same factor)
  vec2 g = (f - 0.5) / (1.0 - uGap) + 0.5;
  if (uGap > 0.0 && (g.x < 0.0 || g.x > 1.0 || g.y < 0.0 || g.y > 1.0)) discard;

  vec3 col;
  if (uKind == 1) {
    col = texture2D(uTex, (cell + g) / uDims).rgb;
    // heat: cells with no share fade toward the neutral color, cells with a large share keep the picture ("light"),
    // or the whole picture is dimmed and cells are filled with the mark color by their share ("mark")
    float heat = uHeatOn > 0.5 ? texture2D(uHeat, (cell + 0.5) / uDims).r : 0.0;
    if (uHeatOn > 1.5) col = mix(mix(uZero, col, 0.38), uFill, heat);
    else if (uHeatOn > 0.5) col = mix(mix(uZero, col, 0.14), col, heat);
  } else {
    vec4 t = texture2D(uTex, vec2(vUv.x, 1.0 - vUv.y));
    float v = uBits == 16.0 ? (t.r * 65280.0 + t.g * 255.0) / 65535.0 : t.r;
    v = uMin + v * (uMax - uMin);
    if (uKind == 0) {
      float s = clamp(v / partScale(cell.x), -1.0, 1.0);
      col = mix(uZero, s < 0.0 ? uNeg : uPos, pow(abs(s), 0.75));
    } else if (uKind == 2) {
      col = mix(uEmpty, uFill, smoothstep(0.35, 0.65, v));
    } else {
      col = mix(uZero, uFill, clamp(v, 0.0, 1.0));
    }
  }

  // not computed yet: empty cells, filled in from the left as uReveal goes 0 -> 1
  float done = step((cell.x + 0.5) / uDims.x, uReveal);
  col = mix(uEmpty, col, done);

  // cell borders, only once cells are big enough on screen to read them
  vec2 d = min(f, 1.0 - f) * px;
  vec2 w = smoothstep(vec2(5.0), vec2(16.0), px) * (uKind == 1 ? vec2(0.0) : uBorders);   // no borders on pictures
  float line = max((1.0 - smoothstep(0.0, 1.0, d.x)) * w.x, (1.0 - smoothstep(0.0, 1.0, d.y)) * w.y);
  col = mix(col, uGrid, line * (uGap > 0.0 ? 0.0 : 0.6));

  // dividers: a 2-pixel line where one part of the sequence ends and the next begins
  if (uDividers.x + uDividers.y > 0.0) {
    float cut = 0.0;
    for (int i = 0; i < 4; i++) {
      float end = i == 0 ? uPartEnd.x : i == 1 ? uPartEnd.y : i == 2 ? uPartEnd.z : uPartEnd.w;
      vec2 far = abs(cf - end) * px;                                 // pixels from this part's end
      cut = max(cut, max(uDividers.x * (1.0 - smoothstep(0.6, 1.4, far.x)), uDividers.y * (1.0 - smoothstep(0.6, 1.4, far.y))));
    }
    col = mix(col, uBg, cut * done);
  }

  // selection: outlined when large on screen, filled when it would be thinner than a few pixels
  if (uSelN > 0) {
    float inside = 0.0, mark = 0.0;
    for (int i = 0; i < ${$r}; i++) {
      if (i >= uSelN) break;
      vec2 size = (uSel[i].zw - uSel[i].xy) * px;                    // selection size in pixels
      vec2 grow = max(vec2(0.0), (vec2(3.0) - size) * 0.5) / px;     // at least 3 px wide
      vec2 lo = uSel[i].xy - grow, hi = uSel[i].zw + grow;
      if (cf.x >= lo.x && cf.x < hi.x && cf.y >= lo.y && cf.y < hi.y) {
        inside = 1.0;
        vec2 e = min(cf - lo, hi - cf) * px;
        float thin = 1.0 - smoothstep(4.0, 9.0, min(size.x, size.y));
        mark = max(mark, max(thin * 0.9, 1.0 - smoothstep(1.5, 2.5, min(e.x, e.y))));
      }
    }
    col = mix(mix(col, uBg, uSelDim * (1.0 - inside)), uHi, mark);
  }

  gl_FragColor = vec4(mix(uBg, col, uFade), 1.0);
}`;class fg{constructor(e){Ge(this,"spec");Ge(this,"mesh");Ge(this,"frame");Ge(this,"group",new is);Ge(this,"reveal",0);Ge(this,"revealTo",0);Ge(this,"fade",1);Ge(this,"fadeTo",1);Ge(this,"gap",0);Ge(this,"gapTo",0);Ge(this,"shown",!0);this.spec=e;const t=e.parts??[{end:e.cols,scale:1}],n=l=>t[Math.min(l,t.length-1)],s=new Un({vertexShader:dg,fragmentShader:ug,side:Cn,uniforms:{uTex:{value:e.texture},uDims:{value:new Ve(e.cols,e.rows)},uKind:{value:hg[e.kind]},uBits:{value:e.bits??8},uMin:{value:e.min??0},uMax:{value:e.max??1},uPartEnd:{value:new lt(n(0).end,n(1).end,n(2).end,n(3).end)},uPartScale:{value:new lt(n(0).scale,n(1).scale,n(2).scale,n(3).scale)},uNeg:{value:new Ze},uPos:{value:new Ze},uZero:{value:new Ze},uGrid:{value:new Ze},uEmpty:{value:new Ze},uBg:{value:new Ze},uHi:{value:new Ze},uFill:{value:new Ze},uReveal:{value:0},uFade:{value:1},uGap:{value:0},uSelDim:{value:.45},uBorders:{value:new Ve(e.borders==="all"||!e.borders?1:0,e.borders==="none"?0:1)},uDividers:{value:new Ve(e.dividers?1:0,e.dividers==="both"?1:0)},uHeat:{value:null},uHeatOn:{value:0},uSel:{value:Array.from({length:$r},()=>new lt)},uSelN:{value:0}}});this.mesh=new bn(new er(e.width,e.height),s),this.mesh.userData.sheet=this;const r=e.width/2,a=e.height/2,o=new dn().setFromPoints([[-r,-a],[r,-a],[r,a],[-r,a]].map(([l,c])=>new I(l,c,0)));this.frame=new oh(o,new qo),this.group.add(this.mesh,this.frame),this.group.position.set(...e.pos)}setTheme(e){const t=this.mesh.material.uniforms;t.uNeg.value.copy(e.neg),t.uPos.value.copy(e.pos),t.uZero.value.copy(e.zero),t.uGrid.value.copy(e.grid),t.uEmpty.value.copy(e.empty),t.uBg.value.copy(e.bg),t.uHi.value.copy(e.hi),t.uFill.value.copy(e.fill),this.frame.material.color.copy(this.spec.trained?e.accent:e.frame)}setTexture(e,t){const n=this.mesh.material.uniforms;n.uTex.value=e,n.uDims.value.set(t.cols,t.rows),n.uBits.value=t.bits??8,n.uMin.value=t.min??0,n.uMax.value=t.max??1,this.spec.cols=t.cols,this.spec.rows=t.rows}setScale(e){this.mesh.material.uniforms.uPartScale.value.setScalar(e)}setHeat(e,t="light"){const n=this.mesh.material.uniforms;n.uHeat.value=e,n.uHeatOn.value=e?t==="mark"?2:1:0}moveTo(e,t,n,s=!1){this.spec.pos=[e,t,n],s&&this.group.position.set(e,t,n)}select(e){const t=this.mesh.material.uniforms,n=Math.min(e.length,$r);for(let s=0;s<n;s++)t.uSel.value[s].set(...e[s]);t.uSelN.value=n}tick(e){const t=(h,u,f)=>{const m=u-h;return Math.abs(m)<.002?u:h+m*Math.min(1,e*f)},n=this.group.position,s=this.reveal+this.fade+this.gap+n.x+n.y+n.z,r=e/(this.spec.sweep??1.1),[a,o,l]=this.spec.pos;n.set(t(n.x,a,9),t(n.y,o,9),t(n.z,l,9)),this.reveal=this.reveal<this.revealTo?Math.min(this.revealTo,this.reveal+r):this.revealTo,this.fade=t(this.fade,this.fadeTo,6),this.gap=t(this.gap,this.gapTo,5);const c=this.mesh.material.uniforms;return c.uReveal.value=this.reveal,c.uFade.value=this.fade,c.uGap.value=this.gap,this.group.scale.setScalar(1/(1-this.gap)),this.group.visible=this.shown,s!==this.reveal+this.fade+this.gap+n.x+n.y+n.z}cellAt(e){const{cols:t,rows:n}=this.spec,s=e.x*t,r=(1-e.y)*n,a=Math.min(t-1,Math.floor(s)),o=Math.min(n-1,Math.floor(r));if(this.gap>0){const l=(s-a-.5)/(1-this.gap)+.5,c=(r-o-.5)/(1-this.gap)+.5;if(l<0||l>1||c<0||c>1)return null}return{col:a,row:o}}box(){const e=1/(1-this.gapTo),[t,n,s]=this.spec.pos,r=this.spec.width/2*e,a=this.spec.height/2*e;return new hn(new I(t-r,n-a,s),new I(t+r,n+a,s))}}const pg={episode:5,frame:158,task:"Put the yellow cube into the black basket"},mg={vlm_layers:16,expert_layers:16,vision_layers:12,vlm_width:960,expert_width:720,vision_width:768,heads:15,patch:16,image:512,chunk:50,max_dim:32,num_steps:10},_g={vision_encoder:86433024,vlm_text_16_layers:204626880,action_expert:98245840,state_proj:31680,trainable:99880992},gg={mask:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],text:["Put"," the"," yellow"," cube"," into"," the"," black"," basket",`
`,"<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>"]},vg={len:177},xg={names:["base","shoulder","elbow","forearm roll","wrist pitch","wrist roll","gripper"],deg:[5.9,32.1,34.5,4,23.4,-8.6,43.9],mean:[17.44,-11.73,37.92,5.48,38.11,-6.56,60.04],norm:[-.42,.945,-.101,-.208,-.668,-.236,-1.35],padded:[-.42,.945,-.101,-.208,-.668,-.236,-1.35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},yg={table_embed:{file:"data/table_embed.png",cols:1024,rows:768,bits:8,min:-1.47314453125,max:1.47314453125,scale:.40234375},table_encoded:{file:"data/table_encoded.png",cols:1024,rows:768,bits:8,min:-9,max:9,scale:2.390625},table_merged:{file:"data/table_merged.png",cols:64,rows:960,bits:16,min:-87,max:38,scale:11.125},wrist_embed:{file:"data/wrist_embed.png",cols:1024,rows:768,bits:8,min:-1.20751953125,max:1.20751953125,scale:.375},wrist_encoded:{file:"data/wrist_encoded.png",cols:1024,rows:768,bits:8,min:-9,max:9,scale:2.4375},wrist_merged:{file:"data/wrist_merged.png",cols:64,rows:960,bits:16,min:-83.5,max:41.25,scale:12.3125},lang_embed:{file:"data/lang_embed.png",cols:48,rows:960,bits:16,min:-2.390625,max:1.109375,scale:.19921875},state_token:{file:"data/state_token.png",cols:1,rows:960,bits:16,min:-.63330078125,max:.74169921875,scale:.5316504240036011},sequence:{file:"data/sequence.png",cols:177,rows:960,bits:16,min:-2704,max:1280,scale:332,parts:[{name:"table camera",start:0,end:64,scale:344},{name:"wrist camera",start:64,end:128,scale:384},{name:"instruction",start:128,end:176,scale:7.59375},{name:"arm readings",start:176,end:177,scale:.53173828125}]},mask:{file:"data/mask.png",cols:177,rows:177,bits:1},exp_x:{file:"data/exp_x.png",cols:50,rows:32,bits:16,min:-3.0703125,max:3.423828125,scale:2.2871875762939453},exp_v:{file:"data/exp_v.png",cols:50,rows:32,bits:16,min:-3.955078125,max:4.03125,scale:2.1665239334106445},exp_last:{file:"data/layers/exp_last_00.png",cols:50,rows:720,bits:8,min:-1.4500000476837158,max:1.4500000476837158,scale:1,norm:!0,parts:[{name:"all",end:50,scale:7.5}]},table_sizes:{file:"data/table_sizes.png",cols:32,rows:32,blocks:12,bits:16,min:4.314220428466797,max:797.6415405273438,scale:418.288818359375},wrist_sizes:{file:"data/wrist_sizes.png",cols:32,rows:32,blocks:12,bits:16,min:4.434171676635742,max:794.8687744140625,scale:403.6320495605469},den_x:{file:"data/den_x.png",cols:50,rows:32,blocks:11,bits:16,min:-3.0703125,max:3.423828125,scale:1.9170112609863281},den_v:{file:"data/den_v.png",cols:50,rows:32,blocks:10,bits:16,min:-3.982421875,max:4.03125,scale:2.125040054321289},tr_a:{file:"data/tr_a.png",cols:50,rows:32,blocks:1,bits:16,min:-1.3662109375,max:1.7900390625,scale:1.349609375},tr_x:{file:"data/tr_x.png",cols:50,rows:32,blocks:3,bits:16,min:-2.763671875,max:3.08203125,scale:1.6816797256469727},tr_u:{file:"data/tr_u.png",cols:50,rows:32,blocks:1,bits:16,min:-3.953125,max:3.923828125,scale:2.4004297256469727},tr_v:{file:"data/tr_v.png",cols:50,rows:32,blocks:3,bits:16,min:-4.234375,max:3.9453125,scale:2.088007926940918},tr_err:{file:"data/tr_err.png",cols:50,rows:32,blocks:3,bits:16,min:0,max:9.082218170166016,scale:3.191195011138916}},Mg=JSON.parse('{"vlm_stream":[{"file":"data/layers/vlm_stream_00.png","cols":177,"rows":960,"bits":8,"min":-4.666666507720947,"max":4.666666507720947,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":7.625},{"name":"padding","end":176,"scale":4.3125},{"name":"arm readings","end":177,"scale":0.5316504240036011}]},{"file":"data/layers/vlm_stream_01.png","cols":177,"rows":960,"bits":8,"min":-4.378255367279053,"max":4.378255367279053,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":8.3125},{"name":"padding","end":176,"scale":7.1875},{"name":"arm readings","end":177,"scale":5.790000915527344}]},{"file":"data/layers/vlm_stream_02.png","cols":177,"rows":960,"bits":8,"min":-4.648648738861084,"max":4.648648738861084,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":8.75},{"name":"padding","end":176,"scale":6.9375},{"name":"arm readings","end":177,"scale":6.494375228881836}]},{"file":"data/layers/vlm_stream_03.png","cols":177,"rows":960,"bits":8,"min":-4.666666507720947,"max":4.666666507720947,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.375},{"name":"padding","end":176,"scale":7.09375},{"name":"arm readings","end":177,"scale":6.6112518310546875}]},{"file":"data/layers/vlm_stream_04.png","cols":177,"rows":960,"bits":8,"min":-5.017543792724609,"max":5.017543792724609,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":386},{"name":"instruction","end":137,"scale":9.57623291015625},{"name":"padding","end":176,"scale":7.125},{"name":"arm readings","end":177,"scale":6.931875228881836}]},{"file":"data/layers/vlm_stream_05.png","cols":177,"rows":960,"bits":8,"min":-5.294797897338867,"max":5.294797897338867,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.625},{"name":"padding","end":176,"scale":7.0625},{"name":"arm readings","end":177,"scale":6.738750457763672}]},{"file":"data/layers/vlm_stream_06.png","cols":177,"rows":960,"bits":8,"min":-5.273237705230713,"max":5.273237705230713,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.625},{"name":"padding","end":176,"scale":7.53125},{"name":"arm readings","end":177,"scale":7.0800018310546875}]},{"file":"data/layers/vlm_stream_07.png","cols":177,"rows":960,"bits":8,"min":-5.225725173950195,"max":5.225725173950195,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.5},{"name":"padding","end":176,"scale":8.25},{"name":"arm readings","end":177,"scale":7.213125228881836}]},{"file":"data/layers/vlm_stream_08.png","cols":177,"rows":960,"bits":8,"min":-4.751028060913086,"max":4.751028060913086,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.5},{"name":"padding","end":176,"scale":9.5},{"name":"arm readings","end":177,"scale":7.2050018310546875}]},{"file":"data/layers/vlm_stream_09.png","cols":177,"rows":960,"bits":8,"min":-5.006622314453125,"max":5.006622314453125,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.5625},{"name":"padding","end":176,"scale":9.4375},{"name":"arm readings","end":177,"scale":7.62812614440918}]},{"file":"data/layers/vlm_stream_10.png","cols":177,"rows":960,"bits":8,"min":-4.837696552276611,"max":4.837696552276611,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.6875},{"name":"padding","end":176,"scale":11.0625},{"name":"arm readings","end":177,"scale":7.84687614440918}]},{"file":"data/layers/vlm_stream_11.png","cols":177,"rows":960,"bits":8,"min":-4.900523662567139,"max":4.900523662567139,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.8125},{"name":"padding","end":176,"scale":10.625},{"name":"arm readings","end":177,"scale":8.301250457763672}]},{"file":"data/layers/vlm_stream_12.png","cols":177,"rows":960,"bits":8,"min":-4.857421875,"max":4.857421875,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":10},{"name":"padding","end":176,"scale":12.0625},{"name":"arm readings","end":177,"scale":8.421253204345703}]},{"file":"data/layers/vlm_stream_13.png","cols":177,"rows":960,"bits":8,"min":-4.896451473236084,"max":4.896451473236084,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382.4453125},{"name":"instruction","end":137,"scale":10.375},{"name":"padding","end":176,"scale":12.4375},{"name":"arm readings","end":177,"scale":9.403751373291016}]},{"file":"data/layers/vlm_stream_14.png","cols":177,"rows":960,"bits":8,"min":-4.881217002868652,"max":4.881217002868652,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":10.88873291015625},{"name":"padding","end":176,"scale":12.5625},{"name":"arm readings","end":177,"scale":9.915000915527344}]},{"file":"data/layers/vlm_stream_15.png","cols":177,"rows":960,"bits":8,"min":-4.900523662567139,"max":4.900523662567139,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":11.5},{"name":"padding","end":176,"scale":13},{"name":"arm readings","end":177,"scale":10.113750457763672}]}],"vlm_update":[{"file":"data/layers/vlm_update_00.png","cols":177,"rows":960,"bits":8,"min":-10.69829273223877,"max":10.69829273223877,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":2},{"name":"wrist camera","end":128,"scale":2},{"name":"instruction","end":137,"scale":3.890625},{"name":"padding","end":176,"scale":4.875},{"name":"arm readings","end":177,"scale":5.839480400085449}]},{"file":"data/layers/vlm_update_01.png","cols":177,"rows":960,"bits":8,"min":-9.466373443603516,"max":9.466373443603516,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":3.5},{"name":"wrist camera","end":128,"scale":3.5},{"name":"instruction","end":137,"scale":2.671875},{"name":"padding","end":176,"scale":1.046875},{"name":"arm readings","end":177,"scale":1.8902734518051147}]},{"file":"data/layers/vlm_update_02.png","cols":177,"rows":960,"bits":8,"min":-3.5,"max":3.5,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.90625},{"name":"padding","end":176,"scale":1.46875},{"name":"arm readings","end":177,"scale":1.8232033252716064}]},{"file":"data/layers/vlm_update_03.png","cols":177,"rows":960,"bits":8,"min":-3.615530014038086,"max":3.615530014038086,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.42535400390625},{"name":"wrist camera","end":128,"scale":4.0625},{"name":"instruction","end":137,"scale":3.390625},{"name":"padding","end":176,"scale":1.36572265625},{"name":"arm readings","end":177,"scale":2.2283594608306885}]},{"file":"data/layers/vlm_update_04.png","cols":177,"rows":960,"bits":8,"min":-3,"max":3,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.5},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.2625770568847656},{"name":"padding","end":176,"scale":2.6328125},{"name":"arm readings","end":177,"scale":1.598750114440918}]},{"file":"data/layers/vlm_update_05.png","cols":177,"rows":960,"bits":8,"min":-1.7777777910232544,"max":1.7777777910232544,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.5},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.1688270568847656},{"name":"padding","end":176,"scale":2.830078125},{"name":"arm readings","end":177,"scale":1.6555469036102295}]},{"file":"data/layers/vlm_update_06.png","cols":177,"rows":960,"bits":8,"min":-2.0982449054718018,"max":2.0982449054718018,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.25},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.28125},{"name":"padding","end":176,"scale":2.8203125},{"name":"arm readings","end":177,"scale":2.051250457763672}]},{"file":"data/layers/vlm_update_07.png","cols":177,"rows":960,"bits":8,"min":-2.3893048763275146,"max":2.3893048763275146,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.59375},{"name":"padding","end":176,"scale":3.65234375},{"name":"arm readings","end":177,"scale":2.198906421661377}]},{"file":"data/layers/vlm_update_08.png","cols":177,"rows":960,"bits":8,"min":-1.8758877515792847,"max":1.8758877515792847,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.7000770568847656},{"name":"padding","end":176,"scale":3.46875},{"name":"arm readings","end":177,"scale":2.3125}]},{"file":"data/layers/vlm_update_09.png","cols":177,"rows":960,"bits":8,"min":-2.3475215435028076,"max":2.3475215435028076,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.4375},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.2985916137695312},{"name":"padding","end":176,"scale":3.578125},{"name":"arm readings","end":177,"scale":2.105156421661377}]},{"file":"data/layers/vlm_update_10.png","cols":177,"rows":960,"bits":8,"min":-2.7759037017822266,"max":2.7759037017822266,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.25},{"name":"padding","end":176,"scale":3.2421875},{"name":"arm readings","end":177,"scale":1.9585158824920654}]},{"file":"data/layers/vlm_update_11.png","cols":177,"rows":960,"bits":8,"min":-2.307692289352417,"max":2.307692289352417,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.5},{"name":"wrist camera","end":128,"scale":6.0625},{"name":"instruction","end":137,"scale":2.609375},{"name":"padding","end":176,"scale":3.75},{"name":"arm readings","end":177,"scale":2.1055471897125244}]},{"file":"data/layers/vlm_update_12.png","cols":177,"rows":960,"bits":8,"min":-2,"max":2,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6},{"name":"wrist camera","end":128,"scale":6},{"name":"instruction","end":137,"scale":3.390625},{"name":"padding","end":176,"scale":3.7890625},{"name":"arm readings","end":177,"scale":2.515781879425049}]},{"file":"data/layers/vlm_update_13.png","cols":177,"rows":960,"bits":8,"min":-1.9323413372039795,"max":1.9323413372039795,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.2100830078125},{"name":"wrist camera","end":128,"scale":6},{"name":"instruction","end":137,"scale":3.4157791137695312},{"name":"padding","end":176,"scale":4.0625},{"name":"arm readings","end":177,"scale":2.5976953506469727}]},{"file":"data/layers/vlm_update_14.png","cols":177,"rows":960,"bits":8,"min":-2.0392701625823975,"max":2.0392701625823975,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.5},{"name":"wrist camera","end":128,"scale":6.375},{"name":"instruction","end":137,"scale":3.5234375},{"name":"padding","end":176,"scale":4.21875},{"name":"arm readings","end":177,"scale":2.592343807220459}]},{"file":"data/layers/vlm_update_15.png","cols":177,"rows":960,"bits":8,"min":-1.6124721765518188,"max":1.6124721765518188,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.25},{"name":"wrist camera","end":128,"scale":6.375},{"name":"instruction","end":137,"scale":3.4609375},{"name":"padding","end":176,"scale":3.5078125},{"name":"arm readings","end":177,"scale":2.953906536102295}]}],"vlm_attn":[{"file":"data/layers/vlm_attn_00.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_01.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_02.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_03.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_04.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_05.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_06.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_07.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_08.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_09.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_10.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_11.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_12.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_13.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_14.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_15.png","cols":177,"rows":177,"bits":8}],"vlm_k":[{"file":"data/layers/vlm_k_00.png","cols":177,"rows":320,"bits":8,"min":-3.0164434909820557,"max":3.0164434909820557,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":3.28125}]},{"file":"data/layers/vlm_k_01.png","cols":177,"rows":320,"bits":8,"min":-2.946666717529297,"max":2.946666717529297,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.6875}]},{"file":"data/layers/vlm_k_02.png","cols":177,"rows":320,"bits":8,"min":-2.4851925373077393,"max":2.4851925373077393,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.375}]},{"file":"data/layers/vlm_k_03.png","cols":177,"rows":320,"bits":8,"min":-2.2020156383514404,"max":2.2020156383514404,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.0625}]},{"file":"data/layers/vlm_k_04.png","cols":177,"rows":320,"bits":8,"min":-2.2661867141723633,"max":2.2661867141723633,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.78125}]},{"file":"data/layers/vlm_k_05.png","cols":177,"rows":320,"bits":8,"min":-2.454545497894287,"max":2.454545497894287,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.8125}]},{"file":"data/layers/vlm_k_06.png","cols":177,"rows":320,"bits":8,"min":-2.7121212482452393,"max":2.7121212482452393,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.125}]},{"file":"data/layers/vlm_k_07.png","cols":177,"rows":320,"bits":8,"min":-2.5068492889404297,"max":2.5068492889404297,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.5625}]},{"file":"data/layers/vlm_k_08.png","cols":177,"rows":320,"bits":8,"min":-3.058823585510254,"max":3.058823585510254,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.25}]},{"file":"data/layers/vlm_k_09.png","cols":177,"rows":320,"bits":8,"min":-2.1641790866851807,"max":2.1641790866851807,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.1875}]},{"file":"data/layers/vlm_k_10.png","cols":177,"rows":320,"bits":8,"min":-2.2804877758026123,"max":2.2804877758026123,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.125}]},{"file":"data/layers/vlm_k_11.png","cols":177,"rows":320,"bits":8,"min":-2.8592593669891357,"max":2.8592593669891357,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.21875}]},{"file":"data/layers/vlm_k_12.png","cols":177,"rows":320,"bits":8,"min":-2.9790210723876953,"max":2.9790210723876953,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.46875}]},{"file":"data/layers/vlm_k_13.png","cols":177,"rows":320,"bits":8,"min":-2.470588207244873,"max":2.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.3125}]},{"file":"data/layers/vlm_k_14.png","cols":177,"rows":320,"bits":8,"min":-3.307692289352417,"max":3.307692289352417,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.875}]},{"file":"data/layers/vlm_k_15.png","cols":177,"rows":320,"bits":8,"min":-3.49367094039917,"max":3.49367094039917,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.9375}]}],"vlm_v":[{"file":"data/layers/vlm_v_00.png","cols":177,"rows":320,"bits":8,"min":-4.7222819328308105,"max":4.7222819328308105,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":0.0712890625}]},{"file":"data/layers/vlm_v_01.png","cols":177,"rows":320,"bits":8,"min":-1.794392466545105,"max":1.794392466545105,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":0.8359375}]},{"file":"data/layers/vlm_v_02.png","cols":177,"rows":320,"bits":8,"min":-1.5388296842575073,"max":1.5388296842575073,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.1796875}]},{"file":"data/layers/vlm_v_03.png","cols":177,"rows":320,"bits":8,"min":-1.7191780805587769,"max":1.7191780805587769,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.140625}]},{"file":"data/layers/vlm_v_04.png","cols":177,"rows":320,"bits":8,"min":-1.4702702760696411,"max":1.4702702760696411,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.4453125}]},{"file":"data/layers/vlm_v_05.png","cols":177,"rows":320,"bits":8,"min":-1.5641428232192993,"max":1.5641428232192993,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.671875}]},{"file":"data/layers/vlm_v_06.png","cols":177,"rows":320,"bits":8,"min":-1.590243935585022,"max":1.590243935585022,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.6015625}]},{"file":"data/layers/vlm_v_07.png","cols":177,"rows":320,"bits":8,"min":-1.5500218868255615,"max":1.5500218868255615,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.743927001953125}]},{"file":"data/layers/vlm_v_08.png","cols":177,"rows":320,"bits":8,"min":-1.5064871311187744,"max":1.5064871311187744,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.75}]},{"file":"data/layers/vlm_v_09.png","cols":177,"rows":320,"bits":8,"min":-1.5098813772201538,"max":1.5098813772201538,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.9765625}]},{"file":"data/layers/vlm_v_10.png","cols":177,"rows":320,"bits":8,"min":-1.9787532091140747,"max":1.9787532091140747,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.634552001953125}]},{"file":"data/layers/vlm_v_11.png","cols":177,"rows":320,"bits":8,"min":-1.4728682041168213,"max":1.4728682041168213,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":2.015625}]},{"file":"data/layers/vlm_v_12.png","cols":177,"rows":320,"bits":8,"min":-1.5267857313156128,"max":1.5267857313156128,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.75}]},{"file":"data/layers/vlm_v_13.png","cols":177,"rows":320,"bits":8,"min":-1.436619758605957,"max":1.436619758605957,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.6640625}]},{"file":"data/layers/vlm_v_14.png","cols":177,"rows":320,"bits":8,"min":-1.4817813634872437,"max":1.4817813634872437,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.9296875}]},{"file":"data/layers/vlm_v_15.png","cols":177,"rows":320,"bits":8,"min":-1.545454502105713,"max":1.545454502105713,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":2.0625}]}],"exp_stream":[{"file":"data/layers/exp_stream_00.png","cols":50,"rows":720,"bits":8,"min":-1.488465428352356,"max":1.488465428352356,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":1.947265625}]},{"file":"data/layers/exp_stream_01.png","cols":50,"rows":720,"bits":8,"min":-1.446969747543335,"max":1.446969747543335,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.0625}]},{"file":"data/layers/exp_stream_02.png","cols":50,"rows":720,"bits":8,"min":-1.4154930114746094,"max":1.4154930114746094,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.21875}]},{"file":"data/layers/exp_stream_03.png","cols":50,"rows":720,"bits":8,"min":-1.4733333587646484,"max":1.4733333587646484,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.34375}]},{"file":"data/layers/exp_stream_04.png","cols":50,"rows":720,"bits":8,"min":-1.4620252847671509,"max":1.4620252847671509,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.46875}]},{"file":"data/layers/exp_stream_05.png","cols":50,"rows":720,"bits":8,"min":-1.4967741966247559,"max":1.4967741966247559,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.421875}]},{"file":"data/layers/exp_stream_06.png","cols":50,"rows":720,"bits":8,"min":-1.470588207244873,"max":1.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.390625}]},{"file":"data/layers/exp_stream_07.png","cols":50,"rows":720,"bits":8,"min":-1.5133333206176758,"max":1.5133333206176758,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.34375}]},{"file":"data/layers/exp_stream_08.png","cols":50,"rows":720,"bits":8,"min":-1.4900661706924438,"max":1.4900661706924438,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.359375}]},{"file":"data/layers/exp_stream_09.png","cols":50,"rows":720,"bits":8,"min":-1.4451613426208496,"max":1.4451613426208496,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.421875}]},{"file":"data/layers/exp_stream_10.png","cols":50,"rows":720,"bits":8,"min":-1.4500000476837158,"max":1.4500000476837158,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.5}]},{"file":"data/layers/exp_stream_11.png","cols":50,"rows":720,"bits":8,"min":-1.470588207244873,"max":1.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.65625}]},{"file":"data/layers/exp_stream_12.png","cols":50,"rows":720,"bits":8,"min":-1.497267723083496,"max":1.497267723083496,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.859375}]},{"file":"data/layers/exp_stream_13.png","cols":50,"rows":720,"bits":8,"min":-1.6057692766189575,"max":1.6057692766189575,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":3.25}]},{"file":"data/layers/exp_stream_14.png","cols":50,"rows":720,"bits":8,"min":-1.5666667222976685,"max":1.5666667222976685,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":3.75}]},{"file":"data/layers/exp_stream_15.png","cols":50,"rows":720,"bits":8,"min":-1.5119047164916992,"max":1.5119047164916992,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":5.25}]}],"exp_update":[{"file":"data/layers/exp_update_00.png","cols":50,"rows":720,"bits":8,"min":-1.6307685375213623,"max":1.6307685375213623,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.37427234649658203}]},{"file":"data/layers/exp_update_01.png","cols":50,"rows":720,"bits":8,"min":-1.4249999523162842,"max":1.4249999523162842,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.625}]},{"file":"data/layers/exp_update_02.png","cols":50,"rows":720,"bits":8,"min":-1.3928571939468384,"max":1.3928571939468384,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6015625}]},{"file":"data/layers/exp_update_03.png","cols":50,"rows":720,"bits":8,"min":-1.3269401788711548,"max":1.3269401788711548,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.7168159484863281}]},{"file":"data/layers/exp_update_04.png","cols":50,"rows":720,"bits":8,"min":-1.4461538791656494,"max":1.4461538791656494,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5078125}]},{"file":"data/layers/exp_update_05.png","cols":50,"rows":720,"bits":8,"min":-1.4171974658966064,"max":1.4171974658966064,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.61328125}]},{"file":"data/layers/exp_update_06.png","cols":50,"rows":720,"bits":8,"min":-1.4177215099334717,"max":1.4177215099334717,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6171875}]},{"file":"data/layers/exp_update_07.png","cols":50,"rows":720,"bits":8,"min":-1.3915441036224365,"max":1.3915441036224365,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.53125}]},{"file":"data/layers/exp_update_08.png","cols":50,"rows":720,"bits":8,"min":-1.4036144018173218,"max":1.4036144018173218,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6484375}]},{"file":"data/layers/exp_update_09.png","cols":50,"rows":720,"bits":8,"min":-1.399999976158142,"max":1.399999976158142,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5859375}]},{"file":"data/layers/exp_update_10.png","cols":50,"rows":720,"bits":8,"min":-1.3831775188446045,"max":1.3831775188446045,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.626953125}]},{"file":"data/layers/exp_update_11.png","cols":50,"rows":720,"bits":8,"min":-1.3591549396514893,"max":1.3591549396514893,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5546875}]},{"file":"data/layers/exp_update_12.png","cols":50,"rows":720,"bits":8,"min":-1.7169811725616455,"max":1.7169811725616455,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.828125}]},{"file":"data/layers/exp_update_13.png","cols":50,"rows":720,"bits":8,"min":-1.4272300004959106,"max":1.4272300004959106,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.83203125}]},{"file":"data/layers/exp_update_14.png","cols":50,"rows":720,"bits":8,"min":-1.5213675498962402,"max":1.5213675498962402,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":1.828125}]},{"file":"data/layers/exp_update_15.png","cols":50,"rows":720,"bits":8,"min":-1.4177215099334717,"max":1.4177215099334717,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.46875}]}],"exp_attn":[{"file":"data/layers/exp_attn_00.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_01.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_02.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_03.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_04.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_05.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_06.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_07.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_08.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_09.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_10.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_11.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_12.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_13.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_14.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_15.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false}]}'),bg={table:[{file:"data/layers/vis_table_00.png",cols:1024,rows:768,bits:8,min:-.683935546875,max:.683935546875,scale:.3419677734375},{file:"data/layers/vis_table_01.png",cols:1024,rows:768,bits:8,min:-.73447265625,max:.73447265625,scale:.367236328125},{file:"data/layers/vis_table_02.png",cols:1024,rows:768,bits:8,min:-.825439453125,max:.825439453125,scale:.4127197265625},{file:"data/layers/vis_table_03.png",cols:1024,rows:768,bits:8,min:-.86923828125,max:.86923828125,scale:.434619140625},{file:"data/layers/vis_table_04.png",cols:1024,rows:768,bits:8,min:-.90966796875,max:.90966796875,scale:.454833984375},{file:"data/layers/vis_table_05.png",cols:1024,rows:768,bits:8,min:-.8557617187500001,max:.8557617187500001,scale:.42788085937500003},{file:"data/layers/vis_table_06.png",cols:1024,rows:768,bits:8,min:-.9500976562500001,max:.9500976562500001,scale:.47504882812500004},{file:"data/layers/vis_table_07.png",cols:1024,rows:768,bits:8,min:-1.0376953125000001,max:1.0376953125000001,scale:.5188476562500001},{file:"data/layers/vis_table_08.png",cols:1024,rows:768,bits:8,min:-1.4015625,max:1.4015625,scale:.70078125},{file:"data/layers/vis_table_09.png",cols:1024,rows:768,bits:8,min:-1.8328125000000002,max:1.8328125000000002,scale:.9164062500000001},{file:"data/layers/vis_table_10.png",cols:1024,rows:768,bits:8,min:-2.7087890625,max:2.7087890625,scale:1.35439453125},{file:"data/layers/vis_table_11.png",cols:1024,rows:768,bits:8,min:-6.95390625,max:6.95390625,scale:3.476953125}],wrist:[{file:"data/layers/vis_wrist_00.png",cols:1024,rows:768,bits:8,min:-.576123046875,max:.576123046875,scale:.2880615234375},{file:"data/layers/vis_wrist_01.png",cols:1024,rows:768,bits:8,min:-.64013671875,max:.64013671875,scale:.320068359375},{file:"data/layers/vis_wrist_02.png",cols:1024,rows:768,bits:8,min:-.778271484375,max:.778271484375,scale:.3891357421875},{file:"data/layers/vis_wrist_03.png",cols:1024,rows:768,bits:8,min:-.8321777343750001,max:.8321777343750001,scale:.41608886718750004},{file:"data/layers/vis_wrist_04.png",cols:1024,rows:768,bits:8,min:-.8625,max:.8625,scale:.43125},{file:"data/layers/vis_wrist_05.png",cols:1024,rows:768,bits:8,min:-.82880859375,max:.82880859375,scale:.414404296875},{file:"data/layers/vis_wrist_06.png",cols:1024,rows:768,bits:8,min:-.9500976562500001,max:.9500976562500001,scale:.47504882812500004},{file:"data/layers/vis_wrist_07.png",cols:1024,rows:768,bits:8,min:-1.09833984375,max:1.09833984375,scale:.549169921875},{file:"data/layers/vis_wrist_08.png",cols:1024,rows:768,bits:8,min:-1.4689453125,max:1.4689453125,scale:.73447265625},{file:"data/layers/vis_wrist_09.png",cols:1024,rows:768,bits:8,min:-1.9810546875000001,max:1.9810546875000001,scale:.9905273437500001},{file:"data/layers/vis_wrist_10.png",cols:1024,rows:768,bits:8,min:-2.7626953125,max:2.7626953125,scale:1.38134765625},{file:"data/layers/vis_wrist_11.png",cols:1024,rows:768,bits:8,min:-7.061718750000001,max:7.061718750000001,scale:3.5308593750000004}]},Sg={typical_size:{table:[7.2,6.4,7.1,6.5,6.7,6,6.7,7.2,9.7,12.2,17.8,222.4],wrist:[6.8,6,6.9,6.4,6.4,5.8,6.7,7.7,10.3,13.6,18.5,218.3]},largest_size:{table:[20,14,13,15,29,119,139,148,153,155,158,798],wrist:[20,14,13,15,29,117,137,145,150,151,155,795]},big:{table:[1,1,0,2,14,24,24,24,24,24,24,215],wrist:[1,1,0,2,21,34,35,35,35,35,34,214]},jump_layer:5,jump_ratio:20,big_in_black_bar:{table:12},big_in_both:20,last_layer_growth:12},wg={picture_token_size:4340,picture_update_share:[.0112,.0176,.0125,.0131,.0127,.0123,.013,.0149,.0148,.0176,.0172,.0182,.0175,.0184,.018,.018],readings_token_size:[7.1,78.1,87.6,79.3,80.2,80,81.4,87.9,88.1,90.8,91.8,99,105.2,105.2,113.5,120.8,136.1],word_jump_layer:3,word_jump_tokens:[1,5],word_sizes_before_after:[[147.6999969482422,140.1999969482422,136.89999389648438,146.3000030517578,137.60000610351562,139.10000610351562,131.5,147.39999389648438,142.6999969482422],[142.89999389648438,1789.0999755859375,134.39999389648438,143.39999389648438,132.8000030517578,1651,130.8000030517578,141.8000030517578,210.8000030517578]],readings_sink_share_by_layer:[.009,.064,.327,.136,.887,.884,.772,.696,.74,.844,.772,.782,.663,.373,.628,.45],times:[1,.9,.8,.7,.6,.5,.4,.3,.2,.1]},Eg={names:["base","shoulder","elbow","forearm roll","wrist pitch","wrist roll","gripper"],mean:[17.439,-11.73,37.922,5.481,38.111,-6.557,60.044],std:[27.488,46.399,33.921,7.132,21.999,8.668,11.966],plan_deg:[[6.81,31.94,33.88,4.14,23.16,-8.44,44.56],[6.7,32.31,33.78,4.22,23.45,-8.59,44],[5.66,31.2,34.94,4.16,22.66,-8.49,43.91],[7.62,31.22,34.84,4.49,22.16,-8.31,43.91],[6.37,30.97,35.16,4.57,23.69,-8.54,44.44],[7.02,32.12,35.22,4.56,23.44,-8.41,44.09],[6.44,30.39,36.03,5,23.66,-8.59,43.97],[6.12,30.83,36.62,4.02,25.06,-8.77,44.28],[6.92,27.16,36.38,1.05,26.22,-8.73,43.97],[6.47,29.16,36.19,1.46,26.89,-8.66,44.19],[7.28,27.86,35.09,1.93,28.27,-8.38,44.16],[6.39,24.02,35.59,1.24,29.98,-8.62,44.12],[6.93,22.2,35.38,.09,34.31,-8.84,44.81],[6.86,21.91,35.06,-.22,33.88,-8.72,44.34],[6.96,17.73,34.62,-.31,36.28,-9,45.12],[6.89,17.61,34.66,.12,37.62,-8.47,44.94],[6.55,17.34,34.53,.81,40.31,-8.7,44.53],[6.98,12.51,34.56,.33,42.47,-8.73,44.44],[7.05,10.31,33.91,.93,43.84,-8.9,44.91],[7.73,8.43,32.91,1.01,45.34,-8.55,44.88],[6.88,8.98,33.12,.78,46.22,-8.69,44.56],[6.87,6.23,31.28,.73,51.81,-8.33,44.34],[7.49,3.6,30.48,.19,52.91,-8.51,44.66],[7.06,3.14,28.52,-.18,55.16,-8.29,44.28],[7.14,2.75,27.83,-.53,57.16,-8.27,44.12],[6.93,.41,25.42,-.29,60.53,-8.31,44.19],[7.51,-1.66,23.36,.15,62.44,-8.67,43.94],[7.17,-1.3,18.7,.88,67.38,-8.34,44.41],[7.89,-1.4,14.52,1.26,70.69,-8.56,43.56],[8.1,-2,11.34,.93,73.31,-8.27,44.03],[7.25,-1.7,8.48,1.13,73.88,-8.18,43.97],[8.36,-1.11,7.26,2.4,74,-8.18,44.69],[10.55,-2.62,8.34,1.9,73.38,-8.17,44.12],[14.09,-1.23,8.11,2.46,72.44,-8.1,44.44],[13.4,-2.15,8.65,3.43,73,-7.6,43.94],[17.16,.25,10.66,3.4,72.88,-7.99,43.94],[15.63,.88,7.13,5.34,74.44,-7.96,44.22],[20.94,-.22,7.41,5.54,73.94,-7.48,43.81],[21.06,2.02,5.41,7,72.88,-6.71,43.59],[23.84,2.58,4.98,6.88,73.38,-6.81,44],[24.17,3.38,6.09,7.65,71.88,-7.27,43.94],[24.33,5.27,5.46,9.63,73.75,-7.61,44.59],[29.66,5.46,5.69,9.16,71.56,-7.06,43.88],[34.03,5.79,4.28,9.79,73.06,-7.09,44.16],[40.66,7.65,.66,9.78,74.19,-7.03,44.06],[46.03,9.36,1.36,9.29,71.5,-7.11,43.88],[47.03,8.89,3.23,10.66,69.94,-7.3,44.72],[45.09,11.16,.96,9.89,70.94,-7.2,44.28],[49.44,13.59,-1.03,10.58,70.94,-7.27,44.12],[51.94,13.02,-.77,10.66,70.44,-6.72,44.12]],hand_deg:[[5.9,32.09,34.5,4,23.41,-8.6,43.91],[5.9,32.09,34.5,4,23.41,-8.6,43.81],[5.9,32.09,34.5,4,23.41,-8.6,43.81],[5.8,32.09,34.5,4,23.41,-8.6,43.81],[5.7,32.09,34.5,3.8,23.41,-8.6,43.91],[5.7,31.91,34.5,1.2,23.59,-8.6,43.91],[5.7,31.91,34.5,1.2,23.59,-8.6,43.91],[5.7,31.7,34.5,-.5,24.59,-8.5,43.91],[5.7,31.59,34.5,-.4,25.8,-8.4,43.91],[5.6,31.2,34.5,-.4,26,-8.3,43.91],[5.7,30.3,34.41,-.4,26.5,-8.3,43.91],[5.7,29.3,34.5,-.4,28.3,-8.5,43.91],[5.6,28,34.5,-.5,30.59,-8.5,44],[5.7,26.59,34.5,-.5,32.19,-8.5,44],[5.8,24.7,34.5,-.5,34.09,-8.6,44],[5.8,22.41,34.5,-.5,36,-8.6,43.91],[5.8,22.41,34.5,-.5,36,-8.6,43.91],[5.9,20,34.5,-.5,38,-8.6,43.91],[5.9,17.5,34.5,-.5,39.81,-8.6,43.91],[5.9,15.5,34.41,-.5,42.19,-8.6,43.91],[6,13.7,34.5,-.5,44.59,-8.6,43.91],[6,11.4,34.41,-.5,47,-8.5,43.91],[5.9,8.6,34.41,-.4,49.69,-8.2,43.91],[5.9,5.5,33.41,-.4,52.59,-8,43.91],[5.9,3.5,30,-.5,57.5,-8,43.91],[6,2.6,25.7,-.4,62.5,-8.1,43.91],[6,2.6,25.7,-.4,62.5,-8.1,43.91],[6.2,2,21.7,-.3,66.5,-8,43.91],[6.4,1.5,17.41,.3,70.12,-8.3,43.91],[6.4,1.2,13.4,.4,73.5,-8.4,43.91],[6.4,1.3,9.5,1.1,75.5,-8.6,43.91],[6.5,1.5,6.5,2.7,76.62,-8.5,43.91],[6.5,1.8,4.6,3.8,77.5,-8.6,43.91],[7.2,1.8,4,4.3,77.5,-8.3,43.91],[10.5,1.8,4,3.6,76.5,-7.8,43.91],[14.2,2.3,4,4.1,75.31,-7.7,43.91],[14.2,2.3,4,4.1,75.31,-7.7,43.91],[17.91,2.9,4,4.7,74,-7.6,43.91],[21.3,3.2,4.1,4.7,73.69,-7.6,43.91],[24.41,4,4,5.4,73.81,-7.7,44],[27.91,5,4,6.9,73.69,-7.7,43.91],[30.91,6.5,4,8.8,73.69,-7.7,43.91],[34.19,8,4,9.8,73.5,-7.7,43.81],[37.5,8.7,4,10.3,72.31,-7.7,43.69],[40.81,9.4,4,10.2,69.69,-7.7,43.69],[43.91,10.8,4,10.8,67.12,-7.7,43.69],[43.91,10.8,4,10.8,67.12,-7.7,43.69],[47.31,12.2,4,11.2,65.69,-7.6,43.81],[49.91,13.8,4,11.4,64.5,-7.6,43.81],[52.09,14.9,3.3,11.4,63.81,-7.7,43.81]],gap_deg:[1.69,2.91,1.93,1.05,2.11,.31,.39],max_speed:[66.2,48.4,46.6,29.6,55.9,7.6,8.4],times:[1,.9,.8,.7,.6,.5,.4,.3,.2,.1],guess_gap:[.077,.067,.062,.059,.052,.043,.033,.022,.013,0],train:{taus:[.1,.5,.9],loss7:[.2208,.0281,.0112]},log:{steps:5e3,batch:32,every:100,loss:[.856,.278,.219,.192,.171,.164,.156,.145,.131,.127,.123,.114,.113,.103,.097,.094,.093,.087,.087,.079,.074,.073,.07,.067,.067,.064,.062,.061,.058,.059,.055,.055,.052,.054,.051,.048,.049,.049,.049,.045,.047,.05,.046,.048,.047,.048,.046,.046,.048,.047],held_out:[[2500,.2388],[5e3,.2921]],minutes:17,passes:18.13}},de={frame:pg,shape:mg,params:_g,lang:gg,prefix:vg,state:xg,sheets:yg,layers:Mg,vision_layers:bg,vision:Sg,stats:wg,plan:Eg},Tg=i=>new URL(i,document.baseURI).href;function ch(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error(`could not load ${i}`)),n.src=Tg(i)})}async function Ag(i,e){const t=new Bt(await ch(i));return t.flipY=!1,t.colorSpace=Pn,t.minFilter=$n,t.magFilter=Mn,t.anisotropy=e,t.needsUpdate=!0,t}function It(i,e,t,n=1){const s=new G_(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),e,t,cn,Dn);return s.colorSpace=Pn,s.magFilter=jt,s.minFilter=$n,s.generateMipmaps=!0,s.anisotropy=n,s.needsUpdate=!0,s}async function Zs(i,e){const t=await ch(i.file),n=document.createElement("canvas");n.width=t.naturalWidth,n.height=t.naturalHeight;const s=n.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});s.drawImage(t,0,0);const r=s.getImageData(0,0,n.width,n.height).data,a=i.min??0,o=(i.max??1)-a,l=n.width;return{info:i,rgba:r,texture:It(r,n.width,n.height,e),at(c,h){const u=(h*l+c)*4,f=i.bits===16?(r[u]*256+r[u+1])/65535:r[u]/255;return a+f*o}}}function Rg(i,e,t){const n=new Uint8Array(i.length*4);return i.forEach((s,r)=>{const a=Math.round((Math.min(t,Math.max(e,s))-e)/(t-e)*65535);n.set([a>>8,a&255,0,255],r*4)}),{texture:It(n,i.length,1),min:e,max:t}}class Cg{constructor(e){Ge(this,"unit");Ge(this,"tokens");Ge(this,"width");const{cols:t,rows:n}=e.info;this.tokens=t,this.width=n;const s=new Float32Array(t*n);for(let r=0;r<n;r++){let a=0;for(let o=0;o<t;o++)a+=s[o*n+r]=e.at(o,r);a/=t;for(let o=0;o<t;o++)s[o*n+r]-=a}for(let r=0;r<t;r++){let a=0;for(let o=0;o<n;o++)a+=s[r*n+o]**2;a=Math.sqrt(a)||1;for(let o=0;o<n;o++)s[r*n+o]/=a}this.unit=s}to(e){const{unit:t,tokens:n,width:s}=this,r=new Float32Array(n),a=e*s;for(let o=0;o<n;o++){let l=0;const c=o*s;for(let h=0;h<s;h++)l+=t[a+h]*t[c+h];r[o]=l}return r}}const ds=["Overview","The input","Images into patches","The vision encoder","One sequence","The vision-language model","The action expert","From noise to a plan","On the arm","How it was trained","The whole path"],nt=i=>[`table_${i}`,`wrist_${i}`],$t=i=>i.toLocaleString("en-US"),we=de,es=we.lang.mask.filter(Boolean).length,Ps=we.lang.mask.length,Pg=we.lang.text.slice(0,es).map(i=>`<span class="tok">${i===`
`?"line break":i.trim()}</span>`).join(" "),ss=we.sheets.sequence.parts,Ls=(we.shape.image/we.shape.patch)**2,Lo=we.shape.image/we.shape.patch,Ds=ss[0].end-ss[0].start,hh=128,Lg=hh/(we.shape.patch*4)*(Lo/4),Dg=we.state.norm[6],Sn=we.stats,uc=i=>`${Math.round(i/1e6)}M`,fc=Sn.picture_update_share.map(i=>i*100),Do=Sn.word_jump_layer,Ug=Math.round(Sn.word_sizes_before_after[1][Sn.word_jump_tokens[0]]/Sn.word_sizes_before_after[0][Sn.word_jump_tokens[0]]),Ig=we.lang.text[Sn.word_jump_tokens[0]].trim(),Ng=Math.round(Sn.readings_sink_share_by_layer[Do+1]*100),Us=["look_table","look_wrist","look_words","look_state"],ze=we.plan,pc=["tr_a","tr_noise","tr_x","tr_u","tr_v","tr_err"],mc=(i,e)=>`<a href="#" class="jump" data-round="${e}">${i}</a>`,Is=(i,e)=>`<a href="#" class="jump" data-vlayer="${e}">${i}</a>`,ri=we.vision,Yi=ri.jump_layer,ji=we.shape.vision_layers-1,Ns=(i,e,t)=>`<a href="#" class="jump" data-layer="${e}"${t===void 0?"":` data-head="${t}"`}>${i}</a>`,yt=[{id:"overview",chapter:0,title:"One plan, from pictures to numbers",body:`
      <p>This is SmolVLA, a small vision-language-action model, making one plan for a Unitree D1 robot arm:
      ${we.shape.chunk} actions, the next 5 seconds of movement. It was fine-tuned on 30 hand-guided demos of one
      task: "${we.frame.task}".</p>
      <p>Every colored cell is a real number from one run of the fine-tuned model on one frame of a demo
      (demo ${we.frame.episode+1}, frame ${we.frame.frame}): the moment of the grasp.</p>
      <p>Each sheet is a table of numbers. One <b>column</b> is one <b>token</b>: a piece of a picture, a word,
      or the arm's readings. The rows are the numbers that describe it.</p>
      <p>The tour follows the numbers all the way: from the two camera pictures, through both stacks of
      layers, to 5 seconds of joint angles. The last chapters show what the arm does with them and how the
      model was trained.</p>
      <p class="how">Drag to turn, scroll to zoom, right-drag to move. Point at a sheet to see a cell's value and
      where it came from.</p>`,focus:"all",view:{ids:["table_raw","state_in","sequence","mask","ghost_vlm","ghost_expert","plot","loss"],dir:[1,.42,.42],pad:.94}},{id:"cameras",chapter:1,title:"Two cameras",body:`
      <p>Ten times a second the policy gets one 640 x 480 picture from the <b>table camera</b> and one from the
      <b>wrist camera</b>.</p>
      <p>In this frame the gripper is closing on the yellow cube. A hand is in the picture because the demos were
      recorded by guiding the arm by hand.</p>`,focus:nt("raw"),view:{ids:nt("raw"),dir:[.16,.1,1],pad:1.2}},{id:"readings",chapter:1,title:"The arm's own readings",body:`
      <p>Seven numbers: six joint angles and the gripper opening, in degrees.</p>
      <p class="mono">[${we.state.deg.join(", ")}]</p>
      <p>Each is rescaled with that joint's average and spread over the 30 demos, so 0 means "as usual". The
      gripper's ${Dg.toFixed(2)} says it is more closed than usual: it is on the cube.</p>
      <p>The list is then padded with zeros to ${we.shape.max_dim} numbers, the size the pretrained model expects.
      Only the first 7 cells carry anything.</p>`,focus:["state_in"],view:{ids:["state_in"],dir:[.1,.12,1],pad:1.7}},{id:"instruction",chapter:1,title:"The instruction",body:`
      <p>"${we.frame.task}" is cut into ${es} tokens:</p>
      <p>${Pg}</p>
      <p>There are ${Ps} slots. The other ${Ps-es} hold padding, which the model is told to ignore.
      The same sentence was on every frame of every demo.</p>`,focus:["lang_in"],view:{ids:["lang_in"],dir:[.1,.12,1],pad:1.5}},{id:"resize",chapter:2,title:"Fit into a square",body:`
      <p>The vision encoder takes ${we.shape.image} x ${we.shape.image} pictures. Each camera picture is shrunk to
      512 x 384 and placed at the bottom of the square. The ${hh} rows on top are filled with black.</p>
      <p>The black bar keeps the picture's shape, where stretching it to a square would distort it. The base model
      was trained on pictures fitted the same way, so this is what it expects. The price is detail: a quarter of
      the square shows nothing.</p>
      <p>Pixel values are also moved from 0..1 to -1..1.</p>`,focus:nt("512"),view:{ids:nt("512"),dir:[.5,.3,1],pad:1.3}},{id:"patches",chapter:2,title:`Cut into ${$t(Ls)} patches`,body:`
      <p>The square is cut into ${Lo} x ${Lo} patches of ${we.shape.patch} x ${we.shape.patch} pixels.</p>
      <p>From here on the model never sees a whole picture. It works on this list of ${$t(Ls)} patches per
      camera.</p>`,focus:nt("512"),view:{ids:nt("512"),dir:[.18,.12,1],pad:1.15}},{id:"embed",chapter:2,title:"Each patch becomes a column",body:`
      <p>A patch is 16 x 16 pixels in 3 colors: ${we.shape.vision_width} numbers. One matrix multiplication turns
      them into ${we.shape.vision_width} new numbers, and a learned position code is added so the model knows where
      the patch was.</p>
      <p>The sheet has ${$t(Ls)} columns, one per patch in reading order, and ${we.shape.vision_width} rows.</p>
      <p class="how">Point at a column: its patch lights up in the picture behind.</p>`,focus:[...nt("embed"),...nt("512")],labels:nt("embed"),view:{ids:nt("embed"),dir:[.55,.34,1],pad:1.3}},{id:"encoder",chapter:3,title:`${we.shape.vision_layers} layers look across the picture`,body:`
      <p>The columns pass through ${we.shape.vision_layers} transformer layers (SigLIP,
      ${Math.round(we.params.vision_encoder/1e6)}M parameters), one per outline. In every layer each patch looks
      at all the others, so a column ends up describing its patch in context.</p>
      <p>Move the slider: the filled sheets show the columns after each layer, each layer on its own color
      scale. ${Is(`Layer&nbsp;${ji+1}`,ji)} makes every column about ${ri.last_layer_growth}
      times larger, and one last rescaling gives the sheets in front.</p>
      <p>This part is <b>frozen</b>: fine-tuning on the demos did not change it.</p>`,focus:[...nt("layer"),...nt("encoded"),...nt("embed"),"ghost_vision"],labels:["wrist_layer",...nt("encoded"),"ghost_vision","table_embed"],view:{ids:[...nt("embed"),...nt("encoded")],dir:[1,.42,.5],pad:1.1},slider:"vision",vlayer:0},{id:"encoder-sizes",chapter:3,title:"A few columns grow huge",body:`
      <p>On the right, blue marks the patches whose column is much larger than the rest after the chosen
      layer.</p>
      <p>In ${Is("the first layers",0)} hardly any stand out. At ${Is(`layer&nbsp;${Yi+1}`,Yi)},
      ${ri.big.table[Yi]} patches of the table picture and ${ri.big.wrist[Yi]} of the wrist picture have
      columns up to ${ri.jump_ratio} times larger, and they keep them through
      ${Is(`layer&nbsp;${ji}`,ji-1)}. ${ri.big_in_both} are at the same places in both pictures,
      and ${ri.big_in_black_bar.table} of the table picture's ${ri.big.table[Yi]} lie in the black bar.</p>
      <p>Vision transformers are known to keep a few oversized columns as scratch space.
      ${Is(`Layer&nbsp;${ji+1}`,ji)} then rewrites every column.</p>`,focus:[...nt("pick"),...nt("size")],alone:!0,view:{ids:[...nt("pick"),...nt("size")],dir:[.1,.06,1],pad:1.1,room:{top:104,bottom:40}},slider:"vision",vlayer:Yi},{id:"similar",chapter:3,title:"What the encoder changed",body:`
      <p>Point at a patch in the small picture. The two maps show how similar every other patch's column is to
      the one you picked.</p>
      <p><b>Before</b> the encoder, patches that look alike light up: the same brightness and color.</p>
      <p><b>After</b> it, far fewer do. A column now also carries what surrounds the patch, so two patches match
      only when they show the same thing in the same setting. Try the cube in the wrist picture.</p>`,focus:[...nt("pick"),...nt("before"),...nt("after")],alone:!0,view:{ids:[...nt("pick"),...nt("after")],dir:[.1,.06,1],pad:1.22}},{id:"merge",chapter:3,title:"16 patches merge into 1",body:`
      <p>${$t(Ls)} tokens per camera would be slow for the language model. So every 4 x 4 block of patches is
      merged: their 16 columns are stacked into one column of ${$t(16*we.shape.vision_width)} numbers, and one
      matrix shrinks it to ${we.shape.vlm_width}.</p>
      <p>Each camera is now <b>${Ds} tokens</b>, one per 64 x 64-pixel square. The first ${Lg}
      cover only the black bar.</p>`,focus:[...nt("groups"),...nt("merged")],labels:["table_merged","table_groups","wrist_merged","wrist_groups"],view:{ids:[...nt("groups"),...nt("merged")],dir:[.85,.36,.7],pad:1.12}},{id:"place-images",chapter:4,title:`Picture tokens take the first ${ss[1].end} places`,body:`
      <p>The model reads one sequence of ${we.prefix.len} tokens, each ${we.shape.vlm_width} numbers.</p>
      <p>The table camera's ${Ds} tokens come first, then the wrist camera's ${Ds}. On the way in,
      their values are multiplied by 31, the square root of ${we.shape.vlm_width}.</p>`,focus:["sequence",...nt("merged")],labels:["sequence",...nt("merged")],view:{ids:["sequence"],dir:[.3,.26,1],pad:1.18}},{id:"place-words",chapter:4,title:`The instruction takes the next ${Ps}`,body:`
      <p>Each word token is looked up in the model's vocabulary table, which gives a column of
      ${we.shape.vlm_width} numbers, also multiplied by 31. The ${Ps-es} padding slots are in the
      sequence but masked out.</p>
      <p>The parts are colored on separate scales because they differ so much in size: picture tokens reach
      about ${Math.round(ss[0].scale/10)*10}, words about ${Math.round(ss[2].scale)}, the arm's readings
      about ${ss[3].scale.toFixed(1)}.</p>`,focus:["sequence","lang_embed"],view:{ids:["sequence","lang_embed"],dir:[.5,.3,1],pad:1.12}},{id:"place-state",chapter:4,title:"The arm's readings take the last place",body:`
      <p>The ${we.shape.max_dim} padded readings go through one small matrix to become a single token of
      ${we.shape.vlm_width} numbers: the thin sheet on the right.</p>
      <p>That matrix (${$t(we.params.state_proj)} numbers) is <b>trained</b>: it is one of the few parts outside
      the action expert that the fine-tuning changed.</p>`,focus:["sequence","state_token"],view:{ids:["sequence","state_token"],dir:[.5,.3,1],pad:1.32}},{id:"who-sees-whom",chapter:4,title:"Who may look at whom",body:`
      <p>Tokens exchange information by looking at each other. This grid is the rule: a <b>row</b> is the token
      that looks, a <b>column</b> is what it may look at, both in the order of the sequence. Blue means it
      may.</p>
      <p>The large blue square is the ${2*Ds} picture tokens and the ${es} words, which all look at
      each other but not at the arm's readings. The ${Ps-es} padding slots neither look nor are
      looked at. The readings token, the thin blue line at the bottom, looks at pictures, words and itself.</p>
      <p class="how">Point at a cell to read who looks at whom.</p>`,focus:["mask","sequence"],view:{ids:["mask"],dir:[0,.05,1],pad:1.06,room:{top:62,right:128,bottom:112}}},{id:"vlm-stack",chapter:5,title:`${we.shape.vlm_layers} layers rework the sequence`,body:`
      <p>The sequence now passes through the <b>vision-language model</b>: ${we.shape.vlm_layers} layers,
      ${uc(we.params.vlm_text_16_layers)} parameters, frozen.</p>
      <p>The lower sheet is the sequence as it enters a layer. The upper sheet is what that layer <b>adds</b>:
      every token first looks at the others, then is reworked on its own, and both results are added to its
      column. The next layer starts from the sum.</p>
      <p>Move the slider to walk through the layers. A picture token's column has a length of about
      ${$t(Sn.picture_token_size)}, and a layer changes it by only ${Math.min(...fc).toFixed(0)} to
      ${Math.max(...fc).toFixed(0)} percent. The readings token starts small and grows
      ${Math.round(Sn.readings_token_size[1]/Sn.readings_token_size[0])} times in the first layer alone.</p>
      <p class="how">Each part of a sheet is colored on its own scale.</p>`,focus:["vlm_stream","vlm_update","ghost_vlm"],labels:["vlm_update","vlm_stream","ghost_vlm"],view:{ids:["vlm_stream","vlm_update"],dir:[.5,.26,1],pad:1.22},slider:"layer",layer:0},{id:"vlm-attention",chapter:5,title:"Tokens look at each other",body:`
      <p>This grid is the looking inside one layer, averaged over its ${we.shape.heads} attention heads. A
      <b>row</b> is the token that looks, a <b>column</b> is what it looks at, and brightness is the share of
      its attention.</p>
      <p>Point at a row: the tiles beside the grid show where that token looks in the two pictures, the words
      and the readings.</p>
      <p>Go to ${Ns(`layer ${Do+2}`,Do+1)}: two bright columns appear. They are the two tokens
      for the word "${Ig}". One layer earlier their columns suddenly grew ${Ug} times larger, and from here
      on the other tokens put much of their attention on them (the readings token about ${Ng}%).
      Language models are known to turn low-content tokens into fixed reference points like this.</p>`,focus:["vlm_attn",...Us],labels:["vlm_attn",...Us],view:{ids:["vlm_attn",...Us],dir:[.14,.08,1],pad:1.22},alone:!0,slider:"layer",look:"vlm",row:we.prefix.len-1},{id:"vlm-keys",chapter:5,title:"What each layer leaves for the expert",body:`
      <p>To be looked at, every token publishes two things in every layer: a <b>key</b>, which says what it is
      about, and a <b>value</b>, which is what it passes on to whoever looks. Each is
      ${we.layers.vlm_k[0].rows} numbers.</p>
      <p>The vision-language model runs <b>once</b> per plan. The keys and values of all
      ${we.shape.vlm_layers} layers are stored. The action expert reads them again and again: they are its only
      window onto the pictures, the words and the readings.</p>
      <p>The model's final output, after the last layer, is never used.</p>`,focus:["vlm_k","vlm_v","vlm_stream","vlm_update","ghost_vlm"],labels:["vlm_k","vlm_v","vlm_update","vlm_stream"],view:{ids:["vlm_stream","vlm_v"],dir:[.5,.26,1],pad:1.2},slider:"layer"},{id:"expert-input",chapter:6,title:`${we.shape.chunk} action tokens, starting from noise`,body:`
      <p>The plan is ${we.shape.chunk} actions, one per 0.1 s. Each action is ${we.shape.max_dim} numbers, the size
      the pretrained model expects; this arm uses the first 7.</p>
      <p>At the start the plan is <b>pure random noise</b>: the small sheet at the back.</p>
      <p>One matrix turns each action's ${we.shape.max_dim} numbers into ${we.shape.expert_width}. Two more mix in
      a code for the noise level (1.0 here: all noise). The result is ${we.shape.chunk} action tokens, the larger
      sheet. These matrices are <b>trained</b>.</p>`,focus:["exp_x","exp_stream","ghost_expert"],labels:["exp_stream","exp_x","ghost_expert"],view:{ids:["exp_x","exp_stream"],dir:[.8,.34,1],pad:1.7},alone:!0,layer:0},{id:"expert-stack",chapter:6,title:"A second stack, beside the first",body:`
      <p>The <b>action expert</b> is its own stack of ${we.shape.expert_layers} layers, working on the
      ${we.shape.chunk} action tokens. Its columns are ${we.shape.expert_width} numbers. This is the part the 30
      demos trained: ${uc(we.params.action_expert)} parameters.</p>
      <p>As before, the lower sheet enters the layer and the upper sheet is what the layer adds.</p>
      <p>The layers alternate. In layers 1, 3, 5, ... an action token looks at the sequence's stored keys and
      values and at the action tokens before it. In layers 2, 4, 6, ... it looks at the sequence only.</p>`,focus:["exp_stream","exp_update","ghost_expert"],labels:["exp_update","exp_stream","ghost_expert"],view:{ids:["exp_stream","exp_update"],dir:[.55,.26,1],pad:1.6},alone:!0,slider:"layer"},{id:"expert-look",chapter:6,title:"Where the action tokens look",body:`
      <p>Each row is an action token, each column a token of the sequence. Below it: where the marked action
      token looks, laid over the two pictures. Point at another row to mark it.</p>
      <p>Averaged over the ${we.shape.heads} heads, the looking is spread out. Single heads are far more focused.
      Try:</p>
      <ul>
        <li>${Ns("Layer 2, head 13",1,12)}: the bin</li>
        <li>${Ns("Layer 6, head 5",5,4)}: the gripper and the cube</li>
        <li>${Ns("Layer 14, head 11",13,10)}: the cube in the wrist picture</li>
        <li>${Ns("Layer 4, all heads",3,-1)}: much of it on the arm's readings</li>
      </ul>
      <p>Nobody told the expert where to look. It comes from training: the pretraining on other robots, then
      the 30 demos.</p>`,focus:["exp_attn","exp_own",...Us],labels:["exp_attn",...Us,"exp_own"],view:{ids:["exp_attn","exp_own","look_wrist","look_words"],dir:[.1,.07,1],pad:1.1},alone:!0,slider:"layer",heads:!0,layer:1,head:-1,look:"exp",row:0},{id:"expert-output",chapter:6,title:"Out comes a direction",body:`
      <p>After the last layer, one more matrix turns each action token back into ${we.shape.max_dim} numbers.</p>
      <p>The result is not a plan yet. It is a <b>direction</b>: for every number of the noisy plan, which way
      to move it and how far. The top 7 rows, the ones this arm uses, are the strong ones.</p>
      <p>This was step 1 of ${we.shape.num_steps}.</p>`,focus:["exp_last","exp_v","exp_stream","ghost_expert"],labels:["exp_v","exp_last"],view:{ids:["exp_last","exp_v"],dir:[.8,.34,1],pad:1.7},alone:!0,layer:we.shape.expert_layers-1},{id:"loop-step",chapter:7,title:"One round: a tenth of the way",body:`
      <p>The direction answers one question: how do I get from the real plan to this noise? So the plan lies
      the other way.</p>
      <p>The noisy plan is moved one tenth of the way against the direction:</p>
      <p class="mono">new plan = plan − 0.1 x direction</p>
      <p>Its noise level drops from 1.0 to 0.9.</p>
      <p>On the right is the same thing as curves: the ${ze.names.length} numbers of each action that this arm
      uses, one band per joint, ${we.shape.chunk} actions from left to right. Right now they are pure noise.</p>`,focus:["den_x","den_v","plot"],labels:["plot","den_x","den_v"],view:{ids:["den_x","den_v","plot"],dir:[.1,.08,1],pad:1.16},alone:!0,slider:"round",round:0,plot:{units:"norm"}},{id:"loop-rounds",chapter:7,title:`${ze.times.length} rounds`,body:`
      <p>Drag the slider. In every round the action expert runs again, all ${we.shape.expert_layers} layers, on
      the new and less noisy plan. It reads the same stored keys and values, so the vision-language model does
      not run again.</p>
      <p>The curves calm down round by round. After round ${ze.times.length} the noise level is 0 and what is
      left is the plan: ${we.shape.chunk} actions, 5 seconds.</p>
      <p>The dashed curves are what the hand did in the demo from this frame on. The model does not see them
      here; they are drawn for comparison.</p>`,focus:["den_x","den_v","plot"],labels:["plot","den_x","den_v"],view:{ids:["den_x","den_v","plot"],dir:[.1,.08,1],pad:1.16},alone:!0,slider:"round",round:0,plot:{units:"norm",hand:!0}},{id:"loop-guess",chapter:7,title:"The first direction already knew the way",body:`
      <p>The blue curves show where each round's direction points: the plan it implies.</p>
      <p>Go back to ${mc("the start",0)}. The plan is still pure noise, yet the blue curves already lie
      close to the final plan: ${ze.guess_gap[0].toFixed(2)} away on average, in units where the noise has a
      spread of 1. ${mc(`By round ${ze.times.length}`,ze.times.length-1)} the gap is gone.</p>
      <p>With nothing but noise to go on, the best the expert can do is point at the average of all plans that
      fit what the cameras show. The demos all did the same thing, so that average is already a good plan. Had
      they shown two different ways, the average would be a blur of both, and the later rounds are what lets
      the model settle on one.</p>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,slider:"round",round:0,plot:{units:"norm",guess:!0,hand:!0}},{id:"loop-degrees",chapter:7,title:"Back to degrees",body:`
      <p>The model works in rescaled numbers. To get angles, each of the ${ze.names.length} numbers is multiplied
      by that joint's spread and its average is added back. The other ${we.shape.max_dim-ze.names.length} numbers
      of each action are dropped: they were never trained and are still noise.</p>
      <p>The result is the plan in degrees. From this frame on it stays within
      ${Math.min(...ze.gap_deg).toFixed(1)}° to ${Math.max(...ze.gap_deg).toFixed(1)}° of what the hand
      did, on average per joint.</p>
      <p>This frame comes from one of the demos, most likely one the model trained on, so a close match is
      expected here.</p>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,round:ze.times.length,plot:{units:"deg",hand:!0}},{id:"arm-commands",chapter:8,title:"From plan to commands",body:`
      <p>Every 0.1 s the next action's ${ze.names.length} angles go to our plugin, which turns them into commands
      for the D1's own controller:</p>
      <ul>
        <li>No joint's target moves faster than 40° per second. This plan asks for up to
        ${Math.round(Math.max(...ze.max_speed))}° per second (the ${ze.names[ze.max_speed.indexOf(Math.max(...ze.max_speed))]}),
        so on those stretches the arm falls behind the plan.</li>
        <li>At most 5 commands per second: sent faster, the controller starts skipping its joint reports.</li>
        <li>A closing gripper is sent 8° further than planned, so that it squeezes the cube instead of
        just touching it.</li>
      </ul>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,round:ze.times.length,plot:{units:"deg"}},{id:"arm-replan",chapter:8,title:"Only the first 2 seconds run",body:`
      <p>The arm does not play all ${we.shape.chunk} actions. When 30 are left, a new plan is started from new
      pictures.</p>
      <p>While that plan is computed the arm keeps following the old one, and the new plan is steered to agree
      with the actions that run in the meantime. Then it takes over. This is called real-time chunking.</p>
      <p>So about the first 2.3 s of each plan reach the arm: the solid part. The rest is replaced by the next
      plan, which has seen newer pictures.</p>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,round:ze.times.length,plot:{units:"deg",executed:23}},{id:"train-mix",chapter:9,title:"Training starts from a demo",body:`
      <p>Training runs the same machinery, with one difference: the answer is known.</p>
      <p>Take a frame of a demo and the ${we.shape.chunk} actions the hand made from there (left). Draw fresh
      noise (middle) and a noise level between 0 and 1. Mix the two (right).</p>
      <p>The mix is what the action expert gets, together with that frame's pictures, the instruction and the
      readings. The slider switches between three noise levels.</p>`,focus:["tr_a","tr_noise","tr_x"],view:{ids:["tr_a","tr_noise","tr_x"],dir:[.1,.08,1],pad:1.3},alone:!0,slider:"noise",noise:1},{id:"train-target",chapter:9,title:"The answer is known",body:`
      <p>The expert should output the direction from the demo to the noise: noise minus demo (bottom left).
      That target is the same at every noise level.</p>
      <p>Its actual answer is in the middle, and on the right is the error, squared. Training nudges the
      expert's ${(we.params.trainable/1e6).toFixed(1)}M numbers so that this error shrinks. Only the top
      ${ze.names.length} rows count. The other ${we.shape.max_dim-ze.names.length} are never trained, which is
      why their error stays large.</p>
      <p>On those ${ze.names.length} rows the average error here is ${ze.train.loss7[0].toFixed(2)} at noise level
      ${ze.train.taus[0]}, ${ze.train.loss7[1].toFixed(3)} at ${ze.train.taus[1]} and ${ze.train.loss7[2].toFixed(3)}
      at ${ze.train.taus[2]}. Low noise is the hard case: the input is almost the demo itself, and the expert
      has to name the little noise that was added.</p>`,focus:pc,labels:["tr_u","tr_v","tr_err","tr_a","tr_noise","tr_x"],view:{ids:pc,dir:[.1,.08,1],pad:1.22},alone:!0,slider:"noise"},{id:"train-run",chapter:9,title:`${$t(ze.log.steps*ze.log.batch)} of these`,body:`
      <p>The training run did this ${$t(ze.log.steps)} times with ${ze.log.batch} frames each, drawing new noise and a new
      noise level every time: ${$t(ze.log.steps*ze.log.batch)} examples in ${ze.log.minutes} minutes on one GPU,
      about ${Math.round(ze.log.passes)} passes over the 27 demos it trained on.</p>
      <p>The solid curve is the error during training. It falls from ${ze.log.loss[0].toFixed(2)} to
      ${ze.log.loss[ze.log.loss.length-1].toFixed(3)}.</p>
      <p>The dashed line is the same error on the 3 demos kept out of training. It is much higher, and it was
      higher at step ${$t(ze.log.held_out[1][0])} (${ze.log.held_out[1][1].toFixed(2)}) than at step
      ${$t(ze.log.held_out[0][0])} (${ze.log.held_out[0][1].toFixed(2)}). The expert kept getting better at the
      demos it trained on, but not at ones it had not seen. That is a reason to test the
      step-${$t(ze.log.held_out[0][0])} checkpoint on the arm too.</p>`,focus:["loss"],view:{ids:["loss"],dir:[.1,.08,1],pad:1.45},alone:!0},{id:"end",chapter:10,title:"The whole path",body:`
      <p>Two pictures, ${ze.names.length} readings and one sentence go in.</p>
      <p>${$t(Ls)} patches per picture become ${Ds} tokens. ${we.prefix.len} tokens pass through
      ${we.shape.vlm_layers} frozen layers, which leave their keys and values behind.</p>
      <p>${we.shape.chunk} noisy action tokens pass through ${we.shape.expert_layers} trained layers
      ${ze.times.length} times, reading those keys and values, and come out as 5 seconds of joint angles. The arm
      runs the first 2 seconds, and the model plans again.</p>
      <p>On the real arm, this policy picked up the cube and dropped it in the bin on its own in 1 of 5
      recorded tests. In 3 more the first approach pushed the cube, and a hand put it back.</p>`,focus:"all",view:{ids:["table_raw","state_in","sequence","mask","ghost_vlm","ghost_expert","plot","loss"],dir:[1,.42,.42],pad:.94}}],Fg=i=>{const e=yt.findIndex(t=>t.id===i);if(e<0)throw new Error(`no step "${i}"`);return e},_c=new hn,Rr=new I;class dh extends W_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new En(e,3)),this.setAttribute("uv",new En(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Co(t,6,1);return this.setAttribute("instanceStart",new li(n,3,0)),this.setAttribute("instanceEnd",new li(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Co(t,6,1);return this.setAttribute("instanceColorStart",new li(n,3,0)),this.setAttribute("instanceColorEnd",new li(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new V_(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),_c.setFromBufferAttribute(t),this.boundingBox.union(_c))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rr.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rr)),Rr.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Rr));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Me.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ve(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};qt.line={uniforms:$o.merge([Me.common,Me.fog,Me.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class jo extends Un{static get type(){return"LineMaterial"}constructor(e){super({uniforms:$o.clone(qt.line.uniforms),vertexShader:qt.line.vertexShader,fragmentShader:qt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ra=new lt,gc=new I,vc=new I,Pt=new lt,Lt=new lt,An=new lt,Ca=new I,Pa=new vt,Dt=new X_,xc=new I,Cr=new hn,Pr=new ys,Rn=new lt;let Ln,Ai;function yc(i,e,t){return Rn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Rn.multiplyScalar(1/Rn.w),Rn.x=Ai/t.width,Rn.y=Ai/t.height,Rn.applyMatrix4(i.projectionMatrixInverse),Rn.multiplyScalar(1/Rn.w),Math.abs(Math.max(Rn.x,Rn.y))}function Og(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Dt.start.fromBufferAttribute(s,o),Dt.end.fromBufferAttribute(r,o),Dt.applyMatrix4(t);const c=new I,h=new I;Ln.distanceSqToSegment(Dt.start,Dt.end,h,c),h.distanceTo(c)<Ai*.5&&e.push({point:h,pointOnLine:c,distance:Ln.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function kg(i,e,t){const n=e.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-e.near;Ln.at(1,An),An.w=1,An.applyMatrix4(e.matrixWorldInverse),An.applyMatrix4(n),An.multiplyScalar(1/An.w),An.x*=r.x/2,An.y*=r.y/2,An.z=0,Ca.copy(An),Pa.multiplyMatrices(e.matrixWorldInverse,a);for(let f=0,m=h;f<m;f++){if(Pt.fromBufferAttribute(l,f),Lt.fromBufferAttribute(c,f),Pt.w=1,Lt.w=1,Pt.applyMatrix4(Pa),Lt.applyMatrix4(Pa),Pt.z>u&&Lt.z>u)continue;if(Pt.z>u){const T=Pt.z-Lt.z,b=(Pt.z-u)/T;Pt.lerp(Lt,b)}else if(Lt.z>u){const T=Lt.z-Pt.z,b=(Lt.z-u)/T;Lt.lerp(Pt,b)}Pt.applyMatrix4(n),Lt.applyMatrix4(n),Pt.multiplyScalar(1/Pt.w),Lt.multiplyScalar(1/Lt.w),Pt.x*=r.x/2,Pt.y*=r.y/2,Lt.x*=r.x/2,Lt.y*=r.y/2,Dt.start.copy(Pt),Dt.start.z=0,Dt.end.copy(Lt),Dt.end.z=0;const v=Dt.closestPointToPointParameter(Ca,!0);Dt.at(v,xc);const p=Vo.lerp(Pt.z,Lt.z,v),d=p>=-1&&p<=1,A=Ca.distanceTo(xc)<Ai*.5;if(d&&A){Dt.start.fromBufferAttribute(l,f),Dt.end.fromBufferAttribute(c,f),Dt.start.applyMatrix4(a),Dt.end.applyMatrix4(a);const T=new I,b=new I;Ln.distanceSqToSegment(Dt.start,Dt.end,b,T),t.push({point:b,pointOnLine:T,distance:Ln.origin.distanceTo(b),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}class Bg extends bn{constructor(e=new dh,t=new jo({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)gc.fromBufferAttribute(t,a),vc.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+gc.distanceTo(vc);const r=new Co(s,2,1);return e.setAttribute("instanceDistanceStart",new li(r,1,0)),e.setAttribute("instanceDistanceEnd",new li(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ln=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;Ai=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Pr.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Ai*.5;else{const u=Math.max(s.near,Pr.distanceToPoint(Ln.origin));c=yc(s,u,l.resolution)}if(Pr.radius+=c,Ln.intersectsSphere(Pr)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Cr.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Ai*.5;else{const u=Math.max(s.near,Cr.distanceToPoint(Ln.origin));h=yc(s,u,l.resolution)}Cr.expandByScalar(h),Ln.intersectsBox(Cr)!==!1&&(n?Og(this,t):kg(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Ra),this.material.uniforms.resolution.value.set(Ra.z,Ra.w))}}class Uo extends dh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class zg extends Bg{constructor(e=new Uo,t=new jo({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class Mc{constructor(e,t,n,s){Ge(this,"group",new is);Ge(this,"series",new Map);Ge(this,"lo");Ge(this,"hi");Ge(this,"loTo");Ge(this,"hiTo");Ge(this,"settled",!1);this.rows=e,this.points=t,this.width=n,this.rowHeight=s,this.lo=new Float32Array(e).fill(-1),this.hi=new Float32Array(e).fill(1),this.loTo=this.lo.slice(),this.hiTo=this.hi.slice()}addSeries(e,t,n,s=!1){const r=new jo({linewidth:n,dashed:s,dashSize:1.1,gapSize:.9,worldUnits:!1}),a=Array.from({length:this.rows},()=>{const o=new zg(new Uo,r);return o.visible=!1,o.position.z=.25,this.group.add(o),o});this.series.set(e,{role:t,lines:a,material:r,now:null,to:null,xs:null,from:0,until:this.points})}set(e,t,n={}){const s=this.series.get(e);if(this.settled=!1,!t){s.to=s.now=null;for(const o of s.lines)o.visible=!1;return}const r=t.map(o=>Float32Array.from(o)),a=s.now&&s.now.length===r.length&&s.now[0].length===r[0].length;s.to=r,(!a||n.instant)&&(s.now=r.map(o=>o.slice())),s.xs=n.xs??null,s.from=n.from??0,s.until=n.until??r[0].length}setRange(e,t,n,s=!1){this.loTo[e]=t,this.hiTo[e]=n,s&&(this.lo[e]=t,this.hi[e]=n),this.settled=!1}range(e){return[this.loTo[e],this.hiTo[e]]}setColors(e){for(const t of this.series.values())t.material.color.copy(t.role==="later"?e.plan:e[t.role])}setResolution(e,t){for(const n of this.series.values())n.material.resolution.set(e,t)}at(e,t,n){const s=this.rows*this.rowHeight/2-e*this.rowHeight,r=this.rowHeight*.14,a=n===void 0?1:Math.min(1,Math.max(0,(n-this.loTo[e])/(this.hiTo[e]-this.loTo[e]||1))),o=n===void 0?s:s-this.rowHeight+r+a*(this.rowHeight-2*r);return new I(-this.width/2+(t+.5)/this.points*this.width,o,0).add(this.group.position)}tick(e){if(this.settled)return!1;const t=Math.min(1,e*9);let n=!1;const s=(a,o,l)=>{const c=o-a;return Math.abs(c)<l*.002?o:(n=!0,a+c*t)};for(let a=0;a<this.rows;a++){const o=Math.abs(this.hiTo[a]-this.loTo[a])||1;this.lo[a]=s(this.lo[a],this.loTo[a],o),this.hi[a]=s(this.hi[a],this.hiTo[a],o)}const r=this.rowHeight*.14;for(const a of this.series.values())if(!(!a.now||!a.to))for(let o=0;o<a.lines.length;o++){const l=a.now[o],c=a.to[o],h=Math.abs(this.hi[o]-this.lo[o])||1,u=this.rows*this.rowHeight/2-(o+1)*this.rowHeight+r,f=[];for(let g=0;g<l.length;g++){if(l[g]=s(l[g],c[g],h),g<a.from||g>=a.until)continue;const v=a.xs?a.xs[g]:g,p=Math.min(1.08,Math.max(-.08,(l[g]-this.lo[o])/h));f.push(-this.width/2+(v+.5)/this.points*this.width,u+p*(this.rowHeight-2*r),0)}const m=a.lines[o];m.visible=f.length>=6,m.visible&&(m.geometry.dispose(),m.geometry=new Uo().setPositions(f),a.material.dashed&&m.computeLineDistances())}return this.settled=!n,!0}}const Ut=de.plan,Ht=de.shape.chunk,rn=de.shape.max_dim,Xt=Ut.names.length,Rt=Ut.times.length,La=Ut.train.taus,bc=' <i class="tag trained">trained</i>',Lr=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−"),Sc=i=>`action ${i+1} of ${Ht} (${(i*.1).toFixed(1)} s ahead)`,Hg=i=>i<Xt?Ut.names[i]:"not used by this arm",uh=i=>i[0].map((e,t)=>i.map(n=>n[t])),Da=uh(Ut.plan_deg),Ua=uh(Ut.hand_deg);function Gg(i){const{view:e,add:t,at:n}=i,s={round:0,noise:1};let r={units:"norm"};const a=i.endZ+64,o=a+84,l=Ht*.8,c=rn*.6,h=new Map,u=(he,se,ue,_e,Ne,Ee,w={})=>{const _=de.sheets[se],B=new Uint8Array(Ht*rn*4).fill(128),L=It(B,Ht,rn),z=t({id:he,title:he,note:"",kind:"signed",cols:Ht,rows:rn,width:l,height:c,pos:_e,texture:L,bits:16,min:_.min,max:_.max,parts:[{end:Ht,scale:_.scale??1}],revealAt:n(Ne),label:Ee,valueAt:(re,ne)=>{var ae;return((ae=h.get(he).values)==null?void 0:ae.at(re,ue()*rn+ne))??null},...w}),N={id:he,info:_,bytes:B,texture:L,values:null,block:ue,sheet:z};return h.set(he,N),Zs(_,1).then(re=>{N.values=re,f(N),Ye()}),z},f=he=>{if(!he.values)return;const se=Ht*rn*4;he.bytes.set(he.values.rgba.subarray(he.block()*se,(he.block()+1)*se)),he.texture.needsUpdate=!0,e.touch(3)},m=he=>1-he/Rt,g=-58;u("den_x","den_x",()=>s.round,[g,15,a],"loop-step",()=>`<b>${s.round===Rt?"The plan":"The noisy plan"}</b><span>noise level ${m(s.round).toFixed(1)}</span>`,{trained:!0}),u("den_v","den_v",()=>Math.min(s.round,Rt-1),[g,-15,a],"loop-step",()=>`<b>The direction</b>${bc}<span>from round ${Math.min(s.round,Rt-1)+1}</span>`,{trained:!0,when:()=>s.round<Rt});const v=()=>La[s.noise],p=[-26,20,66];u("tr_a","tr_a",()=>0,[p[0],15,o],"train-mix",()=>`<b>A demo: what the hand did</b><span>${Ht} actions x ${rn} numbers, ${Xt} used</span>`),u("tr_noise","den_x",()=>0,[p[1],15,o],"train-mix",()=>`<b>Fresh noise</b><span>${Ht} x ${rn}</span>`),u("tr_x","tr_x",()=>s.noise,[p[2],15,o],"train-mix",()=>`<b>Their mix, noise level ${v()}</b><span>${v()} x noise + ${(1-v()).toFixed(1)} x demo</span>`),u("tr_u","tr_u",()=>0,[p[0],-15,o],"train-target",()=>"<b>The target: noise minus demo</b><span>the same at every noise level</span>"),u("tr_v","tr_v",()=>s.noise,[p[1],-15,o],"train-target",()=>`<b>The expert's answer</b>${bc}<span>from the mix at noise level ${v()}</span>`,{trained:!0});const d=de.sheets.tr_err;u("tr_err","tr_err",()=>s.noise,[p[2],-15,o],"train-target",()=>`<b>The error, squared</b><span>top ${Xt} rows count: ${Ut.train.loss7[s.noise].toFixed(3)} on average</span>`,{kind:"unit",min:d.min,max:d.max,parts:[{end:Ht,scale:1}]});const A=(he,se)=>It(new Uint8Array(he*se*4),he,se),T=9,b=110,W=[50,0,a],U=(he,se)=>`<i class="sw ${he}"></i>${se}`,E=t({id:"plot",title:"plot",note:"",kind:"unit",cols:Ht,rows:Xt,width:b,height:Xt*T,pos:W,texture:A(Ht,Xt),bits:8,min:0,max:1,revealAt:n("loop-step"),borders:"rows",label:()=>{const he=[U("plan",r.executed?"the part that runs on the arm":s.round===Rt?"the plan":s.round===0?"pure noise":`after round ${s.round}`)];return r.executed&&he.push(U("later","replaced by the next plan")),r.guess&&s.round<Rt&&he.push(U("guess","where the direction points")),r.hand&&he.push(U("hand","what the hand did")),`<b>The ${Xt} numbers of each action this arm uses${r.units==="deg"?", in degrees":""}</b><span class="legend">${he.join("")}</span>`}}),D=new Mc(Xt,Ht,b,T);D.group.position.set(...W),D.addSeries("hand","hand",1.6,!0),D.addSeries("later","later",1.5,!0),D.addSeries("guess","guess",1.8),D.addSeries("plan","plan",2.6),e.scene.add(D.group);const S=he=>{const[se,ue]=D.range(he),_e=r.units==="deg"?"°":"",Ne=Ee=>(Number.isInteger(Ee)?String(Ee):Ee.toFixed(1)).replace("-","−");return`${Ne(se)}${_e} to ${Ne(ue)}${_e}`},x=Ut.names.map((he,se)=>e.addLabel("",new I(W[0]-b/2-1.2,W[1]+Xt*T/2-(se+.5)*T,a),()=>E.shown&&i.rank("plot")!==null?30+se:null,"row left")),C=()=>x.forEach((he,se)=>he.innerHTML=`<b>${Ut.names[se]}</b><span>${S(se)}</span>`),G=Ut.log,$=[p[2]+l/2+14+b/2,0,o],te=34,ie=t({id:"loss",title:"loss",note:"",kind:"unit",cols:G.loss.length,rows:1,width:b,height:te,pos:$,texture:A(G.loss.length,1),bits:8,min:0,max:1,revealAt:n("train-run"),borders:"none",label:()=>`<b>The loss over the ${G.steps.toLocaleString("en-US")} training steps</b><span class="legend">${U("plan","on the demos it trains on")}${U("hand","on the 3 held-out demos")}</span><span>log scale, ${J[0]} at the bottom to ${J[1]} at the top</span>`}),J=[.03,1],Q=new Mc(1,G.loss.length,b,te);Q.group.position.set(...$),Q.addSeries("held","hand",1.8,!0),Q.addSeries("train","plan",2.6),Q.setRange(0,Math.log10(J[0]),Math.log10(J[1]),!0),Q.set("train",[G.loss.map(Math.log10)],{instant:!0});const q=G.held_out.map(([he])=>he/G.every-1);Q.set("held",[G.held_out.map(([,he])=>Math.log10(he))],{xs:q,instant:!0}),e.scene.add(Q.group);const me=(he,se,ue,_e)=>e.addLabel(ue,Q.at(0,he,Math.log10(se)).add(new I(0,.6,.3)),()=>ie.shown&&i.rank("loss")!==null?40+_e:null,"mark");G.held_out.forEach(([he,se],ue)=>me(q[ue]-(ue?9:4),se,`step ${he.toLocaleString("en-US")}: <b>${se.toFixed(2)}</b>`,ue)),me(G.loss.length-12,G.loss[G.loss.length-1]*1.35,`end: <b>${G.loss[G.loss.length-1].toFixed(3)}</b>`,2),me(1,G.loss[0]*.62,`step ${G.every}: <b>${G.loss[0].toFixed(2)}</b>`,3);let ve=null,be=null,ke=null;const Ye=()=>{const he=h.get("den_x").values,se=h.get("den_v").values,ue=h.get("tr_a").values;if(!he||!se||!ue||ve)return;const _e=(Ne,Ee)=>Array.from({length:Xt},(w,_)=>Array.from({length:Ht},(B,L)=>Ne.at(L,Ee*rn+_)));ve=Array.from({length:Rt+1},(Ne,Ee)=>_e(he,Ee)),be=ve.map((Ne,Ee)=>Ee===Rt?Ne:Ne.map((w,_)=>w.map((B,L)=>B-Ut.times[Ee]*se.at(L,Ee*rn+_)))),ke=_e(ue,0),le(!0)},ee=he=>he.map((se,ue)=>se.map(_e=>_e*Ut.std[ue]+Ut.mean[ue])),le=he=>{if(!ve||!be||!ke)return;const se=r.units==="deg",ue=s.round,_e=se?ue===Rt?Da:ee(ve[ue]):ve[ue];D.set("plan",_e,{until:r.executed??Ht,instant:he}),D.set("later",r.executed?_e:null,{from:(r.executed??1)-1,instant:!0}),D.set("guess",r.guess&&ue<Rt?se?ee(be[ue]):be[ue]:null,{instant:he}),D.set("hand",r.hand?se?Ua:ke:null,{instant:he});for(let Ne=0;Ne<Xt;Ne++)if(!se)D.setRange(Ne,-3.3,3.3,he);else{const Ee=[...Da[Ne],...Ua[Ne]],w=Math.min(...Ee),_=Math.max(...Ee),B=Math.max(1.5,(_-w)*.12);D.setRange(Ne,Math.floor(w-B),Math.ceil(_+B),he)}C(),e.touch(3)},Se=(he,se)=>{s.round=Math.min(Rt,Math.max(0,Math.round(he)));for(const ue of["den_x","den_v"])f(h.get(ue));le(se),i.changed()},xe=he=>{s.noise=Math.min(La.length-1,Math.max(0,Math.round(he)));for(const se of["tr_x","tr_v","tr_err"])f(h.get(se));i.changed()},Ue=(he,se)=>{r=he??r,le(se),E.mesh.material.uniforms.uSelDim.value=0},Oe={den_x:()=>s.round===Rt?"The plan":s.round===0?"The noisy plan: pure noise":`The noisy plan after round ${s.round}`,den_v:()=>`The direction, round ${Math.min(s.round,Rt-1)+1}`,tr_a:()=>"A demo: what the hand did",tr_noise:()=>"Fresh noise",tr_x:()=>`Their mix, noise level ${v()}`,tr_u:()=>"The target: noise minus demo",tr_v:()=>`The expert's answer at noise level ${v()}`,tr_err:()=>"The error, squared"},Ie=new Set([...h.keys(),"plot","loss"]),je=he=>{var w,_;const se=he.sheet.spec.id;if(!Ie.has(se))return null;const{col:ue,row:_e}=he;if(se==="loss"){const B=(ue+1)*G.every,L=G.held_out.find(([z])=>z===B);return{html:`<i>Training loss</i><span>step ${B.toLocaleString("en-US")}</span><b class="val">${G.loss[ue].toFixed(3)}</b>${L?`<span>on the held-out demos: ${L[1].toFixed(3)}</span>`:""}`,action:null}}if(se==="plot"){if(!ve||!be||!ke)return{html:`<i>${Ut.names[_e]}</i>`,action:ue};const B=r.units==="deg",L=B?"°":"",z=ae=>Lr(B?ae*Ut.std[_e]+Ut.mean[_e]:ae)+L,N=s.round,re=B&&N===Rt?Lr(Da[_e][ue])+L:z(ve[N][_e][ue]);let ne=`<i>${Ut.names[_e]}</i><span>${Sc(ue)}</span><span>${N===Rt?"the plan":N===0?"pure noise":`after round ${N}`}</span><b class="val">${re}</b>`;return r.guess&&N<Rt&&(ne+=`<span>where the direction points: ${z(be[N][_e][ue])}</span>`),r.hand&&(ne+=`<span>what the hand did: ${B?Lr(Ua[_e][ue])+L:z(ke[_e][ue])}</span>`),r.executed&&(ne+=`<span>${ue<r.executed?"runs on the arm":"replaced by the next plan"}</span>`),{html:ne,action:ue}}const Ne=(_=(w=he.sheet.spec).valueAt)==null?void 0:_.call(w,ue,_e),Ee=Ne==null?"":`<b class="val">${Lr(Ne)}</b>`;return{html:`<i>${Oe[se]()}</i><span>${Sc(ue)}</span><span>number ${_e+1} of ${rn}: ${Hg(_e)}</span>${Ee}`,action:ue}},We=he=>{const se=ue=>he===null?[]:[[he,0,he+1,ue]];for(const ue of h.values())ue.sheet.select(se(rn));E.select(r.executed?[[0,0,r.executed,Xt],...se(Xt)]:se(Xt))},et=()=>{const he={plan:e.theme.accent,guess:e.theme.fill,hand:e.theme.hi};D.setColors(he),Q.setColors(he),e.touch()},F=(he,se)=>{D.setResolution(he,se),Q.setResolution(he,se)};return e.resized.push(F),e.themed.push(et),F(e.renderer.domElement.clientWidth,e.renderer.domElement.clientHeight),et(),C(),{state:s,rounds:Rt,levels:La,owns:he=>Ie.has(he),setRound:Se,setNoise:xe,setMode:Ue,hover:je,select:We,retheme:et,tick:he=>{D.group.visible=E.shown&&E.reveal>.5,Q.group.visible=ie.shown&&ie.reveal>.5;const se=D.tick(he),ue=Q.tick(he);return se||ue}}}const yi=de.layers.vlm_stream.length,Fs=de.shape.heads,rt=de.shape.chunk,Ke=de.prefix.len,tn=64,_n=8,Mi=de.lang.mask.filter(Boolean).length,wc=de.state.names,Dr=i=>i.toLocaleString("en-US"),Vg=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−"),Zi=i=>(i/255)**2,Hn=i=>i>=.0995?`${Math.round(i*100)}%`:i>=95e-5?`${(i*100).toFixed(1)}%`:i>0?"under 0.1%":"0%",Ec=i=>`action ${i+1} of ${rt} (${(i*.1).toFixed(1)} s ahead)`;function Wg(i){const{view:e,geo:t,add:n,at:s}=i,r={layer:0,head:-1,look:"vlm",row:{vlm:Ke-1,exp:0}},a=L=>t.stackZ+L*t.gap,o=(L,z)=>de.layers[L][z],l=new Map,c=L=>{let z=l.get(L.file);return z||l.set(L.file,z=Zs(L,i.aniso)),z},h=new Map,u=It(new Uint8Array([128,128,128,255]),1,1),f=It(new Uint8Array([0,0,0,255]),1,1),m=()=>`layer ${r.layer+1}`,g=()=>r.head<0?`average of ${Fs} heads`:`head ${r.head+1}`,v=' <i class="tag trained">trained</i>',p={update:61,keys:106,values:135,attn:174},d=de.shape.vlm_width,A=de.shape.expert_width,T=[],b=(L,z,N,re,ne,ae,ce,M={})=>{const R=o(L,0),H=n({id:L,title:L,note:"",kind:"signed",cols:R.cols,rows:R.rows,width:re,height:ne,pos:[z,N,a(0)],texture:u,bits:8,min:-1,max:1,revealAt:s(ae),label:ce,overview:!1,valueAt:(j,V)=>{var Re;const pe=h.get(L);if(!pe)return null;const Ae=(Re=pe.info.parts)==null?void 0:Re.find(P=>j<P.end);return pe.values.at(j,V)*((Ae==null?void 0:Ae.scale)??1)},isClipped:(j,V)=>{const pe=h.get(L),Ae=pe?pe.values.rgba[(V*pe.info.cols+j)*4]:128;return Ae===0||Ae===255},...M});return T.push({id:L,x:z,y:N,sheet:H}),H};b("vlm_stream",t.seqX,0,t.seqW,t.sheetH,"vlm-stack",()=>`<b>The sequence, entering ${m()}</b><span>${Ke} tokens x ${d} numbers</span>`,{overview:!0}),b("vlm_update",t.seqX,p.update,t.seqW,t.sheetH,"vlm-stack",()=>`<b>What ${m()} adds</b><span>${Ke} tokens x ${d} numbers</span>`,{sweep:.45}),b("vlm_k",t.seqX,p.keys,t.seqW,16,"vlm-keys",()=>`<b>Keys, ${m()}</b><span>${Ke} tokens x ${o("vlm_k",0).rows} numbers</span>`),b("vlm_v",t.seqX,p.values,t.seqW,16,"vlm-keys",()=>`<b>Values, ${m()}</b><span>${Ke} tokens x ${o("vlm_v",0).rows} numbers</span>`);const W=rt*.8,U=A*.05;b("exp_stream",t.expX,0,W,U,"expert-input",()=>`<b>Action tokens, entering ${m()}</b>${v}<span>${rt} tokens x ${A} numbers</span>`,{overview:!0,trained:!0}),b("exp_update",t.expX,U+13,W,U,"expert-stack",()=>`<b>What ${m()} adds</b><span>${rt} tokens x ${A} numbers</span>`,{sweep:.45,trained:!0});const E=n({id:"vlm_attn",title:"",note:"",kind:"unit",cols:Ke,rows:Ke,width:t.sheetH,height:t.sheetH,pos:[t.maskX,0,a(0)],texture:f,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,label:()=>`<b>Who looks at whom, ${m()}</b><span>average of ${Fs} heads: a row looks at a column</span><span>marked row: ${i.place(r.row.vlm)}</span>`}),D=new Uint8Array(Ke*rt*4).fill(255),S=new Uint8Array(rt*rt*4).fill(255),x=It(D,Ke,rt),C=It(S,rt,rt),G=rt*.6,$=t.seqX+t.seqW/2+6+W/2,te=n({id:"exp_attn",title:"",note:"",kind:"unit",cols:Ke,rows:rt,width:t.seqW,height:G,pos:[t.seqX,p.attn,a(0)],texture:x,bits:8,min:0,max:1,revealAt:s("expert-look"),overview:!1,trained:!0,label:()=>`<b>Where the action tokens look, ${m()}</b>${v}<span>${g()}: ${rt} actions (rows) x ${Ke} sequence tokens</span><span>marked row: action ${r.row.exp+1}</span>`}),ie=n({id:"exp_own",title:"",note:"",kind:"unit",cols:rt,rows:rt,width:W,height:G,pos:[$,p.attn,a(0)],texture:C,bits:8,min:0,max:1,revealAt:s("expert-look"),overview:!1,trained:!0,when:()=>i.focused("exp_own")&&Ie(),label:()=>`<b>At earlier actions</b><span>${rt} x ${rt}</span>`}),J=48,Q={table:new Uint8Array(tn*4).fill(255),wrist:new Uint8Array(tn*4).fill(255)},q={table:It(Q.table,_n,_n),wrist:It(Q.wrist,_n,_n)},me=new Uint8Array(Mi*4).fill(255),ve=new Uint8Array(4).fill(255),be=It(me,Mi,1),ke=It(ve,1,1),Ye={table:0,wrist:0,words:0,state:0,own:0},ee=new Uint8Array(Ke+rt),le=()=>r.look==="exp"?`action ${r.row.exp+1}`:i.place(r.row.vlm),Se={};for(const L of["table","wrist"])Se[L]=n({id:`look_${L}`,title:"",note:"",kind:"image",cols:_n,rows:_n,width:J,height:J,pos:[0,0,a(0)],texture:i.pictures[L],revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused(`look_${L}`),label:()=>`<b>${L==="table"?"Table":"Wrist"} picture</b><span>${Hn(Ye[L])}</span>`}),Se[L].setHeat(q[L]),Se[L].gap=Se[L].gapTo=.08;Se.words=n({id:"look_words",title:"",note:"",kind:"unit",cols:Mi,rows:1,width:Mi*3,height:3.6,pos:[0,0,a(0)],texture:be,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused("look_words"),label:()=>`<b>Words</b><span>${Hn(Ye.words)}</span>`}),Se.state=n({id:"look_state",title:"",note:"",kind:"unit",cols:1,rows:1,width:3.6,height:3.6,pos:[0,0,a(0)],texture:ke,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused("look_state"),label:()=>`<b>Arm readings</b><span>${Hn(Ye.state)}${r.look==="exp"&&Ie()?`, earlier actions ${Hn(Ye.own)}`:""}</span>`});const xe=L=>{const z=a(r.layer),[N,re]=r.look==="exp"?[t.seqX-J/2-3,p.attn-G/2-17-J/2]:[t.maskX+t.sheetH/2+8+J/2,0],ne=re-J/2-10;Se.table.moveTo(N,re,z,L),Se.wrist.moveTo(N+J+6,re,z,L),Se.words.moveTo(N-J/2+Mi*3/2,ne,z,L),Se.state.moveTo(N+J/2+6+1.8,ne,z,L)},Ue=(L,z,N,re,ne)=>{const ae=de.sheets[L],ce=n({id:L,title:L,note:"",kind:"signed",cols:ae.cols,rows:ae.rows,width:W,height:N,pos:[t.expX,0,z],texture:u,bits:8,min:-1,max:1,parts:[{end:ae.cols,scale:ae.scale??1}],revealAt:s(re),label:ne,overview:!1,trained:!0,valueAt:(M,R)=>{var j;const H=h.get(L);return H?H.values.at(M,R)*(((j=H.info.parts)==null?void 0:j[0].scale)??1):null}});c(ae).then(M=>{h.set(L,{values:M,info:ae}),ce.setTexture(M.texture,ae),e.touch(3)})},Oe=de.sheets.exp_x.rows*.6;Ue("exp_x",a(0)-16,Oe,"expert-input",()=>`<b>The noisy plan</b><span>${rt} actions x ${de.sheets.exp_x.rows} numbers, noise level ${de.stats.times[0].toFixed(1)}</span>`),Ue("exp_last",a(yi),U,"expert-output",()=>`<b>Action tokens after layer ${yi}</b><span>${rt} tokens x ${A} numbers</span>`),Ue("exp_v",a(yi)+16,Oe,"expert-output",()=>`<b>The direction</b>${v}<span>${rt} actions x ${de.sheets.exp_v.rows} numbers</span>`);const Ie=()=>o("exp_attn",r.layer).own===!0,je=()=>{const L=r.look,z=r.row[L],N=h.get("vlm_attn");if(L==="vlm"&&!N)return;const re=R=>L==="vlm"?N.values.rgba[(z*Ke+R)*4]:R<Ke?D[(z*Ke+R)*4]:Ie()?S[(z*rt+R-Ke)*4]:0;let ne=0;for(let R=0;R<Ke+rt;R++)ee[R]=R<Ke||L==="exp"?re(R):0,R<Ke&&(ne=Math.max(ne,ee[R]));const ae=(R,H)=>{let j=0;for(let V=R;V<H;V++)j+=Zi(ee[V]);return j},ce=Math.max(ne,Math.sqrt(.05)*255),M=R=>Math.min(255,Math.round(ee[R]/ce*255));for(let R=0;R<tn;R++)Q.table[R*4]=M(R),Q.wrist[R*4]=M(tn+R);for(let R=0;R<Mi;R++)me[R*4]=M(2*tn+R);ve[0]=M(Ke-1);for(const R of[q.table,q.wrist,be,ke])R.needsUpdate=!0;Object.assign(Ye,{table:ae(0,tn),wrist:ae(tn,2*tn),words:ae(2*tn,Ke-1),state:ae(Ke-1,Ke),own:L==="exp"?ae(Ke,Ke+rt):0}),i.changed(),e.touch(3)},We=()=>{const L=h.get("exp_attn");if(!L)return;const{rgba:z}=L.values,N=L.info.cols,re=(r.head+1)*rt;for(let ne=0;ne<rt;ne++){const ae=(re+ne)*N;for(let ce=0;ce<Ke;ce++)D[(ne*Ke+ce)*4]=z[(ae+ce)*4];for(let ce=0;ce<rt;ce++)S[(ne*rt+ce)*4]=N>Ke?z[(ae+Ke+ce)*4]:0}x.needsUpdate=!0,C.needsUpdate=!0,r.look==="exp"&&je(),e.touch(3)};let et=-1;const F=(L,z)=>{const N=Math.min(yi-1,Math.max(0,Math.round(L)));if(N===et)return;et=r.layer=N;const re=a(N);for(const{id:ce,x:M,y:R,sheet:H}of T){H.moveTo(M,R,re,z);const j=o(ce,N);c(j).then(V=>{r.layer===N&&(h.set(ce,{values:V,info:j}),H.setTexture(V.texture,j),ce.endsWith("_update")&&H.shown&&!z&&(H.reveal=0),e.touch(3))})}E.moveTo(t.maskX,0,re,z),te.moveTo(t.seqX,p.attn,re,z),ie.moveTo($,p.attn,re,z),xe(z);const ne=o("vlm_attn",N);c(ne).then(ce=>{r.layer===N&&(h.set("vlm_attn",{values:ce,info:ne}),E.setTexture(ce.texture,{...ne,min:0,max:1}),r.look==="vlm"&&je(),e.touch(3))});const ae=o("exp_attn",N);c(ae).then(ce=>{r.layer===N&&(h.set("exp_attn",{values:ce,info:ae}),We())});for(const ce of[1,-1])if(N+ce>=0&&N+ce<yi)for(const M of Object.keys(de.layers))c(o(M,N+ce));i.changed(),e.touch(3)},he=L=>{r.head=Math.min(Fs-1,Math.max(-1,Math.round(L))),We(),i.changed()},se=(L,z)=>{r.look=L,z!==void 0&&(r.row[L]=z),xe(!1),je()},ue=new Set([...T.map(L=>L.id),"vlm_attn","exp_attn","exp_own","look_table","look_wrist","look_words","look_state","exp_x","exp_v","exp_last"]),_e=(L,z,N,re)=>{var ce,M,R,H;const ne=(M=(ce=L.spec).valueAt)==null?void 0:M.call(ce,z,N);if(ne==null)return`<span>${re}</span>`;const ae=(H=(R=L.spec).isClipped)!=null&&H.call(R,z,N)?ne<0?"below ":"above ":"";return`<span>${re}</span><b class="val">${ae}${Vg(ne)}</b>`},Ne={vlm_stream:()=>`The sequence, entering ${m()}`,vlm_update:()=>`What ${m()} adds`,vlm_k:()=>`Keys, ${m()}`,vlm_v:()=>`Values, ${m()}`,exp_stream:()=>`Action tokens, entering ${m()}`,exp_update:()=>`What ${m()} adds to the action tokens`,exp_x:()=>"The noisy plan",exp_v:()=>"The direction",exp_last:()=>`Action tokens after layer ${yi}`},Ee=L=>{const z=L.sheet.spec.id;if(!ue.has(z))return null;const{col:N,row:re}=L;if(z.startsWith("vlm_")&&z!=="vlm_attn")return{html:`<i>${Ne[z]()}</i><span>place ${N+1} of ${Ke}: ${i.place(N)}</span>${_e(L.sheet,N,re,`number ${Dr(re+1)} of ${Dr(L.sheet.spec.rows)}`)}`,token:N,action:null};if(z==="vlm_attn"){(r.row.vlm!==re||r.look!=="vlm")&&(r.row.vlm=re,r.look==="vlm"&&je());const ce=h.get("vlm_attn"),M=ce?Zi(ce.values.rgba[(re*Ke+N)*4]):0;return{html:`<i>${m()}, average of ${Fs} heads</i><span>${i.place(re)} (place ${re+1})</span><span>looking at ${i.place(N)} (place ${N+1})</span><b class="val">${Hn(M)}</b>`,token:N,action:null}}if(z==="exp_attn"||z==="exp_own"){r.row.exp!==re&&(r.row.exp=re,r.look==="exp"&&je());const ce=z==="exp_own",M=Zi(ce?S[(re*rt+N)*4]:D[(re*Ke+N)*4]),R=ce?N>re?`action ${N+1}, which comes later: not allowed`:`action ${N+1}`:`${i.place(N)} (place ${N+1})`;return{html:`<i>${m()}, ${g()}</i><span>${Ec(re)}</span><span>looking at ${R}</span><b class="val">${Hn(M)}</b>`,token:ce?null:N,action:re}}if(z==="look_table"||z==="look_wrist"){const ce=z==="look_table"?"table":"wrist",M=re*_n+N,R=(ce==="table"?0:tn)+M;return{html:`<i>Where ${le()} looks</i><span>${ce} picture, block row ${re+1}, column ${N+1}</span><b class="val">${Hn(Zi(ee[R]))}</b>`,token:R,action:null}}if(z==="look_words")return{html:`<i>Where ${le()} looks</i><span>${i.place(2*tn+N)}</span><b class="val">${Hn(Zi(ee[2*tn+N]))}</b>`,token:2*tn+N,action:null};if(z==="look_state")return{html:`<i>Where ${le()} looks</i><span>the arm's readings</span><b class="val">${Hn(Zi(ee[Ke-1]))}</b>`,token:Ke-1,action:null};const ne=L.sheet.spec.rows,ae=ne===de.shape.max_dim?`number ${re+1} of ${ne}: ${re<wc.length?wc[re]:"not used by this arm"}`:`number ${Dr(re+1)} of ${Dr(ne)}`;return{html:`<i>${Ne[z]()}</i><span>${Ec(N)}</span>${_e(L.sheet,N,re,ae)}`,token:null,action:N}},w=L=>{var ne;const z=(ae,ce)=>ce===null?[]:[[ce,0,ce+1,ae.spec.rows]];for(const{id:ae,sheet:ce}of T)ce.select(z(ce,ae.startsWith("vlm_")?L.token:L.action));for(const ae of["exp_x","exp_v","exp_last"]){const ce=B(ae);ce.select(z(ce,L.action))}const N=r.look==="vlm"?[[0,r.row.vlm,Ke,r.row.vlm+1]]:[];E.select([...N,...z(E,L.token)]);const re=[0,r.row.exp,Ke,r.row.exp+1];te.select([re,...z(te,L.token)]),ie.select([[0,r.row.exp,rt,r.row.exp+1]]);for(const ae of["table","wrist"]){const ce=((ne=L.group)==null?void 0:ne.cam)===ae?L.group.m:null;Se[ae].select(ce===null?[]:[[ce%_n,Math.floor(ce/_n),ce%_n+1,Math.floor(ce/_n)+1]])}Se.words.select(L.word===null||L.word>=Mi?[]:[[L.word,0,L.word+1,1]])},_=new Map,B=L=>_.get(L);for(const L of e.sheets)_.set(L.spec.id,L);return xe(!0),F(0,!0),{state:r,layers:yi,heads:Fs,owns:L=>ue.has(L),setLayer:F,setHead:he,setLook:se,looksAtActions:Ie,hover:Ee,select:w}}const Os=["table","wrist"],Ia=de.vision_layers.table.length,vn=de.shape.image/de.shape.patch,Na=vn*vn,$g=8,Xg=i=>i.toLocaleString("en-US");function qg(i){const{view:e,add:t,at:n}=i,s={layer:0},r=(E,D)=>de.vision_layers[E][D],a=It(new Uint8Array([128,128,128,255]),1,1),o=()=>`layer ${s.layer+1}`,l=E=>de.vision.typical_size[E][s.layer],c={},h={};for(const E of Os){const D=r(E,0);h[E]=t({id:`${E}_layer`,title:"",note:"",kind:"signed",cols:D.cols,rows:D.rows,width:i.width,height:i.height,pos:[i.lane[E],0,i.slotZ(0)],texture:a,bits:8,min:-1,max:1,revealAt:n("encoder"),label:()=>`<b>After ${o()}</b><span>${Xg(D.cols)} patches x ${D.rows} numbers</span>`,valueAt:(S,x)=>{var C;return((C=c[E])==null?void 0:C.values.at(S,x))??null},isClipped:(S,x)=>{const C=c[E],G=C?C.values.rgba[(x*C.info.cols+S)*4]:128;return G===0||G===255}})}const u={},f={table:new Uint8Array(Na*4),wrist:new Uint8Array(Na*4)},m={table:It(f.table,vn,vn),wrist:It(f.wrist,vn,vn)},g=(E,D)=>{var S;return((S=u[E])==null?void 0:S.at(D%vn,s.layer*vn+Math.floor(D/vn)))??null};for(const E of Os)t({id:`${E}_size`,title:"",note:"",kind:"image",cols:vn,rows:vn,width:i.mapSide,height:i.mapSide,pos:i.mapPos[E],texture:i.pictures[E],revealAt:n("encoder-sizes"),overview:!1,when:()=>i.focused(`${E}_size`),label:()=>`<b>Largest columns after ${o()}</b><span>typical size ${l(E).toFixed(1)}, largest ${de.vision.largest_size[E][s.layer].toFixed(0)}</span>`}).setHeat(m[E],"mark");const v=E=>{const D=l(E);for(let S=0;S<Na;S++){const x=(g(E,S)??D)/D;f[E][S*4]=Math.round(Math.min(1,Math.max(0,(x-1)/($g-1)))*255)}m[E].needsUpdate=!0},p=new Map,d=E=>{let D=p.get(E.file);return D||p.set(E.file,D=Zs(E,i.aniso)),D};let A=!1,T=-1;const b=(E,D)=>{T=E;const S=new Set;for(const x of Os){h[x].moveTo(i.lane[x],0,i.slotZ(E),D);const C=r(x,E);d(C).then(G=>{if(s.layer!==E)return;const $=c[x];c[x]={values:G,info:C},h[x].setTexture(G.texture,C),h[x].setScale(C.scale??1),$&&$.info.file!==C.file&&!p.has($.info.file)&&$.values.texture.dispose(),i.changed(),e.touch(3)}),u[x]&&v(x);for(const G of[0,1,-1])E+G<0||E+G>=Ia||(S.add(r(x,E+G).file),d(r(x,E+G)))}for(const[x,C]of p)S.has(x)||(p.delete(x),C.then(G=>{Os.some($=>{var te;return((te=c[$])==null?void 0:te.info.file)===x})||G.texture.dispose()}));i.changed(),e.touch(3)};return{state:s,layers:Ia,ensure:()=>{if(!A){A=!0,b(s.layer,!0);for(const E of Os)Zs(de.sheets[`${E}_sizes`],1).then(D=>{u[E]=D,v(E),i.changed(),e.touch(3)})}},setLayer:(E,D)=>{const S=Math.min(Ia-1,Math.max(0,Math.round(E)));s.layer=S,A&&S!==T&&b(S,D)},sizeOf:g,typical:l}}const Ki=["table","wrist"],bi={table:"Table camera",wrist:"Wrist camera"},Ct={table:-72,wrist:0,lang:64,state:112},Fa=84,Fe={raw:0,pad:52,embed:104,layers:113,encoded:204,sim:250,groups:296,merged:342,seq:400,stack:440},ks=10,Wn=.8,mt=48,_t=de.shape.image/de.shape.patch,Bs=_t*_t,gn=4,an=_t/gn,gt=an*an,Gn=de.lang.mask.length,xt=de.prefix.len,qs=xt*Wn,oi=Ct.wrist-gt*Wn*1.5,Oa=oi+qs/2,ka=oi+qs+12+mt/2,zs=160,Ur=128,Ji=.8,Tc=-mt/2-3.5,Ac=32,Ba=(Ct.table+Ct.wrist)/2,za={table:22,wrist:-22},Rc=(Fe.encoded-Fe.layers-9)/(de.shape.vision_layers-1),Qi=i=>i.toLocaleString("en-US"),Hs=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−");async function Yg(i,e){var ae,ce;const t=i.renderer.capabilities.getMaxAnisotropy(),n=de.sheets,s=["table_embed","table_encoded","table_merged","wrist_embed","wrist_encoded","wrist_merged","lang_embed","state_token","sequence","mask"],r=["table_raw","table_512","wrist_raw","wrist_512"];let a=0;const o=s.length+r.length,l=M=>(e(++a,o),M),[c,h]=await Promise.all([Promise.all(s.map(M=>Zs(n[M],t).then(l))),Promise.all(r.map(M=>Ag(`data/${M}.jpg`,t).then(l)))]),u=Object.fromEntries(s.map((M,R)=>[M,c[R]])),f=Object.fromEntries(r.map((M,R)=>[M,h[R]])),m=M=>Fg(M),g=M=>yt[M].focus==="all",v=new Map,p=M=>{const R=new fg(M);return v.set(M.id,R),i.add(R),R},d=(M,R)=>{const H=u[M];return p({id:M,kind:"signed",cols:H.info.cols,rows:H.info.rows,texture:H.texture,bits:H.info.bits,min:H.info.min,max:H.info.max,parts:[{end:H.info.cols,scale:H.info.scale??1}],valueAt:(j,V)=>H.at(j,V),isClipped:(j,V)=>H.info.bits===8&&(H.rgba[(V*H.info.cols+j)*4]===0||H.rgba[(V*H.info.cols+j)*4]===255),...R})},A={};for(const M of Ki){const R=Ct[M],H=bi[M];p({id:`${M}_raw`,title:H,note:"640 x 480 pixels",kind:"image",cols:640,rows:480,width:64,height:mt,pos:[R,0,Fe.raw],texture:f[`${M}_raw`],revealAt:m("cameras")}),p({id:`${M}_512`,title:`${H}, fitted`,note:`512 x 512 pixels, ${_t} x ${_t} patches`,kind:"image",cols:_t,rows:_t,width:51.2,height:51.2,pos:[R,0,Fe.pad],texture:f[`${M}_512`],revealAt:m("resize")}),d(`${M}_embed`,{title:"Patch columns",note:`${Qi(Bs)} patches x ${de.shape.vision_width} numbers`,width:64,height:mt,pos:[R,0,Fe.embed],revealAt:m("embed")}),d(`${M}_encoded`,{title:"After the vision encoder",note:`${Qi(Bs)} patches x ${de.shape.vision_width} numbers`,width:64,height:mt,pos:[R,0,Fe.encoded],revealAt:m("encoder")});const j=Ac,V=za[M],pe=Ba;p({id:`${M}_pick`,title:H,note:"point at a patch",kind:"image",cols:_t,rows:_t,width:j,height:j,pos:[pe-j-5,V,Fe.sim],texture:f[`${M}_512`],revealAt:m("encoder-sizes")});for(const[Ae,Re]of["before","after"].entries()){const P=new Uint8Array(Bs*4).fill(255),oe=It(P,_t,_t);A[`${M}_${Re}`]={rgba:P,texture:oe},p({id:`${M}_${Re}`,title:`Similar ${Re}`,note:"the encoder",kind:"unit",cols:_t,rows:_t,width:j,height:j,pos:[pe+Ae*(j+5),V,Fe.sim],texture:oe,bits:8,min:0,max:1,revealAt:m("similar")})}p({id:`${M}_groups`,title:`${H}, in blocks`,note:`${an} x ${an} blocks of 4 x 4 patches`,kind:"image",cols:an,rows:an,width:51.2,height:51.2,pos:[R,0,Fe.groups],texture:f[`${M}_512`],revealAt:m("merge")}),d(`${M}_merged`,{title:"Merged tokens",note:`${gt} tokens x ${de.shape.vlm_width} numbers`,width:gt*Wn,height:mt,pos:[R,0,Fe.merged],revealAt:m("merge")})}const T=de.lang.mask.filter(Boolean).length,b=new Uint8Array(Gn*4);de.lang.mask.forEach((M,R)=>b.set([M?255:0,0,0,255],R*4)),p({id:"lang_in",title:"Instruction",note:`${Gn} slots, ${T} used`,kind:"mask",cols:Gn,rows:1,width:Gn,height:4,pos:[Ct.lang,0,Fe.raw],texture:It(b,Gn,1),bits:8,min:0,max:1,revealAt:m("instruction")});const W=Rg(de.state.padded,-2,2);p({id:"state_in",title:"Arm readings",note:`${de.shape.max_dim} numbers, 7 used`,kind:"signed",cols:de.shape.max_dim,rows:1,width:de.shape.max_dim,height:4,pos:[Ct.state,0,Fe.raw],texture:W.texture,bits:16,min:W.min,max:W.max,parts:[{end:de.shape.max_dim,scale:1.5}],revealAt:m("readings"),valueAt:M=>de.state.padded[M]}),d("lang_embed",{title:"Word columns",note:`${Gn} slots x ${de.shape.vlm_width} numbers`,width:Gn*Wn,height:mt,pos:[Ct.lang,0,Fe.merged],revealAt:m("place-words")}),d("state_token",{title:"Readings token",note:`1 token x ${de.shape.vlm_width} numbers`,width:Wn,height:mt,pos:[Fa,0,Fe.merged],revealAt:m("place-state"),trained:!0}),d("sequence",{title:"The sequence",note:`${xt} tokens x ${de.shape.vlm_width} numbers`,width:qs,height:mt,pos:[Oa,0,Fe.seq],revealAt:m("place-images"),parts:n.sequence.parts.map(M=>({end:M.end,scale:M.scale}))});const U=2*gt,E=[{name:"table picture",start:0,end:gt},{name:"wrist picture",start:gt,end:U},{name:"words",start:U,end:U+T},{name:"padding",start:U+T,end:xt-1},{name:"arm readings",start:xt-1,end:xt}];p({id:"mask",title:"Who may look at whom",note:`${xt} x ${xt}: a row looks at a column`,kind:"mask",cols:xt,rows:xt,width:mt,height:mt,pos:[ka,0,Fe.seq],texture:u.mask.texture,bits:8,min:0,max:1,revealAt:m("who-sees-whom"),parts:E.slice(0,4).map(M=>({end:M.end,scale:1})),dividers:"both",label:()=>`<b>Who may look at whom</b><span>${xt} x ${xt}: a row looks at a column</span>
      <span class="key"><i class="chip yes"></i>may look<i class="chip no"></i>may not</span>`});for(const M of v.values())M.spec.id.endsWith("_groups")&&(M.gap=M.gapTo=.14);const D=[],S=(M,R,H,j,V,pe,Ae,Re)=>{const P=[];for(let K=0;K<Ae;K++){const ge=V+K*pe;P.push(i.addLine([[-H/2,-j/2],[H/2,-j/2],[H/2,j/2],[-H/2,j/2]].map(([ye,Be])=>new I(R+ye,Be,ge)),!0))}const oe=new hn(new I(R-H/2,-j/2,V),new I(R+H/2,j/2,V+(Ae-1)*pe)),Z=D.find(K=>K.id===M);Z?(Z.lines.push(...P),Z.box.union(oe)):D.push({id:M,lines:P,box:oe,revealAt:Re})};for(const M of Ki)S("ghost_vision",Ct[M],64,mt,Fe.layers,Rc,de.shape.vision_layers,m("encoder"));S("ghost_vlm",Oa,qs,mt,Fe.stack,ks,de.shape.vlm_layers,m("vlm-stack")),S("ghost_expert",zs,de.shape.chunk*Wn,de.shape.expert_width*.05,Fe.stack,ks,de.shape.expert_layers,m("expert-input"));const x=[],C=(M,R,H)=>x.push({line:i.addLine([new I(M[0],Tc,M[1]),new I(R[0],Tc,R[1])]),revealAt:H});for(const[M,R]of Ki.entries()){const H=Ct[R],j=[[Fe.pad,"resize"],[Fe.embed,"embed"],[Fe.encoded,"encoder"],[Fe.sim,"similar"],[Fe.groups,"merge"],[Fe.merged,"merge"]];let V=Fe.raw;for(const[pe,Ae]of j)C([H,V],[H,pe],m(Ae)),V=pe;C([H,Fe.merged],[oi+(M+.5)*gt*Wn,Fe.seq],m("place-images"))}C([Ct.lang,Fe.raw],[Ct.lang,Fe.merged],m("place-words")),C([Ct.lang,Fe.merged],[oi+(2*gt+Gn/2)*Wn,Fe.seq],m("place-words")),C([Ct.state,Fe.raw],[Fa,Fe.merged],m("place-state")),C([Fa,Fe.merged],[oi+(xt-.5)*Wn,Fe.seq],m("place-state"));const G=M=>de.lang.mask[M]?`"${de.lang.text[M]===`
`?"line break":de.lang.text[M].trim()}"`:"padding",$=M=>M<gt?`table camera token ${M+1}`:M<2*gt?`wrist camera token ${M-gt+1}`:M<xt-1?de.lang.mask[M-2*gt]?`the word ${G(M-2*gt)}`:"padding":"the arm's readings";let te=0;const ie=M=>{const R=yt[te].focus;return R==="all"||R.includes(M)};let J=()=>{};const Q=Wg({view:i,aniso:t,add:p,at:m,focused:ie,geo:{seqX:Oa,seqW:qs,maskX:ka,expX:zs,sheetH:mt,stackZ:Fe.stack,gap:ks},pictures:{table:f.table_512,wrist:f.wrist_512},place:M=>$(M),changed:()=>J()}),q=qg({view:i,aniso:t,add:p,at:m,focused:ie,lane:Ct,width:64,height:mt,slotZ:M=>Fe.layers+M*Rc,pictures:{table:f.table_512,wrist:f.wrist_512},mapPos:{table:[Ba,za.table,Fe.sim],wrist:[Ba,za.wrist,Fe.sim]},mapSide:Ac,changed:()=>J()}),me=M=>{if(g(te))return null;const H=(yt[te].labels??yt[te].focus).indexOf(M);return H<0?null:H},ve=Fe.stack+de.shape.expert_layers*ks+16,be=Gg({view:i,aniso:t,add:p,at:m,focused:ie,rank:me,changed:()=>J(),expX:zs,endZ:ve}),ke=new Map,Ye=[];for(const M of v.values()){const R=new I;ke.set(M,R);const H=M.spec.trained?' <i class="tag trained">trained</i>':"",j=i.addLabel(((ce=(ae=M.spec).label)==null?void 0:ce.call(ae))??`<b>${M.spec.title}</b>${H}<span>${M.spec.note}</span>`,R,()=>M.shown&&M.reveal>0?me(M.spec.id):null);M.spec.label&&Ye.push([M,j])}const ee=(M,R,H,j,V=mt/2+2)=>i.addLabel(R,new I(H,V,j),()=>me(M),"ghost");ee("ghost_vision",`<b>Vision encoder</b><span>${de.shape.vision_layers} layers, frozen: one outline each</span>`,Ct.wrist-32,(Fe.layers+Fe.encoded)/2,-mt/2-9);const le=Fe.stack+(de.shape.vlm_layers-1)*ks;ee("ghost_vlm",`<b>Vision-language model</b><span>${de.shape.vlm_layers} layers, frozen</span>`,oi,le,-mt/2-3),ee("ghost_expert",`<b>Action expert</b> <i class="tag trained">trained</i><span>${de.shape.expert_layers} layers</span>`,zs-20,le,-22);const Se=v.get("mask"),xe=M=>()=>{const R=Se.shown&&Se.reveal>0?me("mask"):null;return R===null?null:R+.01*(M+1)},Ue=mt/xt,Oe=ka-mt/2;for(const[M,R]of E.entries()){const H=(R.start+R.end)/2*Ue,j=`<span>${R.end-R.start}</span>`;i.addLabel(`${R.name}${j}`,new I(Oe+mt+1,mt/2-H,Fe.seq),xe(M),"axis side"),i.addLabel(R.name,new I(Oe+H,-mt/2-.8,Fe.seq),xe(E.length+M),"axis under")}const Ie=(M,R,H,j=mt/2+3)=>i.addLabel(M,new I(R,j,H),()=>g(te)?0:null,"station");Ie("<b>1</b> The input",Ct.table-32,Fe.raw),Ie("<b>2</b> Images into patches",Ct.table-32,Fe.embed,-mt/2-4),Ie("<b>3</b> The vision encoder",Ct.table-32,Fe.encoded),Ie("<b>4</b> One sequence",oi,Fe.seq),Ie("<b>5</b> The vision-language model",oi,Fe.stack+75),Ie("<b>6</b> The action expert",zs-20,Fe.stack+75,21),Ie("<b>7</b> From noise to a plan <b>8</b> On the arm",-60,ve+64,28),Ie("<b>9</b> How it was trained",-46,ve+148,28),i.onTick=M=>{be.tick(M)&&i.touch();for(const[R,H]of ke){const j=1/(1-R.gap),V=R.group.position;H.set(V.x-R.spec.width/2*j,V.y+R.spec.height/2*j+1.2,V.z)}};const je={table:17*_t+17,wrist:29*_t+22},We={},et=M=>{for(const[R,H]of[["before","embed"],["after","encoded"]]){const j=`${M}_${R}`,V=(We[j]??(We[j]=new Cg(u[`${M}_${H}`]))).to(je[M]),{rgba:pe,texture:Ae}=A[j];for(let Re=0;Re<Bs;Re++)pe[Re*4]=Math.round(Math.min(1,Math.max(0,V[Re]))*255);Ae.needsUpdate=!0}i.touch()};let F=!1;const he=()=>{if(!F){F=!0;for(const M of Ki)et(M)}},se={group:null,word:null,reading:null,active:!1,token:null,action:null},ue=M=>{se.token=M,M<2*gt?se.group={cam:Ki[Math.floor(M/gt)],m:M%gt}:M<xt-1?se.word=M-2*gt:se.reading="all"},_e=M=>[Math.floor(M/_t),M%_t],Ne=M=>Math.floor(Math.floor(M/_t)/gn)*an+Math.floor(M%_t/gn),Ee=(M,R,H,j)=>{const V=Math.max(0,(R*de.shape.patch-Ur)/Ji),pe=(j*de.shape.patch-Ur)/Ji;return pe<=0?[]:[[M*de.shape.patch/Ji,V,H*de.shape.patch/Ji,pe]]},w=()=>{var j;const M=[];for(const[V,pe]of Ki.entries()){const Ae=((j=se.group)==null?void 0:j.cam)===pe?se.group.m:null,[Re,P]=_e(je[pe]),oe=Ae??Ne(je[pe]),[Z,K]=[Math.floor(oe/an),oe%an],[ge,ye,Be,dt]=Ae===null?[Re,P,Re+1,P+1]:[Z*gn,K*gn,(Z+1)*gn,(K+1)*gn],St=[];for(let Mt=ge;Mt<Be;Mt++)St.push([Mt*_t+ye,0,Mt*_t+dt,de.shape.vision_width]);const tt=[[ye,ge,dt,Be]];v.get(`${pe}_raw`).select(Ee(ye,ge,dt,Be));for(const Mt of["512","pick","before","after","size"])v.get(`${pe}_${Mt}`).select(tt);for(const Mt of["embed","encoded","layer"])v.get(`${pe}_${Mt}`).select(St);v.get(`${pe}_groups`).select([[K,Z,K+1,Z+1]]),v.get(`${pe}_merged`).select([[oe,0,oe+1,de.shape.vlm_width]]),M.push([V*gt+oe,0,V*gt+oe+1,de.shape.vlm_width])}const R=se.word;v.get("lang_in").select(R===null?[]:[[R,0,R+1,1]]),v.get("lang_embed").select(R===null?[]:[[R,0,R+1,de.shape.vlm_width]]),R!==null&&M.push([2*gt+R,0,2*gt+R+1,de.shape.vlm_width]);const H=se.reading;v.get("state_in").select(H===null?[]:H==="all"?[[0,0,de.shape.max_dim,1]]:[[H,0,H+1,1]]),v.get("state_token").select(H===null?[]:[[0,0,1,de.shape.vlm_width]]),H!==null&&M.push([xt-1,0,xt,de.shape.vlm_width]),v.get("sequence").select(M),Q.select(se),be.select(se.action);for(const V of v.values())V.mesh.material.uniforms.uSelDim.value=se.active&&V.spec.kind==="signed"?.3:0;i.touch()},_=M=>{const[R,H]=_e(M);return`patch ${Qi(M+1)} of ${Qi(Bs)} (row ${R+1}, column ${H+1})${(R+1)*de.shape.patch<=Ur?", black padding":""}`},B=(M,R,H,j)=>{var Ae,Re,P,oe;const V=(Re=(Ae=M.spec).valueAt)==null?void 0:Re.call(Ae,R,H);if(V==null)return"";const pe=((oe=(P=M.spec).isClipped)==null?void 0:oe.call(P,R,H))??!1;return`<span>number ${Qi(H+1)} of ${Qi(j)}</span><b class="val">${pe?V<0?"below ":"above ":""}${Hs(V)}</b>`},L=M=>{if(se.group=null,se.word=null,se.reading=null,se.token=null,se.action=null,se.active=M!==null,!M)return w(),null;const R=M.sheet.spec.id,H=be.hover(M);if(H)return se.action=H.action,w(),H.html;const j=Q.hover(M);if(j)return j.token!==null&&ue(j.token),se.action=j.action,w(),j.html;const{col:V,row:pe}=M,[Ae,Re]=R.includes("_")?[R.slice(0,R.indexOf("_")),R.slice(R.indexOf("_")+1)]:[R,""];let P="";if(Ae==="table"||Ae==="wrist"){const oe=Ae,Z=K=>{je[oe]!==K&&(je[oe]=K,F&&et(oe))};if(Re==="raw")P=`<i>${bi[oe]}</i><span>pixel ${V+1}, ${pe+1}</span>`,Z(Math.floor((pe*Ji+Ur)/de.shape.patch)*_t+Math.floor(V*Ji/de.shape.patch));else if(Re==="512"||Re==="pick")Z(pe*_t+V),P=`<i>${bi[oe]}</i><span>${_(je[oe])}</span>`;else if(Re==="embed"||Re==="encoded"||Re==="layer"){Z(V);const K=Re==="embed"?"patch columns":Re==="encoded"?"after the encoder":`after layer ${q.state.layer+1}`;P=`<i>${bi[oe]}, ${K}</i><span>${_(V)}</span>${B(M.sheet,V,pe,de.shape.vision_width)}`}else if(Re==="size"){const K=pe*_t+V;Z(K);const ge=q.sizeOf(oe,K);P=`<i>${bi[oe]}, after layer ${q.state.layer+1}</i><span>${_(K)}</span><span>size of its column (typical ${q.typical(oe).toFixed(1)})</span>${ge===null?"":`<b class="val">${Hs(ge)}</b>`}`}else if(Re==="before"||Re==="after"){const K=pe*_t+V,ge=A[R].rgba[K*4]/255;P=`<i>${bi[oe]}, ${Re} the encoder</i><span>${_(K)}</span><span>similarity to the picked patch</span><b class="val">${ge.toFixed(2)}</b>`}else if(Re==="groups"||Re==="merged"){const K=Re==="groups"?pe*an+V:V;se.group={cam:oe,m:K};const[ge,ye]=[Math.floor(K/an),K%an];P=`<i>${bi[oe]}</i><span>merged token ${K+1} of ${gt}: patch rows ${ge*gn+1} to ${(ge+1)*gn}, columns ${ye*gn+1} to ${(ye+1)*gn}</span>`,Re==="merged"&&(P+=B(M.sheet,V,pe,de.shape.vlm_width))}}else if(R==="lang_in"||R==="lang_embed")se.word=V,P=`<i>Instruction</i><span>slot ${V+1} of ${Gn}: ${G(V)}</span>${R==="lang_embed"?B(M.sheet,V,pe,de.shape.vlm_width):""}`;else if(R==="state_in")se.reading=V,P=V<7?`<i>Arm readings</i><span>${de.state.names[V]}: ${Hs(de.state.deg[V])}°, as usual would be ${Hs(de.state.mean[V])}°</span><span>rescaled</span><b class="val">${Hs(de.state.norm[V])}</b>`:`<i>Arm readings</i><span>cell ${V+1} of ${de.shape.max_dim}: zero padding</span>`;else if(R==="state_token")se.reading="all",P=`<i>Readings token</i>${B(M.sheet,V,pe,de.shape.vlm_width)}`;else if(R==="sequence")ue(V),P=`<i>The sequence</i><span>place ${V+1} of ${xt}: ${$(V)}</span>${B(M.sheet,V,pe,de.shape.vlm_width)}`;else if(R==="mask"){const oe=u.mask.at(V,pe)>.5;P=`<i>Who may look at whom</i><span>${$(pe)} (place ${pe+1})</span><span>looking at ${$(V)} (place ${V+1})</span><b class="val">${oe?"allowed":"blocked"}</b>`}return w(),P||null},z=M=>g(M)||M>=m("place-state")?1:M>=m("place-words")?(xt-1)/xt:M>=m("place-images")?2*gt/xt:0,N=(M,R)=>{var H,j;return(g(R)?M.spec.overview!==!1:R>=M.spec.revealAt&&(!yt[R].alone||ie(M.spec.id)))&&(((j=(H=M.spec).when)==null?void 0:j.call(H))??!0)},re=()=>({layer:Q.state.layer,layers:Q.layers,head:Q.state.head,heads:Q.heads,looksAtActions:Q.looksAtActions(),vision:q.state.layer,visionLayers:q.layers,round:be.state.round,rounds:be.rounds,noise:be.state.noise,levels:be.levels}),ne={setStep:()=>{},boxOf:()=>new hn,hover:L,stack:re,setLayer:Q.setLayer,setHead:Q.setHead,setVisionLayer:q.setLayer,setRound:be.setRound,setNoise:be.setNoise,onStack:()=>{}};return J=()=>{for(const[M,R]of Ye)R.innerHTML=M.spec.label();for(const M of v.values()){if(!M.spec.when)continue;const R=M.shown;M.shown=N(M,te),M.shown!==R&&(M.reveal=M.revealTo=M.shown?1:0)}w(),ne.onStack(re())},ne.setStep=(M,R)=>{te=M;const H=yt[M];H.look&&Q.setLook(H.look,H.row),H.layer!==void 0&&Q.setLayer(H.layer,R),H.head!==void 0&&Q.setHead(H.head),H.vlayer!==void 0&&q.setLayer(H.vlayer,R),(g(M)||M>=m("encoder"))&&q.ensure(),be.setMode(H.plot,R),H.round!==void 0&&be.setRound(H.round,R),H.noise!==void 0&&be.setNoise(H.noise);for(const j of v.values()){const V=j.spec.id;j.shown=N(j,M),j.revealTo=j.shown?V==="sequence"?z(M):1:0,(!j.shown||R||g(M))&&(j.reveal=j.revealTo),j.fadeTo=ie(V)?1:.26,V.endsWith("_512")&&(j.gapTo=g(M)||M>=m("patches")?.18:0),R&&(j.fade=j.fadeTo,j.gap=j.gapTo,j.group.position.set(...j.spec.pos))}for(const j of D)for(const V of j.lines)V.visible=g(M)||M>=j.revealAt&&ie(j.id);for(const j of x)j.line.visible=g(M)||M>=j.revealAt&&!yt[M].alone;(g(M)||M>=m("similar"))&&he(),J(),i.touch(3)},ne.boxOf=M=>{const R=new hn;for(const H of M){const j=v.get(H),V=D.find(pe=>pe.id===H);if(j)R.union(j.box());else if(V)R.union(V.box);else throw new Error(`nothing called "${H}" to frame`)}return R},w(),ne}const ot=i=>document.getElementById(i),Io=ot("stage");let bs;try{bs=new cg(Io,ot("gl"),ot("labels"))}catch(i){throw ot("loading-text").textContent="This page needs WebGL, which this browser has turned off or does not support.",i}const jg=window.matchMedia("(prefers-reduced-motion: reduce)"),rs=()=>jg.matches||new URLSearchParams(location.search).has("still");let kt=null,Kt=0;const fh=ds.map((i,e)=>yt.findIndex(t=>t.chapter===e)),zr=ot("chapters");ds.forEach((i,e)=>{const t=document.createElement("button");t.type="button";const n=yt.filter(s=>s.chapter===e).map(()=>"<i></i>").join("");t.innerHTML=`<span class="n">${e===0||e===ds.length-1?"":e}</span><span>${i}</span><span class="dots">${n}</span>`,t.addEventListener("click",()=>xs(fh[e])),zr.append(t)});function Zr(i,e){Kt=i;const t=yt[i];ot("step-chapter").textContent=t.chapter===0||t.chapter===ds.length-1?ds[t.chapter]:`Chapter ${t.chapter}: ${ds[t.chapter]}`,ot("step-title").textContent=t.title,ot("step-body").innerHTML=t.body,ot("step").scrollTop=0,ot("count").textContent=`${i+1} / ${yt.length}`,ot("back").disabled=i===0,ot("next").disabled=i===yt.length-1,[...zr.children].forEach((n,s)=>{n.classList.toggle("current",s===t.chapter),s===t.chapter&&zr.scrollWidth>zr.clientWidth&&n.scrollIntoView({inline:"center",block:"nearest"}),n.querySelectorAll(".dots i").forEach((r,a)=>{const o=fh[s]+a;r.classList.toggle("done",o<i),r.classList.toggle("now",o===i)})});try{location.hash.slice(1)!==t.id&&history.replaceState(null,"",`#${t.id}`)}catch{}ot("layerbar").hidden=!t.slider,ot("head-wrap").hidden=!t.heads,kt&&(kt.setStep(i,e),bs.frame(ph(),new I(...t.view.dir),t.view.pad,e?0:1.3,t.view.room))}function ph(){var t;const i=yt[Kt],e=kt.boxOf(i.view.ids);return i.slider&&!((t=i.view.room)!=null&&t.top)&&(e.max.y+=(e.max.y-e.min.y)*.22),i.plot&&(e.min.x-=Math.min(26,(e.max.x-e.min.x)*.22)),e}const ci=ot("layer"),as=ot("head");function Zg(i){const e=yt[Kt].slider;if(e==="round"){const n=(1-i.round/i.rounds).toFixed(1),s=i.round===0?"Before round 1":`After round ${i.round} of ${i.rounds}`;return{value:i.round,last:i.rounds,html:`${s} <small>noise level ${n}</small>`}}if(e==="noise")return{value:i.noise,last:i.levels.length-1,html:`Noise level ${i.levels[i.noise]}`};if(e==="vision")return{value:i.vision,last:i.visionLayers-1,html:`After layer ${i.vision+1} of ${i.visionLayers}`};const t=yt[Kt].chapter===6?` <small>${i.looksAtActions?"looks at the sequence and earlier actions":"looks at the sequence only"}</small>`:"";return{value:i.layer,last:i.layers-1,html:`Layer ${i.layer+1} of ${i.layers}${t}`}}function Kg(i){const e=Zg(i);if(ci.min="0",ci.max=String(e.last),ci.value=String(e.value),ci.setAttribute("aria-label",yt[Kt].slider==="round"?"Round":yt[Kt].slider==="noise"?"Noise level":"Layer"),ot("layer-prev").disabled=e.value===0,ot("layer-next").disabled=e.value===e.last,ot("layer-text").innerHTML=e.html,as.options.length===0){as.add(new Option(`all ${i.heads}, averaged`,"-1"));for(let t=0;t<i.heads;t++)as.add(new Option(`head ${t+1}`,String(t)))}as.value=String(i.head)}function us(i,e=yt[Kt].slider,t){kt&&(e==="round"?kt.setRound(i,rs()):e==="noise"?kt.setNoise(i):e==="vision"?kt.setVisionLayer(i,rs()):(kt.setLayer(i,rs()),t!==void 0&&kt.setHead(t),bs.follow(ph(),rs()?0:.45)))}ci.addEventListener("input",()=>us(Number(ci.value)));ot("layer-prev").addEventListener("click",()=>us(Number(ci.value)-1));ot("layer-next").addEventListener("click",()=>us(Number(ci.value)+1));as.addEventListener("change",()=>kt==null?void 0:kt.setHead(Number(as.value)));ot("step-body").addEventListener("click",i=>{const e=i.target.closest("a.jump");if(!e)return;i.preventDefault();const t=e.dataset;t.round!==void 0?us(Number(t.round),"round"):t.vlayer!==void 0?us(Number(t.vlayer),"vision"):us(Number(t.layer),"layer",t.head===void 0?void 0:Number(t.head))});function xs(i){const e=Math.min(yt.length-1,Math.max(0,i));e!==Kt&&Zr(e,rs())}ot("back").addEventListener("click",()=>xs(Kt-1));ot("next").addEventListener("click",()=>xs(Kt+1));ot("reset").addEventListener("click",()=>Zr(Kt,rs()));window.addEventListener("keydown",i=>{i.metaKey||i.ctrlKey||i.altKey||i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement||(i.key==="ArrowRight"||i.key==="PageDown"?xs(Kt+1):(i.key==="ArrowLeft"||i.key==="PageUp")&&xs(Kt-1))});const mh=()=>yt.findIndex(i=>i.id===location.hash.slice(1));window.addEventListener("hashchange",()=>{const i=mh();i>=0&&xs(i)});const Gs=ot("tip");bs.onHover=i=>{const e=kt?kt.hover(i):null;if(Gs.classList.toggle("on",!!(i&&e)),!i||!e)return;Gs.innerHTML=e;const t=14,n=Gs.offsetWidth,s=Gs.offsetHeight,r=i.x+t+n>Io.clientWidth?i.x-t-n:i.x+t,a=i.y+t+s>Io.clientHeight?i.y-t-s:i.y+t;Gs.style.transform=`translate(${Math.max(4,r)}px, ${Math.max(4,a)}px)`};const _h=()=>bs.applyTheme();window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",_h);new MutationObserver(_h).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});Zr(Math.max(0,mh()),!0);Yg(bs,(i,e)=>{ot("loading-text").textContent=`Loading the model's numbers ${i} / ${e}`}).then(i=>{kt=i,kt.onStack=Kg,Zr(Kt,!0),ot("loading").classList.add("done")}).catch(i=>{console.error(i),ot("loading-text").textContent="The model's numbers could not be loaded. Reload the page to try again."});
