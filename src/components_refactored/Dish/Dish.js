import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, Box, Avatar, Icon } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import SocialActions from '../commons/SocialActions';
import Tag from '../Tag/Tag'
import HoverRating from './Rating';
import plus from './plus.svg'
import Divider from '@material-ui/core/Divider';
import Comments from '../Comments/Comments';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    body: {
        display: '-webkit-box',
        overflow: 'hidden',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical'
    },

    cover: {
        width: '100%',
        height: '150px',
        backgroundColor: theme.palette.grey[200],
        borderRadius: 12,
        boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
    },


}));

export default function Dish({ image, rating = 3.4 }) {
    const classes = useStyles();
    const theme = useTheme();
    const tags = [{ value: "🍕", color: 0 }, { value: "🍗", color: 1 }, { value: "🍔", color: 3 }, { value: "🍔", color: 2 }
    ]
    const commentsSource = [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
            "postId": 1,
            "id": 4,
            "name": "alias odio sit",
            "email": "Lew@alysha.tv",
            "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        },
        {
            "postId": 1,
            "id": 5,
            "name": "vero eaque aliquid doloribus et culpa",
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        }
    ]
    const [comments, setComments] = useState(commentsSource)
    const addComment = (com) => {
        setComments([...comments, { postId: 1, id: 11, name: 'aaaa', email: 'aaa', body: com }])
        setShowComment(true)
    }

    const [showComment, setShowComment] = useState(false)

    const onChange = () => {
        setShowComment(!showComment)
    }


    return (
        <Paper  >
            <Grid container>
                <Grid item xs={8}>
                    <Box ml={3} mt={2} mr={2}>
                        <Box display="flex" >
                            <Typography component="h6" variant="h6">
                                Mancare buna buna buna buna
                        </Typography>

                        </Box>

                        <Box display="flex"    >
                            <Box mr={1}>
                                <Typography variant="h5">
                                    $ 19.9
        </Typography>
                            </Box>
                            {/* <HoverRating
                                name={'rating'}
                                value={rating}
                                size={'small'}
                            /> */}

                        </Box>
                        <Box mt={0}>
                            <Typography className={classes.body} variant="subtitle2" color="textSecondary">

                                5 Crispy Strips - 150g, o porție mare de cartofi prăjiți - 120g, o băutură - 500ml (răcoritoare / apă) și un sos la alegere
                        </Typography>
                        </Box>
                        <Box mt={1} mb={2}>
                            {tags.map((tag) => {
                                if (tag) {
                                    return (
                                        <Tag tag={tag.value} color={tag.color} />
                                    )
                                }
                            })}
                        </Box>

                    </Box>


                </Grid>

                <Grid item xs={4}>

                    <Box mr={2} mt={2} mb={2} >
                        <Avatar
                            className={classes.cover}
                            src={image}
                        />

                    </Box>
                </Grid>


                <Grid item xs={12}>
                    <Divider light />

                </Grid>

                <Grid item xs={8}>
                    <Box ml={2}>

                        <SocialActions onChange={onChange} />

                    </Box>
                </Grid>

                <Grid item xs={4}>

                    <Box display="flex" justifyContent="flex-end" mt={1} mb={1} mr={2}>
                        <Box mt="2px" pr={2} > <Typography variant="h6" align="center" >
                            Adauga
        </Typography>
                        </Box>

                        <Avatar
                            src={
                                plus
                            }
                        />
                    </Box>
                </Grid>
                <Grid>
                    {showComment && <Comments comments={comments} postId={"1"} />}
                </Grid>
            </Grid>


        </Paper>
    );
}
