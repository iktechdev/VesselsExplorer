import {client} from '../client/client'

export const updateVessels =(teste)=>{
    console.log(typeof(teste))
    setInterval(() => {
        client().then(
            (response)=>{
                teste(response)
            }
        )
    }, 10000);

    return teste
}