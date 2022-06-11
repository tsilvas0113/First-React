function NewPage () {
    return (
        <ol>
            <li>React is cool</li>
            <li>React can get me hired</li>
            <li>React can make great looking sites</li>
        </ol>
    )
}

ReactDOM.render(
    <NewPage />,
    document.getElementById('root')
)