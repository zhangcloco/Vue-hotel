import {fetchCtw} from '../../../config/requestUtil'

// const GET = 'GET'
const POST = 'POST'

let getHotelList = (reqData = {}) => {
  return fetchCtw(reqData, POST, 'api/hotel/hotelListNew.htm')
}

export {
  getHotelList
}
