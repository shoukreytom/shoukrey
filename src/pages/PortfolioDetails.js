import React from "react";
import Header from "../components/Header";

class PortfolioDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: undefined,
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    const url = `https://shoukrey.herokuapp.com/api/portfolio/${id}/`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, item } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const urls = [];
      if (item.live_url) {
        urls.push(
          <div>
            <b>Live URL: </b>
            <a href={item.live_url}>{item.live_url}</a>
          </div>
        );
      }
      if (item.source_url) {
        urls.push(
          <div>
            <b>Source URL: </b>
            <a href={item.source_url}>{item.source_url}</a>
          </div>
        );
      }
      return (
        <div>
          <Header />
          <div className="container px-4 py-5 my-5 w-100">
            <img className="img-fluid" src={item.image} alt={item.title} />
            <h1 className="display-5 fw-bold">{item.title}</h1>
            <p className="lead ps-4">{item.description}</p>
            {urls}
          </div>
        </div>
      );
    }
  }
}

export default PortfolioDetails;
