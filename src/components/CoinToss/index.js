// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, count: 0, isHead: true}

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        heads: prevState.heads + 1,
        count: prevState.count + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        isHead: false,
        tails: prevState.tails + 1,
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {heads, tails, count, isHead} = this.state
    const imageUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="coin-toss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="total-count-container">
            <p className="total-text">Total: {count}</p>
            <p className="total-text">Heads: {heads}</p>
            <p className="total-text">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
