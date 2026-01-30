import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

export const Contacto = () => {
  return (
    <section className="contacto">
      <div className="wrap">

        <img src="https://res.cloudinary.com/dajs3qkmc/image/upload/v1769812827/ghibli_jaej4w.png" title="Allison" alt="Allison" />

        <div className="bio">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, velit dolorum! Laboriosam culpa libero expedita rerum blanditiis enim ut quia vel mollitia sit accusamus, soluta velit similique, asperiores alias omnis. Exercitationem temporibus quia tempora voluptate numquam cupiditate ex deleniti sapiente deserunt ipsam nam ad saepe, dolorum quod aliquam voluptas eveniet.
        </div>

        <div className="socials">
          <a href="https://wa.me/51933825018" target="_blank">
            <FontAwesomeIcon className='whatsapp' icon={faWhatsapp} /> 
            <p>933 825 018</p>
          </a>
          <a href="https://www.instagram.com/douce.lapin" target="_blank">
            <FontAwesomeIcon className='instagram' icon={faInstagram} />
            <p>douce.lapin</p>
          </a>
          <a href="https://www.tiktok.com/@douce.lapin" target="_blank">
            <FontAwesomeIcon className='tiktok' icon={faTiktok} />
            <p>douce.lapin</p>
          </a>
        </div>
      </div>
    </section>
  )
}
