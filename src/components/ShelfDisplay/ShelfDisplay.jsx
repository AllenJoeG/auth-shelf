import react, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

export default function ShelfDisplay() {
  //alias HOOKS
  const dispatch = useDispatch();
  const items = useSelector((store) => store.setShelf);

    useEffect (() =>  {
        dispatch ({ type: "GET_SHELF"});
    }, [])

  return (
    <div>
      <p>I am Shelf Display</p>
      <ul>
        {items.map((item) => {
          return <li><img src={item.image_url}/><p>{item.description}</p></li>
        })}
      </ul>
    </div>
  );
};