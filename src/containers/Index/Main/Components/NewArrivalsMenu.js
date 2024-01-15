function NewArrivals(){
    return(
        <>
        <div className="karl-projects-menu mb-100">
            <div className="text-center portfolio-menu">
                <button className="btn active" data-filter="*">ALL</button>
                <button className="btn" data-filter=".women">WOMAN</button>
                <button className="btn" data-filter=".man">MAN</button>
                <button className="btn" data-filter=".access">ACCESSORIES</button>
                <button className="btn" data-filter=".shoes">shoes</button>
                <button className="btn" data-filter=".kids">KIDS</button>
            </div>
        </div>
        </>
    )
}
export default NewArrivals;