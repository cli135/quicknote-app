import React, { Component } from "react";
import { Container } from "@material-ui/core";
import DisplayNotes from "./pages/DisplayNotes";
import UpsertNote from "./pages/UpsertNote";
import { Route, Switch } from "react-router";
import { v4 as uuidv4 } from "uuid";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  deleteNote = (note) => {
    this.setState((state) => {
      return {
        notes: state.notes.filter((n) => n.id !== note.id),
      };
    }, this.saveNotes);
  };

  saveNotes = () => {
    window.localStorage.setItem("notes", JSON.stringify(this.state.notes));
  };  

  // this adds a note to the sibling array
  // it has with note
  // so it is passed into the child component
  // and the child calls it to send its form state
  // back up to the parent and modify the parent array
  addNote = (note) => {
    this.setState((state) => {
      return {
        notes: [...state.notes, Object.assign(note, { id: uuidv4() })],
      };
    }, this.saveNotes);
  }

  editNote = (note) => {
    this.setState((state) => {
      return {
        notes: state.notes.map(n => n.id === note.id ? note : n),
      };
    }, this.saveNotes);
  };

  componentDidMount() {
    const notes = window.localStorage.getItem("notes");
    this.setState({
      notes: notes ? JSON.parse(notes) : [],
    });
  }

  // we need a better solution
  // because this doesn't user browser's back and forward button
  // like url and browser history
  // to navigate between views
  // each view should have separate url and we will 
  // use react routing to handle the details of actually
  // giving each page its own url
  // // toggle homepage
  // changePage = () => {
  //   this.setState((state) => {
  //     return {
  //       showHomepage: !state.showHomepage,
  //     };
  //   });
  // };

  // before: we were using a ternary operator with showHomepage
  // ternary operator instead of if statement in jsx react
  // use boolean as a deciding factor/flag
  // to display homepage or not
  // (one component or the other component)

  // now: we are using react routing to allow us to
  // use back button to navigate to diff urls on the same webpage
  // so it preserves browser history when changing views
  // so back button and bookmarks etc. work correctly
  // instead of going under the rader changing views as before
  // e.g. helps browser know more about the view changing
  // to implement the back button etc. 
  render() {
    const { notes } = this.state;
    // one path is the home path
    // another path is the add path
    // switch switches between the two paths/routes
    return (
      <Container>
        <Switch>
          <Route exact path="/">
            <DisplayNotes notes={notes} deleteNote={this.deleteNote} />
          </Route>
          <Route path="/add">
            
            <UpsertNote upsertNote={this.addNote} />
          </Route>
          <Route path="/edit">
            <UpsertNote upsertNote={this.editNote} />
          </Route>
        </Switch>
      </Container>
    );
    // ok debugging lesson learned
    // case sensitive prop names
    // i put in "addnote" instead and it didn't work
    
    // debugging in js:
    // console.log(); statements
    // to see where you're getting to
  }


}

export default App;
