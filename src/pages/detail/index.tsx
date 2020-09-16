import React from 'react';
import { useParams, useHistory } from "react-router-dom";

interface Props {
    title: string;
    body: string;
}

export default function Detail() {
    const { title, body } = useParams<Props>();
    const history = useHistory();
    return (
        <div>
            <button id="details_go_back_button" onClick={() => history.push("/")}>go back</button>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}