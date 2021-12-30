import './App.css'
import Category from './components/Cagories/Category'
import * as data from './data.json'

const dataObject = JSON.parse(JSON.stringify(data))
const dataTest = dataObject.data.menu_info

function App() {
  return (
    <div className="App">
      <Category data={dataTest}/>
    </div>
  )
}

export default App
