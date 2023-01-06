import { useContext } from "react"
import { DashContext } from "../../contexts/DashboardContext/DashContext"
import { StyledSection } from "./Styled"

export function ModalFavorit (){

    const {favoritModal, setFavoritModal} = useContext(DashContext)

    return (
        <StyledSection>
            <div className="cardModalFavorit">

                <h3>Deseja adicionar o livro em qual aba?</h3>

                <button className="closeModal" onClick={() => setFavoritModal(false)} >X</button>

                <div>
                    <button>Desejo ler</button>
                    <button>Já lido</button>
                </div>

            </div>

        </StyledSection>
    )
}
