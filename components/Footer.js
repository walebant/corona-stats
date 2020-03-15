import React from 'react';
import { Divider } from 'antd';

export default function Footer() {
  return (
    <div style={{ marginTop: '4em' }}>
      <Divider orientation="right" style={{ color: 'green', fontSize: '.9em' }}>
        by{' '}
        <a
          target="__blank"
          href="https://twitter.com/wale_bant"
          style={{ textAlign: 'right' }}
        >
          @wale_bant
        </a>
      </Divider>
    </div>
  );
}
