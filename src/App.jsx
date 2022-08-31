import { Template, Content } from './components/index.js'
import VideoComponent from './components/VideoComponent/VideoComponent.jsx'



function App() {
  console.log('online--App.jsx');
  return (
    <>
      <VideoComponent />
      <Template>
        <Content />
      </Template>
    </>
  )
}

export default App
