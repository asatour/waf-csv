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


/*Construit un objet CsvReader à l'aide d'un objet TextStream 
comme source de données.*/
function CsvReader() {
    "use strict";
    this.ESCAPE_MODE_DOUBLED = 1;
    this.ESCAPE_MODE_BACKSLASH = 2;
    this.textQualifier = '"';
    this.delimiteur = ",";
    this.charset = "UTF-8";
    this.recordDelimiteur = '\0';
    this.comment = '#';

    if (arguments.length === 3 && arguments[0] instanceof TextStream) {
        this.stream = arguments[0];
        this.delimiteur = arguments[1];
        this.charset = arguments[2];
    }

    else if (arguments.length === 2 && arguments[0] instanceof TextStream) {
        this.stream = arguments[0];
        this.charset = arguments[1];
    }

    else if (arguments.length === 1 && typeof arguments[0] === "string") {
        this.file = arguments[0];
    }

    else if (arguments.length === 2 && typeof arguments[0] === "string") {
        this.file = arguments[0];
        this.charset = arguments[1];
    }

    else if (arguments.length === 3 && typeof arguments[0] === "string") {
        this.file = arguments[0];
        this.delimiteur = arguments[1];
        this.charset = arguments[2];
    }
}

//retourne le nombre de colonnes d'un fichier csv
CsvReader.prototype.getCulumnsCount = function() {
    "use strict";
    var
        reg = new RegExp("[ ,;\n]+", "g"),
        temp = new Array(),
        c;
  
    temp = this.stream.read("").split(reg);
    c = temp.length;
    return c;
}
//retourne une colonne selon le nom ou le numéro de header passé en paramètres 
CsvReader.prototype.get = function(header) {
    "use strict";
    var
        reg = new RegExp("[ ,;\n]+", "g"),
        index = 0,
        k = 0,
        tab = this.stream.read("").split(reg),
        arr = new Array();
    if (typeof arguments[0] === "string") {
        for (var i = 0; i < tab.length; i++) {
            if (tab[i] === header) {
                index = i;
            }
        }
    }

    else if (typeof arguments[0] === "number") {
        for (var i = 0; i < tab.length; i++) {
            if (i === header) {
                index = i;
            }
        }
    }

    while (this.stream.end() === false) {
        var
            tab2;
            tab2 = this.stream.read("").split(reg);
        if (tab2[index] !== null && tab2[index] !== "") {
            arr[k++] = tab2[index];
        }
    }
    return arr.toString();
}
//retourne l'index du header passé en paramètres   
CsvReader.prototype.getIndex = function(header) {
    "use strict";
    var
        reg = new RegExp("[ ,;\n]+", "g"),
        index = 0,
        tab = this.stream.read("").split(reg);
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] === header) {
            index = i;
        }
    }
    return index;
}

//retourne tous les headers d'un fichier csv		
CsvReader.prototype.getHeaders = function() {
    "use strict";
    var
        reg = new RegExp("[ ,;\n]+", "g"),
        line = this.stream.read(""),
        arr = new Array();
    line = line.split(reg);
    for (var i = 0; i < line.length; i++) {
        arr[i] = line[i];
    }
    return arr;
}


CsvReader.prototype.getHeader = function(columnIndex) {
    //"use strict";
    var
        reg = new RegExp("[ ,;\n]+", "g"),
        line = this.stream.read(""),
        index = 0;
        tableau = new Array();
    tableau = line.split(reg);
     for (var i = 0; i < tableau.length; i++) {
            if (i === columnIndex) {
                index = i;
            }
        }
        return tableau[index];
}

CsvReader.prototype.getHeaderCount = function(){
	var 
	   headers = this.getHeaders();
	   return headers.length; 
	}

CsvReader.prototype.getCurrentRecord = function() {
	var
	   i = 0,
	   temp = new Array();
	   	while(this.stream.end()==false){
	   		var
	   		   chaine = this.stream.read("");
	   		   if(chaine!=null && chaine!="")
	   		   {
	   		temp[i] = chaine;
	   		i++;
	   		}
	   		 
	   		} 
	   		return temp.length - 1;	   		
}
//retourne le texte Qualifier 	
CsvReader.prototype.getTextQualifier = function() {
    "use strict";
    return this.textQualifier;
}

CsvReader.prototype.getEscapeMode = function() {
    "use strict";
    return this.ESCAPE_MODE_DOUBLED + " " + this.ESCAPE_MODE_BACKSLASH;
}

CsvReader.prototype.getDelimiter = function() {
    return this.delimiteur;
}

CsvReader.prototype.getRecordDelimiter = function() {
    return this.recordDelimiteur;
}

CsvReader.prototype.getComment = function() {
    return this.comment;
}

CsvReader.prototype.getUseComments = function() {
    var
       line="";
       while(this.stream.end()===false){
       line = this.stream.read();
       if(line.search("#")==-1) {
       	//le fichier ne contient pas de commentaires  
       return false; 
       }
       else {
       	//le fichier contient de commentaires 
       	return true;
       	}
       }     
}

CsvReader.prototype.getUseTextQualifier = function() {
    var
       reg = new RegExp("[\"\']", "g");
     
       while(this.stream.end()===false){
       if(this.stream.read().search(reg)==-1) {
       	//le fichier ne contient pas de commentaires  
       return false; 
       }
       else {
       	//le fichier contient de commentaires 
       	return true;
       	}
       }     
}

CsvReader.prototype.parse = function(data) {
	return new CsvReader(data);
	}


CsvReader.prototype.Close = function() {
    "use strict";
    this.stream.close();
}

exports.CsvReader = CsvReader;