// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, isTimeInSeconds: 0}

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, isTimeInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  timer = () => {
    this.setState(prevState => ({
      isTimeInSeconds: prevState.isTimeInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.timer, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {isTimeInSeconds} = this.state
    const seconds = Math.floor(isTimeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {isTimeInSeconds} = this.state
    const minutes = Math.floor(isTimeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="inner-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <p className="timer">Timer</p>
            </div>
            <div className="timer-displayed">
              <h1 className="time">{time}</h1>
              <div>
                <button
                  className="start-btn"
                  type="button"
                  onClick={this.onStartTimer}
                  disabled={isTimerRunning}
                >
                  Start
                </button>
                <button
                  className="stop-btn"
                  type="button"
                  onClick={this.onStopTimer}
                >
                  Stop
                </button>
                <button
                  className="reset-btn"
                  type="button"
                  onClick={this.onResetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
