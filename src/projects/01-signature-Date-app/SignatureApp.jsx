import React,{useState} from 'react'
import Title from '../../components/Title'

const SignatureApp = () => {
  const inputStyle={
    height: '1.5rem',
    border: 'none',
    borderRadius: '2px',
  };
  document.body.style.backgroundColor="#eeeeee";
  const [date,setDate]=useState("Select date");
  const [name,setName]=useState("Your Signature");
  const handelNameChange=(e)=>{
    setName(e.target.value);
  };
  const handelDateChange=(e)=>{
    setDate(e.target.value);
  }
  return (
    <div className='container text-center'>
      <Title classes={"title"} text={name}/>
      <Title classes={"main-title"} text={!date ? 'Dob' : date}/>
      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
      <div className="input-container">
      <input type="date" value={date} style={inputStyle}  onChange={handelDateChange}/>
      <input type="text" value={name} style={inputStyle} placeholder='Please write your name' onChange={handelNameChange}/>
      </div>
    </div>
  )
}

export default SignatureApp

