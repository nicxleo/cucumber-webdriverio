//Complete siguiendo las instrucciones del taller
var { Given } = require('cucumber');
var { When } = require('cucumber');
var { Then } = require('cucumber');
var { expect } = require('chai');

Given('I go to losestudiantes home screen', () => {
    browser.url('https://losestudiantes.co/');
    if ($('button=Cerrar').isDisplayed()) {
        $('button=Cerrar').click();
    }
});

When('I open the login screen', () => {
    $('button=Ingresar').waitForExist(5000);
    $('button=Ingresar').waitForDisplayed(5000);
    $('button=Ingresar').click();
});

When('I fill a wrong email and password', () => {
    var cajaLogIn = $('.cajaLogIn');

    var mailInput = cajaLogIn.$('input[name="correo"]');
    mailInput.click();
    mailInput.setValue('wrongemail@example.com');

    var passwordInput = cajaLogIn.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue('123467891');
});

When('I fill a right email and password', () => {
    var cajaLogIn = $('.cajaLogIn');

    var mailInput = cajaLogIn.$('input[name="correo"]');
    mailInput.click();
    mailInput.setValue('en.jimenez@uniandes.edu.co');

    var passwordInput = cajaLogIn.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue('tallerpruebas02');
});

When('I fill only name and email', () => {
    var cajaSignUp = $('.cajaSignUp');

    var nameInput = cajaSignUp.$('input[name="nombre"]');
    nameInput.click();
    nameInput.setValue('Pedro');

    var lastnameInput = cajaSignUp.$('input[name="apellido"]');
    lastnameInput.click();
    lastnameInput.setValue('Perez');

    var mailInput = cajaSignUp.$('input[name="correo"]');
    mailInput.click();
    mailInput.setValue('prueba@prueba.com');
});

When('I fill all except terms', () => {
    var cajaSignUp = $('.cajaSignUp');

    var nameInput = cajaSignUp.$('input[name="nombre"]');
    nameInput.click();
    nameInput.setValue('Pedro');

    var lastnameInput = cajaSignUp.$('input[name="apellido"]');
    lastnameInput.click();
    lastnameInput.setValue('Perez');

    var mailInput = cajaSignUp.$('input[name="correo"]');
    mailInput.click();
    mailInput.setValue('prueba@prueba.com');

    var passwordInput = cajaSignUp.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue('tallerpruebas');
});

When('I fill all fields', () => {
    var cajaSignUp = $('.cajaSignUp');

    var nameInput = cajaSignUp.$('input[name="nombre"]');
    nameInput.click();
    nameInput.setValue('Pedro');

    var lastnameInput = cajaSignUp.$('input[name="apellido"]');
    lastnameInput.click();
    lastnameInput.setValue('Perez');

    var mailInput = cajaSignUp.$('input[name="correo"]');
    mailInput.click();
    mailInput.setValue('prueba@prueba.com');

    var passwordInput = cajaSignUp.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue('tallerpruebas');

    var termsInput = cajaSignUp.$('input[name="acepta"]');
    termsInput.click();
});

When('I try to login', () => {
    var cajaLogIn = $('.cajaLogIn');
    cajaLogIn.$('button=Ingresar').click();
});

When('I try to sign in', () => {
    var cajaSignUp = $('.cajaSignUp');
    cajaSignUp.$('button=Registrarse').click();
});

Then('I expect to not be able to login', () => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});

Then('I already logged', () => {
    $('.dropDown[title="cuenta"]').waitForExist(5000);
});

Then('I expect to the page ask for email', () => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});

Then('I expect to the page ask for terms', () => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});