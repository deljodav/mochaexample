const { expect } = require("chai");
let chai = require('chai');
let  chaiHttp = require('chai-http');
const addContext = require('mochawesome/addContext');
chai.use(chaiHttp);

describe('check sum ',function(){

    it('check the email',async function(){

        let response = await chai.request('https://reqres.in').get('/api/users/2');
        addContext(this,JSON.stringify(response.body))
        console.log(response.body);
        expect(response.body.data.email).to.equal('net.weaver@reqres.in');
    })

    it('check the first name',async function(){

        let response = await chai.request('https://reqres.in').get('/api/users/2');
        addContext(this,JSON.stringify(response.body))
        console.log(response.body);
        expect(response.body.data.first_name).to.equal('Janet');
    })



})