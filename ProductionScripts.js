var styles = `

/* This makes the action button text not bold */
.DetailAction  { 
  font-weight: normal;
  }

/* This makes the action button text smaller and the text aligned */
a.DetailAction {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 18px;
  }  

/* This is the icon in the button */
.fa-fw {
    position: absolute;
  }

a.DetailAction, button.DetailAction, div.DetailAction {
  font-size: 18px;
  text-align: center;
  flex: 1;
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
