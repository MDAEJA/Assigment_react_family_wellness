import React from 'react';
import '../components/Bodystyle.css'

function Body(){
    return (
        <>
        <div>

            <div className='img-div'>
            </div>

            <div className='text-div'>
                <div>
                    <h1 style={{fontStyle:'italic',fontWeight:'bold',marginBottom:'20px'}}>Think Health.Think Massage</h1>
                    <p style={{fontStyle:'oblique'}}>We are open 9am to 6pm.Monday through Sunday.If you would like to schedule an Appoinment with us,please call at 123-456-7890 today!!</p>
                </div>
                <div >
                    <button style={{padding:'10px 10px' ,backgroundColor:'rgba(190, 11, 41, 0.841)',border:'1px solid white',marginRight:'20px',color:'white',cursor:'pointer'}}>LEARN MORE ABOUT US</button>
                    <button style={{padding:'10px 10px' ,backgroundColor:'rgba(190, 11, 41, 0.841)',border:'1px solid white',color:'white',cursor:'pointer'}}>CONTACT US TODAY</button>
                </div>
            </div>

            <div className='service-details'>

             <div className='service-text'>
                <p style={{color:' rgba(190, 11, 41, 0.841)'}}>Are you looking for a professional,registered massage therapist?Sample Massage Therapy has 4 registered massage therapist who can provide clinical massage</p>
                <p>We are commited to your long term health and well-being.Our multi-disciplinary clinic provides a balanced appoach to a health lifestyle. Enhance ypur health and improve your performancs with treatments.</p>
                <p>We welcome you to come explore all the benefits you'll enjoy as one of our valued guests.Our professional staff is commitedd to offering the best massage therapy in Mankind</p>
               
             </div>

             <div style={{textAlign:'center',color:' rgba(190, 11, 41, 0.841)',display:'flex',flexDirection:'column',gap:'10px',padding:'10px 10px'}}>
                <h3>Family Wellness Massage Therapy</h3>
                <p style={{padding:'0px 30%'}}>9876 Mian Street,Suit 123 Mainland Ml125 phone : 1234567890 </p>
             </div>

            </div>

        </div>
        </>
    )
}

export default Body