import { Affix, Button, Flex, Layout, Segmented } from 'antd';
import React, { type PropsWithChildren, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  background: 'transparent',
  borderRadius: 48,
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  overflow: 'hidden',
  margin: '0 auto',
  height: '100vh',
  backgroundColor: '#fff',
};

const { Header, Footer, Content } = Layout;

export const CustomLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname: location } = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const page = location.slice(1);
    setCurrentPage(
      page === ''
        ? 'Главная'
        : page === 'questionnaires'
          ? 'Анкеты'
          : page === 'statistics'
            ? 'Статистика'
            : page === 'news'
              ? 'Новости'
              : ''
    );
  }, [location]);

  const onChange = (value: string) => {
    const current = `/${
      value === 'Главная'
        ? ''
        : value === 'Анкеты'
          ? 'questionnaires'
          : value === 'Статистика'
            ? 'statistics'
            : 'news'
    }`;
    setCurrentPage(value);
    navigate(current);
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Flex justify={'center'} align={'center'} gap={'middle'}>
          <Affix offsetTop={1}>
            <Segmented
              value={currentPage}
              options={['Главная', 'Анкеты', 'Статистика', 'Новости']}
              onChange={(value) => onChange(value as string)}
            />
          </Affix>
          <Affix offsetTop={1}>
            <Button type={'primary'} shape={'round'}>
              Войти
            </Button>
          </Affix>
        </Flex>
      </Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};
