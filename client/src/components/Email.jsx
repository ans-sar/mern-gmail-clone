import {Star, StarBorder} from '@mui/icons-material';
import{Box,styled, Typography, Checkbox} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {routes} from '../routes/routes';
import useApi from '../hooks/useApi';
import { API_URLS} from '../services/api.urls';


const Wrapper = styled (Box)({
 
 padding: '0 0 0 10px',
 background: '#f2f6fc',
 cursor: 'pointer',
 display: 'flex',
 alignItems: 'center',
 '& > div':{
    display: 'flex',
    width: '100%'
 }

})

const Email = ({email, selectedEmails, setRefreshScreen, setSelectedEmails}) => {
  const navigate = useNavigate();

 const toggleStarredService = useApi(API_URLS.toggleStarredEmail);

 const toggleStarredMails = () => {
    toggleStarredService.call({id:email._id, value: !email.starred})
    setRefreshScreen(prevState =>!prevState)
 } 


 const onValueChange = () => {
  if(selectedEmails.includes(email._id)){
    setSelectedEmails(prevState => prevState.filter(id => id!== email._id));
  } else {
    setSelectedEmails(prevState => [...prevState,email._id]);
  }
}
  return (

   <Wrapper>
    <Checkbox 
    size='small'
    checked={ selectedEmails.includes(email._id)}   
    onChange={() => onValueChange()} 
    />
    {
      email.starred ?
      <Star fontSize='small' style={{ marginRight: 10 , color:'#fff222'}} onClick={() =>toggleStarredMails()}/>
      :
      <StarBorder fontSize='small' style={{ marginRight: 10 }} onClick={() =>toggleStarredMails()}/>
    }
    
    <Box onClick={()=> navigate(routes.view.path, { state: {email : email } })}>
          <Typography style={{width: 200, overflow: 'hidden' }}>{email.name} </Typography>
          <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
          <Typography style={{ marginLeft: 'auto', marginRight:20 }}>
                {(new window.Date(email.date)).getDate()}
                {(new window.Date(email.date)).toLocaleString('default',{month:'long'})}
           </Typography>
    </Box>
   </Wrapper>
  )
}

export default Email