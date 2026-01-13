import './App.css'
import NavbarComponent from './modules/navbar/components/navbar-component'
import ViewPorfolio from './view/view-porfolio'

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full bg-linear-to-br from-[#020617] via-[#020617] to-[#020617]">
      <NavbarComponent />
      <ViewPorfolio />
    </div>
  )
}


export default App
