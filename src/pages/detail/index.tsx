import React from 'react';
import { useParams } from "react-router-dom";

interface Props {
    title: string;
    body: string;
}

export default function Detail() {
    const { title, body } = useParams<Props>();
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}