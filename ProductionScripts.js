var styles = `

.DetailAction  { 
  font-weight: normal;
  }

a.DetailAction {
  font-size: 18px;
  display: flex;
  align-items: flex-start;
   }  

a.DetailAction, button.DetailAction, div.DetailAction {
  font-size: 18px;
  }

.fa-fw {
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-box .category-icon {
font-size: 3em;
margin-top: 16px;
}

`
 
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
