import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CustomImageList from "./Images";
import CardActions from "@mui/material/CardActions";

export default function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Card sx={{ minWidth: 275 }}>
          <CardContent style={{ color: "white", backgroundColor: "orange" }}>
            <Typography variant="h3" component="div" style={{ color: "blue" }}>
              Home Design Ecommerce
            </Typography>
            <Typography
              sx={{ m: 1 }}
              style={{ color: "white", fontFamily: "ariel" }}
            >
              Campus Bookstore
            </Typography>
            <Typography variant="h6" component="div">
              You can customize a PROGRAM SWEATER (Hoodie or Crewneck) at the
              Campus store. We have 8 colors to choose from, minimum order of 12
              pieces. Get an additional 20% discount on the order. For more
              information please contact the Campus store.
            </Typography>
            <CardActions>
              <Button
                style={{ backgroundColor: "white", fontFamily: "ariel" }}
                size="large"
              >
                Shop Here
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Container>

      <Container>
        <Typography sx={{ m: 3 }}>
          <div style={{ backgroundColor: "white", color: "orange" }}>
            You can customize a PROGRAM SWEATER (Hoodie or Crewneck) at the
            Campus store. We have 8 colors to choose from, minimum order of 12
            pieces. Get an additional 20% discount on the order. For more
            information please contact the Campus store.
          </div>
        </Typography>
        <CustomImageList />
      </Container>
    </React.Fragment>
  );
}
