import './Button.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const defaultFunction = () => {}
const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

function Button({children, className,type,onClick=defaultFunction, buttonStyle, buttonSize , disabled=false, ...passProps}) {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button 
                {...passProps} 
                className={`btn ${checkButtonSize} ${checkButtonStyle} ${disabled?"disabled":''} ${className}`} 
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}

Button.propTypes = {
    children : PropTypes.node.isRequired,
    onClick : PropTypes.func,
    type : PropTypes.string,
    className : PropTypes.string,
    buttonStyle : PropTypes.string,
    buttonSize : PropTypes.string,
    disabled : PropTypes.string,
}

export default Button