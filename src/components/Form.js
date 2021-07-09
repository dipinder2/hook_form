import React,{useState} from 'react';

const Form = ({user, setUser}) => {
  
	const handlePerson=(e)=>{

		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	  }

  return (
  	<>
    <div className="container">

        <form className="form form-control-sm" >
            
            <div className="mb-3">
            <div>
                <label>First Name: </label> 
                <input name="firstName" class="form-control form-control-sm" type="text" onChange={ handlePerson } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input name="lastName" className="form-control form-control-sm" type="text" onChange={ (e) => handlePerson(e) } />
            </div>
            <div>
                <label>Email: </label>
                <input name="email" className="form-control form-control-sm" type="email" onChange={ (e) => handlePerson(e) } />
            </div>
            <div>
                <label>Password: </label>
                <input name="password" className="form-control form-control-sm" type="password" onChange={ (e) => handlePerson(e) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input name="confirmPassword" className="form-control form-control-sm" type="password" onChange={ (e) => handlePerson(e) } />
            </div>
            </div>
        </form>

    </div>
    </>
  );
}

export default Form;