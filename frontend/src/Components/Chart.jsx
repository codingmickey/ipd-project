import React from 'react';
import { Bar } from 'react-chartjs-2';

const ResultsPage = ({ score }) => {
  const message =
    score <= 25
      ? 'Congratulations! You are unlikely to have dyslexia.'
      : score <= 50
      ? 'You may have some symptoms of dyslexia. We recommend that you consult a specialist for further evaluation.'
      : 'You are likely to have dyslexia. We recommend that you consult a specialist for a full diagnosis and treatment plan.';

  const data = {
    labels: ['Score'],
    datasets: [
      {
        label: 'Your Score',
        data: [score],
        backgroundColor: ['rgba(52, 152, 219, 0.6)'],
        borderColor: ['rgba(52, 152, 219, 1)'],
        borderWidth: 1
      },
      {
        label: 'Possible Dyslexia Threshold',
        data: [25, 50, 75],
        backgroundColor: ['rgba(231, 76, 60, 0.6)', 'rgba(243, 156, 18, 0.6)', 'rgba(46, 204, 113, 0.6)'],
        borderColor: ['rgba(231, 76, 60, 1)', 'rgba(243, 156, 18, 1)', 'rgba(46, 204, 113, 1)'],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className='bg-gray-100 h-screen'>
      <div className='container mx-auto py-16 px-4'>
        <h1 className='text-3xl font-bold mb-8'>Your Results</h1>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <div className='flex mb-8'>
            <div className='w-1/2'>
              <p className='text-lg mb-4'>Your score on the dyslexia prediction test is: {score}</p>
              <p className='text-lg'>{message}</p>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
              <Bar
                data={data}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                      ticks: {
                        stepSize: 25
                      }
                    }
                  }
                }}
              />
            </div>
          </div>
          <p className='text-lg'>
            The dyslexia prediction test assesses your ability to read and comprehend written language. The test
            consists of a series of passages followed by multiple-choice questions. Your score is calculated based on
            the number of questions you answer correctly. Scores below 25 are considered low risk for dyslexia, scores
            between 25 and 50 indicate some risk of dyslexia, and scores above 50 indicate a high risk of dyslexia. If
            you are concerned about your results, we recommend that you consult a specialist for a full diagnosis and
            treatment plan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
