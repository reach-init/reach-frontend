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
            id,
            first_name,
            last_name,
            email,
            avatar
    } = props.user
    return (
        <div>
            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={avatar} />
                <Card.Header>{email}</Card.Header>
                <Card.Body>
                <Card.Title>{`${first_name} ${last_name}`}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button onClick={() => handleVisitProfile(id)} variant="danger">Visit Profile</Button>
                </Card.Body>
            </Card> */}

<Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src={avatar}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>{`${first_name} ${last_name}`}</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>
        </div>
    );
}