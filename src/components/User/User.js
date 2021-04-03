import React from 'react';
import {
    useParams
  } from "react-router-dom";
  

export default function User() {
    let { id } = useParams();
    return (
        <div>
            <h3>User: {id}</h3>
        </div>
    );
}