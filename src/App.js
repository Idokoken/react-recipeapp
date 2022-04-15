import React from 'react';
import './App.css';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './contents/Header'
import Items from './contents/Items'
import ErrorPage from './contents/ErrorPage'

class App extends React.Component {

  render() {
  return (
  	<Router>
  	 <Header />
  	 <main>
  	  <Routes>
  	   <Route path='/' element={<Items />}/>
  	   <Route path='*' element={<ErrorPage />}/>
  	  </Routes>
  	 </main>
  	 <footer>
  	   <p className='text-light'>created by Idokoken</p>
  	 </footer>
  	</Router>
  	 	
  )
 }
 
 }
 
export default App; 