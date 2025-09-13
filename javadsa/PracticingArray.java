import java.util.Scanner;
public class PracticingArray {
    public static void main(String[] args)
    {
        
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter size of array : ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("enter Array values: ");
        for(int i=0;i<n;i++)
        {
            int num = sc.nextInt();
            arr[i] = num;
         }

         for(int i =0;i<n;i++)
         {
            System.out.print(arr[i] + " ");
         }
    System.out.println();

    int max = 0;
    for(int i = 0;i<n;i++)
    {
        if(max<arr[i])
        {
            max = arr[i];
        }
    }

    int min = arr[0];
    for(int i = 1;i<n;i++)
    {
        if(min>arr[i])
        {
            min = arr[i];
        }
    }

    System.out.println("Max number is : "+max);
    System.out.println("Min number is : "+min);

    System.out.println("Enter the number check if it exist in Array or not : ");
    int find = sc.nextInt();
    Boolean b=false;
    for(int i =0 ;i<n;i++)
    {
        if(arr[i] == find)
        {
            b = true;
            break;
        }
    }

    if(b)
    {
        System.out.println("Given Number Exist  in array ");
    }
    else
    {
        System.out.println("Given Number Does not exist ");
    }
    
    sc.close();

    }

}
