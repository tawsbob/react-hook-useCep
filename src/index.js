import { useState, useEffect } from 'react';

const initialStatus = { loading: false, error: false, data: {} }


async function getCep(cep){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    return await response.json()
}

function useCep(  ) {

  const [ cep, setCep ] = useState(null)
  const [status, setStatus] = useState(initialStatus)

  useEffect(async () => {

    if(cep){
        setStatus({ ...status, loading: true })
        try {
            const data = await getCep(cep)
            setStatus({ ...status, loading: false, data })
        } catch(e){
            setStatus({ loading: false, error: true, data: {} })
            throw e
        }
    }
    
  }, [ cep ]);


  return [status, setCep]
 
}

export default useCep