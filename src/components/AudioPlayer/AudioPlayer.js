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
        // paddingTop: '20px'
    },


}));

export default function AudioPlayers() {
    const classes = useStyles();
    return (
        <div style={{
            marginTop: '585px',
            marginLeft: '12px'
        }}  >
            <div className={classes.AudioPositionButton}  >
                <h1>Play</h1>
                <ReactJkMusicPlayer
                    theme="dark"
                    audioLists={audioLists}
                    autoPlay={false}
                />
            </div >
        </div >
    );
}



// marginTop: '526px',
// marginLeft: '317px'