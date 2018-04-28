import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProperties } from '../../actions';
class PropertyList extends Component {
  componentDidMount() {
    this.props.fetchProperties();
  }
  renderProperties() {
    const { userProperties } = this.props;
    return userProperties.reverse().map(item => {
      return (
        <div key={item._id}>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <input type="radio" style={{ marginLeft: '10px' }} name="option" />
            <h6>{item.address}</h6>
            <div className="d-flex">
              <Link
                to="/projects/edit"
                className="btn btn-sm btn-raised btn-primary"
              >
                EDIT
              </Link>
              <Link
                className="btn btn-sm btn-raised btn-info"
                style={{ marginLeft: '10px' }}
                to={{
                  pathname: '/projects/map',
                  state: {
                    address: `${item.address}`,
                  }
                }}
              >
                VIEW MAP
              </Link>
            </div>
          </li>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Building Profiles</h2>
        {this.renderProperties()}
      </div>
    );
  }
}
function mapStateToProps({ userProperties }) {
  return { userProperties };
}
export default connect(mapStateToProps, { fetchProperties })(PropertyList);