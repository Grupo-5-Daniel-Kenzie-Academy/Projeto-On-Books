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

                    <img src={element[0].img} />

                <h3>{element[0].title}</h3>

                <p>{element[0].description}</p>

            </div>

        </StyledSection>
    )

}

