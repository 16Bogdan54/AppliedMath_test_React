import Navbar from "./components/nav/Navbar"
import Matrix from "./components/matrix/Matrix"
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const App = () => {

  return (
    <div>
      <Navbar/>
      <Grid className="pt-20 p-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
            <Typography variant="h5">The Gaussian method</Typography>
            <Matrix rows={3} cols={4}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
