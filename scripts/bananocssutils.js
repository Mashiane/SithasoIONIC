
/* bananocssutils */
function banano_bananocssutils_bananoanimejs() {var _B=this;_B.__e=null;_B.__f=[];_B.__10={};_B.__11=[];_B.__12="";_B.__13="1turn";_B.__14="linear";_B.__15="spring";_B.__16="easeInQuad";_B.__17="easeInCubic";_B.__18="easeInQuart";_B.__19="easeInQuint";_B.__1a="easeInSine";_B.__1b="easeInExpo";_B.__1c="easeInCirc";_B.__1d="easeInBack";_B.__1e="easeOutQuad";_B.__1f="easeOutCubic";_B.__20="easeOutQuart";_B.__21="easeOutQuint";_B.__22="easeOutSine";_B.__23="easeOutExpo";_B.__24="easeOutCirc";_B.__25="easeOutBack";_B.__26="easeInBounce";_B.__27="easeInOutQuad";_B.__28="easeInOutCubic";_B.__29="easeInOutQuart";_B.__2a="easeInOutQuint";_B.__2b="easeInOutSine";_B.__2c="easeInOutExpo";_B.__2d="easeInOutCirc";_B.__2e="easeInOutBack";_B.__2f="easeInOutBounce";_B.__30="easeOutBounce";_B.__31="easeOutInQuad";_B.__32="easeOutInCubic";_B.__33="easeOutInQuart";_B.__34="easeOutInQuint";_B.__35="easeOutInSine";_B.__36="easeOutInExpo";_B.__37="easeOutInCirc";_B.__38="easeOutInBack";_B.__39="easeOutInBounce";_B.__3a="alternate";_B.__3b="reverse";_B.__3c="normal";_B.__3d= new banano_bananocssutils_bananoanimejsitem();_B.__3e=false;_B.__3f="";_B.initialize=function(__42,__4d7,__4d8) {_B.__f.length=0;_B.__10=__42;_B.__11.length=0;_B.__3d.initialize();_B.__12=__4d7.toLowerCase();_B.target(__4d8,_B);_B.__3e=false;_B.__3f=_B.cleanid(__4d8,_B);return _B;};_B.cleanid=function(_s) {_s=_B.cstr(_s,_B);_s=_s.toLowerCase();_s=_s.split("#").join("");_s=_s.split(" ").join("");_s=_s.trim();return _s;};_B.cstr=function(_o) {if (is.null(_o) || is.undefined(_o)) {_o="";}if (_o=="null") { return "";}if (_o=="undefined") { return "";}return ""+_o;};_B.animation=function() {var _ajsa;_ajsa= new banano_bananocssutils_bananoanimejsitem();_ajsa.initialize();return _ajsa;};_B.keyframes=function(_kf) {_B.__11.push(_kf.pop());return _B;};_B.target=function(__4dc) {_B.__f.push(__4dc);return _B;};_B.create=function() {var __c,_ani,__4de,__4df,__4e0,__4e1,__4e2,__4e3,__4e4,__4e5;_B.__3e=true;__c=_B.__3d.pop();if (_B.__11.length>0) {__c["keyframes"]=_B.__11;}__c["targets"]=_B.__f;_ani={};if ((typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_update").toLowerCase()]==="function")) {__4de=function(_ani) {if (typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_update").toLowerCase()]==="function") {return _B.__10[("" + _B.__3f + "_" + _B.__12 + "_update").toLowerCase()](_ani,_B)};};__c["update"]=__4de;}if ((typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_begin").toLowerCase()]==="function")) {__4df=function(_ani) {if (typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_begin").toLowerCase()]==="function") {return _B.__10[("" + _B.__3f + "_" + _B.__12 + "_begin").toLowerCase()](_ani,_B)};};__c["begin"]=__4df;}if ((typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_complete").toLowerCase()]==="function")) {__4e0=function(_ani) {if (typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_complete").toLowerCase()]==="function") {return _B.__10[("" + _B.__3f + "_" + _B.__12 + "_complete").toLowerCase()](_ani,_B)};};__c["complete"]=__4e0;}if ((typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_loopbegin").toLowerCase()]==="function")) {__4e1=function(_ani) {if (typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_loopbegin").toLowerCase()]==="function") {return _B.__10[("" + _B.__3f + "_" + _B.__12 + "_loopbegin").toLowerCase()](_ani,_B)};};__c["loopBegin"]=__4e1;}if ((typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_loopcomplete").toLowerCase()]==="function")) {__4e2=function(_ani) {if (typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_loopcomplete").toLowerCase()]==="function") {return _B.__10[("" + _B.__3f + "_" + _B.__12 + "_loopcomplete").toLowerCase()](_ani,_B)};};__c["loopComplete"]=__4e2;}if ((typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_Change").toLowerCase()]==="function")) {__4e3=function() {if (typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_change").toLowerCase()]==="function") {return _B.__10[("" + _B.__3f + "_" + _B.__12 + "_change").toLowerCase()](_B)};};__c["change"]=__4e3;}if ((typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_changeBegin").toLowerCase()]==="function")) {__4e4=function(_ani) {if (typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_changeBegin").toLowerCase()]==="function") {return _B.__10[("" + _B.__3f + "_" + _B.__12 + "_changeBegin").toLowerCase()](_ani,_B)};};__c["changeBegin"]=__4e4;}if ((typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_changeComplete").toLowerCase()]==="function")) {__4e5=function(_ani) {if (typeof _B.__10[("" + _B.__3f + "_" + _B.__12 + "_changeComplete").toLowerCase()]==="function") {return _B.__10[("" + _B.__3f + "_" + _B.__12 + "_changeComplete").toLowerCase()](_ani,_B)};};__c["changeComplete"]=__4e5;}_B.__e=anime(__c);};_B.play=function() {if (_B.__3e==false) {_B.create(_B);}_B.__e["play"]();};_B.pause=function() {_B.__e["pause"]();};_B.restart=function() {_B.__e["restart"]();};_B.reverse=function() {_B.__e["reverse"]();};}function banano_bananocssutils_bananoanimejsitem() {var _B=this;_B.__c={};_B.__f=[];_B.initialize=function() {_B.__c={};_B.__f.length=0;return _B;};_B.borderradius=function(__4e6) {_B.change("borderRadius",__4e6,_B);return _B;};_B.fontsize=function(__4e6) {_B.change("fontSize",__4e6,_B);return _B;};_B.alternate=function(_b) {if (is.null(_b) || is.undefined(_b)) { return _B;}if (_b==false) { return _B;}_B.direction("alternate",_B);return _B;};_B.propertyendvalue=function(_prop,__4e7) {_B.__c[_prop]=__4e7;return _B;};_B.delay=function(_d) {if (is.null(_d) || is.undefined(_d)) { return _B;}if (_d=="") { return _B;}_B.__c["delay"]=_d;return _B;};_B.delaycallback=function(__42,__4ce) {var _el,_i,_cb;_el={};_i={};_cb=function(_el,_i) {if (typeof __42[(__4ce).toLowerCase()]==="function") {return __42[(__4ce).toLowerCase()](_el,_i,_B)};};_B.__c["delay"]=_cb;return _B;};_B.translatexcallback=function(__42,__4ce) {var _el,_i,_cb;_el={};_i={};_cb=function(_el,_i) {if (typeof __42[(__4ce).toLowerCase()]==="function") {return __42[(__4ce).toLowerCase()](_el,_i,_B)};};_B.__c["translateX"]=_cb;return _B;};_B.updatecallback=function(__42,__4ce,_elid,_obj) {var _cb;_cb=function(_obj) {if (typeof __42[(__4ce).toLowerCase()]==="function") {return __42[(__4ce).toLowerCase()](_obj,_elid,_B)};};_B.__c["update"]=_cb;return _B;};_B.translateycallback=function(__42,__4ce) {var _el,_i,_cb;_el={};_i={};_cb=function(_el,_i) {if (typeof __42[(__4ce).toLowerCase()]==="function") {return __42[(__4ce).toLowerCase()](_el,_i,_B)};};_B.__c["translateY"]=_cb;return _B;};_B.scalecallback=function(__42,__4ce) {var _el,_i,_l,_cb;_el={};_i={};_l={};_cb=function(_el,_i,_l) {if (typeof __42[(__4ce).toLowerCase()]==="function") {return __42[(__4ce).toLowerCase()](_el,_i,_l,_B)};};_B.__c["scale"]=_cb;return _B;};_B.rotatecallback=function(__42,__4ce) {var _cb;_cb=function() {if (typeof __42[(__4ce).toLowerCase()]==="function") {return __42[(__4ce).toLowerCase()](_B)};};_B.__c["rotate"]=_cb;return _B;};_B.borderradiuscallback=function(__42,__4ce) {var _cb;_cb=function() {if (typeof __42[(__4ce).toLowerCase()]==="function") {return __42[(__4ce).toLowerCase()](_B)};};_B.__c["borderRadius"]=_cb;return _B;};_B.durationcallback=function(__42,__4ce) {var _cb;_cb=function() {if (typeof __42[(__4ce).toLowerCase()]==="function") {return __42[(__4ce).toLowerCase()](_B)};};_B.__c["duration"]=_cb;return _B;};_B.value=function(_v) {if (is.null(_v) || is.undefined(_v)) { return _B;}if (_v=="") { return _B;}_B.__c["value"]=_v;return _B;};_B.opacity=function(_v) {if (is.null(_v) || is.undefined(_v)) { return _B;}if (_v=="") { return _B;}_B.__c["opacity"]=_v;return _B;};_B.easing=function(_e) {if (is.null(_e) || is.undefined(_e)) { return _B;}if (_e=="") { return _B;}_B.__c["easing"]=_e;return _B;};_B.steps=function(__4ee) {if (is.null(__4ee) || is.undefined(__4ee)) { return _B;}if (__4ee=="") { return _B;}_B.__c["easing"]="steps(" + __4ee + ")";return _B;};_B.cubicbezier=function(_x1,_y1,_x2,_y2) {_B.__c["easing"]="cubicBezier(" + _x1 + ", " + _y1 + ", " + _x2 + ", " + _y2 + "})";return _B;};_B.spring=function(_mass,__4f4,__4f5,__4f6) {_B.__c["easing"]="spring(" + _mass + ", " + __4f4 + ", " + __4f5 + ", " + __4f6 + ")";return _B;};_B.easeinelastic=function(__4f7,__4f8) {_B.__c["easing"]="easeInElastic(" + __4f7 + ", " + __4f8 + ")";return _B;};_B.easeoutelastic=function(__4f7,__4f8) {_B.__c["easing"]="easeOutElastic(" + __4f7 + ", " + __4f8 + ")";return _B;};_B.easeinoutelastic=function(__4f7,__4f8) {_B.__c["easing"]="easeInOutElastic(" + __4f7 + ", " + __4f8 + ")";return _B;};_B.easeoutinelastic=function(__4f7,__4f8) {_B.__c["easing"]="easeOutInElastic(" + __4f7 + ", " + __4f8 + ")";return _B;};_B.duration=function(_d) {if (is.null(_d) || is.undefined(_d)) { return _B;}if (_d=="") { return _B;}_B.__c["duration"]=_d;return _B;};_B.pop=function() {if (_B.__f.length>0) {_B.__c["targets"]=_B.__f;}return _B.__c;};_B.change=function(_prop,__4f9) {_B.__c[_prop]=__4f9;return _B;};_B.change1=function(_prop,__4fa,__4e6) {var __4fb;__4fb=[];__4fb.length=0;__4fb.push(__4fa);__4fb.push(__4e6);_B.__c[_prop]=__4fb;return _B;};_B.left=function(_l) {if (is.null(_l) || is.undefined(_l)) { return _B;}if (_l=="") { return _B;}_B.change("left",_l,_B);return _B;};_B.backgroundcolor=function(_bg) {if (is.null(_bg) || is.undefined(_bg)) { return _B;}if (_bg=="") { return _B;}_B.change("backgroundColor",_bg,_B);return _B;};_B.visibility=function(_b) {if (_b) {_B.change1("opacity","0","1",_B);} else {_B.change1("opacity","1","0",_B);}return _B;};_B.color=function(_bg) {if (is.null(_bg) || is.undefined(_bg)) { return _B;}if (_bg=="") { return _B;}_B.change("color",_bg,_B);return _B;};_B.backgroundcolor1=function(_bg1,_bg2) {var __4ff;if (is.null(_bg1) || is.undefined(_bg1)) { return _B;}__4ff=[];__4ff.length=0;__4ff.push(_bg1);__4ff.push(_bg2);_B.change("backgroundColor",__4ff,_B);return _B;};_B.color1=function(_bg1,_bg2) {var __4ff;if (is.null(_bg1) || is.undefined(_bg1)) { return _B;}__4ff=[];__4ff.length=0;__4ff.push(_bg1);__4ff.push(_bg2);_B.change("color",__4ff,_B);return _B;};_B.borderradius1=function(__4fa,__4e6) {_B.change1("borderRadius",__4fa,__4e6,_B);return _B;};_B.scale1=function(__4fa,__4e6) {_B.change1("scale",__4fa,__4e6,_B);return _B;};_B.translatex=function(_x) {if (is.null(_x) || is.undefined(_x)) { return _B;}if (_x=="") { return _B;}_B.change("translateX",_x,_B);return _B;};_B.translatex1=function(_x0,_x1) {var __4ff;__4ff=[];__4ff.length=0;__4ff.push(_x0);__4ff.push(_x1);_B.change("translateX",__4ff,_B);return _B;};_B.translatey=function(_x) {if (is.null(_x) || is.undefined(_x)) { return _B;}if (_x=="") { return _B;}_B.change("translateY",_x,_B);return _B;};_B.translatez=function(_x) {if (is.null(_x) || is.undefined(_x)) { return _B;}if (_x=="") { return _B;}_B.change("translateZ",_x,_B);return _B;};_B.rotate=function(_r) {if (is.null(_r) || is.undefined(_r)) { return _B;}if (_r=="") { return _B;}_B.change("rotate","" + _r + "deg",_B);return _B;};_B.rotatex=function(_r) {if (is.null(_r) || is.undefined(_r)) { return _B;}if (_r=="") { return _B;}_B.change("rotateX",_r,_B);return _B;};_B.rotatey=function(_r) {if (is.null(_r) || is.undefined(_r)) { return _B;}_B.change("rotateY",_r,_B);return _B;};_B.rotatez=function(_r) {if (is.null(_r) || is.undefined(_r)) { return _B;}if (_r=="") { return _B;}_B.change("rotateZ",_r,_B);return _B;};_B.scale=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("scale",_s,_B);return _B;};_B.scalex=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("scaleX",_s,_B);return _B;};_B.scaley=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("scaleY",_s,_B);return _B;};_B.scalez=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("scaleZ",_s,_B);return _B;};_B.skew=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("skew",_s,_B);return _B;};_B.skewx=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("skewX",_s,_B);return _B;};_B.skewy=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("skewY",_s,_B);return _B;};_B.perspective=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("perspective",_s,_B);return _B;};_B.roundit=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("round",_s,_B);return _B;};_B.loopit=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("loop",_s,_B);return _B;};_B.basefrequency=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("baseFrequency",_s,_B);return _B;};_B.direction=function(_d) {if (is.null(_d) || is.undefined(_d)) { return _B;}if (_d=="") { return _B;}_B.change("direction",_d,_B);return _B;};_B.enddelay=function(_s) {if (is.null(_s) || is.undefined(_s)) { return _B;}if (_s=="") { return _B;}_B.change("endDelay",_s,_B);return _B;};_B.innerhtml=function(__4fa,__4e6) {_B.change1("innerHTML",__4fa,__4e6,_B);return _B;};_B.autoplay=function(_b) {if (is.null(_b) || is.undefined(_b)) { return _B;}if (_b==false) { return _B;}if (_b=="") { return _B;}_B.change("autoplay",_b,_B);return _B;};_B.width=function(_w) {if (is.null(_w) || is.undefined(_w)) { return _B;}if (_w=="") { return _B;}_B.change("width",_w,_B);return _B;};_B.top=function(_w) {if (is.null(_w) || is.undefined(_w)) { return _B;}if (_w=="") { return _B;}_B.change("top",_w,_B);return _B;};_B.height=function(_h) {if (is.null(_h) || is.undefined(_h)) { return _B;}if (_h=="") { return _B;}_B.change("height",_h,_B);return _B;};_B.target=function(__4dc) {if (is.null(__4dc) || is.undefined(__4dc)) { return _B;}if (__4dc=="") { return _B;}_B.__f.push(__4dc);return _B;};}function banano_bananocssutils_bananoanimejstimeline() {var _B=this;_B.__e=null;_B.__f=[];_B.__10={};_B.__40= new banano_bananocssutils_bananoanimejsitem();_B.__41=null;_B.__3e=false;_B.initialize=function(__42) {_B.__f.length=0;_B.__10=__42;_B.__40.initialize();_B.__e=anime;_B.__3e=false;return _B;};_B.create=function() {var __c;_B.__3e=true;__c=_B.__40.pop();_B.__41=_B.__e["timeline"](__c);return _B;};_B.animation=function() {var _ajsa;_ajsa= new banano_bananocssutils_bananoanimejsitem();_ajsa.initialize();return _ajsa;};_B.add=function(_anim) {var __c;if (_B.__3e==false) {_B.create(_B);}__c=_anim.pop();_B.__41["add"](__c);return _B;};_B.addoffset=function(_anim,__506) {var __c;if (_B.__3e==false) {_B.create(_B);}__c=_anim.pop();_B.__41["add"](__c,__506);return _B;};_B.play=function() {_B.__41["play"]();};_B.pause=function() {_B.__41["pause"]();};_B.restart=function() {_B.__41["restart"]();};_B.reverse=function() {_B.__41["reverse"]();};}function banano_bananocssutils_bananocssutils() {var _B;this.__42={};this.setmodule=function(__10) {if (_B==null) _B=this;_B.__42=__10;};this.onevent=function(__91,__507,__10,__4ce,_args) {if (_B==null) _B=this;var _cb;if ((typeof __10[(__4ce).toLowerCase()]==="function")==false) { return ;}_cb=null;_cb=function(..._args) {if (typeof __10[(__4ce).toLowerCase()]==="function") {return __10[(__4ce).toLowerCase()](..._args,_B)};};__91.nodes[0].removeEventListener(__507, _cb, true);__91.nodes[0].addEventListener(__507, _cb, true);};this.setborder=function(__91,__509,__50a,__50b) {if (_B==null) _B=this;var _m;_m={};_m["border-color"]=__50a;_m["border-width"]=__509;_m["border-radius"]=__50b;_m["border-style"]="solid";if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.fieldexists=function(_el,__50c) {if (_B==null) _B=this;if (_el.nodes[0][__50c]==undefined) { return false;}return true;};this.oneventmethod=function(__91,__507,__10,__4ce,_args) {if (_B==null) _B=this;var _cb;_cb=function(..._args) {if (typeof __10[(__4ce).toLowerCase()]==="function") {return __10[(__4ce).toLowerCase()](..._args,_B)};};__91.nodes[0]["on"](__507,_cb);};this.setrotate=function(__91,_deg) {if (_B==null) _B=this;var _m;_m={};_m["rotate"]="" + _deg + "deg";if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.setcolorandborder=function(__91,__50e,__50f,__510,__511) {if (_B==null) _B=this;var _m;_m={};_m["border-color"]=__510;_m["border-width"]=_B.makepx(__50f,_B);_m["border-radius"]=_B.makepx(__511,_B);_m["border-style"]="solid";_m["background-color"]=__50e;if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.setlayout=function(__91,_left,_top,__509,__514) {if (_B==null) _B=this;var _m;_left=_B.makepx(_left,_B);__509=_B.makepx(__509,_B);__514=_B.makepx(__514,_B);_top=_B.makepx(_top,_B);_m={};_m["left"]=_left;_m["width"]=__509;_m["height"]=__514;_m["top"]=_top;if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.setlayoutradius=function(__91,_left,_top,__509,__514,__50b) {if (_B==null) _B=this;var _m;_left=_B.makepx(_left,_B);__509=_B.makepx(__509,_B);__514=_B.makepx(__514,_B);_top=_B.makepx(_top,_B);_m={};_m["left"]=_left;_m["width"]=__509;_m["height"]=__514;_m["top"]=_top;_m["border-radius"]=__50b;if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.setradius=function(__91,__50b) {if (_B==null) _B=this;var _m;_m={};_m["border-radius"]=_B.makepx(__50b,_B);if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.setscale=function(__91,__515) {if (_B==null) _B=this;var _m;_m={};_m["scale"]=__515;if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.settextsize=function(__91,__65) {if (_B==null) _B=this;var _m;_m={};_m["font-size"]=_B.makepx(__65,_B);if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.setvisible=function(__91,_b) {if (_B==null) _B=this;var _m;_m={};if (_b) {_m["opacity"]="1";} else {_m["opacity"]="0";}if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.setbackgroundcolor=function(__91,__50a) {if (_B==null) _B=this;var _m;_m={};_m["background-color"]=__50a;if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.setalpha=function(__91,_v) {if (_B==null) _B=this;_B.setstyleproperty(__91,"opacity",_v,_B);};this.setstyleproperty=function(__91,_key,__4c4) {if (_B==null) _B=this;var _m;_m={};_m[_key]=__4c4;if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.setbackgroundimage=function(__91,__6c) {if (_B==null) _B=this;var _m;_m={};_m["background-image"]="url(\"" + __6c + "\")";_m["background-size"]="contain";_m["background-repeat"]="no-repeat";_m["background-position"]="center center";if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.getstyleproperty=function(__91,_key) {if (_B==null) _B=this;var _sout;if (__91!=null) {_sout=__91.css(_key);return _sout;} else {return "";}};this.ensurevisible=function(__91) {if (_B==null) _B=this;var _opt;_opt={"behavior":"smooth"};if (__91!=null) {__91.nodes[0]["scrollIntoView"](_opt);}};this.getstylecomputed=function(__91,_var) {if (_B==null) _B=this;var __51a;if (__91!=null) {__51a=null;__51a=getComputedStyle(__91.nodes[0]);return __51a["getPropertyValue"](_var);} else {return "";}};this.setpadding=function(__91,__51b,_topm,__51d,__51e) {if (_B==null) _B=this;var _m;_m={};_m["padding-left"]=_B.makepx(__51b,_B);_m["padding-top"]=_B.makepx(_topm,_B);_m["padding-right"]=_B.makepx(__51d,_B);_m["padding-bottom"]=_B.makepx(__51e,_B);if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.setmargin=function(__91,__51b,_topm,__51d,__51e) {if (_B==null) _B=this;var _m;_m={};_m["margin-left"]=_B.makepx(__51b,_B);_m["margin-top"]=_B.makepx(_topm,_B);_m["margin-right"]=_B.makepx(__51d,_B);_m["margin-bottom"]=_B.makepx(__51e,_B);if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_m)));}};this.getpaddingleft=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"padding-left",_B);};this.getpaddingtop=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"padding-top",_B);};this.getpaddingbottom=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"padding-bottom",_B);};this.getpaddingright=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"padding-right",_B);};this.getmarginleft=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"margin-left",_B);};this.getmargintop=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"margin-top",_B);};this.getmarginbottom=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"margin-bottom",_B);};this.getmarginright=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"margin-right",_B);};this.gettop=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"top",_B);};this.getbottom=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"bottom",_B);};this.getleft=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"left",_B);};this.getright=function(__91) {if (_B==null) _B=this;return _B.getstyleproperty(__91,"right",_B);};this.makepx=function(__b4) {if (_B==null) _B=this;__b4=_B.cstr(__b4,_B);__b4=__b4.trim();if (__b4=="?") { return __b4;}if (__b4=="") { return __b4;}if (__b4.endsWith("%")) {return __b4;} else if (__b4.endsWith("vm")) {return __b4;} else if (__b4.endsWith("px")) {return __b4;} else if (__b4.endsWith("cm")) {return __b4;} else if (__b4.endsWith("mm")) {return __b4;} else if (__b4.endsWith("in")) {return __b4;} else if (__b4.endsWith("pt")) {return __b4;} else if (__b4.endsWith("pc")) {return __b4;} else if (__b4.endsWith("em")) {return __b4;} else if (__b4.endsWith("ex")) {return __b4;} else if (__b4.endsWith("ch")) {return __b4;} else if (__b4.endsWith("rem")) {return __b4;} else if (__b4.endsWith("vw")) {return __b4;} else if (__b4.endsWith("vh")) {return __b4;} else if (__b4.endsWith("vmin")) {return __b4;} else if (__b4.endsWith("vmax")) {return __b4;} else if (__b4.endsWith(";")) {return __b4;} else {__b4=__b4.split("px").join("");__b4="" + __b4 + "px";if (__b4=="px") {__b4="";}return __b4;}};this.cstr=function(_o) {if (_B==null) _B=this;if (is.null(_o) || is.undefined(_o)) {_o="";}if (_o=="null") { return "";}if (_o=="undefined") { return "";}return ""+_o;};this.settop=function(__91,_s) {if (_B==null) _B=this;_s=_B.makepx(_s,_B);_B.setstyleproperty(__91,"top",_s,_B);};this.setleft=function(__91,_s) {if (_B==null) _B=this;_s=_B.makepx(_s,_B);_B.setstyleproperty(__91,"left",_s,_B);};this.setwidth=function(__91,_s) {if (_B==null) _B=this;_s=_B.makepx(_s,_B);_B.setstyleproperty(__91,"width",_s,_B);};this.setheight=function(__91,_s) {if (_B==null) _B=this;_s=_B.makepx(_s,_B);_B.setstyleproperty(__91,"height",_s,_B);};this.targetid=function(_s) {if (_B==null) _B=this;_s=_B.cstr(_s,_B);_s=_s.toLowerCase();_s=_s.split("#").join("");_s=_s.split(" ").join("");_s=_s.trim();_s="#" + _s + "";return _s;};this.setcoloranimated=function(__91,__51f,__520,__521) {if (_B==null) _B=this;var _a1;_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.backgroundcolor1(__520,__521);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.setscaleanimated=function(__91,__51f,__523,__524) {if (_B==null) _B=this;var _a1;_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.scale1(__523,__524);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.setvisibleanimated=function(__91,__51f,_b) {if (_B==null) _B=this;var _a1;_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.visibility(_b);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.setalphaanimated=function(__91,__51f,__525) {if (_B==null) _B=this;var _a1;_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.opacity(__525);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.setlayoutanimated=function(__91,__51f,_left,_top,__509,__514) {if (_B==null) _B=this;var _a1;_left=_B.makepx(_left,_B);__509=_B.makepx(__509,_B);__514=_B.makepx(__514,_B);_top=_B.makepx(_top,_B);_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.left(_left);_a1.__3d.width(__509);_a1.__3d.height(__514);_a1.__3d.top(_top);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.setlayoutanimatedradius=function(__91,__51f,_left,_top,__509,__514,__50b) {if (_B==null) _B=this;var _a1;_left=_B.makepx(_left,_B);__509=_B.makepx(__509,_B);__514=_B.makepx(__514,_B);_top=_B.makepx(_top,_B);_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.left(_left);_a1.__3d.width(__509);_a1.__3d.height(__514);_a1.__3d.top(_top);_a1.__3d.borderradius(__50b);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.setwidthanimated=function(__91,__51f,__509) {if (_B==null) _B=this;var _a1;__509=_B.makepx(__509,_B);_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.width(__509);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.setheightanimated=function(__91,__51f,__514) {if (_B==null) _B=this;var _a1;__514=_B.makepx(__514,_B);_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.height(__514);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.setradiusanimated=function(__91,__51f,__50b) {if (_B==null) _B=this;var _a1;__50b=_B.makepx(__50b,_B);_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.borderradius(__50b);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.settextsizeanimated=function(__91,__51f,__526) {if (_B==null) _B=this;var _a1;__526=_B.makepx(__526,_B);_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.fontsize(__526);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.setleftanimated=function(__91,__51f,_left) {if (_B==null) _B=this;var _a1;_left=_B.makepx(_left,_B);_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.left(_left);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.settopanimated=function(__91,__51f,_top) {if (_B==null) _B=this;var _a1;_top=_B.makepx(_top,_B);_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.duration(__51f);_a1.__3d.top(_top);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.setrotationanimated=function(__91,__51f,__527) {if (_B==null) _B=this;var _a1;__527=_B.cstr(__527,_B);_a1= new banano_bananocssutils_bananoanimejs();_a1.initialize(_B.__42,"animation",_B.targetid(__91.attr('id'),_B));_a1.__3d.rotate(__527);_a1.__3d.duration(__51f);_a1.__3d.easing("easeInOutQuad");_a1.play();return _a1;};this.addattr=function(__91,_attr,_text) {if (_B==null) _B=this;if (__91!=null) {__91.attr(_attr,_text);}};this.adddataattr=function(__91,_attr,_text) {if (_B==null) _B=this;if (__91!=null) {__91.data(_attr,_text);}};this.getdataattr=function(__91,_attr) {if (_B==null) _B=this;var _text;if (__91!=null) {_text=__91.data(_attr);return _text;} else {return "";}};this.getattr=function(__91,_attr) {if (_B==null) _B=this;var _text;if (__91!=null) {_text=__91.attr(_attr);return _text;} else {return "";}};this.addclass=function(__91,_text) {if (_B==null) _B=this;var _lst,_c;if (__91!=null) {_lst=_B.strparse(" ",_text,_B);for (var _cindex=0;_cindex<_lst.length;_cindex++) {_c=_lst[_cindex];__91.addClass(_c);}}};this.removeclass=function(__91,_text) {if (_B==null) _B=this;var _lst,_c;if (__91!=null) {_lst=_B.strparse(" ",_text,_B);for (var _cindex=0;_cindex<_lst.length;_cindex++) {_c=_lst[_cindex];__91.removeClass(_c);}}};this.addattrmap=function(__91,_ms) {if (_B==null) _B=this;var _k,_v;if (Object.keys(_ms).length==0) { return ;}var _kKeys = Object.keys(_ms);for (var _kindex=0;_kindex<_kKeys.length;_kindex++) {_k=_kKeys[_kindex];_v=_ms[_k];_B.addattr(__91,_k,_v,_B);}};this.removeattr=function(__91,_attr) {if (_B==null) _B=this;if (__91!=null) {__91.nodes[0].removeAttribute(_attr);}};this.addstylecomputed=function(__91,_attr,_text) {if (_B==null) _B=this;if (__91!=null) {__91.nodes[0]["style"]["setProperty"](_attr,_text);}};this.addstyle=function(__91,_attr,_text) {if (_B==null) _B=this;var _m;if (__91!=null) {_m={};_m[_attr]=_text;_B.addstylemap(__91,_m,_B);}};this.addstylemap=function(__91,_ms) {if (_B==null) _B=this;if (Object.keys(_ms).length==0) { return ;}if (__91!=null) {__91.css(JSON.parse(JSON.stringify(_ms)));}};this.strparse=function(__52c,__52d) {if (_B==null) _B=this;var _nl;_nl=[];_nl.length=0;try {__52d=_B.cstr(__52d,_B);if (is.null(__52d) || is.undefined(__52d)) {__52d="";}if (__52d=="") { return _nl;}if (__52d.indexOf(__52c)==-1) {_nl.push(__52d);} else {_nl=__52d.split(__52c);}return _nl;} catch(err) {return _nl;}};this.setdisabled=function(__91,__af) {if (_B==null) _B=this;if (__91!=null) {if (__af==false) {__91.nodes[0].removeAttribute("disabled");} else {__91.attr("disabled",true);}}};this.getdisabled=function(__91) {if (_B==null) _B=this;var __af;__af=__91.hasAttr("disabled");return __af;};this.colortohsl=function(_n) {if (_B==null) _B=this;var _res;_res=BANanoExec("nameToHSL", window, _n);return _res;};this.colortohex=function(_n) {if (_B==null) _B=this;var _res;_res=BANanoExec("nameToHex", window, _n);return _res;};this.hextohsl=function(_h) {if (_B==null) _B=this;var _res;_res=BANanoExec("hexToHSL", window, _h);return _res;};this.gethtml=function(__91) {if (_B==null) _B=this;var _tmp;if (__91!=null) {_tmp=__91.nodes[0]["outerHTML"];return _tmp;} else {return "";}};this.getelementbydata=function(__532,__4c4) {if (_B==null) _B=this;var _skey,__534;__532=__532.toLowerCase();_skey="[data-" + __532 + "='" + __4c4 + "']";__534=null;__534=u(_skey);return __534;};this.insertcssrule=function(__535,__536) {if (_B==null) _B=this;BANanoExec("insertRule", window, __535,__536);};this.removecssrule=function(__535) {if (_B==null) _B=this;var _i;_i=null;_i=insertRule;_i["remove"](__535);};this.gettemplate=function(__91) {if (_B==null) _B=this;var _clon,_fc;if (__91!=null) {_clon=__91.nodes[0]["cloneNode"](true);_fc=_clon["firstElementChild"]["outerHTML"];return _fc;} else {return "";}};} 
function nameToHSL(name) { 
  let fakeDiv = document.createElement("div"); 
  fakeDiv.style.color = name; 
  document.body.appendChild(fakeDiv); 
 
  let cs = window.getComputedStyle(fakeDiv), 
      pv = cs.getPropertyValue("color"); 
 
  document.body.removeChild(fakeDiv); 
 
  // Code ripped from RGBToHSL() (except pv is substringed) 
  let rgb = pv.substr(4).split(")")[0].split(","), 
      r = rgb[0] / 255, 
      g = rgb[1] / 255, 
      b = rgb[2] / 255, 
      cmin = Math.min(r,g,b), 
      cmax = Math.max(r,g,b), 
      delta = cmax - cmin, 
      h = 0, 
      s = 0, 
      l = 0; 
 
  if (delta == 0) 
    h = 0; 
  else if (cmax == r) 
    h = ((g - b) / delta) % 6; 
  else if (cmax == g) 
    h = (b - r) / delta + 2; 
  else 
    h = (r - g) / delta + 4; 
 
  h = Math.round(h * 60); 
 
  if (h < 0) 
    h += 360; 
 
  l = (cmax + cmin) / 2; 
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1)); 
  s = +(s * 100).toFixed(1); 
  l = +(l * 100).toFixed(1); 
 
  return "hsl(" + h + "," + s + "%," + l + "%)"; 
} 
 
function nameToHex(name) { 
  // Get RGB from named color in temporary div 
  let fakeDiv = document.createElement("div"); 
  fakeDiv.style.color = name; 
  document.body.appendChild(fakeDiv); 
 
  let cs = window.getComputedStyle(fakeDiv), 
      pv = cs.getPropertyValue("color"); 
 
  document.body.removeChild(fakeDiv); 
 
  // Code ripped from RGBToHex() (except pv is substringed) 
  let rgb = pv.substr(4).split(")")[0].split(","), 
      r = (+rgb[0]).toString(16), 
      g = (+rgb[1]).toString(16), 
      b = (+rgb[2]).toString(16); 
 
  if (r.length == 1) 
    r = "0" + r; 
  if (g.length == 1) 
    g = "0" + g; 
  if (b.length == 1) 
    b = "0" + b; 
 
  return "#" + r + g + b; 
} 
 
function hexToHSL(H) { 
  // Convert hex to RGB first 
  let r = 0, g = 0, b = 0; 
  if (H.length == 4) { 
    r = "0x" + H[1] + H[1]; 
    g = "0x" + H[2] + H[2]; 
    b = "0x" + H[3] + H[3]; 
  } else if (H.length == 7) { 
    r = "0x" + H[1] + H[2]; 
    g = "0x" + H[3] + H[4]; 
    b = "0x" + H[5] + H[6]; 
  } 
  // Then to HSL 
  r /= 255; 
  g /= 255; 
  b /= 255; 
  let cmin = Math.min(r,g,b), 
      cmax = Math.max(r,g,b), 
      delta = cmax - cmin, 
      h = 0, 
      s = 0, 
      l = 0; 
 
  if (delta == 0) 
    h = 0; 
  else if (cmax == r) 
    h = ((g - b) / delta) % 6; 
  else if (cmax == g) 
    h = (b - r) / delta + 2; 
  else 
    h = (r - g) / delta + 4; 
 
  h = Math.round(h * 60); 
 
  if (h < 0) 
    h += 360; 
 
  l = (cmax + cmin) / 2; 
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1)); 
  s = +(s * 100).toFixed(1); 
  l = +(l * 100).toFixed(1); 
 
  //return "hsl(" + h + "," + s + "%," + l + "%)"; 
  return "" + h + "_" + s + "%_" + l + "%"; 
} 
 
