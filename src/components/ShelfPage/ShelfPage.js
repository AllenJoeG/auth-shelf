import React from 'react';
import ShelfForm from '../ShelfForm/ShelfForm.jsx';
import ShelfDisplay from '../ShelfDisplay/ShelfDisplay.jsx';

function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfForm/>
      <p>All of the available items can be seen here.</p>
      <ShelfDisplay/>
    </div>
  );
}

export default ShelfPage;
