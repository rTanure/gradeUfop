import Header from './components/Header'
import Grade from './components/Grade'
import Footer from './components/Footer';
import { useState } from 'react'

function App() {
  const [ courseId, setCourseId] = useState(1);

  return (
    <>
      <Header states={[courseId, setCourseId]}/>
      <Grade states={[courseId, setCourseId]}/>
      <Footer />
    </>
  )
}

export default App
