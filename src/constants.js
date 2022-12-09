const base_url = "http://localhost:5000"
const uploadSales = base_url + "/upload/sales"
const uploadInventory = base_url + "/upload/inventory"
const register = base_url + "/auth/register"
const login = base_url + "/auth/login"
const dashboard = base_url + "/dashboard/get-dashboard-analytics"


const urls = {
    base_url,
    uploadSales,
    uploadInventory,
    register,
    login,
    dashboard
}
export default urls