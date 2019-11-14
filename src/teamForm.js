import React, { useState } from 'react';

const TeamForm = (props) => {

  console.log(props)
  const [teamMember, setTeamMember] = useState({
    firstName: "",
    email: "",
    role: ""
  })

  const onInputChange = e => {
    setTeamMember({...teamMember, [e.target.name]: e.target.value })
  } 

  // we want submission handler
  // to add the submitted team member object to a an array
  //we want to render each team member object as a component on the page

  const submission = e => {
    e.preventDefault(); //now default html behavior is gone
    const newMember = { //make an object literal
      ...teamMember,    //with these values
      id: Date.now()    //give it a unique id
    };
    props.addNewMember(newMember) //use the function we defined and set to a prop of TeamForm on app.js
  }

  return(

    <form onSubmit={submission}>
      <label htmlFor="firstName">
      Name: <input
              name='firstName'
              onChange={onInputChange}
              type = 'text'
              placeholder = ' first name'

            /> 
      </label>
      

      <label htmlFor="email">
      Email: <input
               name='email'
               onChange={onInputChange}
               type = 'text'
               placeholder = ' email'

             />
      </label>


      <label htmlFor="role">
      Role: <input
              name='role'
              onChange={onInputChange}
              type = 'text'
              placeholder = ' role'

            />
      </label>

      <button>submit</button>

    </form>

  )

}

export default TeamForm;