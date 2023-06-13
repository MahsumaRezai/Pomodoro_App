
import { Component } from "react";
import { render } from "react-dom";
import { Materialize } from 'react';
import { Ref } from "react";
import './time.css';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.reduceOnSecond = this.reduceOnSecond.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.increaseSessionValue = this.increaseSessionValue.bind(this);
    this.decreaseSessionValue = this.decreaseSessionValue.bind(this);
    this.increaseBreakValue = this.increaseBreakValue.bind(this);
    this.decreaseBreakValue = this.decreaseBreakValue.bind(this);
    this.togglePauseState = this.togglePauseState.bind(this);
    this.state = {
      intervalID: null,
      countdown: 900,
      session: 900,
      break: 300,
      displayedMinutes: '',
      displayedSeconds: '',
      isPaused: true,
      isSession: true,
      isBreak: false
    };
  }

  pauseTimer() {
    clearInterval(this.state.intervalID);
  }

  increaseSessionValue() {
    if (this.state.session < 3600) {
      this.setState({
        session: this.state.session + 60,
        countdown: this.state.session + 60
      }, () => this.renderMinChange());
    }
    else {
      Materialize.toast('You reached the maximum', 4000, 'rounded')
    }
  }

  decreaseSessionValue() {
    if (this.state.session > 900) {
      this.setState({
        session: this.state.session - 60,
        countdown: this.state.session - 60
      }, () => this.renderMinChange());
    }
    else {
      Materialize.toast('You reached the minimum', 4000, 'rounded')
    }
  }

  increaseBreakValue() {
    if (this.state.break < 900) {
      this.setState({
        break: this.state.break + 60,
      });
    }
    else {
      Materialize.toast('You reached the maximum', 4000, 'rounded')
    }
  }

  decreaseBreakValue() {
    if (this.state.break > 300) {
      this.setState({
        break: this.state.break - 60,
      });
    }
    else {
      Materialize.toast('You reached the minimum', 4000, 'rounded')
    }
  }

  componentWillMount() {
    this.renderMinChange();
  }

  renderMinChange(number = this.state.countdown) {
    const countdown = number
    const minutes = Math.floor(number / 60);
    const seconds = number % 60;
    const displayedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    const displayedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();

    this.setState({
      countdown,
      displayedMinutes,
      displayedSeconds
    });
  }

  reduceOnSecond() {
    this.renderMinChange(--this.state.countdown);
  }

  togglePauseState() {
    this.setState({
      isPaused: !this.state.isPaused
    });
  }

  startCountdown() {
    if (this.state.isPaused) {
      this.renderMinChange();
      this.setState({
        intervalID: window.setInterval(this.reduceOnSecond, 1000),
        isPaused: !this.state.isPaused,
      });

    }
    else {
      this.pauseTimer();
      this.setState({
        isPaused: !this.state.isPaused
      });
    }
  }

  componentDidUpdate() {
    if (this.state.countdown < 0 && this.state.isSession) {
      this.setState({
        isSession: !this.state.isSession,
        isBreak: !this.state.isBreak,
        countdown: this.state.break,
      }, () => this.renderMinChange());
    }
    else if (this.state.countdown < 0 && this.state.isBreak) {
      this.pauseTimer();
      this.setState({
        isSession: !this.state.isSession,
        isBreak: !this.state.isBreak,
        countdown: this.state.session,
        isPaused: !this.state.isPaused
      }, () => this.renderMinChange() && this.startCountdown());
    }
  }

  render() {
    return (
      <div className="card waves-effect waves-block waves-light">
        <div className="pomodoro">
          <SettingsArea
            session={this.state.session}
            break={this.state.break}
            increaseSessionValue={this.increaseSessionValue}
            decreaseSessionValue={this.decreaseSessionValue}
            increaseBreakValue={this.increaseBreakValue}
            decreaseBreakValue={this.decreaseBreakValue}
            togglePauseState={this.togglePauseState}
          />
          <Timer
            startCountdown={this.startCountdown}
            displayedMinutes={this.state.displayedMinutes}
            displayedSeconds={this.state.displayedSeconds}
            pauseTimer={this.pauseTimer}
          />
        </div>
      </div>
    );
  }
}

class SettingsArea extends Component {

  handleBtnClick() {
    [
      this.refs.setsArea,
      document.getElementById('timer')
    ]
      .forEach(el => {
        el.classList.add('rotateB');
        setTimeout(
          () => el.classList.remove('rotateF', 'rotateB'),
          250
        );
      });
    this.props.togglePauseState();
  }

  render() {
    return (
      <div ref="setsArea" className="pomodoro__settings-area" id="setsArea">
        <SessionSetting
          session={this.props.session}
          increaseSessionValue={this.props.increaseSessionValue}
          decreaseSessionValue={this.props.decreaseSessionValue}
        />
        <BreakSetting
          break={this.props.break}
          increaseBreakValue={this.props.increaseBreakValue}
          decreaseBreakValue={this.props.decreaseBreakValue}
        />
        <button
          onClick={this.handleBtnClick.bind(this)}
          className="pomodoro__confirm-sets">Here we go!
        </button>
      </div>
    );
  }
}

const SessionSetting = (props) => {
  return (
    <div className="pomodoro__setting-box pomodoro__setting-box_session">
      <div className="pomodoro__setting">
        <div onClick={props.increaseSessionValue} className="pomodoro__increase-duration">
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </div>
        <div className="pomodoro__session-duration">{props.session / 60}</div>
        <div onClick={props.decreaseSessionValue} className="pomodoro__decrease-duration">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

const BreakSetting = (props) => {
  return (
    <div className="pomodoro__setting-box pomodoro__setting-box_break">
      <div className="pomodoro__setting">
        <div onClick={props.increaseBreakValue} className="pomodoro__increase-duration">
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </div>
        <div className="pomodoro__break-duration">{props.break / 60}</div>
        <div onClick={props.decreaseBreakValue} className="pomodoro__decrease-duration">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

class Timer extends Component {

  handleIconClick() {
    this.props.pauseTimer();
    [
      this.refs.timer,
      document.getElementById('setsArea')
    ]
      .forEach(el => el.classList.add('rotateF'));
  }

  render() {
    console.log(this.props);
    const { startCountdown, displayedMinutes, displayedSeconds } = this.props;
    return (
      <div ref="timer" className="pomodoro__timer" id="timer">
        <div onClick={this.handleIconClick.bind(this)} ref="icon" className="pomodoro__settings-area-icon">
          <i className="fa fa-cog" aria-hidden="true"></i>
        </div>
        <div onClick={startCountdown} className="pomodoro__timer-display"> {displayedMinutes}:{displayedSeconds}
        </div>
      </div>
    );
  }
}

render(
  <Pomodoro />,
  document.getElementById('root')
);

export default Pomodoro;