import './App.css';
import React, {useState} from 'react'
import TeamSpliter from "./components/teamSpliter";
import Picture from './CTvT.PNG'

const nameField = {
    width: '500px'
}

const background = {
    backgroundImage: Picture
}

function App() {

    const [names, setNames] = useState('Name selection');
    const [listOfNames, setListOfNames] = useState([])
    const [teamOne , setTeamOne] = useState([])
    const [teamTwo , setTeamTwo] = useState([])

    function onTextChange(e) {
        setNames(e.target.value)
    }

    function randomNumberSelector(splitListOfNames){
        let firstTeam = []
        let secondTeam = []

        let listOfNamesCopy = splitListOfNames
        let loopCounter = Math.floor(splitListOfNames.length / 2) + 1

        for(let i = 0; i < loopCounter; i++){

            let randomNumber = Math.floor(Math.random() * listOfNamesCopy.length)
            firstTeam.push(listOfNamesCopy[randomNumber])
            listOfNamesCopy.splice(randomNumber, 1)

            if (listOfNamesCopy.length){
                randomNumber = Math.floor(Math.random() * listOfNamesCopy.length)
                secondTeam.push(listOfNamesCopy[randomNumber])
                listOfNamesCopy.splice(randomNumber, 1)
            }
        }
        setTeamOne(firstTeam)
        setTeamTwo(secondTeam)
    }

    function onNameSubmit(){
        const splitListOfNames = names.split(' ')
        setListOfNames(splitListOfNames)
        randomNumberSelector(splitListOfNames)
    }

    return (
        <div style={{backgroundImage: './CTvT.PNG'}}>
            <input
                style={nameField}
                id={'name'}
                onChange={(e) => onTextChange(e)}
                value={names}
            />
            <button
                onClick={() => onNameSubmit()}
            >
                {'Enter'}
            </button>
            {teamOne && teamTwo
                ?
                <TeamSpliter
                    firstTeam={teamOne}
                    secondTeam={teamTwo}
                />
            : null}
        </div>
    );
}

export default App;
