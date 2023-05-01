import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/index.module.scss'
import { faAngleRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import imgMarketplace from '../resources/images/marketplace.png';
import imgSecurity from '../resources/images/security.png';
import imgRouter from '../resources/images/router.png';
import imgCustodian from '../resources/images/custodian.png';
import icosahedron from '../resources/images/Icosahedron.png';
import icosahedronCropped from '../resources/images/Icosahedron-cropped.png';
import helix from '../resources/images/Helix.png';
import thorus from '../resources/images/Thorus.png';

export default function Home() {
  return (
    <main className={styles['page-padding']}>
      <div className={`grid justify-items-center ${styles['title']}`}>
        <Image
          src={icosahedron}
          alt=""
          className={styles['title-shape-l']} />
        <Image
          src={icosahedronCropped}
          alt=""
          className={styles['title-shape-r']} />

        <div className={styles['text-small']}>
          <span>WELCOME TO CRONOS</span>
        </div>
        <div className={`${styles['text-big']} ${styles['title-name']}`}>
          <span>The Internet of Blockchains.</span>
        </div>
        <div className={`${styles['title-description']} ${styles['text-medium']}`}>
          <span>
            Cronos is an ever expanding ecosystem of connected <br /> apps and services, built for a decentralized future.
          </span>
        </div>
      </div>
      <div className={`${styles['text-small']} ${styles['services-data-separator']}`}>
        <span>COMMUNITY-OWNED AND OPERATED</span>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${styles['services-data']}`}>
        <Image
          src={helix}
          alt=""
          className={styles['helix']} />
        <div>
          <div className={`${styles['services-data-title']} ${styles['text-big']}`}>
            <span>Enter a Universe of Connected Services.</span>
          </div>
          <div className={`${styles['text-medium']}`}>
            <span>
              Cronos apps and services connect using IBC, the Inter-Blockchain Communication protocol.
              This innovation enables you to freely exchange assets and data across sovereign.
            </span>
          </div>
          <div className={styles['buttons-row']}>
            <button className={`${styles['button-primary']}`}>Learn</button>
            <button className={`${styles['button-secondary']}`}>Explore Tokens <FontAwesomeIcon icon={faAngleRight} /></button>
          </div>
        </div>
        <div>
          <div className={`flex justify-center md:justify-end ${styles['services-data-margin']}`}>
            <span className={`${styles['services-data-numerical']} ${styles['text-big']}`}>265+</span>
          </div>
          <div className={`${styles['text-medium']} flex justify-center md:justify-end ${styles['services-data-label']}`}>
            <span>Apps & services</span>
          </div>

          <div className={`flex justify-center md:justify-end ${styles['services-data-margin']}`}>
            <span className={`${styles['services-data-numerical']} ${styles['text-big']}`}>$63B+</span>
          </div>
          <div className={`${styles['text-medium']} flex justify-center md:justify-end ${styles['services-data-label']}`}>
            <span>Digital assets</span>
          </div>
        </div>
      </div>

      <div className='grid justify-items-center'>
        <div className={styles['interchain']}>
          <Image
            src={thorus}
            alt=""
            className={styles['thorus']} />
          <div className={styles['text-small']}>
            <span>ENTER THE CRONOS HUB</span>
          </div>
          <div className={`${styles['text-big']} ${styles['interchain-title']}`}>
            <span>The Heart of the Interchain.</span>
          </div>
          <div className={`${styles['interchain-description']} ${styles['text-medium']}`}>
            <span>Serving as the economic center of Cronos,
              the Cronos Hub is a blockchain that provides
              vital services to the Interchain</span>
          </div>
        </div>
      </div>

      <div className={`grid grid-rows-2 grid-cols-1 max-md:gap-y-6 md:grid-cols-2 justify-items-center ${styles['grid-features']}`}>
        <div className={`${styles['grid-cell']} max-md:text-center`}>
          <Image
            src={imgMarketplace}
            id='img-marketplace'
            alt="Marketplace"
            className={styles['feature-img']}
          />
          <h3 className={`${styles['text-medium']} ${styles['cell-title']}`}>Marketplace</h3>
          <span className={`${styles['text-medium']} ${styles['cell-description']}`}>
            Set to operate a next-gen
            decentralized exchange, swapping
            digital assets from across the
            Interchain, with very low fees and
            instant transaction confirmation.
          </span>
        </div>
        <div className={`${styles['grid-cell']} max-md:text-center`}>
          <Image
            src={imgSecurity}
            id='img-security'
            alt="Security"
            className={styles['feature-img']}
          />
          <h3 className={`${styles['text-medium']} ${styles['cell-title']}`}>Security provider</h3>
          <span className={`${styles['text-medium']} ${styles['cell-description']}`}>
            With the upcoming Interchain
            Security feature, HEDRON will soon be
            securing many chains, in exchange
            for additional staking rewards.
          </span>
        </div>
        <div className={`${styles['grid-cell']} max-md:text-center`}>
          <Image
            src={imgRouter}
            alt="Router"
            className={styles['feature-img']}
          />
          <h3 className={`${styles['text-medium']} ${styles['cell-title']}`}>Router</h3>
          <span className={`${styles['text-medium']} ${styles['cell-description']}`}>
            A core mission of the Hub – to
            connect chains by establishing
            IBC connections with compatible
            chains and operating decentralized
            bridges with chains like Ethereum
            and Bitcoin.
          </span>
          <button className={`${styles['button-primary']} ${styles['btn-grid']}`}>
            Explore Tokens <FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
        <div className={`${styles['grid-cell']} max-md:text-center`}>
          <Image
            src={imgCustodian}
            alt="Custodian"
            className={styles['feature-img']}
          />
          <h3 className={`${styles['text-medium']} ${styles['cell-title']}`}>Custodian</h3>
          <span className={`${styles['text-medium']} ${styles['cell-description']}`}>
            Located at the crossroads of the
            Interchain, the Hub is extremely
            secure, the best place to hold
            digital assets and manage
            accounts across many chains.
          </span>
        </div>
      </div>

      <div className={styles['subscription']}>
        <hr />
        <div className={`grid grid-cols-1 md:grid-cols-2 justify-items-center content-center ${styles['subscription-grid']}`}>
          <div>
            <h3 className={`${styles['subscription-title']} ${styles['text-medium']}`}>Receive transmissions</h3>
            <span className={`${styles['subscription-description']} ${styles['text-medium']}`}>
              Unsubscribe at any time. <a>Privacy policy <FontAwesomeIcon icon={faArrowUp} size={'xs'} className={styles['subscription-icon']} /></a>
            </span>
          </div>
          <div>
            <input type="text" id="first_name"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full p-5"
              placeholder="Your Email" required />
          </div>
        </div>
        <hr />
      </div>
    </main>
  )
}
