import React, { useState } from 'react';
import styles from '../styles/navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className={`${styles['mobile-padding']} md:${styles['navbar-padding']}`}>
            <nav className={`flex items-center justify-between ${styles['navbar-font']} ${styles['navbar-height']}`}>
                <div className={styles['font-size-big']}>
                    <span>CRONOS</span>
                </div>
                <div className={`${styles['font-size-small']} ${styles['navbar-spacing']} hidden md:block`}>
                    <a href='#'>Learn</a>
                    <a href='#' className='justify-self-center'>Build</a>
                    <a href='#'>Explore</a>
                </div>
                <div className={`${styles['font-size-big']} hidden md:block`}>
                    <a href='#'>{'Get CRONOS >'}</a>
                </div>
                <div className="block block md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${isOpen ? "hidden" : "block"}`}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${isOpen ? "block" : "hidden"}`}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </nav>
            <div className={`flex items-center ${isOpen ? styles['sidebar-open'] : styles['sidebar-closed']}`}>
                <div className={`grid grid-col-1 w-full ${styles['sidebar-grid']}`}>
                    <div className={styles['grid-cell']}><span>Learn</span></div>
                    <hr />
                    <div className={styles['grid-cell']}><span>Build</span></div>
                    <hr />
                    <div className={styles['grid-cell']}><span>Explore</span></div>
                    <hr />
                    <div className={styles['grid-cell']}><span>Get CRONOS</span></div>
                </div>
            </div>

        </main>
    )
}