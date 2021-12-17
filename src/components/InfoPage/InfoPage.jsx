import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const dispatch = useDispatch();
  
  const shelf = useSelector((store) => store.setShelf);

  const [description, setDescription]= useState('');
  const [image_url, setImage_url] = useState('');
  const [editID, setEditID] = useState(0);

  useEffect(() => {
    dispatch({ type: "GET_SHELF"})
  }, []);

  const radioButton = (e) => {
    console.log(e.target.value)
    setEditID(e.target.value)
  }

  const submitUpdate = () => {
    dispatch ({
      type: 'EDIT_ITEM',
      payload: {
        description: description,
        image_url: image_url,
        id: editID
      } 
    });
  };

  return (
    <div className="container">
      <h1>Info Page</h1>
      <table className="tableStyles">
        <thead>
          <th>Description</th>
          <th>Image Url</th>
          <th>Edit</th>
        </thead>
        <tbody>
          <tr>
            <td><input
              placeholder="Update Selected Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            /></td>
            <td><input
              placeholder="Update Selected URL"
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            /></td>
            <td><button onClick={submitUpdate}>Update</button></td>
          </tr>
          {shelf.map((item) => {
            return <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.image_url}</td>
              <td><input 
                    type="radio"
                    name="editItem"
                    onChange={radioButton}
                    value={item.id}
                  />
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default InfoPage;

