import classes from './Header.module.css';
import Button from './Button';
const Header = (porps) => {


    return (
        <div className={classes.content}>
            <div className={classes.head}>
                <div><h1 className={classes.title}>Pomofocus</h1></div>
                <Button className={classes.btn} onClick={porps.onShowCart}>Login</Button>
            </div>

        </div>
    )

}
export default Header;