import { Fragment } from "react";
import classes from './OpenCart.module.css'
import Modal from "./Module";
 



const OpenCart = (props) => {
    return (
        <Fragment>
            <Modal className={classes.cart}>
                <form className={classes.form}>
                    <label className={classes.label}>Name</label>
                    <input className={classes.input}></input>
                    <label className={classes.label}>Email</label>
                    <input className={classes.input}></input>
                    <label className={classes.label}>Password</label>
                    <input className={classes.input}></input>
                    <div className={classes.btn}>
                        <button className={classes.btns}>submit</button>
                        <button className={classes.btns}>close</button>
                    </div>
                </form>
            </Modal>
        </Fragment>
    )


}
export default OpenCart;