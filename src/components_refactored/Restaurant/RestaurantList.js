import Grid from '@material-ui/core/Grid'
import Tag from '../Tag/Tag'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Restaurant from './Restaurant';
import  Paper  from '@material-ui/core/Paper';
import ToggleButtons from '../RestaurantMenu/ToggleButtons';


export default function RestaurantList() {
    const restaurants = [1, 2, 3, 4, 5].map((restaurnt, i) => (
      <Paper key={i}>  <Box mt={4} key={i}>
            <Restaurant id={i}  image="https://source.unsplash.com/random/?food" />

        </Box></Paper>))

        return (
            <>
            <ToggleButtons/>
{restaurants}

            </>
            
            )
}