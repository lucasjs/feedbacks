import React from 'react'
import PropTypes from 'prop-types'
import Rating from './Rating'
import TimeAgo from 'react-timeago'
import {
  FaComment,
  FaEye,
  FaHeart
} from 'react-icons/fa';

const Card = ({
  answers,
  author,
  children,
  date,
  imgUrl,
  rating,
  title,
  views,
  votes
}) => {
  return (
    <section className="card">
      <header className="card--header">
        {imgUrl &&
          // eslint-disable-next-line
          <img src={imgUrl} alt={`${author}'s profile picture.`} className="card--profile-picture" />
        }
        <div>
          <span className="card--author">{author}</span>
          <span className="card--date">
            <TimeAgo date={date} />
          </span>
        </div>
      </header>
      <div>
        <span className="card--title">{title}</span>
        <Rating value={rating} />
      </div>
      {children}
      <footer className="card--stats">
        <span className="card--stats-stat"><FaHeart />{votes}</span>
        <span className="card--stats-stat"><FaComment /> {answers}</span>
        <span className="card--stats-stat"><FaEye />{views}</span>
      </footer>
    </section>
  )
}

Card.propTypes = {
  answers: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired
}

Card.defaultProps = {
  imgUrl: ''
}

export default Card
