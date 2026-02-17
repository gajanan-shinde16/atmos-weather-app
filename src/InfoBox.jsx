import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    return (
        <div className="info-box">
            <h2>Weather Results</h2>
            <Card sx={{ minWidth: 275, textAlign: "center" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {info.weather}
                    </Typography>
                    <Typography>Feels Like: {info.feelsLike}&deg;C</Typography>
                    <Typography>Temperature: {info.temp}&deg;C</Typography>
                    <Typography>Humidity: {info.humidity}%</Typography>
                    <Typography>Min Temp: {info.minTemp}&deg;C</Typography>
                    <Typography>Max Temp: {info.maxTemp}&deg;C</Typography>
                </CardContent>
            </Card>
        </div>
    )
}