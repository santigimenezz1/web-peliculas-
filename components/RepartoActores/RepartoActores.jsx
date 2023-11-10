import React from "react"
import '../RepartoActores/repartoActores.css'
import TarjetaActor from "../TarjetaActor/TarjetaActor"
import Link from "next/link"
import '@/app/mediaQuery.css'


const RepartoActores = ( {reparto, id, data} )=>{
    
    return (
        <div>
            <h1 className="titulo__repartoActores">Reparto</h1>
        <div className="repartoActores">
            <div className="repartoActores__tarjetas">
         {
            reparto.cast.slice(0,7).map((actor)=>(
                <Link key={actor.id}  style={{textDecoration:"none", color:"white"}} href={`/detalle/${id}/Biografia/${actor.id}`}>
                <TarjetaActor actor={actor} />
                </Link>
            ))
         }
            </div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Link href={`/detalle/${id}/${id}`}>
                <button style={{fontSize:"12px", color:"white", background:"none", cursor:"pointer", border:"none", fontWeight:"bold"}}>Ver mas</button>
                </Link>
            </div>
        </div>
           


        </div>
    )
}
export default RepartoActores