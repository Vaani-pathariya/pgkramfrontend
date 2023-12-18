import React,{useState} from 'react'
import searchicon from '../../assets/searchicon.svg';
import JobDisplay from '../../components/JobDisplay';
import Featured from '../../components/Featured';
const Jobs = () => {

  const [jobs, setJobs] = useState([
    {
      id: 1,
      icon: 'icon1',
      position: 'Frontend Developer',
      company: 'Tech Co.',
      medium: 'Remote only',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      icon: 'icon2',
      position: 'UX/UI Designer',
      company: 'Design Studio',
      medium: 'On-site',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 3,
      icon: 'icon3',
      position: 'backend Developer',
      company: 'innovation Co.',
      medium: 'onsite only',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      icon: 'icon4',
      position: 'SDE',
      company: 'jss',
      medium: 'onsite only',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more dummy jobs as needed
  ]);

  const [hasPremium, setHasPremium] = useState(false);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const handleJobFinderClick = () => {
    if (!hasPremium) {
      // User doesn't have premium, show popup
      setShowPremiumPopup(true);
    } else {
      // Handle premium user logic
    }
  };

  const handleRemoveJob = (id) => {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== id));
  };

  const handleSaveJob = (id) => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || {};
  
    // Check if the job ID is already saved
    if (savedJobs[id]) {
      console.log('Job is already saved');
    } else {
      savedJobs[id] = true;
      localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
      console.log('Job saved successfully');
    }
  };
  
  

  const handlePopupClose = () => {
    setShowPremiumPopup(false);
  };

  return (
    <div className='flex m-auto py-4 bg-gray-100'>
      {/* 1st col */}
      <div className='w-3/5 m-auto'>

        {/* search */}
        <div className='flex m-auto'>
        <div className='bg-white justify-between items-center px-10 py-1 rounded-md flex w-4/5 m-auto'>
          <div className='w-full'><input className='w-full py-1 px-2' type='text' placeholder='Search'/></div>
          <button><img  className='bg-[#ED9017] rounded-md p-2' src={searchicon} alt="searchicon" /></button>
        </div>
        <div className='1/5 m-auto'>
          <button onClick={handleJobFinderClick} className='py-2 px-6 rounded-lg text-white font-semibold bg-[#ED9017]'>Job Finder</button>
        </div>
        </div>

 {/* Premium Popup */}
 {showPremiumPopup && (
        <div className='fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-70'
        >
          <div className='my-8 text-[24px]  text-center font-semibold'>Join <span className='text-[#4f2ce0] font-bold'>PGRKAM Premium </span> and get access to career - boosting features. </div>
          <div className='bg-white w-[40vw] p-8 rounded-md shadow-2xl'>
            {/* Close button */}
           <div className='flex justify-end'> <button
              className='flex p-2 cursor-pointer'
              onClick={handlePopupClose}
            >
              &times;
            </button></div>

            {/* Popup content */}
            <div className='my-4 '>
            <h2 className='text-xl font-semibold mb-4 text-center'>Premium Information</h2>
            <ul className='list-disc my-auto'>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ab!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos provident exercitationem accusantium recusandae modi quidem vitae consequatur perferendis sit repudiandae sint repellendus voluptatum beatae velit natus, neque fugit tempora corporis.  </li>
              <li>Lorem ipsum dolor sit amet.</li>
              </ul>

              <div className='text-center my-4'>
              <button className='rounded-lg py-2 px-8 bg-[#ED9017] text-white font-bold text-center'>
                XXX / Month
              </button>
              </div>
            </div>
            {/* Add more premium details as needed */}
          </div>
        </div>
      )}

        {/* filters */}
    <div className='flex m-auto'>
      
   <div className='mx-auto my-4 '>
   <select className='py-1 px-2 '>
        <option value="Salary"> Salary</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
   </div>

   <div className='mx-auto my-4 '>
   <select className='py-1 px-2 '>
        <option value="Salary"> Type of Workplace</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
   </div>

   <div className='mx-auto my-4 '>
   <select className='py-1 px-2 '>
        <option value="Salary"> Experience Level</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
   </div>

   <div className='mx-auto my-4 '>
   <select className='py-1 px-2 '>
        <option value="Salary">Distance</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
   </div>

    </div>

    {/* start of jobs */}
    <div className='text-[14px] text-center my-4'>RECOMMENDED JOBS FOR YOU</div>

    {/* jobs */}
    {jobs.map(job => (
  <JobDisplay
    key={job.id}
    id={job.id} 
    icon={job.icon}
    position={job.position}
    company={job.company}
    medium={job.medium}
    text={job.text}
    onRemove={() => handleRemoveJob(job.id)}
    onSave={() => handleSaveJob(job.id)}
  />
))}
      </div>

{/* 2nd col */}
      <div className='w-1/5 m-auto'>
        <Featured/>
      </div>
    </div>
  )
}

export default Jobs 