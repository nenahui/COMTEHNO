import React from 'react';
import { Button, Flex, Form, Input, Radio } from 'antd';

export const Questionnaires: React.FC = () => {
  return (
    <Form layout={'vertical'} style={{ maxWidth: 500, margin: '0 auto' }}>
      <Flex vertical>
        <Form.Item
          label={'Вопрос 1'}
          name={'question-1'}
          layout={'vertical'}
          rules={[{ required: true, message: 'Пожалуйста, введите ваш ответ…' }]}
        >
          <Input placeholder={'Введите ваш ответ…'} size={'large'} />
        </Form.Item>

        <Form.Item
          label={'Вопрос 2'}
          name={'question-2'}
          layout={'vertical'}
          rules={[{ required: true, message: 'Пожалуйста, введите ваш ответ…' }]}
        >
          <Input placeholder={'Введите ваш ответ…'} size={'large'} />
        </Form.Item>

        <Form.Item
          label={'Вопрос 3'}
          name={'question-3'}
          layout={'vertical'}
          rules={[{ required: true, message: 'Пожалуйста, введите ваш ответ…' }]}
        >
          <Input placeholder={'Введите ваш ответ…'} size={'large'} />
        </Form.Item>

        <Form.Item
          label='Вопрос 4'
          name='question-4'
          rules={[{ required: true, message: 'Пожалуйста, введите ваш ответ…' }]}
        >
          <Radio.Group style={{ width: '100%' }} size={'large'}>
            <Flex justify={'space-between'}>
              <Radio value='1' style={{ margin: '0 10px' }}>
                1
              </Radio>
              <Radio value='2' style={{ margin: '0 10px' }}>
                2
              </Radio>
              <Radio value='3' style={{ margin: '0 10px' }}>
                3
              </Radio>
              <Radio value='4' style={{ margin: '0 10px' }}>
                4
              </Radio>
              <Radio value='5' style={{ margin: '0 10px' }}>
                5
              </Radio>
            </Flex>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label={'Вопрос 5'}
          name={'question-5'}
          layout={'vertical'}
          rules={[{ required: true, message: 'Пожалуйста, введите ваш ответ…' }]}
        >
          <Input placeholder={'Введите ваш ответ…'} size={'large'} />
        </Form.Item>

        <Form.Item
          label={'Вопрос 6'}
          name={'question-6'}
          layout={'vertical'}
          rules={[{ required: true, message: 'Пожалуйста, введите ваш ответ…' }]}
        >
          <Input placeholder={'Введите ваш ответ…'} size={'large'} />
        </Form.Item>

        <Form.Item
          label='Вопрос 7'
          name='question-7'
          rules={[{ required: true, message: 'Пожалуйста, введите ваш ответ…' }]}
        >
          <Radio.Group style={{ width: '100%' }} size={'large'}>
            <Flex justify={'space-between'}>
              <Radio.Button value={false} style={{ width: '50%', textAlign: 'center' }}>
                Да
              </Radio.Button>
              <Radio.Button value={true} style={{ width: '50%', textAlign: 'center' }}>
                Нет
              </Radio.Button>
            </Flex>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name={'question-8'}
          label={'Вопрос 8'}
          layout={'vertical'}
          rules={[{ required: true, message: 'Пожалуйста, введите ваш ответ…' }]}
        >
          <Input placeholder={'Введите ваш ответ…'} size={'large'} />
        </Form.Item>

        <Button size={'large'} type='primary' htmlType={'submit'}>
          Отправить
        </Button>
      </Flex>
    </Form>
  );
};
