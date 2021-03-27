import React from 'react';

class ContactList extends React.Component{
    constructor(props){
        super();
        
    }
    clickContact=(contact)=>{
        this.props.pushContact(contact);
    }
    render(){
        return(
            <React.Fragment>
               <table className="table table-hover text-center">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>SR.NO</th>
                            <th>PICTURE</th>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>EMAIL</th>
                            <th>LOCATION</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(this.props).length !==0 ?
                            <React.Fragment>
                                {
                                    this.props.contacts.map( (contact)=>{
                                        return(
                                            <tr onClick={this.clickContact.bind(this, contact)}>
                                                <td>{ contact.login.uuid.substr(contact.login.uuid.length-4) }</td>
                                                <td><img src={contact.picture.large} alt="" width="50" height="50" className="img-responsive"   /></td>
                                                <td>{contact.name.first} {contact.name.last}</td>
                                                <td>{contact.dob.age}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.location.street.number}, {contact.location.street.name}</td>
                                                <td>{contact.location.state}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </React.Fragment> :null
                        }
                    </tbody>
               </table>
            </React.Fragment>
        )
    }
}
export default ContactList;