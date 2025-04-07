import React, { useEffect, useState } from "react";
import stl from "./aboutUsPage.module.scss";
import { Carousel } from "antd";
import axios from "axios";

function AboutUsPage() {
  const [products, setProducts] = useState([]);
  const [proccesses, setProccesses] = useState([]);

  const fetchProducts = async () => {
    const resp = await axios.get("/data/products.json");
    const data = resp.data;
    setProducts(data);
  };
  const fetchProccesses = async () => {
    const resp = await axios.get("/data/proccess.json");
    const data = resp.data;
    setProccesses(data);
  };
  useEffect(() => {
    fetchProducts(), fetchProccesses();
  }, []);

  const contentStyle = {
    height: "210px",
    width: "100%",
    objectFit: "cover",
  };

  return (
    <div className={stl.aboutUsPage}>
      <div className={stl.header}>
        <div className={stl.container}>
          <h2>About Us</h2>
          <p>
            В селе Тасма, Тюпского района Иссык-Кульской области, в 2010 году
            было создано мыльное сообщество "Бугу-эне". Мы изготавливаем
            экологически чистое мыло вручную из трав и цветов, произрастающих в
            нашей деревне. 
          </p>
        </div>
      </div>
      <div className={stl.enactus}>
        <div className={stl.container}>
          <div className={stl.enactus_inner}>
            <h2>Enactus</h2>
            <p>
              Наше сообщество "Бугу-Эне" сотрудничает с командой Enactus Манас
              Университета.<br />
              Enactus — это глобальное движение студентов, которые используют
              предпринимательство для позитивных социальных изменений. Команда
              Enactus Университета Манас занимается улучшением маркетинга, брендинга и стратегии
              продаж. Благодаря им продукция "Бугу Эне" стала известно более широкой 
              аудитории, выйти в онлайн-пространство и
              повысился интерес к экологически чистому мылу, которое создается
              вручную. Это усилило роль женщин в нашем
              сообществе, дало толчок развитию сельского предпринимательства и
              показало, как можно использовать местные ресурсы для устойчивого
              будущего. Enactus Кыргызстан и команда Enactus Манас Университета создают
              проекты, которые приносят реальную пользу обществу, экологии и
              экономике.
            </p>
            <Carousel autoplay>
              {products.map((product, index) => (
                <div key={index}>
                  <img style={contentStyle} src={product.image} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className={stl.proccess}>
        <div className={stl.container}>
          <div className={stl.procces_inner}>
            <h2>Процесс производства</h2>
            <p>
            🔸 В нашем сообществе трудятся 6 женщин. Кроме
            традиционного мыла "Шакар", которое изготавливали наши предки, мы
            производим полезное для кожи мыло из ромашки, календулы, крапивы и
            облепихи — против экземы и аллергии. Мы выпускаем мыло,
            благоприятное для кожи, способствующее лечению кожных заболеваний,
            полезное и экологически чистое. Присоединяйтесь к нам 😍🫶🍀! <br />
            🔸 Технологии мыловарения нам передали волонтёры JICA из Японии. Мы
            используем только натуральные добавки. <br />
            🔸 Наше мыло изготавливается<br />
            вручную без химических компонентов, его можно использовать для
            осветления кожи, устранения различных пятен, веснушек, а также для
            лечения экземы и аллергии. <br />
            🔸 Также подходит для купания малышей и
            для чувствительной кожи!
            </p>
            <Carousel autoplay>
              {proccesses.map((proccess, index) => (
                <div key={index}>
                  <img
                    style={contentStyle}
                    src={proccess.images}
                    alt="soap making proccess images"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
