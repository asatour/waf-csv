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
    this.comm ="#";
    this.textQualifier ='"';
    this.ForceQualifier=false;
    this.recordDelimiteur = "\n";
    this.UseTextQualifier= false;
    this.ESCAPE_MODE_DOUBLED = 1; 
    this.ESCAPE_MODE_BACKSLASH = 2;
    this.EscapeMode = this.ESCAPE_MODE_BACKSLASH;
    this.ForceQualifier = false;

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
	 var
	     temp = new Array();
	 if(this.UseTextQualifier==true)
	     	temp = this.textQualifier + values + this.textQualifier;
	  else 
	     	temp = values;
	     	
         this.textStream.write(temp+"");
         this.EndRecord();
    }

CsvWriter.prototype.writeContent = function(header,content,wstream) {
     var 
         reg = new RegExp("[ ,;]+", "g"),
         line = this.textStream.read(""), 
         index=0, 
         tab =  line.split(reg);
     for(var i=0; i<tab.length; i++)
     {
       if(tab[i] === header)
       {
         index = i;
       }
     }
     var
         reg = new RegExp("[ ]", "g"),
         values = content.split(reg);
     for(var h=0; h<values.length; h++)
     {
       var chaine ="";
       for(var i=0; i<tab.length; i++) 
       {
         if(i===index)
         {
             if(this.ForceQualifier){
       			chaine += this.textQualifier;
       			
       			if(this.EscapeMode == 1) {
       				chaine += this.replace(values[h], "\\", "\\\\");
       			} else if (this.EscapeMode == 2) {
       				chaine += this.replace(values[h], this.textQualifier, "\\"+this.textQualifier);
       			}
       		
       			
   				chaine += this.textQualifier;
         	}
         	else {
         		chaine += values[h];
         	}
         }
         if(i+1 !== tab.length)
         {
           chaine += ",";
         }
       }
       	wstream.write(chaine+"\n");
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
CsvWriter.prototype.writeComment = function(commentaire) {
  
   
    this.textStream.write(this.comm + commentaire+"\n");
        	
   	}
CsvWriter.prototype.SetRecordDelimiteur = function(recordDelimiteur) {
        
    	this.recordDelimiteur = recordDelimiteur;
    	
    }
CsvWriter.prototype.EndRecord = function() {
    	
     this.textStream.write(this.recordDelimiteur);
    	
    	}
    	
CsvWriter.prototype.SetUseTextQualifier = function(UseTextQualifier) {
    		this.UseTextQualifier = UseTextQualifier;
    	}
    
CsvWriter.prototype.SetTextQualifie = function (textQualifie) {
    	
    	this.SetUseTextQualifier(false);
    	this.textQualifier = textQualifie;
    	}	
    	
    	
CsvWriter.prototype.setEscapeMode = function (escapeMode) {
    
   	       this.EscapeMode = escapeMode;
   	}	
   	
CsvWriter.prototype.setForceQualifer = function (forceQualifier) {
   		
   		  this.ForceQualifier = forceQualifier;
   		  
   		}
   		
CsvWriter.prototype.replace = function (original, pattern, replace) {
	var tab = original.split(pattern);
	var s = "";
		for(var i=0; i<tab.length; i++) {
			s += tab[i];
			if(i!=tab.length-1)
				s += replace;
		}
		return s;
	}
CsvWriter.prototype.SetComment= function(comment){
   	 	
   	 	this.comm = comment;
	 	
	 	}
CsvWriter.prototype.flush = function()
       {
         this.textStream.flush();
        
    	
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

CsvWriter.prototype.writRec = function(values,preserveSpaces)
    {	
    if ( values.length > 0 && !preserveSpaces) {
         for( var i=0; i<values.length; i++){
     
         values[i] = values[i].replace(' ','');
         
          this.writeRecord(values);
        }
      }
        if (values.length > 0 && preserveSpaces) 
    {
      this.writeRecord(values);
    }
      }
CsvWriter.prototype.Close = function() {
   
    this.textStream.close();
}
exports.CsvWriter = CsvWriter;
