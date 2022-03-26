import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles'

const PlaceDetails = ( {place} ) => {
    const classes = useStyles();

    return(
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo? place.photo.images.large.url : 'https://media.istockphoto.com/vectors/vector-flat-cafe-interior-vector-id971025048?k=20&m=971025048&s=612x612&w=0&h=zJP-GJS2_R7vwAdlgAkNbhUrLBcqrBZt2T_oxnnRlTo='}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Rating</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.rating}</Typography>
                </Box>
                {/* {place?.awards?.map((award, i) => (
                    <Box display="flex" justifyContent="space-between" key={i}>
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))} */}
                {place?.cuisine?.map(({ name }) => (
                    <Chip  key={name} size="small" label={name} className={classes.chip} />
                ))}
                {place?.address && (
                    <Typography gutterBottom variant="subtitle2" color="red" className={classes.subtitle} >
                        <LocationOnIcon /> {place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom variant="subtitle2" color="red" className={classes.spacing} >
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
            </CardContent>      
         </Card>
    )
}

export default PlaceDetails; 