import "./Card.css"

const Card = () => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
            <div className="card">
                <div className="card-header">
                    <h4 className="text-center">Nick name</h4>
                </div>
                <div className='card-body'>
                    <div className="card-img"><img src="" alt=""/></div>
                </div>
                <div className="card-footer">
                    <h5>Full name</h5>
                    <p>email</p>
                </div>
            </div>
        </div>
    )
}

export default Card