import React from 'react'
import { useDrag } from 'react-dnd'

const Item = ({id, text}) => {
    //Boolean si se está arrastrando o no, función de arrastre
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'item',
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    return (
        <div 
            ref={drag}
            style={{background: isDragging ? 'lightblue' : 'white'}}
        >
            {id} - {text}
        </div>
    )
}

export default Item
