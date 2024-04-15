
//TO DO: JSON parse the saved cats from the results page


fetch('results.html')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
  })

/*
TO DO: redo dynmatic display.. should look almost the save as each cat on the results page, with a delete button and our star ratings
*/


/*addd event listener for delete button 
maybe a toggle button? 
have a default message of no cats saved yet
*/
import React, { useState } from 'save.html';

const ItemList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleDelete = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};





/*
figure out star rating 
for passed int favResults  make an star attribute to save that represents the saved stars 
figure out how to save rating in local storage 
*/



/*
once cat is deleted remove it from local storage and then resave list of save cats 
import React, { useState, useEffect } from 'react';*/



const ItemList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items'));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);
  const handleDelete = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };
  return (
    <div>
      <h1>saved</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;




