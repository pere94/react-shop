import React from 'react';
import './LabelInput.scss';

// como hacer el llamado
{/* <LabelInput 
    className="del div para dar tamaño" 
    textLabel="Texto del Label"
    nameInput="Name del Inputo"
    idInput="id del input"
    typeInput="input type"
    placeholder="Placeholder"
/> */}

function LabelInput(props) {
    return (
        <div className={props.className}>
            <div className="LabelInput">
                <label className="label">{props.textLabel}</label>
                <input 
                    /*onChange={props.onChange}*/ 
                    name={props.nameInput} 
                    id={props.idInput} 
                    className="input" 
                    type={props.typeInput} 
                    placeholder={props.placeholder}
                />
            </div>
        </div>
        
    );
}

export { LabelInput };