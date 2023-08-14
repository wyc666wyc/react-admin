import NavSide from "@/components/NavSide"
import NavTop from "@/components/NavTop"
import Router from "@/router"

function App() {

  return (
    <div className="flex h-full">
      <NavSide></NavSide>
      <section className="flex-1">
        <Router/>
      </section>
    </div>
  )
}

export default App
