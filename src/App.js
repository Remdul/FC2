import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

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
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Task description"
        value={formData.description}
      />
      <button onClick={createNote}>Create Task</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteNote(note)}>Delete Task</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    
      <div class="container mb-5 mt-5">
        <div class="pricing card-deck flex-column flex-md-row mb-3">
            <div class="card card-pricing text-center px-3 mb-4">
                <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Starter</span>
                <div class="bg-transparent card-header pt-4 border-0">
                    <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15">$<span class="price">3</span><span class="h6 text-muted ml-2">/ per month</span></h1>
                </div>
                <div class="card-body pt-0">
                    <ul class="list-unstyled mb-4">
                        <li>Up to 5 users</li>
                        <li>Basic support on Github</li>
                        <li>Monthly updates</li>
                        <li>Free cancelation</li>
                    </ul>
                    <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
                </div>
            </div>
            <div class="card card-pricing popular shadow text-center px-3 mb-4">
                <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Professional</span>
                <div class="bg-transparent card-header pt-4 border-0">
                    <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">$<span class="price">6</span><span class="h6 text-muted ml-2">/ per month</span></h1>
                </div>
                <div class="card-body pt-0">
                    <ul class="list-unstyled mb-4">
                        <li>Up to 5 users</li>
                        <li>Basic support on Github</li>
                        <li>Monthly updates</li>
                        <li>Free cancelation</li>
                    </ul>
                    <a href="https://www.totoprayogo.com" target="_blank" class="btn btn-primary mb-3">Order Now</a>
                </div>
            </div>
            <div class="card card-pricing text-center px-3 mb-4">
                <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Business</span>
                <div class="bg-transparent card-header pt-4 border-0">
                    <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="45">$<span class="price">9</span><span class="h6 text-muted ml-2">/ per month</span></h1>
                </div>
                <div class="card-body pt-0">
                    <ul class="list-unstyled mb-4">
                        <li>Up to 5 users</li>
                        <li>Basic support on Github</li>
                        <li>Monthly updates</li>
                        <li>Free cancelation</li>
                    </ul>
                    <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
                </div>
            </div>
            <div class="card card-pricing text-center px-3 mb-4">
                <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Enterprise</span>
                <div class="bg-transparent card-header pt-4 border-0">
                    <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="60">$<span class="price">12</span><span class="h6 text-muted ml-2">/ per month</span></h1>
                </div>
                <div class="card-body pt-0">
                    <ul class="list-unstyled mb-4">
                        <li>Up to 5 users</li>
                        <li>Basic support on Github</li>
                        <li>Monthly updates</li>
                        <li>Free cancelation</li>
                    </ul>
                    <button type="button" class="btn btn-outline-secondary mb-3">Order now</button>
                </div>
            </div>
        </div>
    </div>
    <div class="text-muted mt-5 mb-5 text-center small">by : <a class="text-muted" target="_blank" href="http://totoprayogo.com">totoprayogo.com</a></div>

    
    
    </div>
  );
}

export default withAuthenticator(App);