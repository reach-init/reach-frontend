import { Link } from 'react-router-dom'
import React from 'react'
import { Typography, Card, CardMedia, CardContent } from '@material-ui/core'

export default function UserCard(props) {
  const { id, firstName, lastName, picture } = props.user

  // email: "katie.hughes@example.com"
  // firstName: "Katie"
  // id: "0P6E1d4nr0L1ntW8cjGU"
  // lastName: "Hughes"
  // picture: "https://randomuser.me/api/portraits/women/74.jpg"
  // title: "miss"
  return (
    <>
      <Link to={`/user/${id}`}>
        <Card key={id} style={{ width: '30%', margin: '1.5%' }}>
          <CardMedia
            style={{ height: 0, paddingTop: '56.25%' }}
            image={picture}
            title={`${firstName} ${lastName}`}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${firstName} ${lastName}`}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
