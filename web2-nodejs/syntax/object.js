var members = ['egoing', 'k8805', 'hoya']
console.log(members[1])
var i = 0;
while(i<members.length){
  console.log('array loop',members[i])
  i++;
}

var roles = {
  'programmer': 'egoing',
  'designer': 'k8805',
  'manager': 'hoya'
}

console.log(roles['programmer'])

for(var name in roles){
    console.log('object =>', name,', object value =>', roles[name])
}