import React from 'react';
import { Carousel, Flex } from 'antd';
import { NewsCard } from '../../components/NewsCard/NewsCard';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  borderRadius: '5px',
  margin: '0 5px',
};

export const News: React.FC = () => {
  return (
    <Flex vertical gap={'large'}>
      <Carousel infinite autoplay>
        <div>
          <h3 style={contentStyle}>Первая главная новость</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Второая главная новость</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Третья главная новость</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Четвертая главная новость</h3>
        </div>
      </Carousel>

      <NewsCard />
      <NewsCard />
    </Flex>
  );
};
