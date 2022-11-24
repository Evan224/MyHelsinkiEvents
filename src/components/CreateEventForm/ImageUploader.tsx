import Button from '@mui/material/Button';

function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
  
      reader.onload = () => {
        resolve(reader.result);
      };
  
      reader.onerror = reject;
  
      reader.readAsArrayBuffer(file);
    })
  }

export default function ImageUploader({callback}){

    const changeCallback = async (e) => {
        e.preventDefault();
        const file = e.target.files[0]
        const result=await readFileAsync(file)
        callback(result)
    }

    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Avatar Image</label>
            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg 
            cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
            aria-describedby="file_input_help" id="file_input" type="file" onChange={changeCallback}/>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
        </div>
    )
}