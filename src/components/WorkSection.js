import React from "react";
import Portfolio from "./Portfolio";

class WorkSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://shoukrey.herokuapp.com/api/portfolio/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container px-4 py-5 my-5 w-100">
          <h1 className="display-5 fw-bold mb-5">My Work</h1>
          <div className="row justify-content-center">
            {items.map(item => (
              <Portfolio key={item.id} portfolio={item}/>
            ))}
          </div>
        </div>
      );
    }
  }

}

export default WorkSection;
