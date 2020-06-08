import './DocumentUploader.scss'
import {useRef} from "preact/hooks";

const DocumentUploader = () => {
  const fileInput = useRef();

  function onButtonClick() {
    fileInput.current.click();
  }

  function onFileChange(e) {
    console.log(e.target.files);
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