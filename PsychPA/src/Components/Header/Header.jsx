import { Link } from 'react-router-dom'
import classes from './Header.module.css'

export default function Header() {
    const user = {
        name : "Jane Maddison"
    }

    const logout = () => {}
  return <header className={classes.header}>
        <div className={classes.container}>
            <Link to="/" className={classes.logo}>
                Club Logo
            </Link>;
            <nav>
                <ul>
                                <Link to="/">Home</Link>
                                 <Link to="/players">Players</Link>
                                 <Link to="/match">Match</Link>
                                 <Link to="/stats">Stats</Link>
                           
                    {
                        user ?
                        (
                            <li className={classes.menu_container}>
                                 
                                <Link to="/profile">
                                    {user.name}
                                </Link>
                                <div className={classes.menu}>
                                    <Link to="/profile">Profile</Link>
                                    <Link to="/matches">Matches</Link>
                                    <a onClick={logout}>Logout</a>
                                </div>

                            </li>
                            
                        
                        ) : 
                        (<Link to="/login">Login</Link>)
                    }
                    
                </ul>
                
            </nav>
        </div>
  </header>
}
