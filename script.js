//your JS code here. If required.
	 const listItems = document.querySelectorAll("ul li");
	 const found = document.getElementById('level');
	

	
listItems.forEach((item,index) => {
	 if (item.id === "level") {
   alert(`The level of the element is: ${index}`);
  }
});