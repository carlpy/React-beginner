import React from "react";
import Person from "./components/Person"


const App = () => {
  return (
    <>
      <header className="bg-blue-700 px-4 py-6 text-white flex justify-between items-center">
        <h1 className="text-3xl font-bold italic">Hello world</h1>

        <nav className="flex">
          <li className="ml-4 opacity-50 hover:opacity-100 cursor-pointer">random</li>
          <li className="ml-4 opacity-50 hover:opacity-100 cursor-pointer">random</li>
          <li className="ml-4 opacity-50 hover:opacity-100 cursor-pointer">random</li>
          <li className="ml-4 opacity-50 hover:opacity-100 cursor-pointer">random</li>
        </nav>
      </header>

      <main>
        <Person name={"Julio"} age={"15"} company={"coca-cola"}></Person>
        <Person name={"Lucia"} age={"65"} company={"pepsi-cola"}></Person>
        <Person name={"Pana"} age={"85"} company={"postobon"}></Person>
      </main>
    </>
  )
}

export default App;