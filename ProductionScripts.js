var styles = `

/* This makes the action button text not bold */
.DetailAction  { 
  font-weight: normal;
  }

/* This makes the action button text smaller */
a.DetailAction {
  font-size: 18px;
  }  

a.DetailAction, button.DetailAction, div.DetailAction {
  font-size: 18px;
  }

/* This makes the category button icons  smaller */
.category-box .category-icon {
font-size: 3em;
margin-top: 16px;
}

div.rss-container {
   padding: 15px;
   font-family: Arial, sans-serif;
  }

 div.rss-headline {
    font-family: Helvetica Neue;
    color: #2b2b2b;
    font-size: 1.2em;
    font-weight: 400;
    line-height: 1.42857143;
   }

.quickjump-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  }
  
.quickjump {
  margin: 0 10px;
  text-align: center;
  width: 200px;
}
`
 
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
