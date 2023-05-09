import React, { useEffect, useState } from 'react'
import './Api.css'

function Api() {

    const [data,setData] =useState([]);
    const [count,setCount] =useState(1);
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${count}`
    
    const pre = ()=>{
        if(count>1){
            setCount(count-1);
        }
    }
    const nex = ()=>{
        setCount(count+1);
    }
    
    useEffect(()=>{
        try{
            fetch(url).then((result)=>result.json()).then((data)=>{
                setData(data.results);
            })

        }
        catch(error){
            console.log("Something is Error",error)

        }
        
       

    },[count])
  return (
   <>

      <div className='Button'>
        <button className='btn1' onClick={pre}>Previous...</button>
        <button className='btn2' onClick={nex}>Next...</button>
      </div>
     {
        data.map((dataObj)=>(
            <div className='movies-card'>

            <div className="card">
               <img src={`https://image.tmdb.org/t/p/original${dataObj.backdrop_path}`} className="card-img-top" alt="..."/>
                   <div className="card-body">
                     <h5 className="card-title">{dataObj.original_title}</h5>
                     <div className='Rating'>
                     <h6>Rating:{dataObj.vote_average} </h6>
                     <h6>Popularity: {dataObj.popularity}</h6>
                     <h6>Release Date: {dataObj.release_date}</h6>

                     </div>
                  <p className="card-text">{dataObj.overview}</p>
              </div>
            </div>
            </div>
        ))
     }
   
   </>
  )
}

export default Api