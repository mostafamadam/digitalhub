import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import 'dayjs/locale/ar';
import ar from 'antd/locale/ar_EG';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={ar} direction="rtl">
    <App />
  </ConfigProvider>
);
