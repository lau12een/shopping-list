'use strict';

let STORE = {
  items: [
    {name: 'apples', isChecked: false,
    isEditing: false },
    { name: 'oranges', isChecked: false,
   isEditing:false },
    {name: 'milk', isChecked: true, 
    isEditing: false },
    {name: 'bread', isChecked: falst,
    isEditing: false }
  ],
  hideChecked: false,
    searchTerm: null
};

// store editing function
// this section has the side-effect of changing the STORE values

function addListItem(itemName) {
  console.log(`Adding ${itemName} to shopping list.`);

  STORE.items.push({
    name: itemName,
    isChecked: false,
    isEditing: false 
  });
}

// this area reserved for deleteListItem function

function editName(itemIndex, newName) {
  let currentItem = STORE.items[itemIdex];
  console.log(`Renaming ${currentItem.name} to ${newName}`);
  STORE.items[itemIndex].name = newName;
}

