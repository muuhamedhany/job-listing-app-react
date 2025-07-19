import Hero from '../components/Hero.jsx'
import HomeCards from '../components/HomeCard.jsx'
import JobListings from '../components/JobListings.jsx'
import ViewAllJobs from '../components/ViewAllJobs'

function HomePage(){

    return(<>
    
        <Hero />
        <HomeCards />
        <JobListings isHome={true} />
        <ViewAllJobs />
    </>)

}

export default HomePage