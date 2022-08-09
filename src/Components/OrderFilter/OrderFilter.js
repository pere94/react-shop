import React from 'react';
import './OrderFilter.scss';

// como hacer el llamado
{/* <Order 
    className="hola" con esta clase le damos tamaño al order
    option={[["value1", "option1"], ["value2", "option2"], ["value3", "option3"], ...Todas las opciones del select]} 
/> */}

function OrderFilter(props) {
    return (
        <div className={props.className}>
            <div className="SelectContainer">
                <select className='SelectContainer__select'>
                    <option value="" defaultValue>Order by</option>
                    {props.option.map(opt => (<option key={opt[1]} value={opt[0]}>{opt[1]}</option>))}
                </select>
                <span className="SelectContainer__customArrow"></span>
            </div>
        </div>
    );
}

export { OrderFilter };