import './Footer.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <footer className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input' type='email' name='email' placeholder='Please enter your email' required></input>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>

            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>

                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>

                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
            </div>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <Link className='footer-logo' to='/'>
                        D TRAVEL 
                        <i className="fa-solid fa-plane nav__logo-icon"></i>
                    </Link>
                </div>
                <small className='website-rights'>
                    D TRAVEL &copy; 2023
                </small>
                <div className='social-icons'>
                    <Link 
                        className='social-icon-link facebook' 
                        to='/' 
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <i className='fa-brands fa-facebook-f'></i>
                    </Link>

                    <Link 
                        className='social-icon-link instagram' 
                        to='/' 
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <i className='fa-brands fa-instagram'></i>
                    </Link>

                    <Link 
                        className='social-icon-link twitter' 
                        to='/' 
                        target='_blank'
                        aria-label='Twitter'
                    >
                        <i className='fa-brands fa-twitter'></i>
                    </Link>

                    <Link 
                        className='social-icon-link linkedin' 
                        to='/' 
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className='fa-brands fa-linkedin'></i>
                    </Link>
                </div>
            </section>
        </footer>
     ); 
}

export default Footer;