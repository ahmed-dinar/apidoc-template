/**
 * @apiDefine successResponse
 * @apiSuccess (200) {String} id User Id
 * @apiSuccess (200) {String} name User full name
 * @apiSuccess (200) {String} username User full username
 * @apiSuccess (200) {String} userGroup Group this user belongs to
 */

/**
 * @apiDefine successExample
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "id": '5c444e1387e95374633c1e0d',
 *   "name": "Jhon Snow",
 *   "userGroup": "User",
 *   "username": "i_know_nothing"
 * }
 */

/**
 * @apiDefine errorExample
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 409 Conflict
 * {
 *   message: "Username already exists"
 * }
 */


/**
 *
 * @api {POST} /api/account/create Create an account
 * @apiName Create an account
 * @apiDescription An admin can create an account
 * @apiGroup Account
 * @apiVersion 1.0.0
 * @apiPermission POST-createAccount
 *
 * @apiHeader {String} Authorization Admin JWT key
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer thisisjwttokenshouldbeonger"
 *     }
 *
 * @apiParam (Body) {String} name User full name
 * @apiParam (Body) {String{6..20}} username Username for login
 * @apiParam (Body) {String} [password] If not provided will be auto generated
 * @apiParam (Body) {String="User", "Admin", "Moderator"} [userGroup="User"] User group the user belongs to
 * 
 * @apiExample {curl} curl
 *   curl -X POST /api/account/create \
 *        -H "Authorization: Bearer thisisjwttokenshouldbeonger" \
 *        -d '{"name":"Jhon Snow", "username":"i_know_nothing"}'
 * 
 * @apiExample {node.js} node.js
 *   const axios = require('axios');
 *   try {
 *      const response = await axios({
 *        method: 'POST',
 *        url: '/api/account/create',
 *        headers: {
 *           'Authorization': 'Bearer thisisjwttokenshouldbeonger'
 *        },
 *        data: {
 *          'name': 'Jhon Snow',
 *          'username': 'i_know_nothing'
 *        }
 *     });
 *     console.log('User created: ', response);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * 
 * @apiUse successResponse
 * @apiUse successExample
 *
 * @apiError {Object} error Error response
 * @apiUse errorExample
 *
 */


/**
 *
 * @api {PUT} /api/account/:id Update an account
 * @apiName Update an account
 * @apiDescription An admin can update account
 * @apiGroup Account
 * @apiVersion 1.0.0
 * @apiPermission PUT-updateAccount
 *
 * @apiHeader {String} Authorization Admin JWT key
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer thisisjwttokenshouldbeonger"
 *     }
 *
 * @apiParam (Body) {String} [name] User full name
 * @apiParam (Body) {String="User", "Admin", "Moderator"} [userGroup] User group the user belongs to
 * 
 * @apiExample {curl} curl
 *   curl -X PUT /api/account/5c444e1387e95374633c1e0d \
 *        -H "Authorization: Bearer thisisjwttokenshouldbeonger" \
 *        -d '{"name":"I am Snow"}'
 * 
 * @apiExample {node.js} node.js
 *   const axios = require('axios');
 *   try {
 *      const response = await axios({
 *        method: 'PUT',
 *        url: '/api/account/5c444e1387e95374633c1e0d',
 *        headers: {
 *           'Authorization': 'Bearer thisisjwttokenshouldbeonger'
 *        },
 *        data: {
 *          'name': 'I am Snow'
 *        }
 *     });
 *     console.log('User created: ', response);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * 
 * @apiUse successResponse
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "id": '5c444e1387e95374633c1e0d',
 *   "name": "I am Snow",
 *   "userGroup": "User",
 *   "username": "i_know_nothing"
 * }
 *
 * @apiError {Object} error Error response
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 404 Notfound
 * {
 *   message: "No account found"
 * }
 *
 */


/**
 *
 * @api {DELETE} /api/account/:id DELETE an account
 * @apiName DELETE an account
 * @apiDescription An admin can delete account
 * @apiGroup Account
 * @apiVersion 1.0.0
 * @apiPermission DELETE-deleteAccount
 *
 * @apiHeader {String} Authorization Admin JWT key
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer thisisjwttokenshouldbeonger"
 *     }
 * 
 * @apiExample {curl} curl
 *   curl -X DELETE /api/account/5c444e1387e95374633c1e0d \
 *        -H "Authorization: Bearer thisisjwttokenshouldbeonger" \
 * 
 * @apiExample {node.js} node.js
 *   const axios = require('axios');
 *   try {
 *      const response = await axios({
 *        method: 'DELETE',
 *        url: '/api/account/5c444e1387e95374633c1e0d',
 *        headers: {
 *           'Authorization': 'Bearer thisisjwttokenshouldbeonger'
 *        }
 *     });
 *     console.log('User created: ', response);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "message": 'Successfuly deleted'
 * }
 *
 * @apiError {Object} error Error response
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 404 Notfound
 * {
 *   message: "No account found"
 * }
 */



/**
 *
 * @api {GET} /api/account/:id Get an account
 * @apiName Get an account
 * @apiDescription An admin can get an account
 * @apiGroup Account
 * @apiVersion 1.0.0
 * @apiPermission GET-getAccount
 *
 * @apiHeader {String} Authorization Admin JWT key
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer thisisjwttokenshouldbeonger"
 *     }
 * 
 * @apiExample {curl} curl
 *   curl -X GET /api/account/:id \
 *        -H "Authorization: Bearer thisisjwttokenshouldbeonger" \
 * 
 * @apiExample {node.js} node.js
 *   const axios = require('axios');
 *   try {
 *      const response = await axios({
 *        method: 'GET',
 *        url: '/api/account/:id',
 *        headers: {
 *           'Authorization': 'Bearer thisisjwttokenshouldbeonger'
 *        }
 *     });
 *     console.log('User created: ', response);
 *   } catch (error) {
 *     console.error(error);
 *   }
 *
 * @apiUse successResponse
 * @apiUse successExample
 *
 * @apiError {Object} error Error response
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 404 Notfound
 * {
 *   message: "No account found"
 * }
 */



/**
 *
 * @api {PATCH} /api/account/:id Patch Update an account
 * @apiName Patch Update an account
 * @apiDescription An admin can update account
 * @apiGroup Account
 * @apiVersion 1.0.0
 * @apiPermission PUT-updateFullAccount
 */

/**
 *
 * @api {HEAD} /api/account/:id Account head info
 * @apiName Account head info
 * @apiDescription An admin can update account
 * @apiGroup Account
 * @apiVersion 1.0.0
 */


/**
 *
 * @api {OPTIONS} /api/account/:id Just a options demo
 * @apiName Just a options demo
 * @apiDescription An admin can update account
 * @apiGroup Account
 * @apiVersion 1.0.0
 */



/**
 *
 * @api {POST} /api/user Register user
 * @apiName Register user
 * @apiDescription User registration
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam (Body) {String} [firstname]  Optional Firstname of the User.
 * @apiParam (Body) {String} lastname Mandatory Lastname.
 * @apiParam (Body) {String} username Mandatory username.
 * @apiParam (Body) {String} password Mandatory password.
 * @apiParam (Body) {String} email Mandatory email.
 * @apiParam (Body) {String} country="BD" Mandatory with default value "BD".
 * @apiParam {Number} [age=18] Optional Age with default 18.
 * 
 * @apiSuccess (200) {String} firstname Firstname of the User.
 * @apiSuccess (200) {String} lastname Lastname.
 * @apiSuccess (200) {String} username username.
 * @apiSuccess (200) {Object} email info.
 * @apiSuccess (200) {String} email.address email address.
 * @apiSuccess (200) {Object} email.verified Email verification info
 * @apiSuccess (200) {String} email.verified.expire Sent link expire date
 * @apiSuccess (200) {Boolean} email.verified.value Already verified or not
 * @apiSuccess (200) {String} country User country code
 * @apiSuccess (200) {Number} age User age
 *
 * @apiError {Object} error Error response
 *
 */

/**
 *
 * @api {POST} /api/array Just an array of object
 * @apiName Just an array of object
 * @apiDescription Just an array of object test
 * @apiGroup Test
 * @apiVersion 1.0.0
 *
 * @apiSuccess (200) {Array} cars List of car manufacturers
 * @apiSuccess (200) {String} cars.manufacturer Name of car manufacturers
 * @apiSuccess (200) {String} cars.logo Logo of car manufacturers
 *
 * @apiError {Object} error Error response
 *
 */


