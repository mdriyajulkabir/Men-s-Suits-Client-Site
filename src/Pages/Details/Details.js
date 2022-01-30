import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footerr from '../Footerr/Footerr';
import Header from '../Home/Header/Header';
import './Details.css'

const Details = () => {
  const { id } = useParams();
  const [service, setService] = useState({})
  useEffect(() => {
    fetch(`https://vast-gorge-26267.herokuapp.com/services/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, [])
  return (
    <div>
      <Header></Header>
                  <Container style={{paddingTop:'50px'}}>
              <Row>
                <Col>
                <h3 className="fw-bold "> {service.name}</h3>
                <p className="fw-bold ">{service.description}</p>
                <Row>
                <Col>
                <h1><i className="fas fa-dollar-sign"></i> {service.price}</h1>
                <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>  {service.rating}</p>
                </Col> <Col> <h5>Size:</h5> {service.size}</Col>
               
               <hr />
                <Col className='booking'>
                </Col>
              </Row>
               <Row>
                 <Col><i class="fas fa-medal"></i> Extended warranty</Col>
               </Row>
               <Row>                
               <Col> <img style={{width:'20px'}} src="https://cdn-icons-png.flaticon.com/512/411/411763.png" alt="" />  Free shipping over $49 + free returns & exchanges</Col>
               </Row>
               <Row>                
               <Col><i class="far fa-star"></i>  100% Original and quality</Col>
               </Row> <br />
               <Row>
               <Col className='booking'>
               {/* <Link to='/form'> */}
               <Link className='details d-flex align-items-center justify-content-center rounded-pill py-3 ' style={{ textDecoration:'none'}} to={`/purchase/${service._id}`}>Buy Now</Link>
               {/* </Link> */}
                </Col>
               </Row>
                </Col>
                
                <Col>
                <img src={service.img} className="card-img-top h-100 w-100 " alt="" />
                </Col>
              </Row>
            </Container>
      <Footerr></Footerr>
    </div>
  );
};

export default Details;