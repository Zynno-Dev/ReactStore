import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './style.css'

function ItemCount() {
  const [num, Modificador] = useState(0);

  return (
    <div className="contador">
      <p>Cantidad: {num}</p>
      <Button variant="contained" color="primary" onClick={function(){if(num != 3 ) {Modificador(num + 1)}}}>
      +
    </Button>
    <Button variant="contained" color="primary" onClick={function(){if(num != 0 ) {Modificador(num - 1)}}}>
      -
    </Button>
    </div>
  );
}

export default ItemCount;