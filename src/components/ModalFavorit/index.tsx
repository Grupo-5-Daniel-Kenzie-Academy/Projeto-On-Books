import { StyledSection } from "./Styled"

function ModalFavorit (){
    return (
        <StyledSection>
            <div className="cardModalFavorit">

                <h3>Deseja adicionar o livro em qual aba?</h3>

                <button className="closeModal" /* onclick={() => setFavoritModal(false)} */ >X</button>

                <div>
                    <button>Desejo ler</button>
                    <button>Já lido</button>
                </div>

            </div>

        </StyledSection>
    )
}

export {ModalFavorit}