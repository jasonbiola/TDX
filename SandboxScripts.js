var styles = `.DetailAction  {  display: block; font-weight: normal;  }
a.DetailAction {font-size: 18px;}  
a.DetailAction, button.DetailAction, div.DetailAction {font-size: 18px;}
.category-box .category-icon {font-size: 3em;margin-top: 16px;}
.rss-container {padding: 10px;font-family: Arial, sans-serif;}
div.rss-headline {color: #2268A0;font-size: 14px;font-weight: 500;line-height: 16px;}
`

//  Define where the stylesheet is stored
var stylesheetUrl = `https://jasonbiola.github.io/TDX/biola-stylesheet.css`;

//  Define a new "link" element to be appended to the document head
var stylesheetLink = document.createElement('link');
stylesheetLink.rel  = 'stylesheet';
stylesheetLink.type = 'text/css';
stylesheetLink.href = stylesheetUrl;
stylesheetLink.media = 'all';

//  Get a handle on the document's head
var head = document.getElementsByTagName('head')[0];
//  Append the stylesheet link to the head
head.appendChild(stylesheetLink);
