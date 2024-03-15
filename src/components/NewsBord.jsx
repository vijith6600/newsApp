import { useEffect } from "react";
import { useState } from "react"

const NewsBord = () => {
    const [article,setArticles]=useState([]);
    
    useEffect(()=>{
       let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
       fetch(url).then(res=>res.json())
       .then(data=>setArticles(data.articles)); 
    },[])

  return (
    <div>
        <h2 className='text-center'>
            Latest <span className='badge bg-danger text-light'>News</span>
        </h2>
        {article.map((news,index)=>}
    </div>
  )
}

export default NewsBord