import log from '../img/log.PNG';
import classes from './Header.module.css'
const Header = (porps => {
    return (
        <div className={classes.title}>
            <img src={log} alt="" />
        </div>
    )
})
export default Header