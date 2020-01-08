const math = require('mathjs')
const { prefix } = require('../config/config.js')
const types = ['evaluate','simplify','transform']
module.exports = {
  name:'math',
  args:true,
  description:'a calculator',
  cooldown:1.5,
  aliases:['calc','calculator'],
  usage:'<evaluate|simplify|transform> <expression>',
  info:`How to write expressions: https://mathjs.org/docs/expressions/syntax.html
evalulate : a simple calculator
simplify : simplify algebraic expressions
transforom: rationalize
`,
  execute:(message,args) => { 
    if (!types.includes(args[0])) return message.reply('Invalid argument given \n Usage:'+`${prefix}math${module.exports.usage}`)
    try {
    const result = math[args[0]](args.slice(1).join(" "))
       message.channel.send(result,{code:'xl'})
    } catch (error) {
    message.channel.send(`${error.name}:${error.message}`,{code:'xl'})
  }
 }
}
