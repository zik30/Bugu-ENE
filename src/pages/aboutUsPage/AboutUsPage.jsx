import React, { useEffect, useState } from "react";
import stl from "./aboutUsPage.module.scss";
import { Carousel } from "antd";
import axios from "axios";




function AboutUsPage() {

  const [ products, setProducts ] = useState([])
  const [proccesses, setProccesses] = useState([])

  const fetchProducts = async() => {
    const resp = await axios.get("/data/products.json");
    const data = resp.data;
    setProducts(data);
  };
  const fetchProccesses = async() => {
    const resp = await axios.get("/data/proccess.json");
    const data = resp.data;
    setProccesses(data);
  };
  useEffect( ()=>{fetchProducts(), fetchProccesses()}, [])

  const contentStyle = {
    height: "160px",
    width: "100%",
    objectFit: "cover",
  };

  return (
    <div className={stl.aboutUsPage}>
      <div className={stl.header}>
        <div className={stl.container}>
          <h2>About Us</h2>
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
      <div className={stl.enactus}>
        <div className={stl.container}>
          <div className={stl.enactus_inner}>
            <h2>Enactus</h2>
            <p>
              Enactus is a global nonprofit organization dedicated to inspiring
              students to improve the world through entrepreneurial action.
              Enactus teams create and implement community empowerment projects
              that address social, economic, and environmental challenges.
            </p>
            <Carousel autoplay >
              {
                products.map( (product, index) => (
                  <div key={index}>
                    <img style={contentStyle} src={product.image} alt="" />
                  </div>
                ))
              }
            </Carousel>
          </div>
        </div>
      </div>
      <div className={stl.proccess}>
        <div className={stl.container}>
          <div className={stl.procces_inner}>
            <h2>Our Process</h2>
            <p>
              Our process is simple and effective. We start by sourcing the
              finest natural ingredients from local farmers. Then, we handcraft
              our products in small batches to ensure quality and freshness.
              Finally, we package our products sustainably to minimize our
              environmental impact.
            </p>
            <Carousel autoplay>
              {
                proccesses.map( (proccess, index) => (
                  <div key={index}>
                    <img style={contentStyle} src={proccess.images} alt="soap making proccess images" />
                  </div>
                ))
              }
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
