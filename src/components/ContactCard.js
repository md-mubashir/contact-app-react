import React from 'react';

class ContactCard extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <React.Fragment>
                {
                    this.props.selectedContact ? <React.Fragment>
                    <div className="card sticky-top">
                        <div className="card-header bg-primary text-white">
                            <div className="p-3"></div>
                        </div>
                        <div className="card-body text-center">
                            <img src={this.props.selectedContact.picture.large} className="rounded-circle" style={{ marginTop : '-70px' }}  alt=""/>       
                            
                        </div>
                        <div>
                        <ul className="list-group">
                                <li className="list-group-item"> <span>Name: { this.props.selectedContact.name.first } { this.props.selectedContact.name.last }</span></li>
                                <li className="list-group-item"> <span>Age: { this.props.selectedContact.dob.age }</span></li>
                                <li className="list-group-item"> <span>Gender: { this.props.selectedContact.gender }</span></li>
                                <li className="list-group-item"> Address: { this.props.selectedContact.location.city }</li> 
                            </ul>
                        </div>
                        
                    </div>
                        </React.Fragment>:null
                }
        
            </React.Fragment>
        )
    }
}
export default ContactCard;