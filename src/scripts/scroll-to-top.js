import scrollToTopIcon from '../assets/arrow-up.png';
export default function(){
    const footer = document.getElementById("footer");
    const scrollToTopElem = document.getElementById("scroll-to-top")
    const screenAvailHeight = window.screen.availHeight;
    let scrollPosition=0;
    let pageHeight = 0; 
    //scroll to top icon
    const imageElem = document.createElement('img');
    imageElem.src = scrollToTopIcon;
    scrollToTopElem.appendChild(imageElem);
    window.addEventListener('load',()=>{
        pageHeight=footer.offsetTop+footer.offsetHeight;
        scrollPosition = (screenAvailHeight/2+window.scrollY)/pageHeight*100;
        if (scrollPosition>=50){
            scrollToTopElem.style.bottom="45px";
        }
        window.addEventListener('scroll',()=>{
            setScrollToTopElem();
            
        })
    })
    window.addEventListener('newProducts',()=>{
        setScrollToTopElem();
    })
    scrollToTopElem.onclick=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
    function setScrollToTopElem(){
        pageHeight=footer.offsetTop+footer.offsetHeight;
        scrollPosition = (screenAvailHeight/2+window.scrollY)/pageHeight*100;
        if (scrollPosition>=50){
            scrollToTopElem.style.bottom="45px";
        }else{
            scrollToTopElem.style.bottom="-100px";
        }
    }
  
}