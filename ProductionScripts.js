var styles = `

/* This makes the action button text not bold */
.DetailAction  { 
  font-weight: normal;
  }

/* This makes the action button text smaller and the text aligned */
a.DetailAction {
  font-size: 18px;
  display: flex;
  align-items: center;
  }  

a.DetailAction, button.DetailAction, div.DetailAction {
  font-size: 18px;
  flex-wrap: wrap;
  }

/* This is the icon in the button */
.fa-fw {
    flex-shrink: 0;
  }

/* This makes the category button icons  smaller */
.category-box .category-icon {
font-size: 3em;
margin-top: 16px;
}

`
 
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
