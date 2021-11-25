import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/MetroManagementSystem';

class ApiService {

    authenticateLogin(obj, role) {
        return axios.post(USER_API_BASE_URL + '/' + role + '/authenticate', obj);
    }

    //User ApiService

    signupUser(signupUserObj) {
        return axios.post(USER_API_BASE_URL + '/user' + '/register', signupUserObj);
    }

    fetchSearchingData(sourceId, destinationId) {
        return axios.post(USER_API_BASE_URL + '/user' + '/station-search' + '/' + sourceId + '/' + destinationId);
    }

    saveMetrocard(metroObj) {
        return axios.post(USER_API_BASE_URL + '/user' + '/metrocard', metroObj);
    }

    //Payment Api
    fetchingPayment(paymentObj, tripFare) {
        return axios.post(USER_API_BASE_URL + '/user' + '/payment' + '/' + tripFare, paymentObj);
    }

    rechargeMetrocard(rechargeObj, amount) {
        return axios.post(USER_API_BASE_URL + '/user' + '/metrocard-recharge' + '/' + amount, rechargeObj);
    }

    // Station ApiService
    addStation(stationObj) {
        return axios.post(USER_API_BASE_URL + '/admin' + '/station', stationObj);
    }

    fetchStation() {
        return axios.get(USER_API_BASE_URL + '/admin' + '/station');
    }

    deleteStation(id) {
        return axios.delete(USER_API_BASE_URL + '/admin' + '/station' + '/' + id);
    }

    fetchStationById(id) {
        return axios.get(USER_API_BASE_URL + '/admin' + '/station' + '/' + id);
    }

    updateStation(id, stationObj) {
        return axios.put(USER_API_BASE_URL + '/admin' + '/station' + '/' + id, stationObj)
    }

    //Route ApiService
    addRoute(routeObj) {
        return axios.post(USER_API_BASE_URL + '/admin' + '/route', routeObj);
    }

    fetchRoute() {
        return axios.get(USER_API_BASE_URL + '/admin' + '/route');
    }

    // SubStation ApiService

    fetchSubstation() {
        return axios.get(USER_API_BASE_URL + '/admin' + '/substation');
    }

    //feedback Homepage contact us
    feedbackReport(feedbackObj) {
        return axios.post(USER_API_BASE_URL + '/admin' + '/feedback', feedbackObj);
    }

    fetchFeedback() {
        return axios.get(USER_API_BASE_URL + '/admin' + '/feedback');
    }
}

export default new ApiService();