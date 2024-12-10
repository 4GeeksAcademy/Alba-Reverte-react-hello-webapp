import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const ContactCard = ({contact}) => {
    const {actions} = useContext (Context);

    return(
        <div className="container card mt-5 w-50 p-3">
            <div className="card body d-grid gap-3 bg-success p-2 text-dark bg-opacity-25">
                <h5 className="card title">{contact.name}</h5>
                <p className="card text text-secondary">Email:   {contact.email}</p>
                <p className="card text text-secondary">Phone:   {contact.phone}</p>
                <p className="card text text-secondary">Adress:   {contact.address}</p>
                <button className="btn btn-outline-danger btn-sm"
                    onClick={() => actions.deleteContact(contact.id)}>
                    DELETE
                </button>
            </div>

        </div>
    );
};


