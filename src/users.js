const newuser = {
    name: "Lewis Doe",
    age: 32,
    parents: {
        father: "Simon Doe",
        mother: "Marie Doe"
    },
    diplomas: [
        {
            school: "ABC University",
            year: 2020,
            completed: true,
            internship: {
                hours: 310,
                location: "ABC Company"
            }
        }
    ]
}
function addUser(param) {
    let body = new newuser();
    body.name = param.name;
    body.age = param.age;
    body.parents = param.parents;
    body.diplomas = param.diplomas;
    return body
}

function getUser(param) {
    const user = {
        name: "Lewis Doe",
        age: 32,
        parents: {
            father: "Simon Doe",
            mother: "Marie Doe"
        },
        diplomas: [
            {
                school: "ABC University",
                year: 2020,
                completed: true,
                internship: {
                    hours: 310,
                    location: "ABC Company"
                }
            }
        ]
    }
    return user
}


module.exports = {
    addUser,
    getUser
}