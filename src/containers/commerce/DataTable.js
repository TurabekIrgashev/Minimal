import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F4F6F8",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "white",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, Product, Country, Total, Rank) {
  return { name, Product, Country, Total, Rank };
}

const rows = [
  createData(
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg",
      name: "Jayvion Simon",
      email: "nannie_abernathy70@yahoo.com",
    }, 
    "CAP", {img: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_de.svg"}, 16.19, "Top 1"),
  createData(
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_10.jpg",
      name: "Lucian Obrien",
      email: "ashlynn_ohara62@gmail.com",
    },  
    "Branded Shoes", {img: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_en.svg"}, 35.71, "Top 2"),
  createData(
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_12.jpg",
      name: "Deja Brady",
      email: "milo.farrell@hotmail.com",
    }, 
     "Headphone", {img: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_fr.svg"}, 34.30, "Top 3"),
  createData(
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_13.jpg",
      name: "Harrison Stein",
      email: "violet.ratke86@yahoo.com",
    }, 
     "Cell Phone", {img: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_kr.svg"}, 93.10, "Top 4"),
  createData(
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg",
      name: "Reece Chung",
      email: "letha_lubowitz24@yahoo.com",
    }, 
     "Earings", {img: "https://minimal-assets-api.vercel.app/assets/icons/ic_flag_us.svg"}, 55.47, "Top 5"),
];

export default function DataTable() {
  return (
    <Box sx={{boxShadow:
          "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        borderRadius: 2,
        backgroundColor: " rgb(255, 255, 255)",
        color: "rgb(33, 43, 54)",
        padding: 3,}}>
      <Typography variant='h5' sx={{fontWeight: "bold", mb: 3,}} >Best Salesman</Typography>
      <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell sx={{border: "none", outline: "none"}}>Seller</StyledTableCell>
            <StyledTableCell sx={{border: "none", outline: "none"}} align="left">Product</StyledTableCell>
            <StyledTableCell sx={{border: "none", outline: "none"}} align="left">Country</StyledTableCell>
            <StyledTableCell sx={{border: "none", outline: "none"}} align="left">Total</StyledTableCell>
            <StyledTableCell sx={{border: "none", outline: "none"}} align="left">Rank</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell sx={{border: "none", outline: "none"}} component="th" scope="row">
                <Box sx={{display: "flex", gap: 2}}>
                  <Box sx={{width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden"}}>
                    <img src={row.name.img} width= "50px" />
                  </Box>
                  <Box>
                    <Typography>{row.name.name}</Typography>
                    <Typography sx={{color: "gray"}}>{row.name.email}</Typography>
                  </Box>
                </Box>
              </StyledTableCell>
              <StyledTableCell sx={{border: "none", outline: "none"}} align="left">{row.Product}</StyledTableCell>
              <StyledTableCell sx={{border: "none", outline: "none"}} align="left"><img src={row.Country.img} /></StyledTableCell>
              <StyledTableCell sx={{border: "none", outline: "none"}} align="left">${row.Total}</StyledTableCell>
              <StyledTableCell sx={{border: "none", outline: "none"}} align="left"><Button variant='contained' sx={{opacity: 0.5,}} >{row.Rank}</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
