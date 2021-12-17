import react, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

export default function ShelfDisplay() {
  //alias HOOKS
  const dispatch = useDispatch();
  const items = useSelector((store) => store.setShelf);

    useEffect (() =>  {
        dispatch ({ type: "GET_SHELF"});
    }, [])

    const removeItem = (id) => {
      dispatch ({
        type: 'DELETE_ITEM',
        payload: id
      })
    }

  return (
    <div>
      <p>I am Shelf Display</p>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>
              <img height="300px" src={item.image_url}/>
              <p>{item.description}</p>
              <button onClick={e => removeItem(item.id)}> 🚫  💀  📵 </button>
            </li>
        })}
      </ul>
    </div>
  );
};