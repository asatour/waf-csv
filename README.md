<h2>Introduction </h2>

A CSV file is a text file that has a specific format which allows the saving of textual information/data in an organized fashion.
The format, known as a flat table, is very simple. Each row (paragraph) contains a record of information;
each record can contain multiple pieces of data (fields) separated by a character.

The character used to distinguish between each piece of data and each record is most commonly a comma, but can be any character. A Csv file is easy to use and to manipulate.
There are many API to manipulate this file, such as SkifeCsv, OpenCsv, SuperCsv, Csv4Java, JavaCsv…, but most of them are developed by java language.
We develop a JavaScriptCsv API  based totally on JavaCsv.

Following the example of JavaCsv our JavaScriptCsv API contains eighty Methods.

This API is intended  to manipulat files in Wakanda; which is a platform for development and deployment of web and mobile applications using JavaScript.
However our API JavaScriptCsv is not yet adaptable to the NodeJs.

After this step we plan to start developing the JavaScriptExecl API for processing Excel files.

<h2>Spécification </h2>

<h4>CsvReader</h4>

methods already done:
<p>1- CsvReader(fileName, delimiter, charset): Creates a CsvReader object using a file as the data source<br />2- CsvReader(fileName, delimiter): Creates a CsvReader object using a file as the data source. Uses ISO-8859-1 as the Charset. <br />3- CsvReader(fileName): Creates a CsvReader object using a file as the data source. Uses a comma as the column delimiter and ISO-8859-1 as theCharset. <br />4- CsvReader(textStream, delimiter, charset): Constructs a CsvReader object using a TextStream object as the data <br />source. <br />5- CsvReader(textStream, charset): Constructs a CsvReader object using a TextStream object as the data source. Uses a comma as the column delimiter.<br />6- char getDelimiter(): Gets the character being used as the column delimiter. Default is comma, ’,’. <br />7- char getRecordDelimiter(): gets the character to use as the record delimiter.<br />8- char getTextQualifier(): Gets the character to use as a text qualifier in the data. <br />9- boolean getUseTextQualifier(): returns Whether text qualifiers will be used while parsing or not. <br />10- char getComment(): Gets the character being used as a comment signal. <br />11- boolean getUseComments(): Gets whether comments are being looked for while parsing or not.<br />12- int getEscapeMode(): Gets the current way to escape an occurance of the text qualifier inside qualified data.<br />13- int getColumnCount(): Gets the count of columns found in this record.<br />14- long getCurrentRecord(): Gets the index of the current record.<br />15- String[] getHeaders(): Returns the header values as a string array.<br />16- String getHeader(columnIndex):  Returns the column header value for a given column index.<br />17- int getHeaderCount():  Gets the count of headers read in by a previous call to getHeaders().<br />18- String get(int columnIndex): Returns the current column value for a given column index. <br />19- String get(String headerName): Returns the current column value for a given column header name. <br />20- int getIndex(String headerName): Gets the corresponding column index for a given column header name.<br />21- CsvReader parse(String data): Creates a CsvReader object using a string of data as the source. Uses ISO-8859-1 as the Charset.<br />22- void close(): Closes and releases all related resources.</p>

Methods not yet used:

<p>1- boolean getCaptureRawRecord()<br />2- String getRawRecord()<br />3- boolean getTrimWhitespace(): Gets whether leading and trailing whitespace characters are being trimmed from non-textqualified column data. Default is true.<br />4- boolean getSkipEmptyRecords()<br />5- boolean getSafetySwitch(): Safety caution to prevent the parser from using large amounts of memory in the case where parsing settings like file encodings don’t end up matching the actual format of a file. This switch can be turned off if the file format is known and tested. With the switch off, the max column lengths and max column count per record supported by the parser will greatly increase. Default is true.<br />6- String[] getValues()<br />7- boolean readRecord(): Reads another record. Returns Whether another record was successfully read or not<br />8- boolean isQualified(int columnIndex)<br />9- boolean skipRecord(): Skips the next record of data by parsing each column. Does not increment getCurrentRecord(). Returns Whether another record was successfully skipped or not. <br />10- boolean skipLine(): Skips the next line of data using the standard end of line characters and does not do any column delimited parsing. Returns Whether a line was successfully skipped or not.</p>

<h4>CsvWriter</h4>

methods already used:

<p>1- CsvWriter(fileName, delimiter,charset): Creates a CsvWriter object using a file as the data destination<br />2- CsvWriter(fileName) Creates a CsvWriter object using a file as the data destination. Uses a comma <br />as the column delimiter and ISO-8859-1 as the Charset.<br />3- CsvWriter(textStream, delimiter, charset): Creates a CsvWriter object using a TextStream to write data to.<br />4- CsvWriter(textStream, delimiter): Creates a CsvWriter object using a TextStream to write data to. Uses ISO-8859-1 as the Charset.<br />5- void setDelimiter(char delimiter): Sets the character to use as the column delimiter<br />6- void setTextQualifier(char textQualifier): Sets the character to use as a text qualifier in the data.<br />7- void setComment(char comment)<br />8- void writeConetnt(content, preserveSpaces, header, wstream): Writes another column of data to this record.<br />9- void writeCont(header,content,wstream): Writes another column of data to this record. Does not preserve leading and trailing whitespace in this column of data.<br />10- void writeComment(String commentText)<br />11- void writeRec(String[] values, boolean preserveSpaces): Writes a new record using the passed in array of values.<br />12- void writeRecord(String[] values): Writes a new record using the passed in array of values.<br />13- ChangeDelimiter(newDelim, stream): change the char delimiter used in the file.<br />14- void close(): Closes and releases all related resources.<br />15- void setRecordDelimiter(char recordDelimiter): Sets the character to use as the record delimiter.<br />16- void setUseTextQualifier(boolean useTextQualifier): Sets whether text qualifiers will be used while writing data or not.<br />17- void setEscapeMode(int escapeMode)<br />18- void setComment(char comment)<br />19- void setForceQualifier(boolean forceQualifier): Use this to force all fields to be surrounded by the text qualifier even if the qualifier is not necessarily needed to escape this field. Default is false.<br />20- void endRecord(): Ends the current record by sending the record delimiter.<br />21- void flush(): Clears all buffers for the current writer and causes any buffered data to be written to the underlying device.<br />22- String replace(String original,String pattern, String replace).</p>


<h2>pregression</h2>

Almost half of methods has already  been done, and we expect to finish the rest within 15 days. So, in 15 days time the test-case version will be finalized.

Wakanda versions:
the Wakanda product exists in two versions, the first one issued on 15 MAR 2012 and the second one issued on 11 MAI 2012, this version has passed the Wakanda's preliminary quality tests. the two versions are available for the three Operating Systems: Windows, MAC and Linux.

<pre>
<code>
            The following table describes the available combinations:
             
                              Windows                Mac OS     Linux
             
             Wakanda Server   32-bit or 64-bit       64-bit                64-bit
             Wakanda Studio    32-bit                32-bit	    n/a
</code>
</pre>
You can download the versions from the website of Wakanda: http://www.Wakanda.org/downloads

<h2>Installation</h2>

<h4>Installing Wakanda Studio and Wakanda Server</h4>

To install Wakanda Studio and Wakanda Server at the same time, follow the directions below:

1- Download the "All in one" archive for your computer system (Macintosh or Windows).
2- Unzip the archive.
3- Place both Wakanda Studio and Wakanda Server in the same folder.
If you do not place them in the same folder, Wakanda Studio will ask you to locate Wakanda Server.

<h4>Installing Wakanda Studio</h4>

To install Wakanda Studio, follow the directions below:

1- Download Wakanda Studio for your computer system (Macintosh or Windows).<br>
2- Unzip the archive.<br>
3- Launch Wakanda Studio.<br>
Wakanda Studio doesn't need Wakanda Server immediately, but when it does, it will ask you to locate it.

<h4>Installing Wakanda Server</h4>

To install Wakanda Server, follow the directions below:

1- Download Wakanda Server for your computer system (Macintosh or Windows).<br>
2- Unzip the archive.<br>
3- Launch Wakanda Server.<br>
Once launched, Wakanda Server is moved to the background. To access it, you need to launch Wakanda Studio.

<h4>Installing Wakanda Server on Linux</h4>

To install Wakanda Server on Linux, follow the directions below:

1- Download the Linux version of Wakanda Server.<br>
2- Unzip the archive.<br>
3- Open the terminal.<br>
4- Drap the Wakanda icon in the terminal and click enter.<br>

Or you can follow the instructions in the video: http://doc.Wakanda.org/Installing-Wakanda/Installing-Wakanda.100-689089.en.html

<h4>Installing waf-csv module</h4>
The waf-csv module follow the CommonJS architecture.
To install waf-csv module on Wakanda Server follow the directions below:

1- Go to Wakanda Server main folder.<br>
2- Open the Modules folder.<br>
3- Copy waf-csv folder and waf-csv.js file(found in the src folder) into the Modules folder.<br>
4- Restart Wakanda Server.<br>
    for more explanation, you can visit the folowing link: <br>
    http://doc.wakanda.org/SSJS-Modules/Configuring-Custom-SSJS-Modules.200-953093.en.html<br>
<h2>Examples</h2>

Reader:

```javascript
var 
  CsvReader;
CsvReader = require('waf-csv').CsvReader;

var
   stream,
   csv,
   result;
   
stream = new TextStream("c:/WakandaV2/csv.csv","read",-2);
csv = new CsvReader(stream,"UTF-8");
result = csv.get("Nom"); //returns the column of IDs: "1,2,3,4"
```

 
Writer:

```javascript
var 
  CsvWriter;
CsvWriter = require('waf-csv').CsvWriter;

var
 	stream,
 	csv,
 	tab;
 	
stream = new TextStream("c:/temp/csvfile.csv","write",-2);
csv = new CsvWriter(stream,";","UTF-8");
tab = new Array("1","Amal","BAHOUS");

csv.writeRecord(tab);
```

<h2>License</h2>
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
<h2>Authors</h2>
<p><strong>Author:</strong><br>
Abdelahad SATOUR: satour.abdelahad@gmail.com</p>

<p><strong>Contributors:</strong><br>
Amal BAHOUS: amal.bahous@gmail.com<br>
Najoua MAHI: najoua.mahi@gmail.com<br>
<br>
</p> 


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/asatour/waf-csv/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

