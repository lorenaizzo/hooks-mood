import React, { useState, useEffect } from 'react';


export default function MoodList(props) {
    const [moodsHtml, setMoodsHtml] = useState([]);

    useEffect(()=> {
        const moodsHtmlAux = props.moods.map((aMood, index) => (
            <tr key={index}>
                <td>{aMood.mood}</td>
                <td>{aMood.message}</td>
            </tr>
        ));
        setMoodsHtml(moodsHtmlAux);
    }, [props]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Estado de animo</th>
                    <th>Mensaje</th>
                </tr>
            </thead>
            <tbody>
                {moodsHtml}
            </tbody>
        </table>
    );
}
