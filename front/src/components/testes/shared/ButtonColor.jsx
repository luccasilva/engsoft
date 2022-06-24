import React from "react";

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: 'black',
    }
    
    return (
        <button style={cardStyle}>{props.nome}</button>
    );
};
