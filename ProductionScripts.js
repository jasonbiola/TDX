/**
* Appends the Foundation 6.7.5 javascript file to <body>,
* and calls Foundation's initialization function
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

/**
* Prepends the Foundation 6.7.5 CSS to <head>
* (so that Bootstrap's CSS will take precedence for any "shared" classes)
**/
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
* Appends the biola-stylesheet.css file to <head>
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

/**
* Searches the #content div for any .site-search containers,
* and restyles them to make them "more shiny"
**/
function fixSearchBars () {
    $("#content .site-search").each (function () {
        console.log (`Restyling in-page site search ${ $(this).attr("id") }`);
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
        $(this).children("*").addClass ("cell");
        $(this).find("input").addClass ("auto");
    })
}

appendStylesheet ();
//addFoundationCSS ();
//addFoundationJS();

//    Wait .5 seconds for the DOM to finish loading, before calling fixSearchBars
var fsbTimeout = setTimeout(fixSearchBars, 500);
//    This is just for visual confirmation of which version of the script is loading.
console.log ("ProductionScripts.js version 2023.08.16");
