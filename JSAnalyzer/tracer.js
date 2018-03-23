/*
The following code was inserted automatically by fondue to collect information
about the execution of all the JavaScript on this page or in this program.

If you're using Brackets, this is caused by the Theseus extension, which you
can disable by unchecking File > Enable Theseus.

https://github.com/adobe-research/fondue
https://github.com/adobe-research/theseus
*/

/*
 * Copyright (c) 2012 Massachusetts Institute of Technology, Adobe Systems
 * Incorporated, and other contributors. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*
The source of source-map is included below on the line beginning with "var sourceMap",
and its license is as follows:

Copyright (c) 2009-2011, Mozilla Foundation and contributors
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the names of the Mozilla Foundation nor the names of project
  contributors may be used to endorse or promote products derived from this
  software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

if (typeof {name} === 'undefined') {
{name} = new (function () {
	var sourceMap = (function () {function define(e,t,n){if(typeof e!="string")throw new TypeError("Expected string, got: "+e);arguments.length==2&&(n=t);if(e in define.modules)throw new Error("Module already defined: "+e);define.modules[e]=n}function Domain(){this.modules={},this._currentModule=null}define.modules={},function(){function e(e){var t=e.split("/"),n=1;while(n<t.length)t[n]===".."?t.splice(n-1,1):t[n]==="."?t.splice(n,1):n++;return t.join("/")}function t(e,t){return e=e.trim(),t=t.trim(),/^\//.test(t)?t:e.replace(/\/*$/,"/")+t}function n(e){var t=e.split("/");return t.pop(),t.join("/")}Domain.prototype.require=function(e,t){if(Array.isArray(e)){var n=e.map(function(e){return this.lookup(e)},this);return t&&t.apply(null,n),undefined}return this.lookup(e)},Domain.prototype.lookup=function(r){/^\./.test(r)&&(r=e(t(n(this._currentModule),r)));if(r in this.modules){var i=this.modules[r];return i}if(r in define.modules){var i=define.modules[r];if(typeof i=="function"){var s={},o=this._currentModule;this._currentModule=r,i(this.require.bind(this),s,{id:r,uri:""}),this._currentModule=o,i=s}return this.modules[r]=i,i}throw new Error("Module not defined: "+r)}}(),define.Domain=Domain,define.globalDomain=new Domain;var require=define.globalDomain.require.bind(define.globalDomain);define("source-map/source-map-generator",["require","exports","module","source-map/base64-vlq","source-map/util","source-map/array-set"],function(e,t,n){function o(e){this._file=i.getArg(e,"file"),this._sourceRoot=i.getArg(e,"sourceRoot",null),this._sources=new s,this._names=new s,this._mappings=[],this._sourcesContents=null}function u(e,t){var n=(e&&e.line)-(t&&t.line);return n?n:(e&&e.column)-(t&&t.column)}function a(e,t){return e=e||"",t=t||"",(e>t)-(e<t)}function f(e,t){return u(e.generated,t.generated)||u(e.original,t.original)||a(e.source,t.source)||a(e.name,t.name)}var r=e("./base64-vlq"),i=e("./util"),s=e("./array-set").ArraySet;o.prototype._version=3,o.fromSourceMap=function(t){var n=t.sourceRoot,r=new o({file:t.file,sourceRoot:n});return t.eachMapping(function(e){var t={generated:{line:e.generatedLine,column:e.generatedColumn}};e.source&&(t.source=e.source,n&&(t.source=i.relative(n,t.source)),t.original={line:e.originalLine,column:e.originalColumn},e.name&&(t.name=e.name)),r.addMapping(t)}),t.sources.forEach(function(e){var n=t.sourceContentFor(e);n&&r.setSourceContent(e,n)}),r},o.prototype.addMapping=function(t){var n=i.getArg(t,"generated"),r=i.getArg(t,"original",null),s=i.getArg(t,"source",null),o=i.getArg(t,"name",null);this._validateMapping(n,r,s,o),s&&!this._sources.has(s)&&this._sources.add(s),o&&!this._names.has(o)&&this._names.add(o),this._mappings.push({generated:n,original:r,source:s,name:o})},o.prototype.setSourceContent=function(t,n){var r=t;this._sourceRoot&&(r=i.relative(this._sourceRoot,r)),n!==null?(this._sourcesContents||(this._sourcesContents={}),this._sourcesContents[i.toSetString(r)]=n):(delete this._sourcesContents[i.toSetString(r)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))},o.prototype.applySourceMap=function(t,n){n||(n=t.file);var r=this._sourceRoot;r&&(n=i.relative(r,n));var o=new s,u=new s;this._mappings.forEach(function(e){if(e.source===n&&e.original){var s=t.originalPositionFor({line:e.original.line,column:e.original.column});s.source!==null&&(r?e.source=i.relative(r,s.source):e.source=s.source,e.original.line=s.line,e.original.column=s.column,s.name!==null&&e.name!==null&&(e.name=s.name))}var a=e.source;a&&!o.has(a)&&o.add(a);var f=e.name;f&&!u.has(f)&&u.add(f)},this),this._sources=o,this._names=u,t.sources.forEach(function(e){var n=t.sourceContentFor(e);n&&(r&&(e=i.relative(r,e)),this.setSourceContent(e,n))},this)},o.prototype._validateMapping=function(t,n,r,i){if(t&&"line"in t&&"column"in t&&t.line>0&&t.column>=0&&!n&&!r&&!i)return;if(t&&"line"in t&&"column"in t&&n&&"line"in n&&"column"in n&&t.line>0&&t.column>=0&&n.line>0&&n.column>=0&&r)return;throw new Error("Invalid mapping.")},o.prototype._serializeMappings=function(){var t=0,n=1,i=0,s=0,o=0,u=0,a="",l;this._mappings.sort(f);for(var c=0,h=this._mappings.length;c<h;c++){l=this._mappings[c];if(l.generated.line!==n){t=0;while(l.generated.line!==n)a+=";",n++}else if(c>0){if(!f(l,this._mappings[c-1]))continue;a+=","}a+=r.encode(l.generated.column-t),t=l.generated.column,l.source&&l.original&&(a+=r.encode(this._sources.indexOf(l.source)-u),u=this._sources.indexOf(l.source),a+=r.encode(l.original.line-1-s),s=l.original.line-1,a+=r.encode(l.original.column-i),i=l.original.column,l.name&&(a+=r.encode(this._names.indexOf(l.name)-o),o=this._names.indexOf(l.name)))}return a},o.prototype.toJSON=function(){var t={version:this._version,file:this._file,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._sourceRoot&&(t.sourceRoot=this._sourceRoot),this._sourcesContents&&(t.sourcesContent=t.sources.map(function(e){return t.sourceRoot&&(e=i.relative(t.sourceRoot,e)),Object.prototype.hasOwnProperty.call(this._sourcesContents,i.toSetString(e))?this._sourcesContents[i.toSetString(e)]:null},this)),t},o.prototype.toString=function(){return JSON.stringify(this)},t.SourceMapGenerator=o}),define("source-map/base64-vlq",["require","exports","module","source-map/base64"],function(e,t,n){function a(e){return e<0?(-e<<1)+1:(e<<1)+0}function f(e){var t=(e&1)===1,n=e>>1;return t?-n:n}var r=e("./base64"),i=5,s=1<<i,o=s-1,u=s;t.encode=function(t){var n="",s,f=a(t);do s=f&o,f>>>=i,f>0&&(s|=u),n+=r.encode(s);while(f>0);return n},t.decode=function(t){var n=0,s=t.length,a=0,l=0,c,h;do{if(n>=s)throw new Error("Expected more digits in base 64 VLQ value.");h=r.decode(t.charAt(n++)),c=!!(h&u),h&=o,a+=h<<l,l+=i}while(c);return{value:f(a),rest:t.slice(n)}}}),define("source-map/base64",["require","exports","module"],function(e,t,n){var r={},i={};"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("").forEach(function(e,t){r[e]=t,i[t]=e}),t.encode=function(t){if(t in i)return i[t];throw new TypeError("Must be between 0 and 63: "+t)},t.decode=function(t){if(t in r)return r[t];throw new TypeError("Not a valid base 64 digit: "+t)}}),define("source-map/util",["require","exports","module"],function(e,t,n){function r(e,t,n){if(t in e)return e[t];if(arguments.length===3)return n;throw new Error('"'+t+'" is a required argument.')}function s(e){var t=e.match(i);return t?{scheme:t[1],auth:t[3],host:t[4],port:t[6],path:t[7]}:null}function o(e){var t=e.scheme+"://";return e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function u(e,t){var n;return t.match(i)?t:t.charAt(0)==="/"&&(n=s(e))?(n.path=t,o(n)):e.replace(/\/$/,"")+"/"+t}function a(e){return"$"+e}function f(e){return e.substr(1)}function l(e,t){e=e.replace(/\/$/,"");var n=s(e);return t.charAt(0)=="/"&&n&&n.path=="/"?t.slice(1):t.indexOf(e+"/")===0?t.substr(e.length+1):t}t.getArg=r;var i=/([\w+\-.]+):\/\/((\w+:\w+)@)?([\w.]+)?(:(\d+))?(\S+)?/;t.urlParse=s,t.urlGenerate=o,t.join=u,t.toSetString=a,t.fromSetString=f,t.relative=l}),define("source-map/array-set",["require","exports","module","source-map/util"],function(e,t,n){function i(){this._array=[],this._set={}}var r=e("./util");i.fromArray=function(t){var n=new i;for(var r=0,s=t.length;r<s;r++)n.add(t[r]);return n},i.prototype.add=function(t){if(this.has(t))return;var n=this._array.length;this._array.push(t),this._set[r.toSetString(t)]=n},i.prototype.has=function(t){return Object.prototype.hasOwnProperty.call(this._set,r.toSetString(t))},i.prototype.indexOf=function(t){if(this.has(t))return this._set[r.toSetString(t)];throw new Error('"'+t+'" is not in the set.')},i.prototype.at=function(t){if(t>=0&&t<this._array.length)return this._array[t];throw new Error("No element indexed by "+t)},i.prototype.toArray=function(){return this._array.slice()},t.ArraySet=i}),define("source-map/source-map-consumer",["require","exports","module","source-map/util","source-map/binary-search","source-map/array-set","source-map/base64-vlq"],function(e,t,n){function u(e){var t=e;typeof e=="string"&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var n=r.getArg(t,"version"),i=r.getArg(t,"sources"),o=r.getArg(t,"names"),u=r.getArg(t,"sourceRoot",null),a=r.getArg(t,"sourcesContent",null),f=r.getArg(t,"mappings"),l=r.getArg(t,"file",null);if(n!==this._version)throw new Error("Unsupported version: "+n);this._names=s.fromArray(o),this._sources=s.fromArray(i),this.sourceRoot=u,this.sourcesContent=a,this.file=l,this._generatedMappings=[],this._originalMappings=[],this._parseMappings(f,u)}var r=e("./util"),i=e("./binary-search"),s=e("./array-set").ArraySet,o=e("./base64-vlq");u.prototype._version=3,Object.defineProperty(u.prototype,"sources",{get:function(){return this._sources.toArray().map(function(e){return this.sourceRoot?r.join(this.sourceRoot,e):e},this)}}),u.prototype._parseMappings=function(t,n){var r=1,i=0,s=0,u=0,a=0,f=0,l=/^[,;]/,c=t,h,p;while(c.length>0)if(c.charAt(0)===";")r++,c=c.slice(1),i=0;else if(c.charAt(0)===",")c=c.slice(1);else{h={},h.generatedLine=r,p=o.decode(c),h.generatedColumn=i+p.value,i=h.generatedColumn,c=p.rest;if(c.length>0&&!l.test(c.charAt(0))){p=o.decode(c),h.source=this._sources.at(a+p.value),a+=p.value,c=p.rest;if(c.length===0||l.test(c.charAt(0)))throw new Error("Found a source, but no line and column");p=o.decode(c),h.originalLine=s+p.value,s=h.originalLine,h.originalLine+=1,c=p.rest;if(c.length===0||l.test(c.charAt(0)))throw new Error("Found a source and line, but no column");p=o.decode(c),h.originalColumn=u+p.value,u=h.originalColumn,c=p.rest,c.length>0&&!l.test(c.charAt(0))&&(p=o.decode(c),h.name=this._names.at(f+p.value),f+=p.value,c=p.rest)}this._generatedMappings.push(h),typeof h.originalLine=="number"&&this._originalMappings.push(h)}this._originalMappings.sort(this._compareOriginalPositions)},u.prototype._compareOriginalPositions=function(t,n){if(t.source>n.source)return 1;if(t.source<n.source)return-1;var r=t.originalLine-n.originalLine;return r===0?t.originalColumn-n.originalColumn:r},u.prototype._compareGeneratedPositions=function(t,n){var r=t.generatedLine-n.generatedLine;return r===0?t.generatedColumn-n.generatedColumn:r},u.prototype._findMapping=function(t,n,r,s,o){if(t[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+t[r]);if(t[s]<0)throw new TypeError("Column must be greater than or equal to 0, got "+t[s]);return i.search(t,n,o)},u.prototype.originalPositionFor=function(t){var n={generatedLine:r.getArg(t,"line"),generatedColumn:r.getArg(t,"column")},i=this._findMapping(n,this._generatedMappings,"generatedLine","generatedColumn",this._compareGeneratedPositions);if(i){var s=r.getArg(i,"source",null);return s&&this.sourceRoot&&(s=r.join(this.sourceRoot,s)),{source:s,line:r.getArg(i,"originalLine",null),column:r.getArg(i,"originalColumn",null),name:r.getArg(i,"name",null)}}return{source:null,line:null,column:null,name:null}},u.prototype.sourceContentFor=function(t){if(!this.sourcesContent)return null;this.sourceRoot&&(t=r.relative(this.sourceRoot,t));if(this._sources.has(t))return this.sourcesContent[this._sources.indexOf(t)];var n;if(this.sourceRoot&&(n=r.urlParse(this.sourceRoot))){var i=t.replace(/^file:\/\//,"");if(n.scheme=="file"&&this._sources.has(i))return this.sourcesContent[this._sources.indexOf(i)];if((!n.path||n.path=="/")&&this._sources.has("/"+t))return this.sourcesContent[this._sources.indexOf("/"+t)]}throw new Error('"'+t+'" is not in the SourceMap.')},u.prototype.generatedPositionFor=function(t){var n={source:r.getArg(t,"source"),originalLine:r.getArg(t,"line"),originalColumn:r.getArg(t,"column")};this.sourceRoot&&(n.source=r.relative(this.sourceRoot,n.source));var i=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",this._compareOriginalPositions);return i?{line:r.getArg(i,"generatedLine",null),column:r.getArg(i,"generatedColumn",null)}:{line:null,column:null}},u.GENERATED_ORDER=1,u.ORIGINAL_ORDER=2,u.prototype.eachMapping=function(t,n,i){var s=n||null,o=i||u.GENERATED_ORDER,a;switch(o){case u.GENERATED_ORDER:a=this._generatedMappings;break;case u.ORIGINAL_ORDER:a=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var f=this.sourceRoot;a.map(function(e){var t=e.source;return t&&f&&(t=r.join(f,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:e.name}}).forEach(t,s)},t.SourceMapConsumer=u}),define("source-map/binary-search",["require","exports","module"],function(e,t,n){function r(e,t,n,i,s){var o=Math.floor((t-e)/2)+e,u=s(n,i[o]);return u===0?i[o]:u>0?t-o>1?r(o,t,n,i,s):i[o]:o-e>1?r(e,o,n,i,s):e<0?null:i[e]}t.search=function(t,n,i){return n.length>0?r(-1,n.length,t,n,i):null}}),define("source-map/source-node",["require","exports","module","source-map/source-map-generator","source-map/util"],function(e,t,n){function s(e,t,n,r,i){this.children=[],this.sourceContents={},this.line=e===undefined?null:e,this.column=t===undefined?null:t,this.source=n===undefined?null:n,this.name=i===undefined?null:i,r!=null&&this.add(r)}var r=e("./source-map-generator").SourceMapGenerator,i=e("./util");s.fromStringWithSourceMap=function(t,n){function f(e,t){e===null||e.source===undefined?r.add(t):r.add(new s(e.originalLine,e.originalColumn,e.source,t,e.name))}var r=new s,i=t.split("\n"),o=1,u=0,a=null;return n.eachMapping(function(e){if(a===null){while(o<e.generatedLine)r.add(i.shift()+"\n"),o++;if(u<e.generatedColumn){var t=i[0];r.add(t.substr(0,e.generatedColumn)),i[0]=t.substr(e.generatedColumn),u=e.generatedColumn}}else if(o<e.generatedLine){var n="";do n+=i.shift()+"\n",o++,u=0;while(o<e.generatedLine);if(u<e.generatedColumn){var t=i[0];n+=t.substr(0,e.generatedColumn),i[0]=t.substr(e.generatedColumn),u=e.generatedColumn}f(a,n)}else{var t=i[0],n=t.substr(0,e.generatedColumn-u);i[0]=t.substr(e.generatedColumn-u),u=e.generatedColumn,f(a,n)}a=e},this),f(a,i.join("\n")),n.sources.forEach(function(e){var t=n.sourceContentFor(e);t&&r.setSourceContent(e,t)}),r},s.prototype.add=function(t){if(Array.isArray(t))t.forEach(function(e){this.add(e)},this);else{if(!(t instanceof s||typeof t=="string"))throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+t);t&&this.children.push(t)}return this},s.prototype.prepend=function(t){if(Array.isArray(t))for(var n=t.length-1;n>=0;n--)this.prepend(t[n]);else{if(!(t instanceof s||typeof t=="string"))throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+t);this.children.unshift(t)}return this},s.prototype.walk=function(t){this.children.forEach(function(e){e instanceof s?e.walk(t):e!==""&&t(e,{source:this.source,line:this.line,column:this.column,name:this.name})},this)},s.prototype.join=function(t){var n,r,i=this.children.length;if(i>0){n=[];for(r=0;r<i-1;r++)n.push(this.children[r]),n.push(t);n.push(this.children[r]),this.children=n}return this},s.prototype.replaceRight=function(t,n){var r=this.children[this.children.length-1];return r instanceof s?r.replaceRight(t,n):typeof r=="string"?this.children[this.children.length-1]=r.replace(t,n):this.children.push("".replace(t,n)),this},s.prototype.setSourceContent=function(t,n){this.sourceContents[i.toSetString(t)]=n},s.prototype.walkSourceContents=function(t){this.children.forEach(function(e){e instanceof s&&e.walkSourceContents(t)},this),Object.keys(this.sourceContents).forEach(function(e){t(i.fromSetString(e),this.sourceContents[e])},this)},s.prototype.toString=function(){var t="";return this.walk(function(e){t+=e}),t},s.prototype.toStringWithSourceMap=function(t){var n={code:"",line:1,column:0},i=new r(t),s=!1;return this.walk(function(e,t){n.code+=e,t.source!==null&&t.line!==null&&t.column!==null?(i.addMapping({source:t.source,original:{line:t.line,column:t.column},generated:{line:n.line,column:n.column},name:t.name}),s=!0):s&&(i.addMapping({generated:{line:n.line,column:n.column}}),s=!1),e.split("").forEach(function(e){e==="\n"?(n.line++,n.column=0):n.column++})}),this.walkSourceContents(function(e,t){i.setSourceContent(e,t)}),{code:n.code,map:i}},t.SourceNode=s});return {SourceMapConsumer:require("source-map/source-map-consumer").SourceMapConsumer,SourceMapGenerator:require("source-map/source-map-generator").SourceMapGenerator,SourceNode:require("source-map/source-node").SourceNode}})();
    var e2eTesting = true;
    if (!e2eTesting) {
        window.addEventListener("load" ,function() {
            var MAXRESULT = 1000000;

            var tracer = {name};

            functions = {};
            var uniqueFunctions = [];
            var callsites = {}
            var ids = [];
            var ids_callsites = [];
            var nodesHandle = tracer.trackNodes();
            tracer.newNodes(nodesHandle).forEach(function (n) {
                if (n.type === 'function') {
                    functions[n.id] = n;
                    ids.push(n.id);
                } else if (n.type == 'callsite'){
                    callsites[n.id] = n;
                    ids_callsites.push(n.id);   
                }
            });

            var logHandle = tracer.trackLogs({ids: ids});
            invocations = tracer.logDelta(logHandle, MAXRESULT);

            console.log("Number of functions: " + Object.keys(functions).length);
            console.log("Number of invocations: " + invocations.length);

            var modifiedFunctionCounter = 0
            var uniqueFunctions = [];
            window.importantIDToInvocations = {};
            invocations.forEach(function(entry){

                if (entry.globalDelta != undefined && Object.keys(entry.globalDelta["After"]).length > 0){
                    importantIDToInvocations[entry.id] = entry;
                }
            });
            console.log("Total number of important invocations executed " + Object.keys(importantIDToInvocations).length);
        });
    }

	this.setGlobal = function (gthis) {
		globalThis = gthis;
	}

    var deepDiffMapper = function() {
        return {
            VALUE_CREATED: 'created',
            VALUE_UPDATED: 'updated',
            VALUE_DELETED: 'deleted',
            VALUE_UNCHANGED: 'unchanged',
            map: function(obj1, obj2) {
                if (this.isFunction(obj1) || this.isFunction(obj2)) {
                    throw 'Invalid argument. Function given, object expected.';
                }
                if (this.isValue(obj1) || this.isValue(obj2)) {
                    return {
                        type: this.compareValues(obj1, obj2),
                        data: (obj1 === undefined) ? obj2 : obj1
                    };
                }
                
                var diff = {};
                for (var key in obj1) {
                    if (this.isFunction(obj1[key])) {
                        continue;
                    }
                    
                    var value2 = undefined;
                    if ('undefined' != typeof(obj2[key])) {
                        value2 = obj2[key];
                    }
                    
                    diff[key] = this.map(obj1[key], value2);
                }
                for (var key in obj2) {
                    if (this.isFunction(obj2[key]) || ('undefined' != typeof(diff[key]))) {
                        continue;
                    }
                    
                    diff[key] = this.map(undefined, obj2[key]);
                }
                
                return diff;
                
            },
            compareValues: function(value1, value2) {
                if (value1 === value2) {
                    return this.VALUE_UNCHANGED;
                }
                if (this.isDate(value1) && this.isDate(value2) && value1.getTime() === value2.getTime()) {
                        return this.VALUE_UNCHANGED;
                }
                if ('undefined' == typeof(value1)) {
                    return this.VALUE_CREATED;
                }
                if ('undefined' == typeof(value2)) {
                    return this.VALUE_DELETED;
                }
                
                return this.VALUE_UPDATED;
            },
            isFunction: function(obj) {
                return {}.toString.apply(obj) === '[object Function]';
            },
            isArray: function(obj) {
                return {}.toString.apply(obj) === '[object Array]';
            },
            isObject: function(obj) {
                return {}.toString.apply(obj) === '[object Object]';
            },
            isDate: function(obj) {
                return {}.toString.apply(obj) === '[object Date]';
            },
            isValue: function(obj) {
                return !this.isObject(obj) && !this.isArray(obj);
            }
        }
    }();


    function getTypesFromWindowObject(windowObject){
        var types = {}
        Object.getOwnPropertyNames(window).forEach(function(n){

            if (!types[typeof window[n]]){
                types[typeof window[n]] = []
            }
            var a={}
            a[n] = window[n] 
            if (typeof window[n] != 'function'){
                types[typeof window[n]].push(a)
            }
        });
        return types;
    }

    function getObjectFromMemberExpression(node){
        var regex = /^([^.\[]*)/;
        match = node.match(regex);
        if (match.length > 0) return match[0];
        return "";
    }

    // TODO
    // Need to take care of hierarchical aliasing
    // ie multiple aliasing, need to have a function. 
    // to give the root of the alias tree
    function getValuesFromKeys(globalVariables){
        var KeyValue = {}
        globalVariables.slice(1).forEach(function(entry){
            var object = getObjectFromMemberExpression(entry);
            var actualKey = entry;
            if (object in globalVariables[0]){
                actualKey = entry.replace(object, globalVariables[0][object]);
            }
            KeyValue[actualKey] = eval(actualKey);
        });
        // keys.forEach(function(key){
        //     try {
        //         KeyValue[key] = Object.assign({},eval(key));
        //     } catch (err) {
        //         KeyValue[key] = null
        //     }
        // });
        return KeyValue;
    }


    var saveTraceInCache = function(info) {
        try{
            var top = invocationStack[invocationStack.length - 1];
            if (!top) {
                console.log("[ERROR] [Fetching top for saving trace] ");
            } else if (!isCyclic(top.globalDelta)) {
                localStorage.setItem(info.nodeId, JSON.stringify(top.globalDelta));

                // localStorage.setItem(info.nodeId, JSON.stringify( top.globalDelta, function( key, value) {
                //                                         if( key == 'circular') {
                //                                             return "$ref"+value.id+"$";
                //                                         } else {
                //                                             return value;
                //                                         }
                //                                     }));
            }
        } catch (err) {
            console.log("[ERROR][SAVE TRACE IN CACHE] " + err + err.stack);
        }
    };

    this.loadFromCache = function(cacheObject) {

    }

    this.compareAndCache = function(info) {
        // console.log("calling compare and cahce");

        return false;
    }

    this.dumpCache = function(info) {
        var globalCacheObject = localStorage;

        //create entry for current function

        globalCacheObject[info.nodeId] = {};
        if (info.globalWrites){
            globalCacheObject[info.nodeId]["globalWrites"] = {};
            info.globalWrites.forEach(function(key){
                if (info.globalAlias && key in info.globalAlias)
                    key = info.globalAlias[key];
                globalCacheObject[info.nodeId]["globalWrites"][key] = eval(key);
            });
        }
        if (info.globalReads) {
            globalCacheObject[info.nodeId]["globalReads"] = {};
            info.globalReads.forEach(function(key){
                if (info.globalAlias && key in info.globalAlias)
                    key = info.globalAlias[key];
                globalCacheObject[info.nodeId]["globalReads"][key] = eval(key);
            });
        }
    }

    var escapeRegExp = function(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|\']/g, "\\$&");
    }

    this.setValue = function (val,variableName, variable, reads=[]) {
        // console.log(arguments[0].toString(), arguments);
        try {
            var top = invocationStack[invocationStack.length - 1];
            if (!top) {
                // console.log("Error while tracking the global write | Probably it is outside any function");
            } else {
                if (typeof(variable) != undefined) {
                    // console.log("Top is: " + JSON.stringify(top.globalDelta));
                    // console.log("variable is " + variable );
                    top.globalDelta["Before"][variableName] = variable;
                    top.globalDelta["After"][variableName] = val;

                    // top.globalDelta["Reads"] = top.globalDelta["Reads"].concat(readArray);
                    reads.forEach(function(read, it){
                        if (it % 2 == 0){
                            top.globalDelta["Reads"][reads[it+1]] = read;
                        }
                    });
                }
            }
            // console.log("Returning : " + val);
            return val;
        } catch (err) {
            console.log("[INFO][SET VALUE]: " + err + err.stack);
            return val;
        } 
    }

	this.Array = Array;
});
}
(function () { {name}.setGlobal(this); })();
