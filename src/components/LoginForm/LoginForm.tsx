import { Flex, Form, Input, Modal } from 'antd';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectIsLogging } from '../../store/authSlice';
import type { UserAuth } from '../../types';

interface Props {
  open: boolean;
  onFinish: (data: UserAuth) => void;
  onCancel: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ open, onFinish, onCancel }) => {
  const isLogging = useAppSelector(selectIsLogging);
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      okText={'Войти'}
      onOk={() => form.submit()}
      cancelText={'Отмена'}
      confirmLoading={isLogging}
      onCancel={onCancel}
      title={'Вход в личный кабинет'}
    >
      <Form form={form} onFinish={(data) => onFinish(data)} layout={'vertical'}>
        <Flex vertical style={{ height: 170 }} justify={'center'}>
          <Form.Item
            label='Почта'
            name='email'
            layout={'vertical'}
            style={{ marginBottom: 10 }}
            rules={[{ required: true, message: 'Пожалуйста, введите свою почту' }]}
          >
            <Input placeholder='Введите вашу почту' />
          </Form.Item>

          <Form.Item
            label='Пароль'
            name='password'
            layout={'vertical'}
            rules={[{ required: true, message: 'Пожалуйста, введите свой пароль' }]}
          >
            <Input placeholder='Введите ваш пароль' />
          </Form.Item>
        </Flex>
      </Form>
    </Modal>
  );
};
