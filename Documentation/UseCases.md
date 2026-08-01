# Documento de Casos de Uso
## Lista dos Casos de Uso
- UC 01: sign up
- UC 02: Login
## Agencys list
- Admin
- User
- Employee
## Use cases descripcions
### UC 01-Sign up:
#### Agencys
- User
#### CF:
1. The system provides a Sing Up Form
2. The user fills the form with your data
3. The system validates the form data
4. The data will be saved
5. The user return status 200
#### Alternative fluxes
##### AFC1 - Route Alteracion:
###### AF1- Return to main page
1. The system provides a Sing Up Form.
2. The system provides a button to return to main page.
3. The user click in that button.
4. The system return to main page.
###### AF2 - Go to login page
1. The system provides a Sing Up Form.
2. The system provides a button to go to Login page
3. The user click in the button
4. The system go to login page
##### AFC2 - Data incorrect:
###### AF1- Incompleted data
1. The system provides a Sing Up Form
2. The user doesn't fill the form with all of your data
3. The system validates the form data
4. The system return that is data missing
###### AF2- Incorrect Data
1. The system provides a Sing Up Form
2. The user doesn't fill the form with all of your data
3. The system validates the form data
4. The system return that is data wrong
###### AF3 - Terms and condicions not acepted
1. The system provides a Sing Up Form
2. The user doesn't fill the form with all of your data
3. The system validates the form data
4. The system returns the terms and condicions weren't acepted.
### UC 02-Login
#### Agencys
- User
#### CF:
1. The system provides a login form
2. The user fills the form with your data
3. The system validates the form data
4. The data will be saved
5. The user return status 200
##### AFC1 - Route Alteracion:
###### AF1- Return to main page
1. The system provides a login form.
2. The system provides a button to return to main page.
3. The user click in that button.
4. The system return to main page.
###### AF2 - Go to login page
1. The system provides a login form.
2. The system provides a button to go to singup page
3. The user click in the button
4. The system go to singup page
##### AFC2 - Data incorrect:
###### AF1- Incompleted data
1. The system provides a login Form
2. The user doesn't fill the form with all of your data
3. The system validates the form data
4. The system return that is data missing
###### AF2- Incorrect Data
1. The system provides a login Form
2. The user doesn't fill the form with all of your data
3. The system validates the form data
4. The system return that is data wrong
###### AF3 - Terms and condicions not acepted
1. The system provides a login Form
2. The user doesn't fill the form with all of your data
3. The system validates the form data
4. The system returns the terms and condicions weren't acepted.