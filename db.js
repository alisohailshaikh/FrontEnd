const config = {
    user: 'Hamza',
    password: '123',
    server: 'LAPTOP-H3RC42SI', 
    database: 'master',
    driver: "msnodesqlv8",
    options:{
        trustServerCertififcate: true,
        trustedConnection: true,
        enableArithAbort: true,
        instancename:"MSSQLSERVER",
        encrypt: false
    },
    port: 1433
};

module.exports = config;