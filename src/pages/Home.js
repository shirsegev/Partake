import * as React from 'react';
import AppBar from '../components/AppBar'
import BottomNavigation from '../components/BottomNavigation.js';
import SpeedDial from '../components/SpeedDial.js';
import MasonryImageList from '../components/Posts.js'
import '../styles/Home.css'

// This is the Home page where there is a view of all the cards

export default function Home() {
    // const [posts, setHome] = React.useState([])

    // React.useEffect(() => {
    //     // you can watch this vid https://www.youtube.com/watch?v=MnIEJMgvuvc&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=9
    //     // this is a request to the server for the data in db.json
    //     fetch( 'http://localhost:8000/posts')
    //     // then take the response object and parse it to js arrat
    //     .then(response => response.json())
    //     // data is the array outputed from response.json(), we send that array to setHome
    //     .then(data => setHome(data))
    // }, [])
    

    return(
        <div className='HomeContainer' sx={{height:'100%'}}>
            <AppBar />
            <MasonryImageList />
            <SpeedDial /> 
            <BottomNavigation />
        </div>
    )
}



                // {/* cycle threw posts array printing the post.title attribute */}
                // {posts.map(post => (
                //     <p key={post.id}> {post.title} </p>
                // ))}