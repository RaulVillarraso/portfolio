import './Section.css'
import PropTypes from 'prop-types'

function Section({ id, title, subtitle }) {
  
  const alignText = () => id % 2 === 0 ? 'end' : 'start'

  return (
    <div className="sectionCard" style={{alignItems: alignText()}}>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
    </div>
  )
}

Section.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string
}
export default Section