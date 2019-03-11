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
 * @apiPermission createUser
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