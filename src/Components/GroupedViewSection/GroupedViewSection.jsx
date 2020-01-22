import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import './GroupedViewSection.css';


export default class GroupedViewSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullList: this.props.list,
      groupBy: 'Bank',
      grouped: {}
    }
  }

  onGroup() {

  }

  setParameter(e) {
    this.setState({
      groupBy: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const data = this.state.fullList;
    const parameter = this.state.groupBy;
    let group = data.reduce((r, a) => {
      r[a[`${parameter}`]] = [...r[a[`${parameter}`]] || [], a];
      return r;
    }, {})
    this.setState({
      grouped: group,
      fullList: this.props.list,
    })
  }
  render() {
    let data;

    this.state.grouped ? (
      data = Object.entries(this.state.grouped)
    ) : (
        data = 'Hello'
      )

    console.log(data);
    return (
      <Container className='grouped-view-section'>
        <div className="headers">
          <div className="section-title">
            <h4>Grouped View</h4>
          </div>
          <Link to='/list'>
            <div className="control-button">
              <span>X</span>
            </div>
          </Link>
        </div>
        <Row>
          <Col xs={12} md={2}>
            <div className="form-container-wrapper">
              <div className="form-container">
                <form onSubmit={e => this.onSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="group-by">How would you like to group the assets?</label>
                    <select onChange={e => this.setParameter(e)} defaultValue="Bank" name="options" id="options-selector">
                      <option value="Bank">By Bank</option>
                      <option value="Area">By Area</option>
                      <option value="Zone">By Zone</option>
                      <option value="Old Denom">By Old Denom</option>
                    </select>
                  </div>
                  <div className="form-controls">
                    <button type="submit">Group</button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col>
            <div className="group-results">
              {(data !== []) ? (
                data.map((item, i) => {
                  return (
                    <div key={i} className="grouped-item">
                      <div className="title-wrapper">
                        <h4>{this.state.groupBy} {item[0]} has {item[1].length} items.</h4>
                      </div>
                      <div className="group-list">
                        <table>

                          <tbody>
                            {item[1].map((item, i) => {
                              return <ListItem item={item} key={i} />
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )
                })
              ) : (
                  <div className="result-message">
                    <h4>Select group criteria</h4>
                  </div>
                )
              }
            </div>
          </Col>
        </Row>

      </Container>
    )
  }
}