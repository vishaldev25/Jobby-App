import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import {MdLocationOn, MdWork} from 'react-icons/md'

import './index.css'

const JobsCard = props => {
  const {individualJobs} = props
  const {
    id,
    title,
    location,
    rating,
    companyLogoUrl,
    employmentType,
    jobDescription,
    packagePerAnnum,
  } = individualJobs
  return (
    <li className="jobs-card-list-container">
      <Link to={`/jobs/${id}`} className="link-item">
        <div className="jobs-card-title-rating-image-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="jobs-card-image"
          />
          <div className="jobs-card-title-rating-container">
            <h2 className="jobs-card-title-heading">{title}</h2>
            <p className="jobs-card-rating">
              <span>
                <FaStar className="star-icon" />
              </span>
              {rating}
            </p>
          </div>
        </div>
        <div className="jobs-card-details-container">
          <div className="jobs-card-location-emoloy-container">
            <p className="jobs-card-location-para">
              <MdLocationOn className="location-icon" />
              {location}
            </p>
            <p className="jobs-card-emoloy-para">
              <MdWork className="employ-icon" />
              {employmentType}
            </p>
          </div>
          <p className="jobs-card-package-para">{packagePerAnnum}</p>
        </div>
        <hr className="horizantal" />
        <div className="jobs-card-Description-cont">
          <h2 className="jobs-card-desc-heading">Description</h2>
          <p className="jobs-card-desc">{jobDescription}</p>
        </div>
      </Link>
    </li>
  )
}

export default JobsCard
