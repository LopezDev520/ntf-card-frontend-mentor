import './App.css'

function App () {
  return (
    <div className='card'>
      <div className='image-container'>
        <img src="/image-equilibrium.jpg" alt="" />
      </div>
      <div className="info-container">
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className='balance-info'>
          <div>
            <i className='icon'><img src="/icon-ethereum.svg" alt="" /></i>
            <p>0.041 ETH</p>
          </div>
          <div>
            <i className='icon'><img src="/icon-clock.svg" alt="" /></i>
            <p>3 days left</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="profile-info">
          <p>Creation of <em className='name'>Wilson Lopez</em></p>
        </div>
      </div>
    </div>
  )
}

export default App
