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
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }

  .rss-entry {
    margin-bottom: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .rss-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .rss-description {
    font-size: 14px;
  }


`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
