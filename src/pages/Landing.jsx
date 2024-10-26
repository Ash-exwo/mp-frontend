import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/wavy-gradient.png'
import { Card } from 'react-bootstrap'
import feature1 from '../assets/cardimg1.jpg'
import feature2 from '../assets/cardimg2.jpg'
import feature3 from '../assets/cardimg3.jpg'
const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      {/* landing head */}
      <div className='row align-items-center'>
        <div className="col-lg-5">
          <h3>Welcome To <span className='text-info'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }} className='mt-3'>
            Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!
          </p>
          <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img src={landingImg} className='img-fluid ms-5' alt="" />
        </div>
      </div>
      {/* features */}
      <div className="m-5">
        <h3 className="text-center">Features</h3>
        <div className="row m-5">
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remmove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categories Videos</Card.Title>
                <Card.Text>
                  Users can categrorise the videos by drag and drop feature.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img height={'250px'} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing Video History</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className="m-5 row align-items-center border rounded p-5">
        <div className="col-lg-5 ">
          <h3 className='text-info'>Simple, Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}> <span className='fs-5'>Play Everything : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis exercitationem repudiandae delectus facere quasi autem aliquam sit quia. Dolores consequuntur officiis modi nulla ullam culpa tempore, doloribus deserunt dolorum!</p>
          <p style={{textAlign:'justify'}}> <span className='fs-5'>Categories Videos : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis exercitationem repudiandae delectus facere quasi autem aliquam sit quia. Dolores consequuntur officiis modi nulla ullam culpa tempore, doloribus deserunt dolorum!</p>
          <p style={{textAlign:'justify'}}> <span className='fs-5'>Check History : </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea reiciendis exercitationem repudiandae delectus facere quasi autem aliquam sit quia. Dolores consequuntur officiis modi nulla ullam culpa tempore, doloribus deserunt dolorum!</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/wPwzBUui1GA" title="The Color Purple | Official Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing