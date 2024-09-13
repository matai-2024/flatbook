import request from 'superagent'

const rootUrl = '/api/v1'

export function getFlats(): Promise<string[]> {
  return request.get(rootUrl + '/flats').then((res) => {
    return res.body.flats
  })
}
