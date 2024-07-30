import { LoginOutlined } from '@ant-design/icons';
import { Button, Flex, Layout, Segmented } from 'antd';
import React, { type PropsWithChildren, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectIsLoggedIn } from '../../store/authSlice';
import { login } from '../../store/authThunks';
import type { UserAuth } from '../../types';
import { LoginForm } from '../LoginForm/LoginForm';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  background: 'transparent',
  padding: 0,
  marginBottom: 20,
};

const authHeaderStyle: React.CSSProperties = {
  textAlign: 'center',
  background: 'transparent',
  padding: 0,
};

const contentStyle: React.CSSProperties = {
  marginTop: 10,
  marginBottom: 10,
};

const layoutStyle = {
  backgroundColor: '#fff',
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
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const [options, setOptions] = useState<string[]>(['Главная', 'Новости', 'Анкеты', 'Чат']);

  const openModal = () => {
    setLoginModalVisible(true);
  };

  const closeModal = () => {
    setLoginModalVisible(false);
  };

  const onFinishLogin = (data: UserAuth) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (isLoggedIn) {
      setOptions((prevState) => [...prevState, 'Статистика']);
    }
  }, [isLoggedIn]);

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
              : page === 'chats'
                ? 'Чат'
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
            : value === 'Чат'
              ? 'chats'
              : 'news'
    }`;
    setCurrentPage(value);
    navigate(current);
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={isLoggedIn ? authHeaderStyle : headerStyle}>
        <Flex justify={'center'} align={'center'} gap={'middle'} wrap>
          <Segmented
            size={'large'}
            value={currentPage}
            options={options}
            onChange={(value) => onChange(value as string)}
          />
          {!isLoggedIn && (
            <>
              <Button
                icon={<LoginOutlined />}
                type={'primary'}
                shape={'round'}
                size={'large'}
                onClick={openModal}
              >
                Войти
              </Button>
              <LoginForm onFinish={onFinishLogin} onCancel={closeModal} open={loginModalVisible} />
            </>
          )}
        </Flex>
      </Header>
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  );
};
