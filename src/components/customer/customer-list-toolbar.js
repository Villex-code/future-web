import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Search as SearchIcon } from "../../icons/search";
import { Upload as UploadIcon } from "../../icons/upload";
import { Download as DownloadIcon } from "../../icons/download";
import { handleFile, upload } from "./fileReader";

export const CustomerListToolbar = (props) => (
  <>
    <Box {...props}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Customers
        </Typography>

        <Box sx={{ m: 1 }}>
          <form>
            <input
              type="file"
              id="file-input"
              name="file"
              accept=".csv,.xls,.xlsx"
              onChange={(event) => handleFile(event.target.files[0])}
            />
            {/* {<Button type="submit" startIcon={<UploadIcon fontSize="small" />} sx={{}}>
            Import
          </Button>} */}
            {/* {<Button startIcon={<DownloadIcon fontSize="small" />} sx={{ mr: 1 }}>
            Export
          </Button>} */}
            <Button type="submit" color="primary" variant="contained">
              Add Customers
            </Button>
          </form>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  </>
);
