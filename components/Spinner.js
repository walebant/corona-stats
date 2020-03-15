import { Spin } from 'antd';

import React from 'react';

export default function Spinner() {
  return (
    <div className="spin">
      <Spin />

      <style jsx="true" global>{`
        .spin {
          text-align: center;
          background: rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}
