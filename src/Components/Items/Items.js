import React, { useState, useEffect } from 'react'

const Items = () => {

  const [localItems, setLocalItems] = useState([])

  useEffect = (() => {

    const localMock = [
      {
        id: 1,
        title: 'Motorola Moto G9 Power',
        description:
          'Gama Media - Motorola - 64GB',
        price: '$37922',
        pictureURL:'https://mercadositio.com/productos/1617805078/01_1617806149.webp?v=1150420',   
      },
      {
          id: 2,
          title: 'Xiaomi Redmi 9',
          description:
            'Gama Baja - Xiaomi - 32GB',
          price: '$23890',
          pictureURL:'https://mercadositio.com/productos/1595858218/02_1595858818.webp',   
      },
      {
          id: 3,
          title: 'Apple iPhone 12 Pro',
          description:
            'Gama Alta - Apple - 256GB',
          price: '$243380',
          pictureURL:'https://mercadositio.com/productos/1614977236/01_1614982183.webp?v=1150420',   
      },
    ];

    const getItems = (productos) =>{
      return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
          resolve(productos)
        }, 2000)
      })
    }

      getItems(localMock)
        .then(result => setLocalItems(result))
        .catch(error => console.log("Error Retrieving Info: " + error))
  }, [])

  return (
    <div>
      <p>
        {localItems.map(element => {
          return <div>{element.title} - {element.description}</div>
        })}
      </p>
    </div>
  )
}

export default Items
