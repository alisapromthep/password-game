export const rules = [
    {'id':1,
    'rule':'must contain at least 5 letters',
    'answers':'(?=.{5,})',
    'add':false,
    'done':false,
},
{
    'id':2,
    'rule':'must contain 2 capital letter',
    'answers':'(.*[A-Z].*[A-Z])',
    'add':false,
    'done':false,
},
{
    'id':3,
    'rule':'must contain at least 2 numbers',
    'answers':'(.*[0-9]+.*[0-9]+)',
    'add':false,
    'done':false,
},
{
    'id':4,
    'rule':'must contain a square root of 81',
    'answers':[9],
    'add':false,
    'done':false,
},
{
    'id':5,
    'rule':'must contain perodic symbol of two main elements in the air',
    'add':false,
    'answers':['N', 'O']
},
{
    'id':6,
    'rule':"must contain einstein's famous energy equation",
    'answers':['e=mc2'],
    'add':false,
    'done':false,
},
{
    'id':7,
    'rule':'must contain atomic mass of the element that make up diamond (rounded to the nearest tenth)',
    'answers':[12],
    'add':false,
    'done':false,
},
{
    'id':8,
    'rule':'must contain a number in the citric acid pH range',
    'answers':[3-6],
    'add':false,
    'done':false,
},
{
    'id':9,
    'rule':'numbers must add up to 32',
    'answers':[32],
    'add':false,
    'done':false,
}
];
