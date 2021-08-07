import './App.css';
import ImageSlider from "./components/ImageSlider";
import { SliderData } from './components/SliderData';

//https://www.youtube.com/watch?v=l1MYfu5YWHc
//sourceytlink

function App() {
  return <ImageSlider slides={SliderData} />
}

export default App;
