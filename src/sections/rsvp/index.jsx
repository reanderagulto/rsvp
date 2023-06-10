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

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import EmailIcon from '@mui/icons-material/Email';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos'

// Assets
import * as cx from './RSVP.module.scss'

// firebase
import db from '@/firebase-config'

const RSVP = ({
  title,
  paragraphs,
  guests
}) => {

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
      case 'warning':
        toastId.current = toast.warn(objAlert.message, {
          position: "top-left",
          hideProgressBar: false,
          autoClose: 5000,
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

  const handleCheck = (e, id) => {
    if(guests.filter((guest) => { return guest.id === id })[0].rsvp_status === ''){
      if(e.target.checked) {
        setRsvp([...rsvp, id]);
      }      
      else {
        const newItems = [...rsvp]
        newItems.splice(newItems.indexOf(id), 1)
        setRsvp(newItems)
      }
    }
    else {
      showToast({
        status: 'warning', 
        message: <div className=''>
          <p>You've already responsed!</p>
          <p>If you wish to change your response kindly reach out: </p>          
          <div>
            <p><b>Reander Agulto</b></p>
            <p>0936-696-8097</p>
          </div>
          <div>
            <p><b>Julienne Anne Imperial</b></p>
            <p>0917-821-2257</p>
          </div>
        </div>
      })
    }
  }

  const handleDelete = (id) => {
    const newItems = [...rsvp]
    newItems.splice(newItems.indexOf(id), 1)
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

  const handleProceed = () => { 
    rsvp.map((item) => {
      db.collection('guestBook').doc(item).set({
        rsvp_status: response,
        email: email
      }, { merge: true} )
    })  
    let message = ''
    if(response === 'going') {
      message = <div><p>We received your response.</p> <p>See you on <b>September 23!</b></p></div>
    }
    else if(response === 'not-going')
      message = <div><p>We received your response.</p> <p>We'll miss you!</p></div>
    
    handleClose()
    showToast({
      status: 'success', 
      message: message
    })
    setRsvp([])
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <section className={cx.wrapper} id="rsvp">
        <div className={clsx(cx.container, 'container')}>
          <h2 data-aos="fade-up">{title}</h2>
          <div className={cx.content} data-aos="fade-up">
            {paragraphs && paragraphs.map((item, index) => {
              return (
                <p key={index}>{parse(item)}</p>
              )
            })}
          </div>
          <div className={clsx(cx.controlContainer, 'container')} data-aos="fade-up">
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
                  <div key={index} id={item.id}>
                    <input 
                      type="checkbox" 
                      className={cx.checkbox} 
                      checked={rsvp.includes(item.id)}
                      onClick={
                        (e) => { 
                          handleCheck(e, item.id)
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
                    <span>{guests.filter((guest) => { return guest.id === item })[0].first_name + ' ' + guests.filter((guest) => { return guest.id === item })[0].last_name}</span>
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
                    <div>Confirming RSVP response for: </div>
                    <div className={cx.rsvpConfirmItemContainer}>
                      {rsvp.length > 0 && rsvp.map((item, index) => {
                        return (
                          <div className={cx.rsvpConfirmItem} key={index}>
                            <CheckIcon /> <span>{guests.filter((guest) => { return guest.id === item })[0].first_name + ' ' + guests.filter((guest) => { return guest.id === item })[0].last_name}</span>
                          </div>
                        )
                      })}
                    </div>
                    <p>To receive an email confirmation, please enter your email.</p>
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
              {response === 'not-going' && 
                <div>
                  <div className={cx.dialogContent}>
                    <div>Confirming RSVP response for: </div>
                    <div className={cx.rsvpConfirmItemContainer}>
                      {rsvp.length > 0 && rsvp.map((item, index) => {
                        return (
                          <div className={cx.rsvpConfirmItem} key={index}>
                            <CloseIcon /> <span>{guests.filter((guest) => { return guest.id === item })[0].first_name + ' ' + guests.filter((guest) => { return guest.id === item })[0].last_name}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleProceed} autoFocus>Proceed</Button>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>  
        <ToastContainer />       
    </section>
  )
}

export default RSVP
