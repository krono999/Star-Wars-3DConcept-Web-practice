import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { makeStyles } from '@material-ui/core/styles';

const audioLists = [
    {
        name: "Star Wars Concept",
        Creator: "Krxnx",
        musicSrc:
            "https://res.cloudinary.com/krnnx/video/upload/v1644460765/bcteria_sound_jkj2ni.mp3"
    },

];


const useStyles = makeStyles((theme) => ({
    AudioPositionButton: {
        // marginTop: '526px',
        // marginLeft: '317px'
    },


}));

export default function AudioPlayers() {
    const classes = useStyles();
    return (
        <div >
            <h1>Play</h1>
            <ReactJkMusicPlayer
                className={classes.AudioPositionButton}
                theme="dark"
                audioLists={audioLists}
                autoPlay={false}
            />
        </div>
    );
}



// marginTop: '526px',
// marginLeft: '317px'