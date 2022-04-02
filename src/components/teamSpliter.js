import React, {useState} from 'react'

const table = {
    width: '100%',
    textAlign: 'center',
    border: '1px solid',
    borderColor: '#000'
}
const tableRow = {
    border: '1px solid',
    borderColor: '#000'
}
function TeamSpliter(props){

    return (
        <React.Fragment>
            <table
            style={table}
            >
                <tr>
                    <th>Team A</th>
                    <th>Team B</th>
                </tr>
                {props.firstTeam.map((person, idx) => (
                    <tr

                        key={person}
                    >
                        <td
                            style={tableRow}
                        >
                            {props.firstTeam[idx]}
                        </td>
                        <td
                            style={tableRow}
                        >

                            {props.secondTeam[idx] ?? ''}
                        </td>
                    </tr>
                ))}
            </table>
        </React.Fragment>
    )

}

export default TeamSpliter