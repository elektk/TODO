import './App.css';
import { Component } from "react";
import PropTypes from 'prop-types'

const Card = ({ title, user, tag }) => {
  return (
    <div className="card">
      <textarea
        className="card__title"
        value={title}
        readOnly
      />
      <div className="card__info">
        <div className="avatar">{user}</div>
        <div>{tag}</div>
        <button className="delete">
          delete
        </button>
      </div>
    </div>
  );
};

class Wrapper extends Component {
  render() {
    const { type, title } = this.props;
    const classNames = [type, "colum-wrapper"];
    return (
      <div className={classNames.join(" ")}>
        <h2 className="colum-wrapper__title">{title}</h2>
        <Card
          title="..."
          message=""
          tag="go"
          user="A"
        />
        <button className="create-card">
          Create +
        </button>
      </div>
    );
  }
}

PropTypes.shape({
  title: PropTypes.string,
  message: PropTypes.string,
  tag: PropTypes.string,
  user: PropTypes.string,
});

Wrapper.propTypes = {
  type: PropTypes.oneOf(["to-do", "in-progress", "reviev", "done"]).isRequired,
};

function App() {
  return (
    <div className="app">
    <h1 className="title">Project Example</h1>
    <div className="desck">
    <Wrapper title={"To-do"} type="to-do" />
    <Wrapper title={"In-progress"} type="in-progress" />
    <Wrapper title={"Reviev"} type="reviev" />
    <Wrapper title={"Done"} type="done" />
    </div>
  </div>
  );
}

export default App;
