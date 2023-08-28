import './Card.css'
import CardItem from './CardItem'
import images from '../../assets/images'

function Card() {
    return ( 
        <div className='cards'>
            <h1 className='cards__title'>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__list'>
                        <CardItem 
                            src={images.img9} 
                            content='Explore the hidden waterfall deep inside the Amazon Jungle'
                            path="/services"
                            label="Aventure"
                        />
                        
                        <CardItem 
                            src={images.img2} 
                            content='Travel to the Islands of Bali in a Private Cruise'
                            path="/services"
                            label="Luxury"
                        />
                    </ul>

                    <ul className='cards__list'>
                        <CardItem 
                            src={images.img3} 
                            content='Set Sail in the Alantic Ocean visiting'
                            path="/services"
                            label="Mystery"
                        />

                        <CardItem 
                            src={images.img4} 
                            content='Experience Football on Top of the Himilayan Mountains'
                            path="/services"
                            label="Aventure"
                        />

                        <CardItem 
                            src={images.img8} 
                            content='Ride through the Sahara Desert on guided camel tour'
                            path="/services"
                            label="Adrenaline"
                        />
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Card;