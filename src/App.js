import React, { useState, useEffect } from 'react';
import './App.css';

import TeamForm from './teamForm.js'
import TeamList from './teamList.js'

function App() {

  const [teamMembers, setTeamMembers] = useState([{name: '', email: '', role: ''} ])

  const addNewMember = teamMember => {
    setTeamMembers([...teamMembers, teamMember])
  }

  return (
      <div className="App">
        <TeamForm addNewMember={addNewMember}/>
        <TeamList displayTeam={teamMembers} />
      </div>
  );
}

export default App;
