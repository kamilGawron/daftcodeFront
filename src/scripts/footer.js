import twitterImage from '../assets/kz-twitter.png'
import fbImage from '../assets/kz-facebook.png'
import igImage from '../assets/kz-instagram.png'
import pinImage from '../assets/kz-pinterest.png'
import chevronIcon from '../assets/kz-angle-down.png'
import paymentImg from '../assets/payment.png'

export default function (){
    document.getElementById('twitter-img').src=twitterImage;
    document.getElementById('facebook-img').src=fbImage;
    document.getElementById('instagram-img').src=igImage;
    document.getElementById('pinterest-img').src=pinImage;
    document.getElementById('language-chevron').src=chevronIcon;
    document.getElementById('currency-chevron').src=chevronIcon;
    document.getElementById('payment-image').src=paymentImg;

}