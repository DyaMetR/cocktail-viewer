import '../styles/header.css'

type HeaderProps = {
  title: string;
  subtitle: string;
  tooltip: string;
}

/**
 * Displays the header of the web page. 
 */
const Header = ({title, subtitle, tooltip}: HeaderProps) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <h2 title={tooltip}>{subtitle}</h2>
    </div>
  )
}

export default Header;