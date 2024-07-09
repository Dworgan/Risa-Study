

int[] tNumber = new int[] { 10, -2, -12, 3, 5 };
int _nonPositiveNmbrs;
List<int> _positiveNmbrList = GetOnlyPositiveNumbers(tNumber, out _nonPositiveNmbrs);
foreach(int nmbr in _positiveNmbrList)
{
    Console.WriteLine(nmbr);
}
Console.WriteLine("Total of negative numbers = "+ _nonPositiveNmbrs);

Console.ReadKey();

List<int> GetOnlyPositiveNumbers(int[] tNumber, out int nonPositiveNmbrs)
{
    nonPositiveNmbrs = 0;
    List<int> result = new List<int>();
    for (int i = 0; i < tNumber.Length; i++)
    {
        if (tNumber[i] > 0)
        {
            result.Add(tNumber[i]);
        }
        else
        {
            nonPositiveNmbrs++;
        }
    }
    return result;
}