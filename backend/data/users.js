import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin',
        email: 'admin@myonlineretail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Bruno Guedes',
        email: 'bguedes@myonlineretail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'John Doe',
        email: 'jdoe@myonlineretail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];

export default users;