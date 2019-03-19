import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Card from './components/Card'

class App extends Component {
  constructor() {
    super()

    this.state = {
      obj: [],
      visible: 5
    }

    this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3004/list/')
      .then(response => {
        this.setState({obj: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 1};
    });
  }

  render() {
    return (
      <div className='container'>
        {this.state.obj.slice(0, this.state.visible).map((item, index) => (
          <Card
            author={item.author.name}
            date={item.created_at}
            imgUrl={item.attachments[0] && item.attachments[0].variants.mini.url}
            title={item.title}
            rating={item.rating}
            key={index}
            votes={item.statistics.vote_count}
            answers={item.statistics.answer_count}
            views={item.statistics.view_count}
          >
            <div className="card--body" dangerouslySetInnerHTML={{__html: item.body}}></div>
          </Card>
        ))}

        {this.state.visible < this.state.obj.length &&
          <button className="load-more" onClick={this.loadMore} type="button">Load more</button>
        }
      </div>
    )
  }
}

export default App;
