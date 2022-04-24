import React from 'react';
import { Avatar, AvatarGroup, Box, Button, Typography } from '@mui/material';

function LatestProducts() {
    return (
        <Box sx={{boxShadow:
            "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
            borderRadius: 2,
            backgroundColor: " rgb(255, 255, 255)",
            color: "rgb(33, 43, 54)",
            padding: 3,}}>
            <Typography variant='h5' sx={{fontWeight: "bold", mb: 3,}}>Latest Products</Typography>
            <Box>
                <Box sx={{display: "flex", justifyContent: "space-between", mb: 3,}}>
                    <Box sx={{display: "flex", gap: 2}}>
                        <Box sx={{width: "50px", height: "50px", borderRadius: "12px", overflow: "hidden"}}>
                            <img src='https://minimal-assets-api.vercel.app/assets/images/products/product_1.jpg' width={50} height={50} />
                        </Box>
                        <Box>
                            <Typography>Small Granite Computer</Typography>
                            <Typography sx={{color: "gray"}}>$16.19</Typography>
                        </Box>
                    </Box>
                    <AvatarGroup total={4} >
                        <Avatar sx={{background: "green",}} />
                        <Avatar sx={{background: "red",}} />
                        <Avatar sx={{background: "orange",}} />
                    </AvatarGroup>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", mb: 3,}}>
                    <Box sx={{display: "flex", gap: 2}}>
                        <Box sx={{width: "50px", height: "50px", borderRadius: "12px", overflow: "hidden"}}>
                            <img src='https://minimal-assets-api.vercel.app/assets/images/products/product_2.jpg' width={50} height={50} />
                        </Box>
                        <Box>
                            <Typography>Small Rubber Mouse</Typography>
                            <Box sx={{display: "flex", gap: 1}}>
                                <Typography sx={{color: "gray"}} ><del>$35.71</del></Typography>
                                <Typography sx={{color: "red"}} >35.71</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <AvatarGroup total={4} >
                        <Avatar sx={{background: "green",}} />
                        <Avatar sx={{background: "red",}} />
                        <Avatar sx={{background: "orange",}} />
                    </AvatarGroup>
                </Box>
                 <Box sx={{display: "flex", justifyContent: "space-between", mb: 3,}}>
                    <Box sx={{display: "flex", gap: 2}}>
                        <Box sx={{width: "50px", height: "50px", borderRadius: "12px", overflow: "hidden"}}>
                            <img src='https://minimal-assets-api.vercel.app/assets/images/products/product_3.jpg' width={50} height={50} />
                        </Box>
                        <Box>
                            <Typography>Awesome Rubber Hat</Typography>
                            <Box sx={{display: "flex", gap: 1}}>
                                <Typography sx={{color: "gray"}} ><del>$34.30</del></Typography>
                                <Typography sx={{color: "red"}} >$34.30</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <AvatarGroup total={4} >
                        <Avatar sx={{background: "green",}} />
                        <Avatar sx={{background: "red",}} />
                        <Avatar sx={{background: "orange",}} />
                    </AvatarGroup>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", mb: 3,}}>
                    <Box sx={{display: "flex", gap: 2}}>
                        <Box sx={{width: "50px", height: "50px", borderRadius: "12px", overflow: "hidden"}}>
                            <img src='https://minimal-assets-api.vercel.app/assets/images/products/product_4.jpg' width={50} height={50} />
                        </Box>
                        <Box>
                            <Typography>Sleek Cotton Sausages</Typography>
                            <Typography sx={{color: "gray"}}>$93.10</Typography>
                        </Box>
                    </Box>
                    <AvatarGroup total={4} >
                        <Avatar sx={{background: "green",}} />
                        <Avatar sx={{background: "red",}} />
                        <Avatar sx={{background: "orange",}} />
                    </AvatarGroup>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", mb: 3,}}>
                    <Box sx={{display: "flex", gap: 2}}>
                        <Box sx={{width: "50px", height: "50px", borderRadius: "12px", overflow: "hidden"}}>
                            <img src='https://minimal-assets-api.vercel.app/assets/images/products/product_5.jpg' width={50} height={50} />
                        </Box>
                        <Box>
                            <Typography>Rustic Wooden Chicken</Typography>
                            <Box sx={{display: "flex", gap: 1}}>
                                <Typography sx={{color: "gray"}} ><del>$55.47</del></Typography>
                                <Typography sx={{color: "red"}} >$55.47</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <AvatarGroup total={4} >
                        <Avatar sx={{background: "green",}} />
                        <Avatar sx={{background: "red",}} />
                        <Avatar sx={{background: "orange",}} />
                    </AvatarGroup>
                </Box>
            </Box>
        </Box>
    );
}

export default LatestProducts;