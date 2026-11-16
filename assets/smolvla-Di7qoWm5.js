var id=Object.defineProperty;var sd=(i,e,t)=>e in i?id(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var je=(i,e,t)=>sd(i,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Is={ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,Pl=1,rd=2,lh=1,od=2,li=3,Ui=0,hn=1,Yn=2,Li=0,Ns=1,Ll=2,Dl=3,Ul=4,ld=5,Xi=100,cd=101,hd=102,dd=103,ud=104,fd=200,pd=201,md=202,_d=203,vo=204,xo=205,gd=206,vd=207,xd=208,yd=209,bd=210,Md=211,Sd=212,wd=213,Ed=214,yo=0,bo=1,Mo=2,zs=3,So=4,wo=5,Eo=6,To=7,ch=0,Td=1,Ad=2,Di=0,Rd=1,Cd=2,Pd=3,Ld=4,Dd=5,Ud=6,Id=7,hh=300,Hs=301,Gs=302,Ao=303,Ro=304,yr=306,Co=1e3,Yi=1001,Po=1002,dn=1003,Nd=1004,Ta=1005,kn=1006,wr=1007,hi=1008,Kn=1009,dh=1010,uh=1011,va=1012,fl=1013,Zi=1014,di=1015,ya=1016,pl=1017,ml=1018,Vs=1020,fh=35902,ph=1021,mh=1022,wn=1023,_h=1024,gh=1025,Fs=1026,$s=1027,vh=1028,_l=1029,xh=1030,gl=1031,vl=1033,rr=33776,or=33777,lr=33778,cr=33779,Lo=35840,Do=35841,Uo=35842,Io=35843,No=36196,Fo=37492,Oo=37496,ko=37808,Bo=37809,zo=37810,Ho=37811,Go=37812,Vo=37813,$o=37814,Wo=37815,Xo=37816,qo=37817,Yo=37818,jo=37819,Zo=37820,Ko=37821,hr=36492,Jo=36494,Qo=36495,yh=36283,el=36284,tl=36285,nl=36286,Fd=3200,Od=3201,kd=0,Bd=1,jn="",Mn="srgb",Qi="srgb-linear",br="linear",vt="srgb",ns=7680,Il=519,zd=512,Hd=513,Gd=514,bh=515,Vd=516,$d=517,Wd=518,Xd=519,il=35044,Nl="300 es",ui=2e3,fr=2001;class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fl=1234567;const _a=Math.PI/180,xa=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Yt(i,e,t){return Math.max(e,Math.min(t,i))}function xl(i,e){return(i%e+e)%e}function qd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yd(i,e,t){return i!==e?(t-i)/(e-i):0}function ga(i,e,t){return(1-t)*i+t*e}function jd(i,e,t,n){return ga(i,e,1-Math.exp(-t*n))}function Zd(i,e=1){return e-Math.abs(xl(i,e*2)-e)}function Kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function eu(i,e){return i+Math.random()*(e-i)}function tu(i){return i*(.5-Math.random())}function nu(i){i!==void 0&&(Fl=i);let e=Fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iu(i){return i*_a}function su(i){return i*xa}function au(i){return(i&i-1)===0&&i!==0}function ru(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lu(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),h=r((e+n)/2),u=a((e-n)/2),f=r((e-n)/2),p=a((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yl={DEG2RAD:_a,RAD2DEG:xa,generateUUID:fi,clamp:Yt,euclideanModulo:xl,mapLinear:qd,inverseLerp:Yd,lerp:ga,damp:jd,pingpong:Zd,smoothstep:Kd,smootherstep:Jd,randInt:Qd,randFloat:eu,randFloatSpread:tu,seededRandom:nu,degToRad:iu,radToDeg:su,isPowerOfTwo:au,ceilPowerOfTwo:ru,floorPowerOfTwo:ou,setQuaternionFromProperEuler:lu,normalize:pt,denormalize:Fn};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,s,a,r,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],A=s[1],E=s[4],M=s[7],G=s[2],D=s[5],T=s[8];return a[0]=r*v+o*A+l*G,a[3]=r*m+o*E+l*D,a[6]=r*d+o*M+l*T,a[1]=c*v+h*A+u*G,a[4]=c*m+h*E+u*D,a[7]=c*d+h*M+u*T,a[2]=f*v+p*A+g*G,a[5]=f*m+p*E+g*D,a[8]=f*d+p*M+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,f=o*l-h*a,p=c*a-r*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*r)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*a-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Er.makeScale(e,t)),this}rotate(e){return this.premultiply(Er.makeRotation(-e)),this}translate(e,t){return this.premultiply(Er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new Ke;function Mh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cu(){const i=pr("canvas");return i.style.display="block",i}const Ol={};function pa(i){i in Ol||(Ol[i]=!0,console.warn(i))}function hu(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function du(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const at={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===jn?br:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const kl=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],zl=[.3127,.329],Hl=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gl=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);at.define({[Qi]:{primaries:kl,whitePoint:zl,transfer:br,toXYZ:Hl,fromXYZ:Gl,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:kl,whitePoint:zl,transfer:vt,toXYZ:Hl,fromXYZ:Gl,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});let is;class fu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{is===void 0&&(is=pr("canvas")),is.width=e.width,is.height=e.height;const n=is.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=pi(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pu=0;class Sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Tr(s[r].image)):a.push(Tr(s[r]))}else a=Tr(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mu=0;class Jt extends es{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Yi,s=Yi,a=kn,r=hi,o=wn,l=Kn,c=Jt.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=fi(),this.name="",this.source=new Sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=hh;Jt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(p+1)/2,G=(d+1)/2,D=(h+f)/4,T=(u+v)/4,P=(g+m)/4;return E>M&&E>G?E<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(E),s=D/n,a=T/n):M>G?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=D/s,a=P/s):G<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(G),n=T/a,s=P/a),this.set(n,s,a,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-v)/A,this.z=(f-h)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _u extends es{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends _u{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wh extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gu extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=a[r+0],p=a[r+1],g=a[r+2],v=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*v,A=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const G=Math.sqrt(E),D=Math.atan2(G,d*A);m=Math.sin(m*D)/G,o=Math.sin(o*D)/G}const M=o*A;if(l=l*m+f*M,c=c*m+p*M,h=h*m+g*M,u=u*m+v*M,m===1-o){const G=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=G,c*=G,h*=G,u*=G}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=a[r],f=a[r+1],p=a[r+2],g=a[r+3];return e[t]=o*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-o*p,e[t+2]=c*g+h*p+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(a/2),f=l(n/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),h=2*(o*t-a*s),u=2*(a*n-r*t);return this.x=t+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=s+l*u+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ar.copy(this).projectOnVector(e),this.sub(Ar)}reflect(e){return this.sub(Ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new U,Vl=new Ji;class En{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Cn):Cn.fromBufferAttribute(a,r),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Ra.subVectors(this.max,ta),ss.subVectors(e.a,ta),as.subVectors(e.b,ta),rs.subVectors(e.c,ta),vi.subVectors(as,ss),xi.subVectors(rs,as),Ii.subVectors(ss,rs);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Ii.z,Ii.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Ii.z,0,-Ii.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Ii.y,Ii.x,0];return!Rr(t,ss,as,rs,Ra)||(t=[1,0,0,0,1,0,0,0,1],!Rr(t,ss,as,rs,Ra))?!1:(Ca.crossVectors(vi,xi),t=[Ca.x,Ca.y,Ca.z],Rr(t,ss,as,rs,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new U,new U,new U,new U,new U,new U,new U,new U],Cn=new U,Aa=new En,ss=new U,as=new U,rs=new U,vi=new U,xi=new U,Ii=new U,ta=new U,Ra=new U,Ca=new U,Ni=new U;function Rr(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Ni.fromArray(i,a);const o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vu=new En,na=new U,Cr=new U;class js{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vu.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(na,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Cr)),this.expandByPoint(na.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new U,Pr=new U,Pa=new U,yi=new U,Lr=new U,La=new U,Dr=new U;class Mr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pr.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(Pr);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Pa),o=yi.dot(this.direction),l=-yi.dot(Pa),c=yi.lengthSq(),h=Math.abs(1-r*r);let u,f,p,g;if(h>0)if(u=r*l-o,f=r*o-l,g=a*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,p=u*(u+r*f+2*o)+f*(r*u+f+2*l)+c}else f=a,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*l)+c;else f=-a,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-r*a+o)),f=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(u=Math.max(0,-(r*a+o)),f=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+f*(f+2*l)+c);else f=r>0?-a:a,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pr).addScaledVector(Pa,f),p}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const n=ti.dot(this.direction),s=ti.dot(ti)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,s,a){Lr.subVectors(t,e),La.subVectors(n,e),Dr.crossVectors(Lr,La);let r=this.direction.dot(Dr),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;yi.subVectors(this.origin,e);const l=o*this.direction.dot(La.crossVectors(yi,La));if(l<0)return null;const c=o*this.direction.dot(Lr.cross(yi));if(c<0||l+c>r)return null;const h=-o*yi.dot(Dr);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,n,s,a,r,o,l,c,h,u,f,p,g,v,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,h,u,f,p,g,v,m)}set(e,t,n,s,a,r,o,l,c,h,u,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),a=1/os.setFromMatrixColumn(e,1).length(),r=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const f=r*h,p=r*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-r*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=v-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*h,p=r*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=r*l,p=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=r*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xu,e,yu)}lookAt(e,t,n){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),bi.crossVectors(n,pn),bi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),bi.crossVectors(n,pn)),bi.normalize(),Da.crossVectors(pn,bi),s[0]=bi.x,s[4]=Da.x,s[8]=pn.x,s[1]=bi.y,s[5]=Da.y,s[9]=pn.y,s[2]=bi.z,s[6]=Da.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],A=n[3],E=n[7],M=n[11],G=n[15],D=s[0],T=s[4],P=s[8],S=s[12],y=s[1],C=s[5],V=s[9],$=s[13],Q=s[2],ae=s[6],j=s[10],se=s[14],Z=s[3],pe=s[7],X=s[11],he=s[15];return a[0]=r*D+o*y+l*Q+c*Z,a[4]=r*T+o*C+l*ae+c*pe,a[8]=r*P+o*V+l*j+c*X,a[12]=r*S+o*$+l*se+c*he,a[1]=h*D+u*y+f*Q+p*Z,a[5]=h*T+u*C+f*ae+p*pe,a[9]=h*P+u*V+f*j+p*X,a[13]=h*S+u*$+f*se+p*he,a[2]=g*D+v*y+m*Q+d*Z,a[6]=g*T+v*C+m*ae+d*pe,a[10]=g*P+v*V+m*j+d*X,a[14]=g*S+v*$+m*se+d*he,a[3]=A*D+E*y+M*Q+G*Z,a[7]=A*T+E*C+M*ae+G*pe,a[11]=A*P+E*V+M*j+G*X,a[15]=A*S+E*$+M*se+G*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+a*l*u-s*c*u-a*o*f+n*c*f+s*o*p-n*l*p)+v*(+t*l*p-t*c*f+a*r*f-s*r*p+s*c*h-a*l*h)+m*(+t*c*u-t*o*p-a*r*u+n*r*p+a*o*h-n*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*r*u-n*r*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],A=u*m*c-v*f*c+v*l*p-o*m*p-u*l*d+o*f*d,E=g*f*c-h*m*c-g*l*p+r*m*p+h*l*d-r*f*d,M=h*v*c-g*u*c+g*o*p-r*v*p-h*o*d+r*u*d,G=g*u*l-h*v*l-g*o*f+r*v*f+h*o*m-r*u*m,D=t*A+n*E+s*M+a*G;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/D;return e[0]=A*T,e[1]=(v*f*a-u*m*a-v*s*p+n*m*p+u*s*d-n*f*d)*T,e[2]=(o*m*a-v*l*a+v*s*c-n*m*c-o*s*d+n*l*d)*T,e[3]=(u*l*a-o*f*a-u*s*c+n*f*c+o*s*p-n*l*p)*T,e[4]=E*T,e[5]=(h*m*a-g*f*a+g*s*p-t*m*p-h*s*d+t*f*d)*T,e[6]=(g*l*a-r*m*a-g*s*c+t*m*c+r*s*d-t*l*d)*T,e[7]=(r*f*a-h*l*a+h*s*c-t*f*c-r*s*p+t*l*p)*T,e[8]=M*T,e[9]=(g*u*a-h*v*a-g*n*p+t*v*p+h*n*d-t*u*d)*T,e[10]=(r*v*a-g*o*a+g*n*c-t*v*c-r*n*d+t*o*d)*T,e[11]=(h*o*a-r*u*a-h*n*c+t*u*c+r*n*p-t*o*p)*T,e[12]=G*T,e[13]=(h*v*s-g*u*s+g*n*f-t*v*f-h*n*m+t*u*m)*T,e[14]=(g*o*s-r*v*s-g*n*l+t*v*l+r*n*m-t*o*m)*T,e[15]=(r*u*s-h*o*s+h*n*l-t*u*l-r*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,u=o+o,f=a*c,p=a*h,g=a*u,v=r*h,m=r*u,d=o*u,A=l*c,E=l*h,M=l*u,G=n.x,D=n.y,T=n.z;return s[0]=(1-(v+d))*G,s[1]=(p+M)*G,s[2]=(g-E)*G,s[3]=0,s[4]=(p-M)*D,s[5]=(1-(f+d))*D,s[6]=(m+A)*D,s[7]=0,s[8]=(g+E)*T,s[9]=(m-A)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=os.set(s[0],s[1],s[2]).length();const r=os.set(s[4],s[5],s[6]).length(),o=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const c=1/a,h=1/r,u=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=ui){const l=this.elements,c=2*a/(t-e),h=2*a/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let p,g;if(o===ui)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===fr)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=ui){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(r-a),f=(t+e)*c,p=(n+s)*h;let g,v;if(o===ui)g=(r+a)*u,v=-2*u;else if(o===fr)g=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const os=new U,Pn=new Rt,xu=new U(0,0,0),yu=new U(1,1,1),bi=new U,Da=new U,pn=new U,$l=new Rt,Wl=new Ji;class mi{constructor(e=0,t=0,n=0,s=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bu=0;const Xl=new U,ls=new Ji,ni=new Rt,Ua=new U,ia=new U,Mu=new U,Su=new Ji,ql=new U(1,0,0),Yl=new U(0,1,0),jl=new U(0,0,1),Zl={type:"added"},wu={type:"removed"},cs={type:"childadded",child:null},Ur={type:"childremoved",child:null};class un extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new U,t=new mi,n=new Ji,s=new U(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ke}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(ia,Ua,this.up):ni.lookAt(Ua,ia,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(ni),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zl),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wu),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zl),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,Mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,Su,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),f=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}un.DEFAULT_UP=new U(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new U,ii=new U,Ir=new U,si=new U,hs=new U,ds=new U,Kl=new U,Nr=new U,Fr=new U,Or=new U,kr=new mt,Br=new mt,zr=new mt;class On{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Ln.subVectors(s,t),ii.subVectors(n,t),Ir.subVectors(e,t);const r=Ln.dot(Ln),o=Ln.dot(ii),l=Ln.dot(Ir),c=ii.dot(ii),h=ii.dot(Ir),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(r*h-o*l)*f;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,si.x),l.addScaledVector(r,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return kr.setScalar(0),Br.setScalar(0),zr.setScalar(0),kr.fromBufferAttribute(e,t),Br.fromBufferAttribute(e,n),zr.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(kr,a.x),r.addScaledVector(Br,a.y),r.addScaledVector(zr,a.z),r}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),ii.subVectors(e,t),Ln.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Ln.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return On.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;hs.subVectors(s,n),ds.subVectors(a,n),Nr.subVectors(e,n);const l=hs.dot(Nr),c=ds.dot(Nr);if(l<=0&&c<=0)return t.copy(n);Fr.subVectors(e,s);const h=hs.dot(Fr),u=ds.dot(Fr);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(hs,r);Or.subVectors(e,a);const p=hs.dot(Or),g=ds.dot(Or);if(g>=0&&p<=g)return t.copy(a);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ds,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Kl.subVectors(a,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Kl,o);const d=1/(m+v+f);return r=v*d,o=f*d,t.copy(n).addScaledVector(hs,r).addScaledVector(ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Hr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=xl(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Hr(r,a,e+1/3),this.g=Hr(r,a,e),this.b=Hr(r,a,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=Mn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=Eh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return at.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Yt(Zt.r*255,0,255))*65536+Math.round(Yt(Zt.g*255,0,255))*256+Math.round(Yt(Zt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,a=Zt.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Mn){at.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Ia);const n=ga(Mi.h,Ia.h,t),s=ga(Mi.s,Ia.s,t),a=ga(Mi.l,Ia.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new tt;tt.NAMES=Eh;let Eu=0;class ba extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=fi(),this.name="",this.blending=Ns,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=xo,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Th extends ba{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new U,Na=new qe;class Hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=il,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),a=pt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),e}}class Ah extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rh extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gn extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tu=0;const vn=new Rt,Gr=new un,us=new U,mn=new En,sa=new En,Bt=new U;class Tn extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Rh:Ah)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ke().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Gr.lookAt(e),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Gn(n,3))}else{for(let n=0,s=t.count;n<s;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];mn.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(mn.min,sa.min),mn.expandByPoint(Bt),Bt.addVectors(mn.max,sa.max),mn.expandByPoint(Bt)):(mn.expandByPoint(sa.min),mn.expandByPoint(sa.max))}mn.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Bt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Bt.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),Bt.add(us)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new U,l[P]=new U;const c=new U,h=new U,u=new U,f=new qe,p=new qe,g=new qe,v=new U,m=new U;function d(P,S,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),f.fromBufferAttribute(a,P),p.fromBufferAttribute(a,S),g.fromBufferAttribute(a,y),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(v),o[S].add(v),o[y].add(v),l[P].add(m),l[S].add(m),l[y].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let P=0,S=A.length;P<S;++P){const y=A[P],C=y.start,V=y.count;for(let $=C,Q=C+V;$<Q;$+=3)d(e.getX($+0),e.getX($+1),e.getX($+2))}const E=new U,M=new U,G=new U,D=new U;function T(P){G.fromBufferAttribute(s,P),D.copy(G);const S=o[P];E.copy(S),E.sub(G.multiplyScalar(G.dot(S))).normalize(),M.crossVectors(D,S);const C=M.dot(l[P])<0?-1:1;r.setXYZW(P,E.x,E.y,E.z,C)}for(let P=0,S=A.length;P<S;++P){const y=A[P],C=y.start,V=y.count;for(let $=C,Q=C+V;$<Q;$+=3)T(e.getX($+0)),T(e.getX($+1)),T(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new U,a=new U,r=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Hn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new Rt,Fi=new Mr,Fa=new js,Ql=new U,Oa=new U,ka=new U,Ba=new U,Vr=new U,za=new U,ec=new U,Ha=new U;class Bn extends un{constructor(e=new Tn,t=new Th){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){za.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(Vr.fromBufferAttribute(u,e),r?za.addScaledVector(Vr,h):za.addScaledVector(Vr.sub(t),h))}t.add(za)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(a),Fi.copy(e.ray).recast(e.near),!(Fa.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Fa,Ql)===null||Fi.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(Jl.copy(a).invert(),Fi.copy(e.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=r[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,G=E;M<G;M+=3){const D=o.getX(M),T=o.getX(M+1),P=o.getX(M+2);s=Ga(this,d,e,n,c,h,u,D,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const A=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=Ga(this,r,e,n,c,h,u,A,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=r[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=A,G=E;M<G;M+=3){const D=M,T=M+1,P=M+2;s=Ga(this,d,e,n,c,h,u,D,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const A=m,E=m+1,M=m+2;s=Ga(this,r,e,n,c,h,u,A,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Au(i,e,t,n,s,a,r,o){let l;if(e.side===hn?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===Ui,o),l===null)return null;Ha.copy(o),Ha.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:i}}function Ga(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,Oa),i.getVertexPosition(l,ka),i.getVertexPosition(c,Ba);const h=Au(i,e,t,n,Oa,ka,Ba,ec);if(h){const u=new U;On.getBarycoord(ec,Oa,ka,Ba,u),s&&(h.uv=On.getInterpolatedAttribute(s,o,l,c,u,new qe)),a&&(h.uv1=On.getInterpolatedAttribute(a,o,l,c,u,new qe)),r&&(h.normal=On.getInterpolatedAttribute(r,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};On.getNormal(Oa,ka,Ba,f.normal),h.face=f,h.barycoord=u}return h}class Ma extends Tn{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new Gn(c,3)),this.setAttribute("normal",new Gn(h,3)),this.setAttribute("uv",new Gn(u,2));function g(v,m,d,A,E,M,G,D,T,P,S){const y=M/T,C=G/P,V=M/2,$=G/2,Q=D/2,ae=T+1,j=P+1;let se=0,Z=0;const pe=new U;for(let X=0;X<j;X++){const he=X*C-$;for(let Ae=0;Ae<ae;Ae++){const Le=Ae*y-V;pe[v]=Le*A,pe[m]=he*E,pe[d]=Q,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[m]=0,pe[d]=D>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Ae/T),u.push(1-X/P),se+=1}}for(let X=0;X<P;X++)for(let he=0;he<T;he++){const Ae=f+he+ae*X,Le=f+he+ae*(X+1),q=f+(he+1)+ae*(X+1),te=f+(he+1)+ae*X;l.push(Ae,Le,te),l.push(Le,q,te),Z+=6}o.addGroup(p,Z,S),p+=Z,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){const e={};for(let t=0;t<i.length;t++){const n=Ws(i[t]);for(const s in n)e[s]=n[s]}return e}function Ru(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ch(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Ml={clone:Ws,merge:tn};var Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends ba{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Ru(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ph extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new U,tc=new qe,nc=new qe;class Sn extends Ph{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,tc,nc),t.subVectors(nc,tc)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_a*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ps=1;class Lu extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(fs,ps,e,t);s.layers=this.layers,this.add(s);const a=new Sn(fs,ps,e,t);a.layers=this.layers,this.add(a);const r=new Sn(fs,ps,e,t);r.layers=this.layers,this.add(r);const o=new Sn(fs,ps,e,t);o.layers=this.layers,this.add(o);const l=new Sn(fs,ps,e,t);l.layers=this.layers,this.add(l);const c=new Sn(fs,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lh extends Jt{constructor(e,t,n,s,a,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Du extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ma(5,5,5),a=new Jn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Li});a.uniforms.tEquirect.value=t;const r=new Bn(s,a),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=kn),new Lu(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const $r=new U,Uu=new U,Iu=new Ke;class Ri{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$r.subVectors(n,t).cross(Uu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($r),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Iu.getNormalMatrix(e),s=this.coplanarPoint($r).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new js,Va=new U;class Dh{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,a=new Ri,r=new Ri){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui){const n=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],A=s[13],E=s[14],M=s[15];if(n[0].setComponents(l-a,f-c,m-p,M-d).normalize(),n[1].setComponents(l+a,f+c,m+p,M+d).normalize(),n[2].setComponents(l+r,f+h,m+g,M+A).normalize(),n[3].setComponents(l-r,f-h,m-g,M-A).normalize(),n[4].setComponents(l-o,f-u,m-v,M-E).normalize(),t===ui)n[5].setComponents(l+o,f+u,m+v,M+E).normalize();else if(t===fr)n[5].setComponents(o,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Va.x=s.normal.x>0?e.max.x:e.min.x,Va.y=s.normal.y>0?e.max.y:e.min.y,Va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uh(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Nu(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}class Sa extends Tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const A=d*f-r;for(let E=0;E<c;E++){const M=E*u-a;g.push(M,-A,0),v.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){const E=A+c*d,M=A+c*(d+1),G=A+1+c*(d+1),D=A+1+c*d;p.push(E,M,D),p.push(M,G,D)}this.setIndex(p),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(v,3)),this.setAttribute("uv",new Gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ou=`#ifdef USE_ALPHAHASH
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
#endif`,ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gu=`#ifdef USE_AOMAP
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
#endif`,Vu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$u=`#ifdef USE_BATCHING
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
#endif`,Wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ju=`#ifdef USE_IRIDESCENCE
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
#endif`,Zu=`#ifdef USE_BUMPMAP
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rf=`#define PI 3.141592653589793
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
} // validated`,of=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lf=`vec3 transformedNormal = objectNormal;
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
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wf=`#ifdef USE_GRADIENTMAP
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
}`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
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
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,If=`PhysicalMaterial material;
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
#endif`,Nf=`struct PhysicalMaterial {
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
}`,Ff=`
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xf=`#if defined( USE_POINTS_UV )
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
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
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
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bp=`float getShadowMask() {
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
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
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
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
}`,$p=`#define DISTANCE
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
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
}`,jp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Jp=`#define LAMBERT
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
}`,Qp=`#define LAMBERT
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
}`,em=`#define MATCAP
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
}`,tm=`#define MATCAP
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
}`,nm=`#define NORMAL
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
}`,im=`#define NORMAL
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
}`,sm=`#define PHONG
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
}`,am=`#define PHONG
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
}`,rm=`#define STANDARD
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
}`,om=`#define STANDARD
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
}`,lm=`#define TOON
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
}`,cm=`#define TOON
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
}`,hm=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,fm=`uniform vec3 color;
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
}`,pm=`uniform float rotation;
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
}`,mm=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Fu,alphahash_pars_fragment:Ou,alphamap_fragment:ku,alphamap_pars_fragment:Bu,alphatest_fragment:zu,alphatest_pars_fragment:Hu,aomap_fragment:Gu,aomap_pars_fragment:Vu,batching_pars_vertex:$u,batching_vertex:Wu,begin_vertex:Xu,beginnormal_vertex:qu,bsdfs:Yu,iridescence_fragment:ju,bumpmap_pars_fragment:Zu,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:Ju,clipping_planes_pars_vertex:Qu,clipping_planes_vertex:ef,color_fragment:tf,color_pars_fragment:nf,color_pars_vertex:sf,color_vertex:af,common:rf,cube_uv_reflection_fragment:of,defaultnormal_vertex:lf,displacementmap_pars_vertex:cf,displacementmap_vertex:hf,emissivemap_fragment:df,emissivemap_pars_fragment:uf,colorspace_fragment:ff,colorspace_pars_fragment:pf,envmap_fragment:mf,envmap_common_pars_fragment:_f,envmap_pars_fragment:gf,envmap_pars_vertex:vf,envmap_physical_pars_fragment:Cf,envmap_vertex:xf,fog_vertex:yf,fog_pars_vertex:bf,fog_fragment:Mf,fog_pars_fragment:Sf,gradientmap_pars_fragment:wf,lightmap_pars_fragment:Ef,lights_lambert_fragment:Tf,lights_lambert_pars_fragment:Af,lights_pars_begin:Rf,lights_toon_fragment:Pf,lights_toon_pars_fragment:Lf,lights_phong_fragment:Df,lights_phong_pars_fragment:Uf,lights_physical_fragment:If,lights_physical_pars_fragment:Nf,lights_fragment_begin:Ff,lights_fragment_maps:Of,lights_fragment_end:kf,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:Gf,map_fragment:Vf,map_pars_fragment:$f,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:jf,morphcolor_vertex:Zf,morphnormal_vertex:Kf,morphtarget_pars_vertex:Jf,morphtarget_vertex:Qf,normal_fragment_begin:ep,normal_fragment_maps:tp,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:sp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:lp,iridescence_pars_fragment:cp,opaque_fragment:hp,packing:dp,premultiplied_alpha_fragment:up,project_vertex:fp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:xp,shadowmap_vertex:yp,shadowmask_pars_fragment:bp,skinbase_vertex:Mp,skinning_pars_vertex:Sp,skinning_vertex:wp,skinnormal_vertex:Ep,specularmap_fragment:Tp,specularmap_pars_fragment:Ap,tonemapping_fragment:Rp,tonemapping_pars_fragment:Cp,transmission_fragment:Pp,transmission_pars_fragment:Lp,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Ip,worldpos_vertex:Np,background_vert:Fp,background_frag:Op,backgroundCube_vert:kp,backgroundCube_frag:Bp,cube_vert:zp,cube_frag:Hp,depth_vert:Gp,depth_frag:Vp,distanceRGBA_vert:$p,distanceRGBA_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:jp,meshbasic_vert:Zp,meshbasic_frag:Kp,meshlambert_vert:Jp,meshlambert_frag:Qp,meshmatcap_vert:em,meshmatcap_frag:tm,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:am,meshphysical_vert:rm,meshphysical_frag:om,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:dm,shadow_vert:um,shadow_frag:fm,sprite_vert:pm,sprite_frag:mm},be={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},cn={basic:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:tn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:tn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:tn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new tt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:tn([be.points,be.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:tn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:tn([be.common,be.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:tn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:tn([be.sprite,be.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:tn([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:tn([be.lights,be.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};cn.physical={uniforms:tn([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const $a={r:0,b:0,g:0},ki=new mi,_m=new Rt;function gm(i,e,t,n,s,a,r){const o=new tt(0);let l=a===!0?0:1,c,h,u=null,f=0,p=null;function g(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function v(A){let E=!1;const M=g(A);M===null?d(o,l):M&&M.isColor&&(d(M,1),E=!0);const G=i.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,r):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,E){const M=g(E);M&&(M.isCubeTexture||M.mapping===yr)?(h===void 0&&(h=new Bn(new Ma(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Ws(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,D,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(E.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(ki)),h.material.toneMapped=at.getTransfer(M.colorSpace)!==vt,(u!==M||f!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Bn(new Sa(2,2),new Jn({name:"BackgroundMaterial",uniforms:Ws(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=at.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,E){A.getRGB($a,Ch(i)),n.buffers.color.setClear($a.r,$a.g,$a.b,E,r)}return{getClearColor:function(){return o},setClearColor:function(A,E=1){o.set(A),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:v,addToRenderList:m}}function vm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let a=s,r=!1;function o(y,C,V,$,Q){let ae=!1;const j=u($,V,C);a!==j&&(a=j,c(a.object)),ae=p(y,$,V,Q),ae&&g(y,$,V,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(ae||r)&&(r=!1,M(y,C,V,$),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,V){const $=V.wireframe===!0;let Q=n[y.id];Q===void 0&&(Q={},n[y.id]=Q);let ae=Q[C.id];ae===void 0&&(ae={},Q[C.id]=ae);let j=ae[$];return j===void 0&&(j=f(l()),ae[$]=j),j}function f(y){const C=[],V=[],$=[];for(let Q=0;Q<t;Q++)C[Q]=0,V[Q]=0,$[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:V,attributeDivisors:$,object:y,attributes:{},index:null}}function p(y,C,V,$){const Q=a.attributes,ae=C.attributes;let j=0;const se=V.getAttributes();for(const Z in se)if(se[Z].location>=0){const X=Q[Z];let he=ae[Z];if(he===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),X===void 0||X.attribute!==he||he&&X.data!==he.data)return!0;j++}return a.attributesNum!==j||a.index!==$}function g(y,C,V,$){const Q={},ae=C.attributes;let j=0;const se=V.getAttributes();for(const Z in se)if(se[Z].location>=0){let X=ae[Z];X===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(X=y.instanceColor));const he={};he.attribute=X,X&&X.data&&(he.data=X.data),Q[Z]=he,j++}a.attributes=Q,a.attributesNum=j,a.index=$}function v(){const y=a.newAttributes;for(let C=0,V=y.length;C<V;C++)y[C]=0}function m(y){d(y,0)}function d(y,C){const V=a.newAttributes,$=a.enabledAttributes,Q=a.attributeDivisors;V[y]=1,$[y]===0&&(i.enableVertexAttribArray(y),$[y]=1),Q[y]!==C&&(i.vertexAttribDivisor(y,C),Q[y]=C)}function A(){const y=a.newAttributes,C=a.enabledAttributes;for(let V=0,$=C.length;V<$;V++)C[V]!==y[V]&&(i.disableVertexAttribArray(V),C[V]=0)}function E(y,C,V,$,Q,ae,j){j===!0?i.vertexAttribIPointer(y,C,V,Q,ae):i.vertexAttribPointer(y,C,V,$,Q,ae)}function M(y,C,V,$){v();const Q=$.attributes,ae=V.getAttributes(),j=C.defaultAttributeValues;for(const se in ae){const Z=ae[se];if(Z.location>=0){let pe=Q[se];if(pe===void 0&&(se==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),se==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),pe!==void 0){const X=pe.normalized,he=pe.itemSize,Ae=e.get(pe);if(Ae===void 0)continue;const Le=Ae.buffer,q=Ae.type,te=Ae.bytesPerElement,xe=q===i.INT||q===i.UNSIGNED_INT||pe.gpuType===fl;if(pe.isInterleavedBufferAttribute){const ye=pe.data,Ne=ye.stride,ze=pe.offset;if(ye.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Z.locationSize;Ve++)d(Z.location+Ve,ye.meshPerAttribute);y.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ve=0;Ve<Z.locationSize;Ve++)m(Z.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Ve=0;Ve<Z.locationSize;Ve++)E(Z.location+Ve,he/Z.locationSize,q,X,Ne*te,(ze+he/Z.locationSize*Ve)*te,xe)}else{if(pe.isInstancedBufferAttribute){for(let ye=0;ye<Z.locationSize;ye++)d(Z.location+ye,pe.meshPerAttribute);y.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ye=0;ye<Z.locationSize;ye++)m(Z.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let ye=0;ye<Z.locationSize;ye++)E(Z.location+ye,he/Z.locationSize,q,X,he*te,he/Z.locationSize*ye*te,xe)}}else if(j!==void 0){const X=j[se];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(Z.location,X);break;case 3:i.vertexAttrib3fv(Z.location,X);break;case 4:i.vertexAttrib4fv(Z.location,X);break;default:i.vertexAttrib1fv(Z.location,X)}}}}A()}function G(){P();for(const y in n){const C=n[y];for(const V in C){const $=C[V];for(const Q in $)h($[Q].object),delete $[Q];delete C[V]}delete n[y]}}function D(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const V in C){const $=C[V];for(const Q in $)h($[Q].object),delete $[Q];delete C[V]}delete n[y.id]}function T(y){for(const C in n){const V=n[C];if(V[y.id]===void 0)continue;const $=V[y.id];for(const Q in $)h($[Q].object),delete $[Q];delete V[y.id]}}function P(){S(),r=!0,a!==s&&(a=s,c(a.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:G,releaseStatesOfGeometry:D,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function xm(i,e,t){let n;function s(c){n=c}function a(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ym(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==wn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Kn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==di&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=g>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:G,maxSamples:D}}function bm(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new Ri,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{const A=a?0:n,E=A*4;let M=d.clippingState||null;l.value=M,M=h(g,f,E,p);for(let G=0;G!==E;++G)M[G]=t[G];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,M=p;E!==v;++E,M+=4)r.copy(u[E]).applyMatrix4(A,o),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Mm(i){let e=new WeakMap;function t(r,o){return o===Ao?r.mapping=Hs:o===Ro&&(r.mapping=Gs),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ao||o===Ro)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Du(l.height);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",s),t(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Sm extends Ph{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,ic=[.125,.215,.35,.446,.526,.582],qi=20,Wr=new Sm,sc=new tt;let Xr=null,qr=0,Yr=0,jr=!1;const Wi=(1+Math.sqrt(5))/2,ms=1/Wi,ac=[new U(-Wi,ms,0),new U(Wi,ms,0),new U(-ms,0,Wi),new U(ms,0,Wi),new U(0,Wi,-ms),new U(0,Wi,ms),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xr,qr,Yr),this._renderer.xr.enabled=jr,e.scissorTest=!1,Wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ya,format:wn,colorSpace:Qi,depthBuffer:!1},s=oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wm(a)),this._blurMaterial=Em(a,e,t)}return s}_compileMaterial(e){const t=new Bn(this._lodPlanes[0],e);this._renderer.compile(t,Wr)}_sceneToCubeUV(e,t,n,s){const o=new Sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sc),h.toneMapping=Di,h.autoClear=!1;const p=new Th({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Bn(new Ma,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(sc),v=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):A===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const E=this._cubeSize;Wa(s,A*E,d>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Hs||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new Bn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Wa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Wr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=ac[(s-a-1)%ac.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Bn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*qi-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):qi;m>qi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const d=[];let A=0;for(let T=0;T<qi;++T){const P=T/v,S=Math.exp(-P*P/2);d.push(S),T===0?A+=S:T<m&&(A+=2*S)}for(let T=0;T<d.length;T++)d[T]=d[T]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const M=this._sizeLods[s],G=3*M*(s>E-As?s-E+As:0),D=4*(this._cubeSize-M);Wa(t,G,D,3*M,2*M),l.setRenderTarget(t),l.render(u,Wr)}}function wm(i){const e=[],t=[],n=[];let s=i;const a=i-As+1+ic.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let l=1/o;r>i-As?l=ic[r-i+As-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,A=new Float32Array(v*g*p),E=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let D=0;D<p;D++){const T=D%3*2/3-1,P=D>2?0:-1,S=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];A.set(S,v*g*D),E.set(f,m*g*D);const y=[D,D,D,D,D,D];M.set(y,d*g*D)}const G=new Tn;G.setAttribute("position",new Hn(A,v)),G.setAttribute("uv",new Hn(E,m)),G.setAttribute("faceIndex",new Hn(M,d)),e.push(G),s>As&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function oc(i,e,t){const n=new Ki(i,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Em(i,e,t){const n=new Float32Array(qi),s=new U(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function lc(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function cc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function Tm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ao||l===Ro,h=l===Hs||l===Gs;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new rc(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new rc(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Am(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&pa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rm(i,e,t,n){const s={},a=new WeakMap;function r(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",r),delete s[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let E=0,M=A.length;E<M;E+=3){const G=A[E+0],D=A[E+1],T=A[E+2];f.push(G,D,D,T,T,G)}}else if(g!==void 0){const A=g.array;v=g.version;for(let E=0,M=A.length/3-1;E<M;E+=3){const G=E+0,D=E+1,T=E+2;f.push(G,D,D,T,T,G)}}else return;const m=new(Mh(f)?Rh:Ah)(f,1);m.version=v;const d=a.get(u);d&&e.remove(d),a.set(u,m)}function h(u){const f=a.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Cm(i,e,t){let n;function s(f){n=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){i.drawElements(n,p,a,f*r),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,a,f*r,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/r,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,f,0,v,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*v[A];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lm(i,e,t){const n=new WeakMap,s=new mt;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let S=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let M=o.attributes.position.count*E,G=1;M>e.maxTextureSize&&(G=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const D=new Float32Array(M*G*4*u),T=new wh(D,M,G,u);T.type=di,T.needsUpdate=!0;const P=E*4;for(let y=0;y<u;y++){const C=m[y],V=d[y],$=A[y],Q=M*G*4*y;for(let ae=0;ae<C.count;ae++){const j=ae*P;p===!0&&(s.fromBufferAttribute(C,ae),D[Q+j+0]=s.x,D[Q+j+1]=s.y,D[Q+j+2]=s.z,D[Q+j+3]=0),g===!0&&(s.fromBufferAttribute(V,ae),D[Q+j+4]=s.x,D[Q+j+5]=s.y,D[Q+j+6]=s.z,D[Q+j+7]=0),v===!0&&(s.fromBufferAttribute($,ae),D[Q+j+8]=s.x,D[Q+j+9]=s.y,D[Q+j+10]=s.z,D[Q+j+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new qe(M,G)},n.set(o,f),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Dm(i,e,t,n){let s=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}class Ih extends Jt{constructor(e,t,n,s,a,r,o,l,c,h=Fs){if(h!==Fs&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fs&&(n=Zi),n===void 0&&h===$s&&(n=Vs),super(null,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nh=new Jt,hc=new Ih(1,1),Fh=new wh,Oh=new gu,kh=new Lh,dc=[],uc=[],fc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function Zs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=dc[s];if(a===void 0&&(a=new Float32Array(s),dc[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sr(i,e){let t=uc[e];t===void 0&&(t=new Int32Array(e),uc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function Om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,n))return;mc.set(n),i.uniformMatrix2fv(this.addr,!1,mc),kt(t,n)}}function km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,n))return;pc.set(n),i.uniformMatrix3fv(this.addr,!1,pc),kt(t,n)}}function Bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,n))return;fc.set(n),i.uniformMatrix4fv(this.addr,!1,fc),kt(t,n)}}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function $m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Ym(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(hc.compareFunction=bh,a=hc):a=Nh,t.setTexture2D(e||a,s)}function jm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Oh,s)}function Zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kh,s)}function Km(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fh,s)}function Jm(i){switch(i){case 5126:return Um;case 35664:return Im;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return km;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return Hm;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return $m;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Km}}function Qm(i,e){i.uniform1fv(this.addr,e)}function e0(i,e){const t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function t0(i,e){const t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function n0(i,e){const t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function i0(i,e){const t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s0(i,e){const t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function a0(i,e){const t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r0(i,e){i.uniform1iv(this.addr,e)}function o0(i,e){i.uniform2iv(this.addr,e)}function l0(i,e){i.uniform3iv(this.addr,e)}function c0(i,e){i.uniform4iv(this.addr,e)}function h0(i,e){i.uniform1uiv(this.addr,e)}function d0(i,e){i.uniform2uiv(this.addr,e)}function u0(i,e){i.uniform3uiv(this.addr,e)}function f0(i,e){i.uniform4uiv(this.addr,e)}function p0(i,e,t){const n=this.cache,s=e.length,a=Sr(t,s);Ot(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Nh,a[r])}function m0(i,e,t){const n=this.cache,s=e.length,a=Sr(t,s);Ot(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Oh,a[r])}function _0(i,e,t){const n=this.cache,s=e.length,a=Sr(t,s);Ot(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||kh,a[r])}function g0(i,e,t){const n=this.cache,s=e.length,a=Sr(t,s);Ot(n,a)||(i.uniform1iv(this.addr,a),kt(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Fh,a[r])}function v0(i){switch(i){case 5126:return Qm;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return a0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return d0;case 36295:return u0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return g0}}class x0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jm(t.type)}}class y0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v0(t.type)}}class b0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function _c(i,e){i.seq.push(e),i.map[e.id]=e}function M0(i,e,t){const n=i.name,s=n.length;for(Zr.lastIndex=0;;){const a=Zr.exec(n),r=Zr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){_c(t,c===void 0?new x0(o,i,e):new y0(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new b0(o),_c(t,u)),t=u}}}class dr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);M0(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function gc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const S0=37297;let w0=0;function E0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const vc=new Ke;function T0(i){at._getMatrix(vc,at.workingColorSpace,i);const e=`mat3( ${vc.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case br:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+E0(i.getShaderSource(e),r)}else return s}function A0(i,e){const t=T0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function R0(i,e){let t;switch(e){case Rd:t="Linear";break;case Cd:t="Reinhard";break;case Pd:t="Cineon";break;case Ld:t="ACESFilmic";break;case Ud:t="AgX";break;case Id:t="Neutral";break;case Dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xa=new U;function C0(){at.getLuminanceCoefficients(Xa);const i=Xa.x.toFixed(4),e=Xa.y.toFixed(4),t=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function L0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function D0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function ma(i){return i!==""}function yc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(U0,N0)}const I0=new Map;function N0(i,e){let t=Qe[e];if(t===void 0){const n=I0.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sl(t)}const F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(i){return i.replace(F0,O0)}function O0(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Sc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function k0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===od?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function B0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function H0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ch:e="ENVMAP_BLENDING_MULTIPLY";break;case Td:e="ENVMAP_BLENDING_MIX";break;case Ad:e="ENVMAP_BLENDING_ADD";break}return e}function G0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function V0(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=k0(t),c=B0(t),h=z0(t),u=H0(t),f=G0(t),p=P0(t),g=L0(a),v=s.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),d.length>0&&(d+=`
`)):(m=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),d=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Di?R0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,A0("linearToOutputTexel",t.outputColorSpace),C0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),r=sl(r),r=yc(r,t),r=bc(r,t),o=sl(o),o=yc(o,t),o=bc(o,t),r=Mc(r),o=Mc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=A+m+r,M=A+d+o,G=gc(s,s.VERTEX_SHADER,E),D=gc(s,s.FRAGMENT_SHADER,M);s.attachShader(v,G),s.attachShader(v,D),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(C){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),$=s.getShaderInfoLog(G).trim(),Q=s.getShaderInfoLog(D).trim();let ae=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,G,D);else{const se=xc(s,G,"vertex"),Z=xc(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+se+`
`+Z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):($===""||Q==="")&&(j=!1);j&&(C.diagnostics={runnable:ae,programLog:V,vertexShader:{log:$,prefix:m},fragmentShader:{log:Q,prefix:d}})}s.deleteShader(G),s.deleteShader(D),P=new dr(s,v),S=D0(s,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,S0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=G,this.fragmentShader=D,this}let $0=0;class W0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new X0(e),t.set(e,n)),n}}class X0{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}}function q0(i,e,t,n,s,a,r){const o=new bl,l=new W0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,V,$){const Q=V.fog,ae=$.geometry,j=S.isMeshStandardMaterial?V.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),Z=se&&se.mapping===yr?se.image.height:null,pe=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const X=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,he=X!==void 0?X.length:0;let Ae=0;ae.morphAttributes.position!==void 0&&(Ae=1),ae.morphAttributes.normal!==void 0&&(Ae=2),ae.morphAttributes.color!==void 0&&(Ae=3);let Le,q,te,xe;if(pe){const $e=cn[pe];Le=$e.vertexShader,q=$e.fragmentShader}else Le=S.vertexShader,q=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),xe=l.getFragmentShaderID(S);const ye=i.getRenderTarget(),Ne=i.state.buffers.depth.getReversed(),ze=$.isInstancedMesh===!0,Ve=$.isBatchedMesh===!0,it=!!S.map,Je=!!S.matcap,lt=!!se,O=!!S.aoMap,ue=!!S.lightMap,me=!!S.bumpMap,de=!!S.normalMap,ge=!!S.displacementMap,ke=!!S.emissiveMap,Me=!!S.metalnessMap,w=!!S.roughnessMap,_=S.anisotropy>0,z=S.clearcoat>0,L=S.dispersion>0,H=S.iridescence>0,F=S.sheen>0,J=S.transmission>0,ie=_&&!!S.anisotropyMap,re=z&&!!S.clearcoatMap,fe=z&&!!S.clearcoatNormalMap,ee=z&&!!S.clearcoatRoughnessMap,ne=H&&!!S.iridescenceMap,Ee=H&&!!S.iridescenceThicknessMap,Re=F&&!!S.sheenColorMap,Se=F&&!!S.sheenRoughnessMap,We=!!S.specularMap,He=!!S.specularColorMap,st=!!S.specularIntensityMap,N=J&&!!S.transmissionMap,we=J&&!!S.thicknessMap,x=!!S.gradientMap,R=!!S.alphaMap,I=S.alphaTest>0,W=!!S.alphaHash,oe=!!S.extensions;let _e=Di;S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Ce={shaderID:pe,shaderType:S.type,shaderName:S.name,vertexShader:Le,fragmentShader:q,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ve,batchingColor:Ve&&$._colorsTexture!==null,instancing:ze,instancingColor:ze&&$.instanceColor!==null,instancingMorph:ze&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Qi,alphaToCoverage:!!S.alphaToCoverage,map:it,matcap:Je,envMap:lt,envMapMode:lt&&se.mapping,envMapCubeUVHeight:Z,aoMap:O,lightMap:ue,bumpMap:me,normalMap:de,displacementMap:f&&ge,emissiveMap:ke,normalMapObjectSpace:de&&S.normalMapType===Bd,normalMapTangentSpace:de&&S.normalMapType===kd,metalnessMap:Me,roughnessMap:w,anisotropy:_,anisotropyMap:ie,clearcoat:z,clearcoatMap:re,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:L,iridescence:H,iridescenceMap:ne,iridescenceThicknessMap:Ee,sheen:F,sheenColorMap:Re,sheenRoughnessMap:Se,specularMap:We,specularColorMap:He,specularIntensityMap:st,transmission:J,transmissionMap:N,thicknessMap:we,gradientMap:x,opaque:S.transparent===!1&&S.blending===Ns&&S.alphaToCoverage===!1,alphaMap:R,alphaTest:I,alphaHash:W,combine:S.combine,mapUv:it&&v(S.map.channel),aoMapUv:O&&v(S.aoMap.channel),lightMapUv:ue&&v(S.lightMap.channel),bumpMapUv:me&&v(S.bumpMap.channel),normalMapUv:de&&v(S.normalMap.channel),displacementMapUv:ge&&v(S.displacementMap.channel),emissiveMapUv:ke&&v(S.emissiveMap.channel),metalnessMapUv:Me&&v(S.metalnessMap.channel),roughnessMapUv:w&&v(S.roughnessMap.channel),anisotropyMapUv:ie&&v(S.anisotropyMap.channel),clearcoatMapUv:re&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(S.sheenRoughnessMap.channel),specularMapUv:We&&v(S.specularMap.channel),specularColorMapUv:He&&v(S.specularColorMap.channel),specularIntensityMapUv:st&&v(S.specularIntensityMap.channel),transmissionMapUv:N&&v(S.transmissionMap.channel),thicknessMapUv:we&&v(S.thicknessMap.channel),alphaMapUv:R&&v(S.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(de||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ae.attributes.uv&&(it||R),fog:!!Q,useFog:S.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ne,skinning:$.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:it&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:ke&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yn,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:oe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&S.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function d(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(A(y,S),E(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function A(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function E(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const y=g[S.type];let C;if(y){const V=cn[y];C=Ml.clone(V.uniforms)}else C=S.uniforms;return C}function G(S,y){let C;for(let V=0,$=h.length;V<$;V++){const Q=h[V];if(Q.cacheKey===y){C=Q,++C.usedTimes;break}}return C===void 0&&(C=new V0(i,y,S,a),h.push(C)),C}function D(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:G,releaseProgram:D,releaseShaderCache:T,programs:h,dispose:P}}function Y0(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function j0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ec(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function o(u,f,p,g,v,m){const d=r(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,g,v,m){const d=r(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||j0),n.length>1&&n.sort(f||wc),s.length>1&&s.sort(f||wc)}function h(){for(let u=e,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function Z0(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Ec,i.set(n,[r])):s>=a.length?(r=new Ec,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function K0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new tt};break;case"SpotLight":t={position:new U,direction:new U,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function J0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Q0=0;function e_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function t_(i){const e=new K0,t=J0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,a=new Rt,r=new Rt;function o(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,A=0,E=0,M=0,G=0,D=0,T=0;c.sort(e_);for(let S=0,y=c.length;S<y;S++){const C=c[S],V=C.color,$=C.intensity,Q=C.distance,ae=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=V.r*$,u+=V.g*$,f+=V.b*$;else if(C.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(C.sh.coefficients[j],$);T++}else if(C.isDirectionalLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const se=C.shadow,Z=t.get(C);Z.shadowIntensity=se.intensity,Z.shadowBias=se.bias,Z.shadowNormalBias=se.normalBias,Z.shadowRadius=se.radius,Z.shadowMapSize=se.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=ae,n.directionalShadowMatrix[p]=C.shadow.matrix,A++}n.directional[p]=j,p++}else if(C.isSpotLight){const j=e.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(V).multiplyScalar($),j.distance=Q,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,n.spot[v]=j;const se=C.shadow;if(C.map&&(n.spotLightMap[G]=C.map,G++,se.updateMatrices(C),C.castShadow&&D++),n.spotLightMatrix[v]=se.matrix,C.castShadow){const Z=t.get(C);Z.shadowIntensity=se.intensity,Z.shadowBias=se.bias,Z.shadowNormalBias=se.normalBias,Z.shadowRadius=se.radius,Z.shadowMapSize=se.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=ae,M++}v++}else if(C.isRectAreaLight){const j=e.get(C);j.color.copy(V).multiplyScalar($),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=j,m++}else if(C.isPointLight){const j=e.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){const se=C.shadow,Z=t.get(C);Z.shadowIntensity=se.intensity,Z.shadowBias=se.bias,Z.shadowNormalBias=se.normalBias,Z.shadowRadius=se.radius,Z.shadowMapSize=se.mapSize,Z.shadowCameraNear=se.camera.near,Z.shadowCameraFar=se.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=ae,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=j,g++}else if(C.isHemisphereLight){const j=e.get(C);j.skyColor.copy(C.color).multiplyScalar($),j.groundColor.copy(C.groundColor).multiplyScalar($),n.hemi[d]=j,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==A||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==G||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+G-D,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=A,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=G,P.numLightProbes=T,n.version=Q0++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const E=c[d];if(E.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(E.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),r.identity(),a.copy(E.matrixWorld),a.premultiply(m),r.extractRotation(a),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(E.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Tc(i){const e=new t_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function n_(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Tc(i),e.set(s,[o])):a>=r.length?(o=new Tc(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class i_ extends ba{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s_ extends ba{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
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
}`;function o_(i,e,t){let n=new Dh;const s=new qe,a=new qe,r=new mt,o=new i_({depthPacking:Od}),l=new s_,c={},h=t.maxTextureSize,u={[Ui]:hn,[hn]:Ui,[Yn]:Yn},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:a_,fragmentShader:r_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Tn;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let d=this.type;this.render=function(D,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Li),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const $=d!==li&&this.type===li,Q=d===li&&this.type!==li;for(let ae=0,j=D.length;ae<j;ae++){const se=D[ae],Z=se.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const pe=Z.getFrameExtents();if(s.multiply(pe),a.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/pe.x),s.x=a.x*pe.x,Z.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/pe.y),s.y=a.y*pe.y,Z.mapSize.y=a.y)),Z.map===null||$===!0||Q===!0){const he=this.type!==li?{minFilter:dn,magFilter:dn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ki(s.x,s.y,he),Z.map.texture.name=se.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const X=Z.getViewportCount();for(let he=0;he<X;he++){const Ae=Z.getViewport(he);r.set(a.x*Ae.x,a.y*Ae.y,a.x*Ae.z,a.y*Ae.w),V.viewport(r),Z.updateMatrices(se,he),n=Z.getFrustum(),M(T,P,Z.camera,se,this.type)}Z.isPointLightShadow!==!0&&this.type===li&&A(Z,P),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,C)};function A(D,T){const P=e.update(v);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ki(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(T,null,P,f,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(T,null,P,p,v,null)}function E(D,T,P,S){let y=null;const C=P.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=y.uuid,$=T.uuid;let Q=c[V];Q===void 0&&(Q={},c[V]=Q);let ae=Q[$];ae===void 0&&(ae=y.clone(),Q[$]=ae,T.addEventListener("dispose",G)),y=ae}if(y.visible=T.visible,y.wireframe=T.wireframe,S===li?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=i.properties.get(y);V.light=P}return y}function M(D,T,P,S,y){if(D.visible===!1)return;if(D.layers.test(T.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===li)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,D.matrixWorld);const $=e.update(D),Q=D.material;if(Array.isArray(Q)){const ae=$.groups;for(let j=0,se=ae.length;j<se;j++){const Z=ae[j],pe=Q[Z.materialIndex];if(pe&&pe.visible){const X=E(D,pe,S,y);D.onBeforeShadow(i,D,T,P,$,X,Z),i.renderBufferDirect(P,null,$,X,D,Z),D.onAfterShadow(i,D,T,P,$,X,Z)}}}else if(Q.visible){const ae=E(D,Q,S,y);D.onBeforeShadow(i,D,T,P,$,ae,null),i.renderBufferDirect(P,null,$,ae,D,null),D.onAfterShadow(i,D,T,P,$,ae,null)}}const V=D.children;for(let $=0,Q=V.length;$<Q;$++)M(V[$],T,P,S,y)}function G(D){D.target.removeEventListener("dispose",G);for(const P in c){const S=c[P],y=D.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const l_={[yo]:bo,[Mo]:Eo,[So]:To,[zs]:wo,[bo]:yo,[Eo]:Mo,[To]:So,[wo]:zs};function c_(i,e){function t(){let N=!1;const we=new mt;let x=null;const R=new mt(0,0,0,0);return{setMask:function(I){x!==I&&!N&&(i.colorMask(I,I,I,I),x=I)},setLocked:function(I){N=I},setClear:function(I,W,oe,_e,Ce){Ce===!0&&(I*=_e,W*=_e,oe*=_e),we.set(I,W,oe,_e),R.equals(we)===!1&&(i.clearColor(I,W,oe,_e),R.copy(we))},reset:function(){N=!1,x=null,R.set(-1,0,0,0)}}}function n(){let N=!1,we=!1,x=null,R=null,I=null;return{setReversed:function(W){if(we!==W){const oe=e.get("EXT_clip_control");we?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT);const _e=I;I=null,this.setClear(_e)}we=W},getReversed:function(){return we},setTest:function(W){W?ye(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(W){x!==W&&!N&&(i.depthMask(W),x=W)},setFunc:function(W){if(we&&(W=l_[W]),R!==W){switch(W){case yo:i.depthFunc(i.NEVER);break;case bo:i.depthFunc(i.ALWAYS);break;case Mo:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case To:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}R=W}},setLocked:function(W){N=W},setClear:function(W){I!==W&&(we&&(W=1-W),i.clearDepth(W),I=W)},reset:function(){N=!1,x=null,R=null,I=null,we=!1}}}function s(){let N=!1,we=null,x=null,R=null,I=null,W=null,oe=null,_e=null,Ce=null;return{setTest:function($e){N||($e?ye(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function($e){we!==$e&&!N&&(i.stencilMask($e),we=$e)},setFunc:function($e,Oe,Ge){(x!==$e||R!==Oe||I!==Ge)&&(i.stencilFunc($e,Oe,Ge),x=$e,R=Oe,I=Ge)},setOp:function($e,Oe,Ge){(W!==$e||oe!==Oe||_e!==Ge)&&(i.stencilOp($e,Oe,Ge),W=$e,oe=Oe,_e=Ge)},setLocked:function($e){N=$e},setClear:function($e){Ce!==$e&&(i.clearStencil($e),Ce=$e)},reset:function(){N=!1,we=null,x=null,R=null,I=null,W=null,oe=null,_e=null,Ce=null}}}const a=new t,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,A=null,E=null,M=null,G=null,D=null,T=new tt(0,0,0),P=0,S=!1,y=null,C=null,V=null,$=null,Q=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,se=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=se>=1):Z.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=se>=2);let pe=null,X={};const he=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Le=new mt().fromArray(he),q=new mt().fromArray(Ae);function te(N,we,x,R){const I=new Uint8Array(4),W=i.createTexture();i.bindTexture(N,W),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<x;oe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,R,0,i.RGBA,i.UNSIGNED_BYTE,I):i.texImage2D(we+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,I);return W}const xe={};xe[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),r.setFunc(zs),me(!1),de(Pl),ye(i.CULL_FACE),O(Li);function ye(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ne(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function ze(N,we){return u[N]!==we?(i.bindFramebuffer(N,we),u[N]=we,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Ve(N,we){let x=p,R=!1;if(N){x=f.get(we),x===void 0&&(x=[],f.set(we,x));const I=N.textures;if(x.length!==I.length||x[0]!==i.COLOR_ATTACHMENT0){for(let W=0,oe=I.length;W<oe;W++)x[W]=i.COLOR_ATTACHMENT0+W;x.length=I.length,R=!0}}else x[0]!==i.BACK&&(x[0]=i.BACK,R=!0);R&&i.drawBuffers(x)}function it(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Je={[Xi]:i.FUNC_ADD,[cd]:i.FUNC_SUBTRACT,[hd]:i.FUNC_REVERSE_SUBTRACT};Je[dd]=i.MIN,Je[ud]=i.MAX;const lt={[fd]:i.ZERO,[pd]:i.ONE,[md]:i.SRC_COLOR,[vo]:i.SRC_ALPHA,[bd]:i.SRC_ALPHA_SATURATE,[xd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[_d]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[yd]:i.ONE_MINUS_DST_COLOR,[vd]:i.ONE_MINUS_DST_ALPHA,[Md]:i.CONSTANT_COLOR,[Sd]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[Ed]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,we,x,R,I,W,oe,_e,Ce,$e){if(N===Li){v===!0&&(Ne(i.BLEND),v=!1);return}if(v===!1&&(ye(i.BLEND),v=!0),N!==ld){if(N!==m||$e!==S){if((d!==Xi||M!==Xi)&&(i.blendEquation(i.FUNC_ADD),d=Xi,M=Xi),$e)switch(N){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,E=null,G=null,D=null,T.set(0,0,0),P=0,m=N,S=$e}return}I=I||we,W=W||x,oe=oe||R,(we!==d||I!==M)&&(i.blendEquationSeparate(Je[we],Je[I]),d=we,M=I),(x!==A||R!==E||W!==G||oe!==D)&&(i.blendFuncSeparate(lt[x],lt[R],lt[W],lt[oe]),A=x,E=R,G=W,D=oe),(_e.equals(T)===!1||Ce!==P)&&(i.blendColor(_e.r,_e.g,_e.b,Ce),T.copy(_e),P=Ce),m=N,S=!1}function ue(N,we){N.side===Yn?Ne(i.CULL_FACE):ye(i.CULL_FACE);let x=N.side===hn;we&&(x=!x),me(x),N.blending===Ns&&N.transparent===!1?O(Li):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);const R=N.stencilWrite;o.setTest(R),R&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ke(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function de(N){N!==ad?(ye(i.CULL_FACE),N!==C&&(N===Pl?i.cullFace(i.BACK):N===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),C=N}function ge(N){N!==V&&(j&&i.lineWidth(N),V=N)}function ke(N,we,x){N?(ye(i.POLYGON_OFFSET_FILL),($!==we||Q!==x)&&(i.polygonOffset(we,x),$=we,Q=x)):Ne(i.POLYGON_OFFSET_FILL)}function Me(N){N?ye(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+ae-1),pe!==N&&(i.activeTexture(N),pe=N)}function _(N,we,x){x===void 0&&(pe===null?x=i.TEXTURE0+ae-1:x=pe);let R=X[x];R===void 0&&(R={type:void 0,texture:void 0},X[x]=R),(R.type!==N||R.texture!==we)&&(pe!==x&&(i.activeTexture(x),pe=x),i.bindTexture(N,we||xe[N]),R.type=N,R.texture=we)}function z(){const N=X[pe];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function L(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function F(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(N){Le.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Le.copy(N))}function Se(N){q.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function We(N,we){let x=c.get(we);x===void 0&&(x=new WeakMap,c.set(we,x));let R=x.get(N);R===void 0&&(R=i.getUniformBlockIndex(we,N.name),x.set(N,R))}function He(N,we){const R=c.get(we).get(N);l.get(we)!==R&&(i.uniformBlockBinding(we,R,N.__bindingPointIndex),l.set(we,R))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pe=null,X={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,A=null,E=null,M=null,G=null,D=null,T=new tt(0,0,0),P=0,S=!1,y=null,C=null,V=null,$=null,Q=null,Le.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ye,disable:Ne,bindFramebuffer:ze,drawBuffers:Ve,useProgram:it,setBlending:O,setMaterial:ue,setFlipSided:me,setCullFace:de,setLineWidth:ge,setPolygonOffset:ke,setScissorTest:Me,activeTexture:w,bindTexture:_,unbindTexture:z,compressedTexImage2D:L,compressedTexImage3D:H,texImage2D:ne,texImage3D:Ee,updateUBOMapping:We,uniformBlockBinding:He,texStorage2D:fe,texStorage3D:ee,texSubImage2D:F,texSubImage3D:J,compressedTexSubImage2D:ie,compressedTexSubImage3D:re,scissor:Re,viewport:Se,reset:st}}function Ac(i,e,t,n){const s=h_(n);switch(t){case ph:return i*e;case _h:return i*e;case gh:return i*e*2;case vh:return i*e/s.components*s.byteLength;case _l:return i*e/s.components*s.byteLength;case xh:return i*e*2/s.components*s.byteLength;case gl:return i*e*2/s.components*s.byteLength;case mh:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case vl:return i*e*4/s.components*s.byteLength;case rr:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Do:case Io:return Math.max(i,16)*Math.max(e,8)/4;case Lo:case Uo:return Math.max(i,8)*Math.max(e,8)/2;case No:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case hr:case Jo:case Qo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yh:case el:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h_(i){switch(i){case Kn:case dh:return{byteLength:1,components:1};case va:case uh:case ya:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Zi:case fl:case di:return{byteLength:4,components:1};case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function d_(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):pr("canvas")}function v(w,_,z){let L=1;const H=Me(w);if((H.width>z||H.height>z)&&(L=z/Math.max(H.width,H.height)),L<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const F=Math.floor(L*H.width),J=Math.floor(L*H.height);u===void 0&&(u=g(F,J));const ie=_?g(F,J):u;return ie.width=F,ie.height=J,ie.getContext("2d").drawImage(w,0,0,F,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+F+"x"+J+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,_,z,L,H=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let F=_;if(_===i.RED&&(z===i.FLOAT&&(F=i.R32F),z===i.HALF_FLOAT&&(F=i.R16F),z===i.UNSIGNED_BYTE&&(F=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(F=i.R8UI),z===i.UNSIGNED_SHORT&&(F=i.R16UI),z===i.UNSIGNED_INT&&(F=i.R32UI),z===i.BYTE&&(F=i.R8I),z===i.SHORT&&(F=i.R16I),z===i.INT&&(F=i.R32I)),_===i.RG&&(z===i.FLOAT&&(F=i.RG32F),z===i.HALF_FLOAT&&(F=i.RG16F),z===i.UNSIGNED_BYTE&&(F=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(F=i.RG8UI),z===i.UNSIGNED_SHORT&&(F=i.RG16UI),z===i.UNSIGNED_INT&&(F=i.RG32UI),z===i.BYTE&&(F=i.RG8I),z===i.SHORT&&(F=i.RG16I),z===i.INT&&(F=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(F=i.RGB8UI),z===i.UNSIGNED_SHORT&&(F=i.RGB16UI),z===i.UNSIGNED_INT&&(F=i.RGB32UI),z===i.BYTE&&(F=i.RGB8I),z===i.SHORT&&(F=i.RGB16I),z===i.INT&&(F=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),z===i.UNSIGNED_INT&&(F=i.RGBA32UI),z===i.BYTE&&(F=i.RGBA8I),z===i.SHORT&&(F=i.RGBA16I),z===i.INT&&(F=i.RGBA32I)),_===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),_===i.RGBA){const J=H?br:at.getTransfer(L);z===i.FLOAT&&(F=i.RGBA32F),z===i.HALF_FLOAT&&(F=i.RGBA16F),z===i.UNSIGNED_BYTE&&(F=J===vt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function M(w,_){let z;return w?_===null||_===Zi||_===Vs?z=i.DEPTH24_STENCIL8:_===di?z=i.DEPTH32F_STENCIL8:_===va&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Zi||_===Vs?z=i.DEPTH_COMPONENT24:_===di?z=i.DEPTH_COMPONENT32F:_===va&&(z=i.DEPTH_COMPONENT16),z}function G(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==dn&&w.minFilter!==kn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function D(w){const _=w.target;_.removeEventListener("dispose",D),P(_),_.isVideoTexture&&h.delete(_)}function T(w){const _=w.target;_.removeEventListener("dispose",T),y(_)}function P(w){const _=n.get(w);if(_.__webglInit===void 0)return;const z=w.source,L=f.get(z);if(L){const H=L[_.__cacheKey];H.usedTimes--,H.usedTimes===0&&S(w),Object.keys(L).length===0&&f.delete(z)}n.remove(w)}function S(w){const _=n.get(w);i.deleteTexture(_.__webglTexture);const z=w.source,L=f.get(z);delete L[_.__cacheKey],r.memory.textures--}function y(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(_.__webglFramebuffer[L]))for(let H=0;H<_.__webglFramebuffer[L].length;H++)i.deleteFramebuffer(_.__webglFramebuffer[L][H]);else i.deleteFramebuffer(_.__webglFramebuffer[L]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[L])}else{if(Array.isArray(_.__webglFramebuffer))for(let L=0;L<_.__webglFramebuffer.length;L++)i.deleteFramebuffer(_.__webglFramebuffer[L]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let L=0;L<_.__webglColorRenderbuffer.length;L++)_.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[L]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=w.textures;for(let L=0,H=z.length;L<H;L++){const F=n.get(z[L]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),r.memory.textures--),n.remove(z[L])}n.remove(w)}let C=0;function V(){C=0}function $(){const w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function Q(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function ae(w,_){const z=n.get(w);if(w.isVideoTexture&&ge(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const L=w.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,w,_);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function j(w,_){const z=n.get(w);if(w.version>0&&z.__version!==w.version){q(z,w,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function se(w,_){const z=n.get(w);if(w.version>0&&z.__version!==w.version){q(z,w,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function Z(w,_){const z=n.get(w);if(w.version>0&&z.__version!==w.version){te(z,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const pe={[Co]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},X={[dn]:i.NEAREST,[Nd]:i.NEAREST_MIPMAP_NEAREST,[Ta]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[wr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},he={[zd]:i.NEVER,[Xd]:i.ALWAYS,[Hd]:i.LESS,[bh]:i.LEQUAL,[Gd]:i.EQUAL,[Wd]:i.GEQUAL,[Vd]:i.GREATER,[$d]:i.NOTEQUAL};function Ae(w,_){if(_.type===di&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kn||_.magFilter===wr||_.magFilter===Ta||_.magFilter===hi||_.minFilter===kn||_.minFilter===wr||_.minFilter===Ta||_.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,pe[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,pe[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,pe[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,X[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,X[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dn||_.minFilter!==Ta&&_.minFilter!==hi||_.type===di&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Le(w,_){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",D));const L=_.source;let H=f.get(L);H===void 0&&(H={},f.set(L,H));const F=Q(_);if(F!==w.__cacheKey){H[F]===void 0&&(H[F]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,z=!0),H[F].usedTimes++;const J=H[w.__cacheKey];J!==void 0&&(H[w.__cacheKey].usedTimes--,J.usedTimes===0&&S(_)),w.__cacheKey=F,w.__webglTexture=H[F].texture}return z}function q(w,_,z){let L=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(L=i.TEXTURE_3D);const H=Le(w,_),F=_.source;t.bindTexture(L,w.__webglTexture,i.TEXTURE0+z);const J=n.get(F);if(F.version!==J.__version||H===!0){t.activeTexture(i.TEXTURE0+z);const ie=at.getPrimaries(at.workingColorSpace),re=_.colorSpace===jn?null:at.getPrimaries(_.colorSpace),fe=_.colorSpace===jn||ie===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let ee=v(_.image,!1,s.maxTextureSize);ee=ke(_,ee);const ne=a.convert(_.format,_.colorSpace),Ee=a.convert(_.type);let Re=E(_.internalFormat,ne,Ee,_.colorSpace,_.isVideoTexture);Ae(L,_);let Se;const We=_.mipmaps,He=_.isVideoTexture!==!0,st=J.__version===void 0||H===!0,N=F.dataReady,we=G(_,ee);if(_.isDepthTexture)Re=M(_.format===$s,_.type),st&&(He?t.texStorage2D(i.TEXTURE_2D,1,Re,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Re,ee.width,ee.height,0,ne,Ee,null));else if(_.isDataTexture)if(We.length>0){He&&st&&t.texStorage2D(i.TEXTURE_2D,we,Re,We[0].width,We[0].height);for(let x=0,R=We.length;x<R;x++)Se=We[x],He?N&&t.texSubImage2D(i.TEXTURE_2D,x,0,0,Se.width,Se.height,ne,Ee,Se.data):t.texImage2D(i.TEXTURE_2D,x,Re,Se.width,Se.height,0,ne,Ee,Se.data);_.generateMipmaps=!1}else He?(st&&t.texStorage2D(i.TEXTURE_2D,we,Re,ee.width,ee.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,ne,Ee,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Re,ee.width,ee.height,0,ne,Ee,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Re,We[0].width,We[0].height,ee.depth);for(let x=0,R=We.length;x<R;x++)if(Se=We[x],_.format!==wn)if(ne!==null)if(He){if(N)if(_.layerUpdates.size>0){const I=Ac(Se.width,Se.height,_.format,_.type);for(const W of _.layerUpdates){const oe=Se.data.subarray(W*I/Se.data.BYTES_PER_ELEMENT,(W+1)*I/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,x,0,0,W,Se.width,Se.height,1,ne,oe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,x,0,0,0,Se.width,Se.height,ee.depth,ne,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,x,Re,Se.width,Se.height,ee.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,x,0,0,0,Se.width,Se.height,ee.depth,ne,Ee,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,x,Re,Se.width,Se.height,ee.depth,0,ne,Ee,Se.data)}else{He&&st&&t.texStorage2D(i.TEXTURE_2D,we,Re,We[0].width,We[0].height);for(let x=0,R=We.length;x<R;x++)Se=We[x],_.format!==wn?ne!==null?He?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,x,0,0,Se.width,Se.height,ne,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,x,Re,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?N&&t.texSubImage2D(i.TEXTURE_2D,x,0,0,Se.width,Se.height,ne,Ee,Se.data):t.texImage2D(i.TEXTURE_2D,x,Re,Se.width,Se.height,0,ne,Ee,Se.data)}else if(_.isDataArrayTexture)if(He){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Re,ee.width,ee.height,ee.depth),N)if(_.layerUpdates.size>0){const x=Ac(ee.width,ee.height,_.format,_.type);for(const R of _.layerUpdates){const I=ee.data.subarray(R*x/ee.data.BYTES_PER_ELEMENT,(R+1)*x/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,R,ee.width,ee.height,1,ne,Ee,I)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ne,Ee,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,ee.width,ee.height,ee.depth,0,ne,Ee,ee.data);else if(_.isData3DTexture)He?(st&&t.texStorage3D(i.TEXTURE_3D,we,Re,ee.width,ee.height,ee.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ne,Ee,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Re,ee.width,ee.height,ee.depth,0,ne,Ee,ee.data);else if(_.isFramebufferTexture){if(st)if(He)t.texStorage2D(i.TEXTURE_2D,we,Re,ee.width,ee.height);else{let x=ee.width,R=ee.height;for(let I=0;I<we;I++)t.texImage2D(i.TEXTURE_2D,I,Re,x,R,0,ne,Ee,null),x>>=1,R>>=1}}else if(We.length>0){if(He&&st){const x=Me(We[0]);t.texStorage2D(i.TEXTURE_2D,we,Re,x.width,x.height)}for(let x=0,R=We.length;x<R;x++)Se=We[x],He?N&&t.texSubImage2D(i.TEXTURE_2D,x,0,0,ne,Ee,Se):t.texImage2D(i.TEXTURE_2D,x,Re,ne,Ee,Se);_.generateMipmaps=!1}else if(He){if(st){const x=Me(ee);t.texStorage2D(i.TEXTURE_2D,we,Re,x.width,x.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,Ee,ee)}else t.texImage2D(i.TEXTURE_2D,0,Re,ne,Ee,ee);m(_)&&d(L),J.__version=F.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function te(w,_,z){if(_.image.length!==6)return;const L=Le(w,_),H=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const F=n.get(H);if(H.version!==F.__version||L===!0){t.activeTexture(i.TEXTURE0+z);const J=at.getPrimaries(at.workingColorSpace),ie=_.colorSpace===jn?null:at.getPrimaries(_.colorSpace),re=_.colorSpace===jn||J===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const fe=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ne=[];for(let R=0;R<6;R++)!fe&&!ee?ne[R]=v(_.image[R],!0,s.maxCubemapSize):ne[R]=ee?_.image[R].image:_.image[R],ne[R]=ke(_,ne[R]);const Ee=ne[0],Re=a.convert(_.format,_.colorSpace),Se=a.convert(_.type),We=E(_.internalFormat,Re,Se,_.colorSpace),He=_.isVideoTexture!==!0,st=F.__version===void 0||L===!0,N=H.dataReady;let we=G(_,Ee);Ae(i.TEXTURE_CUBE_MAP,_);let x;if(fe){He&&st&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,We,Ee.width,Ee.height);for(let R=0;R<6;R++){x=ne[R].mipmaps;for(let I=0;I<x.length;I++){const W=x[I];_.format!==wn?Re!==null?He?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,I,0,0,W.width,W.height,Re,W.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,I,We,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,I,0,0,W.width,W.height,Re,Se,W.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,I,We,W.width,W.height,0,Re,Se,W.data)}}}else{if(x=_.mipmaps,He&&st){x.length>0&&we++;const R=Me(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,We,R.width,R.height)}for(let R=0;R<6;R++)if(ee){He?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,ne[R].width,ne[R].height,Re,Se,ne[R].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,We,ne[R].width,ne[R].height,0,Re,Se,ne[R].data);for(let I=0;I<x.length;I++){const oe=x[I].image[R].image;He?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,I+1,0,0,oe.width,oe.height,Re,Se,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,I+1,We,oe.width,oe.height,0,Re,Se,oe.data)}}else{He?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Re,Se,ne[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,We,Re,Se,ne[R]);for(let I=0;I<x.length;I++){const W=x[I];He?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,I+1,0,0,Re,Se,W.image[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,I+1,We,Re,Se,W.image[R])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),F.__version=H.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function xe(w,_,z,L,H,F){const J=a.convert(z.format,z.colorSpace),ie=a.convert(z.type),re=E(z.internalFormat,J,ie,z.colorSpace),fe=n.get(_),ee=n.get(z);if(ee.__renderTarget=_,!fe.__hasExternalTextures){const ne=Math.max(1,_.width>>F),Ee=Math.max(1,_.height>>F);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,F,re,ne,Ee,_.depth,0,J,ie,null):t.texImage2D(H,F,re,ne,Ee,0,J,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,H,ee.__webglTexture,0,me(_)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,H,ee.__webglTexture,F),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(w,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const L=_.depthTexture,H=L&&L.isDepthTexture?L.type:null,F=M(_.stencilBuffer,H),J=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=me(_);de(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,F,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,F,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,F,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,w)}else{const L=_.textures;for(let H=0;H<L.length;H++){const F=L[H],J=a.convert(F.format,F.colorSpace),ie=a.convert(F.type),re=E(F.internalFormat,J,ie,F.colorSpace),fe=me(_);z&&de(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,re,_.width,_.height):de(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,re,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,re,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=n.get(_.depthTexture);L.__renderTarget=_,(!L.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ae(_.depthTexture,0);const H=L.__webglTexture,F=me(_);if(_.depthTexture.format===Fs)de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(_.depthTexture.format===$s)de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function ze(w){const _=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const L=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),L){const H=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,L.removeEventListener("dispose",H)};L.addEventListener("dispose",H),_.__depthDisposeCallback=H}_.__boundDepthTexture=L}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ne(_.__webglFramebuffer,w)}else if(z){_.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[L]),_.__webglDepthbuffer[L]===void 0)_.__webglDepthbuffer[L]=i.createRenderbuffer(),ye(_.__webglDepthbuffer[L],w,!1);else{const H=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=_.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,F)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ye(_.__webglDepthbuffer,w,!1);else{const L=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,H)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(w,_,z){const L=n.get(w);_!==void 0&&xe(L.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ze(w)}function it(w){const _=w.texture,z=n.get(w),L=n.get(_);w.addEventListener("dispose",T);const H=w.textures,F=w.isWebGLCubeRenderTarget===!0,J=H.length>1;if(J||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=_.version,r.memory.textures++),F){z.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ie]=[];for(let re=0;re<_.mipmaps.length;re++)z.__webglFramebuffer[ie][re]=i.createFramebuffer()}else z.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)z.__webglFramebuffer[ie]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(J)for(let ie=0,re=H.length;ie<re;ie++){const fe=n.get(H[ie]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),r.memory.textures++)}if(w.samples>0&&de(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ie=0;ie<H.length;ie++){const re=H[ie];z.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ie]);const fe=a.convert(re.format,re.colorSpace),ee=a.convert(re.type),ne=E(re.internalFormat,fe,ee,re.colorSpace,w.isXRRenderTarget===!0),Ee=me(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ne,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,z.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)xe(z.__webglFramebuffer[ie][re],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else xe(z.__webglFramebuffer[ie],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){for(let ie=0,re=H.length;ie<re;ie++){const fe=H[ie],ee=n.get(fe);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),Ae(i.TEXTURE_2D,fe),xe(z.__webglFramebuffer,w,fe,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,0),m(fe)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,L.__webglTexture),Ae(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)xe(z.__webglFramebuffer[re],w,_,i.COLOR_ATTACHMENT0,ie,re);else xe(z.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,ie,0);m(_)&&d(ie),t.unbindTexture()}w.depthBuffer&&ze(w)}function Je(w){const _=w.textures;for(let z=0,L=_.length;z<L;z++){const H=_[z];if(m(H)){const F=A(w),J=n.get(H).__webglTexture;t.bindTexture(F,J),d(F),t.unbindTexture()}}}const lt=[],O=[];function ue(w){if(w.samples>0){if(de(w)===!1){const _=w.textures,z=w.width,L=w.height;let H=i.COLOR_BUFFER_BIT;const F=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=n.get(w),ie=_.length>1;if(ie)for(let re=0;re<_.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let re=0;re<_.length;re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,J.__webglColorRenderbuffer[re]);const fe=n.get(_[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,z,L,0,0,z,L,H,i.NEAREST),l===!0&&(lt.length=0,O.length=0,lt.push(i.COLOR_ATTACHMENT0+re),w.depthBuffer&&w.resolveDepthBuffer===!1&&(lt.push(F),O.push(F),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let re=0;re<_.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,J.__webglColorRenderbuffer[re]);const fe=n.get(_[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,J.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function me(w){return Math.min(s.maxSamples,w.samples)}function de(w){const _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ge(w){const _=r.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function ke(w,_){const z=w.colorSpace,L=w.format,H=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Qi&&z!==jn&&(at.getTransfer(z)===vt?(L!==wn||H!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Me(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.setTexture2D=ae,this.setTexture2DArray=j,this.setTexture3D=se,this.setTextureCube=Z,this.rebindTextures=Ve,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=de}function u_(i,e){function t(n,s=jn){let a;const r=at.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.BYTE;if(n===uh)return i.SHORT;if(n===va)return i.UNSIGNED_SHORT;if(n===fl)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===ya)return i.HALF_FLOAT;if(n===ph)return i.ALPHA;if(n===mh)return i.RGB;if(n===wn)return i.RGBA;if(n===_h)return i.LUMINANCE;if(n===gh)return i.LUMINANCE_ALPHA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===$s)return i.DEPTH_STENCIL;if(n===vh)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===xh)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===vl)return i.RGBA_INTEGER;if(n===rr||n===or||n===lr||n===cr)if(r===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===rr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===rr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Do||n===Uo||n===Io)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Lo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===Oo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===No||n===Fo)return r===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Oo)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ko||n===Bo||n===zo||n===Ho||n===Go||n===Vo||n===$o||n===Wo||n===Xo||n===qo||n===Yo||n===jo||n===Zo||n===Ko)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ko)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ho)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Go)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$o)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qo)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yo)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jo)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return r===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hr||n===Jo||n===Qo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===hr)return r===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yh||n===el||n===tl||n===nl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===hr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===el)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class f_ extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rs extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p_={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
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

}`;class g_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Jt,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:m_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bn(new Sa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v_ extends es{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const v=new g_,m=t.getContextAttributes();let d=null,A=null;const E=[],M=[],G=new qe;let D=null;const T=new Sn;T.viewport=new mt;const P=new Sn;P.viewport=new mt;const S=[T,P],y=new f_;let C=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=E[q];return te===void 0&&(te=new Kr,E[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=E[q];return te===void 0&&(te=new Kr,E[q]=te),te.getGripSpace()},this.getHand=function(q){let te=E[q];return te===void 0&&(te=new Kr,E[q]=te),te.getHandSpace()};function $(q){const te=M.indexOf(q.inputSource);if(te===-1)return;const xe=E[te];xe!==void 0&&(xe.update(q.inputSource,q.frame,c||r),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function Q(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ae);for(let q=0;q<E.length;q++){const te=M[q];te!==null&&(M[q]=null,E[q].disconnect(te))}C=null,V=null,v.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,A=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(G),s.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Ki(p.framebufferWidth,p.framebufferHeight,{format:wn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,xe=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?$s:Fs,xe=m.stencil?Vs:Zi);const Ne={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:a};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Ki(f.textureWidth,f.textureHeight,{format:wn,type:Kn,depthTexture:new Ih(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ae(q){for(let te=0;te<q.removed.length;te++){const xe=q.removed[te],ye=M.indexOf(xe);ye>=0&&(M[ye]=null,E[ye].disconnect(xe))}for(let te=0;te<q.added.length;te++){const xe=q.added[te];let ye=M.indexOf(xe);if(ye===-1){for(let ze=0;ze<E.length;ze++)if(ze>=M.length){M.push(xe),ye=ze;break}else if(M[ze]===null){M[ze]=xe,ye=ze;break}if(ye===-1)break}const Ne=E[ye];Ne&&Ne.connect(xe)}}const j=new U,se=new U;function Z(q,te,xe){j.setFromMatrixPosition(te.matrixWorld),se.setFromMatrixPosition(xe.matrixWorld);const ye=j.distanceTo(se),Ne=te.projectionMatrix.elements,ze=xe.projectionMatrix.elements,Ve=Ne[14]/(Ne[10]-1),it=Ne[14]/(Ne[10]+1),Je=(Ne[9]+1)/Ne[5],lt=(Ne[9]-1)/Ne[5],O=(Ne[8]-1)/Ne[0],ue=(ze[8]+1)/ze[0],me=Ve*O,de=Ve*ue,ge=ye/(-O+ue),ke=ge*-O;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ke),q.translateZ(ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ne[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Me=Ve+ge,w=it+ge,_=me-ke,z=de+(ye-ke),L=Je*it/w*Me,H=lt*it/w*Me;q.projectionMatrix.makePerspective(_,z,L,H,Me,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function pe(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let te=q.near,xe=q.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),y.near=P.near=T.near=te,y.far=P.far=T.far=xe,(C!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,V=y.far),T.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,y.layers.mask=T.layers.mask|P.layers.mask;const ye=q.parent,Ne=y.cameras;pe(y,ye);for(let ze=0;ze<Ne.length;ze++)pe(Ne[ze],ye);Ne.length===2?Z(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),X(q,y,ye)};function X(q,te,xe){xe===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=xa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let he=null;function Ae(q,te){if(h=te.getViewerPose(c||r),g=te,h!==null){const xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let ye=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,ye=!0);for(let ze=0;ze<xe.length;ze++){const Ve=xe[ze];let it=null;if(p!==null)it=p.getViewport(Ve);else{const lt=u.getViewSubImage(f,Ve);it=lt.viewport,ze===0&&(e.setRenderTargetTextures(A,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(A))}let Je=S[ze];Je===void 0&&(Je=new Sn,Je.layers.enable(ze),Je.viewport=new mt,S[ze]=Je),Je.matrix.fromArray(Ve.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ve.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(it.x,it.y,it.width,it.height),ze===0&&(y.matrix.copy(Je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ye===!0&&y.cameras.push(Je)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const ze=u.getDepthInformation(xe[0]);ze&&ze.isValid&&ze.texture&&v.init(e,ze,s.renderState)}}for(let xe=0;xe<E.length;xe++){const ye=M[xe],Ne=E[xe];ye!==null&&Ne!==void 0&&Ne.update(ye,te,c||r)}he&&he(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Le=new Uh;Le.setAnimationLoop(Ae),this.setAnimationLoop=function(q){he=q},this.dispose=function(){}}}const Bi=new mi,x_=new Rt;function y_(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ch(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,E,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(m,d):d.isMeshToonMaterial?(a(m,d),u(m,d)):d.isMeshPhongMaterial?(a(m,d),h(m,d)):d.isMeshStandardMaterial?(a(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(a(m,d),g(m,d)):d.isMeshDepthMaterial?a(m,d):d.isMeshDistanceMaterial?(a(m,d),v(m,d)):d.isMeshNormalMaterial?a(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===hn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===hn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),E=A.envMap,M=A.envMapRotation;E&&(m.envMap.value=E,Bi.copy(M),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(Bi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b_(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const M=E.program;n.uniformBlockBinding(A,M)}function c(A,E){let M=s[A.id];M===void 0&&(g(A),M=h(A),s[A.id]=M,A.addEventListener("dispose",m));const G=E.program;n.updateUBOMapping(A,G);const D=e.render.frame;a[A.id]!==D&&(f(A),a[A.id]=D)}function h(A){const E=u();A.__bindingPointIndex=E;const M=i.createBuffer(),G=A.__size,D=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,G,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function u(){for(let A=0;A<o;A++)if(r.indexOf(A)===-1)return r.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const E=s[A.id],M=A.uniforms,G=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let D=0,T=M.length;D<T;D++){const P=Array.isArray(M[D])?M[D]:[M[D]];for(let S=0,y=P.length;S<y;S++){const C=P[S];if(p(C,D,S,G)===!0){const V=C.__offset,$=Array.isArray(C.value)?C.value:[C.value];let Q=0;for(let ae=0;ae<$.length;ae++){const j=$[ae],se=v(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,V+Q,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,Q),Q+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,E,M,G){const D=A.value,T=E+"_"+M;if(G[T]===void 0)return typeof D=="number"||typeof D=="boolean"?G[T]=D:G[T]=D.clone(),!0;{const P=G[T];if(typeof D=="number"||typeof D=="boolean"){if(P!==D)return G[T]=D,!0}else if(P.equals(D)===!1)return P.copy(D),!0}return!1}function g(A){const E=A.uniforms;let M=0;const G=16;for(let T=0,P=E.length;T<P;T++){const S=Array.isArray(E[T])?E[T]:[E[T]];for(let y=0,C=S.length;y<C;y++){const V=S[y],$=Array.isArray(V.value)?V.value:[V.value];for(let Q=0,ae=$.length;Q<ae;Q++){const j=$[Q],se=v(j),Z=M%G,pe=Z%se.boundary,X=Z+pe;M+=pe,X!==0&&G-X<se.storage&&(M+=G-X),V.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=se.storage}}}const D=M%G;return D>0&&(M+=G-D),A.__size=M,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const M=r.indexOf(E.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function d(){for(const A in s)i.deleteBuffer(s[A]);r=[],s={},a={}}return{bind:l,update:c,dispose:d}}class M_{constructor(e={}){const{canvas:t=cu(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=Di,this.toneMappingExposure=1;const M=this;let G=!1,D=0,T=0,P=null,S=-1,y=null;const C=new mt,V=new mt;let $=null;const Q=new tt(0);let ae=0,j=t.width,se=t.height,Z=1,pe=null,X=null;const he=new mt(0,0,j,se),Ae=new mt(0,0,j,se);let Le=!1;const q=new Dh;let te=!1,xe=!1;const ye=new Rt,Ne=new Rt,ze=new U,Ve=new mt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function lt(){return P===null?Z:1}let O=n;function ue(b,k){return t.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",R,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",W,!1),O===null){const k="webgl2";if(O=ue(k,b),O===null)throw ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let me,de,ge,ke,Me,w,_,z,L,H,F,J,ie,re,fe,ee,ne,Ee,Re,Se,We,He,st,N;function we(){me=new Am(O),me.init(),He=new u_(O,me),de=new ym(O,me,e,He),ge=new c_(O,me),de.reverseDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),ke=new Pm(O),Me=new Y0,w=new d_(O,me,ge,Me,de,He,ke),_=new Mm(M),z=new Tm(M),L=new Nu(O),st=new vm(O,L),H=new Rm(O,L,ke,st),F=new Dm(O,H,L,ke),Re=new Lm(O,de,w),ee=new bm(Me),J=new q0(M,_,z,me,de,st,ee),ie=new y_(M,Me),re=new Z0,fe=new n_(me),Ee=new gm(M,_,z,ge,F,p,l),ne=new o_(M,F,de),N=new b_(O,ke,de,ge),Se=new xm(O,me,ke),We=new Cm(O,me,ke),ke.programs=J.programs,M.capabilities=de,M.extensions=me,M.properties=Me,M.renderLists=re,M.shadowMap=ne,M.state=ge,M.info=ke}we();const x=new v_(M,O);this.xr=x,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(j,se,!1))},this.getSize=function(b){return b.set(j,se)},this.setSize=function(b,k,Y=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,se=k,t.width=Math.floor(b*Z),t.height=Math.floor(k*Z),Y===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(j*Z,se*Z).floor()},this.setDrawingBufferSize=function(b,k,Y){j=b,se=k,Z=Y,t.width=Math.floor(b*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(he)},this.setViewport=function(b,k,Y,K){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,k,Y,K),ge.viewport(C.copy(he).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(Ae)},this.setScissor=function(b,k,Y,K){b.isVector4?Ae.set(b.x,b.y,b.z,b.w):Ae.set(b,k,Y,K),ge.scissor(V.copy(Ae).multiplyScalar(Z).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(b){ge.setScissorTest(Le=b)},this.setOpaqueSort=function(b){pe=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(b=!0,k=!0,Y=!0){let K=0;if(b){let B=!1;if(P!==null){const ve=P.texture.format;B=ve===vl||ve===gl||ve===_l}if(B){const ve=P.texture.type,Te=ve===Kn||ve===Zi||ve===va||ve===Vs||ve===pl||ve===ml,De=Ee.getClearColor(),Ue=Ee.getClearAlpha(),Xe=De.r,Ye=De.g,Ie=De.b;Te?(g[0]=Xe,g[1]=Ye,g[2]=Ie,g[3]=Ue,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Xe,v[1]=Ye,v[2]=Ie,v[3]=Ue,O.clearBufferiv(O.COLOR,0,v))}else K|=O.COLOR_BUFFER_BIT}k&&(K|=O.DEPTH_BUFFER_BIT),Y&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",R,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",W,!1),re.dispose(),fe.dispose(),Me.dispose(),_.dispose(),z.dispose(),F.dispose(),st.dispose(),N.dispose(),J.dispose(),x.dispose(),x.removeEventListener("sessionstart",It),x.removeEventListener("sessionend",ut),At.stop()};function R(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const b=ke.autoReset,k=ne.enabled,Y=ne.autoUpdate,K=ne.needsUpdate,B=ne.type;we(),ke.autoReset=b,ne.enabled=k,ne.autoUpdate=Y,ne.needsUpdate=K,ne.type=B}function W(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const k=b.target;k.removeEventListener("dispose",oe),_e(k)}function _e(b){Ce(b),Me.remove(b)}function Ce(b){const k=Me.get(b).programs;k!==void 0&&(k.forEach(function(Y){J.releaseProgram(Y)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,Y,K,B,ve){k===null&&(k=it);const Te=B.isMesh&&B.matrixWorld.determinant()<0,De=ed(b,k,Y,K,B);ge.setMaterial(K,Te);let Ue=Y.index,Xe=1;if(K.wireframe===!0){if(Ue=H.getWireframeAttribute(Y),Ue===void 0)return;Xe=2}const Ye=Y.drawRange,Ie=Y.attributes.position;let ot=Ye.start*Xe,bt=(Ye.start+Ye.count)*Xe;ve!==null&&(ot=Math.max(ot,ve.start*Xe),bt=Math.min(bt,(ve.start+ve.count)*Xe)),Ue!==null?(ot=Math.max(ot,0),bt=Math.min(bt,Ue.count)):Ie!=null&&(ot=Math.max(ot,0),bt=Math.min(bt,Ie.count));const wt=bt-ot;if(wt<0||wt===1/0)return;st.setup(B,K,De,Y,Ue);let an,ct=Se;if(Ue!==null&&(an=L.get(Ue),ct=We,ct.setIndex(an)),B.isMesh)K.wireframe===!0?(ge.setLineWidth(K.wireframeLinewidth*lt()),ct.setMode(O.LINES)):ct.setMode(O.TRIANGLES);else if(B.isLine){let Fe=K.linewidth;Fe===void 0&&(Fe=1),ge.setLineWidth(Fe*lt()),B.isLineSegments?ct.setMode(O.LINES):B.isLineLoop?ct.setMode(O.LINE_LOOP):ct.setMode(O.LINE_STRIP)}else B.isPoints?ct.setMode(O.POINTS):B.isSprite&&ct.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ct.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))ct.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Fe=B._multiDrawStarts,Qn=B._multiDrawCounts,ht=B._multiDrawCount,Rn=Ue?L.get(Ue).bytesPerElement:1,ts=Me.get(K).currentProgram.getUniforms();for(let fn=0;fn<ht;fn++)ts.setValue(O,"_gl_DrawID",fn),ct.render(Fe[fn]/Rn,Qn[fn])}else if(B.isInstancedMesh)ct.renderInstances(ot,wt,B.count);else if(Y.isInstancedBufferGeometry){const Fe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Qn=Math.min(Y.instanceCount,Fe);ct.renderInstances(ot,wt,Qn)}else ct.render(ot,wt)};function $e(b,k,Y){b.transparent===!0&&b.side===Yn&&b.forceSinglePass===!1?(b.side=hn,b.needsUpdate=!0,St(b,k,Y),b.side=Ui,b.needsUpdate=!0,St(b,k,Y),b.side=Yn):St(b,k,Y)}this.compile=function(b,k,Y=null){Y===null&&(Y=b),d=fe.get(Y),d.init(k),E.push(d),Y.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),b!==Y&&b.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const K=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ve=B.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const De=ve[Te];$e(De,Y,B),K.add(De)}else $e(ve,Y,B),K.add(ve)}),E.pop(),d=null,K},this.compileAsync=function(b,k,Y=null){const K=this.compile(b,k,Y);return new Promise(B=>{function ve(){if(K.forEach(function(Te){Me.get(Te).currentProgram.isReady()&&K.delete(Te)}),K.size===0){B(b);return}setTimeout(ve,10)}me.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Oe=null;function Ge(b){Oe&&Oe(b)}function It(){At.stop()}function ut(){At.start()}const At=new Uh;At.setAnimationLoop(Ge),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(b){Oe=b,x.setAnimationLoop(b),b===null?At.stop():At.start()},x.addEventListener("sessionstart",It),x.addEventListener("sessionend",ut),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(x.cameraAutoUpdate===!0&&x.updateCamera(k),k=x.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,k,P),d=fe.get(b,E.length),d.init(k),E.push(d),Ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(Ne),xe=this.localClippingEnabled,te=ee.init(this.clippingPlanes,xe),m=re.get(b,A.length),m.init(),A.push(m),x.enabled===!0&&x.isPresenting===!0){const ve=M.xr.getDepthSensingMesh();ve!==null&&Vt(ve,k,-1/0,M.sortObjects)}Vt(b,k,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(pe,X),Je=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,Je&&Ee.addToRenderList(m,b),this.info.render.frame++,te===!0&&ee.beginShadows();const Y=d.state.shadowsArray;ne.render(Y,b,k),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,B=m.transmissive;if(d.setupLights(),k.isArrayCamera){const ve=k.cameras;if(B.length>0)for(let Te=0,De=ve.length;Te<De;Te++){const Ue=ve[Te];An(K,B,b,Ue)}Je&&Ee.render(b);for(let Te=0,De=ve.length;Te<De;Te++){const Ue=ve[Te];yt(m,b,Ue,Ue.viewport)}}else B.length>0&&An(K,B,b,k),Je&&Ee.render(b),yt(m,b,k);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(M,b,k),st.resetDefaultState(),S=-1,y=null,E.pop(),E.length>0?(d=E[E.length-1],te===!0&&ee.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Vt(b,k,Y,K){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){K&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ne);const Te=F.update(b),De=b.material;De.visible&&m.push(b,Te,De,Y,Ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const Te=F.update(b),De=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Ve.copy(Te.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Ne)),Array.isArray(De)){const Ue=Te.groups;for(let Xe=0,Ye=Ue.length;Xe<Ye;Xe++){const Ie=Ue[Xe],ot=De[Ie.materialIndex];ot&&ot.visible&&m.push(b,Te,ot,Y,Ve.z,Ie)}}else De.visible&&m.push(b,Te,De,Y,Ve.z,null)}}const ve=b.children;for(let Te=0,De=ve.length;Te<De;Te++)Vt(ve[Te],k,Y,K)}function yt(b,k,Y,K){const B=b.opaque,ve=b.transmissive,Te=b.transparent;d.setupLightsView(Y),te===!0&&ee.setGlobalState(M.clippingPlanes,Y),K&&ge.viewport(C.copy(K)),B.length>0&&_t(B,k,Y),ve.length>0&&_t(ve,k,Y),Te.length>0&&_t(Te,k,Y),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function An(b,k,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[K.id]===void 0&&(d.state.transmissionRenderTarget[K.id]=new Ki(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?ya:Kn,minFilter:hi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ve=d.state.transmissionRenderTarget[K.id],Te=K.viewport||C;ve.setSize(Te.z,Te.w);const De=M.getRenderTarget();M.setRenderTarget(ve),M.getClearColor(Q),ae=M.getClearAlpha(),ae<1&&M.setClearColor(16777215,.5),M.clear(),Je&&Ee.render(Y);const Ue=M.toneMapping;M.toneMapping=Di;const Xe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),d.setupLightsView(K),te===!0&&ee.setGlobalState(M.clippingPlanes,K),_t(b,Y,K),w.updateMultisampleRenderTarget(ve),w.updateRenderTargetMipmap(ve),me.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ie=0,ot=k.length;Ie<ot;Ie++){const bt=k[Ie],wt=bt.object,an=bt.geometry,ct=bt.material,Fe=bt.group;if(ct.side===Yn&&wt.layers.test(K.layers)){const Qn=ct.side;ct.side=hn,ct.needsUpdate=!0,sn(wt,Y,K,an,ct,Fe),ct.side=Qn,ct.needsUpdate=!0,Ye=!0}}Ye===!0&&(w.updateMultisampleRenderTarget(ve),w.updateRenderTargetMipmap(ve))}M.setRenderTarget(De),M.setClearColor(Q,ae),Xe!==void 0&&(K.viewport=Xe),M.toneMapping=Ue}function _t(b,k,Y){const K=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ve=b.length;B<ve;B++){const Te=b[B],De=Te.object,Ue=Te.geometry,Xe=K===null?Te.material:K,Ye=Te.group;De.layers.test(Y.layers)&&sn(De,k,Y,Ue,Xe,Ye)}}function sn(b,k,Y,K,B,ve){b.onBeforeRender(M,k,Y,K,B,ve),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(M,k,Y,K,b,ve),B.transparent===!0&&B.side===Yn&&B.forceSinglePass===!1?(B.side=hn,B.needsUpdate=!0,M.renderBufferDirect(Y,k,K,B,b,ve),B.side=Ui,B.needsUpdate=!0,M.renderBufferDirect(Y,k,K,B,b,ve),B.side=Yn):M.renderBufferDirect(Y,k,K,B,b,ve),b.onAfterRender(M,k,Y,K,B,ve)}function St(b,k,Y){k.isScene!==!0&&(k=it);const K=Me.get(b),B=d.state.lights,ve=d.state.shadowsArray,Te=B.state.version,De=J.getParameters(b,B.state,ve,k,Y),Ue=J.getProgramCacheKey(De);let Xe=K.programs;K.environment=b.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(b.isMeshStandardMaterial?z:_).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Xe===void 0&&(b.addEventListener("dispose",oe),Xe=new Map,K.programs=Xe);let Ye=Xe.get(Ue);if(Ye!==void 0){if(K.currentProgram===Ye&&K.lightsStateVersion===Te)return Ea(b,De),Ye}else De.uniforms=J.getUniforms(b),b.onBeforeCompile(De,M),Ye=J.acquireProgram(De,Ue),Xe.set(Ue,Ye),K.uniforms=De.uniforms;const Ie=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=ee.uniform),Ea(b,De),K.needsLights=nd(b),K.lightsStateVersion=Te,K.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),K.currentProgram=Ye,K.uniformsList=null,Ye}function Js(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=dr.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Ea(b,k){const Y=Me.get(b);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function ed(b,k,Y,K,B){k.isScene!==!0&&(k=it),w.resetTextureUnits();const ve=k.fog,Te=K.isMeshStandardMaterial?k.environment:null,De=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Qi,Ue=(K.isMeshStandardMaterial?z:_).get(K.envMap||Te),Xe=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ie=!!Y.morphAttributes.position,ot=!!Y.morphAttributes.normal,bt=!!Y.morphAttributes.color;let wt=Di;K.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(wt=M.toneMapping);const an=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ct=an!==void 0?an.length:0,Fe=Me.get(K),Qn=d.state.lights;if(te===!0&&(xe===!0||b!==y)){const gn=b===y&&K.id===S;ee.setState(K,b,gn)}let ht=!1;K.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Qn.state.version||Fe.outputColorSpace!==De||B.isBatchedMesh&&Fe.batching===!1||!B.isBatchedMesh&&Fe.batching===!0||B.isBatchedMesh&&Fe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Fe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Fe.instancing===!1||!B.isInstancedMesh&&Fe.instancing===!0||B.isSkinnedMesh&&Fe.skinning===!1||!B.isSkinnedMesh&&Fe.skinning===!0||B.isInstancedMesh&&Fe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Fe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Fe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Fe.instancingMorph===!1&&B.morphTexture!==null||Fe.envMap!==Ue||K.fog===!0&&Fe.fog!==ve||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ee.numPlanes||Fe.numIntersection!==ee.numIntersection)||Fe.vertexAlphas!==Xe||Fe.vertexTangents!==Ye||Fe.morphTargets!==Ie||Fe.morphNormals!==ot||Fe.morphColors!==bt||Fe.toneMapping!==wt||Fe.morphTargetsCount!==ct)&&(ht=!0):(ht=!0,Fe.__version=K.version);let Rn=Fe.currentProgram;ht===!0&&(Rn=St(K,k,B));let ts=!1,fn=!1,Qs=!1;const Et=Rn.getUniforms(),Vn=Fe.uniforms;if(ge.useProgram(Rn.program)&&(ts=!0,fn=!0,Qs=!0),K.id!==S&&(S=K.id,fn=!0),ts||y!==b){ge.buffers.depth.getReversed()?(ye.copy(b.projectionMatrix),du(ye),uu(ye),Et.setValue(O,"projectionMatrix",ye)):Et.setValue(O,"projectionMatrix",b.projectionMatrix),Et.setValue(O,"viewMatrix",b.matrixWorldInverse);const _i=Et.map.cameraPosition;_i!==void 0&&_i.setValue(O,ze.setFromMatrixPosition(b.matrixWorld)),de.logarithmicDepthBuffer&&Et.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Et.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,fn=!0,Qs=!0)}if(B.isSkinnedMesh){Et.setOptional(O,B,"bindMatrix"),Et.setOptional(O,B,"bindMatrixInverse");const gn=B.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Et.setValue(O,"boneTexture",gn.boneTexture,w))}B.isBatchedMesh&&(Et.setOptional(O,B,"batchingTexture"),Et.setValue(O,"batchingTexture",B._matricesTexture,w),Et.setOptional(O,B,"batchingIdTexture"),Et.setValue(O,"batchingIdTexture",B._indirectTexture,w),Et.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&Et.setValue(O,"batchingColorTexture",B._colorsTexture,w));const ea=Y.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0)&&Re.update(B,Y,Rn),(fn||Fe.receiveShadow!==B.receiveShadow)&&(Fe.receiveShadow=B.receiveShadow,Et.setValue(O,"receiveShadow",B.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Vn.envMap.value=Ue,Vn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(Vn.envMapIntensity.value=k.environmentIntensity),fn&&(Et.setValue(O,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&td(Vn,Qs),ve&&K.fog===!0&&ie.refreshFogUniforms(Vn,ve),ie.refreshMaterialUniforms(Vn,K,Z,se,d.state.transmissionRenderTarget[b.id]),dr.upload(O,Js(Fe),Vn,w)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(dr.upload(O,Js(Fe),Vn,w),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Et.setValue(O,"center",B.center),Et.setValue(O,"modelViewMatrix",B.modelViewMatrix),Et.setValue(O,"normalMatrix",B.normalMatrix),Et.setValue(O,"modelMatrix",B.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const gn=K.uniformsGroups;for(let _i=0,gi=gn.length;_i<gi;_i++){const Cl=gn[_i];N.update(Cl,Rn),N.bind(Cl,Rn)}}return Rn}function td(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function nd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,k,Y){Me.get(b.texture).__webglTexture=k,Me.get(b.depthTexture).__webglTexture=Y;const K=Me.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const Y=Me.get(b);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,Y=0){P=b,D=k,T=Y;let K=!0,B=null,ve=!1,Te=!1;if(b){const Ue=Me.get(b);if(Ue.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(Ue.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Ue.__hasExternalTextures)w.rebindTextures(b,Me.get(b.texture).__webglTexture,Me.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ie=b.depthTexture;if(Ue.__boundDepthTexture!==Ie){if(Ie!==null&&Me.has(Ie)&&(b.width!==Ie.image.width||b.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Xe=b.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Te=!0);const Ye=Me.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?B=Ye[k][Y]:B=Ye[k],ve=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?B=Me.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?B=Ye[Y]:B=Ye,C.copy(b.viewport),V.copy(b.scissor),$=b.scissorTest}else C.copy(he).multiplyScalar(Z).floor(),V.copy(Ae).multiplyScalar(Z).floor(),$=Le;if(ge.bindFramebuffer(O.FRAMEBUFFER,B)&&K&&ge.drawBuffers(b,B),ge.viewport(C),ge.scissor(V),ge.setScissorTest($),ve){const Ue=Me.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ue.__webglTexture,Y)}else if(Te){const Ue=Me.get(b.texture),Xe=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.__webglTexture,Y||0,Xe)}S=-1},this.readRenderTargetPixels=function(b,k,Y,K,B,ve,Te){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){ge.bindFramebuffer(O.FRAMEBUFFER,De);try{const Ue=b.texture,Xe=Ue.format,Ye=Ue.type;if(!de.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-K&&Y>=0&&Y<=b.height-B&&O.readPixels(k,Y,K,B,He.convert(Xe),He.convert(Ye),ve)}finally{const Ue=P!==null?Me.get(P).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(b,k,Y,K,B,ve,Te){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Me.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(De=De[Te]),De){const Ue=b.texture,Xe=Ue.format,Ye=Ue.type;if(!de.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-K&&Y>=0&&Y<=b.height-B){ge.bindFramebuffer(O.FRAMEBUFFER,De);const Ie=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ie),O.bufferData(O.PIXEL_PACK_BUFFER,ve.byteLength,O.STREAM_READ),O.readPixels(k,Y,K,B,He.convert(Xe),He.convert(Ye),0);const ot=P!==null?Me.get(P).__webglFramebuffer:null;ge.bindFramebuffer(O.FRAMEBUFFER,ot);const bt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await hu(O,bt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ie),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ve),O.deleteBuffer(Ie),O.deleteSync(bt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,Y=0){b.isTexture!==!0&&(pa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const K=Math.pow(2,-Y),B=Math.floor(b.image.width*K),ve=Math.floor(b.image.height*K),Te=k!==null?k.x:0,De=k!==null?k.y:0;w.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Te,De,B,ve),ge.unbindTexture()},this.copyTextureToTexture=function(b,k,Y=null,K=null,B=0){b.isTexture!==!0&&(pa("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],k=arguments[2],B=arguments[3]||0,Y=null);let ve,Te,De,Ue,Xe,Ye,Ie,ot,bt;const wt=b.isCompressedTexture?b.mipmaps[B]:b.image;Y!==null?(ve=Y.max.x-Y.min.x,Te=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,Ue=Y.min.x,Xe=Y.min.y,Ye=Y.isBox3?Y.min.z:0):(ve=wt.width,Te=wt.height,De=wt.depth||1,Ue=0,Xe=0,Ye=0),K!==null?(Ie=K.x,ot=K.y,bt=K.z):(Ie=0,ot=0,bt=0);const an=He.convert(k.format),ct=He.convert(k.type);let Fe;k.isData3DTexture?(w.setTexture3D(k,0),Fe=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(w.setTexture2DArray(k,0),Fe=O.TEXTURE_2D_ARRAY):(w.setTexture2D(k,0),Fe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const Qn=O.getParameter(O.UNPACK_ROW_LENGTH),ht=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Rn=O.getParameter(O.UNPACK_SKIP_PIXELS),ts=O.getParameter(O.UNPACK_SKIP_ROWS),fn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),O.pixelStorei(O.UNPACK_SKIP_ROWS,Xe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye);const Qs=b.isDataArrayTexture||b.isData3DTexture,Et=k.isDataArrayTexture||k.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Vn=Me.get(b),ea=Me.get(k),gn=Me.get(Vn.__renderTarget),_i=Me.get(ea.__renderTarget);ge.bindFramebuffer(O.READ_FRAMEBUFFER,gn.__webglFramebuffer),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let gi=0;gi<De;gi++)Qs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.get(b).__webglTexture,B,Ye+gi),b.isDepthTexture?(Et&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.get(k).__webglTexture,B,bt+gi),O.blitFramebuffer(Ue,Xe,ve,Te,Ie,ot,ve,Te,O.DEPTH_BUFFER_BIT,O.NEAREST)):Et?O.copyTexSubImage3D(Fe,B,Ie,ot,bt+gi,Ue,Xe,ve,Te):O.copyTexSubImage2D(Fe,B,Ie,ot,bt+gi,Ue,Xe,ve,Te);ge.bindFramebuffer(O.READ_FRAMEBUFFER,null),ge.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Et?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Fe,B,Ie,ot,bt,ve,Te,De,an,ct,wt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Fe,B,Ie,ot,bt,ve,Te,De,an,wt.data):O.texSubImage3D(Fe,B,Ie,ot,bt,ve,Te,De,an,ct,wt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,Ie,ot,ve,Te,an,ct,wt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,Ie,ot,wt.width,wt.height,an,wt.data):O.texSubImage2D(O.TEXTURE_2D,B,Ie,ot,ve,Te,an,ct,wt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Qn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Rn),O.pixelStorei(O.UNPACK_SKIP_ROWS,ts),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fn),B===0&&k.generateMipmaps&&O.generateMipmap(Fe),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,k,Y=null,K=null,B=0){return b.isTexture!==!0&&(pa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,b=arguments[2],k=arguments[3],B=arguments[4]||0),pa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,Y,K,B)},this.initRenderTarget=function(b){Me.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){D=0,T=0,P=null,ge.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}class S_ extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class w_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=il,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new U;class Ci{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),a=pt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ci(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class E_ extends Jt{constructor(e=null,t=1,n=1,s,a,r,o,l,c=dn,h=dn,u,f){super(null,r,o,l,c,h,s,a,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wl extends ba{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mr=new U,_r=new U,Rc=new Rt,aa=new Mr,qa=new js,Jr=new U,Cc=new U;class Bh extends un{constructor(e=new Tn,t=new wl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)mr.fromBufferAttribute(t,s-1),_r.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=mr.distanceTo(_r);e.setAttribute("lineDistance",new Gn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=a,e.ray.intersectsSphere(qa)===!1)return;Rc.copy(s).invert(),aa.copy(e.ray).applyMatrix4(Rc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const d=h.getX(v),A=h.getX(v+1),E=Ya(this,e,aa,l,d,A);E&&t.push(E)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),d=Ya(this,e,aa,l,v,m);d&&t.push(d)}}else{const p=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=c){const d=Ya(this,e,aa,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=Ya(this,e,aa,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ya(i,e,t,n,s,a){const r=i.geometry.attributes.position;if(mr.fromBufferAttribute(r,s),_r.fromBufferAttribute(r,a),t.distanceSqToSegment(mr,_r,Jr,Cc)>n)return;Jr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Jr);if(!(l<e.near||l>e.far))return{distance:l,point:Cc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class zh extends Bh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class T_ extends Tn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new U,a=new U;if(e.index!==null){const r=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,p=u.count;for(let g=f,v=f+p;g<v;g+=3)for(let m=0;m<3;m++){const d=o.getX(g+m),A=o.getX(g+(m+1)%3);s.fromBufferAttribute(r,d),a.fromBufferAttribute(r,A),Pc(s,a,n)===!0&&(t.push(s.x,s.y,s.z),t.push(a.x,a.y,a.z))}}}else{const r=e.attributes.position;for(let o=0,l=r.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(r,h),a.fromBufferAttribute(r,u),Pc(s,a,n)===!0&&(t.push(s.x,s.y,s.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new Gn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Pc(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class A_ extends Tn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class al extends w_{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Lc=new Rt;class R_{constructor(e,t,n=0,s=1/0){this.ray=new Mr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lc),this}intersectObject(e,t=!0,n=[]){return rl(e,this,n,t),n.sort(Dc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)rl(e[s],this,n,t);return n.sort(Dc),n}}function Dc(i,e){return i.distance-e.distance}function rl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)rl(a[r],e,t,!0)}}class Uc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ic=new U,ja=new U;class C_{constructor(e=new U,t=new U){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ic.subVectors(e,this.start),ja.subVectors(this.end,this.start);const n=ja.dot(ja);let a=ja.dot(Ic)/n;return t&&(a=Yt(a,0,1)),a}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class P_ extends es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");const Nc={type:"change"},El={type:"start"},Hh={type:"end"},Za=new Mr,Fc=new Ri,L_=Math.cos(70*yl.DEG2RAD),Nt=new U,rn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qr=1e-6;class D_ extends P_{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Ji,this._lastTargetPosition=new U,this._quat=new Ji().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uc,this._sphericalDelta=new Uc,this._scale=1,this._panOffset=new U,this._rotateStart=new qe,this._rotateEnd=new qe,this._rotateDelta=new qe,this._panStart=new qe,this._panEnd=new qe,this._panDelta=new qe,this._dollyStart=new qe,this._dollyEnd=new qe,this._dollyDelta=new qe,this._dollyDirection=new U,this._mouse=new qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=I_.bind(this),this._onPointerDown=U_.bind(this),this._onPointerUp=N_.bind(this),this._onContextMenu=G_.bind(this),this._onMouseWheel=k_.bind(this),this._onKeyDown=B_.bind(this),this._onTouchStart=z_.bind(this),this._onTouchMove=H_.bind(this),this._onMouseDown=F_.bind(this),this._onMouseMove=O_.bind(this),this._interceptControlDown=V_.bind(this),this._interceptControlUp=$_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nc),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=rn:n>Math.PI&&(n-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Nt.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Za.origin.copy(this.object.position),Za.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Za.direction))<L_?this.object.lookAt(this.target):(Fc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Za.intersectPlane(Fc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Qr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qr||this._lastTargetPosition.distanceToSquared(this.target)>Qr?(this.dispatchEvent(Nc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Nt.copy(s).sub(this.target);let a=Nt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,r=n.width,o=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function U_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function I_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function N_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hh),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function F_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case Is.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case Is.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(El)}function O_(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function k_(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(El),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hh))}function B_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function z_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(El)}function H_(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function G_(i){this.enabled!==!1&&i.preventDefault()}function V_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const W_=i=>getComputedStyle(document.documentElement).getPropertyValue(i).trim();function Oc(){const i=e=>new tt(W_(e));return{bg:i("--stage"),neg:i("--neg"),pos:i("--pos"),zero:i("--zero"),grid:i("--cell-line"),empty:i("--empty"),hi:i("--ink"),fill:i("--flow"),frame:i("--frame"),accent:i("--accent")}}class X_{constructor(e,t,n){je(this,"renderer");je(this,"scene",new S_);je(this,"camera",new Sn(30,1,1,8e3));je(this,"controls");je(this,"sheets",[]);je(this,"labels",[]);je(this,"resized",[]);je(this,"themed",[]);je(this,"lines",[]);je(this,"theme");je(this,"onHover",()=>{});je(this,"onTick",()=>{});je(this,"stage");je(this,"labelLayer");je(this,"ray",new R_);je(this,"pointer",null);je(this,"pointerMoved",!1);je(this,"dirty",3);je(this,"last",performance.now());je(this,"fly",null);je(this,"framed",null);je(this,"userMoved",!1);this.stage=e,this.labelLayer=n,at.enabled=!1,this.renderer=new M_({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Qi,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.theme=Oc(),this.scene.background=this.theme.bg.clone(),this.controls=new D_(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.zoomToCursor=!0,this.controls.minDistance=8,this.controls.maxDistance=3200,this.controls.addEventListener("start",()=>{this.fly=null,this.userMoved=!0}),this.controls.addEventListener("change",()=>this.touch()),t.addEventListener("pointermove",s=>this.setPointer(s)),t.addEventListener("pointerdown",s=>this.setPointer(s)),t.addEventListener("pointerleave",()=>{this.pointer=null,this.onHover(null)}),new ResizeObserver(()=>this.resize()).observe(e),this.resize(),requestAnimationFrame(()=>this.loop())}add(e){e.setTheme(this.theme),this.sheets.push(e),this.scene.add(e.group)}addLabel(e,t,n,s=""){const a=document.createElement("div");return a.className=`label ${s}`.trim(),a.innerHTML=e,this.labelLayer.append(a),this.labels.push({el:a,anchor:t,rank:n}),a}addLine(e,t=!1){const n=new wl({color:this.theme.frame});this.lines.push(n);const s=new Tn().setFromPoints(e),a=t?new zh(s,n):new Bh(s,n);return this.scene.add(a),a}applyTheme(){this.theme=Oc(),this.scene.background.copy(this.theme.bg);for(const e of this.sheets)e.setTheme(this.theme);for(const e of this.lines)e.color.copy(this.theme.frame);for(const e of this.themed)e();this.touch()}touch(e=2){this.dirty=Math.max(this.dirty,e)}frame(e,t,n=1.12,s=1.3,a={}){this.framed={box:e.clone(),dir:t.clone().normalize(),pad:n,inset:a},this.userMoved=!1,this.pointerMoved=!0;const[r,o]=this.fit(e,this.framed.dir,n,a);s<=0?(this.camera.position.copy(r),this.controls.target.copy(o),this.fly=null):this.fly={from:[this.camera.position.clone(),this.controls.target.clone()],to:[r,o],t:0,d:s},this.touch()}follow(e,t=.45){this.framed&&!this.userMoved&&this.frame(e,this.framed.dir,this.framed.pad,t,this.framed.inset)}fit(e,t,n,s){const a=e.getCenter(new U),r=new U().crossVectors(new U(0,1,0),t).normalize(),o=new U().crossVectors(t,r).normalize();let l=0,c=0,h=0;for(let D=0;D<8;D++){const T=new U(D&1?e.max.x:e.min.x,D&2?e.max.y:e.min.y,D&4?e.max.z:e.min.z).sub(a);l=Math.max(l,Math.abs(T.dot(r))),c=Math.max(c,Math.abs(T.dot(o))),h=Math.max(h,T.dot(t))}const u=Math.tan(yl.degToRad(this.camera.fov/2)),f=Math.max(1,this.stage.clientWidth),p=Math.max(1,this.stage.clientHeight),[g,v,m,d]=[s.top??0,s.right??0,s.bottom??0,s.left??0],A=Math.max(.2,1-(d+v)/f),E=Math.max(.2,1-(g+m)/p),M=Math.max(c/(u*E),l/(u*this.camera.aspect*A))*n+h,G=a.clone().addScaledVector(r,(v-d)/f*M*u*this.camera.aspect).addScaledVector(o,(g-m)/p*M*u);return[G.clone().addScaledVector(t,M),G]}setPointer(e){const t=this.renderer.domElement.getBoundingClientRect();this.pointer={x:e.clientX-t.left,y:e.clientY-t.top},this.pointerMoved=!0,this.touch(1)}resize(){const e=Math.max(1,this.stage.clientWidth),t=Math.max(1,this.stage.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();for(const n of this.resized)n(e,t);this.framed&&!this.userMoved&&this.frame(this.framed.box,this.framed.dir,this.framed.pad,this.fly?this.fly.d:0,this.framed.inset),this.touch()}pick(){if(!this.pointer)return;const e=this.stage.clientWidth,t=this.stage.clientHeight;this.ray.setFromCamera(new qe(this.pointer.x/e*2-1,-(this.pointer.y/t)*2+1),this.camera);const n=this.sheets.filter(s=>s.shown&&s.reveal>.99).map(s=>s.mesh);for(const s of this.ray.intersectObjects(n,!1)){const a=s.object.userData.sheet,r=s.uv?a.cellAt(s.uv):null;if(r){this.onHover({sheet:a,...r,x:this.pointer.x,y:this.pointer.y});return}}this.onHover(null)}placeLabels(){const e=this.stage.clientWidth,t=this.stage.clientHeight,n=new U,s=this.labels.map(r=>({l:r,rank:r.rank()})).sort((r,o)=>(r.rank??1e9)-(o.rank??1e9)),a=[];for(const{l:r,rank:o}of s){n.copy(r.anchor).project(this.camera);let l=o!==null&&n.z>-1&&n.z<1&&Math.abs(n.x)<1.1&&Math.abs(n.y)<1.1;if(l){const c=Math.round((n.x*.5+.5)*e),h=Math.round((-n.y*.5+.5)*t),u=r.el.classList,[f,p]=u.contains("left")?[-1,-.5]:u.contains("side")?[0,-.5]:u.contains("under")?[-.5,0]:u.contains("below")?[0,0]:[0,-1],g=r.el.offsetWidth,v=r.el.offsetHeight,m=f===0&&p!==-.5?Math.max(Math.min(c,e-g-4),Math.min(c,4)):c,d=[m+f*g,h+p*v,m+(f+1)*g,h+(p+1)*v],[A,E]=u.contains("axis")?[2,1]:[6,2];l=!a.some(M=>d[0]<M[2]+A&&d[2]>M[0]-A&&d[1]<M[3]+E&&d[3]>M[1]-E),l&&(a.push(d),r.el.style.transform=`translate(${m}px, ${h}px) translate(${f*100}%, ${p*100}%)`)}r.el.classList.toggle("on",l)}}loop(){requestAnimationFrame(()=>this.loop());const e=performance.now(),t=Math.min(.05,(e-this.last)/1e3);if(this.last=e,this.fly){this.fly.t=Math.min(1,this.fly.t+t/this.fly.d);const s=this.fly.t<.5?4*this.fly.t**3:1-(-2*this.fly.t+2)**3/2;this.camera.position.lerpVectors(this.fly.from[0],this.fly.to[0],s),this.controls.target.lerpVectors(this.fly.from[1],this.fly.to[1],s),this.fly.t>=1&&(this.fly=null),this.touch()}this.onTick(t);let n=!1;for(const s of this.sheets)n=s.tick(t)||n;n&&this.touch(),!(this.dirty<=0)&&(this.dirty--,this.controls.update(),(this.pointerMoved||n||this.fly)&&(this.pointerMoved=!1,this.pick()),this.placeLabels(),this.renderer.render(this.scene,this.camera))}}const q_={signed:0,image:1,mask:2,unit:3},gr=4,Y_=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,j_=`
uniform sampler2D uTex, uHeat;
uniform vec2 uDims;
uniform int uKind;
uniform float uBits, uMin, uMax;
uniform vec4 uPartEnd, uPartScale;
uniform vec2 uBorders, uDividers;
uniform vec3 uNeg, uPos, uZero, uGrid, uEmpty, uBg, uHi, uFill;
uniform float uReveal, uFade, uGap, uSelDim, uHeatOn, uInner;
uniform vec4 uSel[${gr}];
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
    // the smaller squares inside each cell, once they are big enough on screen to tell apart
    if (uInner > 0.0) {
      vec2 small = px * (1.0 - uGap) / uInner;                       // pixels per smaller square
      vec2 gi = fract(g * uInner);
      vec2 di = min(gi, 1.0 - gi) * small;
      float inner = (1.0 - smoothstep(0.3, 1.1, min(di.x, di.y))) * smoothstep(4.0, 9.0, min(small.x, small.y));
      col = mix(col, uBg, inner * 0.7);
    }
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
    for (int i = 0; i < ${gr}; i++) {
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
}`;class Z_{constructor(e){je(this,"spec");je(this,"mesh");je(this,"frame");je(this,"group",new Rs);je(this,"reveal",0);je(this,"revealTo",0);je(this,"fade",1);je(this,"fadeTo",1);je(this,"gap",0);je(this,"gapTo",0);je(this,"shown",!0);this.spec=e;const t=e.parts??[{end:e.cols,scale:1}],n=l=>t[Math.min(l,t.length-1)],s=new Jn({vertexShader:Y_,fragmentShader:j_,side:Yn,uniforms:{uTex:{value:e.texture},uDims:{value:new qe(e.cols,e.rows)},uKind:{value:q_[e.kind]},uBits:{value:e.bits??8},uMin:{value:e.min??0},uMax:{value:e.max??1},uPartEnd:{value:new mt(n(0).end,n(1).end,n(2).end,n(3).end)},uPartScale:{value:new mt(n(0).scale,n(1).scale,n(2).scale,n(3).scale)},uNeg:{value:new tt},uPos:{value:new tt},uZero:{value:new tt},uGrid:{value:new tt},uEmpty:{value:new tt},uBg:{value:new tt},uHi:{value:new tt},uFill:{value:new tt},uReveal:{value:0},uFade:{value:1},uGap:{value:0},uSelDim:{value:.45},uBorders:{value:new qe(e.borders==="all"||!e.borders?1:0,e.borders==="none"?0:1)},uDividers:{value:new qe(e.dividers?1:0,e.dividers==="both"?1:0)},uHeat:{value:null},uHeatOn:{value:0},uInner:{value:e.inner??0},uSel:{value:Array.from({length:gr},()=>new mt)},uSelN:{value:0}}});this.mesh=new Bn(new Sa(e.width,e.height),s),this.mesh.userData.sheet=this;const a=e.width/2,r=e.height/2,o=new Tn().setFromPoints([[-a,-r],[a,-r],[a,r],[-a,r]].map(([l,c])=>new U(l,c,0)));this.frame=new zh(o,new wl),this.group.add(this.mesh,this.frame),this.group.position.set(...e.pos)}setTheme(e){const t=this.mesh.material.uniforms;t.uNeg.value.copy(e.neg),t.uPos.value.copy(e.pos),t.uZero.value.copy(e.zero),t.uGrid.value.copy(e.grid),t.uEmpty.value.copy(e.empty),t.uBg.value.copy(e.bg),t.uHi.value.copy(e.hi),t.uFill.value.copy(e.fill),this.frame.material.color.copy(this.spec.trained?e.accent:e.frame)}setTexture(e,t){const n=this.mesh.material.uniforms;n.uTex.value=e,n.uDims.value.set(t.cols,t.rows),n.uBits.value=t.bits??8,n.uMin.value=t.min??0,n.uMax.value=t.max??1,this.spec.cols=t.cols,this.spec.rows=t.rows}setScale(e){this.mesh.material.uniforms.uPartScale.value.setScalar(e)}setHeat(e,t="light"){const n=this.mesh.material.uniforms;n.uHeat.value=e,n.uHeatOn.value=e?t==="mark"?2:1:0}moveTo(e,t,n,s=!1){this.spec.pos=[e,t,n],s&&this.group.position.set(e,t,n)}select(e){const t=this.mesh.material.uniforms,n=Math.min(e.length,gr);for(let s=0;s<n;s++)t.uSel.value[s].set(...e[s]);t.uSelN.value=n}tick(e){const t=(h,u,f)=>{const p=u-h;return Math.abs(p)<.002?u:h+p*Math.min(1,e*f)},n=this.group.position,s=this.reveal+this.fade+this.gap+n.x+n.y+n.z,a=e/(this.spec.sweep??1.1),[r,o,l]=this.spec.pos;n.set(t(n.x,r,9),t(n.y,o,9),t(n.z,l,9)),this.reveal=this.reveal<this.revealTo?Math.min(this.revealTo,this.reveal+a):this.revealTo,this.fade=t(this.fade,this.fadeTo,6),this.gap=t(this.gap,this.gapTo,5);const c=this.mesh.material.uniforms;return c.uReveal.value=this.reveal,c.uFade.value=this.fade,c.uGap.value=this.gap,this.group.scale.setScalar(1/(1-this.gap)),this.group.visible=this.shown,s!==this.reveal+this.fade+this.gap+n.x+n.y+n.z}cellAt(e){const{cols:t,rows:n}=this.spec,s=e.x*t,a=(1-e.y)*n,r=Math.min(t-1,Math.floor(s)),o=Math.min(n-1,Math.floor(a));if(this.gap>0){const l=(s-r-.5)/(1-this.gap)+.5,c=(a-o-.5)/(1-this.gap)+.5;if(l<0||l>1||c<0||c>1)return null}return{col:r,row:o}}box(){const e=1/(1-this.gapTo),[t,n,s]=this.spec.pos,a=this.spec.width/2*e,r=this.spec.height/2*e;return new En(new U(t-a,n-r,s),new U(t+a,n+r,s))}}const K_={episode:5,frame:158,task:"Put the yellow cube into the black basket"},J_={vlm_layers:16,expert_layers:16,vision_layers:12,vlm_width:960,expert_width:720,vision_width:768,heads:15,head_dim:64,patch:16,image:512,chunk:50,max_dim:32,num_steps:10},Q_={vision_encoder:86433024,connector:11796480,vlm_text_16_layers:204626880,action_expert:98245840,state_proj:31680,trainable:99880992},eg={mask:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],text:["Put"," the"," yellow"," cube"," into"," the"," black"," basket",`
`,"<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>"]},tg={len:177},ng={names:["base","shoulder","elbow","forearm roll","wrist pitch","wrist roll","gripper"],deg:[5.9,32.1,34.5,4,23.4,-8.6,43.9],mean:[17.44,-11.73,37.92,5.48,38.11,-6.56,60.04],norm:[-.42,.945,-.101,-.208,-.668,-.236,-1.35],padded:[-.42,.945,-.101,-.208,-.668,-.236,-1.35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},ig={table_embed:{file:"data/table_embed.png",cols:1024,rows:768,bits:8,min:-1.47314453125,max:1.47314453125,scale:.40234375},table_encoded:{file:"data/table_encoded.png",cols:1024,rows:768,bits:8,min:-9,max:9,scale:2.390625},table_merged:{file:"data/table_merged.png",cols:64,rows:960,bits:16,min:-87,max:38,scale:11.125},wrist_embed:{file:"data/wrist_embed.png",cols:1024,rows:768,bits:8,min:-1.20751953125,max:1.20751953125,scale:.375},wrist_encoded:{file:"data/wrist_encoded.png",cols:1024,rows:768,bits:8,min:-9,max:9,scale:2.4375},wrist_merged:{file:"data/wrist_merged.png",cols:64,rows:960,bits:16,min:-83.5,max:41.25,scale:12.3125},lang_embed:{file:"data/lang_embed.png",cols:48,rows:960,bits:16,min:-2.390625,max:1.109375,scale:.19921875},state_token:{file:"data/state_token.png",cols:1,rows:960,bits:16,min:-.63330078125,max:.74169921875,scale:.5316504240036011},sequence:{file:"data/sequence.png",cols:177,rows:960,bits:16,min:-2704,max:1280,scale:332,parts:[{name:"table camera",start:0,end:64,scale:344},{name:"wrist camera",start:64,end:128,scale:384},{name:"instruction",start:128,end:176,scale:7.59375},{name:"arm readings",start:176,end:177,scale:.53173828125}]},mask:{file:"data/mask.png",cols:177,rows:177,bits:1},connector_matrix:{file:"data/connector_matrix.png",cols:768,rows:960,bits:16,min:-.193359375,max:.189453125,scale:.068359375},exp_x:{file:"data/exp_x.png",cols:50,rows:32,bits:16,min:-3.0703125,max:3.423828125,scale:2.2871875762939453},exp_v:{file:"data/exp_v.png",cols:50,rows:32,bits:16,min:-3.955078125,max:4.03125,scale:2.1665239334106445},exp_last:{file:"data/layers/exp_last_00.png",cols:50,rows:720,bits:8,min:-1.4500000476837158,max:1.4500000476837158,scale:1,norm:!0,parts:[{name:"all",end:50,scale:7.5}]},table_sizes:{file:"data/table_sizes.png",cols:32,rows:32,blocks:12,bits:16,min:4.314220428466797,max:797.6415405273438,scale:418.288818359375},wrist_sizes:{file:"data/wrist_sizes.png",cols:32,rows:32,blocks:12,bits:16,min:4.434171676635742,max:794.8687744140625,scale:403.6320495605469},den_x:{file:"data/den_x.png",cols:50,rows:32,blocks:11,bits:16,min:-3.0703125,max:3.423828125,scale:1.9170112609863281},den_v:{file:"data/den_v.png",cols:50,rows:32,blocks:10,bits:16,min:-3.982421875,max:4.03125,scale:2.125040054321289},tr_a:{file:"data/tr_a.png",cols:50,rows:32,blocks:1,bits:16,min:-1.3662109375,max:1.7900390625,scale:1.349609375},tr_x:{file:"data/tr_x.png",cols:50,rows:32,blocks:3,bits:16,min:-2.763671875,max:3.08203125,scale:1.6816797256469727},tr_u:{file:"data/tr_u.png",cols:50,rows:32,blocks:1,bits:16,min:-3.953125,max:3.923828125,scale:2.4004297256469727},tr_v:{file:"data/tr_v.png",cols:50,rows:32,blocks:3,bits:16,min:-4.234375,max:3.9453125,scale:2.088007926940918},tr_err:{file:"data/tr_err.png",cols:50,rows:32,blocks:3,bits:16,min:0,max:9.082218170166016,scale:3.191195011138916}},sg=JSON.parse('{"vlm_stream":[{"file":"data/layers/vlm_stream_00.png","cols":177,"rows":960,"bits":8,"min":-4.666666507720947,"max":4.666666507720947,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":7.625},{"name":"padding","end":176,"scale":4.3125},{"name":"arm readings","end":177,"scale":0.5316504240036011}]},{"file":"data/layers/vlm_stream_01.png","cols":177,"rows":960,"bits":8,"min":-4.378255367279053,"max":4.378255367279053,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":8.3125},{"name":"padding","end":176,"scale":7.1875},{"name":"arm readings","end":177,"scale":5.790000915527344}]},{"file":"data/layers/vlm_stream_02.png","cols":177,"rows":960,"bits":8,"min":-4.648648738861084,"max":4.648648738861084,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":8.75},{"name":"padding","end":176,"scale":6.9375},{"name":"arm readings","end":177,"scale":6.494375228881836}]},{"file":"data/layers/vlm_stream_03.png","cols":177,"rows":960,"bits":8,"min":-4.666666507720947,"max":4.666666507720947,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.375},{"name":"padding","end":176,"scale":7.09375},{"name":"arm readings","end":177,"scale":6.6112518310546875}]},{"file":"data/layers/vlm_stream_04.png","cols":177,"rows":960,"bits":8,"min":-5.017543792724609,"max":5.017543792724609,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":386},{"name":"instruction","end":137,"scale":9.57623291015625},{"name":"padding","end":176,"scale":7.125},{"name":"arm readings","end":177,"scale":6.931875228881836}]},{"file":"data/layers/vlm_stream_05.png","cols":177,"rows":960,"bits":8,"min":-5.294797897338867,"max":5.294797897338867,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.625},{"name":"padding","end":176,"scale":7.0625},{"name":"arm readings","end":177,"scale":6.738750457763672}]},{"file":"data/layers/vlm_stream_06.png","cols":177,"rows":960,"bits":8,"min":-5.273237705230713,"max":5.273237705230713,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.625},{"name":"padding","end":176,"scale":7.53125},{"name":"arm readings","end":177,"scale":7.0800018310546875}]},{"file":"data/layers/vlm_stream_07.png","cols":177,"rows":960,"bits":8,"min":-5.225725173950195,"max":5.225725173950195,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.5},{"name":"padding","end":176,"scale":8.25},{"name":"arm readings","end":177,"scale":7.213125228881836}]},{"file":"data/layers/vlm_stream_08.png","cols":177,"rows":960,"bits":8,"min":-4.751028060913086,"max":4.751028060913086,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.5},{"name":"padding","end":176,"scale":9.5},{"name":"arm readings","end":177,"scale":7.2050018310546875}]},{"file":"data/layers/vlm_stream_09.png","cols":177,"rows":960,"bits":8,"min":-5.006622314453125,"max":5.006622314453125,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.5625},{"name":"padding","end":176,"scale":9.4375},{"name":"arm readings","end":177,"scale":7.62812614440918}]},{"file":"data/layers/vlm_stream_10.png","cols":177,"rows":960,"bits":8,"min":-4.837696552276611,"max":4.837696552276611,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.6875},{"name":"padding","end":176,"scale":11.0625},{"name":"arm readings","end":177,"scale":7.84687614440918}]},{"file":"data/layers/vlm_stream_11.png","cols":177,"rows":960,"bits":8,"min":-4.900523662567139,"max":4.900523662567139,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.8125},{"name":"padding","end":176,"scale":10.625},{"name":"arm readings","end":177,"scale":8.301250457763672}]},{"file":"data/layers/vlm_stream_12.png","cols":177,"rows":960,"bits":8,"min":-4.857421875,"max":4.857421875,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":10},{"name":"padding","end":176,"scale":12.0625},{"name":"arm readings","end":177,"scale":8.421253204345703}]},{"file":"data/layers/vlm_stream_13.png","cols":177,"rows":960,"bits":8,"min":-4.896451473236084,"max":4.896451473236084,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382.4453125},{"name":"instruction","end":137,"scale":10.375},{"name":"padding","end":176,"scale":12.4375},{"name":"arm readings","end":177,"scale":9.403751373291016}]},{"file":"data/layers/vlm_stream_14.png","cols":177,"rows":960,"bits":8,"min":-4.881217002868652,"max":4.881217002868652,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":10.88873291015625},{"name":"padding","end":176,"scale":12.5625},{"name":"arm readings","end":177,"scale":9.915000915527344}]},{"file":"data/layers/vlm_stream_15.png","cols":177,"rows":960,"bits":8,"min":-4.900523662567139,"max":4.900523662567139,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":11.5},{"name":"padding","end":176,"scale":13},{"name":"arm readings","end":177,"scale":10.113750457763672}]}],"vlm_update":[{"file":"data/layers/vlm_update_00.png","cols":177,"rows":960,"bits":8,"min":-10.69829273223877,"max":10.69829273223877,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":2},{"name":"wrist camera","end":128,"scale":2},{"name":"instruction","end":137,"scale":3.890625},{"name":"padding","end":176,"scale":4.875},{"name":"arm readings","end":177,"scale":5.839480400085449}]},{"file":"data/layers/vlm_update_01.png","cols":177,"rows":960,"bits":8,"min":-9.466373443603516,"max":9.466373443603516,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":3.5},{"name":"wrist camera","end":128,"scale":3.5},{"name":"instruction","end":137,"scale":2.671875},{"name":"padding","end":176,"scale":1.046875},{"name":"arm readings","end":177,"scale":1.8902734518051147}]},{"file":"data/layers/vlm_update_02.png","cols":177,"rows":960,"bits":8,"min":-3.5,"max":3.5,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.90625},{"name":"padding","end":176,"scale":1.46875},{"name":"arm readings","end":177,"scale":1.8232033252716064}]},{"file":"data/layers/vlm_update_03.png","cols":177,"rows":960,"bits":8,"min":-3.615530014038086,"max":3.615530014038086,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.42535400390625},{"name":"wrist camera","end":128,"scale":4.0625},{"name":"instruction","end":137,"scale":3.390625},{"name":"padding","end":176,"scale":1.36572265625},{"name":"arm readings","end":177,"scale":2.2283594608306885}]},{"file":"data/layers/vlm_update_04.png","cols":177,"rows":960,"bits":8,"min":-3,"max":3,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.5},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.2625770568847656},{"name":"padding","end":176,"scale":2.6328125},{"name":"arm readings","end":177,"scale":1.598750114440918}]},{"file":"data/layers/vlm_update_05.png","cols":177,"rows":960,"bits":8,"min":-1.7777777910232544,"max":1.7777777910232544,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.5},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.1688270568847656},{"name":"padding","end":176,"scale":2.830078125},{"name":"arm readings","end":177,"scale":1.6555469036102295}]},{"file":"data/layers/vlm_update_06.png","cols":177,"rows":960,"bits":8,"min":-2.0982449054718018,"max":2.0982449054718018,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.25},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.28125},{"name":"padding","end":176,"scale":2.8203125},{"name":"arm readings","end":177,"scale":2.051250457763672}]},{"file":"data/layers/vlm_update_07.png","cols":177,"rows":960,"bits":8,"min":-2.3893048763275146,"max":2.3893048763275146,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.59375},{"name":"padding","end":176,"scale":3.65234375},{"name":"arm readings","end":177,"scale":2.198906421661377}]},{"file":"data/layers/vlm_update_08.png","cols":177,"rows":960,"bits":8,"min":-1.8758877515792847,"max":1.8758877515792847,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.7000770568847656},{"name":"padding","end":176,"scale":3.46875},{"name":"arm readings","end":177,"scale":2.3125}]},{"file":"data/layers/vlm_update_09.png","cols":177,"rows":960,"bits":8,"min":-2.3475215435028076,"max":2.3475215435028076,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.4375},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.2985916137695312},{"name":"padding","end":176,"scale":3.578125},{"name":"arm readings","end":177,"scale":2.105156421661377}]},{"file":"data/layers/vlm_update_10.png","cols":177,"rows":960,"bits":8,"min":-2.7759037017822266,"max":2.7759037017822266,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.25},{"name":"padding","end":176,"scale":3.2421875},{"name":"arm readings","end":177,"scale":1.9585158824920654}]},{"file":"data/layers/vlm_update_11.png","cols":177,"rows":960,"bits":8,"min":-2.307692289352417,"max":2.307692289352417,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.5},{"name":"wrist camera","end":128,"scale":6.0625},{"name":"instruction","end":137,"scale":2.609375},{"name":"padding","end":176,"scale":3.75},{"name":"arm readings","end":177,"scale":2.1055471897125244}]},{"file":"data/layers/vlm_update_12.png","cols":177,"rows":960,"bits":8,"min":-2,"max":2,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6},{"name":"wrist camera","end":128,"scale":6},{"name":"instruction","end":137,"scale":3.390625},{"name":"padding","end":176,"scale":3.7890625},{"name":"arm readings","end":177,"scale":2.515781879425049}]},{"file":"data/layers/vlm_update_13.png","cols":177,"rows":960,"bits":8,"min":-1.9323413372039795,"max":1.9323413372039795,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.2100830078125},{"name":"wrist camera","end":128,"scale":6},{"name":"instruction","end":137,"scale":3.4157791137695312},{"name":"padding","end":176,"scale":4.0625},{"name":"arm readings","end":177,"scale":2.5976953506469727}]},{"file":"data/layers/vlm_update_14.png","cols":177,"rows":960,"bits":8,"min":-2.0392701625823975,"max":2.0392701625823975,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.5},{"name":"wrist camera","end":128,"scale":6.375},{"name":"instruction","end":137,"scale":3.5234375},{"name":"padding","end":176,"scale":4.21875},{"name":"arm readings","end":177,"scale":2.592343807220459}]},{"file":"data/layers/vlm_update_15.png","cols":177,"rows":960,"bits":8,"min":-1.6124721765518188,"max":1.6124721765518188,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.25},{"name":"wrist camera","end":128,"scale":6.375},{"name":"instruction","end":137,"scale":3.4609375},{"name":"padding","end":176,"scale":3.5078125},{"name":"arm readings","end":177,"scale":2.953906536102295}]}],"vlm_attn":[{"file":"data/layers/vlm_attn_00.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_01.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_02.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_03.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_04.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_05.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_06.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_07.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_08.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_09.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_10.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_11.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_12.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_13.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_14.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_15.png","cols":177,"rows":177,"bits":8}],"vlm_k":[{"file":"data/layers/vlm_k_00.png","cols":177,"rows":320,"bits":8,"min":-3.0164434909820557,"max":3.0164434909820557,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":3.28125}]},{"file":"data/layers/vlm_k_01.png","cols":177,"rows":320,"bits":8,"min":-2.946666717529297,"max":2.946666717529297,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.6875}]},{"file":"data/layers/vlm_k_02.png","cols":177,"rows":320,"bits":8,"min":-2.4851925373077393,"max":2.4851925373077393,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.375}]},{"file":"data/layers/vlm_k_03.png","cols":177,"rows":320,"bits":8,"min":-2.2020156383514404,"max":2.2020156383514404,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.0625}]},{"file":"data/layers/vlm_k_04.png","cols":177,"rows":320,"bits":8,"min":-2.2661867141723633,"max":2.2661867141723633,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.78125}]},{"file":"data/layers/vlm_k_05.png","cols":177,"rows":320,"bits":8,"min":-2.454545497894287,"max":2.454545497894287,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.8125}]},{"file":"data/layers/vlm_k_06.png","cols":177,"rows":320,"bits":8,"min":-2.7121212482452393,"max":2.7121212482452393,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.125}]},{"file":"data/layers/vlm_k_07.png","cols":177,"rows":320,"bits":8,"min":-2.5068492889404297,"max":2.5068492889404297,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.5625}]},{"file":"data/layers/vlm_k_08.png","cols":177,"rows":320,"bits":8,"min":-3.058823585510254,"max":3.058823585510254,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.25}]},{"file":"data/layers/vlm_k_09.png","cols":177,"rows":320,"bits":8,"min":-2.1641790866851807,"max":2.1641790866851807,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.1875}]},{"file":"data/layers/vlm_k_10.png","cols":177,"rows":320,"bits":8,"min":-2.2804877758026123,"max":2.2804877758026123,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.125}]},{"file":"data/layers/vlm_k_11.png","cols":177,"rows":320,"bits":8,"min":-2.8592593669891357,"max":2.8592593669891357,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.21875}]},{"file":"data/layers/vlm_k_12.png","cols":177,"rows":320,"bits":8,"min":-2.9790210723876953,"max":2.9790210723876953,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.46875}]},{"file":"data/layers/vlm_k_13.png","cols":177,"rows":320,"bits":8,"min":-2.470588207244873,"max":2.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.3125}]},{"file":"data/layers/vlm_k_14.png","cols":177,"rows":320,"bits":8,"min":-3.307692289352417,"max":3.307692289352417,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.875}]},{"file":"data/layers/vlm_k_15.png","cols":177,"rows":320,"bits":8,"min":-3.49367094039917,"max":3.49367094039917,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.9375}]}],"vlm_v":[{"file":"data/layers/vlm_v_00.png","cols":177,"rows":320,"bits":8,"min":-4.7222819328308105,"max":4.7222819328308105,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":0.0712890625}]},{"file":"data/layers/vlm_v_01.png","cols":177,"rows":320,"bits":8,"min":-1.794392466545105,"max":1.794392466545105,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":0.8359375}]},{"file":"data/layers/vlm_v_02.png","cols":177,"rows":320,"bits":8,"min":-1.5388296842575073,"max":1.5388296842575073,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.1796875}]},{"file":"data/layers/vlm_v_03.png","cols":177,"rows":320,"bits":8,"min":-1.7191780805587769,"max":1.7191780805587769,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.140625}]},{"file":"data/layers/vlm_v_04.png","cols":177,"rows":320,"bits":8,"min":-1.4702702760696411,"max":1.4702702760696411,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.4453125}]},{"file":"data/layers/vlm_v_05.png","cols":177,"rows":320,"bits":8,"min":-1.5641428232192993,"max":1.5641428232192993,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.671875}]},{"file":"data/layers/vlm_v_06.png","cols":177,"rows":320,"bits":8,"min":-1.590243935585022,"max":1.590243935585022,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.6015625}]},{"file":"data/layers/vlm_v_07.png","cols":177,"rows":320,"bits":8,"min":-1.5500218868255615,"max":1.5500218868255615,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.743927001953125}]},{"file":"data/layers/vlm_v_08.png","cols":177,"rows":320,"bits":8,"min":-1.5064871311187744,"max":1.5064871311187744,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.75}]},{"file":"data/layers/vlm_v_09.png","cols":177,"rows":320,"bits":8,"min":-1.5098813772201538,"max":1.5098813772201538,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.9765625}]},{"file":"data/layers/vlm_v_10.png","cols":177,"rows":320,"bits":8,"min":-1.9787532091140747,"max":1.9787532091140747,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.634552001953125}]},{"file":"data/layers/vlm_v_11.png","cols":177,"rows":320,"bits":8,"min":-1.4728682041168213,"max":1.4728682041168213,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":2.015625}]},{"file":"data/layers/vlm_v_12.png","cols":177,"rows":320,"bits":8,"min":-1.5267857313156128,"max":1.5267857313156128,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.75}]},{"file":"data/layers/vlm_v_13.png","cols":177,"rows":320,"bits":8,"min":-1.436619758605957,"max":1.436619758605957,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.6640625}]},{"file":"data/layers/vlm_v_14.png","cols":177,"rows":320,"bits":8,"min":-1.4817813634872437,"max":1.4817813634872437,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.9296875}]},{"file":"data/layers/vlm_v_15.png","cols":177,"rows":320,"bits":8,"min":-1.545454502105713,"max":1.545454502105713,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":2.0625}]}],"exp_stream":[{"file":"data/layers/exp_stream_00.png","cols":50,"rows":720,"bits":8,"min":-1.488465428352356,"max":1.488465428352356,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":1.947265625}]},{"file":"data/layers/exp_stream_01.png","cols":50,"rows":720,"bits":8,"min":-1.446969747543335,"max":1.446969747543335,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.0625}]},{"file":"data/layers/exp_stream_02.png","cols":50,"rows":720,"bits":8,"min":-1.4154930114746094,"max":1.4154930114746094,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.21875}]},{"file":"data/layers/exp_stream_03.png","cols":50,"rows":720,"bits":8,"min":-1.4733333587646484,"max":1.4733333587646484,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.34375}]},{"file":"data/layers/exp_stream_04.png","cols":50,"rows":720,"bits":8,"min":-1.4620252847671509,"max":1.4620252847671509,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.46875}]},{"file":"data/layers/exp_stream_05.png","cols":50,"rows":720,"bits":8,"min":-1.4967741966247559,"max":1.4967741966247559,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.421875}]},{"file":"data/layers/exp_stream_06.png","cols":50,"rows":720,"bits":8,"min":-1.470588207244873,"max":1.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.390625}]},{"file":"data/layers/exp_stream_07.png","cols":50,"rows":720,"bits":8,"min":-1.5133333206176758,"max":1.5133333206176758,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.34375}]},{"file":"data/layers/exp_stream_08.png","cols":50,"rows":720,"bits":8,"min":-1.4900661706924438,"max":1.4900661706924438,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.359375}]},{"file":"data/layers/exp_stream_09.png","cols":50,"rows":720,"bits":8,"min":-1.4451613426208496,"max":1.4451613426208496,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.421875}]},{"file":"data/layers/exp_stream_10.png","cols":50,"rows":720,"bits":8,"min":-1.4500000476837158,"max":1.4500000476837158,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.5}]},{"file":"data/layers/exp_stream_11.png","cols":50,"rows":720,"bits":8,"min":-1.470588207244873,"max":1.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.65625}]},{"file":"data/layers/exp_stream_12.png","cols":50,"rows":720,"bits":8,"min":-1.497267723083496,"max":1.497267723083496,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.859375}]},{"file":"data/layers/exp_stream_13.png","cols":50,"rows":720,"bits":8,"min":-1.6057692766189575,"max":1.6057692766189575,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":3.25}]},{"file":"data/layers/exp_stream_14.png","cols":50,"rows":720,"bits":8,"min":-1.5666667222976685,"max":1.5666667222976685,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":3.75}]},{"file":"data/layers/exp_stream_15.png","cols":50,"rows":720,"bits":8,"min":-1.5119047164916992,"max":1.5119047164916992,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":5.25}]}],"exp_update":[{"file":"data/layers/exp_update_00.png","cols":50,"rows":720,"bits":8,"min":-1.6307685375213623,"max":1.6307685375213623,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.37427234649658203}]},{"file":"data/layers/exp_update_01.png","cols":50,"rows":720,"bits":8,"min":-1.4249999523162842,"max":1.4249999523162842,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.625}]},{"file":"data/layers/exp_update_02.png","cols":50,"rows":720,"bits":8,"min":-1.3928571939468384,"max":1.3928571939468384,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6015625}]},{"file":"data/layers/exp_update_03.png","cols":50,"rows":720,"bits":8,"min":-1.3269401788711548,"max":1.3269401788711548,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.7168159484863281}]},{"file":"data/layers/exp_update_04.png","cols":50,"rows":720,"bits":8,"min":-1.4461538791656494,"max":1.4461538791656494,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5078125}]},{"file":"data/layers/exp_update_05.png","cols":50,"rows":720,"bits":8,"min":-1.4171974658966064,"max":1.4171974658966064,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.61328125}]},{"file":"data/layers/exp_update_06.png","cols":50,"rows":720,"bits":8,"min":-1.4177215099334717,"max":1.4177215099334717,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6171875}]},{"file":"data/layers/exp_update_07.png","cols":50,"rows":720,"bits":8,"min":-1.3915441036224365,"max":1.3915441036224365,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.53125}]},{"file":"data/layers/exp_update_08.png","cols":50,"rows":720,"bits":8,"min":-1.4036144018173218,"max":1.4036144018173218,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6484375}]},{"file":"data/layers/exp_update_09.png","cols":50,"rows":720,"bits":8,"min":-1.399999976158142,"max":1.399999976158142,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5859375}]},{"file":"data/layers/exp_update_10.png","cols":50,"rows":720,"bits":8,"min":-1.3831775188446045,"max":1.3831775188446045,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.626953125}]},{"file":"data/layers/exp_update_11.png","cols":50,"rows":720,"bits":8,"min":-1.3591549396514893,"max":1.3591549396514893,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5546875}]},{"file":"data/layers/exp_update_12.png","cols":50,"rows":720,"bits":8,"min":-1.7169811725616455,"max":1.7169811725616455,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.828125}]},{"file":"data/layers/exp_update_13.png","cols":50,"rows":720,"bits":8,"min":-1.4272300004959106,"max":1.4272300004959106,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.83203125}]},{"file":"data/layers/exp_update_14.png","cols":50,"rows":720,"bits":8,"min":-1.5213675498962402,"max":1.5213675498962402,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":1.828125}]},{"file":"data/layers/exp_update_15.png","cols":50,"rows":720,"bits":8,"min":-1.4177215099334717,"max":1.4177215099334717,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.46875}]}],"exp_attn":[{"file":"data/layers/exp_attn_00.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_01.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_02.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_03.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_04.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_05.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_06.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_07.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_08.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_09.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_10.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_11.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_12.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_13.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_14.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_15.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false}]}'),ag={table:[{file:"data/layers/vis_table_00.png",cols:1024,rows:768,bits:8,min:-.683935546875,max:.683935546875,scale:.3419677734375},{file:"data/layers/vis_table_01.png",cols:1024,rows:768,bits:8,min:-.73447265625,max:.73447265625,scale:.367236328125},{file:"data/layers/vis_table_02.png",cols:1024,rows:768,bits:8,min:-.825439453125,max:.825439453125,scale:.4127197265625},{file:"data/layers/vis_table_03.png",cols:1024,rows:768,bits:8,min:-.86923828125,max:.86923828125,scale:.434619140625},{file:"data/layers/vis_table_04.png",cols:1024,rows:768,bits:8,min:-.90966796875,max:.90966796875,scale:.454833984375},{file:"data/layers/vis_table_05.png",cols:1024,rows:768,bits:8,min:-.8557617187500001,max:.8557617187500001,scale:.42788085937500003},{file:"data/layers/vis_table_06.png",cols:1024,rows:768,bits:8,min:-.9500976562500001,max:.9500976562500001,scale:.47504882812500004},{file:"data/layers/vis_table_07.png",cols:1024,rows:768,bits:8,min:-1.0376953125000001,max:1.0376953125000001,scale:.5188476562500001},{file:"data/layers/vis_table_08.png",cols:1024,rows:768,bits:8,min:-1.4015625,max:1.4015625,scale:.70078125},{file:"data/layers/vis_table_09.png",cols:1024,rows:768,bits:8,min:-1.8328125000000002,max:1.8328125000000002,scale:.9164062500000001},{file:"data/layers/vis_table_10.png",cols:1024,rows:768,bits:8,min:-2.7087890625,max:2.7087890625,scale:1.35439453125},{file:"data/layers/vis_table_11.png",cols:1024,rows:768,bits:8,min:-6.95390625,max:6.95390625,scale:3.476953125}],wrist:[{file:"data/layers/vis_wrist_00.png",cols:1024,rows:768,bits:8,min:-.576123046875,max:.576123046875,scale:.2880615234375},{file:"data/layers/vis_wrist_01.png",cols:1024,rows:768,bits:8,min:-.64013671875,max:.64013671875,scale:.320068359375},{file:"data/layers/vis_wrist_02.png",cols:1024,rows:768,bits:8,min:-.778271484375,max:.778271484375,scale:.3891357421875},{file:"data/layers/vis_wrist_03.png",cols:1024,rows:768,bits:8,min:-.8321777343750001,max:.8321777343750001,scale:.41608886718750004},{file:"data/layers/vis_wrist_04.png",cols:1024,rows:768,bits:8,min:-.8625,max:.8625,scale:.43125},{file:"data/layers/vis_wrist_05.png",cols:1024,rows:768,bits:8,min:-.82880859375,max:.82880859375,scale:.414404296875},{file:"data/layers/vis_wrist_06.png",cols:1024,rows:768,bits:8,min:-.9500976562500001,max:.9500976562500001,scale:.47504882812500004},{file:"data/layers/vis_wrist_07.png",cols:1024,rows:768,bits:8,min:-1.09833984375,max:1.09833984375,scale:.549169921875},{file:"data/layers/vis_wrist_08.png",cols:1024,rows:768,bits:8,min:-1.4689453125,max:1.4689453125,scale:.73447265625},{file:"data/layers/vis_wrist_09.png",cols:1024,rows:768,bits:8,min:-1.9810546875000001,max:1.9810546875000001,scale:.9905273437500001},{file:"data/layers/vis_wrist_10.png",cols:1024,rows:768,bits:8,min:-2.7626953125,max:2.7626953125,scale:1.38134765625},{file:"data/layers/vis_wrist_11.png",cols:1024,rows:768,bits:8,min:-7.061718750000001,max:7.061718750000001,scale:3.5308593750000004}]},rg={typical_size:{table:[7.2,6.4,7.1,6.5,6.7,6,6.7,7.2,9.7,12.2,17.8,222.4],wrist:[6.8,6,6.9,6.4,6.4,5.8,6.7,7.7,10.3,13.6,18.5,218.3]},largest_size:{table:[20,14,13,15,29,119,139,148,153,155,158,798],wrist:[20,14,13,15,29,117,137,145,150,151,155,795]},big:{table:[1,1,0,2,14,24,24,24,24,24,24,215],wrist:[1,1,0,2,21,34,35,35,35,35,34,214]},jump_layer:5,jump_ratio:20,big_in_black_bar:{table:12},big_in_both:20,last_layer_growth:12},og={facts:{table:{alike:[.0975,.1198,.053,.0369,.0284,.0265,.0376,.0438,.0446,.0411,.0336,.0292,.4769,.1583],matches:[90,105,19,16,18,21,30,44,44,38,30,25,574,37],one_direction:[.3209,.3356,.2091,.1625,.1369,.1146,.1646,.183,.1875,.1444,.1248,.1108,.8957,.3361],shared:[.4394,.7518,.4836,.4175,.2346,.2502,.136,.1241,.1107,.1723,.2226,.3148,.9891,.7109],shared_spread:[.596,.078,.158,.236,.432,.426,4.311,4.638,4.468,2.496,1.63,.876,.918,.221]},wrist:{alike:[.1018,.1251,.0533,.036,.031,.0339,.1032,.1339,.1271,.0922,.0675,.0539,.4635,.1837],matches:[91,102,33,25,27,33,105,134,122,87,65,49,560,59],one_direction:[.2887,.3534,.2149,.162,.1362,.1259,.2987,.3174,.2929,.2235,.1641,.1334,.8838,.3659],shared:[.505,.8108,.5751,.5551,.3987,.4091,.1929,.1901,.1825,.2621,.328,.3832,.9897,.7075],shared_spread:[.622,.04,.068,.121,.194,.259,4.286,4.517,3.979,2.507,1.606,1.037,.896,.266]}},table:{before:{file:"data/sim/table_before.png",cols:320,rows:1024,bits:8,min:-.2419661357909638,max:.2419661357909638},layers:[{file:"data/sim/table_00.png",cols:320,rows:1024,bits:8,min:-.23952942475984057,max:.23952942475984057},{file:"data/sim/table_01.png",cols:320,rows:1024,bits:8,min:-.2560640756462496,max:.2560640756462496},{file:"data/sim/table_02.png",cols:320,rows:1024,bits:8,min:-.25006924563739574,max:.25006924563739574},{file:"data/sim/table_03.png",cols:320,rows:1024,bits:8,min:-.24008189626025758,max:.24008189626025758},{file:"data/sim/table_04.png",cols:320,rows:1024,bits:8,min:-.23919009414820824,max:.23919009414820824},{file:"data/sim/table_05.png",cols:320,rows:1024,bits:8,min:-.24817867154843679,max:.24817867154843679},{file:"data/sim/table_06.png",cols:320,rows:1024,bits:8,min:-.2588102090216902,max:.2588102090216902},{file:"data/sim/table_07.png",cols:320,rows:1024,bits:8,min:-.2708775497035219,max:.2708775497035219},{file:"data/sim/table_08.png",cols:320,rows:1024,bits:8,min:-.25375181002065533,max:.25375181002065533},{file:"data/sim/table_09.png",cols:320,rows:1024,bits:8,min:-.2924706188152235,max:.2924706188152235},{file:"data/sim/table_10.png",cols:320,rows:1024,bits:8,min:-.24655901392110774,max:.24655901392110774},{file:"data/sim/table_11.png",cols:320,rows:1024,bits:8,min:-.23207715515314362,max:.23207715515314362}],after:{file:"data/sim/table_after.png",cols:320,rows:1024,bits:8,min:-.2487465763941288,max:.2487465763941288}},wrist:{before:{file:"data/sim/wrist_before.png",cols:320,rows:1024,bits:8,min:-.22655319342398383,max:.22655319342398383},layers:[{file:"data/sim/wrist_00.png",cols:320,rows:1024,bits:8,min:-.2408137811081941,max:.2408137811081941},{file:"data/sim/wrist_01.png",cols:320,rows:1024,bits:8,min:-.2506326250991203,max:.2506326250991203},{file:"data/sim/wrist_02.png",cols:320,rows:1024,bits:8,min:-.2580826777385899,max:.2580826777385899},{file:"data/sim/wrist_03.png",cols:320,rows:1024,bits:8,min:-.24945300258698583,max:.24945300258698583},{file:"data/sim/wrist_04.png",cols:320,rows:1024,bits:8,min:-.27212029977806,max:.27212029977806},{file:"data/sim/wrist_05.png",cols:320,rows:1024,bits:8,min:-.22499933073839093,max:.22499933073839093},{file:"data/sim/wrist_06.png",cols:320,rows:1024,bits:8,min:-.26663220109917696,max:.26663220109917696},{file:"data/sim/wrist_07.png",cols:320,rows:1024,bits:8,min:-.23113067911306945,max:.23113067911306945},{file:"data/sim/wrist_08.png",cols:320,rows:1024,bits:8,min:-.24527861573829174,max:.24527861573829174},{file:"data/sim/wrist_09.png",cols:320,rows:1024,bits:8,min:-.24223879982627178,max:.24223879982627178},{file:"data/sim/wrist_10.png",cols:320,rows:1024,bits:8,min:-.26347897689756683,max:.26347897689756683},{file:"data/sim/wrist_11.png",cols:320,rows:1024,bits:8,min:-.22119540597652274,max:.22119540597652274}],after:{file:"data/sim/wrist_after.png",cols:320,rows:1024,bits:8,min:-.2691340321958974,max:.2691340321958974}},max_error:.039,mean_error:.0012},lg={fold:16,rows:960,inputs:12288},cg={picture_token_size:4340,picture_update_share:[.0112,.0176,.0125,.0131,.0127,.0123,.013,.0149,.0148,.0176,.0172,.0182,.0175,.0184,.018,.018],readings_token_size:[7.1,78.1,87.6,79.3,80.2,80,81.4,87.9,88.1,90.8,91.8,99,105.2,105.2,113.5,120.8,136.1],word_jump_layer:3,word_jump_tokens:[1,5],word_sizes_before_after:[[147.6999969482422,140.1999969482422,136.89999389648438,146.3000030517578,137.60000610351562,139.10000610351562,131.5,147.39999389648438,142.6999969482422],[142.89999389648438,1789.0999755859375,134.39999389648438,143.39999389648438,132.8000030517578,1651,130.8000030517578,141.8000030517578,210.8000030517578]],readings_sink_share_by_layer:[.009,.064,.327,.136,.887,.884,.772,.696,.74,.844,.772,.782,.663,.373,.628,.45],times:[1,.9,.8,.7,.6,.5,.4,.3,.2,.1]},hg={names:["base","shoulder","elbow","forearm roll","wrist pitch","wrist roll","gripper"],mean:[17.439,-11.73,37.922,5.481,38.111,-6.557,60.044],std:[27.488,46.399,33.921,7.132,21.999,8.668,11.966],plan_deg:[[6.81,31.94,33.88,4.14,23.16,-8.44,44.56],[6.7,32.31,33.78,4.22,23.45,-8.59,44],[5.66,31.2,34.94,4.16,22.66,-8.49,43.91],[7.62,31.22,34.84,4.49,22.16,-8.31,43.91],[6.37,30.97,35.16,4.57,23.69,-8.54,44.44],[7.02,32.12,35.22,4.56,23.44,-8.41,44.09],[6.44,30.39,36.03,5,23.66,-8.59,43.97],[6.12,30.83,36.62,4.02,25.06,-8.77,44.28],[6.92,27.16,36.38,1.05,26.22,-8.73,43.97],[6.47,29.16,36.19,1.46,26.89,-8.66,44.19],[7.28,27.86,35.09,1.93,28.27,-8.38,44.16],[6.39,24.02,35.59,1.24,29.98,-8.62,44.12],[6.93,22.2,35.38,.09,34.31,-8.84,44.81],[6.86,21.91,35.06,-.22,33.88,-8.72,44.34],[6.96,17.73,34.62,-.31,36.28,-9,45.12],[6.89,17.61,34.66,.12,37.62,-8.47,44.94],[6.55,17.34,34.53,.81,40.31,-8.7,44.53],[6.98,12.51,34.56,.33,42.47,-8.73,44.44],[7.05,10.31,33.91,.93,43.84,-8.9,44.91],[7.73,8.43,32.91,1.01,45.34,-8.55,44.88],[6.88,8.98,33.12,.78,46.22,-8.69,44.56],[6.87,6.23,31.28,.73,51.81,-8.33,44.34],[7.49,3.6,30.48,.19,52.91,-8.51,44.66],[7.06,3.14,28.52,-.18,55.16,-8.29,44.28],[7.14,2.75,27.83,-.53,57.16,-8.27,44.12],[6.93,.41,25.42,-.29,60.53,-8.31,44.19],[7.51,-1.66,23.36,.15,62.44,-8.67,43.94],[7.17,-1.3,18.7,.88,67.38,-8.34,44.41],[7.89,-1.4,14.52,1.26,70.69,-8.56,43.56],[8.1,-2,11.34,.93,73.31,-8.27,44.03],[7.25,-1.7,8.48,1.13,73.88,-8.18,43.97],[8.36,-1.11,7.26,2.4,74,-8.18,44.69],[10.55,-2.62,8.34,1.9,73.38,-8.17,44.12],[14.09,-1.23,8.11,2.46,72.44,-8.1,44.44],[13.4,-2.15,8.65,3.43,73,-7.6,43.94],[17.16,.25,10.66,3.4,72.88,-7.99,43.94],[15.63,.88,7.13,5.34,74.44,-7.96,44.22],[20.94,-.22,7.41,5.54,73.94,-7.48,43.81],[21.06,2.02,5.41,7,72.88,-6.71,43.59],[23.84,2.58,4.98,6.88,73.38,-6.81,44],[24.17,3.38,6.09,7.65,71.88,-7.27,43.94],[24.33,5.27,5.46,9.63,73.75,-7.61,44.59],[29.66,5.46,5.69,9.16,71.56,-7.06,43.88],[34.03,5.79,4.28,9.79,73.06,-7.09,44.16],[40.66,7.65,.66,9.78,74.19,-7.03,44.06],[46.03,9.36,1.36,9.29,71.5,-7.11,43.88],[47.03,8.89,3.23,10.66,69.94,-7.3,44.72],[45.09,11.16,.96,9.89,70.94,-7.2,44.28],[49.44,13.59,-1.03,10.58,70.94,-7.27,44.12],[51.94,13.02,-.77,10.66,70.44,-6.72,44.12]],hand_deg:[[5.9,32.09,34.5,4,23.41,-8.6,43.91],[5.9,32.09,34.5,4,23.41,-8.6,43.81],[5.9,32.09,34.5,4,23.41,-8.6,43.81],[5.8,32.09,34.5,4,23.41,-8.6,43.81],[5.7,32.09,34.5,3.8,23.41,-8.6,43.91],[5.7,31.91,34.5,1.2,23.59,-8.6,43.91],[5.7,31.91,34.5,1.2,23.59,-8.6,43.91],[5.7,31.7,34.5,-.5,24.59,-8.5,43.91],[5.7,31.59,34.5,-.4,25.8,-8.4,43.91],[5.6,31.2,34.5,-.4,26,-8.3,43.91],[5.7,30.3,34.41,-.4,26.5,-8.3,43.91],[5.7,29.3,34.5,-.4,28.3,-8.5,43.91],[5.6,28,34.5,-.5,30.59,-8.5,44],[5.7,26.59,34.5,-.5,32.19,-8.5,44],[5.8,24.7,34.5,-.5,34.09,-8.6,44],[5.8,22.41,34.5,-.5,36,-8.6,43.91],[5.8,22.41,34.5,-.5,36,-8.6,43.91],[5.9,20,34.5,-.5,38,-8.6,43.91],[5.9,17.5,34.5,-.5,39.81,-8.6,43.91],[5.9,15.5,34.41,-.5,42.19,-8.6,43.91],[6,13.7,34.5,-.5,44.59,-8.6,43.91],[6,11.4,34.41,-.5,47,-8.5,43.91],[5.9,8.6,34.41,-.4,49.69,-8.2,43.91],[5.9,5.5,33.41,-.4,52.59,-8,43.91],[5.9,3.5,30,-.5,57.5,-8,43.91],[6,2.6,25.7,-.4,62.5,-8.1,43.91],[6,2.6,25.7,-.4,62.5,-8.1,43.91],[6.2,2,21.7,-.3,66.5,-8,43.91],[6.4,1.5,17.41,.3,70.12,-8.3,43.91],[6.4,1.2,13.4,.4,73.5,-8.4,43.91],[6.4,1.3,9.5,1.1,75.5,-8.6,43.91],[6.5,1.5,6.5,2.7,76.62,-8.5,43.91],[6.5,1.8,4.6,3.8,77.5,-8.6,43.91],[7.2,1.8,4,4.3,77.5,-8.3,43.91],[10.5,1.8,4,3.6,76.5,-7.8,43.91],[14.2,2.3,4,4.1,75.31,-7.7,43.91],[14.2,2.3,4,4.1,75.31,-7.7,43.91],[17.91,2.9,4,4.7,74,-7.6,43.91],[21.3,3.2,4.1,4.7,73.69,-7.6,43.91],[24.41,4,4,5.4,73.81,-7.7,44],[27.91,5,4,6.9,73.69,-7.7,43.91],[30.91,6.5,4,8.8,73.69,-7.7,43.91],[34.19,8,4,9.8,73.5,-7.7,43.81],[37.5,8.7,4,10.3,72.31,-7.7,43.69],[40.81,9.4,4,10.2,69.69,-7.7,43.69],[43.91,10.8,4,10.8,67.12,-7.7,43.69],[43.91,10.8,4,10.8,67.12,-7.7,43.69],[47.31,12.2,4,11.2,65.69,-7.6,43.81],[49.91,13.8,4,11.4,64.5,-7.6,43.81],[52.09,14.9,3.3,11.4,63.81,-7.7,43.81]],gap_deg:[1.69,2.91,1.93,1.05,2.11,.31,.39],max_speed:[66.2,48.4,46.6,29.6,55.9,7.6,8.4],times:[1,.9,.8,.7,.6,.5,.4,.3,.2,.1],guess_gap:[.077,.067,.062,.059,.052,.043,.033,.022,.013,0],train:{taus:[.1,.5,.9],loss7:[.2208,.0281,.0112]},log:{steps:5e3,batch:32,every:100,loss:[.856,.278,.219,.192,.171,.164,.156,.145,.131,.127,.123,.114,.113,.103,.097,.094,.093,.087,.087,.079,.074,.073,.07,.067,.067,.064,.062,.061,.058,.059,.055,.055,.052,.054,.051,.048,.049,.049,.049,.045,.047,.05,.046,.048,.047,.048,.046,.046,.048,.047],held_out:[[2500,.2388],[5e3,.2921]],minutes:17,passes:18.13}},le={frame:K_,shape:J_,params:Q_,lang:eg,prefix:tg,state:ng,sheets:ig,layers:sg,vision_layers:ag,vision:rg,similarity:og,matrix:lg,stats:cg,plan:hg},dg=i=>new URL(i,document.baseURI).href;function Gh(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error(`could not load ${i}`)),n.src=dg(i)})}async function ug(i,e){const t=new Jt(await Gh(i));return t.flipY=!1,t.colorSpace=jn,t.minFilter=hi,t.magFilter=kn,t.anisotropy=e,t.needsUpdate=!0,t}function Lt(i,e,t,n=1){const s=new E_(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),e,t,wn,Kn);return s.colorSpace=jn,s.magFilter=dn,s.minFilter=hi,s.generateMipmaps=!0,s.anisotropy=n,s.needsUpdate=!0,s}async function Vh(i){const e=await Gh(i),t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});return n.drawImage(e,0,0),{rgba:n.getImageData(0,0,t.width,t.height).data,width:t.width,height:t.height}}async function Xs(i,e){const{rgba:t,width:n,height:s}=await Vh(i.file),a=i.min??0,r=(i.max??1)-a;return{info:i,rgba:t,texture:Lt(t,n,s,e),at(o,l){const c=(l*n+o)*4,h=i.bits===16?(t[c]*256+t[c+1])/65535:t[c]/255;return a+h*r}}}function fg(i,e,t){const n=new Uint8Array(i.length*4);return i.forEach((s,a)=>{const r=Math.round((Math.min(t,Math.max(e,s))-e)/(t-e)*65535);n.set([r>>8,r&255,0,255],a*4)}),{texture:Lt(n,i.length,1),min:e,max:t}}class Tl{constructor(e,t,n){this.rows=e,this.patches=t,this.width=n}static async load(e){const{rgba:t,width:n,height:s}=await Vh(e.file),a=e.min??0,r=((e.max??1)-a)/255,o=new Float32Array(n*s);for(let l=0;l<o.length;l++)o[l]=a+t[l*4]*r;return new Tl(o,s,n)}to(e){const{rows:t,patches:n,width:s}=this,a=new Float32Array(n),r=e*s;for(let o=0;o<n;o++){let l=0;const c=o*s;for(let h=0;h<s;h++)l+=t[r+h]*t[c+h];a[o]=l}return a[e]=1,a}}const ks=["Overview","The input","Images into patches","The vision encoder","Patches into tokens","One sequence","The vision-language model","The action expert","From noise to a plan","On the arm","How it was trained","The whole path"],et=i=>[`table_${i}`,`wrist_${i}`],kc=Array.from({length:16},(i,e)=>et(`stack${e}`)).flat(),gt=i=>i.toLocaleString("en-US"),ce=le,Ti=ce.lang.mask.filter(Boolean).length,ai=ce.lang.mask.length,pg=ce.lang.text.slice(0,Ti).map(i=>`<span class="tok">${i===`
`?"line break":i.trim()}</span>`).join(" "),Cs=ce.sheets.sequence.parts,xn=(ce.shape.image/ce.shape.patch)**2,ci=ce.shape.image/ce.shape.patch,Ct=Cs[0].end-Cs[0].start,$h=128,mg=$h/(ce.shape.patch*4)*(ci/4),_g=ce.state.norm[6],zn=ce.stats,eo=i=>`${Math.round(i/1e6)}M`,Bc=zn.picture_update_share.map(i=>i*100),ol=zn.word_jump_layer,gg=Math.round(zn.word_sizes_before_after[1][zn.word_jump_tokens[0]]/zn.word_sizes_before_after[0][zn.word_jump_tokens[0]]),vg=ce.lang.text[zn.word_jump_tokens[0]].trim(),xg=Math.round(zn.readings_sink_share_by_layer[ol+1]*100),ra=["look_table","look_wrist","look_words","look_state"],Be=ce.plan,zc=["tr_a","tr_noise","tr_x","tr_u","tr_v","tr_err"],Hc=(i,e)=>`<a href="#" class="jump" data-round="${e}">${i}</a>`,_s=(i,e)=>`<a href="#" class="jump" data-vlayer="${e}">${i}</a>`,Ai=ce.vision,Wh=ce.matrix,gs=Wh.inputs,Ka=ce.similarity.facts,vs=Ai.jump_layer,ri=ce.shape.vision_layers-1,oa=(i,e,t)=>`<a href="#" class="jump" data-layer="${e}"${t===void 0?"":` data-head="${t}"`}>${i}</a>`,Pt=[{id:"overview",chapter:0,title:"One plan, from pictures to numbers",key:`SmolVLA turns two camera pictures, the arm's ${Be.names.length} readings and one sentence into ${ce.shape.chunk} actions, the next 5 seconds of movement, and every colored cell here is a real number from one run.`,body:`
      <p>This is SmolVLA, a small vision-language-action model, making one plan for a Unitree D1 robot arm:
      ${ce.shape.chunk} actions, the next 5 seconds of movement. It was fine-tuned on 30 hand-guided demos of one
      task: "${ce.frame.task}".</p>
      <p>Every colored cell is a real number from one run of the fine-tuned model on one frame of a demo
      (demo ${ce.frame.episode+1}, frame ${ce.frame.frame}): the moment of the grasp.</p>
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
      recorded by guiding the arm by hand.</p>`,focus:et("raw"),view:{ids:et("raw"),dir:[.16,.1,1],pad:1.2}},{id:"readings",chapter:1,title:"The arm's own readings",body:`
      <p>Seven numbers: six joint angles and the gripper opening, in degrees.</p>
      <p class="mono">[${ce.state.deg.join(", ")}]</p>
      <p>Each is rescaled with that joint's average and spread over the 30 demos, so 0 means "as usual". The
      gripper's ${_g.toFixed(2)} says it is more closed than usual: it is on the cube.</p>
      <p>The list is then padded with zeros to ${ce.shape.max_dim} numbers, the size the pretrained model expects.
      Only the first 7 cells carry anything.</p>`,focus:["state_in"],view:{ids:["state_in"],dir:[.1,.12,1],pad:1.7}},{id:"instruction",chapter:1,title:"The instruction",body:`
      <p>"${ce.frame.task}" is cut into ${Ti} tokens:</p>
      <p>${pg}</p>
      <p>There are ${ai} slots. The other ${ai-Ti} hold padding, which the model is told to ignore.
      The same sentence was on every frame of every demo.</p>`,focus:["lang_in"],view:{ids:["lang_in"],dir:[.1,.12,1],pad:1.5}},{id:"resize",chapter:2,title:"Fit into a square",body:`
      <p>The vision encoder takes ${ce.shape.image} x ${ce.shape.image} pictures. Each camera picture is shrunk to
      512 x 384 and placed at the bottom of the square. The ${$h} rows on top are filled with black.</p>
      <p>The black bar keeps the picture's shape, where stretching it to a square would distort it. The base model
      was trained on pictures fitted the same way, so this is what it expects. The price is detail: a quarter of
      the square shows nothing.</p>
      <p>Pixel values are also moved from 0..1 to -1..1.</p>`,focus:et("512"),view:{ids:et("512"),dir:[.5,.3,1],pad:1.3}},{id:"patches",chapter:2,title:`Cut into ${gt(xn)} patches`,body:`
      <p>The square is cut into ${ci} x ${ci} patches of ${ce.shape.patch} x ${ce.shape.patch} pixels.</p>
      <p>From here on the model never sees a whole picture. It works on this list of ${gt(xn)} patches per
      camera.</p>`,focus:et("512"),view:{ids:et("512"),dir:[.18,.12,1],pad:1.15}},{id:"embed",chapter:2,title:"Each patch becomes a column",key:`Each picture is cut into ${gt(xn)} patches of ${ce.shape.patch} x ${ce.shape.patch} pixels, and each patch becomes a column of ${ce.shape.vision_width} numbers.`,body:`
      <p>A patch is 16 x 16 pixels in 3 colors: ${ce.shape.vision_width} numbers. One matrix multiplication turns
      them into ${ce.shape.vision_width} new numbers, and a learned position code is added so the model knows where
      the patch was.</p>
      <p>The sheet has ${gt(xn)} columns, one per patch in reading order, and ${ce.shape.vision_width} rows.</p>
      <p class="how">Point at a column: its patch lights up in the picture behind.</p>`,focus:[...et("embed"),...et("512")],labels:et("embed"),view:{ids:et("embed"),dir:[.55,.34,1],pad:1.3}},{id:"encoder",chapter:3,title:`${ce.shape.vision_layers} layers look across the picture`,key:`A frozen vision encoder of ${ce.shape.vision_layers} layers lets every patch look at all the others, so each column ends up describing its patch in context.`,body:`
      <p>The columns pass through ${ce.shape.vision_layers} transformer layers (SigLIP,
      ${Math.round(ce.params.vision_encoder/1e6)}M parameters), one per outline. In every layer each patch looks
      at all the others, so a column ends up describing its patch in context.</p>
      <p>Move the slider: the filled sheets show the columns after each layer, each layer on its own color
      scale. ${_s(`Layer&nbsp;${ri+1}`,ri)} makes every column about ${Ai.last_layer_growth}
      times larger, and one last rescaling gives the sheets in front.</p>
      <p>This part is <b>frozen</b>: fine-tuning on the demos did not change it.</p>`,focus:[...et("layer"),...et("encoded"),...et("embed"),"ghost_vision"],labels:["wrist_layer",...et("encoded"),"ghost_vision","table_embed"],view:{ids:[...et("embed"),...et("encoded")],dir:[1,.42,.5],pad:1.1},slider:"vision",vlayer:0},{id:"encoder-sizes",chapter:3,title:"A few columns grow huge",body:`
      <p>A patch is a column of ${ce.shape.vision_width} numbers, and its <b>size</b> is how big they are overall.
      Blue marks the patches whose column is far larger than a normal one after the chosen layer.</p>
      <p>In ${_s("the first layers",0)} hardly any stand out. At ${_s(`layer&nbsp;${vs+1}`,vs)},
      ${Ai.big.table[vs]} patches of the table picture and ${Ai.big.wrist[vs]} of the wrist picture have
      numbers up to ${Ai.jump_ratio} times bigger than a normal patch, and keep them through
      ${_s(`layer&nbsp;${ri}`,ri-1)}. ${Ai.big_in_both} are at the same places in both pictures;
      ${Ai.big_in_black_bar.table} of the table picture's ${Ai.big.table[vs]} lie in the black bar.</p>
      <p>The encoder does this by itself: vision transformers are known to use a few patches as notes about the
      whole picture. ${_s(`Layer&nbsp;${ri+1}`,ri)} then rewrites every column.</p>`,focus:[...et("pick"),...et("size")],alone:!0,view:{ids:[...et("pick"),...et("size")],dir:[.1,.06,1],pad:1.1,room:{top:104,bottom:40}},slider:"vision",vlayer:vs},{id:"similar",chapter:3,title:"What the encoder changed",body:`
      <p>Point at a patch in the left picture. Each map shows how similar every other patch's column is to
      it.</p>
      <p><b>Before</b> the encoder, patches that look alike match. <b>After</b> it, a patch matches what shows
      the same thing in the same setting: for a typical patch of the table picture,
      ${Ka.table.matches[Ka.table.matches.length-1]} others instead of ${Ka.table.matches[0]}. Try the
      cube.</p>
      <p>The middle map follows the slider. After ${_s(`layer&nbsp;${ri+1}`,ri)} half the
      picture lights up for any patch. That is real: this layer fills
      ${Math.round(Ka.table.shared[ri+1]*100)}% of every column with one shared pattern, more of it in
      some patches than in others, so the map shows little else. The encoder's last step evens that out: the
      right-hand map is what the rest of the model gets.</p>`,focus:[...et("pick"),...et("before"),...et("mid"),...et("after")],alone:!0,view:{ids:[...et("pick"),...et("after")],dir:[.1,.06,1],pad:1.1,room:{top:104,bottom:40}},slider:"vision"},{id:"blocks",chapter:4,title:`The grid is cut into ${Ct} blocks`,body:`
      <p>The encoder's work ends here. A small part after it, the <b>connector</b>, turns the ${gt(xn)} patch
      columns of a camera into ${Ct} tokens.</p>
      <p>The ${gt(xn)} columns are still the ${ci} x ${ci} grid of patches from chapter 2, row by row: the
      encoder changed their numbers, not their order.</p>
      <p>That grid is cut into blocks of 4 x 4 patches: ${ci} / 4 = ${ci/4} per side, so
      ${ci/4} x ${ci/4} = <b>${Ct} blocks</b>.</p>
      <p>16 is the number of patches <b>in one block</b>, ${Ct} is the number of blocks:
      ${gt(xn)} / 16 = ${Ct}.</p>`,focus:et("groups"),view:{ids:et("groups"),dir:[.5,.3,1],pad:1.3}},{id:"stack",chapter:4,title:"16 columns are glued into one",body:`
      <p>For every block, the columns of its 16 patches are written one after another:
      16 x ${ce.shape.vision_width} = <b>${gt(gs)} numbers</b>.</p>
      <p>So ${gt(xn)} short columns become ${Ct} long ones. Nothing is lost: ${Ct} x ${gt(gs)} is the
      same count as ${gt(xn)} x ${ce.shape.vision_width}, only rearranged.</p>
      <p class="how">Each band is one of a block's 16 patches, drawn much flatter than it is. Point at a band: its
      block lights up in the picture behind.</p>`,focus:[...et("groups"),...kc],labels:["table_stack0","wrist_stack0","table_groups"],view:{ids:[...et("groups"),...et("stack0"),...et("stack15")],dir:[.95,.36,.62],pad:1.12}},{id:"matrix",chapter:4,title:`One matrix shrinks ${gt(gs)} to ${ce.shape.vlm_width}`,body:`
      <p>The <b>matrix</b> is a table of weights: ${ce.shape.vlm_width} rows, ${gt(gs)} columns,
      ${(ce.params.connector/1e6).toFixed(1)}M numbers. One block's glued column lies above it, and the token that
      comes out stands on its right.</p>
      <p>Each <b>row</b> makes one number of the token: every weight in the row is multiplied by the number above
      it, and the ${gt(gs)} products are added up. ${ce.shape.vlm_width} rows give ${ce.shape.vlm_width} numbers.</p>
      <p>The same thing with 3 numbers in and 2 out:</p>
      <table class="sum">
        <tr><th>column</th><td>2</td><td>5</td><td>1</td><td></td></tr>
        <tr><th>row 1</th><td>0.5</td><td>0.1</td><td>−1.0</td><td class="out">= 0.5</td></tr>
        <tr><th>row 2</th><td>−0.2</td><td>0.4</td><td>0.3</td><td class="out">= 1.9</td></tr>
      </table>
      <p class="mono">2 x 0.5 + 5 x 0.1 + 1 x (−1.0) = 0.5</p>
      <p>Nobody wrote the weights by hand. They were learned when the vision-language model was trained, so that
      picture tokens come out in a form it can read next to words. They are <b>frozen</b>: fine-tuning on the demos
      did not change them, and they are still bit for bit the downloaded ones. The same
      matrix is used for every block of both cameras.</p>
      <p class="how">Point at a block in the pictures to put its column in, and at a row to see the number it
      makes. A cell shows the largest of ${Wh.fold} neighboring weights.</p>`,focus:["matrix","matrix_in","matrix_out","matrix_table","matrix_wrist"],labels:["matrix_in","matrix_out","matrix_name","matrix_row","matrix_table","matrix_wrist"],alone:!0,view:{ids:["matrix","matrix_in","matrix_out","matrix_table","matrix_wrist"],dir:[0,0,1],pad:1.04,room:{top:44,right:130,bottom:84}}},{id:"merge",chapter:4,title:`Each camera is now ${Ct} tokens`,key:`Each block of 4 x 4 patches becomes one token of ${ce.shape.vlm_width} numbers, so a camera picture costs the language model ${Ct} tokens instead of ${gt(xn)}.`,body:`
      <p>The matrix does this for every block: <b>${Ct} tokens</b> per camera, one per 64 x 64-pixel square.
      The first ${mg} cover only the black bar.</p>
      <table class="counts">
        <tr><th></th><th>columns</th><th>numbers in each</th></tr>
        <tr><th>out of the encoder</th><td>${gt(xn)}</td><td>${ce.shape.vision_width}</td></tr>
        <tr><th>glued by block</th><td>${Ct}</td><td>${gt(gs)}</td></tr>
        <tr><th>after the matrix</th><td>${Ct}</td><td>${ce.shape.vlm_width}</td></tr>
      </table>
      <p><b>Why ${ce.shape.vlm_width}?</b> It is not calculated from anything. It is the column size of the language
      model that reads the tokens next: its ${ce.shape.heads} attention heads work with ${ce.shape.head_dim} numbers
      each. A word is ${ce.shape.vlm_width} numbers there, so a picture token must be too, to stand beside it.</p>`,focus:[...kc,...et("merged")],labels:["table_merged","wrist_merged","table_stack0"],view:{ids:[...et("stack0"),...et("stack15"),...et("merged")],dir:[.85,.36,.7],pad:1.12}},{id:"place-images",chapter:5,title:`Picture tokens take the first ${Cs[1].end} places`,body:`
      <p>The model reads everything it is given as <b>one sequence</b> of ${ce.prefix.len} tokens, each
      ${ce.shape.vlm_width} numbers: ${Ct} + ${Ct} for the two pictures, ${ai} for the instruction
      and 1 for the arm's readings.</p>
      <p>The table camera's ${Ct} tokens come first, then the wrist camera's ${Ct}. On the way in,
      their values are multiplied by 31, the square root of ${ce.shape.vlm_width}.</p>`,focus:["sequence",...et("merged")],labels:["sequence","sequence_parts",...et("merged")],view:{ids:["sequence"],dir:[.3,.26,1],pad:1.18}},{id:"place-words",chapter:5,title:`The instruction takes the next ${ai}`,body:`
      <p>Each word token is looked up in the model's vocabulary table, which gives a column of
      ${ce.shape.vlm_width} numbers, also multiplied by 31. The ${ai-Ti} padding slots are in the
      sequence but masked out.</p>
      <p>The parts are colored on separate scales because they differ so much in size: picture tokens reach
      about ${Math.round(Cs[0].scale/10)*10}, words about ${Math.round(Cs[2].scale)}, the arm's readings
      about ${Cs[3].scale.toFixed(1)}.</p>`,focus:["sequence","lang_embed"],labels:["sequence","sequence_parts","lang_embed"],view:{ids:["sequence","lang_embed"],dir:[.5,.3,1],pad:1.12}},{id:"place-state",chapter:5,title:"The arm's readings take the last place",key:`Picture tokens, the instruction and the arm's readings stand in one sequence of ${Ct} + ${Ct} + ${ai} + 1 = ${ce.prefix.len} tokens, each ${ce.shape.vlm_width} numbers.`,body:`
      <table class="counts">
        <tr><th></th><th>tokens</th></tr>
        <tr><th>table camera</th><td>${Ct}</td></tr>
        <tr><th>wrist camera</th><td>${Ct}</td></tr>
        <tr><th>instruction: ${Ti} words, ${ai-Ti} padding</th><td>${ai}</td></tr>
        <tr><th>arm readings</th><td>1</td></tr>
        <tr class="total"><th>the sequence</th><td>${ce.prefix.len}</td></tr>
      </table>
      <p>The ${ce.shape.max_dim} padded readings go through one small matrix to become a single token of
      ${ce.shape.vlm_width} numbers: the thin sheet on the right.</p>
      <p>That matrix (${gt(ce.params.state_proj)} numbers) is <b>trained</b>: it is one of the few parts outside
      the action expert that the fine-tuning changed.</p>`,focus:["sequence","state_token"],labels:["sequence","sequence_parts","state_token"],view:{ids:["sequence","state_token"],dir:[.5,.3,1],pad:1.32}},{id:"who-sees-whom",chapter:5,title:"Who may look at whom",body:`
      <p>Tokens exchange information by looking at each other. This grid is the rule: a <b>row</b> is the token
      that looks, a <b>column</b> is what it may look at, both in the order of the sequence. Blue means it
      may.</p>
      <p>The large blue square is the ${2*Ct} picture tokens and the ${Ti} words, which all look at
      each other but not at the arm's readings. The ${ai-Ti} padding slots neither look nor are
      looked at. The readings token, the thin blue line at the bottom, looks at pictures, words and itself.</p>
      <p class="how">Point at a cell to read who looks at whom.</p>`,focus:["mask","sequence"],view:{ids:["mask"],dir:[0,.05,1],pad:1.06,room:{top:62,right:128,bottom:112}}},{id:"vlm-stack",chapter:6,title:`${ce.shape.vlm_layers} layers rework the sequence`,key:`The sequence passes through ${ce.shape.vlm_layers} frozen layers of the vision-language model, in which every token looks at the others and is reworked.`,body:`
      <p>The sequence now passes through the <b>vision-language model</b>: ${ce.shape.vlm_layers} layers,
      ${eo(ce.params.vlm_text_16_layers)} parameters, frozen.</p>
      <p>The lower sheet is the sequence as it enters a layer. The upper sheet is what that layer <b>adds</b>:
      every token first looks at the others, then is reworked on its own, and both results are added to its
      column. The next layer starts from the sum.</p>
      <p>Move the slider to walk through the layers. A picture token's column has a length of about
      ${gt(zn.picture_token_size)}, and a layer changes it by only ${Math.min(...Bc).toFixed(0)} to
      ${Math.max(...Bc).toFixed(0)} percent. The readings token starts small and grows
      ${Math.round(zn.readings_token_size[1]/zn.readings_token_size[0])} times in the first layer alone.</p>
      <p class="how">Each part of a sheet is colored on its own scale.</p>`,focus:["vlm_stream","vlm_update","ghost_vlm"],labels:["vlm_update","vlm_stream","ghost_vlm"],view:{ids:["vlm_stream","vlm_update"],dir:[.5,.26,1],pad:1.22},slider:"layer",layer:0},{id:"vlm-attention",chapter:6,title:"Tokens look at each other",body:`
      <p>This grid is the looking inside one layer, averaged over its ${ce.shape.heads} attention heads. A
      <b>row</b> is the token that looks, a <b>column</b> is what it looks at, and brightness is the share of
      its attention.</p>
      <p>Point at a row: the tiles beside the grid show where that token looks in the two pictures, the words
      and the readings.</p>
      <p>Go to ${oa(`layer ${ol+2}`,ol+1)}: two bright columns appear. They are the two tokens
      for the word "${vg}". One layer earlier their columns suddenly grew ${gg} times larger, and from here
      on the other tokens put much of their attention on them (the readings token about ${xg}%).
      Language models are known to turn low-content tokens into fixed reference points like this.</p>`,focus:["vlm_attn",...ra],labels:["vlm_attn",...ra],view:{ids:["vlm_attn",...ra],dir:[.14,.08,1],pad:1.22},alone:!0,slider:"layer",look:"vlm",row:ce.prefix.len-1},{id:"vlm-keys",chapter:6,title:"What each layer leaves for the expert",key:"The vision-language model runs once per plan and stores keys and values at every layer: they are the action expert's only window onto the pictures, the words and the readings.",body:`
      <p>To be looked at, every token publishes two things in every layer: a <b>key</b>, which says what it is
      about, and a <b>value</b>, which is what it passes on to whoever looks. Each is
      ${ce.layers.vlm_k[0].rows} numbers.</p>
      <p>The vision-language model runs <b>once</b> per plan. The keys and values of all
      ${ce.shape.vlm_layers} layers are stored. The action expert reads them again and again: they are its only
      window onto the pictures, the words and the readings.</p>
      <p>The model's final output, after the last layer, is never used.</p>`,focus:["vlm_k","vlm_v","vlm_stream","vlm_update","ghost_vlm"],labels:["vlm_k","vlm_v","vlm_update","vlm_stream"],view:{ids:["vlm_stream","vlm_v"],dir:[.5,.26,1],pad:1.2},slider:"layer"},{id:"expert-input",chapter:7,title:`${ce.shape.chunk} action tokens, starting from noise`,body:`
      <p>The plan is ${ce.shape.chunk} actions, one per 0.1 s. Each action is ${ce.shape.max_dim} numbers, the size
      the pretrained model expects; this arm uses the first 7.</p>
      <p>At the start the plan is <b>pure random noise</b>: the small sheet at the back.</p>
      <p>One matrix turns each action's ${ce.shape.max_dim} numbers into ${ce.shape.expert_width}. Two more mix in
      a code for the noise level (1.0 here: all noise). The result is ${ce.shape.chunk} action tokens, the larger
      sheet. These matrices are <b>trained</b>.</p>`,focus:["exp_x","exp_stream","ghost_expert"],labels:["exp_stream","exp_x","ghost_expert"],view:{ids:["exp_x","exp_stream"],dir:[.8,.34,1],pad:1.7},alone:!0,layer:0},{id:"expert-stack",chapter:7,title:"A second stack, beside the first",key:`The action expert is a second stack of ${ce.shape.expert_layers} layers and the part the 30 demos trained: ${eo(ce.params.action_expert)} parameters.`,body:`
      <p>The <b>action expert</b> is its own stack of ${ce.shape.expert_layers} layers, working on the
      ${ce.shape.chunk} action tokens. Its columns are ${ce.shape.expert_width} numbers. This is the part the 30
      demos trained: ${eo(ce.params.action_expert)} parameters.</p>
      <p>As before, the lower sheet enters the layer and the upper sheet is what the layer adds.</p>
      <p>The layers alternate. In layers 1, 3, 5, ... an action token looks at the sequence's stored keys and
      values and at the action tokens before it. In layers 2, 4, 6, ... it looks at the sequence only.</p>`,focus:["exp_stream","exp_update","ghost_expert"],labels:["exp_update","exp_stream","ghost_expert"],view:{ids:["exp_stream","exp_update"],dir:[.55,.26,1],pad:1.6},alone:!0,slider:"layer"},{id:"expert-look",chapter:7,title:"Where the action tokens look",key:"Single attention heads of the action expert look at exactly what the task is about: the bin, the gripper, the cube.",body:`
      <p>Each row is an action token, each column a token of the sequence. Below it: where the marked action
      token looks, laid over the two pictures. Point at another row to mark it.</p>
      <p>Averaged over the ${ce.shape.heads} heads, the looking is spread out. Single heads are far more focused.
      Try:</p>
      <ul>
        <li>${oa("Layer 2, head 13",1,12)}: the bin</li>
        <li>${oa("Layer 6, head 5",5,4)}: the gripper and the cube</li>
        <li>${oa("Layer 14, head 11",13,10)}: the cube in the wrist picture</li>
        <li>${oa("Layer 4, all heads",3,-1)}: much of it on the arm's readings</li>
      </ul>
      <p>Nobody told the expert where to look. It comes from training: the pretraining on other robots, then
      the 30 demos.</p>`,focus:["exp_attn","exp_own",...ra],labels:["exp_attn",...ra,"exp_own"],view:{ids:["exp_attn","exp_own","look_wrist","look_words"],dir:[.1,.07,1],pad:1.1},alone:!0,slider:"layer",heads:!0,layer:1,head:-1,look:"exp",row:0},{id:"expert-output",chapter:7,title:"Out comes a direction",body:`
      <p>After the last layer, one more matrix turns each action token back into ${ce.shape.max_dim} numbers.</p>
      <p>The result is not a plan yet. It is a <b>direction</b>: for every number of the noisy plan, which way
      to move it and how far. The top 7 rows, the ones this arm uses, are the strong ones.</p>
      <p>This was step 1 of ${ce.shape.num_steps}.</p>`,focus:["exp_last","exp_v","exp_stream","ghost_expert"],labels:["exp_v","exp_last"],view:{ids:["exp_last","exp_v"],dir:[.8,.34,1],pad:1.7},alone:!0,layer:ce.shape.expert_layers-1},{id:"loop-step",chapter:8,title:"One round: a tenth of the way",body:`
      <p>The direction answers one question: how do I get from the real plan to this noise? So the plan lies
      the other way.</p>
      <p>The noisy plan is moved one tenth of the way against the direction:</p>
      <p class="mono">new plan = plan − 0.1 x direction</p>
      <p>Its noise level drops from 1.0 to 0.9.</p>
      <p>On the right is the same thing as curves: the ${Be.names.length} numbers of each action that this arm
      uses, one band per joint, ${ce.shape.chunk} actions from left to right. Right now they are pure noise.</p>`,focus:["den_x","den_v","plot"],labels:["plot","den_x","den_v"],view:{ids:["den_x","den_v","plot"],dir:[.1,.08,1],pad:1.16},alone:!0,slider:"round",round:0,plot:{units:"norm"}},{id:"loop-rounds",chapter:8,title:`${Be.times.length} rounds`,key:`The plan starts as pure noise, and ${Be.times.length} rounds of the action expert turn it into ${ce.shape.chunk} actions.`,body:`
      <p>Drag the slider. In every round the action expert runs again, all ${ce.shape.expert_layers} layers, on
      the new and less noisy plan. It reads the same stored keys and values, so the vision-language model does
      not run again.</p>
      <p>The curves calm down round by round. After round ${Be.times.length} the noise level is 0 and what is
      left is the plan: ${ce.shape.chunk} actions, 5 seconds.</p>
      <p>The dashed curves are what the hand did in the demo from this frame on. The model does not see them
      here; they are drawn for comparison.</p>`,focus:["den_x","den_v","plot"],labels:["plot","den_x","den_v"],view:{ids:["den_x","den_v","plot"],dir:[.1,.08,1],pad:1.16},alone:!0,slider:"round",round:0,plot:{units:"norm",hand:!0}},{id:"loop-guess",chapter:8,title:"The first direction already knew the way",body:`
      <p>The blue curves show where each round's direction points: the plan it implies.</p>
      <p>Go back to ${Hc("the start",0)}. The plan is still pure noise, yet the blue curves already lie
      close to the final plan: ${Be.guess_gap[0].toFixed(2)} away on average, in units where the noise has a
      spread of 1. ${Hc(`By round ${Be.times.length}`,Be.times.length-1)} the gap is gone.</p>
      <p>With nothing but noise to go on, the best the expert can do is point at the average of all plans that
      fit what the cameras show. The demos all did the same thing, so that average is already a good plan. Had
      they shown two different ways, the average would be a blur of both, and the later rounds are what lets
      the model settle on one.</p>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,slider:"round",round:0,plot:{units:"norm",guess:!0,hand:!0}},{id:"loop-degrees",chapter:8,title:"Back to degrees",body:`
      <p>The model works in rescaled numbers. To get angles, each of the ${Be.names.length} numbers is multiplied
      by that joint's spread and its average is added back. The other ${ce.shape.max_dim-Be.names.length} numbers
      of each action are dropped: they were never trained and are still noise.</p>
      <p>The result is the plan in degrees. From this frame on it stays within
      ${Math.min(...Be.gap_deg).toFixed(1)}° to ${Math.max(...Be.gap_deg).toFixed(1)}° of what the hand
      did, on average per joint.</p>
      <p>This frame comes from one of the demos, most likely one the model trained on, so a close match is
      expected here.</p>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,round:Be.times.length,plot:{units:"deg",hand:!0}},{id:"arm-commands",chapter:9,title:"From plan to commands",body:`
      <p>Every 0.1 s the next action's ${Be.names.length} angles go to our plugin, which turns them into commands
      for the D1's own controller:</p>
      <ul>
        <li>No joint's target moves faster than 40° per second. This plan asks for up to
        ${Math.round(Math.max(...Be.max_speed))}° per second (the ${Be.names[Be.max_speed.indexOf(Math.max(...Be.max_speed))]}),
        so on those stretches the arm falls behind the plan.</li>
        <li>At most 5 commands per second: sent faster, the controller starts skipping its joint reports.</li>
        <li>A closing gripper is sent 8° further than planned, so that it squeezes the cube instead of
        just touching it.</li>
      </ul>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,round:Be.times.length,plot:{units:"deg"}},{id:"arm-replan",chapter:9,title:"Only the first 2 seconds run",key:"Only about the first 2 seconds of each plan reach the arm: then a new plan, made from newer pictures, takes over.",body:`
      <p>The arm does not play all ${ce.shape.chunk} actions. When 30 are left, a new plan is started from new
      pictures.</p>
      <p>While that plan is computed the arm keeps following the old one, and the new plan is steered to agree
      with the actions that run in the meantime. Then it takes over. This is called real-time chunking.</p>
      <p>So about the first 2.3 s of each plan reach the arm: the solid part. The rest is replaced by the next
      plan, which has seen newer pictures.</p>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,round:Be.times.length,plot:{units:"deg",executed:23}},{id:"train-mix",chapter:10,title:"Training starts from a demo",body:`
      <p>Training runs the same machinery, with one difference: the answer is known.</p>
      <p>Take a frame of a demo and the ${ce.shape.chunk} actions the hand made from there (left). Draw fresh
      noise (middle) and a noise level between 0 and 1. Mix the two (right).</p>
      <p>The mix is what the action expert gets, together with that frame's pictures, the instruction and the
      readings. The slider switches between three noise levels.</p>`,focus:["tr_a","tr_noise","tr_x"],view:{ids:["tr_a","tr_noise","tr_x"],dir:[.1,.08,1],pad:1.3},alone:!0,slider:"noise",noise:1},{id:"train-target",chapter:10,title:"The answer is known",key:"Training mixes a demo's actions with noise and teaches the action expert to output the direction from the demo to the noise.",body:`
      <p>The expert should output the direction from the demo to the noise: noise minus demo (bottom left).
      That target is the same at every noise level.</p>
      <p>Its actual answer is in the middle, and on the right is the error, squared. Training nudges the
      expert's ${(ce.params.trainable/1e6).toFixed(1)}M numbers so that this error shrinks. Only the top
      ${Be.names.length} rows count. The other ${ce.shape.max_dim-Be.names.length} are never trained, which is
      why their error stays large.</p>
      <p>On those ${Be.names.length} rows the average error here is ${Be.train.loss7[0].toFixed(2)} at noise level
      ${Be.train.taus[0]}, ${Be.train.loss7[1].toFixed(3)} at ${Be.train.taus[1]} and ${Be.train.loss7[2].toFixed(3)}
      at ${Be.train.taus[2]}. Low noise is the hard case: the input is almost the demo itself, and the expert
      has to name the little noise that was added.</p>`,focus:zc,labels:["tr_u","tr_v","tr_err","tr_a","tr_noise","tr_x"],view:{ids:zc,dir:[.1,.08,1],pad:1.22},alone:!0,slider:"noise"},{id:"train-run",chapter:10,title:`${gt(Be.log.steps*Be.log.batch)} of these`,key:`The training error fell from ${Be.log.loss[0].toFixed(2)} to ${Be.log.loss[Be.log.loss.length-1].toFixed(3)}, but on demos kept out of training it was lower at step ${gt(Be.log.held_out[0][0])} than at step ${gt(Be.log.held_out[1][0])}.`,body:`
      <p>The training run did this ${gt(Be.log.steps)} times with ${Be.log.batch} frames each, drawing new noise and a new
      noise level every time: ${gt(Be.log.steps*Be.log.batch)} examples in ${Be.log.minutes} minutes on one GPU,
      about ${Math.round(Be.log.passes)} passes over the 27 demos it trained on.</p>
      <p>The solid curve is the error during training. It falls from ${Be.log.loss[0].toFixed(2)} to
      ${Be.log.loss[Be.log.loss.length-1].toFixed(3)}.</p>
      <p>The dashed line is the same error on the 3 demos kept out of training. It is much higher, and it was
      higher at step ${gt(Be.log.held_out[1][0])} (${Be.log.held_out[1][1].toFixed(2)}) than at step
      ${gt(Be.log.held_out[0][0])} (${Be.log.held_out[0][1].toFixed(2)}). The expert kept getting better at the
      demos it trained on, but not at ones it had not seen. That is a reason to test the
      step-${gt(Be.log.held_out[0][0])} checkpoint on the arm too.</p>`,focus:["loss"],view:{ids:["loss"],dir:[.1,.08,1],pad:1.45},alone:!0},{id:"end",chapter:11,title:"The whole path",key:"On the real arm, this policy picked up the cube and dropped it in the bin on its own in 1 of 5 recorded tests.",body:`
      <p>Two pictures, ${Be.names.length} readings and one sentence go in.</p>
      <p>${gt(xn)} patches per picture become ${Ct} tokens. ${ce.prefix.len} tokens pass through
      ${ce.shape.vlm_layers} frozen layers, which leave their keys and values behind.</p>
      <p>${ce.shape.chunk} noisy action tokens pass through ${ce.shape.expert_layers} trained layers
      ${Be.times.length} times, reading those keys and values, and come out as 5 seconds of joint angles. The arm
      runs the first 2 seconds, and the model plans again.</p>
      <p>On the real arm, this policy picked up the cube and dropped it in the bin on its own in 1 of 5
      recorded tests. In 3 more the first approach pushed the cube, and a hand put it back.</p>`,focus:"all",view:{ids:["table_raw","state_in","sequence","mask","ghost_vlm","ghost_expert","plot","loss"],dir:[1,.42,.42],pad:.94}}],yg=i=>{const e=Pt.findIndex(t=>t.id===i);if(e<0)throw new Error(`no step "${i}"`);return e},Gc=new En,Ja=new U;class Xh extends A_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Gn(e,3)),this.setAttribute("uv",new Gn(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new al(t,6,1);return this.setAttribute("instanceStart",new Ci(n,3,0)),this.setAttribute("instanceEnd",new Ci(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new al(t,6,1);return this.setAttribute("instanceColorStart",new Ci(n,3,0)),this.setAttribute("instanceColorEnd",new Ci(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new T_(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Gc.setFromBufferAttribute(t),this.boundingBox.union(Gc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Ja.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Ja)),Ja.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Ja));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}be.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new qe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};cn.line={uniforms:Ml.merge([be.common,be.fog,be.line]),vertexShader:`
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
		`};class Al extends Jn{static get type(){return"LineMaterial"}constructor(e){super({uniforms:Ml.clone(cn.line.uniforms),vertexShader:cn.line.vertexShader,fragmentShader:cn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const to=new mt,Vc=new U,$c=new U,$t=new mt,Wt=new mt,$n=new mt,no=new U,io=new Rt,Xt=new C_,Wc=new U,Qa=new En,er=new js,Wn=new mt;let Zn,ji;function Xc(i,e,t){return Wn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Wn.multiplyScalar(1/Wn.w),Wn.x=ji/t.width,Wn.y=ji/t.height,Wn.applyMatrix4(i.projectionMatrixInverse),Wn.multiplyScalar(1/Wn.w),Math.abs(Math.max(Wn.x,Wn.y))}function bg(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,a=n.attributes.instanceEnd,r=Math.min(n.instanceCount,s.count);for(let o=0,l=r;o<l;o++){Xt.start.fromBufferAttribute(s,o),Xt.end.fromBufferAttribute(a,o),Xt.applyMatrix4(t);const c=new U,h=new U;Zn.distanceSqToSegment(Xt.start,Xt.end,h,c),h.distanceTo(c)<ji*.5&&e.push({point:h,pointOnLine:c,distance:Zn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Mg(i,e,t){const n=e.projectionMatrix,a=i.material.resolution,r=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-e.near;Zn.at(1,$n),$n.w=1,$n.applyMatrix4(e.matrixWorldInverse),$n.applyMatrix4(n),$n.multiplyScalar(1/$n.w),$n.x*=a.x/2,$n.y*=a.y/2,$n.z=0,no.copy($n),io.multiplyMatrices(e.matrixWorldInverse,r);for(let f=0,p=h;f<p;f++){if($t.fromBufferAttribute(l,f),Wt.fromBufferAttribute(c,f),$t.w=1,Wt.w=1,$t.applyMatrix4(io),Wt.applyMatrix4(io),$t.z>u&&Wt.z>u)continue;if($t.z>u){const E=$t.z-Wt.z,M=($t.z-u)/E;$t.lerp(Wt,M)}else if(Wt.z>u){const E=Wt.z-$t.z,M=(Wt.z-u)/E;Wt.lerp($t,M)}$t.applyMatrix4(n),Wt.applyMatrix4(n),$t.multiplyScalar(1/$t.w),Wt.multiplyScalar(1/Wt.w),$t.x*=a.x/2,$t.y*=a.y/2,Wt.x*=a.x/2,Wt.y*=a.y/2,Xt.start.copy($t),Xt.start.z=0,Xt.end.copy(Wt),Xt.end.z=0;const v=Xt.closestPointToPointParameter(no,!0);Xt.at(v,Wc);const m=yl.lerp($t.z,Wt.z,v),d=m>=-1&&m<=1,A=no.distanceTo(Wc)<ji*.5;if(d&&A){Xt.start.fromBufferAttribute(l,f),Xt.end.fromBufferAttribute(c,f),Xt.start.applyMatrix4(r),Xt.end.applyMatrix4(r);const E=new U,M=new U;Zn.distanceSqToSegment(Xt.start,Xt.end,M,E),t.push({point:M,pointOnLine:E,distance:Zn.origin.distanceTo(M),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}class Sg extends Bn{constructor(e=new Xh,t=new Al({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let r=0,o=0,l=t.count;r<l;r++,o+=2)Vc.fromBufferAttribute(t,r),$c.fromBufferAttribute(n,r),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Vc.distanceTo($c);const a=new al(s,2,1);return e.setAttribute("instanceDistanceStart",new Ci(a,1,0)),e.setAttribute("instanceDistanceEnd",new Ci(a,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const a=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Zn=e.ray;const r=this.matrixWorld,o=this.geometry,l=this.material;ji=l.linewidth+a,o.boundingSphere===null&&o.computeBoundingSphere(),er.copy(o.boundingSphere).applyMatrix4(r);let c;if(n)c=ji*.5;else{const u=Math.max(s.near,er.distanceToPoint(Zn.origin));c=Xc(s,u,l.resolution)}if(er.radius+=c,Zn.intersectsSphere(er)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Qa.copy(o.boundingBox).applyMatrix4(r);let h;if(n)h=ji*.5;else{const u=Math.max(s.near,Qa.distanceToPoint(Zn.origin));h=Xc(s,u,l.resolution)}Qa.expandByScalar(h),Zn.intersectsBox(Qa)!==!1&&(n?bg(this,t):Mg(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(to),this.material.uniforms.resolution.value.set(to.z,to.w))}}class ll extends Xh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class wg extends Sg{constructor(e=new ll,t=new Al({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class qc{constructor(e,t,n,s){je(this,"group",new Rs);je(this,"series",new Map);je(this,"lo");je(this,"hi");je(this,"loTo");je(this,"hiTo");je(this,"settled",!1);this.rows=e,this.points=t,this.width=n,this.rowHeight=s,this.lo=new Float32Array(e).fill(-1),this.hi=new Float32Array(e).fill(1),this.loTo=this.lo.slice(),this.hiTo=this.hi.slice()}addSeries(e,t,n,s=!1){const a=new Al({linewidth:n,dashed:s,dashSize:1.1,gapSize:.9,worldUnits:!1}),r=Array.from({length:this.rows},()=>{const o=new wg(new ll,a);return o.visible=!1,o.position.z=.25,this.group.add(o),o});this.series.set(e,{role:t,lines:r,material:a,now:null,to:null,xs:null,from:0,until:this.points})}set(e,t,n={}){const s=this.series.get(e);if(this.settled=!1,!t){s.to=s.now=null;for(const o of s.lines)o.visible=!1;return}const a=t.map(o=>Float32Array.from(o)),r=s.now&&s.now.length===a.length&&s.now[0].length===a[0].length;s.to=a,(!r||n.instant)&&(s.now=a.map(o=>o.slice())),s.xs=n.xs??null,s.from=n.from??0,s.until=n.until??a[0].length}setRange(e,t,n,s=!1){this.loTo[e]=t,this.hiTo[e]=n,s&&(this.lo[e]=t,this.hi[e]=n),this.settled=!1}range(e){return[this.loTo[e],this.hiTo[e]]}setColors(e){for(const t of this.series.values())t.material.color.copy(t.role==="later"?e.plan:e[t.role])}setResolution(e,t){for(const n of this.series.values())n.material.resolution.set(e,t)}at(e,t,n){const s=this.rows*this.rowHeight/2-e*this.rowHeight,a=this.rowHeight*.14,r=n===void 0?1:Math.min(1,Math.max(0,(n-this.loTo[e])/(this.hiTo[e]-this.loTo[e]||1))),o=n===void 0?s:s-this.rowHeight+a+r*(this.rowHeight-2*a);return new U(-this.width/2+(t+.5)/this.points*this.width,o,0).add(this.group.position)}tick(e){if(this.settled)return!1;const t=Math.min(1,e*9);let n=!1;const s=(r,o,l)=>{const c=o-r;return Math.abs(c)<l*.002?o:(n=!0,r+c*t)};for(let r=0;r<this.rows;r++){const o=Math.abs(this.hiTo[r]-this.loTo[r])||1;this.lo[r]=s(this.lo[r],this.loTo[r],o),this.hi[r]=s(this.hi[r],this.hiTo[r],o)}const a=this.rowHeight*.14;for(const r of this.series.values())if(!(!r.now||!r.to))for(let o=0;o<r.lines.length;o++){const l=r.now[o],c=r.to[o],h=Math.abs(this.hi[o]-this.lo[o])||1,u=this.rows*this.rowHeight/2-(o+1)*this.rowHeight+a,f=[];for(let g=0;g<l.length;g++){if(l[g]=s(l[g],c[g],h),g<r.from||g>=r.until)continue;const v=r.xs?r.xs[g]:g,m=Math.min(1.08,Math.max(-.08,(l[g]-this.lo[o])/h));f.push(-this.width/2+(v+.5)/this.points*this.width,u+m*(this.rowHeight-2*a),0)}const p=r.lines[o];p.visible=f.length>=6,p.visible&&(p.geometry.dispose(),p.geometry=new ll().setPositions(f),r.material.dashed&&p.computeLineDistances())}return this.settled=!n,!0}}const qt=le.plan,en=le.shape.chunk,yn=le.shape.max_dim,ln=qt.names.length,zt=qt.times.length,so=qt.train.taus,Yc=' <i class="tag trained">trained</i>',tr=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−"),jc=i=>`action ${i+1} of ${en} (${(i*.1).toFixed(1)} s ahead)`,Eg=i=>i<ln?qt.names[i]:"not used by this arm",qh=i=>i[0].map((e,t)=>i.map(n=>n[t])),ao=qh(qt.plan_deg),ro=qh(qt.hand_deg);function Tg(i){const{view:e,add:t,at:n}=i,s={round:0,noise:1};let a={units:"norm"};const r=i.endZ+64,o=r+84,l=en*.8,c=yn*.6,h=new Map,u=(ue,me,de,ge,ke,Me,w={})=>{const _=le.sheets[me],z=new Uint8Array(en*yn*4).fill(128),L=Lt(z,en,yn),H=t({id:ue,title:ue,note:"",kind:"signed",cols:en,rows:yn,width:l,height:c,pos:ge,texture:L,bits:16,min:_.min,max:_.max,parts:[{end:en,scale:_.scale??1}],revealAt:n(ke),label:Me,valueAt:(J,ie)=>{var re;return((re=h.get(ue).values)==null?void 0:re.at(J,de()*yn+ie))??null},...w}),F={id:ue,info:_,bytes:z,texture:L,values:null,block:de,sheet:H};return h.set(ue,F),Xs(_,1).then(J=>{F.values=J,f(F),Le()}),H},f=ue=>{if(!ue.values)return;const me=en*yn*4;ue.bytes.set(ue.values.rgba.subarray(ue.block()*me,(ue.block()+1)*me)),ue.texture.needsUpdate=!0,e.touch(3)},p=ue=>1-ue/zt,g=-58;u("den_x","den_x",()=>s.round,[g,15,r],"loop-step",()=>`<b>${s.round===zt?"The plan":"The noisy plan"}</b><span>noise level ${p(s.round).toFixed(1)}</span>`,{trained:!0}),u("den_v","den_v",()=>Math.min(s.round,zt-1),[g,-15,r],"loop-step",()=>`<b>The direction</b>${Yc}<span>from round ${Math.min(s.round,zt-1)+1}</span>`,{trained:!0,when:()=>s.round<zt});const v=()=>so[s.noise],m=[-26,20,66];u("tr_a","tr_a",()=>0,[m[0],15,o],"train-mix",()=>`<b>A demo: what the hand did</b><span>${en} actions x ${yn} numbers, ${ln} used</span>`),u("tr_noise","den_x",()=>0,[m[1],15,o],"train-mix",()=>`<b>Fresh noise</b><span>${en} x ${yn}</span>`),u("tr_x","tr_x",()=>s.noise,[m[2],15,o],"train-mix",()=>`<b>Their mix, noise level ${v()}</b><span>${v()} x noise + ${(1-v()).toFixed(1)} x demo</span>`),u("tr_u","tr_u",()=>0,[m[0],-15,o],"train-target",()=>"<b>The target: noise minus demo</b><span>the same at every noise level</span>"),u("tr_v","tr_v",()=>s.noise,[m[1],-15,o],"train-target",()=>`<b>The expert's answer</b>${Yc}<span>from the mix at noise level ${v()}</span>`,{trained:!0});const d=le.sheets.tr_err;u("tr_err","tr_err",()=>s.noise,[m[2],-15,o],"train-target",()=>`<b>The error, squared</b><span>top ${ln} rows count: ${qt.train.loss7[s.noise].toFixed(3)} on average</span>`,{kind:"unit",min:d.min,max:d.max,parts:[{end:en,scale:1}]});const A=(ue,me)=>Lt(new Uint8Array(ue*me*4),ue,me),E=9,M=110,G=[50,0,r],D=(ue,me)=>`<i class="sw ${ue}"></i>${me}`,T=t({id:"plot",title:"plot",note:"",kind:"unit",cols:en,rows:ln,width:M,height:ln*E,pos:G,texture:A(en,ln),bits:8,min:0,max:1,revealAt:n("loop-step"),borders:"rows",label:()=>{const ue=[D("plan",a.executed?"the part that runs on the arm":s.round===zt?"the plan":s.round===0?"pure noise":`after round ${s.round}`)];return a.executed&&ue.push(D("later","replaced by the next plan")),a.guess&&s.round<zt&&ue.push(D("guess","where the direction points")),a.hand&&ue.push(D("hand","what the hand did")),`<b>The ${ln} numbers of each action this arm uses${a.units==="deg"?", in degrees":""}</b><span class="legend">${ue.join("")}</span>`}}),P=new qc(ln,en,M,E);P.group.position.set(...G),P.addSeries("hand","hand",1.6,!0),P.addSeries("later","later",1.5,!0),P.addSeries("guess","guess",1.8),P.addSeries("plan","plan",2.6),e.scene.add(P.group);const S=ue=>{const[me,de]=P.range(ue),ge=a.units==="deg"?"°":"",ke=Me=>(Number.isInteger(Me)?String(Me):Me.toFixed(1)).replace("-","−");return`${ke(me)}${ge} to ${ke(de)}${ge}`},y=qt.names.map((ue,me)=>e.addLabel("",new U(G[0]-M/2-1.2,G[1]+ln*E/2-(me+.5)*E,r),()=>T.shown&&i.rank("plot")!==null?30+me:null,"row left")),C=()=>y.forEach((ue,me)=>ue.innerHTML=`<b>${qt.names[me]}</b><span>${S(me)}</span>`),V=qt.log,$=[m[2]+l/2+14+M/2,0,o],Q=34,ae=t({id:"loss",title:"loss",note:"",kind:"unit",cols:V.loss.length,rows:1,width:M,height:Q,pos:$,texture:A(V.loss.length,1),bits:8,min:0,max:1,revealAt:n("train-run"),borders:"none",label:()=>`<b>The loss over the ${V.steps.toLocaleString("en-US")} training steps</b><span class="legend">${D("plan","on the demos it trains on")}${D("hand","on the 3 held-out demos")}</span><span>log scale, ${j[0]} at the bottom to ${j[1]} at the top</span>`}),j=[.03,1],se=new qc(1,V.loss.length,M,Q);se.group.position.set(...$),se.addSeries("held","hand",1.8,!0),se.addSeries("train","plan",2.6),se.setRange(0,Math.log10(j[0]),Math.log10(j[1]),!0),se.set("train",[V.loss.map(Math.log10)],{instant:!0});const Z=V.held_out.map(([ue])=>ue/V.every-1);se.set("held",[V.held_out.map(([,ue])=>Math.log10(ue))],{xs:Z,instant:!0}),e.scene.add(se.group);const pe=(ue,me,de,ge)=>e.addLabel(de,se.at(0,ue,Math.log10(me)).add(new U(0,.6,.3)),()=>ae.shown&&i.rank("loss")!==null?40+ge:null,"mark");V.held_out.forEach(([ue,me],de)=>pe(Z[de]-(de?9:4),me,`step ${ue.toLocaleString("en-US")}: <b>${me.toFixed(2)}</b>`,de)),pe(V.loss.length-12,V.loss[V.loss.length-1]*1.35,`end: <b>${V.loss[V.loss.length-1].toFixed(3)}</b>`,2),pe(1,V.loss[0]*.62,`step ${V.every}: <b>${V.loss[0].toFixed(2)}</b>`,3);let X=null,he=null,Ae=null;const Le=()=>{const ue=h.get("den_x").values,me=h.get("den_v").values,de=h.get("tr_a").values;if(!ue||!me||!de||X)return;const ge=(ke,Me)=>Array.from({length:ln},(w,_)=>Array.from({length:en},(z,L)=>ke.at(L,Me*yn+_)));X=Array.from({length:zt+1},(ke,Me)=>ge(ue,Me)),he=X.map((ke,Me)=>Me===zt?ke:ke.map((w,_)=>w.map((z,L)=>z-qt.times[Me]*me.at(L,Me*yn+_)))),Ae=ge(de,0),te(!0)},q=ue=>ue.map((me,de)=>me.map(ge=>ge*qt.std[de]+qt.mean[de])),te=ue=>{if(!X||!he||!Ae)return;const me=a.units==="deg",de=s.round,ge=me?de===zt?ao:q(X[de]):X[de];P.set("plan",ge,{until:a.executed??en,instant:ue}),P.set("later",a.executed?ge:null,{from:(a.executed??1)-1,instant:!0}),P.set("guess",a.guess&&de<zt?me?q(he[de]):he[de]:null,{instant:ue}),P.set("hand",a.hand?me?ro:Ae:null,{instant:ue});for(let ke=0;ke<ln;ke++)if(!me)P.setRange(ke,-3.3,3.3,ue);else{const Me=[...ao[ke],...ro[ke]],w=Math.min(...Me),_=Math.max(...Me),z=Math.max(1.5,(_-w)*.12);P.setRange(ke,Math.floor(w-z),Math.ceil(_+z),ue)}C(),e.touch(3)},xe=(ue,me)=>{s.round=Math.min(zt,Math.max(0,Math.round(ue)));for(const de of["den_x","den_v"])f(h.get(de));te(me),i.changed()},ye=ue=>{s.noise=Math.min(so.length-1,Math.max(0,Math.round(ue)));for(const me of["tr_x","tr_v","tr_err"])f(h.get(me));i.changed()},Ne=(ue,me)=>{a=ue??a,te(me),T.mesh.material.uniforms.uSelDim.value=0},ze={den_x:()=>s.round===zt?"The plan":s.round===0?"The noisy plan: pure noise":`The noisy plan after round ${s.round}`,den_v:()=>`The direction, round ${Math.min(s.round,zt-1)+1}`,tr_a:()=>"A demo: what the hand did",tr_noise:()=>"Fresh noise",tr_x:()=>`Their mix, noise level ${v()}`,tr_u:()=>"The target: noise minus demo",tr_v:()=>`The expert's answer at noise level ${v()}`,tr_err:()=>"The error, squared"},Ve=new Set([...h.keys(),"plot","loss"]),it=ue=>{var w,_;const me=ue.sheet.spec.id;if(!Ve.has(me))return null;const{col:de,row:ge}=ue;if(me==="loss"){const z=(de+1)*V.every,L=V.held_out.find(([H])=>H===z);return{html:`<i>Training loss</i><span>step ${z.toLocaleString("en-US")}</span><b class="val">${V.loss[de].toFixed(3)}</b>${L?`<span>on the held-out demos: ${L[1].toFixed(3)}</span>`:""}`,action:null}}if(me==="plot"){if(!X||!he||!Ae)return{html:`<i>${qt.names[ge]}</i>`,action:de};const z=a.units==="deg",L=z?"°":"",H=re=>tr(z?re*qt.std[ge]+qt.mean[ge]:re)+L,F=s.round,J=z&&F===zt?tr(ao[ge][de])+L:H(X[F][ge][de]);let ie=`<i>${qt.names[ge]}</i><span>${jc(de)}</span><span>${F===zt?"the plan":F===0?"pure noise":`after round ${F}`}</span><b class="val">${J}</b>`;return a.guess&&F<zt&&(ie+=`<span>where the direction points: ${H(he[F][ge][de])}</span>`),a.hand&&(ie+=`<span>what the hand did: ${z?tr(ro[ge][de])+L:H(Ae[ge][de])}</span>`),a.executed&&(ie+=`<span>${de<a.executed?"runs on the arm":"replaced by the next plan"}</span>`),{html:ie,action:de}}const ke=(_=(w=ue.sheet.spec).valueAt)==null?void 0:_.call(w,de,ge),Me=ke==null?"":`<b class="val">${tr(ke)}</b>`;return{html:`<i>${ze[me]()}</i><span>${jc(de)}</span><span>number ${ge+1} of ${yn}: ${Eg(ge)}</span>${Me}`,action:de}},Je=ue=>{const me=de=>ue===null?[]:[[ue,0,ue+1,de]];for(const de of h.values())de.sheet.select(me(yn));T.select(a.executed?[[0,0,a.executed,ln],...me(ln)]:me(ln))},lt=()=>{const ue={plan:e.theme.accent,guess:e.theme.fill,hand:e.theme.hi};P.setColors(ue),se.setColors(ue),e.touch()},O=(ue,me)=>{P.setResolution(ue,me),se.setResolution(ue,me)};return e.resized.push(O),e.themed.push(lt),O(e.renderer.domElement.clientWidth,e.renderer.domElement.clientHeight),lt(),C(),{state:s,rounds:zt,levels:so,owns:ue=>Ve.has(ue),setRound:xe,setNoise:ye,setMode:Ne,hover:it,select:Je,retheme:lt,tick:ue=>{P.group.visible=T.shown&&T.reveal>.5,se.group.visible=ae.shown&&ae.reveal>.5;const me=P.tick(ue),de=se.tick(ue);return me||de}}}const Zc=["table","wrist"],oo={table:"table camera",wrist:"wrist camera"},bn=le.matrix,on=bn.rows,wi=bn.inputs/bn.fold,cl=le.shape.vision_width,Kc=bn.inputs/cl,xs=96,ys=48,zi=3.2,nr=2.4,hl=19,Yh=.14,la=hl/(1-Yh),Jc=9,Qc=7,Ht=i=>i.toLocaleString("en-US"),jh=i=>i.replace("-","−"),lo=i=>jh(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)),Ag=i=>jh(i.toFixed(4));function Rg(i){const{view:e,add:t}=i,n=i.at("matrix"),s=i.blocksPerSide,a={cam:i.start.cam,block:i.start.block,row:on/2,col:null},[r,o,l]=i.center,c=r-(la+Qc+xs+nr+zi)/2,h=c+la/2,u=c+la+Qc+xs/2,f=o-(nr+zi)/2,p=f+ys/2+nr+zi/2,g=u+xs/2+nr+zi/2,v={table:f+(la+Jc)/2,wrist:f-(la+Jc)/2},m=X=>({revealAt:n,overview:!1,dim:!1,when:()=>i.focused(X)}),d={};for(const X of Zc){const he=`matrix_${X}`;d[X]=t({id:he,title:`${X==="table"?"Table":"Wrist"}<i class="more"> camera</i>`,note:"",kind:"image",cols:s,rows:s,width:hl,height:hl,pos:[h,v[X],l],texture:i.pictures[X],inner:le.shape.image/le.shape.patch/s,...m(he)}),d[X].gap=d[X].gapTo=Yh}const A=Lt(new Uint8Array([128,128,128,255]),1,1);let E=null;const M=t({id:"matrix",title:"The matrix",note:`${Ht(on)} rows x ${Ht(bn.inputs)} weights`,kind:"signed",cols:wi,rows:on,width:xs,height:ys,pos:[u,f,l],texture:A,bits:8,min:-1,max:1,...m("matrix"),valueAt:(X,he)=>(E==null?void 0:E.at(X,he))??null}),G=new Uint8Array(wi*4).fill(255),D=Lt(G,wi,1,i.aniso),T=X=>{const he=i.encoded[a.cam];return(he.min??0)+G[X*4]/255*((he.max??1)-(he.min??0))},P=t({id:"matrix_in",title:"",note:"",kind:"signed",cols:wi,rows:1,width:xs,height:zi,pos:[u,p,l],texture:D,bits:8,min:i.encoded[a.cam].min,max:i.encoded[a.cam].max,borders:"none",...m("matrix_in"),label:()=>`<b>The glued column of block ${a.block+1}</b><span>${oo[a.cam]}: ${Ht(bn.inputs)} numbers, lying on its side</span>`,valueAt:X=>T(X),isClipped:X=>G[X*4]===0||G[X*4]===255}),S=new Uint8Array(on*4).fill(255),y=Lt(S,1,on,i.aniso),C=t({id:"matrix_out",title:"",note:"",kind:"signed",cols:1,rows:on,width:zi,height:ys,pos:[g,f,l],texture:y,bits:16,min:i.merged[a.cam].info.min,max:i.merged[a.cam].info.max,borders:"none",...m("matrix_out"),label:()=>`<b>Its token</b><span>${Ht(on)} numbers</span>`,valueAt:(X,he)=>i.merged[a.cam].at(a.block,he)}),V=X=>()=>M.shown&&M.reveal>0?i.rank(X):null;e.addLabel(`<b>The matrix</b><span>${Ht(on)} rows x ${Ht(bn.inputs)} weights, frozen</span>`,new U(u-xs/2,f-ys/2-.8,l),V("matrix_name"),"below");const $=new U(g+zi/2+1,f,l),Q=e.addLabel("",$,V("matrix_row"),"side"),ae=()=>{const{cam:X,block:he}=a;for(let q=0;q<wi;q++)G[q*4]=i.gluedByte(X,he,q);D.needsUpdate=!0;const Ae=i.encoded[X];P.setTexture(D,{cols:wi,rows:1,bits:8,min:Ae.min,max:Ae.max}),P.setScale(Ae.scale??1);const Le=i.merged[X];for(let q=0;q<on;q++){const te=(q*Le.info.cols+he)*4;S[q*4]=Le.rgba[te],S[q*4+1]=Le.rgba[te+1]}y.needsUpdate=!0,C.setTexture(y,{cols:1,rows:on,bits:16,min:Le.info.min,max:Le.info.max}),C.setScale(Le.info.scale??1)},j=()=>{const{cam:X,block:he,row:Ae,col:Le}=a;M.select(Le===null?[[0,Ae,wi,Ae+1]]:[[0,Ae,wi,Ae+1],[Le,0,Le+1,on]]),P.select(Le===null?[]:[[Le,0,Le+1,1]]),C.select([[0,Ae,1,Ae+1]]);for(const q of Zc)d[q].select(q===X?[[he%s,Math.floor(he/s),he%s+1,Math.floor(he/s)+1]]:[]);$.y=f+ys/2-(Ae+.5)/on*ys,Q.innerHTML=`<b>${lo(i.merged[X].at(he,Ae))}</b><span>made by row ${Ht(Ae+1)}</span>`,e.touch()};ae(),j();const se=X=>{const he=X==null?void 0:X.sheet.spec.id,Ae={...a};let Le=null;if(a.col=null,X&&he==="matrix"){a.row=X.row,a.col=X.col;const te=X.col*bn.fold,xe=E==null?void 0:E.at(X.col,X.row);Le=`<i>The matrix</i><span>row ${Ht(X.row+1)} of ${Ht(on)}: it makes number ${Ht(X.row+1)} of a token</span>
        <span>its weights for numbers ${Ht(te+1)} to ${Ht(te+bn.fold)} of the glued column (patch ${Math.floor(te/cl)+1} of ${Kc}): the largest</span>
        ${xe===void 0?"":`<b class="val">${Ag(xe)}</b>`}`}else if(X&&he==="matrix_in"){a.col=X.col;const te=X.col*bn.fold,xe=G[X.col*4]===0?"below ":G[X.col*4]===255?"above ":"";Le=`<i>Glued column of block ${a.block+1}, ${oo[a.cam]}</i>
        <span>numbers ${Ht(te+1)} to ${Ht(te+bn.fold)} of ${Ht(bn.inputs)} (patch ${Math.floor(te/cl)+1} of ${Kc}): the largest</span>
        <b class="val">${xe}${lo(T(X.col))}</b>`}else X&&he==="matrix_out"?(a.row=X.row,Le=`<i>Token ${a.block+1} of ${s*s}, ${oo[a.cam]}</i>
        <span>number ${Ht(X.row+1)} of ${Ht(on)}: row ${Ht(X.row+1)} of the matrix times the glued column, added up</span>
        <b class="val">${lo(i.merged[a.cam].at(a.block,X.row))}</b>`):X&&(he==="matrix_table"||he==="matrix_wrist")&&(a.cam=he==="matrix_table"?"table":"wrist",a.block=X.row*s+X.col,Le=`<i>${a.cam==="table"?"Table camera":"Wrist camera"}</i><span>block ${a.block+1} of ${s*s}</span>
        <span>its glued column lies above the matrix, its token stands right of it</span>`);const q=a.cam!==Ae.cam||a.block!==Ae.block;return q&&ae(),(q||a.row!==Ae.row||a.col!==Ae.col)&&j(),q&&i.changed(),Le};let Z=!1;return{ensure:()=>{if(Z)return;Z=!0;const X=le.sheets.connector_matrix;Xs(X,i.aniso).then(he=>{E=he,M.setTexture(he.texture,X),M.setScale(X.scale??1),e.touch(3)})},point:se}}const Hi=le.layers.vlm_stream.length,ca=le.shape.heads,dt=le.shape.chunk,nt=le.prefix.len,_n=64,Dn=8,Gi=le.lang.mask.filter(Boolean).length,eh=le.state.names,ir=i=>i.toLocaleString("en-US"),Cg=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−"),bs=i=>(i/255)**2,oi=i=>i>=.0995?`${Math.round(i*100)}%`:i>=95e-5?`${(i*100).toFixed(1)}%`:i>0?"under 0.1%":"0%",th=i=>`action ${i+1} of ${dt} (${(i*.1).toFixed(1)} s ahead)`;function Pg(i){const{view:e,geo:t,add:n,at:s}=i,a={layer:0,head:-1,look:"vlm",row:{vlm:nt-1,exp:0}},r=L=>t.stackZ+L*t.gap,o=(L,H)=>le.layers[L][H],l=new Map,c=L=>{let H=l.get(L.file);return H||l.set(L.file,H=Xs(L,i.aniso)),H},h=new Map,u=Lt(new Uint8Array([128,128,128,255]),1,1),f=Lt(new Uint8Array([0,0,0,255]),1,1),p=()=>`layer ${a.layer+1}`,g=()=>a.head<0?`average of ${ca} heads`:`head ${a.head+1}`,v=' <i class="tag trained">trained</i>',m={update:61,keys:106,values:135,attn:174},d=le.shape.vlm_width,A=le.shape.expert_width,E=[],M=(L,H,F,J,ie,re,fe,ee={})=>{const ne=o(L,0),Ee=n({id:L,title:L,note:"",kind:"signed",cols:ne.cols,rows:ne.rows,width:J,height:ie,pos:[H,F,r(0)],texture:u,bits:8,min:-1,max:1,revealAt:s(re),label:fe,overview:!1,valueAt:(Re,Se)=>{var st;const We=h.get(L);if(!We)return null;const He=(st=We.info.parts)==null?void 0:st.find(N=>Re<N.end);return We.values.at(Re,Se)*((He==null?void 0:He.scale)??1)},isClipped:(Re,Se)=>{const We=h.get(L),He=We?We.values.rgba[(Se*We.info.cols+Re)*4]:128;return He===0||He===255},...ee});return E.push({id:L,x:H,y:F,sheet:Ee}),Ee};M("vlm_stream",t.seqX,0,t.seqW,t.sheetH,"vlm-stack",()=>`<b>The sequence, entering ${p()}</b><span>${nt} tokens x ${d} numbers</span>`,{overview:!0}),M("vlm_update",t.seqX,m.update,t.seqW,t.sheetH,"vlm-stack",()=>`<b>What ${p()} adds</b><span>${nt} tokens x ${d} numbers</span>`,{sweep:.45}),M("vlm_k",t.seqX,m.keys,t.seqW,16,"vlm-keys",()=>`<b>Keys, ${p()}</b><span>${nt} tokens x ${o("vlm_k",0).rows} numbers</span>`),M("vlm_v",t.seqX,m.values,t.seqW,16,"vlm-keys",()=>`<b>Values, ${p()}</b><span>${nt} tokens x ${o("vlm_v",0).rows} numbers</span>`);const G=dt*.8,D=A*.05;M("exp_stream",t.expX,0,G,D,"expert-input",()=>`<b>Action tokens, entering ${p()}</b>${v}<span>${dt} tokens x ${A} numbers</span>`,{overview:!0,trained:!0}),M("exp_update",t.expX,D+13,G,D,"expert-stack",()=>`<b>What ${p()} adds</b><span>${dt} tokens x ${A} numbers</span>`,{sweep:.45,trained:!0});const T=n({id:"vlm_attn",title:"",note:"",kind:"unit",cols:nt,rows:nt,width:t.sheetH,height:t.sheetH,pos:[t.maskX,0,r(0)],texture:f,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,label:()=>`<b>Who looks at whom, ${p()}</b><span>average of ${ca} heads: a row looks at a column</span><span>marked row: ${i.place(a.row.vlm)}</span>`}),P=new Uint8Array(nt*dt*4).fill(255),S=new Uint8Array(dt*dt*4).fill(255),y=Lt(P,nt,dt),C=Lt(S,dt,dt),V=dt*.6,$=t.seqX+t.seqW/2+6+G/2,Q=n({id:"exp_attn",title:"",note:"",kind:"unit",cols:nt,rows:dt,width:t.seqW,height:V,pos:[t.seqX,m.attn,r(0)],texture:y,bits:8,min:0,max:1,revealAt:s("expert-look"),overview:!1,trained:!0,label:()=>`<b>Where the action tokens look, ${p()}</b>${v}<span>${g()}: ${dt} actions (rows) x ${nt} sequence tokens</span><span>marked row: action ${a.row.exp+1}</span>`}),ae=n({id:"exp_own",title:"",note:"",kind:"unit",cols:dt,rows:dt,width:G,height:V,pos:[$,m.attn,r(0)],texture:C,bits:8,min:0,max:1,revealAt:s("expert-look"),overview:!1,trained:!0,when:()=>i.focused("exp_own")&&Ve(),label:()=>`<b>At earlier actions</b><span>${dt} x ${dt}</span>`}),j=48,se={table:new Uint8Array(_n*4).fill(255),wrist:new Uint8Array(_n*4).fill(255)},Z={table:Lt(se.table,Dn,Dn),wrist:Lt(se.wrist,Dn,Dn)},pe=new Uint8Array(Gi*4).fill(255),X=new Uint8Array(4).fill(255),he=Lt(pe,Gi,1),Ae=Lt(X,1,1),Le={table:0,wrist:0,words:0,state:0,own:0},q=new Uint8Array(nt+dt),te=()=>a.look==="exp"?`action ${a.row.exp+1}`:i.place(a.row.vlm),xe={};for(const L of["table","wrist"])xe[L]=n({id:`look_${L}`,title:"",note:"",kind:"image",cols:Dn,rows:Dn,width:j,height:j,pos:[0,0,r(0)],texture:i.pictures[L],revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused(`look_${L}`),label:()=>`<b>${L==="table"?"Table":"Wrist"} picture</b><span>${oi(Le[L])}</span>`}),xe[L].setHeat(Z[L]),xe[L].gap=xe[L].gapTo=.08;xe.words=n({id:"look_words",title:"",note:"",kind:"unit",cols:Gi,rows:1,width:Gi*3,height:3.6,pos:[0,0,r(0)],texture:he,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused("look_words"),label:()=>`<b>Words</b><span>${oi(Le.words)}</span>`}),xe.state=n({id:"look_state",title:"",note:"",kind:"unit",cols:1,rows:1,width:3.6,height:3.6,pos:[0,0,r(0)],texture:Ae,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused("look_state"),label:()=>`<b>Arm readings</b><span>${oi(Le.state)}${a.look==="exp"&&Ve()?`, earlier actions ${oi(Le.own)}`:""}</span>`});const ye=L=>{const H=r(a.layer),[F,J]=a.look==="exp"?[t.seqX-j/2-3,m.attn-V/2-17-j/2]:[t.maskX+t.sheetH/2+8+j/2,0],ie=J-j/2-10;xe.table.moveTo(F,J,H,L),xe.wrist.moveTo(F+j+6,J,H,L),xe.words.moveTo(F-j/2+Gi*3/2,ie,H,L),xe.state.moveTo(F+j/2+6+1.8,ie,H,L)},Ne=(L,H,F,J,ie)=>{const re=le.sheets[L],fe=n({id:L,title:L,note:"",kind:"signed",cols:re.cols,rows:re.rows,width:G,height:F,pos:[t.expX,0,H],texture:u,bits:8,min:-1,max:1,parts:[{end:re.cols,scale:re.scale??1}],revealAt:s(J),label:ie,overview:!1,trained:!0,valueAt:(ee,ne)=>{var Re;const Ee=h.get(L);return Ee?Ee.values.at(ee,ne)*(((Re=Ee.info.parts)==null?void 0:Re[0].scale)??1):null}});c(re).then(ee=>{h.set(L,{values:ee,info:re}),fe.setTexture(ee.texture,re),e.touch(3)})},ze=le.sheets.exp_x.rows*.6;Ne("exp_x",r(0)-16,ze,"expert-input",()=>`<b>The noisy plan</b><span>${dt} actions x ${le.sheets.exp_x.rows} numbers, noise level ${le.stats.times[0].toFixed(1)}</span>`),Ne("exp_last",r(Hi),D,"expert-output",()=>`<b>Action tokens after layer ${Hi}</b><span>${dt} tokens x ${A} numbers</span>`),Ne("exp_v",r(Hi)+16,ze,"expert-output",()=>`<b>The direction</b>${v}<span>${dt} actions x ${le.sheets.exp_v.rows} numbers</span>`);const Ve=()=>o("exp_attn",a.layer).own===!0,it=()=>{const L=a.look,H=a.row[L],F=h.get("vlm_attn");if(L==="vlm"&&!F)return;const J=ne=>L==="vlm"?F.values.rgba[(H*nt+ne)*4]:ne<nt?P[(H*nt+ne)*4]:Ve()?S[(H*dt+ne-nt)*4]:0;let ie=0;for(let ne=0;ne<nt+dt;ne++)q[ne]=ne<nt||L==="exp"?J(ne):0,ne<nt&&(ie=Math.max(ie,q[ne]));const re=(ne,Ee)=>{let Re=0;for(let Se=ne;Se<Ee;Se++)Re+=bs(q[Se]);return Re},fe=Math.max(ie,Math.sqrt(.05)*255),ee=ne=>Math.min(255,Math.round(q[ne]/fe*255));for(let ne=0;ne<_n;ne++)se.table[ne*4]=ee(ne),se.wrist[ne*4]=ee(_n+ne);for(let ne=0;ne<Gi;ne++)pe[ne*4]=ee(2*_n+ne);X[0]=ee(nt-1);for(const ne of[Z.table,Z.wrist,he,Ae])ne.needsUpdate=!0;Object.assign(Le,{table:re(0,_n),wrist:re(_n,2*_n),words:re(2*_n,nt-1),state:re(nt-1,nt),own:L==="exp"?re(nt,nt+dt):0}),i.changed(),e.touch(3)},Je=()=>{const L=h.get("exp_attn");if(!L)return;const{rgba:H}=L.values,F=L.info.cols,J=(a.head+1)*dt;for(let ie=0;ie<dt;ie++){const re=(J+ie)*F;for(let fe=0;fe<nt;fe++)P[(ie*nt+fe)*4]=H[(re+fe)*4];for(let fe=0;fe<dt;fe++)S[(ie*dt+fe)*4]=F>nt?H[(re+nt+fe)*4]:0}y.needsUpdate=!0,C.needsUpdate=!0,a.look==="exp"&&it(),e.touch(3)};let lt=-1;const O=(L,H)=>{const F=Math.min(Hi-1,Math.max(0,Math.round(L)));if(F===lt)return;lt=a.layer=F;const J=r(F);for(const{id:fe,x:ee,y:ne,sheet:Ee}of E){Ee.moveTo(ee,ne,J,H);const Re=o(fe,F);c(Re).then(Se=>{a.layer===F&&(h.set(fe,{values:Se,info:Re}),Ee.setTexture(Se.texture,Re),fe.endsWith("_update")&&Ee.shown&&!H&&(Ee.reveal=0),e.touch(3))})}T.moveTo(t.maskX,0,J,H),Q.moveTo(t.seqX,m.attn,J,H),ae.moveTo($,m.attn,J,H),ye(H);const ie=o("vlm_attn",F);c(ie).then(fe=>{a.layer===F&&(h.set("vlm_attn",{values:fe,info:ie}),T.setTexture(fe.texture,{...ie,min:0,max:1}),a.look==="vlm"&&it(),e.touch(3))});const re=o("exp_attn",F);c(re).then(fe=>{a.layer===F&&(h.set("exp_attn",{values:fe,info:re}),Je())});for(const fe of[1,-1])if(F+fe>=0&&F+fe<Hi)for(const ee of Object.keys(le.layers))c(o(ee,F+fe));i.changed(),e.touch(3)},ue=L=>{a.head=Math.min(ca-1,Math.max(-1,Math.round(L))),Je(),i.changed()},me=(L,H)=>{a.look=L,H!==void 0&&(a.row[L]=H),ye(!1),it()},de=new Set([...E.map(L=>L.id),"vlm_attn","exp_attn","exp_own","look_table","look_wrist","look_words","look_state","exp_x","exp_v","exp_last"]),ge=(L,H,F,J)=>{var fe,ee,ne,Ee;const ie=(ee=(fe=L.spec).valueAt)==null?void 0:ee.call(fe,H,F);if(ie==null)return`<span>${J}</span>`;const re=(Ee=(ne=L.spec).isClipped)!=null&&Ee.call(ne,H,F)?ie<0?"below ":"above ":"";return`<span>${J}</span><b class="val">${re}${Cg(ie)}</b>`},ke={vlm_stream:()=>`The sequence, entering ${p()}`,vlm_update:()=>`What ${p()} adds`,vlm_k:()=>`Keys, ${p()}`,vlm_v:()=>`Values, ${p()}`,exp_stream:()=>`Action tokens, entering ${p()}`,exp_update:()=>`What ${p()} adds to the action tokens`,exp_x:()=>"The noisy plan",exp_v:()=>"The direction",exp_last:()=>`Action tokens after layer ${Hi}`},Me=L=>{const H=L.sheet.spec.id;if(!de.has(H))return null;const{col:F,row:J}=L;if(H.startsWith("vlm_")&&H!=="vlm_attn")return{html:`<i>${ke[H]()}</i><span>place ${F+1} of ${nt}: ${i.place(F)}</span>${ge(L.sheet,F,J,`number ${ir(J+1)} of ${ir(L.sheet.spec.rows)}`)}`,token:F,action:null};if(H==="vlm_attn"){(a.row.vlm!==J||a.look!=="vlm")&&(a.row.vlm=J,a.look==="vlm"&&it());const fe=h.get("vlm_attn"),ee=fe?bs(fe.values.rgba[(J*nt+F)*4]):0;return{html:`<i>${p()}, average of ${ca} heads</i><span>${i.place(J)} (place ${J+1})</span><span>looking at ${i.place(F)} (place ${F+1})</span><b class="val">${oi(ee)}</b>`,token:F,action:null}}if(H==="exp_attn"||H==="exp_own"){a.row.exp!==J&&(a.row.exp=J,a.look==="exp"&&it());const fe=H==="exp_own",ee=bs(fe?S[(J*dt+F)*4]:P[(J*nt+F)*4]),ne=fe?F>J?`action ${F+1}, which comes later: not allowed`:`action ${F+1}`:`${i.place(F)} (place ${F+1})`;return{html:`<i>${p()}, ${g()}</i><span>${th(J)}</span><span>looking at ${ne}</span><b class="val">${oi(ee)}</b>`,token:fe?null:F,action:J}}if(H==="look_table"||H==="look_wrist"){const fe=H==="look_table"?"table":"wrist",ee=J*Dn+F,ne=(fe==="table"?0:_n)+ee;return{html:`<i>Where ${te()} looks</i><span>${fe} picture, block row ${J+1}, column ${F+1}</span><b class="val">${oi(bs(q[ne]))}</b>`,token:ne,action:null}}if(H==="look_words")return{html:`<i>Where ${te()} looks</i><span>${i.place(2*_n+F)}</span><b class="val">${oi(bs(q[2*_n+F]))}</b>`,token:2*_n+F,action:null};if(H==="look_state")return{html:`<i>Where ${te()} looks</i><span>the arm's readings</span><b class="val">${oi(bs(q[nt-1]))}</b>`,token:nt-1,action:null};const ie=L.sheet.spec.rows,re=ie===le.shape.max_dim?`number ${J+1} of ${ie}: ${J<eh.length?eh[J]:"not used by this arm"}`:`number ${ir(J+1)} of ${ir(ie)}`;return{html:`<i>${ke[H]()}</i><span>${th(F)}</span>${ge(L.sheet,F,J,re)}`,token:null,action:F}},w=L=>{var ie;const H=(re,fe)=>fe===null?[]:[[fe,0,fe+1,re.spec.rows]];for(const{id:re,sheet:fe}of E)fe.select(H(fe,re.startsWith("vlm_")?L.token:L.action));for(const re of["exp_x","exp_v","exp_last"]){const fe=z(re);fe.select(H(fe,L.action))}const F=a.look==="vlm"?[[0,a.row.vlm,nt,a.row.vlm+1]]:[];T.select([...F,...H(T,L.token)]);const J=[0,a.row.exp,nt,a.row.exp+1];Q.select([J,...H(Q,L.token)]),ae.select([[0,a.row.exp,dt,a.row.exp+1]]);for(const re of["table","wrist"]){const fe=((ie=L.group)==null?void 0:ie.cam)===re?L.group.m:null;xe[re].select(fe===null?[]:[[fe%Dn,Math.floor(fe/Dn),fe%Dn+1,Math.floor(fe/Dn)+1]])}xe.words.select(L.word===null||L.word>=Gi?[]:[[L.word,0,L.word+1,1]])},_=new Map,z=L=>_.get(L);for(const L of e.sheets)_.set(L.spec.id,L);return ye(!0),O(0,!0),{state:a,layers:Hi,heads:ca,owns:L=>de.has(L),setLayer:O,setHead:ue,setLook:me,looksAtActions:Ve,hover:Me,select:w}}const ha=["table","wrist"],co=le.vision_layers.table.length,In=le.shape.image/le.shape.patch,ho=In*In,Lg=8,Dg=i=>i.toLocaleString("en-US");function Ug(i){const{view:e,add:t,at:n}=i,s={layer:0},a=(T,P)=>le.vision_layers[T][P],r=Lt(new Uint8Array([128,128,128,255]),1,1),o=()=>`layer ${s.layer+1}`,l=T=>le.vision.typical_size[T][s.layer],c={},h={};for(const T of ha){const P=a(T,0);h[T]=t({id:`${T}_layer`,title:"",note:"",kind:"signed",cols:P.cols,rows:P.rows,width:i.width,height:i.height,pos:[i.lane[T],0,i.slotZ(0)],texture:r,bits:8,min:-1,max:1,revealAt:n("encoder"),label:()=>`<b>After ${o()}</b><span>${Dg(P.cols)} patches x ${P.rows} numbers</span>`,valueAt:(S,y)=>{var C;return((C=c[T])==null?void 0:C.values.at(S,y))??null},isClipped:(S,y)=>{const C=c[T],V=C?C.values.rgba[(y*C.info.cols+S)*4]:128;return V===0||V===255}})}const u={},f={table:new Uint8Array(ho*4),wrist:new Uint8Array(ho*4)},p={table:Lt(f.table,In,In),wrist:Lt(f.wrist,In,In)},g=(T,P)=>{var S;return((S=u[T])==null?void 0:S.at(P%In,s.layer*In+Math.floor(P/In)))??null};for(const T of ha)t({id:`${T}_size`,title:"",note:"",kind:"image",cols:In,rows:In,width:i.mapSide,height:i.mapSide,pos:i.mapPos[T],texture:i.pictures[T],revealAt:n("encoder-sizes"),overview:!1,when:()=>i.focused(`${T}_size`),label:()=>`<b>Largest columns after ${o()}</b><span>typical size ${l(T).toFixed(1)}, largest ${le.vision.largest_size[T][s.layer].toFixed(0)}</span>`}).setHeat(p[T],"mark");const v=T=>{const P=l(T);for(let S=0;S<ho;S++){const y=(g(T,S)??P)/P;f[T][S*4]=Math.round(Math.min(1,Math.max(0,(y-1)/(Lg-1)))*255)}p[T].needsUpdate=!0},m=new Map,d=T=>{let P=m.get(T.file);return P||m.set(T.file,P=Xs(T,i.aniso)),P};let A=!1,E=-1;const M=(T,P)=>{E=T;const S=new Set;for(const y of ha){h[y].moveTo(i.lane[y],0,i.slotZ(T),P);const C=a(y,T);d(C).then(V=>{if(s.layer!==T)return;const $=c[y];c[y]={values:V,info:C},h[y].setTexture(V.texture,C),h[y].setScale(C.scale??1),$&&$.info.file!==C.file&&!m.has($.info.file)&&$.values.texture.dispose(),i.changed(),e.touch(3)}),u[y]&&v(y);for(const V of[0,1,-1])T+V<0||T+V>=co||(S.add(a(y,T+V).file),d(a(y,T+V)))}for(const[y,C]of m)S.has(y)||(m.delete(y),C.then(V=>{ha.some($=>{var Q;return((Q=c[$])==null?void 0:Q.info.file)===y})||V.texture.dispose()}));i.changed(),e.touch(3)};return{state:s,layers:co,ensure:()=>{if(!A){A=!0,M(s.layer,!0);for(const T of ha)Xs(le.sheets[`${T}_sizes`],1).then(P=>{u[T]=P,v(T),i.changed(),e.touch(3)})}},setLayer:(T,P)=>{const S=Math.min(co-1,Math.max(0,Math.round(T)));s.layer=S,A&&S!==E&&M(S,P)},sizeOf:g,typical:l}}const Vi=["table","wrist"],Ei={table:"Table camera",wrist:"Wrist camera"},Ft={table:-72,wrist:0,lang:64,state:112},uo=84,Pe={raw:0,pad:52,embed:104,layers:113,encoded:204,sim:250,groups:296,glued:322,merged:342,seq:400,stack:440},da=10,Nn=.8,ft=48,Mt=le.shape.image/le.shape.patch,Ms=Mt*Mt,Gt=4,nn=Mt/Gt,Ze=nn*nn,Es=Gt*Gt,dl=4.2,nh=.45,$i=16,fo=(i,e)=>(Math.floor(i/nn)*Gt+Math.floor(e/Gt))*Mt+i%nn*Gt+e%Gt,ih=i=>Math.floor(Math.floor(i/Mt)/Gt)*nn+Math.floor(i%Mt/Gt),sh={table:17*Mt+17,wrist:29*Mt+22},Ig=i=>-ft/2+(Es-i)*(dl+nh)-nh-dl/2,Un=le.lang.mask.length,Tt=le.prefix.len,Ps=Tt*Nn,qn=Ft.wrist-Ze*Nn*1.5,po=qn+Ps/2,mo=qn+Ps+12+ft/2,ua=160,sr=128,Ss=.8,ah=-ft/2-3.5,rh=32,ar=(Ft.table+Ft.wrist)/2,_o={table:22,wrist:-22},go=["before","mid","after"],oh=(Pe.encoded-Pe.layers-9)/(le.shape.vision_layers-1),Xn=i=>i.toLocaleString("en-US"),ws=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−");async function Ng(i,e){var N,we;const t=i.renderer.capabilities.getMaxAnisotropy(),n=le.sheets,s=["table_embed","table_encoded","table_merged","wrist_embed","wrist_encoded","wrist_merged","lang_embed","state_token","sequence","mask"],a=["table_raw","table_512","wrist_raw","wrist_512"];let r=0;const o=s.length+a.length,l=x=>(e(++r,o),x),[c,h]=await Promise.all([Promise.all(s.map(x=>Xs(n[x],t).then(l))),Promise.all(a.map(x=>ug(`data/${x}.jpg`,t).then(l)))]),u=Object.fromEntries(s.map((x,R)=>[x,c[R]])),f=Object.fromEntries(a.map((x,R)=>[x,h[R]])),p=x=>yg(x),g=x=>Pt[x].focus==="all",v=new Map,m=x=>{const R=new Z_(x);return v.set(x.id,R),i.add(R),R},d=(x,R)=>{const I=u[x];return m({id:x,kind:"signed",cols:I.info.cols,rows:I.info.rows,texture:I.texture,bits:I.info.bits,min:I.info.min,max:I.info.max,parts:[{end:I.info.cols,scale:I.info.scale??1}],valueAt:(W,oe)=>I.at(W,oe),isClipped:(W,oe)=>I.info.bits===8&&(I.rgba[(oe*I.info.cols+W)*4]===0||I.rgba[(oe*I.info.cols+W)*4]===255),...R})},A=(x,R,I)=>{let oe=128;for(let _e=I*$i;_e<(I+1)*$i;_e++){const Ce=x.rgba[(_e*Ms+R)*4];Math.abs(Ce-127.5)>Math.abs(oe-127.5)&&(oe=Ce)}return oe},E={};let M=()=>0;for(const x of Vi){const R=Ft[x],I=Ei[x];m({id:`${x}_raw`,title:I,note:"640 x 480 pixels",kind:"image",cols:640,rows:480,width:64,height:ft,pos:[R,0,Pe.raw],texture:f[`${x}_raw`],revealAt:p("cameras")}),m({id:`${x}_512`,title:`${I}, fitted`,note:`512 x 512 pixels, ${Mt} x ${Mt} patches`,kind:"image",cols:Mt,rows:Mt,width:51.2,height:51.2,pos:[R,0,Pe.pad],texture:f[`${x}_512`],revealAt:p("resize")}),d(`${x}_embed`,{title:"Patch columns",note:`${Xn(Ms)} patches x ${le.shape.vision_width} numbers`,width:64,height:ft,pos:[R,0,Pe.embed],revealAt:p("embed")}),d(`${x}_encoded`,{title:"After the vision encoder",note:`${Xn(Ms)} patches x ${le.shape.vision_width} numbers`,width:64,height:ft,pos:[R,0,Pe.encoded],revealAt:p("encoder")});const W=rh,oe=_o[x],_e=ar;m({id:`${x}_pick`,title:I,note:"",kind:"image",cols:Mt,rows:Mt,width:W,height:W,pos:[_e-W-5,oe,Pe.sim],texture:f[`${x}_512`],revealAt:p("encoder-sizes")});for(const[Oe,Ge]of go.entries()){const It=new Uint8Array(Ms*4).fill(255),ut=Lt(It,Mt,Mt);E[`${x}_${Ge}`]={rgba:It,texture:ut},m({id:`${x}_${Ge}`,title:Ge==="before"?"Before":"After",note:"the encoder",kind:"unit",cols:Mt,rows:Mt,width:W,height:W,pos:[_e+Oe*(W+5),oe,Pe.sim],texture:ut,bits:8,min:0,max:1,revealAt:p("similar"),label:Ge==="mid"?()=>`<b>After</b><span>layer ${M()+1}</span>`:void 0})}m({id:`${x}_groups`,title:`${I}, in blocks`,note:`${nn} x ${nn} blocks of 4 x 4 patches`,kind:"image",cols:nn,rows:nn,width:51.2,height:51.2,pos:[R,0,Pe.groups],texture:f[`${x}_512`],revealAt:p("blocks"),inner:Gt});const Ce=u[`${x}_encoded`],$e=Ce.info.rows/$i;for(let Oe=0;Oe<Es;Oe++){const Ge=new Uint8Array(Ze*$e*4).fill(255);for(let ut=0;ut<Ze;ut++){const At=fo(ut,Oe);for(let Vt=0;Vt<$e;Vt++)Ge[(Vt*Ze+ut)*4]=A(Ce,At,Vt)}const It=(Ce.info.max??1)-(Ce.info.min??0);m({id:`${x}_stack${Oe}`,title:"Glued columns",note:`${Ze} columns x ${Xn(Es*Ce.info.rows)} numbers`,kind:"signed",cols:Ze,rows:$e,width:Ze*Nn,height:dl,pos:[R,Ig(Oe),Pe.glued],texture:Lt(Ge,Ze,$e,t),bits:8,min:Ce.info.min,max:Ce.info.max,parts:[{end:Ze,scale:Ce.info.scale??1}],revealAt:p("stack"),valueAt:(ut,At)=>(Ce.info.min??0)+Ge[(At*Ze+ut)*4]/255*It,isClipped:(ut,At)=>Ge[(At*Ze+ut)*4]===0||Ge[(At*Ze+ut)*4]===255})}d(`${x}_merged`,{title:"Merged tokens",note:`${Ze} tokens x ${le.shape.vlm_width} numbers`,width:Ze*Nn,height:ft,pos:[R,0,Pe.merged],revealAt:p("merge")})}const G=le.lang.mask.filter(Boolean).length,D=new Uint8Array(Un*4);le.lang.mask.forEach((x,R)=>D.set([x?255:0,0,0,255],R*4)),m({id:"lang_in",title:"Instruction",note:`${Un} slots, ${G} used`,kind:"mask",cols:Un,rows:1,width:Un,height:4,pos:[Ft.lang,0,Pe.raw],texture:Lt(D,Un,1),bits:8,min:0,max:1,revealAt:p("instruction")});const T=fg(le.state.padded,-2,2);m({id:"state_in",title:"Arm readings",note:`${le.shape.max_dim} numbers, 7 used`,kind:"signed",cols:le.shape.max_dim,rows:1,width:le.shape.max_dim,height:4,pos:[Ft.state,0,Pe.raw],texture:T.texture,bits:16,min:T.min,max:T.max,parts:[{end:le.shape.max_dim,scale:1.5}],revealAt:p("readings"),valueAt:x=>le.state.padded[x]}),d("lang_embed",{title:"Word columns",note:`${Un} slots x ${le.shape.vlm_width} numbers`,width:Un*Nn,height:ft,pos:[Ft.lang,0,Pe.merged],revealAt:p("place-words")}),d("state_token",{title:"Readings token",note:`1 token x ${le.shape.vlm_width} numbers`,width:Nn,height:ft,pos:[uo,0,Pe.merged],revealAt:p("place-state"),trained:!0}),d("sequence",{title:"The sequence",note:`${Ze} + ${Ze} + ${Un} + 1 = ${Tt} tokens, each ${le.shape.vlm_width} numbers`,width:Ps,height:ft,pos:[po,0,Pe.seq],revealAt:p("place-images"),parts:n.sequence.parts.map(x=>({end:x.end,scale:x.scale})),dividers:"cols"});const P=2*Ze,S=[{name:"table picture",start:0,end:Ze},{name:"wrist picture",start:Ze,end:P},{name:"words",start:P,end:P+G},{name:"padding",start:P+G,end:Tt-1},{name:"arm readings",start:Tt-1,end:Tt}];m({id:"mask",title:"Who may look at whom",note:`${Tt} x ${Tt}: a row looks at a column`,kind:"mask",cols:Tt,rows:Tt,width:ft,height:ft,pos:[mo,0,Pe.seq],texture:u.mask.texture,bits:8,min:0,max:1,revealAt:p("who-sees-whom"),parts:S.slice(0,4).map(x=>({end:x.end,scale:1})),dividers:"both",label:()=>`<b>Who may look at whom</b><span>${Tt} x ${Tt}: a row looks at a column</span>
      <span class="key"><i class="chip yes"></i>may look<i class="chip no"></i>may not</span>`});for(const x of v.values())x.spec.id.endsWith("_groups")&&(x.gap=x.gapTo=.14);const y=[],C=(x,R,I,W,oe,_e,Ce,$e)=>{const Oe=[];for(let ut=0;ut<Ce;ut++){const At=oe+ut*_e;Oe.push(i.addLine([[-I/2,-W/2],[I/2,-W/2],[I/2,W/2],[-I/2,W/2]].map(([Vt,yt])=>new U(R+Vt,yt,At)),!0))}const Ge=new En(new U(R-I/2,-W/2,oe),new U(R+I/2,W/2,oe+(Ce-1)*_e)),It=y.find(ut=>ut.id===x);It?(It.lines.push(...Oe),It.box.union(Ge)):y.push({id:x,lines:Oe,box:Ge,revealAt:$e})};for(const x of Vi)C("ghost_vision",Ft[x],64,ft,Pe.layers,oh,le.shape.vision_layers,p("encoder"));C("ghost_vlm",po,Ps,ft,Pe.stack,da,le.shape.vlm_layers,p("vlm-stack")),C("ghost_expert",ua,le.shape.chunk*Nn,le.shape.expert_width*.05,Pe.stack,da,le.shape.expert_layers,p("expert-input"));const V=[],$=(x,R,I)=>V.push({line:i.addLine([new U(x[0],ah,x[1]),new U(R[0],ah,R[1])]),revealAt:I});for(const[x,R]of Vi.entries()){const I=Ft[R],W=[[Pe.pad,"resize"],[Pe.embed,"embed"],[Pe.encoded,"encoder"],[Pe.sim,"similar"],[Pe.groups,"blocks"],[Pe.glued,"stack"],[Pe.merged,"merge"]];let oe=Pe.raw;for(const[_e,Ce]of W)$([I,oe],[I,_e],p(Ce)),oe=_e;$([I,Pe.merged],[qn+(x+.5)*Ze*Nn,Pe.seq],p("place-images"))}$([Ft.lang,Pe.raw],[Ft.lang,Pe.merged],p("place-words")),$([Ft.lang,Pe.merged],[qn+(2*Ze+Un/2)*Nn,Pe.seq],p("place-words")),$([Ft.state,Pe.raw],[uo,Pe.merged],p("place-state")),$([uo,Pe.merged],[qn+(Tt-.5)*Nn,Pe.seq],p("place-state"));const Q=x=>le.lang.mask[x]?`"${le.lang.text[x]===`
`?"line break":le.lang.text[x].trim()}"`:"padding",ae=x=>x<Ze?`table camera token ${x+1}`:x<2*Ze?`wrist camera token ${x-Ze+1}`:x<Tt-1?le.lang.mask[x-2*Ze]?`the word ${Q(x-2*Ze)}`:"padding":"the arm's readings";let j=0;const se=x=>{const R=Pt[j].focus;return R==="all"||R.includes(x)};let Z=()=>{};const pe=Pg({view:i,aniso:t,add:m,at:p,focused:se,geo:{seqX:po,seqW:Ps,maskX:mo,expX:ua,sheetH:ft,stackZ:Pe.stack,gap:da},pictures:{table:f.table_512,wrist:f.wrist_512},place:x=>ae(x),changed:()=>Z()}),X=Ug({view:i,aniso:t,add:m,at:p,focused:se,lane:Ft,width:64,height:ft,slotZ:x=>Pe.layers+x*oh,pictures:{table:f.table_512,wrist:f.wrist_512},mapPos:{table:[ar,_o.table,Pe.sim],wrist:[ar,_o.wrist,Pe.sim]},mapSide:rh,changed:()=>Z()});M=()=>X.state.layer;const he=x=>{if(g(j))return null;const I=(Pt[j].labels??Pt[j].focus).indexOf(x);return I<0?null:I},Ae=le.shape.vision_width/$i,Le=Rg({view:i,aniso:t,add:m,at:p,focused:se,rank:he,center:[ar,0,(Pe.glued+Pe.merged)/2],pictures:{table:f.table_512,wrist:f.wrist_512},blocksPerSide:nn,merged:{table:u.table_merged,wrist:u.wrist_merged},encoded:{table:u.table_encoded.info,wrist:u.wrist_encoded.info},gluedByte:(x,R,I)=>A(u[`${x}_encoded`],fo(R,Math.floor(I/Ae)),I%Ae),start:{cam:"table",block:ih(sh.table)},changed:()=>Z()}),q=Pe.stack+le.shape.expert_layers*da+16,te=Tg({view:i,aniso:t,add:m,at:p,focused:se,rank:he,changed:()=>Z(),expX:ua,endZ:q}),xe=new Map,ye=[];for(const x of v.values()){const R=new U;xe.set(x,R);const I=x.spec.trained?' <i class="tag trained">trained</i>':"",W=x.spec.note?`<span>${x.spec.note}</span>`:"",oe=i.addLabel(((we=(N=x.spec).label)==null?void 0:we.call(N))??`<b>${x.spec.title}</b>${I}${W}`,R,()=>x.shown&&x.reveal>0?he(x.spec.id):null);x.spec.label&&ye.push([x,oe])}const Ne=(x,R,I,W,oe=ft/2+2)=>i.addLabel(R,new U(I,oe,W),()=>he(x),"ghost");Ne("ghost_vision",`<b>Vision encoder</b><span>${le.shape.vision_layers} layers, frozen: one outline each</span>`,Ft.wrist-32,(Pe.layers+Pe.encoded)/2,-ft/2-9);const ze=Pe.stack+(le.shape.vlm_layers-1)*da;Ne("ghost_vlm",`<b>Vision-language model</b><span>${le.shape.vlm_layers} layers, frozen</span>`,qn,ze,-ft/2-3),Ne("ghost_expert",`<b>Action expert</b> <i class="tag trained">trained</i><span>${le.shape.expert_layers} layers</span>`,ua-20,ze,-22);const Ve=v.get("mask"),it=x=>()=>{const R=Ve.shown&&Ve.reveal>0?he("mask"):null;return R===null?null:R+.01*(x+1)},Je=ft/Tt,lt=mo-ft/2;for(const[x,R]of S.entries()){const I=(R.start+R.end)/2*Je,W=`<span>${R.end-R.start}</span>`;i.addLabel(`${R.name}${W}`,new U(lt+ft+1,ft/2-I,Pe.seq),it(x),"axis side"),i.addLabel(R.name,new U(lt+I,-ft/2-.8,Pe.seq),it(S.length+x),"axis under")}const O=v.get("sequence"),ue=x=>`<i class="more">${x}</i>`,me=[{html:`table${ue(" camera")}<span>${Ze}</span>`,start:0,end:Ze,from:p("place-images")},{html:`wrist${ue(" camera")}<span>${Ze}</span>`,start:Ze,end:P,from:p("place-images")},{html:`instruction<span>${Un}${ue(` (${G} words)`)}</span>`,start:P,end:Tt-1,from:p("place-words")},{html:`${ue("arm ")}readings<span>1</span>`,start:Tt-1,end:Tt,from:p("place-state")}];for(const[x,R]of me.entries()){const I=x===me.length-1,W=I?new U(qn+Ps+.6,-ft/2+8,Pe.seq):new U(qn+(R.start+R.end)/2*Nn,-ft/2-.8,Pe.seq);i.addLabel(R.html,W,()=>{const oe=O.shown&&O.reveal>0&&j>=R.from?he("sequence_parts"):null;return oe===null?null:oe+.02*(x+1)},I?"axis side":"axis under flat")}const de=(x,R,I,W=ft/2+3)=>i.addLabel(x,new U(R,W,I),()=>g(j)?0:null,"station");de("<b>1</b> The input",Ft.table-32,Pe.raw),de("<b>2</b> Images into patches",Ft.table-32,Pe.embed,-ft/2-4),de("<b>3</b> The vision encoder",Ft.table-32,Pe.encoded),de("<b>4</b> Patches into tokens",Ft.table-32,Pe.glued,-ft/2-4),de("<b>5</b> One sequence",qn,Pe.seq),de("<b>6</b> The vision-language model",qn,Pe.stack+75),de("<b>7</b> The action expert",ua-20,Pe.stack+75,21),de("<b>8</b> From noise to a plan <b>9</b> On the arm",-60,q+64,28),de("<b>10</b> How it was trained",-46,q+148,28),i.onTick=x=>{te.tick(x)&&i.touch();for(const[R,I]of xe){const W=1/(1-R.gap),oe=R.group.position;I.set(oe.x-R.spec.width/2*W,oe.y+R.spec.height/2*W+1.2,oe.z)}};const ge={...sh},ke=(x,R)=>R==="mid"?le.similarity[x].layers[X.state.layer]:le.similarity[x][R],Me=new Map,w=x=>{let R=Me.get(x.file);return R||Me.set(x.file,R=Tl.load(x)),R},_=(x,R=go)=>{for(const I of R){const W=ke(x,I);w(W).then(oe=>{if(ke(x,I).file!==W.file)return;const _e=oe.to(ge[x]),{rgba:Ce,texture:$e}=E[`${x}_${I}`];for(let Oe=0;Oe<Ms;Oe++)Ce[Oe*4]=Math.round(Math.min(1,Math.max(0,_e[Oe]))*255);$e.needsUpdate=!0,i.touch()})}};let z=!1,L=-1;const H=()=>{const x=X.state.layer;if(!z||x===L||!v.get("table_mid").shown)return;L=x;const R=new Set;for(const I of Vi){R.add(le.similarity[I].before.file).add(le.similarity[I].after.file);for(const W of[0,1,-1]){const oe=le.similarity[I].layers[x+W];oe&&(R.add(oe.file),w(oe))}_(I,["mid"])}for(const I of Me.keys())R.has(I)||Me.delete(I)},F=()=>{if(!z){z=!0;for(const x of Vi)_(x,["before","after"])}},J={group:null,word:null,reading:null,active:!1,token:null,action:null},ie=x=>{J.token=x,x<2*Ze?J.group={cam:Vi[Math.floor(x/Ze)],m:x%Ze}:x<Tt-1?J.word=x-2*Ze:J.reading="all"},re=x=>[Math.floor(x/Mt),x%Mt],fe=(x,R,I,W)=>{const oe=Math.max(0,(R*le.shape.patch-sr)/Ss),_e=(W*le.shape.patch-sr)/Ss;return _e<=0?[]:[[x*le.shape.patch/Ss,oe,I*le.shape.patch/Ss,_e]]},ee=()=>{var W;const x=[];for(const[oe,_e]of Vi.entries()){const Ce=((W=J.group)==null?void 0:W.cam)===_e?J.group.m:null,[$e,Oe]=re(ge[_e]),Ge=Ce??ih(ge[_e]),[It,ut]=[Math.floor(Ge/nn),Ge%nn],[At,Vt,yt,An]=Ce===null?[$e,Oe,$e+1,Oe+1]:[It*Gt,ut*Gt,(It+1)*Gt,(ut+1)*Gt],_t=[];for(let St=At;St<yt;St++)_t.push([St*Mt+Vt,0,St*Mt+An,le.shape.vision_width]);const sn=[[Vt,At,An,yt]];v.get(`${_e}_raw`).select(fe(Vt,At,An,yt));for(const St of["512","pick",...go,"size"])v.get(`${_e}_${St}`).select(sn);for(const St of["embed","encoded","layer"])v.get(`${_e}_${St}`).select(_t);v.get(`${_e}_groups`).select([[ut,It,ut+1,It+1]]);for(let St=0;St<Es;St++)v.get(`${_e}_stack${St}`).select([[Ge,0,Ge+1,le.shape.vision_width/$i]]);v.get(`${_e}_merged`).select([[Ge,0,Ge+1,le.shape.vlm_width]]),x.push([oe*Ze+Ge,0,oe*Ze+Ge+1,le.shape.vlm_width])}const R=J.word;v.get("lang_in").select(R===null?[]:[[R,0,R+1,1]]),v.get("lang_embed").select(R===null?[]:[[R,0,R+1,le.shape.vlm_width]]),R!==null&&x.push([2*Ze+R,0,2*Ze+R+1,le.shape.vlm_width]);const I=J.reading;v.get("state_in").select(I===null?[]:I==="all"?[[0,0,le.shape.max_dim,1]]:[[I,0,I+1,1]]),v.get("state_token").select(I===null?[]:[[0,0,1,le.shape.vlm_width]]),I!==null&&x.push([Tt-1,0,Tt,le.shape.vlm_width]),v.get("sequence").select(x),pe.select(J),te.select(J.action);for(const oe of v.values())oe.mesh.material.uniforms.uSelDim.value=J.active&&oe.spec.kind==="signed"&&oe.spec.dim!==!1?.3:0;i.touch()},ne=x=>{const[R,I]=re(x);return`patch ${Xn(x+1)} of ${Xn(Ms)} (row ${R+1}, column ${I+1})${(R+1)*le.shape.patch<=sr?", black padding":""}`},Ee=(x,R,I,W)=>{var Ce,$e,Oe,Ge;const oe=($e=(Ce=x.spec).valueAt)==null?void 0:$e.call(Ce,R,I);if(oe==null)return"";const _e=((Ge=(Oe=x.spec).isClipped)==null?void 0:Ge.call(Oe,R,I))??!1;return`<span>number ${Xn(I+1)} of ${Xn(W)}</span><b class="val">${_e?oe<0?"below ":"above ":""}${ws(oe)}</b>`},Re=x=>{var It,ut,At,Vt;J.group=null,J.word=null,J.reading=null,J.token=null,J.action=null,J.active=x!==null;const R=Le.point(x);if(!x)return ee(),null;if(R)return ee(),R;const I=x.sheet.spec.id,W=te.hover(x);if(W)return J.action=W.action,ee(),W.html;const oe=pe.hover(x);if(oe)return oe.token!==null&&ie(oe.token),J.action=oe.action,ee(),oe.html;const{col:_e,row:Ce}=x,[$e,Oe]=I.includes("_")?[I.slice(0,I.indexOf("_")),I.slice(I.indexOf("_")+1)]:[I,""];let Ge="";if($e==="table"||$e==="wrist"){const yt=$e,An=_t=>{ge[yt]!==_t&&(ge[yt]=_t,z&&_(yt))};if(Oe==="raw")Ge=`<i>${Ei[yt]}</i><span>pixel ${_e+1}, ${Ce+1}</span>`,An(Math.floor((Ce*Ss+sr)/le.shape.patch)*Mt+Math.floor(_e*Ss/le.shape.patch));else if(Oe==="512"||Oe==="pick")An(Ce*Mt+_e),Ge=`<i>${Ei[yt]}</i><span>${ne(ge[yt])}</span>`;else if(Oe==="embed"||Oe==="encoded"||Oe==="layer"){An(_e);const _t=Oe==="embed"?"patch columns":Oe==="encoded"?"after the encoder":`after layer ${X.state.layer+1}`;Ge=`<i>${Ei[yt]}, ${_t}</i><span>${ne(_e)}</span>${Ee(x.sheet,_e,Ce,le.shape.vision_width)}`}else if(Oe==="size"){const _t=Ce*Mt+_e;An(_t);const sn=X.sizeOf(yt,_t);Ge=`<i>${Ei[yt]}, after layer ${X.state.layer+1}</i><span>${ne(_t)}</span><span>size of its column (typical ${X.typical(yt).toFixed(1)})</span>${sn===null?"":`<b class="val">${ws(sn)}</b>`}`}else if(Oe==="before"||Oe==="after"||Oe==="mid"){const _t=Ce*Mt+_e,sn=E[I].rgba[_t*4]/255,St=Oe==="mid"?`after layer ${X.state.layer+1}`:`${Oe} the encoder`;Ge=`<i>${Ei[yt]}, ${St}</i><span>${ne(_t)}</span><span>similarity to the picked patch</span><b class="val">${sn.toFixed(2)}</b>`}else if(Oe.startsWith("stack")){const _t=Number(Oe.slice(5));J.group={cam:yt,m:_e};const sn=fo(_e,_t),St=_t*le.shape.vision_width+Ce*$i,Js=((ut=(It=x.sheet.spec).valueAt)==null?void 0:ut.call(It,_e,Ce))??0,Ea=(Vt=(At=x.sheet.spec).isClipped)!=null&&Vt.call(At,_e,Ce)?Js<0?"below ":"above ":"";Ge=`<i>${Ei[yt]}, glued columns</i><span>block ${_e+1} of ${Ze}, band ${_t+1} of ${Es}: ${ne(sn)}</span><span>numbers ${Xn(St+1)} to ${Xn(St+$i)} of ${Xn(Es*le.shape.vision_width)}: the largest</span><b class="val">${Ea}${ws(Js)}</b>`}else if(Oe==="groups"||Oe==="merged"){const _t=Oe==="groups"?Ce*nn+_e:_e;J.group={cam:yt,m:_t};const[sn,St]=[Math.floor(_t/nn),_t%nn];Ge=`<i>${Ei[yt]}</i><span>merged token ${_t+1} of ${Ze}: patch rows ${sn*Gt+1} to ${(sn+1)*Gt}, columns ${St*Gt+1} to ${(St+1)*Gt}</span>`,Oe==="merged"&&(Ge+=Ee(x.sheet,_e,Ce,le.shape.vlm_width))}}else if(I==="lang_in"||I==="lang_embed")J.word=_e,Ge=`<i>Instruction</i><span>slot ${_e+1} of ${Un}: ${Q(_e)}</span>${I==="lang_embed"?Ee(x.sheet,_e,Ce,le.shape.vlm_width):""}`;else if(I==="state_in")J.reading=_e,Ge=_e<7?`<i>Arm readings</i><span>${le.state.names[_e]}: ${ws(le.state.deg[_e])}°, as usual would be ${ws(le.state.mean[_e])}°</span><span>rescaled</span><b class="val">${ws(le.state.norm[_e])}</b>`:`<i>Arm readings</i><span>cell ${_e+1} of ${le.shape.max_dim}: zero padding</span>`;else if(I==="state_token")J.reading="all",Ge=`<i>Readings token</i>${Ee(x.sheet,_e,Ce,le.shape.vlm_width)}`;else if(I==="sequence")ie(_e),Ge=`<i>The sequence</i><span>place ${_e+1} of ${Tt}: ${ae(_e)}</span>${Ee(x.sheet,_e,Ce,le.shape.vlm_width)}`;else if(I==="mask"){const yt=u.mask.at(_e,Ce)>.5;Ge=`<i>Who may look at whom</i><span>${ae(Ce)} (place ${Ce+1})</span><span>looking at ${ae(_e)} (place ${_e+1})</span><b class="val">${yt?"allowed":"blocked"}</b>`}return ee(),Ge||null},Se=x=>g(x)||x>=p("place-state")?1:x>=p("place-words")?(Tt-1)/Tt:x>=p("place-images")?2*Ze/Tt:0,We=(x,R)=>{var I,W;return(g(R)?x.spec.overview!==!1:R>=x.spec.revealAt&&(!Pt[R].alone||se(x.spec.id)))&&(((W=(I=x.spec).when)==null?void 0:W.call(I))??!0)},He=()=>({layer:pe.state.layer,layers:pe.layers,head:pe.state.head,heads:pe.heads,looksAtActions:pe.looksAtActions(),vision:X.state.layer,visionLayers:X.layers,round:te.state.round,rounds:te.rounds,noise:te.state.noise,levels:te.levels}),st={setStep:()=>{},boxOf:()=>new En,hover:Re,stack:He,setLayer:pe.setLayer,setHead:pe.setHead,setVisionLayer:X.setLayer,setRound:te.setRound,setNoise:te.setNoise,onStack:()=>{}};return Z=()=>{for(const[x,R]of ye)R.innerHTML=x.spec.label();for(const x of v.values()){if(!x.spec.when)continue;const R=x.shown;x.shown=We(x,j),x.shown!==R&&(x.reveal=x.revealTo=x.shown?1:0)}H(),ee(),st.onStack(He())},st.setStep=(x,R)=>{j=x;const I=Pt[x];I.look&&pe.setLook(I.look,I.row),I.layer!==void 0&&pe.setLayer(I.layer,R),I.head!==void 0&&pe.setHead(I.head),I.vlayer!==void 0&&X.setLayer(I.vlayer,R),(g(x)||x>=p("encoder"))&&X.ensure(),Math.abs(x-p("matrix"))<=1&&Le.ensure(),te.setMode(I.plot,R),I.round!==void 0&&te.setRound(I.round,R),I.noise!==void 0&&te.setNoise(I.noise);for(const W of v.values()){const oe=W.spec.id;W.shown=We(W,x),W.revealTo=W.shown?oe==="sequence"?Se(x):1:0,(!W.shown||R||g(x))&&(W.reveal=W.revealTo),W.fadeTo=se(oe)?1:.26,oe.endsWith("_512")&&(W.gapTo=g(x)||x>=p("patches")?.18:0),R&&(W.fade=W.fadeTo,W.gap=W.gapTo,W.group.position.set(...W.spec.pos))}for(const W of y)for(const oe of W.lines)oe.visible=g(x)||x>=W.revealAt&&se(W.id);for(const W of V)W.line.visible=g(x)||x>=W.revealAt&&!Pt[x].alone;(g(x)||x>=p("similar"))&&F(),Z(),i.touch(3)},st.boxOf=x=>{const R=new En;for(const I of x){const W=v.get(I),oe=y.find(_e=>_e.id===I);if(W)R.union(W.box());else if(oe)R.union(oe.box);else throw new Error(`nothing called "${I}" to frame`)}return R},ee(),st}const rt=i=>document.getElementById(i),ul=rt("stage");let Ks;try{Ks=new X_(ul,rt("gl"),rt("labels"))}catch(i){throw rt("loading-text").textContent="This page needs WebGL, which this browser has turned off or does not support.",i}const Fg=window.matchMedia("(prefers-reduced-motion: reduce)"),Ls=()=>Fg.matches||new URLSearchParams(location.search).has("still");let Kt=null,Dt=0,Rl=!0;const Zh=ks.map((i,e)=>Pt.findIndex(t=>t.chapter===e)),vr=Pt.flatMap((i,e)=>i.key?[e]:[]);let Ds=!1;const qs=(i,e)=>{if(!Ds)return Math.min(Pt.length-1,Math.max(0,i+e));const t=e>0?vr.filter(n=>n>i):vr.filter(n=>n<i);return t.length===0?i:e>0?t[0]:t[t.length-1]},ur=rt("chapters");ks.forEach((i,e)=>{const t=document.createElement("button");t.type="button";const n=Pt.filter(s=>s.chapter===e).map(s=>s.key?'<i class="key"></i>':"<i></i>").join("");t.innerHTML=`<span class="n">${e===0||e===ks.length-1?"":e}</span><span>${i}</span><span class="dots">${n}</span>`,t.addEventListener("click",()=>Ys(Zh[e])),ur.append(t)});function Kh(){const i=vr.indexOf(Dt);rt("count").textContent=Ds&&i>=0?`key ${i+1} / ${vr.length}`:`${Dt+1} / ${Pt.length}`,rt("back").disabled=qs(Dt,-1)===Dt,rt("next").disabled=qs(Dt,1)===Dt}function wa(i,e){Dt=i;const t=Pt[i];rt("step-chapter").textContent=t.chapter===0||t.chapter===ks.length-1?ks[t.chapter]:`Chapter ${t.chapter}: ${ks[t.chapter]}`,rt("step-title").textContent=t.title,rt("step-key").hidden=!t.key,rt("step-key").querySelector("span").textContent=t.key??"",rt("step-body").innerHTML=t.body,rt("step").scrollTop=0,Kh(),[...ur.children].forEach((n,s)=>{n.classList.toggle("current",s===t.chapter),s===t.chapter&&ur.scrollWidth>ur.clientWidth&&n.scrollIntoView({inline:"center",block:"nearest"}),n.querySelectorAll(".dots i").forEach((a,r)=>{const o=Zh[s]+r;a.classList.toggle("done",o<i),a.classList.toggle("now",o===i)})});try{location.hash.slice(1)!==t.id&&history.replaceState(null,"",`#${t.id}`)}catch{}rt("layerbar").hidden=!t.slider,rt("head-wrap").hidden=!t.heads,Kt&&(Kt.setStep(i,e),Ks.frame(Jh(),new U(...t.view.dir),t.view.pad,e?0:1.3,t.view.room))}function Jh(){var t;const i=Pt[Dt],e=Kt.boxOf(i.view.ids);return i.slider&&!((t=i.view.room)!=null&&t.top)&&(e.max.y+=(e.max.y-e.min.y)*.22),i.plot&&(e.min.x-=Math.min(26,(e.max.x-e.min.x)*.22)),e}const Pi=rt("layer"),Us=rt("head");function Og(i){const e=Pt[Dt].slider;if(e==="round"){const n=(1-i.round/i.rounds).toFixed(1),s=i.round===0?"Before round 1":`After round ${i.round} of ${i.rounds}`;return{value:i.round,last:i.rounds,html:`${s} <small>noise level ${n}</small>`}}if(e==="noise")return{value:i.noise,last:i.levels.length-1,html:`Noise level ${i.levels[i.noise]}`};if(e==="vision")return{value:i.vision,last:i.visionLayers-1,html:`After layer ${i.vision+1} of ${i.visionLayers}`};const t=Pt[Dt].id.startsWith("expert-")?` <small>${i.looksAtActions?"looks at the sequence and earlier actions":"looks at the sequence only"}</small>`:"";return{value:i.layer,last:i.layers-1,html:`Layer ${i.layer+1} of ${i.layers}${t}`}}function kg(i){const e=Og(i);if(Pi.min="0",Pi.max=String(e.last),Pi.value=String(e.value),Pi.setAttribute("aria-label",Pt[Dt].slider==="round"?"Round":Pt[Dt].slider==="noise"?"Noise level":"Layer"),rt("layer-prev").disabled=e.value===0,rt("layer-next").disabled=e.value===e.last,rt("layer-text").innerHTML=e.html,Us.options.length===0){Us.add(new Option(`all ${i.heads}, averaged`,"-1"));for(let t=0;t<i.heads;t++)Us.add(new Option(`head ${t+1}`,String(t)))}Us.value=String(i.head)}function Bs(i,e=Pt[Dt].slider,t){Kt&&(e==="round"?Kt.setRound(i,Ls()):e==="noise"?Kt.setNoise(i):e==="vision"?Kt.setVisionLayer(i,Ls()):(Kt.setLayer(i,Ls()),t!==void 0&&Kt.setHead(t),Ks.follow(Jh(),Ls()?0:.45)))}Pi.addEventListener("input",()=>Bs(Number(Pi.value)));rt("layer-prev").addEventListener("click",()=>Bs(Number(Pi.value)-1));rt("layer-next").addEventListener("click",()=>Bs(Number(Pi.value)+1));Us.addEventListener("change",()=>Kt==null?void 0:Kt.setHead(Number(Us.value)));rt("step-body").addEventListener("click",i=>{const e=i.target.closest("a.jump");if(!e)return;i.preventDefault();const t=e.dataset;t.round!==void 0?Bs(Number(t.round),"round"):t.vlayer!==void 0?Bs(Number(t.vlayer),"vision"):Bs(Number(t.layer),"layer",t.head===void 0?void 0:Number(t.head))});function Ys(i){const e=Math.min(Pt.length-1,Math.max(0,i));e!==Dt&&wa(e,Ls())}rt("back").addEventListener("click",()=>Ys(qs(Dt,-1)));rt("next").addEventListener("click",()=>Ys(qs(Dt,1)));rt("keys").addEventListener("click",()=>{Ds=!Ds,rt("keys").setAttribute("aria-pressed",String(Ds)),rt("panel").classList.toggle("keys-only",Ds),Kh()});rt("reset").addEventListener("click",()=>wa(Dt,Ls()));window.addEventListener("keydown",i=>{!Rl||i.metaKey||i.ctrlKey||i.altKey||i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement||(i.key==="ArrowRight"||i.key==="PageDown"?Ys(qs(Dt,1)):(i.key==="ArrowLeft"||i.key==="PageUp")&&Ys(qs(Dt,-1)))});const xr=()=>Pt.findIndex(i=>i.id===location.hash.slice(1));window.addEventListener("hashchange",()=>{const i=xr();Rl&&i>=0&&Ys(i)});const fa=rt("tip");Ks.onHover=i=>{const e=Kt?Kt.hover(i):null;if(fa.classList.toggle("on",!!(i&&e)),!i||!e)return;fa.innerHTML=e;const t=14,n=fa.offsetWidth,s=fa.offsetHeight,a=i.x+t+n>ul.clientWidth?i.x-t-n:i.x+t,r=i.y+t+s>ul.clientHeight?i.y-t-s:i.y+t;fa.style.transform=`translate(${Math.max(4,a)}px, ${Math.max(4,r)}px)`};const Qh=()=>Ks.applyTheme();window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Qh);new MutationObserver(Qh).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});wa(Math.max(0,xr()),!0);Ng(Ks,(i,e)=>{rt("loading-text").textContent=`Loading the model's numbers ${i} / ${e}`}).then(i=>{Kt=i,Kt.onStack=kg,wa(Dt,!0),rt("loading").classList.add("done")}).catch(i=>{console.error(i),rt("loading-text").textContent="The model's numbers could not be loaded. Reload the page to try again."});function zg(){return{setActive(i){Rl=i,i&&wa(Math.max(0,xr()>=0?xr():Dt),!0)}}}export{zg as mount};
