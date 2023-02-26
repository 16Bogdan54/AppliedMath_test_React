import Matrix from "./components/matrix/Matrix"
import GaussianMethodArticle from "./articles/GaussianMethodArticle"

const App = () => {

  return (
    <div>
      <Matrix rows={3} cols={4}/>
      <GaussianMethodArticle/>
    </div>
  )
}

export default App
