import { Route, Routes } from 'react-router-dom';
import Container from './components/common/Container/Container';
import Navbar from './components/views/Navbar/Navbar';
import Content from './components/views/Content/Content';
import Home from './components/pages/Home/Home';
import Known from './components/pages/Known/Known';
import Unknown from './components/pages/Unknown/Unknown';
import NotFound from './components/pages/NotFound/NotFound';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWords } from './redux/wordsRedux';
import WordForm from './components/features/WordForm/WordForm';
import { fetchImages } from './redux/imagesRedux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchWords()), [dispatch]);
  useEffect(() => dispatch(fetchImages()), [dispatch]);
  return (
    <Container>
      <Navbar />
      <WordForm />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/known" element={<Known />} />
          <Route path="/unknown" element={<Unknown />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default App;
