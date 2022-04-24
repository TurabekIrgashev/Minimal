import { Box, Button, Typography } from '@mui/material';
import React from 'react';
const numeral = require("numeral");

function CurrentBalance() {
    return (
        <Box sx={{boxShadow:
          "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        borderRadius: 2,
        backgroundColor: " rgb(255, 255, 255)",
        color: "rgb(33, 43, 54)",
        padding: 3,}}
        >
            <Typography variant='h6' sx={{fontWeight: "bold"}}>Your Current Balance</Typography>
            <Typography variant='h3' sx={{fontWeight: "bold", my: 2}}>{numeral(162150).format("$0,0")}</Typography>
            <Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography sx={{fontWeight: "bold", color: "gray"}}>Your Current Balance</Typography>
                    <Typography sx={{fontWeight: "bold", color: "gray"}}>{numeral(187650).format("$0,0")}</Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", my:2}}>
                    <Typography sx={{fontWeight: "bold", color: "gray"}}>Sent Amount</Typography>
                    <Typography sx={{fontWeight: "bold", color: "gray"}}>{numeral(-25500).format("$0,0")}</Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography sx={{fontWeight: "bold", color: "gray"}}>Total Amount</Typography>
                    <Typography sx={{fontWeight: "bold", }}>{numeral(162150).format("$0,0")}</Typography>
                </Box>
            </Box>
            <Box sx={{display: "flex", justifyContent: "space-between", mt: 3,}}>
                <Button variant='contained' color='warning' sx={{px: 7, py: 1, borderRadius: 2, }}>Transfer</Button>
                <Button variant='contained' color='success' sx={{px: 7, py: 1, borderRadius: 2, }}>Receive</Button>
            </Box>
        </Box>
    );
}

export default CurrentBalance;