import { FacebookComponent } from "./facebook"
import { useContext } from "react"
import { SharedContext } from "services/context/shared"

export function SocialsComponent(){

    const shared = useContext(SharedContext)

    return (
     
        <FacebookComponent></FacebookComponent>
    )
}