import styles from "./Promo.module.css"

const Promo = ({slogan,text,btn_text}) => {
    return(
        <div className={styles.s1}>
                <h2 className={styles.slogan}>{slogan}</h2>
                <p>{text}</p>
                <div className={styles.btn}>
                    <button className={styles.create_btn}>{btn_text}</button>
                </div>
        </div>
    )
}

export default Promo