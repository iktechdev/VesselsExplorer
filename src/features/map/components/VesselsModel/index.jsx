import { createStore } from 'redux'
import {client} from '../../../../bff/client/client'


const initial = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    "lat": 86,
                    "lng": 35
                },
                {
                    "lat": 67,
                    "lng": 36
                },
                {
                    "lat": 8,
                    "lng": 37
                }
            ]
        );
        }, 1000);
    });

const initialState = 
    [
        {
            "lat": 86,
            "lng": 35
        },
        {
            "lat": 67,
            "lng": 36
        },
        {
            "lat": 8,
            "lng": 37
        }
    ]


const reducer = (state = initial, action) => {
    if(action.type === "UPDATE_LIST"){
        let updatedList = client().then(
            (response)=>{
                console.log('vessels model')
                console.log(response)
                state = response
                return response
            }
        )
        return updatedList
    }
    return state
}

export const store = createStore(reducer)


