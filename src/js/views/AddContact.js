import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
    const {actions} = useContext(Context);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        adress: ""
    })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await actions.addContact(contact);
        navigate("/contacts");

    };

    return(
        <div className="container">
            <h1>Add a new contact</h1>
            <form onSubmit = {handleSubmit}>
                <div className="mb-5">
                    <label className="form-label">NAME</label>
                    <input
                    type= "text"
                    className="form-control"
                    value = {contact.name}
                    onChange={(e) => setContact({...contact, name: e.target.value})}
                    required
                    />

                </div>
                <div className="mb-5">
                    <label className="form-label">EMAIL</label>
                    <input
                    type= "email"
                    className="form-control"
                    value = {contact.email}
                    onChange={(e) => setContact({...contact, email: e.target.value})}
                    />

                </div>
                <div className="mb-5">
                    <label className="form-label">PHONE</label>
                    <input
                    type= "tel"
                    className="form-control"
                    value = {contact.phone}
                    onChange={(e) => setContact({...contact, phone: e.target.value})}
                    />
                </div>
                <div className="mb-5">
                    <label className="form-label">ADRESS</label>
                    <input
                    type= "text"
                    className="form-control"
                    value = {contact.adress}
                    onChange={(e) => setContact({...contact, adress: e.target.value})}
                    />
                </div>
                <button type='submit' className="btn btn-danger">ADD THE CONTACT</button>
            </form>
        </div>
    );
};
