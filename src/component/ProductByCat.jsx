import React, { useEffect, useState } from 'react'

function ProductByCat(props) {
    let [products,setProducts]=useState([])
      useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${props.title}`).then((a)=>a.json()).then((b)=>setProducts(b.products))
      },[])
  return (
    <>
      <section className='p-4'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h3 className='fw-bold text-uppercase'>{props.title}</h3>
                </div>
                <div className="col-lg-6 text-end">View ALL</div>
            </div>

            <div className="row p-2">
                {products.slice(0,4).map((a)=>(
                    <div className="col-lg-3">
                    <div className="box shadow-lg">
                        <img className='w-100' src={a.images} alt="" srcset="" />
                        <div className="box-c">
                            <p className='fw-bold p-0 m-0'>                               
                            {a.title}
                            </p>
                            <h4 className='text-primary p-0'>Rs.{a.price}</h4>
                            <button className='btn btn-primary btn-sm'>Add To Cart</button>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
      </section>
    </>
  )
}

export default ProductByCat
