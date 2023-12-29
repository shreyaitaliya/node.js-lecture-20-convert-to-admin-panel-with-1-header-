const dashboard = (req, res) => {
    return res.render('dashbord');
}

const user = (req, res) => {
    return res.render('user');
}

const table = (req, res) => {
    return res.render('table');
}

const typography = (req, res) => {
    return res.render('typography');
}

const icon = (req, res) => {
    return res.render('icon');
}

const notification = (req, res) => {
    return res.render('notification');
}

const upgrad = (req, res) => {
    return res.render('upgrad');
}

module.exports = ({
    dashboard, user, table, typography, icon, notification, upgrad
})