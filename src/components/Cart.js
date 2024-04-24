import { useEffect, useState } from 'react';
import pic1 from './product-pics/pic-1.jpeg'
import "./style.css"

export function Cart({state,setState, quantity, setQuantity}){

    const [total, setTotal] = useState(0);

    useEffect(()=>{
        // if(total > 0){
        //     const prevTotal = 0;
        //     state.map((item)=>{
        //         const totalRes = item.price * item.quantity;
        //         prevTotal += totalRes;
        //         // console.log(prevTotal);
        //         return prevTotal;
        //     })
        //     console.log(prevTotal);
        //     // setTotal(prevTotal);
        // }
        const list = state;
        var temp = 0;
        list.filter((item)=>{
            temp += parseInt(item.quantity * item.price);
        })
        setTotal(temp);
    },[]);

    function increase(id){
        // console.log(id);
        const tempData = state;
        tempData.map((item)=>{
            if(item.id == id){
                item.quantity += 1;
                setQuantity(quantity+1);
                setTotal(parseInt(total + parseInt(item.price)))
            }
            return item;
        });
        setState([...tempData]);
        // console.log(state);
    }
    function decrease(id){
        const tempData = state;
        tempData.filter((item)=>{
            if(item.id == id && item.quantity > 0){
                item.quantity -= 1;
                setQuantity(quantity-1);
                setTotal(parseInt(total - parseInt(item.price)))
            }
            return item;
        });
        setState([...tempData]);
    }
    function removeProduct(id){
        console.log(id);
        let tempPro = [...state];
        let list = tempPro.filter((item)=>{
            if(item.id == id){
                
                setTotal(total - (parseInt(item.quantity) * parseInt(item.price)));
                
                setQuantity(quantity - item.quantity);
            }
            return item.id !== id;
        })
        setState(list);
    }

    return(
        <div>
            <h1>YOUR BAG</h1>
            {/* <div id="cart-main-cont">
                <div id="product-wrapper">
                    {
                        state.map((item,id)=>{
                            return(
                                <div>
                                    <div id="img-div">
                                        <img src={pic1} id="pro-pic"/>
                                    </div> 
                                    <div id="pro-detail">
                                        <div id="left-detail">
                                            <span>iPhone 14 Pro</span><br></br>
                                            <span>$399.99</span><br></br>
                                            <span>Remove</span>
                                        </div>
                                        <div id="right-detail">
                                            <button onClick={()=>{increase()}}>+</button>
                                            <span>1003</span>
                                            <button>-</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div> */}
            <div id="wrapper">
                {
                    state && state.length > 0 ? (
                        state.map((item,id)=>{
                            const bgimg = {
                                backgroundImage : item.image
                            }
                            return(
                                <div id="row" key={id}>
                                    <div id="col1">
                                        <img src={item.image} width={100}/>
                                    </div>
                                    <div id="col2">
                                        <label>{item.name}</label><br></br>
                                        <label>${item.price}</label>
                                        <p onClick={()=>{removeProduct(item.id)}}>Remove</p>
                                    </div>
                                    <div id="col3">
                                        <button onClick={()=>{increase(item.id)}}>+</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={()=>{decrease(item.id)}}>-</button>
                                    </div>
                                </div>
                            )
                        })
                    ) : <div>Cart is Empty</div>
                }
                <hr style={{display : state && state.length > 0 ? 'flex' : 'none'}}></hr>
                <div id="total-cont" style={{display : state && state.length > 0 ? 'flex' : 'none'}}>
                    <h2>Total</h2>
                    <div>
                        <h2>${total}</h2>
                    </div>
                </div>
                <button style={{display : state && state.length > 0 ? '' : 'none'}} id="clear-cart" onClick={()=>{
                        setState([])
                        setQuantity(0)
                    }}>Clear Cart
                </button>
            </div>
        </div>
    )
}