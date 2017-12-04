import React, { PropTypes, Component } from 'react'
import '../styles/hotel.css'



export default class Hotel extends Component {
  constructor(props) {
    super(props);
  }


  render() {


    return (
      <div>
        <h3>{this.props.slug}</h3>
        <img src={this.props.images.fixed_height_still.url} />
        {/*<div className="hotel-row row well">
          <div className="hotel-row-img col-md-4">
            <div className="img-container">
              <img src={this.props.images[0]} />
            </div>
          </div>
          <div className="col-md-8">
            <div className="hotel-header row">
              <div className="pull-left">
                <h3>{this.props.name}</h3>
                <span>{this.props.city} - {this.props.country}</span>
              </div>
              <div className="hotel-stars pull-right">
                  {rating.map((star,i) => <i key={i}>{star}</i>)}
              </div>
            </div>
            <div className="row hotel-body">
              <p> {this.props.description} </p>
            </div>

            <div className="row">
              <div className="pull-left">
                  <button className="btn btn-default" onClick={this.showReviews}>{reviewsButtonText}</button>
              </div>
              <div className="pull-right hotel-footer-right">
                <span className="hotel-price">{this.props.price} {'\u20AC'}</span>
                <span>{(new Date(this.props.date_start)).toLocaleDateString('de-DE')} - {(new Date(this.props.date_end)).toLocaleDateString('de-DE')} </span>
              </div>
            </div>

          </div>
        </div>
        <div>
          {this.state.showingReviews &&
            <Reviews reviews={this.props.reviews} />
          }
        </div>*/}
      </div>
    )
  }
}

Hotel.propTypes = {
  name: PropTypes.string.isRequired
}
