import React from "react";
import {Routes, Route} from 'react-router-dom';
import CreateContact from "./pages/CreateContact";
import PhoneContactList from "./pages/PhoneContactList";
import ContactInfo from "./pages/ContactInfo";
import ChangeContact from "./pages/ChangeContact";
import DeleteContact from "./pages/DeleteContact";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<PhoneContactList/>}/>
                <Route path='newContact' element={<CreateContact/>}/>
                <Route path='contactInfo/:id' element={<ContactInfo/>}/>
                <Route path='contactInfo/:id/changeContact' element={<ChangeContact/>}/>
                <Route path='contactInfo/:id/changeContact/acceptDeleteContact' element={<DeleteContact/>}/>
            </Routes>
        </div>
    );
}

export default App;