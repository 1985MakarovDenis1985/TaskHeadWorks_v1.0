import React from 'react';
import {connect} from "react-redux";


const mapPropsToState = (state) => {
    return {
        state : state.loginReducer.clientsArr
    }
}

class ClientsBox extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            date: ""
        }

    }


    render() {
        console.log(this.props.state)
        return (
            <div className="content_box content_clients_box">

                <div className="content_box_clients_box">

                </div>

                <div className="content_box_btn_registration">
                    <button></button>
                </div>
            </div>
        );
    }
}

export default connect(mapPropsToState, null)(ClientsBox)