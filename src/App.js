import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import {AddressBookNew} from './AddressBookNewEdit'
import {AddressBookEdit} from './AddressBookNewEdit'
import AddressBook from "./AddressBook";

class App extends React.Component{

    render (){
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={AddressBook}/>
                    <Route exact path="/New" component={AddressBookNew}/>
                    <Route exact path="/Edit" component={AddressBookEdit}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

