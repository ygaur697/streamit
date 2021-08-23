import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Video from '../Assets/v'


function DashboardComponent() {

  const [fileContent, setFileContent] = useState<File | string>('')
  const value:string | undefined = undefined

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();




  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    let file: File = (target.files as FileList)[0]
    setFileContent(file)

  }
  const fileChange = () => {
    let formData = new FormData()
    formData.append('inputFile', fileContent)
    console.log('i got hit')
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    }).then((data) => {
      console.log('File Uploaded')
    })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <div className={classes.root}>
      <form >
        <label>
          Upload a file: <br /><br />
          <input type="file" name="fileData" onChange={(event) => onChangeHandler(event)} />
        </label>
        <br /><br />
        <Button variant="contained" color="primary" onClick={() => fileChange()}>
          Upload File
        </Button>
      </form >

    </div>
  );

}
export default DashboardComponent;