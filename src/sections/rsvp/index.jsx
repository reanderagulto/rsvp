import React, {useState, useRef, useEffect} from 'react'
import parse from 'html-react-parser'
import clsx from 'clsx'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import TextField from '@mui/material/TextField';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import EmailIcon from '@mui/icons-material/Email';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Assets
import * as cx from './RSVP.module.scss'

// Data 
import { pageInfo } from '@data'

const RSVP = ({
  title,
  paragraphs,
  guests
}) => {

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

  const [results, setResults] = useState([])
  const [typed, setTyped] = useState(false)
  const [rsvp, setRsvp] = useState([])
  const [clearRadio, setClearRadio] = useState(false)
  const [open, setOpen] = useState(false)
  const [response, setResponse] = useState('')
  const [email, setEmail] = useState('')
  const toastId = React.useRef(null);

  const showToast = (objAlert) => {
    switch(objAlert.status){
      case 'success':
        toastId.current = toast.success(objAlert.message, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,        
        });
        break
      case 'error':
        toastId.current = toast.error(objAlert.message, {
          position: "top-left",
          hideProgressBar: false,
          autoClose: 2000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,        
        });
        break
      default: 
        break;
    }
  }

  const handleChange = (e) => {
    let data = []
    if(e.target.value === ''){
      data = []
      setTyped(false)
    }
    else {        
      let re = new RegExp('^' + e.target.value.toLowerCase())
      data = guests.filter((item) => {
        return item.last_name.toLowerCase().match(re) 
      })
      if(data.length > 0){
        setTyped(true)
      }
      else {
        setTyped(false)
      }
    }
    setResults(data)
  }

  const handleCheck = (e, name) => {
    if(e.target.checked) {
      setRsvp([...rsvp, name]);
    }      
    else {
      const newItems = [...rsvp]
      newItems.splice(newItems.indexOf(name), 1)
      setRsvp(newItems)
    }
  }

  const handleDelete = (name) => {
    const newItems = [...rsvp]
    newItems.splice(newItems.indexOf(name), 1)
    setRsvp(newItems)
  }

  const handleOpen = (e) => {
    if(rsvp.length > 0) {
      setResponse(e.target.value)
      setOpen(true)
    }    
    else { 
      showToast({
        status: 'error',
        message: 'Please search for your name on the textbox below'
      })
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleEmail = () => {

  }

  return (
    <section className={cx.wrapper} id="rsvp">
        <div className={clsx(cx.container, 'container')}>
          <h2>{title}</h2>
          <div className={cx.content}>
            {paragraphs && paragraphs.map((item, index) => {
              return (
                <p key={index}>{parse(item)}</p>
              )
            })}
          </div>
          <div className={clsx(cx.controlContainer, 'container')}>
            <input 
              type="text"
              name="rsvp-search"
              id="rsvp-search" 
              className={clsx(cx.control, typed && cx.active)} 
              placeholder='Enter Your Last Name'
              onChange={handleChange}
            />
            <div
              className={clsx(cx.resultsContainer, 
                results.length > 0 && cx.active
              )} 
              id="results"
            >
              {results.length > 0 && results.map((item, index) => {
                return (
                  <div key={index} id={`${item.first_name.toLowerCase()}-${item.last_name.toLowerCase()}`}>
                    <input 
                      type="checkbox" 
                      className={cx.checkbox} 
                      checked={rsvp.includes(`${item.first_name.toLowerCase()}-${item.last_name.toLowerCase()}`)}
                      onClick={
                        (e) => { 
                          handleCheck(e, `${item.first_name.toLowerCase()}-${item.last_name.toLowerCase()}`)
                        }
                      }/>
                    <span>{item.first_name} {item.last_name}</span>
                  </div>
                )  
              })}
            </div>
            <div 
              className={clsx(cx.rsvpResultsContainer, 
                  rsvp.length > 0 && cx.active
              )}
            >
              {rsvp.length > 0 && rsvp.map((item, index) => {
                return (
                  <div key={index} className={cx.rsvpItem}>
                    <span>{item.split('-')[0].toProperCase()} {item.split('-')[1].toProperCase()}</span>
                    <div 
                      className={cx.delete}
                      onClick={() => handleDelete(item)}
                    >
                      <HighlightOffRoundedIcon />
                    </div>
                  </div>
                )
              })}
            </div>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              className={cx.buttonContainer}
              onClick={(e) => handleOpen(e)}
            >
              <FormControlLabel 
                value="going" 
                control={<Radio />} 
                label={`${rsvp.length > 1 ? 'We': 'I'} can attend, see you!`}
                className={cx.btnOption}
              />
              <FormControlLabel 
                value="not-going" 
                control={<Radio />} 
                label={`Unfortunately, ${rsvp.length > 1 ? 'we': 'I'} cannot attend.`}
                className={cx.btnOption}
              />
            </RadioGroup>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirmation"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {response === 'going' && 
                <div>
                  <div className={cx.dialogContent}>
                    <p>Your response is received</p>
                    <p>If you want to receive confirmation please enter your email:</p>
                  </div>
                  <div className={cx.dialogControl}>
                    <TextField 
                      id="outlined-basic" 
                      label="Email" 
                      variant="outlined" 
                      placeholder='mail@mail.com' 
                      onChange={(e) => {
                        console.log(e.target.value);
                        setEmail(e.target.value)
                      }}
                    />
                  </div>
                </div>
              }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>Proceed</Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>  
        <ToastContainer />       
    </section>
  )
}

export default RSVP
