import React from 'react';
import Item from './Item';
import { useDrop } from 'react-dnd';

 const itemList = [
     {id: 1, text: 'HTML'},
     {id: 2, text: 'JavaScript'},
     {id: 3, text: 'React'},
     {id: 4, text: 'Angular'},
 ]

const DragDrop = () => {

    const [board, setBoard] = React.useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'item',
        drop: (item) => addToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    const addToBoard = (id) => {
        const list = itemList.filter((item) => id === item.id);
        //setBoard((board) => [...board, list[0]]);
        setBoard([list[0]])
    }

    return (
        <>
            <div className='items'>
                {itemList.map(item => {
                    return <Item key={item.id} id={item.id} text={item.text} />
                })}
            </div>
            <div className='board' ref={drop}>
                {board.map(item => {
                    return <Item key={item.id} id={item.id} text={item.text} />
                })}
            </div>
        </>
    )
}

export default DragDrop
