import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6"
import {
    FaRegHeart,
    FaCartArrowDown,
    FaShare
} from "react-icons/fa"
import { TiShoppingCart } from "react-icons/ti"
import './productDetails.css'
import { CartContext } from '../../components/context/CartContext'
import SlideProduct from "../../components/slideProducts/slideProduct"
import toast from 'react-hot-toast'

function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { cartItems, addToCart } = useContext(CartContext)

    // 1. الإعلان عن الحالات (State) أولاً
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [mainImg, setMainImg] = useState('')

    const [relatedProducts, setRelatedProducts] = useState([])
    const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true)

    // 2. حساب isInCart بعد الإعلان عن product
    const isInCart = product
        ? cartItems.some(i => i.id === product.id)
        : false

    // 3. جلب بيانات المنتج
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data)
                setMainImg(data.images[0])
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        fetchProduct()
    }, [id])

    // 4. جلب المنتجات ذات الصلة
    useEffect(() => {
        if (!product) return
        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then((res) => res.json())
            .then((data) => {
                setRelatedProducts(data.products)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoadingRelatedProducts(false))
    }, [product?.category])

    // 5. دالة إضافة المنتج إلى السلة
    const handleAddToCart = () => {
        addToCart(product)

        toast.success(
            <div className='toast-wrapper'>
                <img src={product.images[0]} alt="" className='toast-img' />

                <div className="toast-content">
                    <strong>{product.title}</strong>
                    added to Cart
                    <div>
                        <button className='btn' onClick={() => navigate('/cart')}>View Cart</button>
                    </div>
                </div>
            </div>,
            { duration: 3500 }
        )
    }

    if (loading) return <p>Loading....</p>
    if (!product) return <p>product Not Found</p>

    return (
        <div>
            <div className='item_details'>
                <div className="container">
                    <div className="imgs_item">
                        <div className="big_img">
                            <img
                                src={mainImg || product.images[0]}
                                alt={product.title}
                            />
                        </div>

                        <div className="sm_img">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={product.title}
                                    onClick={() => setMainImg(img)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="details_item">
                        <h1 className='name'>{product.title}</h1>
                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStarHalfStroke />
                        </div>

                        <p className='price'>${product.price}</p>

                        <h5>Availability: <span>{product.availabilityStatus}</span></h5>
                        <h5>Brand: <span>{product.brand}</span></h5>
                        <p className='desc'>{product.description}</p>
                        <h5><span>Hurry Up! Only {product.stock} products left in stock.</span></h5>
                        <button
                            className={`btn ${isInCart ? 'in-cart' : ''}`}
                            onClick={handleAddToCart}
                            disabled={isInCart}
                        >
                            {isInCart ? "Item in cart" : "Add to cart"} <TiShoppingCart />
                        </button>

                        <div className="icons">
                            <span><FaRegHeart /></span>
                            <span><FaShare /></span>
                        </div>
                    </div>
                </div>
            </div>

            {loadingRelatedProducts ? (
                <p>Loading...</p>
            ) : (
                <SlideProduct key={product.category} data={relatedProducts} title={product.category.replace("-", " ")} />
            )}
        </div>
    )
}

export default ProductDetails