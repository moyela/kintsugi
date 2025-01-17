import { useState, useEffect } from "react";

// ImageLink renders the external profile links to socials and github etc
export function ImageLink(props: {name:string, address:string, img_src:string, img_alt:string }) {
    return (
        <div className=" rounded-sm">
  
        <a className="" 
        href={props.address} 
        title={`Go to my ${props.name}`}
        target="_blank">
            
           <img 
           src={props.img_src} 
           alt={props.img_alt} 
           className="header-external-link"
           />
        </a>
    </div>
    )
}


export default function Header() {
    const twitter = "./twitter_icon.svg"
    const x = "./twitter_x_icon.svg"
    const [twitterIcon, setTwitterIcon ] = useState(twitter)

    useEffect(() => {
        // Set up an interval to update the prop every second
        const intervalId = setInterval(() => {
            let newValue

            if (twitterIcon === twitter) {
                newValue = x
            }
            else {
                newValue = twitter
            }
          
          // Update the state with the new value
          setTwitterIcon(newValue);
        }, 5000); // Interval in milliseconds (1000 milliseconds = 1 second)
    
        // Clear the interval when the component unmounts or when needed
        return () => clearInterval(intervalId);
      },); // Empty dependency array to run the effect only once on mount

    return (

        <div className="text-center flex flex-col">
            <div className="mt-10 rounded-xl bg-konjigreen bg-opacity-90 flex flex-col justify-around py-5 px-10 min-w-min text-slate-100">

                <div className=" mx-auto">
                    <p className=" font-semibold text-lg md:text-2xl pb-10">
                        Konji Foundation Volunteer Application Form
                    </p>
                    <p className=" md:text-sm pb-4">
                        The Konji Foundation aims to bridge the gap in sexual health information, particularly in marginalized communities. 
                        It addresses issues such as inadequate sexual education, the stigma surrounding sexual health, and limited access to resources. 
                        The foundation serves young adults, marginalized communities, and survivors of sexual violence, providing critical information, support, and resources to promote healthy practices and open discussions.
                    </p>
                        <p className="md:text-sm">
                    Join our Volunteer Team to be part of the course for a Positive change!
                    </p>   
                </div>

            </div>
        </div>
    );
}