import './onion-hater.css';

function OnionHater() {

    function handleChange(input) {
        let text = input.target.value.toLowerCase();
        text.includes('cebolla') ? alert('ODIO LA CEBOLLA') : text === 'cebolla';
        }

  return (
    <>
    <input 
        type = "textarea" 
        className='textarea'
        onChange = { handleChange } 
    />
    </>
  )
}

export default OnionHater;