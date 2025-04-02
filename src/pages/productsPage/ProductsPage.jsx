import React, { useEffect, useState } from "react";
import stl from "./productsPage.module.scss";
import { Button, Card, Divider } from "antd";
import axios from "axios";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            cupiditate est quaerat minima esse unde officiis molestiae
            architecto, nobis deserunt optio veritatis! Minima nulla quis,
            ratione culpa ipsa numquam iure repudiandae inventore architecto
            animi quasi assumenda nemo laboriosam distinctio pariatur eos
            dolore, reprehenderit quidem eum obcaecati iste cupiditate dolores
            non!
          </p>
        </div>
      </div>
      <Divider style={{ borderColor: "#7cb305" }}>Soaps</Divider>

      <div className={stl.soaps}>
        <div className={stl.container}>
          <div className={stl.soaps_inner}>
            {products.map((product, index) => {
              if (product.category === "Soap") {
                return (
                  <Card
                    key={index}
                    hoverable
                    style={{ width: 300, height: 380}}
                    cover={<img alt="example" src={product.image} />}
                  >
                    <Card.Meta
                      title={product.name}
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
      <Divider style={{ borderColor: "#7cb305" }}>Creams</Divider>

      <div className={stl.creams}>
        <div className={stl.container}>
        <div className={stl.creams_inner}>
            {products.map((product, index) => {
              if (product.category === "Cream") {
                return (
                  <Card
                    key={index}
                    hoverable
                    style={{ width: 300, height: 380}}
                    cover={<img alt="example" src={product.image} />}
                  >
                    <Card.Meta
                      title={product.name}
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
