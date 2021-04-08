import { Media, Button } from 'react-bootstrap'
import {
    useHistory 
  } from "react-router-dom";
  
  import React from 'react';

export default function Post(props) {
    const history = useHistory();

    const handleVisitProfile = (id) => {
        history.push('/' + id);
      };

    const  {
        
            userId,
            title,
            body,
            id  ,
        user   } = props.post
    return (
        <div>
<Media>
  <img
    width={128}
    height={128}
    className="mr-4"
    src={user.avatar}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>{user.name}</h5>
    <p>
      {body}
    </p>
  </Media.Body>
</Media>
        </div>
    );
}