import Card from '../UI/Card';
import classes from './Addtime.module.css'
import ButtonLogn from './ButtonLogn';
import ButtonPomdor from './ButtonPomdor';
import ButtonShort from './ButtonShort';
const Addtime = (props) => {
    const startHandler = () => {
        const data = new Date();
        document.getElementById("start").innerText = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();

    }
    setInterval(startHandler, 1000);
    const endHanlder = () => {
       return clearTimeout(startHandler)

    }




    return (

        <Card >
            <form className={classes.content}>
                <div className={classes.buttons}>
                    <ButtonPomdor>Pomodoro</ButtonPomdor>
                    <ButtonShort >Short Break</ButtonShort>
                    <ButtonLogn>Long Break</ButtonLogn>
                </div>
                <div>
                    <div className={classes.time} id="start">0</div>
                </div>
                <div className={classes.btns}>
                    <button className={classes.btn} onClik={startHandler} >START</button>
                    <button className={classes.btn}onClick={endHanlder} >POUSE</button>

                </div>






            </form>

        </Card>

    );
};

export default Addtime;