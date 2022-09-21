import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import '../styles/ProductDetail.scss'

const ProductDetail = () => {
    const paramProduct = useParams()
    const data = useSelector(state => state.productReducer.post)
    const dataId = data.filter(obj => {
        return `${obj.id}` === `${paramProduct.id}`
    })

    return (
        <div className="product">
            <h1>Product Detail</h1>
            {dataId.map((item, index) => {
                return (
                    <div key={item.id} className='product__description'>
                        <h2>{item.title}</h2>
                        <div className='product__description__img'>
                            <img src={item.image} alt='product' />
                        </div>
                        <span>{`Price: $${item.price}`}</span>
                        <span>{`Category: ${item.category}`}</span>
                        <span>{`Description: ${item.description}`}</span>
                        <span>{`Qualy: ${item.rating.rate}`}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductDetail;