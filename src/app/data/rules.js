export const rules = [
    {
    'rule':'must contain at least 5 letters',
    'answers':'/(?=.{5,})/g',
    'add':false,
    'done':false,
},
{
    'rule':'must contain 2 capital letter',
    'answers':[''],
    'add':false,
    'done':false,
},
{
    'rule':'must contain at least 2 numbers',
    'answers':[0-9],
    'add':false,
    'done':false,
},
{
    'rule':'must contain a square root of 81',
    'answers':[9],
    'add':false,
    'done':false,
},
{
    'rule':'must contain perodic symbol of two main elements in the air',
    'add':false,
    'answers':['N', 'O']
},
{
    'rule':"must contain einstein's famous energy equation",
    'answers':['e=mc2'],
    'add':false,
    'done':false,
},
{
    'rule':'must contain atomic mass of the element that make up diamond (rounded to the nearest tenth)',
    'answers':[12],
    'add':false,
    'done':false,
},
{
    'rule':'must contain a number in the citric acid pH range',
    'answers':[3-6],
    'add':false,
    'done':false,
},
{
    'rule':'numbers must add up to 32',
    'answers':[32],
    'add':false,
    'done':false,
}
];
