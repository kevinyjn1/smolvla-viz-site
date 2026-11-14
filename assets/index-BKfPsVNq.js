var wh=Object.defineProperty;var Eh=(i,e,t)=>e in i?wh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var qe=(i,e,t)=>Eh(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="170",hs={ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Th=0,ol=1,Ah=2,Dc=1,Rh=2,Xn=3,mi=0,jt=1,Ln=2,fi=0,ds=1,ll=2,cl=3,hl=4,Ch=5,Ai=100,Ph=101,Lh=102,Dh=103,Uh=104,Ih=200,Nh=201,Fh=202,Oh=203,$r=204,Xr=205,kh=206,Bh=207,zh=208,Hh=209,Gh=210,Vh=211,Wh=212,$h=213,Xh=214,qr=0,Yr=1,jr=2,_s=3,Zr=4,Kr=5,Jr=6,Qr=7,Uc=0,qh=1,Yh=2,pi=0,jh=1,Zh=2,Kh=3,Jh=4,Qh=5,ed=6,td=7,Ic=300,gs=301,vs=302,eo=303,to=304,Za=306,no=1e3,Ci=1001,io=1002,Zt=1003,nd=1004,ra=1005,Sn=1006,tr=1007,Yn=1008,In=1009,Nc=1010,Fc=1011,Ks=1012,zo=1013,Li=1014,jn=1015,ea=1016,Ho=1017,Go=1018,xs=1020,Oc=35902,kc=1021,Bc=1022,dn=1023,zc=1024,Hc=1025,us=1026,ys=1027,Gc=1028,Vo=1029,Vc=1030,Wo=1031,$o=1033,ka=33776,Ba=33777,za=33778,Ha=33779,so=35840,ao=35841,ro=35842,oo=35843,lo=36196,co=37492,ho=37496,uo=37808,fo=37809,po=37810,mo=37811,_o=37812,go=37813,vo=37814,xo=37815,yo=37816,bo=37817,Mo=37818,So=37819,wo=37820,Eo=37821,Ga=36492,To=36494,Ao=36495,Wc=36283,Ro=36284,Co=36285,Po=36286,id=3200,sd=3201,ad=0,rd=1,Dn="",cn="srgb",Ii="srgb-linear",Ka="linear",dt="srgb",ki=7680,dl=519,od=512,ld=513,cd=514,$c=515,hd=516,dd=517,ud=518,fd=519,Lo=35044,ul="300 es",Zn=2e3,$a=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fl=1234567;const Ys=Math.PI/180,Js=180/Math.PI;function Kn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function Xo(i,e){return(i%e+e)%e}function pd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function md(i,e,t){return i!==e?(t-i)/(e-i):0}function js(i,e,t){return(1-t)*i+t*e}function _d(i,e,t,n){return js(i,e,1-Math.exp(-t*n))}function gd(i,e=1){return e-Math.abs(Xo(i,e*2)-e)}function vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function xd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bd(i,e){return i+Math.random()*(e-i)}function Md(i){return i*(.5-Math.random())}function Sd(i){i!==void 0&&(fl=i);let e=fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wd(i){return i*Ys}function Ed(i){return i*Js}function Td(i){return(i&i-1)===0&&i!==0}function Ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cd(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),h=r((e+n)/2),u=a((e-n)/2),p=r((e-n)/2),m=a((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*p,o*c);break;case"YZY":i.set(l*p,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*p,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qo={DEG2RAD:Ys,RAD2DEG:Js,generateUUID:Kn,clamp:Nt,euclideanModulo:Xo,mapLinear:pd,inverseLerp:md,lerp:js,damp:_d,pingpong:gd,smoothstep:vd,smootherstep:xd,randInt:yd,randFloat:bd,randFloatSpread:Md,seededRandom:Sd,degToRad:wd,radToDeg:Ed,isPowerOfTwo:Td,ceilPowerOfTwo:Ad,floorPowerOfTwo:Rd,setQuaternionFromProperEuler:Cd,normalize:lt,denormalize:bn};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,s,a,r,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],g=n[8],v=s[0],f=s[3],d=s[6],R=s[1],T=s[4],M=s[7],W=s[2],D=s[5],E=s[8];return a[0]=r*v+o*R+l*W,a[3]=r*f+o*T+l*D,a[6]=r*d+o*M+l*E,a[1]=c*v+h*R+u*W,a[4]=c*f+h*T+u*D,a[7]=c*d+h*M+u*E,a[2]=p*v+m*R+g*W,a[5]=p*f+m*T+g*D,a[8]=p*d+m*M+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,p=o*l-h*a,m=c*a-r*l,g=t*u+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*r)*v,e[3]=p*v,e[4]=(h*t-s*l)*v,e[5]=(s*a-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nr.makeScale(e,t)),this}rotate(e){return this.premultiply(nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new Ye;function Xc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pd(){const i=Xa("canvas");return i.style.display="block",i}const pl={};function Xs(i){i in pl||(pl[i]=!0,console.warn(i))}function Ld(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Dd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ud(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(i.r=Jn(i.r),i.g=Jn(i.g),i.b=Jn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?Ka:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ml=[.64,.33,.3,.6,.15,.06],_l=[.2126,.7152,.0722],gl=[.3127,.329],vl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[Ii]:{primaries:ml,whitePoint:gl,transfer:Ka,toXYZ:vl,fromXYZ:xl,luminanceCoefficients:_l,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:ml,whitePoint:gl,transfer:dt,toXYZ:vl,fromXYZ:xl,luminanceCoefficients:_l,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});let Bi;class Id{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Xa("canvas")),Bi.width=e.width,Bi.height=e.height;const n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Jn(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nd=0;class qc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ir(s[r].image)):a.push(ir(s[r]))}else a=ir(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Id.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fd=0;class Bt extends Ni{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Ci,s=Ci,a=Sn,r=Yn,o=dn,l=In,c=Bt.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Kn(),this.name="",this.source=new qc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Ic;Bt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],g=l[9],v=l[2],f=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(m+1)/2,W=(d+1)/2,D=(h+p)/4,E=(u+v)/4,L=(g+f)/4;return T>M&&T>W?T<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(T),s=D/n,a=E/n):M>W?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=D/s,a=L/s):W<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(W),n=E/a,s=L/a),this.set(n,s,a,t),this}let R=Math.sqrt((f-g)*(f-g)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(R)<.001&&(R=1),this.x=(f-g)/R,this.y=(u-v)/R,this.z=(p-h)/R,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Od{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yc extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kd extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const p=a[r+0],m=a[r+1],g=a[r+2],v=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==p||c!==m||h!==g){let f=1-o;const d=l*p+c*m+h*g+u*v,R=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const W=Math.sqrt(T),D=Math.atan2(W,d*R);f=Math.sin(f*D)/W,o=Math.sin(o*D)/W}const M=o*R;if(l=l*f+p*M,c=c*f+m*M,h=h*f+g*M,u=u*f+v*M,f===1-o){const W=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=W,c*=W,h*=W,u*=W}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=a[r],p=a[r+1],m=a[r+2],g=a[r+3];return e[t]=o*g+h*u+l*m-c*p,e[t+1]=l*g+h*p+c*u-o*m,e[t+2]=c*g+h*m+o*p-l*u,e[t+3]=h*g-o*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(a/2),p=l(n/2),m=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"YXZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"ZXY":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"ZYX":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"YZX":this._x=p*h*u+c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u-p*m*g;break;case"XZY":this._x=p*h*u-c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(r-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(a-c)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(r-s)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=r*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=a*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),h=2*(o*t-a*s),u=2*(a*n-r*t);return this.x=t+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=s+l*u+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sr.copy(this).projectOnVector(e),this.sub(sr)}reflect(e){return this.sub(sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sr=new I,yl=new Ui;class un{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,mn):mn.fromBufferAttribute(a,r),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),la.subVectors(this.max,Cs),zi.subVectors(e.a,Cs),Hi.subVectors(e.b,Cs),Gi.subVectors(e.c,Cs),ni.subVectors(Hi,zi),ii.subVectors(Gi,Hi),_i.subVectors(zi,Gi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-_i.z,_i.y,ni.z,0,-ni.x,ii.z,0,-ii.x,_i.z,0,-_i.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-_i.y,_i.x,0];return!ar(t,zi,Hi,Gi,la)||(t=[1,0,0,0,1,0,0,0,1],!ar(t,zi,Hi,Gi,la))?!1:(ca.crossVectors(ni,ii),t=[ca.x,ca.y,ca.z],ar(t,zi,Hi,Gi,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new I,new I,new I,new I,new I,new I,new I,new I],mn=new I,oa=new un,zi=new I,Hi=new I,Gi=new I,ni=new I,ii=new I,_i=new I,Cs=new I,la=new I,ca=new I,gi=new I;function ar(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){gi.fromArray(i,a);const o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Bd=new un,Ps=new I,rr=new I;class Ss{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bd.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const t=Ps.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(rr)),this.expandByPoint(Ps.copy(e.center).sub(rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new I,or=new I,ha=new I,si=new I,lr=new I,da=new I,cr=new I;class Ja{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){or.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),si.copy(this.origin).sub(or);const a=e.distanceTo(t)*.5,r=-this.direction.dot(ha),o=si.dot(this.direction),l=-si.dot(ha),c=si.lengthSq(),h=Math.abs(1-r*r);let u,p,m,g;if(h>0)if(u=r*l-o,p=r*o-l,g=a*h,u>=0)if(p>=-g)if(p<=g){const v=1/h;u*=v,p*=v,m=u*(u+r*p+2*o)+p*(r*u+p+2*l)+c}else p=a,u=Math.max(0,-(r*p+o)),m=-u*u+p*(p+2*l)+c;else p=-a,u=Math.max(0,-(r*p+o)),m=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-r*a+o)),p=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-a,-l),a),m=p*(p+2*l)+c):(u=Math.max(0,-(r*a+o)),p=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+p*(p+2*l)+c);else p=r>0?-a:a,u=Math.max(0,-(r*p+o)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(or).addScaledVector(ha,p),m}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(a=(e.min.y-p.y)*h,r=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,r=(e.min.y-p.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,a){lr.subVectors(t,e),da.subVectors(n,e),cr.crossVectors(lr,da);let r=this.direction.dot(cr),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;si.subVectors(this.origin,e);const l=o*this.direction.dot(da.crossVectors(si,da));if(l<0)return null;const c=o*this.direction.dot(lr.cross(si));if(c<0||l+c>r)return null;const h=-o*si.dot(cr);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,n,s,a,r,o,l,c,h,u,p,m,g,v,f){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,h,u,p,m,g,v,f)}set(e,t,n,s,a,r,o,l,c,h,u,p,m,g,v,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=g,d[11]=v,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Vi.setFromMatrixColumn(e,0).length(),a=1/Vi.setFromMatrixColumn(e,1).length(),r=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const p=r*h,m=r*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=p-v*c,t[9]=-o*l,t[2]=v-p*c,t[6]=g+m*c,t[10]=r*l}else if(e.order==="YXZ"){const p=l*h,m=l*u,g=c*h,v=c*u;t[0]=p+v*o,t[4]=g*o-m,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=m*o-g,t[6]=v+p*o,t[10]=r*l}else if(e.order==="ZXY"){const p=l*h,m=l*u,g=c*h,v=c*u;t[0]=p-v*o,t[4]=-r*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=r*h,t[9]=v-p*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const p=r*h,m=r*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=p*c+v,t[1]=l*u,t[5]=v*c+p,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const p=r*l,m=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-p*u,t[8]=g*u+m,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=p-v*u}else if(e.order==="XZY"){const p=r*l,m=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+v,t[5]=r*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=v*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,Hd)}lookAt(e,t,n){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ai.crossVectors(n,en),ai.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ai.crossVectors(n,en)),ai.normalize(),ua.crossVectors(en,ai),s[0]=ai.x,s[4]=ua.x,s[8]=en.x,s[1]=ai.y,s[5]=ua.y,s[9]=en.y,s[2]=ai.z,s[6]=ua.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],g=n[2],v=n[6],f=n[10],d=n[14],R=n[3],T=n[7],M=n[11],W=n[15],D=s[0],E=s[4],L=s[8],S=s[12],x=s[1],C=s[5],G=s[9],$=s[13],te=s[2],ne=s[6],j=s[10],Q=s[14],X=s[3],fe=s[7],ve=s[11],Re=s[15];return a[0]=r*D+o*x+l*te+c*X,a[4]=r*E+o*C+l*ne+c*fe,a[8]=r*L+o*G+l*j+c*ve,a[12]=r*S+o*$+l*Q+c*Re,a[1]=h*D+u*x+p*te+m*X,a[5]=h*E+u*C+p*ne+m*fe,a[9]=h*L+u*G+p*j+m*ve,a[13]=h*S+u*$+p*Q+m*Re,a[2]=g*D+v*x+f*te+d*X,a[6]=g*E+v*C+f*ne+d*fe,a[10]=g*L+v*G+f*j+d*ve,a[14]=g*S+v*$+f*Q+d*Re,a[3]=R*D+T*x+M*te+W*X,a[7]=R*E+T*C+M*ne+W*fe,a[11]=R*L+T*G+M*j+W*ve,a[15]=R*S+T*$+M*Q+W*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],g=e[3],v=e[7],f=e[11],d=e[15];return g*(+a*l*u-s*c*u-a*o*p+n*c*p+s*o*m-n*l*m)+v*(+t*l*m-t*c*p+a*r*p-s*r*m+s*c*h-a*l*h)+f*(+t*c*u-t*o*m-a*r*u+n*r*m+a*o*h-n*c*h)+d*(-s*o*h-t*l*u+t*o*p+s*r*u-n*r*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],g=e[12],v=e[13],f=e[14],d=e[15],R=u*f*c-v*p*c+v*l*m-o*f*m-u*l*d+o*p*d,T=g*p*c-h*f*c-g*l*m+r*f*m+h*l*d-r*p*d,M=h*v*c-g*u*c+g*o*m-r*v*m-h*o*d+r*u*d,W=g*u*l-h*v*l-g*o*p+r*v*p+h*o*f-r*u*f,D=t*R+n*T+s*M+a*W;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/D;return e[0]=R*E,e[1]=(v*p*a-u*f*a-v*s*m+n*f*m+u*s*d-n*p*d)*E,e[2]=(o*f*a-v*l*a+v*s*c-n*f*c-o*s*d+n*l*d)*E,e[3]=(u*l*a-o*p*a-u*s*c+n*p*c+o*s*m-n*l*m)*E,e[4]=T*E,e[5]=(h*f*a-g*p*a+g*s*m-t*f*m-h*s*d+t*p*d)*E,e[6]=(g*l*a-r*f*a-g*s*c+t*f*c+r*s*d-t*l*d)*E,e[7]=(r*p*a-h*l*a+h*s*c-t*p*c-r*s*m+t*l*m)*E,e[8]=M*E,e[9]=(g*u*a-h*v*a-g*n*m+t*v*m+h*n*d-t*u*d)*E,e[10]=(r*v*a-g*o*a+g*n*c-t*v*c-r*n*d+t*o*d)*E,e[11]=(h*o*a-r*u*a-h*n*c+t*u*c+r*n*m-t*o*m)*E,e[12]=W*E,e[13]=(h*v*s-g*u*s+g*n*p-t*v*p-h*n*f+t*u*f)*E,e[14]=(g*o*s-r*v*s-g*n*l+t*v*l+r*n*f-t*o*f)*E,e[15]=(r*u*s-h*o*s+h*n*l-t*u*l-r*n*p+t*o*p)*E,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,u=o+o,p=a*c,m=a*h,g=a*u,v=r*h,f=r*u,d=o*u,R=l*c,T=l*h,M=l*u,W=n.x,D=n.y,E=n.z;return s[0]=(1-(v+d))*W,s[1]=(m+M)*W,s[2]=(g-T)*W,s[3]=0,s[4]=(m-M)*D,s[5]=(1-(p+d))*D,s[6]=(f+R)*D,s[7]=0,s[8]=(g+T)*E,s[9]=(f-R)*E,s[10]=(1-(p+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=Vi.set(s[0],s[1],s[2]).length();const r=Vi.set(s[4],s[5],s[6]).length(),o=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const c=1/a,h=1/r,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=Zn){const l=this.elements,c=2*a/(t-e),h=2*a/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s);let m,g;if(o===Zn)m=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===$a)m=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=Zn){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(r-a),p=(t+e)*c,m=(n+s)*h;let g,v;if(o===Zn)g=(r+a)*u,v=-2*u;else if(o===$a)g=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vi=new I,_n=new xt,zd=new I(0,0,0),Hd=new I(1,1,1),ai=new I,ua=new I,en=new I,bl=new xt,Ml=new Ui;class Qn{constructor(e=0,t=0,n=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Yo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gd=0;const Sl=new I,Wi=new Ui,zn=new xt,fa=new I,Ls=new I,Vd=new I,Wd=new Ui,wl=new I(1,0,0),El=new I(0,1,0),Tl=new I(0,0,1),Al={type:"added"},$d={type:"removed"},$i={type:"childadded",child:null},hr={type:"childremoved",child:null};class Kt extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new I,t=new Qn,n=new Ui,s=new I(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ye}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(wl,e)}rotateY(e){return this.rotateOnAxis(El,e)}rotateZ(e){return this.rotateOnAxis(Tl,e)}translateOnAxis(e,t){return Sl.copy(e).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wl,e)}translateY(e){return this.translateOnAxis(El,e)}translateZ(e){return this.translateOnAxis(Tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fa.copy(e):fa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ls,fa,this.up):zn.lookAt(fa,Ls,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(zn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Al),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($d),hr.child=e,this.dispatchEvent(hr),hr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Al),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,Vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),p=r(e.skeletons),m=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new I(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new I,Hn=new I,dr=new I,Gn=new I,Xi=new I,qi=new I,Rl=new I,ur=new I,fr=new I,pr=new I,mr=new ht,_r=new ht,gr=new ht;class Mn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gn.subVectors(e,t),s.cross(gn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){gn.subVectors(s,t),Hn.subVectors(n,t),dr.subVectors(e,t);const r=gn.dot(gn),o=gn.dot(Hn),l=gn.dot(dr),c=Hn.dot(Hn),h=Hn.dot(dr),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const p=1/u,m=(c*l-o*h)*p,g=(r*h-o*l)*p;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Gn.x),l.addScaledVector(r,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return mr.setScalar(0),_r.setScalar(0),gr.setScalar(0),mr.fromBufferAttribute(e,t),_r.fromBufferAttribute(e,n),gr.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(mr,a.x),r.addScaledVector(_r,a.y),r.addScaledVector(gr,a.z),r}static isFrontFacing(e,t,n,s){return gn.subVectors(n,t),Hn.subVectors(e,t),gn.cross(Hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;Xi.subVectors(s,n),qi.subVectors(a,n),ur.subVectors(e,n);const l=Xi.dot(ur),c=qi.dot(ur);if(l<=0&&c<=0)return t.copy(n);fr.subVectors(e,s);const h=Xi.dot(fr),u=qi.dot(fr);if(h>=0&&u<=h)return t.copy(s);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Xi,r);pr.subVectors(e,a);const m=Xi.dot(pr),g=qi.dot(pr);if(g>=0&&m<=g)return t.copy(a);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(qi,o);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return Rl.subVectors(a,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Rl,o);const d=1/(f+v+p);return r=v*d,o=p*d,t.copy(n).addScaledVector(Xi,r).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},pa={h:0,s:0,l:0};function vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Xo(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=vr(r,a,e+1/3),this.g=vr(r,a,e),this.b=vr(r,a,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=cn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return tt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Nt(Ot.r*255,0,255))*65536+Math.round(Nt(Ot.g*255,0,255))*256+Math.round(Nt(Ot.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,s=Ot.g,a=Ot.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=cn){tt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,s=Ot.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(pa);const n=js(ri.h,pa.h,t),s=js(ri.s,pa.s,t),a=js(ri.l,pa.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Je;Je.NAMES=jc;let Xd=0;class ta extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Kn(),this.name="",this.blending=ds,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$r,this.blendDst=Xr,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$r&&(n.blendSrc=this.blendSrc),this.blendDst!==Xr&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zc extends ta{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,ma=new $e;class Tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lo,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ma.fromBufferAttribute(this,t),ma.applyMatrix3(e),this.setXY(t,ma.x,ma.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),a=lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lo&&(e.usage=this.usage),e}}class Kc extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jc extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class An extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qd=0;const rn=new xt,xr=new Kt,Yi=new I,tn=new un,Ds=new un,At=new I;class fn extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xc(e)?Jc:Kc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ye().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new An(n,3))}else{for(let n=0,s=t.count;n<s;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];tn.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(tn.min,Ds.min),tn.expandByPoint(At),At.addVectors(tn.max,Ds.max),tn.expandByPoint(At)):(tn.expandByPoint(Ds.min),tn.expandByPoint(Ds.max))}tn.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)At.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(At));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(e,c),At.add(Yi)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new I,l[L]=new I;const c=new I,h=new I,u=new I,p=new $e,m=new $e,g=new $e,v=new I,f=new I;function d(L,S,x){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),p.fromBufferAttribute(a,L),m.fromBufferAttribute(a,S),g.fromBufferAttribute(a,x),h.sub(c),u.sub(c),m.sub(p),g.sub(p);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(C),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[L].add(v),o[S].add(v),o[x].add(v),l[L].add(f),l[S].add(f),l[x].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let L=0,S=R.length;L<S;++L){const x=R[L],C=x.start,G=x.count;for(let $=C,te=C+G;$<te;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}const T=new I,M=new I,W=new I,D=new I;function E(L){W.fromBufferAttribute(s,L),D.copy(W);const S=o[L];T.copy(S),T.sub(W.multiplyScalar(W.dot(S))).normalize(),M.crossVectors(D,S);const C=M.dot(l[L])<0?-1:1;r.setXYZW(L,T.x,T.y,T.z,C)}for(let L=0,S=R.length;L<S;++L){const x=R[L],C=x.start,G=x.count;for(let $=C,te=C+G;$<te;$+=3)E(e.getX($+0)),E(e.getX($+1)),E(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new I,a=new I,r=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),v=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,f),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),r.fromBufferAttribute(t,p+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let d=0;d<h;d++)p[g++]=c[m++]}return new Tn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new xt,vi=new Ja,_a=new Ss,Pl=new I,ga=new I,va=new I,xa=new I,yr=new I,ya=new I,Ll=new I,ba=new I;class wn extends Kt{constructor(e=new fn,t=new Zc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){ya.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(yr.fromBufferAttribute(u,e),r?ya.addScaledVector(yr,h):ya.addScaledVector(yr.sub(t),h))}t.add(ya)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(a),vi.copy(e.ray).recast(e.near),!(_a.containsPoint(vi.origin)===!1&&(vi.intersectSphere(_a,Pl)===null||vi.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Cl.copy(a).invert(),vi.copy(e.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,p=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const f=p[g],d=r[f.materialIndex],R=Math.max(f.start,m.start),T=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let M=R,W=T;M<W;M+=3){const D=o.getX(M),E=o.getX(M+1),L=o.getX(M+2);s=Ma(this,d,e,n,c,h,u,D,E,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let f=g,d=v;f<d;f+=3){const R=o.getX(f),T=o.getX(f+1),M=o.getX(f+2);s=Ma(this,r,e,n,c,h,u,R,T,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=p.length;g<v;g++){const f=p[g],d=r[f.materialIndex],R=Math.max(f.start,m.start),T=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let M=R,W=T;M<W;M+=3){const D=M,E=M+1,L=M+2;s=Ma(this,d,e,n,c,h,u,D,E,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,d=v;f<d;f+=3){const R=f,T=f+1,M=f+2;s=Ma(this,r,e,n,c,h,u,R,T,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Yd(i,e,t,n,s,a,r,o){let l;if(e.side===jt?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===mi,o),l===null)return null;ba.copy(o),ba.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:i}}function Ma(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,ga),i.getVertexPosition(l,va),i.getVertexPosition(c,xa);const h=Yd(i,e,t,n,ga,va,xa,Ll);if(h){const u=new I;Mn.getBarycoord(Ll,ga,va,xa,u),s&&(h.uv=Mn.getInterpolatedAttribute(s,o,l,c,u,new $e)),a&&(h.uv1=Mn.getInterpolatedAttribute(a,o,l,c,u,new $e)),r&&(h.normal=Mn.getInterpolatedAttribute(r,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new I,materialIndex:0};Mn.getNormal(ga,va,xa,p.normal),h.face=p,h.barycoord=u}return h}class na extends fn{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let p=0,m=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(h,3)),this.setAttribute("uv",new An(u,2));function g(v,f,d,R,T,M,W,D,E,L,S){const x=M/E,C=W/L,G=M/2,$=W/2,te=D/2,ne=E+1,j=L+1;let Q=0,X=0;const fe=new I;for(let ve=0;ve<j;ve++){const Re=ve*C-$;for(let Pe=0;Pe<ne;Pe++){const Ke=Pe*x-G;fe[v]=Ke*R,fe[f]=Re*T,fe[d]=te,c.push(fe.x,fe.y,fe.z),fe[v]=0,fe[f]=0,fe[d]=D>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Pe/E),u.push(1-ve/L),Q+=1}}for(let ve=0;ve<L;ve++)for(let Re=0;Re<E;Re++){const Pe=p+Re+ne*ve,Ke=p+Re+ne*(ve+1),K=p+(Re+1)+ne*(ve+1),ce=p+(Re+1)+ne*ve;l.push(Pe,Ke,ce),l.push(Ke,K,ce),X+=6}o.addGroup(m,X,S),m+=X,p+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=bs(i[t]);for(const s in n)e[s]=n[s]}return e}function jd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const jo={clone:bs,merge:Vt};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends ta{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class eh extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new I,Dl=new $e,Ul=new $e;class hn extends eh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Dl,Ul),t.subVectors(Ul,Dl)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Zi=1;class Jd extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(ji,Zi,e,t);s.layers=this.layers,this.add(s);const a=new hn(ji,Zi,e,t);a.layers=this.layers,this.add(a);const r=new hn(ji,Zi,e,t);r.layers=this.layers,this.add(r);const o=new hn(ji,Zi,e,t);o.layers=this.layers,this.add(o);const l=new hn(ji,Zi,e,t);l.layers=this.layers,this.add(l);const c=new hn(ji,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class th extends Bt{constructor(e,t,n,s,a,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:gs,super(e,t,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qd extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new th(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new na(5,5,5),a=new Nn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:fi});a.uniforms.tEquirect.value=t;const r=new wn(s,a),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Sn),new Jd(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const br=new I,eu=new I,tu=new Ye;class ci{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=br.subVectors(n,t).cross(eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(br),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tu.getNormalMatrix(e),s=this.coplanarPoint(br).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Ss,Sa=new I;class nh{constructor(e=new ci,t=new ci,n=new ci,s=new ci,a=new ci,r=new ci){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){const n=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],g=s[9],v=s[10],f=s[11],d=s[12],R=s[13],T=s[14],M=s[15];if(n[0].setComponents(l-a,p-c,f-m,M-d).normalize(),n[1].setComponents(l+a,p+c,f+m,M+d).normalize(),n[2].setComponents(l+r,p+h,f+g,M+R).normalize(),n[3].setComponents(l-r,p-h,f-g,M-R).normalize(),n[4].setComponents(l-o,p-u,f-v,M-T).normalize(),t===Zn)n[5].setComponents(l+o,p+u,f+v,M+T).normalize();else if(t===$a)n[5].setComponents(o,u,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ih(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function nu(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<u.length;m++){const g=u[p],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,u[p]=v)}u.length=p+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}class ia extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,p=t/l,m=[],g=[],v=[],f=[];for(let d=0;d<h;d++){const R=d*p-r;for(let T=0;T<c;T++){const M=T*u-a;g.push(M,-R,0),v.push(0,0,1),f.push(T/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<o;R++){const T=R+c*d,M=R+c*(d+1),W=R+1+c*(d+1),D=R+1+c*d;m.push(T,M,D),m.push(M,W,D)}this.setIndex(m),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(v,3)),this.setAttribute("uv",new An(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.widthSegments,e.heightSegments)}}var iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,su=`#ifdef USE_ALPHAHASH
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
#endif`,au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cu=`#ifdef USE_AOMAP
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
#endif`,hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,du=`#ifdef USE_BATCHING
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
#endif`,uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_u=`#ifdef USE_IRIDESCENCE
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
#endif`,gu=`#ifdef USE_BUMPMAP
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
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tu=`#define PI 3.141592653589793
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
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ru=`vec3 transformedNormal = objectNormal;
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
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ou=`#ifdef USE_ENVMAP
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
#endif`,ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wu=`#ifdef USE_GRADIENTMAP
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
}`,$u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yu=`uniform bool receiveShadow;
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
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,Zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
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
#endif`,tf=`struct PhysicalMaterial {
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
}`,nf=`
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
#endif`,sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,of=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ff=`#if defined( USE_POINTS_UV )
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
#endif`,pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`#ifdef USE_MORPHTARGETS
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
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
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
#endif`,Af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Df=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,If=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gf=`float getShadowMask() {
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
}`,Vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wf=`#ifdef USE_SKINNING
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
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xf=`#ifdef USE_SKINNING
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
#endif`,qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kf=`#ifdef USE_TRANSMISSION
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
#endif`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sp=`uniform sampler2D t2D;
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`#include <common>
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
}`,hp=`#if DEPTH_PACKING == 3200
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
}`,dp=`#define DISTANCE
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
}`,up=`#define DISTANCE
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`uniform float scale;
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
}`,_p=`uniform vec3 diffuse;
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
}`,gp=`#include <common>
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
}`,vp=`uniform vec3 diffuse;
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
}`,xp=`#define LAMBERT
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
}`,yp=`#define LAMBERT
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
}`,bp=`#define MATCAP
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
}`,Mp=`#define MATCAP
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
}`,Sp=`#define NORMAL
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
}`,wp=`#define NORMAL
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
}`,Ep=`#define PHONG
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
}`,Tp=`#define PHONG
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
}`,Ap=`#define STANDARD
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
}`,Rp=`#define STANDARD
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
}`,Cp=`#define TOON
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
}`,Pp=`#define TOON
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
}`,Lp=`uniform float size;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Ip=`uniform vec3 color;
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
}`,Np=`uniform float rotation;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:iu,alphahash_pars_fragment:su,alphamap_fragment:au,alphamap_pars_fragment:ru,alphatest_fragment:ou,alphatest_pars_fragment:lu,aomap_fragment:cu,aomap_pars_fragment:hu,batching_pars_vertex:du,batching_vertex:uu,begin_vertex:fu,beginnormal_vertex:pu,bsdfs:mu,iridescence_fragment:_u,bumpmap_pars_fragment:gu,clipping_planes_fragment:vu,clipping_planes_pars_fragment:xu,clipping_planes_pars_vertex:yu,clipping_planes_vertex:bu,color_fragment:Mu,color_pars_fragment:Su,color_pars_vertex:wu,color_vertex:Eu,common:Tu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:Ru,displacementmap_pars_vertex:Cu,displacementmap_vertex:Pu,emissivemap_fragment:Lu,emissivemap_pars_fragment:Du,colorspace_fragment:Uu,colorspace_pars_fragment:Iu,envmap_fragment:Nu,envmap_common_pars_fragment:Fu,envmap_pars_fragment:Ou,envmap_pars_vertex:ku,envmap_physical_pars_fragment:ju,envmap_vertex:Bu,fog_vertex:zu,fog_pars_vertex:Hu,fog_fragment:Gu,fog_pars_fragment:Vu,gradientmap_pars_fragment:Wu,lightmap_pars_fragment:$u,lights_lambert_fragment:Xu,lights_lambert_pars_fragment:qu,lights_pars_begin:Yu,lights_toon_fragment:Zu,lights_toon_pars_fragment:Ku,lights_phong_fragment:Ju,lights_phong_pars_fragment:Qu,lights_physical_fragment:ef,lights_physical_pars_fragment:tf,lights_fragment_begin:nf,lights_fragment_maps:sf,lights_fragment_end:af,logdepthbuf_fragment:rf,logdepthbuf_pars_fragment:of,logdepthbuf_pars_vertex:lf,logdepthbuf_vertex:cf,map_fragment:hf,map_pars_fragment:df,map_particle_fragment:uf,map_particle_pars_fragment:ff,metalnessmap_fragment:pf,metalnessmap_pars_fragment:mf,morphinstance_vertex:_f,morphcolor_vertex:gf,morphnormal_vertex:vf,morphtarget_pars_vertex:xf,morphtarget_vertex:yf,normal_fragment_begin:bf,normal_fragment_maps:Mf,normal_pars_fragment:Sf,normal_pars_vertex:wf,normal_vertex:Ef,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:Af,clearcoat_normal_fragment_maps:Rf,clearcoat_pars_fragment:Cf,iridescence_pars_fragment:Pf,opaque_fragment:Lf,packing:Df,premultiplied_alpha_fragment:Uf,project_vertex:If,dithering_fragment:Nf,dithering_pars_fragment:Ff,roughnessmap_fragment:Of,roughnessmap_pars_fragment:kf,shadowmap_pars_fragment:Bf,shadowmap_pars_vertex:zf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Gf,skinbase_vertex:Vf,skinning_pars_vertex:Wf,skinning_vertex:$f,skinnormal_vertex:Xf,specularmap_fragment:qf,specularmap_pars_fragment:Yf,tonemapping_fragment:jf,tonemapping_pars_fragment:Zf,transmission_fragment:Kf,transmission_pars_fragment:Jf,uv_pars_fragment:Qf,uv_pars_vertex:ep,uv_vertex:tp,worldpos_vertex:np,background_vert:ip,background_frag:sp,backgroundCube_vert:ap,backgroundCube_frag:rp,cube_vert:op,cube_frag:lp,depth_vert:cp,depth_frag:hp,distanceRGBA_vert:dp,distanceRGBA_frag:up,equirect_vert:fp,equirect_frag:pp,linedashed_vert:mp,linedashed_frag:_p,meshbasic_vert:gp,meshbasic_frag:vp,meshlambert_vert:xp,meshlambert_frag:yp,meshmatcap_vert:bp,meshmatcap_frag:Mp,meshnormal_vert:Sp,meshnormal_frag:wp,meshphong_vert:Ep,meshphong_frag:Tp,meshphysical_vert:Ap,meshphysical_frag:Rp,meshtoon_vert:Cp,meshtoon_frag:Pp,points_vert:Lp,points_frag:Dp,shadow_vert:Up,shadow_frag:Ip,sprite_vert:Np,sprite_frag:Fp},ye={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Yt={basic:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Vt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Vt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Vt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Vt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Vt([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Vt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Vt([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Vt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Vt([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Vt([ye.common,ye.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Vt([ye.lights,ye.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Yt.physical={uniforms:Vt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const wa={r:0,b:0,g:0},yi=new Qn,Op=new xt;function kp(i,e,t,n,s,a,r){const o=new Je(0);let l=a===!0?0:1,c,h,u=null,p=0,m=null;function g(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?t:e).get(T)),T}function v(R){let T=!1;const M=g(R);M===null?d(o,l):M&&M.isColor&&(d(M,1),T=!0);const W=i.xr.getEnvironmentBlendMode();W==="additive"?n.buffers.color.setClear(0,0,0,1,r):W==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(R,T){const M=g(T);M&&(M.isCubeTexture||M.mapping===Za)?(h===void 0&&(h=new wn(new na(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:bs(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(W,D,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(T.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Op.makeRotationFromEuler(yi)),h.material.toneMapped=tt.getTransfer(M.colorSpace)!==dt,(u!==M||p!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,p=M.version,m=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new wn(new ia(2,2),new Nn({name:"BackgroundMaterial",uniforms:bs(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=tt.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,p=M.version,m=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function d(R,T){R.getRGB(wa,Qc(i)),n.buffers.color.setClear(wa.r,wa.g,wa.b,T,r)}return{getClearColor:function(){return o},setClearColor:function(R,T=1){o.set(R),l=T,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,d(o,l)},render:v,addToRenderList:f}}function Bp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let a=s,r=!1;function o(x,C,G,$,te){let ne=!1;const j=u($,G,C);a!==j&&(a=j,c(a.object)),ne=m(x,$,G,te),ne&&g(x,$,G,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(ne||r)&&(r=!1,M(x,C,G,$),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,C,G){const $=G.wireframe===!0;let te=n[x.id];te===void 0&&(te={},n[x.id]=te);let ne=te[C.id];ne===void 0&&(ne={},te[C.id]=ne);let j=ne[$];return j===void 0&&(j=p(l()),ne[$]=j),j}function p(x){const C=[],G=[],$=[];for(let te=0;te<t;te++)C[te]=0,G[te]=0,$[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:$,object:x,attributes:{},index:null}}function m(x,C,G,$){const te=a.attributes,ne=C.attributes;let j=0;const Q=G.getAttributes();for(const X in Q)if(Q[X].location>=0){const ve=te[X];let Re=ne[X];if(Re===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Re=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Re=x.instanceColor)),ve===void 0||ve.attribute!==Re||Re&&ve.data!==Re.data)return!0;j++}return a.attributesNum!==j||a.index!==$}function g(x,C,G,$){const te={},ne=C.attributes;let j=0;const Q=G.getAttributes();for(const X in Q)if(Q[X].location>=0){let ve=ne[X];ve===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ve=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ve=x.instanceColor));const Re={};Re.attribute=ve,ve&&ve.data&&(Re.data=ve.data),te[X]=Re,j++}a.attributes=te,a.attributesNum=j,a.index=$}function v(){const x=a.newAttributes;for(let C=0,G=x.length;C<G;C++)x[C]=0}function f(x){d(x,0)}function d(x,C){const G=a.newAttributes,$=a.enabledAttributes,te=a.attributeDivisors;G[x]=1,$[x]===0&&(i.enableVertexAttribArray(x),$[x]=1),te[x]!==C&&(i.vertexAttribDivisor(x,C),te[x]=C)}function R(){const x=a.newAttributes,C=a.enabledAttributes;for(let G=0,$=C.length;G<$;G++)C[G]!==x[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function T(x,C,G,$,te,ne,j){j===!0?i.vertexAttribIPointer(x,C,G,te,ne):i.vertexAttribPointer(x,C,G,$,te,ne)}function M(x,C,G,$){v();const te=$.attributes,ne=G.getAttributes(),j=C.defaultAttributeValues;for(const Q in ne){const X=ne[Q];if(X.location>=0){let fe=te[Q];if(fe===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor)),fe!==void 0){const ve=fe.normalized,Re=fe.itemSize,Pe=e.get(fe);if(Pe===void 0)continue;const Ke=Pe.buffer,K=Pe.type,ce=Pe.bytesPerElement,Me=K===i.INT||K===i.UNSIGNED_INT||fe.gpuType===zo;if(fe.isInterleavedBufferAttribute){const xe=fe.data,Ie=xe.stride,ke=fe.offset;if(xe.isInstancedInterleavedBuffer){for(let Be=0;Be<X.locationSize;Be++)d(X.location+Be,xe.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Be=0;Be<X.locationSize;Be++)f(X.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Be=0;Be<X.locationSize;Be++)T(X.location+Be,Re/X.locationSize,K,ve,Ie*ce,(ke+Re/X.locationSize*Be)*ce,Me)}else{if(fe.isInstancedBufferAttribute){for(let xe=0;xe<X.locationSize;xe++)d(X.location+xe,fe.meshPerAttribute);x.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let xe=0;xe<X.locationSize;xe++)f(X.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let xe=0;xe<X.locationSize;xe++)T(X.location+xe,Re/X.locationSize,K,ve,Re*ce,Re/X.locationSize*xe*ce,Me)}}else if(j!==void 0){const ve=j[Q];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(X.location,ve);break;case 3:i.vertexAttrib3fv(X.location,ve);break;case 4:i.vertexAttrib4fv(X.location,ve);break;default:i.vertexAttrib1fv(X.location,ve)}}}}R()}function W(){L();for(const x in n){const C=n[x];for(const G in C){const $=C[G];for(const te in $)h($[te].object),delete $[te];delete C[G]}delete n[x]}}function D(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const G in C){const $=C[G];for(const te in $)h($[te].object),delete $[te];delete C[G]}delete n[x.id]}function E(x){for(const C in n){const G=n[C];if(G[x.id]===void 0)continue;const $=G[x.id];for(const te in $)h($[te].object),delete $[te];delete G[x.id]}}function L(){S(),r=!0,a!==s&&(a=s,c(a.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:W,releaseStatesOfGeometry:D,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:f,disableUnusedAttributes:R}}function zp(i,e,t){let n;function s(c){n=c}function a(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}function l(c,h,u,p){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)r(c[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*p[v];t.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hp(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==dn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const L=E===ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==In&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==jn&&!L)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),W=g>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:W,maxSamples:D}}function Gp(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new ci,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){const g=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||a&&!f)a?h(null):c();else{const R=a?0:n,T=R*4;let M=d.clippingState||null;l.value=M,M=h(g,p,T,m);for(let W=0;W!==T;++W)M[W]=t[W];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,m,g){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const d=m+v*4,R=p.matrixWorldInverse;o.getNormalMatrix(R),(f===null||f.length<d)&&(f=new Float32Array(d));for(let T=0,M=m;T!==v;++T,M+=4)r.copy(u[T]).applyMatrix4(R,o),r.normal.toArray(f,M),f[M+3]=r.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Vp(i){let e=new WeakMap;function t(r,o){return o===eo?r.mapping=gs:o===to&&(r.mapping=vs),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===eo||o===to)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Qd(l.height);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",s),t(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Wp extends eh{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const as=4,Il=[.125,.215,.35,.446,.526,.582],Ri=20,Mr=new Wp,Nl=new Je;let Sr=null,wr=0,Er=0,Tr=!1;const Ti=(1+Math.sqrt(5))/2,Ki=1/Ti,Fl=[new I(-Ti,Ki,0),new I(Ti,Ki,0),new I(-Ki,0,Ti),new I(Ki,0,Ti),new I(0,Ti,-Ki),new I(0,Ti,Ki),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Sr=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),Er=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sr,wr,Er),this._renderer.xr.enabled=Tr,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sr=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),Er=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ea,format:dn,colorSpace:Ii,depthBuffer:!1},s=kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(a)),this._blurMaterial=Xp(a,e,t)}return s}_compileMaterial(e){const t=new wn(this._lodPlanes[0],e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,n,s){const o=new hn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Nl),h.toneMapping=pi,h.autoClear=!1;const m=new Zc({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new wn(new na,m);let v=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,v=!0):(m.color.copy(Nl),v=!0);for(let d=0;d<6;d++){const R=d%3;R===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):R===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const T=this._cubeSize;Ea(s,R*T,d>2?T:0,T,T),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===gs||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new wn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ea(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Mr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Fl[(s-a-1)%Fl.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new wn(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Ri-1),v=a/g,f=isFinite(a)?1+Math.floor(h*v):Ri;f>Ri&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ri}`);const d=[];let R=0;for(let E=0;E<Ri;++E){const L=E/v,S=Math.exp(-L*L/2);d.push(S),E===0?R+=S:E<f&&(R+=2*S)}for(let E=0;E<d.length;E++)d[E]=d[E]/R;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=r==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:T}=this;p.dTheta.value=g,p.mipInt.value=T-n;const M=this._sizeLods[s],W=3*M*(s>T-as?s-T+as:0),D=4*(this._cubeSize-M);Ea(t,W,D,3*M,2*M),l.setRenderTarget(t),l.render(u,Mr)}}function $p(i){const e=[],t=[],n=[];let s=i;const a=i-as+1+Il.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let l=1/o;r>i-as?l=Il[r-i+as-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,f=2,d=1,R=new Float32Array(v*g*m),T=new Float32Array(f*g*m),M=new Float32Array(d*g*m);for(let D=0;D<m;D++){const E=D%3*2/3-1,L=D>2?0:-1,S=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];R.set(S,v*g*D),T.set(p,f*g*D);const x=[D,D,D,D,D,D];M.set(x,d*g*D)}const W=new fn;W.setAttribute("position",new Tn(R,v)),W.setAttribute("uv",new Tn(T,f)),W.setAttribute("faceIndex",new Tn(M,d)),e.push(W),s>as&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kl(i,e,t){const n=new Di(i,e,t);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xp(i,e,t){const n=new Float32Array(Ri),s=new I(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Bl(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function zl(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function qp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===eo||l===to,h=l===gs||l===vs;if(c||h){let u=e.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Ol(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Ol(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Yp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jp(i,e,t,n){const s={},a=new WeakMap;function r(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let f=0,d=v.length;f<d;f++)e.remove(v[f])}p.removeEventListener("dispose",r),delete s[p.id];const m=a.get(p);m&&(e.remove(m),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",r),s[p.id]=!0,t.memory.geometries++),p}function l(u){const p=u.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const v=m[g];for(let f=0,d=v.length;f<d;f++)e.update(v[f],i.ARRAY_BUFFER)}}function c(u){const p=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const R=m.array;v=m.version;for(let T=0,M=R.length;T<M;T+=3){const W=R[T+0],D=R[T+1],E=R[T+2];p.push(W,D,D,E,E,W)}}else if(g!==void 0){const R=g.array;v=g.version;for(let T=0,M=R.length/3-1;T<M;T+=3){const W=T+0,D=T+1,E=T+2;p.push(W,D,D,E,E,W)}}else return;const f=new(Xc(p)?Jc:Kc)(p,1);f.version=v;const d=a.get(u);d&&e.remove(d),a.set(u,f)}function h(u){const p=a.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Zp(i,e,t){let n;function s(p){n=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,m){i.drawElements(n,m,a,p*r),t.update(m,n,1)}function c(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,a,p*r,g),t.update(m,n,g))}function h(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,p,0,g);let f=0;for(let d=0;d<g;d++)f+=m[d];t.update(f,n,1)}function u(p,m,g,v){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<p.length;d++)c(p[d]/r,m[d],v[d]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,a,p,0,v,0,g);let d=0;for(let R=0;R<g;R++)d+=m[R]*v[R];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jp(i,e,t){const n=new WeakMap,s=new ht;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==u){let x=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),f===!0&&(M=3);let W=o.attributes.position.count*M,D=1;W>e.maxTextureSize&&(D=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const E=new Float32Array(W*D*4*u),L=new Yc(E,W,D,u);L.type=jn,L.needsUpdate=!0;const S=M*4;for(let C=0;C<u;C++){const G=d[C],$=R[C],te=T[C],ne=W*D*4*C;for(let j=0;j<G.count;j++){const Q=j*S;g===!0&&(s.fromBufferAttribute(G,j),E[ne+Q+0]=s.x,E[ne+Q+1]=s.y,E[ne+Q+2]=s.z,E[ne+Q+3]=0),v===!0&&(s.fromBufferAttribute($,j),E[ne+Q+4]=s.x,E[ne+Q+5]=s.y,E[ne+Q+6]=s.z,E[ne+Q+7]=0),f===!0&&(s.fromBufferAttribute(te,j),E[ne+Q+8]=s.x,E[ne+Q+9]=s.y,E[ne+Q+10]=s.z,E[ne+Q+11]=te.itemSize===4?s.w:1)}}p={count:u,texture:L,size:new $e(W,D)},n.set(o,p),o.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:a}}function Qp(i,e,t,n){let s=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}class sh extends Bt{constructor(e,t,n,s,a,r,o,l,c,h=us){if(h!==us&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===us&&(n=Li),n===void 0&&h===ys&&(n=xs),super(null,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ah=new Bt,Hl=new sh(1,1),rh=new Yc,oh=new kd,lh=new th,Gl=[],Vl=[],Wl=new Float32Array(16),$l=new Float32Array(9),Xl=new Float32Array(4);function ws(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Gl[s];if(a===void 0&&(a=new Float32Array(s),Gl[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qa(i,e){let t=Vl[e];t===void 0&&(t=new Int32Array(e),Vl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function em(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function sm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Xl.set(n),i.uniformMatrix2fv(this.addr,!1,Xl),Tt(t,n)}}function am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),Tt(t,n)}}function rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Wl.set(n),i.uniformMatrix4fv(this.addr,!1,Wl),Tt(t,n)}}function om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function mm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Hl.compareFunction=$c,a=Hl):a=ah,t.setTexture2D(e||a,s)}function _m(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||oh,s)}function gm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||lh,s)}function vm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rh,s)}function xm(i){switch(i){case 5126:return em;case 35664:return tm;case 35665:return nm;case 35666:return im;case 35674:return sm;case 35675:return am;case 35676:return rm;case 5124:case 35670:return om;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return hm;case 5125:return dm;case 36294:return um;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return vm}}function ym(i,e){i.uniform1fv(this.addr,e)}function bm(i,e){const t=ws(e,this.size,2);i.uniform2fv(this.addr,t)}function Mm(i,e){const t=ws(e,this.size,3);i.uniform3fv(this.addr,t)}function Sm(i,e){const t=ws(e,this.size,4);i.uniform4fv(this.addr,t)}function wm(i,e){const t=ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Em(i,e){const t=ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tm(i,e){const t=ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Am(i,e){i.uniform1iv(this.addr,e)}function Rm(i,e){i.uniform2iv(this.addr,e)}function Cm(i,e){i.uniform3iv(this.addr,e)}function Pm(i,e){i.uniform4iv(this.addr,e)}function Lm(i,e){i.uniform1uiv(this.addr,e)}function Dm(i,e){i.uniform2uiv(this.addr,e)}function Um(i,e){i.uniform3uiv(this.addr,e)}function Im(i,e){i.uniform4uiv(this.addr,e)}function Nm(i,e,t){const n=this.cache,s=e.length,a=Qa(t,s);Et(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||ah,a[r])}function Fm(i,e,t){const n=this.cache,s=e.length,a=Qa(t,s);Et(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||oh,a[r])}function Om(i,e,t){const n=this.cache,s=e.length,a=Qa(t,s);Et(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||lh,a[r])}function km(i,e,t){const n=this.cache,s=e.length,a=Qa(t,s);Et(n,a)||(i.uniform1iv(this.addr,a),Tt(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||rh,a[r])}function Bm(i){switch(i){case 5126:return ym;case 35664:return bm;case 35665:return Mm;case 35666:return Sm;case 35674:return wm;case 35675:return Em;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Pm;case 5125:return Lm;case 36294:return Dm;case 36295:return Um;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return km}}class zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xm(t.type)}}class Hm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bm(t.type)}}class Gm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function ql(i,e){i.seq.push(e),i.map[e.id]=e}function Vm(i,e,t){const n=i.name,s=n.length;for(Ar.lastIndex=0;;){const a=Ar.exec(n),r=Ar.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){ql(t,c===void 0?new zm(o,i,e):new Hm(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Gm(o),ql(t,u)),t=u}}}class Va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);Vm(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Yl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Wm=37297;let $m=0;function Xm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const jl=new Ye;function qm(i){tt._getMatrix(jl,tt.workingColorSpace,i);const e=`mat3( ${jl.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Ka:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Xm(i.getShaderSource(e),r)}else return s}function Ym(i,e){const t=qm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jm(i,e){let t;switch(e){case jh:t="Linear";break;case Zh:t="Reinhard";break;case Kh:t="Cineon";break;case Jh:t="ACESFilmic";break;case ed:t="AgX";break;case td:t="Neutral";break;case Qh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ta=new I;function Zm(){tt.getLuminanceCoefficients(Ta);const i=Ta.x.toFixed(4),e=Ta.y.toFixed(4),t=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Jm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function qs(i){return i!==""}function Kl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(e_,n_)}const t_=new Map;function n_(i,e){let t=Ze[e];if(t===void 0){const n=t_.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(i_,s_)}function s_(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function ec(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function a_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function r_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case vs:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function l_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uc:e="ENVMAP_BLENDING_MULTIPLY";break;case qh:e="ENVMAP_BLENDING_MIX";break;case Yh:e="ENVMAP_BLENDING_ADD";break}return e}function c_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function h_(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=a_(t),c=r_(t),h=o_(t),u=l_(t),p=c_(t),m=Km(t),g=Jm(a),v=s.createProgram();let f,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),d.length>0&&(d+=`
`)):(f=[ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),d=[ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==pi?jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Ym("linearToOutputTexel",t.outputColorSpace),Zm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),r=Do(r),r=Kl(r,t),r=Jl(r,t),o=Do(o),o=Kl(o,t),o=Jl(o,t),r=Ql(r),o=Ql(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=R+f+r,M=R+d+o,W=Yl(s,s.VERTEX_SHADER,T),D=Yl(s,s.FRAGMENT_SHADER,M);s.attachShader(v,W),s.attachShader(v,D),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(C){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),$=s.getShaderInfoLog(W).trim(),te=s.getShaderInfoLog(D).trim();let ne=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,W,D);else{const Q=Zl(s,W,"vertex"),X=Zl(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+Q+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):($===""||te==="")&&(j=!1);j&&(C.diagnostics={runnable:ne,programLog:G,vertexShader:{log:$,prefix:f},fragmentShader:{log:te,prefix:d}})}s.deleteShader(W),s.deleteShader(D),L=new Va(s,v),S=Qm(s,v)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Wm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$m++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=W,this.fragmentShader=D,this}let d_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new f_(e),t.set(e,n)),n}}class f_{constructor(e){this.id=d_++,this.code=e,this.usedTimes=0}}function p_(i,e,t,n,s,a,r){const o=new Yo,l=new u_,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function f(S,x,C,G,$){const te=G.fog,ne=$.geometry,j=S.isMeshStandardMaterial?G.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),X=Q&&Q.mapping===Za?Q.image.height:null,fe=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ve=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Re=ve!==void 0?ve.length:0;let Pe=0;ne.morphAttributes.position!==void 0&&(Pe=1),ne.morphAttributes.normal!==void 0&&(Pe=2),ne.morphAttributes.color!==void 0&&(Pe=3);let Ke,K,ce,Me;if(fe){const We=Yt[fe];Ke=We.vertexShader,K=We.fragmentShader}else Ke=S.vertexShader,K=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),Me=l.getFragmentShaderID(S);const xe=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),ke=$.isInstancedMesh===!0,Be=$.isBatchedMesh===!0,je=!!S.map,ze=!!S.matcap,st=!!Q,N=!!S.aoMap,pe=!!S.lightMap,he=!!S.bumpMap,me=!!S.normalMap,ge=!!S.displacementMap,Fe=!!S.emissiveMap,we=!!S.metalnessMap,b=!!S.roughnessMap,_=S.anisotropy>0,k=S.clearcoat>0,P=S.dispersion>0,H=S.iridescence>0,U=S.sheen>0,ae=S.transmission>0,ee=_&&!!S.anisotropyMap,re=k&&!!S.clearcoatMap,de=k&&!!S.clearcoatNormalMap,ie=k&&!!S.clearcoatRoughnessMap,se=H&&!!S.iridescenceMap,Te=H&&!!S.iridescenceThicknessMap,Ce=U&&!!S.sheenColorMap,be=U&&!!S.sheenRoughnessMap,A=!!S.specularMap,z=!!S.specularColorMap,Z=!!S.specularIntensityMap,w=ae&&!!S.transmissionMap,V=ae&&!!S.thicknessMap,B=!!S.gradientMap,J=!!S.alphaMap,oe=S.alphaTest>0,le=!!S.alphaHash,Ee=!!S.extensions;let Qe=pi;S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const Ge={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:Ke,fragmentShader:K,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Be,batchingColor:Be&&$._colorsTexture!==null,instancing:ke,instancingColor:ke&&$.instanceColor!==null,instancingMorph:ke&&$.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ii,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:ze,envMap:st,envMapMode:st&&Q.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:pe,bumpMap:he,normalMap:me,displacementMap:p&&ge,emissiveMap:Fe,normalMapObjectSpace:me&&S.normalMapType===rd,normalMapTangentSpace:me&&S.normalMapType===ad,metalnessMap:we,roughnessMap:b,anisotropy:_,anisotropyMap:ee,clearcoat:k,clearcoatMap:re,clearcoatNormalMap:de,clearcoatRoughnessMap:ie,dispersion:P,iridescence:H,iridescenceMap:se,iridescenceThicknessMap:Te,sheen:U,sheenColorMap:Ce,sheenRoughnessMap:be,specularMap:A,specularColorMap:z,specularIntensityMap:Z,transmission:ae,transmissionMap:w,thicknessMap:V,gradientMap:B,opaque:S.transparent===!1&&S.blending===ds&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:oe,alphaHash:le,combine:S.combine,mapUv:je&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:pe&&v(S.lightMap.channel),bumpMapUv:he&&v(S.bumpMap.channel),normalMapUv:me&&v(S.normalMap.channel),displacementMapUv:ge&&v(S.displacementMap.channel),emissiveMapUv:Fe&&v(S.emissiveMap.channel),metalnessMapUv:we&&v(S.metalnessMap.channel),roughnessMapUv:b&&v(S.roughnessMap.channel),anisotropyMapUv:ee&&v(S.anisotropyMap.channel),clearcoatMapUv:re&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(S.sheenRoughnessMap.channel),specularMapUv:A&&v(S.specularMap.channel),specularColorMapUv:z&&v(S.specularColorMap.channel),specularIntensityMapUv:Z&&v(S.specularIntensityMap.channel),transmissionMapUv:w&&v(S.transmissionMap.channel),thicknessMapUv:V&&v(S.thicknessMap.channel),alphaMapUv:J&&v(S.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(me||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ne.attributes.uv&&(je||J),fog:!!te,useFog:S.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:$.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Pe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===dt,decodeVideoTextureEmissive:Fe&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ln,flipSided:S.side===jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function d(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(R(x,S),T(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function R(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const x=g[S.type];let C;if(x){const G=Yt[x];C=jo.clone(G.uniforms)}else C=S.uniforms;return C}function W(S,x){let C;for(let G=0,$=h.length;G<$;G++){const te=h[G];if(te.cacheKey===x){C=te,++C.usedTimes;break}}return C===void 0&&(C=new h_(i,x,S,a),h.push(C)),C}function D(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function L(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:M,acquireProgram:W,releaseProgram:D,releaseShaderCache:E,programs:h,dispose:L}}function m_(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function __(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nc(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u,p,m,g,v,f){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:f},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=f),e++,d}function o(u,p,m,g,v,f){const d=r(u,p,m,g,v,f);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,p,m,g,v,f){const d=r(u,p,m,g,v,f);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,p){t.length>1&&t.sort(u||__),n.length>1&&n.sort(p||tc),s.length>1&&s.sort(p||tc)}function h(){for(let u=e,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function g_(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new nc,i.set(n,[r])):s>=a.length?(r=new nc,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function v_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Je};break;case"SpotLight":t={position:new I,direction:new I,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function x_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let y_=0;function b_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function M_(i){const e=new v_,t=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,a=new xt,r=new xt;function o(c){let h=0,u=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,v=0,f=0,d=0,R=0,T=0,M=0,W=0,D=0,E=0;c.sort(b_);for(let S=0,x=c.length;S<x;S++){const C=c[S],G=C.color,$=C.intensity,te=C.distance,ne=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=G.r*$,u+=G.g*$,p+=G.b*$;else if(C.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(C.sh.coefficients[j],$);E++}else if(C.isDirectionalLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,X=t.get(C);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=C.shadow.matrix,R++}n.directional[m]=j,m++}else if(C.isSpotLight){const j=e.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(G).multiplyScalar($),j.distance=te,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,n.spot[v]=j;const Q=C.shadow;if(C.map&&(n.spotLightMap[W]=C.map,W++,Q.updateMatrices(C),C.castShadow&&D++),n.spotLightMatrix[v]=Q.matrix,C.castShadow){const X=t.get(C);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=ne,M++}v++}else if(C.isRectAreaLight){const j=e.get(C);j.color.copy(G).multiplyScalar($),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),n.rectArea[f]=j,f++}else if(C.isPointLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){const Q=C.shadow,X=t.get(C);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=j,g++}else if(C.isHemisphereLight){const j=e.get(C);j.skyColor.copy(C.color).multiplyScalar($),j.groundColor.copy(C.groundColor).multiplyScalar($),n.hemi[d]=j,d++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const L=n.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==f||L.hemiLength!==d||L.numDirectionalShadows!==R||L.numPointShadows!==T||L.numSpotShadows!==M||L.numSpotMaps!==W||L.numLightProbes!==E)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=f,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+W-D,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=E,L.directionalLength=m,L.pointLength=g,L.spotLength=v,L.rectAreaLength=f,L.hemiLength=d,L.numDirectionalShadows=R,L.numPointShadows=T,L.numSpotShadows=M,L.numSpotMaps=W,L.numLightProbes=E,n.version=y_++)}function l(c,h){let u=0,p=0,m=0,g=0,v=0;const f=h.matrixWorldInverse;for(let d=0,R=c.length;d<R;d++){const T=c[d];if(T.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),u++}else if(T.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),m++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),r.identity(),a.copy(T.matrixWorld),a.premultiply(f),r.extractRotation(a),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(T.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(f),v++}}}return{setup:o,setupView:l,state:n}}function ic(i){const e=new M_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function S_(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new ic(i),e.set(s,[o])):a>=r.length?(o=new ic(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class w_ extends ta{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E_ extends ta{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
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
}`;function R_(i,e,t){let n=new nh;const s=new $e,a=new $e,r=new ht,o=new w_({depthPacking:sd}),l=new E_,c={},h=t.maxTextureSize,u={[mi]:jt,[jt]:mi,[Ln]:Ln},p=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:T_,fragmentShader:A_}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new wn(g,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let d=this.type;this.render=function(D,E,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||D.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(fi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const $=d!==Xn&&this.type===Xn,te=d===Xn&&this.type!==Xn;for(let ne=0,j=D.length;ne<j;ne++){const Q=D[ne],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const fe=X.getFrameExtents();if(s.multiply(fe),a.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/fe.x),s.x=a.x*fe.x,X.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/fe.y),s.y=a.y*fe.y,X.mapSize.y=a.y)),X.map===null||$===!0||te===!0){const Re=this.type!==Xn?{minFilter:Zt,magFilter:Zt}:{};X.map!==null&&X.map.dispose(),X.map=new Di(s.x,s.y,Re),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ve=X.getViewportCount();for(let Re=0;Re<ve;Re++){const Pe=X.getViewport(Re);r.set(a.x*Pe.x,a.y*Pe.y,a.x*Pe.z,a.y*Pe.w),G.viewport(r),X.updateMatrices(Q,Re),n=X.getFrustum(),M(E,L,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===Xn&&R(X,L),X.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(S,x,C)};function R(D,E){const L=e.update(v);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Di(s.x,s.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(E,null,L,p,v,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(E,null,L,m,v,null)}function T(D,E,L,S){let x=null;const C=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(C!==void 0)x=C;else if(x=L.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const G=x.uuid,$=E.uuid;let te=c[G];te===void 0&&(te={},c[G]=te);let ne=te[$];ne===void 0&&(ne=x.clone(),te[$]=ne,E.addEventListener("dispose",W)),x=ne}if(x.visible=E.visible,x.wireframe=E.wireframe,S===Xn?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:u[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=i.properties.get(x);G.light=L}return x}function M(D,E,L,S,x){if(D.visible===!1)return;if(D.layers.test(E.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===Xn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);const $=e.update(D),te=D.material;if(Array.isArray(te)){const ne=$.groups;for(let j=0,Q=ne.length;j<Q;j++){const X=ne[j],fe=te[X.materialIndex];if(fe&&fe.visible){const ve=T(D,fe,S,x);D.onBeforeShadow(i,D,E,L,$,ve,X),i.renderBufferDirect(L,null,$,ve,D,X),D.onAfterShadow(i,D,E,L,$,ve,X)}}}else if(te.visible){const ne=T(D,te,S,x);D.onBeforeShadow(i,D,E,L,$,ne,null),i.renderBufferDirect(L,null,$,ne,D,null),D.onAfterShadow(i,D,E,L,$,ne,null)}}const G=D.children;for(let $=0,te=G.length;$<te;$++)M(G[$],E,L,S,x)}function W(D){D.target.removeEventListener("dispose",W);for(const L in c){const S=c[L],x=D.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const C_={[qr]:Yr,[jr]:Jr,[Zr]:Qr,[_s]:Kr,[Yr]:qr,[Jr]:jr,[Qr]:Zr,[Kr]:_s};function P_(i,e){function t(){let w=!1;const V=new ht;let B=null;const J=new ht(0,0,0,0);return{setMask:function(oe){B!==oe&&!w&&(i.colorMask(oe,oe,oe,oe),B=oe)},setLocked:function(oe){w=oe},setClear:function(oe,le,Ee,Qe,Ge){Ge===!0&&(oe*=Qe,le*=Qe,Ee*=Qe),V.set(oe,le,Ee,Qe),J.equals(V)===!1&&(i.clearColor(oe,le,Ee,Qe),J.copy(V))},reset:function(){w=!1,B=null,J.set(-1,0,0,0)}}}function n(){let w=!1,V=!1,B=null,J=null,oe=null;return{setReversed:function(le){if(V!==le){const Ee=e.get("EXT_clip_control");V?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT);const Qe=oe;oe=null,this.setClear(Qe)}V=le},getReversed:function(){return V},setTest:function(le){le?xe(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(le){B!==le&&!w&&(i.depthMask(le),B=le)},setFunc:function(le){if(V&&(le=C_[le]),J!==le){switch(le){case qr:i.depthFunc(i.NEVER);break;case Yr:i.depthFunc(i.ALWAYS);break;case jr:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Zr:i.depthFunc(i.EQUAL);break;case Kr:i.depthFunc(i.GEQUAL);break;case Jr:i.depthFunc(i.GREATER);break;case Qr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=le}},setLocked:function(le){w=le},setClear:function(le){oe!==le&&(V&&(le=1-le),i.clearDepth(le),oe=le)},reset:function(){w=!1,B=null,J=null,oe=null,V=!1}}}function s(){let w=!1,V=null,B=null,J=null,oe=null,le=null,Ee=null,Qe=null,Ge=null;return{setTest:function(We){w||(We?xe(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(We){V!==We&&!w&&(i.stencilMask(We),V=We)},setFunc:function(We,yt,zt){(B!==We||J!==yt||oe!==zt)&&(i.stencilFunc(We,yt,zt),B=We,J=yt,oe=zt)},setOp:function(We,yt,zt){(le!==We||Ee!==yt||Qe!==zt)&&(i.stencilOp(We,yt,zt),le=We,Ee=yt,Qe=zt)},setLocked:function(We){w=We},setClear:function(We){Ge!==We&&(i.clearStencil(We),Ge=We)},reset:function(){w=!1,V=null,B=null,J=null,oe=null,le=null,Ee=null,Qe=null,Ge=null}}}const a=new t,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},p=new WeakMap,m=[],g=null,v=!1,f=null,d=null,R=null,T=null,M=null,W=null,D=null,E=new Je(0,0,0),L=0,S=!1,x=null,C=null,G=null,$=null,te=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Q=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=Q>=2);let fe=null,ve={};const Re=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),Ke=new ht().fromArray(Re),K=new ht().fromArray(Pe);function ce(w,V,B,J){const oe=new Uint8Array(4),le=i.createTexture();i.bindTexture(w,le),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<B;Ee++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(V,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(V+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return le}const Me={};Me[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),xe(i.DEPTH_TEST),r.setFunc(_s),he(!1),me(ol),xe(i.CULL_FACE),N(fi);function xe(w){h[w]!==!0&&(i.enable(w),h[w]=!0)}function Ie(w){h[w]!==!1&&(i.disable(w),h[w]=!1)}function ke(w,V){return u[w]!==V?(i.bindFramebuffer(w,V),u[w]=V,w===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=V),w===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=V),!0):!1}function Be(w,V){let B=m,J=!1;if(w){B=p.get(V),B===void 0&&(B=[],p.set(V,B));const oe=w.textures;if(B.length!==oe.length||B[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Ee=oe.length;le<Ee;le++)B[le]=i.COLOR_ATTACHMENT0+le;B.length=oe.length,J=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,J=!0);J&&i.drawBuffers(B)}function je(w){return g!==w?(i.useProgram(w),g=w,!0):!1}const ze={[Ai]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};ze[Dh]=i.MIN,ze[Uh]=i.MAX;const st={[Ih]:i.ZERO,[Nh]:i.ONE,[Fh]:i.SRC_COLOR,[$r]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[kh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[Xr]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Vh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[$h]:i.CONSTANT_ALPHA,[Xh]:i.ONE_MINUS_CONSTANT_ALPHA};function N(w,V,B,J,oe,le,Ee,Qe,Ge,We){if(w===fi){v===!0&&(Ie(i.BLEND),v=!1);return}if(v===!1&&(xe(i.BLEND),v=!0),w!==Ch){if(w!==f||We!==S){if((d!==Ai||M!==Ai)&&(i.blendEquation(i.FUNC_ADD),d=Ai,M=Ai),We)switch(w){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ll:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ll:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}R=null,T=null,W=null,D=null,E.set(0,0,0),L=0,f=w,S=We}return}oe=oe||V,le=le||B,Ee=Ee||J,(V!==d||oe!==M)&&(i.blendEquationSeparate(ze[V],ze[oe]),d=V,M=oe),(B!==R||J!==T||le!==W||Ee!==D)&&(i.blendFuncSeparate(st[B],st[J],st[le],st[Ee]),R=B,T=J,W=le,D=Ee),(Qe.equals(E)===!1||Ge!==L)&&(i.blendColor(Qe.r,Qe.g,Qe.b,Ge),E.copy(Qe),L=Ge),f=w,S=!1}function pe(w,V){w.side===Ln?Ie(i.CULL_FACE):xe(i.CULL_FACE);let B=w.side===jt;V&&(B=!B),he(B),w.blending===ds&&w.transparent===!1?N(fi):N(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),r.setFunc(w.depthFunc),r.setTest(w.depthTest),r.setMask(w.depthWrite),a.setMask(w.colorWrite);const J=w.stencilWrite;o.setTest(J),J&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Fe(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(w){x!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),x=w)}function me(w){w!==Th?(xe(i.CULL_FACE),w!==C&&(w===ol?i.cullFace(i.BACK):w===Ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),C=w}function ge(w){w!==G&&(j&&i.lineWidth(w),G=w)}function Fe(w,V,B){w?(xe(i.POLYGON_OFFSET_FILL),($!==V||te!==B)&&(i.polygonOffset(V,B),$=V,te=B)):Ie(i.POLYGON_OFFSET_FILL)}function we(w){w?xe(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function b(w){w===void 0&&(w=i.TEXTURE0+ne-1),fe!==w&&(i.activeTexture(w),fe=w)}function _(w,V,B){B===void 0&&(fe===null?B=i.TEXTURE0+ne-1:B=fe);let J=ve[B];J===void 0&&(J={type:void 0,texture:void 0},ve[B]=J),(J.type!==w||J.texture!==V)&&(fe!==B&&(i.activeTexture(B),fe=B),i.bindTexture(w,V||Me[w]),J.type=w,J.texture=V)}function k(){const w=ve[fe];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function P(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function H(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function U(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ae(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function se(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ce(w){Ke.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),Ke.copy(w))}function be(w){K.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),K.copy(w))}function A(w,V){let B=c.get(V);B===void 0&&(B=new WeakMap,c.set(V,B));let J=B.get(w);J===void 0&&(J=i.getUniformBlockIndex(V,w.name),B.set(w,J))}function z(w,V){const J=c.get(V).get(w);l.get(V)!==J&&(i.uniformBlockBinding(V,J,w.__bindingPointIndex),l.set(V,J))}function Z(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},fe=null,ve={},u={},p=new WeakMap,m=[],g=null,v=!1,f=null,d=null,R=null,T=null,M=null,W=null,D=null,E=new Je(0,0,0),L=0,S=!1,x=null,C=null,G=null,$=null,te=null,Ke.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:xe,disable:Ie,bindFramebuffer:ke,drawBuffers:Be,useProgram:je,setBlending:N,setMaterial:pe,setFlipSided:he,setCullFace:me,setLineWidth:ge,setPolygonOffset:Fe,setScissorTest:we,activeTexture:b,bindTexture:_,unbindTexture:k,compressedTexImage2D:P,compressedTexImage3D:H,texImage2D:se,texImage3D:Te,updateUBOMapping:A,uniformBlockBinding:z,texStorage2D:de,texStorage3D:ie,texSubImage2D:U,texSubImage3D:ae,compressedTexSubImage2D:ee,compressedTexSubImage3D:re,scissor:Ce,viewport:be,reset:Z}}function sc(i,e,t,n){const s=L_(n);switch(t){case kc:return i*e;case zc:return i*e;case Hc:return i*e*2;case Gc:return i*e/s.components*s.byteLength;case Vo:return i*e/s.components*s.byteLength;case Vc:return i*e*2/s.components*s.byteLength;case Wo:return i*e*2/s.components*s.byteLength;case Bc:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case $o:return i*e*4/s.components*s.byteLength;case ka:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:case oo:return Math.max(i,16)*Math.max(e,8)/4;case so:case ro:return Math.max(i,8)*Math.max(e,8)/2;case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ga:case To:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wc:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Co:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function L_(i){switch(i){case In:case Nc:return{byteLength:1,components:1};case Ks:case Fc:case ea:return{byteLength:2,components:1};case Ho:case Go:return{byteLength:2,components:4};case Li:case zo:case jn:return{byteLength:4,components:1};case Oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function D_(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return m?new OffscreenCanvas(b,_):Xa("canvas")}function v(b,_,k){let P=1;const H=we(b);if((H.width>k||H.height>k)&&(P=k/Math.max(H.width,H.height)),P<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const U=Math.floor(P*H.width),ae=Math.floor(P*H.height);u===void 0&&(u=g(U,ae));const ee=_?g(U,ae):u;return ee.width=U,ee.height=ae,ee.getContext("2d").drawImage(b,0,0,U,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+U+"x"+ae+")."),ee}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),b;return b}function f(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,_,k,P,H=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let U=_;if(_===i.RED&&(k===i.FLOAT&&(U=i.R32F),k===i.HALF_FLOAT&&(U=i.R16F),k===i.UNSIGNED_BYTE&&(U=i.R8)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(U=i.R8UI),k===i.UNSIGNED_SHORT&&(U=i.R16UI),k===i.UNSIGNED_INT&&(U=i.R32UI),k===i.BYTE&&(U=i.R8I),k===i.SHORT&&(U=i.R16I),k===i.INT&&(U=i.R32I)),_===i.RG&&(k===i.FLOAT&&(U=i.RG32F),k===i.HALF_FLOAT&&(U=i.RG16F),k===i.UNSIGNED_BYTE&&(U=i.RG8)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(U=i.RG8UI),k===i.UNSIGNED_SHORT&&(U=i.RG16UI),k===i.UNSIGNED_INT&&(U=i.RG32UI),k===i.BYTE&&(U=i.RG8I),k===i.SHORT&&(U=i.RG16I),k===i.INT&&(U=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(U=i.RGB8UI),k===i.UNSIGNED_SHORT&&(U=i.RGB16UI),k===i.UNSIGNED_INT&&(U=i.RGB32UI),k===i.BYTE&&(U=i.RGB8I),k===i.SHORT&&(U=i.RGB16I),k===i.INT&&(U=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(U=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(U=i.RGBA16UI),k===i.UNSIGNED_INT&&(U=i.RGBA32UI),k===i.BYTE&&(U=i.RGBA8I),k===i.SHORT&&(U=i.RGBA16I),k===i.INT&&(U=i.RGBA32I)),_===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(U=i.RGB9_E5),_===i.RGBA){const ae=H?Ka:tt.getTransfer(P);k===i.FLOAT&&(U=i.RGBA32F),k===i.HALF_FLOAT&&(U=i.RGBA16F),k===i.UNSIGNED_BYTE&&(U=ae===dt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(U=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(U=i.RGB5_A1)}return(U===i.R16F||U===i.R32F||U===i.RG16F||U===i.RG32F||U===i.RGBA16F||U===i.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function M(b,_){let k;return b?_===null||_===Li||_===xs?k=i.DEPTH24_STENCIL8:_===jn?k=i.DEPTH32F_STENCIL8:_===Ks&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Li||_===xs?k=i.DEPTH_COMPONENT24:_===jn?k=i.DEPTH_COMPONENT32F:_===Ks&&(k=i.DEPTH_COMPONENT16),k}function W(b,_){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==Zt&&b.minFilter!==Sn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function D(b){const _=b.target;_.removeEventListener("dispose",D),L(_),_.isVideoTexture&&h.delete(_)}function E(b){const _=b.target;_.removeEventListener("dispose",E),x(_)}function L(b){const _=n.get(b);if(_.__webglInit===void 0)return;const k=b.source,P=p.get(k);if(P){const H=P[_.__cacheKey];H.usedTimes--,H.usedTimes===0&&S(b),Object.keys(P).length===0&&p.delete(k)}n.remove(b)}function S(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const k=b.source,P=p.get(k);delete P[_.__cacheKey],r.memory.textures--}function x(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(_.__webglFramebuffer[P]))for(let H=0;H<_.__webglFramebuffer[P].length;H++)i.deleteFramebuffer(_.__webglFramebuffer[P][H]);else i.deleteFramebuffer(_.__webglFramebuffer[P]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[P])}else{if(Array.isArray(_.__webglFramebuffer))for(let P=0;P<_.__webglFramebuffer.length;P++)i.deleteFramebuffer(_.__webglFramebuffer[P]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let P=0;P<_.__webglColorRenderbuffer.length;P++)_.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[P]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=b.textures;for(let P=0,H=k.length;P<H;P++){const U=n.get(k[P]);U.__webglTexture&&(i.deleteTexture(U.__webglTexture),r.memory.textures--),n.remove(k[P])}n.remove(b)}let C=0;function G(){C=0}function $(){const b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function te(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function ne(b,_){const k=n.get(b);if(b.isVideoTexture&&ge(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const P=b.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,b,_);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function j(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){K(k,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function Q(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){K(k,b,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function X(b,_){const k=n.get(b);if(b.version>0&&k.__version!==b.version){ce(k,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}const fe={[no]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},ve={[Zt]:i.NEAREST,[nd]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[tr]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Re={[od]:i.NEVER,[fd]:i.ALWAYS,[ld]:i.LESS,[$c]:i.LEQUAL,[cd]:i.EQUAL,[ud]:i.GEQUAL,[hd]:i.GREATER,[dd]:i.NOTEQUAL};function Pe(b,_){if(_.type===jn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Sn||_.magFilter===tr||_.magFilter===ra||_.magFilter===Yn||_.minFilter===Sn||_.minFilter===tr||_.minFilter===ra||_.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,fe[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,fe[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,fe[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ve[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ve[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Zt||_.minFilter!==ra&&_.minFilter!==Yn||_.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ke(b,_){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",D));const P=_.source;let H=p.get(P);H===void 0&&(H={},p.set(P,H));const U=te(_);if(U!==b.__cacheKey){H[U]===void 0&&(H[U]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,k=!0),H[U].usedTimes++;const ae=H[b.__cacheKey];ae!==void 0&&(H[b.__cacheKey].usedTimes--,ae.usedTimes===0&&S(_)),b.__cacheKey=U,b.__webglTexture=H[U].texture}return k}function K(b,_,k){let P=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(P=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(P=i.TEXTURE_3D);const H=Ke(b,_),U=_.source;t.bindTexture(P,b.__webglTexture,i.TEXTURE0+k);const ae=n.get(U);if(U.version!==ae.__version||H===!0){t.activeTexture(i.TEXTURE0+k);const ee=tt.getPrimaries(tt.workingColorSpace),re=_.colorSpace===Dn?null:tt.getPrimaries(_.colorSpace),de=_.colorSpace===Dn||ee===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let ie=v(_.image,!1,s.maxTextureSize);ie=Fe(_,ie);const se=a.convert(_.format,_.colorSpace),Te=a.convert(_.type);let Ce=T(_.internalFormat,se,Te,_.colorSpace,_.isVideoTexture);Pe(P,_);let be;const A=_.mipmaps,z=_.isVideoTexture!==!0,Z=ae.__version===void 0||H===!0,w=U.dataReady,V=W(_,ie);if(_.isDepthTexture)Ce=M(_.format===ys,_.type),Z&&(z?t.texStorage2D(i.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ie.width,ie.height,0,se,Te,null));else if(_.isDataTexture)if(A.length>0){z&&Z&&t.texStorage2D(i.TEXTURE_2D,V,Ce,A[0].width,A[0].height);for(let B=0,J=A.length;B<J;B++)be=A[B],z?w&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,be.width,be.height,se,Te,be.data):t.texImage2D(i.TEXTURE_2D,B,Ce,be.width,be.height,0,se,Te,be.data);_.generateMipmaps=!1}else z?(Z&&t.texStorage2D(i.TEXTURE_2D,V,Ce,ie.width,ie.height),w&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,se,Te,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,ie.width,ie.height,0,se,Te,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){z&&Z&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,Ce,A[0].width,A[0].height,ie.depth);for(let B=0,J=A.length;B<J;B++)if(be=A[B],_.format!==dn)if(se!==null)if(z){if(w)if(_.layerUpdates.size>0){const oe=sc(be.width,be.height,_.format,_.type);for(const le of _.layerUpdates){const Ee=be.data.subarray(le*oe/be.data.BYTES_PER_ELEMENT,(le+1)*oe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,le,be.width,be.height,1,se,Ee)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,be.width,be.height,ie.depth,se,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,Ce,be.width,be.height,ie.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?w&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,be.width,be.height,ie.depth,se,Te,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,B,Ce,be.width,be.height,ie.depth,0,se,Te,be.data)}else{z&&Z&&t.texStorage2D(i.TEXTURE_2D,V,Ce,A[0].width,A[0].height);for(let B=0,J=A.length;B<J;B++)be=A[B],_.format!==dn?se!==null?z?w&&t.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,be.width,be.height,se,be.data):t.compressedTexImage2D(i.TEXTURE_2D,B,Ce,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?w&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,be.width,be.height,se,Te,be.data):t.texImage2D(i.TEXTURE_2D,B,Ce,be.width,be.height,0,se,Te,be.data)}else if(_.isDataArrayTexture)if(z){if(Z&&t.texStorage3D(i.TEXTURE_2D_ARRAY,V,Ce,ie.width,ie.height,ie.depth),w)if(_.layerUpdates.size>0){const B=sc(ie.width,ie.height,_.format,_.type);for(const J of _.layerUpdates){const oe=ie.data.subarray(J*B/ie.data.BYTES_PER_ELEMENT,(J+1)*B/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,se,Te,oe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,se,Te,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,se,Te,ie.data);else if(_.isData3DTexture)z?(Z&&t.texStorage3D(i.TEXTURE_3D,V,Ce,ie.width,ie.height,ie.depth),w&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,se,Te,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,se,Te,ie.data);else if(_.isFramebufferTexture){if(Z)if(z)t.texStorage2D(i.TEXTURE_2D,V,Ce,ie.width,ie.height);else{let B=ie.width,J=ie.height;for(let oe=0;oe<V;oe++)t.texImage2D(i.TEXTURE_2D,oe,Ce,B,J,0,se,Te,null),B>>=1,J>>=1}}else if(A.length>0){if(z&&Z){const B=we(A[0]);t.texStorage2D(i.TEXTURE_2D,V,Ce,B.width,B.height)}for(let B=0,J=A.length;B<J;B++)be=A[B],z?w&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,se,Te,be):t.texImage2D(i.TEXTURE_2D,B,Ce,se,Te,be);_.generateMipmaps=!1}else if(z){if(Z){const B=we(ie);t.texStorage2D(i.TEXTURE_2D,V,Ce,B.width,B.height)}w&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,Te,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ce,se,Te,ie);f(_)&&d(P),ae.__version=U.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ce(b,_,k){if(_.image.length!==6)return;const P=Ke(b,_),H=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const U=n.get(H);if(H.version!==U.__version||P===!0){t.activeTexture(i.TEXTURE0+k);const ae=tt.getPrimaries(tt.workingColorSpace),ee=_.colorSpace===Dn?null:tt.getPrimaries(_.colorSpace),re=_.colorSpace===Dn||ae===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const de=_.isCompressedTexture||_.image[0].isCompressedTexture,ie=_.image[0]&&_.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!de&&!ie?se[J]=v(_.image[J],!0,s.maxCubemapSize):se[J]=ie?_.image[J].image:_.image[J],se[J]=Fe(_,se[J]);const Te=se[0],Ce=a.convert(_.format,_.colorSpace),be=a.convert(_.type),A=T(_.internalFormat,Ce,be,_.colorSpace),z=_.isVideoTexture!==!0,Z=U.__version===void 0||P===!0,w=H.dataReady;let V=W(_,Te);Pe(i.TEXTURE_CUBE_MAP,_);let B;if(de){z&&Z&&t.texStorage2D(i.TEXTURE_CUBE_MAP,V,A,Te.width,Te.height);for(let J=0;J<6;J++){B=se[J].mipmaps;for(let oe=0;oe<B.length;oe++){const le=B[oe];_.format!==dn?Ce!==null?z?w&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,0,0,le.width,le.height,Ce,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,A,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,0,0,le.width,le.height,Ce,be,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe,A,le.width,le.height,0,Ce,be,le.data)}}}else{if(B=_.mipmaps,z&&Z){B.length>0&&V++;const J=we(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,V,A,J.width,J.height)}for(let J=0;J<6;J++)if(ie){z?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,Ce,be,se[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,A,se[J].width,se[J].height,0,Ce,be,se[J].data);for(let oe=0;oe<B.length;oe++){const Ee=B[oe].image[J].image;z?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,0,0,Ee.width,Ee.height,Ce,be,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,A,Ee.width,Ee.height,0,Ce,be,Ee.data)}}else{z?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ce,be,se[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,A,Ce,be,se[J]);for(let oe=0;oe<B.length;oe++){const le=B[oe];z?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,0,0,Ce,be,le.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe+1,A,Ce,be,le.image[J])}}}f(_)&&d(i.TEXTURE_CUBE_MAP),U.__version=H.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Me(b,_,k,P,H,U){const ae=a.convert(k.format,k.colorSpace),ee=a.convert(k.type),re=T(k.internalFormat,ae,ee,k.colorSpace),de=n.get(_),ie=n.get(k);if(ie.__renderTarget=_,!de.__hasExternalTextures){const se=Math.max(1,_.width>>U),Te=Math.max(1,_.height>>U);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,U,re,se,Te,_.depth,0,ae,ee,null):t.texImage2D(H,U,re,se,Te,0,ae,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,P,H,ie.__webglTexture,0,he(_)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,P,H,ie.__webglTexture,U),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(b,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const P=_.depthTexture,H=P&&P.isDepthTexture?P.type:null,U=M(_.stencilBuffer,H),ae=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=he(_);me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,U,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,U,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,U,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,b)}else{const P=_.textures;for(let H=0;H<P.length;H++){const U=P[H],ae=a.convert(U.format,U.colorSpace),ee=a.convert(U.type),re=T(U.internalFormat,ae,ee,U.colorSpace),de=he(_);k&&me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,re,_.width,_.height):me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,re,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,re,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const P=n.get(_.depthTexture);P.__renderTarget=_,(!P.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ne(_.depthTexture,0);const H=P.__webglTexture,U=he(_);if(_.depthTexture.format===us)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(_.depthTexture.format===ys)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function ke(b){const _=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const P=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),P){const H=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,P.removeEventListener("dispose",H)};P.addEventListener("dispose",H),_.__depthDisposeCallback=H}_.__boundDepthTexture=P}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ie(_.__webglFramebuffer,b)}else if(k){_.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[P]),_.__webglDepthbuffer[P]===void 0)_.__webglDepthbuffer[P]=i.createRenderbuffer(),xe(_.__webglDepthbuffer[P],b,!1);else{const H=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=_.__webglDepthbuffer[P];i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,U)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),xe(_.__webglDepthbuffer,b,!1);else{const P=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,H)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(b,_,k){const P=n.get(b);_!==void 0&&Me(P.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ke(b)}function je(b){const _=b.texture,k=n.get(b),P=n.get(_);b.addEventListener("dispose",E);const H=b.textures,U=b.isWebGLCubeRenderTarget===!0,ae=H.length>1;if(ae||(P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture()),P.__version=_.version,r.memory.textures++),U){k.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[ee]=[];for(let re=0;re<_.mipmaps.length;re++)k.__webglFramebuffer[ee][re]=i.createFramebuffer()}else k.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)k.__webglFramebuffer[ee]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ae)for(let ee=0,re=H.length;ee<re;ee++){const de=n.get(H[ee]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),r.memory.textures++)}if(b.samples>0&&me(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ee=0;ee<H.length;ee++){const re=H[ee];k.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ee]);const de=a.convert(re.format,re.colorSpace),ie=a.convert(re.type),se=T(re.internalFormat,de,ie,re.colorSpace,b.isXRRenderTarget===!0),Te=he(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,se,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,k.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)Me(k.__webglFramebuffer[ee][re],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,re);else Me(k.__webglFramebuffer[ee],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let ee=0,re=H.length;ee<re;ee++){const de=H[ee],ie=n.get(de);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Pe(i.TEXTURE_2D,de),Me(k.__webglFramebuffer,b,de,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,0),f(de)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ee=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,P.__webglTexture),Pe(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)Me(k.__webglFramebuffer[re],b,_,i.COLOR_ATTACHMENT0,ee,re);else Me(k.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,ee,0);f(_)&&d(ee),t.unbindTexture()}b.depthBuffer&&ke(b)}function ze(b){const _=b.textures;for(let k=0,P=_.length;k<P;k++){const H=_[k];if(f(H)){const U=R(b),ae=n.get(H).__webglTexture;t.bindTexture(U,ae),d(U),t.unbindTexture()}}}const st=[],N=[];function pe(b){if(b.samples>0){if(me(b)===!1){const _=b.textures,k=b.width,P=b.height;let H=i.COLOR_BUFFER_BIT;const U=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(b),ee=_.length>1;if(ee)for(let re=0;re<_.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let re=0;re<_.length;re++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);const de=n.get(_[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,k,P,0,0,k,P,H,i.NEAREST),l===!0&&(st.length=0,N.length=0,st.push(i.COLOR_ATTACHMENT0+re),b.depthBuffer&&b.resolveDepthBuffer===!1&&(st.push(U),N.push(U),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let re=0;re<_.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,ae.__webglColorRenderbuffer[re]);const de=n.get(_[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function he(b){return Math.min(s.maxSamples,b.samples)}function me(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ge(b){const _=r.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Fe(b,_){const k=b.colorSpace,P=b.format,H=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Ii&&k!==Dn&&(tt.getTransfer(k)===dt?(P!==dn||H!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function we(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.setTexture2D=ne,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=me}function U_(i,e){function t(n,s=Dn){let a;const r=tt.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nc)return i.BYTE;if(n===Fc)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===zo)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===ea)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Bc)return i.RGB;if(n===dn)return i.RGBA;if(n===zc)return i.LUMINANCE;if(n===Hc)return i.LUMINANCE_ALPHA;if(n===us)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Gc)return i.RED;if(n===Vo)return i.RED_INTEGER;if(n===Vc)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===ka||n===Ba||n===za||n===Ha)if(r===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ka)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ka)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ao||n===ro||n===oo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===so)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===ho)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===lo||n===co)return r===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ho)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===fo||n===po||n===mo||n===_o||n===go||n===vo||n===xo||n===yo||n===bo||n===Mo||n===So||n===wo||n===Eo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===uo)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return r===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===To||n===Ao)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ga)return r===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wc||n===Ro||n===Co||n===Po)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ga)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class I_ extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,n),d=this._getHandJoint(c,v);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
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

}`;class k_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Bt,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nn({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new ia(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B_ extends Ni{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,g=null;const v=new k_,f=t.getContextAttributes();let d=null,R=null;const T=[],M=[],W=new $e;let D=null;const E=new hn;E.viewport=new ht;const L=new hn;L.viewport=new ht;const S=[E,L],x=new I_;let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=T[K];return ce===void 0&&(ce=new Rr,T[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=T[K];return ce===void 0&&(ce=new Rr,T[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=T[K];return ce===void 0&&(ce=new Rr,T[K]=ce),ce.getHandSpace()};function $(K){const ce=M.indexOf(K.inputSource);if(ce===-1)return;const Me=T[ce];Me!==void 0&&(Me.update(K.inputSource,K.frame,c||r),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function te(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",ne);for(let K=0;K<T.length;K++){const ce=M[K];ce!==null&&(M[K]=null,T[K].disconnect(ce))}C=null,G=null,v.reset(),e.setRenderTarget(d),m=null,p=null,u=null,s=null,R=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",te),s.addEventListener("inputsourceschange",ne),f.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(W),s.renderState.layers===void 0){const ce={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new Di(m.framebufferWidth,m.framebufferHeight,{format:dn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let ce=null,Me=null,xe=null;f.depth&&(xe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=f.stencil?ys:us,Me=f.stencil?xs:Li);const Ie={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(Ie),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new Di(p.textureWidth,p.textureHeight,{format:dn,type:In,depthTexture:new sh(p.textureWidth,p.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ne(K){for(let ce=0;ce<K.removed.length;ce++){const Me=K.removed[ce],xe=M.indexOf(Me);xe>=0&&(M[xe]=null,T[xe].disconnect(Me))}for(let ce=0;ce<K.added.length;ce++){const Me=K.added[ce];let xe=M.indexOf(Me);if(xe===-1){for(let ke=0;ke<T.length;ke++)if(ke>=M.length){M.push(Me),xe=ke;break}else if(M[ke]===null){M[ke]=Me,xe=ke;break}if(xe===-1)break}const Ie=T[xe];Ie&&Ie.connect(Me)}}const j=new I,Q=new I;function X(K,ce,Me){j.setFromMatrixPosition(ce.matrixWorld),Q.setFromMatrixPosition(Me.matrixWorld);const xe=j.distanceTo(Q),Ie=ce.projectionMatrix.elements,ke=Me.projectionMatrix.elements,Be=Ie[14]/(Ie[10]-1),je=Ie[14]/(Ie[10]+1),ze=(Ie[9]+1)/Ie[5],st=(Ie[9]-1)/Ie[5],N=(Ie[8]-1)/Ie[0],pe=(ke[8]+1)/ke[0],he=Be*N,me=Be*pe,ge=xe/(-N+pe),Fe=ge*-N;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Fe),K.translateZ(ge),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const we=Be+ge,b=je+ge,_=he-Fe,k=me+(xe-Fe),P=ze*je/b*we,H=st*je/b*we;K.projectionMatrix.makePerspective(_,k,P,H,we,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ce=K.near,Me=K.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),x.near=L.near=E.near=ce,x.far=L.far=E.far=Me,(C!==x.near||G!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,G=x.far),E.layers.mask=K.layers.mask|2,L.layers.mask=K.layers.mask|4,x.layers.mask=E.layers.mask|L.layers.mask;const xe=K.parent,Ie=x.cameras;fe(x,xe);for(let ke=0;ke<Ie.length;ke++)fe(Ie[ke],xe);Ie.length===2?X(x,E,L):x.projectionMatrix.copy(E.projectionMatrix),ve(K,x,xe)};function ve(K,ce,Me){Me===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Js*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(K){l=K,p!==null&&(p.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Re=null;function Pe(K,ce){if(h=ce.getViewerPose(c||r),g=ce,h!==null){const Me=h.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let xe=!1;Me.length!==x.cameras.length&&(x.cameras.length=0,xe=!0);for(let ke=0;ke<Me.length;ke++){const Be=Me[ke];let je=null;if(m!==null)je=m.getViewport(Be);else{const st=u.getViewSubImage(p,Be);je=st.viewport,ke===0&&(e.setRenderTargetTextures(R,st.colorTexture,p.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(R))}let ze=S[ke];ze===void 0&&(ze=new hn,ze.layers.enable(ke),ze.viewport=new ht,S[ke]=ze),ze.matrix.fromArray(Be.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Be.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(je.x,je.y,je.width,je.height),ke===0&&(x.matrix.copy(ze.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),xe===!0&&x.cameras.push(ze)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const ke=u.getDepthInformation(Me[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,s.renderState)}}for(let Me=0;Me<T.length;Me++){const xe=M[Me],Ie=T[Me];xe!==null&&Ie!==void 0&&Ie.update(xe,ce,c||r)}Re&&Re(K,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}const Ke=new ih;Ke.setAnimationLoop(Pe),this.setAnimationLoop=function(K){Re=K},this.dispose=function(){}}}const bi=new Qn,z_=new xt;function H_(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Qc(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,R,T,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(f,d):d.isMeshToonMaterial?(a(f,d),u(f,d)):d.isMeshPhongMaterial?(a(f,d),h(f,d)):d.isMeshStandardMaterial?(a(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,M)):d.isMeshMatcapMaterial?(a(f,d),g(f,d)):d.isMeshDepthMaterial?a(f,d):d.isMeshDistanceMaterial?(a(f,d),v(f,d)):d.isMeshNormalMaterial?a(f,d):d.isLineBasicMaterial?(r(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,R,T):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===jt&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===jt&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const R=e.get(d),T=R.envMap,M=R.envMapRotation;T&&(f.envMap.value=T,bi.copy(M),bi.x*=-1,bi.y*=-1,bi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),f.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(bi)),f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function r(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,R,T){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*R,f.scale.value=T*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,R){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===jt&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=R.texture,f.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function v(f,d){const R=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(R.matrixWorld),f.nearDistance.value=R.shadow.camera.near,f.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const M=T.program;n.uniformBlockBinding(R,M)}function c(R,T){let M=s[R.id];M===void 0&&(g(R),M=h(R),s[R.id]=M,R.addEventListener("dispose",f));const W=T.program;n.updateUBOMapping(R,W);const D=e.render.frame;a[R.id]!==D&&(p(R),a[R.id]=D)}function h(R){const T=u();R.__bindingPointIndex=T;const M=i.createBuffer(),W=R.__size,D=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,W,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function u(){for(let R=0;R<o;R++)if(r.indexOf(R)===-1)return r.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const T=s[R.id],M=R.uniforms,W=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let D=0,E=M.length;D<E;D++){const L=Array.isArray(M[D])?M[D]:[M[D]];for(let S=0,x=L.length;S<x;S++){const C=L[S];if(m(C,D,S,W)===!0){const G=C.__offset,$=Array.isArray(C.value)?C.value:[C.value];let te=0;for(let ne=0;ne<$.length;ne++){const j=$[ne],Q=v(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,G+te,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,te),te+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,T,M,W){const D=R.value,E=T+"_"+M;if(W[E]===void 0)return typeof D=="number"||typeof D=="boolean"?W[E]=D:W[E]=D.clone(),!0;{const L=W[E];if(typeof D=="number"||typeof D=="boolean"){if(L!==D)return W[E]=D,!0}else if(L.equals(D)===!1)return L.copy(D),!0}return!1}function g(R){const T=R.uniforms;let M=0;const W=16;for(let E=0,L=T.length;E<L;E++){const S=Array.isArray(T[E])?T[E]:[T[E]];for(let x=0,C=S.length;x<C;x++){const G=S[x],$=Array.isArray(G.value)?G.value:[G.value];for(let te=0,ne=$.length;te<ne;te++){const j=$[te],Q=v(j),X=M%W,fe=X%Q.boundary,ve=X+fe;M+=fe,ve!==0&&W-ve<Q.storage&&(M+=W-ve),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=Q.storage}}}const D=M%W;return D>0&&(M+=W-D),R.__size=M,R.__cache={},this}function v(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function f(R){const T=R.target;T.removeEventListener("dispose",f);const M=r.indexOf(T.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function d(){for(const R in s)i.deleteBuffer(s[R]);r=[],s={},a={}}return{bind:l,update:c,dispose:d}}class V_{constructor(e={}){const{canvas:t=Pd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const g=new Uint32Array(4),v=new Int32Array(4);let f=null,d=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=pi,this.toneMappingExposure=1;const M=this;let W=!1,D=0,E=0,L=null,S=-1,x=null;const C=new ht,G=new ht;let $=null;const te=new Je(0);let ne=0,j=t.width,Q=t.height,X=1,fe=null,ve=null;const Re=new ht(0,0,j,Q),Pe=new ht(0,0,j,Q);let Ke=!1;const K=new nh;let ce=!1,Me=!1;const xe=new xt,Ie=new xt,ke=new I,Be=new ht,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function st(){return L===null?X:1}let N=n;function pe(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bo}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",le,!1),N===null){const F="webgl2";if(N=pe(F,y),N===null)throw pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let he,me,ge,Fe,we,b,_,k,P,H,U,ae,ee,re,de,ie,se,Te,Ce,be,A,z,Z,w;function V(){he=new Yp(N),he.init(),z=new U_(N,he),me=new Hp(N,he,e,z),ge=new P_(N,he),me.reverseDepthBuffer&&p&&ge.buffers.depth.setReversed(!0),Fe=new Kp(N),we=new m_,b=new D_(N,he,ge,we,me,z,Fe),_=new Vp(M),k=new qp(M),P=new nu(N),Z=new Bp(N,P),H=new jp(N,P,Fe,Z),U=new Qp(N,H,P,Fe),Ce=new Jp(N,me,b),ie=new Gp(we),ae=new p_(M,_,k,he,me,Z,ie),ee=new H_(M,we),re=new g_,de=new S_(he),Te=new kp(M,_,k,ge,U,m,l),se=new R_(M,U,me),w=new G_(N,Fe,me,ge),be=new zp(N,he,Fe),A=new Zp(N,he,Fe),Fe.programs=ae.programs,M.capabilities=me,M.extensions=he,M.properties=we,M.renderLists=re,M.shadowMap=se,M.state=ge,M.info=Fe}V();const B=new B_(M,N);this.xr=B,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=he.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=he.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(j,Q,!1))},this.getSize=function(y){return y.set(j,Q)},this.setSize=function(y,F,q=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,Q=F,t.width=Math.floor(y*X),t.height=Math.floor(F*X),q===!0&&(t.style.width=y+"px",t.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(j*X,Q*X).floor()},this.setDrawingBufferSize=function(y,F,q){j=y,Q=F,X=q,t.width=Math.floor(y*q),t.height=Math.floor(F*q),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(Re)},this.setViewport=function(y,F,q,Y){y.isVector4?Re.set(y.x,y.y,y.z,y.w):Re.set(y,F,q,Y),ge.viewport(C.copy(Re).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Pe)},this.setScissor=function(y,F,q,Y){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,F,q,Y),ge.scissor(G.copy(Pe).multiplyScalar(X).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(y){ge.setScissorTest(Ke=y)},this.setOpaqueSort=function(y){fe=y},this.setTransparentSort=function(y){ve=y},this.getClearColor=function(y){return y.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(y=!0,F=!0,q=!0){let Y=0;if(y){let O=!1;if(L!==null){const _e=L.texture.format;O=_e===$o||_e===Wo||_e===Vo}if(O){const _e=L.texture.type,Ae=_e===In||_e===Li||_e===Ks||_e===xs||_e===Ho||_e===Go,Le=Te.getClearColor(),De=Te.getClearAlpha(),Ve=Le.r,Xe=Le.g,Ue=Le.b;Ae?(g[0]=Ve,g[1]=Xe,g[2]=Ue,g[3]=De,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Ve,v[1]=Xe,v[2]=Ue,v[3]=De,N.clearBufferiv(N.COLOR,0,v))}else Y|=N.COLOR_BUFFER_BIT}F&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",le,!1),re.dispose(),de.dispose(),we.dispose(),_.dispose(),k.dispose(),U.dispose(),Z.dispose(),w.dispose(),ae.dispose(),B.dispose(),B.removeEventListener("sessionstart",Fi),B.removeEventListener("sessionend",Ts),Fn.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const y=Fe.autoReset,F=se.enabled,q=se.autoUpdate,Y=se.needsUpdate,O=se.type;V(),Fe.autoReset=y,se.enabled=F,se.autoUpdate=q,se.needsUpdate=Y,se.type=O}function le(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ee(y){const F=y.target;F.removeEventListener("dispose",Ee),Qe(F)}function Qe(y){Ge(y),we.remove(y)}function Ge(y){const F=we.get(y).programs;F!==void 0&&(F.forEach(function(q){ae.releaseProgram(q)}),y.isShaderMaterial&&ae.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,q,Y,O,_e){F===null&&(F=je);const Ae=O.isMesh&&O.matrixWorld.determinant()<0,Le=bh(y,F,q,Y,O);ge.setMaterial(Y,Ae);let De=q.index,Ve=1;if(Y.wireframe===!0){if(De=H.getWireframeAttribute(q),De===void 0)return;Ve=2}const Xe=q.drawRange,Ue=q.attributes.position;let nt=Xe.start*Ve,ft=(Xe.start+Xe.count)*Ve;_e!==null&&(nt=Math.max(nt,_e.start*Ve),ft=Math.min(ft,(_e.start+_e.count)*Ve)),De!==null?(nt=Math.max(nt,0),ft=Math.min(ft,De.count)):Ue!=null&&(nt=Math.max(nt,0),ft=Math.min(ft,Ue.count));const pt=ft-nt;if(pt<0||pt===1/0)return;Z.setup(O,Y,Le,q,De);let Wt,at=be;if(De!==null&&(Wt=P.get(De),at=A,at.setIndex(Wt)),O.isMesh)Y.wireframe===!0?(ge.setLineWidth(Y.wireframeLinewidth*st()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(O.isLine){let Ne=Y.linewidth;Ne===void 0&&(Ne=1),ge.setLineWidth(Ne*st()),O.isLineSegments?at.setMode(N.LINES):O.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else O.isPoints?at.setMode(N.POINTS):O.isSprite&&at.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)at.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))at.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,On=O._multiDrawCounts,rt=O._multiDrawCount,pn=De?P.get(De).bytesPerElement:1,Oi=we.get(Y).currentProgram.getUniforms();for(let Qt=0;Qt<rt;Qt++)Oi.setValue(N,"_gl_DrawID",Qt),at.render(Ne[Qt]/pn,On[Qt])}else if(O.isInstancedMesh)at.renderInstances(nt,pt,O.count);else if(q.isInstancedBufferGeometry){const Ne=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,On=Math.min(q.instanceCount,Ne);at.renderInstances(nt,pt,On)}else at.render(nt,pt)};function We(y,F,q){y.transparent===!0&&y.side===Ln&&y.forceSinglePass===!1?(y.side=jt,y.needsUpdate=!0,aa(y,F,q),y.side=mi,y.needsUpdate=!0,aa(y,F,q),y.side=Ln):aa(y,F,q)}this.compile=function(y,F,q=null){q===null&&(q=y),d=de.get(q),d.init(F),T.push(d),q.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),y!==q&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const Y=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const _e=O.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Le=_e[Ae];We(Le,q,O),Y.add(Le)}else We(_e,q,O),Y.add(_e)}),T.pop(),d=null,Y},this.compileAsync=function(y,F,q=null){const Y=this.compile(y,F,q);return new Promise(O=>{function _e(){if(Y.forEach(function(Ae){we.get(Ae).currentProgram.isReady()&&Y.delete(Ae)}),Y.size===0){O(y);return}setTimeout(_e,10)}he.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let yt=null;function zt(y){yt&&yt(y)}function Fi(){Fn.stop()}function Ts(){Fn.start()}const Fn=new ih;Fn.setAnimationLoop(zt),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(y){yt=y,B.setAnimationLoop(y),y===null?Fn.stop():Fn.start()},B.addEventListener("sessionstart",Fi),B.addEventListener("sessionend",Ts),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(F),F=B.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,F,L),d=de.get(y,T.length),d.init(F),T.push(d),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Ie),Me=this.localClippingEnabled,ce=ie.init(this.clippingPlanes,Me),f=re.get(y,R.length),f.init(),R.push(f),B.enabled===!0&&B.isPresenting===!0){const _e=M.xr.getDepthSensingMesh();_e!==null&&sn(_e,F,-1/0,M.sortObjects)}sn(y,F,0,M.sortObjects),f.finish(),M.sortObjects===!0&&f.sort(fe,ve),ze=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ze&&Te.addToRenderList(f,y),this.info.render.frame++,ce===!0&&ie.beginShadows();const q=d.state.shadowsArray;se.render(q,y,F),ce===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=f.opaque,O=f.transmissive;if(d.setupLights(),F.isArrayCamera){const _e=F.cameras;if(O.length>0)for(let Ae=0,Le=_e.length;Ae<Le;Ae++){const De=_e[Ae];nl(Y,O,y,De)}ze&&Te.render(y);for(let Ae=0,Le=_e.length;Ae<Le;Ae++){const De=_e[Ae];tl(f,y,De,De.viewport)}}else O.length>0&&nl(Y,O,y,F),ze&&Te.render(y),tl(f,y,F);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(M,y,F),Z.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(d=T[T.length-1],ce===!0&&ie.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?f=R[R.length-1]:f=null};function sn(y,F,q,Y){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){Y&&Be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ie);const Ae=U.update(y),Le=y.material;Le.visible&&f.push(y,Ae,Le,q,Be.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){const Ae=U.update(y),Le=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Be.copy(y.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Be.copy(Ae.boundingSphere.center)),Be.applyMatrix4(y.matrixWorld).applyMatrix4(Ie)),Array.isArray(Le)){const De=Ae.groups;for(let Ve=0,Xe=De.length;Ve<Xe;Ve++){const Ue=De[Ve],nt=Le[Ue.materialIndex];nt&&nt.visible&&f.push(y,Ae,nt,q,Be.z,Ue)}}else Le.visible&&f.push(y,Ae,Le,q,Be.z,null)}}const _e=y.children;for(let Ae=0,Le=_e.length;Ae<Le;Ae++)sn(_e[Ae],F,q,Y)}function tl(y,F,q,Y){const O=y.opaque,_e=y.transmissive,Ae=y.transparent;d.setupLightsView(q),ce===!0&&ie.setGlobalState(M.clippingPlanes,q),Y&&ge.viewport(C.copy(Y)),O.length>0&&sa(O,F,q),_e.length>0&&sa(_e,F,q),Ae.length>0&&sa(Ae,F,q),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function nl(y,F,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new Di(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?ea:In,minFilter:Yn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const _e=d.state.transmissionRenderTarget[Y.id],Ae=Y.viewport||C;_e.setSize(Ae.z,Ae.w);const Le=M.getRenderTarget();M.setRenderTarget(_e),M.getClearColor(te),ne=M.getClearAlpha(),ne<1&&M.setClearColor(16777215,.5),M.clear(),ze&&Te.render(q);const De=M.toneMapping;M.toneMapping=pi;const Ve=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),ce===!0&&ie.setGlobalState(M.clippingPlanes,Y),sa(y,q,Y),b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e),he.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Ue=0,nt=F.length;Ue<nt;Ue++){const ft=F[Ue],pt=ft.object,Wt=ft.geometry,at=ft.material,Ne=ft.group;if(at.side===Ln&&pt.layers.test(Y.layers)){const On=at.side;at.side=jt,at.needsUpdate=!0,il(pt,q,Y,Wt,at,Ne),at.side=On,at.needsUpdate=!0,Xe=!0}}Xe===!0&&(b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e))}M.setRenderTarget(Le),M.setClearColor(te,ne),Ve!==void 0&&(Y.viewport=Ve),M.toneMapping=De}function sa(y,F,q){const Y=F.isScene===!0?F.overrideMaterial:null;for(let O=0,_e=y.length;O<_e;O++){const Ae=y[O],Le=Ae.object,De=Ae.geometry,Ve=Y===null?Ae.material:Y,Xe=Ae.group;Le.layers.test(q.layers)&&il(Le,F,q,De,Ve,Xe)}}function il(y,F,q,Y,O,_e){y.onBeforeRender(M,F,q,Y,O,_e),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(M,F,q,Y,y,_e),O.transparent===!0&&O.side===Ln&&O.forceSinglePass===!1?(O.side=jt,O.needsUpdate=!0,M.renderBufferDirect(q,F,Y,O,y,_e),O.side=mi,O.needsUpdate=!0,M.renderBufferDirect(q,F,Y,O,y,_e),O.side=Ln):M.renderBufferDirect(q,F,Y,O,y,_e),y.onAfterRender(M,F,q,Y,O,_e)}function aa(y,F,q){F.isScene!==!0&&(F=je);const Y=we.get(y),O=d.state.lights,_e=d.state.shadowsArray,Ae=O.state.version,Le=ae.getParameters(y,O.state,_e,F,q),De=ae.getProgramCacheKey(Le);let Ve=Y.programs;Y.environment=y.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(y.isMeshStandardMaterial?k:_).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Ve===void 0&&(y.addEventListener("dispose",Ee),Ve=new Map,Y.programs=Ve);let Xe=Ve.get(De);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===Ae)return al(y,Le),Xe}else Le.uniforms=ae.getUniforms(y),y.onBeforeCompile(Le,M),Xe=ae.acquireProgram(Le,De),Ve.set(De,Xe),Y.uniforms=Le.uniforms;const Ue=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=ie.uniform),al(y,Le),Y.needsLights=Sh(y),Y.lightsStateVersion=Ae,Y.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function sl(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Va.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function al(y,F){const q=we.get(y);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function bh(y,F,q,Y,O){F.isScene!==!0&&(F=je),b.resetTextureUnits();const _e=F.fog,Ae=Y.isMeshStandardMaterial?F.environment:null,Le=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ii,De=(Y.isMeshStandardMaterial?k:_).get(Y.envMap||Ae),Ve=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color;let pt=pi;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pt=M.toneMapping);const Wt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,at=Wt!==void 0?Wt.length:0,Ne=we.get(Y),On=d.state.lights;if(ce===!0&&(Me===!0||y!==x)){const an=y===x&&Y.id===S;ie.setState(Y,y,an)}let rt=!1;Y.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==On.state.version||Ne.outputColorSpace!==Le||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==De||Y.fog===!0&&Ne.fog!==_e||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ie.numPlanes||Ne.numIntersection!==ie.numIntersection)||Ne.vertexAlphas!==Ve||Ne.vertexTangents!==Xe||Ne.morphTargets!==Ue||Ne.morphNormals!==nt||Ne.morphColors!==ft||Ne.toneMapping!==pt||Ne.morphTargetsCount!==at)&&(rt=!0):(rt=!0,Ne.__version=Y.version);let pn=Ne.currentProgram;rt===!0&&(pn=aa(Y,F,O));let Oi=!1,Qt=!1,As=!1;const mt=pn.getUniforms(),Rn=Ne.uniforms;if(ge.useProgram(pn.program)&&(Oi=!0,Qt=!0,As=!0),Y.id!==S&&(S=Y.id,Qt=!0),Oi||x!==y){ge.buffers.depth.getReversed()?(xe.copy(y.projectionMatrix),Dd(xe),Ud(xe),mt.setValue(N,"projectionMatrix",xe)):mt.setValue(N,"projectionMatrix",y.projectionMatrix),mt.setValue(N,"viewMatrix",y.matrixWorldInverse);const ei=mt.map.cameraPosition;ei!==void 0&&ei.setValue(N,ke.setFromMatrixPosition(y.matrixWorld)),me.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Qt=!0,As=!0)}if(O.isSkinnedMesh){mt.setOptional(N,O,"bindMatrix"),mt.setOptional(N,O,"bindMatrixInverse");const an=O.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),mt.setValue(N,"boneTexture",an.boneTexture,b))}O.isBatchedMesh&&(mt.setOptional(N,O,"batchingTexture"),mt.setValue(N,"batchingTexture",O._matricesTexture,b),mt.setOptional(N,O,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",O._indirectTexture,b),mt.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",O._colorsTexture,b));const Rs=q.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0)&&Ce.update(O,q,pn),(Qt||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,mt.setValue(N,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Rn.envMap.value=De,Rn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(Rn.envMapIntensity.value=F.environmentIntensity),Qt&&(mt.setValue(N,"toneMappingExposure",M.toneMappingExposure),Ne.needsLights&&Mh(Rn,As),_e&&Y.fog===!0&&ee.refreshFogUniforms(Rn,_e),ee.refreshMaterialUniforms(Rn,Y,X,Q,d.state.transmissionRenderTarget[y.id]),Va.upload(N,sl(Ne),Rn,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Va.upload(N,sl(Ne),Rn,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(N,"center",O.center),mt.setValue(N,"modelViewMatrix",O.modelViewMatrix),mt.setValue(N,"normalMatrix",O.normalMatrix),mt.setValue(N,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const an=Y.uniformsGroups;for(let ei=0,ti=an.length;ei<ti;ei++){const rl=an[ei];w.update(rl,pn),w.bind(rl,pn)}}return pn}function Mh(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Sh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,F,q){we.get(y.texture).__webglTexture=F,we.get(y.depthTexture).__webglTexture=q;const Y=we.get(y);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const q=we.get(y);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,q=0){L=y,D=F,E=q;let Y=!0,O=null,_e=!1,Ae=!1;if(y){const De=we.get(y);if(De.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(N.FRAMEBUFFER,null),Y=!1;else if(De.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(De.__hasExternalTextures)b.rebindTextures(y,we.get(y.texture).__webglTexture,we.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ue=y.depthTexture;if(De.__boundDepthTexture!==Ue){if(Ue!==null&&we.has(Ue)&&(y.width!==Ue.image.width||y.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Xe=we.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Xe[F])?O=Xe[F][q]:O=Xe[F],_e=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?O=we.get(y).__webglMultisampledFramebuffer:Array.isArray(Xe)?O=Xe[q]:O=Xe,C.copy(y.viewport),G.copy(y.scissor),$=y.scissorTest}else C.copy(Re).multiplyScalar(X).floor(),G.copy(Pe).multiplyScalar(X).floor(),$=Ke;if(ge.bindFramebuffer(N.FRAMEBUFFER,O)&&Y&&ge.drawBuffers(y,O),ge.viewport(C),ge.scissor(G),ge.setScissorTest($),_e){const De=we.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,De.__webglTexture,q)}else if(Ae){const De=we.get(y.texture),Ve=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,q||0,Ve)}S=-1},this.readRenderTargetPixels=function(y,F,q,Y,O,_e,Ae){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){ge.bindFramebuffer(N.FRAMEBUFFER,Le);try{const De=y.texture,Ve=De.format,Xe=De.type;if(!me.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-Y&&q>=0&&q<=y.height-O&&N.readPixels(F,q,Y,O,z.convert(Ve),z.convert(Xe),_e)}finally{const De=L!==null?we.get(L).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(y,F,q,Y,O,_e,Ae){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){const De=y.texture,Ve=De.format,Xe=De.type;if(!me.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-Y&&q>=0&&q<=y.height-O){ge.bindFramebuffer(N.FRAMEBUFFER,Le);const Ue=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ue),N.bufferData(N.PIXEL_PACK_BUFFER,_e.byteLength,N.STREAM_READ),N.readPixels(F,q,Y,O,z.convert(Ve),z.convert(Xe),0);const nt=L!==null?we.get(L).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,nt);const ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ld(N,ft,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ue),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_e),N.deleteBuffer(Ue),N.deleteSync(ft),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,q=0){y.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const Y=Math.pow(2,-q),O=Math.floor(y.image.width*Y),_e=Math.floor(y.image.height*Y),Ae=F!==null?F.x:0,Le=F!==null?F.y:0;b.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Ae,Le,O,_e),ge.unbindTexture()},this.copyTextureToTexture=function(y,F,q=null,Y=null,O=0){y.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,y=arguments[1],F=arguments[2],O=arguments[3]||0,q=null);let _e,Ae,Le,De,Ve,Xe,Ue,nt,ft;const pt=y.isCompressedTexture?y.mipmaps[O]:y.image;q!==null?(_e=q.max.x-q.min.x,Ae=q.max.y-q.min.y,Le=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Ve=q.min.y,Xe=q.isBox3?q.min.z:0):(_e=pt.width,Ae=pt.height,Le=pt.depth||1,De=0,Ve=0,Xe=0),Y!==null?(Ue=Y.x,nt=Y.y,ft=Y.z):(Ue=0,nt=0,ft=0);const Wt=z.convert(F.format),at=z.convert(F.type);let Ne;F.isData3DTexture?(b.setTexture3D(F,0),Ne=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(b.setTexture2DArray(F,0),Ne=N.TEXTURE_2D_ARRAY):(b.setTexture2D(F,0),Ne=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const On=N.getParameter(N.UNPACK_ROW_LENGTH),rt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),pn=N.getParameter(N.UNPACK_SKIP_PIXELS),Oi=N.getParameter(N.UNPACK_SKIP_ROWS),Qt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,pt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,De),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe);const As=y.isDataArrayTexture||y.isData3DTexture,mt=F.isDataArrayTexture||F.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Rn=we.get(y),Rs=we.get(F),an=we.get(Rn.__renderTarget),ei=we.get(Rs.__renderTarget);ge.bindFramebuffer(N.READ_FRAMEBUFFER,an.__webglFramebuffer),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ti=0;ti<Le;ti++)As&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(y).__webglTexture,O,Xe+ti),y.isDepthTexture?(mt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.get(F).__webglTexture,O,ft+ti),N.blitFramebuffer(De,Ve,_e,Ae,Ue,nt,_e,Ae,N.DEPTH_BUFFER_BIT,N.NEAREST)):mt?N.copyTexSubImage3D(Ne,O,Ue,nt,ft+ti,De,Ve,_e,Ae):N.copyTexSubImage2D(Ne,O,Ue,nt,ft+ti,De,Ve,_e,Ae);ge.bindFramebuffer(N.READ_FRAMEBUFFER,null),ge.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mt?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Ne,O,Ue,nt,ft,_e,Ae,Le,Wt,at,pt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Ne,O,Ue,nt,ft,_e,Ae,Le,Wt,pt.data):N.texSubImage3D(Ne,O,Ue,nt,ft,_e,Ae,Le,Wt,at,pt):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,Ue,nt,_e,Ae,Wt,at,pt.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,Ue,nt,pt.width,pt.height,Wt,pt.data):N.texSubImage2D(N.TEXTURE_2D,O,Ue,nt,_e,Ae,Wt,at,pt);N.pixelStorei(N.UNPACK_ROW_LENGTH,On),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,pn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt),O===0&&F.generateMipmaps&&N.generateMipmap(Ne),ge.unbindTexture()},this.copyTextureToTexture3D=function(y,F,q=null,Y=null,O=0){return y.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,y=arguments[2],F=arguments[3],O=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,q,Y,O)},this.initRenderTarget=function(y){we.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),ge.unbindTexture()},this.resetState=function(){D=0,E=0,L=null,ge.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class W_ extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lo,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new I;class di{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),a=lt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new di(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class X_ extends Bt{constructor(e=null,t=1,n=1,s,a,r,o,l,c=Zt,h=Zt,u,p){super(null,r,o,l,c,h,s,a,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko extends ta{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qa=new I,Ya=new I,ac=new xt,Us=new Ja,Aa=new Ss,Cr=new I,rc=new I;class ch extends Kt{constructor(e=new fn,t=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)qa.fromBufferAttribute(t,s-1),Ya.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qa.distanceTo(Ya);e.setAttribute("lineDistance",new An(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=a,e.ray.intersectsSphere(Aa)===!1)return;ac.copy(s).invert(),Us.copy(e.ray).applyMatrix4(ac);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=m,f=g-1;v<f;v+=c){const d=h.getX(v),R=h.getX(v+1),T=Ra(this,e,Us,l,d,R);T&&t.push(T)}if(this.isLineLoop){const v=h.getX(g-1),f=h.getX(m),d=Ra(this,e,Us,l,v,f);d&&t.push(d)}}else{const m=Math.max(0,r.start),g=Math.min(p.count,r.start+r.count);for(let v=m,f=g-1;v<f;v+=c){const d=Ra(this,e,Us,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=Ra(this,e,Us,l,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ra(i,e,t,n,s,a){const r=i.geometry.attributes.position;if(qa.fromBufferAttribute(r,s),Ya.fromBufferAttribute(r,a),t.distanceSqToSegment(qa,Ya,Cr,rc)>n)return;Cr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Cr);if(!(l<e.near||l>e.far))return{distance:l,point:rc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class hh extends ch{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class q_ extends fn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new I,a=new I;if(e.index!==null){const r=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],p=u.start,m=u.count;for(let g=p,v=p+m;g<v;g+=3)for(let f=0;f<3;f++){const d=o.getX(g+f),R=o.getX(g+(f+1)%3);s.fromBufferAttribute(r,d),a.fromBufferAttribute(r,R),oc(s,a,n)===!0&&(t.push(s.x,s.y,s.z),t.push(a.x,a.y,a.z))}}}else{const r=e.attributes.position;for(let o=0,l=r.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(r,h),a.fromBufferAttribute(r,u),oc(s,a,n)===!0&&(t.push(s.x,s.y,s.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new An(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function oc(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class Y_ extends fn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Uo extends $_{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const lc=new xt;class j_{constructor(e,t,n=0,s=1/0){this.ray=new Ja(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lc),this}intersectObject(e,t=!0,n=[]){return Io(e,this,n,t),n.sort(cc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)Io(e[s],this,n,t);return n.sort(cc),n}}function cc(i,e){return i.distance-e.distance}function Io(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)Io(a[r],e,t,!0)}}class hc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dc=new I,Ca=new I;class Z_{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){dc.subVectors(e,this.start),Ca.subVectors(this.end,this.start);const n=Ca.dot(Ca);let a=Ca.dot(dc)/n;return t&&(a=Nt(a,0,1)),a}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class K_ extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);const uc={type:"change"},Jo={type:"start"},dh={type:"end"},Pa=new Ja,fc=new ci,J_=Math.cos(70*qo.DEG2RAD),wt=new I,$t=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pr=1e-6;class Q_ extends K_{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Ui,this._lastTargetPosition=new I,this._quat=new Ui().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hc,this._sphericalDelta=new hc,this._scale=1,this._panOffset=new I,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new I,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t0.bind(this),this._onPointerDown=e0.bind(this),this._onPointerUp=n0.bind(this),this._onContextMenu=c0.bind(this),this._onMouseWheel=a0.bind(this),this._onKeyDown=r0.bind(this),this._onTouchStart=o0.bind(this),this._onTouchMove=l0.bind(this),this._onMouseDown=i0.bind(this),this._onMouseMove=s0.bind(this),this._interceptControlDown=h0.bind(this),this._interceptControlUp=d0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uc),this.update(),this.state=ut.NONE}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=$t:n>Math.PI&&(n-=$t),s<-Math.PI?s+=$t:s>Math.PI&&(s-=$t),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=wt.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Pa.origin.copy(this.object.position),Pa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pa.direction))<J_?this.object.lookAt(this.target):(fc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pa.intersectPlane(fc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Pr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pr||this._lastTargetPosition.distanceToSquared(this.target)>Pr?(this.dispatchEvent(uc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;wt.copy(s).sub(this.target);let a=wt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,r=n.width,o=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp($t*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-$t*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft($t*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-$t*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function e0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function t0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function n0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dh),this.state=ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function i0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ut.DOLLY;break;case hs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ut.ROTATE}break;case hs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Jo)}function s0(i){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function a0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(i.preventDefault(),this.dispatchEvent(Jo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(dh))}function r0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function o0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ut.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ut.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Jo)}function l0(i){switch(this._trackPointer(i),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ut.NONE}}function c0(i){this.enabled!==!1&&i.preventDefault()}function h0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const u0=i=>getComputedStyle(document.documentElement).getPropertyValue(i).trim();function pc(){const i=e=>new Je(u0(e));return{bg:i("--stage"),neg:i("--neg"),pos:i("--pos"),zero:i("--zero"),grid:i("--cell-line"),empty:i("--empty"),hi:i("--ink"),fill:i("--flow"),frame:i("--frame"),accent:i("--accent")}}class f0{constructor(e,t,n){qe(this,"renderer");qe(this,"scene",new W_);qe(this,"camera",new hn(30,1,1,8e3));qe(this,"controls");qe(this,"sheets",[]);qe(this,"labels",[]);qe(this,"resized",[]);qe(this,"themed",[]);qe(this,"lines",[]);qe(this,"theme");qe(this,"onHover",()=>{});qe(this,"onTick",()=>{});qe(this,"stage");qe(this,"labelLayer");qe(this,"ray",new j_);qe(this,"pointer",null);qe(this,"pointerMoved",!1);qe(this,"dirty",3);qe(this,"last",performance.now());qe(this,"fly",null);qe(this,"framed",null);qe(this,"userMoved",!1);this.stage=e,this.labelLayer=n,tt.enabled=!1,this.renderer=new V_({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ii,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.theme=pc(),this.scene.background=this.theme.bg.clone(),this.controls=new Q_(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.zoomToCursor=!0,this.controls.minDistance=8,this.controls.maxDistance=3200,this.controls.addEventListener("start",()=>{this.fly=null,this.userMoved=!0}),this.controls.addEventListener("change",()=>this.touch()),t.addEventListener("pointermove",s=>this.setPointer(s)),t.addEventListener("pointerdown",s=>this.setPointer(s)),t.addEventListener("pointerleave",()=>{this.pointer=null,this.onHover(null)}),new ResizeObserver(()=>this.resize()).observe(e),this.resize(),requestAnimationFrame(()=>this.loop())}add(e){e.setTheme(this.theme),this.sheets.push(e),this.scene.add(e.group)}addLabel(e,t,n,s=""){const a=document.createElement("div");return a.className=`label ${s}`.trim(),a.innerHTML=e,this.labelLayer.append(a),this.labels.push({el:a,anchor:t,rank:n}),a}addLine(e,t=!1){const n=new Ko({color:this.theme.frame});this.lines.push(n);const s=new fn().setFromPoints(e),a=t?new hh(s,n):new ch(s,n);return this.scene.add(a),a}applyTheme(){this.theme=pc(),this.scene.background.copy(this.theme.bg);for(const e of this.sheets)e.setTheme(this.theme);for(const e of this.lines)e.color.copy(this.theme.frame);for(const e of this.themed)e();this.touch()}touch(e=2){this.dirty=Math.max(this.dirty,e)}frame(e,t,n=1.12,s=1.3,a={}){this.framed={box:e.clone(),dir:t.clone().normalize(),pad:n,inset:a},this.userMoved=!1,this.pointerMoved=!0;const[r,o]=this.fit(e,this.framed.dir,n,a);s<=0?(this.camera.position.copy(r),this.controls.target.copy(o),this.fly=null):this.fly={from:[this.camera.position.clone(),this.controls.target.clone()],to:[r,o],t:0,d:s},this.touch()}follow(e,t=.45){this.framed&&!this.userMoved&&this.frame(e,this.framed.dir,this.framed.pad,t,this.framed.inset)}fit(e,t,n,s){const a=e.getCenter(new I),r=new I().crossVectors(new I(0,1,0),t).normalize(),o=new I().crossVectors(t,r).normalize();let l=0,c=0,h=0;for(let D=0;D<8;D++){const E=new I(D&1?e.max.x:e.min.x,D&2?e.max.y:e.min.y,D&4?e.max.z:e.min.z).sub(a);l=Math.max(l,Math.abs(E.dot(r))),c=Math.max(c,Math.abs(E.dot(o))),h=Math.max(h,E.dot(t))}const u=Math.tan(qo.degToRad(this.camera.fov/2)),p=Math.max(1,this.stage.clientWidth),m=Math.max(1,this.stage.clientHeight),[g,v,f,d]=[s.top??0,s.right??0,s.bottom??0,s.left??0],R=Math.max(.2,1-(d+v)/p),T=Math.max(.2,1-(g+f)/m),M=Math.max(c/(u*T),l/(u*this.camera.aspect*R))*n+h,W=a.clone().addScaledVector(r,(v-d)/p*M*u*this.camera.aspect).addScaledVector(o,(g-f)/m*M*u);return[W.clone().addScaledVector(t,M),W]}setPointer(e){const t=this.renderer.domElement.getBoundingClientRect();this.pointer={x:e.clientX-t.left,y:e.clientY-t.top},this.pointerMoved=!0,this.touch(1)}resize(){const e=Math.max(1,this.stage.clientWidth),t=Math.max(1,this.stage.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();for(const n of this.resized)n(e,t);this.framed&&!this.userMoved&&this.frame(this.framed.box,this.framed.dir,this.framed.pad,this.fly?this.fly.d:0,this.framed.inset),this.touch()}pick(){if(!this.pointer)return;const e=this.stage.clientWidth,t=this.stage.clientHeight;this.ray.setFromCamera(new $e(this.pointer.x/e*2-1,-(this.pointer.y/t)*2+1),this.camera);const n=this.sheets.filter(s=>s.shown&&s.reveal>.99).map(s=>s.mesh);for(const s of this.ray.intersectObjects(n,!1)){const a=s.object.userData.sheet,r=s.uv?a.cellAt(s.uv):null;if(r){this.onHover({sheet:a,...r,x:this.pointer.x,y:this.pointer.y});return}}this.onHover(null)}placeLabels(){const e=this.stage.clientWidth,t=this.stage.clientHeight,n=new I,s=this.labels.map(r=>({l:r,rank:r.rank()})).sort((r,o)=>(r.rank??1e9)-(o.rank??1e9)),a=[];for(const{l:r,rank:o}of s){n.copy(r.anchor).project(this.camera);let l=o!==null&&n.z>-1&&n.z<1&&Math.abs(n.x)<1.1&&Math.abs(n.y)<1.1;if(l){const c=Math.round((n.x*.5+.5)*e),h=Math.round((-n.y*.5+.5)*t),u=r.el.classList,[p,m]=u.contains("left")?[-1,-.5]:u.contains("side")?[0,-.5]:u.contains("under")?[-.5,0]:[0,-1],g=r.el.offsetWidth,v=r.el.offsetHeight,f=p===0&&m===-1?Math.max(Math.min(c,e-g-4),Math.min(c,4)):c,d=[f+p*g,h+m*v,f+(p+1)*g,h+(m+1)*v],[R,T]=u.contains("axis")?[2,1]:[6,2];l=!a.some(M=>d[0]<M[2]+R&&d[2]>M[0]-R&&d[1]<M[3]+T&&d[3]>M[1]-T),l&&(a.push(d),r.el.style.transform=`translate(${f}px, ${h}px) translate(${p*100}%, ${m*100}%)`)}r.el.classList.toggle("on",l)}}loop(){requestAnimationFrame(()=>this.loop());const e=performance.now(),t=Math.min(.05,(e-this.last)/1e3);if(this.last=e,this.fly){this.fly.t=Math.min(1,this.fly.t+t/this.fly.d);const s=this.fly.t<.5?4*this.fly.t**3:1-(-2*this.fly.t+2)**3/2;this.camera.position.lerpVectors(this.fly.from[0],this.fly.to[0],s),this.controls.target.lerpVectors(this.fly.from[1],this.fly.to[1],s),this.fly.t>=1&&(this.fly=null),this.touch()}this.onTick(t);let n=!1;for(const s of this.sheets)n=s.tick(t)||n;n&&this.touch(),!(this.dirty<=0)&&(this.dirty--,this.controls.update(),(this.pointerMoved||n||this.fly)&&(this.pointerMoved=!1,this.pick()),this.placeLabels(),this.renderer.render(this.scene,this.camera))}}const p0={signed:0,image:1,mask:2,unit:3},ja=4,m0=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,_0=`
uniform sampler2D uTex, uHeat;
uniform vec2 uDims;
uniform int uKind;
uniform float uBits, uMin, uMax;
uniform vec4 uPartEnd, uPartScale;
uniform vec2 uBorders, uDividers;
uniform vec3 uNeg, uPos, uZero, uGrid, uEmpty, uBg, uHi, uFill;
uniform float uReveal, uFade, uGap, uSelDim, uHeatOn;
uniform vec4 uSel[${ja}];
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
    for (int i = 0; i < ${ja}; i++) {
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
}`;class g0{constructor(e){qe(this,"spec");qe(this,"mesh");qe(this,"frame");qe(this,"group",new rs);qe(this,"reveal",0);qe(this,"revealTo",0);qe(this,"fade",1);qe(this,"fadeTo",1);qe(this,"gap",0);qe(this,"gapTo",0);qe(this,"shown",!0);this.spec=e;const t=e.parts??[{end:e.cols,scale:1}],n=l=>t[Math.min(l,t.length-1)],s=new Nn({vertexShader:m0,fragmentShader:_0,side:Ln,uniforms:{uTex:{value:e.texture},uDims:{value:new $e(e.cols,e.rows)},uKind:{value:p0[e.kind]},uBits:{value:e.bits??8},uMin:{value:e.min??0},uMax:{value:e.max??1},uPartEnd:{value:new ht(n(0).end,n(1).end,n(2).end,n(3).end)},uPartScale:{value:new ht(n(0).scale,n(1).scale,n(2).scale,n(3).scale)},uNeg:{value:new Je},uPos:{value:new Je},uZero:{value:new Je},uGrid:{value:new Je},uEmpty:{value:new Je},uBg:{value:new Je},uHi:{value:new Je},uFill:{value:new Je},uReveal:{value:0},uFade:{value:1},uGap:{value:0},uSelDim:{value:.45},uBorders:{value:new $e(e.borders==="all"||!e.borders?1:0,e.borders==="none"?0:1)},uDividers:{value:new $e(e.dividers?1:0,e.dividers==="both"?1:0)},uHeat:{value:null},uHeatOn:{value:0},uSel:{value:Array.from({length:ja},()=>new ht)},uSelN:{value:0}}});this.mesh=new wn(new ia(e.width,e.height),s),this.mesh.userData.sheet=this;const a=e.width/2,r=e.height/2,o=new fn().setFromPoints([[-a,-r],[a,-r],[a,r],[-a,r]].map(([l,c])=>new I(l,c,0)));this.frame=new hh(o,new Ko),this.group.add(this.mesh,this.frame),this.group.position.set(...e.pos)}setTheme(e){const t=this.mesh.material.uniforms;t.uNeg.value.copy(e.neg),t.uPos.value.copy(e.pos),t.uZero.value.copy(e.zero),t.uGrid.value.copy(e.grid),t.uEmpty.value.copy(e.empty),t.uBg.value.copy(e.bg),t.uHi.value.copy(e.hi),t.uFill.value.copy(e.fill),this.frame.material.color.copy(this.spec.trained?e.accent:e.frame)}setTexture(e,t){const n=this.mesh.material.uniforms;n.uTex.value=e,n.uDims.value.set(t.cols,t.rows),n.uBits.value=t.bits??8,n.uMin.value=t.min??0,n.uMax.value=t.max??1,this.spec.cols=t.cols,this.spec.rows=t.rows}setScale(e){this.mesh.material.uniforms.uPartScale.value.setScalar(e)}setHeat(e,t="light"){const n=this.mesh.material.uniforms;n.uHeat.value=e,n.uHeatOn.value=e?t==="mark"?2:1:0}moveTo(e,t,n,s=!1){this.spec.pos=[e,t,n],s&&this.group.position.set(e,t,n)}select(e){const t=this.mesh.material.uniforms,n=Math.min(e.length,ja);for(let s=0;s<n;s++)t.uSel.value[s].set(...e[s]);t.uSelN.value=n}tick(e){const t=(h,u,p)=>{const m=u-h;return Math.abs(m)<.002?u:h+m*Math.min(1,e*p)},n=this.group.position,s=this.reveal+this.fade+this.gap+n.x+n.y+n.z,a=e/(this.spec.sweep??1.1),[r,o,l]=this.spec.pos;n.set(t(n.x,r,9),t(n.y,o,9),t(n.z,l,9)),this.reveal=this.reveal<this.revealTo?Math.min(this.revealTo,this.reveal+a):this.revealTo,this.fade=t(this.fade,this.fadeTo,6),this.gap=t(this.gap,this.gapTo,5);const c=this.mesh.material.uniforms;return c.uReveal.value=this.reveal,c.uFade.value=this.fade,c.uGap.value=this.gap,this.group.scale.setScalar(1/(1-this.gap)),this.group.visible=this.shown,s!==this.reveal+this.fade+this.gap+n.x+n.y+n.z}cellAt(e){const{cols:t,rows:n}=this.spec,s=e.x*t,a=(1-e.y)*n,r=Math.min(t-1,Math.floor(s)),o=Math.min(n-1,Math.floor(a));if(this.gap>0){const l=(s-r-.5)/(1-this.gap)+.5,c=(a-o-.5)/(1-this.gap)+.5;if(l<0||l>1||c<0||c>1)return null}return{col:r,row:o}}box(){const e=1/(1-this.gapTo),[t,n,s]=this.spec.pos,a=this.spec.width/2*e,r=this.spec.height/2*e;return new un(new I(t-a,n-r,s),new I(t+a,n+r,s))}}const v0={episode:5,frame:158,task:"Put the yellow cube into the black basket"},x0={vlm_layers:16,expert_layers:16,vision_layers:12,vlm_width:960,expert_width:720,vision_width:768,heads:15,patch:16,image:512,chunk:50,max_dim:32,num_steps:10},y0={vision_encoder:86433024,vlm_text_16_layers:204626880,action_expert:98245840,state_proj:31680,trainable:99880992},b0={mask:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],text:["Put"," the"," yellow"," cube"," into"," the"," black"," basket",`
`,"<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>"]},M0={len:177},S0={names:["base","shoulder","elbow","forearm roll","wrist pitch","wrist roll","gripper"],deg:[5.9,32.1,34.5,4,23.4,-8.6,43.9],mean:[17.44,-11.73,37.92,5.48,38.11,-6.56,60.04],norm:[-.42,.945,-.101,-.208,-.668,-.236,-1.35],padded:[-.42,.945,-.101,-.208,-.668,-.236,-1.35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},w0={table_embed:{file:"data/table_embed.png",cols:1024,rows:768,bits:8,min:-1.47314453125,max:1.47314453125,scale:.40234375},table_encoded:{file:"data/table_encoded.png",cols:1024,rows:768,bits:8,min:-9,max:9,scale:2.390625},table_merged:{file:"data/table_merged.png",cols:64,rows:960,bits:16,min:-87,max:38,scale:11.125},wrist_embed:{file:"data/wrist_embed.png",cols:1024,rows:768,bits:8,min:-1.20751953125,max:1.20751953125,scale:.375},wrist_encoded:{file:"data/wrist_encoded.png",cols:1024,rows:768,bits:8,min:-9,max:9,scale:2.4375},wrist_merged:{file:"data/wrist_merged.png",cols:64,rows:960,bits:16,min:-83.5,max:41.25,scale:12.3125},lang_embed:{file:"data/lang_embed.png",cols:48,rows:960,bits:16,min:-2.390625,max:1.109375,scale:.19921875},state_token:{file:"data/state_token.png",cols:1,rows:960,bits:16,min:-.63330078125,max:.74169921875,scale:.5316504240036011},sequence:{file:"data/sequence.png",cols:177,rows:960,bits:16,min:-2704,max:1280,scale:332,parts:[{name:"table camera",start:0,end:64,scale:344},{name:"wrist camera",start:64,end:128,scale:384},{name:"instruction",start:128,end:176,scale:7.59375},{name:"arm readings",start:176,end:177,scale:.53173828125}]},mask:{file:"data/mask.png",cols:177,rows:177,bits:1},exp_x:{file:"data/exp_x.png",cols:50,rows:32,bits:16,min:-3.0703125,max:3.423828125,scale:2.2871875762939453},exp_v:{file:"data/exp_v.png",cols:50,rows:32,bits:16,min:-3.955078125,max:4.03125,scale:2.1665239334106445},exp_last:{file:"data/layers/exp_last_00.png",cols:50,rows:720,bits:8,min:-1.4500000476837158,max:1.4500000476837158,scale:1,norm:!0,parts:[{name:"all",end:50,scale:7.5}]},table_sizes:{file:"data/table_sizes.png",cols:32,rows:32,blocks:12,bits:16,min:4.314220428466797,max:797.6415405273438,scale:418.288818359375},wrist_sizes:{file:"data/wrist_sizes.png",cols:32,rows:32,blocks:12,bits:16,min:4.434171676635742,max:794.8687744140625,scale:403.6320495605469},den_x:{file:"data/den_x.png",cols:50,rows:32,blocks:11,bits:16,min:-3.0703125,max:3.423828125,scale:1.9170112609863281},den_v:{file:"data/den_v.png",cols:50,rows:32,blocks:10,bits:16,min:-3.982421875,max:4.03125,scale:2.125040054321289},tr_a:{file:"data/tr_a.png",cols:50,rows:32,blocks:1,bits:16,min:-1.3662109375,max:1.7900390625,scale:1.349609375},tr_x:{file:"data/tr_x.png",cols:50,rows:32,blocks:3,bits:16,min:-2.763671875,max:3.08203125,scale:1.6816797256469727},tr_u:{file:"data/tr_u.png",cols:50,rows:32,blocks:1,bits:16,min:-3.953125,max:3.923828125,scale:2.4004297256469727},tr_v:{file:"data/tr_v.png",cols:50,rows:32,blocks:3,bits:16,min:-4.234375,max:3.9453125,scale:2.088007926940918},tr_err:{file:"data/tr_err.png",cols:50,rows:32,blocks:3,bits:16,min:0,max:9.082218170166016,scale:3.191195011138916}},E0=JSON.parse('{"vlm_stream":[{"file":"data/layers/vlm_stream_00.png","cols":177,"rows":960,"bits":8,"min":-4.666666507720947,"max":4.666666507720947,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":7.625},{"name":"padding","end":176,"scale":4.3125},{"name":"arm readings","end":177,"scale":0.5316504240036011}]},{"file":"data/layers/vlm_stream_01.png","cols":177,"rows":960,"bits":8,"min":-4.378255367279053,"max":4.378255367279053,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":8.3125},{"name":"padding","end":176,"scale":7.1875},{"name":"arm readings","end":177,"scale":5.790000915527344}]},{"file":"data/layers/vlm_stream_02.png","cols":177,"rows":960,"bits":8,"min":-4.648648738861084,"max":4.648648738861084,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":8.75},{"name":"padding","end":176,"scale":6.9375},{"name":"arm readings","end":177,"scale":6.494375228881836}]},{"file":"data/layers/vlm_stream_03.png","cols":177,"rows":960,"bits":8,"min":-4.666666507720947,"max":4.666666507720947,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.375},{"name":"padding","end":176,"scale":7.09375},{"name":"arm readings","end":177,"scale":6.6112518310546875}]},{"file":"data/layers/vlm_stream_04.png","cols":177,"rows":960,"bits":8,"min":-5.017543792724609,"max":5.017543792724609,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":386},{"name":"instruction","end":137,"scale":9.57623291015625},{"name":"padding","end":176,"scale":7.125},{"name":"arm readings","end":177,"scale":6.931875228881836}]},{"file":"data/layers/vlm_stream_05.png","cols":177,"rows":960,"bits":8,"min":-5.294797897338867,"max":5.294797897338867,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.625},{"name":"padding","end":176,"scale":7.0625},{"name":"arm readings","end":177,"scale":6.738750457763672}]},{"file":"data/layers/vlm_stream_06.png","cols":177,"rows":960,"bits":8,"min":-5.273237705230713,"max":5.273237705230713,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.625},{"name":"padding","end":176,"scale":7.53125},{"name":"arm readings","end":177,"scale":7.0800018310546875}]},{"file":"data/layers/vlm_stream_07.png","cols":177,"rows":960,"bits":8,"min":-5.225725173950195,"max":5.225725173950195,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.5},{"name":"padding","end":176,"scale":8.25},{"name":"arm readings","end":177,"scale":7.213125228881836}]},{"file":"data/layers/vlm_stream_08.png","cols":177,"rows":960,"bits":8,"min":-4.751028060913086,"max":4.751028060913086,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.5},{"name":"padding","end":176,"scale":9.5},{"name":"arm readings","end":177,"scale":7.2050018310546875}]},{"file":"data/layers/vlm_stream_09.png","cols":177,"rows":960,"bits":8,"min":-5.006622314453125,"max":5.006622314453125,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.5625},{"name":"padding","end":176,"scale":9.4375},{"name":"arm readings","end":177,"scale":7.62812614440918}]},{"file":"data/layers/vlm_stream_10.png","cols":177,"rows":960,"bits":8,"min":-4.837696552276611,"max":4.837696552276611,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.6875},{"name":"padding","end":176,"scale":11.0625},{"name":"arm readings","end":177,"scale":7.84687614440918}]},{"file":"data/layers/vlm_stream_11.png","cols":177,"rows":960,"bits":8,"min":-4.900523662567139,"max":4.900523662567139,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.8125},{"name":"padding","end":176,"scale":10.625},{"name":"arm readings","end":177,"scale":8.301250457763672}]},{"file":"data/layers/vlm_stream_12.png","cols":177,"rows":960,"bits":8,"min":-4.857421875,"max":4.857421875,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":10},{"name":"padding","end":176,"scale":12.0625},{"name":"arm readings","end":177,"scale":8.421253204345703}]},{"file":"data/layers/vlm_stream_13.png","cols":177,"rows":960,"bits":8,"min":-4.896451473236084,"max":4.896451473236084,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382.4453125},{"name":"instruction","end":137,"scale":10.375},{"name":"padding","end":176,"scale":12.4375},{"name":"arm readings","end":177,"scale":9.403751373291016}]},{"file":"data/layers/vlm_stream_14.png","cols":177,"rows":960,"bits":8,"min":-4.881217002868652,"max":4.881217002868652,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":10.88873291015625},{"name":"padding","end":176,"scale":12.5625},{"name":"arm readings","end":177,"scale":9.915000915527344}]},{"file":"data/layers/vlm_stream_15.png","cols":177,"rows":960,"bits":8,"min":-4.900523662567139,"max":4.900523662567139,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":11.5},{"name":"padding","end":176,"scale":13},{"name":"arm readings","end":177,"scale":10.113750457763672}]}],"vlm_update":[{"file":"data/layers/vlm_update_00.png","cols":177,"rows":960,"bits":8,"min":-10.69829273223877,"max":10.69829273223877,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":2},{"name":"wrist camera","end":128,"scale":2},{"name":"instruction","end":137,"scale":3.890625},{"name":"padding","end":176,"scale":4.875},{"name":"arm readings","end":177,"scale":5.839480400085449}]},{"file":"data/layers/vlm_update_01.png","cols":177,"rows":960,"bits":8,"min":-9.466373443603516,"max":9.466373443603516,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":3.5},{"name":"wrist camera","end":128,"scale":3.5},{"name":"instruction","end":137,"scale":2.671875},{"name":"padding","end":176,"scale":1.046875},{"name":"arm readings","end":177,"scale":1.8902734518051147}]},{"file":"data/layers/vlm_update_02.png","cols":177,"rows":960,"bits":8,"min":-3.5,"max":3.5,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.90625},{"name":"padding","end":176,"scale":1.46875},{"name":"arm readings","end":177,"scale":1.8232033252716064}]},{"file":"data/layers/vlm_update_03.png","cols":177,"rows":960,"bits":8,"min":-3.615530014038086,"max":3.615530014038086,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.42535400390625},{"name":"wrist camera","end":128,"scale":4.0625},{"name":"instruction","end":137,"scale":3.390625},{"name":"padding","end":176,"scale":1.36572265625},{"name":"arm readings","end":177,"scale":2.2283594608306885}]},{"file":"data/layers/vlm_update_04.png","cols":177,"rows":960,"bits":8,"min":-3,"max":3,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.5},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.2625770568847656},{"name":"padding","end":176,"scale":2.6328125},{"name":"arm readings","end":177,"scale":1.598750114440918}]},{"file":"data/layers/vlm_update_05.png","cols":177,"rows":960,"bits":8,"min":-1.7777777910232544,"max":1.7777777910232544,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.5},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.1688270568847656},{"name":"padding","end":176,"scale":2.830078125},{"name":"arm readings","end":177,"scale":1.6555469036102295}]},{"file":"data/layers/vlm_update_06.png","cols":177,"rows":960,"bits":8,"min":-2.0982449054718018,"max":2.0982449054718018,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.25},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.28125},{"name":"padding","end":176,"scale":2.8203125},{"name":"arm readings","end":177,"scale":2.051250457763672}]},{"file":"data/layers/vlm_update_07.png","cols":177,"rows":960,"bits":8,"min":-2.3893048763275146,"max":2.3893048763275146,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.59375},{"name":"padding","end":176,"scale":3.65234375},{"name":"arm readings","end":177,"scale":2.198906421661377}]},{"file":"data/layers/vlm_update_08.png","cols":177,"rows":960,"bits":8,"min":-1.8758877515792847,"max":1.8758877515792847,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.7000770568847656},{"name":"padding","end":176,"scale":3.46875},{"name":"arm readings","end":177,"scale":2.3125}]},{"file":"data/layers/vlm_update_09.png","cols":177,"rows":960,"bits":8,"min":-2.3475215435028076,"max":2.3475215435028076,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.4375},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.2985916137695312},{"name":"padding","end":176,"scale":3.578125},{"name":"arm readings","end":177,"scale":2.105156421661377}]},{"file":"data/layers/vlm_update_10.png","cols":177,"rows":960,"bits":8,"min":-2.7759037017822266,"max":2.7759037017822266,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.25},{"name":"padding","end":176,"scale":3.2421875},{"name":"arm readings","end":177,"scale":1.9585158824920654}]},{"file":"data/layers/vlm_update_11.png","cols":177,"rows":960,"bits":8,"min":-2.307692289352417,"max":2.307692289352417,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.5},{"name":"wrist camera","end":128,"scale":6.0625},{"name":"instruction","end":137,"scale":2.609375},{"name":"padding","end":176,"scale":3.75},{"name":"arm readings","end":177,"scale":2.1055471897125244}]},{"file":"data/layers/vlm_update_12.png","cols":177,"rows":960,"bits":8,"min":-2,"max":2,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6},{"name":"wrist camera","end":128,"scale":6},{"name":"instruction","end":137,"scale":3.390625},{"name":"padding","end":176,"scale":3.7890625},{"name":"arm readings","end":177,"scale":2.515781879425049}]},{"file":"data/layers/vlm_update_13.png","cols":177,"rows":960,"bits":8,"min":-1.9323413372039795,"max":1.9323413372039795,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.2100830078125},{"name":"wrist camera","end":128,"scale":6},{"name":"instruction","end":137,"scale":3.4157791137695312},{"name":"padding","end":176,"scale":4.0625},{"name":"arm readings","end":177,"scale":2.5976953506469727}]},{"file":"data/layers/vlm_update_14.png","cols":177,"rows":960,"bits":8,"min":-2.0392701625823975,"max":2.0392701625823975,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.5},{"name":"wrist camera","end":128,"scale":6.375},{"name":"instruction","end":137,"scale":3.5234375},{"name":"padding","end":176,"scale":4.21875},{"name":"arm readings","end":177,"scale":2.592343807220459}]},{"file":"data/layers/vlm_update_15.png","cols":177,"rows":960,"bits":8,"min":-1.6124721765518188,"max":1.6124721765518188,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.25},{"name":"wrist camera","end":128,"scale":6.375},{"name":"instruction","end":137,"scale":3.4609375},{"name":"padding","end":176,"scale":3.5078125},{"name":"arm readings","end":177,"scale":2.953906536102295}]}],"vlm_attn":[{"file":"data/layers/vlm_attn_00.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_01.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_02.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_03.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_04.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_05.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_06.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_07.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_08.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_09.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_10.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_11.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_12.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_13.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_14.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_15.png","cols":177,"rows":177,"bits":8}],"vlm_k":[{"file":"data/layers/vlm_k_00.png","cols":177,"rows":320,"bits":8,"min":-3.0164434909820557,"max":3.0164434909820557,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":3.28125}]},{"file":"data/layers/vlm_k_01.png","cols":177,"rows":320,"bits":8,"min":-2.946666717529297,"max":2.946666717529297,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.6875}]},{"file":"data/layers/vlm_k_02.png","cols":177,"rows":320,"bits":8,"min":-2.4851925373077393,"max":2.4851925373077393,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.375}]},{"file":"data/layers/vlm_k_03.png","cols":177,"rows":320,"bits":8,"min":-2.2020156383514404,"max":2.2020156383514404,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.0625}]},{"file":"data/layers/vlm_k_04.png","cols":177,"rows":320,"bits":8,"min":-2.2661867141723633,"max":2.2661867141723633,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.78125}]},{"file":"data/layers/vlm_k_05.png","cols":177,"rows":320,"bits":8,"min":-2.454545497894287,"max":2.454545497894287,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.8125}]},{"file":"data/layers/vlm_k_06.png","cols":177,"rows":320,"bits":8,"min":-2.7121212482452393,"max":2.7121212482452393,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.125}]},{"file":"data/layers/vlm_k_07.png","cols":177,"rows":320,"bits":8,"min":-2.5068492889404297,"max":2.5068492889404297,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.5625}]},{"file":"data/layers/vlm_k_08.png","cols":177,"rows":320,"bits":8,"min":-3.058823585510254,"max":3.058823585510254,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.25}]},{"file":"data/layers/vlm_k_09.png","cols":177,"rows":320,"bits":8,"min":-2.1641790866851807,"max":2.1641790866851807,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.1875}]},{"file":"data/layers/vlm_k_10.png","cols":177,"rows":320,"bits":8,"min":-2.2804877758026123,"max":2.2804877758026123,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.125}]},{"file":"data/layers/vlm_k_11.png","cols":177,"rows":320,"bits":8,"min":-2.8592593669891357,"max":2.8592593669891357,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.21875}]},{"file":"data/layers/vlm_k_12.png","cols":177,"rows":320,"bits":8,"min":-2.9790210723876953,"max":2.9790210723876953,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.46875}]},{"file":"data/layers/vlm_k_13.png","cols":177,"rows":320,"bits":8,"min":-2.470588207244873,"max":2.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.3125}]},{"file":"data/layers/vlm_k_14.png","cols":177,"rows":320,"bits":8,"min":-3.307692289352417,"max":3.307692289352417,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.875}]},{"file":"data/layers/vlm_k_15.png","cols":177,"rows":320,"bits":8,"min":-3.49367094039917,"max":3.49367094039917,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.9375}]}],"vlm_v":[{"file":"data/layers/vlm_v_00.png","cols":177,"rows":320,"bits":8,"min":-4.7222819328308105,"max":4.7222819328308105,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":0.0712890625}]},{"file":"data/layers/vlm_v_01.png","cols":177,"rows":320,"bits":8,"min":-1.794392466545105,"max":1.794392466545105,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":0.8359375}]},{"file":"data/layers/vlm_v_02.png","cols":177,"rows":320,"bits":8,"min":-1.5388296842575073,"max":1.5388296842575073,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.1796875}]},{"file":"data/layers/vlm_v_03.png","cols":177,"rows":320,"bits":8,"min":-1.7191780805587769,"max":1.7191780805587769,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.140625}]},{"file":"data/layers/vlm_v_04.png","cols":177,"rows":320,"bits":8,"min":-1.4702702760696411,"max":1.4702702760696411,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.4453125}]},{"file":"data/layers/vlm_v_05.png","cols":177,"rows":320,"bits":8,"min":-1.5641428232192993,"max":1.5641428232192993,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.671875}]},{"file":"data/layers/vlm_v_06.png","cols":177,"rows":320,"bits":8,"min":-1.590243935585022,"max":1.590243935585022,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.6015625}]},{"file":"data/layers/vlm_v_07.png","cols":177,"rows":320,"bits":8,"min":-1.5500218868255615,"max":1.5500218868255615,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.743927001953125}]},{"file":"data/layers/vlm_v_08.png","cols":177,"rows":320,"bits":8,"min":-1.5064871311187744,"max":1.5064871311187744,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.75}]},{"file":"data/layers/vlm_v_09.png","cols":177,"rows":320,"bits":8,"min":-1.5098813772201538,"max":1.5098813772201538,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.9765625}]},{"file":"data/layers/vlm_v_10.png","cols":177,"rows":320,"bits":8,"min":-1.9787532091140747,"max":1.9787532091140747,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.634552001953125}]},{"file":"data/layers/vlm_v_11.png","cols":177,"rows":320,"bits":8,"min":-1.4728682041168213,"max":1.4728682041168213,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":2.015625}]},{"file":"data/layers/vlm_v_12.png","cols":177,"rows":320,"bits":8,"min":-1.5267857313156128,"max":1.5267857313156128,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.75}]},{"file":"data/layers/vlm_v_13.png","cols":177,"rows":320,"bits":8,"min":-1.436619758605957,"max":1.436619758605957,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.6640625}]},{"file":"data/layers/vlm_v_14.png","cols":177,"rows":320,"bits":8,"min":-1.4817813634872437,"max":1.4817813634872437,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.9296875}]},{"file":"data/layers/vlm_v_15.png","cols":177,"rows":320,"bits":8,"min":-1.545454502105713,"max":1.545454502105713,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":2.0625}]}],"exp_stream":[{"file":"data/layers/exp_stream_00.png","cols":50,"rows":720,"bits":8,"min":-1.488465428352356,"max":1.488465428352356,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":1.947265625}]},{"file":"data/layers/exp_stream_01.png","cols":50,"rows":720,"bits":8,"min":-1.446969747543335,"max":1.446969747543335,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.0625}]},{"file":"data/layers/exp_stream_02.png","cols":50,"rows":720,"bits":8,"min":-1.4154930114746094,"max":1.4154930114746094,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.21875}]},{"file":"data/layers/exp_stream_03.png","cols":50,"rows":720,"bits":8,"min":-1.4733333587646484,"max":1.4733333587646484,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.34375}]},{"file":"data/layers/exp_stream_04.png","cols":50,"rows":720,"bits":8,"min":-1.4620252847671509,"max":1.4620252847671509,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.46875}]},{"file":"data/layers/exp_stream_05.png","cols":50,"rows":720,"bits":8,"min":-1.4967741966247559,"max":1.4967741966247559,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.421875}]},{"file":"data/layers/exp_stream_06.png","cols":50,"rows":720,"bits":8,"min":-1.470588207244873,"max":1.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.390625}]},{"file":"data/layers/exp_stream_07.png","cols":50,"rows":720,"bits":8,"min":-1.5133333206176758,"max":1.5133333206176758,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.34375}]},{"file":"data/layers/exp_stream_08.png","cols":50,"rows":720,"bits":8,"min":-1.4900661706924438,"max":1.4900661706924438,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.359375}]},{"file":"data/layers/exp_stream_09.png","cols":50,"rows":720,"bits":8,"min":-1.4451613426208496,"max":1.4451613426208496,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.421875}]},{"file":"data/layers/exp_stream_10.png","cols":50,"rows":720,"bits":8,"min":-1.4500000476837158,"max":1.4500000476837158,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.5}]},{"file":"data/layers/exp_stream_11.png","cols":50,"rows":720,"bits":8,"min":-1.470588207244873,"max":1.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.65625}]},{"file":"data/layers/exp_stream_12.png","cols":50,"rows":720,"bits":8,"min":-1.497267723083496,"max":1.497267723083496,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.859375}]},{"file":"data/layers/exp_stream_13.png","cols":50,"rows":720,"bits":8,"min":-1.6057692766189575,"max":1.6057692766189575,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":3.25}]},{"file":"data/layers/exp_stream_14.png","cols":50,"rows":720,"bits":8,"min":-1.5666667222976685,"max":1.5666667222976685,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":3.75}]},{"file":"data/layers/exp_stream_15.png","cols":50,"rows":720,"bits":8,"min":-1.5119047164916992,"max":1.5119047164916992,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":5.25}]}],"exp_update":[{"file":"data/layers/exp_update_00.png","cols":50,"rows":720,"bits":8,"min":-1.6307685375213623,"max":1.6307685375213623,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.37427234649658203}]},{"file":"data/layers/exp_update_01.png","cols":50,"rows":720,"bits":8,"min":-1.4249999523162842,"max":1.4249999523162842,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.625}]},{"file":"data/layers/exp_update_02.png","cols":50,"rows":720,"bits":8,"min":-1.3928571939468384,"max":1.3928571939468384,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6015625}]},{"file":"data/layers/exp_update_03.png","cols":50,"rows":720,"bits":8,"min":-1.3269401788711548,"max":1.3269401788711548,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.7168159484863281}]},{"file":"data/layers/exp_update_04.png","cols":50,"rows":720,"bits":8,"min":-1.4461538791656494,"max":1.4461538791656494,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5078125}]},{"file":"data/layers/exp_update_05.png","cols":50,"rows":720,"bits":8,"min":-1.4171974658966064,"max":1.4171974658966064,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.61328125}]},{"file":"data/layers/exp_update_06.png","cols":50,"rows":720,"bits":8,"min":-1.4177215099334717,"max":1.4177215099334717,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6171875}]},{"file":"data/layers/exp_update_07.png","cols":50,"rows":720,"bits":8,"min":-1.3915441036224365,"max":1.3915441036224365,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.53125}]},{"file":"data/layers/exp_update_08.png","cols":50,"rows":720,"bits":8,"min":-1.4036144018173218,"max":1.4036144018173218,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6484375}]},{"file":"data/layers/exp_update_09.png","cols":50,"rows":720,"bits":8,"min":-1.399999976158142,"max":1.399999976158142,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5859375}]},{"file":"data/layers/exp_update_10.png","cols":50,"rows":720,"bits":8,"min":-1.3831775188446045,"max":1.3831775188446045,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.626953125}]},{"file":"data/layers/exp_update_11.png","cols":50,"rows":720,"bits":8,"min":-1.3591549396514893,"max":1.3591549396514893,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5546875}]},{"file":"data/layers/exp_update_12.png","cols":50,"rows":720,"bits":8,"min":-1.7169811725616455,"max":1.7169811725616455,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.828125}]},{"file":"data/layers/exp_update_13.png","cols":50,"rows":720,"bits":8,"min":-1.4272300004959106,"max":1.4272300004959106,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.83203125}]},{"file":"data/layers/exp_update_14.png","cols":50,"rows":720,"bits":8,"min":-1.5213675498962402,"max":1.5213675498962402,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":1.828125}]},{"file":"data/layers/exp_update_15.png","cols":50,"rows":720,"bits":8,"min":-1.4177215099334717,"max":1.4177215099334717,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.46875}]}],"exp_attn":[{"file":"data/layers/exp_attn_00.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_01.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_02.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_03.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_04.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_05.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_06.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_07.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_08.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_09.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_10.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_11.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_12.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_13.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_14.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_15.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false}]}'),T0={table:[{file:"data/layers/vis_table_00.png",cols:1024,rows:768,bits:8,min:-.683935546875,max:.683935546875,scale:.3419677734375},{file:"data/layers/vis_table_01.png",cols:1024,rows:768,bits:8,min:-.73447265625,max:.73447265625,scale:.367236328125},{file:"data/layers/vis_table_02.png",cols:1024,rows:768,bits:8,min:-.825439453125,max:.825439453125,scale:.4127197265625},{file:"data/layers/vis_table_03.png",cols:1024,rows:768,bits:8,min:-.86923828125,max:.86923828125,scale:.434619140625},{file:"data/layers/vis_table_04.png",cols:1024,rows:768,bits:8,min:-.90966796875,max:.90966796875,scale:.454833984375},{file:"data/layers/vis_table_05.png",cols:1024,rows:768,bits:8,min:-.8557617187500001,max:.8557617187500001,scale:.42788085937500003},{file:"data/layers/vis_table_06.png",cols:1024,rows:768,bits:8,min:-.9500976562500001,max:.9500976562500001,scale:.47504882812500004},{file:"data/layers/vis_table_07.png",cols:1024,rows:768,bits:8,min:-1.0376953125000001,max:1.0376953125000001,scale:.5188476562500001},{file:"data/layers/vis_table_08.png",cols:1024,rows:768,bits:8,min:-1.4015625,max:1.4015625,scale:.70078125},{file:"data/layers/vis_table_09.png",cols:1024,rows:768,bits:8,min:-1.8328125000000002,max:1.8328125000000002,scale:.9164062500000001},{file:"data/layers/vis_table_10.png",cols:1024,rows:768,bits:8,min:-2.7087890625,max:2.7087890625,scale:1.35439453125},{file:"data/layers/vis_table_11.png",cols:1024,rows:768,bits:8,min:-6.95390625,max:6.95390625,scale:3.476953125}],wrist:[{file:"data/layers/vis_wrist_00.png",cols:1024,rows:768,bits:8,min:-.576123046875,max:.576123046875,scale:.2880615234375},{file:"data/layers/vis_wrist_01.png",cols:1024,rows:768,bits:8,min:-.64013671875,max:.64013671875,scale:.320068359375},{file:"data/layers/vis_wrist_02.png",cols:1024,rows:768,bits:8,min:-.778271484375,max:.778271484375,scale:.3891357421875},{file:"data/layers/vis_wrist_03.png",cols:1024,rows:768,bits:8,min:-.8321777343750001,max:.8321777343750001,scale:.41608886718750004},{file:"data/layers/vis_wrist_04.png",cols:1024,rows:768,bits:8,min:-.8625,max:.8625,scale:.43125},{file:"data/layers/vis_wrist_05.png",cols:1024,rows:768,bits:8,min:-.82880859375,max:.82880859375,scale:.414404296875},{file:"data/layers/vis_wrist_06.png",cols:1024,rows:768,bits:8,min:-.9500976562500001,max:.9500976562500001,scale:.47504882812500004},{file:"data/layers/vis_wrist_07.png",cols:1024,rows:768,bits:8,min:-1.09833984375,max:1.09833984375,scale:.549169921875},{file:"data/layers/vis_wrist_08.png",cols:1024,rows:768,bits:8,min:-1.4689453125,max:1.4689453125,scale:.73447265625},{file:"data/layers/vis_wrist_09.png",cols:1024,rows:768,bits:8,min:-1.9810546875000001,max:1.9810546875000001,scale:.9905273437500001},{file:"data/layers/vis_wrist_10.png",cols:1024,rows:768,bits:8,min:-2.7626953125,max:2.7626953125,scale:1.38134765625},{file:"data/layers/vis_wrist_11.png",cols:1024,rows:768,bits:8,min:-7.061718750000001,max:7.061718750000001,scale:3.5308593750000004}]},A0={typical_size:{table:[7.2,6.4,7.1,6.5,6.7,6,6.7,7.2,9.7,12.2,17.8,222.4],wrist:[6.8,6,6.9,6.4,6.4,5.8,6.7,7.7,10.3,13.6,18.5,218.3]},largest_size:{table:[20,14,13,15,29,119,139,148,153,155,158,798],wrist:[20,14,13,15,29,117,137,145,150,151,155,795]},big:{table:[1,1,0,2,14,24,24,24,24,24,24,215],wrist:[1,1,0,2,21,34,35,35,35,35,34,214]},jump_layer:5,jump_ratio:20,big_in_black_bar:{table:12},big_in_both:20,last_layer_growth:12},R0={facts:{table:{alike:[.0975,.1198,.053,.0369,.0284,.0265,.0376,.0438,.0446,.0411,.0336,.0292,.4769,.1583],matches:[90,105,19,16,18,21,30,44,44,38,30,25,574,37],one_direction:[.3209,.3356,.2091,.1625,.1369,.1146,.1646,.183,.1875,.1444,.1248,.1108,.8957,.3361]},wrist:{alike:[.1018,.1251,.0533,.036,.031,.0339,.1032,.1339,.1271,.0922,.0675,.0539,.4635,.1837],matches:[91,102,33,25,27,33,105,134,122,87,65,49,560,59],one_direction:[.2887,.3534,.2149,.162,.1362,.1259,.2987,.3174,.2929,.2235,.1641,.1334,.8838,.3659]}},table:{before:{file:"data/sim/table_before.png",cols:320,rows:1024,bits:8,min:-.2419661357909638,max:.2419661357909638},layers:[{file:"data/sim/table_00.png",cols:320,rows:1024,bits:8,min:-.23952942475984057,max:.23952942475984057},{file:"data/sim/table_01.png",cols:320,rows:1024,bits:8,min:-.2560640756462496,max:.2560640756462496},{file:"data/sim/table_02.png",cols:320,rows:1024,bits:8,min:-.25006924563739574,max:.25006924563739574},{file:"data/sim/table_03.png",cols:320,rows:1024,bits:8,min:-.24008189626025758,max:.24008189626025758},{file:"data/sim/table_04.png",cols:320,rows:1024,bits:8,min:-.23919009414820824,max:.23919009414820824},{file:"data/sim/table_05.png",cols:320,rows:1024,bits:8,min:-.24817867154843679,max:.24817867154843679},{file:"data/sim/table_06.png",cols:320,rows:1024,bits:8,min:-.2588102090216902,max:.2588102090216902},{file:"data/sim/table_07.png",cols:320,rows:1024,bits:8,min:-.2708775497035219,max:.2708775497035219},{file:"data/sim/table_08.png",cols:320,rows:1024,bits:8,min:-.25375181002065533,max:.25375181002065533},{file:"data/sim/table_09.png",cols:320,rows:1024,bits:8,min:-.2924706188152235,max:.2924706188152235},{file:"data/sim/table_10.png",cols:320,rows:1024,bits:8,min:-.24655901392110774,max:.24655901392110774},{file:"data/sim/table_11.png",cols:320,rows:1024,bits:8,min:-.23207715515314362,max:.23207715515314362}],after:{file:"data/sim/table_after.png",cols:320,rows:1024,bits:8,min:-.2487465763941288,max:.2487465763941288}},wrist:{before:{file:"data/sim/wrist_before.png",cols:320,rows:1024,bits:8,min:-.22655319342398383,max:.22655319342398383},layers:[{file:"data/sim/wrist_00.png",cols:320,rows:1024,bits:8,min:-.2408137811081941,max:.2408137811081941},{file:"data/sim/wrist_01.png",cols:320,rows:1024,bits:8,min:-.2506326250991203,max:.2506326250991203},{file:"data/sim/wrist_02.png",cols:320,rows:1024,bits:8,min:-.2580826777385899,max:.2580826777385899},{file:"data/sim/wrist_03.png",cols:320,rows:1024,bits:8,min:-.24945300258698583,max:.24945300258698583},{file:"data/sim/wrist_04.png",cols:320,rows:1024,bits:8,min:-.27212029977806,max:.27212029977806},{file:"data/sim/wrist_05.png",cols:320,rows:1024,bits:8,min:-.22499933073839093,max:.22499933073839093},{file:"data/sim/wrist_06.png",cols:320,rows:1024,bits:8,min:-.26663220109917696,max:.26663220109917696},{file:"data/sim/wrist_07.png",cols:320,rows:1024,bits:8,min:-.23113067911306945,max:.23113067911306945},{file:"data/sim/wrist_08.png",cols:320,rows:1024,bits:8,min:-.24527861573829174,max:.24527861573829174},{file:"data/sim/wrist_09.png",cols:320,rows:1024,bits:8,min:-.24223879982627178,max:.24223879982627178},{file:"data/sim/wrist_10.png",cols:320,rows:1024,bits:8,min:-.26347897689756683,max:.26347897689756683},{file:"data/sim/wrist_11.png",cols:320,rows:1024,bits:8,min:-.22119540597652274,max:.22119540597652274}],after:{file:"data/sim/wrist_after.png",cols:320,rows:1024,bits:8,min:-.2691340321958974,max:.2691340321958974}},max_error:.039,mean_error:.0012},C0={picture_token_size:4340,picture_update_share:[.0112,.0176,.0125,.0131,.0127,.0123,.013,.0149,.0148,.0176,.0172,.0182,.0175,.0184,.018,.018],readings_token_size:[7.1,78.1,87.6,79.3,80.2,80,81.4,87.9,88.1,90.8,91.8,99,105.2,105.2,113.5,120.8,136.1],word_jump_layer:3,word_jump_tokens:[1,5],word_sizes_before_after:[[147.6999969482422,140.1999969482422,136.89999389648438,146.3000030517578,137.60000610351562,139.10000610351562,131.5,147.39999389648438,142.6999969482422],[142.89999389648438,1789.0999755859375,134.39999389648438,143.39999389648438,132.8000030517578,1651,130.8000030517578,141.8000030517578,210.8000030517578]],readings_sink_share_by_layer:[.009,.064,.327,.136,.887,.884,.772,.696,.74,.844,.772,.782,.663,.373,.628,.45],times:[1,.9,.8,.7,.6,.5,.4,.3,.2,.1]},P0={names:["base","shoulder","elbow","forearm roll","wrist pitch","wrist roll","gripper"],mean:[17.439,-11.73,37.922,5.481,38.111,-6.557,60.044],std:[27.488,46.399,33.921,7.132,21.999,8.668,11.966],plan_deg:[[6.81,31.94,33.88,4.14,23.16,-8.44,44.56],[6.7,32.31,33.78,4.22,23.45,-8.59,44],[5.66,31.2,34.94,4.16,22.66,-8.49,43.91],[7.62,31.22,34.84,4.49,22.16,-8.31,43.91],[6.37,30.97,35.16,4.57,23.69,-8.54,44.44],[7.02,32.12,35.22,4.56,23.44,-8.41,44.09],[6.44,30.39,36.03,5,23.66,-8.59,43.97],[6.12,30.83,36.62,4.02,25.06,-8.77,44.28],[6.92,27.16,36.38,1.05,26.22,-8.73,43.97],[6.47,29.16,36.19,1.46,26.89,-8.66,44.19],[7.28,27.86,35.09,1.93,28.27,-8.38,44.16],[6.39,24.02,35.59,1.24,29.98,-8.62,44.12],[6.93,22.2,35.38,.09,34.31,-8.84,44.81],[6.86,21.91,35.06,-.22,33.88,-8.72,44.34],[6.96,17.73,34.62,-.31,36.28,-9,45.12],[6.89,17.61,34.66,.12,37.62,-8.47,44.94],[6.55,17.34,34.53,.81,40.31,-8.7,44.53],[6.98,12.51,34.56,.33,42.47,-8.73,44.44],[7.05,10.31,33.91,.93,43.84,-8.9,44.91],[7.73,8.43,32.91,1.01,45.34,-8.55,44.88],[6.88,8.98,33.12,.78,46.22,-8.69,44.56],[6.87,6.23,31.28,.73,51.81,-8.33,44.34],[7.49,3.6,30.48,.19,52.91,-8.51,44.66],[7.06,3.14,28.52,-.18,55.16,-8.29,44.28],[7.14,2.75,27.83,-.53,57.16,-8.27,44.12],[6.93,.41,25.42,-.29,60.53,-8.31,44.19],[7.51,-1.66,23.36,.15,62.44,-8.67,43.94],[7.17,-1.3,18.7,.88,67.38,-8.34,44.41],[7.89,-1.4,14.52,1.26,70.69,-8.56,43.56],[8.1,-2,11.34,.93,73.31,-8.27,44.03],[7.25,-1.7,8.48,1.13,73.88,-8.18,43.97],[8.36,-1.11,7.26,2.4,74,-8.18,44.69],[10.55,-2.62,8.34,1.9,73.38,-8.17,44.12],[14.09,-1.23,8.11,2.46,72.44,-8.1,44.44],[13.4,-2.15,8.65,3.43,73,-7.6,43.94],[17.16,.25,10.66,3.4,72.88,-7.99,43.94],[15.63,.88,7.13,5.34,74.44,-7.96,44.22],[20.94,-.22,7.41,5.54,73.94,-7.48,43.81],[21.06,2.02,5.41,7,72.88,-6.71,43.59],[23.84,2.58,4.98,6.88,73.38,-6.81,44],[24.17,3.38,6.09,7.65,71.88,-7.27,43.94],[24.33,5.27,5.46,9.63,73.75,-7.61,44.59],[29.66,5.46,5.69,9.16,71.56,-7.06,43.88],[34.03,5.79,4.28,9.79,73.06,-7.09,44.16],[40.66,7.65,.66,9.78,74.19,-7.03,44.06],[46.03,9.36,1.36,9.29,71.5,-7.11,43.88],[47.03,8.89,3.23,10.66,69.94,-7.3,44.72],[45.09,11.16,.96,9.89,70.94,-7.2,44.28],[49.44,13.59,-1.03,10.58,70.94,-7.27,44.12],[51.94,13.02,-.77,10.66,70.44,-6.72,44.12]],hand_deg:[[5.9,32.09,34.5,4,23.41,-8.6,43.91],[5.9,32.09,34.5,4,23.41,-8.6,43.81],[5.9,32.09,34.5,4,23.41,-8.6,43.81],[5.8,32.09,34.5,4,23.41,-8.6,43.81],[5.7,32.09,34.5,3.8,23.41,-8.6,43.91],[5.7,31.91,34.5,1.2,23.59,-8.6,43.91],[5.7,31.91,34.5,1.2,23.59,-8.6,43.91],[5.7,31.7,34.5,-.5,24.59,-8.5,43.91],[5.7,31.59,34.5,-.4,25.8,-8.4,43.91],[5.6,31.2,34.5,-.4,26,-8.3,43.91],[5.7,30.3,34.41,-.4,26.5,-8.3,43.91],[5.7,29.3,34.5,-.4,28.3,-8.5,43.91],[5.6,28,34.5,-.5,30.59,-8.5,44],[5.7,26.59,34.5,-.5,32.19,-8.5,44],[5.8,24.7,34.5,-.5,34.09,-8.6,44],[5.8,22.41,34.5,-.5,36,-8.6,43.91],[5.8,22.41,34.5,-.5,36,-8.6,43.91],[5.9,20,34.5,-.5,38,-8.6,43.91],[5.9,17.5,34.5,-.5,39.81,-8.6,43.91],[5.9,15.5,34.41,-.5,42.19,-8.6,43.91],[6,13.7,34.5,-.5,44.59,-8.6,43.91],[6,11.4,34.41,-.5,47,-8.5,43.91],[5.9,8.6,34.41,-.4,49.69,-8.2,43.91],[5.9,5.5,33.41,-.4,52.59,-8,43.91],[5.9,3.5,30,-.5,57.5,-8,43.91],[6,2.6,25.7,-.4,62.5,-8.1,43.91],[6,2.6,25.7,-.4,62.5,-8.1,43.91],[6.2,2,21.7,-.3,66.5,-8,43.91],[6.4,1.5,17.41,.3,70.12,-8.3,43.91],[6.4,1.2,13.4,.4,73.5,-8.4,43.91],[6.4,1.3,9.5,1.1,75.5,-8.6,43.91],[6.5,1.5,6.5,2.7,76.62,-8.5,43.91],[6.5,1.8,4.6,3.8,77.5,-8.6,43.91],[7.2,1.8,4,4.3,77.5,-8.3,43.91],[10.5,1.8,4,3.6,76.5,-7.8,43.91],[14.2,2.3,4,4.1,75.31,-7.7,43.91],[14.2,2.3,4,4.1,75.31,-7.7,43.91],[17.91,2.9,4,4.7,74,-7.6,43.91],[21.3,3.2,4.1,4.7,73.69,-7.6,43.91],[24.41,4,4,5.4,73.81,-7.7,44],[27.91,5,4,6.9,73.69,-7.7,43.91],[30.91,6.5,4,8.8,73.69,-7.7,43.91],[34.19,8,4,9.8,73.5,-7.7,43.81],[37.5,8.7,4,10.3,72.31,-7.7,43.69],[40.81,9.4,4,10.2,69.69,-7.7,43.69],[43.91,10.8,4,10.8,67.12,-7.7,43.69],[43.91,10.8,4,10.8,67.12,-7.7,43.69],[47.31,12.2,4,11.2,65.69,-7.6,43.81],[49.91,13.8,4,11.4,64.5,-7.6,43.81],[52.09,14.9,3.3,11.4,63.81,-7.7,43.81]],gap_deg:[1.69,2.91,1.93,1.05,2.11,.31,.39],max_speed:[66.2,48.4,46.6,29.6,55.9,7.6,8.4],times:[1,.9,.8,.7,.6,.5,.4,.3,.2,.1],guess_gap:[.077,.067,.062,.059,.052,.043,.033,.022,.013,0],train:{taus:[.1,.5,.9],loss7:[.2208,.0281,.0112]},log:{steps:5e3,batch:32,every:100,loss:[.856,.278,.219,.192,.171,.164,.156,.145,.131,.127,.123,.114,.113,.103,.097,.094,.093,.087,.087,.079,.074,.073,.07,.067,.067,.064,.062,.061,.058,.059,.055,.055,.052,.054,.051,.048,.049,.049,.049,.045,.047,.05,.046,.048,.047,.048,.046,.046,.048,.047],held_out:[[2500,.2388],[5e3,.2921]],minutes:17,passes:18.13}},ue={frame:v0,shape:x0,params:y0,lang:b0,prefix:M0,state:S0,sheets:w0,layers:E0,vision_layers:T0,vision:A0,similarity:R0,stats:C0,plan:P0},L0=i=>new URL(i,document.baseURI).href;function uh(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error(`could not load ${i}`)),n.src=L0(i)})}async function D0(i,e){const t=new Bt(await uh(i));return t.flipY=!1,t.colorSpace=Dn,t.minFilter=Yn,t.magFilter=Sn,t.anisotropy=e,t.needsUpdate=!0,t}function It(i,e,t,n=1){const s=new X_(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),e,t,dn,In);return s.colorSpace=Dn,s.magFilter=Zt,s.minFilter=Yn,s.generateMipmaps=!0,s.anisotropy=n,s.needsUpdate=!0,s}async function fh(i){const e=await uh(i),t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});return n.drawImage(e,0,0),{rgba:n.getImageData(0,0,t.width,t.height).data,width:t.width,height:t.height}}async function Qs(i,e){const{rgba:t,width:n,height:s}=await fh(i.file),a=i.min??0,r=(i.max??1)-a;return{info:i,rgba:t,texture:It(t,n,s,e),at(o,l){const c=(l*n+o)*4,h=i.bits===16?(t[c]*256+t[c+1])/65535:t[c]/255;return a+h*r}}}function U0(i,e,t){const n=new Uint8Array(i.length*4);return i.forEach((s,a)=>{const r=Math.round((Math.min(t,Math.max(e,s))-e)/(t-e)*65535);n.set([r>>8,r&255,0,255],a*4)}),{texture:It(n,i.length,1),min:e,max:t}}class Qo{constructor(e,t,n){this.rows=e,this.patches=t,this.width=n}static async load(e){const{rgba:t,width:n,height:s}=await fh(e.file),a=e.min??0,r=((e.max??1)-a)/255,o=new Float32Array(n*s);for(let l=0;l<o.length;l++)o[l]=a+t[l*4]*r;return new Qo(o,s,n)}to(e){const{rows:t,patches:n,width:s}=this,a=new Float32Array(n),r=e*s;for(let o=0;o<n;o++){let l=0;const c=o*s;for(let h=0;h<s;h++)l+=t[r+h]*t[c+h];a[o]=l}return a[e]=1,a}}const ps=["Overview","The input","Images into patches","The vision encoder","One sequence","The vision-language model","The action expert","From noise to a plan","On the arm","How it was trained","The whole path"],it=i=>[`table_${i}`,`wrist_${i}`],Xt=i=>i.toLocaleString("en-US"),Se=ue,is=Se.lang.mask.filter(Boolean).length,Is=Se.lang.mask.length,I0=Se.lang.text.slice(0,is).map(i=>`<span class="tok">${i===`
`?"line break":i.trim()}</span>`).join(" "),os=Se.sheets.sequence.parts,Ns=(Se.shape.image/Se.shape.patch)**2,No=Se.shape.image/Se.shape.patch,Fs=os[0].end-os[0].start,ph=128,N0=ph/(Se.shape.patch*4)*(No/4),F0=Se.state.norm[6],En=Se.stats,mc=i=>`${Math.round(i/1e6)}M`,_c=En.picture_update_share.map(i=>i*100),Fo=En.word_jump_layer,O0=Math.round(En.word_sizes_before_after[1][En.word_jump_tokens[0]]/En.word_sizes_before_after[0][En.word_jump_tokens[0]]),k0=Se.lang.text[En.word_jump_tokens[0]].trim(),B0=Math.round(En.readings_sink_share_by_layer[Fo+1]*100),Os=["look_table","look_wrist","look_words","look_state"],He=Se.plan,gc=["tr_a","tr_noise","tr_x","tr_u","tr_v","tr_err"],vc=(i,e)=>`<a href="#" class="jump" data-round="${e}">${i}</a>`,Ji=(i,e)=>`<a href="#" class="jump" data-vlayer="${e}">${i}</a>`,li=Se.vision,La=Se.similarity.facts,Qi=li.jump_layer,Vn=Se.shape.vision_layers-1,ks=(i,e,t)=>`<a href="#" class="jump" data-layer="${e}"${t===void 0?"":` data-head="${t}"`}>${i}</a>`,Mt=[{id:"overview",chapter:0,title:"One plan, from pictures to numbers",body:`
      <p>This is SmolVLA, a small vision-language-action model, making one plan for a Unitree D1 robot arm:
      ${Se.shape.chunk} actions, the next 5 seconds of movement. It was fine-tuned on 30 hand-guided demos of one
      task: "${Se.frame.task}".</p>
      <p>Every colored cell is a real number from one run of the fine-tuned model on one frame of a demo
      (demo ${Se.frame.episode+1}, frame ${Se.frame.frame}): the moment of the grasp.</p>
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
      recorded by guiding the arm by hand.</p>`,focus:it("raw"),view:{ids:it("raw"),dir:[.16,.1,1],pad:1.2}},{id:"readings",chapter:1,title:"The arm's own readings",body:`
      <p>Seven numbers: six joint angles and the gripper opening, in degrees.</p>
      <p class="mono">[${Se.state.deg.join(", ")}]</p>
      <p>Each is rescaled with that joint's average and spread over the 30 demos, so 0 means "as usual". The
      gripper's ${F0.toFixed(2)} says it is more closed than usual: it is on the cube.</p>
      <p>The list is then padded with zeros to ${Se.shape.max_dim} numbers, the size the pretrained model expects.
      Only the first 7 cells carry anything.</p>`,focus:["state_in"],view:{ids:["state_in"],dir:[.1,.12,1],pad:1.7}},{id:"instruction",chapter:1,title:"The instruction",body:`
      <p>"${Se.frame.task}" is cut into ${is} tokens:</p>
      <p>${I0}</p>
      <p>There are ${Is} slots. The other ${Is-is} hold padding, which the model is told to ignore.
      The same sentence was on every frame of every demo.</p>`,focus:["lang_in"],view:{ids:["lang_in"],dir:[.1,.12,1],pad:1.5}},{id:"resize",chapter:2,title:"Fit into a square",body:`
      <p>The vision encoder takes ${Se.shape.image} x ${Se.shape.image} pictures. Each camera picture is shrunk to
      512 x 384 and placed at the bottom of the square. The ${ph} rows on top are filled with black.</p>
      <p>The black bar keeps the picture's shape, where stretching it to a square would distort it. The base model
      was trained on pictures fitted the same way, so this is what it expects. The price is detail: a quarter of
      the square shows nothing.</p>
      <p>Pixel values are also moved from 0..1 to -1..1.</p>`,focus:it("512"),view:{ids:it("512"),dir:[.5,.3,1],pad:1.3}},{id:"patches",chapter:2,title:`Cut into ${Xt(Ns)} patches`,body:`
      <p>The square is cut into ${No} x ${No} patches of ${Se.shape.patch} x ${Se.shape.patch} pixels.</p>
      <p>From here on the model never sees a whole picture. It works on this list of ${Xt(Ns)} patches per
      camera.</p>`,focus:it("512"),view:{ids:it("512"),dir:[.18,.12,1],pad:1.15}},{id:"embed",chapter:2,title:"Each patch becomes a column",body:`
      <p>A patch is 16 x 16 pixels in 3 colors: ${Se.shape.vision_width} numbers. One matrix multiplication turns
      them into ${Se.shape.vision_width} new numbers, and a learned position code is added so the model knows where
      the patch was.</p>
      <p>The sheet has ${Xt(Ns)} columns, one per patch in reading order, and ${Se.shape.vision_width} rows.</p>
      <p class="how">Point at a column: its patch lights up in the picture behind.</p>`,focus:[...it("embed"),...it("512")],labels:it("embed"),view:{ids:it("embed"),dir:[.55,.34,1],pad:1.3}},{id:"encoder",chapter:3,title:`${Se.shape.vision_layers} layers look across the picture`,body:`
      <p>The columns pass through ${Se.shape.vision_layers} transformer layers (SigLIP,
      ${Math.round(Se.params.vision_encoder/1e6)}M parameters), one per outline. In every layer each patch looks
      at all the others, so a column ends up describing its patch in context.</p>
      <p>Move the slider: the filled sheets show the columns after each layer, each layer on its own color
      scale. ${Ji(`Layer&nbsp;${Vn+1}`,Vn)} makes every column about ${li.last_layer_growth}
      times larger, and one last rescaling gives the sheets in front.</p>
      <p>This part is <b>frozen</b>: fine-tuning on the demos did not change it.</p>`,focus:[...it("layer"),...it("encoded"),...it("embed"),"ghost_vision"],labels:["wrist_layer",...it("encoded"),"ghost_vision","table_embed"],view:{ids:[...it("embed"),...it("encoded")],dir:[1,.42,.5],pad:1.1},slider:"vision",vlayer:0},{id:"encoder-sizes",chapter:3,title:"A few columns grow huge",body:`
      <p>On the right, blue marks the patches whose column is much larger than the rest after the chosen
      layer.</p>
      <p>In ${Ji("the first layers",0)} hardly any stand out. At ${Ji(`layer&nbsp;${Qi+1}`,Qi)},
      ${li.big.table[Qi]} patches of the table picture and ${li.big.wrist[Qi]} of the wrist picture have
      columns up to ${li.jump_ratio} times larger, and they keep them through
      ${Ji(`layer&nbsp;${Vn}`,Vn-1)}. ${li.big_in_both} are at the same places in both pictures,
      and ${li.big_in_black_bar.table} of the table picture's ${li.big.table[Qi]} lie in the black bar.</p>
      <p>Vision transformers are known to keep a few oversized columns as scratch space.
      ${Ji(`Layer&nbsp;${Vn+1}`,Vn)} then rewrites every column.</p>`,focus:[...it("pick"),...it("size")],alone:!0,view:{ids:[...it("pick"),...it("size")],dir:[.1,.06,1],pad:1.1,room:{top:104,bottom:40}},slider:"vision",vlayer:Qi},{id:"similar",chapter:3,title:"What the encoder changed",body:`
      <p>Point at a patch in the left picture. Each map shows how similar every other patch's column is to
      it.</p>
      <p><b>Before</b> the encoder, patches that look alike match. <b>After</b> it, a patch matches what shows
      the same thing in the same setting: for a typical patch of the table picture,
      ${La.table.matches[La.table.matches.length-1]} others instead of ${La.table.matches[0]}. Try the
      cube.</p>
      <p>The middle map follows the slider. After ${Ji(`layer&nbsp;${Vn+1}`,Vn)} a typical
      patch matches ${La.table.matches[Vn+1]} others: that layer adds one large pattern to every
      column. The last rescaling takes it out again.</p>`,focus:[...it("pick"),...it("before"),...it("mid"),...it("after")],alone:!0,view:{ids:[...it("pick"),...it("after")],dir:[.1,.06,1],pad:1.1,room:{top:104,bottom:40}},slider:"vision"},{id:"merge",chapter:3,title:"16 patches merge into 1",body:`
      <p>${Xt(Ns)} tokens per camera would be slow for the language model. So every 4 x 4 block of patches is
      merged: their 16 columns are stacked into one column of ${Xt(16*Se.shape.vision_width)} numbers, and one
      matrix shrinks it to ${Se.shape.vlm_width}.</p>
      <p>Each camera is now <b>${Fs} tokens</b>, one per 64 x 64-pixel square. The first ${N0}
      cover only the black bar.</p>`,focus:[...it("groups"),...it("merged")],labels:["table_merged","table_groups","wrist_merged","wrist_groups"],view:{ids:[...it("groups"),...it("merged")],dir:[.85,.36,.7],pad:1.12}},{id:"place-images",chapter:4,title:`Picture tokens take the first ${os[1].end} places`,body:`
      <p>The model reads one sequence of ${Se.prefix.len} tokens, each ${Se.shape.vlm_width} numbers.</p>
      <p>The table camera's ${Fs} tokens come first, then the wrist camera's ${Fs}. On the way in,
      their values are multiplied by 31, the square root of ${Se.shape.vlm_width}.</p>`,focus:["sequence",...it("merged")],labels:["sequence",...it("merged")],view:{ids:["sequence"],dir:[.3,.26,1],pad:1.18}},{id:"place-words",chapter:4,title:`The instruction takes the next ${Is}`,body:`
      <p>Each word token is looked up in the model's vocabulary table, which gives a column of
      ${Se.shape.vlm_width} numbers, also multiplied by 31. The ${Is-is} padding slots are in the
      sequence but masked out.</p>
      <p>The parts are colored on separate scales because they differ so much in size: picture tokens reach
      about ${Math.round(os[0].scale/10)*10}, words about ${Math.round(os[2].scale)}, the arm's readings
      about ${os[3].scale.toFixed(1)}.</p>`,focus:["sequence","lang_embed"],view:{ids:["sequence","lang_embed"],dir:[.5,.3,1],pad:1.12}},{id:"place-state",chapter:4,title:"The arm's readings take the last place",body:`
      <p>The ${Se.shape.max_dim} padded readings go through one small matrix to become a single token of
      ${Se.shape.vlm_width} numbers: the thin sheet on the right.</p>
      <p>That matrix (${Xt(Se.params.state_proj)} numbers) is <b>trained</b>: it is one of the few parts outside
      the action expert that the fine-tuning changed.</p>`,focus:["sequence","state_token"],view:{ids:["sequence","state_token"],dir:[.5,.3,1],pad:1.32}},{id:"who-sees-whom",chapter:4,title:"Who may look at whom",body:`
      <p>Tokens exchange information by looking at each other. This grid is the rule: a <b>row</b> is the token
      that looks, a <b>column</b> is what it may look at, both in the order of the sequence. Blue means it
      may.</p>
      <p>The large blue square is the ${2*Fs} picture tokens and the ${is} words, which all look at
      each other but not at the arm's readings. The ${Is-is} padding slots neither look nor are
      looked at. The readings token, the thin blue line at the bottom, looks at pictures, words and itself.</p>
      <p class="how">Point at a cell to read who looks at whom.</p>`,focus:["mask","sequence"],view:{ids:["mask"],dir:[0,.05,1],pad:1.06,room:{top:62,right:128,bottom:112}}},{id:"vlm-stack",chapter:5,title:`${Se.shape.vlm_layers} layers rework the sequence`,body:`
      <p>The sequence now passes through the <b>vision-language model</b>: ${Se.shape.vlm_layers} layers,
      ${mc(Se.params.vlm_text_16_layers)} parameters, frozen.</p>
      <p>The lower sheet is the sequence as it enters a layer. The upper sheet is what that layer <b>adds</b>:
      every token first looks at the others, then is reworked on its own, and both results are added to its
      column. The next layer starts from the sum.</p>
      <p>Move the slider to walk through the layers. A picture token's column has a length of about
      ${Xt(En.picture_token_size)}, and a layer changes it by only ${Math.min(..._c).toFixed(0)} to
      ${Math.max(..._c).toFixed(0)} percent. The readings token starts small and grows
      ${Math.round(En.readings_token_size[1]/En.readings_token_size[0])} times in the first layer alone.</p>
      <p class="how">Each part of a sheet is colored on its own scale.</p>`,focus:["vlm_stream","vlm_update","ghost_vlm"],labels:["vlm_update","vlm_stream","ghost_vlm"],view:{ids:["vlm_stream","vlm_update"],dir:[.5,.26,1],pad:1.22},slider:"layer",layer:0},{id:"vlm-attention",chapter:5,title:"Tokens look at each other",body:`
      <p>This grid is the looking inside one layer, averaged over its ${Se.shape.heads} attention heads. A
      <b>row</b> is the token that looks, a <b>column</b> is what it looks at, and brightness is the share of
      its attention.</p>
      <p>Point at a row: the tiles beside the grid show where that token looks in the two pictures, the words
      and the readings.</p>
      <p>Go to ${ks(`layer ${Fo+2}`,Fo+1)}: two bright columns appear. They are the two tokens
      for the word "${k0}". One layer earlier their columns suddenly grew ${O0} times larger, and from here
      on the other tokens put much of their attention on them (the readings token about ${B0}%).
      Language models are known to turn low-content tokens into fixed reference points like this.</p>`,focus:["vlm_attn",...Os],labels:["vlm_attn",...Os],view:{ids:["vlm_attn",...Os],dir:[.14,.08,1],pad:1.22},alone:!0,slider:"layer",look:"vlm",row:Se.prefix.len-1},{id:"vlm-keys",chapter:5,title:"What each layer leaves for the expert",body:`
      <p>To be looked at, every token publishes two things in every layer: a <b>key</b>, which says what it is
      about, and a <b>value</b>, which is what it passes on to whoever looks. Each is
      ${Se.layers.vlm_k[0].rows} numbers.</p>
      <p>The vision-language model runs <b>once</b> per plan. The keys and values of all
      ${Se.shape.vlm_layers} layers are stored. The action expert reads them again and again: they are its only
      window onto the pictures, the words and the readings.</p>
      <p>The model's final output, after the last layer, is never used.</p>`,focus:["vlm_k","vlm_v","vlm_stream","vlm_update","ghost_vlm"],labels:["vlm_k","vlm_v","vlm_update","vlm_stream"],view:{ids:["vlm_stream","vlm_v"],dir:[.5,.26,1],pad:1.2},slider:"layer"},{id:"expert-input",chapter:6,title:`${Se.shape.chunk} action tokens, starting from noise`,body:`
      <p>The plan is ${Se.shape.chunk} actions, one per 0.1 s. Each action is ${Se.shape.max_dim} numbers, the size
      the pretrained model expects; this arm uses the first 7.</p>
      <p>At the start the plan is <b>pure random noise</b>: the small sheet at the back.</p>
      <p>One matrix turns each action's ${Se.shape.max_dim} numbers into ${Se.shape.expert_width}. Two more mix in
      a code for the noise level (1.0 here: all noise). The result is ${Se.shape.chunk} action tokens, the larger
      sheet. These matrices are <b>trained</b>.</p>`,focus:["exp_x","exp_stream","ghost_expert"],labels:["exp_stream","exp_x","ghost_expert"],view:{ids:["exp_x","exp_stream"],dir:[.8,.34,1],pad:1.7},alone:!0,layer:0},{id:"expert-stack",chapter:6,title:"A second stack, beside the first",body:`
      <p>The <b>action expert</b> is its own stack of ${Se.shape.expert_layers} layers, working on the
      ${Se.shape.chunk} action tokens. Its columns are ${Se.shape.expert_width} numbers. This is the part the 30
      demos trained: ${mc(Se.params.action_expert)} parameters.</p>
      <p>As before, the lower sheet enters the layer and the upper sheet is what the layer adds.</p>
      <p>The layers alternate. In layers 1, 3, 5, ... an action token looks at the sequence's stored keys and
      values and at the action tokens before it. In layers 2, 4, 6, ... it looks at the sequence only.</p>`,focus:["exp_stream","exp_update","ghost_expert"],labels:["exp_update","exp_stream","ghost_expert"],view:{ids:["exp_stream","exp_update"],dir:[.55,.26,1],pad:1.6},alone:!0,slider:"layer"},{id:"expert-look",chapter:6,title:"Where the action tokens look",body:`
      <p>Each row is an action token, each column a token of the sequence. Below it: where the marked action
      token looks, laid over the two pictures. Point at another row to mark it.</p>
      <p>Averaged over the ${Se.shape.heads} heads, the looking is spread out. Single heads are far more focused.
      Try:</p>
      <ul>
        <li>${ks("Layer 2, head 13",1,12)}: the bin</li>
        <li>${ks("Layer 6, head 5",5,4)}: the gripper and the cube</li>
        <li>${ks("Layer 14, head 11",13,10)}: the cube in the wrist picture</li>
        <li>${ks("Layer 4, all heads",3,-1)}: much of it on the arm's readings</li>
      </ul>
      <p>Nobody told the expert where to look. It comes from training: the pretraining on other robots, then
      the 30 demos.</p>`,focus:["exp_attn","exp_own",...Os],labels:["exp_attn",...Os,"exp_own"],view:{ids:["exp_attn","exp_own","look_wrist","look_words"],dir:[.1,.07,1],pad:1.1},alone:!0,slider:"layer",heads:!0,layer:1,head:-1,look:"exp",row:0},{id:"expert-output",chapter:6,title:"Out comes a direction",body:`
      <p>After the last layer, one more matrix turns each action token back into ${Se.shape.max_dim} numbers.</p>
      <p>The result is not a plan yet. It is a <b>direction</b>: for every number of the noisy plan, which way
      to move it and how far. The top 7 rows, the ones this arm uses, are the strong ones.</p>
      <p>This was step 1 of ${Se.shape.num_steps}.</p>`,focus:["exp_last","exp_v","exp_stream","ghost_expert"],labels:["exp_v","exp_last"],view:{ids:["exp_last","exp_v"],dir:[.8,.34,1],pad:1.7},alone:!0,layer:Se.shape.expert_layers-1},{id:"loop-step",chapter:7,title:"One round: a tenth of the way",body:`
      <p>The direction answers one question: how do I get from the real plan to this noise? So the plan lies
      the other way.</p>
      <p>The noisy plan is moved one tenth of the way against the direction:</p>
      <p class="mono">new plan = plan − 0.1 x direction</p>
      <p>Its noise level drops from 1.0 to 0.9.</p>
      <p>On the right is the same thing as curves: the ${He.names.length} numbers of each action that this arm
      uses, one band per joint, ${Se.shape.chunk} actions from left to right. Right now they are pure noise.</p>`,focus:["den_x","den_v","plot"],labels:["plot","den_x","den_v"],view:{ids:["den_x","den_v","plot"],dir:[.1,.08,1],pad:1.16},alone:!0,slider:"round",round:0,plot:{units:"norm"}},{id:"loop-rounds",chapter:7,title:`${He.times.length} rounds`,body:`
      <p>Drag the slider. In every round the action expert runs again, all ${Se.shape.expert_layers} layers, on
      the new and less noisy plan. It reads the same stored keys and values, so the vision-language model does
      not run again.</p>
      <p>The curves calm down round by round. After round ${He.times.length} the noise level is 0 and what is
      left is the plan: ${Se.shape.chunk} actions, 5 seconds.</p>
      <p>The dashed curves are what the hand did in the demo from this frame on. The model does not see them
      here; they are drawn for comparison.</p>`,focus:["den_x","den_v","plot"],labels:["plot","den_x","den_v"],view:{ids:["den_x","den_v","plot"],dir:[.1,.08,1],pad:1.16},alone:!0,slider:"round",round:0,plot:{units:"norm",hand:!0}},{id:"loop-guess",chapter:7,title:"The first direction already knew the way",body:`
      <p>The blue curves show where each round's direction points: the plan it implies.</p>
      <p>Go back to ${vc("the start",0)}. The plan is still pure noise, yet the blue curves already lie
      close to the final plan: ${He.guess_gap[0].toFixed(2)} away on average, in units where the noise has a
      spread of 1. ${vc(`By round ${He.times.length}`,He.times.length-1)} the gap is gone.</p>
      <p>With nothing but noise to go on, the best the expert can do is point at the average of all plans that
      fit what the cameras show. The demos all did the same thing, so that average is already a good plan. Had
      they shown two different ways, the average would be a blur of both, and the later rounds are what lets
      the model settle on one.</p>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,slider:"round",round:0,plot:{units:"norm",guess:!0,hand:!0}},{id:"loop-degrees",chapter:7,title:"Back to degrees",body:`
      <p>The model works in rescaled numbers. To get angles, each of the ${He.names.length} numbers is multiplied
      by that joint's spread and its average is added back. The other ${Se.shape.max_dim-He.names.length} numbers
      of each action are dropped: they were never trained and are still noise.</p>
      <p>The result is the plan in degrees. From this frame on it stays within
      ${Math.min(...He.gap_deg).toFixed(1)}° to ${Math.max(...He.gap_deg).toFixed(1)}° of what the hand
      did, on average per joint.</p>
      <p>This frame comes from one of the demos, most likely one the model trained on, so a close match is
      expected here.</p>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,round:He.times.length,plot:{units:"deg",hand:!0}},{id:"arm-commands",chapter:8,title:"From plan to commands",body:`
      <p>Every 0.1 s the next action's ${He.names.length} angles go to our plugin, which turns them into commands
      for the D1's own controller:</p>
      <ul>
        <li>No joint's target moves faster than 40° per second. This plan asks for up to
        ${Math.round(Math.max(...He.max_speed))}° per second (the ${He.names[He.max_speed.indexOf(Math.max(...He.max_speed))]}),
        so on those stretches the arm falls behind the plan.</li>
        <li>At most 5 commands per second: sent faster, the controller starts skipping its joint reports.</li>
        <li>A closing gripper is sent 8° further than planned, so that it squeezes the cube instead of
        just touching it.</li>
      </ul>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,round:He.times.length,plot:{units:"deg"}},{id:"arm-replan",chapter:8,title:"Only the first 2 seconds run",body:`
      <p>The arm does not play all ${Se.shape.chunk} actions. When 30 are left, a new plan is started from new
      pictures.</p>
      <p>While that plan is computed the arm keeps following the old one, and the new plan is steered to agree
      with the actions that run in the meantime. Then it takes over. This is called real-time chunking.</p>
      <p>So about the first 2.3 s of each plan reach the arm: the solid part. The rest is replaced by the next
      plan, which has seen newer pictures.</p>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,round:He.times.length,plot:{units:"deg",executed:23}},{id:"train-mix",chapter:9,title:"Training starts from a demo",body:`
      <p>Training runs the same machinery, with one difference: the answer is known.</p>
      <p>Take a frame of a demo and the ${Se.shape.chunk} actions the hand made from there (left). Draw fresh
      noise (middle) and a noise level between 0 and 1. Mix the two (right).</p>
      <p>The mix is what the action expert gets, together with that frame's pictures, the instruction and the
      readings. The slider switches between three noise levels.</p>`,focus:["tr_a","tr_noise","tr_x"],view:{ids:["tr_a","tr_noise","tr_x"],dir:[.1,.08,1],pad:1.3},alone:!0,slider:"noise",noise:1},{id:"train-target",chapter:9,title:"The answer is known",body:`
      <p>The expert should output the direction from the demo to the noise: noise minus demo (bottom left).
      That target is the same at every noise level.</p>
      <p>Its actual answer is in the middle, and on the right is the error, squared. Training nudges the
      expert's ${(Se.params.trainable/1e6).toFixed(1)}M numbers so that this error shrinks. Only the top
      ${He.names.length} rows count. The other ${Se.shape.max_dim-He.names.length} are never trained, which is
      why their error stays large.</p>
      <p>On those ${He.names.length} rows the average error here is ${He.train.loss7[0].toFixed(2)} at noise level
      ${He.train.taus[0]}, ${He.train.loss7[1].toFixed(3)} at ${He.train.taus[1]} and ${He.train.loss7[2].toFixed(3)}
      at ${He.train.taus[2]}. Low noise is the hard case: the input is almost the demo itself, and the expert
      has to name the little noise that was added.</p>`,focus:gc,labels:["tr_u","tr_v","tr_err","tr_a","tr_noise","tr_x"],view:{ids:gc,dir:[.1,.08,1],pad:1.22},alone:!0,slider:"noise"},{id:"train-run",chapter:9,title:`${Xt(He.log.steps*He.log.batch)} of these`,body:`
      <p>The training run did this ${Xt(He.log.steps)} times with ${He.log.batch} frames each, drawing new noise and a new
      noise level every time: ${Xt(He.log.steps*He.log.batch)} examples in ${He.log.minutes} minutes on one GPU,
      about ${Math.round(He.log.passes)} passes over the 27 demos it trained on.</p>
      <p>The solid curve is the error during training. It falls from ${He.log.loss[0].toFixed(2)} to
      ${He.log.loss[He.log.loss.length-1].toFixed(3)}.</p>
      <p>The dashed line is the same error on the 3 demos kept out of training. It is much higher, and it was
      higher at step ${Xt(He.log.held_out[1][0])} (${He.log.held_out[1][1].toFixed(2)}) than at step
      ${Xt(He.log.held_out[0][0])} (${He.log.held_out[0][1].toFixed(2)}). The expert kept getting better at the
      demos it trained on, but not at ones it had not seen. That is a reason to test the
      step-${Xt(He.log.held_out[0][0])} checkpoint on the arm too.</p>`,focus:["loss"],view:{ids:["loss"],dir:[.1,.08,1],pad:1.45},alone:!0},{id:"end",chapter:10,title:"The whole path",body:`
      <p>Two pictures, ${He.names.length} readings and one sentence go in.</p>
      <p>${Xt(Ns)} patches per picture become ${Fs} tokens. ${Se.prefix.len} tokens pass through
      ${Se.shape.vlm_layers} frozen layers, which leave their keys and values behind.</p>
      <p>${Se.shape.chunk} noisy action tokens pass through ${Se.shape.expert_layers} trained layers
      ${He.times.length} times, reading those keys and values, and come out as 5 seconds of joint angles. The arm
      runs the first 2 seconds, and the model plans again.</p>
      <p>On the real arm, this policy picked up the cube and dropped it in the bin on its own in 1 of 5
      recorded tests. In 3 more the first approach pushed the cube, and a hand put it back.</p>`,focus:"all",view:{ids:["table_raw","state_in","sequence","mask","ghost_vlm","ghost_expert","plot","loss"],dir:[1,.42,.42],pad:.94}}],z0=i=>{const e=Mt.findIndex(t=>t.id===i);if(e<0)throw new Error(`no step "${i}"`);return e},xc=new un,Da=new I;class mh extends Y_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new An(e,3)),this.setAttribute("uv",new An(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Uo(t,6,1);return this.setAttribute("instanceStart",new di(n,3,0)),this.setAttribute("instanceEnd",new di(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Uo(t,6,1);return this.setAttribute("instanceColorStart",new di(n,3,0)),this.setAttribute("instanceColorEnd",new di(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new q_(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),xc.setFromBufferAttribute(t),this.boundingBox.union(xc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Da.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Da)),Da.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Da));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}ye.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $e(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Yt.line={uniforms:jo.merge([ye.common,ye.fog,ye.line]),vertexShader:`
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
		`};class el extends Nn{static get type(){return"LineMaterial"}constructor(e){super({uniforms:jo.clone(Yt.line.uniforms),vertexShader:Yt.line.vertexShader,fragmentShader:Yt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Lr=new ht,yc=new I,bc=new I,Pt=new ht,Lt=new ht,Cn=new ht,Dr=new I,Ur=new xt,Dt=new Z_,Mc=new I,Ua=new un,Ia=new Ss,Pn=new ht;let Un,Pi;function Sc(i,e,t){return Pn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Pn.multiplyScalar(1/Pn.w),Pn.x=Pi/t.width,Pn.y=Pi/t.height,Pn.applyMatrix4(i.projectionMatrixInverse),Pn.multiplyScalar(1/Pn.w),Math.abs(Math.max(Pn.x,Pn.y))}function H0(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,a=n.attributes.instanceEnd,r=Math.min(n.instanceCount,s.count);for(let o=0,l=r;o<l;o++){Dt.start.fromBufferAttribute(s,o),Dt.end.fromBufferAttribute(a,o),Dt.applyMatrix4(t);const c=new I,h=new I;Un.distanceSqToSegment(Dt.start,Dt.end,h,c),h.distanceTo(c)<Pi*.5&&e.push({point:h,pointOnLine:c,distance:Un.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function G0(i,e,t){const n=e.projectionMatrix,a=i.material.resolution,r=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-e.near;Un.at(1,Cn),Cn.w=1,Cn.applyMatrix4(e.matrixWorldInverse),Cn.applyMatrix4(n),Cn.multiplyScalar(1/Cn.w),Cn.x*=a.x/2,Cn.y*=a.y/2,Cn.z=0,Dr.copy(Cn),Ur.multiplyMatrices(e.matrixWorldInverse,r);for(let p=0,m=h;p<m;p++){if(Pt.fromBufferAttribute(l,p),Lt.fromBufferAttribute(c,p),Pt.w=1,Lt.w=1,Pt.applyMatrix4(Ur),Lt.applyMatrix4(Ur),Pt.z>u&&Lt.z>u)continue;if(Pt.z>u){const T=Pt.z-Lt.z,M=(Pt.z-u)/T;Pt.lerp(Lt,M)}else if(Lt.z>u){const T=Lt.z-Pt.z,M=(Lt.z-u)/T;Lt.lerp(Pt,M)}Pt.applyMatrix4(n),Lt.applyMatrix4(n),Pt.multiplyScalar(1/Pt.w),Lt.multiplyScalar(1/Lt.w),Pt.x*=a.x/2,Pt.y*=a.y/2,Lt.x*=a.x/2,Lt.y*=a.y/2,Dt.start.copy(Pt),Dt.start.z=0,Dt.end.copy(Lt),Dt.end.z=0;const v=Dt.closestPointToPointParameter(Dr,!0);Dt.at(v,Mc);const f=qo.lerp(Pt.z,Lt.z,v),d=f>=-1&&f<=1,R=Dr.distanceTo(Mc)<Pi*.5;if(d&&R){Dt.start.fromBufferAttribute(l,p),Dt.end.fromBufferAttribute(c,p),Dt.start.applyMatrix4(r),Dt.end.applyMatrix4(r);const T=new I,M=new I;Un.distanceSqToSegment(Dt.start,Dt.end,M,T),t.push({point:M,pointOnLine:T,distance:Un.origin.distanceTo(M),object:i,face:null,faceIndex:p,uv:null,uv1:null})}}}class V0 extends wn{constructor(e=new mh,t=new el({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let r=0,o=0,l=t.count;r<l;r++,o+=2)yc.fromBufferAttribute(t,r),bc.fromBufferAttribute(n,r),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+yc.distanceTo(bc);const a=new Uo(s,2,1);return e.setAttribute("instanceDistanceStart",new di(a,1,0)),e.setAttribute("instanceDistanceEnd",new di(a,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const a=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Un=e.ray;const r=this.matrixWorld,o=this.geometry,l=this.material;Pi=l.linewidth+a,o.boundingSphere===null&&o.computeBoundingSphere(),Ia.copy(o.boundingSphere).applyMatrix4(r);let c;if(n)c=Pi*.5;else{const u=Math.max(s.near,Ia.distanceToPoint(Un.origin));c=Sc(s,u,l.resolution)}if(Ia.radius+=c,Un.intersectsSphere(Ia)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ua.copy(o.boundingBox).applyMatrix4(r);let h;if(n)h=Pi*.5;else{const u=Math.max(s.near,Ua.distanceToPoint(Un.origin));h=Sc(s,u,l.resolution)}Ua.expandByScalar(h),Un.intersectsBox(Ua)!==!1&&(n?H0(this,t):G0(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Lr),this.material.uniforms.resolution.value.set(Lr.z,Lr.w))}}class Oo extends mh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class W0 extends V0{constructor(e=new Oo,t=new el({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class wc{constructor(e,t,n,s){qe(this,"group",new rs);qe(this,"series",new Map);qe(this,"lo");qe(this,"hi");qe(this,"loTo");qe(this,"hiTo");qe(this,"settled",!1);this.rows=e,this.points=t,this.width=n,this.rowHeight=s,this.lo=new Float32Array(e).fill(-1),this.hi=new Float32Array(e).fill(1),this.loTo=this.lo.slice(),this.hiTo=this.hi.slice()}addSeries(e,t,n,s=!1){const a=new el({linewidth:n,dashed:s,dashSize:1.1,gapSize:.9,worldUnits:!1}),r=Array.from({length:this.rows},()=>{const o=new W0(new Oo,a);return o.visible=!1,o.position.z=.25,this.group.add(o),o});this.series.set(e,{role:t,lines:r,material:a,now:null,to:null,xs:null,from:0,until:this.points})}set(e,t,n={}){const s=this.series.get(e);if(this.settled=!1,!t){s.to=s.now=null;for(const o of s.lines)o.visible=!1;return}const a=t.map(o=>Float32Array.from(o)),r=s.now&&s.now.length===a.length&&s.now[0].length===a[0].length;s.to=a,(!r||n.instant)&&(s.now=a.map(o=>o.slice())),s.xs=n.xs??null,s.from=n.from??0,s.until=n.until??a[0].length}setRange(e,t,n,s=!1){this.loTo[e]=t,this.hiTo[e]=n,s&&(this.lo[e]=t,this.hi[e]=n),this.settled=!1}range(e){return[this.loTo[e],this.hiTo[e]]}setColors(e){for(const t of this.series.values())t.material.color.copy(t.role==="later"?e.plan:e[t.role])}setResolution(e,t){for(const n of this.series.values())n.material.resolution.set(e,t)}at(e,t,n){const s=this.rows*this.rowHeight/2-e*this.rowHeight,a=this.rowHeight*.14,r=n===void 0?1:Math.min(1,Math.max(0,(n-this.loTo[e])/(this.hiTo[e]-this.loTo[e]||1))),o=n===void 0?s:s-this.rowHeight+a+r*(this.rowHeight-2*a);return new I(-this.width/2+(t+.5)/this.points*this.width,o,0).add(this.group.position)}tick(e){if(this.settled)return!1;const t=Math.min(1,e*9);let n=!1;const s=(r,o,l)=>{const c=o-r;return Math.abs(c)<l*.002?o:(n=!0,r+c*t)};for(let r=0;r<this.rows;r++){const o=Math.abs(this.hiTo[r]-this.loTo[r])||1;this.lo[r]=s(this.lo[r],this.loTo[r],o),this.hi[r]=s(this.hi[r],this.hiTo[r],o)}const a=this.rowHeight*.14;for(const r of this.series.values())if(!(!r.now||!r.to))for(let o=0;o<r.lines.length;o++){const l=r.now[o],c=r.to[o],h=Math.abs(this.hi[o]-this.lo[o])||1,u=this.rows*this.rowHeight/2-(o+1)*this.rowHeight+a,p=[];for(let g=0;g<l.length;g++){if(l[g]=s(l[g],c[g],h),g<r.from||g>=r.until)continue;const v=r.xs?r.xs[g]:g,f=Math.min(1.08,Math.max(-.08,(l[g]-this.lo[o])/h));p.push(-this.width/2+(v+.5)/this.points*this.width,u+f*(this.rowHeight-2*a),0)}const m=r.lines[o];m.visible=p.length>=6,m.visible&&(m.geometry.dispose(),m.geometry=new Oo().setPositions(p),r.material.dashed&&m.computeLineDistances())}return this.settled=!n,!0}}const Ut=ue.plan,Gt=ue.shape.chunk,on=ue.shape.max_dim,qt=Ut.names.length,Rt=Ut.times.length,Ir=Ut.train.taus,Ec=' <i class="tag trained">trained</i>',Na=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−"),Tc=i=>`action ${i+1} of ${Gt} (${(i*.1).toFixed(1)} s ahead)`,$0=i=>i<qt?Ut.names[i]:"not used by this arm",_h=i=>i[0].map((e,t)=>i.map(n=>n[t])),Nr=_h(Ut.plan_deg),Fr=_h(Ut.hand_deg);function X0(i){const{view:e,add:t,at:n}=i,s={round:0,noise:1};let a={units:"norm"};const r=i.endZ+64,o=r+84,l=Gt*.8,c=on*.6,h=new Map,u=(pe,he,me,ge,Fe,we,b={})=>{const _=ue.sheets[he],k=new Uint8Array(Gt*on*4).fill(128),P=It(k,Gt,on),H=t({id:pe,title:pe,note:"",kind:"signed",cols:Gt,rows:on,width:l,height:c,pos:ge,texture:P,bits:16,min:_.min,max:_.max,parts:[{end:Gt,scale:_.scale??1}],revealAt:n(Fe),label:we,valueAt:(ae,ee)=>{var re;return((re=h.get(pe).values)==null?void 0:re.at(ae,me()*on+ee))??null},...b}),U={id:pe,info:_,bytes:k,texture:P,values:null,block:me,sheet:H};return h.set(pe,U),Qs(_,1).then(ae=>{U.values=ae,p(U),Ke()}),H},p=pe=>{if(!pe.values)return;const he=Gt*on*4;pe.bytes.set(pe.values.rgba.subarray(pe.block()*he,(pe.block()+1)*he)),pe.texture.needsUpdate=!0,e.touch(3)},m=pe=>1-pe/Rt,g=-58;u("den_x","den_x",()=>s.round,[g,15,r],"loop-step",()=>`<b>${s.round===Rt?"The plan":"The noisy plan"}</b><span>noise level ${m(s.round).toFixed(1)}</span>`,{trained:!0}),u("den_v","den_v",()=>Math.min(s.round,Rt-1),[g,-15,r],"loop-step",()=>`<b>The direction</b>${Ec}<span>from round ${Math.min(s.round,Rt-1)+1}</span>`,{trained:!0,when:()=>s.round<Rt});const v=()=>Ir[s.noise],f=[-26,20,66];u("tr_a","tr_a",()=>0,[f[0],15,o],"train-mix",()=>`<b>A demo: what the hand did</b><span>${Gt} actions x ${on} numbers, ${qt} used</span>`),u("tr_noise","den_x",()=>0,[f[1],15,o],"train-mix",()=>`<b>Fresh noise</b><span>${Gt} x ${on}</span>`),u("tr_x","tr_x",()=>s.noise,[f[2],15,o],"train-mix",()=>`<b>Their mix, noise level ${v()}</b><span>${v()} x noise + ${(1-v()).toFixed(1)} x demo</span>`),u("tr_u","tr_u",()=>0,[f[0],-15,o],"train-target",()=>"<b>The target: noise minus demo</b><span>the same at every noise level</span>"),u("tr_v","tr_v",()=>s.noise,[f[1],-15,o],"train-target",()=>`<b>The expert's answer</b>${Ec}<span>from the mix at noise level ${v()}</span>`,{trained:!0});const d=ue.sheets.tr_err;u("tr_err","tr_err",()=>s.noise,[f[2],-15,o],"train-target",()=>`<b>The error, squared</b><span>top ${qt} rows count: ${Ut.train.loss7[s.noise].toFixed(3)} on average</span>`,{kind:"unit",min:d.min,max:d.max,parts:[{end:Gt,scale:1}]});const R=(pe,he)=>It(new Uint8Array(pe*he*4),pe,he),T=9,M=110,W=[50,0,r],D=(pe,he)=>`<i class="sw ${pe}"></i>${he}`,E=t({id:"plot",title:"plot",note:"",kind:"unit",cols:Gt,rows:qt,width:M,height:qt*T,pos:W,texture:R(Gt,qt),bits:8,min:0,max:1,revealAt:n("loop-step"),borders:"rows",label:()=>{const pe=[D("plan",a.executed?"the part that runs on the arm":s.round===Rt?"the plan":s.round===0?"pure noise":`after round ${s.round}`)];return a.executed&&pe.push(D("later","replaced by the next plan")),a.guess&&s.round<Rt&&pe.push(D("guess","where the direction points")),a.hand&&pe.push(D("hand","what the hand did")),`<b>The ${qt} numbers of each action this arm uses${a.units==="deg"?", in degrees":""}</b><span class="legend">${pe.join("")}</span>`}}),L=new wc(qt,Gt,M,T);L.group.position.set(...W),L.addSeries("hand","hand",1.6,!0),L.addSeries("later","later",1.5,!0),L.addSeries("guess","guess",1.8),L.addSeries("plan","plan",2.6),e.scene.add(L.group);const S=pe=>{const[he,me]=L.range(pe),ge=a.units==="deg"?"°":"",Fe=we=>(Number.isInteger(we)?String(we):we.toFixed(1)).replace("-","−");return`${Fe(he)}${ge} to ${Fe(me)}${ge}`},x=Ut.names.map((pe,he)=>e.addLabel("",new I(W[0]-M/2-1.2,W[1]+qt*T/2-(he+.5)*T,r),()=>E.shown&&i.rank("plot")!==null?30+he:null,"row left")),C=()=>x.forEach((pe,he)=>pe.innerHTML=`<b>${Ut.names[he]}</b><span>${S(he)}</span>`),G=Ut.log,$=[f[2]+l/2+14+M/2,0,o],te=34,ne=t({id:"loss",title:"loss",note:"",kind:"unit",cols:G.loss.length,rows:1,width:M,height:te,pos:$,texture:R(G.loss.length,1),bits:8,min:0,max:1,revealAt:n("train-run"),borders:"none",label:()=>`<b>The loss over the ${G.steps.toLocaleString("en-US")} training steps</b><span class="legend">${D("plan","on the demos it trains on")}${D("hand","on the 3 held-out demos")}</span><span>log scale, ${j[0]} at the bottom to ${j[1]} at the top</span>`}),j=[.03,1],Q=new wc(1,G.loss.length,M,te);Q.group.position.set(...$),Q.addSeries("held","hand",1.8,!0),Q.addSeries("train","plan",2.6),Q.setRange(0,Math.log10(j[0]),Math.log10(j[1]),!0),Q.set("train",[G.loss.map(Math.log10)],{instant:!0});const X=G.held_out.map(([pe])=>pe/G.every-1);Q.set("held",[G.held_out.map(([,pe])=>Math.log10(pe))],{xs:X,instant:!0}),e.scene.add(Q.group);const fe=(pe,he,me,ge)=>e.addLabel(me,Q.at(0,pe,Math.log10(he)).add(new I(0,.6,.3)),()=>ne.shown&&i.rank("loss")!==null?40+ge:null,"mark");G.held_out.forEach(([pe,he],me)=>fe(X[me]-(me?9:4),he,`step ${pe.toLocaleString("en-US")}: <b>${he.toFixed(2)}</b>`,me)),fe(G.loss.length-12,G.loss[G.loss.length-1]*1.35,`end: <b>${G.loss[G.loss.length-1].toFixed(3)}</b>`,2),fe(1,G.loss[0]*.62,`step ${G.every}: <b>${G.loss[0].toFixed(2)}</b>`,3);let ve=null,Re=null,Pe=null;const Ke=()=>{const pe=h.get("den_x").values,he=h.get("den_v").values,me=h.get("tr_a").values;if(!pe||!he||!me||ve)return;const ge=(Fe,we)=>Array.from({length:qt},(b,_)=>Array.from({length:Gt},(k,P)=>Fe.at(P,we*on+_)));ve=Array.from({length:Rt+1},(Fe,we)=>ge(pe,we)),Re=ve.map((Fe,we)=>we===Rt?Fe:Fe.map((b,_)=>b.map((k,P)=>k-Ut.times[we]*he.at(P,we*on+_)))),Pe=ge(me,0),ce(!0)},K=pe=>pe.map((he,me)=>he.map(ge=>ge*Ut.std[me]+Ut.mean[me])),ce=pe=>{if(!ve||!Re||!Pe)return;const he=a.units==="deg",me=s.round,ge=he?me===Rt?Nr:K(ve[me]):ve[me];L.set("plan",ge,{until:a.executed??Gt,instant:pe}),L.set("later",a.executed?ge:null,{from:(a.executed??1)-1,instant:!0}),L.set("guess",a.guess&&me<Rt?he?K(Re[me]):Re[me]:null,{instant:pe}),L.set("hand",a.hand?he?Fr:Pe:null,{instant:pe});for(let Fe=0;Fe<qt;Fe++)if(!he)L.setRange(Fe,-3.3,3.3,pe);else{const we=[...Nr[Fe],...Fr[Fe]],b=Math.min(...we),_=Math.max(...we),k=Math.max(1.5,(_-b)*.12);L.setRange(Fe,Math.floor(b-k),Math.ceil(_+k),pe)}C(),e.touch(3)},Me=(pe,he)=>{s.round=Math.min(Rt,Math.max(0,Math.round(pe)));for(const me of["den_x","den_v"])p(h.get(me));ce(he),i.changed()},xe=pe=>{s.noise=Math.min(Ir.length-1,Math.max(0,Math.round(pe)));for(const he of["tr_x","tr_v","tr_err"])p(h.get(he));i.changed()},Ie=(pe,he)=>{a=pe??a,ce(he),E.mesh.material.uniforms.uSelDim.value=0},ke={den_x:()=>s.round===Rt?"The plan":s.round===0?"The noisy plan: pure noise":`The noisy plan after round ${s.round}`,den_v:()=>`The direction, round ${Math.min(s.round,Rt-1)+1}`,tr_a:()=>"A demo: what the hand did",tr_noise:()=>"Fresh noise",tr_x:()=>`Their mix, noise level ${v()}`,tr_u:()=>"The target: noise minus demo",tr_v:()=>`The expert's answer at noise level ${v()}`,tr_err:()=>"The error, squared"},Be=new Set([...h.keys(),"plot","loss"]),je=pe=>{var b,_;const he=pe.sheet.spec.id;if(!Be.has(he))return null;const{col:me,row:ge}=pe;if(he==="loss"){const k=(me+1)*G.every,P=G.held_out.find(([H])=>H===k);return{html:`<i>Training loss</i><span>step ${k.toLocaleString("en-US")}</span><b class="val">${G.loss[me].toFixed(3)}</b>${P?`<span>on the held-out demos: ${P[1].toFixed(3)}</span>`:""}`,action:null}}if(he==="plot"){if(!ve||!Re||!Pe)return{html:`<i>${Ut.names[ge]}</i>`,action:me};const k=a.units==="deg",P=k?"°":"",H=re=>Na(k?re*Ut.std[ge]+Ut.mean[ge]:re)+P,U=s.round,ae=k&&U===Rt?Na(Nr[ge][me])+P:H(ve[U][ge][me]);let ee=`<i>${Ut.names[ge]}</i><span>${Tc(me)}</span><span>${U===Rt?"the plan":U===0?"pure noise":`after round ${U}`}</span><b class="val">${ae}</b>`;return a.guess&&U<Rt&&(ee+=`<span>where the direction points: ${H(Re[U][ge][me])}</span>`),a.hand&&(ee+=`<span>what the hand did: ${k?Na(Fr[ge][me])+P:H(Pe[ge][me])}</span>`),a.executed&&(ee+=`<span>${me<a.executed?"runs on the arm":"replaced by the next plan"}</span>`),{html:ee,action:me}}const Fe=(_=(b=pe.sheet.spec).valueAt)==null?void 0:_.call(b,me,ge),we=Fe==null?"":`<b class="val">${Na(Fe)}</b>`;return{html:`<i>${ke[he]()}</i><span>${Tc(me)}</span><span>number ${ge+1} of ${on}: ${$0(ge)}</span>${we}`,action:me}},ze=pe=>{const he=me=>pe===null?[]:[[pe,0,pe+1,me]];for(const me of h.values())me.sheet.select(he(on));E.select(a.executed?[[0,0,a.executed,qt],...he(qt)]:he(qt))},st=()=>{const pe={plan:e.theme.accent,guess:e.theme.fill,hand:e.theme.hi};L.setColors(pe),Q.setColors(pe),e.touch()},N=(pe,he)=>{L.setResolution(pe,he),Q.setResolution(pe,he)};return e.resized.push(N),e.themed.push(st),N(e.renderer.domElement.clientWidth,e.renderer.domElement.clientHeight),st(),C(),{state:s,rounds:Rt,levels:Ir,owns:pe=>Be.has(pe),setRound:Me,setNoise:xe,setMode:Ie,hover:je,select:ze,retheme:st,tick:pe=>{L.group.visible=E.shown&&E.reveal>.5,Q.group.visible=ne.shown&&ne.reveal>.5;const he=L.tick(pe),me=Q.tick(pe);return he||me}}}const Mi=ue.layers.vlm_stream.length,Bs=ue.shape.heads,ot=ue.shape.chunk,et=ue.prefix.len,nn=64,vn=8,Si=ue.lang.mask.filter(Boolean).length,Ac=ue.state.names,Fa=i=>i.toLocaleString("en-US"),q0=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−"),es=i=>(i/255)**2,Wn=i=>i>=.0995?`${Math.round(i*100)}%`:i>=95e-5?`${(i*100).toFixed(1)}%`:i>0?"under 0.1%":"0%",Rc=i=>`action ${i+1} of ${ot} (${(i*.1).toFixed(1)} s ahead)`;function Y0(i){const{view:e,geo:t,add:n,at:s}=i,a={layer:0,head:-1,look:"vlm",row:{vlm:et-1,exp:0}},r=P=>t.stackZ+P*t.gap,o=(P,H)=>ue.layers[P][H],l=new Map,c=P=>{let H=l.get(P.file);return H||l.set(P.file,H=Qs(P,i.aniso)),H},h=new Map,u=It(new Uint8Array([128,128,128,255]),1,1),p=It(new Uint8Array([0,0,0,255]),1,1),m=()=>`layer ${a.layer+1}`,g=()=>a.head<0?`average of ${Bs} heads`:`head ${a.head+1}`,v=' <i class="tag trained">trained</i>',f={update:61,keys:106,values:135,attn:174},d=ue.shape.vlm_width,R=ue.shape.expert_width,T=[],M=(P,H,U,ae,ee,re,de,ie={})=>{const se=o(P,0),Te=n({id:P,title:P,note:"",kind:"signed",cols:se.cols,rows:se.rows,width:ae,height:ee,pos:[H,U,r(0)],texture:u,bits:8,min:-1,max:1,revealAt:s(re),label:de,overview:!1,valueAt:(Ce,be)=>{var Z;const A=h.get(P);if(!A)return null;const z=(Z=A.info.parts)==null?void 0:Z.find(w=>Ce<w.end);return A.values.at(Ce,be)*((z==null?void 0:z.scale)??1)},isClipped:(Ce,be)=>{const A=h.get(P),z=A?A.values.rgba[(be*A.info.cols+Ce)*4]:128;return z===0||z===255},...ie});return T.push({id:P,x:H,y:U,sheet:Te}),Te};M("vlm_stream",t.seqX,0,t.seqW,t.sheetH,"vlm-stack",()=>`<b>The sequence, entering ${m()}</b><span>${et} tokens x ${d} numbers</span>`,{overview:!0}),M("vlm_update",t.seqX,f.update,t.seqW,t.sheetH,"vlm-stack",()=>`<b>What ${m()} adds</b><span>${et} tokens x ${d} numbers</span>`,{sweep:.45}),M("vlm_k",t.seqX,f.keys,t.seqW,16,"vlm-keys",()=>`<b>Keys, ${m()}</b><span>${et} tokens x ${o("vlm_k",0).rows} numbers</span>`),M("vlm_v",t.seqX,f.values,t.seqW,16,"vlm-keys",()=>`<b>Values, ${m()}</b><span>${et} tokens x ${o("vlm_v",0).rows} numbers</span>`);const W=ot*.8,D=R*.05;M("exp_stream",t.expX,0,W,D,"expert-input",()=>`<b>Action tokens, entering ${m()}</b>${v}<span>${ot} tokens x ${R} numbers</span>`,{overview:!0,trained:!0}),M("exp_update",t.expX,D+13,W,D,"expert-stack",()=>`<b>What ${m()} adds</b><span>${ot} tokens x ${R} numbers</span>`,{sweep:.45,trained:!0});const E=n({id:"vlm_attn",title:"",note:"",kind:"unit",cols:et,rows:et,width:t.sheetH,height:t.sheetH,pos:[t.maskX,0,r(0)],texture:p,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,label:()=>`<b>Who looks at whom, ${m()}</b><span>average of ${Bs} heads: a row looks at a column</span><span>marked row: ${i.place(a.row.vlm)}</span>`}),L=new Uint8Array(et*ot*4).fill(255),S=new Uint8Array(ot*ot*4).fill(255),x=It(L,et,ot),C=It(S,ot,ot),G=ot*.6,$=t.seqX+t.seqW/2+6+W/2,te=n({id:"exp_attn",title:"",note:"",kind:"unit",cols:et,rows:ot,width:t.seqW,height:G,pos:[t.seqX,f.attn,r(0)],texture:x,bits:8,min:0,max:1,revealAt:s("expert-look"),overview:!1,trained:!0,label:()=>`<b>Where the action tokens look, ${m()}</b>${v}<span>${g()}: ${ot} actions (rows) x ${et} sequence tokens</span><span>marked row: action ${a.row.exp+1}</span>`}),ne=n({id:"exp_own",title:"",note:"",kind:"unit",cols:ot,rows:ot,width:W,height:G,pos:[$,f.attn,r(0)],texture:C,bits:8,min:0,max:1,revealAt:s("expert-look"),overview:!1,trained:!0,when:()=>i.focused("exp_own")&&Be(),label:()=>`<b>At earlier actions</b><span>${ot} x ${ot}</span>`}),j=48,Q={table:new Uint8Array(nn*4).fill(255),wrist:new Uint8Array(nn*4).fill(255)},X={table:It(Q.table,vn,vn),wrist:It(Q.wrist,vn,vn)},fe=new Uint8Array(Si*4).fill(255),ve=new Uint8Array(4).fill(255),Re=It(fe,Si,1),Pe=It(ve,1,1),Ke={table:0,wrist:0,words:0,state:0,own:0},K=new Uint8Array(et+ot),ce=()=>a.look==="exp"?`action ${a.row.exp+1}`:i.place(a.row.vlm),Me={};for(const P of["table","wrist"])Me[P]=n({id:`look_${P}`,title:"",note:"",kind:"image",cols:vn,rows:vn,width:j,height:j,pos:[0,0,r(0)],texture:i.pictures[P],revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused(`look_${P}`),label:()=>`<b>${P==="table"?"Table":"Wrist"} picture</b><span>${Wn(Ke[P])}</span>`}),Me[P].setHeat(X[P]),Me[P].gap=Me[P].gapTo=.08;Me.words=n({id:"look_words",title:"",note:"",kind:"unit",cols:Si,rows:1,width:Si*3,height:3.6,pos:[0,0,r(0)],texture:Re,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused("look_words"),label:()=>`<b>Words</b><span>${Wn(Ke.words)}</span>`}),Me.state=n({id:"look_state",title:"",note:"",kind:"unit",cols:1,rows:1,width:3.6,height:3.6,pos:[0,0,r(0)],texture:Pe,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused("look_state"),label:()=>`<b>Arm readings</b><span>${Wn(Ke.state)}${a.look==="exp"&&Be()?`, earlier actions ${Wn(Ke.own)}`:""}</span>`});const xe=P=>{const H=r(a.layer),[U,ae]=a.look==="exp"?[t.seqX-j/2-3,f.attn-G/2-17-j/2]:[t.maskX+t.sheetH/2+8+j/2,0],ee=ae-j/2-10;Me.table.moveTo(U,ae,H,P),Me.wrist.moveTo(U+j+6,ae,H,P),Me.words.moveTo(U-j/2+Si*3/2,ee,H,P),Me.state.moveTo(U+j/2+6+1.8,ee,H,P)},Ie=(P,H,U,ae,ee)=>{const re=ue.sheets[P],de=n({id:P,title:P,note:"",kind:"signed",cols:re.cols,rows:re.rows,width:W,height:U,pos:[t.expX,0,H],texture:u,bits:8,min:-1,max:1,parts:[{end:re.cols,scale:re.scale??1}],revealAt:s(ae),label:ee,overview:!1,trained:!0,valueAt:(ie,se)=>{var Ce;const Te=h.get(P);return Te?Te.values.at(ie,se)*(((Ce=Te.info.parts)==null?void 0:Ce[0].scale)??1):null}});c(re).then(ie=>{h.set(P,{values:ie,info:re}),de.setTexture(ie.texture,re),e.touch(3)})},ke=ue.sheets.exp_x.rows*.6;Ie("exp_x",r(0)-16,ke,"expert-input",()=>`<b>The noisy plan</b><span>${ot} actions x ${ue.sheets.exp_x.rows} numbers, noise level ${ue.stats.times[0].toFixed(1)}</span>`),Ie("exp_last",r(Mi),D,"expert-output",()=>`<b>Action tokens after layer ${Mi}</b><span>${ot} tokens x ${R} numbers</span>`),Ie("exp_v",r(Mi)+16,ke,"expert-output",()=>`<b>The direction</b>${v}<span>${ot} actions x ${ue.sheets.exp_v.rows} numbers</span>`);const Be=()=>o("exp_attn",a.layer).own===!0,je=()=>{const P=a.look,H=a.row[P],U=h.get("vlm_attn");if(P==="vlm"&&!U)return;const ae=se=>P==="vlm"?U.values.rgba[(H*et+se)*4]:se<et?L[(H*et+se)*4]:Be()?S[(H*ot+se-et)*4]:0;let ee=0;for(let se=0;se<et+ot;se++)K[se]=se<et||P==="exp"?ae(se):0,se<et&&(ee=Math.max(ee,K[se]));const re=(se,Te)=>{let Ce=0;for(let be=se;be<Te;be++)Ce+=es(K[be]);return Ce},de=Math.max(ee,Math.sqrt(.05)*255),ie=se=>Math.min(255,Math.round(K[se]/de*255));for(let se=0;se<nn;se++)Q.table[se*4]=ie(se),Q.wrist[se*4]=ie(nn+se);for(let se=0;se<Si;se++)fe[se*4]=ie(2*nn+se);ve[0]=ie(et-1);for(const se of[X.table,X.wrist,Re,Pe])se.needsUpdate=!0;Object.assign(Ke,{table:re(0,nn),wrist:re(nn,2*nn),words:re(2*nn,et-1),state:re(et-1,et),own:P==="exp"?re(et,et+ot):0}),i.changed(),e.touch(3)},ze=()=>{const P=h.get("exp_attn");if(!P)return;const{rgba:H}=P.values,U=P.info.cols,ae=(a.head+1)*ot;for(let ee=0;ee<ot;ee++){const re=(ae+ee)*U;for(let de=0;de<et;de++)L[(ee*et+de)*4]=H[(re+de)*4];for(let de=0;de<ot;de++)S[(ee*ot+de)*4]=U>et?H[(re+et+de)*4]:0}x.needsUpdate=!0,C.needsUpdate=!0,a.look==="exp"&&je(),e.touch(3)};let st=-1;const N=(P,H)=>{const U=Math.min(Mi-1,Math.max(0,Math.round(P)));if(U===st)return;st=a.layer=U;const ae=r(U);for(const{id:de,x:ie,y:se,sheet:Te}of T){Te.moveTo(ie,se,ae,H);const Ce=o(de,U);c(Ce).then(be=>{a.layer===U&&(h.set(de,{values:be,info:Ce}),Te.setTexture(be.texture,Ce),de.endsWith("_update")&&Te.shown&&!H&&(Te.reveal=0),e.touch(3))})}E.moveTo(t.maskX,0,ae,H),te.moveTo(t.seqX,f.attn,ae,H),ne.moveTo($,f.attn,ae,H),xe(H);const ee=o("vlm_attn",U);c(ee).then(de=>{a.layer===U&&(h.set("vlm_attn",{values:de,info:ee}),E.setTexture(de.texture,{...ee,min:0,max:1}),a.look==="vlm"&&je(),e.touch(3))});const re=o("exp_attn",U);c(re).then(de=>{a.layer===U&&(h.set("exp_attn",{values:de,info:re}),ze())});for(const de of[1,-1])if(U+de>=0&&U+de<Mi)for(const ie of Object.keys(ue.layers))c(o(ie,U+de));i.changed(),e.touch(3)},pe=P=>{a.head=Math.min(Bs-1,Math.max(-1,Math.round(P))),ze(),i.changed()},he=(P,H)=>{a.look=P,H!==void 0&&(a.row[P]=H),xe(!1),je()},me=new Set([...T.map(P=>P.id),"vlm_attn","exp_attn","exp_own","look_table","look_wrist","look_words","look_state","exp_x","exp_v","exp_last"]),ge=(P,H,U,ae)=>{var de,ie,se,Te;const ee=(ie=(de=P.spec).valueAt)==null?void 0:ie.call(de,H,U);if(ee==null)return`<span>${ae}</span>`;const re=(Te=(se=P.spec).isClipped)!=null&&Te.call(se,H,U)?ee<0?"below ":"above ":"";return`<span>${ae}</span><b class="val">${re}${q0(ee)}</b>`},Fe={vlm_stream:()=>`The sequence, entering ${m()}`,vlm_update:()=>`What ${m()} adds`,vlm_k:()=>`Keys, ${m()}`,vlm_v:()=>`Values, ${m()}`,exp_stream:()=>`Action tokens, entering ${m()}`,exp_update:()=>`What ${m()} adds to the action tokens`,exp_x:()=>"The noisy plan",exp_v:()=>"The direction",exp_last:()=>`Action tokens after layer ${Mi}`},we=P=>{const H=P.sheet.spec.id;if(!me.has(H))return null;const{col:U,row:ae}=P;if(H.startsWith("vlm_")&&H!=="vlm_attn")return{html:`<i>${Fe[H]()}</i><span>place ${U+1} of ${et}: ${i.place(U)}</span>${ge(P.sheet,U,ae,`number ${Fa(ae+1)} of ${Fa(P.sheet.spec.rows)}`)}`,token:U,action:null};if(H==="vlm_attn"){(a.row.vlm!==ae||a.look!=="vlm")&&(a.row.vlm=ae,a.look==="vlm"&&je());const de=h.get("vlm_attn"),ie=de?es(de.values.rgba[(ae*et+U)*4]):0;return{html:`<i>${m()}, average of ${Bs} heads</i><span>${i.place(ae)} (place ${ae+1})</span><span>looking at ${i.place(U)} (place ${U+1})</span><b class="val">${Wn(ie)}</b>`,token:U,action:null}}if(H==="exp_attn"||H==="exp_own"){a.row.exp!==ae&&(a.row.exp=ae,a.look==="exp"&&je());const de=H==="exp_own",ie=es(de?S[(ae*ot+U)*4]:L[(ae*et+U)*4]),se=de?U>ae?`action ${U+1}, which comes later: not allowed`:`action ${U+1}`:`${i.place(U)} (place ${U+1})`;return{html:`<i>${m()}, ${g()}</i><span>${Rc(ae)}</span><span>looking at ${se}</span><b class="val">${Wn(ie)}</b>`,token:de?null:U,action:ae}}if(H==="look_table"||H==="look_wrist"){const de=H==="look_table"?"table":"wrist",ie=ae*vn+U,se=(de==="table"?0:nn)+ie;return{html:`<i>Where ${ce()} looks</i><span>${de} picture, block row ${ae+1}, column ${U+1}</span><b class="val">${Wn(es(K[se]))}</b>`,token:se,action:null}}if(H==="look_words")return{html:`<i>Where ${ce()} looks</i><span>${i.place(2*nn+U)}</span><b class="val">${Wn(es(K[2*nn+U]))}</b>`,token:2*nn+U,action:null};if(H==="look_state")return{html:`<i>Where ${ce()} looks</i><span>the arm's readings</span><b class="val">${Wn(es(K[et-1]))}</b>`,token:et-1,action:null};const ee=P.sheet.spec.rows,re=ee===ue.shape.max_dim?`number ${ae+1} of ${ee}: ${ae<Ac.length?Ac[ae]:"not used by this arm"}`:`number ${Fa(ae+1)} of ${Fa(ee)}`;return{html:`<i>${Fe[H]()}</i><span>${Rc(U)}</span>${ge(P.sheet,U,ae,re)}`,token:null,action:U}},b=P=>{var ee;const H=(re,de)=>de===null?[]:[[de,0,de+1,re.spec.rows]];for(const{id:re,sheet:de}of T)de.select(H(de,re.startsWith("vlm_")?P.token:P.action));for(const re of["exp_x","exp_v","exp_last"]){const de=k(re);de.select(H(de,P.action))}const U=a.look==="vlm"?[[0,a.row.vlm,et,a.row.vlm+1]]:[];E.select([...U,...H(E,P.token)]);const ae=[0,a.row.exp,et,a.row.exp+1];te.select([ae,...H(te,P.token)]),ne.select([[0,a.row.exp,ot,a.row.exp+1]]);for(const re of["table","wrist"]){const de=((ee=P.group)==null?void 0:ee.cam)===re?P.group.m:null;Me[re].select(de===null?[]:[[de%vn,Math.floor(de/vn),de%vn+1,Math.floor(de/vn)+1]])}Me.words.select(P.word===null||P.word>=Si?[]:[[P.word,0,P.word+1,1]])},_=new Map,k=P=>_.get(P);for(const P of e.sheets)_.set(P.spec.id,P);return xe(!0),N(0,!0),{state:a,layers:Mi,heads:Bs,owns:P=>me.has(P),setLayer:N,setHead:pe,setLook:he,looksAtActions:Be,hover:we,select:b}}const zs=["table","wrist"],Or=ue.vision_layers.table.length,yn=ue.shape.image/ue.shape.patch,kr=yn*yn,j0=8,Z0=i=>i.toLocaleString("en-US");function K0(i){const{view:e,add:t,at:n}=i,s={layer:0},a=(E,L)=>ue.vision_layers[E][L],r=It(new Uint8Array([128,128,128,255]),1,1),o=()=>`layer ${s.layer+1}`,l=E=>ue.vision.typical_size[E][s.layer],c={},h={};for(const E of zs){const L=a(E,0);h[E]=t({id:`${E}_layer`,title:"",note:"",kind:"signed",cols:L.cols,rows:L.rows,width:i.width,height:i.height,pos:[i.lane[E],0,i.slotZ(0)],texture:r,bits:8,min:-1,max:1,revealAt:n("encoder"),label:()=>`<b>After ${o()}</b><span>${Z0(L.cols)} patches x ${L.rows} numbers</span>`,valueAt:(S,x)=>{var C;return((C=c[E])==null?void 0:C.values.at(S,x))??null},isClipped:(S,x)=>{const C=c[E],G=C?C.values.rgba[(x*C.info.cols+S)*4]:128;return G===0||G===255}})}const u={},p={table:new Uint8Array(kr*4),wrist:new Uint8Array(kr*4)},m={table:It(p.table,yn,yn),wrist:It(p.wrist,yn,yn)},g=(E,L)=>{var S;return((S=u[E])==null?void 0:S.at(L%yn,s.layer*yn+Math.floor(L/yn)))??null};for(const E of zs)t({id:`${E}_size`,title:"",note:"",kind:"image",cols:yn,rows:yn,width:i.mapSide,height:i.mapSide,pos:i.mapPos[E],texture:i.pictures[E],revealAt:n("encoder-sizes"),overview:!1,when:()=>i.focused(`${E}_size`),label:()=>`<b>Largest columns after ${o()}</b><span>typical size ${l(E).toFixed(1)}, largest ${ue.vision.largest_size[E][s.layer].toFixed(0)}</span>`}).setHeat(m[E],"mark");const v=E=>{const L=l(E);for(let S=0;S<kr;S++){const x=(g(E,S)??L)/L;p[E][S*4]=Math.round(Math.min(1,Math.max(0,(x-1)/(j0-1)))*255)}m[E].needsUpdate=!0},f=new Map,d=E=>{let L=f.get(E.file);return L||f.set(E.file,L=Qs(E,i.aniso)),L};let R=!1,T=-1;const M=(E,L)=>{T=E;const S=new Set;for(const x of zs){h[x].moveTo(i.lane[x],0,i.slotZ(E),L);const C=a(x,E);d(C).then(G=>{if(s.layer!==E)return;const $=c[x];c[x]={values:G,info:C},h[x].setTexture(G.texture,C),h[x].setScale(C.scale??1),$&&$.info.file!==C.file&&!f.has($.info.file)&&$.values.texture.dispose(),i.changed(),e.touch(3)}),u[x]&&v(x);for(const G of[0,1,-1])E+G<0||E+G>=Or||(S.add(a(x,E+G).file),d(a(x,E+G)))}for(const[x,C]of f)S.has(x)||(f.delete(x),C.then(G=>{zs.some($=>{var te;return((te=c[$])==null?void 0:te.info.file)===x})||G.texture.dispose()}));i.changed(),e.touch(3)};return{state:s,layers:Or,ensure:()=>{if(!R){R=!0,M(s.layer,!0);for(const E of zs)Qs(ue.sheets[`${E}_sizes`],1).then(L=>{u[E]=L,v(E),i.changed(),e.touch(3)})}},setLayer:(E,L)=>{const S=Math.min(Or-1,Math.max(0,Math.round(E)));s.layer=S,R&&S!==T&&M(S,L)},sizeOf:g,typical:l}}const wi=["table","wrist"],Ei={table:"Table camera",wrist:"Wrist camera"},Ct={table:-72,wrist:0,lang:64,state:112},Br=84,Oe={raw:0,pad:52,embed:104,layers:113,encoded:204,sim:250,groups:296,merged:342,seq:400,stack:440},Hs=10,qn=.8,_t=48,gt=ue.shape.image/ue.shape.patch,Gs=gt*gt,xn=4,ln=gt/xn,vt=ln*ln,$n=ue.lang.mask.length,bt=ue.prefix.len,Zs=bt*qn,hi=Ct.wrist-vt*qn*1.5,zr=hi+Zs/2,Hr=hi+Zs+12+_t/2,Vs=160,Oa=128,ts=.8,Cc=-_t/2-3.5,Pc=32,Gr=(Ct.table+Ct.wrist)/2,Vr={table:22,wrist:-22},Wr=["before","mid","after"],Lc=(Oe.encoded-Oe.layers-9)/(ue.shape.vision_layers-1),ns=i=>i.toLocaleString("en-US"),Ws=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−");async function J0(i,e){var Ce,be;const t=i.renderer.capabilities.getMaxAnisotropy(),n=ue.sheets,s=["table_embed","table_encoded","table_merged","wrist_embed","wrist_encoded","wrist_merged","lang_embed","state_token","sequence","mask"],a=["table_raw","table_512","wrist_raw","wrist_512"];let r=0;const o=s.length+a.length,l=A=>(e(++r,o),A),[c,h]=await Promise.all([Promise.all(s.map(A=>Qs(n[A],t).then(l))),Promise.all(a.map(A=>D0(`data/${A}.jpg`,t).then(l)))]),u=Object.fromEntries(s.map((A,z)=>[A,c[z]])),p=Object.fromEntries(a.map((A,z)=>[A,h[z]])),m=A=>z0(A),g=A=>Mt[A].focus==="all",v=new Map,f=A=>{const z=new g0(A);return v.set(A.id,z),i.add(z),z},d=(A,z)=>{const Z=u[A];return f({id:A,kind:"signed",cols:Z.info.cols,rows:Z.info.rows,texture:Z.texture,bits:Z.info.bits,min:Z.info.min,max:Z.info.max,parts:[{end:Z.info.cols,scale:Z.info.scale??1}],valueAt:(w,V)=>Z.at(w,V),isClipped:(w,V)=>Z.info.bits===8&&(Z.rgba[(V*Z.info.cols+w)*4]===0||Z.rgba[(V*Z.info.cols+w)*4]===255),...z})},R={};let T=()=>0;for(const A of wi){const z=Ct[A],Z=Ei[A];f({id:`${A}_raw`,title:Z,note:"640 x 480 pixels",kind:"image",cols:640,rows:480,width:64,height:_t,pos:[z,0,Oe.raw],texture:p[`${A}_raw`],revealAt:m("cameras")}),f({id:`${A}_512`,title:`${Z}, fitted`,note:`512 x 512 pixels, ${gt} x ${gt} patches`,kind:"image",cols:gt,rows:gt,width:51.2,height:51.2,pos:[z,0,Oe.pad],texture:p[`${A}_512`],revealAt:m("resize")}),d(`${A}_embed`,{title:"Patch columns",note:`${ns(Gs)} patches x ${ue.shape.vision_width} numbers`,width:64,height:_t,pos:[z,0,Oe.embed],revealAt:m("embed")}),d(`${A}_encoded`,{title:"After the vision encoder",note:`${ns(Gs)} patches x ${ue.shape.vision_width} numbers`,width:64,height:_t,pos:[z,0,Oe.encoded],revealAt:m("encoder")});const w=Pc,V=Vr[A],B=Gr;f({id:`${A}_pick`,title:Z,note:"",kind:"image",cols:gt,rows:gt,width:w,height:w,pos:[B-w-5,V,Oe.sim],texture:p[`${A}_512`],revealAt:m("encoder-sizes")});for(const[J,oe]of Wr.entries()){const le=new Uint8Array(Gs*4).fill(255),Ee=It(le,gt,gt);R[`${A}_${oe}`]={rgba:le,texture:Ee},f({id:`${A}_${oe}`,title:oe==="before"?"Before":"After",note:"the encoder",kind:"unit",cols:gt,rows:gt,width:w,height:w,pos:[B+J*(w+5),V,Oe.sim],texture:Ee,bits:8,min:0,max:1,revealAt:m("similar"),label:oe==="mid"?()=>`<b>After</b><span>layer ${T()+1}</span>`:void 0})}f({id:`${A}_groups`,title:`${Z}, in blocks`,note:`${ln} x ${ln} blocks of 4 x 4 patches`,kind:"image",cols:ln,rows:ln,width:51.2,height:51.2,pos:[z,0,Oe.groups],texture:p[`${A}_512`],revealAt:m("merge")}),d(`${A}_merged`,{title:"Merged tokens",note:`${vt} tokens x ${ue.shape.vlm_width} numbers`,width:vt*qn,height:_t,pos:[z,0,Oe.merged],revealAt:m("merge")})}const M=ue.lang.mask.filter(Boolean).length,W=new Uint8Array($n*4);ue.lang.mask.forEach((A,z)=>W.set([A?255:0,0,0,255],z*4)),f({id:"lang_in",title:"Instruction",note:`${$n} slots, ${M} used`,kind:"mask",cols:$n,rows:1,width:$n,height:4,pos:[Ct.lang,0,Oe.raw],texture:It(W,$n,1),bits:8,min:0,max:1,revealAt:m("instruction")});const D=U0(ue.state.padded,-2,2);f({id:"state_in",title:"Arm readings",note:`${ue.shape.max_dim} numbers, 7 used`,kind:"signed",cols:ue.shape.max_dim,rows:1,width:ue.shape.max_dim,height:4,pos:[Ct.state,0,Oe.raw],texture:D.texture,bits:16,min:D.min,max:D.max,parts:[{end:ue.shape.max_dim,scale:1.5}],revealAt:m("readings"),valueAt:A=>ue.state.padded[A]}),d("lang_embed",{title:"Word columns",note:`${$n} slots x ${ue.shape.vlm_width} numbers`,width:$n*qn,height:_t,pos:[Ct.lang,0,Oe.merged],revealAt:m("place-words")}),d("state_token",{title:"Readings token",note:`1 token x ${ue.shape.vlm_width} numbers`,width:qn,height:_t,pos:[Br,0,Oe.merged],revealAt:m("place-state"),trained:!0}),d("sequence",{title:"The sequence",note:`${bt} tokens x ${ue.shape.vlm_width} numbers`,width:Zs,height:_t,pos:[zr,0,Oe.seq],revealAt:m("place-images"),parts:n.sequence.parts.map(A=>({end:A.end,scale:A.scale}))});const E=2*vt,L=[{name:"table picture",start:0,end:vt},{name:"wrist picture",start:vt,end:E},{name:"words",start:E,end:E+M},{name:"padding",start:E+M,end:bt-1},{name:"arm readings",start:bt-1,end:bt}];f({id:"mask",title:"Who may look at whom",note:`${bt} x ${bt}: a row looks at a column`,kind:"mask",cols:bt,rows:bt,width:_t,height:_t,pos:[Hr,0,Oe.seq],texture:u.mask.texture,bits:8,min:0,max:1,revealAt:m("who-sees-whom"),parts:L.slice(0,4).map(A=>({end:A.end,scale:1})),dividers:"both",label:()=>`<b>Who may look at whom</b><span>${bt} x ${bt}: a row looks at a column</span>
      <span class="key"><i class="chip yes"></i>may look<i class="chip no"></i>may not</span>`});for(const A of v.values())A.spec.id.endsWith("_groups")&&(A.gap=A.gapTo=.14);const S=[],x=(A,z,Z,w,V,B,J,oe)=>{const le=[];for(let Ge=0;Ge<J;Ge++){const We=V+Ge*B;le.push(i.addLine([[-Z/2,-w/2],[Z/2,-w/2],[Z/2,w/2],[-Z/2,w/2]].map(([yt,zt])=>new I(z+yt,zt,We)),!0))}const Ee=new un(new I(z-Z/2,-w/2,V),new I(z+Z/2,w/2,V+(J-1)*B)),Qe=S.find(Ge=>Ge.id===A);Qe?(Qe.lines.push(...le),Qe.box.union(Ee)):S.push({id:A,lines:le,box:Ee,revealAt:oe})};for(const A of wi)x("ghost_vision",Ct[A],64,_t,Oe.layers,Lc,ue.shape.vision_layers,m("encoder"));x("ghost_vlm",zr,Zs,_t,Oe.stack,Hs,ue.shape.vlm_layers,m("vlm-stack")),x("ghost_expert",Vs,ue.shape.chunk*qn,ue.shape.expert_width*.05,Oe.stack,Hs,ue.shape.expert_layers,m("expert-input"));const C=[],G=(A,z,Z)=>C.push({line:i.addLine([new I(A[0],Cc,A[1]),new I(z[0],Cc,z[1])]),revealAt:Z});for(const[A,z]of wi.entries()){const Z=Ct[z],w=[[Oe.pad,"resize"],[Oe.embed,"embed"],[Oe.encoded,"encoder"],[Oe.sim,"similar"],[Oe.groups,"merge"],[Oe.merged,"merge"]];let V=Oe.raw;for(const[B,J]of w)G([Z,V],[Z,B],m(J)),V=B;G([Z,Oe.merged],[hi+(A+.5)*vt*qn,Oe.seq],m("place-images"))}G([Ct.lang,Oe.raw],[Ct.lang,Oe.merged],m("place-words")),G([Ct.lang,Oe.merged],[hi+(2*vt+$n/2)*qn,Oe.seq],m("place-words")),G([Ct.state,Oe.raw],[Br,Oe.merged],m("place-state")),G([Br,Oe.merged],[hi+(bt-.5)*qn,Oe.seq],m("place-state"));const $=A=>ue.lang.mask[A]?`"${ue.lang.text[A]===`
`?"line break":ue.lang.text[A].trim()}"`:"padding",te=A=>A<vt?`table camera token ${A+1}`:A<2*vt?`wrist camera token ${A-vt+1}`:A<bt-1?ue.lang.mask[A-2*vt]?`the word ${$(A-2*vt)}`:"padding":"the arm's readings";let ne=0;const j=A=>{const z=Mt[ne].focus;return z==="all"||z.includes(A)};let Q=()=>{};const X=Y0({view:i,aniso:t,add:f,at:m,focused:j,geo:{seqX:zr,seqW:Zs,maskX:Hr,expX:Vs,sheetH:_t,stackZ:Oe.stack,gap:Hs},pictures:{table:p.table_512,wrist:p.wrist_512},place:A=>te(A),changed:()=>Q()}),fe=K0({view:i,aniso:t,add:f,at:m,focused:j,lane:Ct,width:64,height:_t,slotZ:A=>Oe.layers+A*Lc,pictures:{table:p.table_512,wrist:p.wrist_512},mapPos:{table:[Gr,Vr.table,Oe.sim],wrist:[Gr,Vr.wrist,Oe.sim]},mapSide:Pc,changed:()=>Q()});T=()=>fe.state.layer;const ve=A=>{if(g(ne))return null;const Z=(Mt[ne].labels??Mt[ne].focus).indexOf(A);return Z<0?null:Z},Re=Oe.stack+ue.shape.expert_layers*Hs+16,Pe=X0({view:i,aniso:t,add:f,at:m,focused:j,rank:ve,changed:()=>Q(),expX:Vs,endZ:Re}),Ke=new Map,K=[];for(const A of v.values()){const z=new I;Ke.set(A,z);const Z=A.spec.trained?' <i class="tag trained">trained</i>':"",w=A.spec.note?`<span>${A.spec.note}</span>`:"",V=i.addLabel(((be=(Ce=A.spec).label)==null?void 0:be.call(Ce))??`<b>${A.spec.title}</b>${Z}${w}`,z,()=>A.shown&&A.reveal>0?ve(A.spec.id):null);A.spec.label&&K.push([A,V])}const ce=(A,z,Z,w,V=_t/2+2)=>i.addLabel(z,new I(Z,V,w),()=>ve(A),"ghost");ce("ghost_vision",`<b>Vision encoder</b><span>${ue.shape.vision_layers} layers, frozen: one outline each</span>`,Ct.wrist-32,(Oe.layers+Oe.encoded)/2,-_t/2-9);const Me=Oe.stack+(ue.shape.vlm_layers-1)*Hs;ce("ghost_vlm",`<b>Vision-language model</b><span>${ue.shape.vlm_layers} layers, frozen</span>`,hi,Me,-_t/2-3),ce("ghost_expert",`<b>Action expert</b> <i class="tag trained">trained</i><span>${ue.shape.expert_layers} layers</span>`,Vs-20,Me,-22);const xe=v.get("mask"),Ie=A=>()=>{const z=xe.shown&&xe.reveal>0?ve("mask"):null;return z===null?null:z+.01*(A+1)},ke=_t/bt,Be=Hr-_t/2;for(const[A,z]of L.entries()){const Z=(z.start+z.end)/2*ke,w=`<span>${z.end-z.start}</span>`;i.addLabel(`${z.name}${w}`,new I(Be+_t+1,_t/2-Z,Oe.seq),Ie(A),"axis side"),i.addLabel(z.name,new I(Be+Z,-_t/2-.8,Oe.seq),Ie(L.length+A),"axis under")}const je=(A,z,Z,w=_t/2+3)=>i.addLabel(A,new I(z,w,Z),()=>g(ne)?0:null,"station");je("<b>1</b> The input",Ct.table-32,Oe.raw),je("<b>2</b> Images into patches",Ct.table-32,Oe.embed,-_t/2-4),je("<b>3</b> The vision encoder",Ct.table-32,Oe.encoded),je("<b>4</b> One sequence",hi,Oe.seq),je("<b>5</b> The vision-language model",hi,Oe.stack+75),je("<b>6</b> The action expert",Vs-20,Oe.stack+75,21),je("<b>7</b> From noise to a plan <b>8</b> On the arm",-60,Re+64,28),je("<b>9</b> How it was trained",-46,Re+148,28),i.onTick=A=>{Pe.tick(A)&&i.touch();for(const[z,Z]of Ke){const w=1/(1-z.gap),V=z.group.position;Z.set(V.x-z.spec.width/2*w,V.y+z.spec.height/2*w+1.2,V.z)}};const ze={table:17*gt+17,wrist:29*gt+22},st=(A,z)=>z==="mid"?ue.similarity[A].layers[fe.state.layer]:ue.similarity[A][z],N=new Map,pe=A=>{let z=N.get(A.file);return z||N.set(A.file,z=Qo.load(A)),z},he=(A,z=Wr)=>{for(const Z of z){const w=st(A,Z);pe(w).then(V=>{if(st(A,Z).file!==w.file)return;const B=V.to(ze[A]),{rgba:J,texture:oe}=R[`${A}_${Z}`];for(let le=0;le<Gs;le++)J[le*4]=Math.round(Math.min(1,Math.max(0,B[le]))*255);oe.needsUpdate=!0,i.touch()})}};let me=!1,ge=-1;const Fe=()=>{const A=fe.state.layer;if(!me||A===ge||!v.get("table_mid").shown)return;ge=A;const z=new Set;for(const Z of wi){z.add(ue.similarity[Z].before.file).add(ue.similarity[Z].after.file);for(const w of[0,1,-1]){const V=ue.similarity[Z].layers[A+w];V&&(z.add(V.file),pe(V))}he(Z,["mid"])}for(const Z of N.keys())z.has(Z)||N.delete(Z)},we=()=>{if(!me){me=!0;for(const A of wi)he(A,["before","after"])}},b={group:null,word:null,reading:null,active:!1,token:null,action:null},_=A=>{b.token=A,A<2*vt?b.group={cam:wi[Math.floor(A/vt)],m:A%vt}:A<bt-1?b.word=A-2*vt:b.reading="all"},k=A=>[Math.floor(A/gt),A%gt],P=A=>Math.floor(Math.floor(A/gt)/xn)*ln+Math.floor(A%gt/xn),H=(A,z,Z,w)=>{const V=Math.max(0,(z*ue.shape.patch-Oa)/ts),B=(w*ue.shape.patch-Oa)/ts;return B<=0?[]:[[A*ue.shape.patch/ts,V,Z*ue.shape.patch/ts,B]]},U=()=>{var w;const A=[];for(const[V,B]of wi.entries()){const J=((w=b.group)==null?void 0:w.cam)===B?b.group.m:null,[oe,le]=k(ze[B]),Ee=J??P(ze[B]),[Qe,Ge]=[Math.floor(Ee/ln),Ee%ln],[We,yt,zt,Fi]=J===null?[oe,le,oe+1,le+1]:[Qe*xn,Ge*xn,(Qe+1)*xn,(Ge+1)*xn],Ts=[];for(let sn=We;sn<zt;sn++)Ts.push([sn*gt+yt,0,sn*gt+Fi,ue.shape.vision_width]);const Fn=[[yt,We,Fi,zt]];v.get(`${B}_raw`).select(H(yt,We,Fi,zt));for(const sn of["512","pick",...Wr,"size"])v.get(`${B}_${sn}`).select(Fn);for(const sn of["embed","encoded","layer"])v.get(`${B}_${sn}`).select(Ts);v.get(`${B}_groups`).select([[Ge,Qe,Ge+1,Qe+1]]),v.get(`${B}_merged`).select([[Ee,0,Ee+1,ue.shape.vlm_width]]),A.push([V*vt+Ee,0,V*vt+Ee+1,ue.shape.vlm_width])}const z=b.word;v.get("lang_in").select(z===null?[]:[[z,0,z+1,1]]),v.get("lang_embed").select(z===null?[]:[[z,0,z+1,ue.shape.vlm_width]]),z!==null&&A.push([2*vt+z,0,2*vt+z+1,ue.shape.vlm_width]);const Z=b.reading;v.get("state_in").select(Z===null?[]:Z==="all"?[[0,0,ue.shape.max_dim,1]]:[[Z,0,Z+1,1]]),v.get("state_token").select(Z===null?[]:[[0,0,1,ue.shape.vlm_width]]),Z!==null&&A.push([bt-1,0,bt,ue.shape.vlm_width]),v.get("sequence").select(A),X.select(b),Pe.select(b.action);for(const V of v.values())V.mesh.material.uniforms.uSelDim.value=b.active&&V.spec.kind==="signed"?.3:0;i.touch()},ae=A=>{const[z,Z]=k(A);return`patch ${ns(A+1)} of ${ns(Gs)} (row ${z+1}, column ${Z+1})${(z+1)*ue.shape.patch<=Oa?", black padding":""}`},ee=(A,z,Z,w)=>{var J,oe,le,Ee;const V=(oe=(J=A.spec).valueAt)==null?void 0:oe.call(J,z,Z);if(V==null)return"";const B=((Ee=(le=A.spec).isClipped)==null?void 0:Ee.call(le,z,Z))??!1;return`<span>number ${ns(Z+1)} of ${ns(w)}</span><b class="val">${B?V<0?"below ":"above ":""}${Ws(V)}</b>`},re=A=>{if(b.group=null,b.word=null,b.reading=null,b.token=null,b.action=null,b.active=A!==null,!A)return U(),null;const z=A.sheet.spec.id,Z=Pe.hover(A);if(Z)return b.action=Z.action,U(),Z.html;const w=X.hover(A);if(w)return w.token!==null&&_(w.token),b.action=w.action,U(),w.html;const{col:V,row:B}=A,[J,oe]=z.includes("_")?[z.slice(0,z.indexOf("_")),z.slice(z.indexOf("_")+1)]:[z,""];let le="";if(J==="table"||J==="wrist"){const Ee=J,Qe=Ge=>{ze[Ee]!==Ge&&(ze[Ee]=Ge,me&&he(Ee))};if(oe==="raw")le=`<i>${Ei[Ee]}</i><span>pixel ${V+1}, ${B+1}</span>`,Qe(Math.floor((B*ts+Oa)/ue.shape.patch)*gt+Math.floor(V*ts/ue.shape.patch));else if(oe==="512"||oe==="pick")Qe(B*gt+V),le=`<i>${Ei[Ee]}</i><span>${ae(ze[Ee])}</span>`;else if(oe==="embed"||oe==="encoded"||oe==="layer"){Qe(V);const Ge=oe==="embed"?"patch columns":oe==="encoded"?"after the encoder":`after layer ${fe.state.layer+1}`;le=`<i>${Ei[Ee]}, ${Ge}</i><span>${ae(V)}</span>${ee(A.sheet,V,B,ue.shape.vision_width)}`}else if(oe==="size"){const Ge=B*gt+V;Qe(Ge);const We=fe.sizeOf(Ee,Ge);le=`<i>${Ei[Ee]}, after layer ${fe.state.layer+1}</i><span>${ae(Ge)}</span><span>size of its column (typical ${fe.typical(Ee).toFixed(1)})</span>${We===null?"":`<b class="val">${Ws(We)}</b>`}`}else if(oe==="before"||oe==="after"||oe==="mid"){const Ge=B*gt+V,We=R[z].rgba[Ge*4]/255,yt=oe==="mid"?`after layer ${fe.state.layer+1}`:`${oe} the encoder`;le=`<i>${Ei[Ee]}, ${yt}</i><span>${ae(Ge)}</span><span>similarity to the picked patch</span><b class="val">${We.toFixed(2)}</b>`}else if(oe==="groups"||oe==="merged"){const Ge=oe==="groups"?B*ln+V:V;b.group={cam:Ee,m:Ge};const[We,yt]=[Math.floor(Ge/ln),Ge%ln];le=`<i>${Ei[Ee]}</i><span>merged token ${Ge+1} of ${vt}: patch rows ${We*xn+1} to ${(We+1)*xn}, columns ${yt*xn+1} to ${(yt+1)*xn}</span>`,oe==="merged"&&(le+=ee(A.sheet,V,B,ue.shape.vlm_width))}}else if(z==="lang_in"||z==="lang_embed")b.word=V,le=`<i>Instruction</i><span>slot ${V+1} of ${$n}: ${$(V)}</span>${z==="lang_embed"?ee(A.sheet,V,B,ue.shape.vlm_width):""}`;else if(z==="state_in")b.reading=V,le=V<7?`<i>Arm readings</i><span>${ue.state.names[V]}: ${Ws(ue.state.deg[V])}°, as usual would be ${Ws(ue.state.mean[V])}°</span><span>rescaled</span><b class="val">${Ws(ue.state.norm[V])}</b>`:`<i>Arm readings</i><span>cell ${V+1} of ${ue.shape.max_dim}: zero padding</span>`;else if(z==="state_token")b.reading="all",le=`<i>Readings token</i>${ee(A.sheet,V,B,ue.shape.vlm_width)}`;else if(z==="sequence")_(V),le=`<i>The sequence</i><span>place ${V+1} of ${bt}: ${te(V)}</span>${ee(A.sheet,V,B,ue.shape.vlm_width)}`;else if(z==="mask"){const Ee=u.mask.at(V,B)>.5;le=`<i>Who may look at whom</i><span>${te(B)} (place ${B+1})</span><span>looking at ${te(V)} (place ${V+1})</span><b class="val">${Ee?"allowed":"blocked"}</b>`}return U(),le||null},de=A=>g(A)||A>=m("place-state")?1:A>=m("place-words")?(bt-1)/bt:A>=m("place-images")?2*vt/bt:0,ie=(A,z)=>{var Z,w;return(g(z)?A.spec.overview!==!1:z>=A.spec.revealAt&&(!Mt[z].alone||j(A.spec.id)))&&(((w=(Z=A.spec).when)==null?void 0:w.call(Z))??!0)},se=()=>({layer:X.state.layer,layers:X.layers,head:X.state.head,heads:X.heads,looksAtActions:X.looksAtActions(),vision:fe.state.layer,visionLayers:fe.layers,round:Pe.state.round,rounds:Pe.rounds,noise:Pe.state.noise,levels:Pe.levels}),Te={setStep:()=>{},boxOf:()=>new un,hover:re,stack:se,setLayer:X.setLayer,setHead:X.setHead,setVisionLayer:fe.setLayer,setRound:Pe.setRound,setNoise:Pe.setNoise,onStack:()=>{}};return Q=()=>{for(const[A,z]of K)z.innerHTML=A.spec.label();for(const A of v.values()){if(!A.spec.when)continue;const z=A.shown;A.shown=ie(A,ne),A.shown!==z&&(A.reveal=A.revealTo=A.shown?1:0)}Fe(),U(),Te.onStack(se())},Te.setStep=(A,z)=>{ne=A;const Z=Mt[A];Z.look&&X.setLook(Z.look,Z.row),Z.layer!==void 0&&X.setLayer(Z.layer,z),Z.head!==void 0&&X.setHead(Z.head),Z.vlayer!==void 0&&fe.setLayer(Z.vlayer,z),(g(A)||A>=m("encoder"))&&fe.ensure(),Pe.setMode(Z.plot,z),Z.round!==void 0&&Pe.setRound(Z.round,z),Z.noise!==void 0&&Pe.setNoise(Z.noise);for(const w of v.values()){const V=w.spec.id;w.shown=ie(w,A),w.revealTo=w.shown?V==="sequence"?de(A):1:0,(!w.shown||z||g(A))&&(w.reveal=w.revealTo),w.fadeTo=j(V)?1:.26,V.endsWith("_512")&&(w.gapTo=g(A)||A>=m("patches")?.18:0),z&&(w.fade=w.fadeTo,w.gap=w.gapTo,w.group.position.set(...w.spec.pos))}for(const w of S)for(const V of w.lines)V.visible=g(A)||A>=w.revealAt&&j(w.id);for(const w of C)w.line.visible=g(A)||A>=w.revealAt&&!Mt[A].alone;(g(A)||A>=m("similar"))&&we(),Q(),i.touch(3)},Te.boxOf=A=>{const z=new un;for(const Z of A){const w=v.get(Z),V=S.find(B=>B.id===Z);if(w)z.union(w.box());else if(V)z.union(V.box);else throw new Error(`nothing called "${Z}" to frame`)}return z},U(),Te}const ct=i=>document.getElementById(i),ko=ct("stage");let Es;try{Es=new f0(ko,ct("gl"),ct("labels"))}catch(i){throw ct("loading-text").textContent="This page needs WebGL, which this browser has turned off or does not support.",i}const Q0=window.matchMedia("(prefers-reduced-motion: reduce)"),ls=()=>Q0.matches||new URLSearchParams(location.search).has("still");let kt=null,Jt=0;const gh=ps.map((i,e)=>Mt.findIndex(t=>t.chapter===e)),Wa=ct("chapters");ps.forEach((i,e)=>{const t=document.createElement("button");t.type="button";const n=Mt.filter(s=>s.chapter===e).map(()=>"<i></i>").join("");t.innerHTML=`<span class="n">${e===0||e===ps.length-1?"":e}</span><span>${i}</span><span class="dots">${n}</span>`,t.addEventListener("click",()=>Ms(gh[e])),Wa.append(t)});function er(i,e){Jt=i;const t=Mt[i];ct("step-chapter").textContent=t.chapter===0||t.chapter===ps.length-1?ps[t.chapter]:`Chapter ${t.chapter}: ${ps[t.chapter]}`,ct("step-title").textContent=t.title,ct("step-body").innerHTML=t.body,ct("step").scrollTop=0,ct("count").textContent=`${i+1} / ${Mt.length}`,ct("back").disabled=i===0,ct("next").disabled=i===Mt.length-1,[...Wa.children].forEach((n,s)=>{n.classList.toggle("current",s===t.chapter),s===t.chapter&&Wa.scrollWidth>Wa.clientWidth&&n.scrollIntoView({inline:"center",block:"nearest"}),n.querySelectorAll(".dots i").forEach((a,r)=>{const o=gh[s]+r;a.classList.toggle("done",o<i),a.classList.toggle("now",o===i)})});try{location.hash.slice(1)!==t.id&&history.replaceState(null,"",`#${t.id}`)}catch{}ct("layerbar").hidden=!t.slider,ct("head-wrap").hidden=!t.heads,kt&&(kt.setStep(i,e),Es.frame(vh(),new I(...t.view.dir),t.view.pad,e?0:1.3,t.view.room))}function vh(){var t;const i=Mt[Jt],e=kt.boxOf(i.view.ids);return i.slider&&!((t=i.view.room)!=null&&t.top)&&(e.max.y+=(e.max.y-e.min.y)*.22),i.plot&&(e.min.x-=Math.min(26,(e.max.x-e.min.x)*.22)),e}const ui=ct("layer"),cs=ct("head");function eg(i){const e=Mt[Jt].slider;if(e==="round"){const n=(1-i.round/i.rounds).toFixed(1),s=i.round===0?"Before round 1":`After round ${i.round} of ${i.rounds}`;return{value:i.round,last:i.rounds,html:`${s} <small>noise level ${n}</small>`}}if(e==="noise")return{value:i.noise,last:i.levels.length-1,html:`Noise level ${i.levels[i.noise]}`};if(e==="vision")return{value:i.vision,last:i.visionLayers-1,html:`After layer ${i.vision+1} of ${i.visionLayers}`};const t=Mt[Jt].chapter===6?` <small>${i.looksAtActions?"looks at the sequence and earlier actions":"looks at the sequence only"}</small>`:"";return{value:i.layer,last:i.layers-1,html:`Layer ${i.layer+1} of ${i.layers}${t}`}}function tg(i){const e=eg(i);if(ui.min="0",ui.max=String(e.last),ui.value=String(e.value),ui.setAttribute("aria-label",Mt[Jt].slider==="round"?"Round":Mt[Jt].slider==="noise"?"Noise level":"Layer"),ct("layer-prev").disabled=e.value===0,ct("layer-next").disabled=e.value===e.last,ct("layer-text").innerHTML=e.html,cs.options.length===0){cs.add(new Option(`all ${i.heads}, averaged`,"-1"));for(let t=0;t<i.heads;t++)cs.add(new Option(`head ${t+1}`,String(t)))}cs.value=String(i.head)}function ms(i,e=Mt[Jt].slider,t){kt&&(e==="round"?kt.setRound(i,ls()):e==="noise"?kt.setNoise(i):e==="vision"?kt.setVisionLayer(i,ls()):(kt.setLayer(i,ls()),t!==void 0&&kt.setHead(t),Es.follow(vh(),ls()?0:.45)))}ui.addEventListener("input",()=>ms(Number(ui.value)));ct("layer-prev").addEventListener("click",()=>ms(Number(ui.value)-1));ct("layer-next").addEventListener("click",()=>ms(Number(ui.value)+1));cs.addEventListener("change",()=>kt==null?void 0:kt.setHead(Number(cs.value)));ct("step-body").addEventListener("click",i=>{const e=i.target.closest("a.jump");if(!e)return;i.preventDefault();const t=e.dataset;t.round!==void 0?ms(Number(t.round),"round"):t.vlayer!==void 0?ms(Number(t.vlayer),"vision"):ms(Number(t.layer),"layer",t.head===void 0?void 0:Number(t.head))});function Ms(i){const e=Math.min(Mt.length-1,Math.max(0,i));e!==Jt&&er(e,ls())}ct("back").addEventListener("click",()=>Ms(Jt-1));ct("next").addEventListener("click",()=>Ms(Jt+1));ct("reset").addEventListener("click",()=>er(Jt,ls()));window.addEventListener("keydown",i=>{i.metaKey||i.ctrlKey||i.altKey||i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement||(i.key==="ArrowRight"||i.key==="PageDown"?Ms(Jt+1):(i.key==="ArrowLeft"||i.key==="PageUp")&&Ms(Jt-1))});const xh=()=>Mt.findIndex(i=>i.id===location.hash.slice(1));window.addEventListener("hashchange",()=>{const i=xh();i>=0&&Ms(i)});const $s=ct("tip");Es.onHover=i=>{const e=kt?kt.hover(i):null;if($s.classList.toggle("on",!!(i&&e)),!i||!e)return;$s.innerHTML=e;const t=14,n=$s.offsetWidth,s=$s.offsetHeight,a=i.x+t+n>ko.clientWidth?i.x-t-n:i.x+t,r=i.y+t+s>ko.clientHeight?i.y-t-s:i.y+t;$s.style.transform=`translate(${Math.max(4,a)}px, ${Math.max(4,r)}px)`};const yh=()=>Es.applyTheme();window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",yh);new MutationObserver(yh).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});er(Math.max(0,xh()),!0);J0(Es,(i,e)=>{ct("loading-text").textContent=`Loading the model's numbers ${i} / ${e}`}).then(i=>{kt=i,kt.onStack=tg,er(Jt,!0),ct("loading").classList.add("done")}).catch(i=>{console.error(i),ct("loading-text").textContent="The model's numbers could not be loaded. Reload the page to try again."});
