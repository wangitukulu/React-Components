import React from 'react';


{/* the paragraph component used to pass prop to the major component */}
function Paragraph(props) {
  return (
    < div className='grid-container'>
      <div className='grid-item'>
        <h1>Secure your future.<br/>Learn to code at {props.name}</h1> {/*The component receives the argument as a props object: */}1 
        <p className='grid'>Our online coding bootcamps are set apart <br/>by integrating human-led code review. <br/>Our deep experience will support your ability to code and <br/>help you achieve career-focused skills
        </p>
        <div class="col">
          <button className="btn text-white" style={{backgroundColor: "orange "}}>Go to dashboard</button>
        </div>
      </div>

      < div className='grid-item'>
        <img className="image " src="Image.jpeg" alt="" />
      </div>
    </div>
    
  )
}
export default Paragraph;