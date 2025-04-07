import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import stl from "./orderPage.module.scss";

function OrderPage() {
  const [form] = Form.useForm();

  return (
    <div className={stl.orderPage}>
      <div className={stl.main}>
        <div className={stl.container}>
          <div className={stl.form}>
            <h2>Оставить Заявку</h2>
            <div className={stl.form_inner}>
              <Form layout={"vertical"} form={form} style={{ maxWidth: 600 }}>
                <Form.Item label="Имя Фамилия">
                  <Input placeholder="Введите ФИО" />
                </Form.Item>
                <Form.Item label="Номер телефона">
                  <Input placeholder="Введите номер телефона" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary">Submit</Button>
                </Form.Item>
              </Form>
              <div className={stl.img}>
                <h3>Спасибо за заяку!</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
