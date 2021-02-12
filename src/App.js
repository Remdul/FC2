import React, { useState, useEffect, Fragment, Suspsense, lazy } from 'react';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { API, Auth, DataStore, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { listUsers, getUser } from './graphql/queries';

import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";

const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));
const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes, setUsers] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
    fetchUsers();
    console.log("Received on fetCurrentUser: ", fetchCurrentUser());
  }, []);

    async function fetchCurrentUser() {
    const whoAmI = await Auth.currentAuthenticatedUser({ bypassCache: false });
    const subID  = whoAmI.attributes.sub;
    const data   = await API.graphql({ query: getUser, variables: {id:subID}})
    const gotUser= data.data.getUser.id
    if (whoAmI.attributes.sub == gotUser){
      return true;
    } else {
      return false;
    }
  }
  
  async function fetchUsers() {
    const userData = await API.graphql({ query: listUsers });
    try {
      console.log("userPools  = ", userData);  
    } catch (error) {
      console.log("SetUserPools failed = ", error);  
    }
  }

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    console.log("AMAZING sNotes: ", apiData);
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
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/c">
              <LoggedInComponent />
            </Route>
            <Route>
              <LoggedOutComponent />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>

    );
  }

export default withAuthenticator(App);