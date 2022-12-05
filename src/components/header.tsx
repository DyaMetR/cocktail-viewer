import '../styles/header.css'

type HeaderProps = {
  title: string;
  subtitle: string;
  secret: string;
}

/**
 * Displays the header of the web page. 
 */
const Header = ({title, subtitle, secret}: HeaderProps) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <h2 title={secret}>{subtitle}</h2>
    </div>
  )
}

export default Header;