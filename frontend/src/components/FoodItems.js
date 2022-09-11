import { Box, Button, Card, CardContent, Typography, Container, Stack } from '@mui/material';
import React, { useContext, useState } from 'react';
import { cartStore, DummyData } from '../screens/Home';

const FoodItems = (props) => {
    const [itemCount, setItemCount] = useState(0);
    // const [incrementCount, setIncrementCount] = useState(0);
    // const [decrementCount, setDecrementCount] = useState(null);
    const [cartData, setCartData] = useContext(cartStore);
    const [disabledHandler, setDisabledHandler] = useState(false)

    const itemDecrementHandler = (e) => {
        itemCount!=0 &&
        setItemCount(itemCount-1)

    }
    const itemIncrementHandler = (e) => {
        setItemCount(itemCount+1)
        //  DummyData.map((i) => (i.item_id === props.id)?setCartData([...cartData, {id:i.item_id, items:i.items, cost:i.cost}]):null)
        
    }

    const addItemHandler = (e) => {
        setDisabledHandler(true);
    }
    

  return (
    <>
    <Container maxWidth="lg">
      
    <Card sx={{
        background:'#eee',
        color:'#000',
        mt:2,
        

    }} key={props.id}>
        <CardContent sx={{display:'flex',
        flexDirection:'row', alignSelf:'center'}}>

            <Typography variant="h6" color="initial" sx={{flexGrow:1}}>
                {props.item}
            </Typography>
            <Box>
                <Button id='addButton' disabled={disabledHandler} onClick={addItemHandler}>Add</Button>
            </Box>
            <Box className='quantity-button' sx={{alignSelf:'center', border:'1px solid #ddd', mr:5}}>
                <Button onClick={itemDecrementHandler} sx={{ color:'red', fontSize:18, fontWeight:700}}>-</Button>{itemCount}
                <Button onClick={itemIncrementHandler} sx={{ color:'green', fontSize:18, fontWeight:700}}>+</Button>
            </Box>

            <Typography variant="h8" color="initial" sx={{alignSelf:'center'}}>
                {props.cost}
            </Typography>

            
            
        </CardContent>
    </Card>
    </Container>

    </>
  )
}

export default FoodItems;