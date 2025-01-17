import { Link } from "react-router-dom"

export default function Work() {

    const project = [
      {
        id: 4,
        name: 'Crypto Price Dashboard',
        description: "A web application to monitor the prices of your favourite tokens",
        route: "https://norebase.moyela.com",
      },
      {
        id: 3,
        name: 'Shepherd Dashboard',
        description: "A fully responsive dashboard for a LLM study assistant tool.",
        route: "https://shepherd-mockup.moyela.com",
      },
      {
        id: 1,
        name: 'Caeser Cypher Encryptor',
        description: "A ruby based implementation of the Caeser Cipher protocol that encrypts and decrypts alphabetic strings with numeric keys with a simple uniform character shift algorithm.",
        route: "https://github.com/moyela/caeser_cipher_encryption",
      }
      // {
      //   id: 2,
      //   name: 'The Password Game',
      //   description: "Create the strongest password in the world.",
      //   route: "/projects/caeser-cypher-encryption",
      // }
    ]

    return (
      <div className="flex flex-col ">
        <ul id='project-list'>
          
          { project.map(project => (
            
              <div className='min-h-40 font-mono flex flex-col px-8 md:px-0 pb-8'>
                <li key={project.id}>
                  <span className="text-2xl mb-5">
                    {project.name}
                  </span>
                  <p>
                    {project.description}
                  </p>
                  <Link to={project.route}>
                    <div className="hover:bg-white hover:text-black text-blue-800">
                      Click here to view
                    </div>
                  </Link>
                </li>
              </div>
          ))}

        </ul>

      </div>
    );
  }
