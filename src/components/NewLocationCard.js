const NewLocationCard = () => {
    return (
        <article className="new-location-card">
            <h1 className="questrial-regular" style={{ fontWeight: "600", color: "#FEF8E6" }}>New Home.<br />Same Heart.</h1>
            <p className="questrial-regular" style={{ color: "#FEF8E6" }}>We have opened a new location in
                <br />
                <span style={{ color: "#f4ce14", fontWeight: "600" }}>New York</span>
                <br /><br />
            </p>
            <button className="btn btn--ordering questrial-regular"
                style={{ backgroundColor: "#f4ce14", color: "#FEF8E6" }}>
                check it out
            </button>
        </article>
    );
};

export default NewLocationCard;