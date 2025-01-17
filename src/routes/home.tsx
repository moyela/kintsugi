import { useState } from "react";

export default function Home() {
    return (
      <div className=' '>

        <div>
          <MyForm />
        </div>
      </div>


    );
  }

 function MyForm() {
    const [fullName, setFullName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(''); 
    const [address, setAddress] = useState('');
    const [joinUs, setJoinUs] = useState('no'); // Default to 'no'
    const [email, setEmail] = useState(''); 
    const [number, setNumber] = useState('');
    const [whyJoinUs, setWhyJoinUs] = useState(''); // Default to 'no'
    
    const handleSubmit = (event: any) => {
      event.preventDefault();
      // Handle form submission here, e.g., send data to server
      console.log('Form submitted:', { fullName, dateOfBirth, address, joinUs, email, number }); 
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col pt-5">
          <label htmlFor="fullName">1. Full Name:</label>
          <input 
            type="text" 
            id="fullName" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>
  
        <div className="pt-5">
          <label htmlFor="dateOfBirth">2. Date of Birth:</label>
          <input 
            type="date" 
            id="dateOfBirth" 
            value={dateOfBirth} 
            onChange={(e) => setDateOfBirth(e.target.value)} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>

        <div className="flex flex-col pt-5">
          <label htmlFor="fullName">3. Email Address:</label>
          <input 
            type="text" 
            id="fullName" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>

        <div className="flex flex-col pt-5">
          <label htmlFor="fullName">4. Phone num and Whatsapp num:</label>
          <input 
            type="text" 
            id="fullName" 
            value={number} 
            onChange={(e) => setNumber(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>
  
        <div className="pt-5">
          <label htmlFor="address">5. Address:</label>
          <input 
            id="address" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>

        <div className="pt-5">
          <label htmlFor="address">6. Why would you like to join us?</label>
          <textarea 
            id="address" 
            value={whyJoinUs} 
            onChange={(e) => setWhyJoinUs(e.target.value)} 
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
          />
        </div>
  
        <div className="pt-5 flex flex-col gap-2">
          <label>7. How would you like to volunteer with us?</label>
          <div>
            <input 
              type="radio" 
              id="joinUsYes" 
              value="yes" 
              checked={joinUs === 'yes'} 
              onChange={() => setJoinUs('yes')} 
              className="" 
            />
            <label htmlFor="joinUsYes">  Administration</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="joinUsNo" 
              value="no" 
              checked={joinUs === 'no'} 
              onChange={() => setJoinUs('no')} 
              className="" 
            />
            <label htmlFor="joinUsNo">  Social media management</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="joinUsNo" 
              value="no" 
              checked={joinUs === 'no'} 
              onChange={() => setJoinUs('no')} 
              className="" 
            />
            <label htmlFor="joinUsNo">  Community outreach</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="joinUsNo" 
              value="no" 
              checked={joinUs === 'no'} 
              onChange={() => setJoinUs('no')} 
              className="" 
            />
            <label htmlFor="joinUsNo">  Donations</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="joinUsNo" 
              value="no" 
              checked={joinUs === 'no'} 
              onChange={() => setJoinUs('no')} 
              className="" 
            />
            <label htmlFor="joinUsNo">  Other</label>
          </div>
        </div>

        <div className="pt-5 flex flex-col gap-2">
          <label>8. How did you hear about konji foundation?</label>
          <div>
            <input 
              type="radio" 
              id="joinUsYes" 
              value="yes" 
              checked={joinUs === 'yes'} 
              onChange={() => setJoinUs('yes')} 
              className="" 
            />
            <label htmlFor="joinUsYes">  Social Media (Instagram, Twitter, WhatsApp, LinkedIn, Other)</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="joinUsNo" 
              value="no" 
              checked={joinUs === 'no'} 
              onChange={() => setJoinUs('no')} 
              className="" 
            />
            <label htmlFor="joinUsNo">  Internet (Website, Features Articles, etc)</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="joinUsNo" 
              value="no" 
              checked={joinUs === 'no'} 
              onChange={() => setJoinUs('no')} 
              className="" 
            />
            <label htmlFor="joinUsNo">  Media (Flyers, Radio, News, etc)</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="joinUsNo" 
              value="no" 
              checked={joinUs === 'no'} 
              onChange={() => setJoinUs('no')} 
              className="" 
            />
            <label htmlFor="joinUsNo">  Referral</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="joinUsNo" 
              value="no" 
              checked={joinUs === 'no'} 
              onChange={() => setJoinUs('no')} 
              className="" 
            />
            <label htmlFor="joinUsNo">  Others</label>
          </div>
        </div>

        <div className="min-w-max pt-5">
          <div className="flex flex-row justify-around  ">
            <div className="px-4 py-2 bg-konjigreen rounded-lg text-slate-100 font-semibold">
              <button type="submit">Save & Go Back Home</button>
            </div>
          </div>
        </div>
      
      </form>
    );
  }
  