import React from 'react';
import './style';

interface AlertProps {
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}
const prefixCls = 'happy-alert';

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Alert;