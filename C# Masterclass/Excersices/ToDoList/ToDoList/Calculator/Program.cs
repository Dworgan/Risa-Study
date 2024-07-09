Console.WriteLine("Hello!");
int _result;
int _firstInput;
int _lastInput;
string _choice;

Console.WriteLine("Input the first number:");
_firstInput = int.Parse(Console.ReadLine());
Console.WriteLine("Input the Second number:");
_lastInput = int.Parse(Console.ReadLine());

Console.WriteLine("What do you want to  do?");
Console.WriteLine("[A]dd numbers");
Console.WriteLine("[S]ubstract numbers");
Console.WriteLine("[M]ultiply numbers");

_choice = Console.ReadLine();

if(_choice == "a" || _choice == "A" )
{
    Console.WriteLine(_firstInput + " + " + _lastInput + " = " + (_firstInput + _lastInput));
}
else if (_choice == "s" || _choice == "S")
{
    Console.WriteLine(_firstInput + " - " + _lastInput + " = " + (_firstInput + _lastInput));
}
else if (_choice == "m" || _choice == "M")
{
    Console.WriteLine(_firstInput + " * " + _lastInput + " = " + (_firstInput + _lastInput));
}
else
{
    Console.WriteLine("Wrong type selected");
}

int a = 4, b= 5, c = 6;
Console.WriteLine(
        $"First is: {a}, second is {b}");

Console.WriteLine("Press any key to Exit");

Console.ReadKey();