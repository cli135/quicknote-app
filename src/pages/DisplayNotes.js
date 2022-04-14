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
  const { notes, deleteNote, classes} = props;
  return (
    <>
      <List>
        {notes.map((note, index) => {
          return <Note note={note} key={index} deleteNote={deleteNote} />;
        })}
      </List>
      <Link to="/add">
        <Fab
        // before:
        // ok basically having the onClick call the changePage prop
        // to go up the 'call stack' or the inheritance chain
        // and tell the App.js to switch its homepage state
        // now: link is basically like <a> tag in html
        // it will take us to a new url in the 'history' or sthg
        aria-label={"Add"}
          className={classes.fab}
          
        >
          <Add />
        </Fab>
      </Link>
      
    </>
  );
}

export default withStyles(styles)(DisplayNotes);
