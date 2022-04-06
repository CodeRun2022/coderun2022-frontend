import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import noImageAvailable from '../../assets/no-image-available.jpeg';

const NewsItem = ({article}) => {

    return (
        <Card variant="outlined" sx={{
            height: 420
        }}>
            <CardMedia
                component="img"
                height="200"
                image={article.media ? article.media : noImageAvailable}
                alt={article.title}
            />
            <CardContent sx={{height: 180}}>
                <Typography noWrap variant="h5" component="div">
                    {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.summary}
                </Typography>
            </CardContent>
            <CardActions>
                <Link rel="noreferrer">Go to source</Link>
            </CardActions>
        </Card>
    )
}

export default NewsItem;