function Card ({role ,responsibility}){
    return (
        <>
        <div className="cardContanier">
            <div className="card">
                <h2>{role}</h2>
                <p>{responsibility}</p>
            </div>
        </div>
        </>
    )
}
export default Card;
