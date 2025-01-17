import { ImageLink } from "./header"

export default function Footer() {
    return (
        <footer className="bg-konjigreen text-slate-50 font-semibold rounded-lg mt-9">
            <div className="mx-auto min-w-max">
                <div className="flex flex-row pt-16  pb-5 px-8">

                    <div className="px-20">
                        Konji
                    </div>

                    <div className="flex flex-col gap-3 pr-20">
                        <p>Home</p>
                        <p>Take quiz</p>
                        <p>Calendar</p>
                        <p>Library</p>
                        <p>Community</p>
                    </div>

                    <div className="flex flex-col gap-3 pr-20">
                        <p>About</p>
                        <p>Our story</p>
                        <p>Award</p>
                        <p>Our team</p>
                    </div>

                    <div className="flex flex-col gap-3 pr-20">
                        <p>Resources</p>
                        <p>Newsletter</p>
                        <p>Blog</p>
                        <p>Our policies</p>
                    </div>

                    <div className="flex flex-col float-right pl-20 gap-3 max-w-80">
                        <p>Newsletter</p>
                        <p>Subscribe to our newsletter and get free daily sexual tips</p>
                        <p><div className="border-2 px-3 py-1"> 📩 Subscribe</div></p>
                    </div>
                </div>

                <div className="h-1 min-w-max bg-white"></div>

                <div className="flex flex-row justify-around pt-2">
                    <div>
                        © 2025 Konji Foundation. All rights reserved.
                    </div>
                </div>

                <div className="flex justify-around pt-2 pb-10">
                     <div className="flex gap-5 mt-2 pl-2 md:pl-0 ">
                            
                        <ImageLink 
                            name="GitHub profile" 
                            address="https://www.github.com/"
                            img_src="./instagram_icon.svg"
                            img_alt="Github" 
                        />
                        <ImageLink 
                            name="LinkedIn profile" 
                            address="https://www.linkedin.com/"
                            img_src="./linkedin_icon.svg"
                            img_alt="LinkedIn" 
                        />

                        <ImageLink 
                            name="Bluesky profile" 
                            address="https://bsky.app/profile/"
                            img_src="./bluesky_icon.svg"
                            img_alt="Bluesky" 
                        />
                        <ImageLink 
                            name="Twitter/X profile" 
                            address="https://www.twitter.com/"
                            img_src="./twitter_x_icon.svg"
                            img_alt="Twitter" 
                        />
                    </div>
                </div>
                
            </div>
        </footer>
    )
}