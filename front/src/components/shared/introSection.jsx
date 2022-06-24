import React from "react";

export default (props) => {
    return (
        <div>
            {/* <!-- ======= Intro Section ======= --> */}
            <section id="intro" className="clearfix">
              <div className="container">
    
                <div>
                    {props.children}
                </div>
    
              </div>
            </section>
            {/* <!-- End Intro Section --> */}
    </div> 
    );
}