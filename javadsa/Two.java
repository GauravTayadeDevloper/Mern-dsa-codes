import java.util.Scanner;

public class Two {
    public static void main(String[] args)
    {

        for(int i=0;i<=5;i++)
        {
            for(int j = 0; j<=i;j++)
            {
                System.out.print(j);
            }
            System.out.println();
        }
    
    
    for(int i = 5; i>=0;i--)
    {
        for(int j = 0;j<=i;j++)
        {
            System.out.print(j);
        }
        System.out.println();
    }

    Scanner sc = new Scanner(System.in);

    System.out.println("enter no for factoria: ");
    int num = sc.nextInt();

    int fact =1;
    for(int i = 1;i<=num;i++)
    {
        fact = fact * i;
    }

    System.out.println(fact);
    
    }    

    sc.close();


}
