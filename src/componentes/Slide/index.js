

function Slide(){

    const images = [
        {id: 1, src: "/imagens/imagem1.jpg", alt: "Primeira imagem"},
        {id: 2, src: "/imagens/imagem2.jpg", alt: "Segunda imagem"},
        {id: 3, src: "/imagens/imagem3.jpg", alt: "Terceira imagem"}
    ]

    return(
        <div id="corouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => {
                    <div
                        key={image.id}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                        <img src={ image.src} className="d-block w-100" alt={image.alt} />
                    </div>
                })}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slide;