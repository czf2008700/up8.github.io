import './main.css' // 载入 main.css
import * as mdl from './module'

document.write('这里是入口<br/><br/>');

var person = {
	age: mdl.add(10, 20),
	getName: mdl.setName('Felix Cao')
};
document.write(`姓名： ${person.getName}<br>`);
document.write(`年龄： ${person.age}`);