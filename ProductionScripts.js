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

.input-group .form-control {
    border: 2px solid #2268ab;
}

.input-group-btn>.btn-default {
    border: 2px solid #2268ab;
}



`
 
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
