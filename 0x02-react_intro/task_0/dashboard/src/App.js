import logo from './logo.jpg';
import './App.css';

export default function App() {
    return (
        <div>
            <header className="App-header">
                <img src={logo} alt="logo"></img>
                <h1>School dashboard</h1>
            </header>
            <div className="linea"></div>
            <body className="App-body">
                <p>Login to access the full dashboard</p>
            </body>
            <div className="linea"></div>
            <footer className="App-footer">
                <p>Copyright 2020 - holberton School</p>
            </footer>
        </div>
    );
}
  