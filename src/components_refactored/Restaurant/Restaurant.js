import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, Box, Avatar, Icon } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import SocialActions from '../commons/SocialActions';
import Tag from '../Tag/Tag'
import HoverRating from '../Dish/Rating';
import Divider from '@material-ui/core/Divider';
import Comments from '../Comments/Comments';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import distance from './distance.png'
import like from './likee.png'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        // position: "relative"
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    medium: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    cover: {
        width: '100%',
        height: '150px',
        // borderRight: 100,
        backgroundColor: theme.palette.grey[200],
        // boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
    },


}));

export default function Restaurant({ image, rating = 3.4 , id}) {
    const classes = useStyles();
    const theme = useTheme();
    const tags = [{ value: "🍕", color: 0 }, { value: "🍗", color: 1 },{ value: "🍕", color: 0 }, { value: "🍕", color: 0 }, { value: "🍕", color: 0 }, { value: "🍕", color: 0 },
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
    let history = useHistory();
    const addComment = (com) => {
        setComments([...comments, { postId: 1, id: 11, name: 'aaaa', email: 'aaa', body: com }])
        setShowComment(true)
    }

    const [showComment, setShowComment] = useState(false)

    const onChange = () => {
        setShowComment(!showComment)
    }
    const handleOnClick = () => {
        history.push("restaurants/" + id);
    }

    return (

        <Paper
            className={classes.root}
            style={{ "border-top-left-radius": "25px", "border-bottom-left-radius": "0", "border-top-right-radius": "25px", "border-bottom-right-radius": "0" }}

        >
            <Grid container>

                <Grid item xs={12}>
                    <Avatar
                        onClick={handleOnClick}
                        style={{ filter: "brightness(70%) grayscale(0%)", "border-top-left-radius": "25px", "border-bottom-left-radius": "0", "border-top-right-radius": "25px", "border-bottom-right-radius": "0" }}
                        className={classes.cover}
                        src={image}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Box ml={3} mt={2} mr={2} onClick={handleOnClick} >
                        <Box mt="-150px" display="flex" >
                                <Typography style={{ "z-index": 1000000, position: "relative" , color: "white"}} variant="h3">
                                    Statia Americana 
                        </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Box  ml={3} mt={2} mb={2} >
                        {tags.map((tag) => {
                            if (tag) {
                                return (
                                    <Tag tag={tag.value} color={tag.color} />
                                )
                            }
                        })}
                      
                    </Box>
                  
                </Grid>

                <Grid item xs={3}>
                    <Box display="flex" mt={1} mr={1}>
                                <Avatar className={classes.medium} variant="square"
                                    src={
                                        like
                                    }
                                />

                            <Typography  variant="h5">
                                97%
                        </Typography>
                        </Box>

                    </Grid>

                <Grid item xs={12}>
                    <Divider light />

                </Grid>

                <Grid item xs={12}>
                    <Box justifyContent="space-between" display="flex" ml={2}>

                        <Box > <SocialActions onChange={onChange} /> </Box>
                        <Box display="flex" justifyContent="flex-end" mt={1} mr={2}>

                            <Box mt="3px" mr={1} mb={1}>
                                <Avatar className={classes.small} variant="square"
                                    src={
                                        distance
                                    }
                                />

                            </Box>
                            <Typography component="h5" variant="h5">
                                10Km
                        </Typography>
                        </Box>

                    </Box>
                </Grid>


                <Grid>
                    {showComment && <Comments comments={comments} postId={"1"} />}
                </Grid>
            </Grid>


        </Paper>
    );
}
