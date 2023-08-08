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

.category-box .category-icon {
   font-size: 3em;
   margin-top: 16px;
}

.rss-container {
   padding: 10px;
   font-family: Arial, sans-serif;
  }

 div.rss-headline {
    font: #2268A0;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
  }

`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
