import React,{useState ,useEffect} from 'react'
import "./Header.css"
import Avatar from '@material-ui/core/Avatar';
function Header() {
    const [show,handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])

    return (
        <div class={`header ${show && "header_black" }`}>
            <img
                className = "header_logo"
                src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt = "Netflix Logo"
            />
            <Avatar className = "header_avatar"/>
        </div>

    )
}

export default Header
