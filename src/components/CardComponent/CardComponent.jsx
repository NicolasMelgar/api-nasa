
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './CardComponent.css'
const CardComponent = ({data}) => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
           height="540"
          image={data.url}
          alt="Foto de la NASA"
        />
        <CardContent>
          <Typography className='titulo' gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography className='detalle' variant="caption body2" color="text.secondary">
            {data.explanation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent