var styles = `

div#ctl00_ctl00_cpContent_cpContent_divDescription.gutter-top.ckeShim {
  background-color: #d9edf;
}

.DetailAction  { 
  display: block;
  font-weight: normal;
  }

a.DetailAction {
  font-size: 18px;
  }  

h3.category-title {
text-align: center;
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
