import "./donate.css"

const Donate = () => {
  return (
    <div className="donate">
      <div className="donate__header">
        <h1 className="h1">Here at Acme Outdoors</h1>
        <h4 className="h4">every dollar counts</h4>
        <p className="p">Acme Outdoors is more than just a company, we&apos;re a community of people who care for one another and for our city. During this time, due to shelter in place orders, only a select few of our staff are able to work. Any donations you make to Acme will help make sure our employees are cared for and can stay safe in these uncertain times.</p>
        <div className="donate__header--overlay"></div>
      </div>
      <div className="donate__body">
        <div className="donate__body--container">
          <button type="button">Donate $100</button>
          <button type="button">Donate $50</button>
          <button type="button">Donate $25</button>
          <button type="button">Donate $15</button>
          <button type="button">Donate $5</button>
        </div>
      </div>
    </div>
  )
}

export default Donate
