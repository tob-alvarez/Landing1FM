/* eslint-disable react/no-unescaped-entities */

import Carrousel from "./Carrousel"

const Comments = () => {
  return (
    <>
    <div className="container">
    <div className="row mt-5">
            <div className='col-12 col-md-6 container justify-content-center d-flex flex-column'>
                <h2 className='titulo'>What they've said</h2>
            </div>
            <Carrousel/>
        </div>
    </div>
    </>
  )
}

export default Comments