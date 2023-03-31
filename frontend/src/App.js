import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/HomePage';
import { QuizPage } from './Pages/QuizPage';
import { StartPage } from './Pages/StartPage';
import { Survey } from './Pages/SurveyPage';
import { useState } from 'react';
import { Result } from './Pages/SubmittedPage';
import { SpecialistPage } from './Pages/SpecialistPage';
import { Login } from './Pages/LoginPage';
import { SignUp } from './Pages/SignupPage';
import ResultChart from './Components/Chart';

export default function App() {
  const [score, setScore] = useState([]);
  const [surveyScore, setSurveyScore] = useState([]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/getting-started' element={<StartPage />} />
      <Route path='/quiz' element={<QuizPage score={score} setScore={setScore} />} />
      <Route path='/survey' element={<Survey surveyScore={surveyScore} setSurveyScore={setSurveyScore} />} />
      <Route
        path='/result'
        element={<Result score={score} setScore={setScore} surveyScore={surveyScore} setSurveyScore={setSurveyScore} />}
      />
      <Route path='/specialist' element={<SpecialistPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/result-chart' element={<ResultChart score={3} />} />
      <Route path='*' element={<h1>404 - Page not found</h1>} />
    </Routes>
  );
}
