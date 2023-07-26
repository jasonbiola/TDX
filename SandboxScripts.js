var styles = `

div.gutter-bottom {
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

.category-box .category-icon {
font-size: 3em;
margin-top: 16px;
}

`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
