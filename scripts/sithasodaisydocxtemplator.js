
/* sithasodaisydocxtemplator */
function banano_sithasodaisydocxtemplator_sduidocxtemplator() {var _B=this;_B._fn="";_B._mcallback={};_B._eventname="";_B._tags={};_B._ffn="";_B.initialize=function(_mcb,_event,_tmpfile,_target) {_B._fn=_tmpfile;_B._mcallback=_mcb;_B._eventname=_event;_B._tags={};_B._ffn=_target;};_B.documentcomponent=async function(_m,_comptype,_compname) {var _jsonfile,_properties,_pdiff,_prop,_skey,_sval,_nvalue;_jsonfile=await BANFetch('J', "./assets/" + _comptype + ".json",'');if (("properties" in _jsonfile)) {_properties=_jsonfile["properties"];_pdiff=[];_pdiff.length=0;for (var _propindex=0;_propindex<_properties.length;_propindex++) {_prop=_properties[_propindex];_skey=_prop["Key"]===undefined? "":_prop["Key"];_sval=_prop["DefaultValue"]===undefined? "":_prop["DefaultValue"];_skey=_banano_sithasoionicdemo04_sduishared.cstr(_skey);_sval=_banano_sithasoionicdemo04_sduishared.cstr(_sval);if (_skey=="") {continue;}if ((_skey in _m)) {_nvalue=_m[_skey]===undefined? "":_m[_skey];_nvalue=_banano_sithasoionicdemo04_sduishared.cstr(_nvalue);if (_nvalue.equalsIgnoreCase(_sval)) {continue;}_prop["DefaultValue"]=_nvalue;_pdiff.push(_prop);}}_B._tags={};_B._fn="./assets/compapi.docx";_B._ffn=_compname+".docx";_B._eventname="docx";_B.setfield("component","" + _comptype + "." + _compname + "",_B);_B.setfield("properties",_pdiff,_B);await _B.buildwait(_B);}};_B.setfield=function(_key,_value) {_B._tags[_key]=_value;};_B.buildwait=async function() {var _pizziputils,_error,_content,_cb;_pizziputils=null;_pizziputils=PizZipUtils;_error={};_content={};_cb=function(_error,_content) {if (typeof _B[("generate").toLowerCase()]==="function") {return _B[("generate").toLowerCase()](_error,_content,_B)};};_pizziputils["getBinaryContent"](_B._fn,_cb);};_B.generate=function(_error,_content) {var _zip,_options,_doc,_bloboptions,_blob;if (is.null(_error)==false) {throw _error;return;}_zip=null;_zip=new PizZip(_content);_options={};_options["paragraphLoop"]=true;_options["linebreaks"]=true;_doc=null;_doc=new Docxtemplater(_zip,_options);_doc["render"](_B._tags);_bloboptions={};_bloboptions["type"]="blob";_bloboptions["mimeType"]="application/vnd.openxmlformats-officedocument.wordprocessingml.document";_bloboptions["compression"]="DEFLATE";_blob=_doc["getZip"]()["generate"](_bloboptions);BANanoExec("saveAs", window, _blob,_B._ffn);if ((typeof _B._mcallback[("" + _B._eventname + "_finished").toLowerCase()]==="function")) {(function() {if (typeof _B._mcallback[("" + _B._eventname + "_finished").toLowerCase()]==="function") {var CSr = _B._mcallback[("" + _B._eventname + "_finished").toLowerCase()](_B);if(CSr!=null) {return CSr}}})();} else {window.console.warn("SDUIDocxTemplator: '" + _B._eventname + "_finished' event does not exist!");}};}