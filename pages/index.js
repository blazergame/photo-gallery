import Head from 'next/head';
import Title from '../components/Title';
import PhotoCards from '../components/PhotoCards';
import Footer from '../components/Footer';

const Home = () => (
  <div className="container mx-auto bg-gray">
    <div className="text-center">
      <Title />
      <form>
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 w-3/4 px-4 mr-4" type="text" placeholder="photo"></input>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </form>

      {/* Should render the picture cards here */}
      <div className='m-6'>
        <div>
          <PhotoCards />
        </div>
      </div>
    </div>

    <Footer />
  </div>
)

export default Home
