import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'


const Dashboard = () => {
  const [first, setfirst] = useState('Retention rate');

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <div className='flex items-center w-4/5 justify-between m-10 font-medium text-gray-700'>
        <div className='flex '>
          <div className='border'>
            <button className=' p-4' onClick={() => setfirst('Retention rate')} >
              Retention rate            </button>
            <div className={`${first === 'Retention rate' ? 'flex' : "hidden"} bg-orange-600 h-1`}></div>
          </div>
          <div className='border'>
            <button className=' p-4' onClick={() => setfirst('Traffic source')}>
              Traffic source            </button>
            <div className={`${first === 'Traffic source ' ? 'flex' : "hidden"} bg-orange-600 h-1`}></div>

          </div>

        </div>
        <div>
          <div className=' border'>
            <select className='p-2 text-gray-700' name="" id="">
              <option value="">30 days</option>
              <option value="">3 months</option>
              <option value="">6 months</option>
              <option value="">1 year</option>
            </select>
          </div>
        </div>

      </div>
      <div  className={`${first === 'Retention rate' ? 'flex' : "hidden"} w-[400px]  gap-10 items-center justify-center`}>
        <Line
          data={
            {
              labels: ["Jun", "July", "August", "Sept", "Nov", "Dec"],
              datasets: [{
                label: "Success",
                data: [200, 400, 600, 800, 900, 1000],
                backgroundColor: 'rgb(124 58 237)', // Add the desired color for success
              },]
            }
          }
        />
        <Line
          data={
            {
              labels: ['male','female'],
              datasets: [{
                label: "Failure",
                data: [25, 50, 75],
                backgroundColor: 'rgb(249 115 22 )', // Add the desired color for success
              },]
            }
          }
        />


      </div>
      <div  className={`${first === 'Traffic Source' ? 'flex' : "hidden"} w-[400px]  gap-10 items-center justify-center`}>
        <Line
          data={
            {
              labels: ["Jun", "July", "August", "Sept", "Nov", "Dec"],
              datasets: [{
                label: "Success",
                data: [200, 400, 600, 800, 900, 1000],
                backgroundColor: 'rgb(124 58 237)', // Add the desired color for success
              },]
            }
          }
        />
        <Line
          data={
            {
              labels: ['male','female'],
              datasets: [{
                label: "Failure",
                data: [25, 50, 75],
                backgroundColor: 'rgb(249 115 22 )', // Add the desired color for success
              },]
            }
          }
        />


      </div>
    </div>
  )
}

export default Dashboard