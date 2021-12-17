import React from 'react';
import ShelfForm from '../ShelfForm/ShelfForm.jsx';

function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfForm/>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
