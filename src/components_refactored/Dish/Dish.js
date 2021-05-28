
import { useState } from 'react';
import cx from 'clsx';
import Typography from '@material-ui/core/Typography';

import { Grid } from '@material-ui/core'
import SocialActions from '../commons/SocialActions'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import HoverRating from './Rating';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ModeComment from '@material-ui/icons/ModeComment';
import Favorite from '@material-ui/icons/Favorite';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { useLabelIconStyles } from '@mui-treasury/styles/icon/label';
import { useRowFlexStyles } from '@mui-treasury/styles/flex/row';
import Tag from '../Tag/Tag'
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Comments from '../Comments/Comments';
const useStyles = makeStyles(({ spacing, palette }) => ({
    card: {
        display: 'flex',
        padding: spacing(2),
        borderRadius: 16,
    },
    //   header: {
    //     display: 'flex',
    //     alignItems: 'center',
    //   },
    media: {
        width: '100%',
        height: '100%',
        flexShrink: 0,
        backgroundColor: palette.grey[200],
        borderRadius: 12,
        boxShadow: '0 2px 8px 0 #c1c9d7, 0 -2px 8px 0 #cce1e9',
    },
    rating: {
        verticalAlign: 'text-top',
    },
    content: {
        padding: spacing(0, 2, 0, 0),
    },
    heading: {
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        marginBottom: 0,
        marginRight: spacing(1.5),
        display: 'inline-block',
    },
    body: {
        fontSize: 14,
        color: palette.grey[500],
        display: '-webkit-box',
        overflow: 'hidden',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical'
    },
    divider: {
        margin: spacing(1, 0),
    },
    textFooter: {
        fontSize: 14,
    },
    icon: {
        fontSize: '1.2rem',
        verticalAlign: 'bottom',
    },
}));



export default function Dish({ rating = 3.4, menuContent = "Lorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsumLorem  ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. credit",
    title = "bucket din ala blanao",
    image = "https://d1ralsognjng37.cloudfront.net/370404d4-2efb-4a6b-8add-5102b6f28ec1.jpeg",

}) {

    const [showComment, setShowComment] = useState(false)

    const onChange = () => {
      setShowComment(!showComment)
    }
  
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
      setComments([...comments, {postId: 1, id: 11, name: 'aaaa', email: 'aaa', body: com} ])
      setShowComment(true)
    }

  
    const tags = [{ value: "🍕", color: 0 }, { value: "🍗", color: 1 }, { value: "🍔", color: 3 },
    { value: "🦃", color: 9 },
    ]
    const styles = useStyles();
    const gutterStyles = usePushingGutterStyles({ space: 1.5 });
    const labelStyles = useLabelIconStyles({ linked: true });
    const flexStyles = useRowFlexStyles();
    return (
        <Paper className={styles.card} elevation={0}>
            <Box>
                <Grid container >

                    <Grid item xs={8} >
                        <Box className={styles.header} mb={1}>
                            <Box ><HoverRating
                                name={'rating'}
                                value={rating}
                                //   className={styles.rating}
                                size={'small'}
                            />
                            </Box>
                            <h3 className={styles.heading}>{title}</h3>

                        </Box>
                        <p className={styles.body}>
                            {menuContent}
                        </p>
                        <Box mt="-10px" >
                            {tags.map((tag) => {
                                if (tag) {
                                    return (
                                        <Tag tag={tag.value} color={tag.color} />
                                    )
                                }
                            })}
                        </Box>

                    </Grid>

                    <Grid item xs={4} >
                        <Avatar
                            className={styles.media}
                            src={
                                image
                            }
                        />

                    </Grid>


                </Grid>
                <Grid container>
                    <Grid xs={8} item>
                        <Divider className={styles.divider} light />

                        <SocialActions onChange={onChange} />

                    </Grid>
                    <Grid xs={4} item>
                        <Divider className={styles.divider} light />

                        <Box display="flex" justifyContent="space-between" mt={2}>
                            <Typography variant="h5" align="center" >
                                $ 199.99
        </Typography>
                            <Avatar style={{ marginLeft: '10px', marginTop: '-5px'}}
                                src={
                                    'https://freesvg.org/img/primary-tab-new.png'
                                }
                            />
                        </Box>

                    </Grid>
                    <Grid>
                    {showComment && <Comments comments={comments} postId={"1"}/>}
                    </Grid>
                </Grid>
            </Box>





        </Paper>
    );
}