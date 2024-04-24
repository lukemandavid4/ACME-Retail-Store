import {Link} from "react-router-dom"
import "./products.css"

const GreenPack = () => {
  return (
    <div className="product">
      <div className="product__header">
        <h1>Green Canvas Pack</h1>
      </div>
      <div className="product__body">
        <div className="green__pack"></div>
        <div className="product__body--right">
            <h1>Green Canvas Pack</h1>
            <h3>$ 125.00 USD</h3>
            <p>Quantity</p>
            <div>
                <input type="number" name="quantity" id="quantity" min={1}/>
                <Link className='link'>Add to Cart</Link>
            </div>
            <h1>What&apos;s a Rich Text element?</h1>
            <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
            <h3>Static and dynamic content editing</h3>
            <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
            <h3>How to customize formatting for each rich text</h3>
            <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the &quot;When inside of&quot; nested selector system.</p>
        </div>
      </div>
    </div>
  )
}

export default GreenPack
