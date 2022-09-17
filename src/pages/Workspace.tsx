import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import FileSaver from 'file-saver';

import SetGetEditors from '../components/editors/get/lib/setGetEditors';
import StatusBar from '../components/status-bar/StatusBar';
import Inset from '../components/inset/Inset';

//'https://jsonplaceholder.typicode.com/posts'
function Workspace(): JSX.Element {
  const [tempErrorStorage, setTempErrorStorage] = useState<undefined | any[]>(undefined);

  const [editiorContent, setEditorContent] = useState<any>('');
  
  let blob: any = null;
  if(editiorContent != ''){
    blob = new Blob([JSON.stringify(editiorContent, null, '  ')], {type: 'application/json'});
  }
  
  
  const [currentInset, setCurrentInset] = useState(0);
  const insetNames = ['data', 'headers', 'config', 'status'];

  useEffect(() => {
    console.log(insetNames[currentInset]);
  }, [currentInset])
  

  return (
    <div>
    <div>
      <Inset elements={insetNames} element={currentInset} setElement={setCurrentInset}/>
      <div> 
        <SetGetEditors
          setEditorContent={setEditorContent}
          setTempErrorStorage={setTempErrorStorage}
        />
        <button onClick={() => FileSaver.saveAs(blob, "unnamed.json")}>save file</button>
        <Link to={'/get-fetch-form'}>Go back</Link>
      </div>
    </div>
      <StatusBar error={tempErrorStorage} />
      </div>
  )
}

export default Workspace;