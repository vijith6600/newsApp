import image from "../assets/intro-black-background-pop-text-footage-158554349_iconl.webp"
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light d-inline-block mb-3 my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{width:"330px", height:"200px"}}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News Discription jsdhuih suhvsduvh sdhciushv shushvdnsvuh"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem