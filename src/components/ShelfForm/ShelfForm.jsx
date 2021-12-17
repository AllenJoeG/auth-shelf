import react, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ShelfForm () {
  const dispatch = useDispatch();
  const history = useHistory();

// useEffect(() => {
//   dispatch({ type: "SET_SHELF"});
// }, []);

let [newItem, setNewItem] = useState("");
let [newImageUrl, setNewImageURL] = useState("");

const handleItemChange = (e) => {
  setNewItem(e.target.value);
};

const handleUrlChange = (e) => {
  setNewImageURL(e.target.value);
};

const addNewItem = (e) => {
  console.log("addNewItem click");
  e.preventDefault();

  dispatch({
    type: "ADD_SHELF_ITEM",
    payload: {
      description: newItem,
      image_url: newImageUrl,
    }
  })
}

  return(
    <div>
    <p>I am a shelf form</p>

    <form onSubmit={(e) => addNewItem(e)}>
      <input
        value={newItem}
        onChange={handleItemChange}
        placeholder='Enter Item'
        type="text"
      />
      <label>Add Shelf Item</label>
      <br/>
      <input
      value={newImageUrl}
      onChange={handleUrlChange}
      placeholder="Enter Image URL"
      type="text"
      />
      <label>Enter Image URL</label>
      <br/>
      <button type="submit ">ADD</button>
    </form>
    </div>
  )
}