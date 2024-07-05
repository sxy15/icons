import { CheckTwo, CloseTwo, Programmer } from "@anfu/icon-react";
import { IconProvider } from "@anfu/icon-react";

function App() {

  return (
    <div className="App">
        <IconProvider value={{
            tag: 'i',
            size: 30,
            colors: {
                outline: {
                    fill: '#ff0000'
                }
            }
        }}>
            <CheckTwo></CheckTwo>
            <CloseTwo></CloseTwo>
            <Programmer></Programmer>
        </IconProvider>
    </div>
  )
}

export default App
