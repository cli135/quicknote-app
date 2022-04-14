import { List, Fab, withStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Note from "../components/Note";
import { Link } from "react-router-dom";

const styles = {
  fab: {
    position: 'absolute',
    bottom: "2rem",
    right: "2rem",
  }
};

function DisplayNotes(props) {
  const { notes, deleteNote, classes, changePage } = props;
  return (
    <>
      <List>
        {notes.map((note, index) => {
          return <Note note={note} key={index} deleteNote={deleteNote} />;
        })}
      </List>
      <Fab
      // ok basically having the onClick call the changePage prop
      // to go up the 'call stack' or the inheritance chain
      // and tell the App.js to switch its homepage state
        aria-label={"Add"}
        className={classes.fab}
        onClick={() => changePage()}
      >
        <Add />
      </Fab>
    </>
  );
}

export default withStyles(styles)(DisplayNotes);
