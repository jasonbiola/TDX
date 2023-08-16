# TDX (TeamDynamix)
Jason Witt created this GitHub repo to house customization scripts and content.
This repo contains the ProductionScripts.js and SandboxScripts.js files. When reference, these files load Biola's [custom CSS](#custom-css), the [Foundation framework](#foundation-framework), and the [search bar styling](#search-bar-styling).

Last updated August 16, 2023 by Adam Snell

## Custom CSS
We have created a [custom biola-stylesheet.css](./biola-stylesheet.css) file for customizing element styling.

## Foundation Framework

We have "sideloaded" Foundation 6.7.5, to handle some custom styling and layout. We decided to use Foundation for a few reasons:
- The version of Bootstrap included by TDx is 7 years old.
- I had trouble sideloading a newer version of Bootstrap.
- After working with TerminalFour, I have reasonable familiarity with Foundation and its capabilities.
    
The Foundation CSS and JS files are implemented in the via the [ProductionScripts](./[ProductionScripts.js) (PROD) and [SandboxScripts](./SandboxScripts.js) (Sandbox) javascript files.

## Search Bar styling
A request was made to make the in-page TDx search bar "more shiny". As a result, the fixSearchBars () function was added to the (./ProductionScripts.js) and SandboxScripts files, which does things like make the search bars full-width, adds a highlight/frame around them, etc.
