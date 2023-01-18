import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  Group,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import styles from "../../styles/Home.module.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

const Clients = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  const pageSettings = { pageSize: 6 };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "body", headerName: "Body", flex: 1 },
    { field: "title", headerName: "Title" },
    { field: "userId", headerName: "UserID" },
  ];

  return (
    <div className="bg-blue-50">
      <Box m="20px">
        <Box
          m="40px 0 0 0"
          height="80vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: "#94e2cd",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#08679d",
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#cfefec",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: "red",
            },
            "& .MuiCheckbox-root": {
              color: `"#b7ebde" !important`,
            },
            "&. MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: "red",
            },
          }}
        >
          <DataGrid rows={data} columns={columns} components={{ Toolbar: GridToolbar }} />
        </Box>
      </Box>
    </div>
  );
};

export default Clients;
