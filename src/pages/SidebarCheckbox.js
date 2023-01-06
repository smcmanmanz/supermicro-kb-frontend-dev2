import React from "react";
import { TabContainer } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';

class SidebarCheckbox extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onFilterChange(e);
  }

  render() {
    return (
      <Tab.Container>
        <Row>
          <Col sm={4}>

            <ListGroup className="sidebar">
              
              <header className="sBarCat">
                {'Categories'}
              </header>

              {this.props.categories.map(category => (

                <ListGroup.Item className="filterList" key={category}>
                  <label>

                    <input
                      onChange={this.handleChange}
                      type="checkbox"
                      value={category} />

                    {category}

                  </label>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Tab.Container>
    );
  };
}

export default SidebarCheckbox;