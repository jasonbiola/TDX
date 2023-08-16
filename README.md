# TDX (TeamDynamix)
Jason Witt created this GitHub repo to house customization scripts and content.
This repo contains the ProductionScripts.js and SandboxScripts.js files. When reference, these files load Biola's [custom CSS](#user-content-custom-css), the [Foundation framework](#user-content-foundation-framework), and the [search bar styling](#user-content-search-bar-styling).

Last updated August 16, 2023 by Adam Snell

## Custom CSS
We have created a custom biola-stylesheet.css file in the GitHub repo (see section 3).

## Foundation Framework

We have "sideloaded" Foundation 6.7.5, to handle some custom styling and layout. We decided to use Foundation for a few reasons:
- The version of Bootstrap included by TDx is 7 years old
- I had trouble sideloading a newer version of Bootstrap
- After working with TerminalFour, I have reasonable familiarity with Foundation and its capabilities 
    
The Foundation CSS and JS files are implemented in the  via the ProductionScripts.js (PROD) and SandboxScripts.js (Sandbox) javascript files. These files live in the GitHub repo (see [Search Bar Styling](#user-content-search-bar-styling))

## Search Bar styling
A request was made to make the in-page TDx search bar "more shiny". As a result, the fixSearchBars () function was added, which does things like make the search bars full-width, adds a highlight/frame around them, etc.
