import React, { Component } from "react";
import { Collapse, List, ListItem, ListItemText, ListItemIcon, Button } from "@material-ui/core";
import { ExpandLess, ExpandMore, Delete } from "@material-ui/icons";

class Note extends Component {
  constructor(props) {
    super(props);
    // flag for whether open or close
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    // note is still passed in as a prop
    const { note , deleteNote } = this.props;
    // just for this one note
    const { open } = this.state;

    // using Material-UI to have pre-made components for us
    // like <Collapse></Collapse>
    return (
      <>
        <ListItem onClick={this.handleClick}>
          <ListItemIcon>
            { open ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
          <ListItemText primary={note.title} />
          <ListItemIcon>
            <Button onClick={() => deleteNote(note)}>
              <Delete/>
            </Button>
          </ListItemIcon>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText secondary={note.text} />
          </List>
        </Collapse>
      </>
    );
  }
}

export default Note;
