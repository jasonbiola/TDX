var styles = `

/* This makes the action button text not bold */
.DetailAction  { 
  font-weight: normal;
  }

/* This makes the action button text smaller and the text aligned */
a.DetailAction {
  font-size: 18px;
  }  

a.DetailAction, button.DetailAction, div.DetailAction {
  font-size: 18px;
  align-items: flex-start;
  }

.fa {
  
}


/* This makes the action button icon centered vertically - Need correct code for this */
.fa-fw {
  text-align: center;
}

/* This makes the category button icons smaller */
.category-box .category-icon {
font-size: 3em;
margin-top: 16px;
}

`
 
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
