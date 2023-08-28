import './HeroSection.css'
import Button from '../Button/Button'
import videos from '../../assets/videos/';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video className='background__video' src={videos.backgroundVideo1} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>

                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER
                    <i className='fa fa-play-circle icon' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;