import { useState } from "react";
import { Dialog, Box, Typography, styled, InputBase,
         TextField, Button } from "@mui/material"
import {Close, DeleteOutlined} from '@mui/icons-material'
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

 const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',    
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}
const Header = styled(Box)({
    display : 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p':
    {
        fontSize: 14,
        fontWeight: 600
    }
   
});
const RecipientWrapper =styled(Box)({
    display:'flex',
    flexDirection: 'column',
    padding:'0 15px',
    '& >div' : {
        fontSize: 14,
        borderBottom: '1px solid #f5f5f5',
        marginTop: 10
    }
})
const Footer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 15px',
  alignItems: 'center',
  marginBottom: 10
})

const SendButton = styled(Button)({
  background: '#0B57D0',
  color: '#fff',
  borderRadius: '20px',
  width: '100px',
  fontWeight:500,
  textTransform: 'none',
  cursor: 'pointer'
})

const ComposeMail = ({openDialog, setOpenDialog}) => {
   const [data, setData] =useState({});
   const sentEmailServices = useApi(API_URLS.saveSentEmail);
   const saveDraftService = useApi(API_URLS.saveDraftEmails);
const config ={
 
    Host : "smtp.elasticemail.com",
    Username : "process.env.learningsmtp@yopmail.com",
    Password : "process.env.E6916B85B6A0DB2CBE7563C62A14DD698F1A",
    Port: 2525,
    
}  
const closeComposeMail = (e) => {
  e.preventDefault();
  const payload = {
    to: data.to,
    from: 'anasua20august@gmail.com',
    subject: data.subject,
    body: data.body,
    date: new Date(),
    image: '',
    name: 'Anasua',
    starred: false,
    type: 'drafts'
  }

saveDraftService.call(payload);

if(!saveDraftService.error){
  setOpenDialog(false);
  setData({});
} else {
  
}
}


const sendMail =(e) =>{
e.preventDefault();

  if (window.Email){
    window.Email.send({
    ...config,
    To : data.to,
    From : "anasua20august@gmail.com",
    Subject : data.subject,
    Body : data.body
  }).then(
  message => alert(message)
  );
  
   }

   const payload = {
    to: data.to,
    from: 'anasua20august@gmail.com',
    subject: data.subject,
    body: data.body,
    date: new Date(),
    image: '',
    name: 'Anasua',
    starred: false,
    type: 'sent'
  }

sentEmailServices.call(payload);

if(!sentEmailServices.error){
  setOpenDialog(false);
  setData({});
} else {
  
}

setOpenDialog(false);
}

const onValueChange = (e) =>{
  setData({...data,[e.target.name]:e.target.value});
  console.log(data);  
}
  return (
   <Dialog
   open={openDialog}
   PaperProps={{ sx : dialogStyle}}
   >
   
   <Header>
     <Typography> New Message</Typography>
     <Close fontSize="small" onClick={( e) => closeComposeMail(e)}/>
   </Header>
   <RecipientWrapper>
    <InputBase placeholder= "Recipients"  name="to" onChange={(e)=> onValueChange(e)}/>
    <InputBase placeholder= "Subject" name="subject" onChange={(e)=> onValueChange(e)}/>
   </RecipientWrapper>
   <TextField 
   multiline
    rows={15}
      sx={{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}
      onChange={(e)=> onValueChange(e)}
      name="body"
    />
    <Footer>
        <SendButton  onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutlined onClick={() => setOpenDialog(false)}/>
    </Footer>
</Dialog>
  )
}

export default ComposeMail