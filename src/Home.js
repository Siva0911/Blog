import Bloglist from "./Bloglist";
import useFetch from "./useFetch";


const Home = () => {  
  const {data,isPending,error}=useFetch('https://elegant-snyder-80de28.netlify.app/blogs')

  

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <Bloglist blogs={data} title="All Blogs!"/> }
    </div>
  );
}
 
export default Home;
