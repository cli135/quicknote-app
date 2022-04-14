import { FormControl, TextField, Button } from "@material-ui/core";

function AddNote(props) {
  const { changePage } = props;

  const handleCancel = (event) => {
    event.preventDefault();
    changePage();
  }

  // in this case, the cancel button is what
  // will onClick cause the changePage() prop to be called
  // its like giving you a way out of the function,
  // back up the inheritance chain
  // so you can change the upper level view
  // despite the flow of data going from parent to child
  // the child can still modify the parent's state component
  // by calling a function that it was given. this is react
  // passing props that will be called to change parent state
      return (
        <form>
          <FormControl fullWidth>
            <TextField label="Title" variant="outlined" />
          </FormControl>
          <FormControl fullWidth>
            <TextField label="Text" multiline rows={4} variant="outlined" />
          </FormControl>
          <div>
            
            <Button type="button" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </form>
      );
}

export default AddNote;
  