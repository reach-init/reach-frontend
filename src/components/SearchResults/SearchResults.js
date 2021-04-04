import React from 'react';
import {
    useParams
  } from "react-router-dom";

export default function SearchResults() {
    let { searchedText } = useParams();
    return (
        <div>
            <h3>Searched word: {searchedText}</h3>
        </div>
    );
}