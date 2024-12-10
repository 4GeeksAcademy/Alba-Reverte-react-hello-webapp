import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

export const Contacts = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <div className="container bg-success p-2 text-dark bg-opacity-25">
            <div className="d-flex d-flex justify-content-center form-control-lg bg-success p-2 text-dark bg-opacity-25">LIST CONTACTS</div>
            <Link to='/add contact className="btn btn danger'></Link>
            {store.contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
            ))}


        </div>
    )

};

