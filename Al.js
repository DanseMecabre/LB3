//Переменные
var admin, name;
name = 'Василий';
admin = name;
alert(admin);
//Функции
function calcD(a, b, c) 
{
    return b*b - 4*a*c;
}
    var test = calcD(-2, 5, 3);
    alert(test);
//Индивидуальное задание 1.1
var a,b;
a = prompt('Введите первое число?');
a = parseInt(a);
b = prompt('Введите второе число?');
b = parseInt(b);
if (a < b) 
{
    alert("Наименьшее число = "+ a)
} 
else 
{
    alert("Наименьшее число = "+ b)
}
//Взаимодействие с пользователем
if (confirm("Доброго времени суток, у этой страницы есть к вам вопрос,вы готовы ответить?"))
{
var name1 = prompt('Как вас зовут?','Введите сюда ваше имя');
alert("Ваше имя - "+name1)
}
alert("Спасибо, что уделилили время")
//Индивидуальное задание 1.3
do 
{
    var age = prompt('Сколько вам лет?','Введите ваш возраст сюда');
} 
while(!confirm("Вы уверены что вам "+ age +"?"))
