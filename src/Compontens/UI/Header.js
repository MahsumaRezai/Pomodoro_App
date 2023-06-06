import Button from './Button';
import classes from './Header.module.css'

const Header = (porps) => {
    return (
        <div className={classes.content}>
            <div className={classes.head}>
                <div><h1 className={classes.title}>Pomofocus</h1></div>
                <Button>Login</Button>
            </div>

        </div>
    )

}
export default Header;