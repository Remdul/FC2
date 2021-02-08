import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Auth, DataStore, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { createPeople as createPeopleMutation } from './graphql/mutations';
import { listUserPools } from './graphql/queries';
import $ from "jquery";

const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
    fetchUser();
  }, []);

  async function fetchUser() {
    const userData = await API.graphql({ query: listUserPools });
    let curUser = await Auth.currentAuthenticatedUser();  
    console.log("userData = ", userData);
    console.log("curUser  = ", curUser);
    alert(curUser.username);
    alert(curUser.email);
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

<div>
        <header className="header">
          <nav className="navbar navbar-toggleable-md navbar-light pt-0 pb-0 ">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand p-0 mr-5" href="#"><img src="http://via.placeholder.com/61x14" /></a>
            <div className="float-left"> <a href="#" className="button-left"><span className="fa fa-fw fa-bars " /></a> </div>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown messages-menu">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-bell-o" />
                    <span className="label label-success bg-success">10</span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <ul className="dropdown-menu-over list-unstyled">
                      <li className="header-ul text-center">You have 4 messages</li>
                      <li>
                        {/* inner menu: contains the actual data */}
                        <ul className="menu list-unstyled">
                          <li>{/* start message */}
                            <a href="#">
                              <div className="pull-left">
                                <img src="http://via.placeholder.com/160x160" className="rounded-circle  " alt="User Image" />
                              </div>
                              <h4>
                                Support Team
                                <small><i className="fa fa-clock-o" /> 5 mins</small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                          {/* end message */}
                          <li>
                            <a href="#">
                              <div className="pull-left">
                                <img src="http://via.placeholder.com/160x160" className="rounded-circle " alt="User Image" />
                              </div>
                              <h4>
                                AdminLTE Design Team
                                <small><i className="fa fa-clock-o" /> 2 hours</small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="pull-left">
                                <img src="http://via.placeholder.com/160x160" className="rounded-circle " alt="User Image" />
                              </div>
                              <h4>
                                Developers
                                <small><i className="fa fa-clock-o" /> Today</small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="pull-left">
                                <img src="http://via.placeholder.com/160x160" className="rounded-circle " alt="User Image" />
                              </div>
                              <h4>
                                Sales Department
                                <small><i className="fa fa-clock-o" /> Yesterday</small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="pull-left">
                                <img src="http://via.placeholder.com/160x160" className="rounded-circle " alt="User Image" />
                              </div>
                              <h4>
                                Reviewers
                                <small><i className="fa fa-clock-o" /> 2 days</small>
                              </h4>
                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="footer-ul text-center"><a href="#">See All Messages</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown notifications-menu">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-envelope-o" />
                    <span className="label label-warning bg-warning">10</span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <ul className="dropdown-menu-over list-unstyled">
                      <li className="header-ul text-center">You have 10 notifications</li>
                      <li>
                        {/* inner menu: contains the actual data */}
                        <ul className="menu list-unstyled">
                          <li>
                            <a href="#">
                              <i className="fa fa-users text-aqua" /> 5 new members joined today
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-warning text-yellow" /> Very long description here that may not fit into the
                              page and may cause design problems
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-users text-red" /> 5 new members joined
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-shopping-cart text-green" /> 25 sales made
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-user text-red" /> You changed your username
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="footer-ul text-center"><a href="#">View all</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown  user-menu">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="http://via.placeholder.com/160x160" className="user-image" alt="User Image" />
                    <span className="hidden-xs">bootstrap develop</span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="main">
          <aside>
            <div className="sidebar left ">
              <div className="user-panel">
                <div className="pull-left image">
                  <img src="http://via.placeholder.com/160x160" className="rounded-circle" alt="User Image" />
                </div>
                <div className="pull-left info">
                  <p>bootstrap develop</p>
                  <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                </div>
              </div>
              <ul className="list-sidebar bg-defoult">
                <li> <a href="#" data-toggle="collapse" data-target="#dashboard" className="collapsed active"> <i className="fa fa-th-large" /> <span className="nav-label"> Dashboards </span> <span className="fa fa-chevron-left pull-right" /> </a>
                  <ul className="sub-menu collapse" id="dashboard">
                    <li className="active"><a href="#">CSS3 Animation</a></li>
                    <li><a href="#">General</a></li>
                    <li><a href="#">Buttons</a></li>
                    <li><a href="#">Tabs &amp; Accordions</a></li>
                    <li><a href="#">Typography</a></li>
                    <li><a href="#">FontAwesome</a></li>
                    <li><a href="#">Slider</a></li>
                    <li><a href="#">Panels</a></li>
                    <li><a href="#">Widgets</a></li>
                    <li><a href="#">Bootstrap Model</a></li>
                  </ul>
                </li>
                <li> <a href="#"><i className="fa fa-diamond" /> <span className="nav-label">Layouts</span></a> </li>
                <li> <a href="#" data-toggle="collapse" data-target="#products" className="collapsed active"> <i className="fa fa-bar-chart-o" /> <span className="nav-label">Graphs</span> <span className="fa fa-chevron-left pull-right" /> </a>
                  <ul className="sub-menu collapse" id="products">
                    <li className="active"><a href="#">CSS3 Animation</a></li>
                    <li><a href="#">General</a></li>
                    <li><a href="#">Buttons</a></li>
                    <li><a href="#">Tabs &amp; Accordions</a></li>
                    <li><a href="#">Typography</a></li>
                    <li><a href="#">FontAwesome</a></li>
                    <li><a href="#">Slider</a></li>
                    <li><a href="#">Panels</a></li>
                    <li><a href="#">Widgets</a></li>
                    <li><a href="#">Bootstrap Model</a></li>
                  </ul>
                </li>
                <li> <a href="#"><i className="fa fa-laptop" /> <span className="nav-label">Grid options</span></a> </li>
                <li> <a href="#" data-toggle="collapse" data-target="#tables" className="collapsed active"><i className="fa fa-table" /> <span className="nav-label">Tables</span><span className="fa fa-chevron-left pull-right" /></a>
                  <ul className="sub-menu collapse" id="tables">
                    <li><a href> Static Tables</a></li>
                    <li><a href> Data Tables</a></li>
                    <li><a href> Foo Tables</a></li>
                    <li><a href> jqGrid</a></li>
                  </ul>
                </li>
                <li> <a href="#" data-toggle="collapse" data-target="#e-commerce" className="collapsed active"><i className="fa fa-shopping-cart" /> <span className="nav-label">E-commerce</span><span className="fa fa-chevron-left pull-right" /></a>
                  <ul className="sub-menu collapse" id="e-commerce">
                    <li><a href> Products grid</a></li>
                    <li><a href> Products list</a></li>
                    <li><a href>Product edit</a></li>
                    <li><a href> Product detail</a></li>
                    <li><a href>Cart</a></li>
                    <li><a href> Orders</a></li>
                    <li><a href> Credit Card form</a> </li>
                  </ul>
                </li>
                <li> <a href><i className="fa fa-pie-chart" /> <span className="nav-label">Metrics</span> </a></li>
                <li> <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span></a> </li>
                <li> <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span></a> </li>
                <li> <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span></a> </li>
                <li> <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span></a> </li>
                <li> <a href="#"><i className="fa fa-files-o" /> <span className="nav-label">Other Pages</span></a> </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    );
  }

export default withAuthenticator(App);