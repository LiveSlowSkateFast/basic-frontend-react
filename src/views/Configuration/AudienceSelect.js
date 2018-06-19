import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateAudience } from 'actions'
import { Select } from 'components'

const availableAudiences = [
  'https://jp-dev.auth0.com/api/v2/',
  'https://jp-dev.auth0.com/userinfo',
  'https://basic-backend-express',
]

const AudienceSelect = ({ currentAudience, updateAudience }) => (
  <Select
    options={availableAudiences.map(audience => (
      { label: audience, value: audience }))}
    onChange={e => updateAudience(e.target.value)}
    selected={currentAudience} />
)

AudienceSelect.propTypes = {
  currentAudience: PropTypes.string.isRequired,
  updateAudience: PropTypes.func.isRequired,
}

export default connect((state => ({
  currentAudience: state.audience
})), { updateAudience })(AudienceSelect)