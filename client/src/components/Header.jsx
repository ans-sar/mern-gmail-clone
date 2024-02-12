
import {AppBar, Toolbar , styled, InputBase, Box} from '@mui/material';
import { Menu as MenuIcon, Search, Tune, HelpOutlineOutlined,
    SettingsOutlined, AppsOutlined, AccountCircle}from '@mui/icons-material';
import {gmailLogo} from '../constants/constant';

const StyledAppBar =styled(AppBar)({
    maxWidth: '100%', 
    background:'#f5f5f5',
    boxShadow:'none'
    
})

const SearchWrapper = styled(Box)({
    minWidth:680,
    maxWidth:720,
    height:46,
    marginLeft:80,
    background:"#EAF1FB",
    borderRadius:8,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'0 20px',
    '& >div':{
        width:'100%',
        padding:'0 5px'
    }

});

const OptionsWrapper = styled(Box)({
    width:'100%',
    display: 'flex',
    
    justifyContent: 'end',
    
    
    '& >svg':{
        marginLeft:10,
        marginRight:0
    }
});
const Header = ({toggleDrawer}) =>{
    return(
        <StyledAppBar position='static'>
            <Toolbar >
                <MenuIcon onClick={toggleDrawer}color='action'/>
                <img src={gmailLogo} alt="logo"style={{width:110 , marginLeft:10}}/>      
                <SearchWrapper>
                    <Search color='action'/>
                    <InputBase
                        placeholder='Search Mail'
                    />
                    <Tune color='action'/>
                </SearchWrapper>
                <OptionsWrapper >
                    <HelpOutlineOutlined color='action'/>
                    <SettingsOutlined color='action'/>
                    <AppsOutlined color='action'/>
                    <AccountCircle color='action' />
               </OptionsWrapper>
             </Toolbar>
             
        </StyledAppBar>
    )
}
export default Header;