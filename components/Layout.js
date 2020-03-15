import { Row, Col } from 'antd';
import Footer from './Footer';

const layoutStyle = {
  marginLeft: 1,
  marginRight: 1,
  justifyContent: 'center',
};

export default function Layout(props) {
  return (
    <Row gutter={32} style={layoutStyle}>
      <Col className="gutter-row" span={32}>
        {props.children}
        <Footer />
      </Col>
    </Row>
  );
}
