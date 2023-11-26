import {RouterProvider} from 'react-router-dom'
import router from './router'
import { useEffect } from 'react';
import { gapi} from 'gapi-script';

const clientID = "286710715940-2qc3719l95ng30ge767vasm4qrt6e7bp.apps.googleusercontent.com"

function App() {



  useEffect(() =>{
    function start(){
      gapi.client.init({
        clientID: clientID,
        scope: ""
      })
    }

    gapi.load('client:auth2', start)

  })

  return <RouterProvider router={router}/>
}

export default App;
