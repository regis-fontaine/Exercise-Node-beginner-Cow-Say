const information = require("./information");
const cowsay = require("cowsay");
let message = `Hello I'm ${information.user.name} from ${information.user.campus} Campus !`;

cowsay.say({
  T: 'U ',
  e:'oO',
  text: message, 
});