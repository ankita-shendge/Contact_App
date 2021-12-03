import React from "react";



class AddContact extends React.Component {

    state = {
        name: "",
        email: ""
    };



    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
        
    };


    render() {
        return (
            <div className="ui main" onSubmit={this.add}>
                <div>Add contacts</div>
                <form className="ui form" style={{ padding: "30px", marginBottom: "-30px" }}>
                    <div className="feild" >
                        <label>Name</label>
                        <input type="text" placeholder="Name" name="name" value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} ></input>
                    </div>
                    <div className="feild">
                        <label>Email</label>
                        <input type="text" placeholder="Email" name="Email" value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}></input>
                    </div>
                    <button className="ui button blue" style={{ marginTop: "10px" }}>Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;