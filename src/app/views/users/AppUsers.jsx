import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import Users from "./Users";
const Container = styled("div")(({ theme }) => ({
    margin: "30px",
    [theme.breakpoints.down("sm")]: { margin: "16px" },
    "& .breadcrumb": {
      marginBottom: "30px",
      [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
    },
  }));

  const AppUsers = () => {
    return (
      <Container>
        <Box className="breadcrumb">
          <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Table" }]} />
        </Box>
  
        <SimpleCard title="Simple Table">
          <Users />
        </SimpleCard>
  
        
      </Container>
    );
  };
  
  export default AppUsers;
  