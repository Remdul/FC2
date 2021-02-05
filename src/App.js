import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Auth, DataStore } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { createPeople as createPeopleMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
    checkUser();
  }, []);

 async function createUser(){
   const { attributes } = await Auth.currentAuthenticatedUser()
   console.log({attributes})
   try{
      console.log({attributes})
      console.log(typeof(attributes))
   } catch (error) {
     console.log( "User Creation Failed: ", error );
   }
   
   
 }
  
  
  async function checkUser() {
    let user = await Auth.currentAuthenticatedUser();  
    const { attributes } = await Auth.currentAuthenticatedUser()
    try{
      await API.graphql({ query: createPeopleMutation, variables: { 
        subID: attributes.sub
      } });
      
    } catch (error) {
      console.log("Catastrophic ERRROOOORRR ------------------------- ", error)
    }
  }

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>My Tasks</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Task name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'points': e.target.value})}
        placeholder="Point Value"
        value={formData.points}
      />

      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Task description"
        value={formData.description}
      />
      <button onClick={createNote}>Create Task</button>
      
      <div class="container mb-5 mt-5">
        <div class="pricing card-deck flex-column flex-md-row mb-3">

        </div>
      </div>

      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name} class="card card-pricing text-center px-3 mb-4">
                <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">{note.name}</span>
                <div class="bg-transparent card-header pt-4 border-0">
                    <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="">{note.points} Points</h1>
                </div>
                <div class="card-body pt-0">
                    <ul class="list-unstyled mb-4">
                        <li>{note.description}</li>
                    </ul>
                    <button onClick={() => deleteNote(note)} type="button" class="btn btn-outline-secondary mb-3">Delete Task</button>
                </div>
            
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);