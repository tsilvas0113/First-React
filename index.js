function Header () {
    return (
        <header>
            <nav>
                <img src='./react-logo.png' width='50px' />
            </nav>
        </header>
    )
}

function MainContent () {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>React is cool</li>
                <li>React can get me hired</li>
                <li>React can make great looking sites</li>
            </ol>
        </div>
    )
}

function Footer () {
    return (
        <footer>
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