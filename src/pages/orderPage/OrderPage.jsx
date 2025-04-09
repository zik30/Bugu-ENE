import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import stl from "./orderPage.module.scss";
import axios from "axios";

function OrderPage() {

  const token = '7614471178:AAH2lgcVAp60RH532OilrvKARtEEy__8ucw'
  const chatid = '@bugu_ene_samyn'
  const url = 'https://api.telegram.org/bot' + token + '/sendMessage'
  const [form] = Form.useForm();
  const onFinish = values => {
    const { name, phone } = values;
    
    const text = `Имя: ${name}, Телефон: ${phone}`;
    axios.post(url, {
      chat_id: chatid,
      text: text
    })
    .then(response => {
      console.log('Сообщение отправлено:', response.data, value);
    })
    .catch(error => {
      console.error('Ошибка при отправке:', error);
    });
}
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={stl.orderPage}>
      <div className={stl.main}>
        <div className={stl.container}>
          <div className={stl.form}>
            <h2>Оставить Заявку</h2>
            <div className={stl.form_inner}>

              <Form 
                layout={"vertical"} 
                form={form} 
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                onChange={e => setValue(e.target.value)}
                validateTrigger="onSubmit"
                onFinishFailed={onFinishFailed}>
                <Form.Item label="Имя Фамилия" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                  <Input placeholder="Введите ФИО" />
                </Form.Item>
                <Form.Item label="Номер телефона" name='phone' rules={[{ required: true, message: 'Please input your phone number!' }, {pattern: /^(\+7|8)?(0)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$|^(\+996)?(0)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{3}$/, message: 'Введите корректный номер в формате +996 XXX XXX XXX'}]}>
                  <Input placeholder="Введите номер телефона" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">Submit</Button>
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
