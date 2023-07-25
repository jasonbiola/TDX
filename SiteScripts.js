var styles = `
h1 { 
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  }

.DetailAction  { 
  display: block;
  font-weight: normal;
}

a.DetailAction {
  font-size: 10px;
}  
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
