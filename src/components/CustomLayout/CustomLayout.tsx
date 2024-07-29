import { LoginOutlined } from '@ant-design/icons';
import { Button, Flex, Layout, Segmented } from 'antd';
import React, { type PropsWithChildren, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginForm } from '../LoginForm/LoginForm';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  background: 'transparent',
  padding: 0,
  marginBottom: 20,
};

const contentStyle: React.CSSProperties = {
  margin: '20px 0',
};

const layoutStyle = {
  backgroundColor: '#fff',
  borderRight: '1px solid rgba(0, 0, 0, 0.05)',
  borderLeft: '1px solid rgba(0, 0, 0, 0.05)',
  maxWidth: 1360,
  margin: '0 auto',
  padding: '20px 1rem',
};

const { Header, Content } = Layout;

export const CustomLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname: location } = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('');
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const openModal = () => {
    setLoginModalVisible(true);
  };

  const onFinishLogin = () => {
    setLoginModalVisible(false);
  };

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
        <Flex justify={'center'} align={'center'} gap={'middle'} wrap>
          <Segmented
            size={'large'}
            value={currentPage}
            options={['Главная', 'Анкеты', 'Статистика', 'Новости']}
            onChange={(value) => onChange(value as string)}
          />
          <Button
            icon={<LoginOutlined />}
            type={'primary'}
            shape={'round'}
            size={'large'}
            onClick={openModal}
          >
            Войти
          </Button>
          <LoginForm onFinish={onFinishLogin} open={loginModalVisible} />
        </Flex>
      </Header>
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  );
};
