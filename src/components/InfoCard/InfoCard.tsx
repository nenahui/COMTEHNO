import { Card, Typography } from 'antd';
import React from 'react';
import type { InfoItem } from '../../types';

interface Props {
  infoItem: InfoItem;
}

export const InfoCard: React.FC<Props> = ({ infoItem }) => {
  return (
    <Card title={infoItem.title} style={{ textAlign: 'left' }}>
      <Typography.Text style={{ display: 'block', textAlign: 'justify' }}>
        {infoItem.description}
      </Typography.Text>
    </Card>
  );
};
