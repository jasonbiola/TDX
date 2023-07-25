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
  text-align: center;
}

a.DetailAction {
  font-size: 18px;
  }  
  
h3.category-title {
text-align: center
color: #2268AB;
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
