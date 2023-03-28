

const homePage = (req, res) => {
    //This data must come from database or cache
    const data = {
        title: 'Themba G Chauke | Undergraduate Computer Science Student.'
    };
    res.render('index', data)
}

const workPage = (req, res) => {
    //This data must come from database or cache
    const data = {
        sen: 'This data must come from database or cache',
        title: 'Themba G Chauke | List of all projects i worked on.'
    };


    res.render('projects', data)
}

const adminPage = (req, res) =>{

    res.status(200).render('admin')
}

const contactPage = (req, res) => {

    res.json("Contact Page Controller")

}

module.exports = {
    homePage,
    contactPage,
    workPage, 
    adminPage
}








