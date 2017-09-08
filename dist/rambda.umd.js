(function(c,d){typeof exports==='object'&&typeof module!=='undefined'?d(exports):typeof define==='function'&&define.amd?define(['exports'],d):d(c.R={});})(this,function(e){'use strict';function helper(g,x,y){if(x===void 0){return function(h,j){return helper(g,h,j);};}else if(y===void 0){return function(k){return helper(g,x,k);};}if(y[g]!==void 0){return y[g](x);}}function curry(l){return function(x,y){if(y===void 0){return function(m){return l(x,m);};}return l(x,y);};}function curryThree(n){return function(x,y,z){if(y===void 0){var helper=function helper(q,r){return n(x,q,r);};return curry(helper);}else if(z===void 0){return function(s){return n(x,y,s);};}return n(x,y,z);};}function mathHelper(t,x,y){switch(t){case'+':return x+y;case'-':return x-y;case'/':return x/y;case'*':return x*y;case'%':return x%y;}}var u=curryThree(mathHelper);function oppositeHelper(v,x,y){if(x===void 0){return function(w,A){return oppositeHelper(v,w,A);};}else if(y===void 0){return function(B){return oppositeHelper(v,x,B);};}if(x[v]!==void 0){return x[v](y);}}function propHelper(C,x){if(x===void 0){return function(D){return propHelper(C,D);};}return x[C];}function simpleHelper(E,x){if(x===void 0){return function(G){return simpleHelper(E,G);};}if(x[E]!==void 0){return x[E]();}}function addIndex(H){return function(I){for(var J=0,newFn=function newFn(){for(var K=arguments.length,L=Array(K),M=0;M<K;M++){L[M]=arguments[M];}return I.apply(null,[].concat(L,[J++]));},N=arguments.length,O=Array(N>1?N-1:0),P=1;P<N;P++){O[P-1]=arguments[P];}return H.apply(null,[newFn].concat(O));};}function adjust(Q,R,S){var U=S.concat();return U.map(function(V,W){if(W===R){return Q(S[R]);}return V;});}var X=curryThree(adjust);function filterObject(Y,Z){var a1={};for(var b1 in Z){if(Y(Z[b1])){a1[b1]=Z[b1];}}return a1;}function filter(fn,d1){if(d1.length===void 0){return filterObject(fn,d1);}var e1=-1,f1=0,g1=d1.length,h1=[];while(++e1<g1){var i1=d1[e1];if(fn(i1)){h1[f1++]=i1;}}return h1;}var j1=curry(filter);function all(k1,l1){if(arguments.length===1){return function(m1){return all(k1,m1);};}return j1(k1,l1).length===l1.length;}function any(fn,o1){var p1=0;while(p1<o1.length){if(fn(o1[p1])){return!0;}p1++;}return!1;}var q1=curry(any);function allPass(r1,x){if(arguments.length===1){return function(s1){return allPass(r1,s1);};}return!q1(function(t1){return!t1(x);})(r1);}function anyPass(u1,x){if(arguments.length===1){return function(v1){return anyPass(u1,v1);};}return q1(function(w1){return w1(x);})(u1);}function append(x1,y1){var z1=y1.concat();z1.push(x1);return z1;}var A1=curry(append);function both(x,y){return function(B1){return x(B1)&&y(B1);};}var C1=curry(both);function compose(){for(var D1=arguments.length,E1=Array(D1),F1=0;F1<D1;F1++){E1[F1]=arguments[F1];}return function(G1){var H1=E1.slice();while(H1.length>0){G1=H1.pop()(G1);}return G1;};}var I1={},J1=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(K1){return typeof K1;}:function(L1){return L1&&typeof Symbol==="function"&&L1.constructor===Symbol&&L1!==Symbol.prototype?"symbol":typeof L1;},M1=function(){function AwaitValue(N1){this.value=N1;}function AsyncGenerator(O1){var P1,Q1;function send(R1,S1){return new Promise(function(T1,U1){var V1={key:R1,arg:S1,resolve:T1,reject:U1,next:null};if(Q1){Q1=Q1.next=V1;}else{P1=Q1=V1;resume(R1,S1);}});}function resume(W1,X1){try{var Y1=O1[W1](X1),Z1=Y1.value;if(Z1 instanceof AwaitValue){Promise.resolve(Z1.value).then(function(a2){resume("next",a2);},function(b2){resume("throw",b2);});}else{settle(Y1.done?"return":"normal",Y1.value);}}catch(err){settle("throw",err);}}function settle(c2,d2){switch(c2){case"return":P1.resolve({value:d2,done:!0});break;case"throw":P1.reject(d2);break;default:P1.resolve({value:d2,done:!1});break;}P1=P1.next;if(P1){resume(P1.key,P1.arg);}else{Q1=null;}}this._invoke=send;if(typeof O1.return!=="function"){this.return=void 0;}}if(typeof Symbol==="function"&&Symbol.asyncIterator){AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this;};}AsyncGenerator.prototype.next=function(e2){return this._invoke("next",e2);};AsyncGenerator.prototype.throw=function(f2){return this._invoke("throw",f2);};AsyncGenerator.prototype.return=function(g2){return this._invoke("return",g2);};return{wrap:function(fn){return function(){return new AsyncGenerator(fn.apply(this,arguments));};},await:function(i2){return new AwaitValue(i2);}};}(),toConsumableArray=function(j2){if(Array.isArray(j2)){for(var i=0,k2=Array(j2.length);i<j2.length;i++)k2[i]=j2[i];return k2;}else{return Array.from(j2);}};I1;function type(a){var l2=typeof a==='undefined'?'undefined':J1(a);if(a===null){return'Null';}else if(a===void 0){return'Undefined';}else if(l2==='boolean'){return'Boolean';}else if(l2==='number'){return'Number';}else if(l2==='string'){return'String';}else if(Array.isArray(a)){return'Array';}else if(a instanceof RegExp){return'RegExp';}var m2=a.toString();if(m2.startsWith('async')){return'Async';}else if(m2==='[object Promise]'){return'Promise';}else if(m2.includes('function')||m2.includes('=>')){return'Function';}return'Object';}function equals(a,b){if(a===b){return!0;}var n2=type(a);if(n2!==type(b)){return!1;}if(n2==='Array'){var o2=Array.from(a),p2=Array.from(b);return o2.sort().toString()===p2.sort().toString();}if(n2==='Object'){var q2=Object.keys(a);if(q2.length===Object.keys(b).length){if(q2.length===0){return!0;}var r2=!0;q2.map(function(s2){if(r2){var t2=type(a[s2]),u2=type(b[s2]);if(t2===u2){if(t2==='Object'){if(Object.keys(a[s2]).length===Object.keys(b[s2]).length){if(Object.keys(a[s2]).length!==0){if(!equals(a[s2],b[s2])){r2=!1;}}}else{r2=!1;}}else if(!equals(a[s2],b[s2])){r2=!1;}}else{r2=!1;}}});return r2;}}return!1;}var v2=curry(equals);function contains(w2,x2){var y2=-1,z2=!1;while(++y2<x2.length&&!z2){if(v2(x2[y2],w2)){z2=!0;}}return z2;}var A2=curry(contains);function curry$1(f){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return function(){for(var B2=arguments.length,p=Array(B2),C2=0;C2<B2;C2++){p[C2]=arguments[C2];}return function(o){return o.length>=f.length?f.apply(void 0,toConsumableArray(o)):curry$1(f,o);}([].concat(toConsumableArray(a),p));};}var dec=function(x){return x-1;};function defaultTo(D2,E2){if(arguments.length===1){return function(F2){return defaultTo(D2,F2);};}return E2===void 0||!(type(E2)===type(D2))?D2:E2;}function drop(G2,a){return a.slice(G2);}var H2=curry(drop);function dropLast(I2,a){return a.slice(0,-I2);}var J2=curry(dropLast);function either(x,y){return function(K2){return x(K2)||y(K2);};}var L2=curry(either),inc=function(x){return x+1;};function find(fn,N2){return N2.find(fn);}var O2=curry(find);function findIndex(fn,Q2){var R2=Q2.length,S2=-1;while(++S2<R2){if(fn(Q2[S2])){return S2;}}return-1;}var T2=curry(findIndex);function flatten(U2,V2){V2=V2===void 0?[]:V2;for(var i=0;i<U2.length;i++){if(Array.isArray(U2[i])){flatten(U2[i],V2);}else{V2.push(U2[i]);}}return V2;}function flipExport(fn){return function(){for(var X2=arguments.length,Y2=Array(X2),Z2=0;Z2<X2;Z2++){Y2[Z2]=arguments[Z2];}if(Y2.length===1){return function(a3){return fn(a3,Y2[0]);};}else if(Y2.length===2){return fn(Y2[1],Y2[0]);}return void 0;};}function flip(fn){return flipExport(fn);}function has(c3,d3){return d3[c3]!==void 0;}var e3=curry(has);function head(a){if(typeof a==='string'){return a[0]||'';}return a[0];}function ifElse(f3,g3,h3){return function(i3){if(f3(i3)===!0){return g3(i3);}return h3(i3);};}var j3=curryThree(ifElse);function isNil(x){return type(x)==='Undefined'||type(x)==='Null';}function indexOf(x,k3){var l3=-1,m3=k3.length;while(++l3<m3){if(k3[l3]===x){return l3;}}return-1;}var n3=curry(indexOf);function baseSlice(o3,p3,q3){var r3=-1,s3=o3.length;q3=q3>s3?s3:q3;if(q3<0){q3+=s3;}s3=p3>q3?0:q3-p3>>>0;p3>>>=0;var t3=Array(s3);while(++r3<s3){t3[r3]=o3[r3+p3];}return t3;}function init(a){if(typeof a==='string'){return a.slice(0,-1);}return a.length?baseSlice(a,0,-1):[];}function last(a){if(typeof a==='string'){return a[a.length-1]||'';}return a[a.length-1];}function mapObject(fn,v3){var w3={};for(var x3 in v3){w3[x3]=fn(v3[x3]);}return w3;}function map(fn,z3){if(z3.length===void 0){return mapObject(fn,z3);}var A3=-1,B3=z3.length,C3=Array(B3);while(++A3<B3){C3[A3]=fn(z3[A3]);}return C3;}var D3=curry(map);function match(E3,F3){var G3=F3.match(E3);return G3===null?[]:G3;}var H3=curry(match);function merge(I3,J3){return Object.assign({},I3,J3);}var K3=curry(merge);function omit(L3,M3){if(arguments.length===1){return function(N3){return omit(L3,N3);};}if(M3===void 0||M3===null){return void 0;}if(typeof L3==='string'){L3=L3.split(',').map(function(x){return x.trim();});}var O3={};for(var P3 in M3){if(!L3.includes(P3)){O3[P3]=M3[P3];}}return O3;}function partialCurry(fn){var R3=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return function(S3){if(type(fn)==='Async'||type(fn)==='Promise'){return new Promise(function(T3,U3){fn(K3(S3,R3)).then(T3).catch(U3);});}return fn(K3(S3,R3));};}function path(V3,W3){if(arguments.length===1){return function(X3){return path(V3,X3);};}if(W3===null||W3===void 0){return void 0;}var Y3=W3,Z3=0;if(typeof V3==='string'){V3=V3.split('.');}while(Z3<V3.length){if(Y3===null||Y3===void 0){return void 0;}Y3=Y3[V3[Z3]];Z3++;}return Y3;}function pick(a4,b4){if(arguments.length===1){return function(c4){return pick(a4,c4);};}if(!(type(b4)==='Object')){return void 0;}if(type(a4)==='String'){a4=a4.split(',').map(function(x){return x.trim();});}var d4={},e4=0;while(e4<a4.length){if(a4[e4]in b4){d4[a4[e4]]=b4[a4[e4]];}e4++;}return d4;}function pipe(){for(var f4=arguments.length,g4=Array(f4),h4=0;h4<f4;h4++){g4[h4]=arguments[h4];}return compose.apply(void 0,toConsumableArray(g4.reverse()));}function pluck(i4,j4){var k4=[];D3(function(l4){if(!(l4[i4]===void 0)){k4.push(l4[i4]);}},j4);return k4;}var m4=curry(pluck);function prepend(n4,o4){var p4=o4.concat();p4.unshift(n4);return p4;}var q4=curry(prepend);function prop(r4,s4){return s4[r4];}var t4=curry(prop);function propEq(u4,v4,w4){return w4[u4]===v4;}var x4=curryThree(propEq);function range(y4,z4){for(var A4=[],i=y4;i<z4;i++){A4.push(i);}return A4;}function reduce(fn,C4,D4){return D4.reduce(fn,C4);}var E4=curryThree(reduce);function repeat(a,F4){var G4=Array(F4);return G4.fill(a);}var H4=curry(repeat);function replace(I4,J4,K4){return K4.replace(I4,J4);}var L4=curryThree(replace);function sort(fn,N4){var O4=N4.concat();return O4.sort(fn);}var P4=curry(sort);function sortBy(fn,R4){var S4=R4.concat();return S4.sort(function(a,b){var T4=fn(a),U4=fn(b);return T4<U4?-1:T4>U4?1:0;});}var V4=curry(sortBy);function split(W4,X4){return X4.split(W4);}var Y4=curry(split);function splitEvery(Z4,a){Z4=Z4>1?Z4:1;var a5=[],b5=0;while(b5<a.length){a5.push(a.slice(b5,b5+=Z4));}return a5;}var c5=curry(splitEvery);function tap(fn,e5){fn(e5);return e5;}var f5=curry(tap);function tail(g5){return H2(1,g5);}function take(h5,a){if(typeof a==='string'){return a.slice(0,h5);}return baseSlice(a,0,h5);}var i5=curry(take);function takeLast(j5,a){var k5=a.length;j5=j5>k5?k5:j5;if(typeof a==='string'){return a.slice(k5-j5);}j5=k5-j5;return baseSlice(a,j5,k5);}var l5=curry(takeLast);function test(m5,n5){return n5.search(m5)!==-1;}var o5=curry(test);function uniq(p5){var q5=-1,r5=[];while(++q5<p5.length){var s5=p5[q5];if(!A2(s5,r5)){r5.push(s5);}}return r5;}function update(t5,u5,v5){var w5=v5.concat();return w5.fill(u5,t5,t5+1);}var x5=curryThree(update);function values(y5){var z5=[];for(var A5 in y5){z5.push(y5[A5]);}return z5;}var B5=u('+'),always=function always(x){return function(){return x;};},complement=function complement(fn){return function(D5){return!fn(D5);};},E5=oppositeHelper('concat'),F5=u('/'),G5=helper('endsWith'),F=function F(){return!1;},identity=function identity(x){return x;},H5=helper('includes'),I5=helper('join'),J5=helper('lastIndexOf'),K5=propHelper('length'),L5=u('%'),M5=u('*'),not=function not(x){return!x;},N5=helper('padEnd'),O5=helper('padStart'),P5=simpleHelper('reverse'),Q5=helper('startsWith'),R5=u('-'),T=function T(){return!0;},S5=simpleHelper('toLowerCase'),T5=simpleHelper('toString'),U5=simpleHelper('toUpperCase'),V5=simpleHelper('trim');e.add=B5;e.always=always;e.complement=complement;e.concat=E5;e.divide=F5;e.endsWith=G5;e.F=F;e.identity=identity;e.includes=H5;e.join=I5;e.lastIndexOf=J5;e.length=K5;e.modulo=L5;e.multiply=M5;e.not=not;e.padEnd=N5;e.padStart=O5;e.reverse=P5;e.startsWith=Q5;e.subtract=R5;e.T=T;e.toLower=S5;e.toString=T5;e.toUpper=U5;e.trim=V5;e.addIndex=addIndex;e.adjust=X;e.all=all;e.allPass=allPass;e.anyPass=anyPass;e.any=q1;e.append=A1;e.both=C1;e.compose=compose;e.contains=A2;e.curry=curry$1;e.dec=dec;e.defaultTo=defaultTo;e.drop=H2;e.dropLast=J2;e.either=L2;e.inc=inc;e.equals=v2;e.filter=j1;e.find=O2;e.findIndex=T2;e.flatten=flatten;e.flip=flip;e.has=e3;e.head=head;e.ifElse=j3;e.isNil=isNil;e.indexOf=n3;e.init=init;e.last=last;e.map=D3;e.match=H3;e.merge=K3;e.omit=omit;e.partialCurry=partialCurry;e.path=path;e.pick=pick;e.pipe=pipe;e.pluck=m4;e.prepend=q4;e.prop=t4;e.propEq=x4;e.range=range;e.reduce=E4;e.repeat=H4;e.replace=L4;e.sort=P4;e.sortBy=V4;e.split=Y4;e.splitEvery=c5;e.tap=f5;e.tail=tail;e.take=i5;e.takeLast=l5;e.test=o5;e.type=type;e.uniq=uniq;e.update=x5;e.values=values;Object.defineProperty(e,'__esModule',{value:!0});});