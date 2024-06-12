import foto from '../../assets/illustration-intro.svg'

const Principal = () => {
  return (
    <>
    <div className='container'>
        <div className="row">
            <div className="col-12 col-md-4">
                <img src={foto} className='foto w-100'/>
            </div>
            <div className='col-12 col-md-6 container justify-content-center d-flex flex-column'>
                <h2 className='titulo'>Bring everyone together to build better products</h2>
                <p className='parrafo'>Manage makes it simple for software teams to plant day-to-day tasks while keeping the larger team goals in view.</p>
                <button className='boton'>Get Started</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Principal