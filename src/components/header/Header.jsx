import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <a href="/announcement" type="button" className="header__announcement">Announcement</a>
      <p className="header__info">How we&apos;re responding to COVID-19</p>
    </div>
  )
}

export default Header
