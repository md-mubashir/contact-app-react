import React from 'react';
import Axios from 'axios';
import ContactCard from './ContactCard';
import ContactList from './ContactList';


class ContactApp extends React.Component{
    constructor(props){
        super();
        this.state={
            contacts : null,
            errMessage :null,
            selectedContact : null
        }
    }
    componentDidMount(){
        let urlData="https://gist.githubusercontent.com/md-mubashir/8cdc8ad841c7d6ea1134229376cb1d01/raw/b5caba2ebe06030b97129ae24d4278ea9730eb8d/contacts-app";
        Axios.get(urlData).then( (response)=>{
            this.setState({
                contacts : response.data
            })
        }).catch( (err)=>{
            this.setState({
                errMessage : err
            })

        })
    }
    pullContact=(contact)=>{
        this.setState({
            selectedContact : contact
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="container mt-3">
                    {/* <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-info">
                                Contact App
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            {
                                this.state.contacts ? <React.Fragment>
                                        <ContactList contacts={this.state.contacts} pushContact={ this.pullContact } />
                                </React.Fragment>:null
                            }
                        </div>
                        <div className="col-md-3">
                            <ContactCard selectedContact={this.state.selectedContact} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ContactApp;