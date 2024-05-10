import './App.css';
import './style.css';

import {MusicBoxModel} from "./model.js";
import {MusicBoxField} from "./view.tsx";
import {
  CroquetRoot
} from "@croquet/react";


function App() {
  return (
      <CroquetRoot
          sessionParams={{
            name: import.meta.env["VITE_CROQUET_APP_NAME"],
            apiKey: import.meta.env["VITE_CROQUET_API_KEY"],
            tps: 0.5,
            appId: import.meta.env["VITE_CROQUET_APP_ID"],
            password: import.meta.env["VITE_CROQUET_PASSWORD"],
            model: MusicBoxModel,
            eventRateLimit: import.meta.env["EVENT_RATE_LIMIT"] || 60,
          }}
        >
         <MusicBoxField />
      </CroquetRoot>
  )
}

export default App
