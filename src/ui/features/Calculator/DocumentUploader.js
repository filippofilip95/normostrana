import './DocumentUploader.scss'
import {useRef} from "preact/hooks";

const DocumentUploader = () => {
  const fileInput = useRef();

  function onButtonClick() {
    fileInput.current.click();
  }

  function onFileChange(e) {
    console.log(e.target.files);
    const files = Array.from(e.target.files);
    if (files.length === 0) {
      alert('Prosim Vyberte aspon jeden subor')
      return
    }

    if (files.length > 1) {
      alert('Prosim len jeden subor')
    }

    const body = new FormData();
    body.append('file', files[0])


    fetch('http://localhost:9000/.netlify/functions/test', {
      method: 'POST',
      body,
    }).then(res => res.json()).then(res => console.log(res))

  }

  return (
    <div className='document-uploader'>
      <img src={require('../../../assets/add-document.png')}/>
      <button onClick={onButtonClick} type='button' aria-label='Calculate'>
        Vyberte súbor
      </button>
      <input type='file' value='' onChange={onFileChange} ref={fileInput}/>
    </div>
  );
};

export default DocumentUploader;