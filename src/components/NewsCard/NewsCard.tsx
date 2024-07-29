import { Card, Divider, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';

export const NewsCard: React.FC = () => {
  return (
    <Card title='Заголовок'>
      <Meta
        title='Подзаголовок'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugiat in iure laborum quaerat tenetur velit. Eos nemo nesciunt nisi officiis quam repudiandae ullam veniam voluptates voluptatibus. Maiores, nulla, tenetur!'
      />

      <Divider />

      <Meta
        title='Второй подзаголовок'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur fugiat in iure laborum quaerat tenetur velit. Eos nemo nesciunt nisi officiis quam repudiandae ullam veniam voluptates voluptatibus. Maiores, nulla, tenetur!'
      />

      <Typography.Text
        type={'secondary'}
        style={{ display: 'block', marginTop: 10, textAlign: 'right' }}
      >
        23:08 24.10.24
      </Typography.Text>
    </Card>
  );
};
