import '../styles/Main.scss'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../store/actions/Product.action";
import ProductCard from './ProductCard';

const Main = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.productReducer.post)

    useEffect(() => {
        dispatch(getPosts())       
        // eslint-disable-next-line
    }, [])

    return (
        <div className="main">
            {data.map((item,index) => {
                return (
                    <ProductCard item={item} key={item.id} index={index} />
                )
            })}
        </div>
    )
}

export default Main;