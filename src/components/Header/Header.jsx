import chef from '../../assets/images/chef-claude-icon.png'
import './Header.css'

export default function Header() {
  return (
    <header>
      <img src={chef} className="chefLogo" alt="chefLogo" />
      <h1>Chef Claude</h1>
    </header>
  )
}
