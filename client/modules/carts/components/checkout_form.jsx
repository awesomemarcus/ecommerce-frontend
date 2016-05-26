import React from 'react';

class CheckoutForm extends React.Component{

 handlePurchaseSubmit(e){
  e.preventDefault()
  const {firstName, lastName, email, address, city, zip} = this.refs;

  const clientInfo = {
   firstName: firstName.value,
   lastName: lastName.value,
   email: email.value,
   address: address.value,
   city: city.value,
   zip: zip.value,
  }

  this.props.onPurchaseSubmit(clientInfo);
  
 }

 render(){

  return (
   <div className="checkout-form">
    <div className="panel panel-default">
     <div className="panel-heading">
      <h4>CHECKOUT FORM</h4>
     </div>
     <div className="panel-body">
      <form action="">
       <div className="row">
        <div className="form-group col-md-6">
         <label htmlFor="FirstName">First Name:</label>
         <input type="text" ref="firstName" className="form-control"/>
        </div>
        <div className="form-group col-md-6">
         <label htmlFor="FirstName">Last Name:</label>
         <input type="text" ref="lastName" className="form-control"/>
        </div>
       </div>
       <div className="row">
        <div className="form-group col-md-6">
         <label htmlFor="Email">Email Address:</label>
         <input type="email" ref="email" name="email" id="" className="form-control"/>
        </div>
       </div>
       <div className="row">
        <div className="form-group col-md-12">
         <label htmlFor="Address">Complete Address:</label>
         <input type="text" ref="address" className="form-control"/>
        </div>
       </div>
       <div className="row">
        <div className="form-group col-md-6">
         <label htmlFor="City">City:</label>
         <input type="text" ref="city" className="form-control"/>
        </div>
        <div className="form-group col-md-6">
         <label htmlFor="zip">Zip Code:</label>
         <input type="text" ref="zip" className="form-control"/>
        </div>
       </div>
       <button className="btn btn-primary" onClick={this.handlePurchaseSubmit.bind(this)}>SUBMIT ORDER</button>
      </form>
     </div>
    </div>

   </div>
  );
 }
}

export default CheckoutForm;
