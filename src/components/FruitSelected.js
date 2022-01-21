import React from "react";

const FruitSelected = ({ selectedFruit }) => {
  return (
    <div>
    {selectedFruit.length && <div style={{ backgroundColor: "grey", color: "white", width: '250px' }}>
          <p>{selectedFruit[0].name}</p>
          <p>{selectedFruit[0].genus}</p>
        </div> }      
             
    </div>
  );
};

export default FruitSelected;
