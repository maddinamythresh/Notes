import notes from "../assets/notes.webp"

export default function Header(){
    return(
        <header>
            <img src={notes}/>
            <h2>Notes</h2>
        </header>

    );
}