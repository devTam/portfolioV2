import React, { useEffect } from 'react';
import { undoCanvas } from '../../utils/undoCanvas';
import "./contact.scss";

const Contact = () => {

    useEffect(() => {
        undoCanvas()
    }, [])
    return (
        <div className="contact">
            <h1>Contact page</h1>
        </div>
    )
}

export default Contact
