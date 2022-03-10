import React, { Component } from "react";
import Note from "./components/Note";
import { Container, List, Fab, withStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";


const styles = {
  fab: {
    position: 'absolute',
    bottom: "2rem",
    right: "2rem",
  }
};

// I think Material-UI makes it look nice

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // array of objects, commas after elements in array
      notes: [
        {
          id: "5c83c052-60da-425f-a302-9d4735a9d6ae",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut.",
          text: "In orci urna, feugiat sed est id, sodales pharetra nisl. Etiam mollis vehicula imperdiet. In iaculis convallis leo, a pretium erat rutrum in. Ut lacus sem, lobortis id lacinia nec, imperdiet at quam. Etiam ut risus ligula. Mauris ac enim ut purus iaculis lobortis. Donec euismod vel risus ac blandit. Sed in odio enim. Aliquam dolor nibh, luctus a fermentum dignissim, ornare nec enim. Sed posuere in arcu eu ultricies.",
        },
        {
          id: "8fd80679-73ff-4425-ae6d-cffe4463d64f",
          title: "Cras bibendum libero eu viverra tristique.",
          text: "Sed et elit id ex lobortis dictum sed vel ex. Mauris id massa interdum, maximus nisl sed, dignissim magna. Donec eu leo varius, malesuada mauris fringilla, porta erat. Nullam consequat auctor tincidunt. Mauris eget lacus ex. Aliquam nibh sem, placerat at nunc at, fringilla auctor dolor. Aliquam eros elit, tempor ut erat eget, interdum porta lacus. Suspendisse in bibendum enim.",
        },
        {
          id: "95747b61-c935-45e9-a156-325307bade96",
          title: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
          text: "Praesent eleifend, lectus non molestie dictum, arcu sapien accumsan eros, sodales dapibus dolor lacus in dolor. Fusce blandit augue condimentum eros luctus ullamcorper. Praesent hendrerit nunc a augue tempor finibus. Morbi ultricies lectus ac risus hendrerit, a aliquam ante tincidunt. Suspendisse viverra iaculis consequat. Nam nec consectetur diam. Cras porta metus in nibh facilisis interdum. Aenean lobortis feugiat enim quis molestie. Suspendisse ultrices bibendum volutpat. Praesent et orci est. Pellentesque ut fringilla nibh. Donec vel pretium nisl. Praesent varius, magna sit amet mollis rutrum, urna lacus rutrum magna, in cursus lectus massa id lorem. Etiam risus enim, fringilla sit amet lectus at, condimentum maximus nulla.",
        },
      ],
    };
  }

  // in app which stores multiple notes, the array of notes,
  // we can delete a note
  deleteNote = (note) => {
    this.setState((state) => {
      // merge with a copy minus the note we want to delete
      return {
        notes: state.notes.filter((n) => n.id !== note.id),
      };
    });
  };

  // render() {
  //   // toString()
  //   // I don't know why the arguments are like this
  //   return <pre>{JSON.stringify(this.state.notes, null, 2)}</pre>;
  // }

  render() {
    const { notes } = this.state;
    // ok so we are rendering the notes as an array??\
    // how to interpret arrow funcs
    return (
      <Container>
        <List>
          {notes.map((note, index) => {
            // passing in note and index for like how to render the note using Material UI components
            // passing in deleteNote to give it a way to call back up and tell App to delete the note
            // delete note would require a parameter so something like
            // this.props.deleteNote(this); // since the argument is the note
            // itself that should be deleted
            // ok nevermind note is the object in the array that needs
            // to be deleted, separate from the Note component that exists
            // so we can't 'delete' the Note component we would have to unmount it from DOM instead
            // so we just have to pass the note object (in the array)
            // itself into the deleteNote method
            // to remove it from the array so it is not rendered.
            // maybe it will unmount later
            return <Note note={note} key={index} deleteNote={this.deleteNote}/>;
          })}
        </List>
        <Fab aria-label={"Add"} className={this.props.classes.fab}>
          <Add />
        </Fab>
      </Container>
    ); // what is fab
  }

}

export default withStyles(styles)(App);
