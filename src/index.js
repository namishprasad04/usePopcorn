import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';

// function Test() {
//   const[moviesRating , setMoviesRating] = useState(0);
//   return(
//     <>
//     <StarRating maxRating={10} color='pink' onSetRating={setMoviesRating}/>
//     <p>This movie was rated {moviesRating} stars</p>
//     </>
//   )
  
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['Terrible' , 'Bad' , 'Okay' , 'Good' , 'Amazing']}/>
    <StarRating maxRating={5} color={'red'} defaultRating={3}/>
    <StarRating maxRating={5} color={'blue'} className='Test'/>
    <Test/> */}
  </React.StrictMode>
);
