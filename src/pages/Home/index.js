import { useState } from "react";
import "./home.css"

function Home(){

    const [ conselho, setConselho] = useState("");

        function generateAdvice(){
            const url = "https://api.adviceslip.com/advice";

            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setConselho(data.slip.advice)//Atualizando apenas o objeto do conselho
            })
            .catch((erro) => console.error("Erro ao gerar conselho: ", erro))
        }

    return(
        <div className="homePage">
            <h1>Refletion Advice</h1>
            <button type="button" className="btn btn-success" onClick={ generateAdvice }>
                Gerar Conselho
            </button>
            <div className="advice">
                { conselho ? (
                    <span>{conselho}</span>
                ):(
                    <p>Clique no botão para receber um conselho</p>
                )}
            </div>
        </div>
    )
}

export default Home;