import React from "react";

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: 'black',
    }
    
    return (
        <div className="colorselectioncontent">
        <h4> Cor Selecionada</h4>
        <div className="colorselection" style={cardStyle}>
            <h3></h3>
        </div>
        </div>
    );
};
