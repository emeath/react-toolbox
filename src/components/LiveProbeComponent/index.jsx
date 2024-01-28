import { useState } from "react"

const LiveProbeComponent = () => {

    const [musics, setMusics] = useState([])
    const [music, setMusic] = useState()

    const previewMusics = (event) => {
        event.preventDefault()
        setMusics([...musics, music])
    }

    return (
        <div>
            <form onSubmit={previewMusics}>
                <label htmlFor="input_music">Music name:</label>
                <input type="text" id="input_music" onChange={ev => setMusic(ev.target.value)} />
                <button type="submit">Add</button>
            </form>
            <br /><br /><br />
            <pre>
                {JSON.stringify({ "myMusics": musics }, null, 4)}
            </pre>
        </div>

    )
}

export default LiveProbeComponent