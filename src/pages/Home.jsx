
import { Link } from "react-router-dom"
import { ButtonCounter } from "../components/ButtonCounter"


export default function Home(){
    

    return (
        <>
            <h1>Home</h1>
            <Link to="/login">Ir para login</Link>
            <ButtonCounter/>
        </>
    )
  }