import { ClassNames } from "@emotion/react";
import { Box, Button, Card, CardContent, Divider, IconButton, InputBase, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { createContext, useContext, useState } from "react";
import FoodItems from "../components/FoodItems";

export const DummyData = [
    {
        item_id:123,
        items:'Chicken Dum Biryani',
        cost:300
    },
    {
        item_id:1234,
        items:'Mutton Dum Biryani',
        cost:500
    },
    {
        item_id:1235,
        items:'Chicken fry Biryani',
        cost:400
    },
    {
        item_id:1236,
        items:'Mutton fry Biryani',
        cost:600
    },
    {
        item_id:1237,
        items:'Family Chicken Dum Biryani',
        cost:900
    },
    {
        item_id:1238,
        items:'Family Mutton Dum Biryani',
        cost:1500
    },
    {
        item_id:1239,
        items:'Family Chicken Fry Biryani',
        cost:1200
    },
    {
        item_id:12321,
        items:'Family Mutton Fry Biryani',
        cost:1800
    },
    
];

export const cartStore = createContext();

const Home = () => {
    const [dummyData, setDummyData] = useState(DummyData);
    const [cartData, setCartData] = useState([]);
    const [colorChange, setColorChange] = useState("yellow");

    const rakeshHandler = (e) => {
      console.log("name")
      setColorChange("green")
    }

  return (
    <>
    <cartStore.Provider value={[cartData, setCartData]}>
      <Box
        sx={{
          backgroundImage:
            "url(" +
            "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "500px",
        //   top:0,margin:0,
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          mb:18
        }}
      ><Container sx={{display:'flex', flexDirection:"column", mt:34 , justifyContent:'center'}}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            ml: 5,
            mb:10,
            display: "flex",
            alignSelf: "center",
            justifyItems:"end",
            width: 600,
            boxShadow:15
            
          }}
        >
          <Button onClick={rakeshHandler} className={colorChange?classes.touched:classes.notTouched}>Rakesh</Button>
          <InputBase
            sx={{ ml: 1, flex: 1, fontSize:24 }}
            placeholder="Search for Restaurant, Cuisine or a Dish"
            inputProps={{
              "aria-label": "search for restaurant, cuisine or a dish  ",
            }}
          />
          {/* <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton> */}
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            {/* <DirectionsIcon /> */}
          </IconButton>
        </Paper>
        
        <Card
          sx={{
            width: 800,
            height: 300,
            alignSelf: "center",
            justifyContent:'center',
            
            // position:'absolute',
            backgroundImage:
              "url(" +
              "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            boxShadow: 10,
            borderRadius:10
          }}
        >
          <CardContent>
            <Typography
              variant="h2"
              component="div"
              sx={{ color: "#fff", mt:15, fontWeight:500 }}
            >
              Hungry?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 1.5,
                mt: 2,
                color: "#fff",
                fontWeight: 600,
                lineHeight: 2,
              }}
            >
              Order food from favourite restaurants near you.
            </Typography>
          </CardContent>
        </Card></Container>
        </Box>
        {dummyData.map(i => (
        <FoodItems 
        id={i.item_id}
        item={i.items}
        cost={i.cost}
        
         />)) 
        }
 
</cartStore.Provider>
    </>
  );
};

export default Home;
