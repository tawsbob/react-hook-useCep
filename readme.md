# useCep 
# useCep react hook

useCep is a react **hook** for get address information from [viacep](https://viacep.com.br/), 

## Installation

```javascript
npm install react-hook-usecep -S
```

## Import

```javascript
import useCep from 'react-hook-usecep';
```

## Usage

```javascript
function MyReactComponent(){

	//create state to store cep
	const [ cep, setCep ] = useState(null)
	//then set cep on hook
	const  status = useCep(cep)

	return (...)
}
```
### Status object 
```json
{
	"loading": false,
	"error": false,
	"data": {
		  "cep": "01001-000",
		  "logradouro": "Praça da Sé",
		  "complemento": "lado ímpar",
		  "bairro": "Sé",
		  "localidade": "São Paulo",
		  "uf": "SP",
		  "ibge": "3550308",
		  "gia": "1004",
		  "ddd": "11",
		  "siafi": "7107"
		}
}
```