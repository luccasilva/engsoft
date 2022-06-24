import React from "react";

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: 'black',
    }
    
    return (
        <div className="square2" style={cardStyle}>
            {props.children}
        </div>
    );
};
