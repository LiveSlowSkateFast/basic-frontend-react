import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateAudience } from 'actions'
import { Select } from 'components'

const AudienceSelect = ({ availableResources, currentAudience, updateAudience, onChange }) => (
  <Select
    options={availableResources.map(resource => (
      { label: resource.name, value: resource.id }
    ))}
    onChange={e => {
      const resource = availableResources.find(res =>
        res.id === e.target.value)
      updateAudience(resource.audience)
      onChange(resource.id)
    }}
    selected={availableResources.find(resource =>
      resource.audience === currentAudience).id} />
)

AudienceSelect.propTypes = {
  availableResources: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    audience: PropTypes.string.isRequired,
  })),
  onChange: PropTypes.func.isRequired,
  currentAudience: PropTypes.string.isRequired,
  updateAudience: PropTypes.func.isRequired,
}

export default connect((state => ({
  currentAudience: state.audience
})), { updateAudience })(AudienceSelect)