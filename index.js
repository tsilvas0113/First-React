//Imperative way - telling how to do something

const header = document.createElement('h1')
header.textContent = "Buddy's ears are powerful"
header.className = 'header'

document.getElementById('root').append(header)

//Declarative way - telling what to do

ReactDOM.render(<h1 className="header">Buddy's ears are powerful</h1>,
    document.getElementById('root')
)