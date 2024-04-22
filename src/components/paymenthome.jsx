import React from 'react'
import axios from 'axios'



    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {

        try{
          

          const response = await axios.post('https://priestwelfare.onrender.com/initiate-payment/', formData);
          console.log('Form submitted:', response.data);
          //Assuming the form submission was successful, you can handle it here
           // Process form submission
        alert('Message sent Successfully');
        
        //page reload
        // window.location.reload();
        } catch (error) {
          console.error('Error submitting Form:', error);
          //Handle error accordingly


           // console.log(formData);
        // Redirect to another page
        //page reload
        // window.location.href = '/Contact';
        }
       
        
        
      }
    };



 


function paymenthome() {
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <br></br> <br></br> <br></br><br></br> <br></br> <br></br>
      <div className='text-center'>
    <h6 className="display-6 fw-bold 1h-1 mb-3 ">Welcome to Priests' Welfare Home</h6>
    
<h4 className="fw-bold text-center">WE HONOUR YOUR PRESENCE</h4>
<br></br> <br></br> 

<a href="https://priestwelfareadmin.onrender.com/initiate-payment/" className="btn btn-danger lg">PLEASE SUPPORT US<i className="fa fa-arrow-right ms-3 me-3"></i></a>
</div>
<br></br> <br></br> <br></br><br></br> <br></br> <br></br> 
</form> 
    </>
  )
}

export default paymenthome 


