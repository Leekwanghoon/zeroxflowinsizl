import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

type Props = {
  ListItems : any
  ContentData : any
}

export default function CheckboxesGroup({ListItems,
  ContentData} : Props) {


  const classes = useStyles();

  const [state, setState] = React.useState<Array<any>>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  
 




  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="default" checked={true} onChange={handleChange} name="gilad" />}
            label=""
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
