import React from 'react'
import PropTypes from 'prop-types'
import { IoIosStar } from 'react-icons/io';

class Rating extends React.Component{
  renderStar(numb) {
    return (
      <span className="card--rating-star" key={numb + 1}>
        <IoIosStar />
      </span>
    )
  }

  render() {
    const {
      value
    } = this.props

    let stars = []
    for(let i = 0;i < value;i++){
      stars.push(i)
    }
    return (
      <div className="card--rating">
        {stars.map(this.renderStar)}
      </div>
    )
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Rating
