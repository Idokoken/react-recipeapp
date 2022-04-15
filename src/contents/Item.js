import React from 'react'
//import axios from 'axios'
import Data from './data'
import {useParams} from 'react-router-dom'


function Item() {
	
	const {id} = useParams()
	
	const product = Data.filter(c => c.id == id).map(a => <div>
	  <img src={a.cover} className='img-fluid' alt={a.title} style={{maxHeight: '400'}} />
	    <h3 className='mb-0 mt-2'>{a.author}</h3>
	    <p className='mb-0'>{a.title}</p>
	    
	</div>)
	
	return (
	<div className='container'>
	 <div className='row'>
	  <div className='col-12'>
	  item
	  {product}
	  </div>
	  </div>
	</div>
	)
}

export default Item