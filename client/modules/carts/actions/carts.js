export default {
 Add({Meteor, LocalState, FlowRouter, Bert}, sessionId,title, price, quantity){
   Meteor.call('cartsAddItem', sessionId, title,price, quantity, (err) => {
    if(err){
     return Bert.alert(err.reason, 'danger', 'fixed-top', 'fa-frown-o');
    }

    return Bert.alert('Added to cart!', 'success', 'fixed-top', 'fa-check');
   })
 },

 totalPrice({} ,cartItems){
  var total = 0;


  cartItems.map( Item => {
   total += parseInt(Item.price);
  });
  
  return total;
 },
}
