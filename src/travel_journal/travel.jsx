import { Header } from "./Components/Header";
import { Entry } from "./Components/entry";
import locationData from './Components/data';
import './Components/travel-journal.css';

export function Page(){
    const data = locationData.map((entry)=>{
        return <Entry 
            key={entry.id}
            entry={entry}
        /> 

    })
    return(
        <>
            <Header />
            <main class="container">
                {data}
            </main>
        </>
    )
}