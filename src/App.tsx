
import './App.css'
import NavbarComponent from './modules/navbar/components/navbar-component'
import ViewPorfolio from './view/view-porfolio'

function App() {
  return (
    <div className="h-screen bg-linear-to-br from-[#020617] via-[#020617] to-[#020617] flex flex-col">

      <div className="h-16">
        <NavbarComponent />
      </div>

      <div className="overflow-y-auto no-scrollbar flex flex-col items-center">
        <ViewPorfolio />
      </div>

    </div>
  )
}


export default App
