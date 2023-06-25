import {Component} from 'react'

import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {thumbNials, altThumb, uniqueNo, displayImage} = this.props

    const thumbNailTouch = () => {
      displayImage(uniqueNo)
    }
    return (
      <button type="button" onClick={thumbNailTouch}>
        <img src={thumbNials} alt={altThumb} />
      </button>
    )
  }
}

export default ThumbnailItem
