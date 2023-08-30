function runDelayedFunctions ()
{
    fixSearchBars ();
    linkAccordions ();
}

function runSandboxFunctions ()
{
    appendStylesheet ("biola-sandbox-stylesheet.css");
    loadFontAwesome6 ();
    //    This is just for visual confirmation of which version of the script is loading.
    console.log ("SandboxScripts.js version 2023.08.24");
}

function runProductionFunctions ()
{
    appendStylesheet ("biola-stylesheet.css");
    loadFontAwesome6 ();
    //    This is just for visual confirmation of which version of the script is loading.
    console.log ("ProductionxScripts.js version 2023.08.30");
}

/**
* Appends the biola-stylesheet.css file to <head>
**/
function appendStylesheet (fileName)
{
  //  Define where the stylesheet is stored
  var stylesheetUrl = `https://jasonbiola.github.io/TDX/${fileName}`;
  
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

/**
* This function finds all .accordion elements, and creates a unique link between the .accordion-trigger and .accordion-target sub-elements.
* This was created to simplify the creation of accordions in the TDx richtext editor. Without it, content creators would have to go into
* the source code and manually enter a `data-target` attribute for each accordion.
**/
function linkAccordions ()
{
    var accordions = $(".accordion");
    let i = 0;
    while (accordions.hasOwnProperty (i))
    {
        let acc = accordions[i];
        let accId = `accordion-${i}`;
        try{
            var trigger = $(acc).children(".accordion-trigger")[0];
            var target = $(acc).children(".accordion-target")[0];
            
            $(target).attr("accordion-id",accId);
            $(target).addClass (`collapse`);

            $(trigger).attr(`data-target`, `[accordion-id=${accId}]`);
            $(trigger).attr(`data-toggle`,`collapse`);
        }
        catch (err)
        {
            console.log (`unable to link accordion ${i}: ${err}`);
        }
        i++;
    }
}

function loadFontAwesome6 ()
{
    var sTag = document.createElement ("script");
    sTag.src = `https://kit.fontawesome.com/8fd3c79167.js`;
    sTag.crossorigin = `anonymous`;
    var head = document.getElementsByTagName('head')[0];
    //  Append the stylesheet link to the head
    head.appendChild(sTag);
}

//    If the page calling this script is in sandbox, run the Sandbox scripts
if ( window.location.href.match(/sbtdclient/i) )
    runSandboxFunctions ()
//    Otherwise, run the Production scripts
else
    runProductionFunctions ()

//    Wait .5 seconds for the DOM to finish loading, before calling the rest of the initialization functions
var fsbTimeout = setTimeout(runDelayedFunctions, 1000);
