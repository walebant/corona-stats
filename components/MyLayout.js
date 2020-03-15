import { Row, Col, Divider } from 'antd';
import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
  // margin: 20,
  padding: 10,
  border: '1px solid #DDD',
  justifyContent: 'center',
};

export default function Layout(props) {
  return (
    <Row gutter={32} style={layoutStyle}>
      <Col className="gutter-row" span={16}>
        {/* <Header /> */}
        {props.children}
        <Footer />
      </Col>
    </Row>
  );
}
