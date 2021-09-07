import React from 'react'

const About = () => {
    return (
        <div className="container" >
            <div className="about-container">
                <div className="s-container">
                    <h3>Sufyaan Khateeb</h3>
                    <h6>Student, RIT Bangalore</h6>
                    <p>sufyaankhateeb@gmail.com</p>
                    <p>Phone: +91 99-34-52154</p>
                    <h5>Connect with us on: </h5>
                    <div className="connection">
                        <a
                            target="_blank"
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/sufyaan-khateeb-0aba27208/"
                            role="button"
                            data-mdb-ripple-color="dark" rel="noreferrer"
                        ><i className="fab fa-linkedin"></i></a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.instagram.com/sk_forlife/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i></a>
                    
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://github.com/SufyaanKhateeb"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i></a>

                    </div>
                </div>
                <div className="p-container">
                    <h3>Pawan Kumar</h3>
                    <h6>Student, RIT Bangalore</h6>
                    <p>k.pawan0301@gmail.com</p>
                    <p>Phone: +91 99-765-67829</p>
                    <h5>Connect with us on: </h5>
                    <div className="connection">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/pawan-kumar-8373151b4/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i></a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.instagram.com/03pawan_kumar/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i></a>
                       
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://github.com/03pawan"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i></a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
