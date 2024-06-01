import React from "react";
import Header  from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App(){
    return(
        <div>
            <Header />
            {notes.map(noteText => (
            <Note 
                key={noteText.key}
                title={noteText.title}
                content={noteText.content}
               />
            ))}
            <Footer />
        </div>
    );
}

export default App;