function Pagenotfound() {
    return (
        <div className="container p-5 mb-5 mt-5">
            <div className="row text-center">
                <h1 className="display-4 fw-bold text-danger">404</h1>
                <h2 className="mb-3 fs-2">Page Not Found</h2>
                <p className="fs-5 text-muted">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    style={{
                        width: "200px",
                        margin: "0 auto",
                        backgroundColor: "#387ed1",
                        border: "none",
                        color: "white"
                    }}
                    className="rounded mt-4 mb-5 fs-5 p-2"
                >
                    Go to Homepage
                </button>
            </div>
        </div>
    );
}

export default Pagenotfound;
