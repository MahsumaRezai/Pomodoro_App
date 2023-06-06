import classes from './Header.module.css'

const Header = (porps) => {
    return (
        <div className={classes.content}>
            <div className={classes.head}>
                <div><h1 className={classes.title}>Pomofocus</h1></div>
                <div><button className={classes.btn}>Login</button></div>
            </div>

        </div>
    )

}
export default Header;