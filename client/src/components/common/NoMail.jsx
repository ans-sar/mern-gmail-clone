import { Box, Typography, styled, Divider } from "@mui/material";

const Component = styled(Box)({
    display:'flex',
alignItems:'center',
flexDirection:'column',
opacity:'0.8',
marginTop:20,
width: '100%'
})

const StyledDivider = styled(Divider)({
    width:'100%',
    marginTop:10
})


const NoMail = ({message}) => {
  return (
    <Component>
        <Typography>{message.heading}</Typography>
        <Typography>{message.subHeading}</Typography>
        <StyledDivider/>
    </Component>
  )
}

export default NoMail