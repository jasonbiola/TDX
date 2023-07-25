var styles = `

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

.fa-4x {
font-size: 2em;
}


`
 
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
