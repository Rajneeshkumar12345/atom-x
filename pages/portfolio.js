import React from 'react'

const portfolio = () => {
  return (
    <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
   
        <img src="/portfolio.jpg" height="600px" width="auto" style={{objectFit:"fill" }} padding="50px" class="card-img-top" alt="image"/>
        <h2 style={{marginLeft:"355px", marginTop:"30px", marginBottom:"20px"}}>Some of the projects which we have delivered</h2>
        <div class="card-body">

          <div class="card"  style={{marginLeft:"22rem", height:"100px", width:"40rem"}}>
            <img src="/startup.png"   class="card-img-top" alt="image"/>
            <div class="card-body">
              <h5 class="card-title">Atom</h5>
              <p class="card-text">A social media app for startups</p>
              <a href="https://play.google.com/store/apps/details?id=wiki.atom.app" class="btn btn-dark" >Android App</a>
              <a href="https://apps.apple.com/in/app/atom-community-for-startups/id1613877132" class="btn btn-dark" style={{marginLeft:"10px"}}>Ios App</a>
            </div>
          </div>
           </div>

</div>
  )
}

export default portfolio