import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
    const {actions} = useContext(Context);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await actions.addContact(contact);
        navigate("/contacts");

    };

    return(
        <div className="container card mt-5 w-50 p-3 bg-warning p-2 text-dark bg-opacity-25">
            <div className="d-flex d-flex justify-content-center form-control-lg">ADD A NEW CONTACT</div>
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
                    value = {contact.address}
                    onChange={(e) => setContact({...contact, address: e.target.value})}
                    />
                </div>
                <button type='submit' className="buttom-add btn btn-outline-success d-flex float-end">ADD THE CONTACT</button>
            </form>
        </div>
    );
};
