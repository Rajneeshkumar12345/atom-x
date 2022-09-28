import React from 'react'

const services = () => {
  return (
    <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
   
        <img src="/our_services.jpg" height="500px" width="auto" style={{objectFit:"cover" }} padding="50px" class="card-img-top" alt="image"/>
        <div class="card-body" style={{textAlign:"centre", width:"42rem", margin:"auto"}}>
            <div class="card-text"  style={{ marginTop:"50px", fontFamily:"sans-serif", fontSize:"20px"}} >
            <p>At AtomX,we offer best user-centric tech solutions. We thrive to create solutions that have top notch UI/UX designs and software development standards. We do this because of our love for startups. </p>
                    <br></br>
                    <p>We can help any early stage founders with below points :-</p>
                    <br></br>
                    </div>
          </div>


            <div className="quality" style={{textAlign:"centre", width:"43rem", margin:"auto"}}>
            <div class="m-4">
                <div class="d-flex">
                    <div class="flex-shrink-0">
                        <img src="/UI_Design.png" width="64" height="64" alt="Sample Image"/>
                    </div>
                    <div class="flex-grow-1 ms-3" style={{marginTop:"18px"}}>
                        <h5>UI/UX Design</h5>
                     
                    </div>
                </div>
            </div>

            <div class="m-4">
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <img src="/website.png" width="64" height="64"  alt="Sample Image"/>
                </div>
                <div class="flex-grow-1 ms-3" style={{marginTop:"18px"}}>
                    <h5>Website</h5>
              
                </div>
            </div>
        </div>

        <div class="m-4">
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <img src="/booking.png" width="64" height="64"  alt="Sample Image"/>
                </div>
                <div class="flex-grow-1 ms-3" style={{marginTop:"18px"}}>
                    <h5>Android and Ios app</h5>
                   
                </div>
            </div>
        </div>

        <div class="m-4">
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <img src="/admin.png" width="64" height="64"  alt="Sample Image"/>
                </div>
                <div class="flex-grow-1 ms-3"  style={{marginTop:"18px"}}>
                    <h5>Admin panel</h5>
                   
                </div>
            </div>
        </div>

        <div class="m-4">
            <div class="d-flex">
                <div class="flex-shrink-0">
                    <img src="/analytics (1).png" width="64" height="64"  alt="Sample Image"/>
                </div>
                <div class="flex-grow-1 ms-3"  style={{marginTop:"18px"}}>
                    <h5>Analytics tools</h5>
                    
                </div>
            </div>
        </div>
            </div>
           

        


</div>
  )
}

export default services