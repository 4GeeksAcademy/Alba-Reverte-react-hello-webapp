import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const ContactCard = ({contact}) => {
    const {actions} = useContext (Context);

    return(
        <div className="card mb-5">
            <div className="card body">
                <h5 className="card title">{contact.name}</h5>
                <p className="card text">Email:{contact.email}</p>
                <p className="card text">Phone:{contact.phone}</p>
                <p className="card text">Adress:{contact.adress}</p>
                <button className="btn btn-danger"
                    onClick={() => actions.deleteContact(contact.id)}>
                    DELETE
                </button>
            </div>

        </div>
    );
};


