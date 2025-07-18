import Globe from './images/globe-307805_1280.png'

export function Header(){
    return(
        <header className='header'>
            <img className='globe-logo' src={Globe}/>
            <h1>my travel journal</h1>
        </header>
    )
}