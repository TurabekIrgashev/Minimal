import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import GreenBtn from "../../src/components/GreenBtn";
import MainTitle from "../../src/components/mainTitle";
import NavBtns from "../../src/components/NavBtns";
import { listsMail, mailHeaderIcons, navBtnMail } from "../../src/data/mail";
import { AiOutlinePlus } from "react-icons/ai";
import ShadowBox from "../../src/components/ShadowBox";
import SimpleList from "../../src/components/Sidebar/SimpleList";
import MouseOverPopover from "../../src/components/Prower";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
export default function Mail() {
  const navBtnData = navBtnMail;
  const listData = listsMail;
  const headerIconsData = mailHeaderIcons;
  return (
    <>
      <MainTitle text="Mail" />
      <NavBtns data={navBtnData} />
      <Grid container spacing={3}>
        <Grid item sx={12} sm={4} md={3}>
          <ShadowBox
            sx={{
              width: "100%",
              height: "80vh",
              p: 0,
              overflowY: "auto",
            }}
          >
            <GreenBtn
              title={"Compose"}
              icon={<AiOutlinePlus />}
              sx={{
                mx: "auto",
                px: 5,
              }}
            />
            <Divider
              sx={{
                my: 3,
              }}
            />
            <List>
              {listData.map((l) => (
                <SimpleList data={l} />
              ))}
            </List>
          </ShadowBox>
        </Grid>
        <Grid item sx={12} sm={8} md={9}>
          <ShadowBox>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {headerIconsData.map((d) => (
                <MouseOverPopover icon={d.icon} prover={d.prover} />
              ))}
            </Box>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </ShadowBox>
        </Grid>
      </Grid>
    </>
  );
}
