import React from 'react';
import './App.css';
import ContactApp from './components/ContactApp';




function App(){
    return(
        <React.Fragment>
            <div className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a href="/" className="navbar-brand">Contact Application</a>
            </div>
            <div>
                <ContactApp/>
            </div>
        </React.Fragment>
    )
}
export default App;