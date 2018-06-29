const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const TRIGGER = 'TRIGGER'

const OPTS_DEFAULT = {
  createTrigger: true
}

export const action = (type, payload = {}) => (
  { type, ...payload }
)

export const createRequestTypes = (base, { createTrigger } = OPTS_DEFAULT) => {
  const actions = [REQUEST, SUCCESS, FAILURE]
  if (createTrigger) {
    actions.push(TRIGGER)
  }
  return actions.reduce(
    (acc, type) => (
      { ...acc, [type]: `${base}_${type}` }
    ), {})
}

export const createResponseEntityHandler = actionRequestTypes => (
  {
    request: () => action(actionRequestTypes.REQUEST),
    success: response => action(actionRequestTypes.SUCCESS, { payload: { response } }),
    failure: error => action(actionRequestTypes.FAILURE, { payload: { error } })
  }
)