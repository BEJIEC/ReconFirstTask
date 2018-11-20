import React from "react"
import {BrowserRouter, Route} from 'react-router-dom'
import {AddressBookNew} from './AddressBookNewEdit'
import {AddressBookEdit} from './AddressBookNewEdit'
import AddressBook from "./AddressBook"
import {Provider} from 'mobx-react'
import LocalStore from './LocalStore.js'
import FirestoreWorker from './FirestoreWorker.js'
import {AdaptiveWrapper} from "./AdaptiveWrapper.js";

export const localStore = new LocalStore();

class App extends React.Component {

    render() {
        return (
            <Provider store={localStore} worker={FirestoreWorker}>
                <AdaptiveWrapper>
                    <BrowserRouter>
                        <div>
                            <Route path="/" component={AddressBook}/>
                            <Route exact path="/New" component={AddressBookNew}/>
                            <Route exact path="/Edit" component={AddressBookEdit}/>
                        </div>
                    </BrowserRouter>
                </AdaptiveWrapper>
            </Provider>
        )
    }
}

export default App;

