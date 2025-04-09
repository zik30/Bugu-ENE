import React, { useEffect, useState } from "react";
import stl from "./productsPage.module.scss";
import { Button, Card, Divider } from "antd";
import axios from "axios";
import { CheckOutlined } from "@ant-design/icons";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const resp = await axios.get("/data/products.json");
    const data = resp.data;
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={stl.productsPage}>
      <div className={stl.header}>
        <div className={stl.container}>
          <h2>About Our Products</h2>
          <p>
            Мы с любовью изготавливаем натуральное мыло ручной работы из
            целебных трав, собранных в живописной местности Иссык-Кульской
            области. Каждый кусочек нашего мыла — это результат традиций, заботы
            и экологически чистых ингредиентов.<br />
            <ul>
              Все наши продукты:
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}><CheckOutlined style={{ color: '#8b58fa', marginRight: 8 }} /> Изготавливаются вручную</li>
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginBottom: 8 }}><CheckOutlined style={{ color: '#8b58fa', marginRight: 8 }} /> Не содержат химических добавок</li>
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginBottom: 8 }}><CheckOutlined style={{ color: '#8b58fa', marginRight: 8 }} /> Подходят для всех типов кожи</li>
                <li style={{ display: 'flex', alignItems: 'center',justifyContent: 'center', marginBottom: 8 }}><CheckOutlined style={{ color: '#8b58fa', marginRight: 8 }} /> Экологически чистые и безопасные</li>
            </ul>
            <br /> С нашим мылом
            вы не только заботитесь о своей коже, но и поддерживаете местное
            женское сообщество и устойчивое развитие.
          </p>
        </div>
      </div>
      <Divider style={{ borderColor: "#7cb305" ,  color: '#37054f'}}>Soaps</Divider>

      <div className={stl.soaps}>
        <div className={stl.container}>
          <div className={stl.soaps_inner}>
            {products.map((product, index) => {
              if (product.category === "Soap") {
                return (
                  <Card
                    key={index}
                    hoverable
                    style={{ width: 300, height: 380 }}
                    cover={<img alt="example" src={product.image} />}
                  >
                    <Card.Meta
                      title={<p style={{color: '#37054f', margin: 0}}>{product.name}</p>}
                      description={product.description}
                    />
                    <Button>{product.price} Cом</Button>
                  </Card>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Divider style={{ borderColor: "#7cb305",  color: '#37054f' }}>Creams</Divider>

      <div className={stl.creams}>
        <div className={stl.container}>
          <div className={stl.creams_inner}>
            {products.map((product, index) => {
              if (product.category === "Cream") {
                return (
                  <Card
                    key={index}
                    hoverable
                    style={{ width: 300, height: 380 }}
                    cover={<img alt="example" src={product.image} />}
                  >
                    <Card.Meta
                      title={<p style={{color: '#37054f', margin: 0}}>{product.name}</p>}
                      description={product.description}
                    />
                    <Button>{product.price} Cом</Button>
                  </Card>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
