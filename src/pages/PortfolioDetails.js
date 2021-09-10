import React from "react";
import Header from "../components/Header";

class PortfolioDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: undefined,
      screenshots: [],
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    const url = `https://shoukrey.herokuapp.com/api/portfolio/${id}/`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      this.setState({isLoaded: true, item: data});
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
    fetch(`${url}screenshots/`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({screenshots: data});
    });
  }

  render() {
    const { error, isLoaded, item, screenshots } = this.state;
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
            <h1 className="display-5 fw-bold my-4">{item.title}</h1>
            <p className="lead ps-4">{item.description}</p>
            {urls}
            <div className="container py-5 w-100">
              <h1>Screenshots</h1>
              {screenshots.map(item => (
                <div className="row w-100">
                  <div className="col m-4">
                    <img className="img-fluid" key={item.id} src={item.image} alt={`screenshot ${item.id}`}/>
                  </div>
                </div>
            ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PortfolioDetails;
