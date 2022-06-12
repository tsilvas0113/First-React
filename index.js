function Header () {
    return (
        <header>
            <nav className='nav'>
                <img className='logo' src='./react-logo.png' />
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent () {
    return (
        <div>
            <h1 className='title'>Reasons I'm excited to learn React</h1>
            <ol className='main-items'>
                <li>React is cool</li>
                <li>React can get me hired</li>
                <li>React can make great looking sites</li>
            </ol>
        </div>
    )
}

function Footer () {
    return (
        <footer className='footer'>
            <small>© 2022 Silvas development. All rights reserved.</small>
        </footer>
    )
}

function NewPage () {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <NewPage />,
    document.getElementById('root')
)