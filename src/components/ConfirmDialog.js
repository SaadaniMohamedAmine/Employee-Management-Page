
import {Dialog,DialogTitle,DialogContent,Typography,DialogActions,makeStyles,IconButton} from '@material-ui/core' ;
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation' ;
import Controls from './controls/Controls' ;

const useStyles=makeStyles(theme=>({
    dialog:{
        position:"absolute",
        top:theme.spacing(5) ,
        padding:theme.spacing(5) 
    },
    dialogContent:{
        textAlign:"center"
    },
    dialogActions:{
        justifyContent:"center"
    },
    dialogTitle:{
        textAlign:"center"
    } ,
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }

})) ;

const ConfirmDialog=(props)=>{
    const {confirmDialog,setConfirmDialog}=props ;
    const classes=useStyles() ;
    return(
        <Dialog open={confirmDialog.isOpen} classes={{paper:classes.dialog}}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">
                    {confirmDialog.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialog.subtitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogActions}> 
                <Controls.Button
                    text="No" 
                    color="default"
                    onClick={()=>{setConfirmDialog({...confirmDialog,isOpen:false})}} 
                 />
                <Controls.Button text="Yes" color="secondary" onClick={confirmDialog.onConfirm}/>
            </DialogActions>
        </Dialog>
    )
} ;
export default ConfirmDialog ;
