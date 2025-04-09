import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import stl from "./mainPage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Button, Card } from "antd";
import axios from "axios";



function MainPage() {
  const [ products, setProducts ] = useState([])

  const fetchProducts = async() => {
    const resp = await axios.get("/data/products.json");
    const data = resp.data;
    setProducts(data);
  };
  useEffect( ()=>{fetchProducts()}, [])

  return (
    <div className={stl.mainPage}>
      <div style={{height: '100vh'}} className={stl.header}>
        <div className={stl.filter}>
          <div className={stl.container}>
            <h1>Bugu Ene Samyn</h1>
          </div>
        </div>
      </div>

      <div className={stl.aboutUs}>
        <div className={stl.container}>
          <h2>O нас</h2>
          <p>
            В 2010 году в селе Тасма, Тюпского района Иссык-Кульской области,
            было основано мыловаренное сообщество «Бугу-эне». Мы изготавливаем
            экологически чистое мыло вручную из местных трав и цветов.{" "}
            <Link to={"/aboutUs"}><Button >Подробнее...</Button></Link>
          </p>
        </div>
      </div>

      <div className={stl.products}>
        <div className={stl.container}>
          <div className={stl.title}>
            <h2>Наши продукты</h2>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              1200: {
                slidesPerView: 5, // на экранах от 1200px и выше — 5 карточек
              },
              1024: {
                slidesPerView: 4, // на экранах от 1024px и выше — 4 карточки
              },
              768: {
                slidesPerView: 3, // например, на планшетах — 3
              },
              0: {
                slidesPerView: 2, // по умолчанию (телефоны)
              },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide style={{ paddingBottom: 40 }} key={index}>
                <Card
                  className={stl.card}
                  hoverable
                  style={{ height: 300 }}
                  cover={<img alt="example" src={product.image} />}
                >
                  <Card.Meta
                    style={{ color: '#37054f' }}
                    title={ <p style={{color: '#37054f', margin: 0}}>{product.name}</p>}
                    description={product.category}
                  />
                </Card>
              </SwiperSlide>
            ))}
            <SwiperSlide style={{ paddingBottom: 40 }} >
              <Card
                hoverable
                style={{ width: 200, height: 300 , color: '#37054f'}}
                cover={<img alt="example" src={'/collection/samin3.jpg'} />}
              >
                <Card.Meta
                  style={{ color: '#37054f' }}
                  title={<Link style={{color: '#a32cdb'}} to={"/products"}>Подробнее</Link>}
                  description="у нас много вещей"
                />
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default MainPage;
