import React from 'react';
import { Row, Col } from 'antd';
const AccountListItem = (props) => {
  const { name, balance } = props.account;
  return (
    <Row>
      <Col span={12}>{name}</Col>
      <Col span={12} offset={18}>{`${balance} NPR`}</Col>
    </Row>
  );
}

export default AccountListItem;