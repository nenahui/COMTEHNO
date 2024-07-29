import { Flex, Form, Input, Modal } from 'antd';
import React from 'react';

interface Props {
  open: boolean;
  onFinish: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ open, onFinish }) => {
  return (
    <Modal
      open={open}
      okText={'Войти'}
      cancelText={'Отмена'}
      onCancel={onFinish}
      title={'Вход в личный кабинет'}
    >
      <Form onFinish={onFinish} layout={'vertical'}>
        <Flex vertical style={{ height: 170 }} justify={'center'}>
          <Form.Item label='Почта' name='email' layout={'vertical'} style={{ marginBottom: 10 }}>
            <Input placeholder='Введите вашу почту' />
          </Form.Item>

          <Form.Item label='Пароль' name='password' layout={'vertical'}>
            <Input placeholder='Введите ваш пароль' />
          </Form.Item>
        </Flex>
      </Form>
    </Modal>
  );
};
