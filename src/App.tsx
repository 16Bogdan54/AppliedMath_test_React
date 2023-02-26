import Navbar from "./components/nav/Navbar"
import Matrix from "./components/matrix/Matrix"
import GaussianMethodArticle from "./articles/GaussianMethodArticle"
import Grid from "@mui/material/Grid";

const App = () => {

  return (
    <div>
      <Navbar/>
      <Grid className="pt-20" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Matrix rows={3} cols={4}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <GaussianMethodArticle/>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
