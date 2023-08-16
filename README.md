# TDX (TeamDynamix)
This repo contains the ProductionScripts.js and SandboxScripts.js files. When reference, these files load Biola's [custom CSS](#custom-css), the [Foundation framework](#foundation-framework), and the [search bar styling](#search-bar-styling).

Jason Witt created this GitHub repo to house customization scripts and content.
Last update: August 16, 2023 by Adam Snell

## Custom CSS
We have created a [biola-stylesheet.css](./biola-stylesheet.css) file for customizing element styling.

## Using these JavaScript files
To add these files to TeamDynamix, use the GitHub Pages urls for the files. These URLs start with `https://jasonbiola.github.io/TDX/`, with the name of the file appended. You can copy/paste the following code into TDx:
* Production Scripts: `<script src="https://jasonbiola.github.io/TDX/ProductionScripts.js"></script>`
* Sandbox Scripts: `<script src="https://jasonbiola.github.io/TDX/SandboxScripts.js"></script>`

## Foundation Framework

We have "sideloaded" Foundation 6.7.5, to handle some custom styling and layout. We decided to use Foundation for a few reasons:
- The version of Bootstrap included by TDx is 7 years old.
- A new version of Bootstrap seems more likely to conflict with the old version than a different framework. (This is not to say that Foundation has no conflicts, so be prepared to deal with conflicting classes.)
- We ran into trouble trying to sideload a newer version of Bootstrap.
    
The Foundation CSS and JS files are implemented via the [ProductionScripts](./[ProductionScripts.js) (PROD) and [SandboxScripts](./SandboxScripts.js) (Sandbox) javascript files.

## Search Bar styling
A request was made to make the in-page TDx search bar "more shiny". As a result, the fixSearchBars () function was added to the, which does things like make the search bars full-width, adds a highlight/frame around them, etc.
