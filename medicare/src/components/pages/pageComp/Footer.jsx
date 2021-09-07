import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-white" style={{ backgroundColor: "#f1f1f1" }}>

                <div className="container pt-4">

                    <section className="mb-4">

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.facebook.com/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"></i></a>


                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://twitter.com/?lang=en"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.instagram.com/sk_forlife/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/pawan-kumar-8373151b4/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i></a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://github.com/03pawan"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i></a>
                    </section>
                </div>


                <div className="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2021 Copyright:
                    <a className="text-dark" href="#" style={{textDecoration:"none  "}}> Sufyaan and Co.</a>
                </div>

            </footer>
        </div>
    )
}

export default Footer;
