import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import ProductByCat from "../component/ProductByCat";

function Home() {
  let [cat,setCat]=useState([])
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/categories`).then((a)=>a.json()).then((b)=>setCat(b))
  },[])
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 shadow">
              <ul className="list-group list-group-flush">
                {cat.slice(0,6).map((a)=>(
                <li className="list-group-item" key={a.slug}>{a.name}</li>

                ))}
               <li className="list-group-item text-center">More</li>
              </ul>
            </div>
            <div className="col-lg-9 mt-1">
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval={10000}
                  >
                    <img src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73b2da870e.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item" data-bs-interval={2000}>
                    <img src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73c04e3b87.png" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73c2050c0f.png" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 brand">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fw-bold">brand</h4>
            </div>
            <div className="col-lg-6 text-end">View All</div>
          </div>
          <div className="row">
            <div className="col-lg-12">
            <Swiper
        slidesPerView={9}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.digitalsahuji.com/storage/app/public/brand/2023-07-02-64a11115d3497.png" alt="" />
        </SwiperSlide>
        
      </Swiper>
            </div>
          </div>
        </div>
      </section>
 
      <ProductByCat title="beauty"/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 bg-primary text-center">
              <h4 className=" fw-bold">Recommended product</h4>
              <div className="container content bg-secondary-subtle h-75 p-4">
                <div className=" bg-light-subtle p-4">
              <img className="w-100" src="https://www.digitalsahuji.com/storage/app/public/product/thumbnail/2024-02-09-65c5de388f4a4.png" alt="" />
              <p>Keyboard For MSI CR 420/430</p>
              <p className="text-end">रु1,099</p>
              </div>
              </div>
              <button className="btn bg-light-subtle w-100 mt-4">Buy Now</button>
            </div>
            <div className="col-lg-9">
            <ProductByCat title="Furniture"/>
            <ProductByCat title="groceries"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-12">
              <img className="w-100" src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73b5319750.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <ProductByCat title="beauty"/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img className="w-100" src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73bd17fa1f.png" alt="" />
            </div>
            <div className="col-lg-6">
              <img className="w-100" src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73bea795ce.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
