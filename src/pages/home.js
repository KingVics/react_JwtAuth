import style from "../style/home.module.css"

export default function Home(props) {
    if(props.data) {
        return (
            <h1>{props.data.firstName}</h1>
        )
    }
    return (
        <section className={style.homeContainer}>
            <div>
                <h1>You're not logged in</h1>
            </div>
        </section>
    )
}
