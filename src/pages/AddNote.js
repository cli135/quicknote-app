import React, { Component } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import { withRouter } from "react-router";

class AddNote extends Component {
  constructor(props) {
    super(props); // always need this line
    // when you have props
    this.state = {
      title: "",
      text: "",
    };
  }

  updateTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  updateText = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state);
    // same as the cancel, but
    // you want to call the addNote
    // function with the argument
    // as whatever is the text field right now
    // e.g. converting your entered text
    // into an entry in App.js's notes array
    this.props.addNote(this.state);
    console.log(this.state);
    console.log("here");
    // the current state consists of title and text entry
    this.props.history.push("/"); // back to homepage browser url

  };

  handleCancel = (event) => {
    event.preventDefault();
    
    // before
    //changePage();
    // after routing to diff urls
    this.props.history.push("/");
    // history allows you to interact with
    // browser history api - acc to Prof. Madooei
    // history allows you to tell the browser url to
    // change back to localhost:3000/
    // the homepage
    // history allows you to change browser url contents
    // https://cs280spring.github.io/18-qnote-p2/step06.html
  };

  // in this case, the cancel button is what
  // will onClick cause the changePage() prop to be called
  // its like giving you a way out of the function,
  // back up the inheritance chain
  // so you can change the upper level view
  // despite the flow of data going from parent to child
  // the child can still modify the parent's state component
  // by calling a function that it was given. this is react
  // passing props that will be called to change parent state
  

  // now the submit btn also will call
  // a passed in prop function
  render() {
    return (
      <form>
        <FormControl fullWidth>
          <TextField
            label="Title"
            variant="outlined"
            value={this.state.title}
            onChange={this.updateTitle}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Text"
            multiline
            rows={4}
            variant="outlined"
            value={this.state.text}
            onChange={this.updateText}
          />
        </FormControl>
        <div>
          <Button type="button" color="secondary" onClick={this.handleCancel}>
            Cancel
          </Button>
          <Button type="submit" color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default withRouter(AddNote);
