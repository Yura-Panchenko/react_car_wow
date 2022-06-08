const Contact = () => {
    return (
        <div className="contact">
            <div className="row_form">
                <input type="text" placeholder="name"/>
            </div>
            <div className="row_form">
                <input type="email" placeholder="email"/>
            </div>
            <div className="row_form">
                <textarea></textarea>
            </div>
            <button className="btn" type="submit">Submit</button>
        </div>
    )
}