import {
  Typography,
  Avatar,
  Grid,
  Button,
  ButtonGroup
} from '@material-ui/core'

import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function UserDashboard({ user }) {
  const matches = !useMediaQuery('(min-width:600px)')

  let dob

  if (user.dateOfBirth) {
    dob = new Date(user.dateOfBirth)
    const date = dob.getDate()
    const month = dob.getMonth() + 1
    const year = dob.getFullYear()
    dob = `Born ${date}/${month}/${year}`
  } else {
    dob = ''
  }

  let color

  if (user.gender === 'male') {
    color = 'primary'
  } else if (user.gender === 'female') {
    color = 'secondary'
  } else {
    color = 'inherit'
  }

  return (
    <div>
      <Grid
        lg={12}
        md={12}
        sm={12}
        xs={12}
        item
        container
        spacing={3}
        alignItems="center"
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid lg={12} item container spacing={3} alignItems="center">
            <Grid item lg={4} md={5} sm={5} xs={5}>
              <div>
                <Avatar
                  src={user.picture}
                  alt={user.firstName + ' ' + user.lastName}
                  style={{ width: '100px', height: '100px', margin: 10 }}
                />
              </div>
            </Grid>
            <Grid item lg={8} md={7} sm={7} xs={7}>
              <div>
                <Typography variant="h4" component="h2">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography component="p">{dob}</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Grid
            lg={12}
            item
            container
            spacing={3}
            alignItems="center"
            justify={matches ? 'center' : 'flex-end'}
          >
            <Grid lg={6} item>
              <div style={{ margin: 10 }}>
                <ButtonGroup
                  variant="text"
                  color={color}
                  aria-label="full-width outlined primary button group"
                >
                  <Button>Message</Button>
                  <Button>Friend</Button>
                  <Button>Follow</Button>
                </ButtonGroup>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
