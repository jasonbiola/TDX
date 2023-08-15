/* We shouldn't need this style information anymore; all styling should be handled by the biola-stylesheet.css file, which is appended via the script below. But I didn't want to just delete all of this, and then miss it later.  -Adam Snell, 2023/08/10
var styles = `.DetailAction  {  display: block; font-weight: normal;  }
a.DetailAction {font-size: 18px;}  
a.DetailAction, button.DetailAction, div.DetailAction {font-size: 18px;}
.category-box .category-icon {font-size: 3em;margin-top: 16px;}
.rss-container {padding: 10px;font-family: Arial, sans-serif;}
div.rss-headline {color: #2268A0;font-size: 14px;font-weight: 500;line-height: 16px;}
`
*/

/**
* Pulls in the CSS and JS files for the specified version of Bootstrap
**/

function addFoundationJS () {
    var script = document.createElement('script');
    script.onload = function () {
        $(document).foundation();
    };
    script.src = `https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/js/foundation.min.js`;
    script.crossorigin = "anonymous";
    document.body.appendChild(script);
};

function addFoundationCSS ()
{
  //  Define the url of the Bootstrap CSS file
  var stylesheetUrl = `https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css`;
  //  Define a new "link" element to be appended to the document head
  var cssTag = document.createElement ("link");
  cssTag.crossorigin = "anonymous";
  cssTag.rel  = "stylesheet";
  cssTag.type = "text/css";
  cssTag.href = stylesheetUrl;
  //  Get a handle on the document's head
  var head = document.getElementsByTagName ("head")[0];
  //  Append the stylesheet link to the head
  head.prepend(cssTag);
}

/**
* Appends the biola-stylesheet.css file to the page's head
**/
function appendStylesheet ()
{
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
}

function fixSearchBar () {
    $("#content .site-search").each (function () {
        $(this)
            .addClass("align-middle grid-x small-12")
            .css({
                "background-color":"#d9edf7",
                "border":"1px solid #2268ab",
                "border-radius":"10px",
                "margin":"0",
                "max-width":"100%",
                "padding":"14px"
            });
        $(this).children("*")
            .addClass ("cell")
            $(this).find("input").addClass ("auto");
    })
}

appendStylesheet ();
addFoundationCSS ();
addFoundationJS();
fixSearchBar ();
console.log ("SandboxScripts.js version 1.0.6");
