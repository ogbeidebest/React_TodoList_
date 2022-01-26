import React from "react";

const Footer = () => {
    return (
        <div className="bg-secondary fixed">
            <div className="container">
                <div className="row text-white">
                    <div className="col-12  mt-3">

                        <div class="d-flex justify-content-center gap-4 fs-2" >
                            <a href="https://www.linkedin.com/mwlite/in/ogbeidebest" target="#" className="text-white"><i className="fab fa-linkedin"></i></a>
                            <a href="https://github.com/ogbeidebest" target="#" className="text-white"><i className="fab fa-github-square"></i></a>
                            <a href="https://twitter.com/ogb_best?s=08" target="#" className="text-white"> <i className="fab fa-twitter"></i></a>

                        </div>


                    </div>

                    <p className="text-center mt-3 texts-b text-white">©   Created using React  by <a className="text-decoration-none text-white" href="https://www.linkedin.com/mwlite/in/ogbeidebest">Best Ogbeide</a>  </p>

                </div>
               </div>
           
        </div>

    )
}

export default Footer;