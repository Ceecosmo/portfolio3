import React from 'react'
import pic1 from '../assets/images/fada10.jpeg';
import pic2 from '../assets/images/fada15.jpeg';
import pic3 from '../assets/images/fada12.jpeg';
import pic4 from '../assets/images/fada11.jpeg';

function Card() {
// an Array of objects
const CardData = [
  { image: pic1, title: 'ANGLICAN ARCHBISHOP & BISHOP PAULINUS EZEOKAFOR', content_text: 'Anglican Archbishop and Bishop Paulinus Ezeokafor with some of the clergies taking a snapshot after the ceremony...' },
  { image: pic2, title: 'MASS CELEBRATED IN THE CHURCH BY THE TWO CLERGIES TWO CLERGIES', content_text: 'The Anglican Archbishop and Bishop Paulinus Ezeokafor blessing the kola nut and sharing discussion during the Visitation...' },
  { image: pic3, title: 'ANGLICAN ARCHBISHOP & BISHOP PAULINUS EZEOKAFOR', content_text: 'The Bishop Paulinus Ezeokafor with some of the clergies and other Attendants taking a snapshot after the ceremony...' },
  { image: pic4, title: 'ANGLICAN ARCHBISHOP & BISHOP PAULINUS EZEOKAFOR', content_text: 'Anglican Archbishop and Bishop Paulinus Ezeokafor blessing the kola nut and sharing discussion during the Visitation...' }
 
  // Add more card data objects as needed
];

 
  return (
    <>
<div className="container-fluid">
<div className="row">
{CardData.map((Card, index) => (
 
<div className="col-md-3 mb-3 " data-aos="fade-up">

<div className="card">

  <img src={Card.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title ">{Card.title}</h4>
    <p className="card-text">{Card.content_text}
    <a href="/Service" className="text-danger" style={{textDecoration:'none'}}>Read more</a></p>
              
            
              </div> 
              </div>
              </div>



))}

</div>
</div>  
    </>
  )
}

export default Card