import { useEffect } from "react";
import "./App.css";
const TorSpeech = require("tor-speech");

function App() {
  useEffect(() => {
    (async () => {
      const { killTor, google, langCodes } = await TorSpeech();

      const result = await google({
        text: "Hi, how are you?",
        langCode: langCodes.english,
      });

      console.log(result);

      killTor();
    })();
  }, []);
  return <div className="App">English App</div>;
}

export default App;
