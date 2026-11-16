var id=Object.defineProperty;var sd=(i,e,t)=>e in i?id(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ye=(i,e,t)=>sd(i,typeof e!="symbol"?e+"":e,t);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ps={ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,Pl=1,rd=2,lh=1,od=2,ii=3,Ri=0,ln=1,Vn=2,Ti=0,Ls=1,Ll=2,Dl=3,Ul=4,ld=5,Gi=100,cd=101,hd=102,dd=103,ud=104,fd=200,pd=201,md=202,_d=203,_o=204,go=205,gd=206,vd=207,xd=208,yd=209,bd=210,Md=211,Sd=212,wd=213,Ed=214,vo=0,xo=1,yo=2,Fs=3,bo=4,Mo=5,So=6,wo=7,ch=0,Td=1,Ad=2,Ai=0,Rd=1,Cd=2,Pd=3,Ld=4,Dd=5,Ud=6,Id=7,hh=300,Os=301,ks=302,Eo=303,To=304,vr=306,Ao=1e3,$i=1001,Ro=1002,cn=1003,Nd=1004,wa=1005,Un=1006,Mr=1007,ai=1008,Xn=1009,dh=1010,uh=1011,ma=1012,dl=1013,Xi=1014,ri=1015,ga=1016,ul=1017,fl=1018,Bs=1020,fh=35902,ph=1021,mh=1022,Mn=1023,_h=1024,gh=1025,Ds=1026,zs=1027,vh=1028,pl=1029,xh=1030,ml=1031,_l=1033,sr=33776,ar=33777,rr=33778,or=33779,Co=35840,Po=35841,Lo=35842,Do=35843,Uo=36196,Io=37492,No=37496,Fo=37808,Oo=37809,ko=37810,Bo=37811,zo=37812,Ho=37813,Go=37814,Vo=37815,$o=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,jo=37821,lr=36492,Zo=36494,Ko=36495,yh=36283,Jo=36284,Qo=36285,el=36286,Fd=3200,Od=3201,kd=0,Bd=1,$n="",yn="srgb",ji="srgb-linear",xr="linear",pt="srgb",Ji=7680,Il=519,zd=512,Hd=513,Gd=514,bh=515,Vd=516,$d=517,Wd=518,Xd=519,tl=35044,Nl="300 es",oi=2e3,dr=2001;class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fl=1234567;const ua=Math.PI/180,_a=180/Math.PI;function li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function gl(i,e){return(i%e+e)%e}function qd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yd(i,e,t){return i!==e?(t-i)/(e-i):0}function fa(i,e,t){return(1-t)*i+t*e}function jd(i,e,t,n){return fa(i,e,1-Math.exp(-t*n))}function Zd(i,e=1){return e-Math.abs(gl(i,e*2)-e)}function Kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function eu(i,e){return i+Math.random()*(e-i)}function tu(i){return i*(.5-Math.random())}function nu(i){i!==void 0&&(Fl=i);let e=Fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iu(i){return i*ua}function su(i){return i*_a}function au(i){return(i&i-1)===0&&i!==0}function ru(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lu(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),h=r((e+n)/2),u=a((e-n)/2),f=r((e-n)/2),m=a((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vl={DEG2RAD:ua,RAD2DEG:_a,generateUUID:li,clamp:Vt,euclideanModulo:gl,mapLinear:qd,inverseLerp:Yd,lerp:fa,damp:jd,pingpong:Zd,smoothstep:Kd,smootherstep:Jd,randInt:Qd,randFloat:eu,randFloatSpread:tu,seededRandom:nu,degToRad:iu,radToDeg:su,isPowerOfTwo:au,ceilPowerOfTwo:ru,floorPowerOfTwo:ou,setQuaternionFromProperEuler:lu,normalize:dt,denormalize:Ln};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,s,a,r,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],v=s[0],p=s[3],d=s[6],R=s[1],E=s[4],b=s[7],V=s[2],L=s[5],T=s[8];return a[0]=r*v+o*R+l*V,a[3]=r*p+o*E+l*L,a[6]=r*d+o*b+l*T,a[1]=c*v+h*R+u*V,a[4]=c*p+h*E+u*L,a[7]=c*d+h*b+u*T,a[2]=f*v+m*R+g*V,a[5]=f*p+m*E+g*L,a[8]=f*d+m*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*r-o*c,f=o*l-h*a,m=c*a-r*l,g=t*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*r)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*a-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(r*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sr.makeScale(e,t)),this}rotate(e){return this.premultiply(Sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new je;function Mh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cu(){const i=ur("canvas");return i.style.display="block",i}const Ol={};function ha(i){i in Ol||(Ol[i]=!0,console.warn(i))}function hu(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function du(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$n?xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const kl=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],zl=[.3127,.329],Hl=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gl=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[ji]:{primaries:kl,whitePoint:zl,transfer:xr,toXYZ:Hl,fromXYZ:Gl,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:kl,whitePoint:zl,transfer:pt,toXYZ:Hl,fromXYZ:Gl,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}});let Qi;class fu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=ur("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ci(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pu=0;class Sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(wr(s[r].image)):a.push(wr(s[r]))}else a=wr(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mu=0;class Zt extends Zi{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=$i,s=$i,a=Un,r=ai,o=Mn,l=Xn,c=Zt.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=li(),this.name="",this.source=new Sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ao:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ao:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=hh;Zt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(m+1)/2,V=(d+1)/2,L=(h+f)/4,T=(u+v)/4,D=(g+p)/4;return E>b&&E>V?E<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(E),s=L/n,a=T/n):b>V?b<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),n=L/s,a=D/s):V<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(V),n=T/a,s=D/a),this.set(n,s,a,t),this}let R=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(p-g)/R,this.y=(u-v)/R,this.z=(f-h)/R,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _u extends Zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Sh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends _u{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wh extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gu extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=a[r+0],m=a[r+1],g=a[r+2],v=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==m||h!==g){let p=1-o;const d=l*f+c*m+h*g+u*v,R=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const V=Math.sqrt(E),L=Math.atan2(V,d*R);p=Math.sin(p*L)/V,o=Math.sin(o*L)/V}const b=o*R;if(l=l*p+f*b,c=c*p+m*b,h=h*p+g*b,u=u*p+v*b,p===1-o){const V=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=V,c*=V,h*=V,u*=V}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=a[r],f=a[r+1],m=a[r+2],g=a[r+3];return e[t]=o*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-o*m,e[t+2]=c*g+h*m+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(a/2),f=l(n/2),m=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(r-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(a+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(a-c)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(r-s)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),h=2*(o*t-a*s),u=2*(a*n-r*t);return this.x=t+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=s+l*u+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Er.copy(this).projectOnVector(e),this.sub(Er)}reflect(e){return this.sub(Er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Er=new I,Vl=new Yi;class Sn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Tn):Tn.fromBufferAttribute(a,r),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Ta.subVectors(this.max,Zs),es.subVectors(e.a,Zs),ts.subVectors(e.b,Zs),ns.subVectors(e.c,Zs),fi.subVectors(ts,es),pi.subVectors(ns,ts),Pi.subVectors(es,ns);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Pi.z,Pi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Pi.z,0,-Pi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Pi.y,Pi.x,0];return!Tr(t,es,ts,ns,Ta)||(t=[1,0,0,0,1,0,0,0,1],!Tr(t,es,ts,ns,Ta))?!1:(Aa.crossVectors(fi,pi),t=[Aa.x,Aa.y,Aa.z],Tr(t,es,ts,ns,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new I,new I,new I,new I,new I,new I,new I,new I],Tn=new I,Ea=new Sn,es=new I,ts=new I,ns=new I,fi=new I,pi=new I,Pi=new I,Zs=new I,Ta=new I,Aa=new I,Li=new I;function Tr(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Li.fromArray(i,a);const o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vu=new Sn,Ks=new I,Ar=new I;class Ws{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vu.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(Ar)),this.expandByPoint(Ks.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new I,Rr=new I,Ra=new I,mi=new I,Cr=new I,Ca=new I,Pr=new I;class yr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rr.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Rr);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Ra),o=mi.dot(this.direction),l=-mi.dot(Ra),c=mi.lengthSq(),h=Math.abs(1-r*r);let u,f,m,g;if(h>0)if(u=r*l-o,f=r*o-l,g=a*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,m=u*(u+r*f+2*o)+f*(r*u+f+2*l)+c}else f=a,u=Math.max(0,-(r*f+o)),m=-u*u+f*(f+2*l)+c;else f=-a,u=Math.max(0,-(r*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-r*a+o)),f=u>0?-a:Math.min(Math.max(-a,-l),a),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-a,-l),a),m=f*(f+2*l)+c):(u=Math.max(0,-(r*a+o)),f=u>0?a:Math.min(Math.max(-a,-l),a),m=-u*u+f*(f+2*l)+c);else f=r>0?-a:a,u=Math.max(0,-(r*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Rr).addScaledVector(Ra,f),m}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,a){Cr.subVectors(t,e),Ca.subVectors(n,e),Pr.crossVectors(Cr,Ca);let r=this.direction.dot(Pr),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(Ca.crossVectors(mi,Ca));if(l<0)return null;const c=o*this.direction.dot(Cr.cross(mi));if(c<0||l+c>r)return null;const h=-o*mi.dot(Pr);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,n,s,a,r,o,l,c,h,u,f,m,g,v,p){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,h,u,f,m,g,v,p)}set(e,t,n,s,a,r,o,l,c,h,u,f,m,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),a=1/is.setFromMatrixColumn(e,1).length(),r=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const f=r*h,m=r*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-m,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=m*o-g,t[6]=v+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-r*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=r*h,t[9]=v-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*h,m=r*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,m=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+m,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=r*l,m=r*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=r*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xu,e,yu)}lookAt(e,t,n){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),_i.crossVectors(n,un),_i.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),_i.crossVectors(n,un)),_i.normalize(),Pa.crossVectors(un,_i),s[0]=_i.x,s[4]=Pa.x,s[8]=un.x,s[1]=_i.y,s[5]=Pa.y,s[9]=un.y,s[2]=_i.z,s[6]=Pa.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],d=n[14],R=n[3],E=n[7],b=n[11],V=n[15],L=s[0],T=s[4],D=s[8],M=s[12],x=s[1],P=s[5],$=s[9],W=s[13],Q=s[2],oe=s[6],K=s[10],se=s[14],j=s[3],pe=s[7],X=s[11],de=s[15];return a[0]=r*L+o*x+l*Q+c*j,a[4]=r*T+o*P+l*oe+c*pe,a[8]=r*D+o*$+l*K+c*X,a[12]=r*M+o*W+l*se+c*de,a[1]=h*L+u*x+f*Q+m*j,a[5]=h*T+u*P+f*oe+m*pe,a[9]=h*D+u*$+f*K+m*X,a[13]=h*M+u*W+f*se+m*de,a[2]=g*L+v*x+p*Q+d*j,a[6]=g*T+v*P+p*oe+d*pe,a[10]=g*D+v*$+p*K+d*X,a[14]=g*M+v*W+p*se+d*de,a[3]=R*L+E*x+b*Q+V*j,a[7]=R*T+E*P+b*oe+V*pe,a[11]=R*D+E*$+b*K+V*X,a[15]=R*M+E*W+b*se+V*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15];return g*(+a*l*u-s*c*u-a*o*f+n*c*f+s*o*m-n*l*m)+v*(+t*l*m-t*c*f+a*r*f-s*r*m+s*c*h-a*l*h)+p*(+t*c*u-t*o*m-a*r*u+n*r*m+a*o*h-n*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*r*u-n*r*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],R=u*p*c-v*f*c+v*l*m-o*p*m-u*l*d+o*f*d,E=g*f*c-h*p*c-g*l*m+r*p*m+h*l*d-r*f*d,b=h*v*c-g*u*c+g*o*m-r*v*m-h*o*d+r*u*d,V=g*u*l-h*v*l-g*o*f+r*v*f+h*o*p-r*u*p,L=t*R+n*E+s*b+a*V;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/L;return e[0]=R*T,e[1]=(v*f*a-u*p*a-v*s*m+n*p*m+u*s*d-n*f*d)*T,e[2]=(o*p*a-v*l*a+v*s*c-n*p*c-o*s*d+n*l*d)*T,e[3]=(u*l*a-o*f*a-u*s*c+n*f*c+o*s*m-n*l*m)*T,e[4]=E*T,e[5]=(h*p*a-g*f*a+g*s*m-t*p*m-h*s*d+t*f*d)*T,e[6]=(g*l*a-r*p*a-g*s*c+t*p*c+r*s*d-t*l*d)*T,e[7]=(r*f*a-h*l*a+h*s*c-t*f*c-r*s*m+t*l*m)*T,e[8]=b*T,e[9]=(g*u*a-h*v*a-g*n*m+t*v*m+h*n*d-t*u*d)*T,e[10]=(r*v*a-g*o*a+g*n*c-t*v*c-r*n*d+t*o*d)*T,e[11]=(h*o*a-r*u*a-h*n*c+t*u*c+r*n*m-t*o*m)*T,e[12]=V*T,e[13]=(h*v*s-g*u*s+g*n*f-t*v*f-h*n*p+t*u*p)*T,e[14]=(g*o*s-r*v*s-g*n*l+t*v*l+r*n*p-t*o*p)*T,e[15]=(r*u*s-h*o*s+h*n*l-t*u*l-r*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,u=o+o,f=a*c,m=a*h,g=a*u,v=r*h,p=r*u,d=o*u,R=l*c,E=l*h,b=l*u,V=n.x,L=n.y,T=n.z;return s[0]=(1-(v+d))*V,s[1]=(m+b)*V,s[2]=(g-E)*V,s[3]=0,s[4]=(m-b)*L,s[5]=(1-(f+d))*L,s[6]=(p+R)*L,s[7]=0,s[8]=(g+E)*T,s[9]=(p-R)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=is.set(s[0],s[1],s[2]).length();const r=is.set(s[4],s[5],s[6]).length(),o=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);const c=1/a,h=1/r,u=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=oi){const l=this.elements,c=2*a/(t-e),h=2*a/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(o===oi)m=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===dr)m=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=oi){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(r-a),f=(t+e)*c,m=(n+s)*h;let g,v;if(o===oi)g=(r+a)*u,v=-2*u;else if(o===dr)g=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const is=new I,An=new Et,xu=new I(0,0,0),yu=new I(1,1,1),_i=new I,Pa=new I,un=new I,$l=new Et,Wl=new Yi;class hi{constructor(e=0,t=0,n=0,s=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Vt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bu=0;const Xl=new I,ss=new Yi,Kn=new Et,La=new I,Js=new I,Mu=new I,Su=new Yi,ql=new I(1,0,0),Yl=new I(0,1,0),jl=new I(0,0,1),Zl={type:"added"},wu={type:"removed"},as={type:"childadded",child:null},Lr={type:"childremoved",child:null};class hn extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new I,t=new hi,n=new Yi,s=new I(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new je}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(jl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?La.copy(e):La.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Js,La,this.up):Kn.lookAt(La,Js,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Kn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zl),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wu),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zl),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,Mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Su,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),f=r(e.skeletons),m=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}hn.DEFAULT_UP=new I(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new I,Jn=new I,Dr=new I,Qn=new I,rs=new I,os=new I,Kl=new I,Ur=new I,Ir=new I,Nr=new I,Fr=new ut,Or=new ut,kr=new ut;class Dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Rn.subVectors(s,t),Jn.subVectors(n,t),Dr.subVectors(e,t);const r=Rn.dot(Rn),o=Rn.dot(Jn),l=Rn.dot(Dr),c=Jn.dot(Jn),h=Jn.dot(Dr),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const f=1/u,m=(c*l-o*h)*f,g=(r*h-o*l)*f;return a.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Qn.x),l.addScaledVector(r,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return Fr.setScalar(0),Or.setScalar(0),kr.setScalar(0),Fr.fromBufferAttribute(e,t),Or.fromBufferAttribute(e,n),kr.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Fr,a.x),r.addScaledVector(Or,a.y),r.addScaledVector(kr,a.z),r}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),Jn.subVectors(e,t),Rn.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;rs.subVectors(s,n),os.subVectors(a,n),Ur.subVectors(e,n);const l=rs.dot(Ur),c=os.dot(Ur);if(l<=0&&c<=0)return t.copy(n);Ir.subVectors(e,s);const h=rs.dot(Ir),u=os.dot(Ir);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(rs,r);Nr.subVectors(e,a);const m=rs.dot(Nr),g=os.dot(Nr);if(g>=0&&m<=g)return t.copy(a);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(os,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Kl.subVectors(a,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Kl,o);const d=1/(p+v+f);return r=v*d,o=f*d,t.copy(n).addScaledVector(rs,r).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Br(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=gl(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Br(r,a,e+1/3),this.g=Br(r,a,e),this.b=Br(r,a,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=yn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const n=Eh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return st.fromWorkingColorSpace(qt.copy(this),e),Math.round(Vt(qt.r*255,0,255))*65536+Math.round(Vt(qt.g*255,0,255))*256+Math.round(Vt(qt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(qt.copy(this),t);const n=qt.r,s=qt.g,a=qt.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=yn){st.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,s=qt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Da);const n=fa(gi.h,Da.h,t),s=fa(gi.s,Da.s,t),a=fa(gi.l,Da.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new et;et.NAMES=Eh;let Eu=0;class va extends Zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=li(),this.name="",this.blending=Ls,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=go,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_o&&(n.blendSrc=this.blendSrc),this.blendDst!==go&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Th extends va{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new I,Ua=new Xe;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),a=dt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),e}}class Ah extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rh extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class On extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tu=0;const _n=new Et,zr=new hn,ls=new I,fn=new Sn,Qs=new Sn,Nt=new I;class wn extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Rh:Ah)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new je().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return zr.lookAt(e),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new On(n,3))}else{for(let n=0,s=t.count;n<s;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];fn.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(fn.min,Qs.min),fn.expandByPoint(Nt),Nt.addVectors(fn.max,Qs.max),fn.expandByPoint(Nt)):(fn.expandByPoint(Qs.min),fn.expandByPoint(Qs.max))}fn.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Nt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(e,c),Nt.add(ls)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new I,l[D]=new I;const c=new I,h=new I,u=new I,f=new Xe,m=new Xe,g=new Xe,v=new I,p=new I;function d(D,M,x){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),f.fromBufferAttribute(a,D),m.fromBufferAttribute(a,M),g.fromBufferAttribute(a,x),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[D].add(v),o[M].add(v),o[x].add(v),l[D].add(p),l[M].add(p),l[x].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,M=R.length;D<M;++D){const x=R[D],P=x.start,$=x.count;for(let W=P,Q=P+$;W<Q;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const E=new I,b=new I,V=new I,L=new I;function T(D){V.fromBufferAttribute(s,D),L.copy(V);const M=o[D];E.copy(M),E.sub(V.multiplyScalar(V.dot(M))).normalize(),b.crossVectors(L,M);const P=b.dot(l[D])<0?-1:1;r.setXYZW(D,E.x,E.y,E.z,P)}for(let D=0,M=R.length;D<M;++D){const x=R[D],P=x.start,$=x.count;for(let W=P,Q=P+$;W<Q;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new I,a=new I,r=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new Fn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new Et,Di=new yr,Ia=new Ws,Ql=new I,Na=new I,Fa=new I,Oa=new I,Hr=new I,ka=new I,ec=new I,Ba=new I;class In extends hn{constructor(e=new wn,t=new Th){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){ka.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(Hr.fromBufferAttribute(u,e),r?ka.addScaledVector(Hr,h):ka.addScaledVector(Hr.sub(t),h))}t.add(ka)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(a),Di.copy(e.ray).recast(e.near),!(Ia.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Ia,Ql)===null||Di.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(Jl.copy(a).invert(),Di.copy(e.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=r[p.materialIndex],R=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=R,V=E;b<V;b+=3){const L=o.getX(b),T=o.getX(b+1),D=o.getX(b+2);s=za(this,d,e,n,c,h,u,L,T,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const R=o.getX(p),E=o.getX(p+1),b=o.getX(p+2);s=za(this,r,e,n,c,h,u,R,E,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=r[p.materialIndex],R=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=R,V=E;b<V;b+=3){const L=b,T=b+1,D=b+2;s=za(this,d,e,n,c,h,u,L,T,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const R=p,E=p+1,b=p+2;s=za(this,r,e,n,c,h,u,R,E,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Au(i,e,t,n,s,a,r,o){let l;if(e.side===ln?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===Ri,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:i}}function za(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,Na),i.getVertexPosition(l,Fa),i.getVertexPosition(c,Oa);const h=Au(i,e,t,n,Na,Fa,Oa,ec);if(h){const u=new I;Dn.getBarycoord(ec,Na,Fa,Oa,u),s&&(h.uv=Dn.getInterpolatedAttribute(s,o,l,c,u,new Xe)),a&&(h.uv1=Dn.getInterpolatedAttribute(a,o,l,c,u,new Xe)),r&&(h.normal=Dn.getInterpolatedAttribute(r,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};Dn.getNormal(Na,Fa,Oa,f.normal),h.face=f,h.barycoord=u}return h}class xa extends wn{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(u,2));function g(v,p,d,R,E,b,V,L,T,D,M){const x=b/T,P=V/D,$=b/2,W=V/2,Q=L/2,oe=T+1,K=D+1;let se=0,j=0;const pe=new I;for(let X=0;X<K;X++){const de=X*P-W;for(let Ee=0;Ee<oe;Ee++){const Pe=Ee*x-$;pe[v]=Pe*R,pe[p]=de*E,pe[d]=Q,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[p]=0,pe[d]=L>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Ee/T),u.push(1-X/D),se+=1}}for(let X=0;X<D;X++)for(let de=0;de<T;de++){const Ee=f+de+oe*X,Pe=f+de+oe*(X+1),q=f+(de+1)+oe*(X+1),te=f+(de+1)+oe*X;l.push(Ee,Pe,te),l.push(Pe,q,te),j+=6}o.addGroup(m,j,M),m+=j,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=Hs(i[t]);for(const s in n)e[s]=n[s]}return e}function Ru(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ch(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const yl={clone:Hs,merge:Qt};var Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends va{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Ru(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ph extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new I,tc=new Xe,nc=new Xe;class bn extends Ph{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,tc,nc),t.subVectors(nc,tc)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,hs=1;class Lu extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(cs,hs,e,t);s.layers=this.layers,this.add(s);const a=new bn(cs,hs,e,t);a.layers=this.layers,this.add(a);const r=new bn(cs,hs,e,t);r.layers=this.layers,this.add(r);const o=new bn(cs,hs,e,t);o.layers=this.layers,this.add(o);const l=new bn(cs,hs,e,t);l.layers=this.layers,this.add(l);const c=new bn(cs,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lh extends Zt{constructor(e,t,n,s,a,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Os,super(e,t,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Du extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xa(5,5,5),a=new qn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Ti});a.uniforms.tEquirect.value=t;const r=new In(s,a),o=t.minFilter;return t.minFilter===ai&&(t.minFilter=Un),new Lu(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const Gr=new I,Uu=new I,Iu=new je;class Mi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Gr.subVectors(n,t).cross(Uu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Iu.getNormalMatrix(e),s=this.coplanarPoint(Gr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Ws,Ha=new I;class Dh{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,a=new Mi,r=new Mi){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=oi){const n=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],v=s[10],p=s[11],d=s[12],R=s[13],E=s[14],b=s[15];if(n[0].setComponents(l-a,f-c,p-m,b-d).normalize(),n[1].setComponents(l+a,f+c,p+m,b+d).normalize(),n[2].setComponents(l+r,f+h,p+g,b+R).normalize(),n[3].setComponents(l-r,f-h,p-g,b-R).normalize(),n[4].setComponents(l-o,f-u,p-v,b-E).normalize(),t===oi)n[5].setComponents(l+o,f+u,p+v,b+E).normalize();else if(t===dr)n[5].setComponents(o,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ha.x=s.normal.x>0?e.max.x:e.min.x,Ha.y=s.normal.y>0?e.max.y:e.min.y,Ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uh(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Nu(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],v=u[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const v=u[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}class ya extends wn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,m=[],g=[],v=[],p=[];for(let d=0;d<h;d++){const R=d*f-r;for(let E=0;E<c;E++){const b=E*u-a;g.push(b,-R,0),v.push(0,0,1),p.push(E/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<o;R++){const E=R+c*d,b=R+c*(d+1),V=R+1+c*(d+1),L=R+1+c*d;m.push(E,b,L),m.push(b,V,L)}this.setIndex(m),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(v,3)),this.setAttribute("uv",new On(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fu=`#ifdef USE_ALPHAHASH
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
}`,Ke={alphahash_fragment:Fu,alphahash_pars_fragment:Ou,alphamap_fragment:ku,alphamap_pars_fragment:Bu,alphatest_fragment:zu,alphatest_pars_fragment:Hu,aomap_fragment:Gu,aomap_pars_fragment:Vu,batching_pars_vertex:$u,batching_vertex:Wu,begin_vertex:Xu,beginnormal_vertex:qu,bsdfs:Yu,iridescence_fragment:ju,bumpmap_pars_fragment:Zu,clipping_planes_fragment:Ku,clipping_planes_pars_fragment:Ju,clipping_planes_pars_vertex:Qu,clipping_planes_vertex:ef,color_fragment:tf,color_pars_fragment:nf,color_pars_vertex:sf,color_vertex:af,common:rf,cube_uv_reflection_fragment:of,defaultnormal_vertex:lf,displacementmap_pars_vertex:cf,displacementmap_vertex:hf,emissivemap_fragment:df,emissivemap_pars_fragment:uf,colorspace_fragment:ff,colorspace_pars_fragment:pf,envmap_fragment:mf,envmap_common_pars_fragment:_f,envmap_pars_fragment:gf,envmap_pars_vertex:vf,envmap_physical_pars_fragment:Cf,envmap_vertex:xf,fog_vertex:yf,fog_pars_vertex:bf,fog_fragment:Mf,fog_pars_fragment:Sf,gradientmap_pars_fragment:wf,lightmap_pars_fragment:Ef,lights_lambert_fragment:Tf,lights_lambert_pars_fragment:Af,lights_pars_begin:Rf,lights_toon_fragment:Pf,lights_toon_pars_fragment:Lf,lights_phong_fragment:Df,lights_phong_pars_fragment:Uf,lights_physical_fragment:If,lights_physical_pars_fragment:Nf,lights_fragment_begin:Ff,lights_fragment_maps:Of,lights_fragment_end:kf,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:Hf,logdepthbuf_vertex:Gf,map_fragment:Vf,map_pars_fragment:$f,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:jf,morphcolor_vertex:Zf,morphnormal_vertex:Kf,morphtarget_pars_vertex:Jf,morphtarget_vertex:Qf,normal_fragment_begin:ep,normal_fragment_maps:tp,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:sp,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:lp,iridescence_pars_fragment:cp,opaque_fragment:hp,packing:dp,premultiplied_alpha_fragment:up,project_vertex:fp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:_p,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:xp,shadowmap_vertex:yp,shadowmask_pars_fragment:bp,skinbase_vertex:Mp,skinning_pars_vertex:Sp,skinning_vertex:wp,skinnormal_vertex:Ep,specularmap_fragment:Tp,specularmap_pars_fragment:Ap,tonemapping_fragment:Rp,tonemapping_pars_fragment:Cp,transmission_fragment:Pp,transmission_pars_fragment:Lp,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Ip,worldpos_vertex:Np,background_vert:Fp,background_frag:Op,backgroundCube_vert:kp,backgroundCube_frag:Bp,cube_vert:zp,cube_frag:Hp,depth_vert:Gp,depth_frag:Vp,distanceRGBA_vert:$p,distanceRGBA_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:jp,meshbasic_vert:Zp,meshbasic_frag:Kp,meshlambert_vert:Jp,meshlambert_frag:Qp,meshmatcap_vert:em,meshmatcap_frag:tm,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:am,meshphysical_vert:rm,meshphysical_frag:om,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:dm,shadow_vert:um,shadow_frag:fm,sprite_vert:pm,sprite_frag:mm},Me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},on={basic:{uniforms:Qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Qt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Qt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Qt([Me.points,Me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Qt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Qt([Me.common,Me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Qt([Me.sprite,Me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Qt([Me.common,Me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Qt([Me.lights,Me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};on.physical={uniforms:Qt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ga={r:0,b:0,g:0},Ii=new hi,_m=new Et;function gm(i,e,t,n,s,a,r){const o=new et(0);let l=a===!0?0:1,c,h,u=null,f=0,m=null;function g(R){let E=R.isScene===!0?R.background:null;return E&&E.isTexture&&(E=(R.backgroundBlurriness>0?t:e).get(E)),E}function v(R){let E=!1;const b=g(R);b===null?d(o,l):b&&b.isColor&&(d(b,1),E=!0);const V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,r):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(R,E){const b=g(E);b&&(b.isCubeTexture||b.mapping===vr)?(h===void 0&&(h=new In(new xa(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Hs(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,L,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ii.copy(E.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(Ii)),h.material.toneMapped=st.getTransfer(b.colorSpace)!==pt,(u!==b||f!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,m=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new In(new ya(2,2),new qn({name:"BackgroundMaterial",uniforms:Hs(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=st.getTransfer(b.colorSpace)!==pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,m=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function d(R,E){R.getRGB(Ga,Ch(i)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,E,r)}return{getClearColor:function(){return o},setClearColor:function(R,E=1){o.set(R),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,d(o,l)},render:v,addToRenderList:p}}function vm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let a=s,r=!1;function o(x,P,$,W,Q){let oe=!1;const K=u(W,$,P);a!==K&&(a=K,c(a.object)),oe=m(x,W,$,Q),oe&&g(x,W,$,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(oe||r)&&(r=!1,b(x,P,$,W),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,P,$){const W=$.wireframe===!0;let Q=n[x.id];Q===void 0&&(Q={},n[x.id]=Q);let oe=Q[P.id];oe===void 0&&(oe={},Q[P.id]=oe);let K=oe[W];return K===void 0&&(K=f(l()),oe[W]=K),K}function f(x){const P=[],$=[],W=[];for(let Q=0;Q<t;Q++)P[Q]=0,$[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:$,attributeDivisors:W,object:x,attributes:{},index:null}}function m(x,P,$,W){const Q=a.attributes,oe=P.attributes;let K=0;const se=$.getAttributes();for(const j in se)if(se[j].location>=0){const X=Q[j];let de=oe[j];if(de===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(de=x.instanceColor)),X===void 0||X.attribute!==de||de&&X.data!==de.data)return!0;K++}return a.attributesNum!==K||a.index!==W}function g(x,P,$,W){const Q={},oe=P.attributes;let K=0;const se=$.getAttributes();for(const j in se)if(se[j].location>=0){let X=oe[j];X===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(X=x.instanceColor));const de={};de.attribute=X,X&&X.data&&(de.data=X.data),Q[j]=de,K++}a.attributes=Q,a.attributesNum=K,a.index=W}function v(){const x=a.newAttributes;for(let P=0,$=x.length;P<$;P++)x[P]=0}function p(x){d(x,0)}function d(x,P){const $=a.newAttributes,W=a.enabledAttributes,Q=a.attributeDivisors;$[x]=1,W[x]===0&&(i.enableVertexAttribArray(x),W[x]=1),Q[x]!==P&&(i.vertexAttribDivisor(x,P),Q[x]=P)}function R(){const x=a.newAttributes,P=a.enabledAttributes;for(let $=0,W=P.length;$<W;$++)P[$]!==x[$]&&(i.disableVertexAttribArray($),P[$]=0)}function E(x,P,$,W,Q,oe,K){K===!0?i.vertexAttribIPointer(x,P,$,Q,oe):i.vertexAttribPointer(x,P,$,W,Q,oe)}function b(x,P,$,W){v();const Q=W.attributes,oe=$.getAttributes(),K=P.defaultAttributeValues;for(const se in oe){const j=oe[se];if(j.location>=0){let pe=Q[se];if(pe===void 0&&(se==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),se==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),pe!==void 0){const X=pe.normalized,de=pe.itemSize,Ee=e.get(pe);if(Ee===void 0)continue;const Pe=Ee.buffer,q=Ee.type,te=Ee.bytesPerElement,xe=q===i.INT||q===i.UNSIGNED_INT||pe.gpuType===dl;if(pe.isInterleavedBufferAttribute){const ye=pe.data,Ie=ye.stride,ze=pe.offset;if(ye.isInstancedInterleavedBuffer){for(let Ge=0;Ge<j.locationSize;Ge++)d(j.location+Ge,ye.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ge=0;Ge<j.locationSize;Ge++)p(j.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Ge=0;Ge<j.locationSize;Ge++)E(j.location+Ge,de/j.locationSize,q,X,Ie*te,(ze+de/j.locationSize*Ge)*te,xe)}else{if(pe.isInstancedBufferAttribute){for(let ye=0;ye<j.locationSize;ye++)d(j.location+ye,pe.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ye=0;ye<j.locationSize;ye++)p(j.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let ye=0;ye<j.locationSize;ye++)E(j.location+ye,de/j.locationSize,q,X,de*te,de/j.locationSize*ye*te,xe)}}else if(K!==void 0){const X=K[se];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(j.location,X);break;case 3:i.vertexAttrib3fv(j.location,X);break;case 4:i.vertexAttrib4fv(j.location,X);break;default:i.vertexAttrib1fv(j.location,X)}}}}R()}function V(){D();for(const x in n){const P=n[x];for(const $ in P){const W=P[$];for(const Q in W)h(W[Q].object),delete W[Q];delete P[$]}delete n[x]}}function L(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const $ in P){const W=P[$];for(const Q in W)h(W[Q].object),delete W[Q];delete P[$]}delete n[x.id]}function T(x){for(const P in n){const $=n[P];if($[x.id]===void 0)continue;const W=$[x.id];for(const Q in W)h(W[Q].object),delete W[Q];delete $[x.id]}}function D(){M(),r=!0,a!==s&&(a=s,c(a.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:R}}function xm(i,e,t){let n;function s(c){n=c}function a(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ym(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==Mn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ri&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:R,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:V,maxSamples:L}}function bm(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new Mi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||a&&!p)a?h(null):c();else{const R=a?0:n,E=R*4;let b=d.clippingState||null;l.value=b,b=h(g,f,E,m);for(let V=0;V!==E;++V)b[V]=t[V];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const d=m+v*4,R=f.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,b=m;E!==v;++E,b+=4)r.copy(u[E]).applyMatrix4(R,o),r.normal.toArray(p,b),p[b+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Mm(i){let e=new WeakMap;function t(r,o){return o===Eo?r.mapping=Os:o===To&&(r.mapping=ks),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Eo||o===To)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Du(l.height);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",s),t(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Sm extends Ph{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,ic=[.125,.215,.35,.446,.526,.582],Vi=20,Vr=new Sm,sc=new et;let $r=null,Wr=0,Xr=0,qr=!1;const Hi=(1+Math.sqrt(5))/2,ds=1/Hi,ac=[new I(-Hi,ds,0),new I(Hi,ds,0),new I(-ds,0,Hi),new I(ds,0,Hi),new I(0,Hi,-ds),new I(0,Hi,ds),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){$r=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($r,Wr,Xr),this._renderer.xr.enabled=qr,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$r=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ga,format:Mn,colorSpace:ji,depthBuffer:!1},s=oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wm(a)),this._blurMaterial=Em(a,e,t)}return s}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,Vr)}_sceneToCubeUV(e,t,n,s){const o=new bn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sc),h.toneMapping=Ai,h.autoClear=!1;const m=new Th({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new In(new xa,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(sc),v=!0);for(let d=0;d<6;d++){const R=d%3;R===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):R===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const E=this._cubeSize;Va(s,R*E,d>2?E:0,E,E),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Os||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new In(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Vr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=ac[(s-a-1)%ac.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new In(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),v=a/g,p=isFinite(a)?1+Math.floor(h*v):Vi;p>Vi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vi}`);const d=[];let R=0;for(let T=0;T<Vi;++T){const D=T/v,M=Math.exp(-D*D/2);d.push(M),T===0?R+=M:T<p&&(R+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/R;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const b=this._sizeLods[s],V=3*b*(s>E-ws?s-E+ws:0),L=4*(this._cubeSize-b);Va(t,V,L,3*b,2*b),l.setRenderTarget(t),l.render(u,Vr)}}function wm(i){const e=[],t=[],n=[];let s=i;const a=i-ws+1+ic.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let l=1/o;r>i-ws?l=ic[r-i+ws-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,d=1,R=new Float32Array(v*g*m),E=new Float32Array(p*g*m),b=new Float32Array(d*g*m);for(let L=0;L<m;L++){const T=L%3*2/3-1,D=L>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];R.set(M,v*g*L),E.set(f,p*g*L);const x=[L,L,L,L,L,L];b.set(x,d*g*L)}const V=new wn;V.setAttribute("position",new Fn(R,v)),V.setAttribute("uv",new Fn(E,p)),V.setAttribute("faceIndex",new Fn(b,d)),e.push(V),s>ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function oc(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Em(i,e,t){const n=new Float32Array(Vi),s=new I(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function lc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function cc(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function Tm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Eo||l===To,h=l===Os||l===ks;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new rc(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new rc(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Am(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ha("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rm(i,e,t,n){const s={},a=new WeakMap;function r(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}f.removeEventListener("dispose",r),delete s[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const v=m[g];for(let p=0,d=v.length;p<d;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let v=0;if(m!==null){const R=m.array;v=m.version;for(let E=0,b=R.length;E<b;E+=3){const V=R[E+0],L=R[E+1],T=R[E+2];f.push(V,L,L,T,T,V)}}else if(g!==void 0){const R=g.array;v=g.version;for(let E=0,b=R.length/3-1;E<b;E+=3){const V=E+0,L=E+1,T=E+2;f.push(V,L,L,T,T,V)}}else return;const p=new(Mh(f)?Rh:Ah)(f,1);p.version=v;const d=a.get(u);d&&e.remove(d),a.set(u,p)}function h(u){const f=a.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Cm(i,e,t){let n;function s(f){n=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,m){i.drawElements(n,m,a,f*r),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,a,f*r,g),t.update(m,n,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function u(f,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/r,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,v,0,g);let d=0;for(let R=0;R<g;R++)d+=m[R]*v[R];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lm(i,e,t){const n=new WeakMap,s=new ut;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let b=o.attributes.position.count*E,V=1;b>e.maxTextureSize&&(V=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const L=new Float32Array(b*V*4*u),T=new wh(L,b,V,u);T.type=ri,T.needsUpdate=!0;const D=E*4;for(let x=0;x<u;x++){const P=p[x],$=d[x],W=R[x],Q=b*V*4*x;for(let oe=0;oe<P.count;oe++){const K=oe*D;m===!0&&(s.fromBufferAttribute(P,oe),L[Q+K+0]=s.x,L[Q+K+1]=s.y,L[Q+K+2]=s.z,L[Q+K+3]=0),g===!0&&(s.fromBufferAttribute($,oe),L[Q+K+4]=s.x,L[Q+K+5]=s.y,L[Q+K+6]=s.z,L[Q+K+7]=0),v===!0&&(s.fromBufferAttribute(W,oe),L[Q+K+8]=s.x,L[Q+K+9]=s.y,L[Q+K+10]=s.z,L[Q+K+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new Xe(b,V)},n.set(o,f),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function Dm(i,e,t,n){let s=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}class Ih extends Zt{constructor(e,t,n,s,a,r,o,l,c,h=Ds){if(h!==Ds&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ds&&(n=Xi),n===void 0&&h===zs&&(n=Bs),super(null,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nh=new Zt,hc=new Ih(1,1),Fh=new wh,Oh=new gu,kh=new Lh,dc=[],uc=[],fc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function Xs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=dc[s];if(a===void 0&&(a=new Float32Array(s),dc[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function br(i,e){let t=uc[e];t===void 0&&(t=new Int32Array(e),uc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function Om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;mc.set(n),i.uniformMatrix2fv(this.addr,!1,mc),It(t,n)}}function km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;pc.set(n),i.uniformMatrix3fv(this.addr,!1,pc),It(t,n)}}function Bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;fc.set(n),i.uniformMatrix4fv(this.addr,!1,fc),It(t,n)}}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function $m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function Ym(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(hc.compareFunction=bh,a=hc):a=Nh,t.setTexture2D(e||a,s)}function jm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Oh,s)}function Zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kh,s)}function Km(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fh,s)}function Jm(i){switch(i){case 5126:return Um;case 35664:return Im;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return km;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return Hm;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return $m;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Km}}function Qm(i,e){i.uniform1fv(this.addr,e)}function e0(i,e){const t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function t0(i,e){const t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function n0(i,e){const t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function i0(i,e){const t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s0(i,e){const t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function a0(i,e){const t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r0(i,e){i.uniform1iv(this.addr,e)}function o0(i,e){i.uniform2iv(this.addr,e)}function l0(i,e){i.uniform3iv(this.addr,e)}function c0(i,e){i.uniform4iv(this.addr,e)}function h0(i,e){i.uniform1uiv(this.addr,e)}function d0(i,e){i.uniform2uiv(this.addr,e)}function u0(i,e){i.uniform3uiv(this.addr,e)}function f0(i,e){i.uniform4uiv(this.addr,e)}function p0(i,e,t){const n=this.cache,s=e.length,a=br(t,s);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Nh,a[r])}function m0(i,e,t){const n=this.cache,s=e.length,a=br(t,s);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Oh,a[r])}function _0(i,e,t){const n=this.cache,s=e.length,a=br(t,s);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||kh,a[r])}function g0(i,e,t){const n=this.cache,s=e.length,a=br(t,s);Ut(n,a)||(i.uniform1iv(this.addr,a),It(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Fh,a[r])}function v0(i){switch(i){case 5126:return Qm;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return a0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return d0;case 36295:return u0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return g0}}class x0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jm(t.type)}}class y0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v0(t.type)}}class b0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function _c(i,e){i.seq.push(e),i.map[e.id]=e}function M0(i,e,t){const n=i.name,s=n.length;for(Yr.lastIndex=0;;){const a=Yr.exec(n),r=Yr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){_c(t,c===void 0?new x0(o,i,e):new y0(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new b0(o),_c(t,u)),t=u}}}class cr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);M0(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function gc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const S0=37297;let w0=0;function E0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const vc=new je;function T0(i){st._getMatrix(vc,st.workingColorSpace,i);const e=`mat3( ${vc.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case xr:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+E0(i.getShaderSource(e),r)}else return s}function A0(i,e){const t=T0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function R0(i,e){let t;switch(e){case Rd:t="Linear";break;case Cd:t="Reinhard";break;case Pd:t="Cineon";break;case Ld:t="ACESFilmic";break;case Ud:t="AgX";break;case Id:t="Neutral";break;case Dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $a=new I;function C0(){st.getLuminanceCoefficients($a);const i=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function L0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function D0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function da(i){return i!==""}function yc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(U0,N0)}const I0=new Map;function N0(i,e){let t=Ke[e];if(t===void 0){const n=I0.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}const F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mc(i){return i.replace(F0,O0)}function O0(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Sc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function k0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===od?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function B0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function H0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ch:e="ENVMAP_BLENDING_MULTIPLY";break;case Td:e="ENVMAP_BLENDING_MIX";break;case Ad:e="ENVMAP_BLENDING_ADD";break}return e}function G0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function V0(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=k0(t),c=B0(t),h=z0(t),u=H0(t),f=G0(t),m=P0(t),g=L0(a),v=s.createProgram();let p,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(da).join(`
`),d.length>0&&(d+=`
`)):(p=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),d=[Sc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ai?R0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,A0("linearToOutputTexel",t.outputColorSpace),C0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),r=nl(r),r=yc(r,t),r=bc(r,t),o=nl(o),o=yc(o,t),o=bc(o,t),r=Mc(r),o=Mc(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=R+p+r,b=R+d+o,V=gc(s,s.VERTEX_SHADER,E),L=gc(s,s.FRAGMENT_SHADER,b);s.attachShader(v,V),s.attachShader(v,L),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(P){if(i.debug.checkShaderErrors){const $=s.getProgramInfoLog(v).trim(),W=s.getShaderInfoLog(V).trim(),Q=s.getShaderInfoLog(L).trim();let oe=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,V,L);else{const se=xc(s,V,"vertex"),j=xc(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+se+`
`+j)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||Q==="")&&(K=!1);K&&(P.diagnostics={runnable:oe,programLog:$,vertexShader:{log:W,prefix:p},fragmentShader:{log:Q,prefix:d}})}s.deleteShader(V),s.deleteShader(L),D=new cr(s,v),M=D0(s,v)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,S0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=V,this.fragmentShader=L,this}let $0=0;class W0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new X0(e),t.set(e,n)),n}}class X0{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}}function q0(i,e,t,n,s,a,r){const o=new xl,l=new W0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,x,P,$,W){const Q=$.fog,oe=W.geometry,K=M.isMeshStandardMaterial?$.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),j=se&&se.mapping===vr?se.image.height:null,pe=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const X=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,de=X!==void 0?X.length:0;let Ee=0;oe.morphAttributes.position!==void 0&&(Ee=1),oe.morphAttributes.normal!==void 0&&(Ee=2),oe.morphAttributes.color!==void 0&&(Ee=3);let Pe,q,te,xe;if(pe){const Ve=on[pe];Pe=Ve.vertexShader,q=Ve.fragmentShader}else Pe=M.vertexShader,q=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),xe=l.getFragmentShaderID(M);const ye=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),ze=W.isInstancedMesh===!0,Ge=W.isBatchedMesh===!0,it=!!M.map,Ze=!!M.matcap,ot=!!se,F=!!M.aoMap,fe=!!M.lightMap,me=!!M.bumpMap,_e=!!M.normalMap,ve=!!M.displacementMap,ke=!!M.emissiveMap,Se=!!M.metalnessMap,w=!!M.roughnessMap,_=M.anisotropy>0,z=M.clearcoat>0,C=M.dispersion>0,G=M.iridescence>0,O=M.sheen>0,le=M.transmission>0,ee=_&&!!M.anisotropyMap,ae=z&&!!M.clearcoatMap,ue=z&&!!M.clearcoatNormalMap,ie=z&&!!M.clearcoatRoughnessMap,re=G&&!!M.iridescenceMap,Te=G&&!!M.iridescenceThicknessMap,Re=O&&!!M.sheenColorMap,be=O&&!!M.sheenRoughnessMap,$e=!!M.specularMap,He=!!M.specularColorMap,A=!!M.specularIntensityMap,S=le&&!!M.transmissionMap,N=le&&!!M.thicknessMap,U=!!M.gradientMap,H=!!M.alphaMap,J=M.alphaTest>0,ne=!!M.alphaHash,Ce=!!M.extensions;let Ae=Ai;M.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const Ne={shaderID:pe,shaderType:M.type,shaderName:M.name,vertexShader:Pe,fragmentShader:q,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ge,batchingColor:Ge&&W._colorsTexture!==null,instancing:ze,instancingColor:ze&&W.instanceColor!==null,instancingMorph:ze&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:ji,alphaToCoverage:!!M.alphaToCoverage,map:it,matcap:Ze,envMap:ot,envMapMode:ot&&se.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:fe,bumpMap:me,normalMap:_e,displacementMap:f&&ve,emissiveMap:ke,normalMapObjectSpace:_e&&M.normalMapType===Bd,normalMapTangentSpace:_e&&M.normalMapType===kd,metalnessMap:Se,roughnessMap:w,anisotropy:_,anisotropyMap:ee,clearcoat:z,clearcoatMap:ae,clearcoatNormalMap:ue,clearcoatRoughnessMap:ie,dispersion:C,iridescence:G,iridescenceMap:re,iridescenceThicknessMap:Te,sheen:O,sheenColorMap:Re,sheenRoughnessMap:be,specularMap:$e,specularColorMap:He,specularIntensityMap:A,transmission:le,transmissionMap:S,thicknessMap:N,gradientMap:U,opaque:M.transparent===!1&&M.blending===Ls&&M.alphaToCoverage===!1,alphaMap:H,alphaTest:J,alphaHash:ne,combine:M.combine,mapUv:it&&v(M.map.channel),aoMapUv:F&&v(M.aoMap.channel),lightMapUv:fe&&v(M.lightMap.channel),bumpMapUv:me&&v(M.bumpMap.channel),normalMapUv:_e&&v(M.normalMap.channel),displacementMapUv:ve&&v(M.displacementMap.channel),emissiveMapUv:ke&&v(M.emissiveMap.channel),metalnessMapUv:Se&&v(M.metalnessMap.channel),roughnessMapUv:w&&v(M.roughnessMap.channel),anisotropyMapUv:ee&&v(M.anisotropyMap.channel),clearcoatMapUv:ae&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(M.sheenRoughnessMap.channel),specularMapUv:$e&&v(M.specularMap.channel),specularColorMapUv:He&&v(M.specularColorMap.channel),specularIntensityMapUv:A&&v(M.specularIntensityMap.channel),transmissionMapUv:S&&v(M.transmissionMap.channel),thicknessMapUv:N&&v(M.thicknessMap.channel),alphaMapUv:H&&v(M.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(_e||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!oe.attributes.uv&&(it||H),fog:!!Q,useFog:M.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:W.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ee,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:it&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===pt,decodeVideoTextureEmissive:ke&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vn,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function d(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(R(x,M),E(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function R(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const x=g[M.type];let P;if(x){const $=on[x];P=yl.clone($.uniforms)}else P=M.uniforms;return P}function V(M,x){let P;for(let $=0,W=h.length;$<W;$++){const Q=h[$];if(Q.cacheKey===x){P=Q,++P.usedTimes;break}}return P===void 0&&(P=new V0(i,x,M,a),h.push(P)),P}function L(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:V,releaseProgram:L,releaseShaderCache:T,programs:h,dispose:D}}function Y0(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function j0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ec(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u,f,m,g,v,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=p),e++,d}function o(u,f,m,g,v,p){const d=r(u,f,m,g,v,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,f,m,g,v,p){const d=r(u,f,m,g,v,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||j0),n.length>1&&n.sort(f||wc),s.length>1&&s.sort(f||wc)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function Z0(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Ec,i.set(n,[r])):s>=a.length?(r=new Ec,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function K0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new et};break;case"SpotLight":t={position:new I,direction:new I,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function J0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Q0=0;function e_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function t_(i){const e=new K0,t=J0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,a=new Et,r=new Et;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,v=0,p=0,d=0,R=0,E=0,b=0,V=0,L=0,T=0;c.sort(e_);for(let M=0,x=c.length;M<x;M++){const P=c[M],$=P.color,W=P.intensity,Q=P.distance,oe=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=$.r*W,u+=$.g*W,f+=$.b*W;else if(P.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(P.sh.coefficients[K],W);T++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const se=P.shadow,j=t.get(P);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=oe,n.directionalShadowMatrix[m]=P.shadow.matrix,R++}n.directional[m]=K,m++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy($).multiplyScalar(W),K.distance=Q,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,n.spot[v]=K;const se=P.shadow;if(P.map&&(n.spotLightMap[V]=P.map,V++,se.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[v]=se.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=oe,b++}v++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy($).multiplyScalar(W),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=K,p++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const se=P.shadow,j=t.get(P);j.shadowIntensity=se.intensity,j.shadowBias=se.bias,j.shadowNormalBias=se.normalBias,j.shadowRadius=se.radius,j.shadowMapSize=se.mapSize,j.shadowCameraNear=se.camera.near,j.shadowCameraFar=se.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=oe,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=K,g++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(W),K.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[d]=K,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==p||D.hemiLength!==d||D.numDirectionalShadows!==R||D.numPointShadows!==E||D.numSpotShadows!==b||D.numSpotMaps!==V||D.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+V-L,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=T,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=p,D.hemiLength=d,D.numDirectionalShadows=R,D.numPointShadows=E,D.numSpotShadows=b,D.numSpotMaps=V,D.numLightProbes=T,n.version=Q0++)}function l(c,h){let u=0,f=0,m=0,g=0,v=0;const p=h.matrixWorldInverse;for(let d=0,R=c.length;d<R;d++){const E=c[d];if(E.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(E.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),r.identity(),a.copy(E.matrixWorld),a.premultiply(p),r.extractRotation(a),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),g++}else if(E.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function Tc(i){const e=new t_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function n_(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Tc(i),e.set(s,[o])):a>=r.length?(o=new Tc(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class i_ extends va{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s_ extends va{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const a_=`void main() {
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
}`;function o_(i,e,t){let n=new Dh;const s=new Xe,a=new Xe,r=new ut,o=new i_({depthPacking:Od}),l=new s_,c={},h=t.maxTextureSize,u={[Ri]:ln,[ln]:Ri,[Vn]:Vn},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:a_,fragmentShader:r_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new wn;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new In(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let d=this.type;this.render=function(L,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Ti),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const W=d!==ii&&this.type===ii,Q=d===ii&&this.type!==ii;for(let oe=0,K=L.length;oe<K;oe++){const se=L[oe],j=se.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const pe=j.getFrameExtents();if(s.multiply(pe),a.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/pe.x),s.x=a.x*pe.x,j.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/pe.y),s.y=a.y*pe.y,j.mapSize.y=a.y)),j.map===null||W===!0||Q===!0){const de=this.type!==ii?{minFilter:cn,magFilter:cn}:{};j.map!==null&&j.map.dispose(),j.map=new qi(s.x,s.y,de),j.map.texture.name=se.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const X=j.getViewportCount();for(let de=0;de<X;de++){const Ee=j.getViewport(de);r.set(a.x*Ee.x,a.y*Ee.y,a.x*Ee.z,a.y*Ee.w),$.viewport(r),j.updateMatrices(se,de),n=j.getFrustum(),b(T,D,j.camera,se,this.type)}j.isPointLightShadow!==!0&&this.type===ii&&R(j,D),j.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,x,P)};function R(L,T){const D=e.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new qi(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(T,null,D,f,v,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(T,null,D,m,v,null)}function E(L,T,D,M){let x=null;const P=D.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)x=P;else if(x=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const $=x.uuid,W=T.uuid;let Q=c[$];Q===void 0&&(Q={},c[$]=Q);let oe=Q[W];oe===void 0&&(oe=x.clone(),Q[W]=oe,T.addEventListener("dispose",V)),x=oe}if(x.visible=T.visible,x.wireframe=T.wireframe,M===ii?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=i.properties.get(x);$.light=D}return x}function b(L,T,D,M,x){if(L.visible===!1)return;if(L.layers.test(T.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&x===ii)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,L.matrixWorld);const W=e.update(L),Q=L.material;if(Array.isArray(Q)){const oe=W.groups;for(let K=0,se=oe.length;K<se;K++){const j=oe[K],pe=Q[j.materialIndex];if(pe&&pe.visible){const X=E(L,pe,M,x);L.onBeforeShadow(i,L,T,D,W,X,j),i.renderBufferDirect(D,null,W,X,L,j),L.onAfterShadow(i,L,T,D,W,X,j)}}}else if(Q.visible){const oe=E(L,Q,M,x);L.onBeforeShadow(i,L,T,D,W,oe,null),i.renderBufferDirect(D,null,W,oe,L,null),L.onAfterShadow(i,L,T,D,W,oe,null)}}const $=L.children;for(let W=0,Q=$.length;W<Q;W++)b($[W],T,D,M,x)}function V(L){L.target.removeEventListener("dispose",V);for(const D in c){const M=c[D],x=L.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const l_={[vo]:xo,[yo]:So,[bo]:wo,[Fs]:Mo,[xo]:vo,[So]:yo,[wo]:bo,[Mo]:Fs};function c_(i,e){function t(){let S=!1;const N=new ut;let U=null;const H=new ut(0,0,0,0);return{setMask:function(J){U!==J&&!S&&(i.colorMask(J,J,J,J),U=J)},setLocked:function(J){S=J},setClear:function(J,ne,Ce,Ae,Ne){Ne===!0&&(J*=Ae,ne*=Ae,Ce*=Ae),N.set(J,ne,Ce,Ae),H.equals(N)===!1&&(i.clearColor(J,ne,Ce,Ae),H.copy(N))},reset:function(){S=!1,U=null,H.set(-1,0,0,0)}}}function n(){let S=!1,N=!1,U=null,H=null,J=null;return{setReversed:function(ne){if(N!==ne){const Ce=e.get("EXT_clip_control");N?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const Ae=J;J=null,this.setClear(Ae)}N=ne},getReversed:function(){return N},setTest:function(ne){ne?ye(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(ne){U!==ne&&!S&&(i.depthMask(ne),U=ne)},setFunc:function(ne){if(N&&(ne=l_[ne]),H!==ne){switch(ne){case vo:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case yo:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case bo:i.depthFunc(i.EQUAL);break;case Mo:i.depthFunc(i.GEQUAL);break;case So:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=ne}},setLocked:function(ne){S=ne},setClear:function(ne){J!==ne&&(N&&(ne=1-ne),i.clearDepth(ne),J=ne)},reset:function(){S=!1,U=null,H=null,J=null,N=!1}}}function s(){let S=!1,N=null,U=null,H=null,J=null,ne=null,Ce=null,Ae=null,Ne=null;return{setTest:function(Ve){S||(Ve?ye(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(Ve){N!==Ve&&!S&&(i.stencilMask(Ve),N=Ve)},setFunc:function(Ve,Qe,bt){(U!==Ve||H!==Qe||J!==bt)&&(i.stencilFunc(Ve,Qe,bt),U=Ve,H=Qe,J=bt)},setOp:function(Ve,Qe,bt){(ne!==Ve||Ce!==Qe||Ae!==bt)&&(i.stencilOp(Ve,Qe,bt),ne=Ve,Ce=Qe,Ae=bt)},setLocked:function(Ve){S=Ve},setClear:function(Ve){Ne!==Ve&&(i.clearStencil(Ve),Ne=Ve)},reset:function(){S=!1,N=null,U=null,H=null,J=null,ne=null,Ce=null,Ae=null,Ne=null}}}const a=new t,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],g=null,v=!1,p=null,d=null,R=null,E=null,b=null,V=null,L=null,T=new et(0,0,0),D=0,M=!1,x=null,P=null,$=null,W=null,Q=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,se=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=se>=1):j.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=se>=2);let pe=null,X={};const de=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),Pe=new ut().fromArray(de),q=new ut().fromArray(Ee);function te(S,N,U,H){const J=new Uint8Array(4),ne=i.createTexture();i.bindTexture(S,ne),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<U;Ce++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(N,0,i.RGBA,1,1,H,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(N+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return ne}const xe={};xe[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),r.setFunc(Fs),me(!1),_e(Pl),ye(i.CULL_FACE),F(Ti);function ye(S){h[S]!==!0&&(i.enable(S),h[S]=!0)}function Ie(S){h[S]!==!1&&(i.disable(S),h[S]=!1)}function ze(S,N){return u[S]!==N?(i.bindFramebuffer(S,N),u[S]=N,S===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=N),S===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=N),!0):!1}function Ge(S,N){let U=m,H=!1;if(S){U=f.get(N),U===void 0&&(U=[],f.set(N,U));const J=S.textures;if(U.length!==J.length||U[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ce=J.length;ne<Ce;ne++)U[ne]=i.COLOR_ATTACHMENT0+ne;U.length=J.length,H=!0}}else U[0]!==i.BACK&&(U[0]=i.BACK,H=!0);H&&i.drawBuffers(U)}function it(S){return g!==S?(i.useProgram(S),g=S,!0):!1}const Ze={[Gi]:i.FUNC_ADD,[cd]:i.FUNC_SUBTRACT,[hd]:i.FUNC_REVERSE_SUBTRACT};Ze[dd]=i.MIN,Ze[ud]=i.MAX;const ot={[fd]:i.ZERO,[pd]:i.ONE,[md]:i.SRC_COLOR,[_o]:i.SRC_ALPHA,[bd]:i.SRC_ALPHA_SATURATE,[xd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[_d]:i.ONE_MINUS_SRC_COLOR,[go]:i.ONE_MINUS_SRC_ALPHA,[yd]:i.ONE_MINUS_DST_COLOR,[vd]:i.ONE_MINUS_DST_ALPHA,[Md]:i.CONSTANT_COLOR,[Sd]:i.ONE_MINUS_CONSTANT_COLOR,[wd]:i.CONSTANT_ALPHA,[Ed]:i.ONE_MINUS_CONSTANT_ALPHA};function F(S,N,U,H,J,ne,Ce,Ae,Ne,Ve){if(S===Ti){v===!0&&(Ie(i.BLEND),v=!1);return}if(v===!1&&(ye(i.BLEND),v=!0),S!==ld){if(S!==p||Ve!==M){if((d!==Gi||b!==Gi)&&(i.blendEquation(i.FUNC_ADD),d=Gi,b=Gi),Ve)switch(S){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}R=null,E=null,V=null,L=null,T.set(0,0,0),D=0,p=S,M=Ve}return}J=J||N,ne=ne||U,Ce=Ce||H,(N!==d||J!==b)&&(i.blendEquationSeparate(Ze[N],Ze[J]),d=N,b=J),(U!==R||H!==E||ne!==V||Ce!==L)&&(i.blendFuncSeparate(ot[U],ot[H],ot[ne],ot[Ce]),R=U,E=H,V=ne,L=Ce),(Ae.equals(T)===!1||Ne!==D)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Ne),T.copy(Ae),D=Ne),p=S,M=!1}function fe(S,N){S.side===Vn?Ie(i.CULL_FACE):ye(i.CULL_FACE);let U=S.side===ln;N&&(U=!U),me(U),S.blending===Ls&&S.transparent===!1?F(Ti):F(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),a.setMask(S.colorWrite);const H=S.stencilWrite;o.setTest(H),H&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ke(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(S){x!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),x=S)}function _e(S){S!==ad?(ye(i.CULL_FACE),S!==P&&(S===Pl?i.cullFace(i.BACK):S===rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),P=S}function ve(S){S!==$&&(K&&i.lineWidth(S),$=S)}function ke(S,N,U){S?(ye(i.POLYGON_OFFSET_FILL),(W!==N||Q!==U)&&(i.polygonOffset(N,U),W=N,Q=U)):Ie(i.POLYGON_OFFSET_FILL)}function Se(S){S?ye(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function w(S){S===void 0&&(S=i.TEXTURE0+oe-1),pe!==S&&(i.activeTexture(S),pe=S)}function _(S,N,U){U===void 0&&(pe===null?U=i.TEXTURE0+oe-1:U=pe);let H=X[U];H===void 0&&(H={type:void 0,texture:void 0},X[U]=H),(H.type!==S||H.texture!==N)&&(pe!==U&&(i.activeTexture(U),pe=U),i.bindTexture(S,N||xe[S]),H.type=S,H.texture=N)}function z(){const S=X[pe];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function C(){try{i.compressedTexImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function O(){try{i.texSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ue(){try{i.texStorage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function re(){try{i.texImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Re(S){Pe.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),Pe.copy(S))}function be(S){q.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),q.copy(S))}function $e(S,N){let U=c.get(N);U===void 0&&(U=new WeakMap,c.set(N,U));let H=U.get(S);H===void 0&&(H=i.getUniformBlockIndex(N,S.name),U.set(S,H))}function He(S,N){const H=c.get(N).get(S);l.get(N)!==H&&(i.uniformBlockBinding(N,H,S.__bindingPointIndex),l.set(N,H))}function A(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pe=null,X={},u={},f=new WeakMap,m=[],g=null,v=!1,p=null,d=null,R=null,E=null,b=null,V=null,L=null,T=new et(0,0,0),D=0,M=!1,x=null,P=null,$=null,W=null,Q=null,Pe.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ye,disable:Ie,bindFramebuffer:ze,drawBuffers:Ge,useProgram:it,setBlending:F,setMaterial:fe,setFlipSided:me,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ke,setScissorTest:Se,activeTexture:w,bindTexture:_,unbindTexture:z,compressedTexImage2D:C,compressedTexImage3D:G,texImage2D:re,texImage3D:Te,updateUBOMapping:$e,uniformBlockBinding:He,texStorage2D:ue,texStorage3D:ie,texSubImage2D:O,texSubImage3D:le,compressedTexSubImage2D:ee,compressedTexSubImage3D:ae,scissor:Re,viewport:be,reset:A}}function Ac(i,e,t,n){const s=h_(n);switch(t){case ph:return i*e;case _h:return i*e;case gh:return i*e*2;case vh:return i*e/s.components*s.byteLength;case pl:return i*e/s.components*s.byteLength;case xh:return i*e*2/s.components*s.byteLength;case ml:return i*e*2/s.components*s.byteLength;case mh:return i*e*3/s.components*s.byteLength;case Mn:return i*e*4/s.components*s.byteLength;case _l:return i*e*4/s.components*s.byteLength;case sr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rr:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:case Do:return Math.max(i,16)*Math.max(e,8)/4;case Co:case Lo:return Math.max(i,8)*Math.max(e,8)/2;case Uo:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ko:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lr:case Zo:case Ko:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yh:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qo:case el:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h_(i){switch(i){case Xn:case dh:return{byteLength:1,components:1};case ma:case uh:case ga:return{byteLength:2,components:1};case ul:case fl:return{byteLength:2,components:4};case Xi:case dl:case ri:return{byteLength:4,components:1};case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function d_(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return m?new OffscreenCanvas(w,_):ur("canvas")}function v(w,_,z){let C=1;const G=Se(w);if((G.width>z||G.height>z)&&(C=z/Math.max(G.width,G.height)),C<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const O=Math.floor(C*G.width),le=Math.floor(C*G.height);u===void 0&&(u=g(O,le));const ee=_?g(O,le):u;return ee.width=O,ee.height=le,ee.getContext("2d").drawImage(w,0,0,O,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+O+"x"+le+")."),ee}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),w;return w}function p(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,_,z,C,G=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let O=_;if(_===i.RED&&(z===i.FLOAT&&(O=i.R32F),z===i.HALF_FLOAT&&(O=i.R16F),z===i.UNSIGNED_BYTE&&(O=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(O=i.R8UI),z===i.UNSIGNED_SHORT&&(O=i.R16UI),z===i.UNSIGNED_INT&&(O=i.R32UI),z===i.BYTE&&(O=i.R8I),z===i.SHORT&&(O=i.R16I),z===i.INT&&(O=i.R32I)),_===i.RG&&(z===i.FLOAT&&(O=i.RG32F),z===i.HALF_FLOAT&&(O=i.RG16F),z===i.UNSIGNED_BYTE&&(O=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(O=i.RG8UI),z===i.UNSIGNED_SHORT&&(O=i.RG16UI),z===i.UNSIGNED_INT&&(O=i.RG32UI),z===i.BYTE&&(O=i.RG8I),z===i.SHORT&&(O=i.RG16I),z===i.INT&&(O=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(O=i.RGB8UI),z===i.UNSIGNED_SHORT&&(O=i.RGB16UI),z===i.UNSIGNED_INT&&(O=i.RGB32UI),z===i.BYTE&&(O=i.RGB8I),z===i.SHORT&&(O=i.RGB16I),z===i.INT&&(O=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),z===i.UNSIGNED_INT&&(O=i.RGBA32UI),z===i.BYTE&&(O=i.RGBA8I),z===i.SHORT&&(O=i.RGBA16I),z===i.INT&&(O=i.RGBA32I)),_===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),_===i.RGBA){const le=G?xr:st.getTransfer(C);z===i.FLOAT&&(O=i.RGBA32F),z===i.HALF_FLOAT&&(O=i.RGBA16F),z===i.UNSIGNED_BYTE&&(O=le===pt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function b(w,_){let z;return w?_===null||_===Xi||_===Bs?z=i.DEPTH24_STENCIL8:_===ri?z=i.DEPTH32F_STENCIL8:_===ma&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Xi||_===Bs?z=i.DEPTH_COMPONENT24:_===ri?z=i.DEPTH_COMPONENT32F:_===ma&&(z=i.DEPTH_COMPONENT16),z}function V(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==cn&&w.minFilter!==Un?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function L(w){const _=w.target;_.removeEventListener("dispose",L),D(_),_.isVideoTexture&&h.delete(_)}function T(w){const _=w.target;_.removeEventListener("dispose",T),x(_)}function D(w){const _=n.get(w);if(_.__webglInit===void 0)return;const z=w.source,C=f.get(z);if(C){const G=C[_.__cacheKey];G.usedTimes--,G.usedTimes===0&&M(w),Object.keys(C).length===0&&f.delete(z)}n.remove(w)}function M(w){const _=n.get(w);i.deleteTexture(_.__webglTexture);const z=w.source,C=f.get(z);delete C[_.__cacheKey],r.memory.textures--}function x(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(_.__webglFramebuffer[C]))for(let G=0;G<_.__webglFramebuffer[C].length;G++)i.deleteFramebuffer(_.__webglFramebuffer[C][G]);else i.deleteFramebuffer(_.__webglFramebuffer[C]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[C])}else{if(Array.isArray(_.__webglFramebuffer))for(let C=0;C<_.__webglFramebuffer.length;C++)i.deleteFramebuffer(_.__webglFramebuffer[C]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let C=0;C<_.__webglColorRenderbuffer.length;C++)_.__webglColorRenderbuffer[C]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[C]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=w.textures;for(let C=0,G=z.length;C<G;C++){const O=n.get(z[C]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),r.memory.textures--),n.remove(z[C])}n.remove(w)}let P=0;function $(){P=0}function W(){const w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function Q(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function oe(w,_){const z=n.get(w);if(w.isVideoTexture&&ve(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const C=w.image;if(C===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(C.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,w,_);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function K(w,_){const z=n.get(w);if(w.version>0&&z.__version!==w.version){q(z,w,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function se(w,_){const z=n.get(w);if(w.version>0&&z.__version!==w.version){q(z,w,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function j(w,_){const z=n.get(w);if(w.version>0&&z.__version!==w.version){te(z,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const pe={[Ao]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},X={[cn]:i.NEAREST,[Nd]:i.NEAREST_MIPMAP_NEAREST,[wa]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Mr]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},de={[zd]:i.NEVER,[Xd]:i.ALWAYS,[Hd]:i.LESS,[bh]:i.LEQUAL,[Gd]:i.EQUAL,[Wd]:i.GEQUAL,[Vd]:i.GREATER,[$d]:i.NOTEQUAL};function Ee(w,_){if(_.type===ri&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Un||_.magFilter===Mr||_.magFilter===wa||_.magFilter===ai||_.minFilter===Un||_.minFilter===Mr||_.minFilter===wa||_.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,pe[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,pe[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,pe[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,X[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,X[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,de[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==wa&&_.minFilter!==ai||_.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Pe(w,_){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",L));const C=_.source;let G=f.get(C);G===void 0&&(G={},f.set(C,G));const O=Q(_);if(O!==w.__cacheKey){G[O]===void 0&&(G[O]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,z=!0),G[O].usedTimes++;const le=G[w.__cacheKey];le!==void 0&&(G[w.__cacheKey].usedTimes--,le.usedTimes===0&&M(_)),w.__cacheKey=O,w.__webglTexture=G[O].texture}return z}function q(w,_,z){let C=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(C=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(C=i.TEXTURE_3D);const G=Pe(w,_),O=_.source;t.bindTexture(C,w.__webglTexture,i.TEXTURE0+z);const le=n.get(O);if(O.version!==le.__version||G===!0){t.activeTexture(i.TEXTURE0+z);const ee=st.getPrimaries(st.workingColorSpace),ae=_.colorSpace===$n?null:st.getPrimaries(_.colorSpace),ue=_.colorSpace===$n||ee===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ie=v(_.image,!1,s.maxTextureSize);ie=ke(_,ie);const re=a.convert(_.format,_.colorSpace),Te=a.convert(_.type);let Re=E(_.internalFormat,re,Te,_.colorSpace,_.isVideoTexture);Ee(C,_);let be;const $e=_.mipmaps,He=_.isVideoTexture!==!0,A=le.__version===void 0||G===!0,S=O.dataReady,N=V(_,ie);if(_.isDepthTexture)Re=b(_.format===zs,_.type),A&&(He?t.texStorage2D(i.TEXTURE_2D,1,Re,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Re,ie.width,ie.height,0,re,Te,null));else if(_.isDataTexture)if($e.length>0){He&&A&&t.texStorage2D(i.TEXTURE_2D,N,Re,$e[0].width,$e[0].height);for(let U=0,H=$e.length;U<H;U++)be=$e[U],He?S&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,be.width,be.height,re,Te,be.data):t.texImage2D(i.TEXTURE_2D,U,Re,be.width,be.height,0,re,Te,be.data);_.generateMipmaps=!1}else He?(A&&t.texStorage2D(i.TEXTURE_2D,N,Re,ie.width,ie.height),S&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,re,Te,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Re,ie.width,ie.height,0,re,Te,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&A&&t.texStorage3D(i.TEXTURE_2D_ARRAY,N,Re,$e[0].width,$e[0].height,ie.depth);for(let U=0,H=$e.length;U<H;U++)if(be=$e[U],_.format!==Mn)if(re!==null)if(He){if(S)if(_.layerUpdates.size>0){const J=Ac(be.width,be.height,_.format,_.type);for(const ne of _.layerUpdates){const Ce=be.data.subarray(ne*J/be.data.BYTES_PER_ELEMENT,(ne+1)*J/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,ne,be.width,be.height,1,re,Ce)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,be.width,be.height,ie.depth,re,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,U,Re,be.width,be.height,ie.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?S&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,be.width,be.height,ie.depth,re,Te,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,U,Re,be.width,be.height,ie.depth,0,re,Te,be.data)}else{He&&A&&t.texStorage2D(i.TEXTURE_2D,N,Re,$e[0].width,$e[0].height);for(let U=0,H=$e.length;U<H;U++)be=$e[U],_.format!==Mn?re!==null?He?S&&t.compressedTexSubImage2D(i.TEXTURE_2D,U,0,0,be.width,be.height,re,be.data):t.compressedTexImage2D(i.TEXTURE_2D,U,Re,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?S&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,be.width,be.height,re,Te,be.data):t.texImage2D(i.TEXTURE_2D,U,Re,be.width,be.height,0,re,Te,be.data)}else if(_.isDataArrayTexture)if(He){if(A&&t.texStorage3D(i.TEXTURE_2D_ARRAY,N,Re,ie.width,ie.height,ie.depth),S)if(_.layerUpdates.size>0){const U=Ac(ie.width,ie.height,_.format,_.type);for(const H of _.layerUpdates){const J=ie.data.subarray(H*U/ie.data.BYTES_PER_ELEMENT,(H+1)*U/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,H,ie.width,ie.height,1,re,Te,J)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,re,Te,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,re,Te,ie.data);else if(_.isData3DTexture)He?(A&&t.texStorage3D(i.TEXTURE_3D,N,Re,ie.width,ie.height,ie.depth),S&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,re,Te,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,re,Te,ie.data);else if(_.isFramebufferTexture){if(A)if(He)t.texStorage2D(i.TEXTURE_2D,N,Re,ie.width,ie.height);else{let U=ie.width,H=ie.height;for(let J=0;J<N;J++)t.texImage2D(i.TEXTURE_2D,J,Re,U,H,0,re,Te,null),U>>=1,H>>=1}}else if($e.length>0){if(He&&A){const U=Se($e[0]);t.texStorage2D(i.TEXTURE_2D,N,Re,U.width,U.height)}for(let U=0,H=$e.length;U<H;U++)be=$e[U],He?S&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,re,Te,be):t.texImage2D(i.TEXTURE_2D,U,Re,re,Te,be);_.generateMipmaps=!1}else if(He){if(A){const U=Se(ie);t.texStorage2D(i.TEXTURE_2D,N,Re,U.width,U.height)}S&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Te,ie)}else t.texImage2D(i.TEXTURE_2D,0,Re,re,Te,ie);p(_)&&d(C),le.__version=O.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function te(w,_,z){if(_.image.length!==6)return;const C=Pe(w,_),G=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const O=n.get(G);if(G.version!==O.__version||C===!0){t.activeTexture(i.TEXTURE0+z);const le=st.getPrimaries(st.workingColorSpace),ee=_.colorSpace===$n?null:st.getPrimaries(_.colorSpace),ae=_.colorSpace===$n||le===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ue=_.isCompressedTexture||_.image[0].isCompressedTexture,ie=_.image[0]&&_.image[0].isDataTexture,re=[];for(let H=0;H<6;H++)!ue&&!ie?re[H]=v(_.image[H],!0,s.maxCubemapSize):re[H]=ie?_.image[H].image:_.image[H],re[H]=ke(_,re[H]);const Te=re[0],Re=a.convert(_.format,_.colorSpace),be=a.convert(_.type),$e=E(_.internalFormat,Re,be,_.colorSpace),He=_.isVideoTexture!==!0,A=O.__version===void 0||C===!0,S=G.dataReady;let N=V(_,Te);Ee(i.TEXTURE_CUBE_MAP,_);let U;if(ue){He&&A&&t.texStorage2D(i.TEXTURE_CUBE_MAP,N,$e,Te.width,Te.height);for(let H=0;H<6;H++){U=re[H].mipmaps;for(let J=0;J<U.length;J++){const ne=U[J];_.format!==Mn?Re!==null?He?S&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,J,0,0,ne.width,ne.height,Re,ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,J,$e,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?S&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,J,0,0,ne.width,ne.height,Re,be,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,J,$e,ne.width,ne.height,0,Re,be,ne.data)}}}else{if(U=_.mipmaps,He&&A){U.length>0&&N++;const H=Se(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,N,$e,H.width,H.height)}for(let H=0;H<6;H++)if(ie){He?S&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,re[H].width,re[H].height,Re,be,re[H].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,$e,re[H].width,re[H].height,0,Re,be,re[H].data);for(let J=0;J<U.length;J++){const Ce=U[J].image[H].image;He?S&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,J+1,0,0,Ce.width,Ce.height,Re,be,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,J+1,$e,Ce.width,Ce.height,0,Re,be,Ce.data)}}else{He?S&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Re,be,re[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,$e,Re,be,re[H]);for(let J=0;J<U.length;J++){const ne=U[J];He?S&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,J+1,0,0,Re,be,ne.image[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,J+1,$e,Re,be,ne.image[H])}}}p(_)&&d(i.TEXTURE_CUBE_MAP),O.__version=G.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function xe(w,_,z,C,G,O){const le=a.convert(z.format,z.colorSpace),ee=a.convert(z.type),ae=E(z.internalFormat,le,ee,z.colorSpace),ue=n.get(_),ie=n.get(z);if(ie.__renderTarget=_,!ue.__hasExternalTextures){const re=Math.max(1,_.width>>O),Te=Math.max(1,_.height>>O);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,O,ae,re,Te,_.depth,0,le,ee,null):t.texImage2D(G,O,ae,re,Te,0,le,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,C,G,ie.__webglTexture,0,me(_)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,C,G,ie.__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(w,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const C=_.depthTexture,G=C&&C.isDepthTexture?C.type:null,O=b(_.stencilBuffer,G),le=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=me(_);_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,O,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,O,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,O,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,w)}else{const C=_.textures;for(let G=0;G<C.length;G++){const O=C[G],le=a.convert(O.format,O.colorSpace),ee=a.convert(O.type),ae=E(O.internalFormat,le,ee,O.colorSpace),ue=me(_);z&&_e(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,ae,_.width,_.height):_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,ae,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ae,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const C=n.get(_.depthTexture);C.__renderTarget=_,(!C.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),oe(_.depthTexture,0);const G=C.__webglTexture,O=me(_);if(_.depthTexture.format===Ds)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(_.depthTexture.format===zs)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function ze(w){const _=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const C=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),C){const G=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,C.removeEventListener("dispose",G)};C.addEventListener("dispose",G),_.__depthDisposeCallback=G}_.__boundDepthTexture=C}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ie(_.__webglFramebuffer,w)}else if(z){_.__webglDepthbuffer=[];for(let C=0;C<6;C++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[C]),_.__webglDepthbuffer[C]===void 0)_.__webglDepthbuffer[C]=i.createRenderbuffer(),ye(_.__webglDepthbuffer[C],w,!1);else{const G=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=_.__webglDepthbuffer[C];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,O)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ye(_.__webglDepthbuffer,w,!1);else{const C=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,G)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(w,_,z){const C=n.get(w);_!==void 0&&xe(C.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ze(w)}function it(w){const _=w.texture,z=n.get(w),C=n.get(_);w.addEventListener("dispose",T);const G=w.textures,O=w.isWebGLCubeRenderTarget===!0,le=G.length>1;if(le||(C.__webglTexture===void 0&&(C.__webglTexture=i.createTexture()),C.__version=_.version,r.memory.textures++),O){z.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ee]=[];for(let ae=0;ae<_.mipmaps.length;ae++)z.__webglFramebuffer[ee][ae]=i.createFramebuffer()}else z.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)z.__webglFramebuffer[ee]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(le)for(let ee=0,ae=G.length;ee<ae;ee++){const ue=n.get(G[ee]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),r.memory.textures++)}if(w.samples>0&&_e(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ee=0;ee<G.length;ee++){const ae=G[ee];z.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ee]);const ue=a.convert(ae.format,ae.colorSpace),ie=a.convert(ae.type),re=E(ae.internalFormat,ue,ie,ae.colorSpace,w.isXRRenderTarget===!0),Te=me(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,re,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,z.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)xe(z.__webglFramebuffer[ee][ae],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae);else xe(z.__webglFramebuffer[ee],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ee=0,ae=G.length;ee<ae;ee++){const ue=G[ee],ie=n.get(ue);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Ee(i.TEXTURE_2D,ue),xe(z.__webglFramebuffer,w,ue,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,0),p(ue)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,C.__webglTexture),Ee(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)xe(z.__webglFramebuffer[ae],w,_,i.COLOR_ATTACHMENT0,ee,ae);else xe(z.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,ee,0);p(_)&&d(ee),t.unbindTexture()}w.depthBuffer&&ze(w)}function Ze(w){const _=w.textures;for(let z=0,C=_.length;z<C;z++){const G=_[z];if(p(G)){const O=R(w),le=n.get(G).__webglTexture;t.bindTexture(O,le),d(O),t.unbindTexture()}}}const ot=[],F=[];function fe(w){if(w.samples>0){if(_e(w)===!1){const _=w.textures,z=w.width,C=w.height;let G=i.COLOR_BUFFER_BIT;const O=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(w),ee=_.length>1;if(ee)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const ue=n.get(_[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,z,C,0,0,z,C,G,i.NEAREST),l===!0&&(ot.length=0,F.length=0,ot.push(i.COLOR_ATTACHMENT0+ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ot.push(O),F.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const ue=n.get(_[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function me(w){return Math.min(s.maxSamples,w.samples)}function _e(w){const _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ve(w){const _=r.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function ke(w,_){const z=w.colorSpace,C=w.format,G=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==ji&&z!==$n&&(st.getTransfer(z)===pt?(C!==Mn||G!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=$,this.setTexture2D=oe,this.setTexture2DArray=K,this.setTexture3D=se,this.setTextureCube=j,this.rebindTextures=Ge,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=_e}function u_(i,e){function t(n,s=$n){let a;const r=st.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.BYTE;if(n===uh)return i.SHORT;if(n===ma)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===ga)return i.HALF_FLOAT;if(n===ph)return i.ALPHA;if(n===mh)return i.RGB;if(n===Mn)return i.RGBA;if(n===_h)return i.LUMINANCE;if(n===gh)return i.LUMINANCE_ALPHA;if(n===Ds)return i.DEPTH_COMPONENT;if(n===zs)return i.DEPTH_STENCIL;if(n===vh)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===xh)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===_l)return i.RGBA_INTEGER;if(n===sr||n===ar||n===rr||n===or)if(r===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===sr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===sr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Po||n===Lo||n===Do)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Co)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===Io||n===No)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Uo||n===Io)return r===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===No)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===Oo||n===ko||n===Bo||n===zo||n===Ho||n===Go||n===Vo||n===$o||n===Wo||n===Xo||n===qo||n===Yo||n===jo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Fo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ko)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ho)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Go)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jo)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lr||n===Zo||n===Ko)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===lr)return r===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ko)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yh||n===Jo||n===Qo||n===el)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===lr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class f_ extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Es extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p_={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(p_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Es;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const m_=`
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

}`;class g_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Zt,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qn({vertexShader:m_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new ya(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v_ extends Zi{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const v=new g_,p=t.getContextAttributes();let d=null,R=null;const E=[],b=[],V=new Xe;let L=null;const T=new bn;T.viewport=new ut;const D=new bn;D.viewport=new ut;const M=[T,D],x=new f_;let P=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=E[q];return te===void 0&&(te=new jr,E[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=E[q];return te===void 0&&(te=new jr,E[q]=te),te.getGripSpace()},this.getHand=function(q){let te=E[q];return te===void 0&&(te=new jr,E[q]=te),te.getHandSpace()};function W(q){const te=b.indexOf(q.inputSource);if(te===-1)return;const xe=E[te];xe!==void 0&&(xe.update(q.inputSource,q.frame,c||r),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function Q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",oe);for(let q=0;q<E.length;q++){const te=b[q];te!==null&&(b[q]=null,E[q].disconnect(te))}P=null,$=null,v.reset(),e.setRenderTarget(d),m=null,f=null,u=null,s=null,R=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",oe),p.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(V),s.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new qi(m.framebufferWidth,m.framebufferHeight,{format:Mn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,xe=null,ye=null;p.depth&&(ye=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?zs:Ds,xe=p.stencil?Bs:Xi);const Ie={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:a};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new qi(f.textureWidth,f.textureHeight,{format:Mn,type:Xn,depthTexture:new Ih(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function oe(q){for(let te=0;te<q.removed.length;te++){const xe=q.removed[te],ye=b.indexOf(xe);ye>=0&&(b[ye]=null,E[ye].disconnect(xe))}for(let te=0;te<q.added.length;te++){const xe=q.added[te];let ye=b.indexOf(xe);if(ye===-1){for(let ze=0;ze<E.length;ze++)if(ze>=b.length){b.push(xe),ye=ze;break}else if(b[ze]===null){b[ze]=xe,ye=ze;break}if(ye===-1)break}const Ie=E[ye];Ie&&Ie.connect(xe)}}const K=new I,se=new I;function j(q,te,xe){K.setFromMatrixPosition(te.matrixWorld),se.setFromMatrixPosition(xe.matrixWorld);const ye=K.distanceTo(se),Ie=te.projectionMatrix.elements,ze=xe.projectionMatrix.elements,Ge=Ie[14]/(Ie[10]-1),it=Ie[14]/(Ie[10]+1),Ze=(Ie[9]+1)/Ie[5],ot=(Ie[9]-1)/Ie[5],F=(Ie[8]-1)/Ie[0],fe=(ze[8]+1)/ze[0],me=Ge*F,_e=Ge*fe,ve=ye/(-F+fe),ke=ve*-F;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ke),q.translateZ(ve),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Se=Ge+ve,w=it+ve,_=me-ke,z=_e+(ye-ke),C=Ze*it/w*Se,G=ot*it/w*Se;q.projectionMatrix.makePerspective(_,z,C,G,Se,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function pe(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let te=q.near,xe=q.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(xe=v.depthFar)),x.near=D.near=T.near=te,x.far=D.far=T.far=xe,(P!==x.near||$!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,$=x.far),T.layers.mask=q.layers.mask|2,D.layers.mask=q.layers.mask|4,x.layers.mask=T.layers.mask|D.layers.mask;const ye=q.parent,Ie=x.cameras;pe(x,ye);for(let ze=0;ze<Ie.length;ze++)pe(Ie[ze],ye);Ie.length===2?j(x,T,D):x.projectionMatrix.copy(T.projectionMatrix),X(q,x,ye)};function X(q,te,xe){xe===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=_a*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let de=null;function Ee(q,te){if(h=te.getViewerPose(c||r),g=te,h!==null){const xe=h.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let ye=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,ye=!0);for(let ze=0;ze<xe.length;ze++){const Ge=xe[ze];let it=null;if(m!==null)it=m.getViewport(Ge);else{const ot=u.getViewSubImage(f,Ge);it=ot.viewport,ze===0&&(e.setRenderTargetTextures(R,ot.colorTexture,f.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(R))}let Ze=M[ze];Ze===void 0&&(Ze=new bn,Ze.layers.enable(ze),Ze.viewport=new ut,M[ze]=Ze),Ze.matrix.fromArray(Ge.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Ge.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(it.x,it.y,it.width,it.height),ze===0&&(x.matrix.copy(Ze.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ye===!0&&x.cameras.push(Ze)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const ze=u.getDepthInformation(xe[0]);ze&&ze.isValid&&ze.texture&&v.init(e,ze,s.renderState)}}for(let xe=0;xe<E.length;xe++){const ye=b[xe],Ie=E[xe];ye!==null&&Ie!==void 0&&Ie.update(ye,te,c||r)}de&&de(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Pe=new Uh;Pe.setAnimationLoop(Ee),this.setAnimationLoop=function(q){de=q},this.dispose=function(){}}}const Ni=new hi,x_=new Et;function y_(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Ch(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,R,E,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(p,d):d.isMeshToonMaterial?(a(p,d),u(p,d)):d.isMeshPhongMaterial?(a(p,d),h(p,d)):d.isMeshStandardMaterial?(a(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(a(p,d),g(p,d)):d.isMeshDepthMaterial?a(p,d):d.isMeshDistanceMaterial?(a(p,d),v(p,d)):d.isMeshNormalMaterial?a(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,R,E):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ln&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ln&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const R=e.get(d),E=R.envMap,b=R.envMapRotation;E&&(p.envMap.value=E,Ni.copy(b),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),p.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(Ni)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,R,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*R,p.scale.value=E*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,R){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const R=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b_(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,E){const b=E.program;n.uniformBlockBinding(R,b)}function c(R,E){let b=s[R.id];b===void 0&&(g(R),b=h(R),s[R.id]=b,R.addEventListener("dispose",p));const V=E.program;n.updateUBOMapping(R,V);const L=e.render.frame;a[R.id]!==L&&(f(R),a[R.id]=L)}function h(R){const E=u();R.__bindingPointIndex=E;const b=i.createBuffer(),V=R.__size,L=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,V,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function u(){for(let R=0;R<o;R++)if(r.indexOf(R)===-1)return r.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const E=s[R.id],b=R.uniforms,V=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let L=0,T=b.length;L<T;L++){const D=Array.isArray(b[L])?b[L]:[b[L]];for(let M=0,x=D.length;M<x;M++){const P=D[M];if(m(P,L,M,V)===!0){const $=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let Q=0;for(let oe=0;oe<W.length;oe++){const K=W[oe],se=v(K);typeof K=="number"||typeof K=="boolean"?(P.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,$+Q,P.__data)):K.isMatrix3?(P.__data[0]=K.elements[0],P.__data[1]=K.elements[1],P.__data[2]=K.elements[2],P.__data[3]=0,P.__data[4]=K.elements[3],P.__data[5]=K.elements[4],P.__data[6]=K.elements[5],P.__data[7]=0,P.__data[8]=K.elements[6],P.__data[9]=K.elements[7],P.__data[10]=K.elements[8],P.__data[11]=0):(K.toArray(P.__data,Q),Q+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,E,b,V){const L=R.value,T=E+"_"+b;if(V[T]===void 0)return typeof L=="number"||typeof L=="boolean"?V[T]=L:V[T]=L.clone(),!0;{const D=V[T];if(typeof L=="number"||typeof L=="boolean"){if(D!==L)return V[T]=L,!0}else if(D.equals(L)===!1)return D.copy(L),!0}return!1}function g(R){const E=R.uniforms;let b=0;const V=16;for(let T=0,D=E.length;T<D;T++){const M=Array.isArray(E[T])?E[T]:[E[T]];for(let x=0,P=M.length;x<P;x++){const $=M[x],W=Array.isArray($.value)?$.value:[$.value];for(let Q=0,oe=W.length;Q<oe;Q++){const K=W[Q],se=v(K),j=b%V,pe=j%se.boundary,X=j+pe;b+=pe,X!==0&&V-X<se.storage&&(b+=V-X),$.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=se.storage}}}const L=b%V;return L>0&&(b+=V-L),R.__size=b,R.__cache={},this}function v(R){const E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function p(R){const E=R.target;E.removeEventListener("dispose",p);const b=r.indexOf(E.__bindingPointIndex);r.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function d(){for(const R in s)i.deleteBuffer(s[R]);r=[],s={},a={}}return{bind:l,update:c,dispose:d}}class M_{constructor(e={}){const{canvas:t=cu(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,d=null;const R=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=Ai,this.toneMappingExposure=1;const b=this;let V=!1,L=0,T=0,D=null,M=-1,x=null;const P=new ut,$=new ut;let W=null;const Q=new et(0);let oe=0,K=t.width,se=t.height,j=1,pe=null,X=null;const de=new ut(0,0,K,se),Ee=new ut(0,0,K,se);let Pe=!1;const q=new Dh;let te=!1,xe=!1;const ye=new Et,Ie=new Et,ze=new I,Ge=new ut,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function ot(){return D===null?j:1}let F=n;function fe(y,k){return t.getContext(y,k)}try{const y={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ne,!1),F===null){const k="webgl2";if(F=fe(k,y),F===null)throw fe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let me,_e,ve,ke,Se,w,_,z,C,G,O,le,ee,ae,ue,ie,re,Te,Re,be,$e,He,A,S;function N(){me=new Am(F),me.init(),He=new u_(F,me),_e=new ym(F,me,e,He),ve=new c_(F,me),_e.reverseDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),ke=new Pm(F),Se=new Y0,w=new d_(F,me,ve,Se,_e,He,ke),_=new Mm(b),z=new Tm(b),C=new Nu(F),A=new vm(F,C),G=new Rm(F,C,ke,A),O=new Dm(F,G,C,ke),Re=new Lm(F,_e,w),ie=new bm(Se),le=new q0(b,_,z,me,_e,A,ie),ee=new y_(b,Se),ae=new Z0,ue=new n_(me),Te=new gm(b,_,z,ve,O,m,l),re=new o_(b,O,_e),S=new b_(F,ke,_e,ve),be=new xm(F,me,ke),$e=new Cm(F,me,ke),ke.programs=le.programs,b.capabilities=_e,b.extensions=me,b.properties=Se,b.renderLists=ae,b.shadowMap=re,b.state=ve,b.info=ke}N();const U=new v_(b,F);this.xr=U,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=me.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=me.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(y){y!==void 0&&(j=y,this.setSize(K,se,!1))},this.getSize=function(y){return y.set(K,se)},this.setSize=function(y,k,Y=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,se=k,t.width=Math.floor(y*j),t.height=Math.floor(k*j),Y===!0&&(t.style.width=y+"px",t.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(K*j,se*j).floor()},this.setDrawingBufferSize=function(y,k,Y){K=y,se=k,j=Y,t.width=Math.floor(y*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(de)},this.setViewport=function(y,k,Y,Z){y.isVector4?de.set(y.x,y.y,y.z,y.w):de.set(y,k,Y,Z),ve.viewport(P.copy(de).multiplyScalar(j).round())},this.getScissor=function(y){return y.copy(Ee)},this.setScissor=function(y,k,Y,Z){y.isVector4?Ee.set(y.x,y.y,y.z,y.w):Ee.set(y,k,Y,Z),ve.scissor($.copy(Ee).multiplyScalar(j).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(y){ve.setScissorTest(Pe=y)},this.setOpaqueSort=function(y){pe=y},this.setTransparentSort=function(y){X=y},this.getClearColor=function(y){return y.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(y=!0,k=!0,Y=!0){let Z=0;if(y){let B=!1;if(D!==null){const ge=D.texture.format;B=ge===_l||ge===ml||ge===pl}if(B){const ge=D.texture.type,we=ge===Xn||ge===Xi||ge===ma||ge===Bs||ge===ul||ge===fl,Le=Te.getClearColor(),De=Te.getClearAlpha(),We=Le.r,qe=Le.g,Ue=Le.b;we?(g[0]=We,g[1]=qe,g[2]=Ue,g[3]=De,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=We,v[1]=qe,v[2]=Ue,v[3]=De,F.clearBufferiv(F.COLOR,0,v))}else Z|=F.COLOR_BUFFER_BIT}k&&(Z|=F.DEPTH_BUFFER_BIT),Y&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),ae.dispose(),ue.dispose(),Se.dispose(),_.dispose(),z.dispose(),O.dispose(),A.dispose(),S.dispose(),le.dispose(),U.dispose(),U.removeEventListener("sessionstart",$t),U.removeEventListener("sessionend",vt),Wt.stop()};function H(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const y=ke.autoReset,k=re.enabled,Y=re.autoUpdate,Z=re.needsUpdate,B=re.type;N(),ke.autoReset=y,re.enabled=k,re.autoUpdate=Y,re.needsUpdate=Z,re.type=B}function ne(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ce(y){const k=y.target;k.removeEventListener("dispose",Ce),Ae(k)}function Ae(y){Ne(y),Se.remove(y)}function Ne(y){const k=Se.get(y).programs;k!==void 0&&(k.forEach(function(Y){le.releaseProgram(Y)}),y.isShaderMaterial&&le.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,Y,Z,B,ge){k===null&&(k=it);const we=B.isMesh&&B.matrixWorld.determinant()<0,Le=ed(y,k,Y,Z,B);ve.setMaterial(Z,we);let De=Y.index,We=1;if(Z.wireframe===!0){if(De=G.getWireframeAttribute(Y),De===void 0)return;We=2}const qe=Y.drawRange,Ue=Y.attributes.position;let rt=qe.start*We,xt=(qe.start+qe.count)*We;ge!==null&&(rt=Math.max(rt,ge.start*We),xt=Math.min(xt,(ge.start+ge.count)*We)),De!==null?(rt=Math.max(rt,0),xt=Math.min(xt,De.count)):Ue!=null&&(rt=Math.max(rt,0),xt=Math.min(xt,Ue.count));const Mt=xt-rt;if(Mt<0||Mt===1/0)return;A.setup(B,Z,Le,Y,De);let nn,lt=be;if(De!==null&&(nn=C.get(De),lt=$e,lt.setIndex(nn)),B.isMesh)Z.wireframe===!0?(ve.setLineWidth(Z.wireframeLinewidth*ot()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(B.isLine){let Oe=Z.linewidth;Oe===void 0&&(Oe=1),ve.setLineWidth(Oe*ot()),B.isLineSegments?lt.setMode(F.LINES):B.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else B.isPoints?lt.setMode(F.POINTS):B.isSprite&&lt.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Oe=B._multiDrawStarts,Yn=B._multiDrawCounts,ct=B._multiDrawCount,En=De?C.get(De).bytesPerElement:1,Ki=Se.get(Z).currentProgram.getUniforms();for(let dn=0;dn<ct;dn++)Ki.setValue(F,"_gl_DrawID",dn),lt.render(Oe[dn]/En,Yn[dn])}else if(B.isInstancedMesh)lt.renderInstances(rt,Mt,B.count);else if(Y.isInstancedBufferGeometry){const Oe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Yn=Math.min(Y.instanceCount,Oe);lt.renderInstances(rt,Mt,Yn)}else lt.render(rt,Mt)};function Ve(y,k,Y){y.transparent===!0&&y.side===Vn&&y.forceSinglePass===!1?(y.side=ln,y.needsUpdate=!0,Sa(y,k,Y),y.side=Ri,y.needsUpdate=!0,Sa(y,k,Y),y.side=Vn):Sa(y,k,Y)}this.compile=function(y,k,Y=null){Y===null&&(Y=y),d=ue.get(Y),d.init(k),E.push(d),Y.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),y!==Y&&y.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const Z=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ge=B.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Le=ge[we];Ve(Le,Y,B),Z.add(Le)}else Ve(ge,Y,B),Z.add(ge)}),E.pop(),d=null,Z},this.compileAsync=function(y,k,Y=null){const Z=this.compile(y,k,Y);return new Promise(B=>{function ge(){if(Z.forEach(function(we){Se.get(we).currentProgram.isReady()&&Z.delete(we)}),Z.size===0){B(y);return}setTimeout(ge,10)}me.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Qe=null;function bt(y){Qe&&Qe(y)}function $t(){Wt.stop()}function vt(){Wt.start()}const Wt=new Uh;Wt.setAnimationLoop(bt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(y){Qe=y,U.setAnimationLoop(y),y===null?Wt.stop():Wt.start()},U.addEventListener("sessionstart",$t),U.addEventListener("sessionend",vt),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(k),k=U.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,k,D),d=ue.get(y,E.length),d.init(k),E.push(d),Ie.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(Ie),xe=this.localClippingEnabled,te=ie.init(this.clippingPlanes,xe),p=ae.get(y,R.length),p.init(),R.push(p),U.enabled===!0&&U.isPresenting===!0){const ge=b.xr.getDepthSensingMesh();ge!==null&&_t(ge,k,-1/0,b.sortObjects)}_t(y,k,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(pe,X),Ze=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Ze&&Te.addToRenderList(p,y),this.info.render.frame++,te===!0&&ie.beginShadows();const Y=d.state.shadowsArray;re.render(Y,y,k),te===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=p.opaque,B=p.transmissive;if(d.setupLights(),k.isArrayCamera){const ge=k.cameras;if(B.length>0)for(let we=0,Le=ge.length;we<Le;we++){const De=ge[we];wt(Z,B,y,De)}Ze&&Te.render(y);for(let we=0,Le=ge.length;we<Le;we++){const De=ge[we];tn(p,y,De,De.viewport)}}else B.length>0&&wt(Z,B,y,k),Ze&&Te.render(y),tn(p,y,k);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(b,y,k),A.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(d=E[E.length-1],te===!0&&ie.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?p=R[R.length-1]:p=null};function _t(y,k,Y,Z){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){Z&&Ge.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ie);const we=O.update(y),Le=y.material;Le.visible&&p.push(y,we,Le,Y,Ge.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const we=O.update(y),Le=y.material;if(Z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ge.copy(y.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ge.copy(we.boundingSphere.center)),Ge.applyMatrix4(y.matrixWorld).applyMatrix4(Ie)),Array.isArray(Le)){const De=we.groups;for(let We=0,qe=De.length;We<qe;We++){const Ue=De[We],rt=Le[Ue.materialIndex];rt&&rt.visible&&p.push(y,we,rt,Y,Ge.z,Ue)}}else Le.visible&&p.push(y,we,Le,Y,Ge.z,null)}}const ge=y.children;for(let we=0,Le=ge.length;we<Le;we++)_t(ge[we],k,Y,Z)}function tn(y,k,Y,Z){const B=y.opaque,ge=y.transmissive,we=y.transparent;d.setupLightsView(Y),te===!0&&ie.setGlobalState(b.clippingPlanes,Y),Z&&ve.viewport(P.copy(Z)),B.length>0&&Ci(B,k,Y),ge.length>0&&Ci(ge,k,Y),we.length>0&&Ci(we,k,Y),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function wt(y,k,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Z.id]===void 0&&(d.state.transmissionRenderTarget[Z.id]=new qi(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?ga:Xn,minFilter:ai,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ge=d.state.transmissionRenderTarget[Z.id],we=Z.viewport||P;ge.setSize(we.z,we.w);const Le=b.getRenderTarget();b.setRenderTarget(ge),b.getClearColor(Q),oe=b.getClearAlpha(),oe<1&&b.setClearColor(16777215,.5),b.clear(),Ze&&Te.render(Y);const De=b.toneMapping;b.toneMapping=Ai;const We=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),d.setupLightsView(Z),te===!0&&ie.setGlobalState(b.clippingPlanes,Z),Ci(y,Y,Z),w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge),me.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ue=0,rt=k.length;Ue<rt;Ue++){const xt=k[Ue],Mt=xt.object,nn=xt.geometry,lt=xt.material,Oe=xt.group;if(lt.side===Vn&&Mt.layers.test(Z.layers)){const Yn=lt.side;lt.side=ln,lt.needsUpdate=!0,Ma(Mt,Y,Z,nn,lt,Oe),lt.side=Yn,lt.needsUpdate=!0,qe=!0}}qe===!0&&(w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge))}b.setRenderTarget(Le),b.setClearColor(Q,oe),We!==void 0&&(Z.viewport=We),b.toneMapping=De}function Ci(y,k,Y){const Z=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ge=y.length;B<ge;B++){const we=y[B],Le=we.object,De=we.geometry,We=Z===null?we.material:Z,qe=we.group;Le.layers.test(Y.layers)&&Ma(Le,k,Y,De,We,qe)}}function Ma(y,k,Y,Z,B,ge){y.onBeforeRender(b,k,Y,Z,B,ge),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(b,k,Y,Z,y,ge),B.transparent===!0&&B.side===Vn&&B.forceSinglePass===!1?(B.side=ln,B.needsUpdate=!0,b.renderBufferDirect(Y,k,Z,B,y,ge),B.side=Ri,B.needsUpdate=!0,b.renderBufferDirect(Y,k,Z,B,y,ge),B.side=Vn):b.renderBufferDirect(Y,k,Z,B,y,ge),y.onAfterRender(b,k,Y,Z,B,ge)}function Sa(y,k,Y){k.isScene!==!0&&(k=it);const Z=Se.get(y),B=d.state.lights,ge=d.state.shadowsArray,we=B.state.version,Le=le.getParameters(y,B.state,ge,k,Y),De=le.getProgramCacheKey(Le);let We=Z.programs;Z.environment=y.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(y.isMeshStandardMaterial?z:_).get(y.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,We===void 0&&(y.addEventListener("dispose",Ce),We=new Map,Z.programs=We);let qe=We.get(De);if(qe!==void 0){if(Z.currentProgram===qe&&Z.lightsStateVersion===we)return Rl(y,Le),qe}else Le.uniforms=le.getUniforms(y),y.onBeforeCompile(Le,b),qe=le.acquireProgram(Le,De),We.set(De,qe),Z.uniforms=Le.uniforms;const Ue=Z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ue.clippingPlanes=ie.uniform),Rl(y,Le),Z.needsLights=nd(y),Z.lightsStateVersion=we,Z.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=qe,Z.uniformsList=null,qe}function Al(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=cr.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function Rl(y,k){const Y=Se.get(y);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function ed(y,k,Y,Z,B){k.isScene!==!0&&(k=it),w.resetTextureUnits();const ge=k.fog,we=Z.isMeshStandardMaterial?k.environment:null,Le=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ji,De=(Z.isMeshStandardMaterial?z:_).get(Z.envMap||we),We=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qe=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ue=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,xt=!!Y.morphAttributes.color;let Mt=Ai;Z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Mt=b.toneMapping);const nn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,lt=nn!==void 0?nn.length:0,Oe=Se.get(Z),Yn=d.state.lights;if(te===!0&&(xe===!0||y!==x)){const mn=y===x&&Z.id===M;ie.setState(Z,y,mn)}let ct=!1;Z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Yn.state.version||Oe.outputColorSpace!==Le||B.isBatchedMesh&&Oe.batching===!1||!B.isBatchedMesh&&Oe.batching===!0||B.isBatchedMesh&&Oe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Oe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Oe.instancing===!1||!B.isInstancedMesh&&Oe.instancing===!0||B.isSkinnedMesh&&Oe.skinning===!1||!B.isSkinnedMesh&&Oe.skinning===!0||B.isInstancedMesh&&Oe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Oe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Oe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Oe.instancingMorph===!1&&B.morphTexture!==null||Oe.envMap!==De||Z.fog===!0&&Oe.fog!==ge||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ie.numPlanes||Oe.numIntersection!==ie.numIntersection)||Oe.vertexAlphas!==We||Oe.vertexTangents!==qe||Oe.morphTargets!==Ue||Oe.morphNormals!==rt||Oe.morphColors!==xt||Oe.toneMapping!==Mt||Oe.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,Oe.__version=Z.version);let En=Oe.currentProgram;ct===!0&&(En=Sa(Z,k,B));let Ki=!1,dn=!1,Ys=!1;const St=En.getUniforms(),kn=Oe.uniforms;if(ve.useProgram(En.program)&&(Ki=!0,dn=!0,Ys=!0),Z.id!==M&&(M=Z.id,dn=!0),Ki||x!==y){ve.buffers.depth.getReversed()?(ye.copy(y.projectionMatrix),du(ye),uu(ye),St.setValue(F,"projectionMatrix",ye)):St.setValue(F,"projectionMatrix",y.projectionMatrix),St.setValue(F,"viewMatrix",y.matrixWorldInverse);const di=St.map.cameraPosition;di!==void 0&&di.setValue(F,ze.setFromMatrixPosition(y.matrixWorld)),_e.logarithmicDepthBuffer&&St.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&St.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,dn=!0,Ys=!0)}if(B.isSkinnedMesh){St.setOptional(F,B,"bindMatrix"),St.setOptional(F,B,"bindMatrixInverse");const mn=B.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),St.setValue(F,"boneTexture",mn.boneTexture,w))}B.isBatchedMesh&&(St.setOptional(F,B,"batchingTexture"),St.setValue(F,"batchingTexture",B._matricesTexture,w),St.setOptional(F,B,"batchingIdTexture"),St.setValue(F,"batchingIdTexture",B._indirectTexture,w),St.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&St.setValue(F,"batchingColorTexture",B._colorsTexture,w));const js=Y.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&Re.update(B,Y,En),(dn||Oe.receiveShadow!==B.receiveShadow)&&(Oe.receiveShadow=B.receiveShadow,St.setValue(F,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(kn.envMap.value=De,kn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(kn.envMapIntensity.value=k.environmentIntensity),dn&&(St.setValue(F,"toneMappingExposure",b.toneMappingExposure),Oe.needsLights&&td(kn,Ys),ge&&Z.fog===!0&&ee.refreshFogUniforms(kn,ge),ee.refreshMaterialUniforms(kn,Z,j,se,d.state.transmissionRenderTarget[y.id]),cr.upload(F,Al(Oe),kn,w)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(cr.upload(F,Al(Oe),kn,w),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&St.setValue(F,"center",B.center),St.setValue(F,"modelViewMatrix",B.modelViewMatrix),St.setValue(F,"normalMatrix",B.normalMatrix),St.setValue(F,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const mn=Z.uniformsGroups;for(let di=0,ui=mn.length;di<ui;di++){const Cl=mn[di];S.update(Cl,En),S.bind(Cl,En)}}return En}function td(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function nd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,k,Y){Se.get(y.texture).__webglTexture=k,Se.get(y.depthTexture).__webglTexture=Y;const Z=Se.get(y);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,k){const Y=Se.get(y);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,Y=0){D=y,L=k,T=Y;let Z=!0,B=null,ge=!1,we=!1;if(y){const De=Se.get(y);if(De.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(F.FRAMEBUFFER,null),Z=!1;else if(De.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(De.__hasExternalTextures)w.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ue=y.depthTexture;if(De.__boundDepthTexture!==Ue){if(Ue!==null&&Se.has(Ue)&&(y.width!==Ue.image.width||y.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const We=y.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const qe=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(qe[k])?B=qe[k][Y]:B=qe[k],ge=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?B=Se.get(y).__webglMultisampledFramebuffer:Array.isArray(qe)?B=qe[Y]:B=qe,P.copy(y.viewport),$.copy(y.scissor),W=y.scissorTest}else P.copy(de).multiplyScalar(j).floor(),$.copy(Ee).multiplyScalar(j).floor(),W=Pe;if(ve.bindFramebuffer(F.FRAMEBUFFER,B)&&Z&&ve.drawBuffers(y,B),ve.viewport(P),ve.scissor($),ve.setScissorTest(W),ge){const De=Se.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,Y)}else if(we){const De=Se.get(y.texture),We=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.__webglTexture,Y||0,We)}M=-1},this.readRenderTargetPixels=function(y,k,Y,Z,B,ge,we){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){ve.bindFramebuffer(F.FRAMEBUFFER,Le);try{const De=y.texture,We=De.format,qe=De.type;if(!_e.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-Z&&Y>=0&&Y<=y.height-B&&F.readPixels(k,Y,Z,B,He.convert(We),He.convert(qe),ge)}finally{const De=D!==null?Se.get(D).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(y,k,Y,Z,B,ge,we){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){const De=y.texture,We=De.format,qe=De.type;if(!_e.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=y.width-Z&&Y>=0&&Y<=y.height-B){ve.bindFramebuffer(F.FRAMEBUFFER,Le);const Ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ue),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),F.readPixels(k,Y,Z,B,He.convert(We),He.convert(qe),0);const rt=D!==null?Se.get(D).__webglFramebuffer:null;ve.bindFramebuffer(F.FRAMEBUFFER,rt);const xt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await hu(F,xt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.deleteBuffer(Ue),F.deleteSync(xt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,k=null,Y=0){y.isTexture!==!0&&(ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,y=arguments[1]);const Z=Math.pow(2,-Y),B=Math.floor(y.image.width*Z),ge=Math.floor(y.image.height*Z),we=k!==null?k.x:0,Le=k!==null?k.y:0;w.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,we,Le,B,ge),ve.unbindTexture()},this.copyTextureToTexture=function(y,k,Y=null,Z=null,B=0){y.isTexture!==!0&&(ha("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,y=arguments[1],k=arguments[2],B=arguments[3]||0,Y=null);let ge,we,Le,De,We,qe,Ue,rt,xt;const Mt=y.isCompressedTexture?y.mipmaps[B]:y.image;Y!==null?(ge=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,De=Y.min.x,We=Y.min.y,qe=Y.isBox3?Y.min.z:0):(ge=Mt.width,we=Mt.height,Le=Mt.depth||1,De=0,We=0,qe=0),Z!==null?(Ue=Z.x,rt=Z.y,xt=Z.z):(Ue=0,rt=0,xt=0);const nn=He.convert(k.format),lt=He.convert(k.type);let Oe;k.isData3DTexture?(w.setTexture3D(k,0),Oe=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(w.setTexture2DArray(k,0),Oe=F.TEXTURE_2D_ARRAY):(w.setTexture2D(k,0),Oe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Yn=F.getParameter(F.UNPACK_ROW_LENGTH),ct=F.getParameter(F.UNPACK_IMAGE_HEIGHT),En=F.getParameter(F.UNPACK_SKIP_PIXELS),Ki=F.getParameter(F.UNPACK_SKIP_ROWS),dn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,De),F.pixelStorei(F.UNPACK_SKIP_ROWS,We),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qe);const Ys=y.isDataArrayTexture||y.isData3DTexture,St=k.isDataArrayTexture||k.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const kn=Se.get(y),js=Se.get(k),mn=Se.get(kn.__renderTarget),di=Se.get(js.__renderTarget);ve.bindFramebuffer(F.READ_FRAMEBUFFER,mn.__webglFramebuffer),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let ui=0;ui<Le;ui++)Ys&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.get(y).__webglTexture,B,qe+ui),y.isDepthTexture?(St&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.get(k).__webglTexture,B,xt+ui),F.blitFramebuffer(De,We,ge,we,Ue,rt,ge,we,F.DEPTH_BUFFER_BIT,F.NEAREST)):St?F.copyTexSubImage3D(Oe,B,Ue,rt,xt+ui,De,We,ge,we):F.copyTexSubImage2D(Oe,B,Ue,rt,xt+ui,De,We,ge,we);ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else St?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(Oe,B,Ue,rt,xt,ge,we,Le,nn,lt,Mt.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Oe,B,Ue,rt,xt,ge,we,Le,nn,Mt.data):F.texSubImage3D(Oe,B,Ue,rt,xt,ge,we,Le,nn,lt,Mt):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,Ue,rt,ge,we,nn,lt,Mt.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,Ue,rt,Mt.width,Mt.height,nn,Mt.data):F.texSubImage2D(F.TEXTURE_2D,B,Ue,rt,ge,we,nn,lt,Mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Yn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct),F.pixelStorei(F.UNPACK_SKIP_PIXELS,En),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ki),F.pixelStorei(F.UNPACK_SKIP_IMAGES,dn),B===0&&k.generateMipmaps&&F.generateMipmap(Oe),ve.unbindTexture()},this.copyTextureToTexture3D=function(y,k,Y=null,Z=null,B=0){return y.isTexture!==!0&&(ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,y=arguments[2],k=arguments[3],B=arguments[4]||0),ha('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,k,Y,Z,B)},this.initRenderTarget=function(y){Se.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),ve.unbindTexture()},this.resetState=function(){L=0,T=0,D=null,ve.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class S_ extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class w_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tl,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new I;class wi{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),a=dt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class E_ extends Zt{constructor(e=null,t=1,n=1,s,a,r,o,l,c=cn,h=cn,u,f){super(null,r,o,l,c,h,s,a,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml extends va{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fr=new I,pr=new I,Rc=new Et,ea=new yr,Wa=new Ws,Zr=new I,Cc=new I;class Bh extends hn{constructor(e=new wn,t=new Ml){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)fr.fromBufferAttribute(t,s-1),pr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fr.distanceTo(pr);e.setAttribute("lineDistance",new On(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=a,e.ray.intersectsSphere(Wa)===!1)return;Rc.copy(s).invert(),ea.copy(e.ray).applyMatrix4(Rc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=m,p=g-1;v<p;v+=c){const d=h.getX(v),R=h.getX(v+1),E=Xa(this,e,ea,l,d,R);E&&t.push(E)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(m),d=Xa(this,e,ea,l,v,p);d&&t.push(d)}}else{const m=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let v=m,p=g-1;v<p;v+=c){const d=Xa(this,e,ea,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=Xa(this,e,ea,l,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Xa(i,e,t,n,s,a){const r=i.geometry.attributes.position;if(fr.fromBufferAttribute(r,s),pr.fromBufferAttribute(r,a),t.distanceSqToSegment(fr,pr,Zr,Cc)>n)return;Zr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Zr);if(!(l<e.near||l>e.far))return{distance:l,point:Cc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class zh extends Bh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class T_ extends wn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new I,a=new I;if(e.index!==null){const r=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,m=u.count;for(let g=f,v=f+m;g<v;g+=3)for(let p=0;p<3;p++){const d=o.getX(g+p),R=o.getX(g+(p+1)%3);s.fromBufferAttribute(r,d),a.fromBufferAttribute(r,R),Pc(s,a,n)===!0&&(t.push(s.x,s.y,s.z),t.push(a.x,a.y,a.z))}}}else{const r=e.attributes.position;for(let o=0,l=r.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(r,h),a.fromBufferAttribute(r,u),Pc(s,a,n)===!0&&(t.push(s.x,s.y,s.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new On(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Pc(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}class A_ extends wn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class il extends w_{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Lc=new Et;class R_{constructor(e,t,n=0,s=1/0){this.ray=new yr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lc),this}intersectObject(e,t=!0,n=[]){return sl(e,this,n,t),n.sort(Dc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)sl(e[s],this,n,t);return n.sort(Dc),n}}function Dc(i,e){return i.distance-e.distance}function sl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)sl(a[r],e,t,!0)}}class Uc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ic=new I,qa=new I;class C_{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ic.subVectors(e,this.start),qa.subVectors(this.end,this.start);const n=qa.dot(qa);let a=qa.dot(Ic)/n;return t&&(a=Vt(a,0,1)),a}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class P_ extends Zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");const Nc={type:"change"},Sl={type:"start"},Hh={type:"end"},Ya=new yr,Fc=new Mi,L_=Math.cos(70*vl.DEG2RAD),Lt=new I,sn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kr=1e-6;class D_ extends P_{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Yi,this._lastTargetPosition=new I,this._quat=new Yi().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uc,this._sphericalDelta=new Uc,this._scale=1,this._panOffset=new I,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new I,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=I_.bind(this),this._onPointerDown=U_.bind(this),this._onPointerUp=N_.bind(this),this._onContextMenu=G_.bind(this),this._onMouseWheel=k_.bind(this),this._onKeyDown=B_.bind(this),this._onTouchStart=z_.bind(this),this._onTouchMove=H_.bind(this),this._onMouseDown=F_.bind(this),this._onMouseMove=O_.bind(this),this._interceptControlDown=V_.bind(this),this._interceptControlUp=$_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nc),this.update(),this.state=mt.NONE}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Lt.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Ya.origin.copy(this.object.position),Ya.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ya.direction))<L_?this.object.lookAt(this.target):(Fc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ya.intersectPlane(Fc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Kr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kr||this._lastTargetPosition.distanceToSquared(this.target)>Kr?(this.dispatchEvent(Nc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Lt.copy(s).sub(this.target);let a=Lt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,r=n.width,o=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function U_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function I_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function N_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hh),this.state=mt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function F_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=mt.DOLLY;break;case Ps.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}break;case Ps.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Sl)}function O_(i){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function k_(i){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(i.preventDefault(),this.dispatchEvent(Sl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hh))}function B_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function z_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=mt.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=mt.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Sl)}function H_(i){switch(this._trackPointer(i),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=mt.NONE}}function G_(i){this.enabled!==!1&&i.preventDefault()}function V_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const W_=i=>getComputedStyle(document.documentElement).getPropertyValue(i).trim();function Oc(){const i=e=>new et(W_(e));return{bg:i("--stage"),neg:i("--neg"),pos:i("--pos"),zero:i("--zero"),grid:i("--cell-line"),empty:i("--empty"),hi:i("--ink"),fill:i("--flow"),frame:i("--frame"),accent:i("--accent")}}class X_{constructor(e,t,n){Ye(this,"renderer");Ye(this,"scene",new S_);Ye(this,"camera",new bn(30,1,1,8e3));Ye(this,"controls");Ye(this,"sheets",[]);Ye(this,"labels",[]);Ye(this,"resized",[]);Ye(this,"themed",[]);Ye(this,"lines",[]);Ye(this,"theme");Ye(this,"onHover",()=>{});Ye(this,"onTick",()=>{});Ye(this,"stage");Ye(this,"labelLayer");Ye(this,"ray",new R_);Ye(this,"pointer",null);Ye(this,"pointerMoved",!1);Ye(this,"dirty",3);Ye(this,"last",performance.now());Ye(this,"fly",null);Ye(this,"framed",null);Ye(this,"userMoved",!1);this.stage=e,this.labelLayer=n,st.enabled=!1,this.renderer=new M_({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=ji,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.theme=Oc(),this.scene.background=this.theme.bg.clone(),this.controls=new D_(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.zoomToCursor=!0,this.controls.minDistance=8,this.controls.maxDistance=3200,this.controls.addEventListener("start",()=>{this.fly=null,this.userMoved=!0}),this.controls.addEventListener("change",()=>this.touch()),t.addEventListener("pointermove",s=>this.setPointer(s)),t.addEventListener("pointerdown",s=>this.setPointer(s)),t.addEventListener("pointerleave",()=>{this.pointer=null,this.onHover(null)}),new ResizeObserver(()=>this.resize()).observe(e),this.resize(),requestAnimationFrame(()=>this.loop())}add(e){e.setTheme(this.theme),this.sheets.push(e),this.scene.add(e.group)}addLabel(e,t,n,s=""){const a=document.createElement("div");return a.className=`label ${s}`.trim(),a.innerHTML=e,this.labelLayer.append(a),this.labels.push({el:a,anchor:t,rank:n}),a}addLine(e,t=!1){const n=new Ml({color:this.theme.frame});this.lines.push(n);const s=new wn().setFromPoints(e),a=t?new zh(s,n):new Bh(s,n);return this.scene.add(a),a}applyTheme(){this.theme=Oc(),this.scene.background.copy(this.theme.bg);for(const e of this.sheets)e.setTheme(this.theme);for(const e of this.lines)e.color.copy(this.theme.frame);for(const e of this.themed)e();this.touch()}touch(e=2){this.dirty=Math.max(this.dirty,e)}frame(e,t,n=1.12,s=1.3,a={}){this.framed={box:e.clone(),dir:t.clone().normalize(),pad:n,inset:a},this.userMoved=!1,this.pointerMoved=!0;const[r,o]=this.fit(e,this.framed.dir,n,a);s<=0?(this.camera.position.copy(r),this.controls.target.copy(o),this.fly=null):this.fly={from:[this.camera.position.clone(),this.controls.target.clone()],to:[r,o],t:0,d:s},this.touch()}follow(e,t=.45){this.framed&&!this.userMoved&&this.frame(e,this.framed.dir,this.framed.pad,t,this.framed.inset)}fit(e,t,n,s){const a=e.getCenter(new I),r=new I().crossVectors(new I(0,1,0),t).normalize(),o=new I().crossVectors(t,r).normalize();let l=0,c=0,h=0;for(let L=0;L<8;L++){const T=new I(L&1?e.max.x:e.min.x,L&2?e.max.y:e.min.y,L&4?e.max.z:e.min.z).sub(a);l=Math.max(l,Math.abs(T.dot(r))),c=Math.max(c,Math.abs(T.dot(o))),h=Math.max(h,T.dot(t))}const u=Math.tan(vl.degToRad(this.camera.fov/2)),f=Math.max(1,this.stage.clientWidth),m=Math.max(1,this.stage.clientHeight),[g,v,p,d]=[s.top??0,s.right??0,s.bottom??0,s.left??0],R=Math.max(.2,1-(d+v)/f),E=Math.max(.2,1-(g+p)/m),b=Math.max(c/(u*E),l/(u*this.camera.aspect*R))*n+h,V=a.clone().addScaledVector(r,(v-d)/f*b*u*this.camera.aspect).addScaledVector(o,(g-p)/m*b*u);return[V.clone().addScaledVector(t,b),V]}setPointer(e){const t=this.renderer.domElement.getBoundingClientRect();this.pointer={x:e.clientX-t.left,y:e.clientY-t.top},this.pointerMoved=!0,this.touch(1)}resize(){const e=Math.max(1,this.stage.clientWidth),t=Math.max(1,this.stage.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();for(const n of this.resized)n(e,t);this.framed&&!this.userMoved&&this.frame(this.framed.box,this.framed.dir,this.framed.pad,this.fly?this.fly.d:0,this.framed.inset),this.touch()}pick(){if(!this.pointer)return;const e=this.stage.clientWidth,t=this.stage.clientHeight;this.ray.setFromCamera(new Xe(this.pointer.x/e*2-1,-(this.pointer.y/t)*2+1),this.camera);const n=this.sheets.filter(s=>s.shown&&s.reveal>.99).map(s=>s.mesh);for(const s of this.ray.intersectObjects(n,!1)){const a=s.object.userData.sheet,r=s.uv?a.cellAt(s.uv):null;if(r){this.onHover({sheet:a,...r,x:this.pointer.x,y:this.pointer.y});return}}this.onHover(null)}placeLabels(){const e=this.stage.clientWidth,t=this.stage.clientHeight,n=new I,s=this.labels.map(r=>({l:r,rank:r.rank()})).sort((r,o)=>(r.rank??1e9)-(o.rank??1e9)),a=[];for(const{l:r,rank:o}of s){n.copy(r.anchor).project(this.camera);let l=o!==null&&n.z>-1&&n.z<1&&Math.abs(n.x)<1.1&&Math.abs(n.y)<1.1;if(l){const c=Math.round((n.x*.5+.5)*e),h=Math.round((-n.y*.5+.5)*t),u=r.el.classList,[f,m]=u.contains("left")?[-1,-.5]:u.contains("side")?[0,-.5]:u.contains("under")?[-.5,0]:u.contains("below")?[0,0]:[0,-1],g=r.el.offsetWidth,v=r.el.offsetHeight,p=f===0&&m!==-.5?Math.max(Math.min(c,e-g-4),Math.min(c,4)):c,d=[p+f*g,h+m*v,p+(f+1)*g,h+(m+1)*v],[R,E]=u.contains("axis")?[2,1]:[6,2];l=!a.some(b=>d[0]<b[2]+R&&d[2]>b[0]-R&&d[1]<b[3]+E&&d[3]>b[1]-E),l&&(a.push(d),r.el.style.transform=`translate(${p}px, ${h}px) translate(${f*100}%, ${m*100}%)`)}r.el.classList.toggle("on",l)}}loop(){requestAnimationFrame(()=>this.loop());const e=performance.now(),t=Math.min(.05,(e-this.last)/1e3);if(this.last=e,this.fly){this.fly.t=Math.min(1,this.fly.t+t/this.fly.d);const s=this.fly.t<.5?4*this.fly.t**3:1-(-2*this.fly.t+2)**3/2;this.camera.position.lerpVectors(this.fly.from[0],this.fly.to[0],s),this.controls.target.lerpVectors(this.fly.from[1],this.fly.to[1],s),this.fly.t>=1&&(this.fly=null),this.touch()}this.onTick(t);let n=!1;for(const s of this.sheets)n=s.tick(t)||n;n&&this.touch(),!(this.dirty<=0)&&(this.dirty--,this.controls.update(),(this.pointerMoved||n||this.fly)&&(this.pointerMoved=!1,this.pick()),this.placeLabels(),this.renderer.render(this.scene,this.camera))}}const q_={signed:0,image:1,mask:2,unit:3},mr=4,Y_=`
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
uniform vec4 uSel[${mr}];
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
    for (int i = 0; i < ${mr}; i++) {
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
}`;class Z_{constructor(e){Ye(this,"spec");Ye(this,"mesh");Ye(this,"frame");Ye(this,"group",new Es);Ye(this,"reveal",0);Ye(this,"revealTo",0);Ye(this,"fade",1);Ye(this,"fadeTo",1);Ye(this,"gap",0);Ye(this,"gapTo",0);Ye(this,"shown",!0);this.spec=e;const t=e.parts??[{end:e.cols,scale:1}],n=l=>t[Math.min(l,t.length-1)],s=new qn({vertexShader:Y_,fragmentShader:j_,side:Vn,uniforms:{uTex:{value:e.texture},uDims:{value:new Xe(e.cols,e.rows)},uKind:{value:q_[e.kind]},uBits:{value:e.bits??8},uMin:{value:e.min??0},uMax:{value:e.max??1},uPartEnd:{value:new ut(n(0).end,n(1).end,n(2).end,n(3).end)},uPartScale:{value:new ut(n(0).scale,n(1).scale,n(2).scale,n(3).scale)},uNeg:{value:new et},uPos:{value:new et},uZero:{value:new et},uGrid:{value:new et},uEmpty:{value:new et},uBg:{value:new et},uHi:{value:new et},uFill:{value:new et},uReveal:{value:0},uFade:{value:1},uGap:{value:0},uSelDim:{value:.45},uBorders:{value:new Xe(e.borders==="all"||!e.borders?1:0,e.borders==="none"?0:1)},uDividers:{value:new Xe(e.dividers?1:0,e.dividers==="both"?1:0)},uHeat:{value:null},uHeatOn:{value:0},uInner:{value:e.inner??0},uSel:{value:Array.from({length:mr},()=>new ut)},uSelN:{value:0}}});this.mesh=new In(new ya(e.width,e.height),s),this.mesh.userData.sheet=this;const a=e.width/2,r=e.height/2,o=new wn().setFromPoints([[-a,-r],[a,-r],[a,r],[-a,r]].map(([l,c])=>new I(l,c,0)));this.frame=new zh(o,new Ml),this.group.add(this.mesh,this.frame),this.group.position.set(...e.pos)}setTheme(e){const t=this.mesh.material.uniforms;t.uNeg.value.copy(e.neg),t.uPos.value.copy(e.pos),t.uZero.value.copy(e.zero),t.uGrid.value.copy(e.grid),t.uEmpty.value.copy(e.empty),t.uBg.value.copy(e.bg),t.uHi.value.copy(e.hi),t.uFill.value.copy(e.fill),this.frame.material.color.copy(this.spec.trained?e.accent:e.frame)}setTexture(e,t){const n=this.mesh.material.uniforms;n.uTex.value=e,n.uDims.value.set(t.cols,t.rows),n.uBits.value=t.bits??8,n.uMin.value=t.min??0,n.uMax.value=t.max??1,this.spec.cols=t.cols,this.spec.rows=t.rows}setScale(e){this.mesh.material.uniforms.uPartScale.value.setScalar(e)}setHeat(e,t="light"){const n=this.mesh.material.uniforms;n.uHeat.value=e,n.uHeatOn.value=e?t==="mark"?2:1:0}moveTo(e,t,n,s=!1){this.spec.pos=[e,t,n],s&&this.group.position.set(e,t,n)}select(e){const t=this.mesh.material.uniforms,n=Math.min(e.length,mr);for(let s=0;s<n;s++)t.uSel.value[s].set(...e[s]);t.uSelN.value=n}tick(e){const t=(h,u,f)=>{const m=u-h;return Math.abs(m)<.002?u:h+m*Math.min(1,e*f)},n=this.group.position,s=this.reveal+this.fade+this.gap+n.x+n.y+n.z,a=e/(this.spec.sweep??1.1),[r,o,l]=this.spec.pos;n.set(t(n.x,r,9),t(n.y,o,9),t(n.z,l,9)),this.reveal=this.reveal<this.revealTo?Math.min(this.revealTo,this.reveal+a):this.revealTo,this.fade=t(this.fade,this.fadeTo,6),this.gap=t(this.gap,this.gapTo,5);const c=this.mesh.material.uniforms;return c.uReveal.value=this.reveal,c.uFade.value=this.fade,c.uGap.value=this.gap,this.group.scale.setScalar(1/(1-this.gap)),this.group.visible=this.shown,s!==this.reveal+this.fade+this.gap+n.x+n.y+n.z}cellAt(e){const{cols:t,rows:n}=this.spec,s=e.x*t,a=(1-e.y)*n,r=Math.min(t-1,Math.floor(s)),o=Math.min(n-1,Math.floor(a));if(this.gap>0){const l=(s-r-.5)/(1-this.gap)+.5,c=(a-o-.5)/(1-this.gap)+.5;if(l<0||l>1||c<0||c>1)return null}return{col:r,row:o}}box(){const e=1/(1-this.gapTo),[t,n,s]=this.spec.pos,a=this.spec.width/2*e,r=this.spec.height/2*e;return new Sn(new I(t-a,n-r,s),new I(t+a,n+r,s))}}const K_={episode:5,frame:158,task:"Put the yellow cube into the black basket"},J_={vlm_layers:16,expert_layers:16,vision_layers:12,vlm_width:960,expert_width:720,vision_width:768,heads:15,head_dim:64,patch:16,image:512,chunk:50,max_dim:32,num_steps:10},Q_={vision_encoder:86433024,connector:11796480,vlm_text_16_layers:204626880,action_expert:98245840,state_proj:31680,trainable:99880992},eg={mask:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],text:["Put"," the"," yellow"," cube"," into"," the"," black"," basket",`
`,"<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>","<|im_end|>"]},tg={len:177},ng={names:["base","shoulder","elbow","forearm roll","wrist pitch","wrist roll","gripper"],deg:[5.9,32.1,34.5,4,23.4,-8.6,43.9],mean:[17.44,-11.73,37.92,5.48,38.11,-6.56,60.04],norm:[-.42,.945,-.101,-.208,-.668,-.236,-1.35],padded:[-.42,.945,-.101,-.208,-.668,-.236,-1.35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},ig={table_embed:{file:"data/table_embed.png",cols:1024,rows:768,bits:8,min:-1.47314453125,max:1.47314453125,scale:.40234375},table_encoded:{file:"data/table_encoded.png",cols:1024,rows:768,bits:8,min:-9,max:9,scale:2.390625},table_merged:{file:"data/table_merged.png",cols:64,rows:960,bits:16,min:-87,max:38,scale:11.125},wrist_embed:{file:"data/wrist_embed.png",cols:1024,rows:768,bits:8,min:-1.20751953125,max:1.20751953125,scale:.375},wrist_encoded:{file:"data/wrist_encoded.png",cols:1024,rows:768,bits:8,min:-9,max:9,scale:2.4375},wrist_merged:{file:"data/wrist_merged.png",cols:64,rows:960,bits:16,min:-83.5,max:41.25,scale:12.3125},lang_embed:{file:"data/lang_embed.png",cols:48,rows:960,bits:16,min:-2.390625,max:1.109375,scale:.19921875},state_token:{file:"data/state_token.png",cols:1,rows:960,bits:16,min:-.63330078125,max:.74169921875,scale:.5316504240036011},sequence:{file:"data/sequence.png",cols:177,rows:960,bits:16,min:-2704,max:1280,scale:332,parts:[{name:"table camera",start:0,end:64,scale:344},{name:"wrist camera",start:64,end:128,scale:384},{name:"instruction",start:128,end:176,scale:7.59375},{name:"arm readings",start:176,end:177,scale:.53173828125}]},mask:{file:"data/mask.png",cols:177,rows:177,bits:1},connector_matrix:{file:"data/connector_matrix.png",cols:768,rows:960,bits:16,min:-.193359375,max:.189453125,scale:.068359375},exp_x:{file:"data/exp_x.png",cols:50,rows:32,bits:16,min:-3.0703125,max:3.423828125,scale:2.2871875762939453},exp_v:{file:"data/exp_v.png",cols:50,rows:32,bits:16,min:-3.955078125,max:4.03125,scale:2.1665239334106445},exp_last:{file:"data/layers/exp_last_00.png",cols:50,rows:720,bits:8,min:-1.4500000476837158,max:1.4500000476837158,scale:1,norm:!0,parts:[{name:"all",end:50,scale:7.5}]},table_sizes:{file:"data/table_sizes.png",cols:32,rows:32,blocks:12,bits:16,min:4.314220428466797,max:797.6415405273438,scale:418.288818359375},wrist_sizes:{file:"data/wrist_sizes.png",cols:32,rows:32,blocks:12,bits:16,min:4.434171676635742,max:794.8687744140625,scale:403.6320495605469},den_x:{file:"data/den_x.png",cols:50,rows:32,blocks:11,bits:16,min:-3.0703125,max:3.423828125,scale:1.9170112609863281},den_v:{file:"data/den_v.png",cols:50,rows:32,blocks:10,bits:16,min:-3.982421875,max:4.03125,scale:2.125040054321289},tr_a:{file:"data/tr_a.png",cols:50,rows:32,blocks:1,bits:16,min:-1.3662109375,max:1.7900390625,scale:1.349609375},tr_x:{file:"data/tr_x.png",cols:50,rows:32,blocks:3,bits:16,min:-2.763671875,max:3.08203125,scale:1.6816797256469727},tr_u:{file:"data/tr_u.png",cols:50,rows:32,blocks:1,bits:16,min:-3.953125,max:3.923828125,scale:2.4004297256469727},tr_v:{file:"data/tr_v.png",cols:50,rows:32,blocks:3,bits:16,min:-4.234375,max:3.9453125,scale:2.088007926940918},tr_err:{file:"data/tr_err.png",cols:50,rows:32,blocks:3,bits:16,min:0,max:9.082218170166016,scale:3.191195011138916}},sg=JSON.parse('{"vlm_stream":[{"file":"data/layers/vlm_stream_00.png","cols":177,"rows":960,"bits":8,"min":-4.666666507720947,"max":4.666666507720947,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":7.625},{"name":"padding","end":176,"scale":4.3125},{"name":"arm readings","end":177,"scale":0.5316504240036011}]},{"file":"data/layers/vlm_stream_01.png","cols":177,"rows":960,"bits":8,"min":-4.378255367279053,"max":4.378255367279053,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":8.3125},{"name":"padding","end":176,"scale":7.1875},{"name":"arm readings","end":177,"scale":5.790000915527344}]},{"file":"data/layers/vlm_stream_02.png","cols":177,"rows":960,"bits":8,"min":-4.648648738861084,"max":4.648648738861084,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":8.75},{"name":"padding","end":176,"scale":6.9375},{"name":"arm readings","end":177,"scale":6.494375228881836}]},{"file":"data/layers/vlm_stream_03.png","cols":177,"rows":960,"bits":8,"min":-4.666666507720947,"max":4.666666507720947,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.375},{"name":"padding","end":176,"scale":7.09375},{"name":"arm readings","end":177,"scale":6.6112518310546875}]},{"file":"data/layers/vlm_stream_04.png","cols":177,"rows":960,"bits":8,"min":-5.017543792724609,"max":5.017543792724609,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":344},{"name":"wrist camera","end":128,"scale":386},{"name":"instruction","end":137,"scale":9.57623291015625},{"name":"padding","end":176,"scale":7.125},{"name":"arm readings","end":177,"scale":6.931875228881836}]},{"file":"data/layers/vlm_stream_05.png","cols":177,"rows":960,"bits":8,"min":-5.294797897338867,"max":5.294797897338867,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.625},{"name":"padding","end":176,"scale":7.0625},{"name":"arm readings","end":177,"scale":6.738750457763672}]},{"file":"data/layers/vlm_stream_06.png","cols":177,"rows":960,"bits":8,"min":-5.273237705230713,"max":5.273237705230713,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.625},{"name":"padding","end":176,"scale":7.53125},{"name":"arm readings","end":177,"scale":7.0800018310546875}]},{"file":"data/layers/vlm_stream_07.png","cols":177,"rows":960,"bits":8,"min":-5.225725173950195,"max":5.225725173950195,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.5},{"name":"padding","end":176,"scale":8.25},{"name":"arm readings","end":177,"scale":7.213125228881836}]},{"file":"data/layers/vlm_stream_08.png","cols":177,"rows":960,"bits":8,"min":-4.751028060913086,"max":4.751028060913086,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":9.5},{"name":"padding","end":176,"scale":9.5},{"name":"arm readings","end":177,"scale":7.2050018310546875}]},{"file":"data/layers/vlm_stream_09.png","cols":177,"rows":960,"bits":8,"min":-5.006622314453125,"max":5.006622314453125,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.5625},{"name":"padding","end":176,"scale":9.4375},{"name":"arm readings","end":177,"scale":7.62812614440918}]},{"file":"data/layers/vlm_stream_10.png","cols":177,"rows":960,"bits":8,"min":-4.837696552276611,"max":4.837696552276611,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.6875},{"name":"padding","end":176,"scale":11.0625},{"name":"arm readings","end":177,"scale":7.84687614440918}]},{"file":"data/layers/vlm_stream_11.png","cols":177,"rows":960,"bits":8,"min":-4.900523662567139,"max":4.900523662567139,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":9.8125},{"name":"padding","end":176,"scale":10.625},{"name":"arm readings","end":177,"scale":8.301250457763672}]},{"file":"data/layers/vlm_stream_12.png","cols":177,"rows":960,"bits":8,"min":-4.857421875,"max":4.857421875,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":384},{"name":"instruction","end":137,"scale":10},{"name":"padding","end":176,"scale":12.0625},{"name":"arm readings","end":177,"scale":8.421253204345703}]},{"file":"data/layers/vlm_stream_13.png","cols":177,"rows":960,"bits":8,"min":-4.896451473236084,"max":4.896451473236084,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382.4453125},{"name":"instruction","end":137,"scale":10.375},{"name":"padding","end":176,"scale":12.4375},{"name":"arm readings","end":177,"scale":9.403751373291016}]},{"file":"data/layers/vlm_stream_14.png","cols":177,"rows":960,"bits":8,"min":-4.881217002868652,"max":4.881217002868652,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":10.88873291015625},{"name":"padding","end":176,"scale":12.5625},{"name":"arm readings","end":177,"scale":9.915000915527344}]},{"file":"data/layers/vlm_stream_15.png","cols":177,"rows":960,"bits":8,"min":-4.900523662567139,"max":4.900523662567139,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":346},{"name":"wrist camera","end":128,"scale":382},{"name":"instruction","end":137,"scale":11.5},{"name":"padding","end":176,"scale":13},{"name":"arm readings","end":177,"scale":10.113750457763672}]}],"vlm_update":[{"file":"data/layers/vlm_update_00.png","cols":177,"rows":960,"bits":8,"min":-10.69829273223877,"max":10.69829273223877,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":2},{"name":"wrist camera","end":128,"scale":2},{"name":"instruction","end":137,"scale":3.890625},{"name":"padding","end":176,"scale":4.875},{"name":"arm readings","end":177,"scale":5.839480400085449}]},{"file":"data/layers/vlm_update_01.png","cols":177,"rows":960,"bits":8,"min":-9.466373443603516,"max":9.466373443603516,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":3.5},{"name":"wrist camera","end":128,"scale":3.5},{"name":"instruction","end":137,"scale":2.671875},{"name":"padding","end":176,"scale":1.046875},{"name":"arm readings","end":177,"scale":1.8902734518051147}]},{"file":"data/layers/vlm_update_02.png","cols":177,"rows":960,"bits":8,"min":-3.5,"max":3.5,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.90625},{"name":"padding","end":176,"scale":1.46875},{"name":"arm readings","end":177,"scale":1.8232033252716064}]},{"file":"data/layers/vlm_update_03.png","cols":177,"rows":960,"bits":8,"min":-3.615530014038086,"max":3.615530014038086,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.42535400390625},{"name":"wrist camera","end":128,"scale":4.0625},{"name":"instruction","end":137,"scale":3.390625},{"name":"padding","end":176,"scale":1.36572265625},{"name":"arm readings","end":177,"scale":2.2283594608306885}]},{"file":"data/layers/vlm_update_04.png","cols":177,"rows":960,"bits":8,"min":-3,"max":3,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.5},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.2625770568847656},{"name":"padding","end":176,"scale":2.6328125},{"name":"arm readings","end":177,"scale":1.598750114440918}]},{"file":"data/layers/vlm_update_05.png","cols":177,"rows":960,"bits":8,"min":-1.7777777910232544,"max":1.7777777910232544,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.5},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.1688270568847656},{"name":"padding","end":176,"scale":2.830078125},{"name":"arm readings","end":177,"scale":1.6555469036102295}]},{"file":"data/layers/vlm_update_06.png","cols":177,"rows":960,"bits":8,"min":-2.0982449054718018,"max":2.0982449054718018,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":4.25},{"name":"wrist camera","end":128,"scale":4},{"name":"instruction","end":137,"scale":2.28125},{"name":"padding","end":176,"scale":2.8203125},{"name":"arm readings","end":177,"scale":2.051250457763672}]},{"file":"data/layers/vlm_update_07.png","cols":177,"rows":960,"bits":8,"min":-2.3893048763275146,"max":2.3893048763275146,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.59375},{"name":"padding","end":176,"scale":3.65234375},{"name":"arm readings","end":177,"scale":2.198906421661377}]},{"file":"data/layers/vlm_update_08.png","cols":177,"rows":960,"bits":8,"min":-1.8758877515792847,"max":1.8758877515792847,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.7000770568847656},{"name":"padding","end":176,"scale":3.46875},{"name":"arm readings","end":177,"scale":2.3125}]},{"file":"data/layers/vlm_update_09.png","cols":177,"rows":960,"bits":8,"min":-2.3475215435028076,"max":2.3475215435028076,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.4375},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.2985916137695312},{"name":"padding","end":176,"scale":3.578125},{"name":"arm readings","end":177,"scale":2.105156421661377}]},{"file":"data/layers/vlm_update_10.png","cols":177,"rows":960,"bits":8,"min":-2.7759037017822266,"max":2.7759037017822266,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":5.5},{"name":"wrist camera","end":128,"scale":5},{"name":"instruction","end":137,"scale":2.25},{"name":"padding","end":176,"scale":3.2421875},{"name":"arm readings","end":177,"scale":1.9585158824920654}]},{"file":"data/layers/vlm_update_11.png","cols":177,"rows":960,"bits":8,"min":-2.307692289352417,"max":2.307692289352417,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.5},{"name":"wrist camera","end":128,"scale":6.0625},{"name":"instruction","end":137,"scale":2.609375},{"name":"padding","end":176,"scale":3.75},{"name":"arm readings","end":177,"scale":2.1055471897125244}]},{"file":"data/layers/vlm_update_12.png","cols":177,"rows":960,"bits":8,"min":-2,"max":2,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6},{"name":"wrist camera","end":128,"scale":6},{"name":"instruction","end":137,"scale":3.390625},{"name":"padding","end":176,"scale":3.7890625},{"name":"arm readings","end":177,"scale":2.515781879425049}]},{"file":"data/layers/vlm_update_13.png","cols":177,"rows":960,"bits":8,"min":-1.9323413372039795,"max":1.9323413372039795,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.2100830078125},{"name":"wrist camera","end":128,"scale":6},{"name":"instruction","end":137,"scale":3.4157791137695312},{"name":"padding","end":176,"scale":4.0625},{"name":"arm readings","end":177,"scale":2.5976953506469727}]},{"file":"data/layers/vlm_update_14.png","cols":177,"rows":960,"bits":8,"min":-2.0392701625823975,"max":2.0392701625823975,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.5},{"name":"wrist camera","end":128,"scale":6.375},{"name":"instruction","end":137,"scale":3.5234375},{"name":"padding","end":176,"scale":4.21875},{"name":"arm readings","end":177,"scale":2.592343807220459}]},{"file":"data/layers/vlm_update_15.png","cols":177,"rows":960,"bits":8,"min":-1.6124721765518188,"max":1.6124721765518188,"scale":1,"norm":true,"parts":[{"name":"table camera","end":64,"scale":6.25},{"name":"wrist camera","end":128,"scale":6.375},{"name":"instruction","end":137,"scale":3.4609375},{"name":"padding","end":176,"scale":3.5078125},{"name":"arm readings","end":177,"scale":2.953906536102295}]}],"vlm_attn":[{"file":"data/layers/vlm_attn_00.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_01.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_02.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_03.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_04.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_05.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_06.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_07.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_08.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_09.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_10.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_11.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_12.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_13.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_14.png","cols":177,"rows":177,"bits":8},{"file":"data/layers/vlm_attn_15.png","cols":177,"rows":177,"bits":8}],"vlm_k":[{"file":"data/layers/vlm_k_00.png","cols":177,"rows":320,"bits":8,"min":-3.0164434909820557,"max":3.0164434909820557,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":3.28125}]},{"file":"data/layers/vlm_k_01.png","cols":177,"rows":320,"bits":8,"min":-2.946666717529297,"max":2.946666717529297,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.6875}]},{"file":"data/layers/vlm_k_02.png","cols":177,"rows":320,"bits":8,"min":-2.4851925373077393,"max":2.4851925373077393,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.375}]},{"file":"data/layers/vlm_k_03.png","cols":177,"rows":320,"bits":8,"min":-2.2020156383514404,"max":2.2020156383514404,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.0625}]},{"file":"data/layers/vlm_k_04.png","cols":177,"rows":320,"bits":8,"min":-2.2661867141723633,"max":2.2661867141723633,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.78125}]},{"file":"data/layers/vlm_k_05.png","cols":177,"rows":320,"bits":8,"min":-2.454545497894287,"max":2.454545497894287,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.8125}]},{"file":"data/layers/vlm_k_06.png","cols":177,"rows":320,"bits":8,"min":-2.7121212482452393,"max":2.7121212482452393,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.125}]},{"file":"data/layers/vlm_k_07.png","cols":177,"rows":320,"bits":8,"min":-2.5068492889404297,"max":2.5068492889404297,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.5625}]},{"file":"data/layers/vlm_k_08.png","cols":177,"rows":320,"bits":8,"min":-3.058823585510254,"max":3.058823585510254,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.25}]},{"file":"data/layers/vlm_k_09.png","cols":177,"rows":320,"bits":8,"min":-2.1641790866851807,"max":2.1641790866851807,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.1875}]},{"file":"data/layers/vlm_k_10.png","cols":177,"rows":320,"bits":8,"min":-2.2804877758026123,"max":2.2804877758026123,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.125}]},{"file":"data/layers/vlm_k_11.png","cols":177,"rows":320,"bits":8,"min":-2.8592593669891357,"max":2.8592593669891357,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.21875}]},{"file":"data/layers/vlm_k_12.png","cols":177,"rows":320,"bits":8,"min":-2.9790210723876953,"max":2.9790210723876953,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.46875}]},{"file":"data/layers/vlm_k_13.png","cols":177,"rows":320,"bits":8,"min":-2.470588207244873,"max":2.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":5.3125}]},{"file":"data/layers/vlm_k_14.png","cols":177,"rows":320,"bits":8,"min":-3.307692289352417,"max":3.307692289352417,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.875}]},{"file":"data/layers/vlm_k_15.png","cols":177,"rows":320,"bits":8,"min":-3.49367094039917,"max":3.49367094039917,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":4.9375}]}],"vlm_v":[{"file":"data/layers/vlm_v_00.png","cols":177,"rows":320,"bits":8,"min":-4.7222819328308105,"max":4.7222819328308105,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":0.0712890625}]},{"file":"data/layers/vlm_v_01.png","cols":177,"rows":320,"bits":8,"min":-1.794392466545105,"max":1.794392466545105,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":0.8359375}]},{"file":"data/layers/vlm_v_02.png","cols":177,"rows":320,"bits":8,"min":-1.5388296842575073,"max":1.5388296842575073,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.1796875}]},{"file":"data/layers/vlm_v_03.png","cols":177,"rows":320,"bits":8,"min":-1.7191780805587769,"max":1.7191780805587769,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.140625}]},{"file":"data/layers/vlm_v_04.png","cols":177,"rows":320,"bits":8,"min":-1.4702702760696411,"max":1.4702702760696411,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.4453125}]},{"file":"data/layers/vlm_v_05.png","cols":177,"rows":320,"bits":8,"min":-1.5641428232192993,"max":1.5641428232192993,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.671875}]},{"file":"data/layers/vlm_v_06.png","cols":177,"rows":320,"bits":8,"min":-1.590243935585022,"max":1.590243935585022,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.6015625}]},{"file":"data/layers/vlm_v_07.png","cols":177,"rows":320,"bits":8,"min":-1.5500218868255615,"max":1.5500218868255615,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.743927001953125}]},{"file":"data/layers/vlm_v_08.png","cols":177,"rows":320,"bits":8,"min":-1.5064871311187744,"max":1.5064871311187744,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.75}]},{"file":"data/layers/vlm_v_09.png","cols":177,"rows":320,"bits":8,"min":-1.5098813772201538,"max":1.5098813772201538,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.9765625}]},{"file":"data/layers/vlm_v_10.png","cols":177,"rows":320,"bits":8,"min":-1.9787532091140747,"max":1.9787532091140747,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.634552001953125}]},{"file":"data/layers/vlm_v_11.png","cols":177,"rows":320,"bits":8,"min":-1.4728682041168213,"max":1.4728682041168213,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":2.015625}]},{"file":"data/layers/vlm_v_12.png","cols":177,"rows":320,"bits":8,"min":-1.5267857313156128,"max":1.5267857313156128,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.75}]},{"file":"data/layers/vlm_v_13.png","cols":177,"rows":320,"bits":8,"min":-1.436619758605957,"max":1.436619758605957,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.6640625}]},{"file":"data/layers/vlm_v_14.png","cols":177,"rows":320,"bits":8,"min":-1.4817813634872437,"max":1.4817813634872437,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":1.9296875}]},{"file":"data/layers/vlm_v_15.png","cols":177,"rows":320,"bits":8,"min":-1.545454502105713,"max":1.545454502105713,"scale":1,"norm":true,"parts":[{"name":"all","end":177,"scale":2.0625}]}],"exp_stream":[{"file":"data/layers/exp_stream_00.png","cols":50,"rows":720,"bits":8,"min":-1.488465428352356,"max":1.488465428352356,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":1.947265625}]},{"file":"data/layers/exp_stream_01.png","cols":50,"rows":720,"bits":8,"min":-1.446969747543335,"max":1.446969747543335,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.0625}]},{"file":"data/layers/exp_stream_02.png","cols":50,"rows":720,"bits":8,"min":-1.4154930114746094,"max":1.4154930114746094,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.21875}]},{"file":"data/layers/exp_stream_03.png","cols":50,"rows":720,"bits":8,"min":-1.4733333587646484,"max":1.4733333587646484,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.34375}]},{"file":"data/layers/exp_stream_04.png","cols":50,"rows":720,"bits":8,"min":-1.4620252847671509,"max":1.4620252847671509,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.46875}]},{"file":"data/layers/exp_stream_05.png","cols":50,"rows":720,"bits":8,"min":-1.4967741966247559,"max":1.4967741966247559,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.421875}]},{"file":"data/layers/exp_stream_06.png","cols":50,"rows":720,"bits":8,"min":-1.470588207244873,"max":1.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.390625}]},{"file":"data/layers/exp_stream_07.png","cols":50,"rows":720,"bits":8,"min":-1.5133333206176758,"max":1.5133333206176758,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.34375}]},{"file":"data/layers/exp_stream_08.png","cols":50,"rows":720,"bits":8,"min":-1.4900661706924438,"max":1.4900661706924438,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.359375}]},{"file":"data/layers/exp_stream_09.png","cols":50,"rows":720,"bits":8,"min":-1.4451613426208496,"max":1.4451613426208496,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.421875}]},{"file":"data/layers/exp_stream_10.png","cols":50,"rows":720,"bits":8,"min":-1.4500000476837158,"max":1.4500000476837158,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.5}]},{"file":"data/layers/exp_stream_11.png","cols":50,"rows":720,"bits":8,"min":-1.470588207244873,"max":1.470588207244873,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.65625}]},{"file":"data/layers/exp_stream_12.png","cols":50,"rows":720,"bits":8,"min":-1.497267723083496,"max":1.497267723083496,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.859375}]},{"file":"data/layers/exp_stream_13.png","cols":50,"rows":720,"bits":8,"min":-1.6057692766189575,"max":1.6057692766189575,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":3.25}]},{"file":"data/layers/exp_stream_14.png","cols":50,"rows":720,"bits":8,"min":-1.5666667222976685,"max":1.5666667222976685,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":3.75}]},{"file":"data/layers/exp_stream_15.png","cols":50,"rows":720,"bits":8,"min":-1.5119047164916992,"max":1.5119047164916992,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":5.25}]}],"exp_update":[{"file":"data/layers/exp_update_00.png","cols":50,"rows":720,"bits":8,"min":-1.6307685375213623,"max":1.6307685375213623,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.37427234649658203}]},{"file":"data/layers/exp_update_01.png","cols":50,"rows":720,"bits":8,"min":-1.4249999523162842,"max":1.4249999523162842,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.625}]},{"file":"data/layers/exp_update_02.png","cols":50,"rows":720,"bits":8,"min":-1.3928571939468384,"max":1.3928571939468384,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6015625}]},{"file":"data/layers/exp_update_03.png","cols":50,"rows":720,"bits":8,"min":-1.3269401788711548,"max":1.3269401788711548,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.7168159484863281}]},{"file":"data/layers/exp_update_04.png","cols":50,"rows":720,"bits":8,"min":-1.4461538791656494,"max":1.4461538791656494,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5078125}]},{"file":"data/layers/exp_update_05.png","cols":50,"rows":720,"bits":8,"min":-1.4171974658966064,"max":1.4171974658966064,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.61328125}]},{"file":"data/layers/exp_update_06.png","cols":50,"rows":720,"bits":8,"min":-1.4177215099334717,"max":1.4177215099334717,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6171875}]},{"file":"data/layers/exp_update_07.png","cols":50,"rows":720,"bits":8,"min":-1.3915441036224365,"max":1.3915441036224365,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.53125}]},{"file":"data/layers/exp_update_08.png","cols":50,"rows":720,"bits":8,"min":-1.4036144018173218,"max":1.4036144018173218,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.6484375}]},{"file":"data/layers/exp_update_09.png","cols":50,"rows":720,"bits":8,"min":-1.399999976158142,"max":1.399999976158142,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5859375}]},{"file":"data/layers/exp_update_10.png","cols":50,"rows":720,"bits":8,"min":-1.3831775188446045,"max":1.3831775188446045,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.626953125}]},{"file":"data/layers/exp_update_11.png","cols":50,"rows":720,"bits":8,"min":-1.3591549396514893,"max":1.3591549396514893,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.5546875}]},{"file":"data/layers/exp_update_12.png","cols":50,"rows":720,"bits":8,"min":-1.7169811725616455,"max":1.7169811725616455,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.828125}]},{"file":"data/layers/exp_update_13.png","cols":50,"rows":720,"bits":8,"min":-1.4272300004959106,"max":1.4272300004959106,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":0.83203125}]},{"file":"data/layers/exp_update_14.png","cols":50,"rows":720,"bits":8,"min":-1.5213675498962402,"max":1.5213675498962402,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":1.828125}]},{"file":"data/layers/exp_update_15.png","cols":50,"rows":720,"bits":8,"min":-1.4177215099334717,"max":1.4177215099334717,"scale":1,"norm":true,"parts":[{"name":"all","end":50,"scale":2.46875}]}],"exp_attn":[{"file":"data/layers/exp_attn_00.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_01.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_02.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_03.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_04.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_05.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_06.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_07.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_08.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_09.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_10.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_11.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_12.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_13.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false},{"file":"data/layers/exp_attn_14.png","cols":227,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":true},{"file":"data/layers/exp_attn_15.png","cols":177,"rows":800,"bits":8,"blocks":16,"block_rows":50,"own":false}]}'),ag={table:[{file:"data/layers/vis_table_00.png",cols:1024,rows:768,bits:8,min:-.683935546875,max:.683935546875,scale:.3419677734375},{file:"data/layers/vis_table_01.png",cols:1024,rows:768,bits:8,min:-.73447265625,max:.73447265625,scale:.367236328125},{file:"data/layers/vis_table_02.png",cols:1024,rows:768,bits:8,min:-.825439453125,max:.825439453125,scale:.4127197265625},{file:"data/layers/vis_table_03.png",cols:1024,rows:768,bits:8,min:-.86923828125,max:.86923828125,scale:.434619140625},{file:"data/layers/vis_table_04.png",cols:1024,rows:768,bits:8,min:-.90966796875,max:.90966796875,scale:.454833984375},{file:"data/layers/vis_table_05.png",cols:1024,rows:768,bits:8,min:-.8557617187500001,max:.8557617187500001,scale:.42788085937500003},{file:"data/layers/vis_table_06.png",cols:1024,rows:768,bits:8,min:-.9500976562500001,max:.9500976562500001,scale:.47504882812500004},{file:"data/layers/vis_table_07.png",cols:1024,rows:768,bits:8,min:-1.0376953125000001,max:1.0376953125000001,scale:.5188476562500001},{file:"data/layers/vis_table_08.png",cols:1024,rows:768,bits:8,min:-1.4015625,max:1.4015625,scale:.70078125},{file:"data/layers/vis_table_09.png",cols:1024,rows:768,bits:8,min:-1.8328125000000002,max:1.8328125000000002,scale:.9164062500000001},{file:"data/layers/vis_table_10.png",cols:1024,rows:768,bits:8,min:-2.7087890625,max:2.7087890625,scale:1.35439453125},{file:"data/layers/vis_table_11.png",cols:1024,rows:768,bits:8,min:-6.95390625,max:6.95390625,scale:3.476953125}],wrist:[{file:"data/layers/vis_wrist_00.png",cols:1024,rows:768,bits:8,min:-.576123046875,max:.576123046875,scale:.2880615234375},{file:"data/layers/vis_wrist_01.png",cols:1024,rows:768,bits:8,min:-.64013671875,max:.64013671875,scale:.320068359375},{file:"data/layers/vis_wrist_02.png",cols:1024,rows:768,bits:8,min:-.778271484375,max:.778271484375,scale:.3891357421875},{file:"data/layers/vis_wrist_03.png",cols:1024,rows:768,bits:8,min:-.8321777343750001,max:.8321777343750001,scale:.41608886718750004},{file:"data/layers/vis_wrist_04.png",cols:1024,rows:768,bits:8,min:-.8625,max:.8625,scale:.43125},{file:"data/layers/vis_wrist_05.png",cols:1024,rows:768,bits:8,min:-.82880859375,max:.82880859375,scale:.414404296875},{file:"data/layers/vis_wrist_06.png",cols:1024,rows:768,bits:8,min:-.9500976562500001,max:.9500976562500001,scale:.47504882812500004},{file:"data/layers/vis_wrist_07.png",cols:1024,rows:768,bits:8,min:-1.09833984375,max:1.09833984375,scale:.549169921875},{file:"data/layers/vis_wrist_08.png",cols:1024,rows:768,bits:8,min:-1.4689453125,max:1.4689453125,scale:.73447265625},{file:"data/layers/vis_wrist_09.png",cols:1024,rows:768,bits:8,min:-1.9810546875000001,max:1.9810546875000001,scale:.9905273437500001},{file:"data/layers/vis_wrist_10.png",cols:1024,rows:768,bits:8,min:-2.7626953125,max:2.7626953125,scale:1.38134765625},{file:"data/layers/vis_wrist_11.png",cols:1024,rows:768,bits:8,min:-7.061718750000001,max:7.061718750000001,scale:3.5308593750000004}]},rg={typical_size:{table:[7.2,6.4,7.1,6.5,6.7,6,6.7,7.2,9.7,12.2,17.8,222.4],wrist:[6.8,6,6.9,6.4,6.4,5.8,6.7,7.7,10.3,13.6,18.5,218.3]},largest_size:{table:[20,14,13,15,29,119,139,148,153,155,158,798],wrist:[20,14,13,15,29,117,137,145,150,151,155,795]},big:{table:[1,1,0,2,14,24,24,24,24,24,24,215],wrist:[1,1,0,2,21,34,35,35,35,35,34,214]},jump_layer:5,jump_ratio:20,big_in_black_bar:{table:12},big_in_both:20,last_layer_growth:12},og={facts:{table:{alike:[.0975,.1198,.053,.0369,.0284,.0265,.0376,.0438,.0446,.0411,.0336,.0292,.4769,.1583],matches:[90,105,19,16,18,21,30,44,44,38,30,25,574,37],one_direction:[.3209,.3356,.2091,.1625,.1369,.1146,.1646,.183,.1875,.1444,.1248,.1108,.8957,.3361],shared:[.4394,.7518,.4836,.4175,.2346,.2502,.136,.1241,.1107,.1723,.2226,.3148,.9891,.7109],shared_spread:[.596,.078,.158,.236,.432,.426,4.311,4.638,4.468,2.496,1.63,.876,.918,.221]},wrist:{alike:[.1018,.1251,.0533,.036,.031,.0339,.1032,.1339,.1271,.0922,.0675,.0539,.4635,.1837],matches:[91,102,33,25,27,33,105,134,122,87,65,49,560,59],one_direction:[.2887,.3534,.2149,.162,.1362,.1259,.2987,.3174,.2929,.2235,.1641,.1334,.8838,.3659],shared:[.505,.8108,.5751,.5551,.3987,.4091,.1929,.1901,.1825,.2621,.328,.3832,.9897,.7075],shared_spread:[.622,.04,.068,.121,.194,.259,4.286,4.517,3.979,2.507,1.606,1.037,.896,.266]}},table:{before:{file:"data/sim/table_before.png",cols:320,rows:1024,bits:8,min:-.2419661357909638,max:.2419661357909638},layers:[{file:"data/sim/table_00.png",cols:320,rows:1024,bits:8,min:-.23952942475984057,max:.23952942475984057},{file:"data/sim/table_01.png",cols:320,rows:1024,bits:8,min:-.2560640756462496,max:.2560640756462496},{file:"data/sim/table_02.png",cols:320,rows:1024,bits:8,min:-.25006924563739574,max:.25006924563739574},{file:"data/sim/table_03.png",cols:320,rows:1024,bits:8,min:-.24008189626025758,max:.24008189626025758},{file:"data/sim/table_04.png",cols:320,rows:1024,bits:8,min:-.23919009414820824,max:.23919009414820824},{file:"data/sim/table_05.png",cols:320,rows:1024,bits:8,min:-.24817867154843679,max:.24817867154843679},{file:"data/sim/table_06.png",cols:320,rows:1024,bits:8,min:-.2588102090216902,max:.2588102090216902},{file:"data/sim/table_07.png",cols:320,rows:1024,bits:8,min:-.2708775497035219,max:.2708775497035219},{file:"data/sim/table_08.png",cols:320,rows:1024,bits:8,min:-.25375181002065533,max:.25375181002065533},{file:"data/sim/table_09.png",cols:320,rows:1024,bits:8,min:-.2924706188152235,max:.2924706188152235},{file:"data/sim/table_10.png",cols:320,rows:1024,bits:8,min:-.24655901392110774,max:.24655901392110774},{file:"data/sim/table_11.png",cols:320,rows:1024,bits:8,min:-.23207715515314362,max:.23207715515314362}],after:{file:"data/sim/table_after.png",cols:320,rows:1024,bits:8,min:-.2487465763941288,max:.2487465763941288}},wrist:{before:{file:"data/sim/wrist_before.png",cols:320,rows:1024,bits:8,min:-.22655319342398383,max:.22655319342398383},layers:[{file:"data/sim/wrist_00.png",cols:320,rows:1024,bits:8,min:-.2408137811081941,max:.2408137811081941},{file:"data/sim/wrist_01.png",cols:320,rows:1024,bits:8,min:-.2506326250991203,max:.2506326250991203},{file:"data/sim/wrist_02.png",cols:320,rows:1024,bits:8,min:-.2580826777385899,max:.2580826777385899},{file:"data/sim/wrist_03.png",cols:320,rows:1024,bits:8,min:-.24945300258698583,max:.24945300258698583},{file:"data/sim/wrist_04.png",cols:320,rows:1024,bits:8,min:-.27212029977806,max:.27212029977806},{file:"data/sim/wrist_05.png",cols:320,rows:1024,bits:8,min:-.22499933073839093,max:.22499933073839093},{file:"data/sim/wrist_06.png",cols:320,rows:1024,bits:8,min:-.26663220109917696,max:.26663220109917696},{file:"data/sim/wrist_07.png",cols:320,rows:1024,bits:8,min:-.23113067911306945,max:.23113067911306945},{file:"data/sim/wrist_08.png",cols:320,rows:1024,bits:8,min:-.24527861573829174,max:.24527861573829174},{file:"data/sim/wrist_09.png",cols:320,rows:1024,bits:8,min:-.24223879982627178,max:.24223879982627178},{file:"data/sim/wrist_10.png",cols:320,rows:1024,bits:8,min:-.26347897689756683,max:.26347897689756683},{file:"data/sim/wrist_11.png",cols:320,rows:1024,bits:8,min:-.22119540597652274,max:.22119540597652274}],after:{file:"data/sim/wrist_after.png",cols:320,rows:1024,bits:8,min:-.2691340321958974,max:.2691340321958974}},max_error:.039,mean_error:.0012},lg={fold:16,rows:960,inputs:12288},cg={picture_token_size:4340,picture_update_share:[.0112,.0176,.0125,.0131,.0127,.0123,.013,.0149,.0148,.0176,.0172,.0182,.0175,.0184,.018,.018],readings_token_size:[7.1,78.1,87.6,79.3,80.2,80,81.4,87.9,88.1,90.8,91.8,99,105.2,105.2,113.5,120.8,136.1],word_jump_layer:3,word_jump_tokens:[1,5],word_sizes_before_after:[[147.6999969482422,140.1999969482422,136.89999389648438,146.3000030517578,137.60000610351562,139.10000610351562,131.5,147.39999389648438,142.6999969482422],[142.89999389648438,1789.0999755859375,134.39999389648438,143.39999389648438,132.8000030517578,1651,130.8000030517578,141.8000030517578,210.8000030517578]],readings_sink_share_by_layer:[.009,.064,.327,.136,.887,.884,.772,.696,.74,.844,.772,.782,.663,.373,.628,.45],times:[1,.9,.8,.7,.6,.5,.4,.3,.2,.1]},hg={names:["base","shoulder","elbow","forearm roll","wrist pitch","wrist roll","gripper"],mean:[17.439,-11.73,37.922,5.481,38.111,-6.557,60.044],std:[27.488,46.399,33.921,7.132,21.999,8.668,11.966],plan_deg:[[6.81,31.94,33.88,4.14,23.16,-8.44,44.56],[6.7,32.31,33.78,4.22,23.45,-8.59,44],[5.66,31.2,34.94,4.16,22.66,-8.49,43.91],[7.62,31.22,34.84,4.49,22.16,-8.31,43.91],[6.37,30.97,35.16,4.57,23.69,-8.54,44.44],[7.02,32.12,35.22,4.56,23.44,-8.41,44.09],[6.44,30.39,36.03,5,23.66,-8.59,43.97],[6.12,30.83,36.62,4.02,25.06,-8.77,44.28],[6.92,27.16,36.38,1.05,26.22,-8.73,43.97],[6.47,29.16,36.19,1.46,26.89,-8.66,44.19],[7.28,27.86,35.09,1.93,28.27,-8.38,44.16],[6.39,24.02,35.59,1.24,29.98,-8.62,44.12],[6.93,22.2,35.38,.09,34.31,-8.84,44.81],[6.86,21.91,35.06,-.22,33.88,-8.72,44.34],[6.96,17.73,34.62,-.31,36.28,-9,45.12],[6.89,17.61,34.66,.12,37.62,-8.47,44.94],[6.55,17.34,34.53,.81,40.31,-8.7,44.53],[6.98,12.51,34.56,.33,42.47,-8.73,44.44],[7.05,10.31,33.91,.93,43.84,-8.9,44.91],[7.73,8.43,32.91,1.01,45.34,-8.55,44.88],[6.88,8.98,33.12,.78,46.22,-8.69,44.56],[6.87,6.23,31.28,.73,51.81,-8.33,44.34],[7.49,3.6,30.48,.19,52.91,-8.51,44.66],[7.06,3.14,28.52,-.18,55.16,-8.29,44.28],[7.14,2.75,27.83,-.53,57.16,-8.27,44.12],[6.93,.41,25.42,-.29,60.53,-8.31,44.19],[7.51,-1.66,23.36,.15,62.44,-8.67,43.94],[7.17,-1.3,18.7,.88,67.38,-8.34,44.41],[7.89,-1.4,14.52,1.26,70.69,-8.56,43.56],[8.1,-2,11.34,.93,73.31,-8.27,44.03],[7.25,-1.7,8.48,1.13,73.88,-8.18,43.97],[8.36,-1.11,7.26,2.4,74,-8.18,44.69],[10.55,-2.62,8.34,1.9,73.38,-8.17,44.12],[14.09,-1.23,8.11,2.46,72.44,-8.1,44.44],[13.4,-2.15,8.65,3.43,73,-7.6,43.94],[17.16,.25,10.66,3.4,72.88,-7.99,43.94],[15.63,.88,7.13,5.34,74.44,-7.96,44.22],[20.94,-.22,7.41,5.54,73.94,-7.48,43.81],[21.06,2.02,5.41,7,72.88,-6.71,43.59],[23.84,2.58,4.98,6.88,73.38,-6.81,44],[24.17,3.38,6.09,7.65,71.88,-7.27,43.94],[24.33,5.27,5.46,9.63,73.75,-7.61,44.59],[29.66,5.46,5.69,9.16,71.56,-7.06,43.88],[34.03,5.79,4.28,9.79,73.06,-7.09,44.16],[40.66,7.65,.66,9.78,74.19,-7.03,44.06],[46.03,9.36,1.36,9.29,71.5,-7.11,43.88],[47.03,8.89,3.23,10.66,69.94,-7.3,44.72],[45.09,11.16,.96,9.89,70.94,-7.2,44.28],[49.44,13.59,-1.03,10.58,70.94,-7.27,44.12],[51.94,13.02,-.77,10.66,70.44,-6.72,44.12]],hand_deg:[[5.9,32.09,34.5,4,23.41,-8.6,43.91],[5.9,32.09,34.5,4,23.41,-8.6,43.81],[5.9,32.09,34.5,4,23.41,-8.6,43.81],[5.8,32.09,34.5,4,23.41,-8.6,43.81],[5.7,32.09,34.5,3.8,23.41,-8.6,43.91],[5.7,31.91,34.5,1.2,23.59,-8.6,43.91],[5.7,31.91,34.5,1.2,23.59,-8.6,43.91],[5.7,31.7,34.5,-.5,24.59,-8.5,43.91],[5.7,31.59,34.5,-.4,25.8,-8.4,43.91],[5.6,31.2,34.5,-.4,26,-8.3,43.91],[5.7,30.3,34.41,-.4,26.5,-8.3,43.91],[5.7,29.3,34.5,-.4,28.3,-8.5,43.91],[5.6,28,34.5,-.5,30.59,-8.5,44],[5.7,26.59,34.5,-.5,32.19,-8.5,44],[5.8,24.7,34.5,-.5,34.09,-8.6,44],[5.8,22.41,34.5,-.5,36,-8.6,43.91],[5.8,22.41,34.5,-.5,36,-8.6,43.91],[5.9,20,34.5,-.5,38,-8.6,43.91],[5.9,17.5,34.5,-.5,39.81,-8.6,43.91],[5.9,15.5,34.41,-.5,42.19,-8.6,43.91],[6,13.7,34.5,-.5,44.59,-8.6,43.91],[6,11.4,34.41,-.5,47,-8.5,43.91],[5.9,8.6,34.41,-.4,49.69,-8.2,43.91],[5.9,5.5,33.41,-.4,52.59,-8,43.91],[5.9,3.5,30,-.5,57.5,-8,43.91],[6,2.6,25.7,-.4,62.5,-8.1,43.91],[6,2.6,25.7,-.4,62.5,-8.1,43.91],[6.2,2,21.7,-.3,66.5,-8,43.91],[6.4,1.5,17.41,.3,70.12,-8.3,43.91],[6.4,1.2,13.4,.4,73.5,-8.4,43.91],[6.4,1.3,9.5,1.1,75.5,-8.6,43.91],[6.5,1.5,6.5,2.7,76.62,-8.5,43.91],[6.5,1.8,4.6,3.8,77.5,-8.6,43.91],[7.2,1.8,4,4.3,77.5,-8.3,43.91],[10.5,1.8,4,3.6,76.5,-7.8,43.91],[14.2,2.3,4,4.1,75.31,-7.7,43.91],[14.2,2.3,4,4.1,75.31,-7.7,43.91],[17.91,2.9,4,4.7,74,-7.6,43.91],[21.3,3.2,4.1,4.7,73.69,-7.6,43.91],[24.41,4,4,5.4,73.81,-7.7,44],[27.91,5,4,6.9,73.69,-7.7,43.91],[30.91,6.5,4,8.8,73.69,-7.7,43.91],[34.19,8,4,9.8,73.5,-7.7,43.81],[37.5,8.7,4,10.3,72.31,-7.7,43.69],[40.81,9.4,4,10.2,69.69,-7.7,43.69],[43.91,10.8,4,10.8,67.12,-7.7,43.69],[43.91,10.8,4,10.8,67.12,-7.7,43.69],[47.31,12.2,4,11.2,65.69,-7.6,43.81],[49.91,13.8,4,11.4,64.5,-7.6,43.81],[52.09,14.9,3.3,11.4,63.81,-7.7,43.81]],gap_deg:[1.69,2.91,1.93,1.05,2.11,.31,.39],max_speed:[66.2,48.4,46.6,29.6,55.9,7.6,8.4],times:[1,.9,.8,.7,.6,.5,.4,.3,.2,.1],guess_gap:[.077,.067,.062,.059,.052,.043,.033,.022,.013,0],train:{taus:[.1,.5,.9],loss7:[.2208,.0281,.0112]},log:{steps:5e3,batch:32,every:100,loss:[.856,.278,.219,.192,.171,.164,.156,.145,.131,.127,.123,.114,.113,.103,.097,.094,.093,.087,.087,.079,.074,.073,.07,.067,.067,.064,.062,.061,.058,.059,.055,.055,.052,.054,.051,.048,.049,.049,.049,.045,.047,.05,.046,.048,.047,.048,.046,.046,.048,.047],held_out:[[2500,.2388],[5e3,.2921]],minutes:17,passes:18.13}},ce={frame:K_,shape:J_,params:Q_,lang:eg,prefix:tg,state:ng,sheets:ig,layers:sg,vision_layers:ag,vision:rg,similarity:og,matrix:lg,stats:cg,plan:hg},dg=i=>new URL(i,document.baseURI).href;function Gh(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error(`could not load ${i}`)),n.src=dg(i)})}async function ug(i,e){const t=new Zt(await Gh(i));return t.flipY=!1,t.colorSpace=$n,t.minFilter=ai,t.magFilter=Un,t.anisotropy=e,t.needsUpdate=!0,t}function Rt(i,e,t,n=1){const s=new E_(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),e,t,Mn,Xn);return s.colorSpace=$n,s.magFilter=cn,s.minFilter=ai,s.generateMipmaps=!0,s.anisotropy=n,s.needsUpdate=!0,s}async function Vh(i){const e=await Gh(i),t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;const n=t.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});return n.drawImage(e,0,0),{rgba:n.getImageData(0,0,t.width,t.height).data,width:t.width,height:t.height}}async function Gs(i,e){const{rgba:t,width:n,height:s}=await Vh(i.file),a=i.min??0,r=(i.max??1)-a;return{info:i,rgba:t,texture:Rt(t,n,s,e),at(o,l){const c=(l*n+o)*4,h=i.bits===16?(t[c]*256+t[c+1])/65535:t[c]/255;return a+h*r}}}function fg(i,e,t){const n=new Uint8Array(i.length*4);return i.forEach((s,a)=>{const r=Math.round((Math.min(t,Math.max(e,s))-e)/(t-e)*65535);n.set([r>>8,r&255,0,255],a*4)}),{texture:Rt(n,i.length,1),min:e,max:t}}class wl{constructor(e,t,n){this.rows=e,this.patches=t,this.width=n}static async load(e){const{rgba:t,width:n,height:s}=await Vh(e.file),a=e.min??0,r=((e.max??1)-a)/255,o=new Float32Array(n*s);for(let l=0;l<o.length;l++)o[l]=a+t[l*4]*r;return new wl(o,s,n)}to(e){const{rows:t,patches:n,width:s}=this,a=new Float32Array(n),r=e*s;for(let o=0;o<n;o++){let l=0;const c=o*s;for(let h=0;h<s;h++)l+=t[r+h]*t[c+h];a[o]=l}return a[e]=1,a}}const Is=["Overview","The input","Images into patches","The vision encoder","Patches into tokens","One sequence","The vision-language model","The action expert","From noise to a plan","On the arm","How it was trained","The whole path"],Je=i=>[`table_${i}`,`wrist_${i}`],kc=Array.from({length:16},(i,e)=>Je(`stack${e}`)).flat(),ft=i=>i.toLocaleString("en-US"),he=ce,bs=he.lang.mask.filter(Boolean).length,ta=he.lang.mask.length,pg=he.lang.text.slice(0,bs).map(i=>`<span class="tok">${i===`
`?"line break":i.trim()}</span>`).join(" "),Ts=he.sheets.sequence.parts,gn=(he.shape.image/he.shape.patch)**2,si=he.shape.image/he.shape.patch,Yt=Ts[0].end-Ts[0].start,$h=128,mg=$h/(he.shape.patch*4)*(si/4),_g=he.state.norm[6],Nn=he.stats,Jr=i=>`${Math.round(i/1e6)}M`,Bc=Nn.picture_update_share.map(i=>i*100),al=Nn.word_jump_layer,gg=Math.round(Nn.word_sizes_before_after[1][Nn.word_jump_tokens[0]]/Nn.word_sizes_before_after[0][Nn.word_jump_tokens[0]]),vg=he.lang.text[Nn.word_jump_tokens[0]].trim(),xg=Math.round(Nn.readings_sink_share_by_layer[al+1]*100),na=["look_table","look_wrist","look_words","look_state"],Be=he.plan,zc=["tr_a","tr_noise","tr_x","tr_u","tr_v","tr_err"],Hc=(i,e)=>`<a href="#" class="jump" data-round="${e}">${i}</a>`,us=(i,e)=>`<a href="#" class="jump" data-vlayer="${e}">${i}</a>`,bi=he.vision,Wh=he.matrix,fs=Wh.inputs,ja=he.similarity.facts,ps=bi.jump_layer,ei=he.shape.vision_layers-1,ia=(i,e,t)=>`<a href="#" class="jump" data-layer="${e}"${t===void 0?"":` data-head="${t}"`}>${i}</a>`,Tt=[{id:"overview",chapter:0,title:"One plan, from pictures to numbers",key:`SmolVLA turns two camera pictures, the arm's ${Be.names.length} readings and one sentence into ${he.shape.chunk} actions, the next 5 seconds of movement, and every colored cell here is a real number from one run.`,body:`
      <p>This is SmolVLA, a small vision-language-action model, making one plan for a Unitree D1 robot arm:
      ${he.shape.chunk} actions, the next 5 seconds of movement. It was fine-tuned on 30 hand-guided demos of one
      task: "${he.frame.task}".</p>
      <p>Every colored cell is a real number from one run of the fine-tuned model on one frame of a demo
      (demo ${he.frame.episode+1}, frame ${he.frame.frame}): the moment of the grasp.</p>
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
      recorded by guiding the arm by hand.</p>`,focus:Je("raw"),view:{ids:Je("raw"),dir:[.16,.1,1],pad:1.2}},{id:"readings",chapter:1,title:"The arm's own readings",body:`
      <p>Seven numbers: six joint angles and the gripper opening, in degrees.</p>
      <p class="mono">[${he.state.deg.join(", ")}]</p>
      <p>Each is rescaled with that joint's average and spread over the 30 demos, so 0 means "as usual". The
      gripper's ${_g.toFixed(2)} says it is more closed than usual: it is on the cube.</p>
      <p>The list is then padded with zeros to ${he.shape.max_dim} numbers, the size the pretrained model expects.
      Only the first 7 cells carry anything.</p>`,focus:["state_in"],view:{ids:["state_in"],dir:[.1,.12,1],pad:1.7}},{id:"instruction",chapter:1,title:"The instruction",body:`
      <p>"${he.frame.task}" is cut into ${bs} tokens:</p>
      <p>${pg}</p>
      <p>There are ${ta} slots. The other ${ta-bs} hold padding, which the model is told to ignore.
      The same sentence was on every frame of every demo.</p>`,focus:["lang_in"],view:{ids:["lang_in"],dir:[.1,.12,1],pad:1.5}},{id:"resize",chapter:2,title:"Fit into a square",body:`
      <p>The vision encoder takes ${he.shape.image} x ${he.shape.image} pictures. Each camera picture is shrunk to
      512 x 384 and placed at the bottom of the square. The ${$h} rows on top are filled with black.</p>
      <p>The black bar keeps the picture's shape, where stretching it to a square would distort it. The base model
      was trained on pictures fitted the same way, so this is what it expects. The price is detail: a quarter of
      the square shows nothing.</p>
      <p>Pixel values are also moved from 0..1 to -1..1.</p>`,focus:Je("512"),view:{ids:Je("512"),dir:[.5,.3,1],pad:1.3}},{id:"patches",chapter:2,title:`Cut into ${ft(gn)} patches`,body:`
      <p>The square is cut into ${si} x ${si} patches of ${he.shape.patch} x ${he.shape.patch} pixels.</p>
      <p>From here on the model never sees a whole picture. It works on this list of ${ft(gn)} patches per
      camera.</p>`,focus:Je("512"),view:{ids:Je("512"),dir:[.18,.12,1],pad:1.15}},{id:"embed",chapter:2,title:"Each patch becomes a column",key:`Each picture is cut into ${ft(gn)} patches of ${he.shape.patch} x ${he.shape.patch} pixels, and each patch becomes a column of ${he.shape.vision_width} numbers.`,body:`
      <p>A patch is 16 x 16 pixels in 3 colors: ${he.shape.vision_width} numbers. One matrix multiplication turns
      them into ${he.shape.vision_width} new numbers, and a learned position code is added so the model knows where
      the patch was.</p>
      <p>The sheet has ${ft(gn)} columns, one per patch in reading order, and ${he.shape.vision_width} rows.</p>
      <p class="how">Point at a column: its patch lights up in the picture behind.</p>`,focus:[...Je("embed"),...Je("512")],labels:Je("embed"),view:{ids:Je("embed"),dir:[.55,.34,1],pad:1.3}},{id:"encoder",chapter:3,title:`${he.shape.vision_layers} layers look across the picture`,key:`A frozen vision encoder of ${he.shape.vision_layers} layers lets every patch look at all the others, so each column ends up describing its patch in context.`,body:`
      <p>The columns pass through ${he.shape.vision_layers} transformer layers (SigLIP,
      ${Math.round(he.params.vision_encoder/1e6)}M parameters), one per outline. In every layer each patch looks
      at all the others, so a column ends up describing its patch in context.</p>
      <p>Move the slider: the filled sheets show the columns after each layer, each layer on its own color
      scale. ${us(`Layer&nbsp;${ei+1}`,ei)} makes every column about ${bi.last_layer_growth}
      times larger, and one last rescaling gives the sheets in front.</p>
      <p>This part is <b>frozen</b>: fine-tuning on the demos did not change it.</p>`,focus:[...Je("layer"),...Je("encoded"),...Je("embed"),"ghost_vision"],labels:["wrist_layer",...Je("encoded"),"ghost_vision","table_embed"],view:{ids:[...Je("embed"),...Je("encoded")],dir:[1,.42,.5],pad:1.1},slider:"vision",vlayer:0},{id:"encoder-sizes",chapter:3,title:"A few columns grow huge",body:`
      <p>A patch is a column of ${he.shape.vision_width} numbers, and its <b>size</b> is how big they are overall.
      Blue marks the patches whose column is far larger than a normal one after the chosen layer.</p>
      <p>In ${us("the first layers",0)} hardly any stand out. At ${us(`layer&nbsp;${ps+1}`,ps)},
      ${bi.big.table[ps]} patches of the table picture and ${bi.big.wrist[ps]} of the wrist picture have
      numbers up to ${bi.jump_ratio} times bigger than a normal patch, and keep them through
      ${us(`layer&nbsp;${ei}`,ei-1)}. ${bi.big_in_both} are at the same places in both pictures;
      ${bi.big_in_black_bar.table} of the table picture's ${bi.big.table[ps]} lie in the black bar.</p>
      <p>The encoder does this by itself: vision transformers are known to use a few patches as notes about the
      whole picture. ${us(`Layer&nbsp;${ei+1}`,ei)} then rewrites every column.</p>`,focus:[...Je("pick"),...Je("size")],alone:!0,view:{ids:[...Je("pick"),...Je("size")],dir:[.1,.06,1],pad:1.1,room:{top:104,bottom:40}},slider:"vision",vlayer:ps},{id:"similar",chapter:3,title:"What the encoder changed",body:`
      <p>Point at a patch in the left picture. Each map shows how similar every other patch's column is to
      it.</p>
      <p><b>Before</b> the encoder, patches that look alike match. <b>After</b> it, a patch matches what shows
      the same thing in the same setting: for a typical patch of the table picture,
      ${ja.table.matches[ja.table.matches.length-1]} others instead of ${ja.table.matches[0]}. Try the
      cube.</p>
      <p>The middle map follows the slider. After ${us(`layer&nbsp;${ei+1}`,ei)} half the
      picture lights up for any patch. That is real: this layer fills
      ${Math.round(ja.table.shared[ei+1]*100)}% of every column with one shared pattern, more of it in
      some patches than in others, so the map shows little else. The encoder's last step evens that out: the
      right-hand map is what the rest of the model gets.</p>`,focus:[...Je("pick"),...Je("before"),...Je("mid"),...Je("after")],alone:!0,view:{ids:[...Je("pick"),...Je("after")],dir:[.1,.06,1],pad:1.1,room:{top:104,bottom:40}},slider:"vision"},{id:"blocks",chapter:4,title:`The grid is cut into ${Yt} blocks`,body:`
      <p>The encoder's work ends here. A small part after it, the <b>connector</b>, turns the ${ft(gn)} patch
      columns of a camera into ${Yt} tokens.</p>
      <p>The ${ft(gn)} columns are still the ${si} x ${si} grid of patches from chapter 2, row by row: the
      encoder changed their numbers, not their order.</p>
      <p>That grid is cut into blocks of 4 x 4 patches: ${si} / 4 = ${si/4} per side, so
      ${si/4} x ${si/4} = <b>${Yt} blocks</b>.</p>
      <p>16 is the number of patches <b>in one block</b>, ${Yt} is the number of blocks:
      ${ft(gn)} / 16 = ${Yt}.</p>`,focus:Je("groups"),view:{ids:Je("groups"),dir:[.5,.3,1],pad:1.3}},{id:"stack",chapter:4,title:"16 columns are glued into one",body:`
      <p>For every block, the columns of its 16 patches are written one after another:
      16 x ${he.shape.vision_width} = <b>${ft(fs)} numbers</b>.</p>
      <p>So ${ft(gn)} short columns become ${Yt} long ones. Nothing is lost: ${Yt} x ${ft(fs)} is the
      same count as ${ft(gn)} x ${he.shape.vision_width}, only rearranged.</p>
      <p class="how">Each band is one of a block's 16 patches, drawn much flatter than it is. Point at a band: its
      block lights up in the picture behind.</p>`,focus:[...Je("groups"),...kc],labels:["table_stack0","wrist_stack0","table_groups"],view:{ids:[...Je("groups"),...Je("stack0"),...Je("stack15")],dir:[.95,.36,.62],pad:1.12}},{id:"matrix",chapter:4,title:`One matrix shrinks ${ft(fs)} to ${he.shape.vlm_width}`,body:`
      <p>The <b>matrix</b> is a table of weights: ${he.shape.vlm_width} rows, ${ft(fs)} columns,
      ${(he.params.connector/1e6).toFixed(1)}M numbers. One block's glued column lies above it, and the token that
      comes out stands on its right.</p>
      <p>Each <b>row</b> makes one number of the token: every weight in the row is multiplied by the number above
      it, and the ${ft(fs)} products are added up. ${he.shape.vlm_width} rows give ${he.shape.vlm_width} numbers.</p>
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
      makes. A cell shows the largest of ${Wh.fold} neighboring weights.</p>`,focus:["matrix","matrix_in","matrix_out","matrix_table","matrix_wrist"],labels:["matrix_in","matrix_out","matrix_name","matrix_row","matrix_table","matrix_wrist"],alone:!0,view:{ids:["matrix","matrix_in","matrix_out","matrix_table","matrix_wrist"],dir:[0,0,1],pad:1.04,room:{top:44,right:130,bottom:84}}},{id:"merge",chapter:4,title:`Each camera is now ${Yt} tokens`,key:`Each block of 4 x 4 patches becomes one token of ${he.shape.vlm_width} numbers, so a camera picture costs the language model ${Yt} tokens instead of ${ft(gn)}.`,body:`
      <p>The matrix does this for every block: <b>${Yt} tokens</b> per camera, one per 64 x 64-pixel square.
      The first ${mg} cover only the black bar.</p>
      <table class="counts">
        <tr><th></th><th>columns</th><th>numbers in each</th></tr>
        <tr><th>out of the encoder</th><td>${ft(gn)}</td><td>${he.shape.vision_width}</td></tr>
        <tr><th>glued by block</th><td>${Yt}</td><td>${ft(fs)}</td></tr>
        <tr><th>after the matrix</th><td>${Yt}</td><td>${he.shape.vlm_width}</td></tr>
      </table>
      <p><b>Why ${he.shape.vlm_width}?</b> It is not calculated from anything. It is the column size of the language
      model that reads the tokens next: its ${he.shape.heads} attention heads work with ${he.shape.head_dim} numbers
      each. A word is ${he.shape.vlm_width} numbers there, so a picture token must be too, to stand beside it.</p>`,focus:[...kc,...Je("merged")],labels:["table_merged","wrist_merged","table_stack0"],view:{ids:[...Je("stack0"),...Je("stack15"),...Je("merged")],dir:[.85,.36,.7],pad:1.12}},{id:"place-images",chapter:5,title:`Picture tokens take the first ${Ts[1].end} places`,body:`
      <p>The model reads one sequence of ${he.prefix.len} tokens, each ${he.shape.vlm_width} numbers.</p>
      <p>The table camera's ${Yt} tokens come first, then the wrist camera's ${Yt}. On the way in,
      their values are multiplied by 31, the square root of ${he.shape.vlm_width}.</p>`,focus:["sequence",...Je("merged")],labels:["sequence",...Je("merged")],view:{ids:["sequence"],dir:[.3,.26,1],pad:1.18}},{id:"place-words",chapter:5,title:`The instruction takes the next ${ta}`,body:`
      <p>Each word token is looked up in the model's vocabulary table, which gives a column of
      ${he.shape.vlm_width} numbers, also multiplied by 31. The ${ta-bs} padding slots are in the
      sequence but masked out.</p>
      <p>The parts are colored on separate scales because they differ so much in size: picture tokens reach
      about ${Math.round(Ts[0].scale/10)*10}, words about ${Math.round(Ts[2].scale)}, the arm's readings
      about ${Ts[3].scale.toFixed(1)}.</p>`,focus:["sequence","lang_embed"],view:{ids:["sequence","lang_embed"],dir:[.5,.3,1],pad:1.12}},{id:"place-state",chapter:5,title:"The arm's readings take the last place",key:`Picture tokens, the instruction and the arm's readings stand in one sequence of ${he.prefix.len} tokens, each ${he.shape.vlm_width} numbers.`,body:`
      <p>The ${he.shape.max_dim} padded readings go through one small matrix to become a single token of
      ${he.shape.vlm_width} numbers: the thin sheet on the right.</p>
      <p>That matrix (${ft(he.params.state_proj)} numbers) is <b>trained</b>: it is one of the few parts outside
      the action expert that the fine-tuning changed.</p>`,focus:["sequence","state_token"],view:{ids:["sequence","state_token"],dir:[.5,.3,1],pad:1.32}},{id:"who-sees-whom",chapter:5,title:"Who may look at whom",body:`
      <p>Tokens exchange information by looking at each other. This grid is the rule: a <b>row</b> is the token
      that looks, a <b>column</b> is what it may look at, both in the order of the sequence. Blue means it
      may.</p>
      <p>The large blue square is the ${2*Yt} picture tokens and the ${bs} words, which all look at
      each other but not at the arm's readings. The ${ta-bs} padding slots neither look nor are
      looked at. The readings token, the thin blue line at the bottom, looks at pictures, words and itself.</p>
      <p class="how">Point at a cell to read who looks at whom.</p>`,focus:["mask","sequence"],view:{ids:["mask"],dir:[0,.05,1],pad:1.06,room:{top:62,right:128,bottom:112}}},{id:"vlm-stack",chapter:6,title:`${he.shape.vlm_layers} layers rework the sequence`,key:`The sequence passes through ${he.shape.vlm_layers} frozen layers of the vision-language model, in which every token looks at the others and is reworked.`,body:`
      <p>The sequence now passes through the <b>vision-language model</b>: ${he.shape.vlm_layers} layers,
      ${Jr(he.params.vlm_text_16_layers)} parameters, frozen.</p>
      <p>The lower sheet is the sequence as it enters a layer. The upper sheet is what that layer <b>adds</b>:
      every token first looks at the others, then is reworked on its own, and both results are added to its
      column. The next layer starts from the sum.</p>
      <p>Move the slider to walk through the layers. A picture token's column has a length of about
      ${ft(Nn.picture_token_size)}, and a layer changes it by only ${Math.min(...Bc).toFixed(0)} to
      ${Math.max(...Bc).toFixed(0)} percent. The readings token starts small and grows
      ${Math.round(Nn.readings_token_size[1]/Nn.readings_token_size[0])} times in the first layer alone.</p>
      <p class="how">Each part of a sheet is colored on its own scale.</p>`,focus:["vlm_stream","vlm_update","ghost_vlm"],labels:["vlm_update","vlm_stream","ghost_vlm"],view:{ids:["vlm_stream","vlm_update"],dir:[.5,.26,1],pad:1.22},slider:"layer",layer:0},{id:"vlm-attention",chapter:6,title:"Tokens look at each other",body:`
      <p>This grid is the looking inside one layer, averaged over its ${he.shape.heads} attention heads. A
      <b>row</b> is the token that looks, a <b>column</b> is what it looks at, and brightness is the share of
      its attention.</p>
      <p>Point at a row: the tiles beside the grid show where that token looks in the two pictures, the words
      and the readings.</p>
      <p>Go to ${ia(`layer ${al+2}`,al+1)}: two bright columns appear. They are the two tokens
      for the word "${vg}". One layer earlier their columns suddenly grew ${gg} times larger, and from here
      on the other tokens put much of their attention on them (the readings token about ${xg}%).
      Language models are known to turn low-content tokens into fixed reference points like this.</p>`,focus:["vlm_attn",...na],labels:["vlm_attn",...na],view:{ids:["vlm_attn",...na],dir:[.14,.08,1],pad:1.22},alone:!0,slider:"layer",look:"vlm",row:he.prefix.len-1},{id:"vlm-keys",chapter:6,title:"What each layer leaves for the expert",key:"The vision-language model runs once per plan and stores keys and values at every layer: they are the action expert's only window onto the pictures, the words and the readings.",body:`
      <p>To be looked at, every token publishes two things in every layer: a <b>key</b>, which says what it is
      about, and a <b>value</b>, which is what it passes on to whoever looks. Each is
      ${he.layers.vlm_k[0].rows} numbers.</p>
      <p>The vision-language model runs <b>once</b> per plan. The keys and values of all
      ${he.shape.vlm_layers} layers are stored. The action expert reads them again and again: they are its only
      window onto the pictures, the words and the readings.</p>
      <p>The model's final output, after the last layer, is never used.</p>`,focus:["vlm_k","vlm_v","vlm_stream","vlm_update","ghost_vlm"],labels:["vlm_k","vlm_v","vlm_update","vlm_stream"],view:{ids:["vlm_stream","vlm_v"],dir:[.5,.26,1],pad:1.2},slider:"layer"},{id:"expert-input",chapter:7,title:`${he.shape.chunk} action tokens, starting from noise`,body:`
      <p>The plan is ${he.shape.chunk} actions, one per 0.1 s. Each action is ${he.shape.max_dim} numbers, the size
      the pretrained model expects; this arm uses the first 7.</p>
      <p>At the start the plan is <b>pure random noise</b>: the small sheet at the back.</p>
      <p>One matrix turns each action's ${he.shape.max_dim} numbers into ${he.shape.expert_width}. Two more mix in
      a code for the noise level (1.0 here: all noise). The result is ${he.shape.chunk} action tokens, the larger
      sheet. These matrices are <b>trained</b>.</p>`,focus:["exp_x","exp_stream","ghost_expert"],labels:["exp_stream","exp_x","ghost_expert"],view:{ids:["exp_x","exp_stream"],dir:[.8,.34,1],pad:1.7},alone:!0,layer:0},{id:"expert-stack",chapter:7,title:"A second stack, beside the first",key:`The action expert is a second stack of ${he.shape.expert_layers} layers and the part the 30 demos trained: ${Jr(he.params.action_expert)} parameters.`,body:`
      <p>The <b>action expert</b> is its own stack of ${he.shape.expert_layers} layers, working on the
      ${he.shape.chunk} action tokens. Its columns are ${he.shape.expert_width} numbers. This is the part the 30
      demos trained: ${Jr(he.params.action_expert)} parameters.</p>
      <p>As before, the lower sheet enters the layer and the upper sheet is what the layer adds.</p>
      <p>The layers alternate. In layers 1, 3, 5, ... an action token looks at the sequence's stored keys and
      values and at the action tokens before it. In layers 2, 4, 6, ... it looks at the sequence only.</p>`,focus:["exp_stream","exp_update","ghost_expert"],labels:["exp_update","exp_stream","ghost_expert"],view:{ids:["exp_stream","exp_update"],dir:[.55,.26,1],pad:1.6},alone:!0,slider:"layer"},{id:"expert-look",chapter:7,title:"Where the action tokens look",key:"Single attention heads of the action expert look at exactly what the task is about: the bin, the gripper, the cube.",body:`
      <p>Each row is an action token, each column a token of the sequence. Below it: where the marked action
      token looks, laid over the two pictures. Point at another row to mark it.</p>
      <p>Averaged over the ${he.shape.heads} heads, the looking is spread out. Single heads are far more focused.
      Try:</p>
      <ul>
        <li>${ia("Layer 2, head 13",1,12)}: the bin</li>
        <li>${ia("Layer 6, head 5",5,4)}: the gripper and the cube</li>
        <li>${ia("Layer 14, head 11",13,10)}: the cube in the wrist picture</li>
        <li>${ia("Layer 4, all heads",3,-1)}: much of it on the arm's readings</li>
      </ul>
      <p>Nobody told the expert where to look. It comes from training: the pretraining on other robots, then
      the 30 demos.</p>`,focus:["exp_attn","exp_own",...na],labels:["exp_attn",...na,"exp_own"],view:{ids:["exp_attn","exp_own","look_wrist","look_words"],dir:[.1,.07,1],pad:1.1},alone:!0,slider:"layer",heads:!0,layer:1,head:-1,look:"exp",row:0},{id:"expert-output",chapter:7,title:"Out comes a direction",body:`
      <p>After the last layer, one more matrix turns each action token back into ${he.shape.max_dim} numbers.</p>
      <p>The result is not a plan yet. It is a <b>direction</b>: for every number of the noisy plan, which way
      to move it and how far. The top 7 rows, the ones this arm uses, are the strong ones.</p>
      <p>This was step 1 of ${he.shape.num_steps}.</p>`,focus:["exp_last","exp_v","exp_stream","ghost_expert"],labels:["exp_v","exp_last"],view:{ids:["exp_last","exp_v"],dir:[.8,.34,1],pad:1.7},alone:!0,layer:he.shape.expert_layers-1},{id:"loop-step",chapter:8,title:"One round: a tenth of the way",body:`
      <p>The direction answers one question: how do I get from the real plan to this noise? So the plan lies
      the other way.</p>
      <p>The noisy plan is moved one tenth of the way against the direction:</p>
      <p class="mono">new plan = plan − 0.1 x direction</p>
      <p>Its noise level drops from 1.0 to 0.9.</p>
      <p>On the right is the same thing as curves: the ${Be.names.length} numbers of each action that this arm
      uses, one band per joint, ${he.shape.chunk} actions from left to right. Right now they are pure noise.</p>`,focus:["den_x","den_v","plot"],labels:["plot","den_x","den_v"],view:{ids:["den_x","den_v","plot"],dir:[.1,.08,1],pad:1.16},alone:!0,slider:"round",round:0,plot:{units:"norm"}},{id:"loop-rounds",chapter:8,title:`${Be.times.length} rounds`,key:`The plan starts as pure noise, and ${Be.times.length} rounds of the action expert turn it into ${he.shape.chunk} actions.`,body:`
      <p>Drag the slider. In every round the action expert runs again, all ${he.shape.expert_layers} layers, on
      the new and less noisy plan. It reads the same stored keys and values, so the vision-language model does
      not run again.</p>
      <p>The curves calm down round by round. After round ${Be.times.length} the noise level is 0 and what is
      left is the plan: ${he.shape.chunk} actions, 5 seconds.</p>
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
      by that joint's spread and its average is added back. The other ${he.shape.max_dim-Be.names.length} numbers
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
      <p>The arm does not play all ${he.shape.chunk} actions. When 30 are left, a new plan is started from new
      pictures.</p>
      <p>While that plan is computed the arm keeps following the old one, and the new plan is steered to agree
      with the actions that run in the meantime. Then it takes over. This is called real-time chunking.</p>
      <p>So about the first 2.3 s of each plan reach the arm: the solid part. The rest is replaced by the next
      plan, which has seen newer pictures.</p>`,focus:["plot"],view:{ids:["plot"],dir:[.1,.08,1],pad:1.3},alone:!0,round:Be.times.length,plot:{units:"deg",executed:23}},{id:"train-mix",chapter:10,title:"Training starts from a demo",body:`
      <p>Training runs the same machinery, with one difference: the answer is known.</p>
      <p>Take a frame of a demo and the ${he.shape.chunk} actions the hand made from there (left). Draw fresh
      noise (middle) and a noise level between 0 and 1. Mix the two (right).</p>
      <p>The mix is what the action expert gets, together with that frame's pictures, the instruction and the
      readings. The slider switches between three noise levels.</p>`,focus:["tr_a","tr_noise","tr_x"],view:{ids:["tr_a","tr_noise","tr_x"],dir:[.1,.08,1],pad:1.3},alone:!0,slider:"noise",noise:1},{id:"train-target",chapter:10,title:"The answer is known",key:"Training mixes a demo's actions with noise and teaches the action expert to output the direction from the demo to the noise.",body:`
      <p>The expert should output the direction from the demo to the noise: noise minus demo (bottom left).
      That target is the same at every noise level.</p>
      <p>Its actual answer is in the middle, and on the right is the error, squared. Training nudges the
      expert's ${(he.params.trainable/1e6).toFixed(1)}M numbers so that this error shrinks. Only the top
      ${Be.names.length} rows count. The other ${he.shape.max_dim-Be.names.length} are never trained, which is
      why their error stays large.</p>
      <p>On those ${Be.names.length} rows the average error here is ${Be.train.loss7[0].toFixed(2)} at noise level
      ${Be.train.taus[0]}, ${Be.train.loss7[1].toFixed(3)} at ${Be.train.taus[1]} and ${Be.train.loss7[2].toFixed(3)}
      at ${Be.train.taus[2]}. Low noise is the hard case: the input is almost the demo itself, and the expert
      has to name the little noise that was added.</p>`,focus:zc,labels:["tr_u","tr_v","tr_err","tr_a","tr_noise","tr_x"],view:{ids:zc,dir:[.1,.08,1],pad:1.22},alone:!0,slider:"noise"},{id:"train-run",chapter:10,title:`${ft(Be.log.steps*Be.log.batch)} of these`,key:`The training error fell from ${Be.log.loss[0].toFixed(2)} to ${Be.log.loss[Be.log.loss.length-1].toFixed(3)}, but on demos kept out of training it was lower at step ${ft(Be.log.held_out[0][0])} than at step ${ft(Be.log.held_out[1][0])}.`,body:`
      <p>The training run did this ${ft(Be.log.steps)} times with ${Be.log.batch} frames each, drawing new noise and a new
      noise level every time: ${ft(Be.log.steps*Be.log.batch)} examples in ${Be.log.minutes} minutes on one GPU,
      about ${Math.round(Be.log.passes)} passes over the 27 demos it trained on.</p>
      <p>The solid curve is the error during training. It falls from ${Be.log.loss[0].toFixed(2)} to
      ${Be.log.loss[Be.log.loss.length-1].toFixed(3)}.</p>
      <p>The dashed line is the same error on the 3 demos kept out of training. It is much higher, and it was
      higher at step ${ft(Be.log.held_out[1][0])} (${Be.log.held_out[1][1].toFixed(2)}) than at step
      ${ft(Be.log.held_out[0][0])} (${Be.log.held_out[0][1].toFixed(2)}). The expert kept getting better at the
      demos it trained on, but not at ones it had not seen. That is a reason to test the
      step-${ft(Be.log.held_out[0][0])} checkpoint on the arm too.</p>`,focus:["loss"],view:{ids:["loss"],dir:[.1,.08,1],pad:1.45},alone:!0},{id:"end",chapter:11,title:"The whole path",key:"On the real arm, this policy picked up the cube and dropped it in the bin on its own in 1 of 5 recorded tests.",body:`
      <p>Two pictures, ${Be.names.length} readings and one sentence go in.</p>
      <p>${ft(gn)} patches per picture become ${Yt} tokens. ${he.prefix.len} tokens pass through
      ${he.shape.vlm_layers} frozen layers, which leave their keys and values behind.</p>
      <p>${he.shape.chunk} noisy action tokens pass through ${he.shape.expert_layers} trained layers
      ${Be.times.length} times, reading those keys and values, and come out as 5 seconds of joint angles. The arm
      runs the first 2 seconds, and the model plans again.</p>
      <p>On the real arm, this policy picked up the cube and dropped it in the bin on its own in 1 of 5
      recorded tests. In 3 more the first approach pushed the cube, and a hand put it back.</p>`,focus:"all",view:{ids:["table_raw","state_in","sequence","mask","ghost_vlm","ghost_expert","plot","loss"],dir:[1,.42,.42],pad:.94}}],yg=i=>{const e=Tt.findIndex(t=>t.id===i);if(e<0)throw new Error(`no step "${i}"`);return e},Gc=new Sn,Za=new I;class Xh extends A_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new On(e,3)),this.setAttribute("uv",new On(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new il(t,6,1);return this.setAttribute("instanceStart",new wi(n,3,0)),this.setAttribute("instanceEnd",new wi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new il(t,6,1);return this.setAttribute("instanceColorStart",new wi(n,3,0)),this.setAttribute("instanceColorEnd",new wi(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new T_(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Gc.setFromBufferAttribute(t),this.boundingBox.union(Gc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Za.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Za)),Za.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Za));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Me.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Xe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};on.line={uniforms:yl.merge([Me.common,Me.fog,Me.line]),vertexShader:`
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
		`};class El extends qn{static get type(){return"LineMaterial"}constructor(e){super({uniforms:yl.clone(on.line.uniforms),vertexShader:on.line.vertexShader,fragmentShader:on.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Qr=new ut,Vc=new I,$c=new I,Bt=new ut,zt=new ut,Bn=new ut,eo=new I,to=new Et,Ht=new C_,Wc=new I,Ka=new Sn,Ja=new Ws,zn=new ut;let Wn,Wi;function Xc(i,e,t){return zn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),zn.multiplyScalar(1/zn.w),zn.x=Wi/t.width,zn.y=Wi/t.height,zn.applyMatrix4(i.projectionMatrixInverse),zn.multiplyScalar(1/zn.w),Math.abs(Math.max(zn.x,zn.y))}function bg(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,a=n.attributes.instanceEnd,r=Math.min(n.instanceCount,s.count);for(let o=0,l=r;o<l;o++){Ht.start.fromBufferAttribute(s,o),Ht.end.fromBufferAttribute(a,o),Ht.applyMatrix4(t);const c=new I,h=new I;Wn.distanceSqToSegment(Ht.start,Ht.end,h,c),h.distanceTo(c)<Wi*.5&&e.push({point:h,pointOnLine:c,distance:Wn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Mg(i,e,t){const n=e.projectionMatrix,a=i.material.resolution,r=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-e.near;Wn.at(1,Bn),Bn.w=1,Bn.applyMatrix4(e.matrixWorldInverse),Bn.applyMatrix4(n),Bn.multiplyScalar(1/Bn.w),Bn.x*=a.x/2,Bn.y*=a.y/2,Bn.z=0,eo.copy(Bn),to.multiplyMatrices(e.matrixWorldInverse,r);for(let f=0,m=h;f<m;f++){if(Bt.fromBufferAttribute(l,f),zt.fromBufferAttribute(c,f),Bt.w=1,zt.w=1,Bt.applyMatrix4(to),zt.applyMatrix4(to),Bt.z>u&&zt.z>u)continue;if(Bt.z>u){const E=Bt.z-zt.z,b=(Bt.z-u)/E;Bt.lerp(zt,b)}else if(zt.z>u){const E=zt.z-Bt.z,b=(zt.z-u)/E;zt.lerp(Bt,b)}Bt.applyMatrix4(n),zt.applyMatrix4(n),Bt.multiplyScalar(1/Bt.w),zt.multiplyScalar(1/zt.w),Bt.x*=a.x/2,Bt.y*=a.y/2,zt.x*=a.x/2,zt.y*=a.y/2,Ht.start.copy(Bt),Ht.start.z=0,Ht.end.copy(zt),Ht.end.z=0;const v=Ht.closestPointToPointParameter(eo,!0);Ht.at(v,Wc);const p=vl.lerp(Bt.z,zt.z,v),d=p>=-1&&p<=1,R=eo.distanceTo(Wc)<Wi*.5;if(d&&R){Ht.start.fromBufferAttribute(l,f),Ht.end.fromBufferAttribute(c,f),Ht.start.applyMatrix4(r),Ht.end.applyMatrix4(r);const E=new I,b=new I;Wn.distanceSqToSegment(Ht.start,Ht.end,b,E),t.push({point:b,pointOnLine:E,distance:Wn.origin.distanceTo(b),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}class Sg extends In{constructor(e=new Xh,t=new El({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let r=0,o=0,l=t.count;r<l;r++,o+=2)Vc.fromBufferAttribute(t,r),$c.fromBufferAttribute(n,r),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Vc.distanceTo($c);const a=new il(s,2,1);return e.setAttribute("instanceDistanceStart",new wi(a,1,0)),e.setAttribute("instanceDistanceEnd",new wi(a,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const a=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Wn=e.ray;const r=this.matrixWorld,o=this.geometry,l=this.material;Wi=l.linewidth+a,o.boundingSphere===null&&o.computeBoundingSphere(),Ja.copy(o.boundingSphere).applyMatrix4(r);let c;if(n)c=Wi*.5;else{const u=Math.max(s.near,Ja.distanceToPoint(Wn.origin));c=Xc(s,u,l.resolution)}if(Ja.radius+=c,Wn.intersectsSphere(Ja)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ka.copy(o.boundingBox).applyMatrix4(r);let h;if(n)h=Wi*.5;else{const u=Math.max(s.near,Ka.distanceToPoint(Wn.origin));h=Xc(s,u,l.resolution)}Ka.expandByScalar(h),Wn.intersectsBox(Ka)!==!1&&(n?bg(this,t):Mg(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Qr),this.material.uniforms.resolution.value.set(Qr.z,Qr.w))}}class rl extends Xh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class wg extends Sg{constructor(e=new rl,t=new El({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class qc{constructor(e,t,n,s){Ye(this,"group",new Es);Ye(this,"series",new Map);Ye(this,"lo");Ye(this,"hi");Ye(this,"loTo");Ye(this,"hiTo");Ye(this,"settled",!1);this.rows=e,this.points=t,this.width=n,this.rowHeight=s,this.lo=new Float32Array(e).fill(-1),this.hi=new Float32Array(e).fill(1),this.loTo=this.lo.slice(),this.hiTo=this.hi.slice()}addSeries(e,t,n,s=!1){const a=new El({linewidth:n,dashed:s,dashSize:1.1,gapSize:.9,worldUnits:!1}),r=Array.from({length:this.rows},()=>{const o=new wg(new rl,a);return o.visible=!1,o.position.z=.25,this.group.add(o),o});this.series.set(e,{role:t,lines:r,material:a,now:null,to:null,xs:null,from:0,until:this.points})}set(e,t,n={}){const s=this.series.get(e);if(this.settled=!1,!t){s.to=s.now=null;for(const o of s.lines)o.visible=!1;return}const a=t.map(o=>Float32Array.from(o)),r=s.now&&s.now.length===a.length&&s.now[0].length===a[0].length;s.to=a,(!r||n.instant)&&(s.now=a.map(o=>o.slice())),s.xs=n.xs??null,s.from=n.from??0,s.until=n.until??a[0].length}setRange(e,t,n,s=!1){this.loTo[e]=t,this.hiTo[e]=n,s&&(this.lo[e]=t,this.hi[e]=n),this.settled=!1}range(e){return[this.loTo[e],this.hiTo[e]]}setColors(e){for(const t of this.series.values())t.material.color.copy(t.role==="later"?e.plan:e[t.role])}setResolution(e,t){for(const n of this.series.values())n.material.resolution.set(e,t)}at(e,t,n){const s=this.rows*this.rowHeight/2-e*this.rowHeight,a=this.rowHeight*.14,r=n===void 0?1:Math.min(1,Math.max(0,(n-this.loTo[e])/(this.hiTo[e]-this.loTo[e]||1))),o=n===void 0?s:s-this.rowHeight+a+r*(this.rowHeight-2*a);return new I(-this.width/2+(t+.5)/this.points*this.width,o,0).add(this.group.position)}tick(e){if(this.settled)return!1;const t=Math.min(1,e*9);let n=!1;const s=(r,o,l)=>{const c=o-r;return Math.abs(c)<l*.002?o:(n=!0,r+c*t)};for(let r=0;r<this.rows;r++){const o=Math.abs(this.hiTo[r]-this.loTo[r])||1;this.lo[r]=s(this.lo[r],this.loTo[r],o),this.hi[r]=s(this.hi[r],this.hiTo[r],o)}const a=this.rowHeight*.14;for(const r of this.series.values())if(!(!r.now||!r.to))for(let o=0;o<r.lines.length;o++){const l=r.now[o],c=r.to[o],h=Math.abs(this.hi[o]-this.lo[o])||1,u=this.rows*this.rowHeight/2-(o+1)*this.rowHeight+a,f=[];for(let g=0;g<l.length;g++){if(l[g]=s(l[g],c[g],h),g<r.from||g>=r.until)continue;const v=r.xs?r.xs[g]:g,p=Math.min(1.08,Math.max(-.08,(l[g]-this.lo[o])/h));f.push(-this.width/2+(v+.5)/this.points*this.width,u+p*(this.rowHeight-2*a),0)}const m=r.lines[o];m.visible=f.length>=6,m.visible&&(m.geometry.dispose(),m.geometry=new rl().setPositions(f),r.material.dashed&&m.computeLineDistances())}return this.settled=!n,!0}}const Gt=ce.plan,Jt=ce.shape.chunk,vn=ce.shape.max_dim,rn=Gt.names.length,Ft=Gt.times.length,no=Gt.train.taus,Yc=' <i class="tag trained">trained</i>',Qa=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−"),jc=i=>`action ${i+1} of ${Jt} (${(i*.1).toFixed(1)} s ahead)`,Eg=i=>i<rn?Gt.names[i]:"not used by this arm",qh=i=>i[0].map((e,t)=>i.map(n=>n[t])),io=qh(Gt.plan_deg),so=qh(Gt.hand_deg);function Tg(i){const{view:e,add:t,at:n}=i,s={round:0,noise:1};let a={units:"norm"};const r=i.endZ+64,o=r+84,l=Jt*.8,c=vn*.6,h=new Map,u=(fe,me,_e,ve,ke,Se,w={})=>{const _=ce.sheets[me],z=new Uint8Array(Jt*vn*4).fill(128),C=Rt(z,Jt,vn),G=t({id:fe,title:fe,note:"",kind:"signed",cols:Jt,rows:vn,width:l,height:c,pos:ve,texture:C,bits:16,min:_.min,max:_.max,parts:[{end:Jt,scale:_.scale??1}],revealAt:n(ke),label:Se,valueAt:(le,ee)=>{var ae;return((ae=h.get(fe).values)==null?void 0:ae.at(le,_e()*vn+ee))??null},...w}),O={id:fe,info:_,bytes:z,texture:C,values:null,block:_e,sheet:G};return h.set(fe,O),Gs(_,1).then(le=>{O.values=le,f(O),Pe()}),G},f=fe=>{if(!fe.values)return;const me=Jt*vn*4;fe.bytes.set(fe.values.rgba.subarray(fe.block()*me,(fe.block()+1)*me)),fe.texture.needsUpdate=!0,e.touch(3)},m=fe=>1-fe/Ft,g=-58;u("den_x","den_x",()=>s.round,[g,15,r],"loop-step",()=>`<b>${s.round===Ft?"The plan":"The noisy plan"}</b><span>noise level ${m(s.round).toFixed(1)}</span>`,{trained:!0}),u("den_v","den_v",()=>Math.min(s.round,Ft-1),[g,-15,r],"loop-step",()=>`<b>The direction</b>${Yc}<span>from round ${Math.min(s.round,Ft-1)+1}</span>`,{trained:!0,when:()=>s.round<Ft});const v=()=>no[s.noise],p=[-26,20,66];u("tr_a","tr_a",()=>0,[p[0],15,o],"train-mix",()=>`<b>A demo: what the hand did</b><span>${Jt} actions x ${vn} numbers, ${rn} used</span>`),u("tr_noise","den_x",()=>0,[p[1],15,o],"train-mix",()=>`<b>Fresh noise</b><span>${Jt} x ${vn}</span>`),u("tr_x","tr_x",()=>s.noise,[p[2],15,o],"train-mix",()=>`<b>Their mix, noise level ${v()}</b><span>${v()} x noise + ${(1-v()).toFixed(1)} x demo</span>`),u("tr_u","tr_u",()=>0,[p[0],-15,o],"train-target",()=>"<b>The target: noise minus demo</b><span>the same at every noise level</span>"),u("tr_v","tr_v",()=>s.noise,[p[1],-15,o],"train-target",()=>`<b>The expert's answer</b>${Yc}<span>from the mix at noise level ${v()}</span>`,{trained:!0});const d=ce.sheets.tr_err;u("tr_err","tr_err",()=>s.noise,[p[2],-15,o],"train-target",()=>`<b>The error, squared</b><span>top ${rn} rows count: ${Gt.train.loss7[s.noise].toFixed(3)} on average</span>`,{kind:"unit",min:d.min,max:d.max,parts:[{end:Jt,scale:1}]});const R=(fe,me)=>Rt(new Uint8Array(fe*me*4),fe,me),E=9,b=110,V=[50,0,r],L=(fe,me)=>`<i class="sw ${fe}"></i>${me}`,T=t({id:"plot",title:"plot",note:"",kind:"unit",cols:Jt,rows:rn,width:b,height:rn*E,pos:V,texture:R(Jt,rn),bits:8,min:0,max:1,revealAt:n("loop-step"),borders:"rows",label:()=>{const fe=[L("plan",a.executed?"the part that runs on the arm":s.round===Ft?"the plan":s.round===0?"pure noise":`after round ${s.round}`)];return a.executed&&fe.push(L("later","replaced by the next plan")),a.guess&&s.round<Ft&&fe.push(L("guess","where the direction points")),a.hand&&fe.push(L("hand","what the hand did")),`<b>The ${rn} numbers of each action this arm uses${a.units==="deg"?", in degrees":""}</b><span class="legend">${fe.join("")}</span>`}}),D=new qc(rn,Jt,b,E);D.group.position.set(...V),D.addSeries("hand","hand",1.6,!0),D.addSeries("later","later",1.5,!0),D.addSeries("guess","guess",1.8),D.addSeries("plan","plan",2.6),e.scene.add(D.group);const M=fe=>{const[me,_e]=D.range(fe),ve=a.units==="deg"?"°":"",ke=Se=>(Number.isInteger(Se)?String(Se):Se.toFixed(1)).replace("-","−");return`${ke(me)}${ve} to ${ke(_e)}${ve}`},x=Gt.names.map((fe,me)=>e.addLabel("",new I(V[0]-b/2-1.2,V[1]+rn*E/2-(me+.5)*E,r),()=>T.shown&&i.rank("plot")!==null?30+me:null,"row left")),P=()=>x.forEach((fe,me)=>fe.innerHTML=`<b>${Gt.names[me]}</b><span>${M(me)}</span>`),$=Gt.log,W=[p[2]+l/2+14+b/2,0,o],Q=34,oe=t({id:"loss",title:"loss",note:"",kind:"unit",cols:$.loss.length,rows:1,width:b,height:Q,pos:W,texture:R($.loss.length,1),bits:8,min:0,max:1,revealAt:n("train-run"),borders:"none",label:()=>`<b>The loss over the ${$.steps.toLocaleString("en-US")} training steps</b><span class="legend">${L("plan","on the demos it trains on")}${L("hand","on the 3 held-out demos")}</span><span>log scale, ${K[0]} at the bottom to ${K[1]} at the top</span>`}),K=[.03,1],se=new qc(1,$.loss.length,b,Q);se.group.position.set(...W),se.addSeries("held","hand",1.8,!0),se.addSeries("train","plan",2.6),se.setRange(0,Math.log10(K[0]),Math.log10(K[1]),!0),se.set("train",[$.loss.map(Math.log10)],{instant:!0});const j=$.held_out.map(([fe])=>fe/$.every-1);se.set("held",[$.held_out.map(([,fe])=>Math.log10(fe))],{xs:j,instant:!0}),e.scene.add(se.group);const pe=(fe,me,_e,ve)=>e.addLabel(_e,se.at(0,fe,Math.log10(me)).add(new I(0,.6,.3)),()=>oe.shown&&i.rank("loss")!==null?40+ve:null,"mark");$.held_out.forEach(([fe,me],_e)=>pe(j[_e]-(_e?9:4),me,`step ${fe.toLocaleString("en-US")}: <b>${me.toFixed(2)}</b>`,_e)),pe($.loss.length-12,$.loss[$.loss.length-1]*1.35,`end: <b>${$.loss[$.loss.length-1].toFixed(3)}</b>`,2),pe(1,$.loss[0]*.62,`step ${$.every}: <b>${$.loss[0].toFixed(2)}</b>`,3);let X=null,de=null,Ee=null;const Pe=()=>{const fe=h.get("den_x").values,me=h.get("den_v").values,_e=h.get("tr_a").values;if(!fe||!me||!_e||X)return;const ve=(ke,Se)=>Array.from({length:rn},(w,_)=>Array.from({length:Jt},(z,C)=>ke.at(C,Se*vn+_)));X=Array.from({length:Ft+1},(ke,Se)=>ve(fe,Se)),de=X.map((ke,Se)=>Se===Ft?ke:ke.map((w,_)=>w.map((z,C)=>z-Gt.times[Se]*me.at(C,Se*vn+_)))),Ee=ve(_e,0),te(!0)},q=fe=>fe.map((me,_e)=>me.map(ve=>ve*Gt.std[_e]+Gt.mean[_e])),te=fe=>{if(!X||!de||!Ee)return;const me=a.units==="deg",_e=s.round,ve=me?_e===Ft?io:q(X[_e]):X[_e];D.set("plan",ve,{until:a.executed??Jt,instant:fe}),D.set("later",a.executed?ve:null,{from:(a.executed??1)-1,instant:!0}),D.set("guess",a.guess&&_e<Ft?me?q(de[_e]):de[_e]:null,{instant:fe}),D.set("hand",a.hand?me?so:Ee:null,{instant:fe});for(let ke=0;ke<rn;ke++)if(!me)D.setRange(ke,-3.3,3.3,fe);else{const Se=[...io[ke],...so[ke]],w=Math.min(...Se),_=Math.max(...Se),z=Math.max(1.5,(_-w)*.12);D.setRange(ke,Math.floor(w-z),Math.ceil(_+z),fe)}P(),e.touch(3)},xe=(fe,me)=>{s.round=Math.min(Ft,Math.max(0,Math.round(fe)));for(const _e of["den_x","den_v"])f(h.get(_e));te(me),i.changed()},ye=fe=>{s.noise=Math.min(no.length-1,Math.max(0,Math.round(fe)));for(const me of["tr_x","tr_v","tr_err"])f(h.get(me));i.changed()},Ie=(fe,me)=>{a=fe??a,te(me),T.mesh.material.uniforms.uSelDim.value=0},ze={den_x:()=>s.round===Ft?"The plan":s.round===0?"The noisy plan: pure noise":`The noisy plan after round ${s.round}`,den_v:()=>`The direction, round ${Math.min(s.round,Ft-1)+1}`,tr_a:()=>"A demo: what the hand did",tr_noise:()=>"Fresh noise",tr_x:()=>`Their mix, noise level ${v()}`,tr_u:()=>"The target: noise minus demo",tr_v:()=>`The expert's answer at noise level ${v()}`,tr_err:()=>"The error, squared"},Ge=new Set([...h.keys(),"plot","loss"]),it=fe=>{var w,_;const me=fe.sheet.spec.id;if(!Ge.has(me))return null;const{col:_e,row:ve}=fe;if(me==="loss"){const z=(_e+1)*$.every,C=$.held_out.find(([G])=>G===z);return{html:`<i>Training loss</i><span>step ${z.toLocaleString("en-US")}</span><b class="val">${$.loss[_e].toFixed(3)}</b>${C?`<span>on the held-out demos: ${C[1].toFixed(3)}</span>`:""}`,action:null}}if(me==="plot"){if(!X||!de||!Ee)return{html:`<i>${Gt.names[ve]}</i>`,action:_e};const z=a.units==="deg",C=z?"°":"",G=ae=>Qa(z?ae*Gt.std[ve]+Gt.mean[ve]:ae)+C,O=s.round,le=z&&O===Ft?Qa(io[ve][_e])+C:G(X[O][ve][_e]);let ee=`<i>${Gt.names[ve]}</i><span>${jc(_e)}</span><span>${O===Ft?"the plan":O===0?"pure noise":`after round ${O}`}</span><b class="val">${le}</b>`;return a.guess&&O<Ft&&(ee+=`<span>where the direction points: ${G(de[O][ve][_e])}</span>`),a.hand&&(ee+=`<span>what the hand did: ${z?Qa(so[ve][_e])+C:G(Ee[ve][_e])}</span>`),a.executed&&(ee+=`<span>${_e<a.executed?"runs on the arm":"replaced by the next plan"}</span>`),{html:ee,action:_e}}const ke=(_=(w=fe.sheet.spec).valueAt)==null?void 0:_.call(w,_e,ve),Se=ke==null?"":`<b class="val">${Qa(ke)}</b>`;return{html:`<i>${ze[me]()}</i><span>${jc(_e)}</span><span>number ${ve+1} of ${vn}: ${Eg(ve)}</span>${Se}`,action:_e}},Ze=fe=>{const me=_e=>fe===null?[]:[[fe,0,fe+1,_e]];for(const _e of h.values())_e.sheet.select(me(vn));T.select(a.executed?[[0,0,a.executed,rn],...me(rn)]:me(rn))},ot=()=>{const fe={plan:e.theme.accent,guess:e.theme.fill,hand:e.theme.hi};D.setColors(fe),se.setColors(fe),e.touch()},F=(fe,me)=>{D.setResolution(fe,me),se.setResolution(fe,me)};return e.resized.push(F),e.themed.push(ot),F(e.renderer.domElement.clientWidth,e.renderer.domElement.clientHeight),ot(),P(),{state:s,rounds:Ft,levels:no,owns:fe=>Ge.has(fe),setRound:xe,setNoise:ye,setMode:Ie,hover:it,select:Ze,retheme:ot,tick:fe=>{D.group.visible=T.shown&&T.reveal>.5,se.group.visible=oe.shown&&oe.reveal>.5;const me=D.tick(fe),_e=se.tick(fe);return me||_e}}}const Zc=["table","wrist"],ao={table:"table camera",wrist:"wrist camera"},xn=ce.matrix,an=xn.rows,xi=xn.inputs/xn.fold,ol=ce.shape.vision_width,Kc=xn.inputs/ol,ms=96,_s=48,Fi=3.2,er=2.4,ll=19,Yh=.14,sa=ll/(1-Yh),Jc=9,Qc=7,Ot=i=>i.toLocaleString("en-US"),jh=i=>i.replace("-","−"),ro=i=>jh(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)),Ag=i=>jh(i.toFixed(4));function Rg(i){const{view:e,add:t}=i,n=i.at("matrix"),s=i.blocksPerSide,a={cam:i.start.cam,block:i.start.block,row:an/2,col:null},[r,o,l]=i.center,c=r-(sa+Qc+ms+er+Fi)/2,h=c+sa/2,u=c+sa+Qc+ms/2,f=o-(er+Fi)/2,m=f+_s/2+er+Fi/2,g=u+ms/2+er+Fi/2,v={table:f+(sa+Jc)/2,wrist:f-(sa+Jc)/2},p=X=>({revealAt:n,overview:!1,dim:!1,when:()=>i.focused(X)}),d={};for(const X of Zc){const de=`matrix_${X}`;d[X]=t({id:de,title:`${X==="table"?"Table":"Wrist"}<i class="more"> camera</i>`,note:"",kind:"image",cols:s,rows:s,width:ll,height:ll,pos:[h,v[X],l],texture:i.pictures[X],inner:ce.shape.image/ce.shape.patch/s,...p(de)}),d[X].gap=d[X].gapTo=Yh}const R=Rt(new Uint8Array([128,128,128,255]),1,1);let E=null;const b=t({id:"matrix",title:"The matrix",note:`${Ot(an)} rows x ${Ot(xn.inputs)} weights`,kind:"signed",cols:xi,rows:an,width:ms,height:_s,pos:[u,f,l],texture:R,bits:8,min:-1,max:1,...p("matrix"),valueAt:(X,de)=>(E==null?void 0:E.at(X,de))??null}),V=new Uint8Array(xi*4).fill(255),L=Rt(V,xi,1,i.aniso),T=X=>{const de=i.encoded[a.cam];return(de.min??0)+V[X*4]/255*((de.max??1)-(de.min??0))},D=t({id:"matrix_in",title:"",note:"",kind:"signed",cols:xi,rows:1,width:ms,height:Fi,pos:[u,m,l],texture:L,bits:8,min:i.encoded[a.cam].min,max:i.encoded[a.cam].max,borders:"none",...p("matrix_in"),label:()=>`<b>The glued column of block ${a.block+1}</b><span>${ao[a.cam]}: ${Ot(xn.inputs)} numbers, lying on its side</span>`,valueAt:X=>T(X),isClipped:X=>V[X*4]===0||V[X*4]===255}),M=new Uint8Array(an*4).fill(255),x=Rt(M,1,an,i.aniso),P=t({id:"matrix_out",title:"",note:"",kind:"signed",cols:1,rows:an,width:Fi,height:_s,pos:[g,f,l],texture:x,bits:16,min:i.merged[a.cam].info.min,max:i.merged[a.cam].info.max,borders:"none",...p("matrix_out"),label:()=>`<b>Its token</b><span>${Ot(an)} numbers</span>`,valueAt:(X,de)=>i.merged[a.cam].at(a.block,de)}),$=X=>()=>b.shown&&b.reveal>0?i.rank(X):null;e.addLabel(`<b>The matrix</b><span>${Ot(an)} rows x ${Ot(xn.inputs)} weights, frozen</span>`,new I(u-ms/2,f-_s/2-.8,l),$("matrix_name"),"below");const W=new I(g+Fi/2+1,f,l),Q=e.addLabel("",W,$("matrix_row"),"side"),oe=()=>{const{cam:X,block:de}=a;for(let q=0;q<xi;q++)V[q*4]=i.gluedByte(X,de,q);L.needsUpdate=!0;const Ee=i.encoded[X];D.setTexture(L,{cols:xi,rows:1,bits:8,min:Ee.min,max:Ee.max}),D.setScale(Ee.scale??1);const Pe=i.merged[X];for(let q=0;q<an;q++){const te=(q*Pe.info.cols+de)*4;M[q*4]=Pe.rgba[te],M[q*4+1]=Pe.rgba[te+1]}x.needsUpdate=!0,P.setTexture(x,{cols:1,rows:an,bits:16,min:Pe.info.min,max:Pe.info.max}),P.setScale(Pe.info.scale??1)},K=()=>{const{cam:X,block:de,row:Ee,col:Pe}=a;b.select(Pe===null?[[0,Ee,xi,Ee+1]]:[[0,Ee,xi,Ee+1],[Pe,0,Pe+1,an]]),D.select(Pe===null?[]:[[Pe,0,Pe+1,1]]),P.select([[0,Ee,1,Ee+1]]);for(const q of Zc)d[q].select(q===X?[[de%s,Math.floor(de/s),de%s+1,Math.floor(de/s)+1]]:[]);W.y=f+_s/2-(Ee+.5)/an*_s,Q.innerHTML=`<b>${ro(i.merged[X].at(de,Ee))}</b><span>made by row ${Ot(Ee+1)}</span>`,e.touch()};oe(),K();const se=X=>{const de=X==null?void 0:X.sheet.spec.id,Ee={...a};let Pe=null;if(a.col=null,X&&de==="matrix"){a.row=X.row,a.col=X.col;const te=X.col*xn.fold,xe=E==null?void 0:E.at(X.col,X.row);Pe=`<i>The matrix</i><span>row ${Ot(X.row+1)} of ${Ot(an)}: it makes number ${Ot(X.row+1)} of a token</span>
        <span>its weights for numbers ${Ot(te+1)} to ${Ot(te+xn.fold)} of the glued column (patch ${Math.floor(te/ol)+1} of ${Kc}): the largest</span>
        ${xe===void 0?"":`<b class="val">${Ag(xe)}</b>`}`}else if(X&&de==="matrix_in"){a.col=X.col;const te=X.col*xn.fold,xe=V[X.col*4]===0?"below ":V[X.col*4]===255?"above ":"";Pe=`<i>Glued column of block ${a.block+1}, ${ao[a.cam]}</i>
        <span>numbers ${Ot(te+1)} to ${Ot(te+xn.fold)} of ${Ot(xn.inputs)} (patch ${Math.floor(te/ol)+1} of ${Kc}): the largest</span>
        <b class="val">${xe}${ro(T(X.col))}</b>`}else X&&de==="matrix_out"?(a.row=X.row,Pe=`<i>Token ${a.block+1} of ${s*s}, ${ao[a.cam]}</i>
        <span>number ${Ot(X.row+1)} of ${Ot(an)}: row ${Ot(X.row+1)} of the matrix times the glued column, added up</span>
        <b class="val">${ro(i.merged[a.cam].at(a.block,X.row))}</b>`):X&&(de==="matrix_table"||de==="matrix_wrist")&&(a.cam=de==="matrix_table"?"table":"wrist",a.block=X.row*s+X.col,Pe=`<i>${a.cam==="table"?"Table camera":"Wrist camera"}</i><span>block ${a.block+1} of ${s*s}</span>
        <span>its glued column lies above the matrix, its token stands right of it</span>`);const q=a.cam!==Ee.cam||a.block!==Ee.block;return q&&oe(),(q||a.row!==Ee.row||a.col!==Ee.col)&&K(),q&&i.changed(),Pe};let j=!1;return{ensure:()=>{if(j)return;j=!0;const X=ce.sheets.connector_matrix;Gs(X,i.aniso).then(de=>{E=de,b.setTexture(de.texture,X),b.setScale(X.scale??1),e.touch(3)})},point:se}}const Oi=ce.layers.vlm_stream.length,aa=ce.shape.heads,ht=ce.shape.chunk,tt=ce.prefix.len,pn=64,Cn=8,ki=ce.lang.mask.filter(Boolean).length,eh=ce.state.names,tr=i=>i.toLocaleString("en-US"),Cg=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−"),gs=i=>(i/255)**2,ti=i=>i>=.0995?`${Math.round(i*100)}%`:i>=95e-5?`${(i*100).toFixed(1)}%`:i>0?"under 0.1%":"0%",th=i=>`action ${i+1} of ${ht} (${(i*.1).toFixed(1)} s ahead)`;function Pg(i){const{view:e,geo:t,add:n,at:s}=i,a={layer:0,head:-1,look:"vlm",row:{vlm:tt-1,exp:0}},r=C=>t.stackZ+C*t.gap,o=(C,G)=>ce.layers[C][G],l=new Map,c=C=>{let G=l.get(C.file);return G||l.set(C.file,G=Gs(C,i.aniso)),G},h=new Map,u=Rt(new Uint8Array([128,128,128,255]),1,1),f=Rt(new Uint8Array([0,0,0,255]),1,1),m=()=>`layer ${a.layer+1}`,g=()=>a.head<0?`average of ${aa} heads`:`head ${a.head+1}`,v=' <i class="tag trained">trained</i>',p={update:61,keys:106,values:135,attn:174},d=ce.shape.vlm_width,R=ce.shape.expert_width,E=[],b=(C,G,O,le,ee,ae,ue,ie={})=>{const re=o(C,0),Te=n({id:C,title:C,note:"",kind:"signed",cols:re.cols,rows:re.rows,width:le,height:ee,pos:[G,O,r(0)],texture:u,bits:8,min:-1,max:1,revealAt:s(ae),label:ue,overview:!1,valueAt:(Re,be)=>{var A;const $e=h.get(C);if(!$e)return null;const He=(A=$e.info.parts)==null?void 0:A.find(S=>Re<S.end);return $e.values.at(Re,be)*((He==null?void 0:He.scale)??1)},isClipped:(Re,be)=>{const $e=h.get(C),He=$e?$e.values.rgba[(be*$e.info.cols+Re)*4]:128;return He===0||He===255},...ie});return E.push({id:C,x:G,y:O,sheet:Te}),Te};b("vlm_stream",t.seqX,0,t.seqW,t.sheetH,"vlm-stack",()=>`<b>The sequence, entering ${m()}</b><span>${tt} tokens x ${d} numbers</span>`,{overview:!0}),b("vlm_update",t.seqX,p.update,t.seqW,t.sheetH,"vlm-stack",()=>`<b>What ${m()} adds</b><span>${tt} tokens x ${d} numbers</span>`,{sweep:.45}),b("vlm_k",t.seqX,p.keys,t.seqW,16,"vlm-keys",()=>`<b>Keys, ${m()}</b><span>${tt} tokens x ${o("vlm_k",0).rows} numbers</span>`),b("vlm_v",t.seqX,p.values,t.seqW,16,"vlm-keys",()=>`<b>Values, ${m()}</b><span>${tt} tokens x ${o("vlm_v",0).rows} numbers</span>`);const V=ht*.8,L=R*.05;b("exp_stream",t.expX,0,V,L,"expert-input",()=>`<b>Action tokens, entering ${m()}</b>${v}<span>${ht} tokens x ${R} numbers</span>`,{overview:!0,trained:!0}),b("exp_update",t.expX,L+13,V,L,"expert-stack",()=>`<b>What ${m()} adds</b><span>${ht} tokens x ${R} numbers</span>`,{sweep:.45,trained:!0});const T=n({id:"vlm_attn",title:"",note:"",kind:"unit",cols:tt,rows:tt,width:t.sheetH,height:t.sheetH,pos:[t.maskX,0,r(0)],texture:f,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,label:()=>`<b>Who looks at whom, ${m()}</b><span>average of ${aa} heads: a row looks at a column</span><span>marked row: ${i.place(a.row.vlm)}</span>`}),D=new Uint8Array(tt*ht*4).fill(255),M=new Uint8Array(ht*ht*4).fill(255),x=Rt(D,tt,ht),P=Rt(M,ht,ht),$=ht*.6,W=t.seqX+t.seqW/2+6+V/2,Q=n({id:"exp_attn",title:"",note:"",kind:"unit",cols:tt,rows:ht,width:t.seqW,height:$,pos:[t.seqX,p.attn,r(0)],texture:x,bits:8,min:0,max:1,revealAt:s("expert-look"),overview:!1,trained:!0,label:()=>`<b>Where the action tokens look, ${m()}</b>${v}<span>${g()}: ${ht} actions (rows) x ${tt} sequence tokens</span><span>marked row: action ${a.row.exp+1}</span>`}),oe=n({id:"exp_own",title:"",note:"",kind:"unit",cols:ht,rows:ht,width:V,height:$,pos:[W,p.attn,r(0)],texture:P,bits:8,min:0,max:1,revealAt:s("expert-look"),overview:!1,trained:!0,when:()=>i.focused("exp_own")&&Ge(),label:()=>`<b>At earlier actions</b><span>${ht} x ${ht}</span>`}),K=48,se={table:new Uint8Array(pn*4).fill(255),wrist:new Uint8Array(pn*4).fill(255)},j={table:Rt(se.table,Cn,Cn),wrist:Rt(se.wrist,Cn,Cn)},pe=new Uint8Array(ki*4).fill(255),X=new Uint8Array(4).fill(255),de=Rt(pe,ki,1),Ee=Rt(X,1,1),Pe={table:0,wrist:0,words:0,state:0,own:0},q=new Uint8Array(tt+ht),te=()=>a.look==="exp"?`action ${a.row.exp+1}`:i.place(a.row.vlm),xe={};for(const C of["table","wrist"])xe[C]=n({id:`look_${C}`,title:"",note:"",kind:"image",cols:Cn,rows:Cn,width:K,height:K,pos:[0,0,r(0)],texture:i.pictures[C],revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused(`look_${C}`),label:()=>`<b>${C==="table"?"Table":"Wrist"} picture</b><span>${ti(Pe[C])}</span>`}),xe[C].setHeat(j[C]),xe[C].gap=xe[C].gapTo=.08;xe.words=n({id:"look_words",title:"",note:"",kind:"unit",cols:ki,rows:1,width:ki*3,height:3.6,pos:[0,0,r(0)],texture:de,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused("look_words"),label:()=>`<b>Words</b><span>${ti(Pe.words)}</span>`}),xe.state=n({id:"look_state",title:"",note:"",kind:"unit",cols:1,rows:1,width:3.6,height:3.6,pos:[0,0,r(0)],texture:Ee,bits:8,min:0,max:1,revealAt:s("vlm-attention"),overview:!1,when:()=>i.focused("look_state"),label:()=>`<b>Arm readings</b><span>${ti(Pe.state)}${a.look==="exp"&&Ge()?`, earlier actions ${ti(Pe.own)}`:""}</span>`});const ye=C=>{const G=r(a.layer),[O,le]=a.look==="exp"?[t.seqX-K/2-3,p.attn-$/2-17-K/2]:[t.maskX+t.sheetH/2+8+K/2,0],ee=le-K/2-10;xe.table.moveTo(O,le,G,C),xe.wrist.moveTo(O+K+6,le,G,C),xe.words.moveTo(O-K/2+ki*3/2,ee,G,C),xe.state.moveTo(O+K/2+6+1.8,ee,G,C)},Ie=(C,G,O,le,ee)=>{const ae=ce.sheets[C],ue=n({id:C,title:C,note:"",kind:"signed",cols:ae.cols,rows:ae.rows,width:V,height:O,pos:[t.expX,0,G],texture:u,bits:8,min:-1,max:1,parts:[{end:ae.cols,scale:ae.scale??1}],revealAt:s(le),label:ee,overview:!1,trained:!0,valueAt:(ie,re)=>{var Re;const Te=h.get(C);return Te?Te.values.at(ie,re)*(((Re=Te.info.parts)==null?void 0:Re[0].scale)??1):null}});c(ae).then(ie=>{h.set(C,{values:ie,info:ae}),ue.setTexture(ie.texture,ae),e.touch(3)})},ze=ce.sheets.exp_x.rows*.6;Ie("exp_x",r(0)-16,ze,"expert-input",()=>`<b>The noisy plan</b><span>${ht} actions x ${ce.sheets.exp_x.rows} numbers, noise level ${ce.stats.times[0].toFixed(1)}</span>`),Ie("exp_last",r(Oi),L,"expert-output",()=>`<b>Action tokens after layer ${Oi}</b><span>${ht} tokens x ${R} numbers</span>`),Ie("exp_v",r(Oi)+16,ze,"expert-output",()=>`<b>The direction</b>${v}<span>${ht} actions x ${ce.sheets.exp_v.rows} numbers</span>`);const Ge=()=>o("exp_attn",a.layer).own===!0,it=()=>{const C=a.look,G=a.row[C],O=h.get("vlm_attn");if(C==="vlm"&&!O)return;const le=re=>C==="vlm"?O.values.rgba[(G*tt+re)*4]:re<tt?D[(G*tt+re)*4]:Ge()?M[(G*ht+re-tt)*4]:0;let ee=0;for(let re=0;re<tt+ht;re++)q[re]=re<tt||C==="exp"?le(re):0,re<tt&&(ee=Math.max(ee,q[re]));const ae=(re,Te)=>{let Re=0;for(let be=re;be<Te;be++)Re+=gs(q[be]);return Re},ue=Math.max(ee,Math.sqrt(.05)*255),ie=re=>Math.min(255,Math.round(q[re]/ue*255));for(let re=0;re<pn;re++)se.table[re*4]=ie(re),se.wrist[re*4]=ie(pn+re);for(let re=0;re<ki;re++)pe[re*4]=ie(2*pn+re);X[0]=ie(tt-1);for(const re of[j.table,j.wrist,de,Ee])re.needsUpdate=!0;Object.assign(Pe,{table:ae(0,pn),wrist:ae(pn,2*pn),words:ae(2*pn,tt-1),state:ae(tt-1,tt),own:C==="exp"?ae(tt,tt+ht):0}),i.changed(),e.touch(3)},Ze=()=>{const C=h.get("exp_attn");if(!C)return;const{rgba:G}=C.values,O=C.info.cols,le=(a.head+1)*ht;for(let ee=0;ee<ht;ee++){const ae=(le+ee)*O;for(let ue=0;ue<tt;ue++)D[(ee*tt+ue)*4]=G[(ae+ue)*4];for(let ue=0;ue<ht;ue++)M[(ee*ht+ue)*4]=O>tt?G[(ae+tt+ue)*4]:0}x.needsUpdate=!0,P.needsUpdate=!0,a.look==="exp"&&it(),e.touch(3)};let ot=-1;const F=(C,G)=>{const O=Math.min(Oi-1,Math.max(0,Math.round(C)));if(O===ot)return;ot=a.layer=O;const le=r(O);for(const{id:ue,x:ie,y:re,sheet:Te}of E){Te.moveTo(ie,re,le,G);const Re=o(ue,O);c(Re).then(be=>{a.layer===O&&(h.set(ue,{values:be,info:Re}),Te.setTexture(be.texture,Re),ue.endsWith("_update")&&Te.shown&&!G&&(Te.reveal=0),e.touch(3))})}T.moveTo(t.maskX,0,le,G),Q.moveTo(t.seqX,p.attn,le,G),oe.moveTo(W,p.attn,le,G),ye(G);const ee=o("vlm_attn",O);c(ee).then(ue=>{a.layer===O&&(h.set("vlm_attn",{values:ue,info:ee}),T.setTexture(ue.texture,{...ee,min:0,max:1}),a.look==="vlm"&&it(),e.touch(3))});const ae=o("exp_attn",O);c(ae).then(ue=>{a.layer===O&&(h.set("exp_attn",{values:ue,info:ae}),Ze())});for(const ue of[1,-1])if(O+ue>=0&&O+ue<Oi)for(const ie of Object.keys(ce.layers))c(o(ie,O+ue));i.changed(),e.touch(3)},fe=C=>{a.head=Math.min(aa-1,Math.max(-1,Math.round(C))),Ze(),i.changed()},me=(C,G)=>{a.look=C,G!==void 0&&(a.row[C]=G),ye(!1),it()},_e=new Set([...E.map(C=>C.id),"vlm_attn","exp_attn","exp_own","look_table","look_wrist","look_words","look_state","exp_x","exp_v","exp_last"]),ve=(C,G,O,le)=>{var ue,ie,re,Te;const ee=(ie=(ue=C.spec).valueAt)==null?void 0:ie.call(ue,G,O);if(ee==null)return`<span>${le}</span>`;const ae=(Te=(re=C.spec).isClipped)!=null&&Te.call(re,G,O)?ee<0?"below ":"above ":"";return`<span>${le}</span><b class="val">${ae}${Cg(ee)}</b>`},ke={vlm_stream:()=>`The sequence, entering ${m()}`,vlm_update:()=>`What ${m()} adds`,vlm_k:()=>`Keys, ${m()}`,vlm_v:()=>`Values, ${m()}`,exp_stream:()=>`Action tokens, entering ${m()}`,exp_update:()=>`What ${m()} adds to the action tokens`,exp_x:()=>"The noisy plan",exp_v:()=>"The direction",exp_last:()=>`Action tokens after layer ${Oi}`},Se=C=>{const G=C.sheet.spec.id;if(!_e.has(G))return null;const{col:O,row:le}=C;if(G.startsWith("vlm_")&&G!=="vlm_attn")return{html:`<i>${ke[G]()}</i><span>place ${O+1} of ${tt}: ${i.place(O)}</span>${ve(C.sheet,O,le,`number ${tr(le+1)} of ${tr(C.sheet.spec.rows)}`)}`,token:O,action:null};if(G==="vlm_attn"){(a.row.vlm!==le||a.look!=="vlm")&&(a.row.vlm=le,a.look==="vlm"&&it());const ue=h.get("vlm_attn"),ie=ue?gs(ue.values.rgba[(le*tt+O)*4]):0;return{html:`<i>${m()}, average of ${aa} heads</i><span>${i.place(le)} (place ${le+1})</span><span>looking at ${i.place(O)} (place ${O+1})</span><b class="val">${ti(ie)}</b>`,token:O,action:null}}if(G==="exp_attn"||G==="exp_own"){a.row.exp!==le&&(a.row.exp=le,a.look==="exp"&&it());const ue=G==="exp_own",ie=gs(ue?M[(le*ht+O)*4]:D[(le*tt+O)*4]),re=ue?O>le?`action ${O+1}, which comes later: not allowed`:`action ${O+1}`:`${i.place(O)} (place ${O+1})`;return{html:`<i>${m()}, ${g()}</i><span>${th(le)}</span><span>looking at ${re}</span><b class="val">${ti(ie)}</b>`,token:ue?null:O,action:le}}if(G==="look_table"||G==="look_wrist"){const ue=G==="look_table"?"table":"wrist",ie=le*Cn+O,re=(ue==="table"?0:pn)+ie;return{html:`<i>Where ${te()} looks</i><span>${ue} picture, block row ${le+1}, column ${O+1}</span><b class="val">${ti(gs(q[re]))}</b>`,token:re,action:null}}if(G==="look_words")return{html:`<i>Where ${te()} looks</i><span>${i.place(2*pn+O)}</span><b class="val">${ti(gs(q[2*pn+O]))}</b>`,token:2*pn+O,action:null};if(G==="look_state")return{html:`<i>Where ${te()} looks</i><span>the arm's readings</span><b class="val">${ti(gs(q[tt-1]))}</b>`,token:tt-1,action:null};const ee=C.sheet.spec.rows,ae=ee===ce.shape.max_dim?`number ${le+1} of ${ee}: ${le<eh.length?eh[le]:"not used by this arm"}`:`number ${tr(le+1)} of ${tr(ee)}`;return{html:`<i>${ke[G]()}</i><span>${th(O)}</span>${ve(C.sheet,O,le,ae)}`,token:null,action:O}},w=C=>{var ee;const G=(ae,ue)=>ue===null?[]:[[ue,0,ue+1,ae.spec.rows]];for(const{id:ae,sheet:ue}of E)ue.select(G(ue,ae.startsWith("vlm_")?C.token:C.action));for(const ae of["exp_x","exp_v","exp_last"]){const ue=z(ae);ue.select(G(ue,C.action))}const O=a.look==="vlm"?[[0,a.row.vlm,tt,a.row.vlm+1]]:[];T.select([...O,...G(T,C.token)]);const le=[0,a.row.exp,tt,a.row.exp+1];Q.select([le,...G(Q,C.token)]),oe.select([[0,a.row.exp,ht,a.row.exp+1]]);for(const ae of["table","wrist"]){const ue=((ee=C.group)==null?void 0:ee.cam)===ae?C.group.m:null;xe[ae].select(ue===null?[]:[[ue%Cn,Math.floor(ue/Cn),ue%Cn+1,Math.floor(ue/Cn)+1]])}xe.words.select(C.word===null||C.word>=ki?[]:[[C.word,0,C.word+1,1]])},_=new Map,z=C=>_.get(C);for(const C of e.sheets)_.set(C.spec.id,C);return ye(!0),F(0,!0),{state:a,layers:Oi,heads:aa,owns:C=>_e.has(C),setLayer:F,setHead:fe,setLook:me,looksAtActions:Ge,hover:Se,select:w}}const ra=["table","wrist"],oo=ce.vision_layers.table.length,Pn=ce.shape.image/ce.shape.patch,lo=Pn*Pn,Lg=8,Dg=i=>i.toLocaleString("en-US");function Ug(i){const{view:e,add:t,at:n}=i,s={layer:0},a=(T,D)=>ce.vision_layers[T][D],r=Rt(new Uint8Array([128,128,128,255]),1,1),o=()=>`layer ${s.layer+1}`,l=T=>ce.vision.typical_size[T][s.layer],c={},h={};for(const T of ra){const D=a(T,0);h[T]=t({id:`${T}_layer`,title:"",note:"",kind:"signed",cols:D.cols,rows:D.rows,width:i.width,height:i.height,pos:[i.lane[T],0,i.slotZ(0)],texture:r,bits:8,min:-1,max:1,revealAt:n("encoder"),label:()=>`<b>After ${o()}</b><span>${Dg(D.cols)} patches x ${D.rows} numbers</span>`,valueAt:(M,x)=>{var P;return((P=c[T])==null?void 0:P.values.at(M,x))??null},isClipped:(M,x)=>{const P=c[T],$=P?P.values.rgba[(x*P.info.cols+M)*4]:128;return $===0||$===255}})}const u={},f={table:new Uint8Array(lo*4),wrist:new Uint8Array(lo*4)},m={table:Rt(f.table,Pn,Pn),wrist:Rt(f.wrist,Pn,Pn)},g=(T,D)=>{var M;return((M=u[T])==null?void 0:M.at(D%Pn,s.layer*Pn+Math.floor(D/Pn)))??null};for(const T of ra)t({id:`${T}_size`,title:"",note:"",kind:"image",cols:Pn,rows:Pn,width:i.mapSide,height:i.mapSide,pos:i.mapPos[T],texture:i.pictures[T],revealAt:n("encoder-sizes"),overview:!1,when:()=>i.focused(`${T}_size`),label:()=>`<b>Largest columns after ${o()}</b><span>typical size ${l(T).toFixed(1)}, largest ${ce.vision.largest_size[T][s.layer].toFixed(0)}</span>`}).setHeat(m[T],"mark");const v=T=>{const D=l(T);for(let M=0;M<lo;M++){const x=(g(T,M)??D)/D;f[T][M*4]=Math.round(Math.min(1,Math.max(0,(x-1)/(Lg-1)))*255)}m[T].needsUpdate=!0},p=new Map,d=T=>{let D=p.get(T.file);return D||p.set(T.file,D=Gs(T,i.aniso)),D};let R=!1,E=-1;const b=(T,D)=>{E=T;const M=new Set;for(const x of ra){h[x].moveTo(i.lane[x],0,i.slotZ(T),D);const P=a(x,T);d(P).then($=>{if(s.layer!==T)return;const W=c[x];c[x]={values:$,info:P},h[x].setTexture($.texture,P),h[x].setScale(P.scale??1),W&&W.info.file!==P.file&&!p.has(W.info.file)&&W.values.texture.dispose(),i.changed(),e.touch(3)}),u[x]&&v(x);for(const $ of[0,1,-1])T+$<0||T+$>=oo||(M.add(a(x,T+$).file),d(a(x,T+$)))}for(const[x,P]of p)M.has(x)||(p.delete(x),P.then($=>{ra.some(W=>{var Q;return((Q=c[W])==null?void 0:Q.info.file)===x})||$.texture.dispose()}));i.changed(),e.touch(3)};return{state:s,layers:oo,ensure:()=>{if(!R){R=!0,b(s.layer,!0);for(const T of ra)Gs(ce.sheets[`${T}_sizes`],1).then(D=>{u[T]=D,v(T),i.changed(),e.touch(3)})}},setLayer:(T,D)=>{const M=Math.min(oo-1,Math.max(0,Math.round(T)));s.layer=M,R&&M!==E&&b(M,D)},sizeOf:g,typical:l}}const Bi=["table","wrist"],yi={table:"Table camera",wrist:"Wrist camera"},Dt={table:-72,wrist:0,lang:64,state:112},co=84,Fe={raw:0,pad:52,embed:104,layers:113,encoded:204,sim:250,groups:296,glued:322,merged:342,seq:400,stack:440},oa=10,Gn=.8,gt=48,yt=ce.shape.image/ce.shape.patch,vs=yt*yt,kt=4,en=yt/kt,nt=en*en,Ms=kt*kt,cl=4.2,nh=.45,zi=16,ho=(i,e)=>(Math.floor(i/en)*kt+Math.floor(e/kt))*yt+i%en*kt+e%kt,ih=i=>Math.floor(Math.floor(i/yt)/kt)*en+Math.floor(i%yt/kt),sh={table:17*yt+17,wrist:29*yt+22},Ig=i=>-gt/2+(Ms-i)*(cl+nh)-nh-cl/2,ni=ce.lang.mask.length,At=ce.prefix.len,pa=At*Gn,Si=Dt.wrist-nt*Gn*1.5,uo=Si+pa/2,fo=Si+pa+12+gt/2,la=160,nr=128,xs=.8,ah=-gt/2-3.5,rh=32,ir=(Dt.table+Dt.wrist)/2,po={table:22,wrist:-22},mo=["before","mid","after"],oh=(Fe.encoded-Fe.layers-9)/(ce.shape.vision_layers-1),Hn=i=>i.toLocaleString("en-US"),ys=i=>(Math.abs(i)>=100?i.toFixed(0):Math.abs(i)>=10?i.toFixed(1):i.toFixed(2)).replace("-","−");async function Ng(i,e){var $e,He;const t=i.renderer.capabilities.getMaxAnisotropy(),n=ce.sheets,s=["table_embed","table_encoded","table_merged","wrist_embed","wrist_encoded","wrist_merged","lang_embed","state_token","sequence","mask"],a=["table_raw","table_512","wrist_raw","wrist_512"];let r=0;const o=s.length+a.length,l=A=>(e(++r,o),A),[c,h]=await Promise.all([Promise.all(s.map(A=>Gs(n[A],t).then(l))),Promise.all(a.map(A=>ug(`data/${A}.jpg`,t).then(l)))]),u=Object.fromEntries(s.map((A,S)=>[A,c[S]])),f=Object.fromEntries(a.map((A,S)=>[A,h[S]])),m=A=>yg(A),g=A=>Tt[A].focus==="all",v=new Map,p=A=>{const S=new Z_(A);return v.set(A.id,S),i.add(S),S},d=(A,S)=>{const N=u[A];return p({id:A,kind:"signed",cols:N.info.cols,rows:N.info.rows,texture:N.texture,bits:N.info.bits,min:N.info.min,max:N.info.max,parts:[{end:N.info.cols,scale:N.info.scale??1}],valueAt:(U,H)=>N.at(U,H),isClipped:(U,H)=>N.info.bits===8&&(N.rgba[(H*N.info.cols+U)*4]===0||N.rgba[(H*N.info.cols+U)*4]===255),...S})},R=(A,S,N)=>{let H=128;for(let J=N*zi;J<(N+1)*zi;J++){const ne=A.rgba[(J*vs+S)*4];Math.abs(ne-127.5)>Math.abs(H-127.5)&&(H=ne)}return H},E={};let b=()=>0;for(const A of Bi){const S=Dt[A],N=yi[A];p({id:`${A}_raw`,title:N,note:"640 x 480 pixels",kind:"image",cols:640,rows:480,width:64,height:gt,pos:[S,0,Fe.raw],texture:f[`${A}_raw`],revealAt:m("cameras")}),p({id:`${A}_512`,title:`${N}, fitted`,note:`512 x 512 pixels, ${yt} x ${yt} patches`,kind:"image",cols:yt,rows:yt,width:51.2,height:51.2,pos:[S,0,Fe.pad],texture:f[`${A}_512`],revealAt:m("resize")}),d(`${A}_embed`,{title:"Patch columns",note:`${Hn(vs)} patches x ${ce.shape.vision_width} numbers`,width:64,height:gt,pos:[S,0,Fe.embed],revealAt:m("embed")}),d(`${A}_encoded`,{title:"After the vision encoder",note:`${Hn(vs)} patches x ${ce.shape.vision_width} numbers`,width:64,height:gt,pos:[S,0,Fe.encoded],revealAt:m("encoder")});const U=rh,H=po[A],J=ir;p({id:`${A}_pick`,title:N,note:"",kind:"image",cols:yt,rows:yt,width:U,height:U,pos:[J-U-5,H,Fe.sim],texture:f[`${A}_512`],revealAt:m("encoder-sizes")});for(const[Ae,Ne]of mo.entries()){const Ve=new Uint8Array(vs*4).fill(255),Qe=Rt(Ve,yt,yt);E[`${A}_${Ne}`]={rgba:Ve,texture:Qe},p({id:`${A}_${Ne}`,title:Ne==="before"?"Before":"After",note:"the encoder",kind:"unit",cols:yt,rows:yt,width:U,height:U,pos:[J+Ae*(U+5),H,Fe.sim],texture:Qe,bits:8,min:0,max:1,revealAt:m("similar"),label:Ne==="mid"?()=>`<b>After</b><span>layer ${b()+1}</span>`:void 0})}p({id:`${A}_groups`,title:`${N}, in blocks`,note:`${en} x ${en} blocks of 4 x 4 patches`,kind:"image",cols:en,rows:en,width:51.2,height:51.2,pos:[S,0,Fe.groups],texture:f[`${A}_512`],revealAt:m("blocks"),inner:kt});const ne=u[`${A}_encoded`],Ce=ne.info.rows/zi;for(let Ae=0;Ae<Ms;Ae++){const Ne=new Uint8Array(nt*Ce*4).fill(255);for(let Qe=0;Qe<nt;Qe++){const bt=ho(Qe,Ae);for(let $t=0;$t<Ce;$t++)Ne[($t*nt+Qe)*4]=R(ne,bt,$t)}const Ve=(ne.info.max??1)-(ne.info.min??0);p({id:`${A}_stack${Ae}`,title:"Glued columns",note:`${nt} columns x ${Hn(Ms*ne.info.rows)} numbers`,kind:"signed",cols:nt,rows:Ce,width:nt*Gn,height:cl,pos:[S,Ig(Ae),Fe.glued],texture:Rt(Ne,nt,Ce,t),bits:8,min:ne.info.min,max:ne.info.max,parts:[{end:nt,scale:ne.info.scale??1}],revealAt:m("stack"),valueAt:(Qe,bt)=>(ne.info.min??0)+Ne[(bt*nt+Qe)*4]/255*Ve,isClipped:(Qe,bt)=>Ne[(bt*nt+Qe)*4]===0||Ne[(bt*nt+Qe)*4]===255})}d(`${A}_merged`,{title:"Merged tokens",note:`${nt} tokens x ${ce.shape.vlm_width} numbers`,width:nt*Gn,height:gt,pos:[S,0,Fe.merged],revealAt:m("merge")})}const V=ce.lang.mask.filter(Boolean).length,L=new Uint8Array(ni*4);ce.lang.mask.forEach((A,S)=>L.set([A?255:0,0,0,255],S*4)),p({id:"lang_in",title:"Instruction",note:`${ni} slots, ${V} used`,kind:"mask",cols:ni,rows:1,width:ni,height:4,pos:[Dt.lang,0,Fe.raw],texture:Rt(L,ni,1),bits:8,min:0,max:1,revealAt:m("instruction")});const T=fg(ce.state.padded,-2,2);p({id:"state_in",title:"Arm readings",note:`${ce.shape.max_dim} numbers, 7 used`,kind:"signed",cols:ce.shape.max_dim,rows:1,width:ce.shape.max_dim,height:4,pos:[Dt.state,0,Fe.raw],texture:T.texture,bits:16,min:T.min,max:T.max,parts:[{end:ce.shape.max_dim,scale:1.5}],revealAt:m("readings"),valueAt:A=>ce.state.padded[A]}),d("lang_embed",{title:"Word columns",note:`${ni} slots x ${ce.shape.vlm_width} numbers`,width:ni*Gn,height:gt,pos:[Dt.lang,0,Fe.merged],revealAt:m("place-words")}),d("state_token",{title:"Readings token",note:`1 token x ${ce.shape.vlm_width} numbers`,width:Gn,height:gt,pos:[co,0,Fe.merged],revealAt:m("place-state"),trained:!0}),d("sequence",{title:"The sequence",note:`${At} tokens x ${ce.shape.vlm_width} numbers`,width:pa,height:gt,pos:[uo,0,Fe.seq],revealAt:m("place-images"),parts:n.sequence.parts.map(A=>({end:A.end,scale:A.scale}))});const D=2*nt,M=[{name:"table picture",start:0,end:nt},{name:"wrist picture",start:nt,end:D},{name:"words",start:D,end:D+V},{name:"padding",start:D+V,end:At-1},{name:"arm readings",start:At-1,end:At}];p({id:"mask",title:"Who may look at whom",note:`${At} x ${At}: a row looks at a column`,kind:"mask",cols:At,rows:At,width:gt,height:gt,pos:[fo,0,Fe.seq],texture:u.mask.texture,bits:8,min:0,max:1,revealAt:m("who-sees-whom"),parts:M.slice(0,4).map(A=>({end:A.end,scale:1})),dividers:"both",label:()=>`<b>Who may look at whom</b><span>${At} x ${At}: a row looks at a column</span>
      <span class="key"><i class="chip yes"></i>may look<i class="chip no"></i>may not</span>`});for(const A of v.values())A.spec.id.endsWith("_groups")&&(A.gap=A.gapTo=.14);const x=[],P=(A,S,N,U,H,J,ne,Ce)=>{const Ae=[];for(let Qe=0;Qe<ne;Qe++){const bt=H+Qe*J;Ae.push(i.addLine([[-N/2,-U/2],[N/2,-U/2],[N/2,U/2],[-N/2,U/2]].map(([$t,vt])=>new I(S+$t,vt,bt)),!0))}const Ne=new Sn(new I(S-N/2,-U/2,H),new I(S+N/2,U/2,H+(ne-1)*J)),Ve=x.find(Qe=>Qe.id===A);Ve?(Ve.lines.push(...Ae),Ve.box.union(Ne)):x.push({id:A,lines:Ae,box:Ne,revealAt:Ce})};for(const A of Bi)P("ghost_vision",Dt[A],64,gt,Fe.layers,oh,ce.shape.vision_layers,m("encoder"));P("ghost_vlm",uo,pa,gt,Fe.stack,oa,ce.shape.vlm_layers,m("vlm-stack")),P("ghost_expert",la,ce.shape.chunk*Gn,ce.shape.expert_width*.05,Fe.stack,oa,ce.shape.expert_layers,m("expert-input"));const $=[],W=(A,S,N)=>$.push({line:i.addLine([new I(A[0],ah,A[1]),new I(S[0],ah,S[1])]),revealAt:N});for(const[A,S]of Bi.entries()){const N=Dt[S],U=[[Fe.pad,"resize"],[Fe.embed,"embed"],[Fe.encoded,"encoder"],[Fe.sim,"similar"],[Fe.groups,"blocks"],[Fe.glued,"stack"],[Fe.merged,"merge"]];let H=Fe.raw;for(const[J,ne]of U)W([N,H],[N,J],m(ne)),H=J;W([N,Fe.merged],[Si+(A+.5)*nt*Gn,Fe.seq],m("place-images"))}W([Dt.lang,Fe.raw],[Dt.lang,Fe.merged],m("place-words")),W([Dt.lang,Fe.merged],[Si+(2*nt+ni/2)*Gn,Fe.seq],m("place-words")),W([Dt.state,Fe.raw],[co,Fe.merged],m("place-state")),W([co,Fe.merged],[Si+(At-.5)*Gn,Fe.seq],m("place-state"));const Q=A=>ce.lang.mask[A]?`"${ce.lang.text[A]===`
`?"line break":ce.lang.text[A].trim()}"`:"padding",oe=A=>A<nt?`table camera token ${A+1}`:A<2*nt?`wrist camera token ${A-nt+1}`:A<At-1?ce.lang.mask[A-2*nt]?`the word ${Q(A-2*nt)}`:"padding":"the arm's readings";let K=0;const se=A=>{const S=Tt[K].focus;return S==="all"||S.includes(A)};let j=()=>{};const pe=Pg({view:i,aniso:t,add:p,at:m,focused:se,geo:{seqX:uo,seqW:pa,maskX:fo,expX:la,sheetH:gt,stackZ:Fe.stack,gap:oa},pictures:{table:f.table_512,wrist:f.wrist_512},place:A=>oe(A),changed:()=>j()}),X=Ug({view:i,aniso:t,add:p,at:m,focused:se,lane:Dt,width:64,height:gt,slotZ:A=>Fe.layers+A*oh,pictures:{table:f.table_512,wrist:f.wrist_512},mapPos:{table:[ir,po.table,Fe.sim],wrist:[ir,po.wrist,Fe.sim]},mapSide:rh,changed:()=>j()});b=()=>X.state.layer;const de=A=>{if(g(K))return null;const N=(Tt[K].labels??Tt[K].focus).indexOf(A);return N<0?null:N},Ee=ce.shape.vision_width/zi,Pe=Rg({view:i,aniso:t,add:p,at:m,focused:se,rank:de,center:[ir,0,(Fe.glued+Fe.merged)/2],pictures:{table:f.table_512,wrist:f.wrist_512},blocksPerSide:en,merged:{table:u.table_merged,wrist:u.wrist_merged},encoded:{table:u.table_encoded.info,wrist:u.wrist_encoded.info},gluedByte:(A,S,N)=>R(u[`${A}_encoded`],ho(S,Math.floor(N/Ee)),N%Ee),start:{cam:"table",block:ih(sh.table)},changed:()=>j()}),q=Fe.stack+ce.shape.expert_layers*oa+16,te=Tg({view:i,aniso:t,add:p,at:m,focused:se,rank:de,changed:()=>j(),expX:la,endZ:q}),xe=new Map,ye=[];for(const A of v.values()){const S=new I;xe.set(A,S);const N=A.spec.trained?' <i class="tag trained">trained</i>':"",U=A.spec.note?`<span>${A.spec.note}</span>`:"",H=i.addLabel(((He=($e=A.spec).label)==null?void 0:He.call($e))??`<b>${A.spec.title}</b>${N}${U}`,S,()=>A.shown&&A.reveal>0?de(A.spec.id):null);A.spec.label&&ye.push([A,H])}const Ie=(A,S,N,U,H=gt/2+2)=>i.addLabel(S,new I(N,H,U),()=>de(A),"ghost");Ie("ghost_vision",`<b>Vision encoder</b><span>${ce.shape.vision_layers} layers, frozen: one outline each</span>`,Dt.wrist-32,(Fe.layers+Fe.encoded)/2,-gt/2-9);const ze=Fe.stack+(ce.shape.vlm_layers-1)*oa;Ie("ghost_vlm",`<b>Vision-language model</b><span>${ce.shape.vlm_layers} layers, frozen</span>`,Si,ze,-gt/2-3),Ie("ghost_expert",`<b>Action expert</b> <i class="tag trained">trained</i><span>${ce.shape.expert_layers} layers</span>`,la-20,ze,-22);const Ge=v.get("mask"),it=A=>()=>{const S=Ge.shown&&Ge.reveal>0?de("mask"):null;return S===null?null:S+.01*(A+1)},Ze=gt/At,ot=fo-gt/2;for(const[A,S]of M.entries()){const N=(S.start+S.end)/2*Ze,U=`<span>${S.end-S.start}</span>`;i.addLabel(`${S.name}${U}`,new I(ot+gt+1,gt/2-N,Fe.seq),it(A),"axis side"),i.addLabel(S.name,new I(ot+N,-gt/2-.8,Fe.seq),it(M.length+A),"axis under")}const F=(A,S,N,U=gt/2+3)=>i.addLabel(A,new I(S,U,N),()=>g(K)?0:null,"station");F("<b>1</b> The input",Dt.table-32,Fe.raw),F("<b>2</b> Images into patches",Dt.table-32,Fe.embed,-gt/2-4),F("<b>3</b> The vision encoder",Dt.table-32,Fe.encoded),F("<b>4</b> Patches into tokens",Dt.table-32,Fe.glued,-gt/2-4),F("<b>5</b> One sequence",Si,Fe.seq),F("<b>6</b> The vision-language model",Si,Fe.stack+75),F("<b>7</b> The action expert",la-20,Fe.stack+75,21),F("<b>8</b> From noise to a plan <b>9</b> On the arm",-60,q+64,28),F("<b>10</b> How it was trained",-46,q+148,28),i.onTick=A=>{te.tick(A)&&i.touch();for(const[S,N]of xe){const U=1/(1-S.gap),H=S.group.position;N.set(H.x-S.spec.width/2*U,H.y+S.spec.height/2*U+1.2,H.z)}};const fe={...sh},me=(A,S)=>S==="mid"?ce.similarity[A].layers[X.state.layer]:ce.similarity[A][S],_e=new Map,ve=A=>{let S=_e.get(A.file);return S||_e.set(A.file,S=wl.load(A)),S},ke=(A,S=mo)=>{for(const N of S){const U=me(A,N);ve(U).then(H=>{if(me(A,N).file!==U.file)return;const J=H.to(fe[A]),{rgba:ne,texture:Ce}=E[`${A}_${N}`];for(let Ae=0;Ae<vs;Ae++)ne[Ae*4]=Math.round(Math.min(1,Math.max(0,J[Ae]))*255);Ce.needsUpdate=!0,i.touch()})}};let Se=!1,w=-1;const _=()=>{const A=X.state.layer;if(!Se||A===w||!v.get("table_mid").shown)return;w=A;const S=new Set;for(const N of Bi){S.add(ce.similarity[N].before.file).add(ce.similarity[N].after.file);for(const U of[0,1,-1]){const H=ce.similarity[N].layers[A+U];H&&(S.add(H.file),ve(H))}ke(N,["mid"])}for(const N of _e.keys())S.has(N)||_e.delete(N)},z=()=>{if(!Se){Se=!0;for(const A of Bi)ke(A,["before","after"])}},C={group:null,word:null,reading:null,active:!1,token:null,action:null},G=A=>{C.token=A,A<2*nt?C.group={cam:Bi[Math.floor(A/nt)],m:A%nt}:A<At-1?C.word=A-2*nt:C.reading="all"},O=A=>[Math.floor(A/yt),A%yt],le=(A,S,N,U)=>{const H=Math.max(0,(S*ce.shape.patch-nr)/xs),J=(U*ce.shape.patch-nr)/xs;return J<=0?[]:[[A*ce.shape.patch/xs,H,N*ce.shape.patch/xs,J]]},ee=()=>{var U;const A=[];for(const[H,J]of Bi.entries()){const ne=((U=C.group)==null?void 0:U.cam)===J?C.group.m:null,[Ce,Ae]=O(fe[J]),Ne=ne??ih(fe[J]),[Ve,Qe]=[Math.floor(Ne/en),Ne%en],[bt,$t,vt,Wt]=ne===null?[Ce,Ae,Ce+1,Ae+1]:[Ve*kt,Qe*kt,(Ve+1)*kt,(Qe+1)*kt],_t=[];for(let wt=bt;wt<vt;wt++)_t.push([wt*yt+$t,0,wt*yt+Wt,ce.shape.vision_width]);const tn=[[$t,bt,Wt,vt]];v.get(`${J}_raw`).select(le($t,bt,Wt,vt));for(const wt of["512","pick",...mo,"size"])v.get(`${J}_${wt}`).select(tn);for(const wt of["embed","encoded","layer"])v.get(`${J}_${wt}`).select(_t);v.get(`${J}_groups`).select([[Qe,Ve,Qe+1,Ve+1]]);for(let wt=0;wt<Ms;wt++)v.get(`${J}_stack${wt}`).select([[Ne,0,Ne+1,ce.shape.vision_width/zi]]);v.get(`${J}_merged`).select([[Ne,0,Ne+1,ce.shape.vlm_width]]),A.push([H*nt+Ne,0,H*nt+Ne+1,ce.shape.vlm_width])}const S=C.word;v.get("lang_in").select(S===null?[]:[[S,0,S+1,1]]),v.get("lang_embed").select(S===null?[]:[[S,0,S+1,ce.shape.vlm_width]]),S!==null&&A.push([2*nt+S,0,2*nt+S+1,ce.shape.vlm_width]);const N=C.reading;v.get("state_in").select(N===null?[]:N==="all"?[[0,0,ce.shape.max_dim,1]]:[[N,0,N+1,1]]),v.get("state_token").select(N===null?[]:[[0,0,1,ce.shape.vlm_width]]),N!==null&&A.push([At-1,0,At,ce.shape.vlm_width]),v.get("sequence").select(A),pe.select(C),te.select(C.action);for(const H of v.values())H.mesh.material.uniforms.uSelDim.value=C.active&&H.spec.kind==="signed"&&H.spec.dim!==!1?.3:0;i.touch()},ae=A=>{const[S,N]=O(A);return`patch ${Hn(A+1)} of ${Hn(vs)} (row ${S+1}, column ${N+1})${(S+1)*ce.shape.patch<=nr?", black padding":""}`},ue=(A,S,N,U)=>{var ne,Ce,Ae,Ne;const H=(Ce=(ne=A.spec).valueAt)==null?void 0:Ce.call(ne,S,N);if(H==null)return"";const J=((Ne=(Ae=A.spec).isClipped)==null?void 0:Ne.call(Ae,S,N))??!1;return`<span>number ${Hn(N+1)} of ${Hn(U)}</span><b class="val">${J?H<0?"below ":"above ":""}${ys(H)}</b>`},ie=A=>{var Ve,Qe,bt,$t;C.group=null,C.word=null,C.reading=null,C.token=null,C.action=null,C.active=A!==null;const S=Pe.point(A);if(!A)return ee(),null;if(S)return ee(),S;const N=A.sheet.spec.id,U=te.hover(A);if(U)return C.action=U.action,ee(),U.html;const H=pe.hover(A);if(H)return H.token!==null&&G(H.token),C.action=H.action,ee(),H.html;const{col:J,row:ne}=A,[Ce,Ae]=N.includes("_")?[N.slice(0,N.indexOf("_")),N.slice(N.indexOf("_")+1)]:[N,""];let Ne="";if(Ce==="table"||Ce==="wrist"){const vt=Ce,Wt=_t=>{fe[vt]!==_t&&(fe[vt]=_t,Se&&ke(vt))};if(Ae==="raw")Ne=`<i>${yi[vt]}</i><span>pixel ${J+1}, ${ne+1}</span>`,Wt(Math.floor((ne*xs+nr)/ce.shape.patch)*yt+Math.floor(J*xs/ce.shape.patch));else if(Ae==="512"||Ae==="pick")Wt(ne*yt+J),Ne=`<i>${yi[vt]}</i><span>${ae(fe[vt])}</span>`;else if(Ae==="embed"||Ae==="encoded"||Ae==="layer"){Wt(J);const _t=Ae==="embed"?"patch columns":Ae==="encoded"?"after the encoder":`after layer ${X.state.layer+1}`;Ne=`<i>${yi[vt]}, ${_t}</i><span>${ae(J)}</span>${ue(A.sheet,J,ne,ce.shape.vision_width)}`}else if(Ae==="size"){const _t=ne*yt+J;Wt(_t);const tn=X.sizeOf(vt,_t);Ne=`<i>${yi[vt]}, after layer ${X.state.layer+1}</i><span>${ae(_t)}</span><span>size of its column (typical ${X.typical(vt).toFixed(1)})</span>${tn===null?"":`<b class="val">${ys(tn)}</b>`}`}else if(Ae==="before"||Ae==="after"||Ae==="mid"){const _t=ne*yt+J,tn=E[N].rgba[_t*4]/255,wt=Ae==="mid"?`after layer ${X.state.layer+1}`:`${Ae} the encoder`;Ne=`<i>${yi[vt]}, ${wt}</i><span>${ae(_t)}</span><span>similarity to the picked patch</span><b class="val">${tn.toFixed(2)}</b>`}else if(Ae.startsWith("stack")){const _t=Number(Ae.slice(5));C.group={cam:vt,m:J};const tn=ho(J,_t),wt=_t*ce.shape.vision_width+ne*zi,Ci=((Qe=(Ve=A.sheet.spec).valueAt)==null?void 0:Qe.call(Ve,J,ne))??0,Ma=($t=(bt=A.sheet.spec).isClipped)!=null&&$t.call(bt,J,ne)?Ci<0?"below ":"above ":"";Ne=`<i>${yi[vt]}, glued columns</i><span>block ${J+1} of ${nt}, band ${_t+1} of ${Ms}: ${ae(tn)}</span><span>numbers ${Hn(wt+1)} to ${Hn(wt+zi)} of ${Hn(Ms*ce.shape.vision_width)}: the largest</span><b class="val">${Ma}${ys(Ci)}</b>`}else if(Ae==="groups"||Ae==="merged"){const _t=Ae==="groups"?ne*en+J:J;C.group={cam:vt,m:_t};const[tn,wt]=[Math.floor(_t/en),_t%en];Ne=`<i>${yi[vt]}</i><span>merged token ${_t+1} of ${nt}: patch rows ${tn*kt+1} to ${(tn+1)*kt}, columns ${wt*kt+1} to ${(wt+1)*kt}</span>`,Ae==="merged"&&(Ne+=ue(A.sheet,J,ne,ce.shape.vlm_width))}}else if(N==="lang_in"||N==="lang_embed")C.word=J,Ne=`<i>Instruction</i><span>slot ${J+1} of ${ni}: ${Q(J)}</span>${N==="lang_embed"?ue(A.sheet,J,ne,ce.shape.vlm_width):""}`;else if(N==="state_in")C.reading=J,Ne=J<7?`<i>Arm readings</i><span>${ce.state.names[J]}: ${ys(ce.state.deg[J])}°, as usual would be ${ys(ce.state.mean[J])}°</span><span>rescaled</span><b class="val">${ys(ce.state.norm[J])}</b>`:`<i>Arm readings</i><span>cell ${J+1} of ${ce.shape.max_dim}: zero padding</span>`;else if(N==="state_token")C.reading="all",Ne=`<i>Readings token</i>${ue(A.sheet,J,ne,ce.shape.vlm_width)}`;else if(N==="sequence")G(J),Ne=`<i>The sequence</i><span>place ${J+1} of ${At}: ${oe(J)}</span>${ue(A.sheet,J,ne,ce.shape.vlm_width)}`;else if(N==="mask"){const vt=u.mask.at(J,ne)>.5;Ne=`<i>Who may look at whom</i><span>${oe(ne)} (place ${ne+1})</span><span>looking at ${oe(J)} (place ${J+1})</span><b class="val">${vt?"allowed":"blocked"}</b>`}return ee(),Ne||null},re=A=>g(A)||A>=m("place-state")?1:A>=m("place-words")?(At-1)/At:A>=m("place-images")?2*nt/At:0,Te=(A,S)=>{var N,U;return(g(S)?A.spec.overview!==!1:S>=A.spec.revealAt&&(!Tt[S].alone||se(A.spec.id)))&&(((U=(N=A.spec).when)==null?void 0:U.call(N))??!0)},Re=()=>({layer:pe.state.layer,layers:pe.layers,head:pe.state.head,heads:pe.heads,looksAtActions:pe.looksAtActions(),vision:X.state.layer,visionLayers:X.layers,round:te.state.round,rounds:te.rounds,noise:te.state.noise,levels:te.levels}),be={setStep:()=>{},boxOf:()=>new Sn,hover:ie,stack:Re,setLayer:pe.setLayer,setHead:pe.setHead,setVisionLayer:X.setLayer,setRound:te.setRound,setNoise:te.setNoise,onStack:()=>{}};return j=()=>{for(const[A,S]of ye)S.innerHTML=A.spec.label();for(const A of v.values()){if(!A.spec.when)continue;const S=A.shown;A.shown=Te(A,K),A.shown!==S&&(A.reveal=A.revealTo=A.shown?1:0)}_(),ee(),be.onStack(Re())},be.setStep=(A,S)=>{K=A;const N=Tt[A];N.look&&pe.setLook(N.look,N.row),N.layer!==void 0&&pe.setLayer(N.layer,S),N.head!==void 0&&pe.setHead(N.head),N.vlayer!==void 0&&X.setLayer(N.vlayer,S),(g(A)||A>=m("encoder"))&&X.ensure(),Math.abs(A-m("matrix"))<=1&&Pe.ensure(),te.setMode(N.plot,S),N.round!==void 0&&te.setRound(N.round,S),N.noise!==void 0&&te.setNoise(N.noise);for(const U of v.values()){const H=U.spec.id;U.shown=Te(U,A),U.revealTo=U.shown?H==="sequence"?re(A):1:0,(!U.shown||S||g(A))&&(U.reveal=U.revealTo),U.fadeTo=se(H)?1:.26,H.endsWith("_512")&&(U.gapTo=g(A)||A>=m("patches")?.18:0),S&&(U.fade=U.fadeTo,U.gap=U.gapTo,U.group.position.set(...U.spec.pos))}for(const U of x)for(const H of U.lines)H.visible=g(A)||A>=U.revealAt&&se(U.id);for(const U of $)U.line.visible=g(A)||A>=U.revealAt&&!Tt[A].alone;(g(A)||A>=m("similar"))&&z(),j(),i.touch(3)},be.boxOf=A=>{const S=new Sn;for(const N of A){const U=v.get(N),H=x.find(J=>J.id===N);if(U)S.union(U.box());else if(H)S.union(H.box);else throw new Error(`nothing called "${N}" to frame`)}return S},ee(),be}const at=i=>document.getElementById(i),hl=at("stage");let qs;try{qs=new X_(hl,at("gl"),at("labels"))}catch(i){throw at("loading-text").textContent="This page needs WebGL, which this browser has turned off or does not support.",i}const Fg=window.matchMedia("(prefers-reduced-motion: reduce)"),As=()=>Fg.matches||new URLSearchParams(location.search).has("still");let jt=null,Ct=0,Tl=!0;const Zh=Is.map((i,e)=>Tt.findIndex(t=>t.chapter===e)),_r=Tt.flatMap((i,e)=>i.key?[e]:[]);let Rs=!1;const Vs=(i,e)=>{if(!Rs)return Math.min(Tt.length-1,Math.max(0,i+e));const t=e>0?_r.filter(n=>n>i):_r.filter(n=>n<i);return t.length===0?i:e>0?t[0]:t[t.length-1]},hr=at("chapters");Is.forEach((i,e)=>{const t=document.createElement("button");t.type="button";const n=Tt.filter(s=>s.chapter===e).map(s=>s.key?'<i class="key"></i>':"<i></i>").join("");t.innerHTML=`<span class="n">${e===0||e===Is.length-1?"":e}</span><span>${i}</span><span class="dots">${n}</span>`,t.addEventListener("click",()=>$s(Zh[e])),hr.append(t)});function Kh(){const i=_r.indexOf(Ct);at("count").textContent=Rs&&i>=0?`key ${i+1} / ${_r.length}`:`${Ct+1} / ${Tt.length}`,at("back").disabled=Vs(Ct,-1)===Ct,at("next").disabled=Vs(Ct,1)===Ct}function ba(i,e){Ct=i;const t=Tt[i];at("step-chapter").textContent=t.chapter===0||t.chapter===Is.length-1?Is[t.chapter]:`Chapter ${t.chapter}: ${Is[t.chapter]}`,at("step-title").textContent=t.title,at("step-key").hidden=!t.key,at("step-key").querySelector("span").textContent=t.key??"",at("step-body").innerHTML=t.body,at("step").scrollTop=0,Kh(),[...hr.children].forEach((n,s)=>{n.classList.toggle("current",s===t.chapter),s===t.chapter&&hr.scrollWidth>hr.clientWidth&&n.scrollIntoView({inline:"center",block:"nearest"}),n.querySelectorAll(".dots i").forEach((a,r)=>{const o=Zh[s]+r;a.classList.toggle("done",o<i),a.classList.toggle("now",o===i)})});try{location.hash.slice(1)!==t.id&&history.replaceState(null,"",`#${t.id}`)}catch{}at("layerbar").hidden=!t.slider,at("head-wrap").hidden=!t.heads,jt&&(jt.setStep(i,e),qs.frame(Jh(),new I(...t.view.dir),t.view.pad,e?0:1.3,t.view.room))}function Jh(){var t;const i=Tt[Ct],e=jt.boxOf(i.view.ids);return i.slider&&!((t=i.view.room)!=null&&t.top)&&(e.max.y+=(e.max.y-e.min.y)*.22),i.plot&&(e.min.x-=Math.min(26,(e.max.x-e.min.x)*.22)),e}const Ei=at("layer"),Cs=at("head");function Og(i){const e=Tt[Ct].slider;if(e==="round"){const n=(1-i.round/i.rounds).toFixed(1),s=i.round===0?"Before round 1":`After round ${i.round} of ${i.rounds}`;return{value:i.round,last:i.rounds,html:`${s} <small>noise level ${n}</small>`}}if(e==="noise")return{value:i.noise,last:i.levels.length-1,html:`Noise level ${i.levels[i.noise]}`};if(e==="vision")return{value:i.vision,last:i.visionLayers-1,html:`After layer ${i.vision+1} of ${i.visionLayers}`};const t=Tt[Ct].id.startsWith("expert-")?` <small>${i.looksAtActions?"looks at the sequence and earlier actions":"looks at the sequence only"}</small>`:"";return{value:i.layer,last:i.layers-1,html:`Layer ${i.layer+1} of ${i.layers}${t}`}}function kg(i){const e=Og(i);if(Ei.min="0",Ei.max=String(e.last),Ei.value=String(e.value),Ei.setAttribute("aria-label",Tt[Ct].slider==="round"?"Round":Tt[Ct].slider==="noise"?"Noise level":"Layer"),at("layer-prev").disabled=e.value===0,at("layer-next").disabled=e.value===e.last,at("layer-text").innerHTML=e.html,Cs.options.length===0){Cs.add(new Option(`all ${i.heads}, averaged`,"-1"));for(let t=0;t<i.heads;t++)Cs.add(new Option(`head ${t+1}`,String(t)))}Cs.value=String(i.head)}function Ns(i,e=Tt[Ct].slider,t){jt&&(e==="round"?jt.setRound(i,As()):e==="noise"?jt.setNoise(i):e==="vision"?jt.setVisionLayer(i,As()):(jt.setLayer(i,As()),t!==void 0&&jt.setHead(t),qs.follow(Jh(),As()?0:.45)))}Ei.addEventListener("input",()=>Ns(Number(Ei.value)));at("layer-prev").addEventListener("click",()=>Ns(Number(Ei.value)-1));at("layer-next").addEventListener("click",()=>Ns(Number(Ei.value)+1));Cs.addEventListener("change",()=>jt==null?void 0:jt.setHead(Number(Cs.value)));at("step-body").addEventListener("click",i=>{const e=i.target.closest("a.jump");if(!e)return;i.preventDefault();const t=e.dataset;t.round!==void 0?Ns(Number(t.round),"round"):t.vlayer!==void 0?Ns(Number(t.vlayer),"vision"):Ns(Number(t.layer),"layer",t.head===void 0?void 0:Number(t.head))});function $s(i){const e=Math.min(Tt.length-1,Math.max(0,i));e!==Ct&&ba(e,As())}at("back").addEventListener("click",()=>$s(Vs(Ct,-1)));at("next").addEventListener("click",()=>$s(Vs(Ct,1)));at("keys").addEventListener("click",()=>{Rs=!Rs,at("keys").setAttribute("aria-pressed",String(Rs)),at("panel").classList.toggle("keys-only",Rs),Kh()});at("reset").addEventListener("click",()=>ba(Ct,As()));window.addEventListener("keydown",i=>{!Tl||i.metaKey||i.ctrlKey||i.altKey||i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement||(i.key==="ArrowRight"||i.key==="PageDown"?$s(Vs(Ct,1)):(i.key==="ArrowLeft"||i.key==="PageUp")&&$s(Vs(Ct,-1)))});const gr=()=>Tt.findIndex(i=>i.id===location.hash.slice(1));window.addEventListener("hashchange",()=>{const i=gr();Tl&&i>=0&&$s(i)});const ca=at("tip");qs.onHover=i=>{const e=jt?jt.hover(i):null;if(ca.classList.toggle("on",!!(i&&e)),!i||!e)return;ca.innerHTML=e;const t=14,n=ca.offsetWidth,s=ca.offsetHeight,a=i.x+t+n>hl.clientWidth?i.x-t-n:i.x+t,r=i.y+t+s>hl.clientHeight?i.y-t-s:i.y+t;ca.style.transform=`translate(${Math.max(4,a)}px, ${Math.max(4,r)}px)`};const Qh=()=>qs.applyTheme();window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Qh);new MutationObserver(Qh).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});ba(Math.max(0,gr()),!0);Ng(qs,(i,e)=>{at("loading-text").textContent=`Loading the model's numbers ${i} / ${e}`}).then(i=>{jt=i,jt.onStack=kg,ba(Ct,!0),at("loading").classList.add("done")}).catch(i=>{console.error(i),at("loading-text").textContent="The model's numbers could not be loaded. Reload the page to try again."});function zg(){return{setActive(i){Tl=i,i&&ba(Math.max(0,gr()>=0?gr():Ct),!0)}}}export{zg as mount};
