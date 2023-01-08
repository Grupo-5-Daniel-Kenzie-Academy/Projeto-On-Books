import { StyledSection } from "./Styled"
import { useContext } from "react"
import { DashContext } from "../../contexts/DashboardContext/DashContext"

export function ModalDescription ({element}){
    console.log(element)

    const {setItemModal} = useContext(DashContext)

    const {descriptionModal, setDescriptionModal} = useContext(DashContext)

    return (
        <StyledSection>
            <div className="cardModalDescription">
                <button className="closeModal" onClick={() => {
                    setDescriptionModal(false)
                    setItemModal([])
                }} >X</button>

                    <img src={element.img} />

                <h3>{element.title}</h3>

                <p>{element.description}</p>

            </div>

        </StyledSection>
    )

}

