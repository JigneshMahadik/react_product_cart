import "./style.css"
import cartimg from './cart.png'

export function Navbar({quantity}){
    return(
        <div id="navbar">
            <h2>UseReducer</h2>
            <div id="nav-right">
                <img src={cartimg} alt="NA" height={50}/>
                <div id="car-count">{quantity}</div>
            </div>
        </div>
    )
}