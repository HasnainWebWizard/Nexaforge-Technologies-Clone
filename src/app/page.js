import HeroCont from './containers/HeroCont';
import BoostProdCont from './containers/BoostProdCont';
import ImgCont from './containers/ImgCont';
import FloatingChatButton from './components/FloatingChatButton';

function Home() {
  return (
    <>
        <HeroCont />
        <BoostProdCont />
        <ImgCont/>
        <FloatingChatButton/>
    </>
  )
} export default Home;
