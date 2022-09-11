import { Card, CardContent, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext } from 'react';
import { cartStore } from './Home';

const Cart = () => {
    const [cartData, setCartData] = useContext(cartStore);
  return (
    <>
    {
        cartData.map((i) => 
        
        <Container maxWidth="lg">
      
      <Card sx={{
          background:'#eee',
          color:'#000',
          mt:2,
          
  
      }} >
          <CardContent sx={{display:'flex',
          flexDirection:'row', alignSelf:'center'}}>
              <Typography variant="h6" color="initial" sx={{flexGrow:1}}>
                  {i.items}
              </Typography>
              
              <Typography variant="h8" color="initial" sx={{alignSelf:'center'}}>
  
                  {i.cost}
              </Typography>
          </CardContent>
      </Card>
      </Container>
        
        )
    }
    </>
  )
}

export default Cart;