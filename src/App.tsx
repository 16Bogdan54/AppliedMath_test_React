import Navbar from "./components/nav/Navbar"
import Matrix from "./components/matrix/Matrix"
import GaussianMethodArticle from "./articles/GaussianMethodArticle"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const App = () => {

  return (
    <div>
      <Navbar/>
      <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Matrix rows={3} cols={4}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <GaussianMethodArticle/>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default App
