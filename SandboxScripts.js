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
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }

 div.rss-headline {
    font-size: 14px;
    font-weight: 500px;
    line-height: 16px;
  }

`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
