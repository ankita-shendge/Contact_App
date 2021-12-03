import React from "react";
import user from "../images/user.png"


const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avtar image" src={user} alt="user" style={{ blockSize: "20px" }} />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
                <div>{id}</div>
            </div>
            <i className="trash alternate outline icon" style={{
                color: "red", position: "relative",
                bottom: "20px",
                left: "800px"}}
                onClick={() => props.clickHander(id)}
            ></i>

            
        </div>
    );
}

export default ContactCard


