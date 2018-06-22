import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'blue' };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    if (this.state.color === 'blue') {
        this.setState({ color: 'green' });
    } else {
        this.setState({ color: 'blue' });
    }
  }

  render() {
    return (<div>
              <h1 style={{color: this.state.color}}>Hi</h1>
              <button onClick={this.changeColor}>
                Change color
              </button>
            </div>);
  }
}

class Hobby extends React.Component {
  render() {
    return (<div>
              <p><strong>{this.props.category}</strong>:    {this.props.list}</p>
            </div>);
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg' };
    this.changeUrl = this.changeUrl.bind(this);
  }

  changeUrl() {
    if (this.state.url === 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg') {
        this.setState({ url: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01-400x267.jpg' });
    } else {
        this.setState({ url: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg' });
    }
  }

  render() {
    return (<div>
              <Header />
              <p> This is a paragraph about me</p>
              <h3>My Hobbies</h3>
              <Hobby category="Sports" list="Soccer, Basketball" />
              <img 
              alt="dog" src={this.state.url} />
              <button onClick={this.changeUrl}>
                Change picture
              </button>
            </div>);
  }
}

ReactDOM.render(<Profile />, document.getElementById('root'));