let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let findByDistrictId = async function (req, res) {
    try {
        let id = req.query.district_id
        let date = req.query.date
        console.log(`query are:,${id} ${date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date} `
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const weather = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let ObjArrayCities = [];
        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            // let options = {
            //     method = "get",
            //     url:
            // }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=60fb9dd6874e490048b33b0a7903775f`)
            obj.temp = resp.data.main.temp
            ObjArrayCities.push(obj)
        }
        let sorted = ObjArrayCities.sort(function (a, b) { return a.temp - b.temp });
        console, log(sorted)
        res.status(200).send({ status: true, data: sorted })

    } catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: "server error" })
    }
}

let meme = async function (req, res) {
    try {
        let id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        console.log(`query are:,${id} ${text0} ${text1} ${username} ${password}`)
        let options = {
            method: "post",
            url: `https://api.imgflip.com/get_memes?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        res.status(201).send({ data: result.data })


    } catch (err) {
        console.log(err)
        res.status(500).send({ status: false, msg: "server error" })
    }
}




module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.findByDistrictId = findByDistrictId
module.exports.weather = weather
module.exports.meme = meme