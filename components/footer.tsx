import styles from '../styles/footer.module.scss';

export default function Footer() {
    return (
        <main className={styles['page-padding']}>
            <div className={`grid grid-cols-1 md:grid-cols-5 md:grid-rows-6 md:grid-flow-col ${styles['footer-grid']} gap-y-5 gap-x-20 md:gap-y-10 max-md:justify-items-center`}>
                <div><h4>Learn</h4></div>
                <div><a href='#'>Introduction</a></div>
                <div><a href='#'>Features</a></div>
                <div><a href='#'>Staking</a></div>
                <div><a href='#'>Get HEDRON</a></div>
                <div><a href='#'>FAQ</a></div>

                <div><h4>Build</h4></div>
                <div><a href='#'>Developer Portal</a></div>
                <div><a href='#'>Ignite CLI</a></div>
                <div><a href='#'>Cronos SDK</a></div>
                <div><a href='#'>IBC Protocol</a></div>
                <div></div>

                <div><h4>Explore</h4></div>
                <div><a href='#'>Tokens</a></div>
                <div><a href='#'>Apps & Services</a></div>
                <div><a href='#'>Wallets</a></div>
                <div><a href='#'>Gravity DEX</a></div>
                <div><a href='#'>Blog</a></div>

                <div><h4>Participate</h4></div>
                <div><a href='#'>Community</a></div>
                <div><a href='#'>Contributors</a></div>
                <div><a href='#'>Events</a></div>
                <div><a href='#'>Newsletters</a></div>
                <div></div>


                <div><h4>Resources</h4></div>
                <div><a href='#'>About</a></div>
                <div><a href='#'>Press Kit</a></div>
                <div><a href='#'>Design</a></div>
                <div><a href='#'>Resources</a></div>
            </div>
        </main>
    )
}