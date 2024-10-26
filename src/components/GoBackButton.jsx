import React from "react";
import { useNavigate } from "react-router-dom";
import {ReactComponent as ArrowBack} from "../assets/arrowBack.svg"
import "../styles/goBackButton.css"

const GoBackButton = () => {
const navigate = useNavigate();

const goBack = () => {
    navigate(-1);
}

return (

    <div>
        <button onClick={goBack}><ArrowBack className="arrowBack"/></button>
    </div>


)
}

export default GoBackButton;