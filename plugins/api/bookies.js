import appRequest from "@/plugins/api/appRequest";

export default {
  getSportBookies() {
    return appRequest.apiGet('/api/bookies/category/1')
  },
  getFreeBets(total) {
    return appRequest.apiGet('/api/bookies/free-bets/' + total)
  }
}
