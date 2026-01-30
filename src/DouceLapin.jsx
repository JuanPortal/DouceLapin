import { Route, Routes } from "react-router-dom"
import { Header } from "./Header"
import { Inicio } from "./Inicio"
import { Carta } from "./Carta"
import { Contacto } from "./Contacto"

function DouceLapin() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}

export default DouceLapin
