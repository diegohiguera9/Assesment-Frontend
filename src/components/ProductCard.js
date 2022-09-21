import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ProductCard = ({ item, index }) => {
    const [seconds,setSeconds ] = useState(0)
    const [minutes,setMinutes] = useState(Math.floor(Math.random()*3)+1)
    useEffect(()=>{
        let myinterval = setInterval(()=>{
            if (seconds>0){
                setSeconds(seconds-1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myinterval)
                } else {
                    setMinutes(minutes-1);
                    setSeconds(59);
                }
            }
        },1000)
        return ()=>{clearInterval(myinterval)} ;
    });

    return (
        <Link to={`/ProductDetail/${item.id}`} className='main__product' key={item.id} style={minutes === 0 && seconds === 0?{pointerEvents: "none"}:null}>
            <div className='main__product__imcontainer'>
                <img src={item.image} alt='producto' loading='lazy'/>
            </div>
            <span>
                {minutes === 0 && seconds === 0
                    ? <h2>0{minutes}:0{seconds}</h2>
                    : <h2>0{minutes}:{seconds<10 ? `0${seconds}`:seconds}</h2>
                }
            </span>
            <span>{item.title}</span>
            <span>{`$ ${item.price}`}</span>
        </Link>
    )
}

export default ProductCard;