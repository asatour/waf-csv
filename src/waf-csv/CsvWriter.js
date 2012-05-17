/* Copyright (c) DA VINCI Coders, 2012
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

//(textStream, delimiteur, charset)
function CsvWriter() {
    "use strict";
    this.ESCAPE_MODE_BACKSLASH = 2;
    this.ESCAPE_MODE_DOUBLED = 1;
    this.textQualifier = '"';
    this.delimiteur = ";";
    this.charset = "UTF-8";

    if (arguments.length === 1 && typeof arguments[0] === "string") {
        this.fileName = arguments[0];
    }

    else if (arguments.length === 2 && arguments[0] instanceof TextStream) {
        this.textStream = arguments[0];
        this.delimiteur = arguments[1];
    }

    else if (arguments.length === 3) {
        if (arguments[0] instanceof TextStream) {
            this.textStream = arguments[0];
            this.delimiteur = arguments[1];
            this.charset = arguments[2];
        }
        if (typeof arguments[0] === "string") {
            this.fileName = arguments[0];
            this.delimiteur = arguments[1];
            this.charset = arguments[2];
        }
    }
}


CsvWriter.prototype.writeRecord = function(values) {
    "use strict";
    var
    temp = new Array(),
        stream = this.textStream;
    temp = values;
    stream.write(temp + "\n");
}
CsvWriter.prototype.writeContent = function(header, content, wstream) {
    "use strict";
    var
    reg = new RegExp("[ ,;]+", "g"),
        line = this.textStream.read(""),
        index = 0,
        tab = line.split(reg);
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] === header) {
            index = i;
        }
    }
    var
    reg = new RegExp("[ ]", "g"),
        values = content.split(reg);
    for (var h = 0; h < values.length; h++) {
        var chaine = "";
        for (var i = 0; i < tab.length; i++) {
            if (i === index) {
                chaine += values[h];
            }
            if (i + 1 !== tab.length) {
                chaine += ",";
            }
        }
        wstream.write("\n" + chaine);
    }
}

CsvWriter.prototype.write = function(content, preserveSpaces, header, wstream) {
    "use strict";
    if (content.length > 0 && !preserveSpaces) {
        content = content.trim();
        this.writeContent(header, content, wstream);
    }
    if (content.length > 0 && preserveSpaces) {
        this.writeContent(header, content, wstream);
    }
}

CsvWriter.prototype.SetTextQualifier = function(textQualifier) {
    "use strict";
    this.textQualifier = textQualifier;
}

CsvWriter.prototype.SetDelimiter = function(delimiteur) {
    "use strict";
    this.delimiteur = delimiteur;
}

CsvWriter.prototype.ChangeDelimiter = function(newDelim, stream) {
    "use strict";
    var
    reg = new RegExp("[,]+", "g"),
        line = this.textStream.read(" ");
    line = line.replace(reg, newDelim);
    stream.write(line);
}

CsvWriter.prototype.Close = function() {
    "use strict";
    this.textStream.close();
}

CsvWriter.prototype.writRec = function(values,preserveSpaces)
    {	
    if ( values.length > 0 && !preserveSpaces) {
         for( var i=0; i<values.length; i++){
       // values[i].trim(); 
       
         values[i] = values[i].replace(' ','');
         
          this.writeRecord(values);
        }
      }
        if (values.length > 0 && preserveSpaces) 
    {
      this.writeRecord(values);
    }
      }
exports.CsvWriter = CsvWriter;