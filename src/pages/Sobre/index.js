import "./sobre.css"

function Sobre(){
    return(
      <div className="principal">
            <img src="./imagens/imagem4.webp" alt=""/>

            <div className="conteudo">
               <strong>
                    Este site tem um proposito de gerar conselhos aletorios mas,
                    É preciso saber falar ou entender a lingua inglesa pois os nossos
                    conselhos são de lingua inglesa salvo se tiveres como traduzir os
                    os mesmos!
               </strong>
            </div>
            <button className="btn btn-warning">Reletion Mind</button>
      </div>
    )
}

export default Sobre;