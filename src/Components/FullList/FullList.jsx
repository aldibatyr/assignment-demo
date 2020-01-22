import React from 'react';
import './FullList.css'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ListItem from '../ListItem/ListItem';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default class FullList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.list,
      sortKey: '',
      groupBy: '',
      grouped: [],
    };
    this.onSort = this.onSort.bind(this);
  }



  async onSort(event, sortKey) {
    const data = this.state.data;
    if (sortKey !== this.state.sortKey) {
      data.sort((a, b) => {
        const itemA = a[`${sortKey}`].toUpperCase();
        const itemB = b[`${sortKey}`].toUpperCase();
        let compare = 0;

        if (itemA > itemB) {
          compare = 1;
        } else if (itemA < itemB) {
          compare = -1;
        }

        return compare;
      })
      this.setState({ sortKey })
    } else {
      data.sort((a, b) => {
        const itemA = a[`${sortKey}`].toUpperCase();
        const itemB = b[`${sortKey}`].toUpperCase();
        let compare = 0;

        if (itemA < itemB) {
          compare = 1;
        } else if (itemA > itemB) {
          compare = -1;
        }

        return compare;
      })
      this.setState({
        sortKey: ''
      })
    }

    console.log(data)
    this.setState({ data })
  }



  async onSortNum(event, sortKey) {


    const data = this.state.data;

    if (sortKey !== this.state.sortKey) {
      data.sort((a, b) => {
        const itemA = parseFloat(a[`${sortKey}`]);
        const itemB = parseFloat(b[`${sortKey}`]);
        let compare = 0;

        if (itemA > itemB) {
          compare = 1;
        } else if (itemA < itemB) {
          compare = -1;
        }

        return compare;
      })
      this.setState({
        sortKey: sortKey
      })
    } else {
      data.sort((a, b) => {
        const itemA = parseFloat(a[`${sortKey}`]);
        const itemB = parseFloat(b[`${sortKey}`]);
        let compare = 0;

        if (itemA < itemB) {
          compare = 1;
        } else if (itemA > itemB) {
          compare = -1;
        }

        return compare;
      })
      this.setState({
        sortKey: ''
      })
    }

    this.setState({
      data
    })
  }

  async onSortDate(event, sortKey) {
    const data = this.state.data;
    if (sortKey !== this.state.sortKey) {

      data.sort((a, b) => {
        const itemA = new Date(a[`${sortKey}`]);
        const itemB = new Date(b[`${sortKey}`]);
        let compare = 0;

        if (itemA > itemB) {
          compare = 1;
        } else if (itemA < itemB) {
          compare = -1;
        }

        return compare;
      })
      this.setState({
        sortKey
      })
    } else {
      data.sort((a, b) => {
        const itemA = new Date(a[`${sortKey}`]);
        const itemB = new Date(b[`${sortKey}`]);
        let compare = 0;

        if (itemA < itemB) {
          compare = 1;
        } else if (itemA > itemB) {
          compare = -1;
        }

        return compare;
      })
      this.setState({
        sortKey: ''
      })
    }
    this.setState({
      data: data
    })
  }


  render() {
    const newData = this.state.data;
    console.log(this.state.grouped)
    return (

      <>
        <Container className='full-list-wrapper'>
          <div className="headers">
            <div className="section-title">
              <h4>Full List</h4>
            </div>
            <div className="group-by-selection">
              <Link to='/grouped'>
                <div className="link-to-list">
                  Show Grouped
                </div>
              </Link>
            </div>
            <Link to='/'>
              <div className="control-button">
                <span>X</span>
              </div>
            </Link>
          </div>
          <div className="full-list-table">
            <table>
              <thead>
                <tr align='justify'>
                  <th onClick={e => this.onSort(e, '_id')}>ID {(this.state.sortKey === '_id') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSort(e, 'Change Day')}>Change Day {(this.state.sortKey === 'Change Day') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSort(e, 'Action')}>Action {(this.state.sortKey === 'Action') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSort(e, 'Recommendation Status')}>Recommendation Status {(this.state.sortKey === 'Recommendation Status') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSortNum(e, 'Area')}>Area {(this.state.sortKey === 'Area') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSortNum(e, 'Zone')}>Zone {(this.state.sortKey === 'Zone') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSortNum(e, 'Bank')}>Bank {(this.state.sortKey === 'Bank') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSortNum(e, 'Stand')}>Stand {(this.state.sortKey === 'Stand') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSortNum(e, 'NetWin')}>NetWin {(this.state.sortKey === 'NetWin') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSortNum(e, 'Old Denom')}>Old Denom {(this.state.sortKey === 'Old Denom') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSortNum(e, 'New Denom')}>New Denom {(this.state.sortKey === 'New Denom') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSortNum(e, 'Old Payback %')}>Old Payback {(this.state.sortKey === 'Old Payback') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSortNum(e, 'New Payback %')}>New Payback {(this.state.sortKey === 'New Payback') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSortNum(e, 'Asset')}>Asset {(this.state.sortKey === 'Asset') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                  <th onClick={e => this.onSortDate(e, 'Date')}>Date {(this.state.sortKey === 'Date') ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}</th>
                </tr>
              </thead>
              <tbody className='table-body'>
                {newData.map((item, i) => {
                  return <ListItem item={item} key={i} />
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </>
    )
  }
}
