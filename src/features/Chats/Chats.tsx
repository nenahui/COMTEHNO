import { Button, Flex, Form, Input, List, Spin, Tag, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { format, isToday, isYesterday } from 'date-fns';
import { ru } from 'date-fns/locale';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUser } from '../../store/authSlice';
import type { ApiMessage, UserMessage } from '../../types';
import { selectIsLoading, selectIsMessages } from './chatsSlice';
import { fetchMessages, sendMessage } from './chatsThunks';

const formatDate = (date: Date) => {
  if (isToday(date)) {
    return `Сегодня в ${format(date, 'HH:mm')}`;
  } else if (isYesterday(date)) {
    return `Вчера в ${format(date, 'HH:mm')}`;
  } else {
    return format(date, "d MMMM yyyy 'в' HH:mm", { locale: ru });
  }
};

const formStyles: React.CSSProperties = {
  position: 'fixed',
  backgroundColor: '#fff',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '96%',
  maxWidth: '510px',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  padding: 10,
  height: '220px',
  borderRadius: '10px 10px 0 0',
};

export const Chats = () => {
  const user = useAppSelector(selectUser);
  const [form] = Form.useForm<UserMessage>();
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectIsMessages);
  const loading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleSendMessage = () => {
    const newMessage: ApiMessage = {
      nickname: form.getFieldValue('nickname'),
      message: form.getFieldValue('message'),
      timestamp: new Date().toISOString(),
      teacher: {
        email: 'none',
      },
    };

    if (user) {
      if (typeof user.email === 'string') {
        newMessage.teacher.email = user.email;
      }
    }

    dispatch(sendMessage(newMessage));
    form.setFieldValue('message', '');
  };

  const messagesBlockStyles: React.CSSProperties = {
    height: '100%',
    overflowY: 'auto',
    marginBottom: 200,
  };

  return (
    <Flex vertical>
      {loading ? (
        <Spin fullscreen tip='Загрузка сообщений...' />
      ) : (
        <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
          <div style={messagesBlockStyles}>
            <List
              style={{ overflowY: 'scroll' }}
              bordered
              dataSource={messages}
              renderItem={(item) => (
                <List.Item key={item.timestamp} style={{ position: 'relative' }}>
                  <Typography.Text>
                    {item.teacher.email.includes('kanatraccoon') ? (
                      <Tag color={'red'}>{item.nickname} - (Разработчик)</Tag>
                    ) : item.teacher.email !== 'none' ? (
                      <Typography.Link>{item.nickname} - (Персонал)</Typography.Link>
                    ) : (
                      item.nickname
                    )}
                    : {item.message}
                  </Typography.Text>
                  <Typography.Text
                    type={'secondary'}
                    style={{
                      display: 'block',
                      width: 400,
                      textAlign: 'right',
                      marginLeft: 'auto',
                      fontSize: '0.8em',
                    }}
                  >
                    {formatDate(new Date(item.timestamp))}
                  </Typography.Text>
                </List.Item>
              )}
            />
          </div>
          <Form layout={'vertical'} onFinish={handleSendMessage} form={form} style={formStyles}>
            <Flex vertical>
              <Form.Item
                label={'Никнейм'}
                layout={'vertical'}
                name={'nickname'}
                rules={[
                  { required: true, message: 'Пожалуйста, введите ваш никнейм', min: 4, max: 10 },
                ]}
              >
                <Input size={'large'} placeholder='Введите ваш никнейм' />
              </Form.Item>

              <Form.Item
                label={'Сообщение'}
                layout={'vertical'}
                name={'message'}
                rules={[
                  {
                    required: true,
                    validator: (_, value) => {
                      if (!value) {
                        return Promise.reject('Пожалуйста, введите ваше сообщение');
                      }
                      if (value.length > 200) {
                        return Promise.reject('Сообщение не может быть длиннее 200 символов');
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <TextArea
                  size={'large'}
                  style={{ resize: 'none', height: 50 }}
                  placeholder='Введите ваше сообщение'
                />
              </Form.Item>
              <Button size={'large'} type='primary' htmlType={'submit'}>
                Отправить
              </Button>
            </Flex>
          </Form>
        </div>
      )}
    </Flex>
  );
};
