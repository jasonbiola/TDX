var styles = `

div#ctl00_ctl00_cpContent_cpContent_divDescription {
  background-color: #d9edf;
}

.DetailAction  { 
  display: block;
  font-weight: normal;
  }

a.DetailAction {
  font-size: 18px;
  }  

a.DetailAction, button.DetailAction, div.DetailAction {
  font-size: 18px;
}

gutter-top-sm, media-object, category-icon, fa, fa-4x, fa-fw" {
font-size: 3em;
}

//.gutter-top-sm {
margin-top: 16px;
}


`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
