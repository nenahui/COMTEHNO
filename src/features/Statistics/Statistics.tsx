import React from 'react';
import Chart from 'react-apexcharts';

export const Statistics: React.FC = () => {
  return (
    <Chart
      options={{
        colors: ['#1677ff'],
        chart: {
          stacked: true,
          fontFamily: `-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'`,
          selection: {
            enabled: false,
          },
          id: 'basic-bar',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: [2019, 2020, 2021, 2022, 2024, 2024],
        },
      }}
      series={[
        {
          name: 'Комтехно',
          data: [42, 38, 44, 40, 43, 56],
        },
      ]}
      type='area'
      style={{ overflow: 'hidden' }}
      height={'500'}
    />
  );
};
