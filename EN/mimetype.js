// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}
mimes = {"0":{"ext":".aac","type":"AAC audio","mime":"audio/aac"},"1":{"ext":".abw","type":"AbiWord document","mime":"application/x-abiword"},"2":{"ext":".arc","type":"Archive document (multiple files embedded)","mime":"application/x-freearc"},"3":{"ext":".avi","type":"AVI: Audio Video Interleave","mime":"video/x-msvideo"},"4":{"ext":".azw","type":"Amazon Kindle eBook format","mime":"application/vnd.amazon.ebook"},"5":{"ext":".bin","type":"Any kind of binary data","mime":"application/octet-stream"},"6":{"ext":".bmp","type":"Windows OS/2 Bitmap Graphics","mime":"image/bmp"},"7":{"ext":".bz","type":"BZip archive","mime":"application/x-bzip"},"8":{"ext":".bz2","type":"BZip2 archive","mime":"application/x-bzip2"},"9":{"ext":".csh","type":"C-Shell script","mime":"application/x-csh"},"10":{"ext":".css","type":"Cascading Style Sheets (CSS)","mime":"text/css"},"11":{"ext":".csv","type":"Comma-separated values (CSV)","mime":"text/csv"},"12":{"ext":".doc","type":"Microsoft Word","mime":"application/msword"},"13":{"ext":".docx","type":"Microsoft Word (OpenXML)","mime":"application/vnd.openxmlformats-officedocument.wordprocessingml.document"},"14":{"ext":".eot","type":"MS Embedded OpenType fonts","mime":"application/vnd.ms-fontobject"},"15":{"ext":".epub","type":"Electronic publication (EPUB)","mime":"application/epub+zip"},"16":{"ext":".gz","type":"GZip Compressed Archive","mime":"application/gzip"},"17":{"ext":".gif","type":"Graphics Interchange Format (GIF)","mime":"image/gif"},"18":{"ext":".htm\n.html","type":"HyperText Markup Language (HTML)","mime":"text/html"},"19":{"ext":".ico","type":"Icon format","mime":"image/vnd.microsoft.icon"},"20":{"ext":".ics","type":"iCalendar format","mime":"text/calendar"},"21":{"ext":".jar","type":"Java Archive (JAR)","mime":"application/java-archive"},"22":{"ext":".jpeg\n.jpg","type":"JPEG images","mime":"image/jpeg"},"23":{"ext":".js","type":"JavaScript","mime":"text/javascript, per the following specifications:\n\nhttps://html.spec.whatwg.org/multipage/#scriptingLanguages\nhttps://html.spec.whatwg.org/multipage/#dependencies:willful-violation\nhttps://datatracker.ietf.org/doc/draft-ietf-dispatch-javascript-mjs/"},"24":{"ext":".json","type":"JSON format","mime":"application/json"},"25":{"ext":".jsonld","type":"JSON-LD format","mime":"application/ld+json"},"26":{"ext":".mid\n.midi","type":"Musical Instrument Digital Interface (MIDI)","mime":"audio/midi audio/x-midi"},"27":{"ext":".mjs","type":"JavaScript module","mime":"text/javascript"},"28":{"ext":".mp3","type":"MP3 audio","mime":"audio/mpeg"},"29":{"ext":".mpeg","type":"MPEG Video","mime":"video/mpeg"},"30":{"ext":".mpkg","type":"Apple Installer Package","mime":"application/vnd.apple.installer+xml"},"31":{"ext":".odp","type":"OpenDocument presentation document","mime":"application/vnd.oasis.opendocument.presentation"},"32":{"ext":".ods","type":"OpenDocument spreadsheet document","mime":"application/vnd.oasis.opendocument.spreadsheet"},"33":{"ext":".odt","type":"OpenDocument text document","mime":"application/vnd.oasis.opendocument.text"},"34":{"ext":".oga","type":"OGG audio","mime":"audio/ogg"},"35":{"ext":".ogv","type":"OGG video","mime":"video/ogg"},"36":{"ext":".ogx","type":"OGG","mime":"application/ogg"},"37":{"ext":".opus","type":"Opus audio","mime":"audio/opus"},"38":{"ext":".otf","type":"OpenType font","mime":"font/otf"},"39":{"ext":".png","type":"Portable Network Graphics","mime":"image/png"},"40":{"ext":".pdf","type":"Adobe Portable Document Format (PDF)","mime":"application/pdf"},"41":{"ext":".php","type":"Hypertext Preprocessor (Personal Home Page)","mime":"application/x-httpd-php"},"42":{"ext":".ppt","type":"Microsoft PowerPoint","mime":"application/vnd.ms-powerpoint"},"43":{"ext":".pptx","type":"Microsoft PowerPoint (OpenXML)","mime":"application/vnd.openxmlformats-officedocument.presentationml.presentation"},"44":{"ext":".rar","type":"RAR archive","mime":"application/vnd.rar"},"45":{"ext":".rtf","type":"Rich Text Format (RTF)","mime":"application/rtf"},"46":{"ext":".sh","type":"Bourne shell script","mime":"application/x-sh"},"47":{"ext":".svg","type":"Scalable Vector Graphics (SVG)","mime":"image/svg+xml"},"48":{"ext":".swf","type":"Small web format (SWF) or Adobe Flash document","mime":"application/x-shockwave-flash"},"49":{"ext":".tar","type":"Tape Archive (TAR)","mime":"application/x-tar"},"50":{"ext":".tif\n.tiff","type":"Tagged Image File Format (TIFF)","mime":"image/tiff"},"51":{"ext":".ts","type":"MPEG transport stream","mime":"video/mp2t"},"52":{"ext":".ttf","type":"TrueType Font","mime":"font/ttf"},"53":{"ext":".txt","type":"Text, (generally ASCII or ISO 8859-n)","mime":"text/plain"},"54":{"ext":".vsd","type":"Microsoft Visio","mime":"application/vnd.visio"},"55":{"ext":".wav","type":"Waveform Audio Format","mime":"audio/wav"},"56":{"ext":".weba","type":"WEBM audio","mime":"audio/webm"},"57":{"ext":".webm","type":"WEBM video","mime":"video/webm"},"58":{"ext":".webp","type":"WEBP image","mime":"image/webp"},"59":{"ext":".woff","type":"Web Open Font Format (WOFF)","mime":"font/woff"},"60":{"ext":".woff2","type":"Web Open Font Format (WOFF)","mime":"font/woff2"},"61":{"ext":".xhtml","type":"XHTML","mime":"application/xhtml+xml"},"62":{"ext":".xls","type":"Microsoft Excel","mime":"application/vnd.ms-excel"},"63":{"ext":".xlsx","type":"Microsoft Excel (OpenXML)","mime":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},"64":{"ext":".xml","type":"XML","mime":"application/xml if not readable from casual users (RFC 3023, section 3)\ntext/xml if readable from casual users (RFC 3023, section 3)"},"65":{"ext":".xul","type":"XUL","mime":"application/vnd.mozilla.xul+xml"},"66":{"ext":".zip","type":"ZIP archive","mime":"application/zip"},"67":{"ext":".3gp","type":"3GPP audio/video container","mime":"video/3gpp\naudio/3gpp if it doesn't contain video"},"68":{"ext":".3g2","type":"3GPP2 audio/video container","mime":"video/3gpp2\naudio/3gpp2 if it doesn't contain video"},"69":{"ext":".7z","type":"7-zip archive","mime":"application/x-7z-compressed"}}

mimes.toggleDot = function () {
  	if ( this[0].ext.charAt(0) == '.' ) {
  		for (var i = 0; i<this.length; i++) {
  			this[i] = this[i].substr(1); 
  		}
  	} else {
  		for (var i = 0; i<this.length; i++) {
  			this[i] = '.'+this[i]; 
  		}
  	}
};

mimes.getByExt = function (ext) {
	this.find( el=> el.ext == ext );
};

mimes.getByDef = function (def) {
	this.find( el=> (new RegExp(def, 'g')).test(el.def) );
};

mimes.getByMime = function (mime) {
	this.find( el=> el.mime == mime );
};
