import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: 'white'
      }
    },
    tooltip: {
      bodyColor: 'white'
    }
  },
  scales: {
    x: {
      ticks: {
        color: 'white' // Цвет меток по горизонтальной оси
      },
      grid: {
        color: 'rgba(255,255,255,.3)'
      }
    },
    y: {
      ticks: {
        color: 'white' // Цвет меток по вертикальной оси
      },
      grid: {
        color: 'rgba(255,255,255,.3)'
      }
    }
  }
};

const defaultLabels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июль', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export const LineChart = (props) => {
  const labels = props.labels || defaultLabels
  const data = {
    labels,
    datasets: [
      {
        label: props.label || 'Dataset',
        data: props.data
          ? props.data.map((value) => value)
          : labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 255, 255)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
    ],
  };
  return <Line data={data} options={options} />;
};
