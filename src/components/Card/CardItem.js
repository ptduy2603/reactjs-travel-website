import './Card.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardItem({ src, content, path, label }) {
    return (  
        <li className='cards__item'>
            <Link className='cards__item__link' to={path}>
                <figure className='cards__item__pic-wrap' data-category={label}>
                    <img className='cards__item__img' src={src} alt='Travel'></img>
                </figure>

                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>
                        {content}
                    </h5>
                </div>
            </Link>
        </li>
    );
}

CardItem.propTypes = {
    src : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    path: PropTypes.string,
    label : PropTypes.string
}

export default CardItem;