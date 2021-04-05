import { Card, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    withRouter,
    useHistory 
  } from "react-router-dom";
  

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
            <Card style={{ width: '18rem' }}>
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
            </Card>
            <br />
        </div>
    );
}